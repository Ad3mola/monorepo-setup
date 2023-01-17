// import './main.css';

import { GlobalStyle, MediaQueryProvider, ModalProvider, theme } from 'global-ui';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

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
