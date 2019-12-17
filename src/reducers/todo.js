const initialState = {
  todos: [
    {
      id: 1,
      name: "Render static ui",
      isComplete: true
    },
    {
      id: 2,
      name: "create initial state",
      isComplete: false
    }
  ],
  currentTodo: "temp"
};

export const CURRENT_UPDATE = "CURRENT_UPDATE";
export const TODO_ADD = "TODO_ADD";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};
