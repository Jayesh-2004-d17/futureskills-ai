import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, Youtube } from 'lucide-react';
import { COURSES } from '../data/courses';

interface FooterProps {
  onSelectCourse: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse }) => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Column 1: Brand & About Us (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-white group cursor-pointer inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white font-heading">
                FutureSkills<span className="text-purple-400"> AI</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students, recent graduates, and ambitious young professionals with practical, industry-grade artificial intelligence and digital competencies.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2 uppercase tracking-wider">
                Connect With Our Community
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FutureSkills AI GitHub"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FutureSkills AI LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FutureSkills AI Twitter"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FutureSkills AI Discord Community"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="FutureSkills AI YouTube"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Programmes */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="hover:text-purple-300 transition-colors text-left text-slate-400 hover:underline cursor-pointer"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a href="#programs" className="text-xs text-purple-400 hover:text-purple-300 font-medium">
                  View Full Course Catalog &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & About */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              About Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#why-us" className="hover:text-purple-300 transition-colors">
                  Why FutureSkills
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-purple-300 transition-colors">
                  Learning Journey
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-purple-300 transition-colors">
                  Student Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-300 transition-colors">
                  Admissions FAQ
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-purple-300 transition-colors">
                  Upcoming Cohort
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a href="mailto:admissions@futureskillsai.org" className="hover:text-white transition-colors">
                  admissions@futureskillsai.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>+1 (800) 419-AI26</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>San Francisco, CA · Global Online Cohorts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} FutureSkills AI Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Honor Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
