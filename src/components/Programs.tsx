import React, { useState } from 'react';
import { Clock, ArrowRight, BookOpen, Check, Cpu, Terminal, Bot, Globe } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data/courses';

interface ProgramsProps {
  onSelectCourse: (courseId: string) => void;
  onOpenDetails: (course: Course) => void;
  selectedCourseId: string;
}

export const Programs: React.FC<ProgramsProps> = ({
  onSelectCourse,
  onOpenDetails,
  selectedCourseId,
}) => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'generative-ai':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'prompt-engineering':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'ai-automation':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'digital-skills':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="programs" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            <span>Specialized Curricula</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Industry Accredited</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
            Popular AI & Digital Programmes
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Master the most critical proficiencies shaping the modern tech economy. Every course pairs live mentor workshops with hands-on capstone builds.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => {
            const isSelected = selectedCourseId === course.id;
            const hasError = imgErrors[course.id] || !course.image;

            return (
              <div
                key={course.id}
                className={`group flex flex-col rounded-2xl bg-slate-900 border transition-all duration-300 overflow-hidden relative ${
                  isSelected
                    ? 'border-purple-500 shadow-xl shadow-purple-950/50 ring-2 ring-purple-500/20'
                    : 'border-slate-800/80 hover:border-slate-700 hover:shadow-xl hover:shadow-purple-950/20'
                }`}
              >
                {/* Course Card Image / Fallback Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  {!hasError ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImgError(course.id)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Styled CSS/SVG Fallback Container adhering to Zero-Broken-Image Policy */
                    <div
                      className={`w-full h-full bg-gradient-to-br ${course.fallbackGradient} p-6 flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                          {getCourseIcon(course.id)}
                        </div>
                        <span className="text-[11px] font-mono text-purple-200 uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded">
                          {course.category}
                        </span>
                      </div>
                      <div className="relative z-10">
                        <div className="text-lg font-bold text-white font-heading">
                          {course.title}
                        </div>
                        <div className="text-xs text-slate-200 mt-1 line-clamp-1">
                          Autonomous Systems & APIs
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

                  {/* Duration overlay badge */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60 flex items-center gap-1.5 text-xs text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-medium tabular-nums">{course.duration}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill rule) */}
                    <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-1.5">
                      <span>{course.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{course.level}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-300 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Key Competencies list */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                      {course.skillsGained.slice(0, 3).map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => onOpenDetails(course)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors cursor-pointer group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-purple-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40'
                          : 'bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 border border-purple-800/40'
                      }`}
                    >
                      <span>{isSelected ? 'Selected for Registration' : 'Select Course'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
