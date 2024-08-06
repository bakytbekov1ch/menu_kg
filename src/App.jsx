import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import AdminPage from "./pages/AdminPage";
import Main from "./components/Main/Main";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
// import Ubloading from "./components/Ubload/Ubloading";

function App() {
  const [search, setSearch] = useState("");

  function handleClick(e) {
    const response = e.target.value.toUpperCase();

    setSearch(response);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout click={handleClick} />}>
          <Route index element={<HomePage block={search} />} />
          <Route path="/basket/:id" element={<BasketPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/main/:id" element={<Main />} />
          {/* <Route path="/ubloading" element={<Ubloading />} /> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
