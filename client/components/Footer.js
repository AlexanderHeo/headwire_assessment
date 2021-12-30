import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import { IoLocationOutline, IoMailOpenOutline } from 'react-icons/io5';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-col'>
          <img className='logo' src='images/logo-footer.svg' alt='' />
          <p>
            We provide a full range of interior design, architectural design.
          </p>
          <div className='footer-sm-container'>
            <div className='footer-sm'>
              <FaFacebookF size='0.8rem' />
            </div>
            <div className='footer-sm'>
              <FaLinkedinIn size='0.8rem' />
            </div>
            <div className='footer-sm'>
              <FaTwitter size='0.8rem' />
            </div>
            <div className='footer-sm'>
              <FaInstagram size='0.8rem' />
            </div>
          </div>
        </div>
        <div className='footer-col'>
          <div className='footer-title'>Contacts</div>
          <div className='footer-subsection'>
            <div className='location'>
              <IoLocationOutline />
              411 University St. Seattle, USA
            </div>
            <div className='location'>
              <IoMailOpenOutline />
              theratio_interior@mail.com
            </div>
            <div className='location'>
              <BsTelephone />
              +1 800 456 789 123
            </div>
          </div>
        </div>
        <div className='footer-col'>
          <div className='footer-title'>Latest Projects</div>
          <div className='footer-subsection'>
            <div>Stylish Family Apartment</div>
            <div>Modern Villa in Belgium</div>
            <div>Private House in Spain</div>
          </div>
        </div>
        <div className='footer-col'>
          <div className='footer-title'>Subscribe</div>
          <div className='footer-subsection'>
            <div className='input-container'>
              <input type='email' placeholder='YOUR EMAIL' />
              <IoMdPaperPlane />
            </div>
            <div>Follow our newsletter to stay updated about agency.</div>
          </div>
        </div>
      </div>
      <div className='fineprint'>
        <small className='copyright'>
          Copyright &copy; 2021 Theratio by <span>ThemeModern</span> All Rights
          Reserved
        </small>
        <div className='tso-policy'>
          <small className='tou'>Terms of use</small>
          <small>|</small>
          <small className='policy'> Privary Enviromental Policy</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
