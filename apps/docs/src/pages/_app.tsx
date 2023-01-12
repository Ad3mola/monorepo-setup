// import './main.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MediaQueryProvider, ModalProvider, theme } from 'ui';

import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MediaQueryProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </MediaQueryProvider>
      </ThemeProvider>
    </>
  );
}
