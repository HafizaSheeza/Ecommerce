import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FaAlignJustify, FaTimes, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
// import { AiOutlineMenu } from "react-icons/Ai";
import { MdOutlineClose } from "react-icons/Md";
import { useCartContext } from "../Context/cart_context";

import { Button } from "../Styled/Button";
const Navbar = () => {


    const [active, setActive] = useState();

    const { total_item } = useCartContext();


    return (<>
        <Wrapper>
            <div className={active ? "menu active" : "menu "}>
                <ul className="navbar-links">
                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links" to='about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links" to='contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links" to='service'>Service</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links" to='product'>Product</NavLink>
                    </li>





                    <li>
                        <NavLink onClick={() => setActive(false)} className="nav-links carts" to='cart'>
                            < FiShoppingCart className="cart-trolly" />
                            {
                                total_item > 0 &&
                                <span className="cart-total--item" >{total_item}</span>

                            }

                        </NavLink>
                    </li>


                </ul>
                <div className="mob-navbar-btn">
                    <FiMenu name="menu-icon" onClick={() => setActive(true)} className="mob-nav-icon" />
                    <MdOutlineClose name="close-icon" onClick={() => setActive(false)} className="mob-nav-icon" />
                </div>
            </div>
        </Wrapper>

    </>)
}
const Wrapper = styled.section`
.user-name{
    font-size: 1.5rem;
    color:${({ theme }) => theme.color.btn} ;
}
.mob-navbar-btn{
display: none;
font-size: 2.5rem;

}
.login-button{
    background-color: #fff;
    border: 1.5px solid ${({ theme }) => theme.color.btn};
    color:${({ theme }) => theme.color.btn} ;
    padding:10px 12px ;
    border-radius: .5rem;
    /* font-weight: 550; */
    /* text-transform: capitalize; */
}
.login-button:hover{
    background-color: ${({ theme }) => theme.color.btn} ;
    color: white;
    transition: all 0.5 ease;
}
.mob-nav-icon[name="close-icon"]{
   display :none ;
}
   .navbar-links{
   
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    li{
        font-weight:500;
        .nav-links{
            color: black;
            font-weight: 500;
            font-size: 1.7rem;
            z-index: 999;
            &:hover,&:active{
color:blue;
    }

        }
    }
   }
   .carts{
      
        position: relative;
        z-index: 999;

    }
          .cart-trolly{
         
position: relative;
font-size:2.2rem;
z-index: 999;

        }
      
        .cart-total--item{
            font-size: 1rem;
    width: 1.8rem;
    height:1.8rem;
    border-radius: 100px;
    color: white;
   position: absolute;
   top: -10px;right:-10px;
   text-align: center;
   display: grid;
   place-items: center;
   
z-index: 999;
background-color: ${({ theme }) => theme.color.btn};
   
} 
.menu{
    /* background-color:green; */
}
@media screen and (max-width: 998px) {
    .navbar-links{
        gap:1.5rem;
    }
}
   @media screen and (max-width: 700px) {
    ::-webkit-scrollbar {
    display: none;
}

    .navbar-links{
        width: 100vw;
        height: 100vh;
        /* font-size: 4rem; */
        /* position: fixed; */
        position: absolute;
        top: 0%;right:0px;bottom:0px;
        background-color:#fff;
        display: flex;
        gap: 4rem;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(0%);
        visibility:hidden;
        opacity: 0;
        overflow-y: hidden;
        
    }
    .mob-navbar-btn{
display: inline-block;
z-index: 999;
}
.active .mob-nav-icon{
    display: none;
    position: absolute;
    top: 3%;
    right: 10%;
    color: black;
    z-index: 999;
}
.active .close-icon{
    display: inline-block;
    z-index: 999;
}
.active .navbar-links{
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
   font-size: 4rem;
   li{
        font-weight:500;
         .nav-links{
            color: black;
            font-weight: 500;
            font-size: 3rem;
            z-index: 999;
            &:hover,&:active{
color:blue;
    }
    .cart-trolly{
            font-size: 4rem;

}

        }
    }
}
.active .mob-nav-icon[name="close-icon"]{
   display :inline-block ;
   font-size: 4rem;
   margin-top: 2rem;
}

}



`;
export default Navbar;