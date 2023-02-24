import React from "react";
import LatestBlog from "../../components/LateshBlog";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainProfile() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.data);

  return (
    <section className=" main_profile_page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="profile_text">
              <div className="ml-3">
                <h1>{profile?.user?.name}</h1>
                <h2>{profile?.user?.profession}</h2>
                <h3>{profile?.user?.interest}</h3>
                <div className="upload_button_parent_blog">
                  <button
                    className="upload_button"
                    onClick={() => {
                      navigate("/write");
                    }}
                  >
                    Write a Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile_image">
              <img
                src={
                  `${process.env.REACT_APP_IMAGE_URL}/${profile?.user?.image}` ||
                  "./profile.jpeg"
                }
                alt="profile"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="author_blogs_section">
        <LatestBlog />
      </div>
    </section>
  );
}

export default MainProfile;
