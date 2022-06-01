import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderName = 'files';
  const fileNameToCompress = 'fileToCompress.txt';
  const fileNameCompressed = 'archive.gz';
  const fileNameToCompressPath = join(__dirname, folderName, fileNameToCompress);
  const fileNameCompressedPath = join(__dirname, folderName, fileNameCompressed);
  const readableStream = createReadStream(fileNameToCompressPath);
  const writableStream = createWriteStream(fileNameCompressedPath);
  const gzip = createGzip();

  readableStream.pipe(gzip).pipe(writableStream);
};

compress();
