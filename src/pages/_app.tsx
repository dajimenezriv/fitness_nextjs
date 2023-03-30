import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import Layout from '@/components/layout';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fitness</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(App);
