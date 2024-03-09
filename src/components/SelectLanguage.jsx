import React, { useContext } from "react";
import { MyContext } from "../Provider/Provider";

const SelectLanguage = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);
  console.log(selectedLanguage);
  return (
    <div>
      <select
        className="border rounded-lg"
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="Hindi">Hindi</option>
        <option value="Marathi">Marathi</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Tamil">Tamil</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
