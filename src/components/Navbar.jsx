import { Rocket, Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-md bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow-lg shadow-blue-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight">NeuroStudy AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#stories" className="hover:text-white transition-colors">Stories</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition-colors">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 h-9 px-4 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition">
            <Rocket className="w-4 h-4" />
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
