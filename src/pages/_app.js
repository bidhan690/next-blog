import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'

import Layout from '../components/layouts/Layout'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel='icon' href='/images/site/pp.png' ></link>
    <title>BIDHAN BLOG</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'  />
    <meta name='description' content='I post about programming and web development'  />
    <meta property="og:image" content="/images/site/pp.png" />
   
    </Head>

    <NextNProgress color="#96DED1" stopDelayMs={0.1} height={1.5} options={{ showSpinner: false  }}/>

      <Layout>
      <Component {...pageProps} />
      <Analytics />
  </Layout>
    </>

  )
}
