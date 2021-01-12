import React from 'react';
import styled from 'styled-components'

const Navbar = (props) => {
	return (
        <HeaderSytle>
			<Button>Home Page</Button>
            <Button>Categories</Button>
            <Button>My recipes</Button>
		</HeaderSytle>
    )
}

const Button = styled.button`
    font-family: 'sans-serif';
    font-size: 1.3rem;
    display: inline-block;
    border: dotted;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 20px;
    background: lightblue;
    color: #fff;
    &:hover {
        background: red;
`


const HeaderSytle = styled.header`
	background: white;
    color: black;
    text-align: center;
    padding: 10px;
` 

const H1 = styled.h1`
	font-weight: 800;
    color: white;
    text-decoration: none;
`

export default Navbar;
