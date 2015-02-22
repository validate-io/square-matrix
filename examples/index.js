'use strict';

var isSquareMatrix = require( './../lib' );

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
