import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import StickyFooter from '../../components/StickyFooter';
import Card from './Card';
import { media } from "./media";
function Media(props) {
    return (
        <div>
            <MyNavBar title='In the Media'/>
            <div className="position-relative pt-5">
                <div className="container pt-5 mt-md-5">
                    <div className="row">
                        {
                            media.map((obj,i)=>{
                                return <Card data={obj} key={i}/>
                            })
                        }
                    </div>
                </div>
          <StickyFooter/>
            </div>
            <Footer/>
        </div>
    );
}

export default Media;