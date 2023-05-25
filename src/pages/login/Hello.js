import React from 'react';
import Footer from '../../components/Footer';
import './style.scss';

export default function Hello() {   

    return (
        <>
        <div className='h-118'></div>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center h-368'>
                    <div className='text-center w-100 p-5 fs-48 font-weight-700'>Hello</div>
                </div>
            </div>
        </div>

        <Footer />
        </>
    )
}