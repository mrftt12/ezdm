import { importAlbumFromUrl } from './import.ts';
import { Album } from './types.ts';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urls = [
    "https://www.edmliveset.com/livesets/adam-beyer-ultra-japan-2025-resistance/",
    "https://www.edmliveset.com/livesets/gorgon-city-live-at-ants-ibiza-2025-ushuaia-ibiza/",
    "https://www.edmliveset.com/livesets/gorgon-city-live-at-creamfields-2025-sunday-steel-yard/",
    "https://www.edmliveset.com/livesets/eli-brown-live-at-creamfields-2025-saturday-steel-yard/",
    "https://www.edmliveset.com/livesets/max-styler-live-at-creamfields-2025-saturday-halo/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-creamfields-2025-friday-apex/",
    "https://www.edmliveset.com/livesets/john-summit-live-at-creamfields-2025-friday-steel-yard/",
    "https://www.edmliveset.com/livesets/adam-beyer-live-at-creamfields-2025-friday-steel-yard/",
    "https://www.edmliveset.com/livesets/adam-beyer-live-at-awakenings-festival-2025-beekse-bergen-netherlands/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-awakenings-festival-2025-beekse-bergen-netherlands/",
    "https://www.edmliveset.com/livesets/cassian-live-at-tomorrowland-2025-w2-day-3-freedom-stage/",
    "https://www.edmliveset.com/livesets/kaskade-live-at-tomorrowland-2025-w2-day-1-mainstage/",
    "https://www.edmliveset.com/livesets/cassian-b2b-kevin-de-vries-live-at-tomorrowland-2025-day-2-mainstage/",
    "https://www.edmliveset.com/livesets/hi-lo-amp-eli-brown-live-at-tomorrowland-2025-day-1-freedom-stage/",
    "https://www.edmliveset.com/livesets/john-summit-live-at-ultra-europe-2025-split-croatia/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-exit-festival-2025-novi-sad-serbia/",
    "https://www.edmliveset.com/livesets/tiesto-live-at-palacio-de-los-deportes-mexico-city-mexico-14-06-2025/",
    "https://www.edmliveset.com/livesets/alison-wonderland-b2b-kaskade-live-at-edc-las-vegas-2025-cosmic-meadow-day-3/",
    "https://www.edmliveset.com/livesets/tiesto-in-search-of-sunrise-set-live-at-edc-las-vegas-2025-kinetic-field-day-3/",
    "https://www.edmliveset.com/livesets/gorgon-city-live-at-edc-las-vegas-2025-kinetic-field-day-1/",
    "https://www.edmliveset.com/livesets/dom-dolla-b2b-chase-status-live-at-edc-las-vegas-2025-kinetic-field-day-1/",
    "https://www.edmliveset.com/livesets/kaskade-live-at-edc-las-vegas-2025-kinetic-field-day-2/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-edc-las-vegas-2025-circuit-grounds-day-2/",
    "https://www.edmliveset.com/livesets/eric-prydz-live-at-edc-las-vegas-2025-kinetic-field-day-2/",
    "https://www.edmliveset.com/livesets/max-styler-live-at-edc-las-vegas-2025-circuit-grounds-day-1/",
    "https://www.edmliveset.com/livesets/layton-giordani-live-at-edc-las-vegas-2025-circuit-grounds-day-1/",
    "https://www.edmliveset.com/livesets/tiesto-live-at-edc-las-vegas-2025-circuit-grounds-day-1/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-ultra-music-festival-miami-2025-megastructure-day-3/",
    "https://www.edmliveset.com/livesets/deadmau5-retro5pective-live-at-ultra-music-festival-miami-2025-worldwide-stage-day-3/",
    "https://www.edmliveset.com/livesets/deadmau5-beyond-wonderland-socal-2025-nos-events-center-san-bernardino-usa/",
    "https://www.edmliveset.com/livesets/kevin-de-vries-live-at-ultra-music-festival-miami-2025-the-cove-day-2/",
    "https://www.edmliveset.com/livesets/adam-beyer-live-at-ultra-music-festival-miami-2025-megastructure-day-2/",
    "https://www.edmliveset.com/livesets/deadmau5-b2b-pendulum-live-at-ultra-music-festival-miami-2025-worldwide-stage-day-2/",
    "https://www.edmliveset.com/livesets/tiesto-live-at-ultra-music-festival-miami-2025-mainstage-day-1/",
    "https://www.edmliveset.com/livesets/john-summit-dom-dolla-live-at-ultra-music-festival-miami-2025-mainstage-day-1/",
    "https://www.edmliveset.com/livesets/armin-van-buuren-b2b-adam-beyer-live-at-a-state-of-trance-2025-ahoy-rotterdam-22-02-2025/",
    "https://www.edmliveset.com/livesets/eli-brown-live-at-a-state-of-trance-2025-ahoy-rotterdam-22-02-2025/",
    "https://www.edmliveset.com/livesets/adam-beyer-live-at-a-state-of-trance-2025-ahoy-rotterdam-22-02-2025/",
    "https://www.edmliveset.com/livesets/gorgon-city-live-at-above-sydney/",
    "https://www.edmliveset.com/livesets/layton-giordani-live-from-avant-gardner-brooklyn-new-york-2024/",
    "https://www.edmliveset.com/livesets/kaskade-live-at-wollman-rink-for-we-belong-here-central-park-new-york/",
    "https://www.edmliveset.com/livesets/max-styler-day-trip-festival-2024/",
    "https://www.edmliveset.com/livesets/mau-p-live-at-edc-orlando-2024/",
    "https://www.edmliveset.com/livesets/john-summit-live-at-edc-orlando-2024/",
    "https://www.edmliveset.com/livesets/adam-beyer-awakenings-x-drumcode-ade-2024/",
    "https://www.edmliveset.com/livesets/gorgon-city-live-at-slam-mixmarathon-ade-2024/",
    "https://www.edmliveset.com/livesets/cassian-edc-las-vegas-2024-day-1-circuit-grounds/",
    "https://www.edmliveset.com/?p=335217",
];

async function runImport() {
  const importedAlbums: Album[] = [];
  for (const url of urls) {
    const album = await importAlbumFromUrl(url);
    if (album) {
      importedAlbums.push(album);
    }
  }

  const newDataFileContent = `import { Album } from './types.ts';\n\nexport const importedAlbums: Album[] = ${JSON.stringify(importedAlbums, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, 'new-data.ts'), newDataFileContent);

  console.log('Import complete. Data saved to new-data.ts');
}

runImport();