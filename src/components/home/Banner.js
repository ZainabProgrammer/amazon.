import React from "react";
import { img1, img2, img3, img4, img5, img6 } from "../../assets/index";
import Slider from "react-slick";

const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "inline-block",
          background: "transparent",
          position: "absolute",
          right: "0",
          top: "50%",
          margin: "0 auto",
          height: "8rem",
          width: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "inline-block",

          background: "transparent",
          position: "absolute",
          left: 0,
          top: "50%",
          zIndex: 10,
          margin: "0 auto",

          height: "8rem",
          width: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings} className="z-[20] -mt-2 relative">
        <div>
          <img src={img1} alt="banner" />
        </div>
        <div>
          <img src={img2} alt="banner" />
        </div>
        <div>
          <img src={img3} alt="banner" />
        </div>
        <div>
          <img src={img4} alt="banner" />
        </div>
        <div>
          <img src={img5} alt="no" />
        </div>
        <div>
          <img src={img6} alt="banner" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
