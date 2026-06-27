import HabitItem from "./HabitItem";

function HabitList({
  habits,
  deleteHabit,
  completeHabit,
}) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          deleteHabit={deleteHabit}
          completeHabit={
            completeHabit
          }
        />
      ))}
    </ul>
  );
}

export default HabitList;