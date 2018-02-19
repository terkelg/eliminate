# eliminate

> Delete directories and files


## Installation

```
npm install eliminate
```


## Usage

```js
const { eliminate: del } = require('eliminate');

// ...

await del('pathorfile/to/delete.js');
```

## API


### eliminate(path)

Type: `Promise`

Deltes directory/file recursively.
If the directory is a none-empty directory, everything is the directory will be deleted recursively.

#### dir

Type: `String`

A string file path to delete.


### eliminateSync(path)

Deltes directory/file recursively synchronously.
If the directory is a none-empty directory, everything is the directory will be deleted recursively.

#### dir

Type: `String`

A string file path to delete.


## License

MIT © [Terkel Gjervig](https://terkel.com)
