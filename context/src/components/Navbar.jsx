import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function Navbar() {
  let navbarStyle = {
    height: "80px",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontSize: "24px",
  };

  let { isDarkMode, setIsDarkMode, setTheme, themeData } =
    useContext(ThemeContext);
  console.log("isdarkmode ", isDarkMode);

  function handelToggle() {
    if (isDarkMode) {
      console.log("if part");

      setTheme(themeData.light_theme);
      setIsDarkMode(false);
    } else {
      console.log("else part");

      setTheme(themeData.dark_theme);
      setIsDarkMode(true);
    }
  }

  return (
    <div style={navbarStyle}>
      <div className="left">theme chnager</div>
      <div className="right">
        <button onClick={handelToggle}>change theme</button>
      </div>
    </div>
  );
}

export default Navbar;
