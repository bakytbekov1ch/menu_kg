import React from "react";

import { IoSearch } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";

import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__xl">
            <Link to="/">
              <h1>Chunkurchak.kg</h1>
            </Link>
            <Link to="/admin">
              <RiAdminFill className="header__menu2" />
            </Link>
          </div>

          <div className="header__btn">
            <div className="header__block">
              <input type="text" placeholder="Search" />
              <IoSearch className="header__search" />
            </div>
            <Link to="/admin">
              <RiAdminFill className="header__menu" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
