import React from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';
import ContactUsImage from '../../assets/images/home/images/contactUs.svg';
import { useNavigate } from 'react-router-dom';

function ContactUs({ contactUS }) {
    const navigateData = useNavigate();
    
    function handleClick() {
        // navigateData('/contact-us');
    }
    return (
        <>
            <div className='h-550 d-flex bg-white' id="contactUS">
                <div className='container my-auto'>
                    <div className='row'>
                        <div className='my-auto col-md-6 ps-md-0 pe-md-5 d-md-flex'>
                            <img className='w-100' src={`${ContactUsImage}`} alt="desktop" />
                        </div>
                        <div 
                            className='my-auto py-3 py-md-0 col-md-6 ps-md-5 d-md-flex flex-md-column justify-content-md-center'
                        >
                            <h3
                                className='font-style-normal primary-blue m-0 line-height-51 fs-48 font-weight-500'
                            >
                                {contactUS.heading}
                            </h3>
                            <div className='mt-39 dark-black font-weight-400'>
                                {contactUS.content}
                            </div>
                            <button
                                className='mt-58 h-52 btn btn-warning max-w-229 fs-20 font-weight-700'
                                onClick={() => handleClick()}
                            >
                                Contact <img
                                    className='fs-20'
                                    src={`${RightArrow}`}
                                    alt="right arrow"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ContactUs);