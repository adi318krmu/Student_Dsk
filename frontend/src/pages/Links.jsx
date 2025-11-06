import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinksPage() {
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");

  const addLink = () => {
    if (!url.startsWith("http")) return;
    setLinks([...links, url]);
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Link to="/dashboard" className="text-green-400 underline">
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-4">🔗 Useful Links</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a link..."
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          onClick={addLink}
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <a
              href={l}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
