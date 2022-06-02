import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import fs from 'fs';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderName = 'files';
  const fileName = 'fileToRead.txt';
  const filePath = join(__dirname, folderName, fileName);

  access(filePath)
    .then(() => {
      const readableStream = fs.createReadStream(filePath)
      readableStream.on('data', (chunk) => {
        process.stdout.write(chunk)
      })
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    })
};

read();
