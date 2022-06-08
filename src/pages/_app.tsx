import '../styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '~/layouts'
import { RecoilRoot } from 'recoil'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
