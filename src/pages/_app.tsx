import Layout from "@/components/Layout";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 200,
    });
    return () => {};
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
