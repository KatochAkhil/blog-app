import React, { useState } from "react";
import ReactQuill from "react-quill";
import BannerTwo from "../Banner/BannerTwo";
import "react-quill/dist/quill.snow.css";
import "./newblog.css";
function NewBlog() {
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Click");
  };

  return (
    <section className="write_a_blog_section ">
      <div className="container">
        <BannerTwo
          title="Write your Blog"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet"
        />

        <div className="write_a_blog">
          <h2 className="text-center">Write a Blog</h2>
          <div className="row">
            <div className="col-md-7">
              <div className="write_Section common_spacing">
                <div className="title">
                  <input type="title" placeholder="Title.." />
                </div>
                <div className="description_text common_spacing">
                  <ReactQuill
                    className="editior"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="other_content common_spacing">
                <div className="menu">
                  <div className="item">
                    <h1>Publish</h1>
                    <span>
                      <b>Status: </b> Draft
                    </span>
                    <div className="buttons">
                      <button onClick={handleClick}>Publish</button>
                      <button className="button_second">Save as a draft</button>
                    </div>
                    <label className="file mt-4" htmlFor="file">
                      Upload Image
                      <input
                        className="mr-3"
                        type="file"
                        id="file"
                        name=""
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>
                  </div>
                  <div className="item mt-4">
                    <h1>Category</h1>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "art"}
                        name="cat"
                        value="art"
                        id="art"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "science"}
                        name="cat"
                        value="science"
                        id="science"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "technology"}
                        name="cat"
                        value="technology"
                        id="technology"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "cinema"}
                        name="cat"
                        value="cinema"
                        id="cinema"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "design"}
                        name="cat"
                        value="design"
                        id="design"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                      <input
                        type="radio"
                        checked={cat === "food"}
                        name="cat"
                        value="food"
                        id="food"
                        onChange={(e) => setCat(e.target.value)}
                      />
                      <label htmlFor="food">Food</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewBlog;
