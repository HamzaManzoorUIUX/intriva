import React, { useState } from 'react';
import MyNavBar from '../../components/MyNavBar';
import { media } from "../Media/media";
import { CgScrollV } from "react-icons/cg";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import NavOpenerBtn from '../../components/NavOpenerBtn';
import Logo from '../../assets/img/logo.png'
import { FaFilePdf } from 'react-icons/fa'
function Artical(props) {
    const { id } = props.match.params
    const [menuOpener, setMenuOpener] = useState(false)
    // const [lastScrollTop, setlastScrollTop] = useState(0)
    // const [ticking, setticking] = useState(false)
    const data = media.find(obj => {
        if (obj.id === id) {
            return obj
        }
        else
            return null
    })
    // const onScroll = (e) => {
    //     var height = window.innerHeight
    //     // console.log(height);
    //     var st = window.pageYOffset  // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     if (st > lastScrollTop) {
    //         if (window.pageYOffset < height) {
    //             window.scrollTo(0, height);
    //             console.log('down');
    //             setticking(true)
    //         }
    //     } else {
    //         if (window.pageYOffset) {
    //             window.scrollTo(0, 0);
    //             console.log('up');
    //             setticking(false)
    //         }
    //     }
    //     setlastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling

    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', onScroll);

    //     return () => {
    //         window.removeEventListener('scroll', onScroll);
    //     };
    // });
    return (
        <div>

            {
                data === undefined ?
                    <h1 className='text-center pt-5'>
                        No Data against ID
            </h1> :
                    <div>
                        <div className="articalBack" style={{ background: `url(${data.img})` }}>
                            <div className={` position-absolute w-100 left-0 top-0 py-2 shadow }`}>
                                <div className="px-3 position-relative">
                                    <div className="myNavBar">
                                        <Link to='/' className='d-none d-md-block'>
                                            <img src={Logo} className='myNavBar-logo' alt="logo" />
                                        </Link>
                                        {/* {
                            props.title !== undefined ?
                                <div className="f-20 d-block d-md-none navBorder pr-3">
                                    {
                                        data.title
                                    }
                                </div> :
                                <></>
                        } */}
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
                                    {/* {
                        data.title !== undefined ?
                            <div className={`text-uppercase f-20 pl-3 d-none d-md-block text-md-right pb-3 pt-2 ${scrollCheck ? 'position-md-absolute top-50 ' : ' navBorder'} ${props.artical?'navArtical':'navTitle'}`}>
                                {
                                    data.title
                                }
                            </div>
                            :
                            <></>
                    } */}
                                </div>
                            </div>

                            <div className='content'>
                                <h1 className="text-center">
                                    {data.title}
                                </h1>
                                <div className='text-center f-25'>
                                    <span className="upperLine">
                                        {
                                            data.date
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="scrollDownBtn">
                                <CgScrollV />
                            </div>
                        </div>
                        <div className="articalContent">
                            <MyNavBar tab={1} title={data.title} artical={true} />
                            <div className="container">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        {data.date}
                                    </div>
                                    <div>
                                        <FaFilePdf />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-0 position-absolute w-100">
                                <Footer />
                            </div>
                        </div>
                    </div>}
        </div>
    );
}

export default Artical;