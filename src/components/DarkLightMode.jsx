import React, { useContext, useEffect } from "react";
import { MyContext } from "../Provider/Provider";
import Toggle from "react-toggle";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(MyContext);
  const mode = localStorage.getItem("mode");

  useEffect(() => {
    if (mode) setTheme(mode);
  }, []);

  console.log(theme);

  return (
    <div>
      <label className="flex flex-col items-center gap-4">
        <span className="font-semibold">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>

        <Toggle
          defaultChecked={mode === "light" ? true : false}
          icons={false}
          onChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
            localStorage.setItem("mode", theme);
          }}
        />
      </label>
    </div>
  );
};

export default DarkLightMode;
