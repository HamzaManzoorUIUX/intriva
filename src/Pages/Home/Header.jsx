import React from 'react';
import Frankfurt from "../../assets/videos/Frankfurt Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Londan from "../../assets/videos/London Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Neurons from "../../assets/videos/Stock Video of Neurons in brain. Loop. 3D animation of neural network. at Adobe Stock - Adobe Stock.MP4";
import ScreenSide from "../../assets/img/Screen Shot 2021-03-10 at 02.34.28.png";
import PreLoader from '../../components/PreLoader';
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
function Header(props) {
    const vid = parseInt(Math.random() * 2 + 1)
    return (
        <>
            <PreLoader />
            <div className='headerHome pt-4 z-50'>
                {
                    vid == 1 ?
                        <video autoPlay muted loop className='headerHome-video'>
                            <source src={Londan} type='video/mp4' />
                        </video> :
                        <video autoPlay muted loop className='headerHome-video'>
                            <source src={Frankfurt} type='video/mp4' />
                        </video>
                }

                <div className="z-10 position-relative d-flex justify-content-around justify-content-md-between flex-column h-100">
                    <div className="px-3 py-2 bannerImg d-block d-md-none ">
                        <video autoPlay muted loop className='neural-video'>
                            <source src={Neurons} type='video/mp4' />
                        </video>
                        <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                    </div>
                    <div className='p-2'>
                        <h1 className="header-heading">
                            we provide
                </h1>
                        <h3 className="header-text">
                            opportunistic capital, timely investing decisions and differentiated solutions
                </h3>
                    </div>
                    <div className='h-50 mb-md-5'>
                        <div className="px-3 py-2 bannerImg d-none d-md-block mb-3">
                            <video autoPlay muted loop className='neural-video'>
                                <source src={Neurons} type='video/mp4' />
                            </video>
                            <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                        </div>
                        <ul className="homeList pb-5">
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
                        <img src={ScreenSide} className='ScreenSide' />
                    </div>


                </div>
            </div>
        </>
    );
}

export default Header;