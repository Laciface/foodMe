import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';

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
        <Slideshow>
        <SlideshowSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {pictures.map((image, index) => (
            <Slide
                key={index}
                style={{ backgroundImage : `url(${image.name})` }}
            ></Slide>
            ))}
        </SlideshowSlider>
        </Slideshow>
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