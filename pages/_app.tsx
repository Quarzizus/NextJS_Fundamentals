import { AppProps, NextWebVitalsMetric } from "next/app";
import { Layout } from "../components/Layout";
import "../main.css";

export const reportWebVitals = (metrics: NextWebVitalsMetric) => {
  console.log(metrics);
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // providers, layouts, themes, data, props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
