import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, unlink } from 'fs/promises';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const fileName = 'fileToRemove.txt';
  const filePath = join(__dirname, folderName, fileName);

  access(filePath)
    .then(() => {
      unlink(filePath)
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    })
};

remove();
