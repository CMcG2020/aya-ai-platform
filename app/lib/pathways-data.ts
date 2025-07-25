import { Course } from './types';

export interface PathwaySection {
  section: string;
  id: string;
  category: string;
  courses: Course[];
}

export const pathways: PathwaySection[] = [
  {
    section: "Foundational AI Courses",
    id: "foundational-ai",
    category: "foundational-ai",
    courses: [
      {
        title: "AI For Everyone",
        image: "/images/ai-for-everyone.jpg",
        platform: "DeepLearning.AI (Coursera)",
        length: "4 weeks",
        summary: "Non-technical introduction to AI concepts, perfect for beginners across all industries",
        link: "https://www.coursera.org/learn/ai-for-everyone",
        difficulty: "beginner"
      },
      {
        title: "Google AI Essentials",
        image: "/images/google-ai-essentials.jpg",
        platform: "Google (Coursera)",
        length: "10 hours",
        summary: "Covers prompt engineering, generative AI, and practical AI applications",
        link: "https://www.coursera.org/learn/google-ai-essentials",
        difficulty: "beginner"
      },
      {
        title: "IBM AI Foundations for Everyone",
        image: "/images/ibm-ai-foundations.jpg",
        platform: "IBM (Coursera)",
        length: "3 months",
        summary: "Comprehensive specialization covering AI fundamentals and practical applications",
        link: "https://www.coursera.org/specializations/ai-foundations-for-everyone",
        difficulty: "beginner"
      }
    ]
  },
  {
    section: "Advanced AI & ML",
    id: "advanced-ai-ml",
    category: "advanced-ai-ml",
    courses: [
      {
        title: "Machine Learning Specialization",
        image: "/images/ml-specialization.jpg",
        platform: "Stanford/DeepLearning.AI (Coursera)",
        length: "3 months",
        summary: "Industry-standard course for hands-on ML development",
        link: "https://www.coursera.org/specializations/machine-learning-introduction",
        difficulty: "intermediate"
      },
      {
        title: "IBM AI Engineering Professional Certificate",
        image: "/images/ibm-ai-engineering.jpg",
        platform: "IBM (Coursera)",
        length: "6 months",
        summary: "Advanced program covering deep learning, PyTorch, and TensorFlow",
        link: "https://www.coursera.org/professional-certificates/ai-engineer",
        difficulty: "advanced"
      }
    ]
  },
  {
    section: "Data Science & Analytics",
    id: "data-science-analytics",
    category: "data-science-analytics",
    courses: [
      {
        title: "Google Data Analytics Professional Certificate",
        image: "/images/google-data-analytics.jpg",
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Complete pathway from beginner to job-ready data analyst",
        link: "https://www.coursera.org/professional-certificates/google-data-analytics",
        difficulty: "beginner"
      },
      {
        title: "IBM Data Science Professional Certificate",
        image: "/images/ibm-data-science.jpg",
        platform: "IBM (Coursera)",
        length: "11 months",
        summary: "Comprehensive program covering Python, SQL, and machine learning",
        link: "https://www.coursera.org/professional-certificates/ibm-data-science",
        difficulty: "intermediate"
      },
      {
        title: "Data Analysis with Python",
        image: "/images/datacamp-python.jpg",
        platform: "DataCamp",
        length: "4 hours",
        summary: "Hands-on approach to data analysis and visualization",
        link: "https://www.datacamp.com/courses/data-analysis-with-python",
        difficulty: "beginner"
      }
    ]
  },
  {
    section: "Programming & Software Development",
    id: "programming-development",
    category: "programming-development",
    courses: [
      {
        title: "Python Programming for Beginners",
        image: "/images/python-beginners.jpg",
        platform: "Various Platforms",
        length: "8-12 weeks",
        summary: "Essential programming language for AI and data science",
        link: "https://www.python.org/about/gettingstarted/",
        difficulty: "beginner"
      },
      {
        title: "JavaScript for Beginners",
        image: "/images/javascript-beginners.jpg",
        platform: "Various Platforms",
        length: "6-10 weeks",
        summary: "Critical for web development and modern applications",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        difficulty: "beginner"
      },
      {
        title: "Full Stack Development Bootcamp",
        image: "/images/coding-black-females.jpg",
        platform: "Coding Black Females",
        length: "12-24 weeks",
        summary: "Comprehensive program designed specifically for Black women in tech",
        link: "https://codingblackfemales.com/",
        difficulty: "intermediate"
      }
    ]
  },
  {
    section: "UX/UI Design",
    id: "ux-ui-design",
    category: "ux-ui-design",
    courses: [
      {
        title: "CareerFoundry UX Design Program",
        image: "/images/careerfoundry-ux.jpg",
        platform: "CareerFoundry",
        length: "5-10 months",
        summary: "Complete career-change program with job guarantee",
        link: "https://careerfoundry.com/en/courses/become-a-ux-designer/",
        difficulty: "beginner"
      },
      {
        title: "Google UX Design Certificate",
        image: "/images/google-ux-design.jpg",
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Industry-recognized credential for UX design",
        link: "https://www.coursera.org/professional-certificates/google-ux-design",
        difficulty: "beginner"
      },
      {
        title: "UX Academy Beginner Course",
        image: "/images/ux-academy.jpg",
        platform: "UX Academy",
        length: "8 weeks",
        summary: "Live online classes with small class sizes",
        link: "https://uxacademy.com/",
        difficulty: "beginner"
      }
    ]
  },
  {
    section: "Cybersecurity",
    id: "cybersecurity",
    category: "cybersecurity",
    courses: [
      {
        title: "Google Cybersecurity Professional Certificate",
        image: "/images/google-cybersecurity.jpg",
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Comprehensive program covering threat detection, incident response, and security tools",
        link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
        difficulty: "beginner"
      },
      {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        image: "/images/ibm-cybersecurity.jpg",
        platform: "IBM (Coursera)",
        length: "8 months",
        summary: "Hands-on training in cybersecurity analysis and threat hunting",
        link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
        difficulty: "intermediate"
      },
      {
        title: "EC-Council Essentials Series",
        image: "/images/ec-council.jpg",
        platform: "EC-Council (Free)",
        length: "Self-paced",
        summary: "Free courses in ethical hacking, network defense, and digital forensics",
        link: "https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/",
        difficulty: "beginner"
      }
    ]
  },
  {
    section: "Cloud Computing & DevOps",
    id: "cloud-devops",
    category: "cloud-devops",
    courses: [
      {
        title: "AWS Fundamentals Specialization",
        image: "/images/aws-fundamentals.jpg",
        platform: "Amazon Web Services (Coursera)",
        length: "4 months",
        summary: "Essential cloud computing skills for modern tech careers",
        link: "https://www.coursera.org/specializations/aws-fundamentals",
        difficulty: "beginner"
      },
      {
        title: "Google Cloud Professional Certificates",
        image: "/images/google-cloud.jpg",
        platform: "Google Cloud (Coursera)",
        length: "3-6 months",
        summary: "Industry-recognized cloud computing credentials",
        link: "https://cloud.google.com/certification",
        difficulty: "intermediate"
      },
      {
        title: "Microsoft Azure Fundamentals",
        image: "/images/azure-fundamentals.jpg",
        platform: "Microsoft (Microsoft Learn)",
        length: "Self-paced",
        summary: "Microsoft's cloud platform essentials",
        link: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/",
        difficulty: "beginner"
      }
    ]
  },
  {
    section: "Product Management & Business",
    id: "product-management",
    category: "product-management",
    courses: [
      {
        title: "IBM AI Product Manager Professional Certificate",
        image: "/images/ibm-ai-product.jpg",
        platform: "IBM (Coursera)",
        length: "6 months",
        summary: "Specialized program for AI product management",
        link: "https://www.coursera.org/professional-certificates/ibm-ai-product-manager",
        difficulty: "intermediate"
      },
      {
        title: "Essential Product Management",
        image: "/images/products-that-count.jpg",
        platform: "Products That Count (Free)",
        length: "Self-paced",
        summary: "Free comprehensive product management training",
        link: "https://www.productsthatcount.com/",
        difficulty: "beginner"
      },
      {
        title: "AI For Business Specialization",
        image: "/images/ai-business-upenn.jpg",
        platform: "University of Pennsylvania (Coursera)",
        length: "4 months",
        summary: "Strategic AI implementation for business leaders",
        link: "https://www.coursera.org/specializations/ai-for-business-wharton",
        difficulty: "intermediate"
      }
    ]
  },
  {
    section: "Specialized Tech Skills",
    id: "specialized-tech",
    category: "specialized-tech",
    courses: [
      {
        title: "Digital Marketing Professional Certificate",
        image: "/images/google-digital-marketing.jpg",
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Essential digital marketing skills for tech careers",
        link: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
        difficulty: "beginner"
      },
      {
        title: "Project Management Professional (PMP) Prep",
        image: "/images/pmp-prep.jpg",
        platform: "Various Platforms",
        length: "3-6 months",
        summary: "Critical project management skills for tech leadership",
        link: "https://www.pmi.org/certifications/project-management-pmp",
        difficulty: "intermediate"
      }
    ]
  },
  {
    section: "Women-Focused Tech Programs",
    id: "women-focused",
    category: "women-focused",
    courses: [
      {
        title: "allWomen Academy",
        image: "/images/allwomen-academy.jpg",
        platform: "allWomen Academy",
        length: "3-6 months",
        summary: "Specialized programs in Data Science, Data Analytics, UX/UI, and Product Management specifically for women",
        link: "https://allwomen.tech/",
        difficulty: "beginner"
      },
      {
        title: "Hackbright Academy",
        image: "/images/hackbright.jpg",
        platform: "Hackbright Academy",
        length: "12-24 weeks",
        summary: "Female-focused software engineering bootcamp",
        link: "https://hackbrightacademy.com/",
        difficulty: "intermediate"
      },
      {
        title: "Women in Tech Network Courses",
        image: "/images/women-in-tech.jpg",
        platform: "Women in Tech Network",
        length: "Varies",
        summary: "Various tech courses designed specifically for women's career advancement",
        link: "https://www.womenintechnetwork.com/",
        difficulty: "beginner"
      }
    ]
  }
];
