export interface Module {
  id: string;
  day: number;
  title: string;
  description: string;
  objectives: string[];
  outcomes: string[];
  topics: string[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  modules: Module[];
  totalDays: number;
  difficulty: string;
}

export const gitCourse: Course = {
  id: 'git-expert',
  title: 'Git Expert Mastery',
  description: 'Master Git version control and become an expert in repository management, branching strategies, and collaboration workflows.',
  icon: '📚',
  color: 'from-orange-500 to-red-500',
  totalDays: 15,
  difficulty: 'Beginner to Advanced',
  modules: [
    {
      id: 'git-day-1',
      day: 1,
      title: 'What is Git and Why It Matters',
      description: 'Introduction to version control and Git fundamentals',
      objectives: [
        'Understand what Git is and why it\'s essential',
        'Learn the history and philosophy of Git',
        'Understand the difference between Git and GitHub',
      ],
      outcomes: [
        'Explain Git\'s purpose in software development',
        'Identify key Git concepts and terminology',
        'Understand when and why to use version control',
      ],
      topics: [
        'What is version control?',
        'Git vs other version control systems',
        'Git workflow overview',
        'Key Git concepts: repositories, commits, branches',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'Git is a distributed version control system that tracks changes in your code. It allows multiple developers to work on the same project without conflicts, maintains a complete history of all changes, and enables easy collaboration. Git is essential for professional software development and is used by virtually every tech company in the world.',
    },
    {
      id: 'git-day-2',
      day: 2,
      title: 'Setting Up Your First Git Environment',
      description: 'Install and configure Git for your system',
      objectives: [
        'Install Git on your operating system',
        'Configure Git with your identity',
        'Create your first repository',
      ],
      outcomes: [
        'Successfully install and configure Git',
        'Create and initialize a Git repository',
        'Understand basic Git configuration',
      ],
      topics: [
        'Installing Git on Windows, Mac, and Linux',
        'Configuring user name and email',
        'Creating your first repository',
        'Understanding .git directory',
      ],
      duration: '1-2 hours',
      difficulty: 'Beginner',
      content: 'Setting up Git involves installing it on your system and configuring it with your user information. This configuration is important because every commit you make will be attributed to this identity. Once configured, you can initialize a new repository or clone an existing one to start working with Git.',
    },
    // Additional modules would follow the same pattern...
    // For brevity, showing just first 2 modules
  ],
};

export const pythonCourse: Course = {
  id: 'python-expert',
  title: 'Python Expert Mastery',
  description: 'Master Python programming from basics to advanced techniques, including OOP, data structures, and professional development practices.',
  icon: '🐍',
  color: 'from-blue-500 to-cyan-500',
  totalDays: 15,
  difficulty: 'Beginner to Advanced',
  modules: [
    {
      id: 'python-day-1',
      day: 1,
      title: 'What is Python and Your First Program',
      description: 'Introduction to Python and writing your first program',
      objectives: [
        'Understand what Python is and its uses',
        'Install Python on your system',
        'Write and run your first Python program',
      ],
      outcomes: [
        'Explain Python\'s purpose and popularity',
        'Install Python and verify installation',
        'Write a simple "Hello, World!" program',
      ],
      topics: [
        'What is Python?',
        'Why Python is popular',
        'Installing Python',
        'Running Python code',
        'Your first program: print()',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It\'s used in web development, data science, artificial intelligence, automation, and many other fields. Python\'s syntax is designed to be intuitive, making it an excellent language for beginners while remaining powerful enough for professionals.',
    },
    {
      id: 'python-day-2',
      day: 2,
      title: 'Variables, Data Types, and Basic Operations',
      description: 'Learn about variables, data types, and performing calculations',
      objectives: [
        'Understand variables and naming conventions',
        'Learn Python\'s basic data types',
        'Perform mathematical operations',
      ],
      outcomes: [
        'Create and use variables correctly',
        'Identify and work with different data types',
        'Perform calculations and string operations',
      ],
      topics: [
        'Variables and assignment',
        'Data types: strings, integers, floats, booleans',
        'Type conversion',
        'Mathematical operations',
        'String manipulation',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'Variables are containers for storing data values. Python supports several basic data types including strings (text), integers (whole numbers), floats (decimal numbers), and booleans (True/False). Understanding these types and how to work with them is fundamental to programming in Python.',
    },
    // Additional modules would follow the same pattern...
  ],
};

export const englishCourse: Course = {
  id: 'english-expert',
  title: 'English Expert Mastery',
  description: 'Master English proficiency from Grade 7 level to expert, including grammar, writing, reading comprehension, and video interview skills.',
  icon: '📖',
  color: 'from-green-500 to-emerald-500',
  totalDays: 15,
  difficulty: 'Grade 7 to Expert',
  modules: [
    {
      id: 'english-day-1',
      day: 1,
      title: 'Grammar Foundations - Sentence Structure and Parts of Speech',
      description: 'Master the fundamentals of English grammar',
      objectives: [
        'Understand sentence structure and components',
        'Learn all parts of speech',
        'Identify and correct common grammar errors',
      ],
      outcomes: [
        'Write grammatically correct sentences',
        'Identify parts of speech in any sentence',
        'Understand sentence structure and function',
      ],
      topics: [
        'Parts of speech: nouns, verbs, adjectives, adverbs, etc.',
        'Sentence structure: subjects, predicates, objects',
        'Simple, compound, and complex sentences',
        'Common grammar errors and corrections',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'English grammar is the system of rules that governs how words are arranged and used. Understanding grammar is essential for clear communication. Every sentence has a subject (who or what) and a predicate (what they\'re doing). Words are classified into parts of speech based on their function in the sentence.',
    },
    {
      id: 'english-day-2',
      day: 2,
      title: 'Punctuation and Capitalization Mastery',
      description: 'Master punctuation rules and capitalization',
      objectives: [
        'Learn all punctuation marks and their uses',
        'Understand capitalization rules',
        'Apply punctuation correctly in writing',
      ],
      outcomes: [
        'Use punctuation correctly in all contexts',
        'Apply capitalization rules consistently',
        'Improve writing clarity through proper punctuation',
      ],
      topics: [
        'Periods, commas, semicolons, colons',
        'Question marks, exclamation points, quotation marks',
        'Apostrophes, hyphens, dashes',
        'Capitalization rules',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'Punctuation marks are symbols used to clarify meaning and separate ideas in writing. Proper punctuation makes writing easier to read and understand. Capitalization rules determine which letters should be uppercase. Mastering these rules is essential for professional writing.',
    },
    // Additional modules would follow the same pattern...
  ],
};

export const outlierTipsCourse: Course = {
  id: 'outlier-tips',
  title: 'Outlier Assessment Playbook',
  description: 'Master the Outlier assessment format, scoring methodology, and proven strategies to pass on your first attempt.',
  icon: '🎯',
  color: 'from-purple-500 to-pink-500',
  totalDays: 1,
  difficulty: 'All Levels',
  modules: [
    {
      id: 'outlier-tips-1',
      day: 1,
      title: 'Understanding Outlier Assessments',
      description: 'Complete guide to Outlier assessment structure and scoring',
      objectives: [
        'Understand Outlier.ai assessment format',
        'Learn the scoring methodology',
        'Identify high-frequency test topics',
      ],
      outcomes: [
        'Explain the complete assessment structure',
        'Understand how Outlier scores your responses',
        'Know what assessors are looking for',
      ],
      topics: [
        'Assessment structure breakdown',
        'Scoring methodology (40% correctness, 25% quality, 15% efficiency, 10% completeness, 10% explanation)',
        'Multiple choice vs coding challenges vs code review',
        'Common mistakes that cause failures',
        '12 proven strategies to pass',
        'Time management techniques',
        'How to structure responses for maximum points',
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner',
      content: 'This comprehensive guide reveals exactly how Outlier.ai assessments work, what they\'re looking for, and the proven strategies used by successful candidates. Learn the scoring rubric, common pitfalls, and insider tips from assessment experts.',
    },
    {
      id: 'outlier-tips-2',
      day: 1,
      title: '12 Proven Strategies to Pass',
      description: 'Expert strategies used by successful Outlier contractors',
      objectives: [
        'Learn 12 proven passing strategies',
        'Understand assessment day preparation',
        'Master response structuring techniques',
      ],
      outcomes: [
        'Apply strategies to improve assessment performance',
        'Prepare effectively for assessment day',
        'Structure responses for maximum scoring',
      ],
      topics: [
        'Strategy 1: Understand role requirements',
        'Strategy 2: Set up environment properly',
        'Strategy 3: Review fundamentals strategically',
        'Strategy 4: Practice under time pressure',
        'Strategy 5: Read instructions carefully',
        'Strategy 6: Plan before you code',
        'Strategy 7: Write clean, readable code',
        'Strategy 8: Handle edge cases',
        'Strategy 9: Use error handling appropriately',
        'Strategy 10: Test your code thoroughly',
        'Strategy 11: Manage your time effectively',
        'Strategy 12: Write helpful comments',
      ],
      duration: '1-2 hours',
      difficulty: 'Beginner',
      content: 'These 12 strategies are used by top-performing Outlier contractors to consistently pass assessments and unlock higher-paying projects. Each strategy includes detailed explanations, real examples, and practical implementation tips.',
    },
  ],
};

export const oneDayCourse: Course = {
  id: 'one-day-course',
  title: '2-Day Outlier Crash Course',
  description: 'Quick introduction to Git, Python, and English fundamentals. Get started with the essentials in just 2 days.',
  icon: '⚡',
  color: 'from-yellow-500 to-orange-500',
  totalDays: 2,
  difficulty: 'Beginner',
  modules: [
    {
      id: 'one-day-1',
      day: 1,
      title: 'Git & Python Fundamentals',
      description: 'Quick introduction to Git version control and Python basics',
      objectives: [
        'Understand Git basics and why it matters',
        'Write your first Python program',
        'Learn essential Git and Python commands',
      ],
      outcomes: [
        'Create and manage a Git repository',
        'Write simple Python programs',
        'Understand version control basics',
      ],
      topics: [
        'What is Git and why developers use it',
        'Basic Git commands: init, add, commit, push',
        'Introduction to Python',
        'Variables and data types',
        'Writing your first program',
      ],
      duration: '4-5 hours',
      difficulty: 'Beginner',
      content: 'This crash course covers the absolute essentials of Git and Python. You\'ll learn what Git is, why it\'s important, and how to use basic commands. You\'ll also write your first Python program and understand fundamental concepts like variables and data types.',
    },
    {
      id: 'one-day-2',
      day: 2,
      title: 'English Communication Essentials',
      description: 'Master essential English skills for professional communication',
      objectives: [
        'Understand English grammar fundamentals',
        'Write clear, professional sentences',
        'Communicate effectively in writing',
      ],
      outcomes: [
        'Write grammatically correct sentences',
        'Communicate professionally in writing',
        'Understand basic punctuation and capitalization',
      ],
      topics: [
        'Parts of speech and sentence structure',
        'Common grammar errors and corrections',
        'Punctuation and capitalization',
        'Writing clear, concise sentences',
        'Professional communication tips',
      ],
      duration: '4-5 hours',
      difficulty: 'Beginner',
      content: 'Learn the essentials of English grammar and professional communication. This module covers the most important grammar rules, common mistakes, and practical tips for writing clearly and professionally.',
    },
  ],
};

export const allCourses: Course[] = [outlierTipsCourse, oneDayCourse, gitCourse, pythonCourse, englishCourse];

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id);
};

export const getCourseTier = (courseId: string): 'lead-magnet' | 'upsell' | 'core' => {
  if (courseId === 'outlier-tips') return 'lead-magnet';
  if (courseId === 'one-day-course') return 'upsell';
  return 'core';
};

export const getModuleById = (courseId: string, moduleId: string): Module | undefined => {
  const course = getCourseById(courseId);
  return course?.modules.find(module => module.id === moduleId);
};

export const getFreeCourses = (): Course[] => {
  return [outlierTipsCourse, oneDayCourse];
};

export const getPaidCourses = (): Course[] => {
  return [gitCourse, pythonCourse, englishCourse];
};
