import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../Context/cart_context';
import FormatPrice from '../Helper/FormatPrice';
import { Button } from '../Styled/Button';
import CartItem from './CartItem';

const Cart = () => {

  // const { name, picture } = user;
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log(cart);

  if (cart.length < 1) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item </h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>


      <div className="container">

        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/product">
            <Button className='btn-shop'> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear btn-shop" onClick={clearCart}>
            clear cart
          </Button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// }
const EmptyDiv = styled.div`
    display: grid;
    place-items: center;
    height: 50vh;
    h1{
        font-size: 4rem;
        text-transform: capitalize;
        font-weight: 300;
    }
`
const Wrapper = styled.section`
.profile-data{
display: flex;
margin-bottom: 4rem;
gap: 1rem;
align-items: center;
img{
  border-radius: 50%;
}

}
padding: 0rem 0;
.cart-two-button{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .btn{
        background-color: #e74c3c;
    }
}
   .grid-four-column{
    grid-template-columns: repeat(4,1fr);
   }
   .grid-five-column{
    grid-template-columns: repeat(4,1fr) 0.3fr;
    text-align: center;
    align-items: center;
   }
   .cart-heading{
    text-align: center;
    text-transform: capitalize;
   }
   hr{
    margin-top: 1rem;
   }
   .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
   }
   .color-div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
   }
   .color-style{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
   }
   .amount-toggle{
    margin-top: 3rem;
    margin-bottom: 1rem;
display: flex;
justify-content:center ;
gap: 2.4rem;
align-items: center;
font-size: 1.4rem;
button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.color.btn};
    }
  }
  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
.No-Cart-Items{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
}
.order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }
    div:last-child {
      background-color: #fafafa;
    }
    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.color.heading};
    }
  }
  @media screen and (max-width: 700px) {
    
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }
    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;
      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;
export default Cart
