import { Course } from './types';

// Helper function to get logo path with basePath for GitHub Pages
const getLogoPath = (filename: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/aya-ai-platform' : '';
  return `${basePath}/logos/${filename}`;
};

export interface PathwaySection {
  section: string;
  id: string;
  category: string;
  logo: string;
  courses: Course[];
}

export const pathways: PathwaySection[] = [
  {
    section: "Foundational AI Courses",
    id: "foundational-ai",
    category: "foundational-ai",
    logo: getLogoPath("deeplearning-ai.png"),
    courses: [
      {
        title: "AI For Everyone",
        image: getLogoPath("deeplearning-ai.png"),
        platform: "DeepLearning.AI (Coursera)",
        length: "4 weeks",
        summary: "Non-technical introduction to AI concepts, perfect for beginners across all industries",
        link: "https://www.coursera.org/learn/ai-for-everyone",
        difficulty: "beginner"
      },
      {
        title: "Google AI Essentials",
        image: getLogoPath("google.png"),
        platform: "Google (Coursera)",
        length: "10 hours",
        summary: "Covers prompt engineering, generative AI, and practical AI applications",
        link: "https://www.coursera.org/learn/google-ai-essentials",
        difficulty: "beginner"
      },
      {
        title: "IBM AI Foundations for Everyone",
        image: getLogoPath("ibm.png"),
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
    logo: getLogoPath("stanford.png"),
    courses: [
      {
        title: "Machine Learning Specialization",
        image: getLogoPath("deeplearning-ai.png"),
        platform: "Stanford/DeepLearning.AI (Coursera)",
        length: "3 months",
        summary: "Industry-standard course for hands-on ML development",
        link: "https://www.coursera.org/specializations/machine-learning-introduction",
        difficulty: "intermediate"
      },
      {
        title: "IBM AI Engineering Professional Certificate",
        image: getLogoPath("ibm.png"),
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
    logo: getLogoPath("google.png"),
    courses: [
      {
        title: "Google Data Analytics Professional Certificate",
        image: getLogoPath("google.png"),
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Complete pathway from beginner to job-ready data analyst",
        link: "https://www.coursera.org/professional-certificates/google-data-analytics",
        difficulty: "beginner"
      },
      {
        title: "IBM Data Science Professional Certificate",
        image: getLogoPath("ibm.png"),
        platform: "IBM (Coursera)",
        length: "11 months",
        summary: "Comprehensive program covering Python, SQL, and machine learning",
        link: "https://www.coursera.org/professional-certificates/ibm-data-science",
        difficulty: "intermediate"
      },
      {
        title: "Data Analysis with Python",
        image: getLogoPath("datacamp.png"),
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
    logo: getLogoPath("coding-black-females.png"),
    courses: [
      {
        title: "Python Programming for Beginners",
        image: getLogoPath("various.png"),
        platform: "Various Platforms",
        length: "8-12 weeks",
        summary: "Essential programming language for AI and data science",
        link: "https://www.python.org/about/gettingstarted/",
        difficulty: "beginner"
      },
      {
        title: "JavaScript for Beginners",
        image: getLogoPath("various.png"),
        platform: "Various Platforms",
        length: "6-10 weeks",
        summary: "Critical for web development and modern applications",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        difficulty: "beginner"
      },
      {
        title: "Full Stack Development Bootcamp",
        image: getLogoPath("coding-black-females.png"),
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
    logo: getLogoPath("careerfoundry.png"),
    courses: [
      {
        title: "CareerFoundry UX Design Program",
        image: getLogoPath("careerfoundry.png"),
        platform: "CareerFoundry",
        length: "5-10 months",
        summary: "Complete career-change program with job guarantee",
        link: "https://careerfoundry.com/en/courses/become-a-ux-designer/",
        difficulty: "beginner"
      },
      {
        title: "Google UX Design Certificate",
        image: getLogoPath("google.png"),
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Industry-recognized credential for UX design",
        link: "https://www.coursera.org/professional-certificates/google-ux-design",
        difficulty: "beginner"
      },
      {
        title: "UX Academy Beginner Course",
        image: getLogoPath("ux-academy.png"),
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
    logo: getLogoPath("google.png"),
    courses: [
      {
        title: "Google Cybersecurity Professional Certificate",
        image: getLogoPath("google.png"),
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Comprehensive program covering threat detection, incident response, and security tools",
        link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
        difficulty: "beginner"
      },
      {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        image: getLogoPath("ibm.png"),
        platform: "IBM (Coursera)",
        length: "8 months",
        summary: "Hands-on training in cybersecurity analysis and threat hunting",
        link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
        difficulty: "intermediate"
      },
      {
        title: "EC-Council Essentials Series",
        image: getLogoPath("ec-council.png"),
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
    logo: getLogoPath("aws.png"),
    courses: [
      {
        title: "AWS Fundamentals Specialization",
        image: getLogoPath("aws.png"),
        platform: "Amazon Web Services (Coursera)",
        length: "4 months",
        summary: "Essential cloud computing skills for modern tech careers",
        link: "https://www.coursera.org/specializations/aws-fundamentals",
        difficulty: "beginner"
      },
      {
        title: "Google Cloud Professional Certificates",
        image: getLogoPath("google-cloud.png"),
        platform: "Google Cloud (Coursera)",
        length: "3-6 months",
        summary: "Industry-recognized cloud computing credentials",
        link: "https://cloud.google.com/certification",
        difficulty: "intermediate"
      },
      {
        title: "Microsoft Azure Fundamentals",
        image: getLogoPath("microsoft.png"),
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
    logo: getLogoPath("ibm.png"),
    courses: [
      {
        title: "IBM AI Product Manager Professional Certificate",
        image: getLogoPath("ibm.png"),
        platform: "IBM (Coursera)",
        length: "6 months",
        summary: "Specialized program for AI product management",
        link: "https://www.coursera.org/professional-certificates/ibm-ai-product-manager",
        difficulty: "intermediate"
      },
      {
        title: "Essential Product Management",
        image: getLogoPath("products-that-count.png"),
        platform: "Products That Count (Free)",
        length: "Self-paced",
        summary: "Free comprehensive product management training",
        link: "https://www.productsthatcount.com/",
        difficulty: "beginner"
      },
      {
        title: "AI For Business Specialization",
        image: getLogoPath("upenn.png"),
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
    logo: getLogoPath("google.png"),
    courses: [
      {
        title: "Digital Marketing Professional Certificate",
        image: getLogoPath("google.png"),
        platform: "Google (Coursera)",
        length: "6 months",
        summary: "Essential digital marketing skills for tech careers",
        link: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
        difficulty: "beginner"
      },
      {
        title: "Project Management Professional (PMP) Prep",
        image: getLogoPath("various.png"),
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
    logo: getLogoPath("allwomen.png"),
    courses: [
      {
        title: "allWomen Academy",
        image: getLogoPath("allwomen.png"),
        platform: "allWomen Academy",
        length: "3-6 months",
        summary: "Specialized programs in Data Science, Data Analytics, UX/UI, and Product Management specifically for women",
        link: "https://allwomen.tech/",
        difficulty: "beginner"
      },
      {
        title: "Hackbright Academy",
        image: getLogoPath("hackbright.png"),
        platform: "Hackbright Academy",
        length: "12-24 weeks",
        summary: "Female-focused software engineering bootcamp",
        link: "https://hackbrightacademy.com/",
        difficulty: "intermediate"
      },
      {
        title: "Women in Tech Network Courses",
        image: getLogoPath("women-in-tech.png"),
        platform: "Women in Tech Network",
        length: "Varies",
        summary: "Various tech courses designed specifically for women's career advancement",
        link: "https://www.womenintechnetwork.com/",
        difficulty: "beginner"
      }
    ]
  }
];