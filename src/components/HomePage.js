import React from 'react'
import SlideShow from '../components/SlideShow'
import { Helmet } from 'react-helmet';

export default function HomePage() {
    return (
        <React.Fragment>
        <Helmet>
            <title>FoodMe</title>
        </Helmet>
            <SlideShow/>
        </React.Fragment>
    )
}
