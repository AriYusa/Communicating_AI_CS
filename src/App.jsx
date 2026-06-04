import { projects } from "./data/projects";

export default function App() {
  return (
    <div
      style={{
        padding: "50px 24px",
        color: "white",
        background: "#0f172a",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto 70px auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            lineHeight: "1.15",
            margin: "0 0 24px 0",
            color: "white",
          }}
        >
          AI & Cybersecurity Project Showcase
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#cbd5e1",
            margin: 0,
          }}
        >
          Explore student projects in Artificial Intelligence, Cybersecurity,
          Data Science, and Computer Science. Discover research ideas,
          practical applications, and real-world solutions developed throughout
          the course.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "28px",
            color: "white",
            fontSize: "28px",
          }}
        >
          Featured Projects
        </h2>

        <div style={{ display: "grid", gap: "20px" }}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "24px",
                background: "#1e293b",
                borderRadius: "12px",
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}