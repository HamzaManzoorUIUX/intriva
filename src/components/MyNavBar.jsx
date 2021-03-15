import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import NavOpenerBtn from './NavOpenerBtn';
function MyNavBar(props) {
    const [menuOpener, setMenuOpener] = useState(false)
    const [scrollCheck, setScrollCheck] = useState(false)
    const onScroll=(e)=>{
        var height=props.tab!==undefined?window.innerHeight:10
        if(window.pageYOffset>height)
        setScrollCheck(true)
        else if(window.pageYOffset<height){
            setScrollCheck(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <>
            <div className='sticky-top py-2 bg-white shadow'>
                <div className="px-3 position-relative">
                    <div className="myNavBar">
                        <Link to='/'>
                            <img src={Logo} className='myNavBar-logo' alt="logo" />
                        </Link>
                        <NavOpenerBtn active={menuOpener} setActive={setMenuOpener} />
                        <ul className={`myNavBar-menu ${menuOpener ? 'active' : ''}`}>
                            <li>
                                <Link to='/'>
                                    About INTRIVA
                                </Link>
                            </li>
                            <li>
                                <Link to='/whoweare'>
                                    Who we are
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    What We Do
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    In the Media
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
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
                    <div className={`text-uppercase f-20 col-md-4 pl-3 text-md-right pb-3 pt-2 ${scrollCheck?'position-absolute top-50':' navBorder'}`}>
                            {
                            props.title
                            }
                  </div>
            
                </div>
            </div>

        </>
    );
}

export default MyNavBar;