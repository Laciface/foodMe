import React, { useState, useContext } from 'react';
import { FoodContext } from '../FoodItems/FoodContext';
import FoodDeatails from '../FoodItems/FoodDetails';
import Navbar from '../../layouts/Navbar';

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