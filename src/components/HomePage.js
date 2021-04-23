import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import Search from './Search'
import Laci from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/laci.png'
import csongi from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/csongi.png'
import Navbar from '../layouts/Navbar'
import SlideShow from '../components/SlideShow'
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
            <SlideShow/>
        </React.Fragment>
    )
}
