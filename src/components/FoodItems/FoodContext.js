import React, {useState, createContext} from 'react';


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