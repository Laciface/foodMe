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
    


    return (
        <Container>
            <TitleDiv>
                {details.strMeal}
            </TitleDiv>
            <SmallContainer>
                <ImageContainer>
                    <ImgStyle src={details.strMealThumb} alt='Image'/>
                </ImageContainer>
                <TextContainer>
                    
                    
                    <IngredDiv>
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
                    </IngredDiv>
                    <MarginDiv>
                    <strong> Instructions: </strong>
                        {details.strInstructions}
                    </MarginDiv>
                    <MarginDiv>
                        <strong>Origin:</strong> {details.strArea}
                    </MarginDiv>
                    <MarginDiv>
                        <Button href={details.strYoutube}>Video</Button>
                        <Button>Save Receipt</Button>
                    </MarginDiv>
                </TextContainer>

                
            </SmallContainer>
        </Container>

    );
}


const MarginDiv = styled.div`
    margin-bottom:20px;
`

const IngredDiv = styled.div`
    flex-direction: column;
`

const TextContainer = styled.div`
    text-align: justify;
    letter-spacing:1px;
    font-size: 15px;
    left: 450px;
    position: relative;
    max-width: 500px;
    /* width: 100%;
    height: 100%; */
    display: table-cell;
    vertical-align: middle;
`

const ImageContainer = styled.div`
    left: auto;
    position: absolute;
`

const ImgStyle = styled.img`
    max-height: 350px;
    max-width: 350px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    object-fit: cover;
`

const Container = styled.div`
    flex-direction: column;
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)};
`

const SmallContainer = styled.div`
    margin-top: 70px;
    position: relative;
    width: 1000px;
    height: auto;
    margin-bottom: 10px;
    display: inline-block;
`

const CardDiv = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)};
`


const TitleDiv = styled.div`
    width: 80%;
    background: black;
    display: inline-block;
    padding: 20px;
    text-decoration: none;
    letter-spacing: 10px;
    color: white;
    `

const Button = styled.a`
    text-decoration: none;
    font-family: 'sans-serif';
    font-size: 1.3rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 20px;
    cursor: pointer;
    background: lightblue;
    color: #fff;
    &:hover {
        background: red;}
`

export default FoodDetails