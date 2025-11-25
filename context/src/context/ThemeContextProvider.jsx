import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
  const themeData = {
    dark_theme: {
      backgroundColor: "black",
      color: "white",
    },
    light_theme: {
      backgroundColor: "red",
      color: "black",
    },
  };

  const [theme, setTheme] = useState(themeData.light_theme);
  let [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        themeData,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
