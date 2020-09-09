import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';
import './custom.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:guid" component={ProductDetail} />
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route component={Notfound} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
