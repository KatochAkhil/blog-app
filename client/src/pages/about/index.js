import React from "react";
import BannerTwo from "../../common/Banner/BannerTwo";
import "./about.css";
function Aboout() {
  return (
    <section className="about_page">
      <div className="container">
        <BannerTwo
          title={"Technology Driven Podcast Studio"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor"
        />
        <div className="image_down_banner">
          <img src="./banner-down.jpeg" className="w-100" alt="banner,blog" />
        </div>
        <div className="info_down_banner">
          <div className="down_main_text text-center">
            <h2>2023</h2>
            <h3>Started Just now</h3>
            <p>
              The future belongs to those who believe in the beauty of their
              dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboout;
