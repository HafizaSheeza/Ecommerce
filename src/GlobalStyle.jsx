import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 
 }
 html{
    font-size: 62.5%;
    overflow-x: hidden;
 }
 
h2 {
  
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }
 .grid{
    display: grid;
    
    gap: 4rem;
  }
  .container{
    margin:3rem auto;
   max-width: 110rem;

  padding: 3rem 0;

 } 
 .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }

     .intro-data {
      padding-top: 1rem;
      text-transform: uppercase;
      color: #5138ee;
    }

 h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

 .grid-two-column{
    grid-template-columns: repeat(2,1fr);
    justify-content: space-between;
 }
 .grid-three-column{
grid-template-columns: repeat(3,1fr);
    }
li{
    list-style-type: none;
}
h1{
    font-size: 5rem;
    font-weight: 400;
}
h3{
    font-size: 1.8rem;
    font-weight: 400;
}
p{
    font-size: 1.65rem;
    opacity: .8;
    line-height: 1.5;
}
a{
    text-decoration: none;
}
input{
    outline: none;
}
input[type="submit"]{
    max-width:auto;
    background-color:${({ theme }) => theme.color.btn};
color:${({ theme }) => theme.color.white};
padding:1.4rem 2.4rem;
border:none;
text-transform:uppercase;
text-align:center;
cursor:pointer;
transition:all 0.3s ease;
-webkit-transition:all 0.3s ease 0s;
-moz-transition:all 0.3s ease 0s;
-o-transition:all 0.3s ease 0s;
}
input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.color.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    text-transform: uppercase;
  
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.color.btn};
    color: ${({ theme }) => theme.color.white};
    padding: 1.4rem 2.2rem;

    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    }
@media screen and (max-width: 990px) {
 .container{
    padding: 0 3.2rem;
 }
    .grid-two-column,.grid-four-column,  .grid-three-column,  .service-2{
        grid-template-columns: 1fr 1fr;
      
       
    }
   
    
}
@media screen and (max-width: 786px) {
    .btn-shop{
      font-size: 1rem;
      padding: 10px;
    }
    html{
        font-size: 50%;
      }
     
      .grid{
        gap: 3.2rem;
      }
 .container{
    padding: 0 3.2rem;
 }
    .grid-two-column,.grid-three-column,.grid-four-column,    .service-2{
        grid-template-columns: 1fr;
      
       
    }
    .hero-data{
      
        justify-content: flex-start;
        margin-left:5rem;
   /* align-items: center; */
   }
   .hero-data h1{
    text-align: left;
   }
    .hero-imgs{
      
        order: -1;
    }
}

`;
