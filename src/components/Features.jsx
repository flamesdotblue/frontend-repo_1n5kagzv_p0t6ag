import { Brain, BookOpen, Bot, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "Neuroscience-guided plans",
    description:
      "Daily study paths that optimize spacing, retrieval, and focus — tailored to your goals and schedule.",
    icon: Brain,
    color: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Instant explanations",
    description:
      "Ask anything and get clear, step‑by‑step explanations with examples and visualizations.",
    icon: Bot,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Smart practice",
    description:
      "Adaptive quizzes that focus on weak areas and celebrate progress with actionable insights.",
    icon: BookOpen,
    color: "from-teal-500 to-emerald-400",
  },
  {
    title: "Time‑aware sessions",
    description:
      "Micro‑sessions that fit your day — whether you have 5 minutes or an hour to go deep.",
    icon: Clock,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Private by design",
    description:
      "Your notes and history stay yours. Enterprise‑grade security and granular controls.",
    icon: Shield,
    color: "from-emerald-400 to-emerald-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_30%_at_20%_10%,rgba(52,211,153,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for deep learning</h2>
          <p className="mt-3 text-white/70">
            Everything you need to learn efficiently — grounded in science, designed with care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_-20px_rgba(16,185,129,0.25)]">
              <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-black shadow-[0_8px_30px_rgba(16,185,129,0.35)]`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
