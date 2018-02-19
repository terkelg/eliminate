<div align="center">
  <img src="https://github.com/terkelg/eliminate/raw/master/eliminate.png" alt="eliminate" width="500" height="100" />
</div>

<h1 align="center">eliminate</h1>

<div align="center">
  <a href="https://npmjs.org/package/eliminate">
    <img src="https://img.shields.io/npm/v/eliminate.svg" alt="version" />
  </a>
  <a href="https://travis-ci.org/terkelg/eliminate">
    <img src="https://img.shields.io/travis/terkelg/eliminate.svg" alt="travis" />
  </a>
  <a href="https://npmjs.org/package/eliminate">
    <img src="https://img.shields.io/npm/dm/eliminate.svg" alt="downloads" />
  </a>
</div>

<div align="center">Delete files and directories without all the bullshit.</div>

<br />


## Installation

```
npm install eliminate
```

> **OBS**: This package uses async/await and requires Node.js 7.6


## Usage

```js
const { eliminate: del } = require('eliminate');

// ...

await del('pathorfile/to/delete.js');
```

## API


### eliminate(path)

Type: `Promise`

Deletes directory/file recursively.
If the directory is a non-empty directory, everything is the directory will be deleted recursively.

#### dir

Type: `String`

A string file path to delete.


### eliminateSync(path)

Deletes directory/file recursively - synchronously.
If the directory is a non-empty directory, everything is the directory will be deleted recursively.


#### dir

Type: `String`

A string file path to delete.


## License

MIT © [Terkel Gjervig](https://terkel.com)
