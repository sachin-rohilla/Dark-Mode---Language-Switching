import { useContext, useState } from "react";

import "./App.css";
import DarkLightMode from "./components/DarkLightMode";
import { MyContext } from "./Provider/Provider";

function App() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={`${theme} w-screen h-screen`}>
      <div className="  flex justify-center  items-center">
        <div className=" border shadow-md rounded-lg">
          <DarkLightMode />
        </div>
      </div>
    </div>
  );
}

export default App;
