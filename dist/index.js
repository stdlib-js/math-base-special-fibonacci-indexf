"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=v(function(_,u){
var f=require('@stdlib/math-base-assert-is-nanf/dist'),s=require('@stdlib/math-base-assert-is-integerf/dist'),i=require('@stdlib/math-base-special-lnf/dist'),o=require('@stdlib/math-base-special-roundf/dist'),a=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/constants-float32-phi/dist'),c=require('@stdlib/constants-float32-pinf/dist'),I=a(.5),N=a(2.23606797749979),l=i(q);function x(e){var r;return f(e)||s(e)===!1||e<=1||e===c?NaN:(r=a(a(e*N)+I),o(a(i(r)/l)))}u.exports=x
});var H=n();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
