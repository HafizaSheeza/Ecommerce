import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../Context/cart_context';
import FormatPrice from '../Helper/FormatPrice'
import CartAmountToggle from './CartAmountToggle'

const CartItem = ({ id, name, color, image, price, amount, }) => {
    const { removeItem, setDecrement, setIncrement } = useCartContext();
    // const [Amount, setAmount] = useState(1);
    // const setDecrease = () => {
    //     Amount > 1 ? setAmount(Amount - 1) : setAmount(amount);
    // };

    // const setIncrease = () => {
    //     Amount < stock ? setAmount(Amount + 1) : setAmount(stock);
    // };

    return (
        <div className="cart-heading grid grid-five-column">
            <div className="cart-image--name">
                <div><figure>
                    <img src={image} alt="" />
                </figure></div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Color: </p>
                        <div className="color-style" style={{ backgroundColor: color, color: color }}>


                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-hide">
                <p><FormatPrice price={price} /></p>
            </div>

            <CartAmountToggle amount={amount} setDecrease={() => setDecrement(id)}
                setIncrease={() => setIncrement(id)} />
            <div className="cart-hide">
                <p><FormatPrice price={price * amount} /></p>
            </div>
            <div><FaTrash className='remove_icon' onClick={() => removeItem(id)} /></div>

        </div>
    )
}

export default CartItem
