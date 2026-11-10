import React from 'react';
import { X, Clock, Calendar, Check, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-purple-950/70 via-slate-900 to-indigo-950/60 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            {course.category} · {course.level}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
            {course.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {course.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Duration: <strong className="text-white font-semibold">{course.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Effort: <strong className="text-white font-semibold">{course.weeklyHours}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Cohort: <strong className="text-white font-semibold">Live & Flexible</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Detailed Description */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 font-heading">
              Programme Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-heading">
              Key Highlights & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Modules */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-heading flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Curriculum Roadmap
            </h3>
            <div className="space-y-3">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-purple-400">{item.week}</span>
                    <span className="text-xs text-slate-400">Interactive Module</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.topic}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Skills */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-3">
            <div>
              <span className="text-xs font-semibold text-purple-300 block mb-1">Who Should Enroll:</span>
              <p className="text-xs text-slate-300">{course.targetAudience}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-300 block mb-1">Competencies Mastered:</span>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                {course.skillsGained.map((skill, i) => (
                  <span key={i} className="inline-block bg-slate-800/80 px-2.5 py-1 rounded-md text-[11px] text-slate-200 border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onEnroll(course.id);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl transition-all shadow-md shadow-purple-900/30 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enroll in {course.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
