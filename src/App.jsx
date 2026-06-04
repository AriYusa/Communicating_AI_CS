import Footer from "./components/Footer";
import Header from "./components/Header";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div
      style={{
        padding: 40,
        color: "white",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Header />
      <h1>AI&CS Projects</h1>

      <div style={{ display: "grid", gap: 20 }}>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            style={{
              padding: 20,
              background: "#1e293b",
              borderRadius: 12,
              color: "white",
              textDecoration: "none",
            }}
          >
            {p.name}
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
