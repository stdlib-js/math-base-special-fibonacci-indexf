/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var zeros = require( '@stdlib/array-base-zeros' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var fibonacci = require( '@stdlib/math-base-special-fibonacci' );
var pkg = require( './../package.json' ).name;
var fibonacciIndexf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var FN;
	var x;
	var y;
	var i;

	FN = zeros( 37 );
	for ( i = 3; i < 37; i++ ) {
		FN[ i ] = fibonacci( i );
	}

	x = discreteUniform( 100, 3, 36 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fibonacciIndexf( FN[ x[ i%x.length ] ] );
		if ( isnanf( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
