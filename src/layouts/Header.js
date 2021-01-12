import React from 'react';
import styled from 'styled-components'

const Header = (props) => {
	return (
        <HeaderSytle>
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

export default Header;
