import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import RightArrow from '../../assets/images/right-arrow.svg';
import PrimaryRightArrow from '../../assets/images/primary-right-arrow.svg';
import Select from '../../components/select/SimpleSelect';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import  dropdownOptions  from '../../assets/jsonData/quickLinksData.json';
import classData from '../../assets/jsonData/classData.json'
import { handleAddToCart } from '../../redux/reducers/cartSlice';





export default function CatalogQuickLinks() {
  
const {id} = useParams();
const [currentPage, setcurrentPage] = useState('');
const selectorData = useSelector((state) => state.rootReducer.navigationSlice.activeTab);
const dispatch=useDispatch()
  const refElm = useRef(null);
  const [selectedVal, setSelectedVal] = useState({
    value: 'class10',
    label: 'Class 10'
  });

  useEffect(() => {
    if (refElm.current) {
        refElm.current.scrollIntoView({behavior: "smooth"});
    }
  }, [selectorData]);
  
  return (
    <>
         <div className='explore-catalouge-landing-container bg-white' ref={refElm}>
                <div className='w-100 h-118'></div>
                <div className='d-flex pb-60'>
                    <div className='container my-auto mt-53'>
                        <div className='row'>
                            <div className='col-12'>
                              <div className='d-flex'>
                              <h4 className='primary-blue fs-48 align-self-center'>
                                 {id.toUpperCase()}
                               </h4>
                              <div className='ms-auto max-w-235 w-100'>
                                <p className='mb-0 dark-black'>Class</p>
                                <Select
                                  options={classData}
                                  value={selectedVal}
                                  onChange={setSelectedVal}
                                />
                                {/* <select
                                  className='form-control form-select'
                                >
                                  {classData.map((item) => (<option key={`${item.id}`} className=''>{item.value}</option>))}
                                </select> */}
                              </div>
                              </div>
                            </div>
     <div>
      {dropdownOptions.map((caterogies, index) => {
        // <h4>{caterogies.name}</h4>
        if(caterogies.id === id){
          <h4>{caterogies.name}</h4>
          return (
            <div key={index}>
              {caterogies.options.map((item, index) => {
                return (
                  <div key={index}>
                     <div  className='px-3 col-12'>
                                    <div className='d-flex align-items-center mt-77'>
                                        <div className='primary-blue fs-2 font-weight-400'>{item.name}</div>
                                        {/* <button className='btn p-0 primary-blue fs-14 text-decoration-underline ms-auto'>View all</button> */}
                                    </div>
                                    <div className='row mt-3'>
                                {item && item.assessments && item.assessments.map((listData) => (<div key={listData.id} className={`px-3 col-12 col-md-12 mb-53`}>
                                    <div >
                                        <div className={`p-10 card-body d-flex flex-wrap align-items-md-start justify-content-md-start flex-lg-nowrap flex-row`}>
                                            <img 
                                                src={`${listData.image}`} 
                                                className={`w-100 ${item.fullScreen ? 'max-w-480': ''}`} 
                                                alt="explore catalouge" 
                                            />
                                            <div className={`ms-lg-4 ps-lg-3 pt-20 pb-17 w-100 pl-10`}>
                                               
                                                  <h5 className="font-weight-500 mb-0 fs-24 primary-blue">{listData.testName}</h5>
                                                  <div className='dark-black mt-20'>{listData.description}</div>
    
    
    
                                                  <div className='mt-30 date-assessment-outer'>
                                                <div className='date'>
                                                    <img src='/images/date_icon.png'/>
                                                    <span className='date-details'>
                                                        <span>Starts on {listData.startDate}</span>
                                                        <span> {listData.startDate} - july 24, 2022</span>
    
                                                    </span>
                                                    </div>  
    
    
                                                    <div className='assessment'>
                                                    <img src='/images/assessment_icon.png'/>
                                                    <span>
                                                        <span className='assessment-details'>{listData.lessons} lessons, {listData.tests} tests</span>
                                                        
    
                                                    </span>
                                                    </div>  
    
    
                                                  
                                                </div>
                                                  <div className='mt-26 d-flex flex-wrap align-items-center'>
                                                    <button
                                                      className='btn h-52 mt-3 w-225 btn-warning me-20 font-weight-500 d-flex align-items-center'
                                                    >
                                                      <span>Take practice test</span>
                                                      <img 
                                                        className='ms-auto' 
                                                        src={`${RightArrow}`} 
                                                        alt="right arrow" 
                                                      />
                                                    </button>
                                                    <button 
                                                      className='btn mt-3 h-52 w-180 btn-outline-primary font-weight-500 d-flex align-items-center me-35'>
                                                      Add to cart
                                                      <img 
                                                        className='right-arrow ms-auto' 
                                                        src={`${RightArrow}`} 
                                                        alt="right arrow" 
                                                      />
                                                      <img 
                                                        className='primary-arrow ms-auto' 
                                                        src={`${PrimaryRightArrow}`} 
                                                        alt="right arrow" 
                                                      />
                                                    </button>
                                                    <Link to="/ecom" className="fs-14 mt-3 dark-black text-decoration-underline">+View details</Link>
                                                  </div>
                                                
                                                {!item.fullScreen &&<div className='px-24 pb-17 pt-14 d-flex flex-wrap justify-content-between align-items-center'>
                                                     <h5 
                                                      className="font-weight-500 fs-24 mb-0 primary-blue"
                                                    >{listData.heading}</h5>
                                                    {/* <Link to="/" className="nowrap text-warning text-decoration-underline">+View details</Link> */}
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                                
                                </div></div>
                  </div>
                );
              })}
  
              <hr />
            </div>
          );
        }

      })}
    </div>
    </div>
    </div>
</div>
</div>
            <Footer />
        </>
    )
}