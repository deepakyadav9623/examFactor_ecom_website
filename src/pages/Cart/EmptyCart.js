import React from 'react'
import CartIcon from '../../assets/images/empty-cart.svg'

import { useNavigate } from "react-router-dom";


const EmptyCart = () => {
    let navigate = useNavigate();
    return (
        <div className='empty-cart pt-120 pb-220'>
            <img src={CartIcon} alt='empty-cart' className='d-block m-auto' />
            <h5 className='text-center fs-32 primary-blue line-height-35 mt-50 mb-32'>Uh oh! your cart is empty.</h5>
            <p className='text-center line-height-24'>Look like your have not added anything to your cart, <br />
                Go ahead and <span className='text-orange text-decoration-underline cursor-pointer' onClick={() => navigate('/explore-catalogue')}>explore catalogue</span></p>
        </div>
    )
}

export default EmptyCart