import React, { useEffect, useState } from 'react';
import Frankfurt from "../../assets/videos/Frankfurt Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Londan from "../../assets/videos/London Skyline stock video footage in HD and 4K - Adobe Stock.MP4";
import Neurons from "../../assets/videos/Stock Video of Neurons in brain. Loop. 3D animation of neural network. at Adobe Stock - Adobe Stock.MP4";
import Madrid from "../../assets/videos/9,570 BEST Madrid STOCK VIDEOS & FOOTAGE - Adobe Stock.MP4";
import Logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import TermsConditionModel from '../../components/TermsConditionModel';

function Header(props) {
    const [modalShow, setModalShow] = useState(false)

    const [active, setActive] = useState(parseInt(Math.random() * 3))
    const videos = (e) => {
        let a = parseInt(Math.random() * 3)
        setActive(a === active ? parseInt(Math.random() * 3) : a)
    }
    const pauseAllVideos = () => {
        const allvideos = document.querySelectorAll('video.headerHome-video')
        // const currentVideo = document.querySelector('video.active')
        for (let i = 0; i < allvideos.length; i++) {
            if (allvideos[i].classList.contains('active')) {
                allvideos[i].play()
            }
            else {
                allvideos[i].pause()
            }
        }

    }
    useEffect(() => {

        pauseAllVideos()

    }, [active])
    return (
        <div className='headerHome pt-4 z-50'>

            <video onEnded={videos} muted className={`headerHome-video pointer-event-none  ${active === 0 ? 'd-flex active' : 'd-none'}`}>
                <source src={Londan} type='video/mp4' />
            </video>
            <video onEnded={videos} muted className={`headerHome-video pointer-event-none  ${active === 1 ? 'd-flex active' : 'd-none'}`}>
                <source src={Frankfurt} type='video/mp4' />
            </video>
            <video onEnded={videos} muted className={`headerHome-video pointer-event-none  ${active === 2 ? 'd-flex active' : 'd-none'}`}>
                <source src={Madrid} type='video/mp4' />
            </video>
            <div className="z-10 position-relative d-flex flex-column h-100 " >
                <div className="px-3 py-3 bannerImg d-block d-md-none ">
                    <video autoPlay muted loop className='d-none d-md-block neural-video pointer-event-none'>
                        <source src={Neurons} type='video/mp4' />
                    </video>
                    <img src={Logo} alt="logo" className='logoHome z-10 position-relative' />
                </div>
                <div className='p-2'>
                    <Fade left big>
                        <h1 className="header-heading font-Roboto text-uppercase">
                            we provide
                </h1>
                    </Fade>
                    <Fade right big>
                        <h3 className="header-text font-Roboto text-uppercase" >
                        Timely investment decisions, flexible solutions, and strategic support.
                </h3>
                    </Fade>
                </div>
                <div className="px-3 py-2  align-items-center headerBlueBar bannerImg d-none d-md-flex mb-3">
                    <video autoPlay muted loop className='neural-video d-none d-md-block pointer-event-none'>
                        <source src={Neurons} type='video/mp4' />
                    </video>
                    <img src={Logo} alt="logo" className='headerblueImg z-10 position-relative' />
                </div>
                <div className='h-75 d-flex align-items-md-center'>

                    <ul className="homeList mb-5 mb-md-0">
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
            <ul className='bottomfixedList px-3'>
                <li>
                    &nbsp;
    </li>
                <li>
                    Intriva.com © 2021
    </li>
                <li>
                    <div className="d-flex">
                        <div className='text-white curser makeAnker' onClick={() => setModalShow(true)}>
                            DISCLAIMER
                    </div>
                        <a href='https://icx.efrontcloud.com/IntrivaJSY' target='_blank' rel="noreferrer" className='ml-4 d-none d-md-block text-white curser text-uppercase' >
                            For investors
                    </a>
                    </div>
                </li>
            </ul>
            <TermsConditionModel show={modalShow} onHide={() => setModalShow(false)} />

        </div>
    );
}

export default Header;