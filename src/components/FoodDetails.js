import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import FoodContext from './FoodContext'
import styled from 'styled-components';
import Ingredients from './Ingredients'
import { useParams } from 'react-router-dom';
import Navbar from '../layouts/Navbar'
//import { useOktaAuth, authState} from "@okta/okta-react";



const FoodDetails = (props) => {
    const [details, setDetails] =  useState([]);
    const {id} = useParams();
    const [foods, setFoods] = useContext(FoodContext);
    //const { authState, authService } = useOktaAuth();


    let token = sessionStorage.getItem("token")
    console.log(token)

    // const [userInfo, setUserInfo] = useState();

    // useEffect(() => {
    //     if (!authState.isAuthenticated) {
    //     // When user isn't authenticated, forget any user info
    //     setUserInfo(null);
    //     } else {
    //     authService.getUser().then(info => {
    //         setUserInfo(info);
    //     });
    //     }
    // }, [authState, authService]);

    useEffect(() => {
		axios
            .get(`http://127.0.0.1:8000/api/foodDetails/${id}`)
            .then(resp => setDetails(resp.data.meals[0]));
    }, []);


    const fillIngredients = () => { 
        const IngredientsList = [];
        Object.keys(details).forEach(key => {
        if(key.includes("strIngredient") && details[key] !== null && details[key] !== ""){
            IngredientsList.push(details[key]);
        }});
    return IngredientsList;}


    const fillMeasures = () => { 
        const MeasureList = [];
        Object.keys(details).forEach(key => {
        if(key.includes("strMeasure") && details[key] != null && details[key] !== ""){
            MeasureList.push(details[key]);
        }});
    return MeasureList;}


    const addReceipt =() => {
            axios.post('http://127.0.0.1:8000/api/favorite', {food_id : id}, {headers: {Authorization : 'Bearer ' + sessionStorage.getItem('token')}})
    };

    return (
        <React.Fragment>
            <Navbar/>
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
                        ingredientsList={fillIngredients()}
                        measureList={fillMeasures()}
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
                        <Button onClick={addReceipt}>Save Receipt</Button>
                    </MarginDiv>
                </TextContainer>

                
            </SmallContainer>
        </Container>
        </React.Fragment>
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