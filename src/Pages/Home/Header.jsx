import React, { useRef } from 'react';
import Frankfurt from "../../assets/videos/Frankfurt Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Londan from "../../assets/videos/London Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Neurons from "../../assets/videos/Stock Video of Neurons in brain. Loop. 3D animation of neural network. at Adobe Stock - Adobe Stock.MP4";
import Madrid from "../../assets/videos/9,570 BEST Madrid STOCK VIDEOS & FOOTAGE - Adobe Stock.MP4";
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Header(props) {
    const refVideo = useRef()
    const videos = (e) => {
        const vid = parseInt(Math.random() * 3 + 1)
        // const {current}=refVideo
        if (vid === 1) {
            return <video autoPlay ref={refVideo} muted className='headerHome-video'>
                <source src={Londan} type='video/mp4' />
            </video>
        }
        else if (vid === 2) {
            return <video autoPlay ref={refVideo} muted className='headerHome-video'>
                <source src={Frankfurt} type='video/mp4' />
            </video>


        }
        else {
            return <video autoPlay ref={refVideo} muted className='headerHome-video'>
                <source src={Madrid} type='video/mp4' />
            </video>
        }
    }

    return (
        <div className='headerHome pt-4 z-50'>
            {
                videos()
            }
            <div className="z-10 position-relative d-flex flex-column h-100 " >
                <div className="px-3 py-3 bannerImg d-block d-md-none ">
                    <video autoPlay muted loop className='neural-video'>
                        <source src={Neurons} type='video/mp4' />
                    </video>
                    <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                </div>
                <div className='p-2'>
                    <Fade left big>
                        <h1 className="header-heading font-Roboto">
                            we provide
                </h1>
                    </Fade>
                    <Fade right big>
                        <h3 className="header-text font-Roboto" >
                            opportunistic capital, timely investing decisions and differentiated solutions
                </h3>
                    </Fade>
                </div>
                <div className="px-3 py-2  align-items-center headerBlueBar bannerImg d-none d-md-flex mb-3">
                    <video autoPlay muted loop className='neural-video'>
                        <source src={Neurons} type='video/mp4' />
                    </video>
                    <img src={Logo} alt="logo" className='headerblueImg z-10 position-relative' />
                </div>
                <div className='h-75 d-flex align-items-md-center'>

                    <ul className="homeList pt-md-5 mt-5 mt-md-0">
                        <li className="homeList-item">
                            <Fade right big>
                                <div onClick={() => props.handlePageChange(1)} className='homeList-a'>
                                    <span>
                                        About
                                             </span>
                                    <b>
                                        INTRIVA
                                    </b>
                                </div>
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
                                <Link to='/whatwedo'>
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
                                <Link to='/media'>

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
                                <Link to='/contact-us'>
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

                </div>
    

            </div>

        </div>
    );
}

export default Header;