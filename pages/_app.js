import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Index from "./index";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Wrapper({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
