import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
import TermsConditionModel from './TermsConditionModel';

function Footer(props) {
    const [modalShow, setModalShow] = useState(false)
    return (<>

        <footer className='container-fluid z-7000 py-2'>
            <div className="d-flex justify-content-between align items center">
                <div className='d-none d-md-block'>
                    &aspn;
</div>
                <div className="text-center text-light">
                    Intriva.com &copy; 2020
            </div>
               <div className="d-flex">
               <div className='text-white curser makeAnker' onClick={() => setModalShow(true)}>
                    DISCLAIMER
                    </div>
                <a href='https://icx.efrontcloud.com/IntrivaJSY' target='_blank' rel="noreferrer" className='ml-4 d-none d-md-block text-white curser text-uppercase' >
                    For investors
                    </a>
               </div>
            </div>
            <TermsConditionModel show={modalShow} onHide={() => setModalShow(false)} />
        </footer>
    </>
    );
}

export default Footer;