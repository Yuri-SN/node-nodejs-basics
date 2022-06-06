import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderName = 'files';
  const fileName = 'fresh.txt';
  const filePath = join(__dirname, folderName, fileName);

  const fileOptions = {
    encoding: 'utf8',
    flag: 'wx',
    mode: 0o644
  }

  writeFile(filePath, 'I am fresh and young', fileOptions)
    .catch(() => {
      console.log('FS operation failed');
      throw new Error('FS operation failed');
    })
};

create();
