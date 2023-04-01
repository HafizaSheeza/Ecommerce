import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import { GlobalStyle } from './GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer';
import Singleproduct from './Singleproduct';
import Cart from './Components/Cart';
import Error from './Error';
import About from './About';
import GotoTop from './Components/GotoTop';
import Service from './Components/Service';
import Contact from './Contact';
function App() {

  const theme = {
    color: {
      btn: "rgb(98 84 243)",

      bg: "#f0f2f5",
      text: "black",
      heading: "black",

      white: "#fff",
      helper: "#8490ff",

      footer_bg: "#0a1435",
      black: "black",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132 144 255)0%,rgb(98 189 252)100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15)0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",
    },
    media: { mobile: "768", tab: "998" },
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />

          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path='/product' element={<Products />} />
            <Route exact path='/service' element={<Service />} />
            <Route exact path='/singleproduct/:id' element={<Singleproduct />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='*' element={<Error />} />
          </Routes>

          <Footer />
          <GotoTop />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
