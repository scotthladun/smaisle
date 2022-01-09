import React from 'react'
import styled from 'styled-components'

export default function ProductTile() {
    return (
        <ProductWrapper>
            <img src="https://via.placeholder.com/200x200" alt="placeholder" />
            <h1>Product Tile</h1>
            <p>$ 2.99</p>
            <button>Add to Cart</button>
        </ProductWrapper>
    )
}


const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    padding: 30px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    

    img {
        width: 100%;
        height: auto;
    }

`