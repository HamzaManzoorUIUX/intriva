import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { FaHubspot } from "react-icons/fa";

import Fade from 'react-reveal/Fade';
import TeamRender from './TeamRender';

function WhoWeAre(props) {
    return (
        <div>
            <ScrollToTopOnMount />
            <MyNavBar title={'Who We Are'} />
            <div className="container-fluid homeBack pb-5">
                <Fade left big>
                <section className='px-3 px-md-5 py-5'>
                    <p>
                        We Operate As A Single Team, Leveraging Our Multi- Disciplinary Skills And Collaborating  Across Sectors, Regions And  Disciplines To Invest With A Single
                        Strategic Purpose.
            </p>
                    <p>
                        We Are Managers Of People’s Savings And Take Our Responsibilities Seriously, Striving  For The Highest Standards In Everything We Do. We Push
                        Ourselves To Find The Best  Opportunities, Engaging In Critical Thinking And Seeking And Sharing Insights To Reach The Best Decisions.
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
            <Footer />
        </div>
    );
}

export default WhoWeAre;