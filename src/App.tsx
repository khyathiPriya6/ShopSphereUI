import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Products from "./components/Products";
import { useState } from "react";

import {CartProvider} from "./context/CardContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";


import './App.css'


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="*"
            element={<Navigate to="/products" replace />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;