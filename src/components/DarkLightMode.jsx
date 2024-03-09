import React, { useContext } from "react";
import { MyContext } from "../Provider/Provider";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(MyContext);

  console.log(theme);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        click me
      </button>
    </div>
  );
};

export default DarkLightMode;
