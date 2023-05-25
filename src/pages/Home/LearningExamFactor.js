import React from 'react';
import RightArrow from '../../assets/images/right-arrow.svg';

export default function LearningExamFactor({ learningWithExamFactor, setShowSignupModal }) {
    return (
        <>
            <div className='min-h-623 d-flex'>
                <div className='container my-auto py-3'>
                    <div className='row'>
                        <div 
                            className='col-12 my-auto col-md-5 d-md-flex flex-md-column justify-content-md-center'
                        >
                            <h3
                                className='font-style-normal primary-blue m-0 fs-48 font-weight-400'
                            >
                                {learningWithExamFactor.heading}
                            </h3>
                            <div className='mt-34 dark-black font-weight-400'>
                                {learningWithExamFactor.content}
                            </div>
                            <button
                                className='mt-42 h-52 mb-20 btn btn-warning max-w-229 fs-20 font-weight-700'
                                // onClick={() => setShowSignupModal(true)}
                                onClick={() => {
                                    window.location.href = `http://www.exam-factors.com/register.htm?signout=true&tenant=abp`;
                                }}
                            >
                                Take a free test <img
                                    className='fs-20'
                                    src={`${RightArrow}`}
                                    alt="right arrow"
                                />
                            </button>
                        </div>
                        <div className='my-auto col-12 col-md-7'>
                            <div className='d-flex justify-content-md-end flex-wrap gap-46'>
                            {learningWithExamFactor.options.map(item => (<div 
                                key={item.id}
                                style={{backgroundColor: item.color}}
                                className="min-w-285 min-h-164 px-34 py-32"
                            >
                                <p className='font-weight-700 dark-black'>{item.text}</p>
                                <br/>
                                <span className='primary-blue fs-48'>{item.count}</span>
                            </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}