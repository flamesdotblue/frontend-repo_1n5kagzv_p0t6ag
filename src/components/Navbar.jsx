import { Rocket, Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-md bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 shadow-[0_8px_30px_rgba(16,185,129,0.35)]">
            <Brain className="w-5 h-5 text-black" />
          </div>
          <span className="font-semibold tracking-tight">NeuroStudy AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-emerald-300 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-emerald-300 transition-colors">Pricing</a>
          <a href="#stories" className="hover:text-emerald-300 transition-colors">Stories</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-emerald-400/40 transition-colors">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-black font-medium shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:brightness-110 transition">
            <Rocket className="w-4 h-4" />
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
