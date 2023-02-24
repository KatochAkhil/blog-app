import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Upload({ setStep, setFile }) {
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  const uploadImageHandler = () => {
    if (!image) {
      setError("Please Select a Profile Picture");
    } else {
      setFile(image);
      setStep();
      setError("");
    }
  };
  return (
    <>
      <div className="upload_section">
        {image ? (
          <label className="label_upload">
            <button
              className="close"
              onClick={() => {
                setImage(null);
              }}
            >
              <Icon icon="charm:circle-cross" width="40" />
            </button>
            <img
              src={URL.createObjectURL(image)}
              alt="profileimage"
              className="w-100"
            />
          </label>
        ) : (
          <label htmlFor="file" className="label_upload">
            <div className="middle_item text-center">
              <Icon icon="material-symbols:add" width="70" />
              <p>Upload your Profile Picture</p>
            </div>
            <input
              id="file"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                setError("");
                setImage(e.target.files[0]);
              }}
            />
          </label>
        )}
      </div>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="upload_button_parent">
        <button
          onClick={uploadImageHandler}
          type="button"
          className="upload_button"
        >
          Upload
        </button>
      </div>
    </>
  );
}

export default Upload;
