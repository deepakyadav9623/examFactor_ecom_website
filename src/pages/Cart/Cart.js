import React from 'react'
import RecommendProducts from './RecommendProducts'
import PaymentSummary from './PaymentSummary'
import CartItem from './CartItem'
import './style.scss';

const Cart = ({handleShow}) => {
    return (
        <div className='py-50 container'>
            <div className='d-flex justify-content-between c-gap-20'>
                <div className="p-0 w-100 max-w-928 ">
                    <CartItem />
                    <RecommendProducts />
                </div>
                <div>
                <div className='summary'>
                    <PaymentSummary handleShow={handleShow}/>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart