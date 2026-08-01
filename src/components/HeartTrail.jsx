import { useEffect } from "react";

export default function HeartTrail() {
  useEffect(() => {
    const hearts = [];

    const createHeart = (x, y) => {
      const heart = document.createElement("div");

      heart.innerHTML = "💜";

      heart.style.position = "fixed";
      heart.style.left = x + "px";
      heart.style.top = y + "px";
      heart.style.fontSize = Math.random() * 12 + 12 + "px";
      heart.style.pointerEvents = "none";
      heart.style.userSelect = "none";
      heart.style.zIndex = "99999";
      heart.style.transition = "all 1.2s ease-out";
      heart.style.filter = "drop-shadow(0 0 12px #a855f7)";

      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = `
          translate(
            ${(Math.random()-0.5)*60}px,
            -${80+Math.random()*60}px
          )
          rotate(${Math.random()*360}deg)
          scale(${1.4+Math.random()})
        `;

        heart.style.opacity = "0";
      });

      hearts.push(heart);

      if (hearts.length > 30) {
        hearts.shift()?.remove();
      }

      setTimeout(() => {
        heart.remove();
      }, 1200);
    };

    let last = 0;

    const move = (e) => {
      const now = Date.now();

      if (now - last > 40) {
        createHeart(e.clientX, e.clientY);
        last = now;
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}