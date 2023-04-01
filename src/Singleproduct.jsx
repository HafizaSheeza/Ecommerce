import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from './Context/ProductContext';
import PageNavigation from "./Components/PageNavigation";
import { Container } from "./Styled/Container";
import FormatPrice from "./Helper/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/Tb";
import { MdSecurity } from "react-icons/Md";

import Star from "./Components/Star";
import Addtocart from "./Components/Addtocart";
import MyImage from "./Components/Myimg";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isLoading, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isLoading) {
    return (<>
      <EmptyDiv>.....loading</EmptyDiv></>)
  }
  return (
    <><Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage imgs={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />


            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 25000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:<FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days ReplaceMent</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Delivered</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year guarantee</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>Available:
                <span {...stock > 0 ? "In Stock" : "Not Available"} ></span>
              </p>

              <p>
                Brand:<span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <Addtocart product={singleProduct} />}
          </div>
        </div>
        <div></div>
        <div></div>
      </div></Wrapper></>
  );
};
const EmptyDiv = styled.div`
  padding: 9rem 0;
  height: 80vh;
  font-size: 3rem;
  text-align: center;
`
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.color.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 998px) {
    .container{
      padding: 0 4rem;
    }
    
  }
 
@media screen and (max-width: 786px) {
    .container{
      padding: 0 4rem;
    }
    
  }
`;

export default SingleProduct;