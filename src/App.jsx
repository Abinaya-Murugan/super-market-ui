import React, { Component } from "react";
import NavBar from "./NavBar";
import Category from "./Category";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div style={{ flex: '1', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products/:categoryName" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}
