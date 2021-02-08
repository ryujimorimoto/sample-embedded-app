import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import { Provider } from '@shopify/app-bridge-react';
import ClientRouter from '../components/ClientRouter';

class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    const config = { apiKey: "1c63fb0220e51aaa0168de94adfabb19", shopOrigin, forceRedirect: true };
console.log(shopOrigin)
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}
MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: "xn-eeuway0cad4fuavbe0ora14a.myshopify.com",
  }
}
export default MyApp;