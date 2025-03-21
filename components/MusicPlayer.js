import { useState, useRef, useEffect } from 'react';
import styles from '../styles/music.module.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    { title: 'Song 1', src: '/music/song1.mp3' },
    { title: 'Song 2', src: '/music/song2.mp3' },
  ];

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  const playPreviousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  return (
    <div className={styles.musicPlayer}>
      <h2>{tracks[currentTrackIndex].title}</h2>
      <audio ref={audioRef} src={tracks[currentTrackIndex].src} />
      <div className={styles.controls}>
        <button onClick={playPreviousTrack}>Previous</button>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={playNextTrack}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;