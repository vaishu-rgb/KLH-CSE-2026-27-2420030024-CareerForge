
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";

function Home() {
  return (
    <div>
      <h1>CareerForge</h1>
      <p>AI-Powered Career Development Platform</p>

      <hr />

      <h2>Career Dashboard</h2>

      <p>Welcome to CareerForge!</p>

      <h3>Career Development Modules</h3>

      <ul>
        <li>
  <Link to="/resume">Resume Analysis</Link>
</li>
        <li>Skill Gap Analysis</li>
        <li>Career Recommendations</li>
        <li>Learning Roadmap</li>
        <li>Interview Preparation</li>
      </ul>

      <p>
        <Link to="/profile">My Profile</Link>
      </p>

      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

