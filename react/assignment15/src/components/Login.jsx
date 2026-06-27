function Login({ name, setName, handleLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Study Planner</h1>
        <h3>Login</h3>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;