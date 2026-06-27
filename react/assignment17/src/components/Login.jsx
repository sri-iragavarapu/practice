import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  return (
    <div className="login-container">
      <h2>📝 Habit Tracker</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button
        onClick={() => onLogin(name)}
      >
        Login
      </button>
    </div>
  );
}

export default Login;