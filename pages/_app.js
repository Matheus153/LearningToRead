import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Passos para começar a gostar de ler</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
