import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AppProvider } from './Context/ProductContext'
import { FilterContextProvider } from './Context/FilterContext'
import { CartProvider } from './Context/cart_context'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-lf2t7ktwqljapx1u.uk.auth0.com"
    clientId="Lfpw4fnYde7CDRX60jlLDtAU9ZY6uizW"
    // {JSON.stringify(import.meta.env)}

    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>,
);
