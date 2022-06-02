import os from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');
const calculationFrom = 10;

const runWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData });

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => reject({ status: 'error', data: null }));
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

export const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < os.cpus().length; i++) {
    promises.push(runWorker(calculationFrom + i));
  }
  return Promise.allSettled(promises)
    .then((results) => results.map((result) => result.value));
};

performCalculations()
  .then((result) => console.log(result))
  .catch(err => console.error(err));
