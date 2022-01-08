import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg.png'
import bgTexture from '../assets/bg-texture.png'
import Grid from '@mui/material/Grid'
import HeroImg from '../assets/hero-image.png'
import LogoImg from '../assets/smaisle_logo.png'
import StoreLogos from '../assets/store-logos.png'
import ProductList from '../assets/product-list.png'
import GroceryFloorplan from '../assets/grocery-floorplan.png'

export default function Homepage() {
    return (
        <Wrapper>
            <HeroBlock>
                <Grid container spacing={15} alignItems='center' justifyContent='center'>
                    <Grid item xs={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Logo src={LogoImg} alt="logo" />
                            <MainHeading>
                                Introducing<br />Smaisle
                            </MainHeading>
                            <SubHeading>
                                The most efficient way to organize your shopping experience! View all your favourite products in one place, add them to your shopping list and Smaisle will organize the best route through the store.
                            </SubHeading>
                            <MainButton>Start Smaisling!</MainButton>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <HeroImage src={HeroImg} alt="hero-image" />
                    </Grid>
                </Grid>
            </HeroBlock>
            <HowItWorksBlock>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                    <MainHeading style={{ marginBottom: '50px' }}>
                        Easy as 1, 2, 3!
                    </MainHeading>
                    <Grid container spacing={15}>
                        <Grid item xs={6}>
                            <img src={StoreLogos} alt="store-logos" style={{ width: '20rem' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <NumberHeadings>
                                1
                            </NumberHeadings>
                            <h2>
                                Choose your favourite grocery store.
                            </h2>

                        </Grid>
                    </Grid>
                    <Grid container spacing={15}>
                        <Grid item xs={6}>
                            <NumberHeadings>
                                2
                            </NumberHeadings>
                            <h2>
                                Add your favourite products to your shopping list.
                            </h2>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={ProductList} alt="Sample product list" style={{ width: '20rem' }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={15}>
                        <Grid item xs={6}>
                            <img src={GroceryFloorplan} alt="Grocery store floorplan" style={{ width: '20rem' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <NumberHeadings>
                                3
                            </NumberHeadings>
                            <h2>
                                Smaisle will organize the most efficient route through the store, getting you in and out as quickly as possible!
                            </h2>

                        </Grid>
                    </Grid>
                    <MainButton>Start Smaisling!</MainButton>
                    <br />
                    <br />
                </div>
            </HowItWorksBlock>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const HeroBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 800px;
padding: 0 40px;
`

const HowItWorksBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #f3e1d1;
background-image: url(${bgTexture});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`

const NumberHeadings = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px; 
    color: #f3e1d1;
    font-size: 3rem;
    font-weight: bold;
    background-color: #d55826;
    padding: 10px;
    border-radius: 50%;

`
const MainButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d55826;
    color: #f3e1d1;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50px;
    border: 3px solid #d55826;
    margin-top: 50px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #f3e1d1;
        color: #d55826;
        border: 3px solid #d55826;
    }
`

const Logo = styled.img`
    width: auto;
    height: 8rem;
`

const MainHeading = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: #d55826;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    margin: 0;
    margin-top: 20px;
`

const SubHeading = styled.h2`
    font-size: 1.5rem;
    color: #020202;
    font-family: arno-pro, serif;
    text-align: center;
`

const HeroImage = styled.img`
    width: 90%;
`