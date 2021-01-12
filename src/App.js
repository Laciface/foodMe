import './App.css';
import React from 'react';
import { FoodProvider } from './components/FoodContext';
import Categories from './components/Categories'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

function App(){
  
    return (
      <FoodProvider>
        <div className="App">
          <Header/>
          <Navbar/>
          <Categories/>
          <Footer/>
        </div>
      </FoodProvider>
    );
}

export default App;
