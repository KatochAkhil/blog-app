import React from "react";
import BannerTwo from "../../common/Banner/BannerTwo";
import LatestBlog from "../../components/LateshBlog";
import PopularTopics from "../../components/populartopics";

function Blogs() {
  return (
    <section className="blog_page">
      <div className="container">
        <BannerTwo
          title="All Blogs"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor"
        />
        <div className="image_down_banner">
          <img src="./banner-down.jpeg" className="w-100" alt="banner,blog" />
        </div>
        <PopularTopics />
        <LatestBlog />
      </div>
    </section>
  );
}

export default Blogs;
