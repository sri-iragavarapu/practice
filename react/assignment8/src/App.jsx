import React, { createContext } from "react";
import Navbar from "./Components/Navbar";

// Create Context
export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="John">
      <Navbar />
    </UserContext.Provider>
  );
}

export default App;