import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

import { UserContext } from "./context/UserContext";

function App() {

  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleLogin = () => {

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    setIsLoggedIn(true);
  };

  const goToProfile = () => {
    setPage("profile");
  };

  const goToDashboard = () => {
    setPage("dashboard");
  };

  return (

    <UserContext.Provider value={{ user: name }}>

      {
        !isLoggedIn
          ? (
            <Login
              name={name}
              setName={setName}
              handleLogin={handleLogin}
            />
          )
          : page === "dashboard"
            ? (
              <Dashboard
                goToProfile={goToProfile}
              />
            )
            : (
              <Profile
                goToDashboard={goToDashboard}
              />
            )
      }

    </UserContext.Provider>

  );
}

export default App;