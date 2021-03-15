import React from 'react';
import Footer from '../../components/Footer';
import MyNavBar from '../../components/MyNavBar';
import ScrollToTopOnMount from '../../components/ScrollToTop';

function WhatWeDo(props) {
    return (
        <div>
            <ScrollToTopOnMount/>
            <MyNavBar title={'Who We Are'} />
            <div className="homeBack">
            What we do

            </div>
            <Footer/>
        </div>
    );
}

export default WhatWeDo;