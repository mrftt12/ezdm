
import React from 'react';
import { libraryPlaylists } from '../data';

const LibraryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('Playlists');
  const filters = ['Playlists', 'Podcasts', 'Albums', 'Artists'];

  return (
    <>
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4 pt-4 pb-2">
        <div className="flex items-center h-12 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: `url("https://picsum.photos/seed/user/100/100")` }}></div>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-full h-10 w-10 text-slate-800 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary/20">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">My Library</h1>
      </header>
      <div className="p-4">
        <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar">
          {filters.map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-semibold ${activeFilter === filter ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {libraryPlaylists.map(playlist => (
            <a key={playlist.id} className="flex items-center gap-4 rounded-lg p-2 hover:bg-primary/10 dark:hover:bg-primary/20" href="#">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded size-14" style={{ backgroundImage: `url("${playlist.artwork}")` }}></div>
              <div className="flex-grow overflow-hidden">
                <p className="text-slate-900 dark:text-white font-semibold truncate">{playlist.name}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm truncate">{playlist.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
