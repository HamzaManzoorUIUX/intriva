import React from 'react';
import MyNavBar from '../../components/MyNavBar';
import path from '../../assets/img/Subtraction 1.png'
import Londan from '../../assets/img/Londan.png'
import Frankfurt from '../../assets/img/Frankfurt.png'
import Madrid from '../../assets/img/Madrid.png'
import MyMap from './MyMap'
import Footer from '../../components/Footer'


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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 px-0">
                        <div className="cityCard">
                            <img src={Londan} alt="Londan" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1>
                                    LONDAN
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-0">
                    <div className="cityCard">
                            <img src={Frankfurt} alt="Frankfurt" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                    Frankfurt
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-0">
                    <div className="cityCard">
                            <img src={Madrid} alt="Madrid" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                    Madrid
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyMap isMarkerShown/>
            <Footer/>
        </div>
    );
}

export default ContactUs;