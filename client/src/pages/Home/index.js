import React from "react";
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
