import React from "react";

function BannerTwo({ title, desc }) {
  return (
    <div className="banner_text">
      <div className="row">
        <div className="col-md-6">
          <div className="left_hand_text">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right_hand_text">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
