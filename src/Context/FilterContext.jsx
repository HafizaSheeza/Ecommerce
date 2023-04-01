import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/filterReducer'
const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    isLoading: false,
    isError: false,
    grid_view: true,
    list_view: false,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },


}
const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    const setGridView = () => {
        dispatch({ type: "SET_LOADING" })
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListView = () => {
        dispatch({ type: "SET_LOADING" })
        return dispatch({ type: "SET_LISTVIEW" })
    }
    const setLoading = () => {
        return dispatch({ type: "SET_LOADING" })
    }
    const sort = (event) => {
        dispatch({ type: "SET_LOADING" })
        let userValue = event.target.value;


        return dispatch({ type: "SORT", payload: userValue })
    }
    const updateFilterValue = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }
    // to sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);

    // to load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sort, updateFilterValue, setLoading, clearFilters }} >{children}</FilterContext.Provider>
    )
}
const useFilterContext = () => {
    return useContext(FilterContext)
}

export { FilterContextProvider, useFilterContext }