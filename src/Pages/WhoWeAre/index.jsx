import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { FaHubspot } from "react-icons/fa";

import Fade from 'react-reveal/Fade';
import TeamRender from './TeamRender';
import StickyFooter from '../../components/StickyFooter';
// import PreLoader from '../../components/PreLoader';

function WhoWeAre(props) {
    return (
        <div>
            {/* <PreLoader/> */}
            <MyNavBar title={'Who We Are'} />
            <ScrollToTopOnMount />
            <div>
            <div className="teamBack pb-5">
                <div className="container">
                    
                <Fade big>
                <section className='px-3 px-md-5 py-5'>
                    <p>
                    As a young firm, we are entrepreneurial and hungry to deliver exceptional returns for our investors. We are creative about our investments and how they are structured.  We work hard and pursue opportunities with tenacity and thoroughness.   
            </p>
                    <p>
                    We are managers of people’s savings and take our responsibilities seriously, striving for the highest standards in everything we do. We push ourselves to find the best opportunities, engaging in critical thinking and seeking and sharing insights to reach the best decisions.
            </p>
                </section>
                </Fade>
                <section className='p-3 pb-5'>
                    <div className="d-flex align-items-center">
                        <div className="teamIndicater">
                            <FaHubspot />
                        </div>
                        <h3>
                            Team
                        </h3>
                    </div>
                    <div className="border border-primary border-2 my-3 w-50">
                    </div>
                    <TeamRender/>

                </section>
                </div>
                </div>
           <StickyFooter/>
            </div>
            <Footer />
        </div>
    );
}

export default WhoWeAre;