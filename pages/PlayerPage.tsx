import React, { useState, useEffect, useRef } from 'react';
import type { Track, Album } from '../types';
import { MaterialIcon } from '../components/Icons';

interface PlayerPageProps {
  track: Track;
  album: Album | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};


const PlayerPage: React.FC<PlayerPageProps> = ({ track, album, onClose, onNext, onPrev }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !track.url) return;
      
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleLoadedMetadata = () => setDuration(audio.duration);
      const handleCanPlay = () => {
          audio.play().then(() => setIsPlaying(true)).catch(e => console.error("Playback failed", e));
      };
      const handleEnded = () => onNext();

      if (audio.src !== track.url) {
          audio.src = track.url;
          setDuration(0);
          setCurrentTime(0);
      }
      
      handleCanPlay();
      
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('ended', handleEnded);

      return () => {
          audio.removeEventListener('timeupdate', handleTimeUpdate);
          audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audio.removeEventListener('canplay', handleCanPlay);
          audio.removeEventListener('ended', handleEnded);
      };
  }, [track, onNext]);

  const togglePlayPause = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (isPlaying) {
          audio.pause();
      } else {
          audio.play();
      }
      setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const audio = audioRef.current;
      if (!audio) return;
      const newTime = Number(e.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const audio = audioRef.current;
      if (!audio) return;
      const newVolume = Number(e.target.value);
      audio.volume = newVolume;
      setVolume(newVolume);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-6 animate-fade-in bg-background-dark/80 dark:bg-background-dark/90 backdrop-blur-xl">
      <audio ref={audioRef} loop={false} />
      <header className="flex items-center justify-between">
        <button onClick={onClose} className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-zinc-900 dark:text-white">
          <MaterialIcon name="expand_more" />
        </button>
        <div className="text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">PLAYING FROM ALBUM</p>
          <p className="font-bold text-zinc-900 dark:text-white">{album?.title || 'Unknown Album'}</p>
        </div>
        <button className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-zinc-900 dark:text-white">
          <MaterialIcon name="more_vert" />
        </button>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 gap-8 py-8">
        <div className="relative w-full max-w-sm">
          <div className="w-full bg-center bg-cover shadow-2xl aspect-square rounded-xl shadow-primary/20" style={{ backgroundImage: `url("${track.artwork}")` }}></div>
          <div className="absolute inset-x-0 w-2/3 h-2/3 mx-auto -bottom-4 rounded-lg bg-primary/20 blur-3xl"></div>
        </div>

        <div className="flex flex-col w-full max-w-sm gap-6">
          <div className="flex items-center justify-between">
            <button className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary">
              <MaterialIcon name="add_circle" />
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{track.title}</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">{track.artist}</p>
            </div>
            <button className="text-primary">
              <MaterialIcon name="favorite" filled={true} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <input 
                type="range"
                value={currentTime}
                max={duration || 0}
                onChange={handleProgressChange}
                className="w-full h-2 rounded-full cursor-pointer appearance-none bg-primary/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
            <div className="flex justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : track.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary">
              <MaterialIcon name="shuffle" className="text-3xl" />
            </button>
            <div className="flex items-center gap-4">
              <button onClick={onPrev} className="text-zinc-900 dark:text-white">
                <MaterialIcon name="skip_previous" className="text-4xl" />
              </button>
              <button onClick={togglePlayPause} className="flex items-center justify-center w-20 h-20 text-white rounded-full bg-primary shadow-lg shadow-primary/50">
                <MaterialIcon name={isPlaying ? 'pause' : 'play_arrow'} className="text-5xl" />
              </button>
              <button onClick={onNext} className="text-zinc-900 dark:text-white">
                <MaterialIcon name="skip_next" className="text-4xl" />
              </button>
            </div>
            <button className="text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary">
              <MaterialIcon name="repeat" className="text-3xl" />
            </button>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400">
        <MaterialIcon name="volume_down" className="text-lg" />
        <input 
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 rounded-full cursor-pointer appearance-none bg-primary/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-1 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
        />
        <MaterialIcon name="volume_up" className="text-lg" />
      </footer>
    </div>
  );
};

export default PlayerPage;
