#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const inquirer = require('inquirer');
const fs = require('fs');
const camel = require('lodash.camelCase');
const mkdirp = require('mkdirp');
const path = require('path');
const nunjunks = require('nunjucks');
const execSync = require('child_process').execSync;
let componentsRoot = path.join('packages', 'global-ui');

// nunjunks.configure(path.join(__dirname, "templates"));
let templateType;
let packageName;

function setTemplateRoot(type) {
  templateType = type === 'utils' ? 'utils' : 'ui';

  if (type === 'atom') {
    componentsRoot = path.join('packages', 'global-ui', 'atoms');
  } else if (type === 'widget') {
    componentsRoot = path.join('packages', 'global-ui', 'widgets');
  } else if (type === 'component') {
    componentsRoot = path.join('packages', 'global-ui', 'components');
  } else {
    componentsRoot = path.join('packages');
  }
  nunjunks.configure(path.join(__dirname, `templates-${type === 'utils' ? 'utils' : 'ui'}`));
}

function onErr(err) {
  console.log(err);
  return 1;
}

function toCamelCase(s) {
  const result = camel(s);
  return result[0].toUpperCase() + result.slice(1);
}

function copyFile(fileName, destination) {
  fs.copyFileSync(
    path.join(__dirname, `templates-${templateType}/${fileName}`),
    path.join(componentsRoot, packageName, destination || fileName)
  );
}

// create ui component
function createPackage(name) {
  const componentName = toCamelCase(name);
  const packageName = name;

  // check if component already exists in current directory
  if (fs.existsSync(path.join(componentsRoot, packageName))) {
    console.error('Component: ' + packageName + ' already exists, aborting!');
    return;
  }

  // make directories
  mkdirp.sync(path.join(componentsRoot, packageName));
  mkdirp.sync(path.join(componentsRoot, packageName, 'src'));
  mkdirp.sync(path.join(componentsRoot, packageName, 'public'));
  mkdirp.sync(path.join(componentsRoot, packageName, 'test'));

  // copy files
  copyFile('.eslintrc.js');
  copyFile('tsconfig.json');
  copyFile('.npmrc');

  copyFile('test/jest.config.js', 'test/jest.config.js');
  copyFile('test/jest.setup.ts', 'test/jest.setup.ts');
  copyFile('test/test-utils.tsx', 'test/test-utils.tsx');

  // render nunjunks
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'rollup.config.js'),
    nunjunks.render('rollup.config.js.njk', { componentName })
  );

  // fs.writeFileSync(
  //   path.join(componentsRoot, packageName, "clean-package.config.json"),
  //   nunjunks.render("clean-package.config.json.njk", {
  //     componentName,
  //     packageName,
  //   })
  // );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'package.json'),
    nunjunks.render('package.json.njk', { componentName, packageName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'README.md'),
    nunjunks.render('README.md.njk', { componentName, packageName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `index.ts`),
    nunjunks.render('index.ts.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `${componentName}.tsx`),
    nunjunks.render('component.tsx.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'jest.tsconfig.json'),
    nunjunks.render('jest.tsconfig.json.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `${componentName}.spec.tsx`),
    nunjunks.render('component.spec.tsx.njk', { componentName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `${componentName}.stories.tsx`),
    nunjunks.render('storybook.stories.ts.njk', { componentName })
  );
}

// create util package
function createUtilPackage(name) {
  const componentName = toCamelCase(name);
  const packageName = name;

  // check if component already exists in current directory
  if (fs.existsSync(path.join(componentsRoot, packageName))) {
    console.error('Util: ' + packageName + ' already exists, aborting!');
    return;
  }

  // make directories
  mkdirp.sync(path.join(componentsRoot, packageName));
  mkdirp.sync(path.join(componentsRoot, packageName, 'src'));
  mkdirp.sync(path.join(componentsRoot, packageName, 'test'));

  // copy files
  copyFile('.eslintrc.js');
  copyFile('tsconfig.json');

  copyFile('test/jest.config.js', 'test/jest.config.js');
  copyFile('test/jest.setup.ts', 'test/jest.setup.ts');

  // render nunjunks
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'rollup.config.js'),
    nunjunks.render('rollup.config.js.njk', { componentName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'package.json'),
    nunjunks.render('package.json.njk', { componentName, packageName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'README.md'),
    nunjunks.render('README.md.njk', { componentName, packageName })
  );

  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `index.ts`),
    nunjunks.render('index.ts.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `${componentName}.ts`),
    nunjunks.render('util.ts.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'src', `${componentName}.spec.ts`),
    nunjunks.render('util.spec.ts.njk', { componentName })
  );
  fs.writeFileSync(
    path.join(componentsRoot, packageName, 'jest.tsconfig.json'),
    nunjunks.render('jest.tsconfig.json.njk', { componentName })
  );
}

function addTSConfigToBase(name) {
  const fileName = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(fileName);
  const referencesCopy = tsConfig.references;

  referencesCopy.push({ path: `./packages/global-ui/${name}` });
  referencesCopy.sort((a, b) => {
    if (a.path < b.path) return -1;
    if (a.path > b.path) return 1;
    return 0;
  });

  tsConfig.references = referencesCopy;
  fs.writeFileSync(fileName, JSON.stringify(tsConfig, null, 2));
}

function promptAndWriteFiles() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of package do you want to create?',
        choices: ['atom', 'component', 'widget', 'utils']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What whould you like to name your package?',
        validate(input) {
          if (/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/i.test(input)) {
            return true;
          }

          throw Error('Invalid format, example: "new-package"');
        }
      }
    ])
    .then((answers) => {
      writeFiles(null, answers);
    })
    .catch((error) => {
      onErr(error);
    });

  function writeFiles(err, result) {
    if (err) {
      return onErr(err);
    }

    packageName = result.name;
    // set template root
    setTemplateRoot(result.type);

    switch (result.type) {
      case 'atom': {
        createPackage(packageName);
        break;
      }
      case 'component': {
        createPackage(packageName);
        break;
      }
      case 'widget': {
        createPackage(packageName);
        break;
      }
      case 'utils': {
        console.log('create');
        createUtilPackage(packageName);
        break;
      }
    }

    // addTSConfigToBase(result.name);

    execSync('yarn install', {
      cwd: process.cwd(),
      stdio: 'inherit'
    });
  }
}

promptAndWriteFiles();
