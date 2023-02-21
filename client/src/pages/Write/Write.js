import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NewBlog from "../../common/NewBlog";

const Write = () => {
  const [value, setValue] = useState();
  const [title, setTitle] = useState();
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState();

  const upload = async () => {
    console.log("upload");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Click");
  };

  return (
    <>
      <NewBlog />
    </>
  );
};

export default Write;
