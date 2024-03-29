import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Navigation/Header'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Head from 'next/head';
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
  const [ token, setToken ] = useState<string | null>(null);

  useEffect(() => {
    const _token: string | null = localStorage.getItem("htc-token");
    setToken(_token);
  }, []);
  
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },

        pageAnimate: {
          opacity: 1
        }
      }}> 
        <Head>
          <title>Healthcare</title>
        </Head>

        <div className="relative container mx-auto p-6 items-center">
          <Header />  
          <Component {...pageProps} />
        </div>

    </motion.div>
  );
}

export default MyApp
