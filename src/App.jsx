import { useContext, useState } from "react";

import "./App.css";
import DarkLightMode from "./components/DarkLightMode";
import { MyContext } from "./Provider/Provider";
import SelectLanguage from "./components/SelectLanguage";

function App() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div
      className={`${theme} w-screen h-screen flex justify-center items-center`}
    >
      <div className="w-1/2 border shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between">
          <DarkLightMode />
          <SelectLanguage />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          placeat eveniet qui expedita quod neque culpa quo, facilis provident
          quisquam vitae dolore reiciendis quae dolorem amet quasi cupiditate
          sit! Eaque, esse! Rem, sit autem? Totam corporis quaerat earum
          accusantium aut asperiores cum voluptate facilis, culpa sit. Expedita
          laudantium atque labore aut cumque nam tempora eaque rem, voluptatum
          itaque. Exercitationem beatae ullam illum culpa odit praesentium
          molestias facere. Vitae perferendis consectetur veritatis iure.
          Excepturi, repudiandae?
        </p>
      </div>
    </div>
  );
}

export default App;
