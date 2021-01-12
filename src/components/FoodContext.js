import React, {useState, createContext, useEffect, Component} from 'react';
import axios from "axios";


//export const FoodContext = createContext();

class FoodContext extends Component{

    componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(resp => console.log(resp))
}


//export const FoodProvider = (props) => {

    // const [categories, setCategories] =  useState([])
    // const [id, setID] =  useState([])

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //     .then(resp => {return resp.json();})
    // });

    



    render(){
    return (
        <div>Hello</div>
        // <FoodContext.Provider value={[ categories, setCategories]}>
        //     {props.children}
        // </FoodContext.Provider>
    );
    
}
}

export default FoodContext