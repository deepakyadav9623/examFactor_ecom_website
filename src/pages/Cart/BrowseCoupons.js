import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import ApplyCoupon from '../../assets/images/apply-coupon.svg'
import AppliedCoupon from '../../assets/images/applied-coupon.svg'
import CloseButton from '../../assets/images/close.svg'
import CouponCode from "../../assets/jsonData/CouponCode.json"
import { handleApplyCoupon, handleCouponCodeValidation } from '../../redux/reducers/cartSlice';
import './style.scss';
import axios from 'axios';

const BrowseCoupons = ({ show, close }) => {
    const selectorData = useSelector((state) => state.rootReducer.cartSlice);
    const dispatch = useDispatch();

    return (
        <>
            <Offcanvas show={show} onHide={close} placement='end' className='browse-coupon'>
                <Offcanvas.Header >
                    <Offcanvas.Title>Discount code</Offcanvas.Title>
                    <img src={CloseButton} alt='close-btn' onClick={close} className='cursor-pointer' />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {CouponCode.map(item => {
                        return (
                            <div className='card mb-20' key={item.id}>
                                <div className="px-20 pt-12 pb-14">
                                    <h5 className="font-weight-500 primary-blue fs-24">{item.title}</h5>
                                    <p className="fs-14 mb-0">{item.description}</p>
                                    <div className='mt-16 d-flex justify-content-between'>
                                        <h5 className='mb-0 fs-16 font-weight-400 line-height-24'>{item.discount}% Off</h5>
                                        <button disabled={selectorData.applyedCoupon.title === item.title ? true : false} className='btn apply-coupon' onClick={() => {
                                            dispatch(handleApplyCoupon(item.id));
                                            dispatch(handleCouponCodeValidation())
                                            close();
                                        }
                                        }>
                                            {selectorData.applyedCoupon.title === item.title ? <img src={AppliedCoupon} alt='applied-coupon' /> : <img src={ApplyCoupon} className='cursor-pointer' alt='apply-coupon' />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default BrowseCoupons;