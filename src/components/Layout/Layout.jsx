import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout({ click }) {
  return (
    <div>
      <Header block={click} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
