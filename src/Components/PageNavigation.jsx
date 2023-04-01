import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNavigation = ({ title }) => {
    return (
        <Wrapper>
            <NavLink to="/" className="nav-links">Home</NavLink>/{title}
        </Wrapper>
    )
}
const Wrapper = styled.section`
 height:10rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding-left: 4rem;
 font-size: 3rem;
 /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
 /* background-color: ${({ theme }) => theme.color.bg}; */

        .nav-links{
            color: ${({ theme }) => theme.color.btn};
            font-weight: 500;
            font-size: 3rem;
            z-index: 999;
            &:hover,&:active{
color:blue;
    }

        }

`

export default PageNavigation
