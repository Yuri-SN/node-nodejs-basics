import { access, readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = join(__dirname, folderName, fileName);

  const hashSum = crypto.createHash('sha256');

  access(filePath)
    .then(() => {
      readFile(filePath)
        .then((fileData) => {
          hashSum.update(fileData);
          const hex = hashSum.digest('hex');
          console.log(hex);
        })
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    })

};

calculateHash();
