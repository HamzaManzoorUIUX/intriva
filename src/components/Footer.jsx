import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import TermsConditionModel from './TermsConditionModel';

function Footer(props) {
    const [modalShow, setModalShow] = useState(false)
    return (<>

        <footer className='container-fluid z-7000'>
            <div className="row">

                <div className="col-md-12">
                    <Fade big>
                        <ul className='myList d-flex list-unstyled justify-context-start justify-content-md-end flex-row p-0 flex-wrap'>
                            <li>
                                <Link to='/'>
                                    About Intriva
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
                            <li>
                                <div className='text-white curser' onClick={()=>setModalShow(true)}>
                                Terms of Use
                    </div>
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
            <Fade big>
                <div className="text-center text-light mt-3">
                    Intriva.com (c) 2020
            </div>
            </Fade>
            <TermsConditionModel show={modalShow} onHide={() => setModalShow(false)} />
        </footer>
    </>
    );
}

export default Footer;