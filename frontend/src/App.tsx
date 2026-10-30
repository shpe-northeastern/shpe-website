import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Routes>
      </main>
    </>
  );
}
