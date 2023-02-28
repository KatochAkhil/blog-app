import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/action";
import "./style.css";

function LatestBlog() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <div className="latest_blogs">
      <div className="container">
        <h2>Trending Blogs</h2>
        <div
          className="latest_blog_content"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-photo/high-angle-hand-with-flower-petals_23-2149513228.jpg?size=626&ext=jpg)`,
          }}
        >
          <div className="middle_text">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          </div>
        </div>
        <div className="row">
          {data?.blogs?.rows?.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                className="content_blogs"
                style={{
                  backgroundImage: `url(${
                    `${process.env.REACT_APP_IMAGE_URL}/${item.image}` ||
                    "https://img.freepik.com/free-photo/high-angle-hand-with-flower-petals_23-2149513228.jpg?size=626&ext=jpg"
                  })`,
                }}
              >
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
