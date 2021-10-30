import { useState } from "react";
import "./styles.css";

const numbers = [3, 6, 9, 12];

const ListItems = () => {
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);

  return <ul>{items}</ul>;
};

export default function App() {
  return <ListItems />;
}
