// import './main.css';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, MediaQueryProvider, ModalProvider, theme } from 'ui';

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
