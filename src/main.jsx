import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AppProvider } from './Context/ProductContext'
import { FilterContextProvider } from './Context/FilterContext'
import { CartProvider } from './Context/cart_context'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>

);
