import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderName = 'files';
const fileName = 'script.js';
const filePath = join(__dirname, folderName, fileName);

export const spawnChildProcess = async (args) => {
  const child = fork(filePath, args);

  console.log(`Fork child process with PID: ${child.pid}`);

  process.stdin.on('data', (data) => {
    if (child) {
      child.send(data);
    }
  });

  child.on('message', (msg) => {
    console.log(`Message from child process: \n${msg}`);
  });

  child.on('exit', function (code, signal) {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
    process.exit();
  });
};

// spawnChildProcess([ '123', '321', '000', 'f' ]);
// spawnChildProcess([ 'ls', '-lha' ]);
spawnChildProcess([ 'find', './src/fs', '-type', 'f' ]);
