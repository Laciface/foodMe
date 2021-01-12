import React from 'react';
import styled from 'styled-components'

const Footer = (props) => {
	return (
        <FooterSytle>
			<H3>©️Lacso Corporation USA</H3>
		</FooterSytle>
    )
}

const FooterSytle = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
	background: black;
    color: black;
    text-align: center;
` 

const H3 = styled.h3`
	font-weight: 500;
    color: white;
    text-decoration: none;
`

export default Footer;
