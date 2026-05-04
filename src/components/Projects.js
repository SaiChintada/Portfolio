const projects = [
  {
    title: "Expense Tracker",
    tech: "React + FastAPI + PostgreSQL",
    desc: "Track expenses with analytics dashboard",
    color: "#1a1a2e"
  },
  {
    title: "Bus Tracking System",
    tech: "React + Maps API",
    desc: "Live tracking of buses using maps",
    color: "#16213e"
  },
  {
    title: "Banking API",
    tech: "FastAPI + SQL",
    desc: "Backend system for transactions",
    color: "#0f3460"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            style={{ background: p.color }}
          >
            <h3>{p.title}</h3>
            <p>{p.tech}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;