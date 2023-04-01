import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (<>

        <Mainheader className="section">
            <div className="navs">
                <NavLink to="/">
                    <img src="./Images/logos.png" alt="" />
                </NavLink>

                <Navbar /></div>
        </Mainheader>
    </>)
}
const Mainheader = styled.section`
position: sticky;
 top: 0px;
 z-index: 999;
 padding :0 2rem;
  background-color:white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 100%;
 .section{
    /* padding :0 2rem; */
 
 
 }

.navs{
    overflow: hidden;
    height: 7rem;
  
 /* background-color: white; */
padding: 0 1rem;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   
   
img{
    width: 100px;
    /* margin-top: 1.5rem; */
}
}
      
        @media screen and (max-width:998) {
            padding: 0%;
            .section{
               
                padding:0;
            }
            
        }
     
`;
export default Header;