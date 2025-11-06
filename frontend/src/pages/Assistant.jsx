// import { useState } from "react";

// export default function Assistant() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! I'm your AI Assistant 👋" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: "user", text: input }]);
//     setInput("");
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "This is Gemini's response 💬" },
//       ]);
//     }, 800);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-900 text-white">
//       <header className="bg-gray-800 p-4 text-center text-2xl font-bold shadow-md">
//         🤖 AI Assistant
//       </header>

//       <main className="flex-1 overflow-y-auto p-4 space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-xs md:max-w-md p-3 rounded-2xl ${
//                 msg.sender === "user"
//                   ? "bg-blue-600 text-white rounded-br-none"
//                   : "bg-gray-700 text-gray-100 rounded-bl-none"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </main>

//       <footer className="p-4 bg-gray-800 flex items-center space-x-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 p-2 rounded-lg bg-gray-700 text-white outline-none"
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Assistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "AI: I'm here to help you, student! 🚀", sender: "ai" },
      ]);
    }, 500);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col">
      <Link to="/dashboard" className="text-purple-400 underline mb-4">
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-4">🤖 AI Assistant</h1>

      <div className="flex-1 overflow-y-auto bg-gray-800 p-4 rounded-lg mb-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              m.sender === "user" ? "bg-blue-600 self-end" : "bg-gray-700"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
