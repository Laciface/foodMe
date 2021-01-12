import './App.css';
import React from 'react';
import { FoodProvider } from './components/FoodContext';
import Categories from './components/Categories'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
  
    return (
      <FoodProvider>
        <Router>
        <div className="App" style={{position: 'relative', minHeight: '100vh'}}>
          <div style={{paddingBottom: '2.5rem'}}>
          <Header/>
          <Navbar/>
          <Route exact path='/Homepage' component={HomePage} />
          <Route exact path='/Categories' component={Categories} />
          <Footer/>
          </div>
        </div>
        </Router>
      </FoodProvider>
    );
}

export default App;
