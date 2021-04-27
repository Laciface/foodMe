import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import '../../App.css';
import axios from 'axios';
import FoodItem from '../FoodItems/FoodItem'

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favorite/list', config)
        .then(resp => setFavorites(resp.data))
    }, []);

    console.log(favorites);
    return (
        <Container>
            <Title>Favorites</Title>
            <ReceiptList>
                {favorites.map(favorite =>
                    <FoodItem
                        name={favorite.food_name} 
                        picture={favorite.food_photo} 
                        key={favorite.food_id}
                        id={favorite.food_id}/>)}
            </ReceiptList>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
`

const Title = styled.div`
    font-size: 30px;
    text-align: left;
    font-family:'Gloria Hallelujah', cursive;
`

const ReceiptList = styled.div`
    display: flexbox;
`