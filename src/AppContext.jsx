import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("mode") == "light" ? true : false;
  });

  const phoneNumber = "+919301024584"; // Replace this with your actual phone number

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      localStorage.setItem("mode", prevMode ? "dark" : "light");
      return !prevMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", !darkMode);
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{ darkMode, handleToggle, handleCallButtonClick }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
