import "../App.css";
import React from "react";

interface Task {
  id: number;
  title: string;
  date: string;
}

interface MainProps {
  darkMode: boolean;
  tasks: Task[];
  searchResults: Task[];
  deleteTask: (taskId: number) => void;
  newTask: string;
  setNewTask: (value: string) => void;
  countChars: (text: string) => number;
  addTask: () => void;
}

const Main: React.FC<MainProps> = ({
  darkMode,
  tasks,
  searchResults,
  deleteTask,
  newTask,
  setNewTask,
  countChars,
  addTask,
}) => {
  return (
    <div className={`card-container ${darkMode ? "dark-mode" : ""}`}>
      {searchResults.length > 0
        ? searchResults.map((task) => (
            <div className="add-task" key={task.id}>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                value={task.title}
                readOnly={true}
              ></textarea>
              <div className="footer">
                <div className="dates">{task.date}</div>
                <button className="btn-del" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        : tasks.map((task) => (
            <div className="add-task" key={task.id}>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                value={task.title}
                readOnly={true}
              ></textarea>
              <div className="footer">
                <div className="dates">{task.date}</div>
                <button className="btn-del" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      <div className="add-task">
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="type review here"
          maxLength={200}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></textarea>
        <div className="footer">
          <div className="dates"> {countChars(newTask)} ký tự</div>
          <button className="btn-add" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
