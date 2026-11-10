import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'generative-ai',
    title: 'Generative AI',
    tagline: 'Master multimodal foundation models, fine-tuning, and production generative architectures.',
    category: 'Advanced AI',
    duration: '8 Weeks',
    weeklyHours: '6-8 hrs/week',
    level: 'Intermediate',
    description: 'Gain hands-on mastery over state-of-the-art Generative AI. Explore large language models, image and audio synthesis, diffusion models, and retrieval-augmented generation (RAG) through production-grade projects.',
    image: '/src/assets/images/course_generative_ai_1794246312454.jpg',
    fallbackGradient: 'from-violet-600 via-indigo-600 to-blue-700',
    highlights: [
      'Build end-to-end RAG pipelines with vector databases',
      'Fine-tune open-weight models with LoRA & QLoRA',
      'Deploy multimodal AI applications to cloud infrastructure'
    ],
    syllabus: [
      { week: 'Week 1-2', topic: 'LLM Foundations & Embeddings', description: 'Transformer architecture intuition, tokenization, semantic embeddings, and vector indices.' },
      { week: 'Week 3-4', topic: 'Retrieval Augmented Generation (RAG)', description: 'Chunking strategies, hybrid search, rerankers, and citation ground-truth validation.' },
      { week: 'Week 5-6', topic: 'Diffusion Models & Multimodal AI', description: 'Latent diffusion, image generation models, audio synthesis, and multimodal reasoning APIs.' },
      { week: 'Week 7-8', topic: 'Capstone & Production Deployment', description: 'Quantization, inference optimization, latency budgets, and full-stack deployment.' }
    ],
    skillsGained: ['PyTorch Foundations', 'Vector Search (Pinecone/Chroma)', 'RAG Architecture', 'Hugging Face Ecosystem', 'Model Evaluation'],
    targetAudience: 'Software developers, computer science students, and tech enthusiasts looking to build real generative products.'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    tagline: 'Design robust cognitive architectures, reasoning frameworks, and agentic workflows with LLMs.',
    category: 'Applied AI',
    duration: '6 Weeks',
    weeklyHours: '5-7 hrs/week',
    level: 'Beginner to Intermediate',
    description: 'Move beyond simple chat prompts. Learn systematic prompt design patterns, few-shot prompting, Chain-of-Thought, ReAct frameworks, evaluation rubrics, and automated prompt optimization for enterprise tasks.',
    image: '/src/assets/images/course_prompt_engineering_1794246313297.jpg',
    fallbackGradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    highlights: [
      'Master Chain-of-Thought, Tree-of-Thoughts & ReAct prompting',
      'Build automated evaluation harnesses and prompt benchmarks',
      'Mitigate hallucinations, prompt injections, and jailbreaks'
    ],
    syllabus: [
      { week: 'Week 1', topic: 'Core Prompt Dynamics & Context Windows', description: 'Role assignment, delimiter strategies, system instructions, and temperature tuning.' },
      { week: 'Week 2-3', topic: 'Advanced Reasoning & Few-Shot Patterns', description: 'Chain-of-thought, self-consistency sampling, least-to-most prompting, and structured output formatting.' },
      { week: 'Week 4', topic: 'AI Safety & Adversarial Robustness', description: 'Defending against prompt injections, data exfiltration guards, and guardrail frameworks.' },
      { week: 'Week 5-6', topic: 'Automated Prompt Optimization & Capstone', description: 'DSPy fundamentals, prompt evaluators, unit testing prompt outputs, and building an enterprise agent.' }
    ],
    skillsGained: ['Structured Prompting', 'JSON Schema Enforcement', 'Prompt Security', 'DSPy Framework', 'Evaluation & Benchmarking'],
    targetAudience: 'Product managers, marketers, analysts, and students wanting to operate and guide AI models like an expert.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Build autonomous multi-agent pipelines, automated business workflows, and API integrations.',
    category: 'Workflows & Agents',
    duration: '8 Weeks',
    weeklyHours: '6-8 hrs/week',
    level: 'All Levels',
    description: 'Transform repetitive business and engineering operations with intelligent automation. Learn to orchestrate autonomous AI agents, connect webhooks and APIs, and automate complex multi-step processes.',
    image: '', // Will use stylized high-tech SVG fallback container with rich gradient
    fallbackGradient: 'from-purple-600 via-violet-700 to-indigo-900',
    highlights: [
      'Construct multi-agent task execution networks',
      'Integrate LLMs with webhooks, Zapier, Make, and n8n',
      'Automate customer support, research digests, and reporting'
    ],
    syllabus: [
      { week: 'Week 1-2', topic: 'Workflow Automation & API Fundamentals', description: 'REST APIs, webhooks, JSON payloads, and visual automation canvas architectures.' },
      { week: 'Week 3-4', topic: 'Autonomous Agent Frameworks', description: 'Tool-use, function calling, stateful memory buffers, and recursive task decomposition.' },
      { week: 'Week 5-6', topic: 'Enterprise Integrations & Data Pipelines', description: 'Automating Google Workspace, CRMs, Slack, and database synchronization via AI.' },
      { week: 'Week 7-8', topic: 'Production Agent Deployment & Capstone', description: 'Error recovery, retry loops, rate-limit governance, and self-healing automation.' }
    ],
    skillsGained: ['Function Calling', 'Autonomous Agents', 'n8n & Webhooks', 'API Orchestration', 'Automated QA & Fallbacks'],
    targetAudience: 'Operations leads, entrepreneurs, tech generalists, and developers aiming to build autonomous digital workforces.'
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills',
    tagline: 'Modern cloud literacy, collaborative developer tooling, data analytics, and digital strategy.',
    category: 'Career Foundations',
    duration: '10 Weeks',
    weeklyHours: '5-7 hrs/week',
    level: 'Beginner Friendly',
    description: 'The definitive foundation for high-performing modern digital careers. Master cloud computing concepts, modern data querying with SQL & dashboards, Git version control, and digital product delivery.',
    image: '/src/assets/images/course_digital_skills_1794246314694.jpg',
    fallbackGradient: 'from-blue-600 via-indigo-700 to-purple-800',
    highlights: [
      'Master Git & GitHub collaborative workflows',
      'Analyze data with modern SQL and interactive dashboards',
      'Understand cloud infrastructure & CI/CD delivery pipelines'
    ],
    syllabus: [
      { week: 'Week 1-2', topic: 'Version Control & Modern Dev Tools', description: 'Git branching, pull requests, terminal proficiency, and modern editor setups.' },
      { week: 'Week 3-4', topic: 'Cloud Fundamentals & Modern Web Architecture', description: 'Cloud compute, storage primitives, serverless concepts, and networking basics.' },
      { week: 'Week 5-7', topic: 'Data Literacy, SQL & Visualization', description: 'Relational data modeling, writing complex SQL queries, and building analytical dashboards.' },
      { week: 'Week 8-10', topic: 'Agile Product Delivery & Capstone', description: 'Scrum cycles, feature scoping, technical documentation, and launching a digital project.' }
    ],
    skillsGained: ['Git / GitHub', 'SQL & Data Modeling', 'Cloud Services (GCP/AWS)', 'Modern Terminal', 'Agile Product Delivery'],
    targetAudience: 'College students, career switchers, and young professionals aiming to thrive in technology-driven organizations.'
  }
];
