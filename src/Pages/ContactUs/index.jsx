import React, { useState } from 'react';
import MyNavBar from '../../components/MyNavBar';
import path from '../../assets/img/Subtraction 1.png'

import MyMap from './MyMap'
import Footer from '../../components/Footer'
import CityCards from './CityCards';
import StickyFooter from '../../components/StickyFooter';
import ScrollToTopOnMount from '../../components/ScrollToTop';


function ContactUs(props) {
    const [activeCard, setActiveCard] = useState(0)
    return (
        <div>
            <ScrollToTopOnMount/>
            <MyNavBar title='Make Contact' />
           <div>
           <div className="contactHead">
                <div className="content">
                    <div className="row">
                        <div className="col-6">
                            General enquiries:
                        </div>
                        <div className="col-6">
                            <a href="mailto:info@intriva.com">
                            info@intriva.com
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Media enquiries:
                        </div>
                        <div className="col-6">
                            <a href="mailto:media@intriva.com">
                            media@intriva.com
                            </a>
                        </div>
                    </div>
                </div>
                <img src={path} className='path-img' alt="path" />
            </div>
            <ul className='cityNav'>
                <li onClick={()=>{setActiveCard(0)}}>
                    London
                </li>
                <li onClick={()=>{setActiveCard(1)}}>
                Frankfurt
                </li>
                <li onClick={()=>{setActiveCard(2)}}>
                Madrid
                </li>
            </ul>
   <CityCards activeCard={activeCard} setActiveCard={setActiveCard} />
           
            <div className="mb-minus">
             <MyMap activeCard={activeCard}/> 
            </div>
            <StickyFooter/>
           </div>
            <div className='position-md-fixed'>
            <Footer/>
            </div>
        </div>
    );
}

export default ContactUs;