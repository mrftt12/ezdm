
export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string; // e.g., "3:45"
  artwork: string;
  url?: string;
}

export interface Album {
  id: string;
  title: string;
  artist?: string;
  artwork: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  artwork: string;
}

export interface BrowseCategory {
  id: string;
  name: string;
  artwork: string;
}