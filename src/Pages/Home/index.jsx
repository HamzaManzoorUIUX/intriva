import React, { useState } from 'react';
import Header from './Header';
import MyNavBar from '../../components/MyNavBar';
import sectionOne from '../../assets/img/Group 1423.png'
import sectionTwo from '../../assets/img/Group 1422.png'
import Footer from '../../components/Footer';
import Fade from 'react-reveal/Fade';
import ReactPageScroller from "react-page-scroller";
import PreLoader from "../../components/PreLoader";
import DragScrollProvider from 'drag-scroll-provider'
import StickyFooter from '../../components/StickyFooter';
import CookiesAlert from '../../components/CookiesAlert';

function Home(props) {
    const { section } = props.match.params
    const [currentPage, setcurrentPage] = useState(section !== undefined ? 1 : 0)
    const handlePageChange = number => {
        setcurrentPage(number)
    };
    const handleBeforePageChange = number => {
        number=1
    };
    return (<>
        <div className="homepageMain">
        <PreLoader />
        {/* <MyNavBar tab={1} title={'ABOUT INTRIVA'} position={'fixed'} number={currentPage} /> */}
        <ReactPageScroller
            pageOnChange={handlePageChange}
            onBeforePageScroll={handleBeforePageChange}
            customPageNumber={currentPage}
        >
            <Header handlePageChange={handlePageChange} />
            <div className="homeBack">
        <MyNavBar tab={1} title={'ABOUT INTRIVA'} setcurrentPage={setcurrentPage} position={'position-relative'} number={currentPage} />
                <div className='container-fluid '>
        <div className='w-100' style={{height:'30px'}}></div>
                    <div className="row homecontent">
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
                                <div className='pt-0'>
                                    <h5 className='mb-0 mb-lg-2 f-20-r'>
                                        <span className="font-Roboto">
                                        Intriva is an alternative investment firm focused on value creation in mid-market businesses throughout Western Europe.
                      </span>
                                    </h5>
                    
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div className='pt-2'>
                                    <h4 className='text-primary mb-0'>
                                        <span className="upperLine font-Roboto">
                                        STRATEGIC PARTNERS
                      </span>
                                    </h4>
                                    <div className='max-text f-20-r'>
                                    We work alongside management teams to enhance the strategic, operational, and financial trajectory of the assets in which we invest.  We apply a relentless approach to asset management to resolve complexity, drive growth and maximise value.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary mb-0'>
                                        <span className="upperLine font-Roboto">
                                        VALUE CREATION
                      </span>
                                    </h4>
                                    <div className='max-text f-20-r'>
                                    We are hands-on investors that provide flexible solutions to deliver alpha with structured downside protection. Our team is composed of seasoned investment professionals who have gained their experience investing in and managing complex investments over multiple market cycles.
                  </div>
                                </div>
                            </Fade>
                            <Fade cascade big>
                                <div>
                                    <h4 className='text-primary  mb-0'>
                                        <span className="upperLine font-Roboto">
                                        LOCAL PRESENCE
                      </span>
                                    </h4>
                                    <div className='max-text f-20-r'>
                                    Our hands-on approach means that having a local presence is important, with professionals based in London, Frankfurt and Madrid.
                  </div>
                                </div>
                            </Fade>
                   
                        </div>
                    </div>
                </div>
              
            </div>
            <div className="homeBack-2 pt-1">
        <div>
        <MyNavBar tab={1} title={'ABOUT INTRIVA'} setcurrentPage={setcurrentPage} position={'position-relative'} number={currentPage} />

<div className='container '>
<div className='w-100' style={{height:'30px'}}></div>
    <div className="row homecontent">
        <div className="col-md-6 col-lg-5">
            <Fade cascade big>
                <h3 className=' pt-md-0'>
                High-Performance Culture
   </h3>
                <div className='max-text f-20-r'>
                    <p>
                    We take pride in our collaborative and high-performance culture, which harnesses camaraderie and the balance of skills and experience which our team members collectively bring to bear. 
       </p>
                    <p>
                    We are committed to delivering alpha for our investors. We are creative about our investments and how they are structured. Together, we work hard and pursue opportunities with tenacity and thoroughness.   
       </p>
       <p>
       Our aim is to be recognised as a hands-on investor that provides flexible and highly-structured solutions to drive significant value backed by downside protection.
       </p>
                </div>
            </Fade>
        </div>
        <div className="col-md-6 col-lg-7 text-right pr-0 d-none d-md-block pt-1">
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

        </div>
           <Footer />
            </div>

        </ReactPageScroller>
        <StickyFooter home={true} currentPage={currentPage}/>
        <CookiesAlert/>
        </div>
    </>
    );
}

export default Home;