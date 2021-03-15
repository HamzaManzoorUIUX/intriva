import React from 'react';
import { Link } from 'react-router-dom';
import LinkedIn from '../../assets/img/linkedin-white-logo-png-14.png'
import PRI from '../../assets/img/UN+PRI+logo+copy.png'

function Footer(props) {
    return (
        <footer className='container-fluid'>
            <ul className='myList flex-column flex-md-row p-0'>
                <li>
                   <Link to='/'>
                   ABOUT INTRIVA
                   </Link>
                </li>
                <li>
                <Link to='/'>
                    Who We Are Docs
                    </Link>
                </li>
                <li>
                <Link to='/'>
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
            <div className="d-flex justify-content-end">
                <img src={PRI} alt="LinkedIn" className='myFooter-img'/>
                <img src={LinkedIn} alt="LinkedIn" className='myFooter-img'/>
            </div>
            <div className="text-center text-light mt-3">
            INTRIVA.COM © 2021
            </div>
        </footer>
    );
}

export default Footer;