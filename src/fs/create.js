import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, writeFile } from 'fs/promises';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const fileName = 'fresh.txt';
  const filePath = join(__dirname, folderName, fileName);

  access(filePath)
    .then(() => console.log(new Error('FS operation failed')))
    .catch(() => {
      writeFile(filePath, 'I am fresh and young');
    });
};

create();
