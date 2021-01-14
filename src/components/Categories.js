import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'

const  Categories = () => {
    const [data, setData] =  useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(resp => setData(resp.data.categories))
    }, []);
    

    return (
        <div>
            {data.map( element => (
            <Category 
                name={element.strCategory} 
                picture={element.strCategoryThumb} 
                key={element.idCategory}/>
        ))} 
        </div>
    );
    
}

export default Categories;