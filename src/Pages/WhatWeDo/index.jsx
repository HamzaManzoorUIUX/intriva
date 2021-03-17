import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import  Mask6  from "../../assets/img/Mask Group 6.png";
import  Mask  from "../../assets/img/Mask Group.png";
import Fade from 'react-reveal/Fade';
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
                        <div className="col-md-5">
                            <Fade right big>
                            <img src={Mask6} alt="Mask6" className='w-100 my-3'/>
                            </Fade>
                            <Fade right big>
                            <img src={Mask} alt="Mask" className='w-100 my-3'/>
                            </Fade>
                        </div>
                        <div className="col-md-7">
                            <Fade left big>
                            <p>
                                Intriva Invests In Real Estate, Equity, Credit And Other Financial Assets Across Western Europe.
                        </p>
                        </Fade>
                            <Fade left big>
                            <p>
                                As A Value Investor, We Only Deploy Capital When There Is Both A Margin Of Safety And Significant Upside.
                        </p>
                        </Fade>
                            <Fade left big>
                            <div className="my-4 f-40">
                                Capital Preservation
                        </div>
                            <div>
                                We Have A Rigorous Focus On Capital Protection. We Spend Significant Amounts Of Time Looking At How We Can Positively Affect The Distribution Of Returns On Our Investments. We Often Invest In Companies That Offer Significant Opportunities To De-Risk The Investment Quickly, For Example:
                    </div>
                    </Fade>
                            <div className="col-md-8">
                           
                            <Fade left big>
                                <div className='my-3'>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            By deploying
                      </span>
                                    </h4>
                                    <div>
                                        By deploying our extensive operating expertise
                                        to bring about early operational wins
                                </div>

                                </div>
                                </Fade>
                            <Fade left big>
                                <div className='my-3'>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            investing
                      </span>
                                    </h4>
                                    <div>
                                        By investing at low entry multiples and/or with value accretive buy-and-build plans
                                </div>

                                </div>
                                </Fade>
                            <Fade left big>
                                <div className='my-3'>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            Through investing
                      </span>
                                    </h4>
                                    <div>
                                        Through investing in companies with significant asset backing, for example with long-termvisible cash flow streams or tangible assets
                                </div>

                                </div>
                                </Fade>
                            <Fade left big>
                                <div className='my-3'>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            asset-backed
                      </span>
                                    </h4>
                                    <div>
                                        By investing in asset-backed opportunities at a
                                        discount to intrinsic value with a strong focus
                                        on downside protection and upside participatio

                                </div>

                                </div>
                                </Fade>
                            </div>
                            <Fade left big>
                      <div>
                      <div className="my-4 f-40">
                      Operational Transformation And Driving Upside
                        </div>
                        <p>
                        A Key Determinant Of Our Returns And The Attractiveness Of An Investment Opportunity To Us Is The Potential We Identify To Proactively Transform The Business Or Asset Through Strategic Repositioning, Operational Improvement, High-Returning Capital Investment And Accretive Buy-And-Build Strategies.
                        </p>
                        <p>
The Resources Dedicated To Each Investment Together With The Experience Of Our Team Allows Us To Identify And Execute On Value Creation Opportunities.

                        </p>
                      </div>
                      </Fade>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default WhatWeDo;