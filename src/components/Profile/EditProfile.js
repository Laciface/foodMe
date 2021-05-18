import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

/* constructor(props) {
  super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
} */



export default function FormPropsTextFields() {
  const [pictures, setPictures] =  useState();
  const [picture, setPicture] = useState('');
	const [country, setCountry] = useState('');
  const [introduction, setIntroduction] = useState('');
  let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}
  const classes = useStyles();
  
  const data = new FormData();
  data.append('picture', picture);
  data.append('country', country);
  data.append('introduction', introduction);
  
  const editProfile = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/edit/profile", data , config)
    .then((response) => {
      alert('Profile edited');
      console.log(response)
      window.location.href = '/Tabs'})
    }
    
    const onDrop = (event) => {
      console.log(event.target.files[0]);
      setPicture(event.target.files[0]);
      console.log(picture);
      }

	const handleCountryChange = (event) => {
		setCountry(event.target.value);
	};

  const handleIntroductionChange = (event) => {
		setIntroduction(event.target.value);
	};


  return (
    <React.Fragment>
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <form>
    <Container>
        <Label>Picture</Label>
        <input type="file" onChange={onDrop}/>

        <Label>Country</Label>
        <TextField id="outlined-search" type="search" variant="outlined" onChange={handleCountryChange}/>
        
        <Label>Introduction</Label>
        <textarea style={{height: '300px', width: '500px'}} onChange={handleIntroductionChange}/>
        <Button type="submit" onClick={editProfile}>Edit</Button>
      </Container>
    </form>
    </div>
    </React.Fragment>
  );
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
`
