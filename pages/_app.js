import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './../src/theme';
import { GlobalStyle } from './../src/theme/GlobalStyle';
import Head from 'next/head';


// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Instalura - Projeto base</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,800;1,300;1,400;1,900&display=swap" rel="stylesheet" />
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
