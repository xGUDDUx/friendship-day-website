import { useState } from "react";

export default function WelcomeScreen({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      onEnter();
    }, 700);
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
        transition: "0.7s",
        opacity: clicked ? 0 : 1,
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "25px",
            textShadow: "0 0 25px #a855f7",
          }}
        >
          ❤️ Happy Friendship Day ❤️
        </h1>

        <p
          style={{
            fontSize: "24px",
            opacity: 0.8,
            marginBottom: "50px",
          }}
        >
          A small surprise made with love 💜
        </p>

        <button
          onClick={handleClick}
          style={{
            padding: "20px 70px",
            fontSize: "24px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            color: "white",
            background:
              "linear-gradient(135deg,#7c3aed,#a855f7)",
            boxShadow: "0 0 40px #8b5cf6",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.08)";
            e.target.style.boxShadow =
              "0 0 60px #a855f7";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow =
              "0 0 40px #8b5cf6";
          }}
        >
          ❤️ Enter Our Friendship ❤️
        </button>
      </div>
    </div>
  );
}