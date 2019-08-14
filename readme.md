<div align="center">
  <img src="https://github.com/terkelg/eliminate/raw/master/eliminate.png" alt="eliminate" width="500" />
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
npm install eliminate --save
```

> **OBS**: This package uses async/await and requires Node.js 7.6


## Usage

```js
const del = require('eliminate');

// ...

await del('path/or/file/to/delete.js');
```

## API


### eliminate(path)

Type: `Promise`

Deletes the directory or file.
If the filepath is a non-empty directory, everything in it will be deleted recursively.

#### path

Type: `String`

The file or directory path to delete.


## CLI

```
$ npm install --global eliminate
```

```
$ eliminate path/to/file.js

$ eliminate path/to/dir
```


## License

MIT © [Terkel Gjervig](https://terkel.com)
