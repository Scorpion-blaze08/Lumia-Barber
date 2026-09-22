import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Landing from "@/pages/Landing";
import Privacy from "@/pages/Privacy";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}

function App() {
  return (
    <div className="bg-espresso text-cream min-h-screen overflow-x-clip">
      <div className="grain-overlay" aria-hidden="true" />
      <BrowserRouter>
        <SmoothScroll />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#151515",
            border: "1px solid #262626",
            color: "#F2F2F2",
          },
        }}
      />
    </div>
  );
}

export default App;
