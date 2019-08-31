#!/usr/bin/env node
const del = require('./');

const help = `
Examples
 $ eliminate [path]
 $ eliminate path/to/file.md
 $ eliminate path/to/directory
`;

let args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(help);
  process.exit();
}

if (args[0]) {
	del(args[0])
		.then(() => process.exit())
		.catch(() => console.log(`Could not eliminate '${args[0]}'`))
} else {
	console.log('No path provided');
	process.exit();
}
