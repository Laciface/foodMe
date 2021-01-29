import React from 'react'
import styled from 'styled-components';


const  Category = (props) => {

    return (
        <React.Fragment>
        <CardDiv >
            <FoodLink href={`/Categories/${props.name}`}>
                <p>{props.name}</p>
                <img src={props.picture} alt="pic"/>
            </FoodLink>
        </CardDiv>
        </React.Fragment>
    );
    
}


const FoodLink = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        font-weight: 900;
    }

`

const CardDiv = styled.div`
    text-decoration: none;
    color: black;
    margin-bottom: 10px;
    display: inline-block;
    padding: 30px;
    border-radius:15%;
    border: none;
    &:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            font-weight: 900;};
`
export default Category;