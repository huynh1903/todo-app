import { useContext, useState } from "react";
import TodoContext from "../store/TodoContext";

const Input = ({ isDark }) => {
  const todoCtx = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const inputValueChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      const item = { title: inputValue, completed: false };
      todoCtx.addItem(item);
      setInputValue("");
    }
  };
  return (
    <div className="relative">
      <div className="absolute top-4 left-4 w-6 h-6 rounded-full border-[1px] border-slate-500"></div>
      <input
        onKeyDown={handleAddTodo}
        onChange={inputValueChange}
        value={inputValue}
        className={`${isDark ? 'text-slate-400 bg-slate-900' : 'text-slate-700 bg-slate-300'} w-full py-4 px-12 rounded-md focus-visible:outline-none`}
        placeholder="Create a new todo"
      />
    </div>
  );
};

export default Input;
