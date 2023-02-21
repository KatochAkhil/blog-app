import React from "react";
import "./style.css";

function LatestBlog() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      author: "Lorem ipsum ",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      author: "Lorem ipsum ",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      author: "Lorem ipsum ",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      author: "Lorem ipsum ",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
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
          {posts.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                className="content_blogs"
                style={{ backgroundImage: `url(${item.img})` }}
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
