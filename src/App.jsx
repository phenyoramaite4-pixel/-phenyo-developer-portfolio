
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Code2,
  Globe,
  Layers3,
  Mail,
  Menu,
  Monitor,
  Phone,
  Sparkles,
  X,
  Database,
  GitBranch,
  BriefcaseBusiness,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "BIGHEARTS AFRICA Website",
    category: "Organisation Website",
    description:
      "A digital platform prototype designed to showcase BIGHEARTS AFRICA, its programmes, services and youth development initiatives.",
    status: "Prototype",
    statusClass: "prototype",
    tech: ["Web Development", "Frontend", "Digital Platform"],
    icon: Globe,
    link: "https://shiny-choux-aa9e80.netlify.app/",
    action: "View Live Demo",
    overview:
      "A web platform prototype created to introduce BIGHEARTS AFRICA and present its organisational identity, programmes and youth-development work.",
    problem:
      "Organisations need a clear online presence where visitors can understand their purpose, explore their programmes and learn about their services.",
    features: [
      "Organisation and programme presentation",
      "Structured website navigation",
      "Service and initiative information",
      "Responsive website layout",
      "Digital brand presentation",
    ],
    contribution:
      "Worked on the development of the website prototype, its interface, content presentation and overall digital experience.",
    role: "Website design and frontend development",
    limitations:
      "This is a prototype website. Its presentation should not be interpreted as proof that every organisational process is connected to a live backend.",
  },
  {
    number: "02",
    title: "Developer Portfolio",
    category: "Personal Project",
    description:
      "My live personal developer portfolio, showcasing my technical skills, completed projects, prototypes and ongoing development journey.",
    status: "Live",
    statusClass: "live",
    tech: ["React", "Vite", "JavaScript", "CSS", "Framer Motion", "Lucide React"],
    icon: Code2,
    link: "https://phenyo-developer-portfolio-q8wl6xl4m-phenyoramaite4-9922.vercel.app/",
    action: "View Live Demo",
    overview:
      "My personal developer portfolio, designed and developed to bring together my projects, technical skills, professional information and contact details in one interactive website. The portfolio is deployed on Vercel and its source code is maintained on GitHub.",
    problem:
      "Developers need a central place to present their work so that recruiters, clients and business partners can explore their capabilities and access their projects.",
    features: [
      "Interactive project showcase",
      "Detailed project information",
      "Direct links to live projects",
      "Technical skills presentation",
      "Professional references section",
      "Direct contact links",
      "Responsive portfolio layout",
      "Animated user interface",
      "GitHub source code management",
      "Vercel deployment",
    ],
    contribution:
      "Designed and developed the portfolio interface, project showcase, interactive project-details experience, navigation, animations and responsive layouts. Set up Git version control, published the source code to GitHub and deployed the website using Vercel.",
    role: "Personal project — design, frontend development and deployment",
    limitations:
      "This is a personal portfolio that will continue to evolve as I complete new projects and develop additional technical skills.",
  },
  {
    number: "03",
    title: "Learner Attendance & Leave Management System",
    category: "Management System",
    description:
      "A responsive learner management dashboard featuring attendance registers, leave applications, learner records, calendars, analytics, notifications, printable reports and a mobile-friendly slide-out hamburger navigation menu. The current version uses fictional demonstration records and does not provide live backend authentication or persistent record storage.",
    status: "Live",
    statusClass: "live",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Dashboard",
    ],
    icon: Monitor,
    link: "https://learner-attendance-leave-management-s.netlify.app/",
    github:
      "https://github.com/phenyoramaite4-pixel/learner-attendance-leave-management-system",
    action: "View Live Demo",
    overview:
      "A responsive frontend demonstration of a learner administration system designed to bring attendance, leave management, learner information and reporting into one organised interface. The dashboard includes a mobile slide-out navigation menu for easier use on smaller screens.",
    problem:
      "Managing learner attendance, leave applications and administrative records across separate processes can make it difficult to maintain an organised overview of learner activity.",
    features: [
      "Dashboard overview",
      "Learner records and learner management",
      "Attendance registers",
      "Leave application interface",
      "Calendar and scheduling view",
      "Analytics and monthly reporting",
      "Intervention tracking",
      "Activities and notifications",
      "Printable attendance registers and reports",
      "Responsive mobile dashboard layout",
      "Mobile hamburger navigation with slide-out sidebar",
      "Menu closes using the close button, overlay or navigation links",
    ],
    contribution:
      "Designed and developed the frontend pages, dashboard layout, navigation, management interfaces and visual presentation of the system. Implemented and tested the responsive mobile hamburger menu, then published the updated version through GitHub and Netlify.",
    role: "Frontend development, responsive interface design and deployment",
    limitations:
      "This is a static frontend demonstration using fictional records. It does not provide live backend authentication or persistent record storage. Do not use it to manage real learner information.",
  },
  {
    number: "04",
    title: "BIGHEARTS AFRICA Digital CV",
    category: "Digital CV Platform",
    description:
      "A digital CV platform designed to help learners present their professional profiles, skills, qualifications and experience through a digital platform.",
    status: "Built",
    statusClass: "live",
    tech: ["Digital CV", "Web Development", "User Profiles"],
    icon: Layers3,
    link: "https://bighearts-digital-cv-1.onrender.com/",
    action: "View Live Demo",
    overview:
      "A digital CV platform developed to provide learners with a structured way to present their professional information and make their profiles easier to share with potential opportunities.",
    problem:
      "Traditional CV documents can be difficult to keep updated and may not present a person's professional information in an interactive digital format.",
    features: [
      "Digital learner profile presentation",
      "Professional information display",
      "Skills and qualifications presentation",
      "Experience and profile information",
      "Digital CV viewing experience",
    ],
    contribution:
      "Contributed to the development of the digital CV platform and its user-facing experience, with a focus on presenting learner profiles and professional information.",
    role: "Digital platform development",
    limitations:
      "The live link should be used to explore the currently deployed version. Features and workflows should be assessed from the actual application.",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "REST API Development"],
  },
  {
    title: "Tools & Deployment",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "Replit",
      "Codex",
      "Netlify",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Interface & Product Development",
    icon: Layers3,
    skills: [
      "Framer Motion",
      "Responsive Design",
      "Dashboard Interfaces",
      "Digital Platforms",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const openProject = (project) => {
    setSelectedProject(project);
    closeMenu();
  };

  const closeProject = () => setSelectedProject(null);

  const SelectedProjectIcon = selectedProject?.icon;

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">P.</span>
          <span>
            PHENYO<span className="brand-light">RAMAITE</span>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#references" onClick={closeMenu}>References</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <motion.div className="eyebrow" variants={fadeUp}>
              <span className="status-dot" />
              DEVELOPER PORTFOLIO
            </motion.div>

            <motion.h1 variants={fadeUp}>
              I BUILD
              <br />
              DIGITAL
              <br />
              <span className="gradient-text">EXPERIENCES.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={fadeUp}>
              I turn ideas into digital products — from websites and
              business platforms to management systems and digital
              experiences that solve real-world problems.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a className="button-quiet" href="#about">
                More about me <ArrowDownRight size={17} />
              </a>
            </motion.div>

            <motion.div className="hero-footnote" variants={fadeUp}>
              <Sparkles size={15} />
              <span>Turning concepts into digital experiences.</span>
            </motion.div>
          </motion.div>

          {/* LAPTOP MOCKUP */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="visual-label">
              <span>MY DIGITAL WORKSPACE</span>
              <span className="live-indicator">● ONLINE</span>
            </div>

            <div className="laptop-scene">
              <div className="laptop-screen">
                <div className="screen-topbar">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>phenyo.dev / projects</span>
                  <Code2 size={14} />
                </div>

                <div className="screen-content">
                  <div className="screen-greeting">
                    <span>WELCOME TO MY WORLD</span>
                    <h2>
                      Ideas into reality<span>.</span>
                    </h2>
                    <p>Design. Develop. Deliver.</p>
                  </div>

                  <div className="screen-projects">
                    {projects.map((project) => {
                      const Icon = project.icon;

                      return (
                        <div
                          className="screen-project"
                          key={project.number}
                        >
                          <div className="screen-project-icon">
                            <Icon size={17} />
                          </div>

                          <div className="screen-project-info">
                            <strong>{project.title}</strong>
                            <span>{project.category}</span>
                          </div>

                          <span
                            className={`mini-status ${project.statusClass}`}
                          >
                            {project.number}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="screen-bottom">
                    <span>
                      <i /> SYSTEMS THINKING
                    </span>
                    <span>CREATIVE DEVELOPMENT</span>
                  </div>
                </div>
              </div>

              <div className="laptop-base">
                <div className="laptop-notch" />
              </div>

              <div className="laptop-shadow" />
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">
                <Code2 size={18} />
              </span>

              <div>
                <strong>Creative development</strong>
                <small>Built with purpose</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon green">
                <Layers3 size={18} />
              </span>

              <div>
                <strong>Digital solutions</strong>
                <small>Ideas made tangible</small>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERTISE STRIP */}
        <section className="expertise-strip">
          <div>
            <Code2 size={18} /> WEB DEVELOPMENT
          </div>
          <span className="strip-divider" />
          <div>
            <Monitor size={18} /> MANAGEMENT SYSTEMS
          </div>
          <span className="strip-divider" />
          <div>
            <Layers3 size={18} /> DIGITAL PLATFORMS
          </div>
          <span className="strip-divider" />
          <div>
            <Sparkles size={18} /> CREATIVE SOLUTIONS
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section section-wrap" id="projects">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div>
              <span className="section-kicker">
                A SELECTION OF MY WORK
              </span>

              <h2>
                Projects that <span>make a difference.</span>
              </h2>

              <p>
                Real digital solutions, completed systems and concepts
                in progress.
              </p>
            </div>

            <a
              className="text-link"
              href="https://github.com/phenyoramaite4-pixel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const hasLink = Boolean(project.link);

              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                >
                  <div className="project-card-top">
                    <span className="project-number">
                      {project.number} / 04
                    </span>

                    <span className={`project-status ${project.statusClass}`}>
                      <i /> {project.status}
                    </span>
                  </div>

                  <div className="project-art">
                    <div className="art-window">
                      <div className="art-window-bar">
                        <div className="window-dots">
                          <i />
                          <i />
                          <i />
                        </div>
                        <span>PROJECT PREVIEW</span>
                      </div>

                      <div className="art-content">
                        <div className="art-icon">
                          <Icon size={25} />
                        </div>

                        <div className="art-lines">
                          <i />
                          <i />
                          <i />
                        </div>

                        <div className="art-chart">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>

                    <span className="art-glow" />
                  </div>

                  <div className="project-card-body">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="project-details-link"
                      onClick={() => openProject(project)}
                    >
                      View Project Details
                      <ArrowRight size={16} />
                    </button>

                    {hasLink ? (
                      <>
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.action}
                          <ArrowUpRight size={16} />
                        </a>

                        {project.github && (
                          <a
                            className="project-link"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View GitHub Repository
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="project-link unavailable">
                        {project.action}
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="skills-section section-wrap" id="skills">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div>
              <span className="section-kicker">
                TECHNOLOGIES & CAPABILITIES
              </span>

              <h2>
                Tools I use to <span>build digital solutions.</span>
              </h2>

              <p>
                Technologies and tools I have worked with across my
                projects and ongoing development journey.
              </p>
            </div>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon size={22} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="skills-note">
            My technical skills continue to grow as I develop new
            projects and expand my experience.
          </p>
        </section>

        {/* PROFESSIONAL REFERENCES SECTION */}
        <section
          className="references-section section-wrap"
          id="references"
        >
          <motion.div
            className="references-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="section-kicker">
              PROFESSIONAL CREDENTIALS
            </span>

            <h2>
              Professional <span>references.</span>
            </h2>

            <p>
              Professional references are available upon request
              for employment opportunities and professional engagements.
            </p>
          </motion.div>

          <motion.article
            className="reference-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="reference-card-heading">
              <span className="reference-icon">
                <BriefcaseBusiness size={22} />
              </span>

              <div>
                <span className="reference-kicker">
                  PROFESSIONAL CREDENTIALS
                </span>
                <h3>References available upon request</h3>
              </div>
            </div>

            <p className="reference-description">
              Contact me if you require professional references.
              Details will be shared with the relevant individuals'
              permission.
            </p>

            <a
              className="reference-request"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=phenyoramaite4%40gmail.com&su=Professional%20Reference%20Request&body=Hello%20Phenyo%2C%0A%0AI%20would%20like%20to%20request%20your%20professional%20references.%0A%0AKind%20regards"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request references
              <ArrowUpRight size={17} />
            </a>
          </motion.article>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <motion.div
              className="about-mark"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="about-monogram">
                P<span>.</span>
              </div>
              <span>CURIOUS MIND. CREATIVE BUILDER.</span>
            </motion.div>

            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <motion.span className="section-kicker" variants={fadeUp}>
                A LITTLE ABOUT ME
              </motion.span>

              <motion.h2 variants={fadeUp}>
                I build digital solutions with <span>purpose.</span>
              </motion.h2>

              <motion.p variants={fadeUp}>
                I'm Phenyo Ramaite, a developer passionate about turning
                ideas into practical digital experiences. I design and build
                websites, web applications, interactive dashboards and
                management systems that help businesses, organisations and
                people solve real-world problems.
              </motion.p>

              <motion.p variants={fadeUp}>
                I enjoy working across the development process — from
                understanding a problem and planning a solution to creating
                user-friendly interfaces and building functional features.
                My focus is on developing technology that is not only
                visually engaging, but also useful, reliable and easy to use.
              </motion.p>

              <motion.p variants={fadeUp}>
                My projects include digital platforms, application interfaces,
                dashboards, learner and business management tools, and
                digital CV solutions. This portfolio showcases work I have
                built, prototypes I have developed and projects that are
                still growing.
              </motion.p>

              <motion.div className="about-values" variants={fadeUp}>
                <span><i /> Website development</span>
                <span><i /> Application development</span>
                <span><i /> Dashboard development</span>
                <span><i /> Management systems</span>
                <span><i /> Problem solving</span>
                <span><i /> Continuous learning</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section-wrap" id="contact">
          <motion.div
            className="contact-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="contact-orb" />

            <span className="section-kicker">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build something <span>meaningful.</span>
            </h2>

            <p>
              Have an idea, an opportunity or a project to discuss?
              Let's connect.
            </p>

            <div className="contact-actions">
              <a
                className="button-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=phenyoramaite4%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={17} />
                Email me
                <ArrowRight size={16} />
              </a>

              <a className="button-secondary" href="tel:+27684434569">
                <Phone size={17} />
                Call me
              </a>

              <a
                className="button-secondary"
                href="https://github.com/phenyoramaite4-pixel"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">P.</span>
          <span>
            PHENYO<span className="brand-light">RAMAITE</span>
          </span>
        </a>

        <span>Designed to showcase ideas. Built to grow.</span>

        <div className="footer-contact">
          <a href="mailto:phenyoramaite4@gmail.com">
            <Mail size={16} />
            phenyoramaite4@gmail.com
          </a>

          <a href="tel:+27684434569">
            <Phone size={16} />
            +27 68 443 4569
          </a>

          <a
            href="https://github.com/phenyoramaite4-pixel"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={17} />
            GitHub
            <ExternalLink size={13} />
          </a>
        </div>

        <a
          className="footer-github"
          href="https://github.com/phenyoramaite4-pixel"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <Code2 size={19} />
        </a>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && SelectedProjectIcon && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-modal-topbar">
                <button
                  type="button"
                  className="project-back-button"
                  onClick={closeProject}
                >
                  <ArrowLeft size={17} />
                  Back to projects
                </button>

                <button
                  type="button"
                  className="project-modal-close"
                  onClick={closeProject}
                  aria-label="Close project details"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="project-modal-content">
                <div className="project-modal-heading">
                  <div>
                    <span className="section-kicker">
                      PROJECT {selectedProject.number} / 04
                    </span>

                    <h2 id="project-modal-title">
                      {selectedProject.title}
                    </h2>

                    <div className="project-modal-meta">
                      <span>{selectedProject.category}</span>
                      <span className={`project-status ${selectedProject.statusClass}`}>
                        <i /> {selectedProject.status}
                      </span>
                    </div>
                  </div>

                  <div className="project-modal-icon">
                    <SelectedProjectIcon size={30} />
                  </div>
                </div>

                <div className="project-modal-preview">
                  <div className="modal-preview-window">
                    <div className="art-window-bar">
                      <div className="window-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>PROJECT OVERVIEW</span>
                    </div>

                    <div className="modal-preview-content">
                      <SelectedProjectIcon size={42} />
                      <strong>{selectedProject.title}</strong>
                      <span>{selectedProject.category}</span>
                      <p>Project showcase · {selectedProject.number}</p>
                    </div>
                  </div>
                </div>

                <section className="project-detail-section">
                  <div className="project-detail-title">
                    <Lightbulb size={19} />
                    <h3>Project overview</h3>
                  </div>
                  <p>{selectedProject.overview}</p>
                </section>

                <section className="project-detail-section">
                  <div className="project-detail-title">
                    <Target size={19} />
                    <h3>Problem it solves</h3>
                  </div>
                  <p>{selectedProject.problem}</p>
                </section>

                <section className="project-detail-section">
                  <div className="project-detail-title">
                    <CheckCircle2 size={19} />
                    <h3>Key features</h3>
                  </div>

                  <ul className="project-feature-list">
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="project-detail-section">
                  <div className="project-detail-title">
                    <Wrench size={19} />
                    <h3>Technologies used</h3>
                  </div>

                  <div className="project-modal-tech">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </section>

                <section className="project-detail-section">
                  <div className="project-detail-title">
                    <BriefcaseBusiness size={19} />
                    <h3>My role and contribution</h3>
                  </div>
                  <p>{selectedProject.contribution}</p>
                  <div className="project-role">
                    <span>ROLE</span>
                    <strong>{selectedProject.role}</strong>
                  </div>
                </section>

                <section className="project-detail-note">
                  <strong>Project status and scope</strong>
                  <p>{selectedProject.limitations}</p>
                </section>

                <div className="project-modal-actions">
                  {selectedProject.link ? (
                    <a
                      className="button-primary"
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedProject.action}
                      <ExternalLink size={17} />
                    </a>
                  ) : (
                    <span className="project-link unavailable">
                      {selectedProject.action}
                    </span>
                  )}

                  {selectedProject.github && (
                    <a
                      className="button-secondary"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub Repository
                      <ExternalLink size={17} />
                    </a>
                  )}

                  <button
                    type="button"
                    className="button-secondary"
                    onClick={closeProject}
                  >
                    Close details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
