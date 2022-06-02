import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { access } from 'fs/promises';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderName = 'files';
  const fileName = 'fileToWrite.txt';
  const filePath = join(__dirname, folderName, fileName);

  access(filePath)
    .then(() => {
      const writableStream = fs.createWriteStream(filePath, {flags: 'a'})

      process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
      })

      process.stdin.on('end', () => {
        writableStream.end()
      })
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    })
};

write();
