/** @license Apache-2.0 */

'use strict';

/**
* Compute the Fibonacci number index of a single-precision floating-point number.
*
* @module @stdlib/math-base-special-fibonacci-indexf
*
* @example
* var fibonacciIndexf = require( '@stdlib/math-base-special-fibonacci-indexf' );
*
* var n = fibonacciIndexf( 0 );
* // returns NaN
*
* n = fibonacciIndexf( 1 );
* // returns NaN
*
* n = fibonacciIndexf( 2 );
* // returns 3
*
* n = fibonacciIndexf( 3 );
* // returns 4
*
* n = fibonacciIndexf( 5 );
* // returns 5
*
* n = fibonacciIndexf( 8 );
* // returns 6
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
