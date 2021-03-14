import React from 'react';
import Londan from "../../assets/videos/London City  The United Kingdom_v240P.mp4";
import PreLoader from '../../components/PreLoader';
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
function Header(props) {

    return (
        <>
            <PreLoader />
            <div className='headerHome pt-4 z-50'>
                <video autoPlay muted loop className='headerHome-video'>
                    <source src={Londan} type='video/mp4' />
                </video>
                <div className="z-10 position-relative d-flex justify-content-between flex-column h-100">
                    <div className="px-3 py-2 bannerImg d-block d-md-none">
                        <img src={Logo} alt="logo" className='logoHome' />
                    </div>
                    <div className='p-2'>
                        <h1 className="header-heading">
                            we provide
                </h1>
                        <h3 className="header-text">
                            opportunistic capital, timely investing decisions and differentiated solutions
                </h3>
                    </div>
                    <div>
                        <div className="px-3 py-2 bannerImg d-none d-md-block">
                            <img src={Logo} alt="logo" className='logoHome' />
                        </div>
                        <ul className="homeList">
                            <li className="homeList-item">
                          <Link to='/'>
                          <span>
                                    About
                                             </span>
                                <b>
                                    INTRIVA
                                    </b>
                          </Link>
                            </li>
                            <li className="homeList-item">
                           <Link to='/'>
                           <span>
                                    WHO
                                             </span>
                                <b>
                                    We Are
                                    </b>
                           </Link>
                            </li>
                            <li className="homeList-item">
                                <Link to='/'>
                                <span>
                                    what
                                             </span>
                                <b>
                                    we do
                                    </b>
                                </Link>
                            </li>
                            <li className="homeList-item">
                                <Link to='/'>

                                <span>
                                    in the
                                             </span>
                                <b>
                                    media
                                    </b>
                                </Link>
                            </li>
                            <li className="homeList-item">
                           <Link to='/'>
                           <span>
                                    make
                                             </span>
                                <b>
                                    contact
                                    </b>
                           </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;