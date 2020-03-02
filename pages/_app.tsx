import App from "next/app";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import "../styles/normalize.css";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>My page title</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Description" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          {/* <meta name="theme-color" content="" /> */}
          {/* <link
            rel="icon"
            type="image/svg+xml"
            href="/static/favicon/favicon.svg"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon/favicon.png"
          />
          <link rel="apple-touch-icon" href="/static/favicon/favicon.png" />
          */}
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicon/favicon.ico"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
