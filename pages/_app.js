import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Index from "./index";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Wrapper({ Component, pageProps }) {
  console.log(pageProps);

  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
