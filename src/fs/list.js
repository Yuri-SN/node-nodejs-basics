import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, readdir } from 'fs/promises';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files-';
  const folderPath = join(__dirname, folderName);

  access(folderPath)
    .then(() => {
      readdir(folderPath)
        .then((files) => {
          console.log(files);
        })
    })
    .catch(() => {
      console.log('FS operation failed');
      throw new Error('FS operation failed');
    })
};

list();
