export default function Hero() {
  const scrollToMemories = () => {
    const target = document.getElementById("memories");

    if (!target) return;

    const start = window.pageYOffset;
    const end = target.offsetTop;
    const distance = end - start;
    const duration = 1500; // 1.5 seconds

    let startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(
        0,
        start + distance * easeInOutQuad(progress)
      );

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          marginBottom: "20px",
          fontWeight: "bold",
          textShadow: "0 0 20px #8b5cf6",
        }}
      >
        ❤️ Happy Friendship Day ❤️
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#d8d8d8",
          maxWidth: "700px",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        Every memory with you is priceless.
        <br />
        Thank you for always being there.
        <br />
        Friends Forever 💜
      </p>

      <button
        onClick={scrollToMemories}
        style={{
          padding: "18px 55px",
          fontSize: "22px",
          fontWeight: "bold",
          background: "linear-gradient(135deg,#7c3aed,#a855f7)",
          color: "white",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 0 30px #8b5cf6",
          transition: "all .4s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.08)";
          e.target.style.boxShadow = "0 0 50px #a855f7";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 0 30px #8b5cf6";
        }}
      >
        Explore ❤️
      </button>

      <p
        style={{
          marginTop: "80px",
          opacity: "0.6",
          fontSize: "18px",
          animation: "bounce 2s infinite",
        }}
      >
        ↓ Scroll Down ↓
      </p>
    </section>
  );
}