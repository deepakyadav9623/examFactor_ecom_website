import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import LandingPageMainImage from '../../assets/images/home/images/landingPageMainImage.svg';
import CheckBoxChecked from '../../assets/images/home/images/landingPageMainCheckedCheckbox.svg';
import ContactUs from './ContactUs';
import LearningApp from './LearningApp';
import LearningExamFactor from './LearningExamFactor';
import WhyExamFactor from './WhyExamFactor';
import Signup from '../login/Signup';
import FormModal from '../login/FormModal';
import HomePageData from '../../assets/jsonData/homepage.json';
import { useSelector } from 'react-redux';
import './style.scss';
import AboutUS from './AboutUS';

export default function LandingPage() {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const selectorData = useSelector((state) => state.rootReducer.navigationSlice.activeTab);
    const refElm = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const { contactUS, aboutUS, getLearningApp, learningWithExamFactor, indexContent } = HomePageData;

    useEffect(() => {
        if (refElm.current) {
            refElm.current.scrollIntoView({behavior: "smooth"});
        }
    }, [selectorData]);

    return (
        <>
            <div className='landing-container' ref={refElm}>
                <div className='w-100 h-118'></div>
                <div className='h-550 d-flex'>
                    <div className='container my-auto'>
                        <div className='row'>
                            <div className='my-auto col-12 col-md-6 ps-md-0 pe-md-5 d-md-flex'>
                                <img className='w-100' src={`${LandingPageMainImage}`} alt="desktop" />
                            </div>
                            <div 
                                className='my-auto pb-3 pb-md-0 col-md-6 ps-md-5 d-md-flex flex-md-column justify-content-md-center'
                            >
                                <h3
                                    className='font-style-normal primary-blue m-0 line-height-51 fs-34 font-weight-500'
                                >
                                    {indexContent.heading}
                                </h3>
                                <div className='mt-3'>
                                    {indexContent.content}
                                </div>
                                <div 
                                    className='mt-34 d-block d-md-flex flex-wrap justify-content-between'
                                >
                                    <div className='mt-2 d-flex align-items-center'>
                                        <img
                                            src={`${CheckBoxChecked}`}
                                            alt="learn anything"
                                            className='landingCheckbox'
                                        />
                                        <span className='ms-3 dark-black font-weight-700 fs-14 nowrap'>Learn anything</span>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center'>
                                        <img
                                            src={`${CheckBoxChecked}`}
                                            alt="save money"
                                            className='landingCheckbox'
                                        />
                                        <span className='ms-3 dark-black font-weight-700 fs-14 nowrap'>Save money</span>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center'>
                                        <img
                                            src={`${CheckBoxChecked}`}
                                            alt="Flexible learning"
                                            className='landingCheckbox'
                                        />
                                        <span className='ms-3 dark-black font-weight-700 fs-14 nowrap'>Flexible learning</span>
                                    </div>
                                </div>
                                <button
                                    className='mt-51 h-52 btn btn-warning max-w-234 fs-20 font-weight-700'
                                    // onClick={() => setShowSignupModal(true)}
                                    // onClick={() => {
                                    //     window.location.href = `http://www.exam-factors.com/register.htm?signout=true&tenant=abp`;
                                    // }}
                                >
                                    Take a free test 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyExamFactor />
            <LearningExamFactor learningWithExamFactor={learningWithExamFactor} setShowSignupModal={setShowSignupModal} />
            <LearningApp getLearningApp={getLearningApp} />
            <AboutUS aboutUS={aboutUS} />
            <ContactUs contactUS={contactUS} />
            <Footer />
            {showModal && <FormModal 
            close={() => {
                setShowModal(false);
            }}
            show={showModal}
            signup={() => setShowSignupModal(true)}
        />}

            {showSignupModal && <Signup 
                close={() => {
                    setShowSignupModal(false);
                }}
                show={showSignupModal}
                showLogin={() => setShowModal(true)}
            />}
        </>
    )
}