import "../styles/global.scss";

import type { AppProps } from "next/app";
import Header from "components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />
    </>
  );
}
