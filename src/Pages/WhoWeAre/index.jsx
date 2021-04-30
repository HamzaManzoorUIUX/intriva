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
                <section className='px-3 px-md-3 py-5 f-20-r'>
                    <p>
                    We are flexible investors who concentrate on businesses where there is an opportunity to work alongside management teams to drive performance.
            </p>
                    <p>
                    Our hands-on approach means that having a local presence where we invest is important, which is why we have offices in London, Frankfurt and Madrid, and a diverse international team. 
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