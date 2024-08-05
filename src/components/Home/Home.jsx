import React from "react";

import Product from "../Product/Product";

function Home({ search }) {
  return (
    <div>
      <Product block={search} />
    </div>
  );
}

export default Home;
