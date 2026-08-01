import { useRef, useState } from "react";

import Background from "./components/Background";
import FloatingHearts from "./components/FloatingHearts";
import HeartTrail from "./components/HeartTrail";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const musicRef = useRef(null);
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);

    if (musicRef.current) {
      musicRef.current.playMusic();
    }
  };

  return (
    <>
      {!entered && (
        <WelcomeScreen onEnter={handleEnter} />
      )}

      <CursorGlow />
      <HeartTrail />

      <Background />
      <FloatingHearts />
      <Navbar />
      <Hero />
      <Memories />
      <Gallery />
      <Letter />
      <Footer />

      <MusicPlayer ref={musicRef} />
    </>
  );
}

export default App;