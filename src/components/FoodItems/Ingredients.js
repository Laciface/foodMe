import React from 'react'
import styled from 'styled-components'

export default function Ingredients(props) {
    return (
        <React.Fragment>
            <div>
                <strong>Ingredients:</strong>
            </div>
        <ListContainer>
            
            <List>
            {props.ingredientsList.map(element => (
                    <Li>{element}</Li>))}
            </List>
            <List>
            {props.measureList.map(element => (
                    <Li>{element}</Li>))}
            </List>
        </ListContainer>
        </React.Fragment>
        )
    }


const ListContainer = styled.div`
    display: inline-block;
`

const List = styled.ul`
    margin: 0;
    padding-left: 1.2rem;
    display: table-cell;
    max-width: 250px;
`

const Li = styled.li`
    
    position: left;
    text-align:left!important;
    margin: 0;
    padding-left: 1.2rem;
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;
    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: -2px;
        width: 5px;
        height: 11px;
        border-width: 0 2px 2px 0;
        border-style: solid;
        border-color: #00a8a8;
        transform-origin: bottom left;
        transform: rotate(45deg);}
`