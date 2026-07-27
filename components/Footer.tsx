export default function Footer() {
  return (
    <footer
      className="py-8 text-center border-t"
      style={{ background: "var(--bg)", borderColor: "var(--line)" }}
    >
      <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
        Designed &amp; built by{" "}
        <span style={{ color: "var(--sub)" }}>Sandro Sage</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
