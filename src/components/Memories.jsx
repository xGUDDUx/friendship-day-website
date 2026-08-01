import { useState, useEffect } from "react";

import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.png";
import friend4 from "../assets/friend4.png";

const memories = [
  {
    title: "Meet",
    image: friend1,
  },
  {
    title: "School Days",
    image: friend2,
  },
  {
    title: "Ansh Farmin Aura",
    image: friend3,
  },
  {
    title: "Forever Friends",
    image: friend4,
  },
];

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState(null);

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
      id="memories"
      style={{
        padding: isMobile ? "90px 20px" : "120px 60px",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: isMobile ? "40px" : "65px",
          marginBottom: "50px",
          textShadow: "0 0 20px #8b5cf6",
        }}
      >
        Beautiful Memories ✨
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit,minmax(270px,1fr))",
          gap: "30px",
        }}
      >
        {memories.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            style={{
              background: "rgba(255,255,255,.08)",
              backdropFilter: "blur(20px)",
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
              transition: ".35s",
              border: "1px solid rgba(255,255,255,.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(168,85,247,.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: isMobile ? "300px" : "260px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: isMobile ? "28px" : "32px",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.92)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            backdropFilter: "blur(8px)",
          }}
        >
          <img
            src={selectedImage}
            alt=""
            style={{
              width: isMobile ? "92%" : "80%",
              maxWidth: "900px",
              maxHeight: "90vh",
              borderRadius: "20px",
              boxShadow: "0 0 40px #8b5cf6",
            }}
          />

          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "none",
              background: "#8b5cf6",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}