import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import addToCart from '../../assets/images/addToCart.svg';
import './style.scss';
import PageBreadcrumbs from "./Pagebreadcrumbs";
import { getAssessmentDetails } from './apis';
import { useDispatch } from 'react-redux';
import { handleAddToCart } from '../../redux/reducers/cartSlice';
import Footer from '../../components/Footer';
import { Col, Container, Row } from 'react-bootstrap';

export default function ViewDetails() {
    const { id, category, subject, assessment} = useParams();
    const [result, setResult] = useState({whyExamFactor: [], subContent: []});
    const dispatch=useDispatch();

    function numberFormatter(num) {
        let numFormatter = new Intl.NumberFormat('en-IN');
       return  numFormatter.format(num);
    }

    useEffect(() => {
        getAssessmentDetails(id, category, subject, assessment)
        .then(res => {
            setResult({...res.data});
        })
        .catch(error => {
            console.log({'error': error});
        });
    }, []);

    return (
        <>
        <PageBreadcrumbs 
                item={[
                    {
                        id: 'homePage',
                        label: 'Home',
                        link: '/'
                    },
                    {
                        id: 'exploreCatalougePage',
                        label: 'Explore catalogue',
                        link: '/explore-catalogue'
                    },
                    {
                        id: 'cataloguePage',
                        label: id,
                        link: `/catalogue/${id}`
                    },
                    {
                        id: 'categoryPage',
                        label: category,
                        link: `/catalogue/${id}/${category}`
                    },
                    {
                        id: 'subjectPage',
                        label: subject,
                        link: `/catalogue/${id}/${category}/${subject}`
                    },
                    {
                        id: 'assessmentPage',
                        label: assessment,
                        link: `/catalogue/${id}/${category}/${subject}/${assessment}`,
                        active: true
                    }
                ]}
                filter={false}
            />
        <div className='bg-white pb-62 pt-46'>
            <Container className='customContainer'>
                <Row>
                    <Col lg={12}>

        <div className='d-flex flex-column view-details-card-container'>
            <div  
                className='round5 border-0 bg-white card-style'
            >
                <Row>
                <div className='col-12 col-md-4 col-xl-5 d-flex align-items-center px-0 pr-30'>
                    <div className='image-container'>
                        <img 
                            className='w-100 h-100 round5' 
                            src={`${result.img}`} 
                            alt="assessment image" 
                        />
                    </div>
                </div>
                <div className='content-container col-12 col-md-8 col-xl-7 px-0'>
                    <h4 className='primary-blue fs-24 font-weight-500 line-height-36 mt-3 mt-md-0  primary-blue'>{result.subHeading}<span className='fs-24 font-weight-400 primary-blue'> - {result.title}</span></h4>
                    <p className='pt-2 mb-0 fs-16 font-weight-700 border-bottom content-holder pb-30'>{result.content}</p>
                    <div className='space-price fs-24 font-weight-700 line-height-36 mt-30'>₹ {numberFormatter(result.price)}</div>
                    <div className='d-flex flex-wrap align-items-center mt-28'>
                        <button 
                            className='btn btn-outline-primary py-14 px-40'
                        >Take free test</button>
                        <button 
                            className='btn btn-primary mx-22 px-20 py-14' onClick={()=>dispatch(handleAddToCart(result))}
                        ><img src={`${addToCart}`} className="add-to-cart" alt="add to cart" /> Add to cart</button>
                        <div className='ms-10 mt-3 mt-md-0'>
                            <Link to=""><img src="/images/icons/share.png" className='share-icon' alt="share" /><span className='fs-14 text-black'>Share</span></Link>
                        </div>
                    </div>
                </div>

                </Row>

            </div>
        </div>
         <div className='d-flex flex-column view-details-container mt-34'>
            <div 
                className='round5 border bg-white card-style'
            >
                <Row>
                <div className='col-12 col-md-6 round5 col-lg-4 px-0 m-w-516 why-examFactor'>
                    <h4 className='text-black fs-24 font-weight-500 line-height-36 mb-13'>Why ExamFactor?</h4>
                    <ol className='pl-10'>
                        {result.whyExamFactor.map((item, index) => (<li className='text-black fs-14' key={`examFactor${index}`}>{item} {((index + 1) === result.whyExamFactor.length) ? <Link to='' className='no-wrap text-warning'>Check now</Link>: ''}</li>))}
                    </ol>
                </div>
                <div className='col-12 col-md-6 col-lg-5 px-0 about-assessment'>
                    <h4 className='text-black fs-24 mb-15 font-weight-500 line-height-36'>About assessment</h4>
                    {result.subContent.map((item, index) => (<p className='text-black fs-14' key={index}>{item}</p>))}
                    <div>Assessment designed by:</div>
                    <h5 className='text-black mb-0 fs-14 font-weight-700'>{result.author}</h5>
                    <div className='text-black fs-14'>{result.organization}</div>
                </div>
                <div className='col-12 col-md-6 round5 col-lg-3 px-0 d-flex flex-column m-w-310 product-details-section'>
                    <div className='d-flex align-items-center'>
                        <img src="/images/icons/exam.png" className="icon-elm" />
                        <div>
                            <h6 className='m-0 fs-16 font-weight-700 line-height-24'>Exam</h6>
                            <div className='m-0 fs-14 line-height-21'>{}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="/images/icons/product-grade.png" className="icon-elm" />
                        <div>
                            <h6 className='m-0 fs-16 font-weight-700 line-height-24'>Product/Grade</h6>
                            <div className='m-0 fs-14 line-height-21'>{}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="/images/icons/subject.png" className="icon-elm" />
                        <div>
                            <h6 className='m-0 fs-16 font-weight-700 line-height-24'>Subject</h6>
                            <div className='m-0 fs-14 line-height-21'>{}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="/images/date_icon.png" className="icon-elm" />
                        <div>
                            <h6 className='m-0 fs-16 font-weight-700 line-height-24'>Starts On {moment(result.startDate, 'DD-MM-YYYY').format('MMM DD')}</h6>
                            <p className='m-0 fs-14 line-height-21'>{moment(result.startDate, 'DD-MM-YYYY').format('MMM DD')}-{moment(result.endDate, 'DD-MM-YYYY').format('MMM DD, YYYY')}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="/images/assessment_icon.png" className="icon-elm" />
                        <h6 className='m-0 fs-16 font-weight-700 line-height-24'>{result.lession} {(result.lession > 1) ? 'lessons': 'lesson'}, {result.test} {(result.test > 1) ? 'tests': 'test'}</h6>
                    </div>
                </div>

                </Row>
            </div>
        </div> 
                    </Col>
                </Row>

            </Container>
        </div>
        <Footer />
        </>
    )
}