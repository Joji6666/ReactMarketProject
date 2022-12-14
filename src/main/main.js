import { Link, Route, Routes } from "react-router-dom";
import Products from "../products";
import "./main.css";
import { useState } from "react";
import DetailPage from "../detail/detail";
import products from "../product-data";

function MainPage(props) {
  return (
    <div>
      <div>
        <div className="main-bg"></div>
        <div>
          <Link to={"/detail"}>
            {props.products.map((a, i) => {
              return <Products product={products[i]}></Products>;
            })}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
