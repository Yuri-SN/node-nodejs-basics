import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, cp, mkdir } from 'fs/promises';

export const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderName = 'files';
  const newFolderName = 'files_copy';
  const folderPath = join(__dirname, folderName);
  const newFolderPath = join(__dirname, newFolderName);

  access(newFolderPath)
    .then(() => { console.log(new Error('FS operation failed')) })
    .catch(() => {
      mkdir(newFolderPath)
        .then(() => {
          cp(folderPath, newFolderPath, {recursive: true})
        })
      
    })
};

copy();
