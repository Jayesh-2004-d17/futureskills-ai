import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight, User, Mail, Phone, BookOpen, Clock, Calendar } from 'lucide-react';
import { RegistrationFormData, FormErrors } from '../types';
import { COURSES } from '../data/courses';

interface RegistrationFormProps {
  selectedCourseId: string;
  onCourseChange: (courseId: string) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedCourseId,
  onCourseChange,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    courseId: selectedCourseId || 'generative-ai',
    cohort: 'weekend-live',
    experienceLevel: 'intermediate',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Keep form data courseId in sync when external selectedCourseId changes
  React.useEffect(() => {
    if (selectedCourseId) {
      setFormData((prev) => ({ ...prev, courseId: selectedCourseId }));
      setErrors((prev) => ({ ...prev, courseId: undefined }));
    }
  }, [selectedCourseId]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    // Phone
    const phoneRegex = /^[\d\s\+\-\(\)]{7,18}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (minimum 7 digits).';
    }

    // Course
    if (!formData.courseId) {
      newErrors.courseId = 'Please select a programme of study.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable registration processing
    setTimeout(() => {
      const randomCode = 'FSAI-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(randomCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      courseId: 'generative-ai',
      cohort: 'weekend-live',
      experienceLevel: 'intermediate',
      notes: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const selectedCourse = COURSES.find((c) => c.id === formData.courseId) || COURSES[0];

  return (
    <section id="register" className="py-20 md:py-28 relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Enrollment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-4">
            Secure Your Seat for the Upcoming Cohort
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Limited capacity per cohort ensures genuine 1-on-1 mentor guidance and comprehensive project reviews.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            /* Success Confirmation Card */
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/95 border border-purple-500/40 shadow-2xl backdrop-blur-md text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest block mb-2">
                Application Received Successfully
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                Welcome to FutureSkills AI, {formData.fullName}!
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                Your registration for the <strong className="text-white">{selectedCourse.title}</strong> programme has been logged. An admissions advisor has dispatched the welcome syllabus kit to <span className="text-purple-300 font-mono">{formData.email}</span>.
              </p>

              {/* Confirmation Details Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto mb-8 text-left space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Confirmation Code:</span>
                  <span className="text-purple-400 font-mono font-bold tabular-nums">{confirmationCode}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Selected Programme:</span>
                  <span className="text-white font-medium">{selectedCourse.title}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Programme Duration:</span>
                  <span className="text-white font-medium">{selectedCourse.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Admissions Next Step:</span>
                  <span className="text-emerald-400 font-medium">Onboarding Call within 24h</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors cursor-pointer"
                >
                  Register Another Student
                </button>
                <a
                  href="#programs"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-purple-900/40 cursor-pointer"
                >
                  Explore Course Modules
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Registration Form */
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Jordan Rivera"
                        className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. jordan@university.edu"
                        className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. +1 (555) 019-2834"
                        className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Course Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Course Selection <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.courseId}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, courseId: val });
                          onCourseChange(val);
                          if (errors.courseId) setErrors({ ...errors, courseId: undefined });
                        }}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 rounded-xl border text-sm text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                          errors.courseId
                            ? 'border-rose-500 focus:ring-rose-500/40'
                            : 'border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                        }`}
                      >
                        {COURSES.map((course) => (
                          <option key={course.id} value={course.id} className="bg-slate-900 text-white">
                            {course.title} ({course.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.courseId && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.courseId}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Course preview badge */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                      AI
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Selected: {selectedCourse.title}</div>
                      <div className="text-[11px] text-slate-300">{selectedCourse.tagline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {selectedCourse.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      Next Cohort: 1st of Month
                    </span>
                  </div>
                </div>

                {/* Additional Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Preferred Learning Format
                    </label>
                    <select
                      value={formData.cohort}
                      onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                    >
                      <option value="weekend-live">Live Weekend Masterclasses + Office Hours</option>
                      <option value="self-paced">Accelerated Flex-Track with Asynchronous Reviews</option>
                      <option value="evening-cohort">Weekday Evening Cohort</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Current Background / Experience
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                    >
                      <option value="student">Undergraduate / College Student</option>
                      <option value="recent-grad">Recent Graduate (1-2 Years Post-Grad)</option>
                      <option value="junior-dev">Early Career Developer / Analyst</option>
                      <option value="non-technical">Non-technical Professional Upskilling</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl transition-all shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Validating & Submitting Application...
                      </span>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    By submitting, you agree to receive admissions onboarding instructions. No upfront payment required to apply.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
