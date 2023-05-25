import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import IITJEEImage from '../../assets/images/exploreCatalouge/images/iit-jee.svg';
import NEETKinematics from '../../assets/images/exploreCatalouge/images/neetkinematics.svg';
import NEETThermodynamics from '../../assets/images/exploreCatalouge/images/neetthermodynamics.svg';
import CUETInformationTechnology from '../../assets/images/exploreCatalouge/images/cuetinformation-technology.svg';
import CUETPersonalDevelopment from '../../assets/images/exploreCatalouge/images/cuetpersonal-development.svg';
import StartsOn from '../../assets/images/exploreCatalouge/images/startsOn.svg';
import NDAEnglishHindi from '../../assets/images/exploreCatalouge/images/ndaenglish-hindi.svg';
import NDAMathematics from '../../assets/images/exploreCatalouge/images/ndamathematics.svg';
import RightArrow from '../../assets/images/right-arrow.svg';
import PrimaryRightArrow from '../../assets/images/primary-right-arrow.svg';
import Select from '../../components/select/SimpleSelect';
import { useSelector } from 'react-redux';
import './style.scss';


const exploreCatalougeList = [
    {
      id: 'iitjee',
      name: 'IIT-JEE',
      heading: 'Data science & AI algorithms',
      list: [
        {
            id: 'iitjee1',
            heading: 'Data science & AI algorithms',
            image: IITJEEImage,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt libero eget ante sodales, eget sollicitudin est bibendum. Proin sit amet neque tincidunt, elementum dolor vel, euismod erat.'

        }
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt libero eget ante sodales, eget sollicitudin est bibendum. Proin sit amet neque tincidunt, elementum dolor vel, euismod erat.',
      logo: '',
      image: IITJEEImage,
      fullScreen: true
    },
    {
      id: 'neet',
      name: 'NEET',
      heading: '',
      list: [
        {
          id: 'neetKinematics',
          heading: 'Kinematics',
          image: NEETKinematics
        },
        {
          id: 'neetThermodynamics',
          heading: 'Thermodynamics',
          image: NEETThermodynamics
        }
      ],
      content: '',
      logo: '',
      image: '',
      fullScreen: false
    },{
      id: 'cuet',
      name: 'CUET',
      heading: '',
      list: [
        {
          id: 'cuetInformationTechnology',
          heading: 'Information technology',
          image: CUETInformationTechnology
        },
        {
          id: 'cuetPersonalDevelopment',
          heading: 'Personal development',
          image: CUETPersonalDevelopment
        }
      ],
      content: '',
      logo: '',
      image: '',
      fullScreen: false
    },{
      id: 'nda',
      name: 'NDA',
      heading: '',
      list: [
        {
          id: 'ndaEnglishHindi',
          heading: 'English and Hindi',
          image: NDAEnglishHindi
        },
        {
          id: 'ndaMathematics',
          heading: 'Mathematics',
          image: NDAMathematics
        }
      ],
      content: '',
      logo: '',
      image: '',
      fullScreen: false
    }
  ];

  const classData = [
    {
      value: 'class6',
      label: 'Class 6'
    },
    {
      value: 'class7',
      label: 'Class 7'
    },
    {
      value: 'class8',
      label: 'Class 8'
    },
    {
      value: 'class9',
      label: 'Class 9'
    },
    {
      value: 'class10',
      label: 'Class 10'
    },
    {
      value: 'class11',
      label: 'Class 11'
    },
    {
      value: 'class12',
      label: 'Class 12'
    }
  ];

export default function LandingPage() {
  const selectorData = useSelector((state) => state.rootReducer.navigationSlice.activeTab);
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
                                Explore Catalogue
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
                            {exploreCatalougeList.map((item) => (<div key={item.id} id={`${item.id}`}className='px-3 col-12'>
                                <div className='d-flex align-items-center mt-77'>
                                    <div className='primary-blue fs-2 font-weight-400'>{item.name}</div>
                                    <button className='btn p-0 primary-blue fs-14 text-decoration-underline ms-auto'>View all</button>
                                </div>
                                <div className='row mt-3'>
                            {item.list.map((listData) => (<div key={listData.id} className={`px-3 col-12 col-md-${item.fullScreen ? '12': '6'}`}>
                                <div className={`card h-100 ${item.fullScreen ? '': ''}`}>
                                    <div className={`p-10 card-body d-flex flex-wrap align-items-md-center justify-content-md-center flex-lg-nowrap flex-${item.fullScreen ? 'row': 'column'}`}>
                                        <img 
                                            src={`${listData.image}`} 
                                            className={`w-100 ${item.fullScreen ? 'max-w-480': ''}`} 
                                            alt="explore catalouge" 
                                        />
                                        <div className={`${item.fullScreen ? 'align-self-lg-center ms-lg-4 ps-lg-3 pt-14 pb-17': 'w-100'}`}>
                                            {listData.content && <>
                                              <h5 className="font-weight-500 mb-0 fs-24 primary-blue">{listData.heading}</h5>
                                              <div className='dark-black mt-20'>{listData.content}</div>
                                              <div className='mt-30'>
                                                <img src={`${StartsOn}`} alt="starts on" className='w-100'/>
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
                                                  className='btn mt-3 h-52 w-180 btn-outline-primary font-weight-500 d-flex align-items-center me-35'
                                                >
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
                                                <Link to="/" className="fs-14 mt-3 dark-black text-decoration-underline">+View details</Link>
                                              </div>
                                            </>}
                                            {!item.fullScreen &&<div className='px-24 pb-17 pt-14 d-flex flex-wrap justify-content-between align-items-center'>
                                                 <h5 
                                                  className="font-weight-500 fs-24 mb-0 primary-blue"
                                                >{listData.heading}</h5>
                                                <Link to="/" className="nowrap text-warning text-decoration-underline">+View details</Link>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>))}</div></div>))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}