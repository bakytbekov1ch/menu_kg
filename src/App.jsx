import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import AdminPage from "./pages/AdminPage";
import Main from "./components/Main/Main";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
