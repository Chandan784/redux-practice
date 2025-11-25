import { createContext } from "react";

const ThemeContext = createContext();
export default ThemeContext;

const student = {
  name: "chandan",
  id: 10,
};

let finalData = { ...student, roll: 101 };

console.log(finalData);
