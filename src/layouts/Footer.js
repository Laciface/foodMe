import React from 'react';
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
import { GoMail} from 'react-icons/go';

const Footer = (props) => {
	return (
        <FooterSytle>
            <H3>©️Lacso Corporation USA</H3>
            
            <Circle>
                <FaInstagram size={25}/>
            </Circle>
            <Circle>
                <FaTwitter size={25}/>
            </Circle>
            <Circle>
                <FaFacebook size={25}/>
            </Circle>
            <Circle>
                <GoMail size={25}/>
            </Circle>
		</FooterSytle>
    )
}

const FooterSytle = styled.footer`
    position: absolute;
    width: 100%;
    height: 102px;
    bottom: 0;
	background: black;
    color: black;
    text-align: center;
    border-top: 2px solid red;
    
` 

const H3 = styled.h3`
	font-weight: 500;
    color: white;
    text-decoration: none;
`

const Circle = styled.div`
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`

const About = styled.div`
    color : white;
    margin-top: 15px;
    margin-right:750px;
    margin-left: 50px;
`

export default Footer;
