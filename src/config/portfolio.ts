
export const portfolioConfig = {
  personal: {
    name: "Vansh Singh",
    title: "Aspiring Data analytics and Web Developer",
    tagline: "Passionate about building digital solutions",
    email: "vanshofficial26h6@gmail.com",
    phone: "+91-9368008551",
    location: "India",
    photo: "src/assect/Profile.jpg",
    about: "Detail-oriented and aspiring Data Analyst with strong communication and interpersonal skills. Experienced in Python, SQL, Power BI, and MS Excel for data cleaning, visualization, and statistical modeling. Skilled at resolving issues, ensuring compliance with data quality standards, and driving continuous improvement. Proven ability to deliver actionable insights, track business metrics, and work collaboratively with cross-functional teams to enhance customer service and product development.",
    resumeUrl: "https://drive.google.com/file/d/10CquRosKplCziT31Pb7DZ1-A_SUzltpZ/view?usp=drive_link",
    social: {
      github: "https://github.com/vansh1056",
      linkedin: "https://www.linkedin.com/in/vansh-singh-9b687a285/",
      email: "mailto:vanshofficial26h6@gmail.com"
    }
  },

  skills: {
    Languages: [
      { name: "Python"},
      { name: "C"},
      { name: "Java"},
      { name: "SQL"},
      { name: "HTML"},
      { name: "CSS"},
      { name: "JavaScript"}
    ],
    Frameworks: [
      { name: "Pandas"},
      { name: "NumPy"},
      { name: "React"},
      { name: "Bootstrap"}
    ],
    Technologies: [
      { name: "Git"},
      { name: "GitHub"},
      { name: "VS Code"},
      { name: "Power BI"},
      { name: "Excel"},
      { name: "Pycharm"},
      { name: "Jupyter Notebook"}
    ],
    Developer: [
      { name: "API Intergration"},
      { name: "Microsoft  365"},
    ]
  },

  projects: [
    {
      id: 1,
      title: " E-Commerce Customer Insights Dashboard",
      description: "Developed a single-page interactive dashboard, using data visualisation and analysing 3,900 customers & $233K revenue using KPI cards, slicers, and advanced visuals",
      image: "https://tse3.mm.bing.net/th/id/OIP.B-VDNhe7pu7biddFutYfBgHaEK?cb=12&w=553&h=311&rs=1&pid=ImgDetMain&o=7&rm=3",
      tags: ["Power BI", "DAX", "Data Modelling"],
      demoUrl: "https://app.powerbi.com/groups/me/reports/fa4e723c-f1ea-4214-9817-7acfe60c0480/4a2681ee2e028c6c90d0?ctid=0c2c5eb2-7477-4593-ac08-f1de3be027d2&experience=power-bi",
      codeUrl: "https://github.com/vansh1056/E-Commerce_Customer_Insights_Dashboard"
    },
    {
      id: 2,
      title: " Fraud Detection Model",
      description: " Built and deployed a Random Forest model on 6M+ transactions, achieving 92% AUC-ROC and reducing false positives by 18%.",
      image: "https://tse4.mm.bing.net/th/id/OIP.HRO2QJ9obiIBJZ-aJCw6HwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      tags: ["Python","Pandas", "NumPy", "Matplotlib", "Jupyter Notebook" ],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Displays real-time weather and wind speed for any city using weather API integration. Clean UI with dynamic backgrounds.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["JavaScript", "API", "HTML", "CSS"],
      demoUrl: "https://weather-0site.netlify.app/",
      codeUrl: "https://github.com/vansh1056/Weather_site"
    },
    {
      id: 4,
      title: "Dino_game",
      description: "A responsive game, based on jump over the challenges",
      image: "https://tse2.mm.bing.net/th/id/OIP.-dtySCyubryJPHwHT052cgHaD_?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      tags: ["HTML", "CSS", "Java Scrit", "Responsive Design"],
      demoUrl: "https://dinogame26.netlify.app/",
      codeUrl: "https://github.com/vansh1056/Dino_game"
    },
  ],

  education: [
    {
      id: 1,
      institution: " Kendriya Vidyalaya Dogra Lines, CBSE",
      degree: " Intermediate",
      duration: "2021 - 2022",
    },
    {
      id: 2,
      institution: "KIET Group of Institutions",
      degree: "B-Tech Computer Science Engineering",
      duration: "2022 - 2026",
      description: "Focused on software development, algorithms, and modern web technologies."
    }
  ],

  experience: [
    {
      id: 1,
      role: " Data & Open Source Contributor",
      company: "Microsoft Learning Student Ambassador ",
      duration: "Sep 2024 - Nov 2024",
      description: "Developed a weather website project, implementing responsive design and API integration. Gained hands-on experience with modern frontend frameworks."
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Microsoft Learning Student Ambassador (Advanced HTML, CSS & JavaScript)",
      issuer: "Microsoft",
      year: "2024"
    },
    {
      id: 2,
      title: "Excel Essential Training (Microsoft 365) ",
      issuer: "LinkedIn Learning",
      year: "2025"
    },
    {
      id: 3,
      title: " Tata Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Forage",
      year: "2025"
    },
    {
      id: 4,
      title: "Power BI for Data Analysts by Microsoft Press",
      issuer: "Microsoft",
      year: "2025"
    }
  ],

};
