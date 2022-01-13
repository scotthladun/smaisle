import React, { useState, useEffect } from 'react'
import ProductTile from '../components/ProductTile'
import axios from 'axios'
import styled from 'styled-components'
import { Accordion, AccordionSummary, AccordionDetails, Grid, Pagination, TextField, InputAdornment, IconButton } from '@mui/material'
import bg from '../assets/bg-texture.png'
import { Add, Search } from '@mui/icons-material'

export default function Products() {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState('');


    const fetchProducts = async (page) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5001/products',
            data: {
                page: page,
            }
        }).then(res => {
            setProducts(res.data);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }).catch(err => {
            console.log(err);
        });
    }

    const fetchProductCount = async () => {
        axios({
            method: 'GET',
            url: 'http://localhost:5001/products/count'
        }).then(res => {
            setPageCount(Math.ceil(res.data / 12));
        }).catch(err => {
            console.log(err);
        });
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    const handleFilterExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const handleUpdateSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSearch = (event) => {
        const searchTerm = search;
        console.log(searchTerm);
        setCurrentPage(1);
        axios({
            method: 'POST',
            url: 'http://localhost:5001/products/search',
            data: {
                "searchTerm": searchTerm,
                "page": currentPage
            }
        }).then(res => {
            axios({
                method: 'POST',
                url: 'http://localhost:5001/products/search/count',
                data: {
                    "searchTerm": searchTerm
                }
            }).then(res => {
                console.log(res.data);
                setCurrentPage(1);
                setPageCount(Math.ceil(res.data / 12));
            }).catch(err => {
                console.log(err);
            });
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const fetchProductSearch = async (currentPage) => {
        const searchTerm = search;

        axios({
            method: 'POST',
            url: 'http://localhost:5001/products/search',
            data: {
                "searchTerm": searchTerm,
                "page": currentPage
            }
        }).then(res => {
            setProducts(res.data);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        if (search === '') {
            fetchProducts(currentPage);
        } else {
            fetchProductSearch(currentPage);
        }
        console.log(products);
    }, [currentPage]);

    useEffect(() => {
        fetchProductCount();
    }, []);

    return (
        <Wrapper>
            <Grid container spacing={15} justifyContent="center">
                <Grid item xs={3}>
                    <FiltersWrapper>
                        <h2>Search</h2>
                        <TextField
                            label="Search"
                            variant="outlined"
                            size="small"
                            value={search}
                            onChange={handleUpdateSearch}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleSearch} edge='end'>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                        />
                        {/* <Accordion expanded={expanded === 'panel1'} onChange={handleFilterExpand('panel1')} sx={{ width: '100%' }} elevation={0} disableGutters >
                            <AccordionSummary
                                expandIcon={<Add />}
                            >
                                <h3>Price</h3>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div>
                                    <input type="checkbox" id="price-1" name="price" value="1" />
                                    <label htmlFor="price-1">$0 - $10</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-2" name="price" value="2" />
                                    <label htmlFor="price-2">$10 - $20</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-3" name="price" value="3" />
                                    <label htmlFor="price-3">$20 - $30</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-4" name="price" value="4" />
                                    <label htmlFor="price-4">$30 - $40</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-5" name="price" value="5" />
                                    <label htmlFor="price-5">$40 - $50</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-6" name="price" value="6" />
                                    <label htmlFor="price-6">$50 - $60</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="price-7" name="price" value="7" />
                                    <label htmlFor="price-7">$60+</label>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleFilterExpand('panel2')} sx={{ width: '100%' }} elevation={0} disableGutters >
                            <AccordionSummary
                                expandIcon={<Add />}
                            >
                                <h3>Category</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <input type="checkbox" id="category-1" name="category" value="1" />
                                    <label htmlFor="category-1">Fruits & Vegetables</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category-2" name="category" value="2" />
                                    <label htmlFor="category-2">Meats</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category-3" name="category" value="3" />
                                    <label htmlFor="category-3">Category 3</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category-4" name="category" value="4" />
                                    <label htmlFor="category-4">Category 4</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category-5" name="category" value="5" />
                                    <label htmlFor="category-5">Category 5</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="category-6" name="category" value="6" />
                                    <label htmlFor="category-6">Category 6</label>
                                </div>
                            </AccordionDetails>
                        </Accordion> */}

                    </FiltersWrapper>
                </Grid>
                <Grid item xs={9} >
                    <ProductGrid>
                        {
                            products.map(product => {
                                return <ProductTile key={product._id} product={product} />
                            })
                        }
                    </ProductGrid>
                    <PaginationWrapper>
                        <Pagination count={pageCount} page={currentPage} size='large' onChange={handlePageChange} />
                    </PaginationWrapper>
                </Grid>
            </Grid>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    margin-top: 100px;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: repeat;
    background-position: top center;
    justify-content: center;
    align-items: center;
`
const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 300px;
    padding: 30px;
    position: sticky;
    top: 120px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    margin-left: 20px;
`

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 20px;
`

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
`