import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import NavOpenerBtn from './NavOpenerBtn';

function MyNavBar(props) {
    const [menuOpener, setMenuOpener] = useState(false)
    const [scrollCheck, setScrollCheck] = useState(false)
    const [startScroll, setstartScroll] = useState(false)
    const onScroll = (e) => {
        if (window.pageYOffset > 10)
            setScrollCheck(true)
        else if (window.pageYOffset < 10) {
            setScrollCheck(false)
        }
    }
    const ScrollTop = () => {
        if (startScroll === false) {
            window.scrollTo(0, 0)
            setstartScroll(true)
        }
    }
    useEffect(() => {
        ScrollTop()
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        props.number!==0?
        <>
            <div className={` ${props.tab !== undefined && props.position!==undefined?'fixed-top':'fixed-top'} py-2 bg-transparent`}>
                <div className="px-3 position-relative container">
                    <div className="myNavBar">
                     <div>
                     <Link to='/' className={`d-md-block ${scrollCheck ? 'd-none' : ''}`}>
                            <img src={Logo} className='myNavBar-logo' alt="logo" />
                        </Link>
                        {
                            props.title !== undefined ?
                                <div className="f-20 d-block font-timeNew d-md-none navBorder pr-3">
                                    {
                                        props.title
                                    }
                                </div> :
                                <>&nbsp;</>
                        }
                     </div>
                        <NavOpenerBtn active={menuOpener} setActive={setMenuOpener} />
                        <ul className={`myNavBar-menu ${menuOpener ? 'active' : ''}`}>
                            <li>
                                <Link to='/aboutintriva/:true'>
                                    About Intriva
                                </Link>
                            </li>
                            <li>
                                <Link to='/whoweare'>
                                Who We Are
                                </Link>
                            </li>
                            <li>
                                <Link to='/whatwedo'>
                                    What We Do
                                </Link>
                            </li>
                            <li>
                                <Link to='/media'>
                                    In the Media
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact-us'>
                                    Make Contact
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    For Investors
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {
                        props.title !== undefined ?
                            <div className={`text-uppercase f-20 pl-3 d-none d-md-flex align-items-baseline text-md-right font-timeNew navBorder smoothAnimation ${scrollCheck||(props.number!==1&&props.number!==undefined) ? 'position-md-absolute top-50 ' : ''} ${props.artical?'navArtical':'navTitle'}`}>
                            <img src={Logo} className='myNavBar-logo hidden' alt="logo" />
                              
                                {
                                    props.title
                                }
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>
        </>:<>
        </>
    );
}

export default MyNavBar;