<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function TaxidiNavbar({ onOpenExpo }) {
  const [menuOpen, setMenuOpen] = useState(false);
const navItems = [
  { name: "Services", link: "#services" },
  { name: "Destinations", link: "#destinations" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" }
];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#f5f5f5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
    <a
  href="#top"
  className="cursor-pointer font-serif text-[22px] font-bold tracking-[-0.04em] text-black sm:text-[28px]"
>
  Fredmind <span className="text-[#4f8fe5]">Taxidi</span>
</a>
    <nav className="hidden items-center gap-8 md:flex">
  {navItems.map((item) => (
    <a
      key={item.name}
      href={item.link}
      className="cursor-pointer text-sm font-medium text-slate-700 transition hover:text-[#4f8fe5] lg:text-[15px]"
    >
      {item.name}
    </a>
  ))}
</nav>
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552

        <button
          onClick={onOpenExpo}
          className="hidden cursor-pointer items-center gap-2 rounded-full border border-[#4f8fe5]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#4f8fe5] transition hover:bg-[#4f8fe5] hover:text-white sm:px-5 md:inline-flex"
        >
          Study Abroad Expo
          <ArrowRight className="h-4 w-4" />
        </button>

<<<<<<< HEAD
        <button className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
=======
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-left text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#4f8fe5]"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenExpo();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#4f8fe5]/30 bg-[#4f8fe5] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Study Abroad Expo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
    </header>
  );
}
