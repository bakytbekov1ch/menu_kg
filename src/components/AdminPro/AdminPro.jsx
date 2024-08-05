import React, { useEffect, useState } from "react";

import "./AdminPro.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";

function AdminPro() {
  const [item, setItem] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);

      setItem(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const removeHandle = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setItem(item.filter((el) => el.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  console.log(item);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="adminpro">
      <div className="container">
        <div className="adminpro__btn">
          {item.map((item, index) => (
            <div key={index} className="adminpro__content">
              <img src={item.url} alt="" />
              <div className="adminpro__block">
                <h1>{item.name}</h1>
                <h2>{item.farm}</h2>
                <div className="adminpro__price">
                  <h3>{item.weight}</h3>
                  <h4>{item.price} сом</h4>
                </div>
                <div className="adminpro__buttons">
                  <button
                    onClick={() => removeHandle(item.id)}
                    className="btn button"
                  >
                    Удалить
                  </button>
                  <button className="btn button2">Оңдоо</button>
                </div>
                <Link to="/basket">
                  <button className="box">Просмотрит</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPro;
