import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Laci from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/laci.png';
import csongi from '/home/laciface/Desktop/projects_PHP/TW_weeks/foodme/src/pictures/csongi.png';

export default function HomePage() {
    return (
        <React.Fragment>
            <div>
            <div style={{display: "inline-block", position: "relative"}}>
            <div style={{display: "inline-block", position: "relative", float: "right"}}><img src={Laci} width="200" height="300"/></div>
            <Welcome style={{display: "inline-block", position: "relative"}}>Welcome!</Welcome>
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
    font-size: 200px;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 100px;
`