import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Article from "parts/Article";
import Products from "parts/products/Index";

import dataProducts from "json/products.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <header className="header pt-4 mb-10">
          <section className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </section>
        </header>

        <section className="container mx-auto mb-10">
          <Article></Article>
        </section>

        <section className="container mx-auto">
          <div className="flex flex-wrap justify-items-start items-center -mx-2">
            <Products data={dataProducts.product}></Products>
          </div>
        </section>
      </>
    );
  }
}
