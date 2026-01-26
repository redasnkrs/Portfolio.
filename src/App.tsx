import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { Loader } from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      )}
    </Router>
  );
}