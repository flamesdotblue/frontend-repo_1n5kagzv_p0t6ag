import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(59,130,246,0.25),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered learning that adapts to you
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Master anything faster with an AI study mentor
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Personalized study plans, instant explanations, and interactive quizzes — all powered by advanced neuroscience and cutting‑edge AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center h-11 px-6 rounded-md bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:brightness-110 transition">
              Start free trial
            </a>
            <a href="#features" className="inline-flex justify-center items-center h-11 px-6 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition">
              Explore features
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50">
            No credit card required • Cancel anytime
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline 
              scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-16 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
