import React from 'react';
import Londan from '../../assets/img/Londan.png'
import Frankfurt from '../../assets/img/Frankfurt.png'
import Madrid from '../../assets/img/Madrid.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BiArrowFromLeft className={className}
        style={style}
        onClick={onClick}/>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BiArrowFromRight
        className={className}
        style={style}
        onClick={onClick}
      />
    );
  }

function CityCards(props) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <>
            <div className="container-fluid d-none d-md-block">
                <div className="row">
                    <div className="col-md-4 px-0">
                        <div className="cityCard">
                            <img src={Londan} alt="Londan" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1>
                                        LONDON
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-0">
                        <div className="cityCard">
                            <img src={Frankfurt} alt="Frankfurt" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                        Frankfurt
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-0">
                        <div className="cityCard">
                            <img src={Madrid} alt="Madrid" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                        Madrid
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-block d-md-none">
                <Slider {...settings}>
                    <div className="px-0">
                        <div className="cityCard">
                            <img src={Londan} alt="Londan" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1>
                                        LONDON
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0">
                        <div className="cityCard">
                            <img src={Frankfurt} alt="Frankfurt" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                        Frankfurt
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0">
                        <div className="cityCard">
                            <img src={Madrid} alt="Madrid" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h1 className='text-uppercase'>
                                        Madrid
                            </h1>
                                    <div>
                                        1234 Atlantic Street
                                        7TH Floor
                                        Stamford, yc 038362
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default CityCards;