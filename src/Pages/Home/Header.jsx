import React from 'react';
import Frankfurt from "../../assets/videos/Frankfurt Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Londan from "../../assets/videos/London Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Neurons from "../../assets/videos/Stock Video of Neurons in brain. Loop. 3D animation of neural network. at Adobe Stock - Adobe Stock.MP4";
import ScreenSide from "../../assets/img/Screen Shot 2021-03-10 at 02.34.28.png";
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
function Header(props) {
    const vid = parseInt(Math.random() * 2 + 1)
    return (
        <>
            <div className='headerHome pt-4 z-50'>
                {
                    vid === 1 ?
                        <video autoPlay muted loop className='headerHome-video'>
                            <source src={Londan} type='video/mp4' />
                        </video> :
                        <video autoPlay muted loop className='headerHome-video'>
                            <source src={Frankfurt} type='video/mp4' />
                        </video>
                }

                <div className="z-10 position-relative d-flex  justify-content-md-between flex-column h-100 " >
                    <div className="px-3 py-3 bannerImg d-block d-md-none ">
                        <video autoPlay muted loop className='neural-video'>
                            <source src={Neurons} type='video/mp4' />
                        </video>
                        <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                    </div>
                    <div className='p-2'>
                        <Fade left big>
                            <h1 className="header-heading">
                                we provide
                </h1>
                        </Fade>
                        <Fade right big>
                            <h3 className="header-text">
                                opportunistic capital, timely investing decisions and differentiated solutions
                </h3>
                        </Fade>
                    </div>
                    <Fade left big>
                        <div className="px-3 py-3 bannerImg d-none d-md-block mb-3">
                            <video autoPlay muted loop className='neural-video'>
                                <source src={Neurons} type='video/mp4' />
                            </video>
                            <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                        </div>
                    </Fade>
                    <div className='h-50'>

                        <ul className="homeList pb-md-5 mt-5 mt-md-0">
                            <li className="homeList-item">
                        <Fade right big>
                                <Link to='/'>
                                    <span>
                                        About
                                             </span>
                                    <b>
                                        INTRIVA
                                    </b>
                                </Link>
                                </Fade>
                            </li>
                            <li className="homeList-item">
                        <Fade right big>
                                <Link to='/whoweare'>
                                    <span>
                                        WHO
                                             </span>
                                    <b>
                                        We Are
                                    </b>
                                </Link>
                                </Fade>
                            </li>
                            <li className="homeList-item">
                        <Fade right big>
                                <Link to='/'>
                                    <span>
                                        what
                                             </span>
                                    <b>
                                        we do
                                    </b>
                                </Link>
                                </Fade>
                            </li>
                            <li className="homeList-item">
                        <Fade right big>
                                <Link to='/'>

                                    <span>
                                        in the
                                             </span>
                                    <b>
                                        media
                                    </b>
                                </Link>
                                </Fade>
                            </li>
                            <li className="homeList-item">
                        <Fade right big>
                                <Link to='/'>
                                    <span>
                                        make
                                             </span>
                                    <b>
                                        contact
                                    </b>
                                </Link>
                                </Fade>
                            </li>
                        </ul>
                        <Fade bottom big>
                        <img src={ScreenSide} className='ScreenSide' alt='img' />
                    </Fade>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Header;