/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isSquareMatrix = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-square-matrix', function tests() {

	it( 'should export a function', function test() {
		expect( isSquareMatrix ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isSquareMatrix( [[1]] );
		assert.ok( bool );

		bool = isSquareMatrix( [[1,2],[1,2]] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[[]],
			[[],[]],
			[[1,2],[1]],
			[[1,2]],
			[[1],[2]]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isSquareMatrix( value );
		}
	});

});
