import React from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="banner">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="banner_text">
          <h1>A Blog About </h1>
          <p>Sports, News &</p>
          <p>all you need </p>
        </div>
      </div>
      <div className="slider_section">
        <Slider {...settings}>
          <div className="item">
            <div className="inner_slider_item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="slider_image"
                className="w-100"
              />
              <div className="text_slider">
                <h2>Blog Title</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner_slider_item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="slider_image"
                className="w-100"
              />
              <div className="text_slider">
                <h2>Blog Title</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner_slider_item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="slider_image"
                className="w-100"
              />
              <div className="text_slider">
                <h2>Blog Title</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner_slider_item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="slider_image"
                className="w-100"
              />
              <div className="text_slider">
                <h2>Blog Title</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner_slider_item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="slider_image"
                className="w-100"
              />
              <div className="text_slider">
                <h2>Blog Title</h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
