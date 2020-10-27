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
import ScrollHeader from './pages/HomePage/Header/scrolledHeader'



export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      this.state.visible?<NewHeader/>:<ScrollHeader/>
    );
  }
}




class App extends Component {
 
  render() {
    return (
      <PagesProvider>
          <Router>
              <Navbar/>
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