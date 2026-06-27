import { useState, useEffect } from "react";

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated");
    }
  }, [count]);

  return (
    <div className="card">
      <h2>React Lifecycle Demo</h2>

      <h3>Count: {count}</h3>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default LifecycleDemo;