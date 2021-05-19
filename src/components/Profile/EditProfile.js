import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import axios from 'axios';

export default function FormPropsTextFields() {
  const [picture, setPicture] = useState('');
	const [country, setCountry] = useState('');
  const [introduction, setIntroduction] = useState('');
  let config = { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }}
  
  const data = new FormData();
  data.append('picture', picture);
  data.append('country', country);
  data.append('introduction', introduction);

  // const [profileInfo, setProfileInfo] =  useState([]);
  // const placeholder = 'Face';
  
  // useEffect(() => {
	// 	axios
  //       .get(`http://127.0.0.1:8000/api/profileData/` + sessionStorage.getItem('userId'))
  //       .then(resp => setProfileInfo(resp.data[0].country))
  //   }, []);

  const editProfile = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/edit/profile", data , config)
    .then((response) => {
      alert('Profile edited');
      console.log(response)
      window.location.href = '/Tabs'})
    }
    
    const onDrop = (event) => {
      setPicture(event.target.files[0]);
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
        <TextField id="outlined-search" type="normal" variant="outlined" onChange={handleCountryChange}/>
        
        <Label>Introduction</Label>
        <textarea style={{height: '300px', width: '500px'}}  onChange={handleIntroductionChange}></textarea>
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
