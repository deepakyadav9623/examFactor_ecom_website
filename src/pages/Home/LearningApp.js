import React from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';
import LearningAppImage from '../../assets/images/home/images/learningAppLogo.svg';
import GooglePlayStore from '../../assets/images/home/images/googlePlayStore.svg';
import AppleStore from '../../assets/images/home/images/appleStore.svg';

export default function LearningApp({ getLearningApp }) {

    return (
        <>
            <div className='h-775 d-flex bg-white'>
                <div className='container my-auto'>
                    <div className='row h-522'>
                        <div 
                            className='my-auto col-md-6 ps-md-5 d-md-flex flex-md-column justify-content-md-center'
                        >
                            <h3
                                className='font-style-normal primary-blue m-0 fs-48 font-weight-400'
                            >
                                {getLearningApp.heading}
                            </h3>
                            <div className='mt-34 dark-black font-weight-400'>
                                {getLearningApp.content}
                            </div>
                            <div className='mt-34'>
                            <button
                                className='btn p-0 pe-1'
                                onClick={() => { }}
                            >
                                <img
                                    src={`${AppleStore}`}
                                    alt="apple store"
                                />
                            </button>
                            <button
                                className='btn p-0 ms-3'
                                onClick={() => { }}
                            >
                                <img
                                    src={`${GooglePlayStore}`}
                                    alt="google play store"
                                />
                            </button>
                            </div>
                        </div>
                        <div className='my-auto col-md-6 ps-md-0 ps-md-5 d-md-flex'>
                            <img className='w-100' src={`${LearningAppImage}`} alt="desktop" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}