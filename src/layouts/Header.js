import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';


const Header = (props) => {

    const logout = (event)=> {
        event.preventDefault();
        sessionStorage.clear();
        alert('Logout');
        window.location.href = '/';
        
    }

    const loggedIn = ()=> {
        if(sessionStorage.length === 0){
            return (
                <React.Fragment>
                    <div><Link to='/Registration'><Button>Sign Up</Button></Link></div>
                    <div><Link to='/Login'><Button>Login</Button></Link></div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div><Link to='/MyReceipt'><Button>MyProfile</Button></Link></div>
                    <div><Link to='/'onClick={logout}><Button>Logout</Button></Link></div>
                </React.Fragment>)
        }
    }

	return (
            <Container>
            <Links>
            
                <div><Link to='/'><Button>Home Page</Button></Link></div>
                <div><Link to='/Categories'><Button>Food Categories</Button></Link></div>
                {loggedIn()}
                
            </Links>
            <Logo>
                <H1>FoodMe.</H1>
            </Logo>
            </Container>
    )
}


const Container = styled.div`
    background-color: black;
    position: relative;
    display: flex;
    border-bottom: 2px solid red;
`

const Links = styled.div`
    position: absolute;
    flex-direction: row;
    display: flex;
    right: 0;
    `

const Logo = styled.div`
    margin-left:30px;
    display: block;
    position: relative;
`


const H1 = styled.h1`
	font-weight: 800;
    color: white;
    text-decoration: none;
    font-size: 50px;
`


const Button = styled.div`
    text-decoration: none;
    font-family:'Gloria Hallelujah', cursive;
    font-size: 1.6rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 10px;
    cursor: pointer;
    color: #fff;
    &:hover {
        background: red;}
`

const H2 = styled.h1`
	font-weight: 800;
    color: white;
    text-decoration: none;
`

export default Header;
