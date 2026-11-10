export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  weeklyHours: string;
  level: string;
  description: string;
  image: string;
  fallbackGradient: string;
  highlights: string[];
  syllabus: {
    week: string;
    topic: string;
    description: string;
  }[];
  skillsGained: string[];
  targetAudience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  course: string;
  quote: string;
  outcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Programmes' | 'Duration & Schedule' | 'Registration & Fees';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  cohort: string;
  experienceLevel: string;
  notes?: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  courseId?: string;
}
