import { useEffect, useState } from "react";

export default function Letter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      id="letter"
      style={{
        padding: isMobile ? "90px 20px" : "120px 60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: isMobile ? "30px" : "50px",
          boxShadow: "0 0 35px rgba(139,92,246,.35)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: isMobile ? "36px" : "60px",
            marginBottom: "35px",
            textShadow: "0 0 20px #8b5cf6",
          }}
        >
          💌 A Letter To My Best Friend
        </h2>

        <p
          style={{
            fontSize: isMobile ? "18px" : "22px",
            lineHeight: "2",
            color: "#dddddd",
            textAlign: "justify",
          }}
        >
          Dear Best Friend,
          <br />
          <br />

          Thank you for always standing beside me through every smile,
          every challenge, and every unforgettable memory.

          <br />
          <br />

          You have made my life brighter with your kindness,
          support and endless laughter.

          <br />
          <br />

          Every memory we've shared is a treasure that I will always
          carry with me.

          <br />
          <br />

          No matter where life takes us, I know our friendship will
          always remain strong.

          <br />
          <br />

          ❤️ Happy Friendship Day ❤️

          <br />
          <br />

          <strong>— Your Best Friend ❤️</strong>
        </p>
      </div>
    </section>
  );
}