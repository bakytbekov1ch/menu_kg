import React from "react";
import Home from "../components/Home/Home";

function HomePage({ block }) {
  return (
    <div>
      <Home search={block} />
    </div>
  );
}

export default HomePage;
