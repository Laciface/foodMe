import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Navbar = (props) => {
	return (
        <HeaderSytle>
			<Link to='/'><Button>Home Page</Button></Link>
            <Link to='/Categories'><Button>Food Categories</Button></Link>
            <Link to='/MyReceipt'><Button>MyReceipt</Button></Link>
		</HeaderSytle>
    )
}

const Button = styled.div`
    text-decoration: none;
    font-family: 'sans-serif';
    font-size: 1.3rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 20px;
    cursor: pointer;
    background: lightblue;
    color: #fff;
    &:hover {
        background: red;
`
const Input = styled.input`
        height: 30px;
        width: 250px;
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
