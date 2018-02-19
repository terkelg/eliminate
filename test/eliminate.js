const test = require('tape');
const fs = require('fs');
const { join } = require('path');
const { eliminate } = require('../');
const mkdirp = require('./helpers');

const DIR = join('test', 'fixtures');

test('standard', async t => {
  t.plan(2);

  const A = join(DIR, 'a.js');
  fs.writeFileSync(A);

  t.equal(typeof eliminate, 'function', 'consturctor is a typeof function');
  t.equal(typeof await eliminate(A), 'undefined', 'returns undefined');
});

test('eliminate directories', async t => {
  t.plan(4);

  const A = join(DIR, 'a');
  mkdirp(A);

  const B = join(DIR, 'b');
  mkdirp(B);

  const B1 = join(B, 'b1');
  mkdirp(B1);

  const B2 = join(B, 'b2');
  mkdirp(B2);

  await eliminate(A);
  t.equal(fs.existsSync(A), false, 'delete dir a');

  await eliminate(B2);
  t.equal(fs.existsSync(B2), false, 'delete dir b2 in b');
  t.equal(fs.existsSync(B), true, 'do not delete b itself');

  await eliminate(B);
  t.equal(fs.existsSync(B), false, 'delete dir b and in it');
});

test('eliminate files', async t => {
  t.plan(3);

  const A = join(DIR, 'a.js');
  fs.writeFileSync(A);

  const B = join(DIR, 'b.js');
  fs.writeFileSync(B);

  await eliminate(A);
  t.equal(fs.existsSync(A), false, 'delete file a');
  t.equal(fs.existsSync(B), true, 'keep file b');

  await eliminate(B);
  t.equal(fs.existsSync(A), false, 'delete file b');
});
