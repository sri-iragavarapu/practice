import { useState, useReducer, useEffect, useMemo, useCallback } from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

import UserContext from "./context/UserContext";

import {
  habitReducer,
  initialState,
} from "./reducer/habitReducer";

function App() {
  // Login State
  const [user, setUser] = useState(null);

  // Navigation State
  const [page, setPage] = useState("dashboard");

  // Habit Input
  const [habitInput, setHabitInput] = useState("");

  // Reducer State
  const [habits, dispatch] = useReducer(
    habitReducer,
    initialState
  );

  // Load habits from localStorage
  useEffect(() => {
    const savedHabits = JSON.parse(
      localStorage.getItem("habits")
    );

    if (savedHabits) {
      dispatch({
        type: "LOAD_HABITS",
        payload: savedHabits,
      });
    }
  }, []);

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  // Login Function
  const handleLogin = (username) => {
    if (!username.trim()) return;

    setUser({
      username,
    });
  };

  // Logout Function
 const logout = () => {
  localStorage.removeItem("habits");

  dispatch({
    type: "LOAD_HABITS",
    payload: [],
  });

  setUser(null);
};

  // Add Habit
  const addHabit = useCallback(() => {
    if (!habitInput.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitInput,
      completed: false,
    };

    dispatch({
      type: "ADD_HABIT",
      payload: newHabit,
    });

    setHabitInput("");
  }, [habitInput]);

  // Delete Habit
  const deleteHabit = useCallback((id) => {
    dispatch({
      type: "DELETE_HABIT",
      payload: id,
    });
  }, []);

  // Complete Habit
  const completeHabit = useCallback((id) => {
    dispatch({
      type: "COMPLETE_HABIT",
      payload: id,
    });
  }, []);

  // Statistics
  const stats = useMemo(() => {
    const total = habits.length;

    const completed = habits.filter(
      (habit) => habit.completed
    ).length;

    const pending = total - completed;

    return {
      total,
      completed,
      pending,
    };
  }, [habits]);

  // Show Login First
  if (!user) {
    return (
      <Login onLogin={handleLogin} />
    );
  }

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <Navbar
          setPage={setPage}
          logout={logout}
        />

        {page === "dashboard" && (
          <Dashboard
            habitInput={habitInput}
            setHabitInput={setHabitInput}
            addHabit={addHabit}
            habits={habits}
            deleteHabit={deleteHabit}
            completeHabit={completeHabit}
            stats={stats}
          />
        )}

        {page === "profile" && (
          <Profile
            completedCount={
              stats.completed
            }
          />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;