import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from 'components/common/header'
import MainBody from 'components/main-body'
import Footer from 'components/common/footer'
import { APP_TITLE, APP_DESCRIPTION, APP_AUTHOR } from 'lib/constants'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="author" content={APP_AUTHOR} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainBody />
      <Footer />
    </div >
  )
}

export default Home
