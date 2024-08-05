import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Main.scss"

const API = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";

function Main() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    url: "",
    name: "",
    farm: "",
    weight: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error("Error fetching item data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/${id}`, item);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form className="adminin__inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            name="url"
            value={item.url}
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={item.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="farm"
            value={item.farm}
            placeholder="Farm"
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            value={item.weight}
            placeholder="Weight"
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={item.price}
            placeholder="Price"
            onChange={handleChange}
          />
          <button type="submit">Готов</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
