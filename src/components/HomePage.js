import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext} from 'react'
import SlideShow from '../components/SlideShow'


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
