# Next.js + TypeScript monorepo for Admin and User

### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app
- `user`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `user` and `admin` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Features/Utilities

- TypeScript
- ESlint, Prettier, Stylelint
- Styled-Components
- Storybook

## Structure

```raw
.
├── .husky/                           Precommit workflow
├── .apps/                            Precommit workflow
│   ├── admin/                        The admin app
│   │   ├── public/                           Static content to serve
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │    ├── _app.tsx                 React UI wrapper, equivalent to "App.js" in CRA
│   │   │   │    ├── _document.tsx            NextJS wrapper, provides raw HTML used in SSR
│   │   │   │    └── *                        Page components, routing is based on file tree
│   │   │   ├── styles/
│   │   │   │    ├── global.ts                Global Styles
│   │   │   │    └── theme.ts                 Setup Styled-Components theme
│   │   │   ├── ui/                           Reusable stateless components based on Styled-Components with story and jest test, in 3 different subfolders
│   │   │   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │   │   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │   │   │    └── widgets                  Wdigets consume a set of components can be something larger, lives in pages.
│   │   │   └── utils/                        Common client side tools
│   │   │   └── .eslintrc                     Linter config
│   │   │   └── .prettierrc                   Prettier config
│   │   │   └── package.json                  Application manifest
│   │   │   └── .tsconfig.json                Typescript config
│   ├── user/                                 The user app
│   │   ├── public/                           Static content to serve
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │    ├── _app.tsx                 React UI wrapper, equivalent to "App.js" in CRA
│   │   │   │    ├── _document.tsx            NextJS wrapper, provides raw HTML used in SSR
│   │   │   │    └── *                        Page components, routing is based on file tree
│   │   │   ├── styles/
│   │   │   │    ├── global.ts                Global Styles
│   │   │   │    └── theme.ts                 Setup Styled-Components theme
│   │   │   ├── ui/                           Reusable stateless components based on Styled-Components with story and jest test, in 3 different subfolders
│   │   │   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │   │   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │   │   │    └── widgets                  Wdigets consume a set of components can be something larger, lives in pages.
│   │   │   └── utils/                        Common client side tools
│   │   │   └── .eslintrc                     Linter config
│   │   │   └── .prettierrc                   Prettier config
│   │   │   └── package.json                  Application manifest
│   │   │   └── .tsconfig.json                Typescript config
├── packages/
│   ├── eslint-config-custom          Contains base global eslint configurations
│   ├── tsconfig                      Cotains base global typescript configurations
│   ├── styles/
│   │    ├── global.ts                Global Styles (This can be used in place of the one present in each app to have a global theme)
│   │    └── theme.ts                 Setup Styled-Components theme
│   ├── global-ui/                           Reusable components based on Styled-Components in 3 different subfolders
│   │    ├── atoms                    Atom components like Button, Image, Link, Tooltip etc
│   │    ├── components               Card, Hero, Gallery etc, which consume a set of atom components.
│   │    └── widgets                  Wdigets consume a set of components can be something larger, lives
│   └── utils/                        Common client side tools
├── .eslintrc                         Linter config
├── .prettierrc                       Prettier config
└── package.json                      Application manifest
└── turbo.json                        This is useful for busting the cache based on . env files (not in Git) or any root level file that impacts workspace tasks
```

### Create New UI Component

Run the the following command will create the new ui component in `packages/components` folder:

```shell
cd deelaa
yarn run create

> deelaa@0.0.0 create /Users/{user}/workspace/emce/deelaa
> node scripts/create-package/create-package.js

? What type of package do you want to create? (Use arrow keys)
❯ ui <-- select ui here
  utils

? What whould you like to name your package?  header <-- enter component name here
```

### Create New Shared Utils Package

Run the the following command will create the new shared utils component in `packages` folder:

```shell
cd deelaa
yarn run create

> deelaa@0.0.0 create /Users/{user}/workspace/emce/deelaa
> node scripts/create-package/create-package.js

? What type of package do you want to create? (Use arrow keys)
  ui
❯ utils <-- select utils here

? What whould you like to name your package?  services <-- enter component name here
```

## Development

```shell
yarn install

# start dev mode
yarn dev
```

## Test, Lint and Type checking

```shell
# run unit test
yarn test

# run type check
yarn type-check

# run eslint
yarn lint
```

## Run storybook

```
yarn storybook
```

## Build for Production

```shell
yarn build
yarn start
```

## Theme

The theme is based on mobile first and defined in src/styles/theme.ts file. Open the file to check the details. The theme has few media query helper functions:

- theme.media.small
- theme.media.medium
- theme.media.large
- theme.media.up
- theme.media.down
- theme.media.between

Usage example:

```javascript
const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.orange};
  ${({
    theme: {
      colors,
      media: { small }
    }
  }) => small`
        color: ${colors.blue};
    `}
`;

const Box = styled.div`
  background: ${({ theme: { colors } }) => colors.white};

  ${({ theme: { breakpoints, colors, media } }) => media.down(breakpoints[1])`
        background: ${colors.orange};
    `}

  ${({ theme: { breakpoints, colors, media } }) => media.between(breakpoints[1], breakpoints[2])`
        background: ${colors.green};
    `}

    ${({ theme: { breakpoints, media } }) => media.up(breakpoints[2])`
        background: ${colors.blue};
    `}
`;
```
