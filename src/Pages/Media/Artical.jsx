import React, { useState } from 'react';
import MyNavBar from '../../components/MyNavBar';
import { media } from "../Media/media";
import { CgScrollV } from "react-icons/cg";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import NavOpenerBtn from '../../components/NavOpenerBtn';
import Logo from '../../assets/img/logo.png'
import { FaFilePdf } from 'react-icons/fa'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Fade from 'react-reveal/Fade';
import Pdf from "react-to-pdf";
const ref = React.createRef();
function Artical(props) {
    const { id } = props.match.params
    const [menuOpener, setMenuOpener] = useState(false)
    const [lastScrollTop, setlastScrollTop] = useState(true)
    // const [ticking, setticking] = useState(false)
    const data = media.find(obj => {
        if (obj.id === id) {
            return obj
        }
        else
            return null
    })
  
    const goDown = () => {
        if (window.pageYOffset >= 0) {
            setlastScrollTop(false)
        }
    }
    const goTop = () => {
        if (window.pageYOffset <= 0) {
            setlastScrollTop(true)
        }
    }

    return (
        <ReactScrollWheelHandler
            upHandler={(e) => goTop()}
            downHandler={(e) => goDown()}
        >
            <div id=''>

                {
                    data === undefined ?
                        <h1 className='text-center pt-5'>
                            No Data against ID
            </h1> :
                        <div ref={ref}>
                            <Fade top when={lastScrollTop} big>
                                <div className={`articalBack position-absolute ${lastScrollTop ? 'z-6000' : 'z-0'}`} style={{ background: `url(${data.img})` }}>
                                    <div className={` position-absolute w-100 left-0 top-0 py-2 shadow }`}>
                                        <div className="px-3 position-relative">
                                            <div className="myNavBar">
                                                <Link to='/' className='d-none d-md-block'>
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
                            </Fade>
                            <div className="articalContent">
                                <MyNavBar tab={1} artical={true} />
                                <div className="container pt-5">
                                    <div className="d-flex pb-3 align-items-center justify-content-between">
                                        <div>
                                            {data.date}
                                        </div>
                                        <Pdf targetRef={ref} filename={`${data.title}.pdf`}>
                                            {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary text-light'>
                                                <FaFilePdf />
                                            </button>}
                                        </Pdf>

                                    </div>
                                    <h5>
                                        {data.title}
                                    </h5>
                                    <form>
                                    <div className='mt-3' dangerouslySetInnerHTML={{_html:'First &middot; Second'}}/>
                                    </form>
                                </div>
                                <div className=" w-100">
                                    <Footer />
                                </div>
                            </div>
                        </div>}
            </div>
        </ReactScrollWheelHandler>
    );
}

export default Artical;