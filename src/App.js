import { useState } from "react";
import "./styles.css";

const CounterText = (props) => <p>現在のカウント数:{props.count}</p>;

const INITIAL_count = 0;

const Counter = () => {
  const [count, setCount] = useState(INITIAL_count);
  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_count);

  return (
    <>
      <CounterText count={count} />
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
    </>
  );
};

export default function App() {
  return <Counter />;
}
