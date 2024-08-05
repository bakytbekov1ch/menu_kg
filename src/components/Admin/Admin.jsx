import React from "react";

import "./Admin.scss";
import AdminInput from "../AdminInput/AdminInput";
import AdminPro from "../AdminPro/AdminPro";

function Admin() {
  return (
    <div className="admin">
      <AdminInput />
      <AdminPro />
    </div>
  );
}

export default Admin;
