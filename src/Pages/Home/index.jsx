import React, { useState } from 'react';
import Header from './Header';
import MyNavBar from '../../components/MyNavBar';
import sectionOne from '../../assets/img/Group 1431.png'
import sectionTwo from '../../assets/img/Group 1432.png'
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
import ReactPageScroller from "react-page-scroller";
import PreLoader from "../../components/PreLoader";
import DragScrollProvider from 'drag-scroll-provider'
import TeamData from "../WhoWeAre/TeamData.json";
import StickyFooter from '../../components/StickyFooter';

function Home(props) {
    const { section } = props.match.params
    const [currentPage, setcurrentPage] = useState(section !== undefined ? 1 : 0)
    const handlePageChange = number => {
        setcurrentPage(number)
    };
console.log(currentPage);
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
                                    Founded in 2017, Intriva is an independent alternative asset management firm investing in mid-market companies and real estate throughout Western Europe. 
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
                                    Intriva employs {TeamData.length} people, including 11 investment professionals, in its London headquarters and affiliated offices in Frankfurt and Madrid.
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
                                    Intriva provides an attractive risk adjusted return profile to our investors, and bespoke capitalsolutions to our partners throughout Western Europe.
                  </div>
                                </div>
                            </Fade>
                   
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="homeBack-2">
                <div className='container '>
                    <div className="row pt-3 pt-xl-5">
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
                                    As a young firm, we are entrepreneurial and hungry to deliver exceptional returns for our investors. We are creative about our investments and how they are structured.  We work hard and pursue opportunities with tenacity and thoroughness.   
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
                <Footer />
            </div>

        </ReactPageScroller>
        <StickyFooter home={true} currentPage={currentPage}/>
    </>
    );
}

export default Home;