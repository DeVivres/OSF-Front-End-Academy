import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import CartPage from '../pages/CategoryLandingPage';
import CategoryLandingPage from '../pages/CategoryLandingPage';
import CountDownPage from '../pages/CountdownPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PrintPage from '../pages/PrintPage';
import ProductDetailedPage from '../pages/ProductDetailedPage'


class App extends React.Component {
  render() {
    
    return (   
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/homepage"/>
            </Route>
            <Route path="/cartpage">
              <CartPage />
            </Route>
            <Route path="/categorylandingpage">
              <CategoryLandingPage />
            </Route>
            <Route path="/countdownpage">
              <CountDownPage />
            </Route>
            <Route path="/homepage">
              <HomePage />
            </Route >
            <Route path="/notfoundpage">
              <NotFoundPage />
            </Route>
            <Route path="/printpage">
              <PrintPage />
            </Route>
            <Route path="/productdetailedpage">
              <ProductDetailedPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } 
}
export default App;