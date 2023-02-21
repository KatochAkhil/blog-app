import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../common/Menu";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  //   const postId = location.pathname.split("/")[2];

  const handleDelete = async () => {
    console.log("delete");
  };

  //   const getText = (html) => {
  //     const doc = new DOMParser().parseFromString(html, "text/html");
  //     return doc.body.textContent;
  //   };

  return (
    <div className="single">
      <div className="content">
        <img src="./logo.png" alt="" />
        <div className="user">
          <img src="./logo.png" alt="" />
          <div className="info">
            <span>Author Name</span>
            <p>Posted {new Date()}</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="./logo.png" alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>{" "}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
