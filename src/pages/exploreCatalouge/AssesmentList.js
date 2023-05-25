import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import addToCart from '../../assets/images/addToCart.svg';
import viewDetails from '../../assets/images/viewDetails.svg';
import Footer from '../../components/Footer';
import './style.scss';
import PageBreadcrumbs from "./Pagebreadcrumbs";
import { getAssessmentList } from './apis';
import { useDispatch } from 'react-redux';
import { handleAddToCart } from '../../redux/reducers/cartSlice';
import { Col, Container, Row } from 'react-bootstrap';

export default function AssessmentList() {
    const { id, category, subject} = useParams();
    const [results, setResults] = useState([]);
    const dispatch=useDispatch();

    function numberFormatter(num) {
        let numFormatter = new Intl.NumberFormat('en-IN');
       return  numFormatter.format(num);
    }

    useEffect(() => {
        getAssessmentList(id, category, subject)
        .then(res => {
            setResults([...res.data]);
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
                        link: `/catalogue/${id}/${category}/${subject}`,
                        active: true
                    }
                ]}
                filter={true}
            />
        <div className='bg-white pt-46 pb-5'>
        <Container className='customContainer'>
                <Row>
                    <Col lg={12}>
                        
         <div className='d-flex flex-column assessment-cardList-container'>
            {results.map((item) => (<div 
                key={item.id} 
                className=' round5 border bg-white card-style'
            >
                <Row>

                <div className='col-12 col-lg-4 col-xl-5 d-flex align-items-center px-0 pr-30'>
                    <div className='image-container'>
                        <img 
                            className='w-100 h-100 round5' 
                            src={`${item.img}`} 
                            alt="assessment image" 
                        />
                    </div>
                </div>
                <div className='content-container col-12 col-lg-8 col-xl-7 px-0'>
                <Link to={`/catalogue/${id}/${category}/${subject}/${item.heading}`}> <h4 className='mb-0 primary-blue fs-24 font-weight-500 line-height-36 mt-3 mt-md-0'>{item.heading}</h4></Link>
                    <p className='mt-2 mb-0'>{item.content}</p>
                    <div className='d-flex gap-76 mt-25'>
                        <div className='d-flex align-items-center'>
                            <img src="/images/date_icon.png" className="icon-elm date-icon" />
                            <div>
                                <h6 className='m-0 fs-16 font-weight-700 line-height-24'>Starts On {moment(item.startDate, 'DD-MM-YYYY').format('MMM DD')}</h6>
                                <p className='m-0 fs-14 line-height-21'>{moment(item.startDate, 'DD-MM-YYYY').format('MMM DD')}-{moment(item.endDate, 'DD-MM-YYYY').format('MMM DD, YYYY')}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="/images/assessment_icon.png" className="icon-elm lession-icon" />
                            <h6 className='m-0 fs-16 font-weight-700 line-height-24'>{item.lession} {(item.lession > 1) ? 'lessons': 'lesson'}, {item.test} {(item.lession > 1) ? 'tests': 'test'}</h6>
                        </div>
                    </div>
                    <div className='space-price fs-24 my-25 font-weight-700 line-height-36'>₹ {numberFormatter(item.price)}</div>
                    <div className='d-flex flex-wrap align-items-center mt-auto'>
                        <button 
                            className='btn btn-outline-primary px-20 py-14'
                        >Take free test</button>
                        <button 
                            className='btn btn-primary mx-22 px-20 py-14' onClick={()=>dispatch(handleAddToCart(item))}
                        ><img src={`${addToCart}`} className="add-to-cart" alt="add to cart" /> Add to cart</button>
                        <div className='ms-md-auto mt-3 mt-md-0'>
                            <Link to={`/catalogue/${id}/${category}/${subject}/${item.heading}`}><img src={`${viewDetails}`} className="me-2" alt="View details" /> <span className='fs-14 text-black'>View Details</span></Link>
                            <Link to=""><img src="/images/icons/share.png" className='share-icon' alt="share" /><span className='fs-14 text-black'>Share</span></Link>
                        </div>
                    </div>
                </div>
                </Row>
            </div>))}
        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    )

}