import { useState, useEffect } from "react";

import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.png";
import friend4 from "../assets/friend4.png";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";

const images = [
  friend1,
  friend2,
  friend3,
  friend4,
  friend5,
  friend6,
  friend7,
  friend8,
];

export default function Gallery() {
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
      id="gallery"
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
        📸 Our Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2,1fr)"
            : "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              cursor: "pointer",
              background: "rgba(255,255,255,.08)",
              border: "1px solid rgba(255,255,255,.1)",
              transition: ".35s",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(168,85,247,.7)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={img}
              alt={`Friend ${index + 1}`}
              style={{
                width: "100%",
                height: isMobile ? "180px" : "320px",
                objectFit: "cover",
              }}
            />
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
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <img
            src={selectedImage}
            alt=""
            style={{
              width: isMobile ? "95%" : "80%",
              maxWidth: "950px",
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
              border: "none",
              borderRadius: "50%",
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