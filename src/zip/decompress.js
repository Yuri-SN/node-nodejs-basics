import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderName = 'files';
  const fileNameCompressed = 'archive.gz';
  const fileNameDecompressed = 'fileToCompress.txt';
  const fileNameCompressedPath = join(__dirname, folderName, fileNameCompressed);
  const fileNameDecompressedPath = join(__dirname, folderName, fileNameDecompressed);
  const readableStream = createReadStream(fileNameCompressedPath);
  const writableStream = createWriteStream(fileNameDecompressedPath);
  const gunzip = createGunzip();

  readableStream.pipe(gunzip).pipe(writableStream);
};

decompress();
