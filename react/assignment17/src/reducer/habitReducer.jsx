export const initialState = [];

export function habitReducer(state, action) {
  switch (action.type) {
    case "ADD_HABIT":
      return [...state, action.payload];

    case "DELETE_HABIT":
      return state.filter(
        (habit) => habit.id !== action.payload
      );

    case "COMPLETE_HABIT":
      return state.map((habit) =>
        habit.id === action.payload
          ? { ...habit, completed: true }
          : habit
      );

    case "LOAD_HABITS":
      return action.payload;

    default:
      return state;
  }
}