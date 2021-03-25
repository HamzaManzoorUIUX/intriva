import React from 'react';
import Londan from '../../assets/img/Londan.png'
import Frankfurt from '../../assets/img/Frankfurt.png'
import Madrid from '../../assets/img/Madrid.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';

function SampleNextArrow(props) {
    const { className, style } = props;
    return (
        <BiArrowFromLeft className={className}
            style={style}
            onClick={() => NextFunction(props)} />
    );
}
const NextFunction = ({ onClick, setActiveCard, currentSlide }) => {
    console.log(currentSlide);
    if (currentSlide < 2) {
        onClick()
        setActiveCard(currentSlide === 2 ? 3 : currentSlide + 2)
    }

}
const prevFunction = ({ onClick, setActiveCard, currentSlide }) => {
    if (currentSlide > 0) {
        onClick()
        setActiveCard(currentSlide === 0 ? 1 : currentSlide - 2)
    }

}
function SamplePrevArrow(props) {
    const { className, style } = props;

    return (
        <BiArrowFromRight
            className={className}
            style={style}
            onClick={() => prevFunction(props)}
        />
    );
}

function CityCards({ activeCard, setActiveCard }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow activeCard={activeCard} setActiveCard={setActiveCard} />,
        prevArrow: <SamplePrevArrow activeCard={activeCard} setActiveCard={setActiveCard} />,
        responsive: [


            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };
    return (
        <>
            <div className="mb-minus">
                <Slider {...settings}>
                    <div className="px-0">
                        <div className={`cityCard ${activeCard === 1 ? 'active' : ''}`} onClick={() => setActiveCard(1)}>
                            <img src={Londan} alt="Londan" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h3>
                                        LONDON
                            </h3>
                                    <h4>
                                        UK
                            </h4>
                                    <div className='address'>
                                        <div>
                                            Intriva Capital Advisors LLP
                                            10 Golden Square
                                            London W1F 9JA
                                        </div>
                                        {/* <a href="https://goo.gl/maps/e2iyd1JCdWP7CQsp8" className='btn btn-light' rel="noreferrer" target='_blank'>
                                            Map
                                        </a> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0">
                        <div className={`cityCard ${activeCard === 2 ? 'active' : ''}`} onClick={() => setActiveCard(2)}>
                            <img src={Frankfurt} alt="Frankfurt" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h3 className='text-uppercase'>
                                        Frankfurt
                            </h3>
                                    <h4 className='text-uppercase'>
                                        GERMANY
                            </h4>
                                    <div className='address'>
                                        <div>
                                            Intriva Capital Advisors GmbH
                                            Goethestr. 16
                                            60313 Frankfurt
                                            (entrance Kleine Bockenheimer Str. 5)
</div>
                                        {/* <a href="https://goo.gl/maps/HDS1ZC9bn5HycL2f6" className='btn btn-light' rel="noreferrer" target='_blank'>
                                            Map
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-0">
                        <div className={`cityCard ${activeCard === 3 ? 'active' : ''}`} onClick={() => setActiveCard(3)}>
                            <img src={Madrid} alt="Madrid" className='w-100' />
                            <div className="content">
                                <div className="info">

                                    <h3 className='text-uppercase'>
                                        Madrid
                            </h3>
                                    <h4 className='text-uppercase'>
                                        SPAIN
                            </h4>
                                    <div className="address">

                                        <div>
                                            Calle Lagasca Nr. 84, 6 Izq.
                                            28001 Madrid
                            </div>
                                        {/* <a href="https://goo.gl/maps/XNC4Xzhub4Hzz51B9" className='btn btn-light' rel="noreferrer" target='_blank'>
                                            Map
</a> */}
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