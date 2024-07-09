import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={Hero} />
        <Route path="about" element={About} />
        <Route path="/sign-in" element={SignIn} />
        <Route path="/sign-up" element={SignUp} />
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/project" element={Project} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
