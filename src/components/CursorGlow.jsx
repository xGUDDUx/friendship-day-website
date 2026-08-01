import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.style.position = "fixed";
    cursor.style.width = "25px";
    cursor.style.height = "25px";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.background = "rgba(168,85,247,.35)";
    cursor.style.border = "2px solid #a855f7";
    cursor.style.boxShadow = `
      0 0 20px #a855f7,
      0 0 40px #7c3aed,
      0 0 60px #7c3aed
    `;
    cursor.style.backdropFilter = "blur(8px)";
    cursor.style.zIndex = "999999";
    cursor.style.transition = "transform .08s linear";

    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX - 12 + "px";
      cursor.style.top = e.clientY - 12 + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}