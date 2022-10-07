import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./carousel.scss";

function SamplePrevArrow(props) {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick} aria-hidden>
      <ArrowBackIos className="arrowStyle" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden>
      <ArrowForwardIos className="arrowStyle" />
    </div>
  );
}

function Carousel({item}) {
  const images = item.flickr_images;
  const listItems = images.map((el,index)  =>
  
  <img  key={index} src={el} alt="rocket"/>
)
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    
    
  };

  return (
    <div>
      <Slider {...settings }>
      {listItems}      
      </Slider>
    </div>
  );
}



export default React.memo(Carousel);
