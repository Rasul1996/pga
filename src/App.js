import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {HomePage} from "./pages/home";
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import {About} from './pages/about';
import {ContactPage} from './pages/contacts';
import {ProductPage} from './pages/products';
import BlogPage from './pages/blog';



function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
            <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={ContactPage} />
            <Route exact path='/products' component={ProductPage} />
            <Route exact path='/blog' component={BlogPage} />
            </Switch>
        </Router>
      </ThemeProvider>
  );
}



export default App;
