export default function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "85%",
        maxWidth: "1200px",
        padding: "18px 35px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <h2 style={{ color: "white" }}>❤️ Friendship</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a href="#home" style={linkStyle}>
          Home
        </a>

        <a href="#memories" style={linkStyle}>
          Memories
        </a>

        <a href="#gallery" style={linkStyle}>
          Gallery
        </a>

        <a href="#letter" style={linkStyle}>
          Letter
        </a>
      </div>
    </nav>
  );
}