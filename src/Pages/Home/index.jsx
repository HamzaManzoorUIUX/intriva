import React from 'react';
import Header from './Header';
import MyNavBar from './MyNavBar';
import sectionOne from '../../assets/img/Mask Group 6.png'
import sectionTwo from '../../assets/img/Mask Group 8.png'
import Footer from './Footer';
function Home(props) {
    return (
        <div>
            <Header />
            <MyNavBar />
            <div className='container-fluid homeBack'>
                <div className="row align-items-center py-5">
                    <div className="col-md-6 d-none d-md-block pl-0">
                        <img src={sectionOne} alt="sectionOne" className='sectionImg' />
                    </div>
                    <div className="col-md-6">
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
                       <div>
                       <h4 className='text-primary '>
                            <span className="upperLine">
                            Intriva employs
                      </span>
                        </h4>
                        <div>
                        As of December 31, 2020, Intriva employs a staff of 16 people, including 11 investmentprofessionals, in its London headquarters and affiliated offices in Frankfurt and Madrid. 
                  </div>
                       </div>
                    </div>
                </div>
           <div className="row align-items-center py-5">
               <div className="col-md-6 pl-md-5">
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
               </div>
               <div className="col-md-6 text-right pr-0 d-none d-md-block">
                   <img src={sectionTwo} alt="sectionTwos" className='sectionImg' />
               </div>
           </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;