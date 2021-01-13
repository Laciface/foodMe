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
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)};
`
export default Category;