import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { blogsData } from "../data";
import style from "./blog.module.css";
const Blog = () => {
  // const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { title, body } = location.state;

  // const [bodyData, setBodyData] = useState("");
  //   useEffect(() => {
  //     const blogData = blogsData.filter((blog) => blog.title == title);
  //     console.log(blogData);
  //     setBodyData(blogData[0].body);

  //   }, []);

  return (
    <div>
      <h1 style={{ color: "teal" }}>{title} Page</h1>
      <div
        style={{ textAlign: "justify", fontSize: "1.2rem", padding: "1.5rem" }}
      >
        <p>{body.slice(0, 200)} </p>
        <p>{body.slice(201, 500)} </p>
        <p>{body.slice(501, 1000)} </p>
      </div>
      <button
        onClick={() => {
          navigate("/blogs", { replace: true });
        }}
        className={style.btn}
      >
        Back to all Blogs
      </button>
    </div>
  );
};

export default Blog;
