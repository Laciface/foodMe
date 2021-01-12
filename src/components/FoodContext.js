import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";


export const FoodContext = createContext();


export const FoodProvider = (props) => {

    const [data, setData] =  useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(resp => setData(resp.data.categories))
    }, []);



    return (
        <FoodContext.Provider value={data}>
            {props.children}
        </FoodContext.Provider>
    );
    
}


export default FoodContext