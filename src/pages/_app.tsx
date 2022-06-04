import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '~/layouts'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
