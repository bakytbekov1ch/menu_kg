import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/basket/:id" element={<BasketPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* <h1>Hello My World</h1> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
