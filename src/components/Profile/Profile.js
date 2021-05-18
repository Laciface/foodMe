import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function Profile() {
    const [profileImage, setProfileImage] =  useState([]);
    
    useEffect(() => {
		axios
            .get(`http://127.0.0.1:8000/api/profilePicture/` + sessionStorage.getItem('userId'))
            .then(resp => setProfileImage(resp.data));
    }, []);

    return (
        <React.Fragment>
            <div>
                <PHOTO>
                    <IMG src={"http://localhost:8000/storage/images/" + profileImage} alt='profilePic'></IMG>
                </PHOTO>
            </div>
            <div>
                <Param>
                    7 tried receipt, 2 own receipt, 5 favorites
                </Param>
            </div>
        </React.Fragment>
    )
}

const PHOTO = styled.div`
    display: flex;
    justify-content: center;
    
` 

const IMG = styled.img`
    margin-left: 650px;
    display: block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
`

const Param = styled.p`
    margin-left: 650px;
    font-size: 15px;
`
