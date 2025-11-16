import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { GithubIcon } from './components/icons/GithubIcon';
import { MailIcon } from './components/icons/MailIcon';
import { ExternalLinkIcon } from './components/icons/ExternalLinkIcon';
import { MoonIcon } from './components/icons/MoonIcon';
import { SunIcon } from './components/icons/SunIcon';
import { ChevronUpIcon } from './components/icons/ChevronUpIcon';

const experienceData = [
  {
    role: "Senior Consultant Software Developer",
    company: "KPMG Australia",
    duration: "Mar 2024 - Present",
    description: [
      "Full Stack Development: Proficient in front-end (React, Angular, Vue) and back-end (Node.js, Java, .NET, Python) technologies.",
      "Cloud & DevOps: Experience with Azure, GCP, Kubernetes, Docker, and CI/CD pipeline automation.",
      "DevSecOps & Security: Integrating security into every phase of the development lifecycle.",
      "Agile & Engineering Best Practices: Driving efficient SDLC with Agile methodologies and modern engineering practices.",
      "Scalability & Performance: Building optimized, high-performing systems for enterprise-grade applications.",
    ],
  },
  {
    role: "Software Application Developer",
    company: "Vodafone Fiji",
    duration: "Mar 2022 - Mar 2024",
    description: [
      "Collaborated with the team to ensure applications align with the organization's goals and customer needs.",
      "Built and maintained both web and mobile applications for our organization.",
      "Improved the overall application development process and continuously found ways to advance our apps.",
      "Found solutions to security threats, viruses, or errors that might hinder the performance of applications.",
      "Remained current on technology trends to keep our software as innovative as possible.",
      "Proficient in web development frameworks, such as React and Node.js.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Vodafone Fiji",
    duration: "Dec 2021 - Mar 2022",
    description: [
      "Developing applications (coding, programming).",
      "Debugging and testing code.",
      "Documenting and testing new software applications.",
      "Researching, investigating, and fixing a wide range of technical issues.",
      "Collaborating with senior leaders and approaching problems to create solutions.",
    ],
  },
  {
    role: "Pass Mentor",
    company: "The University of the South Pacific",
    duration: "Aug 2021 - Mar 2022",
    description: "Mentoring students in their academic journey, providing guidance and support for their coursework and projects.",
  },
];

const projectsData = [
  {
    name: "PDF Automation",
    description: "Streamlined the generation, management, and distribution of financial documents such as receipts, account statements, and invoices for Vodafone Fiji's Finance Team. Automated the creation of standardized PDF documents, reducing manual effort and errors while ensuring accurate and timely documentation.",
    tags: ["JavaScript"],
    githubUrl: "#",
    liveUrl: null,
    duration: "Apr 2023 - Jun 2023",
  },
  {
    name: "SLS-Web-Project",
    description: "Implemented a web-based application for the Student Learning Support (SLS) department at the University of the South Pacific. The system automates lesson plan approvals, student log management, and timesheet generation for the PASS programme, addressing challenges faced by SLS Specialists in managing operations for over 30 courses.",
    tags: ["JavaScript", "HTML", "CSS", "Node.js"],
    githubUrl: "#",
    liveUrl: null,
    duration: "Apr 2022 - Jul 2022",
  },
  {
    name: "DDoS Threat Mitigation & Prevention",
    description: "IEP Project focused on implementing security measures to prevent and mitigate DDoS attacks. Developed comprehensive threat analysis and prevention strategies as part of university coursework.",
    tags: ["Project Management", "JavaScript", "Network Security"],
    githubUrl: "#",
    liveUrl: null,
    duration: "Nov 2021 - Dec 2021",
  },
  {
    name: "Velocity - E-commerce Flutter App",
    description: "Developed a mobile e-commerce application using Flutter framework. A comprehensive solution for online shopping with modern UI/UX design patterns and cross-platform compatibility.",
    tags: ["Dart", "Flutter", "Mobile Development"],
    githubUrl: "#",
    liveUrl: null,
    duration: "Mar 2021 - Aug 2021",
  },
  {
    name: "Mastercard Integration with M-PAiSA",
    description: "Integrated Mastercard payment services into M-PAiSA, Vodafone Fiji's groundbreaking wallet application. Successfully launched the service enabling Fijians to conveniently make purchases for products and services globally, expanding financial capabilities across the nation.",
    tags: ["Node.js", "React Native", "Payment Gateway", "API Integration"],
    githubUrl: "#",
    liveUrl: null,
    duration: "2022 - 2023",
  },
  {
    name: "Personal Portfolio Website",
    description: "The website you're currently viewing. A modern, responsive, single-page portfolio built with React and styled with Tailwind CSS to showcase my skills and experience.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: null,
  },
];

const educationData = [
  {
    institution: "The University of the South Pacific",
    degree: "Bachelor of Software engineering, Computer Science",
    duration: "2019 - 2022",
  },
];

const certificationsData = [
  { name: "Chat with Your Data Using ChatGPT", issuer: "LinkedIn", date: "Sep 2025", skills: ["Chatbot Development", "Natural Language Processing (NLP)"] },
  { name: "Learning Playwright", issuer: "LinkedIn", date: "Jun 2025", skills: ["Test Automation Tools", "Automation"] },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Jun 2025", credentialId: "3A757AFE25EC08D3" },
  { name: "Building Responsive Websites with Canva", issuer: "LinkedIn", date: "May 2025", skills: ["Artificial Intelligence for Design", "Responsive Web Design"] },
  { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc", date: "May 2025", skills: ["Containerization"] },
  { name: "Docker: Your First Project", issuer: "LinkedIn", date: "May 2025", skills: ["Docker Products"] },
  { name: "KPMG Workbench - Developer Knowledge", issuer: "KPMG Australia", date: "May 2025" },
  { name: "Learning Docker", issuer: "LinkedIn", date: "May 2025", skills: ["Docker Products"] },
  { name: "Learning Docker Compose", issuer: "LinkedIn", date: "May 2025", skills: ["Docker Products"] },
  { name: "Career Essentials in GitHub Professional Certificate", issuer: "GitHub", date: "Apr 2025", skills: ["GitHub"] },
  { name: "Digital Risk Foundations - FUNDAMENTALS", issuer: "KPMG Australia", date: "Apr 2025" },
  { name: "Digital and Data Foundations - Cloud, Technology Platforms and Cyber Security", issuer: "KPMG Australia", date: "Apr 2025" },
  { name: "Digital and Data Foundations - Disruptive technologies", issuer: "KPMG", date: "Apr 2025" },
  { name: "KPMG TOM Foundations", issuer: "KPMG Australia", date: "Apr 2025" },
  { name: "Powered Enterprise Foundations", issuer: "KPMG Australia", date: "Apr 2025", expires: "Apr 2027" },
  { name: "Practical GitHub Actions", issuer: "LinkedIn", date: "Apr 2025", skills: ["GitHub"] },
  { name: "Practical GitHub Code Search", issuer: "LinkedIn", date: "Apr 2025", skills: ["GitHub"] },
  { name: "Practical GitHub Copilot", issuer: "LinkedIn", date: "Apr 2025", skills: ["GitHub Copilot", "GitHub"] },
  { name: "Practical GitHub Project Management and Collaboration", issuer: "LinkedIn", date: "Apr 2025", skills: ["Project Management", "GitHub"] },
  { name: "Python Foundations", issuer: "KPMG Australia", date: "Apr 2025" },
  { name: "Trusted AI Foundations", issuer: "KPMG", date: "Apr 2025" },
  { name: "Agile Project Management Foundation", issuer: "Pluralsight", date: "Mar 2025", credentialId: "saurab-nand", skills: ["Agile Methodologies", "Software Design"] },
  { name: "Creating AI Applications with Python and GitHub Models", issuer: "LinkedIn", date: "Mar 2025", skills: ["Python (Programming Language)", "Artificial Intelligence (AI)"] },
  { name: "Creating Advanced AI Applications with Python, APIs, and GitHub Models", issuer: "LinkedIn", date: "Mar 2025", skills: ["API Development", "AI Software Development"] },
  { name: "DevOps Foundations", issuer: "LinkedIn", date: "Mar 2025", skills: ["DevOps"] },
  { name: "DevOps Foundations: Continuous Delivery/Continuous Integration", issuer: "LinkedIn", date: "Mar 2025", skills: ["Continuous Integration and Continuous Delivery (CI/CD)"] },
  { name: "DevOps Foundations: Infrastructure as Code", issuer: "LinkedIn", date: "Mar 2025", skills: ["Infrastructure as code (IaC)", "DevOps"] },
  { name: "DevOps Professional Certificate by PagerDuty and LinkedIn", issuer: "PagerDuty", date: "Mar 2025", skills: ["Infrastructure as code (IaC)", "DevOps"] },
  { name: "Digital and Data Foundations - Agile and Software Development", issuer: "KPMG Australia", date: "Mar 2025" },
  { name: "Digital and Data Foundations - Artificial intelligence and automation", issuer: "KPMG Australia", date: "Mar 2025" },
  { name: "Global Mindset", issuer: "RW3 CultureWizard", date: "Mar 2025", credentialId: "saurab-nand" },
  { name: "Introduction to Prompt Engineering for Generative AI (2023)", issuer: "LinkedIn", date: "Mar 2025", skills: ["Prompt Engineering", "Generative AI"] },
  { name: "Prompt Engineering with KymChat", issuer: "KPMG Australia", date: "Mar 2025" },
  { name: "Prompt Engineering: How to Talk to the AIs", issuer: "LinkedIn", date: "Mar 2025", skills: ["Large Language Models (LLM)", "Generative AI"] },
  { name: "Trusted AI Foundations", issuer: "KPMG Australia", date: "Mar 2025" },
  { name: "8 Git Commands You Should Know (2022)", issuer: "LinkedIn", date: "Dec 2024", skills: ["Git"] },
  { name: "AI Pair Programming with GitHub Copilot X", issuer: "LinkedIn", date: "Dec 2024", skills: ["Pair Programming", "GitHub Copilot"] },
  { name: "Ethical Hacking: Introduction to Ethical Hacking", issuer: "LinkedIn", date: "Dec 2024", skills: ["Ethical Hacking"] },
  { name: "Prompt Engineering and AI Agents with ChatGPT", issuer: "LinkedIn", date: "Nov 2024", skills: ["Prompt Engineering", "ChatGPT"] },
  { name: "Azure Data Fundamentals (DP-900) Cert Prep: 1 Core Data Concepts", issuer: "LinkedIn", date: "Sep 2024", skills: ["Microsoft Azure", "Data Analysis"] },
  { name: "AWS Partner: AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)", date: "May 2023", credentialId: "Saurab Nand" },
];

const skills = [
  "Java", "C++", "Python", "JavaScript", "React", "Angular", "Vue", "Node.js", ".NET", "SQL",
  "Azure", "GCP", "AWS", "Docker", "Kubernetes", "CI/CD",
  "DevSecOps", "Agile Project Management", "Software Design", "Azure Data Factory",
  "Git", "Bitbucket", "SQL Server"
];

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('experience');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // Track active section with intersection observer
    const observers: IntersectionObserver[] = [];
    const sections = ['experience', 'projects', 'education', 'skills', 'certifications'];

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          { rootMargin: '-50% 0px -50% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    }

    // Track scroll position for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-slate-900 dark:text-slate-300 transition-colors">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:right-6 z-50 p-3 rounded-full bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-600 transition-all shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}

      <div className="lg:flex lg:justify-between lg:gap-16">
        {/* Left Column (Sticky Header) */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">
              <a href="/">Saurab Nand</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 dark:text-slate-200 sm:text-xl">
              Senior Consultant | Full Stack Development | Agile | Cloud | DevOps
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400">
              As a Senior Consultant Software Developer, I leverage my expertise in full-stack development, cloud technologies, DevOps, and DevSecOps to deliver end-to-end solutions that drive business innovation.
            </p>

            <nav className="nav hidden lg:block" aria-label="In-page navigation">
              <ul className="mt-16 w-max">
                <li><a className={`group flex items-center py-3 ${activeSection === 'experience' ? 'active' : ''}`} href="#experience"><span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === 'experience' ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'} group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-800 dark:group-focus-visible:bg-slate-200`}></span><span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === 'experience' ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-500'} group-hover:text-slate-800 dark:group-hover:text-slate-200 group-focus-visible:text-slate-800 dark:group-focus-visible:text-slate-200`}>Experience</span></a></li>
                <li><a className={`group flex items-center py-3 ${activeSection === 'projects' ? 'active' : ''}`} href="#projects"><span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === 'projects' ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'} group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-800 dark:group-focus-visible:bg-slate-200`}></span><span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === 'projects' ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-500'} group-hover:text-slate-800 dark:group-hover:text-slate-200 group-focus-visible:text-slate-800 dark:group-focus-visible:text-slate-200`}>Projects</span></a></li>
                <li><a className={`group flex items-center py-3 ${activeSection === 'education' ? 'active' : ''}`} href="#education"><span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === 'education' ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'} group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-800 dark:group-focus-visible:bg-slate-200`}></span><span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === 'education' ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-500'} group-hover:text-slate-800 dark:group-hover:text-slate-200 group-focus-visible:text-slate-800 dark:group-focus-visible:text-slate-200`}>Education</span></a></li>
                <li><a className={`group flex items-center py-3 ${activeSection === 'skills' ? 'active' : ''}`} href="#skills"><span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === 'skills' ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'} group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-800 dark:group-focus-visible:bg-slate-200`}></span><span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === 'skills' ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-500'} group-hover:text-slate-800 dark:group-hover:text-slate-200 group-focus-visible:text-slate-800 dark:group-focus-visible:text-slate-200`}>Skills</span></a></li>
                <li><a className={`group flex items-center py-3 ${activeSection === 'certifications' ? 'active' : ''}`} href="#certifications"><span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${activeSection === 'certifications' ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'} group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-800 dark:group-focus-visible:bg-slate-200`}></span><span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === 'certifications' ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-500'} group-hover:text-slate-800 dark:group-hover:text-slate-200 group-focus-visible:text-slate-800 dark:group-focus-visible:text-slate-200`}>Certifications</span></a></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/saurab-nand-889501205/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded" aria-label="Visit LinkedIn profile" title="LinkedIn">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="https://github.com/saurab-nand" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded" aria-label="Visit GitHub profile" title="GitHub">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="mailto:snand8@kpmg.com.au" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors" aria-label="Email">
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </header>

        {/* Right Column (Scrollable Content) */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <Section id="experience" title="Experience">
            <div className="max-h-[600px] overflow-y-auto pr-2">
              <ol className="group/list">
                {experienceData.map((exp, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-500 sm:col-span-2">{exp.duration}</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                          <div>
                            <span className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{exp.role} · <span className="inline-block">{exp.company}</span></span>
                            </span>
                          </div>
                        </h3>
                        {Array.isArray(exp.description) ? (
                          <ul className="mt-2 list-disc list-inside space-y-1 text-sm leading-normal text-slate-600 dark:text-slate-400">
                            {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="max-h-[600px] overflow-y-auto pr-2">
              <ol className="group/list">
                {projectsData.map((project, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      {project.duration && (
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-500 sm:col-span-2">{project.duration}</header>
                      )}
                      <div className={`z-10 ${project.duration ? 'sm:col-span-6' : 'sm:col-span-8'}`}>
                        <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                          <a className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 focus-visible:text-teal-600 dark:focus-visible:text-teal-300 group/link text-base" href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer noopener" aria-label={project.name}>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.name}
                              <span className="inline-block">
                                <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{project.description}</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {project.tags.map(tag => (
                            <li key={tag} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">{tag}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section id="education" title="Education">
            <ol className="group/list">
              {educationData.map((edu, index) => (
                <li key={index} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-500 sm:col-span-2">{edu.duration}</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                        <span className="inline-block font-medium text-slate-800 dark:text-slate-200 group/link text-base">{edu.degree}</span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">{edu.institution}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="skills" title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center rounded-full bg-teal-400/10 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300 ">
                  {skill}
                </div>
              ))}
            </div>
          </Section>

          <Section id="certifications" title="Certifications">
            <div className="max-h-[600px] overflow-y-auto pr-2">
              <ul className="group/list space-y-6">
                {certificationsData.map((cert, index) => (
                  <li key={index}>
                    <div className="group relative pb-1">
                      <div className="text-base font-medium text-slate-800 dark:text-slate-200">{cert.name}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span>{cert.issuer}</span>
                        {cert.date && (
                          <>
                            <span>·</span>
                            <span>{cert.date}</span>
                          </>
                        )}
                        {cert.credentialId && (
                          <>
                            <span>·</span>
                            <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                          </>
                        )}
                        {cert.expires && (
                          <>
                            <span>·</span>
                            <span>Expires: {cert.expires}</span>
                          </>
                        )}
                      </div>
                      {cert.skills && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="inline-flex items-center rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <footer className="max-w-md pb-16 text-sm text-slate-600 dark:text-slate-500 sm:pb-0">
            <p>
              Coded with React and Tailwind CSS. Design inspired by modern portfolio trends.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};


interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      aria-label={title}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 lg:sr-only">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};


export default App;