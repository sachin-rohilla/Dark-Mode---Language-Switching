import React, { useContext } from "react";
import { MyContext } from "../Provider/Provider";
import Toggle from "react-toggle";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(MyContext);

  console.log(theme);
  return (
    <div>
      {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        click me
      </button> */}
      <label>
        <Toggle
          defaultChecked={false}
          icons={false}
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      </label>
    </div>
  );
};

export default DarkLightMode;
