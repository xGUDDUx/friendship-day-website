import { useState } from "react";

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

  return (
    <section
      id="memories"
      style={{
        padding: "170px 60px 120px",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "65px",
          marginBottom: "60px",
          textShadow: "0 0 20px #8b5cf6",
        }}
      >
        Beautiful Memories ✨
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
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
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: "25px",
              overflow: "hidden",
              cursor: "pointer",
              transition: ".35s",
              boxShadow: "0 10px 25px rgba(0,0,0,.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(168,85,247,.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,.35)";
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                transition: ".4s",
              }}
            />

            <div
              style={{
                padding: "22px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "30px",
                  fontWeight: "bold",
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
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt=""
            style={{
              width: "80%",
              maxWidth: "900px",
              maxHeight: "90vh",
              borderRadius: "25px",
              boxShadow: "0 0 50px #8b5cf6",
            }}
          />

          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              border: "none",
              background: "#8b5cf6",
              color: "white",
              fontSize: "28px",
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