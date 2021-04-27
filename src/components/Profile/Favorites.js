import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import '../../App.css';
import axios from 'axios';
import FoodItem from '../FoodItems/FoodItem'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { RiDeleteBin5Line} from 'react-icons/ri';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favorite/list', config)
        .then(resp => setFavorites(resp.data))
    }, []);

    const deleteFavorite =(data) => {
        axios.post('http://127.0.0.1:8000/api/favorite/delete', {food_id : data.id}, config)
        console.log(data)  
    }

    return (
        <React.Fragment>
        <Container>
            <Title>Favorites</Title>
            {/* {favorites.food_id? */}
            <ReceiptList>
                {favorites.map(favorite =>
                <React.Fragment>
                    <ContextMenuTrigger id="favorite">
                        <FoodItem
                            name={favorite.food_name} 
                            picture={favorite.food_photo} 
                            key={favorite.food_id}
                            id={favorite.food_id}/>
                    </ContextMenuTrigger>

                    <ContextMenu id="favorite">
                        <Button data={{ id: favorite.food_id}} onClick={deleteFavorite}>
                            <MenuItem data={{ id: favorite.food_id}} onClick={deleteFavorite}>
                                <RiDeleteBin5Line data={favorite.food_id} onClick={deleteFavorite} size={25}/> delete
                            </MenuItem>
                        </Button>
                    </ContextMenu>
                </React.Fragment>
                )}
            </ReceiptList>
            {/* <ReceiptList>aha</ReceiptList>} */}
        </Container>
        </React.Fragment>
    )
}

const Button = styled.button`
    border-radius: 10%;
    background-color: red;
    border-color: black;
    border-style: solid;
    font-family:'Gloria Hallelujah', cursive;
`

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