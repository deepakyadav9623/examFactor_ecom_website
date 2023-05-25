import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../assets/images/facebook1.svg';
import Instagram from '../assets/images/instagram.svg';
import Linkdin from '../assets/images/linkdin.svg';

function Footer() {
  return (
        <>
        <div className='last-elm'></div>
        <div className='d-md-flex ps-3 ps-md-0 w-100 footer-container bg-white h-90 justify-content-md-around align-items-md-center position-relative bottom-0'>
          
          <div className='text-warning hidden font-weight-400 line-height-15 fs-10 mt-10'>
            Powered by <span className='primary-blue font-weight-400 fs-10 line-height-15'>MagicEdTech</span>
          </div>
          <div>
            <Link className='line-height-24 primary-blue' to='#'>Vision</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Features</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Team</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Privacy policy</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Terms of services</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Contact us</Link>
            <Link className='ms-3 line-height-24 primary-blue' to='#'>Sitemap</Link>
          </div>
          <div>
            <div>
            <Link to='#'><img src={`${Facebook}`} alt='facebook'/></Link>
            <Link to='#'><img className='ms-3' src={`${Instagram}`} alt='instagram'/></Link>
            <Link to='#'><img className='ms-3' src={`${Linkdin}`} alt='linkdin'/></Link>
            </div>
            <div className='text-warning font-weight-400 line-height-15 fs-10 mt-10'>
            Powered by <span className='primary-blue font-weight-400 fs-10 line-height-15'>MagicEdTech</span>
            </div>
          </div>
        </div>
        </>
  );
}

export default Footer;