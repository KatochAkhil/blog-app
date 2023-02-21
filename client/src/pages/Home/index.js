import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../common/Banner/Banner";
import LatestBlog from "../../components/LateshBlog";
import PopularTopics from "../../components/populartopics";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <PopularTopics />
      <LatestBlog />
    </div>
  );
};

export default Home;
