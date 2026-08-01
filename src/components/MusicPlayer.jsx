import { forwardRef, useImperativeHandle, useRef } from "react";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playMusic() {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log(err);
        });
      }
    },

    pauseMusic() {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    },
  }));

  return (
    <audio ref={audioRef} loop>
      <source src="/music/song.mp3" type="audio/mpeg" />
    </audio>
  );
});

export default MusicPlayer;