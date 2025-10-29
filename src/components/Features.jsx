import { Brain, BookOpen, Bot, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "Neuroscience-guided plans",
    description:
      "Daily study paths that optimize spacing, retrieval, and focus — tailored to your goals and schedule.",
    icon: Brain,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Instant explanations",
    description:
      "Ask anything and get clear, step‑by‑step explanations with examples and visualizations.",
    icon: Bot,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Smart practice",
    description:
      "Adaptive quizzes that focus on weak areas and celebrate progress with actionable insights.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Time‑aware sessions",
    description:
      "Micro‑sessions that fit your day — whether you have 5 minutes or an hour to go deep.",
    icon: Clock,
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Private by design",
    description:
      "Your notes and history stay yours. Enterprise‑grade security and granular controls.",
    icon: Shield,
    color: "from-sky-500 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for deep learning</h2>
          <p className="mt-3 text-white/70">
            Everything you need to learn efficiently — grounded in science, designed with care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20`}>
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
