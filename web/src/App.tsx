import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  GraduationCap,
  BookText
} from 'lucide-react';
import './App.css';

const courses = {
  computerScience: [
    "CS 1410 Object Oriented Programming",
    "CS 2420 Introduction to Algorithms & Data Structures",
    "CS 3500 Software Practice I",
    "CS 3505 Software Practice II",
    "CS 3810 Computer Organization",
    "CS 4000 Senior Capstone Design",
    "CS 4150 Algorithms",
    "CS 4400 Computer Systems",
    "CS 4500 Senior Capstone Project"
  ],
  computerScienceElectives: [
    "CS 3090 Ethics in Computing",
    "CS 3100 Models of Computation",
    "CS 3190 Foundation of Data Analysis",
    "CS 3540 Design Human Centered Experience",
    "CS 3550 Web Software Development I",
    "CS 4530 Mobile App Programming",
    "CS 4550 Web Software Development II",
    "CS 5530 Database Systems",
    "DS 2500 Data Wrangling"
  ],
  mathematics: [
    "MATH 1310 Engineering Calculus I",
    "MATH 1320 Engineering Calculus II",
    "MATH 2210 Calculus III",
    "MATH 2250 Differential Equations & Linear Algebra",
    "CS 2100 Discrete Structures",
    "CS 3190 Engineering Probability Statistics",
    "PSY 3000 Statistical Methods"
  ]
};

const publications = [
  {
    type: "CONFERENCE PAPERS [PEER-REVIEWED]",
    papers: [
      {
        venue: "CHI'25",
        authors: "Tamanna Motahar, *Yeon Jae Kim, *Eden Fisher, Jason Wiese",
        title: "Understanding the Training Experiences of Competitive Skiers with Tetraplegia",
        conference:
          "In Proceedings of the ACM Conference on CHI Conference on Human Factors in Computing Systems (CHI)",
        details: "23 Pages (Revise and resubmit)"
      },
      {
        venue: "ASSETS'24",
        authors:
          "Tamanna Motahar, Sara Nurollahian, YeonJae Kim, Marina Kogan, and Jason Wiese",
        title:
          "Exploring how People with Spinal Cord Injuries Seek Support on Social Media",
        conference:
          "In The 26th International ACM SIGACCESS Conference on Computers and Accessibility",
        details: "pp. 1-17. 2024. (Acceptance Rate 29%)"
      }
    ]
  },
  {
    type: "JOURNAL PAPERS [PEER-REVIEWED]",
    papers: [
      {
        venue: "IMWUT'25",
        authors:
          "Tamanna Motahar, Brandon Rivera-Melo, Ross Imburgia, *Yeon Jae Kim, James Gardner, Jeffrey Rosen-bluth, Jason Wiese",
        title:
          "Design and Evaluation of a Power Wheelchair-Based Self-tracking System to Prevent Pressure Ulcers",
        details: "25 pages (Accepted)"
      }
    ]
  }
];

const projects = [
  {
    title: "TiltTracker",
    description:
      "A power wheelchair-based self-tracking system designed to prevent pressure ulcers. Built with React Native and Node.js.",
    tags: ["React Native", "Node.js", "MongoDB", "IoT"],
    image:
      "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Social Media Analysis Platform",
    description:
      "Platform analyzing support-seeking patterns in Reddit posts from spinal cord injury patients using NLP and machine learning.",
    tags: ["Python", "NLP", "Machine Learning", "React"],
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and publications.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory management and secure payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Image Generator",
    description:
      "Web application that generates unique images using stable diffusion models and allows for style customization.",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    image:
      "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Real-time Chat Application",
    description:
      "Scalable chat application with features like real-time messaging, file sharing, and end-to-end encryption.",
    tags: ["Socket.io", "Express", "MongoDB", "React"],
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const skills = {
  languages: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "SQL"
  ],
  frameworks: ["React", "Node.js", "Express", "Spring Boot", "Django"],
  tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"],
  concepts: [
    "OOP",
    "Design Patterns",
    "RESTful APIs",
    "Microservices",
    "CI/CD"
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'experience',
        'projects',
        'coursework',
        'publications',
        'contact'
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="container-6xl nav-container">
          <div className="nav-logo">
            <span>Jay Kim</span>
          </div>
          <div className="nav-links">
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Coursework', id: 'coursework' },
              { name: 'Publications', id: 'publications' },
              { name: 'Contact', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="hero-bg-image"
          />
          <div className="hero-bg-overlay"></div>
        </div>
        <div className="container-5xl hero-content">
          <div className="hero-photo">
            <img
              src="YOUR_PHOTO_URL_HERE"
              alt="Jay Kim"
              className="hero-image"
            />
          </div>
          <h1 className="hero-title">Jay Kim</h1>
          <p className="hero-subtitle">Software Developer</p>
          <p className="hero-description">
            I am a Computer Science graduate specializing in software
            development, with expertise in full-stack development and data
            analysis. I have a proven track record of creating user-centered and
            impactful applications, grounded in a strong foundation of
            accessibility and research. Passionate about leveraging technology to
            drive meaningful change, I am eager to pursue full-time software
            development opportunities.
          </p>
          <div className="hero-social">
            <a href="https://github.com" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <ChevronDown className="hero-chevron" />
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <div className="container-5xl">
          <div className="section-heading">
            <User className="section-icon" />
            <h2>About</h2>
          </div>
          <div className="section-text">
            <p>
              I am a Computer Science graduate specializing in software
              development, with expertise in full-stack development and data
              analysis. I have a proven track record of creating user-centered
              and impactful applications, grounded in a strong foundation of
              accessibility and research.
            </p>
          </div>
          <div className="skills-code">
            <pre>
              <code>{`public class Skills {
  // Programming Languages
  private String[] languages = {${skills.languages
    .map(lang => `"${lang}"`)
    .join(', ')}};
  // Frameworks & Libraries
  private String[] frameworks = {${skills.frameworks
    .map(framework => `"${framework}"`)
    .join(', ')}};
  // Development Tools
  private String[] tools = {${skills.tools
    .map(tool => `"${tool}"`)
    .join(', ')}};
  // Core Concepts
  private String[] concepts = {${skills.concepts
    .map(concept => `"${concept}"`)
    .join(', ')}};
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section" id="experience">
        <div className="container-5xl">
          <div className="section-heading">
            <Briefcase className="section-icon" />
            <h2>Experience & Education</h2>
          </div>
          <div className="resume-button-container">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <ExternalLink className="button-icon" />
              View Resume
            </a>
          </div>
          <div className="timeline">
            {/* Example Timeline Item – repeat and adjust for each item */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content left">
                <div className="timeline-card education-card">
                  <h3>B.S. in Computer Science</h3>
                  <p className="institution">University of Utah</p>
                  <p className="duration">Expected Graduation: May 2024</p>
                  <ul className="details">
                    <li>GPA: 3.8/4.0</li>
                    <li>Dean's List: Fall 2020 - Present</li>
                    <li>
                      Relevant Coursework: Algorithms, Data Structures,
                      Software Engineering, Database Systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Add additional timeline items as needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <div className="container-6xl">
          <div className="section-heading">
            <Code2 className="section-icon" />
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github className="link-icon" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="link-icon" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="section coursework-section" id="coursework">
        <div className="container-5xl">
          <div className="section-heading">
            <GraduationCap className="section-icon" />
            <h2>Coursework</h2>
          </div>
          <div className="coursework-grid">
            <div className="coursework-category">
              <h3>Computer Science</h3>
              <ul>
                {courses.computerScience.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="coursework-category">
              <h3>Computer Science Electives</h3>
              <ul>
                {courses.computerScienceElectives.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="coursework-category">
              <h3>Mathematics</h3>
              <ul>
                {courses.mathematics.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section publications-section" id="publications">
        <div className="container-5xl">
          <div className="section-heading">
            <BookText className="section-icon" />
            <h2>Publications</h2>
          </div>
          <div className="publications-list">
            {publications.map((pubSection, index) => (
              <div key={index} className="publication-section">
                <h3>{pubSection.type}</h3>
                <div className="publication-cards">
                  {pubSection.papers.map((paper, paperIndex) => (
                    <div key={paperIndex} className="publication-card">
                      <p className="publication-venue">{paper.venue}</p>
                      <h4 className="publication-title">{paper.title}</h4>
                      <p className="publication-authors">{paper.authors}</p>
                      {paper.conference && (
                        <p className="publication-conference">
                          {paper.conference}
                        </p>
                      )}
                      <p className="publication-details">{paper.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="contact-background">
          <svg
            className="bg-svg top-svg"
            width="400"
            height="400"
            fill="none"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200"
              cy="200"
              r="200"
              fill="rgba(255,255,255,0.05)"
            />
          </svg>
          <svg
            className="bg-svg bottom-svg"
            width="400"
            height="400"
            fill="none"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200"
              cy="200"
              r="200"
              fill="rgba(255,255,255,0.05)"
            />
          </svg>
        </div>
        <div className="container-3xl contact-content">
          <h2>Get in Touch</h2>
          <p>
            I'm currently looking for new opportunities. If you have any
            questions or just want to say hi, feel free to drop me a message.
          </p>
          <form
            action="mailto:contact@example.com"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="textarea-field"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="button-field">
                Send Message
              </button>
            </div>
          </form>
          <div className="contact-social">
            <a href="mailto:contact@example.com" className="social-link">
              <Mail size={24} />
            </a>
            <a href="https://github.com" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
