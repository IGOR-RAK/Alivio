// import { FC, ReactNode } from "react";
 import Header from "./Header";
 import Footer from "./Footer";
import Head from 'next/head'




const Layout = ({ children }) => (
  <>
    <Head>
      
      <link
        rel="preload"
        href="/fonts/Lato/Lato-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Lato/Lato-Medium.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Lato/Lato-Semibold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Georgia/Georgia.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Georgia/Georgia-Bold.ttf"
        as="font"
        crossOrigin=""
      />
     
   
    <title>Alvio</title> 
  </Head>
  
    <Header />
    
       {children}
    
    <Footer />
  </>
);

export default Layout;