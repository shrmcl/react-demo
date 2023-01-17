import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <Header setCount={setCount} />
      <Counter count={count} />
    </div>
  );
}

export default App;
