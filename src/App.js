import './App.css';
import React from 'react';
import { FoodProvider } from './components/FoodContext';
import Categories from './components/Categories'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HomePage from './components/HomePage'
import FoodList from './components/FoodList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoodDetails from './components/FoodDetails';
import ResultList from './components/ResultList';
import MyReceipt from './components/MyReceipt';
import Registration from './components/Registration';
import Login from './components/Login'
import SlideShow from './components/SlideShow';
import Youtube from './components/Youtube';


function App(){
    return (
      <FoodProvider>
        <Router>
        <div className="App" style={{position: 'relative', minHeight: '100vh'}}>
          <div style={{paddingBottom: '3.5rem'}}>
          <Header/>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Registration' component={Registration}></Route>
          <Route exact path='/Login' component={Login}></Route>
          <Route exact path='/Categories' component={Categories}></Route>
          <Route exact path={'/Categories/:category'}><FoodList/></Route>
          <Route exact path={'/FoodDetails/:id'}><FoodDetails/></Route>
          <Route exact path={'/Search/:search'}><ResultList/></Route>
          <Route exact path={'/MyReceipt'}><MyReceipt/></Route>
          <Route exact path={'/SlideShow'}><SlideShow/></Route>
          <Route exact path={'/Youtube'}><Youtube/></Route>
          <Footer/>
          </div>
        </div>
        </Router>
      </FoodProvider>
    );
}

export default App;
