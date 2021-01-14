import React from 'react';
import styled from 'styled-components'

const Search = (props) => {
	return (
        <React.Fragment>
            <form>
                <Input type="text" placeholder="Search Meal..." name="search"/>
                <Button> Search</Button>
            </form>
        </React.Fragment>
            
    )
}

const Button = styled.div`
    text-decoration: none;
    font-family: 'sans-serif';
    font-size: 1.3rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 20px;
    cursor: pointer;
    background: lightblue;
    color: #fff;
    &:hover {
        background: red;}
`
const Input = styled.input`
        height: 30px;
        width: 350px;
`

export default Search;