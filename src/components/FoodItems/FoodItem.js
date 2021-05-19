import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { RiDeleteBin5Line} from 'react-icons/ri';



function FoodItem(props) {
    let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}
    
    const [canSeeButton, setCanSeeButton] = useState(false); 
    
    const deleteFavorite =() => {
        axios.post('http://127.0.0.1:8000/api/favorite/delete', {food_id : props.id}, config)
        props.deleted();
    }

    const CheckURL =() => {
        const location = useLocation();
        console.log(location.pathname);
        if(location.pathname === '/Tabs'){
            return (
                <React.Fragment>
                {canSeeButton?
                <Delete onClick={deleteFavorite}>
                    <RiDeleteBin5Line/> delete
                </Delete>:''}
                </React.Fragment>
            )
        }
    }
    
    return (
        <CardLink 
                    onMouseEnter={() => setCanSeeButton(true)}
                    onMouseLeave={() => setCanSeeButton(false)}>
        <Link to={`/FoodDetails/${props.id}`}>
                <ImgDec src={props.picture} alt="pic"/>
        </Link>
                <Name>{props.name}</Name>
                {CheckURL()}
            </CardLink>
    )
}

const Delete = styled.button`
    text-decoration: none;
    font-family: 'sans-serif';
    font-size: 1rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 5px;
    cursor: pointer;
    background: lightblue;
    color: #fff;
    &:hover {
        background: red;}
`

const Name = styled.p`
    font-family:'Gloria Hallelujah', cursive;
    font-size: 20px;
    inline-size: 400px;
    overflow-wrap: break-word;
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