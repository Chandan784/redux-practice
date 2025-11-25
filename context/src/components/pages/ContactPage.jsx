import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
function ContactPage() {
  let { theme } = useContext(ThemeContext);

  return <div style={{ ...theme }}>this is contact page</div>;
}

export default ContactPage;
