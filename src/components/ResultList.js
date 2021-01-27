import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import FoodItem from './FoodItem'

const ResultList = () => {

    const [results, setResults] = useState([]);
    const {search} = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/search/${search}`)
        .then((resp) => setResults(resp.data.meals))
    }, [search]);

//https://www.themealdb.com/api/json/v1/1/search.php?s=

    return (
        <div>
            {results.map(result => (
                <FoodItem 
                name={result.strMeal} 
                picture={result.strMealThumb} 
                key={result.idMeal}
                id={result.idMeal}/>
            ))}
        </div>
    );
}
export default ResultList;
