import React from 'react'
import styled from 'styled-components';


function FoodItem(props) {
    return (
        <CardDiv>
            <ImgDec src={props.picture} alt="pic"/>
            <p>{props.name}</p>
        </CardDiv>
    )
}

const ImgDec =  styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
`

const CardDiv = styled.div`
    text-decoration: none;
    text-align: center;
    color: black;
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            font-weight: 900;};
`

export default FoodItem;