import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const fullText = "❤️ Happy Friendship Day ❤️";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  const scrollToMemories = () => {
    const target = document.getElementById("memories");

    if (!target) return;

    const startPosition = window.pageYOffset;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    const distance = targetPosition - startPosition;

    const duration = 1800;

    let start = null;

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
      if (!start) start = currentTime;

      const elapsed = currentTime - start;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      window.scrollTo(
        0,
        startPosition +
          distance *
            easeInOutCubic(progress)
      );

      if (progress < 1) {
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
        padding: isMobile ? "20px" : "40px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        style={{
          fontSize: isMobile
            ? "42px"
            : "72px",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow:
            "0 0 30px #8b5cf6",
        }}
      >
        {displayText}

        <span
          style={{
            animation:
              "blink 1s infinite",
            color: "#a855f7",
          }}
        >
          |
        </span>
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        style={{
          fontSize: isMobile
            ? "18px"
            : "24px",
          maxWidth: "700px",
          lineHeight: "1.8",
          color: "#d8d8d8",
          marginBottom: "45px",
        }}
      >
        Every memory with you is priceless.
        <br />
        Thank you for always being there.
        <br />
        Friends Forever 💜
      </motion.p>
            <motion.button
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 45px #a855f7",
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={scrollToMemories}
        style={{
          padding: isMobile
            ? "16px 35px"
            : "18px 55px",
          fontSize: isMobile
            ? "18px"
            : "22px",
          fontWeight: "bold",
          color: "white",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          background:
            "linear-gradient(135deg,#7c3aed,#a855f7)",
          boxShadow:
            "0 0 30px #8b5cf6",
        }}
      >
        Explore ❤️
      </motion.button>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.7,
        }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        style={{
          marginTop: "70px",
          fontSize: isMobile
            ? "15px"
            : "18px",
        }}
      >
        ↓ Scroll Down ↓
      </motion.p>
    </section>
  );
}