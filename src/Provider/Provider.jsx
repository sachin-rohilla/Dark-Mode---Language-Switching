import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
