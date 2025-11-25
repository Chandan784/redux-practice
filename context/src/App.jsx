import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Navbar />
        <HomePage />
        <ContactPage />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
