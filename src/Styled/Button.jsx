import styled from "styled-components";
import React from "react";
export const Button = styled.button`
    border: none;
    background-color:${({ theme }) => theme.color.btn} ;
    padding: 1.4rem 2.4rem;
    text-transform: uppercase;
    color:${({ theme }) => theme.color.white};
    text-transform:uppercase;
text-align:center;
cursor:pointer;
transition:all 0.3s ease;
-webkit-transition:all 0.3s ease 0s;
-moz-transition:all 0.3s ease 0s;
-o-transition:all 0.3s ease 0s;
&:hover,&:active{
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255/30%);
    transform:scale(0.96);
}
a{
    text-decoration:none;
    color:rgb(255 255 255);
} `;

