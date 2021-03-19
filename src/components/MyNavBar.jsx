import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import NavOpenerBtn from './NavOpenerBtn';
function MyNavBar(props) {
    const [menuOpener, setMenuOpener] = useState(false)
    const [scrollCheck, setScrollCheck] = useState(false)
    const [startScroll, setstartScroll] = useState(false)
    const onScroll = (e) => {
        // var height = props.tab !== undefined ? window.innerHeight : 10
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
        <>
            <div className={` ${props.tab !== undefined ? 'sticky-top' : 'fixed-top'} py-2 bg-transparent`}>
                <div className="px-3 position-relative">
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
                                    About INTRIVA
                                </Link>
                            </li>
                            <li>
                                <Link to='/whoweare'>
                                    Who we are
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
                                    For INTRIVA
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {
                        props.title !== undefined ?
                            <div className={`text-uppercase f-20 pl-3 d-none d-md-inline-block text-md-right pb-3 pt-2 font-timeNew ${scrollCheck ? 'position-md-absolute top-50 ' : ' navBorder'} ${props.artical?'navArtical':'navTitle'}`}>
                                {
                                    props.title
                                }
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>

        </>
    );
}

export default MyNavBar;