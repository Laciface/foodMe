import React from 'react'
import Ingredient from "./Ingredient"

export default function Ingredients(props) {

    // function filterIngredients(){
    //     console.log("asdas")
    //     Object.keys(details).forEach(element =>
    //         {if(element.includes("strIngredient") && details[element] != null && details[element] != "" || element.includes("strMeasure") && details[element] != null && details[element] != ""){
    //             let ingredient = document.createElement("p");
    //             let text = document.createTextNode(`${details[element]}`)
    //             ingredient.appendChild(text);
    //             ingredient.addClass("ingredient");
    //             console.log("asdasdas")
    //         } 
    //     })}


    return (
        <div>
            <div>
                {props.ingrid1},
                {props.ingrid2},
                {props.ingrid3},
                {props.ingrid4},
                {props.ingrid5},
                {props.ingrid6},
                {props.ingrid7},
                {props.ingrid8},
                {props.ingrid9},
                {props.ingrid10}
            </div>
            <div>
                {props.measure1},
                {props.measure2},
                {props.measure3},
                {props.measure4},
                {props.measure5},
                {props.measure6},
                {props.measure7},
                {props.measure8},
                {props.measure9},
                {props.measure10}
            </div>
        </div>
        )
    }
