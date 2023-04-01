import React, { useContext } from 'react'
import Herosection from './Components/Herosection'
import styled from 'styled-components'
import { AppContext, useProductContext } from './Context/ProductContext'
const About = () => {
    const { myName } = useProductContext();
    const data = {
        id: "2",
        name: "Ecommerce",
        img: "./Images/main2.jfif",
    }
    return (
        <>

            <Wrapper>
                {myName}
                <Herosection {...data} />
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
   .img {
   max-width: 80%;
 
}`;

export default About
