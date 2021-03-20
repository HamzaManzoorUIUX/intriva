import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import Card from './Card';
import { media } from "./media";
function Media(props) {
    return (
        <div>
            <MyNavBar title='In the Media'/>
            <div className="position-relative pt-5">
                <div className="container-fluid">
                    <div className="row">
                        {
                            media.map((obj,i)=>{
                                return <Card data={obj} key={i}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Media;