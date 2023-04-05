import styled from "styled-components";
import FeatureProduct from "./FeatureProduct";
import Herosection from "./Herosection";
import Service from "./Service";
import Trusted from "./Trusted";

import React from "react";
const Home = () => {
    const data = {
        id: "1",
        name: "Shezy",
        img: "./Images/main.jfif",
    }
    return (<>
        <Wrapper>
            <Herosection {...data} />
            <FeatureProduct />
            <Service />
            <Trusted /></Wrapper></>)
}
const Wrapper = styled.section`
padding: 4rem  0;
   .img {
   max-width: 80%;
 
}
`;
export default Home;