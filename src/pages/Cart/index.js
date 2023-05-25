import React, { useState } from 'react'
import BrowseCoupons from './BrowseCoupons';
import CartHeader from './CartHeader'
import EmptyCart from './EmptyCart';
import Footer from '../../components/Footer'
import Cart from './Cart';
import './style.scss';
import { useSelector } from 'react-redux';
import PageBreadcrumbs from '../exploreCatalouge/Pagebreadcrumbs';
const CartPage = () => {
    const selectorData = useSelector((state) => state.rootReducer.cartSlice);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false);

    return (
        <>
            <div className='cartMainContainer'>
                <PageBreadcrumbs
                    item={[
                        {
                            id: 'exploreCatalougePage',
                            label: 'Explore catalogue',
                            link: '/explore-catalogue'
                        },
                        {
                            id: 'cart',
                            label: 'Your Cart',
                            link: '/cart',
                            active: true
                        }
                    ]}
                />
                <div className='cart bg-white'>
                    {!selectorData.cartItems.length ? <EmptyCart /> : <Cart handleShow={handleShow} />}
                    <Footer />
                    <BrowseCoupons show={show} close={handleClose} />
                </div>
            </div>
        </>
    )
}

export default CartPage