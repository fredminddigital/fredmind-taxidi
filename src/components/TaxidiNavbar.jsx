import React from "react";
import { ArrowRight, Menu } from "lucide-react";

export default function TaxidiNavbar({ onOpenExpo }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#f5f5f5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <div className="font-serif text-[22px] font-bold tracking-[-0.04em] text-black sm:text-[28px]">
          Fredmind <span className="text-[#4f8fe5]">Taxidi</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "Services", "Destinations", "About", "Contact"].map((item) => (
            <button key={item} className="cursor-pointer text-sm font-medium text-slate-700 transition hover:text-[#4f8fe5] lg:text-[15px]">
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={onOpenExpo}
          className="hidden cursor-pointer items-center gap-2 rounded-full border border-[#4f8fe5]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#4f8fe5] transition hover:bg-[#4f8fe5] hover:text-white sm:px-5 md:inline-flex"
        >
          Study Abroad Expo
          <ArrowRight className="h-4 w-4" />
        </button>

        <button className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
