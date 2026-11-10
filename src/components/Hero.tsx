import React, { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Users, Code, Award } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onRegisterClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (purple & blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/20 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean unboxed announcement text (zero pill rule) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-purple-300/90 mb-5 tracking-wide">
              <span className="inline-flex items-center gap-1.5 text-purple-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Academy
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">New Cohort Enrolling for 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-heading">
              Learn AI.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                Build Real-World Skills.
              </span>{' '}
              Shape Your Future.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Practical, project-driven AI and digital-skills programmes designed specifically for students and young professionals. Master production-grade Generative AI, automated agent pipelines, prompt architectures, and modern cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 cursor-pointer active:scale-[0.98]"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-purple-500/50 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Explore Programs</span>
              </button>
            </div>

            {/* Trust Markers without pills */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero fluff, 100% project-based</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Verified industry credentials</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Dedicated 1-on-1 code mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Hero Graphic with Glass Accents */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-30 blur-xl transition duration-500" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900/90 shadow-2xl backdrop-blur-sm">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hero_ai_learning_1794246313623.jpg"
                    alt="Students and young professionals learning AI together"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4 text-purple-300">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">
                      Applied AI Engineering Lab
                    </h3>
                    <p className="text-sm text-slate-300 max-w-sm">
                      Interactive hands-on training for real-world artificial intelligence and automated workflow pipelines.
                    </p>
                  </div>
                )}

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Glass Highlight Card 1 */}
                <div className="absolute top-4 left-4 right-auto bg-slate-900/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Live AI Sandbox</p>
                    <p className="text-[11px] text-slate-300">Real models, zero simulation</p>
                  </div>
                </div>

                {/* Floating Glass Highlight Card 2 */}
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-xl p-3.5 shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Industry Verified</div>
                      <div className="text-[11px] text-slate-300">94% Career Placement Rate</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-400 tabular-nums">2026 Batch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quantitative Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tabular-nums">
              10,000+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Active Learners & Alumni
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading tabular-nums">
              94%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Course Completion Rate
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-heading tabular-nums">
              4 Tracks
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Market-Aligned Specializations
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-heading tabular-nums">
              1-on-1
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Senior Tech Mentorship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
