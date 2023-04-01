import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helper/FormatPrice';
import { Button } from '../Styled/Button';
const Listview = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {
          products.map((curElem) => {
            const { id, name, image, price, category, description } = curElem;
            return (<>
              <div className="card grid grid-two-column">
                <figure>
                  <img src={image} alt="" className='feature-img' />
                  <figcaption className='caption'>{category}</figcaption>
                </figure>
                <div className="card-data">

                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 99)}....</p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <Button className='btn2'>Read More</Button>

                  </NavLink>


                </div>
              </div>
            </>)
          })
        }
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  .btn2{
    margin-top: 3rem;
    background-color: transparent;
    color:${({ theme }) => theme.color.btn};
    border:1px solid ${({ theme }) => theme.color.btn} ;
  &:hover{
    background-color:${({ theme }) => theme.color.btn};
    color: white;
    transition: all 0.5s ease;
  }

}
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 20%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.color.white};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.color.bg};
    border-radius: 1rem;
    .card-data {
      padding: 1rem 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      /* align-items: center; */
    }
    .card-data--price {
      color: ${({ theme }) => theme.color.helper};
    }
    h3 {
      color: ${({ theme }) => theme.color.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  } 
`
export default Listview
