import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Cart from "./components/Cart";
import HamburgerNav from "./components/HamburgerNav";
import Header from "./components/Header";
import ItemCategoriesMenu from "./components/ItemCategoriesMenu";
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
      <ItemCategoriesMenu />
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
          <Route exact path='/signin'>
            <SignIn />
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
