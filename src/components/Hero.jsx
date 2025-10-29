import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Green energy glow + vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(52,211,153,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Full-bleed Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200 mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Neuro-adaptive learning that sparks momentum
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Learn faster with an AI mentor engineered for deep focus
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Dynamic study plans, instant explanations, and adaptive practice — powered by neuroscience and real-time AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center h-11 px-6 rounded-md bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-black font-medium shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:brightness-110 transition">
              Start free trial
            </a>
            <a href="#features" className="inline-flex justify-center items-center h-11 px-6 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-emerald-400/40 transition">
              Explore features
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            No credit card required • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
