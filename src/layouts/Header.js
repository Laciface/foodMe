import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = (props) => {

    const logout = (event)=> {
        event.preventDefault();
        sessionStorage.clear();
        alert('Logout');
        window.location.href = '/';
        
    }


	return (
        <HeaderSytle>
            <DIV>
            <DIV2>
            <Link to='/Registration'><H5>Sign Up</H5></Link>
            <Link to='/Login'><H5>Sign In</H5></Link>
            <Link to='/'onClick={logout}><H5>Logout</H5></Link>
            </DIV2>
			<DIV3>
                <H1>FoodMe.</H1>
            </DIV3>
            </DIV>
		</HeaderSytle>
    )
}


const DIV = styled.div`
    position: relative;
    display: flex;
`

const DIV2 = styled.div`
    float:left;
    position: relative;
    `

const DIV3 = styled.div`
margin-left:730px;
display: block;
position: relative;
`

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
    font-size: 50px;
`

const H5 = styled.h5`
	font-weight: 400;
    color: white;
    text-decoration: none;
    letter-spacing: 5px;
    text-align: left;
    font-size: 15px;

`

export default Header;
