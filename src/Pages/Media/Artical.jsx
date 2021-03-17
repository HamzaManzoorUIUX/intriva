import React, { useEffect, useState } from 'react';
import MyNavBar from '../../components/MyNavBar';
import { media } from "../Media/media";
import { CgScrollV } from "react-icons/cg";
import Footer from '../../components/Footer';
function Artical(props) {
    const { id } = props.match.params
    const [lastScrollTop,setlastScrollTop]=useState(0) 
    const data = media.find(obj => {
        if (obj.id === id) {
            return obj
        }
        else
            return null
    })
    const onScroll = (e) => {
        var height = window.innerHeight
        // console.log(e);
        // if (window.pageYOffset > height)
            
        // else if (window.pageYOffset < height) {
        //     setScrollCheck(false)
        // }
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    if (window.pageYOffset < height) 
    {
        window.scrollTo(0, 100);
        console.log('down');
    }
   } else {
    if (window.pageYOffset > height)
    console.log('up');
    //   window.scrollTo(0, 0);
   }
   setlastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <div>
            {
                data === undefined ?
                    <h1 className='text-center pt-5'>
                        No Data against ID
            </h1> :
                    <div>
                        <MyNavBar />
                        <div className="articalBack" style={{ background: `url(${data.img})` }}>
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
                        <div className="min-h-100vh position-relative">
                            <h1>
                                Hamzamanza
                            </h1>
                            <div className="bottom-0 position-absolute w-100">
                                <Footer />
                            </div>
                        </div>
                    </div>}
        </div>
    );
}

export default Artical;