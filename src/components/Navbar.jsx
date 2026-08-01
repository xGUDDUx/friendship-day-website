import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: isMobile ? "92%" : "80%",
        padding: "18px 30px",
        borderRadius: "30px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: isMobile ? "24px" : "32px",
        }}
      >
        ❤️ Friendship
      </h2>

      {isMobile ? (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "80px",
                left: 0,
                right: 0,
                background: "rgba(20,20,40,0.95)",
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                textAlign: "center",
              }}
            >
              <a href="#home" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#memories" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                Memories
              </a>

              <a href="#gallery" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                Gallery
              </a>

              <a href="#letter" style={navLinkStyle} onClick={() => setMenuOpen(false)}>
                Letter
              </a>
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "35px",
          }}
        >
          <a href="#home" style={navLinkStyle}>
            Home
          </a>

          <a href="#memories" style={navLinkStyle}>
            Memories
          </a>

          <a href="#gallery" style={navLinkStyle}>
            Gallery
          </a>

          <a href="#letter" style={navLinkStyle}>
            Letter
          </a>
        </div>
      )}
    </nav>
  );
}