import React from 'react'
import AddCart from '../../assets/images/add-cart.svg'
import RightArrow from '../../assets/images/right-arrow1.svg';
import LeftArrow from '../../assets/images/left-arrow1.svg';
import RecommendedProducts from "../../assets/jsonData/RecommendedProducts.json"
import { useDispatch, useSelector } from 'react-redux';
import { handleAddToCart } from '../../redux/reducers/cartSlice';

import { height } from '@mui/system';

const RecommendProducts = () => {
    const selectorData = useSelector((state) => state.rootReducer.cartSlice);
    const dispatch = useDispatch()
    return (
        <div className='recommend-products mt-20'>
            <div className='d-flex justify-content-between'>
                <h5 className='fs-18 font-weight-500 line-height-27'>Recommended products</h5>
                <div className=''>
                    <img src={LeftArrow} alt='left-arrow' className='me-15 cursor-pointer' />
                    <img src={RightArrow} alt='right-arrow' className='cursor-pointer' />
                </div>
            </div>
            <div className='d-flex justify-content-between c-gap-20'>
                {RecommendedProducts.map(product => {
                    return (
                        <div className='recommend-item' key={product.id}>
                            <div className={`card-body d-flex flex-wrap align-items-md-start justify-content-md-start flex-lg-nowrap flex-row`}>
                                <div className=''>
                                    <div style={{ width: "101px", height: "101px" }}>
                                        <img
                                            src={product.image}
                                            alt="explore catalouge"
                                            className='w-100'
                                        />
                                    </div>
                                    <h6 className='line-height-24 font-family-roboto mt-5 font-weight-400 text-center mb-0'>{product.price}</h6>
                                </div>
                                <div className={`ms-lg-4 w-100 `}>
                                    <h5 className="font-weight-500 mb-0 fs-18 primary-blue">{product.title}</h5>
                                    <div className='dark-black mt-10 fs-14 line-height-21'>{product.description}</div>
                                    <div className='mt-10 fs-14 font-weight-500 line-height-17 font-family-roboto text-decoration-underline cursor-pointer' onClick={() => dispatch(handleAddToCart(product.id))}>
                                        <img src={AddCart} alt='add-cart' className='me-6' />Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecommendProducts