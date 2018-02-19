const test = require('tape');
const fs = require('fs');
const { join } = require('path');
const { eliminateSync } = require('../');
const mkdirp = require('./helpers');

const DIR = join('test', 'fixtures');
mkdirp(DIR);

test('standard [sync]', t => {
  t.plan(2);

  const A = join(DIR, 'a.js');
  fs.writeFileSync(A);

  t.equal(typeof eliminateSync, 'function', 'consturctor is a typeof function');
  t.equal(typeof eliminateSync(A), 'undefined', 'returns undefined');
});

test('eliminate directories [sync]', t => {
  t.plan(4);

  const A = join(DIR, 'a');
  mkdirp(A);

  const B = join(DIR, 'b');
  mkdirp(B);

  const B1 = join(B, 'b1');
  mkdirp(B1);

  const B2 = join(B, 'b2');
  mkdirp(B2);

  eliminateSync(A);
  t.equal(fs.existsSync(A), false, 'delete dir a');

  eliminateSync(B2);
  t.equal(fs.existsSync(B2), false, 'delete dir b2 in b');
  t.equal(fs.existsSync(B), true, 'do not delete b itself');

  eliminateSync(B);
  t.equal(fs.existsSync(B), false, 'delete dir b and in it');
});

test('eliminate sync files [sync]', t => {
  t.plan(3);

  const A = join(DIR, 'a.js');
  fs.writeFileSync(A);

  const B = join(DIR, 'b.js');
  fs.writeFileSync(B);

  eliminateSync(A);
  t.equal(fs.existsSync(A), false, 'delete file a');
  t.equal(fs.existsSync(B), true, 'keep file b');

  eliminateSync(B);
  t.equal(fs.existsSync(A), false, 'delete file b');
});
