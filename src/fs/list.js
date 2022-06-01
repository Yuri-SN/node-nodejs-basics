import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, readdir } from 'fs/promises';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const folderPath = join(__dirname, folderName);

  access(folderPath)
    .then(() => {
      readdir(folderPath)
        .then((files) => {
          files.forEach(file => {
            console.log(file);
          });
        })
    })
    .catch(() => {
      console.log(new Error('FS operation failed'))
    })
};

list();
