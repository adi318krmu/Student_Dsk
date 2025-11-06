import { useState } from "react";
import { Link } from "react-router-dom";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link to="/dashboard" className="text-blue-400 underline">
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-4">📝 Notes Keeper</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="grid gap-3">
        {notes.map((note, i) => (
          <div key={i} className="p-4 bg-gray-800 rounded-lg shadow">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}
