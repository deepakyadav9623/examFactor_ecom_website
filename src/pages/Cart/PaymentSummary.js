import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import Close from '../../assets/images/refer-close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { cartTotal } from '../../utils';
import { handleApplyCoupon, handleApplyCouponManually, handleCouponCodeValidation, handleRemoveCoupon } from '../../redux/reducers/cartSlice';
import { discountCalulate } from "../../utils"

const PaymentSummary = ({ handleShow }) => {
    const selectorData = useSelector((state) => state.rootReducer.cartSlice);
    const dispatch = useDispatch();
    const [couponName, setCouponName] = useState(selectorData.applyedCoupon.title);
    const discountedPrice = selectorData.applyedCoupon.title && selectorData.isCouponValid && discountCalulate(cartTotal(selectorData.cartItems), selectorData.applyedCoupon.discount);
    

    useEffect(() => {
        setCouponName(selectorData.applyedCoupon.title);
    }, [selectorData.applyedCoupon.title]);
    
    return (
        <>
            <h5 className="font-weight-500 mb-0 fs-24 primary-blue">Summary</h5>
            <div className='d-flex justify-content-between mt-30'>
                <div className='fs-14 line-height-21'>Subtotal
                    <div className='fs-12'> (Inclusive of GST)</div>
                </div>
                <div className='fs-18 font-family-roboto'>₹ {(cartTotal(selectorData.cartItems)).toLocaleString('en-IN')}</div>
            </div>
            {selectorData.applyedCoupon.title && selectorData.isCouponValid &&
                <div className='d-flex justify-content-between mt-30'>
                    <div className='fs-14 line-height-21'>Coupon discount
                        <div className='fs-12'>Promo code applied <span className='font-weight-700'>({selectorData.applyedCoupon.title.toUpperCase()})</span></div>
                    </div>
                    <div className='fs-18 font-family-roboto couponDiscount'>- ₹ {(discountedPrice).toLocaleString('en-IN')}</div>
                </div>
            }
            <div className='d-flex justify-content-between mt-30'>
                <div className='fs-14 line-height-21'>Apply coupon </div>
                <div className='fs-12 line-height-18 primary-blue text-decoration-underline cursor-pointer' onClick={handleShow}>{selectorData.applyedCoupon.title === '' ? "Browse coupons" : "Change Coupon"}</div>
            </div>
            <div className='position-relative mt-5'>
                <input className={`form-control text-uppercase ${!selectorData.isCouponValid && couponName && "errorBorder"}`} style={{ height: "45px" }} value={couponName} onChange={(e) => {
                    setCouponName(e.target.value);
                }}>
                </input>
                {selectorData.applyedCoupon.title ?
                    <img className='position-absolute cursor-pointer' style={{ top: "14px", right: "8px" }} src={Close} alt='close-button' onClick={() => {
                        dispatch(handleRemoveCoupon());
                        // setCouponName('');
                        dispatch(handleCouponCodeValidation('delete'));
                    }} /> :
                    <button disabled={couponName?false:true} className='btn position-absolute apply-coupon-btn' onClick={() => {
                        dispatch(handleApplyCouponManually(couponName));
                        dispatch(handleCouponCodeValidation());
                    }}>Apply</button>
                }
            </div>
            {!selectorData.isCouponValid && <span className='text-danger mt-6 fs-14'>Coupon code is invalid.</span>}
            <div className='d-flex justify-content-between mt-90'>
                <h6 className='fs-14 line-height-21'>Total</h6>
                <h5 className='fs-24 line-height-28 font-family-roboto font-weight-700'>₹ {(cartTotal(selectorData.cartItems) - discountedPrice).toLocaleString('en-IN')}</h5>
            </div>
            <div className='d-flex mt-60'>
                <input type="checkbox" id="tc-agree" name="tc-agree" className='me-6' />
                <label htmlFor="tc-agree" className='fs-12 line-height-18'> I am agreeing to <span className='primary-blue'>T&C</span>.</label>
            </div>
            <button className='mt-17 h-52 btn btn-warning w-100 fs-20 font-weight-700'>
                Proceed to Pay
            </button>
        </>
    )
}

export default PaymentSummary