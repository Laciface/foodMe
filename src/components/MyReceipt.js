import React, { useState, useContext } from 'react';
import { FoodContext } from './FoodContext';
import FoodDeatails from './FoodDetails'

const MyReceipt = () => {
    const [foods, setFoods] = useContext(FoodContext);


    return (
		<div>
            {foods.meals.map(meal => (
                <FoodDeatails id={meal.idMeal}/>))}
		</div>
	);
}

export default MyReceipt;