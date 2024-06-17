import { createContext, useReducer } from "react";

const initialTodo = [
  { title: "Completed online JavaScript course", completed: true },
  { title: "Job around the park 3x", completed: false },
  { title: "10 minutes meditation", completed: false },
  { title: "Read for 1 hour", completed: false },
  { title: "Pick up groceries", completed: false },
  { title: "Completed Todo App on Frontend Menter", completed: false },
];

const TodoContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (title) => {},
  completedItem: (title) => {},
  clearCompleted: () => {},
});

function todoRuducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // console.log(action.item);
    const updateItems = [...state.items];
    updateItems.push(action.item);
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingTodoItemIndex = state.items.findIndex(
      (item) => item.title === action.title
    );

    const updateItems = [...state.items];
    updateItems.splice(existingTodoItemIndex, 1);
    console.log(updateItems);
    return { ...state, items: updateItems };
  }

  if (action.type === "COMPLETED_ITEM") {
    const existingTodoItemIndex = state.items.findIndex(
      (item) => item.title === action.title
    );
    const updateItems = [...state.items];
    // console.log(updateItems[existingTodoItemIndex].completed);
    updateItems[existingTodoItemIndex].completed = !updateItems[existingTodoItemIndex].completed;
    // console.log(!updateItems[existingTodoItemIndex].completed);
    return { ...state, items: updateItems };
  }

  if (action.type === 'CLEAR_COMPLETED') {
    let updateItems = [...state.items]
    updateItems = updateItems.filter(item => !item.completed)
    // console.log(updateItems);
    return { ...state, items: updateItems };
  }

  return state;
}

export function TodoContextProvider({ children }) {
  const [todo, dispatchTodoAction] = useReducer(todoRuducer, {
    items: initialTodo,
  });

  function addItem(item) {
    dispatchTodoAction({ type: "ADD_ITEM", item });
  }

  function removeItem(title) {
    dispatchTodoAction({ type: "REMOVE_ITEM", title });
  }
  
  function completedItem(title) {
    dispatchTodoAction({ type: "COMPLETED_ITEM", title });
  }

  function clearCompleted() {
    dispatchTodoAction({ type: "CLEAR_COMPLETED" })
  }
  
  const todoContext = {
    items: todo.items,
    addItem,
    removeItem,
    completedItem,
    clearCompleted
  };

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
