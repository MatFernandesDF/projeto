import React from 'react'
import  '../styles/globals.scss'
import{AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style-login.scss';

 function Myapp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default Myapp