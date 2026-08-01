export default function Letter() {
  return (
    <section
      id="letter"
      style={{
        padding: "120px 60px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 0 40px rgba(139,92,246,0.25)",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "40px",
            textShadow: "0 0 20px #8b5cf6",
          }}
        >
          💌 A Letter To My Best Friend
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "2",
            color: "#dddddd",
            textAlign: "justify",
          }}
        >
          Dear Best Friend,
          <br />
          <br />
          Thank you for always being there for me through every happy moment
          and every difficult day.
          <br />
          <br />
          Your support, kindness, and laughter have made my life brighter.
          Every memory we created together will always have a special place in
          my heart.
          <br />
          <br />
          I hope our friendship stays strong forever, no matter where life
          takes us.
          <br />
          <br />
          ❤️ Happy Friendship Day ❤️
          <br />
          <br />
          — Your Friend
        </p>
      </div>
    </section>
  );
}