export default function Seccion({ id, onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)" }}>
      <button
        onClick={onBack}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 999,
          background: "none",
          border: "1px solid var(--border-subtle)",
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        ← Volver
      </button>

      <div style={{ padding: "120px 48px" }}>
        <div id={id.replace("#", "")} />
      </div>
    </div>
  );
}
