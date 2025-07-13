"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=t(function(P,u){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-assert-is-integerf/dist'),i=require('@stdlib/math-base-special-lnf/dist'),s=require('@stdlib/math-base-special-roundf/dist'),a=require('@stdlib/number-float64-base-to-float32/dist'),o=require('@stdlib/constants-float32-phi/dist'),q=require('@stdlib/constants-float32-pinf/dist'),c=a(.5),I=a(2.23606797749979),N=i(o);function l(r){var e;return v(r)||f(r)===!1||r<=1||r===q?NaN:(e=a(a(r*I)+c),s(a(i(e)/N)))}u.exports=l
});var x=n();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
