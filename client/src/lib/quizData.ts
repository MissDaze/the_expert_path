import { QuizQuestion } from '@/components/Quiz';

export const quizData: Record<string, QuizQuestion[]> = {
  'git-day-1': [
    {
      id: 'git-1-1',
      question: 'What is Git primarily used for?',
      options: [
        'Image editing',
        'Version control of code',
        'Database management',
        'Video processing'
      ],
      correctAnswer: 1,
      explanation: 'Git is a distributed version control system designed to track changes in source code during software development.'
    },
    {
      id: 'git-1-2',
      question: 'What is the main difference between Git and GitHub?',
      options: [
        'There is no difference',
        'Git is the version control tool, GitHub is a hosting service',
        'GitHub is older than Git',
        'Git only works with GitHub'
      ],
      correctAnswer: 1,
      explanation: 'Git is the version control software that runs locally, while GitHub is a cloud-based hosting service for Git repositories.'
    },
    {
      id: 'git-1-3',
      question: 'Which of these is a benefit of using Git?',
      options: [
        'Automatic bug fixing',
        'Tracking changes and collaboration',
        'Making code run faster',
        'Converting code to different languages'
      ],
      correctAnswer: 1,
      explanation: 'Git excels at tracking changes in code over time and enabling multiple developers to collaborate on the same project without conflicts.'
    }
  ],
  'git-day-2': [
    {
      id: 'git-2-1',
      question: 'What command is used to initialize a new Git repository?',
      options: [
        'git start',
        'git new',
        'git init',
        'git create'
      ],
      correctAnswer: 2,
      explanation: 'The "git init" command initializes a new Git repository in the current directory, creating the .git folder that contains all repository metadata.'
    },
    {
      id: 'git-2-2',
      question: 'Which configuration setting must you set before making commits?',
      options: [
        'git config --global color.ui',
        'git config --global user.name and user.email',
        'git config --global core.editor',
        'git config --global push.default'
      ],
      correctAnswer: 1,
      explanation: 'You must configure your name and email using "git config --global user.name" and "git config --global user.email" because every commit is attributed to this identity.'
    },
    {
      id: 'git-2-3',
      question: 'What does the .git directory contain?',
      options: [
        'Your source code files',
        'All repository metadata and history',
        'Configuration files for your IDE',
        'Temporary build files'
      ],
      correctAnswer: 1,
      explanation: 'The .git directory contains all the metadata, object database, and history for your Git repository. This is what makes a directory a Git repository.'
    }
  ],
  'python-day-1': [
    {
      id: 'python-1-1',
      question: 'What makes Python a popular programming language?',
      options: [
        'It only works on Windows',
        'It has a simple, readable syntax',
        'It requires no installation',
        'It can only be used for web development'
      ],
      correctAnswer: 1,
      explanation: 'Python is popular because of its simple, readable syntax that emphasizes code readability and allows developers to express concepts in fewer lines of code.'
    },
    {
      id: 'python-1-2',
      question: 'Which of these is a valid Python variable name?',
      options: [
        '2nd_variable',
        'my-variable',
        'my_variable',
        'my variable'
      ],
      correctAnswer: 2,
      explanation: 'Variable names in Python can contain letters, numbers, and underscores, but cannot start with a number or contain spaces or hyphens. "my_variable" follows these rules.'
    },
    {
      id: 'python-1-3',
      question: 'What is the correct way to print "Hello World" in Python?',
      options: [
        'echo("Hello World")',
        'console.log("Hello World")',
        'print("Hello World")',
        'printf("Hello World")'
      ],
      correctAnswer: 2,
      explanation: 'In Python, the print() function is used to output text to the console. The syntax is print("Hello World").'
    }
  ],
  'python-day-2': [
    {
      id: 'python-2-1',
      question: 'Which of these is a mutable data type in Python?',
      options: [
        'tuple',
        'string',
        'list',
        'integer'
      ],
      correctAnswer: 2,
      explanation: 'Lists are mutable, meaning their contents can be changed after creation. Tuples, strings, and integers are immutable in Python.'
    },
    {
      id: 'python-2-2',
      question: 'How do you create a comment in Python?',
      options: [
        '// This is a comment',
        '/* This is a comment */',
        '# This is a comment',
        '<!-- This is a comment -->'
      ],
      correctAnswer: 2,
      explanation: 'In Python, comments start with the # symbol. Everything after # on that line is ignored by the Python interpreter.'
    },
    {
      id: 'python-2-3',
      question: 'What is the result of 10 / 3 in Python 3?',
      options: [
        '3',
        '3.0',
        '3.33',
        '3.333333333333333'
      ],
      correctAnswer: 3,
      explanation: 'In Python 3, the / operator performs true division and returns a float. 10 / 3 returns approximately 3.333333333333333.'
    }
  ],
  'english-day-1': [
    {
      id: 'english-1-1',
      question: 'Which of these is a complete sentence?',
      options: [
        'Running quickly',
        'The dog barked loudly',
        'When she arrived',
        'Because it was late'
      ],
      correctAnswer: 1,
      explanation: 'A complete sentence needs both a subject and a predicate. "The dog barked loudly" has a subject (the dog) and a predicate (barked loudly), making it a complete sentence.'
    },
    {
      id: 'english-1-2',
      question: 'What part of speech is the word "quickly" in "She ran quickly"?',
      options: [
        'Adjective',
        'Verb',
        'Adverb',
        'Noun'
      ],
      correctAnswer: 2,
      explanation: '"Quickly" is an adverb because it modifies the verb "ran," describing how she ran. Adverbs often end in -ly and modify verbs, adjectives, or other adverbs.'
    },
    {
      id: 'english-1-3',
      question: 'Which sentence uses correct subject-verb agreement?',
      options: [
        'The team are winning',
        'The dogs runs fast',
        'She walk to school',
        'They play soccer'
      ],
      correctAnswer: 3,
      explanation: '"They play soccer" correctly matches the plural subject "they" with the plural verb form "play". The other options have subject-verb agreement errors.'
    }
  ],
  'english-day-2': [
    {
      id: 'english-2-1',
      question: 'Which punctuation mark is used to show possession?',
      options: [
        'Comma',
        'Apostrophe',
        'Semicolon',
        'Hyphen'
      ],
      correctAnswer: 1,
      explanation: 'The apostrophe (\'s) is used to show possession, as in "Sarah\'s book" or "the dog\'s collar".'
    },
    {
      id: 'english-2-2',
      question: 'Which sentence correctly uses a comma?',
      options: [
        'I went to the store and bought milk.',
        'I went to the store, and bought milk.',
        'After dinner, we watched a movie.',
        'We watched, a movie after dinner.'
      ],
      correctAnswer: 2,
      explanation: 'A comma should be used after an introductory phrase. "After dinner, we watched a movie" correctly places a comma after the introductory phrase "After dinner".'
    },
    {
      id: 'english-2-3',
      question: 'What is the correct plural form of "child"?',
      options: [
        'childs',
        'childes',
        'children',
        'childrens'
      ],
      correctAnswer: 2,
      explanation: '"Children" is the correct irregular plural form of "child". Not all plurals follow the standard -s or -es pattern.'
    }
  ]
};
