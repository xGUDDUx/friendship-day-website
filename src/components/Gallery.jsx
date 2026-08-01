import { useState } from "react";

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

  return (
    <section
      id="gallery"
      style={{
        padding: "120px 60px",
        background: "#090014",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "60px",
        }}
      >
        📸 Our Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
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
              transition: "0.3s",
              boxShadow: "0 10px 25px rgba(0,0,0,.4)",
            }}
          >
            <img
              src={img}
              alt={`Friend ${index + 1}`}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "0.4s",
              }}
              onMouseOver={(e) =>
                (e.target.style.transform = "scale(1.08)")
              }
              onMouseOut={(e) =>
                (e.target.style.transform = "scale(1)")
              }
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
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
              borderRadius: "20px",
              boxShadow: "0 0 35px #8b5cf6",
            }}
          />
        </div>
      )}
    </section>
  );
}