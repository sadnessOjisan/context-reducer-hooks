import { AppProps } from "next/app";
import Head from "next/head";
import { UserContextProvider } from "../context/userContext";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </>
);

export default App;
