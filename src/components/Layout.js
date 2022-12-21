import React from "react";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
