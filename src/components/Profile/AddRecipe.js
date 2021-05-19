import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export default function AddRecipe() {
    const [ingredient, setIngredient] = useState('');
    const [measure, setMeasure] = useState('');
    const [ingredList, setIngredList] = useState([]);
    let [counter, setCounter] = useState(1);


    const saveIngredient = (event) => {
		setIngredient(event.target.value);
	};

    const saveMeasure = (event) => {
		setMeasure(event.target.value);
	};

    const saveFields = (event) => {
        event.preventDefault();
        ingredList[`strIngredient${counter}`] = ingredient;
        ingredList[`strMeasure${counter}`] = measure;
        setCounter(counter + 1);
        event.target.value = '';
    }

    const  displayMeasures = () => {
        const list =[];
        Object.keys(ingredList).forEach(key => {
            if(key.includes("strMeasure")){
                list.push(ingredList[key]);
            }
            });

        const listItems = list.map((item) => 
        <LI>{item}</LI>)
        return listItems;
    }

    const displayIngredients = () => {
        const list =[];
        Object.keys(ingredList).forEach(key => {
            if(key.includes("strIngredient")){
                list.push(ingredList[key]);
            }
            });

        const listItems = list.map((item) => 
        <LI>{item}</LI>)
        return listItems;
    }

    return (
        <React.Fragment>
                <form>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Container>
                            <Label>Name</Label>
                            <TextField id="outlined-search" type="normal" variant="outlined" />
                            <Label>Origin</Label>
                            <TextField id="outlined-search" type="normal" variant="outlined" />
                            
                            <Label style={{marginBottom: '10px'}}>Category</Label>
                            <select>
                                <option value="Beef">Beef</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Goat">Goat</option>
                                <option value="Lamb">Lamb</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Pork">Pork</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Side">Side</option>
                                <option value="Starter">Starter</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Vegaterian">Vegaterian</option>
                            </select>
                            
                            <Label>Instructions</Label>
                            <textarea style={{height: '200px', width: '500px'}}  ></textarea>
                            
                            <Label>Youtube Link</Label>
                            <TextField id="outlined-search" type="normal" variant="outlined" />
                            
                            <Button type="submit" >Add Recipe </Button>
                        </Container>
                        <div>
                            <Container className='ingreds'>
                                <Label>Picture</Label>
                                <input type="file"/>

                                <Label>Ingredients/Measures</Label>
                                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '15px'}}>
                                    <TextField onChange={saveIngredient} id="outlined-search" type="normal" variant="outlined" style={{marginRight: '25px'}}/>
                                    <TextField onChange={saveMeasure} id="outlined-search" type="normal" variant="outlined" />
                                    <Button onClick={saveFields}>+</Button>
                                </div>
                                <Items>
                                    <OL>{displayIngredients()}</OL>
                                    <UL>{displayMeasures()}</UL>
                                </Items>
                            </Container>
                        </div>
                    </div>
                </form>
        </React.Fragment>
    )
}

const LI = styled.li`
    margin-bottom: 15px;
`

const UL = styled.ul`
    list-style-type: none;
    margin-top: 70px;
`

const OL = styled.ol`
    margin-right: 0;
    margin-top: 70px;
    margin-left: 70px;
`

const Items = styled.div`
    height: 470px;
    width: 500px;
    background-repeat: no-repeat;
    background-size: 500px;
    display: flex;
    flex-direction: row;
    background-image: url('https://lh3.googleusercontent.com/proxy/KirkilQ6b0kpZeOWcfVQ6l74-7pP8j4I_6IpxTRoxs4lUH320PHZc5eih5jR3cDIKadDg6MB5SIjQkoWwKNgQ3k')
`

const Button = styled.button`
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
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 130px;
`