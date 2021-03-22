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
                                <div className="scrollDownBtn" onClick={()=>window.scrollTo(0,window.innerHeight)}>
                                    <CgScrollV />
                                </div>
                            </div>
                            <div className="articalContent">
                                <MyNavBar tab={1} artical={true} />
                                <div className="container pt-5">
                                    <div className="d-flex pb-3 align-items-center justify-content-between">
                                        <div>
                                            {data.date}
                                        </div>
                                            <a href={data.pdf} className='btn btn-primary text-light'>
                                                <FaFilePdf />
                                            </a>
                                    </div>
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