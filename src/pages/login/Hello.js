import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DesktopIcon from '../../assets/images/desktop-icon.svg';
import RightArrow from '../../assets/images/right-arrow.svg';
import GoogleLogin from '../../assets/images/google.svg';
import FacebookLogin from '../../assets/images/facebook.svg';
import { Link } from 'react-router-dom';
import FormModal from './FormModal';
import ForgotModal from './ForgotPassword';
import SignupModal from './Signup';
import './style.scss';
let loginData = {
    email: '',
    password: '',
    mobile: '',
    otp: ''
};
export default function Hello() {
    const [emailLogin, setEmailLogin] = useState(true);
    const [otpIsValid, setOtpIsValid] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showResetModal, setResetShowModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timer, setTimer] = useState(60);
    const timerRef = useRef(null);      
    const [loginVal, setLoginVal] = useState({ ...loginData });
    const [showSignupModal, setShowSignupModal] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            timerRef.current = setTimeout(() => {
                setTimer(prevData => prevData - 1);
            }, 1000);
        } else {
            // setTimer(60);
            setOtpIsValid(false);
        }

        return () => {
            clearTimeout(timerRef.current);
        }

    }, [timer]);

    function handleLoginType(val) {
        if (val === 'email') {
            setEmailLogin(true);
        } else {
            setEmailLogin(false);
        }
        setLoginVal({ ...loginData });
        setTimer(60);
        setOtpIsValid(false);
    }

    function handleUpdate(event) {
        const targetName = event.target.name;
        const targetVal = event.target.value;
        setLoginVal(prevData => ({
            ...prevData,
            [targetName]: targetVal
        }));
    }

    function handleOTPSend() {
        setOtpIsValid(true);
        setTimer(9);
    }

    function handleSubmit() {
        setShowModal(true);
        setIsSubmitted(true);
    }

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
        {/* <div className='d-flex login-container'>
        <div className='container my-auto'>
            <div className='row'>
                <div className='w-100 h-118'></div>
                <div className='col-md-6 ps-md-0 pe-md-5 d-none d-md-flex align-items-md-center'>
                    <img className='m-h-500 w-100' src={`${DesktopIcon}`} alt="desktop" />
                </div>
                <div className='col-md-6 ps-md-5 d-md-flex flex-md-column justify-content-md-center'>
                    <h3 className='primary-blue m-0 fs-36 font-weight-400'>LOG IN</h3>
                    <div className='mt-5 d-flex'>
                    <div className=''>
                        <input 
                            type="radio" 
                            onChange={() => handleLoginType('email')} 
                            name="login-type" 
                            id="email-login" 
                            checked={emailLogin}
                        />
                        <label className='ms-1 primary-blue font-weight-400 line-height-24' htmlFor='email-login'>Email</label>
                    </div>
                    <div className='ms-5'>
                        <input
                            type="radio" 
                            name="login-type" 
                            onChange={() => handleLoginType('mobile')} 
                            id="mobile-login"
                            checked={!emailLogin}
                        />
                        <label className='ms-1 primary-blue font-weight-400 line-height-24' htmlFor='mobile-login'>Mobile</label>
                    </div>
                    </div>
                    <div className=''>
                        <input 
                            type="text" 
                            name={emailLogin ? 'email' : 'mobile'} 
                            value={emailLogin ? loginVal.email: loginVal.mobile}
                            onChange={handleUpdate} 
                            className={`form-control sm ${isSubmitted && !loginVal.email && !loginVal.mobile ? 'input-error': ''}`} 
                        />
                        {(isSubmitted && !loginVal.email && !loginVal.mobile) ? <span className='text-danger fs-14'>{emailLogin ? 'Email': 'Mobile'} is required</span>: null}
                    </div>
                    <div className='mt-30'>
                        <p className={`mb-0 primary-blue font-weight-400 line-height-24`}>{emailLogin ? 'Password' : 'OTP'}</p>
                        <input 
                            type="password" 
                            value={emailLogin ? loginVal.password: loginVal.otp}
                            name={emailLogin ? 'password' : 'otp'} 
                            onChange={handleUpdate} 
                            className={`form-control ${(isSubmitted && !loginVal.password && !loginVal.otp) ? 'input-error': ''}`} 
                        />
                        {(isSubmitted && !loginVal.email && !loginVal.mobile) ? <span className='text-danger fs-14'>{emailLogin ? 'Password': 'OTP'} is required</span>: null}
                        {emailLogin ? null : <div className='d-flex justify-content-end'>
                            { !otpIsValid ? <button 
                                className='btn mt-3 p-0 btn-sm' 
                                onClick={handleOTPSend}
                            >{(timer > 0) ? 'Send': 'Resend'} OTP</button>: <span style={{minWidth: '180px'}} className='mt-3 alert-danger px-2 py-1 rounded'>Resend OTP After : {timer}s</span>}
                        </div>}
                    </div>
                    <div className='d-flex mt-38 align-items-center'>
                        <input type='checkbox' id='rememberMe' />
                        <label className='ms-2 fs-14 primary-blue font-weight-400 line-height-24' htmlFor='rememberMe'>Remember me</label>
                        <Link 
                            className='p-0 ms-auto fs-14 primary-blue font-weight-400 line-height-24' 
                            to="/forgot-password"
                        >Forgot Password?</Link>
                    </div>
                    <button 
                        className='btn btn-warning login-btn w-50 fs-20 font-weight-700'
                        onClick={handleSubmit}
                    >LOG IN <img className='fs-20' src={`${RightArrow}`} alt="right arrow" /></button>
                    <div className='mt-32 dark-blue font-weight-400 line-height-24'>Or Log in using</div>
                    <div className='mt-20'>
                        <button className='btn p-0'><img src={`${GoogleLogin}`} className='login-logo' alt="google login" /></button>
                        <button className='btn p-0 ms-3'><img src={`${FacebookLogin}`} className='login-logo' alt="facebook login" /></button>
                    </div>
                    <hr className='line-style' />
                    <div className='mt-32 text-center light-dark font-weight-400 line-height-24'>Don't have an account? <span className='primary-blue font-weight-700'>Sign up now!</span></div>
                </div>
            </div>
        </div>
        </div> */}
        <Footer />
        {/* {showModal && <FormModal 
            close={() => {
                setShowModal(false);
            }}
            show={showModal}
            showReset={() => setResetShowModal(true)}
            signup={() => setShowSignupModal(true)}
        />}
        {showResetModal && <ForgotModal 
            close={() => {
                setResetShowModal(false);
            }}
            show={showResetModal}
            showLogin={() => setShowModal(true)}
        />}
        {showSignupModal && <SignupModal 
            close={() => {
                setShowSignupModal(false);
            }}
            show={showSignupModal}
            showLogin={() => setShowModal(true)}
        />} */}
        </>
    )
}