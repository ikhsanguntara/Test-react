import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Article from "parts/Article";
import Products from "parts/products/Index";

import dataProducts from "json/products.json";
import dataItem from "json/item.json";

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
          <div className="flex justify-between items-center mb-5">
            <div className="product font-bold">
              <h3>Product</h3>
              <p className="subtitle red">What we can do for you</p>
            </div>
            <button className="border border-red-500 px-6 py-3 rounded-md text-red-500">
              VIEW ALL
            </button>
          </div>
          <div className="flex flex-wrap justify-items-start items-center-mx-2">
            <Products data={dataProducts.product}></Products>
          </div>
        </section>
        <hr className="border-2" />
        <section className="container mx-auto">
          <div className="flex justify-between items-center mb-5">
            <div className="product font-bold">
              <h3>Services</h3>
              <p className="subtitle red">What we can do for you</p>
            </div>
            <button className="border border-red-500 px-6 py-3 rounded-md text-red-500">
              VIEW ALL
            </button>
          </div>
          <div className="flex flex-wrap justify-items-start items-center-mx-2">
            <Products data={dataItem.item}></Products>
          </div>
        </section>
      </>
    );
  }
}
