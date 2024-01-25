import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import Product from "../../components/product";
import Header from "../../components/header";
import Newarr from "../../components/new";
import Watch from "../../components/Watch";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Header></Header>
        <Newarr></Newarr>
        <Product></Product>
        <Watch></Watch>
      </div>
    </>
  );
}

export default Home;
