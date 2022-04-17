import React, { useEffect } from 'react';
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
