import React, { useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Ingredients from './Ingredients'
import { useParams } from 'react-router-dom';



const FoodDetails = (props) => {
    const [details, setDetails] =  useState([]);
    const {id} = useParams();

    useEffect(() => {
		axios
			.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => setDetails(response.data.meals[0]));
    }, [details]);
    

    const Container = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)};
`



// function fillIngredientPlaces(){
//     let container = document.getElementById("B");
//     console.log(container)
//     const ingredients = document.getElementsByClassName("ingredient")
//     console.log(ingredients)
//     for(let ingredient of ingredients){
//         container.appendChild(ingredient)
//     }
// }



    return (
        <Container>
            <TitleDiv>
                {details.strMeal}
            </TitleDiv>
            
            <div>
                {details.strInstructions}
            </div>
            <div>
                {details.strArea}
            </div>
            
            <div>
            <Ingredients
                ingrid1={details.strIngredient1}
                ingrid2={details.strIngredient2}
                ingrid3={details.strIngredient3}
                ingrid4={details.strIngredient4}
                ingrid5={details.strIngredient5}
                ingrid6={details.strIngredient6}
                ingrid7={details.strIngredient7}
                ingrid8={details.strIngredient8}
                ingrid9={details.strIngredient9}
                ingrid10={details.strIngredient10}
                measure1={details.strMeasure1}
                measure2={details.strMeasure2}
                measure3={details.strMeasure3}
                measure4={details.strMeasure4}
                measure5={details.strMeasure5}
                measure6={details.strMeasure6}
                measure7={details.strMeasure7}
                measure8={details.strMeasure8}
                measure9={details.strMeasure9}
                measure10={details.strMeasure10}
            />
            </div>
            <div>
                {details.strYoutube}
            </div>

            <img src={details.strMealThumb} alt='Image'/>

            
    


        </Container>

    );
}





const CardDiv = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)};
`


const TitleDiv = styled.div`
    background: black;
    display: inline-block;
    padding: 20px;
    text-decoration: none;
    letter-spacing: 10px;
    color: white;
    `


export default FoodDetails