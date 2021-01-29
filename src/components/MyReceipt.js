import React, { useState, useContext } from 'react';
import { FoodContext } from './FoodContext';
import FoodDeatails from './FoodDetails';
import Navbar from '../layouts/Navbar';

const MyReceipt = () => {
    const [foods, setFoods] = useContext(FoodContext);

    return (
      <React.Fragment>
      <Navbar/>
        <div>
          {foods.meals.map(meal => (
              <FoodDeatails id={meal.idMeal}/>))}
        </div>
      </React.Fragment>
	);
}

export default MyReceipt;