import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import WarningRightArrow from '../../assets/images/warning-right-arrow.svg';
import PrimaryRightArrow from '../../assets/images/primary-right-arrow.svg';
import RightArrow from '../../assets/images/right-arrow.svg';
import ExamFactorEducation from '../../assets/images/home/images/examFactorEducation.svg';
import ExamFactorBooks from '../../assets/images/home/images/examFactorBooks.svg';
import ExamFactorOnlineLearning from '../../assets/images/home/images/examFactorOnlineLearning.svg';
import ExamFactorOnlineTest from '../../assets/images/home/images/examFactorOnlineTest.svg';
import { useDispatch } from 'react-redux';
import { handleActiveTab } from '../../redux/reducers/navigationSlice';
import HomePageData from './../../assets/jsonData/homepage.json'



const whyExamFactorData = [
    {
        id: 'personalizedLearning',
        heading: 'Personalized Practice for every learner',
        content: 'Our AI-enabled test engine will offer you a personalized practice dashboard allowing you to strengthen your weak areas and learn systematically.',
        readMore: '/examFactor#personalizedLearning',
        image: ExamFactorEducation
    },
    {
        id: 'globallyTrustedContent',
        heading: 'Comprehensive syllabus coverage',
        content: 'Our practice tests and full-length mocks are based on the exam curriculum and comprehensively cover every topic at par with the syllabus & pattern.',
        readMore: '/examFactor#globallyTrustedContent',
        image: ExamFactorBooks
    },
    {
        id: 'adaptiveAssessments',
        heading: 'Detailed Solutions & Drill-Down Analysis',
        content: 'Get detailed solutions and drill-down analysis of all the practice tests and full-length mock tests to improve your performance.',
        readMore: '/examFactor#adaptiveAssessments',
        image: ExamFactorOnlineLearning
    },
    
];



export default function WhyExamFactor() {
    const dispatch = useDispatch();
    return (
        <>
            <div className='d-flex bg-white whyExamFactor'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mt-50 fs-24 font-weight-500 text-center primary-blue'>
                            Popular tests
                        </div>
                        <div className='col-12 mt-25 pb-50 border-bottom d-flex'>
                            <div className='mx-auto d-flex gap-26 flex-wrap'>
                                {HomePageData.popularTestData.map(item => (<div key={item.id} className='text-center'>
                                    <Link to={`/quicklinks/${item.id}`}><div
                                        className='d-flex justify-content-center align-items-center popular-test-data border'
                                    >
                                        <img  onClick={() => dispatch(handleActiveTab('exploreCatalouge'))} className='popularExams' src={`${item.image}`} alt="popular test" />
                                    </div>
                                    <p className='mb-0 mt-10 dark-black'>{item.content}</p>
                                    </Link>
                                </div>))}
                            </div>
                        </div>
                        <div
                            className='col-12 text-center mt-53 mb-53 primary-blue fs-48'
                        >Why ExamFactor</div>
                        {whyExamFactorData.map((item, index) => (<div
                            key={item.id}
                            className={`examfactor-section col-12 d-flex justify-content-center align-items-center col-md-6 ${((index % 2 == 0)) ? 'border-end' : ''} ${((index !== 0) && (index !== 1)) ? 'border-top' : 'mt-74'}`}
                        >
                            <div
                                className={`max-w-455 min-h-466 ${((index !== 0) && (index !== 1)) ? 'mt-74' : ''} ${((index !== (whyExamFactorData.length - 2)) && (index !== (whyExamFactorData.length - 1))) ? 'pb-64' : ''}`}
                            >
                                <img
                                    src={`${item.image}`}
                                    alt="exam factor"
                                    className='w-100'
                                />
                                <h3 className='mt-60 fs-2 primary-blue'>{item.heading}</h3>
                                <p className='mt-32 font-weight-400 dark-black'>{item.content}</p>
                                <br />
                                <HashLink
                                    className='mt-28 text-warning text-decoration-underline'
                                    // onClick={() => dispatch(handleActiveTab('examfactor'))}
                                    to={`${item.readMore}`}
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                                >Read more <img
                                        src={`${WarningRightArrow}`}
                                        alt="right arrow"
                                    /> </HashLink>
                            </div>
                        </div>))}
                        <div
                            className='col-12 text-center mt-53 mb-53 primary-blue fs-48'
                        >
                            <Link onClick={() => dispatch(handleActiveTab('examfactor'))} to="/examFactor"><button
                                className='btn h-52 btn-outline-primary font-weight-700 w-135'
                            >
                                More <img
                                    src={`${PrimaryRightArrow}`}
                                    alt="right arrow"
                                    className='ms-3 primary-arrow arrow-elm'
                                />
                                <img
                                    src={`${RightArrow}`}
                                    alt="right arrow"
                                    className='ms-3 right-arrow arrow-elm'
                                />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}