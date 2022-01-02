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
import '../stylesheets/Footer.css';

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
            <div className='footer-sm fb'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebookF size='0.8rem' />
              </a>
            </div>
            <div className='footer-sm tw'>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter size='0.8rem' />
              </a>
            </div>
            <div className='footer-sm in'>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn size='0.8rem' />
              </a>
            </div>
            <div className='footer-sm ig'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size='0.8rem' />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-col'>
          <div className='footer-title'>Contacts</div>
          <div className='footer-subsection'>
            <div className='location'>
              <a
                href='https://www.google.com/maps/place/411+University+St,+Seattle,+WA+98101/@47.6079957,-122.3359961,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab3f905c4b1:0x96bf575ff75ab1aa!8m2!3d47.6079957!4d-122.3338074'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IoLocationOutline size='1.2rem' />
                411 University St. Seattle, USA
              </a>
            </div>
            <div className='location'>
              <a
                href='mailto:theratio_interior@mail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IoMailOpenOutline size='1.2rem' />
                theratio_interior@mail.com
              </a>
            </div>
            <div className='location'>
              <a
                href='tel:18004567891'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsTelephone size='1.2rem' />
                +1 800 456 789 123
              </a>
            </div>
          </div>
        </div>
        <div className='footer-col'>
          <div className='footer-title'>Latest Projects</div>
          <div className='footer-subsection projects'>
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
