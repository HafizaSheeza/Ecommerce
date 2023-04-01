import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
const GotoTop = () => {
    const [Top, setTop] = useState(false)
    const { pathname } = useLocation();
    const Totop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const scrollEvent = () => {
        let height = 200;
        const scrollw = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollw > height) {
            setTop(true)

        } else {
            setTop(false)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0),
            window.addEventListener("scroll", scrollEvent)
    }, [pathname])
    return (
        <Wrapper>
            {Top && (<div onClick={Totop} className="top">
                <FaArrowUp className="top-btn--icon" />
            </div>)}
        </Wrapper>
    )
}
const Wrapper = styled.section`
position: relative;
    .top{
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.btn};
        color: white;
        width: 5rem;
        height: 5rem;
        display:flex ;
        position: fixed;
        bottom: 5rem;
        right: 3rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1;
        font-size: 2rem;
        .top-btn--icon {
            animation: gototop 2.2s linear infinite alternate-reverse;
        } 
        @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(.5rem);
      }
    }
    }
`;
export default GotoTop
