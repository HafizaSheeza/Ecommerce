import React from 'react'
import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from '../Context/FilterContext'
import FormatPrice from '../Helper/FormatPrice';
import { Button } from '../Styled/Button';
import { FcSearch } from 'react-icons/fc';
const FilterSection = () => {
  const {
    filters: { text, category, company, color, setLoading, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();
  if (setLoading) {
    return (<>
      <div>.....loading</div></>)
  }
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property == "colors") {
      return (newVal = ["all", ...new Set([].concat(...newVal))])

      // newVal = newVal.flat();
    } else {
      return (newVal = ["all", ...new Set(newVal)]);
    }




  }
  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorData = getUniqueData(all_products, "colors")

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />

        </form>
        {/* <FcSearch className='icon-search' /> */}
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return <button key={index} type="button" className={curElem == category ? "active" : " "} name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <select className="filter-company--select" name="company" id="company" onClick={updateFilterValue} >
          {
            companyData.map((curElem, index) => {
              return <option key={index} value={curElem} name="company" selected={company === curElem ? true : false}>{curElem}</option>

            })
          }
        </select>
      </div>
      <div className="filter-color colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorData.map((curColor, index) => {
              if (curColor == "all") {
                return (
                  <button key={index}
                    type='button'
                    value={curColor}
                    name="color"
                    className="color-all--style "

                    onClick={updateFilterValue} >

                    All
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  type='button'
                  value={curColor}
                  name="color"
                  className={color === curColor ? "btnStyle active" : "btnStyle"}
                  style={{ backgroundColor: curColor }}
                  onClick={updateFilterValue} >

                  {color === curColor ? <FaCheck className='checkStyle' /> : null}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p> <FormatPrice price={price} /></p>
        <input type="range" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} name="price" id="" />
      </div>
      <div className="filter-color">
        <Button onClick={clearFilters} className="btn-shop">Clear Filters</Button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
position: sticky;
top: 20px;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
 
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
   
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      /* display: flex;
    align-items: center;
    justify-content: center; */
   
    }
    .icon-search{
/* margin-left: -30px; */
/* margin-top: -50px; */
font-size:2rem;
text-align: center;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.color.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.color.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.color.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  @media screen and (max-width: 700px) {
    .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 95%;
      margin: auto;
    }
  }
  }
`;

export default FilterSection;
