const del = require('./src');
const mkdirp = require('./test/helpers');

(async function() {
  mkdirp('A/B/C.js');
  await del('A');
  console.log('Done!');
})();
