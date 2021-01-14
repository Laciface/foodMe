import React from 'react'
import styled from 'styled-components'
import Search from './Search'

export default function HomePage() {
    return (
        <React.Fragment>
            <div>
                <Welcome>Welcome!</Welcome>
            </div>
            <div>
                <Search/>
            </div>
        </React.Fragment>
    )
}

const Welcome = styled.p`
    font-weight: 800;
    font-size: 200px;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 100px;
`