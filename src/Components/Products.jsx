import React from 'react'
import styled from 'styled-components'
import Product from './Product'

import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'
import { useFilterContext } from '../Context/FilterContext'
import { useProductContext } from '../Context/ProductContext'
const Products = () => {
    const { isLoading } = useProductContext();
    if (isLoading) {
        return (<>
            <EmptyDiv>.....loading</EmptyDiv></>)
    }
    return (
        <Wrapper>
            <div className="container grid grid-filter-column">
                <div>
                    <FilterSection />
                </div>
                <div className='product-view--sort'>
                    <div className="sort-filter">
                        <Sort />
                    </div>
                    <div className="main-product">
                        <ProductList />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const EmptyDiv = styled.div`
  padding: 9rem 0;
  height: 40vh;
  color: ${({ theme }) => theme.color.btn};
  font-size: 3rem;
  text-align: center;
`
const Wrapper = styled.section`
    .grid{
        display: grid;
    }
    .grid-filter-column{
        grid-template-columns: 0.2fr 1fr ;
    }
   
    @media screen and (max-width: 540px) {

        .grid-filter-column{
        grid-template-columns: 1fr ;
    }
    }
    
`
export default Products
