import '@/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import NavbarLayout from '@/components/layout/navbar';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const { store } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => (
    <NavbarLayout>
      {page}
    </NavbarLayout>
  ));

  return (
    <>
      <Head>
        <title>Fitness</title>
      </Head>

      <SessionProvider session={session}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </SessionProvider >
    </>
  )
}
