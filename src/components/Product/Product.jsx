import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";

function Product() {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await axios.get(API);
      console.log(res);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="product">
      <div className="container">
        <div className="product__content">
          {value.map((item, index) => (
            <div key={index} className="product__block">
              <img src={item.url} alt="" />
              <div className="product__title">
                <h2>{item.name}</h2>
                <h3>{item.farm}</h3>
                <div className="product__mx">
                  <h4>{item.weight}</h4>
                  <h4>{item.price} сом</h4>
                </div>
                <button onClick={() => navigate(`/basket/${item.id}`)}>
                  Просмотрет
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
