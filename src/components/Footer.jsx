import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../assets/img/linkedin-white-logo-png-14.png'
import PRI from '../assets/img/UN+PRI+logo+copy.png'
import Fade from 'react-reveal/Fade';

function Footer(props) {
    return (
        <footer className='container-fluid'>
            <Fade right big>
                <ul className='myList flex-column flex-md-row p-0'>
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
                        <Link to='/'>
                            In The Media
                    </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Make Contact
                    </Link>
                    </li>
                </ul>
            </Fade>
            <Fade right big>
            <div className="d-flex justify-content-end">
                <img src={PRI} alt="LinkedIn" className='myFooter-img' />
                <img src={LinkedIn} alt="LinkedIn" className='myFooter-img' />
            </div>
            </Fade>
            <Fade top big>
            <div className="text-center text-light mt-3">
                INTRIVA.COM © 2021
            </div>
            </Fade>
        </footer>
    );
}

export default Footer;