import { AppProps } from "next/app";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // providers, layouts, themes, data, props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
