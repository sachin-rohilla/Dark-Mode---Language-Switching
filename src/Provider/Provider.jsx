import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  return (
    <MyContext.Provider
      value={{ theme, setTheme, selectedLanguage, setSelectedLanguage }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
