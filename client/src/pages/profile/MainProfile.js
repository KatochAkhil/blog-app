import React from "react";
import LatestBlog from "../../components/LateshBlog";
import { useSelector } from "react-redux";

function MainProfile() {
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
                  <button className="upload_button">Write a Blog</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile_image">
              <img
                src={profile?.user?.image || "./profile.jpeg"}
                alt="profile"
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
