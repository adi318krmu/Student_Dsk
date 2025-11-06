// import { Link } from "react-router-dom";

// const features = [
//   { title: "Notes Keeper", color: "bg-blue-600" },
//   { title: "Useful Links", color: "bg-green-600" },
//   { title: "Deadline Tracker", color: "bg-yellow-600" },
//   { title: "AI Assistant", color: "bg-purple-600", link: "/assistant" },
// ];

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <h1 className="text-4xl font-bold text-center mb-8">🎓 Student Desk Dashboard</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
//         {features.map((f, i) => (
//           <Link
//             to={f.link || "#"}
//             key={i}
//             className={`p-8 rounded-2xl shadow-lg ${f.color} hover:scale-105 transition-transform`}
//           >
//             <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
//             <p className="text-gray-100">Access your {f.title.toLowerCase()} easily here.</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

const features = [
  { title: "Notes Keeper", color: "bg-blue-600", link: "/notes" },
  { title: "Useful Links", color: "bg-green-600", link: "/links" },
  { title: "Deadline Tracker", color: "bg-yellow-600", link: "/deadlines" },
  { title: "AI Assistant", color: "bg-purple-600", link: "/assistant" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎓 Student Desk Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <Link
            to={f.link}
            key={i}
            className={`p-8 rounded-2xl shadow-lg ${f.color} hover:scale-105 hover:shadow-xl transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
            <p className="text-gray-100">
              Access your {f.title.toLowerCase()} easily here.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
