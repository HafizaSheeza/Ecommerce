
import styled from "styled-components";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../Styled/Button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (<>
    <Wrapper>


      <footer>
        <div className="container grid grid-four-columns">
          <div><h3>Sheeza Nawaz</h3>
            <p>Lorem Ipsum has been the industry's standard dummy </p></div>
          <div className="footer-subscribe"><h3>Subscribe to get important updates</h3>
            <form action="#"><input type="email" name="" id="" placeholder="Email" /> <input type="submit" value="Subscribe" name="" id="" /></form></div>
          <div ><h3>Follow Us</h3> <div className="footer-social--icons">
            <div>< FaGithub className="icons" /></div>
            <div>< FaDiscord className="icons" /></div>
            <div>< FaFacebook className="icons" /></div>
          </div></div>
          <div className="footer-contact">
            <h3>Contact Us</h3> <h3>+92 3024581877</h3>
          </div></div>
        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()}Sheeza Nawaz All right Reserved</p>
            <div><p>PRIVACY POLICY</p>
              <p>TERM AND CONDITION</p></div>
          </div>
        </div>
      </footer></Wrapper></>)
}
const Wrapper = styled.section`
  footer{
 
    background-color:${({ theme }) => theme.color.footer_bg} ;
    color: white;
    padding: 2rem 0 ;
   
  } 

 
  .footer-subscribe input{
        margin:2rem 0;
        padding:1rem 2rem;

    }
  
  .grid-four-columns{
    
    grid-template-columns: 1fr .8fr .8fr .5fr;
    padding: 2rem 0;
    justify-content: center;
   
  }
  .footer-social--icons{
    display: flex;
    gap:2rem;
    div{
    border: 2px solid white;
   
    border-radius: 50%;
    padding: 1rem;
    margin: 1rem 0;

  }
  .icons{
    font-size: 2.4rem;
  }
  }
  h3:last-child,p {
margin: 1rem 0;
  }
  .footer-bottom-section{
  
    padding: 0px;
    margin: 0px;
  }
  @media screen and (max-width: 998px) {
    .grid-four-columns{
    margin:0 auto;
    grid-template-columns: 1fr 1fr;
    
  }
  .container{
        padding: 0 3.2rem;
      }
  }
  @media screen and (max-width: 700px) {
    .container{
        padding: 0 3.2rem;
      }
    .grid-four-columns{
    margin:0 auto;
    grid-template-columns: 1fr ;
    
  }
  input[type="submit"]{
  
font-size: 1.8rem;
margin-left: -.2rem;
}
  }
`;
export default Footer;