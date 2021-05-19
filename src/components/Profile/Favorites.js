import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import '../../App.css';
import axios from 'axios';
import FoodItem from '../FoodItems/FoodItem'
import {ContextMenuTrigger } from "react-contextmenu";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}
    const [supervisor, setSupervisor] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favorite/list', config)
        .then(resp => setFavorites(resp.data))
    }, [supervisor]);

    const clearFavorites = () =>{
        setSupervisor([]);
    }

    return (
        <React.Fragment>
        <Container>
            <Title>Favorites</Title>
            <ReceiptList>
                {favorites.map(favorite =>
                <React.Fragment>
                    <ContextMenuTrigger id="favorite">
                        <FoodItem
                            name={favorite.food_name} 
                            picture={favorite.food_photo} 
                            key={favorite.food_id}
                            id={favorite.food_id}
                            deleted={() => {clearFavorites()} }/>
                    </ContextMenuTrigger>
                </React.Fragment>
                )}
            </ReceiptList>
        </Container>
        </React.Fragment>
    )
}

// const Button = styled.button`
//     border-radius: 10%;
//     background-color: red;
//     border-color: black;
//     border-style: solid;
//     font-family:'Gloria Hallelujah', cursive;
// `

const Container = styled.div`
    position: absolute;
    max-width: 200px;
`

const Title = styled.div`
    font-size: 30px;
    text-align: left;
    font-family:'Gloria Hallelujah', cursive;
`

const ReceiptList = styled.div`
    display: flexbox;
`