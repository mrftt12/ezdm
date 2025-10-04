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