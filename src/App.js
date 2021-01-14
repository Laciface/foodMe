import './App.css';
import React from 'react';
import { FoodProvider } from './components/FoodContext';
import Categories from './components/Categories'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import HomePage from './components/HomePage'
import FoodList from './components/FoodList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoodDetails from './components/FoodDetails'



function App(){
    return (
      <FoodProvider>
        <Router>
        <div className="App" style={{position: 'relative', minHeight: '100vh'}}>
          <div style={{paddingBottom: '3.5rem'}}>
          <Header/>
          <Navbar/>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Categories' component={Categories} />
          <Route exact path={'/Categories/:category'}><FoodList/></Route>
          <Route exact path={'/Categories/FoodDetails/:id'}><FoodDetails/></Route>
          <Footer/>
          </div>
        </div>
        </Router>
      </FoodProvider>
    );
}

export default App;
