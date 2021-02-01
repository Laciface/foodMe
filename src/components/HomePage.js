import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import Search from './Search'
import Laci from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/laci.png'
import csongi from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/csongi.png'
import Navbar from '../layouts/Navbar'
//'/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/csongi.png';
//'/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/laci.png';

export default function HomePage() {

    const [name, setName] =  useState();

    const welcome =() => {
        axios.get('http://127.0.0.1:8000/api/name')
        .then(resp => setName(resp.data))
};

    return (
        <React.Fragment>
            <Navbar/>
            <div>
            <div style={{display: "inline-block", position: "relative"}}>
            <div style={{display: "inline-block", position: "relative", float: "right"}}><img src={Laci} width="200" height="300"/></div>
            <Welcome style={{display: "inline-block", position: "relative"}}>Welcome {sessionStorage.getItem('username')}!</Welcome>
            <div style={{display: "inline-block", position: "relative", float: "left"}}><img src={csongi} width="250" height="350"/></div>
            
        </div>
                
            </div>
            <div>
                <Search/>
            </div>
        </React.Fragment>
    )
}

const Welcome = styled.p`
    font-weight: 800;
    font-size: 150px;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 100px;
`