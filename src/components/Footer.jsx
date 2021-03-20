import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../assets/img/linkedin-white-logo-png-14.png'
import PRI from '../assets/img/UN+PRI+logo+copy.png'
import Fade from 'react-reveal/Fade';
import Logo from "../assets/img/logo.png";

function Footer(props) {
    return (<>
       
        <footer className='container-fluid z-7000'>
          <div className="row">
              <div className="col-md-3 text-center ">
                  <img src={Logo} alt="Logo" className='footerLogo mb-3 mb-md-0'/>
              </div>
              <div className="col-md-9">
              <Fade right big>
                <ul className='myList d-flex list-unstyled justify-context-start justify-content-md-end flex-row p-0 flex-wrap'>
                    <li>
                        <Link to='/'>
                            ABOUT INTRIVA
                   </Link>
                    </li>
                    <li>
                        <Link to='/whoweare'>
                            Who We Are Docs
                    </Link>
                    </li>
                    <li>
                        <Link to='/whatwedo'>
                            What We Do
                    </Link>
                    </li>
                    <li>
                        <Link to='/media'>
                            In The Media
                    </Link>
                    </li>
                    <li>
                        <Link to='/contact-us'>
                            Make Contact
                    </Link>
                    </li>
                </ul>
            </Fade>
            <Fade right big>
            <div className="d-none d-md-flex justify-content-center justify-content-md-end">
                <img src={PRI} alt="LinkedIn" className='myFooter-img ' />
                <img src={LinkedIn} alt="LinkedIn" className='myFooter-img' />
            </div>
            </Fade>
              </div>
          </div>
            <Fade top big>
            <div className="text-center text-light mt-3">
                INTRIVA.COM © 2021
            </div>
            </Fade>
            
        </footer>
        </>
    );
}

export default Footer;