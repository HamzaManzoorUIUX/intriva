import React, { useState } from 'react';
import Header from './Header';
import MyNavBar from '../../components/MyNavBar';
import sectionOne from '../../assets/img/Group 1431.png'
import sectionTwo from '../../assets/img/Group 1432.png'
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
// import ScrollToTopOnMount from '../../components/ScrollToTop';
import ReactPageScroller from "react-page-scroller";
import PreLoader from "../../components/PreLoader";
import DragScrollProvider from 'drag-scroll-provider'

function Home(props) {
    const { section } = props.match.params
    const [currentPage, setcurrentPage] = useState(section !== undefined ? 2 : 0)
    const handlePageChange = number => {
        setcurrentPage(number)
    };

    const handleBeforePageChange = number => {
        console.log(number);
    };
    return (<>
        <PreLoader />
        <MyNavBar tab={1} title={'ABOUT INTRIVA'} position={'fixed'} number={currentPage} />
        <ReactPageScroller
            pageOnChange={handlePageChange}
            onBeforePageScroll={handleBeforePageChange}
            customPageNumber={currentPage}
        >
            <Header handlePageChange={handlePageChange} />
            <div className="homeBack">
                <div className='container-fluid '>
                    <div className="row py-5">
                        <Fade cascade big>
                            <div className="col-md-6 d-none d-md-block pl-0 mt-3">
                                <DragScrollProvider>
                                    {({ onMouseDown, ref }) => (
                                        <div className="scrollable" ref={ref} onMouseDown={onMouseDown}>
                                            <img src={sectionOne} alt="sectionOne" className='sectionImg' />
                                        </div>
                                    )}
                                </DragScrollProvider>
                            </div>
                        </Fade>
                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            Founded in 2017
                      </span>
                                    </h4>
                                    <div>
                                        Founded in 2017 , Intriva is a privately held alternative alternative asset managent firmspecialising in asset-backed debt and equity special situations across Western Europe
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            Intriva provides
                      </span>
                                    </h4>
                                    <div>
                                        Intriva provides an attractive risk adjusted return profile to our investors, and bespoke capitalsolutions to our partners throughout Western Europe.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            Intriva invests
                      </span>
                                    </h4>
                                    <div>
                                        Intriva invests throughout the capital structure in both single name positions, and also supportsthematic growth opportunities with large scale roll out strategies.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big >
                                <div className='d-none d-md-block'>
                                    <h4 className='text-primary '>
                                        <span className="upperLine">
                                            Intriva employs
                      </span>
                                    </h4>
                                    <div>
                                        As of December 31, 2020, Intriva employs a staff of 16 people, including 11 investmentprofessionals, in its London headquarters and affiliated offices in Frankfurt and Madrid.
                  </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeBack">
                <div className='container-fluid '>
                    <div className="row py-5">
                        <div className="col-md-6  pl-md-5 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
                            <Fade cascade big>
                                <h4>
                                    Culture
                   </h4>
                                <div>
                                    <p>
                                        We take pride in our collaborative culture, which harnesses camaraderie and the balance of skills and experience which our team members collectively bring to bear.
                       </p>
                                    <p>

                                        As a young firm, we are entrepreneurial and hungry to delivery exceptional returns for our investors.  We are creative about our investments and how they are structured.  We work hard and pursue opportunities with tenacity and thoroughness.
                       </p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6 text-right pr-0 d-none d-md-block">
                            <Fade cascade big>
                                <img src={sectionTwo} alt="sectionTwos" className='sectionImg' />
                            </Fade>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </ReactPageScroller>
    </>
    );
}

export default Home;