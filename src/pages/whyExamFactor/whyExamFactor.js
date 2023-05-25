import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WarningRightArrow from '../../assets/images/warning-right-arrow.svg';
import PrimaryRightArrow from '../../assets/images/primary-right-arrow.svg';
import RightArrow from '../../assets/images/right-arrow.svg';
import ExamFactorEducation from '../../assets/images/home/images/examFactorEducation.svg';
import ExamFactorBooks from '../../assets/images/home/images/examFactorBooks.svg';
import ExamFactorOnlineLearning from '../../assets/images/home/images/examFactorOnlineLearning.svg';
import ExamFactorOnlineTest from '../../assets/images/home/images/examFactorOnlineTest.svg';
import { useSelector } from 'react-redux';
import "./style.scss";
import Footer from '../../components/Footer';

export default function WhyExamFactor() {
    const selectorData = useSelector((state) => state.rootReducer.navigationSlice.activeTab);
    const refElm = useRef(null);
    const whyExamFactorData = [
        {
            id: 'personalizedLearning',
            heading: 'Personalized Practice for every learner',
            content: 'Our AI-enabled test engine will offer you a personalized practice dashboard allowing you to strengthen your weak areas and learn systematically.',
            readMore: '/hello',
            image: ExamFactorEducation
        },
        {
            id: 'globallyTrustedContent',
            heading: 'Comprehensive syllabus coverage',
            content: 'Our practice tests and full-length mocks are based on the exam curriculum and comprehensively cover every topic at par with the syllabus & pattern.',
            readMore: '/hello',
            image: ExamFactorBooks
        },
        {
            id: 'adaptiveAssessments',
            heading: 'Detailed Solutions & Drill-Down Analysis',
            content: ' Get detailed solutions and drill-down analysis of all the practice tests and full-length mock tests to improve your performance.',
            readMore: '/hello',
            image: ExamFactorOnlineLearning
        },
    ];
    
    useEffect(() => {
        if (refElm.current) {
            refElm.current.scrollIntoView({behavior: "smooth"});
        }
    }, [selectorData]);

  return (
    <>
    <div className='d-flex bg-white whyExamFactor' ref={refElm}>
                <div className='container'>
                    <div className='row mb-160'>          
                        <div
                            className='col-12 text-center mt-53 mb-20 primary-blue fs-48 mt-160'
                        >Why ExamFactor</div>
                        {whyExamFactorData.map((item, index) => (<div
                            key={item.id}
                            id={item.id}
                            className={`examfactor-section col-12 d-flex col-md-12 mt-74`}
                        >
                            <div
                                className={`row-wise-data`}
                            >
                                <img
                                    src={`${item.image}`}
                                    alt="exam factor"
                                    className='w-100'
                                />
                               <div> <h3 className='fs-2 primary-blue'>{item.heading}</h3>
                                <p className='mt-32 font-weight-400 dark-black'>{item.content}</p>
                                <br />
                              </div> 
                            </div>
                        </div>))}
                       
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}


