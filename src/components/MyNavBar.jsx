import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import NavOpenerBtn from './NavOpenerBtn';

function MyNavBar(props) {
    const [menuOpener, setMenuOpener] = useState(null)
    const [scrollCheck, setScrollCheck] = useState(false)
    // const [startScroll, setstartScroll] = useState(false)

    const onScroll = (e) => {
        if (window.pageYOffset > 10)
            setScrollCheck(true)
        else if (window.pageYOffset < 10) {
            setScrollCheck(false)
        }
    }
const menuDefault=()=>{
    if(props.number===0)
    setMenuOpener(null)
}
 
    useEffect(() => {
        menuDefault()
      
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        props.number!==0?
        <>
            <div className={` ${props.tab !== undefined && props.position!==undefined?'fixed-top':'fixed-top'} py-2 bg-transparent`}>
                <div className=" position-relative container">
                    <div className="myNavBar position-relative z-20">
                     <div className='d-flex align-items-center flex-wrap'>
                     <Link to='/' className={`d-md-block w-100 ${scrollCheck ? 'd-none' : ''}`}>
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
                        <ul className={`myNavBar-menu ${menuOpener===null ?'':menuOpener? 'active' :'nonActive'}`}>
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
                                <a href='https://icx.efrontcloud.com/IntrivaJSY' rel="noreferrer" target='_blank'>
                                    For Investors
                                </a>
                            </li>
                        </ul>

                    </div>
                    {
                        props.title !== undefined ?
                            <div className={`text-uppercase f-20 z-10 pl-3 d-none d-md-flex align-items-end text-md-right font-timeNew navBorder smoothAnimation ${scrollCheck||(props.number!==1&&props.number!==undefined) ? 'position-md-absolute top-50 myNavBar-logo' : ''} ${props.artical?'navArtical':'navTitle'}`}>
                            <div className='hidden' style={{width:'260px',height:'30px'}}/>
                              
                                <span>
                                {
                                    props.title
                                }
                                </span>
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