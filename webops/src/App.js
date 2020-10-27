import React,{ useState, useEffect, useContext, Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './pages/HomePage/home'
import BottomSection from './pages/HomePage/BottomSection/bottomsection'
import Footer from './pages/HomePage/Footer/footer'
import Page from './pages/SinglePage/singlepage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Categories from './pages/Categories/categories - Copy.js'
import {PagesProvider} from './pages/Provider/provider'
import NewHeader from './pages/HomePage/Header/styled-components'


class App extends Component {
 
  render() {
    return (
      <PagesProvider>
          <Router>
              <NewHeader/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/page/:id" component={Page}/>
                  <Route path="/category/:id" component={Categories}/>
              </Switch>
         </Router>
        <BottomSection/>
        <Footer/>
        
    </PagesProvider>
    );
  }
}

export default App;