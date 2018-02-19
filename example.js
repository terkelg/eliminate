const { del, delSync } = require('./src');
const mkdirp = require('./test/helpers');

(async function() {
  mkdirp('A/B/C.js');
  await del('A');

  mkdirp('A/B/C.js');
  delSync('A/B');
  delSync('A');

  console.log('Done!');
})();
