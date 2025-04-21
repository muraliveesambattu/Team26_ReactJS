import { useState } from "react";
import "./App.css";
import NewSample, { Sample } from "./Components/Sample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Hello From APP</h2>
      <Sample />
      <NewSample />
    </>
  );
}

export default App;
