import React from 'react'
import styled from 'styled-components';
const Trusted = () => {
    return (
        <Wrapper>

            <div className='container ' >

                <div className='para'> <h3>Trusted by 1000+ Companies</h3></div>
                <div className="grid grid-four-column">
                    <div>
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="" />
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="" />
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="" />
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="" />
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="" />
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  background-color: #f0f2f5;
  padding: 4rem 0;

h3{
text-align: center;
font-size: 2rem;
    font-weight: bold;

}
img{
    max-width: 90%;
}
.grid-four-column{
    padding: 2rem 0;
    text-align: center;
    justify-content: center;
    align-items: center;
grid-template-columns: repeat(5,100px);
}
@media screen and (max-width: 700px) {
    .grid-four-column{
grid-template-columns: 1fr 1fr;

    }
    .para{
        padding: 1rem 0;
        h3{
    padding-top: 3rem;
}
    }
    img{
    max-width: 80%;
}
}
`;
export default Trusted
