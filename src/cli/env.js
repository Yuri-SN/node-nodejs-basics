export const parseEnv = () => {
  let result = '';
  const rssKeysArray = Object.keys(process.env).filter((e) => e.startsWith('RSS_'));
  
  rssKeysArray.forEach((key, i) => {
    if ((i+1) !== rssKeysArray.length) {        // if not last element
      result = result + `${key}=${process.env[key]}; `;
    } else {                                    // if last element
      result = result + `${key}=${process.env[key]}`;
    }
  });

  console.log(result);
};

parseEnv();
