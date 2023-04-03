import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ alt: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  useEffect(() => {
    setMainImage(imgs[0])
  }, [setMainImage])
  return (
    <Wrapper>
      <div className="grid grid-four-column" >
        {imgs.map((curElm, index) => {
          // const { url, filename } = curElm
          console.log(curElm)
          return (
            <figure key={index} >
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
     
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.color.shadow};
      img:active{
        border: 2px solid black;
        margin: 10px;
      }
    }
    
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.color.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
   
    .grid-four-column {
    
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
    .main-screen {
order: -1;
    }
  }
`;

export default MyImage;