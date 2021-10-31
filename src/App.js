import { useState } from "react";
import "./styles.css";

const valuse = [
  { id: 1, item: "赤" },
  { id: 2, item: "青" },
  { id: 3, item: "黒" }
];

const RadioBtnItems = ({ onChange, checked }) =>
  valuse.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="radio"
          value={value.item}
          onChange={onChange}
          checked={checked === value.item}
        />
        {value.item}
      </label>
    );
  });

const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState(valuse[0]["item"]);
  const handleChange = (e) => setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{checkedValue}</b>
      </p>
      <RadioBtnItems onChange={handleChange} checked={checkedValue} />
    </div>
  );
};

export default function App() {
  return <InputRadio />;
}
