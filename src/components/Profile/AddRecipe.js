import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export default function AddRecipe() {
    const [ingredList, setIngredList] = useState([]);
    const [numberOfFields, setNumberOfFields] = useState(1);

    const setIngredient = (event) => {
        let list = ingredList;
        list.push(event.target.value);
		setIngredList(list);
	};

    const displayFields = () =>{
        let content = [];
        for(let i = 0; i < numberOfFields; i++){
            content.push(
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '15px'}}>
                <TextField onChange={setIngredient} id="outlined-search" type="normal" variant="outlined" style={{marginRight: '25px'}}/>
                <TextField id="outlined-search" type="normal" variant="outlined" />
            </div>
            );}
        return (
            <React.Fragment>
            {content.map(item => item)}
            </React.Fragment>
        );
    }

    const increseNumberOfFields = (e) => {
        e.preventDefault();
        setNumberOfFields(numberOfFields + 1);
    }

    return (
        <React.Fragment>
                <form>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Container>
                            <Label>Name</Label>
                            <TextField id="outlined-search" type="normal" variant="outlined" />
                            {console.log(ingredList)}
                            <Label>Origin</Label>
                            <TextField id="outlined-search" type="normal" variant="outlined" />
                            
                            <Label style={{marginBottom: '10px'}}>Category</Label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            
                            <Label>Instructions</Label>
                            <textarea style={{height: '300px', width: '500px'}}  ></textarea>
                            <Button type="submit" >Add Recipe </Button>
                        </Container>
                        <div>
                            <Container className='ingreds'>
                                <Label>Picture</Label>
                                <input type="file"/>

                                <Label>Ingredients/Measures</Label>
                                {displayFields()}
                            </Container>
                        </div>
                        <div>
                        <Button onClick={increseNumberOfFields}>+</Button>
                        </div>
                    </div>
                </form>
        </React.Fragment>
    )
}

const Button = styled.button`
    width: 200px;
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

const Label = styled.label`
    text-align: left;
    font-family:'Gloria Hallelujah', cursive;
    font-size: 25px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 130px;
`