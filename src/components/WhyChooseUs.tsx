import React from 'react';
import { Layers, Target, Compass, Briefcase, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'hands-on':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'industry-relevant':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'expert-mentorship':
        return <Compass className="w-6 h-6 text-indigo-400" />;
      case 'career-focused':
        return <Briefcase className="w-6 h-6 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              Why FutureSkills AI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading leading-tight">
              Engineered for Practical Impact, Not Passive Watching.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Traditional computer science degrees move too slowly, while surface-level video tutorials leave you stranded when production bugs strike. Our curriculum gives you real developer environments, actual model APIs, and continuous senior engineer oversight.
            </p>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Real API credits & GPU sandbox included in all cohorts</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Verified digital credential verifiable on LinkedIn & GitHub</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Lifetime access to alumni tech network & ongoing AI briefings</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Distinctive Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-purple-950/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {getFeatureIcon(item.id)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-heading tabular-nums">
                    {item.stat}
                  </span>
                  <span className="text-xs text-slate-400">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
