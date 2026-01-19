import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Loader } from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <HomePage />
      )}
    </>
  );
}