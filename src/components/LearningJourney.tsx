import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal, Cpu, Rocket, Award } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/content';

export const LearningJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Rocket className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Award className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Pedagogy & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
            Your 4-Stage Learning Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            A structured path from core foundations to deployed portfolio artifacts that demonstrate authentic technical competence.
          </p>
        </div>

        {/* Desktop & Tablet 4-Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {LEARNING_JOURNEY.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? 'bg-slate-900 border-purple-500 shadow-xl shadow-purple-950/40 ring-1 ring-purple-500/30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-bold text-purple-400/80 tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      {getStepIcon(index)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                    {step.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-purple-300 block mb-1">
                    Key Milestone:
                  </span>
                  <div className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Callout Showcase */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-semibold text-purple-400 mb-1">
                STAGE {LEARNING_JOURNEY[activeStep].number} FOCUS
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                {LEARNING_JOURNEY[activeStep].title}: {LEARNING_JOURNEY[activeStep].subtitle}
              </h4>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {LEARNING_JOURNEY[activeStep].description} Every student receives direct feedback in code sprints before moving forward.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400">Step {activeStep + 1} of 4</span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % LEARNING_JOURNEY.length)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/50 rounded-lg transition-colors cursor-pointer"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
