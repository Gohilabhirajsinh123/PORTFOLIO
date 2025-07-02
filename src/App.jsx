// src/App.jsx
import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>GOHIL ABHIRAJ GHANSHYAMSINH</h1>
        <p>Creative Full Stack Developer</p>
        <div className="socials">
          <a
            href="https://github.com/ABHIRAJ022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhirajsinh-ghanshyamsinh-gohil-b34925332"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.header>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer focused on creating impactful web experiences.
          I have strong foundations in both frontend and backend development, with excellent skills
          in team collaboration, project execution, and delivering real-world digital solutions.
        </p>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript, Java, SQL, Python</li>
          <li>React, Node.js, Express, MongoDB, Tailwind CSS, Bootstrap</li>
          <li>Project Development, Leadership & Teamwork</li>
          <li>Multitasking, Active Listening</li>
        </ul>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Projects</h2>
        <div className="project">
          <h3>Farmers Market</h3>
          <p>
            A creative e-commerce platform where farmers create stores and sell fresh produce
            directly to consumers, eliminating middlemen and increasing farmer profits.
          </p>
          <p><strong>Tech Used:</strong> React, Node.js, Tailwind, MongoDB, HTML, JavaScript</p>
          <p><a href="https://github.com/ABHIRAJ022" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Education</h2>
        <p><strong>B. Tech in Information Technology</strong><br />
          Silver Oak College of Engineering and Technology, Ahmedabad<br />
          July 2023 – Present (5th Sem), Score: 9.08 CPI</p>

        <p><strong>HSC – Science (A Group)</strong><br />
          Mother Zainab Jr. Science College, Lilajpur, Dholka<br />
          June 2022 – May 2023 – PR: 89.20</p>

        <p><strong>SSC</strong><br />
          Gopaldas Shivlal Patel Secondary School, Bavla, Ahmedabad<br />
          June 2020 – May 2021 – PR: 94.52</p>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Experience</h2>
        <p>
          <a href='/CAC_WaySpire.jpg' target="_blank" rel="noopener noreferrer">
            <strong>Campus Ambassador Intern</strong>
          </a><br />
          Dec 2024 – Jan 2025
        </p>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Certifications & Courses</h2>
        <ul>
          <li><a href='/Google_Cloud_Career_Launchpad_Cybersecurity_track.jpg' target="_blank" rel="noopener noreferrer">Google Cloud Career Launchpad – Cybersecurity, May 2025</a></li>
          <li><a href='/JavaScript_Training.jpg' target="_blank" rel="noopener noreferrer">JavaScript Training – Spoken Tutorial, Mar 2025 (Score: 80%)</a></li>
          <li><a href='/command_line_linux.jpg' target="_blank" rel="noopener noreferrer">Command Line in Linux – Coursera, Mar 2025</a></li>
          <li><a href='/CSS.jpg' target="_blank" rel="noopener noreferrer">CSS Training – Spoken Tutorial, Feb 2025 (Score: 77.5%)</a></li>
          <li><a href='/DBMS.jpg' target="_blank" rel="noopener noreferrer">DBMS – Coursera, Feb 2025</a></li>
          <li><a href='/HTML.jpg' target="_blank" rel="noopener noreferrer">HTML Training – Spoken Tutorial, Sep 2024 (Score: 50%)</a></li>
          <li><a href='/introduction_to_bash_shellscript.jpg' target="_blank" rel="noopener noreferrer">Intro to Bash Scripting – Coursera, Mar 2025</a></li>
          <li><a href='/OSDATACAMP.jpg' target="_blank" rel="noopener noreferrer">Intro to Bash Scripting – OSDatacamp, Mar 2025</a></li>
          <li><a href='/JAVADATACAMP.jpg' target="_blank" rel="noopener noreferrer">OOP in Java – DataCamp, Mar 2025</a></li>
          <li>Magic of Mathematics – Self Learning</li>
        </ul>
      </motion.section>

      <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2>Contact</h2>
        <div className="resume-button">
          <a href="/resume.pdf" download className="download-btn">Download Resume (PDF)</a>
        </div>
        <p>Email: <a href="mailto:abhirajsinhggohil@gmail.com">abhirajsinhggohil@gmail.com</a></p>
      </motion.section>

      <footer className="footer">
        <p>&copy; GOHIL ABHIRAJ GHANSHYAMSINH</p>
      </footer>
    </div>
  );
}

export default App;
