'use strict';

// Define 0;
function zero(f) {
	return function (x) {
	    return x;
	}
}

// Define 1;
function one(f) {
    return function (x) {
        return f(x);
    }
}

// Define 2;
function two(f) {
	return function (x) {
	    return f(f(x));
	}
}

// Define 3;
function three(f) {
	return function (x) {
	    return f(f(f(x)));
	}
}

// Define Successor;
function SUCC(n) {
	return function (f) {
	    return function (x) {
	        return f(n(f)(x));
	    }
	}
}

// Define Predecessor;
function PRED(n) {
	return function (f) {
		return function (x) {
			return n(function (g) {
				return function (h) { 
					return h(g(f)); }
				} ) (function (u) { 
					return x; 
				} ) (function (u) { 
					return u; 
				} );
		};
	};
}

// Define Plus;
function PLUS(m, n) {
	return function (f) {
	    return function (x) {
	        return m(f)(n(f)(x));
	    }
	}
}

// Define Times;
function MULT(m, n) {
    return function (f) {
        return m(n(f));
    }
}