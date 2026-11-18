export const profile = {
  name: 'Mohamed Abdalkreem',
  role: 'Backend Software Engineer | Competitive Programmer',
  headline: 'Backend Engineer Building Scalable and Reliable Systems.',
  intro:
    'I build thoughtful backend applications with ASP.NET Core, and bring a problem-solving mindset shaped by thousands of programming challenges.',
  about: [
    'I’m a Backend Software Engineer passionate about building efficient, scalable, and maintainable applications using C# and ASP.NET Core. I specialize in developing RESTful APIs, designing database-driven systems, implementing secure authentication, and applying software engineering principles to build reliable solutions. As a competitive programmer, I’ve solved over 3,500 algorithmic problems across platforms like Codeforces and LeetCode, achieved Specialist rank on Codeforces, and ranked 4th in an ECPC qualification round. My experience also includes integrating AI services with backend systems, optimizing database performance, and mentoring junior programmers in algorithms and data structures. I enjoy tackling challenging engineering problems, exploring how systems work internally, and continuously improving my problem-solving and development skills.',
  ],
  education: "B.Sc. Computer Science at Beni Suef University  Class of 2025",
  gpa: '3.21 / 4.0',
  english: 'B2+ · Intermediate',
  location: 'Egypt',
  email: 'abdalkreemm31@gmail.com',
  whatsapp: '201090381533',
  photoPath: `${import.meta.env.BASE_URL}my_Photo.png`,
  resumePath: `${import.meta.env.BASE_URL}resume/Mohamed_Abdalkreem_CV.pdf`,
  contactFormEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mdegklrv',
} as const

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mhammed90',
    handle: '@Mhammed90',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-abdalkreem-1b67b7225/',
    handle: 'LinkedIn Account',
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/3bdalkreem',
    handle: '3bdalkreem',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Mohammed-Abdalkreem/',
    handle: 'Mohammed-Abdalkreem',
  },
] as const

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Problem solving', href: '#problem-solving' },
  { label: 'Contact', href: '#contact' },
] as const

export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['C#', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    skills: ['ASP.NET Core', 'ASP.NET MVC'],
  },
  {
    category: 'Databases & ORMs',
    skills: ['SQL Server', 'MySQL', 'EF Core', 'Dapper'],
  },
  {
    category: 'Technologies',
    skills: ['RESTful APIs', 'JWT Authentication', 'Unit Testing', 'Clean Architecture'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'VS Code', 'Rider', 'CLion'],
  },
  {
    category: 'Languages',
    skills: ['Arabic (Native)', 'English (B2)'],
  },
] as const

export const projects = [
  {
    number: '01',
    name: 'Company Employee Management System',
    category: 'Backend · ASP.NET Core',
    description:
      'A structured employee management API focused on maintainable layers, secure access, and practical data retrieval.',
    features: [
      'Layered architecture with Repository and Service patterns',
      'JWT authentication and role-based authorization',
      'Pagination, filtering, sorting, and searching',
      'Global exception handling and logging',
    ],
    technologies: ['ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
    github: 'https://github.com/Mhammed90/CompanyEmployeeManagement',
    demo: '',
    accent: 'mint',
  },
  {
    number: '02',
    name: 'E-Commerce Web API',
    category: 'Backend · Commerce',
    description:
      'An API foundation for an online store, covering account access, shopping flows, and payment integration.',
    features: [
      'Authentication, authorization, and refresh tokens',
      'Shopping cart and wishlist workflows',
      'Checkout flow with Stripe payment integration',
      'Entity Framework Core data access',
    ],
    technologies: ['ASP.NET Core', 'EF Core', 'Stripe', 'JWT'],
    github: 'https://github.com/Mhammed90/eCommerceAPI',
    demo: '',
    accent: 'blue',
  },
  {
    number: '03',
    name: 'AI Employee Tracking System',
    category: 'Graduation project · AI integration',
    description:
      'A graduation project connecting a .NET application with Python AI services for attendance and workplace monitoring.',
    features: [
      'ASP.NET Core integration with Python AI services',
      'YOLOv8 object detection and FaceNet face recognition',
      'Flask-based AI APIs',
      'Employee attendance and workplace violation detection',
    ],
    technologies: ['ASP.NET Core', 'Python', 'YOLOv8', 'FaceNet', 'Flask'],
    github: 'https://github.com/Mhammed90/modle',
    demo: '',
    accent: 'violet',
  },
  {
    number: '04',
    name: 'Game Zone',
    category: 'Web application · ASP.NET MVC',
    description:
      'An ASP.NET MVC application for managing game data, built with clear separation between its models, views, and controllers.',
    features: [
      'CRUD workflows for game records',
      'Razor views with server-side validation',
      'Entity Framework with SQL Server',
      'Clean structure and separation of concerns',
    ],
    technologies: ['ASP.NET MVC', 'Razor', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/Mhammed90/MVC_Practice_Project',
    demo: '',
    accent: 'mint',
  },
  {
    number: '05',
    name: 'URL Shortener API',
    category: 'Backend · ASP.NET Core',
    description:
      'A RESTful API that creates short links and redirects visitors to their original URLs.',
    features: [
      'Generate and manage shortened URLs',
      'Create unique short codes and validate URLs',
      'Redirect short-link requests to their destination',
      'Entity Framework Core with SQL Server',
    ],
    technologies: ['ASP.NET Core', 'REST API', 'EF Core', 'SQL Server'],
    github: 'https://github.com/Mhammed90/UrlShortenerAPI',
    demo: '',
    accent: 'blue',
  },
] as const

export const educationEntry = {
  degree: 'Bachelor of Computer Science',
  institution: 'Beni Suef University',
  completion: '2021 – 2025',
  overallGrade: 'Very Good',
  projectGrade: 'Excellent',
  gpa: profile.gpa,
  graduationProject: {
    name: 'AI Employee Tracking System',
    href: 'https://github.com/Mhammed90/modle',
  },
} as const

export const achievements = [
  { value: '3,500+', label: 'Problems Solved', detail: 'Across programming platforms' },
  { value: '1428', label: 'Codeforces Specialist', detail: 'Maximum rating' },
  { value: '4th / 40th', label: 'ECPC Qualifications', detail: '4th on Day 7 · 40th overall in 2022' },
] as const

export const programmingPlatforms = [
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Mohammed-Abdalkreem/',
    icon: 'leetcode',
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/Mohammed_Abdalkreem',
    icon: 'codeforces',
  },
  {
    name: 'AtCoder',
    href: 'https://atcoder.jp/users/Mo_Abdalkreem_90',
    icon: 'atcoder',
  },
  {
    name: 'ICPC Profile',
    href: 'https://icpc.global/ICPCID/DEWIMF2U18EP',
    icon: 'icpc',
  },
] as const
