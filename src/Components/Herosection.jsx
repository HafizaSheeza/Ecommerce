import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styled/Button'
import { NavLink } from 'react-router-dom'
const Herosection = (props) => {
    return (
        <>
            <Wrapper>
                <div className='container' key={props.id}>
                    <div className="grid grid-two-column">
                        <div className='hero-data'>
                            <p>Welcome to</p>
                            <h1>{props.name} Store</h1>
                            <p className='hero-para'>Lorem ipsum dolor sit amet g elit. totam, dolorum harum eos voluptas repudiandae aperiam nesciunt quidem omnis! Vel quos modi fuga dolore!</p>
                            <NavLink to="/product">
                                <Button className='btns'>Shop Now</Button>
                            </NavLink>
                        </div>
                        <div className='hero-imgs'>
                            <picture>
                                <img src={props.img} alt="" className="img" /></picture>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
/* padding: 1rem 0; */
.hero-data{
    display: flex;
    justify-content: center;
   
    flex-direction: column;
}
.hero-para{
    margin-top:1.5rem;
margin-bottom:3.4rem;
max-width:45rem;
}
.hero-imgs{
    display: flex;
    justify-content:center ;
    align-items: center;
    text-align: center;
     width:100%;
  
}
picture{
    width: 100%;
    /* height: max-content; */
    /* text-align: center; */
   
}
.img{
    width: 100%;
}
.btns{
    text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
export default Herosection
