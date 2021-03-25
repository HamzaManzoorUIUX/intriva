import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import Mask6 from "../../assets/img/abc.png";
import Mask from "../../assets/img/def.png";
import Fade from 'react-reveal/Fade';
import StickyFooter from '../../components/StickyFooter';
// import PreLoader from '../../components/PreLoader';

function WhatWeDo(props) {
    return (
        <div>
            <ScrollToTopOnMount />
            {/* <PreLoader/> */}
            <MyNavBar title={'What we do'} />
            <div className="whatwedoBack">
                <div className="container-fluid p-3 z-10 position-relative">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <Fade big>
                                <img src={Mask6} alt="Mask6" className='w-100 my-3' />
                            </Fade>
                            <Fade big>
                                <img src={Mask} alt="Mask" className='w-100 my-3' />
                            </Fade>
                        </div>
                        <div className="col-md-7">
                         <div className="max-text">
                         <Fade big>
                                <p className='mt-3 '>
                                Intriva invests in real estate, equity, credit and other financial assets across Western Europe. As a value investor, we only deploy capital when there is both a margin of safety and significant upside. 
                                     </p>
                            </Fade>
                            <Fade big>
                                <div className="mt-4 f-30 font-timeNew">
                                    Capital Preservation
                        </div>
                                <div className=''>
                                We have a rigorous focus on capital protection. We spend a considerable amount of time looking at how we can positively affect the distribution of returns on our investments. Often, we invest in companies that offer significant opportunities to de-risk the investment quickly, for example:
                    </div>
                            </Fade>
                            <div className="">

                                <Fade big>
                                    <div className='my-3'>
                                        <h4 className='text-primary text-uppercase '>
                                            <span className="upperLine font-Roboto">
                                                By deploying
                      </span>
                                        </h4>
                                        <div>
                                    By deploying our extensive operating expertise to bring about early operational wins
                                </div>

                                    </div>
                                </Fade>
                                <Fade big>
                                    <div className='my-3'>
                                        <h4 className='text-primary text-uppercase '>
                                            <span className="upperLine font-Roboto">
                                                investing
                      </span>
                                        </h4>
                                        <div>
                                        By investing at low entry multiples and/or with value accretive buy-and-build plans
                                          </div>

                                    </div>
                                </Fade>
                                <Fade big>
                                    <div className='my-3'>
                                        <h4 className='text-primary text-uppercase '>
                                            <span className="upperLine font-Roboto">
                                                Through investing
                      </span>
                                        </h4>
                                        <div>
                                            
                                    Through investing in companies with high tangible asset backing, including with long-term visible cash flow streams 
                                </div>

                                    </div>
                                </Fade>
                                <Fade big>
                                    <div className='my-3'>
                                        <h4 className='text-primary text-uppercase'>
                                            <span className="upperLine">
                                                Asset-backed
                      </span>
                                        </h4>
                                        <div>
                                        By investing in asset-backed opportunities at a discount to intrinsic value with a strong focus on downside protection and upside participation
                                            
                                </div>

                                    </div>
                                </Fade>
                            </div>
                            <Fade big>
                                <div>
                                    <h3 className="my-4 f-40 ">
                                        Operational Transformation And Driving Upside
                        </h3>
                                    <p className=''>
                                    A key determinant of our returns and the attractiveness of an investment opportunity to us is the potential we identify to proactively transform the business or asset through strategic repositioning, operational improvement, high-returning capital investment and accretive buy-and-build strategies.
                        </p>
                                    <p className=''>
                                    The resources dedicated to each investment together with the experience of our team allows us to identify and execute value creation opportunities. 

                        </p>
                                </div>
                            </Fade>
                        
                         </div>
                         </div>
                    </div>
                </div>
                <StickyFooter />
            </div>
            <Footer />
        </div>
    );
}

export default WhatWeDo;