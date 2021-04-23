import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';
import Search from './Search';

const pictures = [
    {name:'https://ba2405dc7b30afe52630-7360b65eaf2d1e8c521c2d0cc5536ea2.ssl.cf1.rackcdn.com/Moroccan.jpg'},
    {name:'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126844/126844_00_2x.jpg'},
    {name:'https://ba2405dc7b30afe52630-7360b65eaf2d1e8c521c2d0cc5536ea2.ssl.cf1.rackcdn.com/Greek4.jpg'}
];

const delay = 6000;

export default function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <React.Fragment>
            <div>
            <Welcome style={{position: "absolute", zIndex : "2" }}>Welcome {sessionStorage.getItem('username')}!</Welcome>
            </div>
        <Slideshow>
        <SlideshowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {pictures.map((image, index) => (
            <Slide
                key={index}
                style={{ position: "relative", backgroundImage : `url(${image.name})`, zIndex : "1" }}
            ></Slide>
            ))}
        </SlideshowSlider>
        </Slideshow>
        <SearchDiv>
            <Search/>
        </SearchDiv>
        </React.Fragment>
    );
}

const Slideshow = styled.div`
    margin: 0 auto;
    overflow: hidden;
    max-width: auto;` 

const SlideshowSlider = styled.div`
    white-space: nowrap;
    transition: ease 1500ms;`


const Slide = styled.div`
    display: inline-block;
    height: 719px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0px;`

const Welcome = styled.p`
    color: white;
    font-weight: 500;
    font-size: 150px;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 100px;
    margin-left: 450px;
    font-family:'Gloria Hallelujah', cursive;
`

const SearchDiv = styled.div`
    margin-top: -300px;
    margin-left: 740px;
    z-index: 2;
    position: absolute;
`