import { useContext, useEffect, useState } from "react";
import iconSun from "./assets/images/icon-sun.svg";
import iconMoon from "./assets/images/icon-moon.svg";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import TodoContext from "./store/TodoContext";

function App() {
  const { items, clearCompleted } = useContext(TodoContext);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  let totalActiveItem = items.reduce((acc, todo) => {
    if (!todo.completed) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <div
      className={`${
        isDarkTheme ? "bg-slate-950" : "bg-slate-100"
      } w-full h-full min-h-screen flex justify-center relative`}
    >
      <div className="w-11/12 md:w-7/12 lg:w-5/12 z-30">
        <div className="mt-4 w-full h-14 flex justify-between items-center">
          <h1 className="text-white font-semibold text-xl uppercase">Todo</h1>
          <div className="hover:cursor-pointer ease-in duration-150" onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme && <img src={iconSun} alt="icon sun" />}
            {!isDarkTheme && <img src={iconMoon} alt="icon moon" />}
          </div>
        </div>
        <div className="w-full mt-4">
          <Input isDark={isDarkTheme} />
        </div>
        <div className="w-full mt-6">
          <div
            className={`${
              isDarkTheme
                ? "bg-slate-900 shadow-slate-800"
                : "bg-slate-300 shadow-slate-400"
            } rounded-md shadow`}
          >
            {items.map((item, index) => (
              <TodoItem
                key={index}
                title={item.title}
                isCompleted={item.completed}
                isDark={isDarkTheme}
              />
            ))}

            <div className="flex justify-between p-4 items-center">
              <div
                className={`${
                  isDarkTheme ? "text-slate-400" : "text-slate-700"
                } text-sm`}
              >
                <span>{totalActiveItem} items left</span>
              </div>
              <div className="hidden lg:flex w-5/12 text-sm justify-between">
                <div
                  className={`${
                    isDarkTheme ? "text-slate-400" : "text-slate-700"
                  }`}
                >
                  <span>All</span>
                </div>
                <div
                  className={`${
                    isDarkTheme ? "text-slate-400" : "text-slate-700"
                  }`}
                >
                  <span>Active</span>
                </div>
                <div
                  className={`${
                    isDarkTheme ? "text-slate-400" : "text-slate-700"
                  }`}
                >
                  <span>Completed</span>
                </div>
              </div>
              <div
                className={`${
                  isDarkTheme ? "text-slate-400" : "text-slate-700"
                } text-sm hover:text-blue-600 hover:cursor-pointer ease-in duration-150`}
                onClick={clearCompleted}
              >
                <span>Clear Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isDarkTheme
              ? "bg-slate-900 shadow-slate-800"
              : "bg-slate-300 shadow-slate-400"
          } w-full my-4 rounded-md p-4 flex justify-around lg:hidden`}
        >
          <div
            className={`${isDarkTheme ? "text-slate-400" : "text-slate-700"}`}
          >
            <span>All</span>
          </div>
          <div
            className={`${isDarkTheme ? "text-slate-400" : "text-slate-700"}`}
          >
            <span>Active</span>
          </div>
          <div
            className={`${isDarkTheme ? "text-slate-400" : "text-slate-700"} hover:text-blue-600 hover:cursor-pointer ease-in duration-150`}
          >
            <span>Completed</span>
          </div>
        </div>

        <div
          className={`${
            isDarkTheme
              ? "bg-slate-900 shadow-slate-800"
              : "bg-slate-300 shadow-slate-400"
          } lg:hidden w-full my-4 rounded-md p-4 flex justify-center`}
        >
          <span
            className={`${isDarkTheme ? "text-slate-400" : "text-slate-700"}`}
          >
            Drag and drop to reornder list
          </span>
        </div>
      </div>
      <div className={`${isDarkTheme ? 'bg-mobile-dark lg:bg-desktop-dark' : 'bg-mobile-light lg:bg-desktop-light'} bg-cover w-full h-52 absolute top-0 left-0 z-10`}></div>
    </div>
  );
}

export default App;
