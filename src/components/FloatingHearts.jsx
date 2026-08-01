export default function FloatingHearts() {
  const hearts = [];

  for (let i = 0; i < 25; i++) {
    hearts.push(
      <span
        key={i}
        style={{
          position: "fixed",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${15 + Math.random() * 20}px`,
          opacity: 0.15,
          color: "#ff4d6d",
          animation: `float ${6 + Math.random() * 8}s linear infinite`,
          animationDelay: `${Math.random() * 6}s`,
          pointerEvents: "none",
          zIndex: -3,
          userSelect: "none",
        }}
      >
        ❤️
      </span>
    );
  }

  return <>{hearts}</>;
}