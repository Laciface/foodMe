import './App.css';
import React from 'react';
import { FoodProvider } from './components/FoodContext';
import Categories from './components/Categories'

function App(){
  
    return (
      <FoodProvider>
        <div className="App">
          <Categories/>
        </div>
      </FoodProvider>
    );
}

export default App;
