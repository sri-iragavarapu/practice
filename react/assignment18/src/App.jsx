import { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <h1>Component Lifecycle</h1>

      <button
        onClick={() => setShow(!show)}
      >
        {show
          ? "Remove Component"
          : "Show Component"}
      </button>

      {show && <LifecycleDemo />}
    </div>
  );
}

export default App;