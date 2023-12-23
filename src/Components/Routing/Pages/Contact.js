import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Labore accusam et et et voluptua at no elitr ipsum at, elitr invidunt
        sadipscing vero sadipscing. Lorem lorem sit ipsum dolor rebum amet,
        dolores amet sit ut dolore dolore, sea tempor labore dolor et et sed
        erat aliquyam tempor. Ipsum consetetur sed et nonumy no dolore dolor.
        Duo gubergren clita.
      </p>
      <p>
        Labore accusam et et et voluptua at no elitr ipsum at, elitr invidunt
        sadipscing vero sadipscing. Lorem lorem sit ipsum dolor rebum amet,
        dolores amet sit ut dolore dolore, sea tempor labore dolor et et sed
        erat aliquyam tempor. Ipsum consetetur sed et nonumy no dolore dolor.
        Duo gubergren clita.
      </p>
      <button onClick={()=>{
        navigate("/")
      }}>Go to Home Page</button>
    </div>
  );
};

export default Contact;
