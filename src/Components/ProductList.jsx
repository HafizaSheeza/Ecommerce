import React from 'react'
import { useFilterContext } from '../Context/FilterContext'
import GridView from './GridView';
import Listview from './Listview';

const ProductList = () => {
    const { grid_view, filter_products } = useFilterContext();
    if (grid_view === true) {
        return <GridView products={filter_products} />
    }
    if (grid_view === false) {
        return <Listview products={filter_products} />
    }

}

export default ProductList
