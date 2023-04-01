

const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price)

            let maxPrice = Math.max(...priceArr)

            return {
                ...state,
                isLoading: false,
                all_products: [...action.payload],
                filter_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
            }
        case "SET_GRIDVIEW":
            return {
                ...state,
                isLoading: false,
                grid_view: true,
                list_view: false,
            };
        case "SET_LISTVIEW":
            return {
                ...state,
                isLoading: false,
                list_view: true,
                grid_view: false,

            };
        case "SORT":

            return {
                ...state,

                sorting_value: action.payload,


            };
        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];
            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {

                    return a.price - b.price;


                }
                if (sorting_value === "highest") {

                    return b.price - a.price;


                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }






            newSortData = tempSortProduct.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category == category;
                });
            }
            if (company.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company == company;
                });
            }
            if (color.toLowerCase() !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.colors.includes(color)
                );
            }

            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price = price)
            } else {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price
                );
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,

                }
            }
        default:
            return state;
    }
}

export default filterReducer
