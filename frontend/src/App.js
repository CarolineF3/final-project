import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";

import Cart from "./components/Cart";
import HamburgerNav from "./components/HamburgerNav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const open = useSelector((store) => store.ui.openCart);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <HamburgerNav />
      <Cart />
      <main>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/products/:id'>
            <Details />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
