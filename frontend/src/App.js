import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
/*import Cart from "./pages/Cart";*/
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
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
            <Route path='/products/:id'>
              <Details />
            </Route>
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
