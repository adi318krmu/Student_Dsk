// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Assistant from "./pages/Assistant";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/assistant" element={<Assistant />} />
//       </Routes>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/notes";
import Links from "./pages/Links";
import Deadlines from "./pages/Deadlines";
import Assistant from "./pages/Assistant";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/links" element={<Links />} />
        <Route path="/deadlines" element={<Deadlines />} />
        <Route path="/assistant" element={<Assistant />} />
      </Routes>
    </Router>
  );
}
