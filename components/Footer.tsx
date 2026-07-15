export default function Footer() {
  return (
    <footer
      className="py-6 text-center text-sm border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      Designed & built by{" "}
      <span style={{ color: "var(--accent)" }}>Sandro Sage</span> · {new Date().getFullYear()}
    </footer>
  );
}
