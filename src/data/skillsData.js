import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Terminal,
  Server,
  Cloud,
  Wrench,
  GitBranch,
  FolderGit2,
  Workflow,
  Boxes,
  Network,
  BarChart2,
  Table,
  HardDrive,
  Flame,
  Binary,
} from 'lucide-react'

export const skills = [
  // Programming
  { name: 'Java', category: 'Programming', icon: Code2 },
  { name: 'Python', category: 'Programming', icon: Terminal },
  { name: 'JavaScript', category: 'Programming', icon: Code2 },
  { name: 'C', category: 'Programming', icon: Binary },
  { name: 'Object-Oriented Programming (OOP)', category: 'Programming', icon: Cpu },

  // Web Technologies
  { name: 'HTML', category: 'Web Technologies', icon: Layout },
  { name: 'CSS', category: 'Web Technologies', icon: Layout },
  { name: 'React.js', category: 'Web Technologies', icon: Globe },
  { name: 'Node.js', category: 'Web Technologies', icon: Server },
  { name: 'Express.js', category: 'Web Technologies', icon: Server },
  { name: 'Tailwind CSS', category: 'Web Technologies', icon: Layers },
  { name: 'RESTful APIs', category: 'Web Technologies', icon: Network },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', icon: Cloud },
  { name: 'Docker', category: 'Cloud & DevOps', icon: Boxes },
  { name: 'Kubernetes', category: 'Cloud & DevOps', icon: Boxes },
  { name: 'Jenkins', category: 'Cloud & DevOps', icon: Workflow },
  { name: 'GitHub Actions', category: 'Cloud & DevOps', icon: Workflow },

  // Python Frameworks & Libraries
  { name: 'NumPy', category: 'Python Frameworks & Libraries', icon: Cpu },
  { name: 'Pandas', category: 'Python Frameworks & Libraries', icon: Table },
  { name: 'Matplotlib', category: 'Python Frameworks & Libraries', icon: BarChart2 },
  { name: 'Scikit-Learn', category: 'Python Frameworks & Libraries', icon: Cpu },

  // Databases
  { name: 'MongoDB', category: 'Databases', icon: Database },
  { name: 'MySQL', category: 'Databases', icon: Database },
  { name: 'DynamoDB', category: 'Databases', icon: HardDrive },
  { name: 'SQLite', category: 'Databases', icon: Database },
  { name: 'Oracle 12c', category: 'Databases', icon: HardDrive },

  // Tools & Version Control
  { name: 'Git', category: 'Tools & Version Control', icon: GitBranch },
  { name: 'GitHub', category: 'Tools & Version Control', icon: FolderGit2 },
  { name: 'Postman', category: 'Tools & Version Control', icon: Wrench },
  { name: 'Jira', category: 'Tools & Version Control', icon: Layers },
  { name: 'Bruno', category: 'Tools & Version Control', icon: Wrench },
  { name: 'DataGrip', category: 'Tools & Version Control', icon: Database },
  { name: 'Firebase', category: 'Tools & Version Control', icon: Flame },
]

export const skillCategories = [
  'all',
  'Programming',
  'Web Technologies',
  'Cloud & DevOps',
  'Python Frameworks & Libraries',
  'Databases',
  'Tools & Version Control',
]

export default skills
