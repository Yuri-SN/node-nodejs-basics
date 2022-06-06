export const parseArgs = () => {
  const argvArray = process.argv.slice(2);
  let keys = [];
  let values = [];
  let result = '';

  argvArray.forEach((element) => {
    if (element.startsWith('--')) {
      keys.push(element.slice(2));
    } else {
      values.push(element);
    }
  });

  for(var i = 0; i < keys.length; i++) {
    if (keys[i] !== keys[keys.length - 1]) {  // if not last element
      result = result + `${keys[i]} is ${values[i]}, `;
    } else {                                  // if last element
      result = result + `${keys[i]} is ${values[i]}`;
    }
  }

  console.log(result);
};

parseArgs();
