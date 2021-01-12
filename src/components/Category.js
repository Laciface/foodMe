import React from 'react'
import styled from 'styled-components';

const  Category = (props) => {

    return (
        <CardDiv>
            <p>{props.name}</p>
            <img src={props.picture} alt="pic"/>
        </CardDiv>
    );
    
}

const CardDiv = styled.div`
    display: inline-block;
    padding: 30px;
    /* border-radius:75%;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)}; */
`
export default Category;