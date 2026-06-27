function HabitItem({
  habit,
  deleteHabit,
  completeHabit,
}) {
  return (
    <li>
      
      {habit.completed
        ? " ✅"
        : "📌"}
        {habit.name}

      {
  !habit.completed && (
    <button
      onClick={() =>
        completeHabit(habit.id)
      }
    >
      Complete
    </button>
  )
}
      <button
        onClick={() =>
          deleteHabit(habit.id)
        }
      >
        Delete
      </button>
    </li>
  );
}

export default HabitItem;