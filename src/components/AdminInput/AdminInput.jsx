import React, { useState } from "react";
import axios from "axios";
import "./AdminInput.scss";

function AdminInput() {
  const api = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";
  const [post, setPost] = useState({
    url: "",
    name: "",
    farm: "",
    weight: "",
    price: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(api, post)
      .then((res) => {
        console.log(res.data);
        // Clear input fields after successful submission
        setPost({
          url: "",
          name: "",
          farm: "",
          weight: "",
          price: "",
        });
      })
      .catch((error) => {
        console.error("There was an error posting the data!", error);
      });
  };

  const handlePost = (e) => {
    const newData = { ...post };
    newData[e.target.id] = e.target.value;
    setPost(newData);
    console.log(newData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost((prevPost) => ({
      ...prevPost,
      url: file ? URL.createObjectURL(file) : "",
    }));
  };

  return (
    <div className="adminin">
      <div className="container">
        <div className="adminin__inputs">
          <input
            onChange={handleFileChange}
            className="btn"
            type="file"
            placeholder="image"
          />
          <input
            onChange={handlePost}
            id="name"
            value={post.name}
            type="text"
            placeholder="name"
          />
          <input
            onChange={handlePost}
            id="farm"
            value={post.farm}
            type="text"
            placeholder="farm"
          />
          <input
            onChange={handlePost}
            id="weight"
            value={post.weight}
            type="text"
            placeholder="weight"
          />
          <input
            onChange={handlePost}
            id="price"
            value={post.price}
            type="text"
            placeholder="price"
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AdminInput;
