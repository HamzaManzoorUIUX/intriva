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
import ScreenSide from "../../assets/img/Screen Shot 2021-03-10 at 02.34.28.png";
import DragScrollProvider from 'drag-scroll-provider'

function Home(props) {
    const { section } = props.match.params
    const [currentPage, setcurrentPage] = useState(section !== undefined ? 2 : 0)
    const handlePageChange = number => {
        setcurrentPage(number)
    };

    const handleBeforePageChange = number => {
        number=1
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
                    <div className="row py-5 mt-3">
                        <Fade cascade big>
                            <div className="col-md-6 d-none d-md-block pl-0 mt-1">
                                <DragScrollProvider>
                                    {({ onMouseDown, ref }) => (
                                        <div className="scrollable d-flex" ref={ref} onMouseDown={onMouseDown}>
                                            <img src={sectionOne} alt="sectionOne" className='sectionImg' />
                                        </div>
                                    )}
                                </DragScrollProvider>
                            </div>
                        </Fade>
                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary mb-0'>
                                        <span className="font-Roboto">
                                            Founded in 2017
                      </span>
                                    </h4>
                                    <div className='max-text f-14'>
                                        Founded in 2017 , Intriva is a privately held alternative alternative asset managent firmspecialising in asset-backed debt and equity special situations across Western Europe
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary mb-0'>
                                        <span className="upperLine font-Roboto">
                                            Intriva provides
                      </span>
                                    </h4>
                                    <div className='max-text f-14'>
                                        Intriva provides an attractive risk adjusted return profile to our investors, and bespoke capitalsolutions to our partners throughout Western Europe.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary  mb-0'>
                                        <span className="upperLine font-Roboto">
                                            Intriva invests
                      </span>
                                    </h4>
                                    <div className='max-text f-14'>
                                        Intriva invests throughout the capital structure in both single name positions, and also supportsthematic growth opportunities with large scale roll out strategies.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big >
                                <div className='d-none d-md-block'>
                                    <h4 className='text-primary mb-0 '>
                                        <span className="upperLine font-Roboto">
                                            Intriva employs
                      </span>
                                    </h4>
                                    <div className='max-text f-14'>
                                        As of December 31, 2020, Intriva employs a staff of 16 people, including 11 investmentprofessionals, in its London headquarters and affiliated offices in Frankfurt and Madrid.
                  </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Fade top big>
            <img src={ScreenSide} width='252px' alt='img' />
                </Fade>
            </div>
            <div className="homeBack-2">
                <div className='container '>
                    <div className="row py-5">
                        <div className="col-md-6 col-lg-5 col-xl-4 ">
                            <Fade cascade big>
                                <h4>
                                    Culture
                   </h4>
                                <div className='max-text f-14'>
                                    <p>
                                        We take pride in our collaborative culture, which harnesses camaraderie and the balance of skills and experience which our team members collectively bring to bear.
                       </p>
                                    <p>

                                        As a young firm, we are entrepreneurial and hungry to delivery exceptional returns for our investors.  We are creative about our investments and how they are structured.  We work hard and pursue opportunities with tenacity and thoroughness.
                       </p>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6 text-right pr-0 d-none d-md-block pt-1">
                        <DragScrollProvider>
                                    {({ onMouseDown, ref }) => (
                                        <div className="scrollable-2" ref={ref} onMouseDown={onMouseDown}>
                                            <img src={sectionTwo} alt="sectionTwo" className='sectionImg' />
                                        </div>
                                    )}
                                </DragScrollProvider>
                        </div>
                    </div>
                </div>
            <div className='d-block d-lg-none d-xl-block'>
                <Fade top big>
            <img src={ScreenSide} width='252px' alt='img' />
                </Fade>
                <Footer />
            </div>

            </div>
        </ReactPageScroller>
    </>
    );
}

export default Home;