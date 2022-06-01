import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';

export const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderName = 'files';
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const oldFilePath = join(__dirname, folderName, oldFileName);
  const newFilePath = join(__dirname, folderName, newFileName);

  fs.access(oldFilePath)
    .then(() => {
      fs.access(newFilePath)
        .then(() => {
          console.log('FS operation failed');
          throw new Error('FS operation failed');
        })
        .catch(() => {
          fs.rename(oldFilePath, newFilePath)
        })
    })
    .catch(() => {
      console.log('FS operation failed');
      throw new Error('FS operation failed');
    })
};

rename();
