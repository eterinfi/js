'use strict';

// Define 0;
var zero = f => x => x;

// Define 1;
var one = f => x => f(x);

// Define 2;
var two = f => x => f(f(x));

// Define 3;
var three = f => x => f(f(f(x)));

// Define Successor;
var SUCC = n => f => x => f(n(f)(x));

// Define Plus;
var PLUS = (m, n) => f => x => m(f)(n(f)(x));

// Define Times;
var MULT1 = (m, n) => m(PLUS(n))(zero);
var MULT2 = (m, n) => f => m(n(f));

// Define Predecessor;
var PRED = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);

// Define Exponent;
var EXP = (m, n) => n(m);