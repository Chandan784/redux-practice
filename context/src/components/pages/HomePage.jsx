import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
function HomePage() {
  let { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        ...theme,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>this is home page</h1>
    </div>
  );
}

export default HomePage;
