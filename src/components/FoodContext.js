import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";


export const FoodContext = createContext();


export const FoodProvider = (props) => {

    const [foods, setFoods] =  useState({
        meals: []
    })

    
    return (
        <FoodContext.Provider value={[foods, setFoods]}>
            {props.children}
        </FoodContext.Provider>
    );
    
}


export default FoodContext