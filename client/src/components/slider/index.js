import React from "react";

function Slider({
  dots,
  infinite,
  slidesToShow,
  slidesToScroll,
  autoplay,
  arrows,
  slides,
}) {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    arrows: arrows,
  };

  return (
    <div className="slider_section">
      <Slider {...settings}>
        {slides?.map((item) => (
          <div className="item">
            <div className="inner_slider_item">
              <img src={item.image} alt="slider_image" className="w-100" />
              <div className="text_slider">
                <h2>{item.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider;
