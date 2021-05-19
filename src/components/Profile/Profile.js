import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function Profile() {
    const [profileInfo, setProfileInfo] =  useState([]);
    
    useEffect(() => {
		axios
            .get(`http://127.0.0.1:8000/api/profileData/` + sessionStorage.getItem('userId'))
            .then(resp => setProfileInfo(resp.data[0]));
    }, []);

    const splitDate = () =>{
        return profileInfo.created_at.substring(0, 10);
    }

    return (
        <React.Fragment>
            <PROFILE>
                <div>
                    <PHOTO>
                        <IMG src={"http://localhost:8000/storage/images/" + profileInfo.picture} alt='profilePic'></IMG>
                    </PHOTO>
                </div>
                <div>
                    <DETAILS>
                        <TITLE>Name:</TITLE>
                        <INFO>{profileInfo.name}</INFO>
                        <TITLE>Nationality: </TITLE>
                        <INFO>{profileInfo.country}</INFO>
                        <TITLE>Introduction: </TITLE>
                        <INTRO>{profileInfo.introduction}</INTRO>
                        <TITLE>Date of join: </TITLE>
                        <INFO>{profileInfo.created_at ? splitDate():''}</INFO>
                    </DETAILS>
                </div>
            </PROFILE>
        </React.Fragment>
    )
}

const INFO = styled.p`
    font-size:20px;
`

const INTRO = styled.div`
    inline-size: 400px;
    overflow-wrap: break-word;
    font-size:19px;
`

const TITLE = styled.p`
    font-family:'Gloria Hallelujah', cursive;
    font-size: 25px;
`

const PHOTO = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    
` 

const IMG = styled.img`
    margin-left: 150px;
    display: block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
`

const DETAILS = styled.p`
    margin-left: 90px;
    font-size: 15px;
    text-align: left;
`
const PROFILE = styled.div`
    display: flex;
    flex-direction: row;
`