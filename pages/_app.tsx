import React,{ Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

import ModalManager from "../common/components/modal/components/ModalManager";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Fragment>
        <Head>
          <title>Collaboard</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ToastContainer/>
        <ModalManager/>
        <Component {...pageProps} />
      </Fragment>
    </RecoilRoot>
  );
}

export default MyApp;
