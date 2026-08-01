import { useState } from "react";
import confetti from "canvas-confetti";

export default function WelcomeScreen({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Left Firework
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { x: 0.2, y: 0.8 },
    });

    // Right Firework
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { x: 0.8, y: 0.8 },
    });

    // Center Explosion
    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 150,
        origin: { x: 0.5, y: 0.5 },
      });
    }, 300);

    // Small Continuous Fireworks
    const duration = 1200;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });
    }, 180);

    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(135deg,#090014,#16002d,#220033)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        opacity: clicked ? 0 : 1,
        transition: "opacity 1s ease",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: window.innerWidth < 768 ? "40px" : "72px",
            marginBottom: "25px",
            textShadow: "0 0 30px #a855f7",
          }}
        >
          ❤️ Happy Friendship Day ❤️
        </h1>

        <p
          style={{
            fontSize: window.innerWidth < 768 ? "18px" : "24px",
            marginBottom: "50px",
            opacity: 0.9,
          }}
        >
          A small surprise made with love 💜
        </p>

        <button
          onClick={handleClick}
          style={{
            padding: "20px 60px",
            fontSize: window.innerWidth < 768 ? "18px" : "24px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            color: "white",
            background:
              "linear-gradient(135deg,#7c3aed,#a855f7)",
            boxShadow: "0 0 40px #8b5cf6",
            transition: ".3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.08)";
            e.target.style.boxShadow = "0 0 60px #a855f7";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 0 40px #8b5cf6";
          }}
        >
          ❤️ Enter Our Friendship ❤️
        </button>
      </div>
    </div>
  );
}