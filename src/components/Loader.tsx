import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment for more natural feel
        const increment = Math.floor(Math.random() * 5) + 1; // Slower increment
        return Math.min(prev + increment, 100);
      });
    }, 50); // Faster updates

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ease-in-out ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-custom text-6xl md:text-9xl font-bold tracking-tighter animate-pulse">
        {progress}%
      </div>
      <div className="mt-4 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
