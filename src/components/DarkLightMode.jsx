import React, { useContext } from "react";
import { MyContext } from "../Provider/Provider";
import Toggle from "react-toggle";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(MyContext);

  console.log(theme);
  return (
    <div>
      <label className="flex flex-col items-center gap-4">
        <span className="font-semibold">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>

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
