import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import bg from '../assets/bg-texture.png'
import floorplan from '../assets/grocery-floorplan.png'
import ListTile from '../components/ListTile'

export default function MyList(list) {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedAisle, setSelectedAisle] = useState('')

    const handleModalOpen = (aisle) => {
        setSelectedAisle(aisle);
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
        border: '2px solid #000',
        overflow: 'scroll',
        maxHeight: '80vh',
    }



    return (
        <Wrapper>
            <Modal open={modalOpen}
                onClose={handleModalClose}>
                <Box sx={style}>
                    <h1 style={{ textAlign: 'center' }}>Aisle: {selectedAisle}</h1>
                    {/* Only list products from that aisle */}
                    {list.list.items && list.list.items.map((product) => {
                        if (product.product.aisle === selectedAisle) {
                            return <ListTile key={product.product._id} product={product.product} />
                        }
                    })}
                </Box>
            </Modal>
            <Grid container spacing={15} alignItems='flex-start' justifyContent='center'>
                <Grid item xs={4} >
                    <ListHeading>My List</ListHeading>
                    <Grid container marginLeft='5px'>
                        <Grid item xs={4}>
                            <p>Image</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p>Name / Price</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>Aisle</p>
                        </Grid>
                    </Grid>
                    {list.list.items ? list.list.items.sort((a, b) => a.product.aisle > b.product.aisle ? 1 : -1).map(item => (
                        <ListTile key={item.product._id} product={item.product}></ListTile>
                    ))
                        :
                        <p>No items in list</p>}
                </Grid>
                <Grid item xs={6} marginTop='150px' >
                    <Floorplan>
                        <AisleOverlay onClick={() => handleModalOpen('1')} top={100} left={182} >1</AisleOverlay>
                        <AisleOverlay onClick={() => handleModalOpen('2')} top={100} left={240}>2</AisleOverlay>
                        <AisleOverlay onClick={() => handleModalOpen('3')} top={100} left={290}>3</AisleOverlay>
                        <DepartmentOverlay onClick={() => handleModalOpen('produce')} top={235} left={325}>Produce</DepartmentOverlay>
                        <DepartmentOverlay onClick={() => handleModalOpen('meat')} top={230} left={60}>Meat</DepartmentOverlay>
                    </Floorplan>
                </Grid>
            </Grid>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    padding-top: 100px;
    background-image: url(${bg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

const ListHeading = styled.h2`
    font-size: 2rem;
    text-align: center;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        font-size: 1.5rem;
        padding: 10px;
        margin: 0;
        border-bottom: 1px solid #f3e1d1;
    }
`

const Floorplan = styled.div`
    background-image: url(${floorplan});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    width: 600px;
    height: 348px;
    position: relative;
`

const AisleOverlay = styled.div`
    position: absolute;
    background-color: #d55826;
    width: 40px;
    height: 40px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border-radius: 50px;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: bold;
    color: #f3e1d1;
    text-align: center;
    cursor: pointer;
`

const DepartmentOverlay = styled.div`
    position: absolute;
    background-color: #d55826;
    padding: 10px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border-radius: 50px;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: bold;
    color: #f3e1d1;
    text-align: center;
    cursor: pointer;
`