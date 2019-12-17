import reducer from "./todo";

describe("Todo Reducer", () => {
  test("returns a state object ", () => {
    const result = reducer(undefined, { type: "ANYTHING" });
    expect(result).toBeDefined();
  });

  test("add a todo", () => {
    const startState = {
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
      ]
    };
    const expectedState = {
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
        },
        {
          id: 3,
          name: "new state",
          isComplete: false
        }
      ]
    };
    const action = {
      type: "TODO_ADD",
      payload: {
        id: 3,
        name: "new state",
        isComplete: false
      }
    };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
