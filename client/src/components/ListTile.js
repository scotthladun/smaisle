import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function ListTile({ product }) {
    return (
        <Grid container direction='row' bgcolor='#fff' borderRadius='5px' margin='5px' padding='10px' >
            <Grid item xs={4}>
                <img src={product.image} alt="product-image" style={{ width: '70%' }} />
            </Grid>
            <Grid item xs={6}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Grid>
            <Grid item xs={2}>
                <p>{product.aisle}</p>
            </Grid>
        </Grid>
    )
}

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 400px;
    max-height: 100px;
    padding: 30px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;

    img {
        height: 90px;
        width: auto;
    }
    
    h4 {
        font-size: 1rem;
        padding: 10px;
        margin: 0;

    }

    p {
        font-size: 1.2rem;
        padding: 10px;
        margin: 0;
    }
`