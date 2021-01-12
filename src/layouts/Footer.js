import React from 'react';
import styled from 'styled-components'

const Footer = (props) => {
	return (
        <FooterSytle>
			<H3>©️Lacso Corporation USA</H3>
		</FooterSytle>
    )
}

const FooterSytle = styled.header`
	background: black;
    color: black;
    text-align: center;
    padding: 10px;
` 

const H3 = styled.h3`
	font-weight: 500;
    color: white;
    text-decoration: none;
`

export default Footer;
