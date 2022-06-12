import Head from "next/head";
import React from "react";

function Header() {
  return (
    <Head>
      <title>GreenUrbanNFT</title>
      <link rel="shortcut icon" href="/leaf.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}

export default Header;
