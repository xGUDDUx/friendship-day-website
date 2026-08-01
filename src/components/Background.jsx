export default function Background() {
  return (
    <>
      {/* Main Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(180deg, #120021 0%, #090014 50%, #05000d 100%)",
          zIndex: -5,
        }}
      />

      {/* Purple Glow */}
      <div
        style={{
          position: "fixed",
          width: "550px",
          height: "550px",
          background: "#8b5cf6",
          borderRadius: "50%",
          filter: "blur(180px)",
          top: "-180px",
          left: "-180px",
          opacity: "0.45",
          zIndex: -4,
        }}
      />

      {/* Pink Glow */}
      <div
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          background: "#ec4899",
          borderRadius: "50%",
          filter: "blur(180px)",
          bottom: "-180px",
          right: "-180px",
          opacity: "0.35",
          zIndex: -4,
        }}
      />

      {/* Blue Glow */}
      <div
        style={{
          position: "fixed",
          width: "350px",
          height: "350px",
          background: "#3b82f6",
          borderRadius: "50%",
          filter: "blur(150px)",
          top: "40%",
          left: "40%",
          opacity: "0.15",
          zIndex: -4,
        }}
      />
    </>
  );
}