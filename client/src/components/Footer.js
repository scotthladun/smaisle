import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/smaisle_logo.png'
import bgOrange from '../assets/bg-texture-orange.png'
import { Grid } from '@mui/material'

export default function Footer() {
    return (
        <Wrapper>
            <Grid container spacing={2} alignItems='center' justifyContent='center'>
                <Grid item sx={4} md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '75%' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                            This is a demo website for the Smaisle app. It was created with 💚 by Scott Hladun for the MongoDB Atlas Hackathon on dev.
                        </p>
                    </div>
                </Grid>
                <Grid item sx={4} md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ height: '5rem' }} src={Logo} alt="logo" />
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                            About Us
                        </p>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                            Contact Us
                        </p>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                            Privacy Policy
                        </p>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                            Terms of Use
                        </p>
                    </div>
                </Grid>
            </Grid>
            <h2>
                &copy; 2022 Smaisle. All rights reserved.
            </h2>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bgOrange});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 10px 20px;
    padding-top: 50px;
`