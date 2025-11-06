import { useState } from "react";
import { Link } from "react-router-dom";

export default function Deadlines() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!task || !date) return;
    setTasks([...tasks, { task, date }]);
    setTask("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link to="/dashboard" className="text-yellow-400 underline">
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-4">⏰ Deadline Tracker</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task name..."
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700"
        />
        <button
          onClick={addTask}
          className="bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded-lg flex justify-between">
            <span>{t.task}</span>
            <span className="text-gray-400">{t.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
