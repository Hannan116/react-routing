import React, { useState } from "react";
import { blogsData } from "../data";
import { Link } from "react-router-dom";
import style from "./blog.module.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const truncateSring = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + ".....";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section className={style.section}>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article className={style.article} key={id}>
              <h3>{title}</h3>
              <div className={style.paraBtn}>
                <p>{truncateSring(body, 50)}</p>
                <Link
                  to={title}
                  state={{ id, title, body }}
                  className={style.blogsBtn}
                >
                  Learn More
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
