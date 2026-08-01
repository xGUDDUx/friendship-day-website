import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <footer
      style={{
        padding: isMobile ? "50px 20px" : "70px 40px",
        textAlign: "center",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        marginTop: "80px",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "28px" : "42px",
          marginBottom: "15px",
          textShadow: "0 0 15px #8b5cf6",
        }}
      >
        ❤️ Happy Friendship Day ❤️
      </h2>

      <p
        style={{
          fontSize: isMobile ? "16px" : "20px",
          color: "#cfcfcf",
          marginBottom: "25px",
          lineHeight: "1.8",
        }}
      >
        True friendship is one of life's greatest gifts.
        <br />
        Thank you for making every moment unforgettable.
      </p>

      <p
        style={{
          fontSize: isMobile ? "14px" : "16px",
          opacity: "0.7",
        }}
      >
        Made with ❤️ by Dhanish
      </p>
    </footer>
  );
}