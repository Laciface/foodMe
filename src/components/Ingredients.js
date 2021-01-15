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
                <Li>{props.ingrid1}</Li>
                <Li>{props.ingrid2}</Li>
                <Li>{props.ingrid3}</Li>
                <Li>{props.ingrid4}</Li>
                <Li>{props.ingrid5}</Li>
                <Li>{props.ingrid6}</Li>
                <Li>{props.ingrid7}</Li>
                <Li>{props.ingrid8}</Li>
                <Li>{props.ingrid9}</Li>
            </List>
            <List>
                <Li>{props.measure1}</Li>
                <Li>{props.measure2}</Li>
                <Li>{props.measure3}</Li>
                <Li>{props.measure4}</Li>
                <Li>{props.measure5}</Li>
                <Li>{props.measure6}</Li>
                <Li>{props.measure7}</Li>
                <Li>{props.measure8}</Li>
                <Li>{props.measure9}</Li>
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