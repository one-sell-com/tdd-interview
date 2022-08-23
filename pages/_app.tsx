import { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType } from "next/types";
import "../styles/globals.css";
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
