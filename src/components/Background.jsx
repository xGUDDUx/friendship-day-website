import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes aurora1 {
        0% { transform: translate(-10%, -10%) rotate(0deg); }
        50% { transform: translate(10%, 10%) rotate(180deg); }
        100% { transform: translate(-10%, -10%) rotate(360deg); }
      }

      @keyframes aurora2 {
        0% { transform: translate(10%, -10%) rotate(0deg); }
        50% { transform: translate(-10%, 10%) rotate(180deg); }
        100% { transform: translate(10%, -10%) rotate(360deg); }
      }

      @keyframes aurora3 {
        0% { transform: translate(-5%, 5%) rotate(0deg); }
        50% { transform: translate(5%, -5%) rotate(180deg); }
        100% { transform: translate(-5%, 5%) rotate(360deg); }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: -2,
        background:
          "linear-gradient(180deg,#05010d,#120022,#19002f,#090014)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.45), transparent 70%)",
          filter: "blur(80px)",
          top: "-300px",
          left: "-250px",
          animation: "aurora1 25s linear infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",
          filter: "blur(80px)",
          bottom: "-350px",
          right: "-250px",
          animation: "aurora2 30s linear infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%)",
          filter: "blur(70px)",
          top: "35%",
          left: "35%",
          animation: "aurora3 22s linear infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent, rgba(0,0,0,.35))",
        }}
      />
    </div>
  );
}