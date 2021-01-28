import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = (props) => {
	return (
        <HeaderSytle>
            <Link to='/Registration'><H5>Sign Up</H5></Link>
			<H1>FoodMe.</H1>
		</HeaderSytle>
    )
}

const HeaderSytle = styled.header`
	background: black;
    color: black;
    text-align: center;
    padding: 10px;
` 

const H1 = styled.h1`
	font-weight: 800;
    color: white;
    text-decoration: none;
`

const H5 = styled.h5`
	font-weight: 200;
    color: white;
    text-decoration: none;
    text-align: left;

`

export default Header;
