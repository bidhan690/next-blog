import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layouts/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel='icon' href='/images/site/pp.png' ></link>
    <title>BIDHAN BLOG</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'  />
    <meta name='description' content='I post about programming and web development'  />
    <meta property="og:image" content="/images/site/pp.png" />
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9623403163189751"
     crossorigin="anonymous" />
    </Head>
      <Layout>
      <Component {...pageProps} />
      <Analytics />
  </Layout>
    </>

  )
}
