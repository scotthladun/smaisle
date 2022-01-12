import React from 'react'
import styled from 'styled-components'

export default function ProductTile({ product }) {
    return (
        <ProductWrapper>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <button>Add to Shopping List</button>
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
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    
    img {
        width: 85%;
        height: auto;
    }

`