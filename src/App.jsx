import { useEffect, useState } from "react";
import "./App.css";

const particles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  size: 1 + Math.random() * 2,
}));

const whoamiText = "whoami";

function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setText(whoamiText.slice(0, i));

      if (i >= whoamiText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span>$ </span>
      {text}
      <span className="type-cursor">_</span>
    </>
  );
}


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

    useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${x * 15}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${y * 15}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
  <main className="portfolio">
    <div className="particles">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">&lt;AYAN /&gt;</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="hero">

        <p className="terminal-line">
          <Typewriter />
        </p>

        <h1>
          Ayan Sarkar
          <br />
          <span>Cybersecurity Explorer.</span>
        </h1>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="/Ayan_Sarkar_Cybersecurity_Resume.docx"
            download
            className="secondary-button"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

        </div>


        {/* Social Links */}
        <div className="social-links">

          <a
            href="https://github.com/ucanreachayan-lang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ayan-sarkar-508396371/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>


        {/* Terminal */}
        <div className="terminal-box">

          <div className="terminal-header">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <p>terminal</p>
          </div>

          <div className="terminal-content">

            <p>
              <span className="green">$</span> ./about-me.sh
            </p>

            <p className="terminal-output">
              Initializing portfolio...
            </p>

            <p className="terminal-output">
              User: <span className="green">Ayan Sarkar</span>
            </p>

            <p className="terminal-output">
              Role: Cybersecurity Explorer
            </p>

            <p className="terminal-output">
              Mission: Explore. Exploit. Defend.
            </p>

            <p>
              <span className="green">$</span>{" "}
              <span className="cursor">█</span>
            </p>

          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <p className="section-label">
          01 // ABOUT
        </p>

        <h2>
          Who am I?
        </h2>

        <p>
          I'm Ayan Sarkar, a Cybersecurity Explorer building my knowledge
          through hands-on learning, projects and experimentation. I'm
          interested in understanding how systems, networks and applications
          work, how they can be exploited, and most importantly, how they
          can be defended.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <p className="section-label">
          02 // SKILLS
        </p>

        <h2>
          What I work with.
        </h2>

        <p className="section-intro">
          Technologies and security concepts I've been exploring through
          hands-on projects and learning.
        </p>


        <div className="skills-grid">

          <div className="skill-card">
            <h3>Cybersecurity</h3>
            <p>
              Security fundamentals, vulnerability analysis,
              threat detection and ethical security testing.
            </p>
          </div>


          <div className="skill-card">
            <h3>Python</h3>
            <p>
              Building security tools, automation scripts,
              analyzers and cybersecurity experiments.
            </p>
          </div>


          <div className="skill-card">
            <h3>Networking</h3>
            <p>
              Understanding network fundamentals, ports,
              services and common network security concepts.
            </p>
          </div>


          <div className="skill-card">
            <h3>Linux</h3>
            <p>
              Working with Linux environments, terminal tools,
              system commands and security utilities.
            </p>
          </div>


          <div className="skill-card">
            <h3>Web Security</h3>
            <p>
              Exploring phishing, suspicious URLs, web threats
              and common application security concepts.
            </p>
          </div>


          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>
              Managing projects, version control and sharing
              cybersecurity work through GitHub.
            </p>
          </div>

        </div>

      </section>


      {/* Education */}
      <section id="education" className="section">

        <p className="section-label">
          03 // EDUCATION
        </p>

        <h2>
          Where I'm learning.
        </h2>


        <div className="education-card">

          <div className="education-year">
            2024 — 2028
          </div>

          <div className="education-content">

            <h3>
              B.Sc. in Cyber Security
            </h3>

            <p>
              Maulana Abul Kalam Azad University of Technology,
              West Bengal
            </p>

            <span>
              Currently pursuing
            </span>

          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <p className="section-label">
          04 // PROJECTS
        </p>

        <h2>
          Things I've built.
        </h2>

        <p className="section-intro">
          A collection of cybersecurity tools and experiments I've built
          while exploring security, networking and Python.
        </p>


        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <span className="project-number">
              01
            </span>

            <h3>
              Static Malware Analyzer
            </h3>

            <p>
              A Python-based static analysis tool for examining
              Windows PE executables, extracting metadata,
              hashes and PE header information.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>PE Analysis</span>
              <span>Malware Analysis</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/static-malware-analyzer"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <span className="project-number">
              02
            </span>

            <h3>
              XOR Malware Sample Generator
            </h3>

            <p>
              A security research tool that generates simulated
              XOR-encoded malware samples for reverse engineering
              and cybersecurity training.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>XOR</span>
              <span>Security Research</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/xor-malware-sample-generator"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <span className="project-number">
              03
            </span>

            <h3>
              XOR String Decoder
            </h3>

            <p>
              A Python utility that brute-forces single-byte XOR
              keys to recover readable strings from encoded data.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Cryptography</span>
              <span>Reverse Engineering</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/xor-string-decoder"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 4 */}
          <div className="project-card">

            <span className="project-number">
              04
            </span>

            <h3>
              URL Threat Scanner
            </h3>

            <p>
              A browser-based security tool that analyzes URLs
              for phishing indicators, typosquatting patterns
              and suspicious domains.
            </p>

            <div className="project-tags">
              <span>JavaScript</span>
              <span>Web Security</span>
              <span>Phishing</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/url-threat-scanner"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 5 */}
          <div className="project-card">

            <span className="project-number">
              05
            </span>

            <h3>
              Python File Encryptor
            </h3>

            <p>
              A Python utility for encrypting and decrypting files
              using XOR-based encryption.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Encryption</span>
              <span>Cryptography</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/python-file-encryptor"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 6 */}
          <div className="project-card">

            <span className="project-number">
              06
            </span>

            <h3>
              Python File Integrity Checker
            </h3>

            <p>
              A file integrity verification tool using SHA-256
              hashing to detect changes made to files.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>SHA-256</span>
              <span>Integrity</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/python-file-integrity-checker"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 7 */}
          <div className="project-card">

            <span className="project-number">
              07
            </span>

            <h3>
              Vulnerability Scanner
            </h3>

            <p>
              A Python-based scanner that checks target hosts
              for common services, open ports and potential
              security weaknesses.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Networking</span>
              <span>Scanning</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/vulnerability_scanner"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>


          {/* Project 8 */}
          <div className="project-card">

            <span className="project-number">
              08
            </span>

            <h3>
              Password Strength Analyzer
            </h3>

            <p>
              A Python tool that evaluates password strength
              based on length, character types and common
              password security factors.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Password Security</span>
              <span>Analysis</span>
            </div>

            <a
              href="https://github.com/ucanreachayan-lang/Password-strength-Analyzer"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <p className="section-label">
          05 // CONTACT
        </p>

        <h2>
          Let's connect.
        </h2>

        <p>
          Interested in cybersecurity, technology or collaborating
          on a project?
        </p>

        <a
          href="mailto:ucanreachayan@gmail.com"
          className="primary-button"
        >
          Send Me an Email
        </a>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Ayan Sarkar
        </p>

        <p>
          Built with React
        </p>

      </footer>

    </main>
  );
}

export default App;