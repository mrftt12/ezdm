import React, { useState, useCallback } from 'react';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import ProfilePage from './pages/ProfilePage';
import PlayerPage from './pages/PlayerPage';
import SectionPage from './pages/SectionPage';
import { trendingNow, madeForYou, newReleases } from './data';
import type { Track, Album } from './types';

export type Page = 'Home' | 'Search' | 'Library' | 'Profile';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('Home');
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    const handlePlayTrack = useCallback((track: Track, album: Album) => {
        const trackIndex = album.tracks.findIndex(t => t.id === track.id);
        if (trackIndex !== -1) {
            setCurrentTrack(track);
            setCurrentAlbum(album);
            setCurrentTrackIndex(trackIndex);
            setPlayerVisible(true);
        }
    }, []);

    const handleClosePlayer = useCallback(() => {
        setPlayerVisible(false);
    }, []);

    const handleNextTrack = useCallback(() => {
        if (currentAlbum && currentTrackIndex !== null) {
            const nextIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
            setCurrentTrackIndex(nextIndex);
            setCurrentTrack(currentAlbum.tracks[nextIndex]);
        }
    }, [currentAlbum, currentTrackIndex]);

    const handlePrevTrack = useCallback(() => {
        if (currentAlbum && currentTrackIndex !== null) {
            const prevIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
            setCurrentTrackIndex(prevIndex);
            setCurrentTrack(currentAlbum.tracks[prevIndex]);
        }
    }, [currentAlbum, currentTrackIndex]);


    const handleNavigateToSection = useCallback((section: string) => {
        setCurrentSection(section);
    }, []);

    const handleBackFromSection = useCallback(() => {
        setCurrentSection(null);
    }, []);

    const getSectionData = (section: string): { title: string; albums: Album[] } => {
        switch (section) {
            case 'trending':
                return { title: 'Trending now', albums: trendingNow };
            case 'madeForYou':
                return { title: 'Made for you', albums: madeForYou };
            case 'newReleases':
                return { title: 'New releases', albums: newReleases };
            default:
                return { title: '', albums: [] };
        }
    };

    const renderPage = () => {
        if (currentSection) {
            const { title, albums } = getSectionData(currentSection);
            return (
                <SectionPage
                    title={title}
                    albums={albums}
                    onPlayTrack={handlePlayTrack}
                    onBack={handleBackFromSection}
                />
            );
        }

        switch (activePage) {
            case 'Home':
                return <HomePage onPlayTrack={handlePlayTrack} onNavigateToSection={handleNavigateToSection} />;
            case 'Search':
                return <SearchPage />;
            case 'Library':
                return <LibraryPage />;
            case 'Profile':
                return <ProfilePage />;
            default:
                return <HomePage onPlayTrack={handlePlayTrack} onNavigateToSection={handleNavigateToSection} />;
        }
    };

    return (
        <div className="relative flex w-full h-auto min-h-screen flex-col justify-between overflow-x-hidden">
            <main className="flex-grow pb-24">
                {renderPage()}
            </main>
            
            {!isPlayerVisible && <BottomNav activePage={activePage} onNavigate={setActivePage} />}

            {isPlayerVisible && currentTrack && (
                <PlayerPage 
                    track={currentTrack} 
                    album={currentAlbum} 
                    onClose={handleClosePlayer}
                    onNext={handleNextTrack}
                    onPrev={handlePrevTrack}
                />
            )}
        </div>
    );
};

export default App;
