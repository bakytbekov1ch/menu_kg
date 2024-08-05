import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Basket.scss";
import { Link, useParams } from "react-router-dom";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";

function Basket() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`${API}/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__content">
          <div className="basket__title">
            <h1>{product.name}</h1>
            <h2>{product.farm}</h2>
            <h3>{product.weight}</h3>
            <h3>{product.price} сом</h3>
            <Link to="/">
              <button>Назад</button>
            </Link>
          </div>
          <div className="basket__images">
            <img src={product.url} alt="" />
            <img src={product.url} alt="" />
            <img src={product.url} alt="" />
            <img src={product.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
