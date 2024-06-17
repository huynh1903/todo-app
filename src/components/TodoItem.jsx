import iconCross from "../assets/images/icon-cross.svg";
import iconCheck from "../assets/images/icon-check.svg";
import { useContext } from "react";
import TodoContext from "../store/TodoContext";

const TodoList = ({ title, isCompleted, isDark }) => {
  const { removeItem, completedItem } = useContext(TodoContext);
  const handleRemoveItem = (title) => {
    removeItem(title);
  };
  const handleCompletedItem = (title) => {
    completedItem(title);
  };
  return (
    <div className="flex justify-between items-center p-4 border-b-[1px] border-slate-500">
      <div className="w-1/12 hover:cursor-pointer ease-in duration-150" onClick={() => handleCompletedItem(title)}>
        {isCompleted ? (
          <div className="bg-blue-600 w-6 h-6 rounded-full flex justify-center items-center ">
            <img src={iconCheck} alt="icon check" />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full border-[1px] border-slate-500"></div>
        )}
      </div>
      <div className={`${isDark ? 'text-slate-400' : 'text-slate-700'} ${isCompleted ? 'line-through' : ''} w-9/12`}>
        <p>{title}</p>
      </div>
      <div className="w-1/12 hover:cursor-pointer ease-in duration-150">
        <img
          src={iconCross}
          alt="icon cross"
          onClick={() => handleRemoveItem(title)}
        />
      </div>
    </div>
  );
};

export default TodoList;
