import '@/styles/globals.css'

import Head from 'next/head'
import Layout from '../components/layouts/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel='icon' href='/images/site/pp.png' ></link>
    <title>BIDHAN BLOG</title>
    </Head>
    
      <Layout>
<Component {...pageProps} />
  </Layout>
    </>

  )
}
