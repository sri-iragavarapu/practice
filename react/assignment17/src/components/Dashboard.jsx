import {
  useRef,
  useEffect,
} from "react";

import HabitList from "./HabitList";
import Stats from "./Stats";

function Dashboard({
  habitInput,
  setHabitInput,
  addHabit,
  habits,
  deleteHabit,
  completeHabit,
  stats,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="dashboard">
      <h2>📋 Habit Tracker Dashboard</h2>
       <div className="habit-input">
      <input
        ref={inputRef}
        value={habitInput}
        onChange={(e) =>
          setHabitInput(
            e.target.value
          )
        }
      />

      <button
        onClick={addHabit}
      >
        Add Habit
      </button>
     </div>
      <HabitList
        habits={habits}
        deleteHabit={
          deleteHabit
        }
        completeHabit={
          completeHabit
        }
      />

      <Stats stats={stats} />
    </div>
  );
}

export default Dashboard;