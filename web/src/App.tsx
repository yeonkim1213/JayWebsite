import React from 'react';
import './App.css';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  BookText 
} from 'lucide-react';

const skills = {
  languages: [
    "Java", "Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS", "Ruby"
  ],
  frameworks: [
    "React", "Node.js", "Express", "Spring Boot", "Django", "Next.js", "Vue.js", "Ruby on Rails"
  ],
  tools: [
    "Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis", "Kubernetes", "Jenkins"
  ]
};

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
        conference: "In Proceedings of the ACM Conference on CHI Conference on Human Factors in Computing Systems (CHI)",
        details: "23 Pages (Revise and resubmit)"
      },
      {
        venue: "ASSETS'24",
        authors: "Tamanna Motahar, Sara Nurollahian, YeonJae Kim, Marina Kogan, and Jason Wiese",
        title: "Exploring how People with Spinal Cord Injuries Seek Support on Social Media",
        conference: "In The 26th International ACM SIGACCESS Conference on Computers and Accessibility",
        details: "pp. 1-17. 2024. (Acceptance Rate 29%)"
      }
    ]
  },
  {
    type: "JOURNAL PAPERS [PEER-REVIEWED]",
    papers: [
      {
        venue: "IMWUT'25",
        authors: "Tamanna Motahar, Brandon Rivera-Melo, Ross Imburgia, *Yeon Jae Kim, James Gardner, Jeffrey Rosen-bluth, Jason Wiese",
        title: "Design and Evaluation of a Power Wheelchair-Based Self-tracking System to Prevent Pressure Ulcers",
        details: "25 pages (Accepted)"
      }
    ]
  }
];

const projects = [
  {
    title: "TiltTracker",
    description: "A power wheelchair-based self-tracking system designed to prevent pressure ulcers. Built with React Native and Node.js.",
    tags: ["React Native", "Node.js", "MongoDB", "IoT"],
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Social Media Analysis Platform",
    description: "Platform analyzing support-seeking patterns in Reddit posts from spinal cord injury patients using NLP and machine learning.",
    tags: ["Python", "NLP", "Machine Learning", "React"],
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and publications.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">Jay Kim</div>
          <div className="nav-links">
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Publications', id: 'publications' },
              { name: 'Contact', id: 'contact' }
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="bg">
          <div className="overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
          />
        </div>
        <div className="header-content">
          <div className="profile">
            {/* Left: Profile Info */}
            <div className="left">
              <img 
                src="YOUR_PHOTO_URL_HERE" 
                alt="Jay Kim" 
                className="profile-img"
              />
              <h1>Jay Kim</h1>
              <p className="role">Software Developer</p>
              <p className="desc">
                I am a Computer Science graduate specializing in software development with expertise in full-stack development and data analysis.
              </p>
              <div className="social">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="mailto:contact@example.com">
                  <Mail />
                </a>
              </div>
            </div>
            {/* Right: Skills */}
            <div className="right">
              <div className="skills">
                <h2>Skills</h2>
                <div>
                  <h4>Languages</h4>
                  <div className="tags">
                    {skills.languages.map((lang, i) => <span key={i}>{lang}</span>)}
                  </div>
                </div>
                <div>
                  <h4>Frameworks</h4>
                  <div className="tags">
                    {skills.frameworks.map((fw, i) => <span key={i}>{fw}</span>)}
                  </div>
                </div>
                <div>
                  <h4>Tools</h4>
                  <div className="tags">
                    {skills.tools.map((tool, i) => <span key={i}>{tool}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="about">
        <div className="sec-head">
          <User className="icon" />
          <h2>About</h2>
        </div>
        <div className="sec-body">
          <p>
            I am a Computer Science graduate with a focus on building user-centered applications and exploring new technologies.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="sec-head">
          <Briefcase className="icon" />
          <h2>Experience</h2>
        </div>
        <div className="resume">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="icon" /> View Resume
          </a>
        </div>
        <div className="timeline">
          <div className="item left">
            <div className="item-body">
              <h3>B.S. in Computer Science</h3>
              <p className="sub">University of Utah</p>
              <p className="date">May 2024</p>
              <ul>
                <li>GPA: 3.8/4.0</li>
                <li>Dean's List</li>
              </ul>
            </div>
          </div>
          <div className="item right">
            <div className="item-body">
              <h3>Teaching Assistant</h3>
              <p className="sub">Utah College of Engineering</p>
              <p className="date">Aug - Dec 2024</p>
              <ul>
                <li>Graded assignments</li>
                <li>Assisted in class</li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="sec-head">
          <Code2 className="icon" />
          <h2>Projects</h2>
        </div>
        <div className="grid">
          {projects.map((proj, i) => (
            <div key={i} className="card">
              <img src={proj.image} alt={proj.title} className="card-img" />
              <div className="card-body">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tags">
                  {proj.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
                <div className="links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <Github className="icon" /> Code
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="icon" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="publications">
        <div className="sec-head">
          <BookText className="icon" />
          <h2>Publications</h2>
        </div>
        <div className="pub-body">
          {publications.map((pub, i) => (
            <div key={i}>
              <h3>{pub.type}</h3>
              {pub.papers.map((paper, j) => (
                <div key={j} className="pub-card">
                  <p className="venue">{paper.venue}</p>
                  <h4>{paper.title}</h4>
                  <p className="authors">{paper.authors}</p>
                  {paper.conference && <p className="conf">{paper.conference}</p>}
                  <p className="details">{paper.details}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="sec-head">
          <h2>Contact</h2>
        </div>
        <div className="sec-body">
          <p>I'm looking for new opportunities. Feel free to reach out!</p>
          <div className="btn-group">
            <a href="mailto:contact@example.com" className="btn email">
              <Mail className="icon" /> Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn linkedin">
              <Linkedin className="icon" /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn github">
              <Github className="icon" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Jay Kim. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
