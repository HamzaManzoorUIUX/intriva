import React from 'react';
import MyNavBar from '../../components/MyNavBar';
import path from '../../assets/img/Subtraction 1.png'

import MyMap from './MyMap'
import Footer from '../../components/Footer'
import CityCards from './CityCards';


function ContactUs(props) {
    return (
        <div>
            <MyNavBar title='Make Contact' />
            <div className="contactHead">
                <div className="content f-20">
                    <div className="row">
                        <div className="col-6">
                            General enquiries:
                        </div>
                        <div className="col-6">
                            info@intriva.com
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Media enquiries:
                        </div>
                        <div className="col-6">
                            media@intriva.com
                        </div>
                    </div>
                </div>
                <img src={path} className='path-img' alt="path" />
            </div>
            
   <CityCards/>
           
            <MyMap isMarkerShown/>
            <Footer/>
        </div>
    );
}

export default ContactUs;