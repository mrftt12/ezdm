import React from 'react';
import { MaterialIcon } from '../components/Icons';
import type { Track, Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onPlay: (track: Track, album: Album) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onPlay }) => (
  <div className="w-40 flex-shrink-0" onClick={() => album.tracks.length > 0 && onPlay(album.tracks[0], album)}>
    <div className="group relative cursor-pointer overflow-hidden rounded-xl">
      <img alt={album.title} className="aspect-square w-full object-cover" src={album.artwork} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-3">
        <p className="truncate font-semibold text-white">{album.title}</p>
        {album.artist && <p className="truncate text-xs text-white/80">{album.artist}</p>}
      </div>
    </div>
  </div>
);

interface SectionPageProps {
  title: string;
  albums: Album[];
  onPlayTrack: (track: Track, album: Album) => void;
  onBack: () => void;
}

const SectionPage: React.FC<SectionPageProps> = ({ title, albums, onPlayTrack, onBack }) => {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center bg-background-light/80 p-4 backdrop-blur-sm dark:bg-background-dark/80">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-400 dark:hover:bg-primary/20"
        >
          <MaterialIcon name="arrow_back" className="text-2xl" />
        </button>
        <h1 className="ml-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
      </header>
      <div className="px-4 pb-8">
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} onPlay={onPlayTrack} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionPage;
