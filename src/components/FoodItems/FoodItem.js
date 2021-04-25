import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


function FoodItem(props) {
    return (
        <Link to={`/FoodDetails/${props.id}`}>
            <CardLink>
                <ImgDec src={props.picture} alt="pic"/>
                <Name>{props.name}</Name>
            </CardLink>
        </Link>
    )
}

const Name = styled.p`
    font-family:'Gloria Hallelujah', cursive;
    font-size: 20px;
`

const ImgDec =  styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
`

const CardLink = styled.div`
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