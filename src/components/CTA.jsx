export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
          Join thousands of focused learners
        </div>
        <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">
          Start your AI‑powered study journey today
        </h2>
        <p className="mt-3 text-white/70">
          Try it free for 7 days. Build momentum in minutes.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="h-11 px-4 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 w-full sm:w-80"
          />
          <button
            type="submit"
            className="h-11 px-6 rounded-md bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-black font-medium shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:brightness-110 transition w-full sm:w-auto"
          >
            Get started
          </button>
        </form>
        <p className="mt-4 text-xs text-white/60">By signing up, you agree to our Terms and Privacy Policy.</p>
      </div>

      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} NeuroStudy AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <a href="#" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
