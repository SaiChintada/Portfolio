import { useState } from "react";

function Main() {
  const [active, setActive] = useState("about");

  return (
    <div className="main">
      {/* Tabs */}
      <div className="tabs">
        <button onClick={() => setActive("about")}>About</button>
        <button onClick={() => setActive("resume")}>Resume</button>
        <button onClick={() => setActive("portfolio")}>Portfolio</button>
        <button onClick={() => setActive("contact")}>Contact</button>
      </div>

      {/* Content */}
      {active === "about" && (
        <>
          <h1>About Me</h1>
          <p>
            I am a Computer Science student passionate about building full-stack
            applications using React and FastAPI.
          </p>

          <h2>What I'm Doing</h2>

          <div className="cards">
            <div className="card">
              <h3>Web Development</h3>
              <p>Modern and scalable web apps</p>
            </div>

            <div className="card">
              <h3>Backend APIs</h3>
              <p>FastAPI backend systems</p>
            </div>

            <div className="card">
              <h3>UI Design</h3>
              <p>Clean UI experiences</p>
            </div>

            <div className="card">
              <h3>Projects</h3>
              <p>Real-world applications</p>
            </div>
          </div>
        </>
      )}

      {active === "resume" && (
  <>
    <h1>Resume</h1>

    <div className="timeline">

      <div className="timeline-item">
        <h3>Web Developer</h3>
        <span>2023 - Present</span>
        <p>Building full stack apps using React & FastAPI</p>
      </div>

      <div className="timeline-item">
        <h3>Frontend Developer</h3>
        <span>2022 - 2023</span>
        <p>Worked on UI design and responsive layouts</p>
      </div>

      <div className="timeline-item">
        <h3>Student - CSE</h3>
        <span>2021 - 2025</span>
        <p>B.Tech Computer Science Engineering</p>
      </div>

    </div>
    </>
    )}
    </div>
  );
}

export default Main;