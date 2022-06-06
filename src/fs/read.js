import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, readFile } from 'fs/promises';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const fileName = 'fileToRead.txt';
  const filePath = join(__dirname, folderName, fileName);

  access(filePath)
    .then(() => {
      readFile(filePath, 'utf8')
        .then((fileData) => {
          console.log(fileData);
        })
    })
    .catch(() => {
      console.log('FS operation failed');
      throw new Error('FS operation failed');
    })
};

read();
