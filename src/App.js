import { useState } from "react";
import "./styles.css";

const InputSelectBox = () => {
  const selectBoxArray = [
    { id: 1, item: "HTML" },
    { id: 2, item: "CSS" },
    { id: 3, item: "JavaScript" }
  ];

  const valse = selectBoxArray.map((vals) => (
    <option value={vals.item} key={vals.id}>
      {vals.item}
    </option>
  ));

  const [selectedValue, setInputSelectedValue] = useState(valse[0]["item"]);
  const handleChange = (e) => setInputSelectedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        {valse}
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
