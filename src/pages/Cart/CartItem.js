import React from 'react'
import './style.scss';
import DeleteCart from '../../assets/images/delete-cart.svg'

// import cartItems from "../../assets/jsonData/cartItems.json"
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveFromCart } from '../../redux/reducers/cartSlice';
import { numberFormatter } from '../../utils';

const CartItem = () => {
    const selectorData = useSelector((state) => state.rootReducer.cartSlice);
    const dispatch = useDispatch()

    return (
        <>
            <div className='cart-items '>
                {selectorData.cartItems.map(cartItem => {
                    return (
                        <div className='cards cart-item' key={cartItem.id}>
                            <div className={`card-body d-flex flex-wrap align-items-md-start justify-content-md-start flex-lg-nowrap flex-row`}>
                                <div style={{ width: "101px", height: "101px" }}>
                                    <img
                                    src={cartItem.img}
                                    className="w-100"
                                    alt="explore catalouge"/>

                                </div>
                                <div className={`ms-lg-4 w-100 `}>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="font-weight-500 mb-0 fs-24 primary-blue" style={{maxWidth:"450px"}}>{cartItem.title}</h5>
                                        <h5 className="font-weight-700 font-family-roboto mb-0 fs-18">₹ {numberFormatter(cartItem.price)}</h5>
                                    </div>
                                    <div className='dark-black mt-10 fs-14 line-height-21'>{cartItem.content} 
                                        {/* <br />
                                        {cartItem.description.line2} <br />
                                        {cartItem.description.line3} */}
                                    </div>
                                    <div className='mt-10 fs-14 font-weight-500 font-family-roboto line-height-17 text-decoration-underline cursor-pointer' onClick={() => dispatch(handleRemoveFromCart(cartItem.id))}>
                                        <img src={DeleteCart} alt='delete-cart' className='me-6' />Remove from cart
                                    </div>
                                    <div className='font-weight-700 mt-10'> Add on </div>
                                    <div className='d-flex mt-10 align-items-center'>
                                        <input type="checkbox" id="ebook" name="ebook" className='me-6' />
                                        <label htmlFor='ebook' className='fs-14 line-height-21'> {cartItem.addonProduct}</label><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CartItem