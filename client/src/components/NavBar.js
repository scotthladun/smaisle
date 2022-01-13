import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/smaisle_logo.png'
import { ShoppingCartRounded, SearchRounded } from '@mui/icons-material';
import BgOrange from '../assets/Navbar-bg.png'
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {

    const match = useLocation();

    const [backgroundImage, setBackgroundImage] = useState("none");
    const [textColor, setTextColor] = useState("#d55826");


    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            setBackgroundImage(`url(${BgOrange})`);
            setTextColor("#f3e1d1");
        } else {
            setBackgroundImage("none");
            setTextColor("#d55826");
        }
    });


    return (
        <Wrapper style={{ backgroundImage: backgroundImage }}>
            <Ul>
                <li>
                    <img src={Logo} alt="logo" />
                </li>
                <li style={{ color: textColor }}> <StyledLink to={'/'} >Home</StyledLink></li>
                <li style={{ color: textColor }}> <StyledLink to={'/products'} > Products </StyledLink></li>
                <li style={{ color: textColor }}><StyledLink to={'/myLists'}> My Lists </StyledLink></li>
            </Ul>
            {match && match.pathname === '/' ?
                <Ul>
                    {/* <li><SearchRounded /></li> */}
                    <li><ShoppingCartRounded /></li>
                </Ul>
                :
                <Ul>
                    {/* <li><SearchRounded style={{ color: textColor }} /></li> */}
                    <li><ShoppingCartRounded style={{ color: textColor }} /></li>
                </Ul>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0 20px;
    padding-right: 50px;
    width: 100vw;
    height: 100px;
    background-image: ${props => props.style.backgroundImage};
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    z-index: 1;
    top: 0;
    left: 0;
    transition: all 0.6s ease-in-out;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`

const Ul = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    list-style: none;
    margin: 0;

    li {
        color: #d55826;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        font-family: 'Raleway', sans-serif;
        margin-left: 50px;

        img {
            width: auto;
            height: 5rem;
            justify-self: center;
            align-self: center;
            margin: 0;
        }

        svg {
            color: #e8d6c6;
            font-size: 2rem;
        }
    }
`