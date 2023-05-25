import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useRef, useState } from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { handleSignUp } from '../../redux/reducers/headerSlice';
import { useNavigate } from 'react-router-dom';
import { handleActiveTab } from './../../redux/reducers/navigationSlice'
import { login } from '../../redux/reducers/loginSlice';

export default function Signup(props) {
    const dispatch = useDispatch()
    const navigateData = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timer, setTimer] = useState(60);
    const timerRef = useRef(null);    
    const [count, setCount] = useState(0);  
    const [otpSend, setOTPSend] = useState(false);
    const [signupData, setSignupData] = useState({email: '',name: '',mobile: '',otp: '',class: 'select class'});
    const [successSignUp, setSuccessSignUp] = useState(false);

    useEffect(() => {
        setOTPSend(false);
        setCount(0);
    }, []);

    useEffect(() => {
        if ((timer > 0) && otpSend) {
            timerRef.current = setTimeout(() => {
                setTimer(prevData => prevData - 1);
            }, 1000);
        } else {

            setOTPSend(false);

        }

        return () => {
            clearTimeout(timerRef.current);
        }

    }, [timer]);

    function handleUpdate(event) {
        const targetName = event.target.name;
        const targetVal = event.target.value;
        setSignupData(prevData => ({
            ...prevData,
            [targetName]: targetVal
        }));
    }

    function handleOTPSend() {
        setOTPSend(true);
        setTimer(45);
        setCount(c=>c+1)
    }

    function handleSubmit() {
        setIsSubmitted(true);
        if(signupData.name && isNameValid(signupData.name) && signupData.class!='select class' && isEmailValid(signupData.email) && isMobileValid(signupData.mobile) && userPhoneInfo.otp===signupData.otp){
            dispatch(login(signupData)); 
            setSuccessSignUp(true);
            navigateData('/explore-catalogue');   
            dispatch(handleActiveTab('exploreCatalouge'));
        }
    }

    const isEmailValid=(emailVal)=>{
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailVal) && !/^[\d]+@/.test(emailVal)) {
            return true
         }
        return false
     }

    const isMobileValid =(mobileVal)=>{
        if(/^[6-9]\d{9}$/.test(mobileVal)) {
            return true;
        }
        return false
    }

    const isNameValid=(nameVal)=>{
        if(/^[a-zA-Z\s]*$/g.test(nameVal) && nameVal.length>=3){
            return true
        }
        return false
    }

    const userPhoneInfo={
        mobile:"9818556345",
        otp:"1234",
    }

return (
        <Modal 
            centered
            onHide={() => props.close()}
            show={props.show}
            size="lg m-w-607"
        >
            <Modal.Body className='p-40 pt-56'>
                {successSignUp ? 
                    <div className='bg-secondary position-relative'>
                        <button 
                            className='ms-auto bg-secondary border-0 fs-36 p-0 h-fit-content position-absolute end-0'
                            onClick={() => props.close()}
                        >&times;
                        </button>
                        <p className='text-light p-4'>Thank you! <br></br>Thanks for signing up. Welcome to our community.<br></br> Welcome Email is sent to you<br></br> We are happy to have you with us.</p>
                    </div> :
                    <div className='login-container'>
                        <div className='d-flex h-70'>
                            <h3 className='primary-blue m-0 fs-36 font-weight-400'>Sign up</h3>
                            <button 
                                className='ms-auto bg-body border-0 fs-36 p-0 primary-blue h-fit-content'
                                onClick={() => props.close()}
                            >&times;</button>
                        </div>
                        <div>
                            <p className='mb-0 mt-2 dark-black letter-spacing-32'>Name</p>
                            <input 
                                type="text" placeholder='Please Enter Your Name'
                                name="name"
                                required
                                value={signupData.name}
                                onChange={handleUpdate} 
                                className={`h-45 form-control dark-black ${isSubmitted && !signupData.name ? 'input-error': ''}`} 
                            />
                            {isSubmitted && !signupData.name && <p className='mb-0 text-danger'>Name is required.</p>}
                            {signupData.name && !isNameValid(signupData.name)  && <p className='mb-0 text-danger'>Please enter a valid Name.</p>}
                        </div>
                        <div>
                            <p className='mb-0 dark-black letter-spacing-32 mt-30'>Class</p>
                            <select
                                className={`h-45 form-control form-select`}
                                name='class'
                                onChange={handleUpdate}
                                value={signupData.class}
                            >
                                <option value='select class' disabled>Select class</option>
                                <option value='class 6'>Class 6</option>
                                <option value='class 7'>Class 7</option>
                                <option value='class 8'>Class 8</option>
                                <option value='class 9'>Class 9</option>
                                <option value='class 10'>Class 10</option>
                                <option value='class 11'>Class 11</option>
                                <option value='class 12'>Class 12</option>
                                <option value='NTSE'>NTSE</option>
                                <option value='JEE'>JEE</option>
                                <option value='NEET'>NEET</option>
                                <option value='CUET'>CUET</option>
                                <option value='NDA'>NDA</option>
                            </select>
                            {isSubmitted && signupData.class==='select class' && <p className='mb-0 text-danger'>Class is required.</p>}
                        </div>
                        <div>
                            <p className='mb-0 dark-black letter-spacing-32 mt-30'>Email ID</p>
                            <input 
                                type='email' placeholder='Please Enter Your Email'
                                name="email"
                                value={signupData.email}
                                onChange={handleUpdate} 
                                className={`h-45 form-control dark-black ${isSubmitted && !signupData.email ? 'input-error': ''}`} 
                            />
                            {isSubmitted && !signupData.email && <p className='mb-0 text-danger'>Email is required.</p>}
                            {isSubmitted && signupData.email && !isEmailValid(signupData.email) && <p className='mb-0 text-danger'>Please enter a valid Email.</p>}
                        </div>
                        <p className='mb-0 letter-spacing-32 mt-30'>Mobile</p>
                        <div className={`rounded justify-content-between align-items-center d-flex otp-send`}>
                            <select
                                className='h-45 form-control max-w-90 form-select'
                            >
                                <option selected>Us +</option>
                                <option selected>+91</option>
                            </select>
                            
                            <input 
                                type="number" placeholder='Please Enter Your Mobile'
                                name="mobile"
                                value={signupData.mobile.slice(0,10)}
                                onChange={handleUpdate} 
                                onWheel={(e) => e.target.blur()}
                                className={`h-45 ms-2 form-control dark-black ${isSubmitted && !signupData.mobile ? 'input-error': ''}`} 
                            />

                            {/* {isMobileValid(signupData.mobile) ?  */}
                                <div className='d-flex justify-content-end'>
                                    {(!otpSend) ? <button 
                                        className={`btn pe-2 p-0 btn-sm primary-blue nowrap underline-text  ${!isMobileValid(signupData.mobile) && 'disabled'}` }
                                        onClick={handleOTPSend}
                                    >{(count <= 0) ? 'Get': 'Resend'} OTP</button>: <span className='primary-blue nowrap pe-2'>Resend in <span className='text-center d-inline-block m-w-20'>{(timer < 10) ? '0' + timer: timer}</span> sec.</span>}
                                </div>
                                {/* : null */}
                            {/* } */}
                        </div>
                    
                    {(isSubmitted && !signupData.mobile) ? <span className='mb-0 text-danger fs-14'>Mobile is required</span>: null}
                    { isSubmitted && signupData.mobile && !isMobileValid(signupData.mobile) && <span className='text-danger fs-14'>Please enter a valid Mobile No.</span>}
                    {isMobileValid(signupData.mobile) && 
                        <div className='mt-30'>
                            <p className={`mb-0 dark-blue font-weight-400 letter-spacing-32`}>OTP</p>
                            <div className={`justify-content-between align-items-center d-flex`}>
                                <input 
                                    type="number" 
                                    value={signupData.otp}
                                    name="otp" 
                                    onChange={handleUpdate} 
                                    onWheel={(e) => e.target.blur()}
                                    className={`h-45 form-control border-0 dark-black`} 
                                    placeholder="Enter OTP"
                                />
                                {otpSend ? <span 
                                    className='nowrap primary-blue ms-3'
                                >
                                    {(count > 1) ? 'New': ''} OTP send on mobile {signupData.mobile}
                                </span>: null}
                            </div>
                            {(isSubmitted && !signupData.otp) && otpSend && <span className='text-danger fs-14'>Please enter the OTP</span>}
                            {(isSubmitted && !signupData.otp) && !otpSend && <span className='text-danger fs-14'>Please generate and enter the OTP</span>}
                            {isSubmitted && signupData.otp && userPhoneInfo.otp!=signupData.otp && <span className='text-danger fs-14'>Please enter the valid OTP</span>}
                        </div>
                    }
                    <div className='d-flex mt-25'>
                    <button 
                        className='btn btn-warning login-btn mt-0 w-50 fs-20 font-weight-700'
                        onClick={handleSubmit}
                    >Take a free test <img className='fs-20' src={`${RightArrow}`} alt="right arrow" /></button>
                    <span className='align-self-center ms-18 fs-12'>* By Proding mobile no, I am agreeing to <a className='primary-blue'>T&C</a>.</span>
                    </div>
                    <div className='separator'></div>
                    <div 
                            className='mt-32 light-dark font-weight-400 line-height-24'
                        >
                            Already have an account? <button 
                                className='border-0 bg-body primary-blue font-weight-700'
                                onClick={() => {
                                    props.close();
                                    props.showLogin();
                                }}
                            >Log in now!</button>
                    </div>
                </div>
                }
            </Modal.Body>
        </Modal>
    )
}