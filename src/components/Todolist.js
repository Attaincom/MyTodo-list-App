import React, { useState, useEffect } from "react";
import { FaSun, FaStar, FaCalendarAlt, FaUser, FaTasks, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import Greentree from "../assets/Greentree.jpeg";

function Todolist() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false, important: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
    setTasks(updatedTasks);
  };

  const toggleImportant = (index) => {
    const updatedTasks = tasks.map((t, i) => (i === index ? { ...t, important: !t.important } : t));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "important") return t.important;
    if (filter === "completed") return t.completed;
    if (filter === "uncompleted") return !t.completed;
    return true;
  });

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-64 w-[130px] bg-gray-100 p-4 shadow-md flex flex-col justify-between h-screen">
        <div>
          <h3 className="text-lg font-bold mb-4">Welcome Olatomide</h3>
          <ul className="space-y-5">
            <li className="flex items-center cursor-pointer hover:underline" onClick={() => setFilter("all")}>
              <FaSun className="mr-2 text-yellow-500" /> My Day
            </li>
            <li className="flex items-center cursor-pointer hover:underline" onClick={() => setFilter("important")}>
              <FaStar className="mr-2 text-blue-500" /> Important
            </li>
            <li className="flex items-center cursor-pointer hover:underline" onClick={() => setFilter("completed")}>
              <FaCalendarAlt className="mr-2 text-green-500 " /> Completed
            </li>
            <li className="flex items-center cursor-pointer hover:underline" onClick={() => setFilter("uncompleted")}>
              <FaUser className="mr-2 text-purple-500" /> Uncompleted
            </li>
            <li className="flex items-center cursor-pointer hover:underline" onClick={() => setFilter("tasks")}>
              <FaTasks className="mr-2 text-gray-700" /> Tasks
            </li>
          </ul>
        </div>
        <div className="mt-auto flex items-center cursor-pointer hover:underline">
          <Link to="/">
            <FaSignOutAlt className="mr-2 text-teal-500" /> Logout
          </Link>
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover min-h-screen md:bg-contain ${
          filter === "important" ? "bg-opacity-50" : ""
        }`}
        style={{
          backgroundImage: `url(${Greentree})`,
        }}
      >
        {filter === "all" && (
          <div className="absolute top-5 bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700">My Day</h2>
            <p className="text-lg text-gray-500">{formatDate(date)}</p>
          </div>
        )}

        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-7 text-white">Todo List</h1>

          <div className="flex w-full max-w-md mb-4 md:h-16">
            <input
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full md:w-[500px] px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
              Add
            </button>
          </div>

          <ul className="w-full max-w-md">
            {filteredTasks.map((t, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-4 border-b border-gray-300 ${
                  t.completed ? "bg-green-100" : "bg-white"
                }`}
              >
                <span
                  onClick={() => toggleTask(index)}
                  className={`h-6 w-6 rounded-full flex-shrink-0 cursor-pointer mr-4 border-2 flex items-center justify-center ${
                    t.completed ? "border-green-500 text-green-500" : "border-gray-300 text-transparent"
                  }`}
                >
                  {t.completed ? "✔" : ""}
                </span>
                <span
                  className={`flex-grow cursor-pointer ${t.completed ? "line-through text-gray-500" : ""}`}
                  onClick={() => toggleTask(index)}
                >
                  {t.text}
                </span>
                <FaStar
                  onClick={() => toggleImportant(index)}
                  className={`ml-4 cursor-pointer ${t.important ? "text-purple-500" : "text-gray-300"}`}
                />
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;