import React from 'react'
import './style.scss';
import Arrow from '../../assets/images/arrow.svg'
const CartHeader = () => {
    return (
        <div className="mt-118 card border-0 bg-gray">
            <div className="pb-20 pt-15 pl-120">
                <h6 className="fs-12 line-height-18 mb-20">HOME {<img src={Arrow} alt='arrow' />} YOUR CART</h6>
                <div className="fs-32 line-height-48 font-weight-500">Your cart</div>
            </div>
        </div>

    )
}

export default CartHeader