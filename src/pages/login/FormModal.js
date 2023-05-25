import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useRef, useState } from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';
import Rolling from '../../assets/images/Rolling.svg';
import { useDispatch } from 'react-redux';
import {login} from './../../redux/reducers/loginSlice';
import { useNavigate } from 'react-router-dom';
import { handleActiveTab } from './../../redux/reducers/navigationSlice';


let usersData =  [{
   email: 'abc@gmail.com',
   password: '1234',
   mobile: '9876543210',
   otp: '1234',
   loggedIn:true,
   name:"Deepak"
 }]

let loginData = {
    email: '',
    password: '',
    mobile: '',
    otp: ''
};

export default function FormModal(props) {
    const [emailLogin, setEmailLogin] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inValidOTP, setInvalidOTP] = useState(false);
    const [timer, setTimer] = useState(60);
    const timerRef = useRef(null);    
    const [count, setCount] = useState(0);  
    const [otpSend, setOTPSend] = useState(false);
    const [loginVal, setLoginVal] = useState({ ...loginData });
    const dispatch = useDispatch();
    const [loginSuccess, SetloginSuccess] = useState(false);
    const navigateData = useNavigate();
   const regexEmail = /^(?!\d+@)\w+([-+.']\w+)*@(?!\d+\.)\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    useEffect(() => {
        setOTPSend(false);
        setCount(0);
    }, []);

    console.log(loginSuccess);

    useEffect(() => {
        if ((timer > 0) && otpSend) {
            timerRef.current = setTimeout(() => {
                setTimer(prevData => prevData - 1);
            }, 1000);
        } else {
            // setTimer(60);
            // setCount(c => c + 1);
            setOTPSend(false);
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
        setIsSubmitted(false);
        setOTPSend(false);
        setCount(0);
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
        setOTPSend(true);
        setTimer(45);
        setCount(c => c + 1);
    }


    function handleSubmit() {
        setIsSubmitted(true);
         const usercheck = usersData.find(user => ((user.mobile === loginVal.mobile && user.otp === loginVal.otp) || (user.email === loginVal.email.toLowerCase() && user.password) === loginVal.password));
         const invalidOTPError = usersData.find(user => ((user.mobile === loginVal.mobile && user.otp !== loginVal.otp)));
         if(invalidOTPError){
            setInvalidOTP(true);
         }
         if(usercheck){

            SetloginSuccess(true);
            dispatch(login(usercheck));
           setTimeout(() => {
            props.close();    
            navigateData('/explore-catalogue');   
            dispatch(handleActiveTab('exploreCatalouge'))     
           }, 2000);

        } 
        else{
            SetloginSuccess(false);
        }  
    }

    return (
        <Modal 
            centered
            onHide={() => props.close()}
            show={props.show}
            size="lg m-w-607"
        >
            <Modal.Body className='p-40 pt-56'>
            <div className='login-container'>
                <div className='d-flex justify-content-between align-itmes-center'>
                    <h3 className='primary-blue m-0 fs-36 font-weight-400'>Log in</h3>
                    <button 
                        className='bg-body border-0 fs-36 p-0 primary-blue'
                        onClick={() => props.close()}
                    >&times;</button></div>
                    <div className='mt-30 d-flex mb-10'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <input
                            type="radio" 
                            name="login-type" 
                            onChange={() => handleLoginType('mobile')} 
                            id="mobile-login"
                            checked={!emailLogin}
                        />
                        <label className='ms-1 dark-blue font-weight-400 line-height-24' htmlFor='mobile-login'>Mobile</label>
                    </div>

                    <div className='ms-4 d-flex justify-content-center align-items-center'>
                        <input 
                            type="radio" 
                            onChange={() => handleLoginType('email')} 
                            name="login-type" 
                            id="email-login" 
                            checked={emailLogin}
                        />
                        <label className='ms-1 dark-blue font-weight-400 line-height-24' htmlFor='email-login'>Email</label>
                    </div>

                    </div>
                    <div className={`${!emailLogin ? 'rounded justify-content-between align-items-center d-flex otp-send': ''} ${!emailLogin && isSubmitted && !loginVal.email && !loginVal.mobile ? 'input-error': ''}`}>
                    {!emailLogin &&
                    <select
                    className='h-45 form-control max-w-90 form-select me-10'
                    onChange={() => {}}
                >
                    <option>+91</option>
                </select>
                    } 

                        <input placeholder={emailLogin ? 'Please Enter Your Email' : 'Please Enter Your Mobile'}
                            type={emailLogin ? 'email' : 'number'} 
                            name={emailLogin ? 'email' : 'mobile'} 
                            value={emailLogin ? loginVal.email: loginVal.mobile.slice(0,10)}
                            onChange={handleUpdate} 
                            className={`h-45 form-control dark-black ${!emailLogin ? 'border-0': ''} ${(emailLogin && isSubmitted && !loginVal.email && !loginVal.mobile) ||
                                (isSubmitted && loginVal.mobile.length >=1 && (loginVal.mobile.length < 10 || loginVal.mobile.indexOf('0') === 0 || loginVal.mobile.charAt(0) <= 5)) ? 'input-error': ''}
                            
                        `} 
                        />
                        {(!emailLogin) ? <div className='d-flex justify-content-end'>
                            {(!otpSend) ? <button 
                                className={`btn pe-2 p-0 btn-sm primary-blue nowrap underline-text hover-border-none  ${(loginVal.mobile.length < 10 || loginVal.mobile.indexOf('0') === 0 || loginVal.mobile.charAt(0) <= 5) && 'disabled' }`}
                                onClick={handleOTPSend}
                            >{(count <= 0) ? 'Get': 'Resend'} OTP</button>: <span className='primary-blue nowrap pe-2'>Resend in <span className='text-center d-inline-block m-w-20'>{(timer < 10) ? '0' + timer: timer}</span> sec.</span>}
                        </div> : null}
                    </div>
                    {(isSubmitted && !loginVal.email && !loginVal.mobile) ? <span className='mb-0 text-danger fs-14'>{emailLogin ? 'Email': 'Mobile'} is required</span>: null}
                   {loginVal.mobile.length >= 1 && isSubmitted && 
                        <>
                        {(loginVal.mobile.length < 10 || loginVal.mobile.charAt(0) <= 5 || loginVal.mobile.indexOf('0') === 0)  ? <span className='mb-0 text-danger fs-14'>Please enter a valid mobile no.</span>: null}
                        </>
                   }

                    {isSubmitted && (loginVal.email.length >= 1) && (regexEmail.test(loginVal.email) === false) &&  <span className='text-danger fs-14'>Please enter a valid Email</span> }

                    <div className='mt-30'>
                        <p className={`mb-0 dark-blue font-weight-400 line-height-24`}>{emailLogin ? 'Password' : 'OTP'}</p>
                        <div className={`${!emailLogin ? 'justify-content-between align-items-center d-flex': ''}`}>
                        <input 
                            type={emailLogin ? "password" : "number"} placeholder={emailLogin ? "Enter Password": "Enter OTP"}
                            value={emailLogin ? loginVal.password: loginVal.otp}
                            name={emailLogin ? 'password' : 'otp'} 
                            onChange={handleUpdate} 
                            className={`h-45 form-control dark-black ${!emailLogin && (loginVal.mobile.length < 10 || loginVal.mobile.indexOf('0') === 0 || loginVal.mobile.charAt(0) <= 5) && 'disabled-textbox' } ${(isSubmitted && !loginVal.password && !loginVal.otp) ? 'input-error': ''}`} 
                        />
                        </div>
                         {isSubmitted  && loginVal.password.length <= 6 && loginVal.password &&  <span className='text-danger fs-14'>Password should be minimum 6 characters.</span> }
                        <div> 
                        {(!emailLogin && otpSend) ? <span className='nowrap primary-blue ms-0'>{(count > 1) ? 'New': ''} OTP send on mobile {loginVal.mobile}</span>: null}
                       </div>
                        {(emailLogin && isSubmitted && !loginVal.password && !loginVal.otp) ? <span className='text-danger fs-14'>Password is required</span>: null}
                        {/* {(!emailLogin && isSubmitted && !loginVal.otp) ? <span className='text-danger fs-14'>Please generate and enter the OTP</span>: null} */}
                        {(!emailLogin && isSubmitted &&  (loginVal.otp == '')) ? <span className='text-danger fs-14'>Please generate and enter the OTP</span>: null}
                        
                    </div>
                  {emailLogin &&
                    <div className='d-flex mt-28 align-items-center'>
                        <input type='checkbox' id='rememberMe' />
                        <label className='ms-2 fs-14 dark-blue line-height-24' htmlFor='rememberMe'>Remember me</label>
                        <button 
                            className='btn p-0 ms-auto fs-14 primary-blue underline-text hover-border-none' 
                            onClick={() => {
                                props.close();
                                props.showReset();
                            }}
                        >Forgot Password?</button>
                    </div>}
                    {loginSuccess ? <div className='d-flex justify-content-center'> <img className='mt-10 ms-10' style={{width:'50px'}} src={Rolling} /> </div>: 
                        <button 
                            className='btn btn-warning login-btn w-50 fs-20 font-weight-700'
                            onClick={handleSubmit}
                        >Log in <img className='fs-20' src={`${RightArrow}`} alt="right arrow" />
                        </button>}
                    {!emailLogin && isSubmitted && loginVal.otp && !loginSuccess && <div className='mb-0 text-danger fs-14'>Incorrect Mobile Number/OTP</div>
                    }
                    {emailLogin && isSubmitted && loginVal.password && !loginSuccess && <div className='mb-0 text-danger fs-14'>Incorrect Email ID/Password</div>
                    }
                    <hr className={`line-style ${!emailLogin && 'margin-top-95'}`} />
                    <div 
                        className='mt-32 text-center light-dark font-weight-400 line-height-24'
                    >Don't have an account? <button 
                        className='border-0 bg-body primary-blue font-weight-700'
                        onClick={() => {
                            props.close();
                            props.signup();
                        }}
                    >Sign up for free test!</button></div>
                </div>
            </Modal.Body>
        </Modal>
    )
}