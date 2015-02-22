Square Matrix
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array of arrays and has equal dimensions.


## Installation

``` bash
$ npm install validate.io-square-matrix
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isSquareMatrix = require( 'validate.io-square-matrix' );
```

#### isSquareMatrix( value )

Validates if a value is an `array` of `arrays` and has equal dimensions.

``` javascript
var value = [[1,2],[1,2]];

var bool = isSquareMatrix( value );
// returns true
```

__Note__: the method first validates that an input `value` is an `array` of `arrays`. For any other input, the method returns `false`.


## Examples

``` javascript
var isSquareMatrix = require( 'validate.io-square-matrix' );

console.log( isSquareMatrix( [[1,2],[1,2]] ) );
// returns true

console.log( isSquareMatrix( [] ) );
// returns false

console.log( isSquareMatrix( [[]] ) );
// returns false

console.log( isSquareMatrix( [[1,2]] ) );
// returns false

console.log( isSquareMatrix( [[1,2],[1]] ) );
// returns false

console.log( isSquareMatrix( [[1],[2]] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-square-matrix.svg
[npm-url]: https://npmjs.org/package/validate.io-square-matrix

[travis-image]: http://img.shields.io/travis/validate-io/square-matrix/master.svg
[travis-url]: https://travis-ci.org/validate-io/square-matrix

[coveralls-image]: https://img.shields.io/coveralls/validate-io/square-matrix/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/square-matrix?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/square-matrix.svg
[dependencies-url]: https://david-dm.org/validate-io/square-matrix

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/square-matrix.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/square-matrix

[github-issues-image]: http://img.shields.io/github/issues/validate-io/square-matrix.svg
[github-issues-url]: https://github.com/validate-io/square-matrix/issues
