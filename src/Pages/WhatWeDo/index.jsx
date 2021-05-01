import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import whatweDo1 from "../../assets/img/whatweDo1.png";
import whatweDo2 from "../../assets/img/whatweDo2.png";
import Fade from 'react-reveal/Fade';
import StickyFooter from '../../components/StickyFooter';
// import PreLoader from '../../components/PreLoader';
import DragScrollProvider from 'drag-scroll-provider'
import whatweDo3 from "../../assets/img/whatweDo3.png";
function WhatWeDo(props) {
    return (
        <div>
            <ScrollToTopOnMount />
            {/* <PreLoader/> */}
            <MyNavBar title={'What we do'} />
            <div className="whatwedoBack">
                <div className="  z-10 position-relative w-100">
                    <div>
                    <img src={whatweDo3}  className='d-none d-lg-block' alt="whatweDo3" width='100%'/>
                    <div className="bg-white position-absolute h-100 w-100 d-none d-md-block" style={{opacity:0.8,zIndex:5,top:0,left:0}}></div>
                    </div>
                    <div className="container py-3 z-10 absolute-md-center" style={{filter:"opacity(0.8)"}}>
                        <Fade big>
                                <div className=' font-35 text-center' style={{fontFamily:'Roboto'}}>
                                We provide time sensitive and creative capital solutions, using our experience as hands-on investors across market cycles to enhance the strategic, operational, and financial direction of the assets in which we invest. We focus on unlocking upside while protecting against downside.
                                     </div>
                            </Fade>
                    </div>
                </div>
                <div className="container-fluid px-3 pt-md pb-3 z-10 position-relative">
                    <div className="row">
                        <div className="col-md-5 pl-0 mt-md-4 d-none d-md-block">
                        <DragScrollProvider>
                                    {({ onMouseDown, ref }) => (
                                        <div className="scrollable d-flex" ref={ref} onMouseDown={onMouseDown}>
                                            <img src={whatweDo1} alt="whatweDo1" className='sectionImg' />
                                        </div>
                                    )}
                                </DragScrollProvider>
                        </div>
                        <div className="col-md-7">
                         <div className="max-text">
         
                            <Fade big>
                                <h4 className="mt-3 mt-md-4 font-timeNew">
                                Sourcing
                        </h4>
                                <p className=''>
                                We seek market-leading investments that may be transformed through greater strategic and operational focus. We employ a proactive and theme-driven approach to sourcing investment opportunities, based on a firm culture which favours data-driven, independent, and evidence-based thinking. As a result, we typically originate investment opportunities outside the traditional sources of private equity deal flow. Further, we bolster these efforts with proprietary technology we have developed in order to streamline this process.
                    </p>
                    <p>
                    We are patient in sourcing new investments and approach any transaction with thorough due diligence from the start of our analysis. We invest significant time during due diligence to identify weaknesses in various downside scenario’s and seek to prepare strategies should those events ever occur.  By the time any transaction completes, we have strong conviction coupled with a clearly defined path to exit and realisation.

                    </p>
                                <h4 className="mt-3 mt-md-4 font-timeNew">
                                Operational transformation driving upside
                        </h4>
                    <p>
                    We are motivated by proactively working in partnership with management teams on strategic repositioning, operational improvements and accretive buy and build strategies. Our objective is to leave businesses in a stronger position for the future, which in turn enables us to deliver alpha to our investors.

                    </p>
                            </Fade>
                       </div>
                         </div>
                    </div>
                </div>
                <div className="container-fluid px-3 pt-md-5 pb-md-5 pb-3 z-10 position-relative">
                <div className="row">
                    <div className="col-md-7">
                        <div className="max-text-l">

                    <Fade big>
                                <div>
                                    <h4 className="mt-4 ">
                                            Environmental, Social and Corporate Governance
                        </h4>
                                    <p className=''>
                                        We are committed to driving sustainable value and have integrated Environmental, Social and Corporate Governance into our approach, with an in-depth ESG policy. We are signatories of Principals for Responsible Investment (PRI). 
                        </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-5 text-right pr-0 d-none d-md-block pt-1">
                        <DragScrollProvider>
                                    {({ onMouseDown, ref }) => (
                                        <div className="scrollable-2" ref={ref} onMouseDown={onMouseDown}>
                                            <img src={whatweDo2} alt="whatweDo2" className='sectionImg' />
                                        </div>
                                    )}
                                </DragScrollProvider>
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