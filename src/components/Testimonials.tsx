import React, { useState } from 'react';
import { Quote, Sparkles, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [avatarErrors, setAvatarErrors] = useState<Record<string, boolean>>({});

  const handleAvatarError = (id: string) => {
    setAvatarErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alumni Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
            Hear from Our Students
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Real graduates who transitioned into artificial intelligence engineering, applied research, and high-impact digital careers.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => {
            const hasAvatarError = avatarErrors[t.id];

            return (
              <div
                key={t.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-semibold text-purple-400">
                      {t.course}
                    </div>
                    <Quote className="w-6 h-6 text-purple-500/30 group-hover:text-purple-400/50 transition-colors" />
                  </div>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div>
                  {/* Concrete Outcome Callout */}
                  <div className="mb-6 p-3 rounded-lg bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200 font-medium">
                    <span className="font-semibold text-purple-400 block mb-0.5">Verified Career Impact:</span>
                    {t.outcome}
                  </div>

                  {/* Student Identity */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800">
                    {!hasAvatarError ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        onError={() => handleAvatarError(t.id)}
                        className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-purple-300">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {t.role} · <span className="text-slate-300">{t.organization}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
