
import React from 'react';
import { MaterialIcon } from '../components/Icons';
import { trendingSearches, browseCategories } from '../data';

const SearchPage: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background-light/80 p-4 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Search</h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20">
            <MaterialIcon name="mic" />
          </button>
        </div>
        <div className="relative mt-4">
          <MaterialIcon name="search" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <input className="w-full rounded-lg border-transparent bg-primary/10 py-3 pl-10 pr-4 text-base placeholder-gray-500 focus:border-primary focus:ring-primary dark:bg-primary/20 dark:placeholder-gray-400" placeholder="Artists, tracks, playlists" type="text" />
        </div>
      </header>
      <div className="p-4">
        <section className="mb-6">
          <h2 className="mb-3 text-lg font-bold">Trending Searches</h2>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term) => (
              <button key={term} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                {term}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold">Browse All</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {browseCategories.map((category) => (
              <div key={category.id} className="group relative aspect-square overflow-hidden rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${category.artwork}")` }}>
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60"></div>
                <p className="absolute bottom-3 left-3 text-base font-bold text-white">{category.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchPage;
