import axios from 'axios';
import * as cheerio from 'cheerio';
import { Album, Track } from './types.ts';
import {v4 as uuidv4} from 'uuid';

export async function importAlbumFromUrl(url: string): Promise<Album | null> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('h1.elementor-heading-title').first().text().trim();

    let artist = $('.elementor-post-info__item--author a').first().text().trim();
    if (!artist) {
        artist = title.split('–')[0].trim();
    }

    const artwork = $('meta[property="og:image"]').attr('content') ||
                  $('div.elementor-widget-theme-post-featured-image img').attr('src') ||
                  '';

    // Find the music URL from hearthis.at download or listen link
    let musicUrl = '';
    $('a[href*="hearthis.at"]').each((i, elem) => {
      const href = $(elem).attr('href');
      if (href && (href.includes('/listen.mp3') || href.includes('/download/'))) {
        if (href.includes('/listen.mp3')) {
          musicUrl = href;
        } else if (href.includes('/download/') && !musicUrl) {
          // Convert download URL to listen URL
          const match = href.match(/hearthis\.at\/([^/]+)\/([^/]+)\//);
          if (match) {
            musicUrl = `https://hearthis.at/${match[1]}/${match[2]}/listen.mp3`;
          }
        }
        return false; // Break the loop once we find a valid URL
      }
    });

    const tracks: Track[] = [];

    $('.elementor-widget-theme-post-content p, .elementor-widget-text-editor .elementor-widget-container').each((i, container) => {
        const contentHtml = $(container).html();
        if (contentHtml) {
            const lines = contentHtml.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '\n').split(/<br\s*\/?>|\n/i);
            lines.forEach(line => {
                const cleanLine = cheerio.load(line).text().trim();

                // Try to match timestamp format
                let match = cleanLine.match(/\[(.*?)\]\s*(.*)/);
                let duration = '00:00';
                let trackTitle = '';

                if (match) {
                    duration = match[1];
                    trackTitle = match[2];
                } else {
                    // Try to match numbered list format
                    match = cleanLine.match(/^(\d+)\s*(.*)/);
                    if (match) {
                        trackTitle = match[2];
                    } else {
                        trackTitle = cleanLine;
                    }
                }

                if (trackTitle && trackTitle.trim().toLowerCase() !== 'id – id' && trackTitle.trim() !== '') {
                    tracks.push({
                        id: uuidv4(),
                        title: trackTitle,
                        artist: artist,
                        duration: duration,
                        artwork: artwork,
                        url: musicUrl,
                    });
                }
            });
        }
    });


    if (!title || !artist || !artwork || tracks.length === 0) {
      console.error(`Failed to parse complete data for ${url}`);
      console.error(`Details: title='${title}', artist='${artist}', artwork='${artwork}', trackCount=${tracks.length}`);
      return null;
    }

    const album: Album = {
      id: uuidv4(),
      title,
      artist,
      artwork,
      tracks,
    };

    return album;
  } catch (error) {
    console.error(`Error during import from ${url}:`, error);
    return null;
  }
}