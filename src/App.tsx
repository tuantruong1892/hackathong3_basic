import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
interface Task {
  id: number;
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [searchQuery, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Task[]>([]);

  const addTask = () => {
    if (newTask === "") {
      return;
    }

    const addToTask: Task = {
      id: Date.now(),
      title: newTask,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, addToTask]);
    setNewTask("");
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const countChars = (text: string) => {
    return 200 - text.length;
  };

  const handleSearch = () => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredTasks);
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          searchQuery={searchQuery}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <Main
          darkMode={darkMode}
          tasks={tasks}
          searchResults={searchResults}
          deleteTask={deleteTask}
          newTask={newTask}
          setNewTask={setNewTask}
          countChars={countChars}
          addTask={addTask}
        />
      </div>
    </>
  );
};

export default App;
