import React, { useEffect, useState } from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';
import { Link } from 'react-router-dom';
import './style.scss';
import Modal from 'react-bootstrap/Modal';

export default function ForgotPassword(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);  
    const [email, setEmail] = useState('');

    useEffect(() => {
        setIsSubmitted(false);
    }, []);

    function handleUpdate(event) {
        const targetVal = event.target.value;
        setEmail(targetVal);
    }

    function handleSubmit() {
        setIsSubmitted(true);
    }

    return (
        <>
        
        <Modal 
            centered
            onHide={() => props.close()}
            show={props.show}
            size="lg m-w-607"
        >
            <Modal.Body className='p-40 pt-56 forgot-password'>
                <div className='login-container'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='primary-blue m-0 fs-36 font-weight-400'>Reset password</h3>
                    <button 
                        className='bg-body border-0 p-0 fs-36 primary-blue'
                        onClick={() => props.close()}
                    >&times;</button>
                    </div>
                    <p className='mb-0 pt-0 dark-blue fs-14 font-weight-400 letter-spacing-32'>Please enter the email entered while creating the account</p>
                    <div className='mt-4'>
                        <p className='mb-0 dark-blue font-weight-400 line-height-24 letter-spacing-32'>Email</p>
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={handleUpdate} 
                            className={`${(isSubmitted && !email) ? 'input-error': ''} h-45 dark-black form-control`}
                        />
                        {(isSubmitted && !email) ? <span className='text-danger fs-14'>Email is required</span>: null}
                    </div>
                    <div className='d-flex align-items-center'>
                    <button 
                        className='btn btn-warning w-50 login-btn fs-20 font-weight-700 line-height-24'
                        onClick={handleSubmit}
                    >Submit <img className='fs-20' src={`${RightArrow}`} alt="right arrow" /></button>
                    <button 
                        className='p-0 btn mt-22 ms-auto fs-14 primary-blue font-weight-400' 
                        onClick={() => {
                            props.showLogin();
                            props.close();
                        }}
                    >Back to login</button>
                    </div>
                </div>
        </Modal.Body>
        </Modal>
        </>
    )
}