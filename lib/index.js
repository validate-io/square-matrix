/**
*
*	VALIDATE: square-matrix
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of arrays and has equal dimensions.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArrayArray = require( 'validate.io-array-array' );


// IS SQUARE MATRIX //

/**
* FUNCTION: isSquareMatrix( value )
*	Validates if a value is an array of arrays and has equal dimensions.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of arrays and has equal dimensions
*/
function isSquareMatrix( value ) {
	var len;
	if ( !isArrayArray( value ) ) {
		return false;
	}
	len = value.length;
	for ( var i = 0; i < len; i++ ) {
		if ( value[i].length !== len ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isSquareMatrix()


// EXPORTS //

module.exports = isSquareMatrix;
