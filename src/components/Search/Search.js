import React, {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Search = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState();

	return (
        <React.Fragment>
            <form>
                <Input type="text" name="search" placeholder="Search Meal..." onChange={
                    (event) =>  {
                        setSearch(event.target.value)}
                        }/>
                <Button type="submit" value="Search" onClick={()=>{
                    history.push(`/Search/${search}`)
                }}/>
            </form>
        </React.Fragment>
            
    )
}

const Button = styled.input`
    text-decoration: none;
    font-family: 'sans-serif';
    font-size: 1.3rem;
    display: inline-block;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 20px;
    cursor: pointer;
    background: none;
    color: #fff;
    &:hover {
        background: red;}
`
const Input = styled.input`
        height: 30px;
        width: 350px;
`

export default Search;