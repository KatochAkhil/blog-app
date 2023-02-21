import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popular.css";

function PopularTopics() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="mostpopular_topics text-center">
      <div className="container">
        <h2>Most Popular Topic</h2>
        <Slider {...settings}>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>News</p>
            </div>
          </div>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>Sports</p>
            </div>
          </div>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>Cooking</p>
            </div>
          </div>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>Technology</p>
            </div>
          </div>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>Block chain</p>
            </div>
          </div>
          <div className="slider_item">
            <div className="main_content">
              <img
                src="https://plus.unsplash.com/premium_photo-1674940863690-4b4577686c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="main-content"
              />
              <p>Others</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PopularTopics;
