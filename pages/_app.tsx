import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // providers, layouts, themes, data, props

  return <Component {...pageProps} />;
}

export default MyApp;
