import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components';

export default function Registration() {

    const [userEmail, setEmail] = useState('');
	const [userName, setName] = useState('');
	const [userPassword, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

    const register = (event)=> {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/register", {
            name: userName,
            email: userEmail,
            password: userPassword
        })
    .then((response) => {
        console.log(response)
        window.location.href = '/'})
    .catch(function(error){
        alert(error)
    })

    }

    return (
        <BODY>
        <BOX>
            <form>
            <SPAN>registration</SPAN>
            <CONTAINER>
                <INPUT type="text" onChange={handleNameChange} placeholder="Enter name" name="name" required/>
                <LABEL for="psw-repeat"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <INPUT type="text" onChange={handleEmailChange} placeholder="Enter email" name="email" required/>
                <LABEL for="psw-repeat"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <INPUT type="password" onChange={handlePasswordChange} placeholder="Enter Password" name="password" required/>
                <LABEL for="psw"></LABEL>
            </CONTAINER>
                <BUTTON type="submit"  onClick={register}>Submit</BUTTON>
            </form>
        </BOX>
        </BODY>
        // <Main>
        //     <FORM action="http://127.0.0.1:8000/api/register" method="POST">
        //         <DIV>
        //         <label for="email"><b>Name: </b></label>
        //         <Input type="text" placeholder="Enter Name" name="name" required/>
        //         </DIV>
        //         <DIV>
        //         <label for="psw-repeat"><b>Email: </b></label>
        //         <Input type="text" placeholder="Enter email" name="email" required/>
        //         </DIV>
        //         <DIV>
        //         <label for="psw"><b>Password: </b></label>
        //         <Input type="password" placeholder="Enter Password" name="password" required/>
        //         </DIV>
        //         <DIV>
        //         <Button type="submit">Submit</Button>
        //         </DIV>
        //     </FORM>
        // </Main>
    )
}


// const Input = styled.input`
//     width: 300px;
//     height: 50px;
//     border-radius: 0%;
//     font-size: 35px;
//     font-weight: 500;
// `

// const Main = styled.div`
//     background-image: url("../pictures/hamburger.png")
// ` 

// const FORM = styled.form`
//     background-color: lightblue;
//     flex-direction: column;
//     border: solid;
//     text-align: center;
//     letter-spacing: 7px;
//     font-family: 'Courier New', Courier, monospace;
// `

// const DIV = styled.div`
//     margin: 15px;
//     font-size: 50px;
// `
// const Button = styled.div`
//     text-decoration: none;
//     font-family: 'sans-serif';
//     font-size: 1.3rem;
//     display: inline-block;
//     border: none;
//     border-radius: 5px;
//     padding: 7px 10px;
//     margin: 20px;
//     cursor: pointer;
//     background: lightblue;
//     color: #fff;
//     &:hover {
//         background: red;}
// `
const BODY = styled.body`
	background-image: url('https://wallpapercave.com/wp/wc1813154.jpg');
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:78.7vh;
	font-family: 'Noto Sans', sans-serif;
`


const BUTTON = styled.button`
    color:#fff;
	background-color:#e74c3c;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
`


const INPUT = styled.input`
    border:0;
    border-bottom:1px solid #555;  
    background:transparent;
    width:100%;
    padding:8px 0 5px 0;
    font-size:16px;
    color:#fff;
    &:focus{border:none;	
            outline:none;
            border-bottom:1px solid #e74c3c;}
    &:valid ~ label{
	top:-12px;
	font-size:12px;
}
`

const LABEL = styled.label`
    position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
    pointer-event:none;
	transition: all 0.5s ease-in-out;
`

const CONTAINER = styled.div`
    position:relative;
	margin-bottom:25px;
`


const BOX = styled.div`
    position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
`


const SPAN = styled.span`
    color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
`