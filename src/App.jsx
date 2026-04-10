import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import TaxidiHome from "./pages/TaxidiHome";
import ExpoPage from "./pages/ExpoPage";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activePage]);

  if (activePage === "expo") {
    return (
      <div className="min-h-screen bg-[#020918]">
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050c1f]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
            <button
              onClick={() => setActivePage("home")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Fredmind Taxidi
            </button>
          </div>
        </div>
        <ExpoPage />
      </div>
    );
  }

  return <TaxidiHome onOpenExpo={() => setActivePage("expo")} />;
}
