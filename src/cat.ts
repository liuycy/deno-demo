const { args, exit, open, copy, stdout } = Deno;

if (!args.length) {
  console.log(`\
error: The following required arguments were not provided:
    <FILE_PATH>

USAGE:
    deno run cat.ts <FILE_PATH> [<FILE_PATH> ...]`);

  exit();
}

import { color } from '../deps.ts';

for (let filename of args) {
  const file = await open(filename);
  console.log(color.blue(`\nThe content of ${filename}: `));
  await copy(file, stdout);
  file.close();
}
