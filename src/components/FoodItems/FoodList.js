import React, { useState, useEffect} from 'react'
import axios from 'axios'
import FoodItem from './FoodItem'
import { useParams } from 'react-router-dom';


const FoodList = () => {
    
    const [foodList, setFoodList] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/meals/' + category)
        .then(resp => setFoodList(resp.data.meals));
    }, [category])
    

    return (
        <React.Fragment>
        <div>
            {foodList.map( food => (
            <FoodItem 
                name={food.strMeal} 
                picture={food.strMealThumb} 
                key={food.idMeal}
                id={food.idMeal}/>
        ))} 
            </div>
            </React.Fragment>
    )
}

export default FoodList;