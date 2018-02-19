const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const lstat = promisify(fs.lstat);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);

/**
 * Delete directory or file
 * @param {String} dir The path/file to delete
 */
async function eliminate(dir) {
  const stat = await lstat(dir);
  if (!stat.isDirectory()) {
    await unlink(dir);
    return;
  }
  const files = await readdir(dir);
  for (const file of files) {
    const path = join(dir, file);
    if (fs.existsSync(path)) {
      await eliminate(path);
    } else {
      await unlink(path);
    }
  }
  await rmdir(dir);
}

/**
 * Delete directory or file, synchronos
 * @param {String} dir The path/file to delete
 */
function eliminateSync(dir) {
  if (!fs.lstatSync(dir).isDirectory()) {
    fs.unlinkSync(dir);
    return;
  }
  fs.readdirSync(dir).forEach(file => {
    const path = join(dir, file);
    if (fs.existsSync(path)) {
      eliminateSync(path);
    } else {
      fs.unlinkSync(path);
    }
  });
  fs.rmdirSync(dir);
}

module.exports = { eliminate, eliminateSync };
