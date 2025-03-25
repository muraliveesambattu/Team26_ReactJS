import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RenderPropsDemo from "./Components/RenderPropsDemo";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import HandleCounter from "./Components/HandleCounter";
import ClickCounterDemo from "./HOCDemo/ClickCounterDemo";
import HoverCounterDemo from "./HOCDemo/HoverCounterDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RenderPropsDemo/> */}
      {/* <ClickCounter />
      <hr />
      <HoverCounter /> */}
{/* 
      <HandleCounter
        render={(count,handleIncrement,handleDecrement,handleReset) => {
          return <ClickCounter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset}/>
        }}
      />
       <HandleCounter
        render={(count,handleIncrement,handleDecrement,handleReset) => {
          return <HoverCounter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset}/>
        }}
      /> */}
      
      <ClickCounterDemo/>
      <hr />
      <HoverCounterDemo/>
    </>
  );
}

export default App;
