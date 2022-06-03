import { exec } from 'child_process';

const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);
console.log('---------------------------');

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes('CLOSE')) process.exit(0);
  process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);

exec(args.join(' '), (error, stdout, stderr) => {
  process.send(stdout);
});
