import { useState } from "react";
import Wdata from "./Wdata";

import React from "react";
import styled from "styled-components";
const Womencard = () => {
    const [Category, setCategory] = useState(Wdata)
    return (<>
        <Wrapper>
            <section>
                <div className="container grid grid-four-column">
                    {
                        Category.map((curEle, index) => {
                            return (<>
                                <div className="categories">
                                    <figure key={curEle.id}>
                                        <img src={curEle.img} alt="" className="imges" />
                                    </figure>
                                </div>
                            </>)
                        })
                    }
                </div>
            </section>
        </Wrapper>
    </>)
}
const Wrapper = styled.section`
padding: 3rem 0;
.container{
    max-width: 110rem;
    margin:0 auto;
   
    .imges:hover{
        transform: scale(1.2);
        cursor: pointer;
    }
      
 

}
.categories{
   
  

  figure{
    width:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:hidden;
    transition:all 0.5s linear;
    img{
        max-width:90%;
        height:20rem;
        margin-top:1.5rem;
        transition:all 0.2s linear;
        
    }
  
  }
}

    .grid{
        display: grid;
        gap: 1rem;
      
    }
    .grid-four-column{
        grid-template-columns: repeat(4,1fr);
        
      
    }



    @media screen and (max-width: 998px) {
        .container{
        padding: 0 3.2rem;
      }
        .grid-four-column{
        grid-template-columns:1fr 1fr;
        justify-content: center;
        text-align: center;
        
  }
  

    }
    @media screen and (max-width: 700px) {
    .container{
        padding: 0 3.2rem;
      }
  
  .grid-four-column{
        grid-template-columns:1fr;
        justify-content: center;
        text-align: center;
  }
  }
`;
export default Womencard;