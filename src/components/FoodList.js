import React, { useState, useEffect} from 'react'
import axios from 'axios'
import FoodItem from './FoodItem'
import { useParams } from 'react-router-dom';


const FoodList = () => {
    
    const [foodList, setFoodList] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
        .then(resp => setFoodList(resp.data.meals))
    }, [category])
    
    return (
        <div>
            {foodList.map( food => (
            <FoodItem 
                name={food.strMeal} 
                picture={food.strMealThumb} 
                key={food.idMeal}/>
        ))} 
        </div>
    )
}

export default FoodList;