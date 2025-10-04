import React from 'react';
import { MaterialIcon } from '../components/Icons';
import { trendingNow, madeForYou, newReleases } from '../data';
import type { Track, Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onPlay: (track: Track, album: Album) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onPlay }) => (
  <div className="w-40 flex-shrink-0 snap-start" onClick={() => album.tracks.length > 0 && onPlay(album.tracks[0], album)}>
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

interface AlbumSectionProps {
  title: string;
  albums: Album[];
  onPlayTrack: (track: Track, album: Album) => void;
  onSeeAll?: () => void;
  limit?: number;
}

const AlbumSection: React.FC<AlbumSectionProps> = ({ title, albums, onPlayTrack, onSeeAll, limit }) => {
  const displayedAlbums = limit ? albums.slice(0, limit) : albums;

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        {onSeeAll && albums.length > (limit || 0) && (
          <button
            onClick={onSeeAll}
            className="text-sm font-semibold text-primary hover:underline"
          >
            See all
          </button>
        )}
      </div>
      <div className="no-scrollbar mt-4 flex snap-x snap-mandatory space-x-4 overflow-x-auto pb-2">
        {displayedAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} onPlay={onPlayTrack} />
        ))}
      </div>
    </section>
  );
};

interface HomePageProps {
    onPlayTrack: (track: Track, album: Album) => void;
    onNavigateToSection?: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPlayTrack, onNavigateToSection }) => {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 p-4 backdrop-blur-sm dark:bg-background-dark/80">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Good evening</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-400 dark:hover:bg-primary/20">
          <MaterialIcon name="settings" className="text-2xl" />
        </button>
      </header>
      <div className="px-4">
        <AlbumSection
          title="Trending now"
          albums={trendingNow}
          onPlayTrack={onPlayTrack}
          limit={3}
          onSeeAll={() => onNavigateToSection?.('trending')}
        />
        <AlbumSection
          title="Made for you"
          albums={madeForYou}
          onPlayTrack={onPlayTrack}
          limit={3}
          onSeeAll={() => onNavigateToSection?.('madeForYou')}
        />
        <AlbumSection
          title="New releases"
          albums={newReleases}
          onPlayTrack={onPlayTrack}
          limit={3}
          onSeeAll={() => onNavigateToSection?.('newReleases')}
        />
      </div>
    </>
  );
};

export default HomePage;