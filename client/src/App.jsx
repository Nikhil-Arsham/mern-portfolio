import React from "react";
import "./style.css";

export default function App() {

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (

    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2>Nikhil.dev</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="github-btn"
          href="https://github.com/nikhil-arsham"
          target="_blank"
        >
          GitHub
        </a>

      </nav>

      {/* HERO */}

      <header className="hero">

        <div className="hero-content">

          <h1>
            Arsham <span>Nikhil</span>
          </h1>

          <h3>
            Full Stack Developer | AI & ML Enthusiast
          </h3>

          <p>
            Passionate B.Tech CSE student at IIIT RGUKT Basar
            focused on building modern full stack applications,
            scalable backend systems, and solving real-world
            problems through software engineering.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>

            <button
              className="secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>

          </div>

        </div>

      </header>

      {/* ABOUT */}

      <section id="about" className="section">

        <h2>About Me</h2>

        <div className="card">

          <p>
            I am a Computer Science Engineering student
            passionate about MERN Stack Development,
            Data Structures & Algorithms, backend systems,
            and machine learning fundamentals.

            I enjoy building responsive web applications,
            solving algorithmic problems, and continuously
            learning modern technologies.
          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">Java</div>
          <div className="skill-card">C</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Linux</div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">

            <h3>
              Electricity Theft Detection System
            </h3>

            <p>
              Machine learning-based anomaly detection
              system for identifying suspicious electricity
              usage patterns and analyzing power consumption.
            </p>

            <span>Python • Machine Learning</span>

          </div>

          <div className="project-card">

            <h3>
              MERN Portfolio Website
            </h3>

            <p>
              Modern responsive portfolio website using
              React.js, Node.js, Express.js and MongoDB
              with backend-connected contact form.
            </p>

            <span>React • Node.js • MongoDB</span>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section id="education" className="section">

        <h2>Education</h2>

        <div className="education-grid">

          <div className="education-card">

            <div className="edu-year">
              2023 - 2027
            </div>

            <h3>IIIT RGUKT Basar</h3>

            <h4>
              B.Tech - Computer Science Engineering
            </h4>

            <p>
              Pursuing B.Tech in Computer Science
              Engineering with strong focus on
              Full Stack Development, DSA,
              Backend Systems and AI/ML.
            </p>

            <span>CGPA: 8.25</span>

          </div>

          <div className="education-card">

            <div className="edu-year">
              2021 - 2023
            </div>

            <h3>PUC / Intermediate</h3>

            <h4>Pre-University Course</h4>

            <p>
              Built strong fundamentals in
              Mathematics, Science and
              analytical problem solving.
            </p>

            <span>CGPA: 9.3</span>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="section">

        <h2>Contact Me</h2>

        <div className="card">

          <form
            className="contact-form"

            onSubmit={async (e) => {

              e.preventDefault();

              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value
              };

              const response = await fetch(
                "https://mern-portfolio-3rne.onrender.com/api/contact",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                    "application/json"
                  },
                  body: JSON.stringify(formData)
                }
              );

              const data = await response.json();

              alert(data.message);

              e.target.reset();

            }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Arsham Nikhil | MERN Portfolio
        </p>

      </footer>

    </div>

  );
}