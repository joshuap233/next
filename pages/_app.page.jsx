import React from 'react';
import {useEffect} from 'react';
import '../style/global.css';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../style/theme';
import Head from "next/head";


export default function MyApp({Component, pageProps}) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
