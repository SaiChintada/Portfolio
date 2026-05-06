import { useState, useRef, useEffect } from "react";

function Main() {
  const [active, setActive] = useState("about");

  const indicatorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const tabs = ["about", "resume", "portfolio", "contact"];
    const index = tabs.indexOf(active);
    const btn = buttonsRef.current[index];

    if (btn && indicatorRef.current) {
      indicatorRef.current.style.width = btn.offsetWidth + "px";
      indicatorRef.current.style.transform = `translateX(${btn.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <div className="main">

      {/* NAVBAR */}
      <div className="top-nav">
        <div className="nav-indicator" ref={indicatorRef}></div>

        {["about", "resume", "portfolio", "contact"].map((item, i) => (
          <button
            key={item}
            ref={(el) => (buttonsRef.current[i] = el)}
            onClick={() => setActive(item)}
            className={active === item ? "active" : ""}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* ABOUT */}
      {active === "about" && (
  <>
    <h1>About Me</h1>

   <div className="about-text">

  <p>
    Hi, I’m Sai Kiran, a Full Stack Developer focused on building modern and scalable web applications. 
    I enjoy creating clean user interfaces and connecting them with efficient backend systems.
  </p>

  <p>
    Currently, I am working on developing full stack applications using React, FastAPI, and PostgreSQL, 
    where I focus on building responsive frontends, designing APIs, and integrating databases for real-world use cases.
  </p>

  <p>
    I have built projects such as an expense tracker with analytics and a live bus tracking system with map integration, 
    which helped me gain practical experience in both frontend and backend development.
  </p>

  <p>
    Alongside development, I explore UI/UX design using Figma and Canva to create user-friendly and visually appealing interfaces.
  </p>

  <p>
    I am continuously improving my skills by learning new technologies, working on projects, and preparing myself 
    for real-world industry challenges.
  </p>

</div>

    {/* WHAT I'M DOING (INSIDE ABOUT ONLY) */}
    <h2>What I'm Doing</h2>

    <div className="doing-grid">

      <div className="doing-card">
        <h3>Full Stack Development</h3>
        <p>Building scalable applications using React and FastAPI.</p>
      </div>

      <div className="doing-card">
        <h3>Frontend Development</h3>
        <p>Creating responsive and interactive user interfaces.</p>
      </div>

      <div className="doing-card">
        <h3>Backend Development</h3>
        <p>Designing APIs and managing databases.</p>
      </div>

      <div className="doing-card">
        <h3>UI/UX Design</h3>
        <p>Designing clean and user-friendly interfaces.</p>
      </div>

    </div>
  </>
)}

      {/* RESUME */}
      {active === "resume" && (
        <>
          <h1>Resume</h1>

          <div className="resume-grid">

            {/* EXPERIENCE */}
            <div className="resume-block">
              <h2>Experience</h2>

              <div className="timeline-item">
                <h3>Full Stack Developer</h3>
                <span>2025 — Present</span>
                <p>
                  Building full-stack applications using React, FastAPI, and PostgreSQL, focusing on performance and scalability.
                </p>
              </div>

              <div className="timeline-item">
                <h3>Frontend Developer</h3>
                <span>2024 — Present</span>
                <p>
                  Developing responsive UI with React, animations, and reusable components.
                </p>
              </div>

              <div className="timeline-item">
                <h3>Content Creator — Konkorde</h3>
                <span>2023 —2025 </span>
                <p>
                  Contributing to UI design, branding, and content for startup projects.
                </p>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="resume-block">
              <h2>Education</h2>

              <div className="timeline-item">
                <h3>B.Tech in Computer Science</h3>
                <span>2022 — 2025</span>
                <p>
                  BITS Vizag — Focus on software engineering, databases, and full-stack development.
                </p>
              </div>

              <div className="timeline-item">
                <h3>Technical Learning</h3>
                <span>2024 — Present</span>
                <p>
                  Learning React, FastAPI, deployment, and modern web architecture.
                </p>
              </div>
            </div>

          </div>

          {/* SKILLS */}
          <h2>Skills</h2>

          <div className="skills-list">
            <p><strong>Frontend:</strong> React, JavaScript, HTML, CSS</p>
            <p><strong>Backend:</strong> FastAPI, Python</p>
            <p><strong>Database:</strong> PostgreSQL,SQL,MongoDB</p>
            <p><strong>Tools:</strong> Git, GitHub, Figma, Canva</p>
          </div>
        </>
      )}

      {/* PORTFOLIO */}
      {active === "portfolio" && (
        <>
          <h1>Projects</h1>
          <p>Projects  coming soon...</p>
        </>
      )}

      {/* CONTACT */}
     {active === "contact" && (
  <>
    <h1>Contact</h1>

    <div className="contact-form">

      <div className="form-row">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>

      <input type="text" placeholder="Subject" />

      <textarea placeholder="Your Message" rows="5"></textarea>

      <button className="send-btn">Send Message</button>

    </div>
  </>
)}

    </div>
  );
}

export default Main;