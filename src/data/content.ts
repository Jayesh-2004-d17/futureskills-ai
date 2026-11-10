import { Testimonial, FAQItem } from '../types';

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'hands-on',
    title: 'Hands-on Projects',
    description: 'Build production-ready AI applications and live portfolio artifacts instead of passively watching recorded lectures.',
    stat: '12+',
    statLabel: 'Portfolio Projects'
  },
  {
    id: 'industry-relevant',
    title: 'Industry-Relevant Skills',
    description: 'Curricula co-developed with leading AI research labs and tech companies, updated every quarter to match modern model advances.',
    stat: '100%',
    statLabel: 'Modern Tooling'
  },
  {
    id: 'expert-mentorship',
    title: 'Expert Mentorship',
    description: 'Weekly 1-on-1 feedback and live architecture clinics led by senior engineers and applied AI researchers.',
    stat: '1:1',
    statLabel: 'Personal Code Reviews'
  },
  {
    id: 'career-focused',
    title: 'Career-Focused Learning',
    description: 'End-to-end career transition support including technical interview practice, resume audits, and direct hiring partner referrals.',
    stat: '89%',
    statLabel: 'Career Outcomes within 6 Mo'
  }
];

export interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export const LEARNING_JOURNEY: JourneyStep[] = [
  {
    number: '01',
    title: 'Learn Fundamentals',
    subtitle: 'Core Concept Mastery',
    description: 'Demystify underlying mathematical intuitions, transformer attention mechanics, embeddings, and modern software architectures with zero jargon.',
    deliverable: 'Concept Mindmap & Technical Baseline'
  },
  {
    number: '02',
    title: 'Practice with AI Tools',
    subtitle: 'Hands-on Lab Exploration',
    description: 'Interact with industry-standard development toolchains, APIs, prompt evaluation suites, and automation environments under expert guidance.',
    deliverable: 'Verified Lab Exercises & API Integrations'
  },
  {
    number: '03',
    title: 'Build Real Projects',
    subtitle: 'Production-Grade Engineering',
    description: 'Team up with peers or sprint solo to construct full-stack, enterprise-grade AI applications solving genuine organizational bottlenecks.',
    deliverable: 'Production GitHub Repository & Live Demo'
  },
  {
    number: '04',
    title: 'Showcase Your Skills',
    subtitle: 'Career Acceleration & Network',
    description: 'Publish your interactive portfolio, present your capstone to hiring tech leads, and gain accredited credentials with lifelong alumni community access.',
    deliverable: 'Verified Credential & Career Network'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maya Chen',
    role: 'Junior AI Product Specialist',
    organization: 'Kinetix Digital Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
    course: 'Generative AI Programme',
    quote: 'Before FutureSkills AI, I struggled to understand how to turn generative models into real software. The RAG architecture module alone helped me ship an internal customer intelligence tool that led directly to my current role.',
    outcome: 'Transitioned from marketing intern to AI specialist in 4 months'
  },
  {
    id: '2',
    name: 'Alexander Vogt',
    role: 'Automation Engineer',
    organization: 'FinScale Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80',
    course: 'AI Automation Programme',
    quote: 'The emphasis on resilient agent architectures and real API connectors was phenomenal. I learned how to handle rate limits, fallbacks, and multi-agent coordination. Our capstone project replaced 20 hours of manual reporting weekly.',
    outcome: 'Automated 15+ business workflows in first 60 days on the job'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Associate Solutions Analyst',
    organization: 'Nexus Cloud Technologies',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
    course: 'Prompt Engineering & Digital Skills',
    quote: 'The prompt evaluation frameworks and structured reasoning sessions changed how I approach problem solving. The mentors gave line-by-line feedback on my code and helped me build confidence for technical interviews.',
    outcome: 'Secured full-time tech role prior to university graduation'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Programmes',
    question: 'Who are these programmes designed for?',
    answer: 'Our programmes are tailored for university students, recent graduates, and ambitious young professionals seeking practical, in-demand AI and digital proficiencies. While foundational technical interest is helpful, we offer beginner-friendly tracks (Digital Skills & Prompt Engineering) as well as technical depth tracks (Generative AI).'
  },
  {
    id: 'faq-2',
    category: 'Duration & Schedule',
    question: 'How long are the programmes and what is the weekly commitment?',
    answer: 'Programmes range from 6 to 10 weeks depending on the discipline. Learners dedicate approximately 5 to 8 hours per week, consisting of 2 hours of live interactive workshops/clinics and 4 to 6 hours of hands-on project building and mentor office hours.'
  },
  {
    id: 'faq-3',
    category: 'Programmes',
    question: 'Do I need prior coding experience to join?',
    answer: 'For Digital Skills and Prompt Engineering, no programming background is required; we teach systematic thinking from first principles. For the Generative AI programme, basic familiarity with Python or JavaScript syntax is recommended, though we provide a 1-week prep module prior to cohort kickoff.'
  },
  {
    id: 'faq-4',
    category: 'Duration & Schedule',
    question: 'Are sessions live or self-paced?',
    answer: 'We provide a flexible hybrid model: core learning modules and project assignments are available on-demand, supported by weekly live weekend masterclasses, code review clinics, and weekday drop-in mentor office hours.'
  },
  {
    id: 'faq-5',
    category: 'Registration & Fees',
    question: 'What is the registration process and how do I secure my seat?',
    answer: 'Simply complete the registration form below with your course selection. Our admissions team reviews your application within 24 to 48 hours and sends a welcome packet with cohort start dates, syllabus preparation, and onboarding steps.'
  },
  {
    id: 'faq-6',
    category: 'Registration & Fees',
    question: 'Do you offer certificates upon programme completion?',
    answer: 'Yes. Upon successfully shipping your capstone project and passing project review rubrics, you will receive a cryptographically verifiable FutureSkills AI Professional Certificate along with an employer-facing digital portfolio.'
  }
];
