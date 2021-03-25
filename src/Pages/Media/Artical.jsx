import React from 'react';
import MyNavBar from '../../components/MyNavBar';
import { media } from "../Media/media";
import { CgScrollV } from "react-icons/cg";
import Footer from '../../components/Footer';
import { FaFilePdf } from 'react-icons/fa'
// import Pdf from "react-to-pdf";
// import ReactPageScroller from "react-page-scroller";
import parse from "html-react-parser"; 
function Artical(props) {
    const { id } = props.match.params
    // const [currentPage, setcurrentPage] = useState(0)
    // const handlePageChange = number => {
        // setcurrentPage(number)
    // };

    // const handleBeforePageChange = number => {
    //     console.log(number);
    //     console.log(currentPage);
    // };
    const data = media.find(obj => {
        if (obj.id === id) {
            return obj
        }
        else
            return null
    })
// const smoothScroll=()=>{
//     for(var i=0;i<window.innerHeight;i++){
//         window.scrollTo(0,i)
//     }
// }
    return (
        <div>

                {
                    data === undefined ?
                        <h1 className='text-center pt-5'>
                            No Data against ID
            </h1> :
                        <div >
                        
                            <div className={`articalBack`} style={{ background: data.img !== undefined ? `url('${data.img}')` : 'white' }}>
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
                                <a href='#hamza' className="scrollDownBtn" >
                                    <CgScrollV />
                                </a>
                            </div>
                            <div className="articalContent">
                                <MyNavBar tab={1} artical={true} />
                                <div className="container pt-5" id='hamza'>
                                    {/* <div className="d-flex pb-3 align-items-center justify-content-between"> */}
                                        <div className='w-50 d-inline-block'>
                                            {data.date}
                                        </div>
                                            <div className='pr-5 text-right  py-3 w-50 d-inline-block sticky-top'>
                                            <a href={data.pdf} className='btn btn-primary text-light mt-1 mr-5'>
                                                <FaFilePdf />
                                            </a>
                                            </div>
                                    {/* </div> */}
                                    <div className='pt-3 pb-5'>
                                        {
                                            parse(data.detail)
                                        }
                                    </div>
                                </div>
                                <div className=" w-100">
                                    <Footer />
                                </div>
                            </div>
                        </div>}
            </div>
    );
}

export default Artical;