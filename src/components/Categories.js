import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import Navbar from '../layouts/Navbar'

const  Categories = () => {
    const [data, setData] =  useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/category')
        .then(resp => setData(resp.data.categories))
    }, []);
    
//'https://www.themealdb.com/api/json/v1/1/categories.php'

    console.log(data);

    return (
        <React.Fragment>
        <Navbar/>
        <div>
            {data.map( element => (
            <Category 
                name={element.strCategory} 
                picture={element.strCategoryThumb} 
                key={element.idCategory}/>
        ))} 
        </div>
        </React.Fragment>
    );
    
}

export default Categories;