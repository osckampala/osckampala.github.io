var gc = e => {
	throw TypeError(e);
};
var sl = (e, t, n) => t.has(e) || gc('Cannot ' + n);
var N = (e, t, n) => (sl(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	q = (e, t, n) =>
		t.has(e)
			? gc('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	W = (e, t, n, r) => (sl(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	Pe = (e, t, n) => (sl(e, t, 'access private method'), n);
var hi = (e, t, n, r) => ({
	set _(o) {
		W(e, t, o, n);
	},
	get _() {
		return N(e, t, r);
	},
});
function gg(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const o in r)
				if (o !== 'default' && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver(o => {
		for (const i of o)
			if (i.type === 'childList')
				for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossOrigin === 'anonymous'
					? (i.credentials = 'omit')
					: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
function gf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var vf = { exports: {} },
	Rs = {},
	yf = { exports: {} },
	G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for('react.element'),
	vg = Symbol.for('react.portal'),
	yg = Symbol.for('react.fragment'),
	xg = Symbol.for('react.strict_mode'),
	wg = Symbol.for('react.profiler'),
	Sg = Symbol.for('react.provider'),
	kg = Symbol.for('react.context'),
	Eg = Symbol.for('react.forward_ref'),
	Cg = Symbol.for('react.suspense'),
	bg = Symbol.for('react.memo'),
	Pg = Symbol.for('react.lazy'),
	vc = Symbol.iterator;
function Ng(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (vc && e[vc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var xf = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	wf = Object.assign,
	Sf = {};
function qr(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Sf), (this.updater = n || xf);
}
qr.prototype.isReactComponent = {};
qr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
qr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function kf() {}
kf.prototype = qr.prototype;
function Ja(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Sf), (this.updater = n || xf);
}
var Za = (Ja.prototype = new kf());
Za.constructor = Ja;
wf(Za, qr.prototype);
Za.isPureReactComponent = !0;
var yc = Array.isArray,
	Ef = Object.prototype.hasOwnProperty,
	eu = { current: null },
	Cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function bf(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
			Ef.call(t, r) && !Cf.hasOwnProperty(r) && (o[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) o.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		o.children = a;
	}
	if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
	return { $$typeof: ti, type: e, key: i, ref: s, props: o, _owner: eu.current };
}
function Tg(e, t) {
	return { $$typeof: ti, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function tu(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === ti;
}
function Rg(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var xc = /\/+/g;
function ll(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? Rg('' + e.key) : t.toString(36);
}
function Di(e, t, n, r, o) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				s = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case ti:
					case vg:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(o = o(s)),
			(e = r === '' ? '.' + ll(s, 0) : r),
			yc(o)
				? ((n = ''),
					e != null && (n = e.replace(xc, '$&/') + '/'),
					Di(o, t, n, '', function (u) {
						return u;
					}))
				: o != null &&
					(tu(o) &&
						(o = Tg(
							o,
							n +
								(!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(xc, '$&/') + '/') +
								e
						)),
					t.push(o)),
			1
		);
	if (((s = 0), (r = r === '' ? '.' : r + ':'), yc(e)))
		for (var l = 0; l < e.length; l++) {
			i = e[l];
			var a = r + ll(i, l);
			s += Di(i, t, n, a, o);
		}
	else if (((a = Ng(e)), typeof a == 'function'))
		for (e = a.call(e), l = 0; !(i = e.next()).done; )
			(i = i.value), (a = r + ll(i, l++)), (s += Di(i, t, n, a, o));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return s;
}
function mi(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		Di(e, r, '', '', function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function jg(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Ie = { current: null },
	zi = { transition: null },
	Og = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: zi, ReactCurrentOwner: eu };
function Pf() {
	throw Error('act(...) is not supported in production builds of React.');
}
G.Children = {
	map: mi,
	forEach: function (e, t, n) {
		mi(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			mi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			mi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!tu(e))
			throw Error('React.Children.only expected to receive a single React element child.');
		return e;
	},
};
G.Component = qr;
G.Fragment = yg;
G.Profiler = wg;
G.PureComponent = Ja;
G.StrictMode = xg;
G.Suspense = Cg;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og;
G.act = Pf;
G.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
		);
	var r = wf({}, e.props),
		o = e.key,
		i = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (s = eu.current)),
			t.key !== void 0 && (o = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			Ef.call(t, a) &&
				!Cf.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: ti, type: e.type, key: o, ref: i, props: r, _owner: s };
};
G.createContext = function (e) {
	return (
		(e = {
			$$typeof: kg,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Sg, _context: e }),
		(e.Consumer = e)
	);
};
G.createElement = bf;
G.createFactory = function (e) {
	var t = bf.bind(null, e);
	return (t.type = e), t;
};
G.createRef = function () {
	return { current: null };
};
G.forwardRef = function (e) {
	return { $$typeof: Eg, render: e };
};
G.isValidElement = tu;
G.lazy = function (e) {
	return { $$typeof: Pg, _payload: { _status: -1, _result: e }, _init: jg };
};
G.memo = function (e, t) {
	return { $$typeof: bg, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
	var t = zi.transition;
	zi.transition = {};
	try {
		e();
	} finally {
		zi.transition = t;
	}
};
G.unstable_act = Pf;
G.useCallback = function (e, t) {
	return Ie.current.useCallback(e, t);
};
G.useContext = function (e) {
	return Ie.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
	return Ie.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
	return Ie.current.useEffect(e, t);
};
G.useId = function () {
	return Ie.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
	return Ie.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
	return Ie.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
	return Ie.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
	return Ie.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
	return Ie.current.useReducer(e, t, n);
};
G.useRef = function (e) {
	return Ie.current.useRef(e);
};
G.useState = function (e) {
	return Ie.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
	return Ie.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
	return Ie.current.useTransition();
};
G.version = '18.3.1';
yf.exports = G;
var x = yf.exports;
const O = gf(x),
	_g = gg({ __proto__: null, default: O }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ag = x,
	Mg = Symbol.for('react.element'),
	Lg = Symbol.for('react.fragment'),
	Ig = Object.prototype.hasOwnProperty,
	Dg = Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	zg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nf(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) Ig.call(t, r) && !zg.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return { $$typeof: Mg, type: e, key: i, ref: s, props: o, _owner: Dg.current };
}
Rs.Fragment = Lg;
Rs.jsx = Nf;
Rs.jsxs = Nf;
vf.exports = Rs;
var m = vf.exports,
	Tf = { exports: {} },
	et = {},
	Rf = { exports: {} },
	jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(C, j) {
		var z = C.length;
		C.push(j);
		e: for (; 0 < z; ) {
			var L = (z - 1) >>> 1,
				F = C[L];
			if (0 < o(F, j)) (C[L] = j), (C[z] = F), (z = L);
			else break e;
		}
	}
	function n(C) {
		return C.length === 0 ? null : C[0];
	}
	function r(C) {
		if (C.length === 0) return null;
		var j = C[0],
			z = C.pop();
		if (z !== j) {
			C[0] = z;
			e: for (var L = 0, F = C.length, Y = F >>> 1; L < Y; ) {
				var le = 2 * (L + 1) - 1,
					He = C[le],
					J = le + 1,
					ut = C[J];
				if (0 > o(He, z))
					J < F && 0 > o(ut, He)
						? ((C[L] = ut), (C[J] = z), (L = J))
						: ((C[L] = He), (C[le] = z), (L = le));
				else if (J < F && 0 > o(ut, z)) (C[L] = ut), (C[J] = z), (L = J);
				else break e;
			}
		}
		return j;
	}
	function o(C, j) {
		var z = C.sortIndex - j.sortIndex;
		return z !== 0 ? z : C.id - j.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		d = 1,
		f = null,
		c = 3,
		y = !1,
		w = !1,
		v = !1,
		S = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		p = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function g(C) {
		for (var j = n(u); j !== null; ) {
			if (j.callback === null) r(u);
			else if (j.startTime <= C) r(u), (j.sortIndex = j.expirationTime), t(a, j);
			else break;
			j = n(u);
		}
	}
	function k(C) {
		if (((v = !1), g(C), !w))
			if (n(a) !== null) (w = !0), U(E);
			else {
				var j = n(u);
				j !== null && K(k, j.startTime - C);
			}
	}
	function E(C, j) {
		(w = !1), v && ((v = !1), h(T), (T = -1)), (y = !0);
		var z = c;
		try {
			for (g(j), f = n(a); f !== null && (!(f.expirationTime > j) || (C && !$())); ) {
				var L = f.callback;
				if (typeof L == 'function') {
					(f.callback = null), (c = f.priorityLevel);
					var F = L(f.expirationTime <= j);
					(j = e.unstable_now()),
						typeof F == 'function' ? (f.callback = F) : f === n(a) && r(a),
						g(j);
				} else r(a);
				f = n(a);
			}
			if (f !== null) var Y = !0;
			else {
				var le = n(u);
				le !== null && K(k, le.startTime - j), (Y = !1);
			}
			return Y;
		} finally {
			(f = null), (c = z), (y = !1);
		}
	}
	var b = !1,
		P = null,
		T = -1,
		I = 5,
		_ = -1;
	function $() {
		return !(e.unstable_now() - _ < I);
	}
	function D() {
		if (P !== null) {
			var C = e.unstable_now();
			_ = C;
			var j = !0;
			try {
				j = P(!0, C);
			} finally {
				j ? H() : ((b = !1), (P = null));
			}
		} else b = !1;
	}
	var H;
	if (typeof p == 'function')
		H = function () {
			p(D);
		};
	else if (typeof MessageChannel < 'u') {
		var A = new MessageChannel(),
			Q = A.port2;
		(A.port1.onmessage = D),
			(H = function () {
				Q.postMessage(null);
			});
	} else
		H = function () {
			S(D, 0);
		};
	function U(C) {
		(P = C), b || ((b = !0), H());
	}
	function K(C, j) {
		T = S(function () {
			C(e.unstable_now());
		}, j);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (C) {
			C.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || y || ((w = !0), U(E));
		}),
		(e.unstable_forceFrameRate = function (C) {
			0 > C || 125 < C
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
					)
				: (I = 0 < C ? Math.floor(1e3 / C) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return c;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (C) {
			switch (c) {
				case 1:
				case 2:
				case 3:
					var j = 3;
					break;
				default:
					j = c;
			}
			var z = c;
			c = j;
			try {
				return C();
			} finally {
				c = z;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (C, j) {
			switch (C) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					C = 3;
			}
			var z = c;
			c = C;
			try {
				return j();
			} finally {
				c = z;
			}
		}),
		(e.unstable_scheduleCallback = function (C, j, z) {
			var L = e.unstable_now();
			switch (
				(typeof z == 'object' && z !== null
					? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? L + z : L))
					: (z = L),
				C)
			) {
				case 1:
					var F = -1;
					break;
				case 2:
					F = 250;
					break;
				case 5:
					F = 1073741823;
					break;
				case 4:
					F = 1e4;
					break;
				default:
					F = 5e3;
			}
			return (
				(F = z + F),
				(C = {
					id: d++,
					callback: j,
					priorityLevel: C,
					startTime: z,
					expirationTime: F,
					sortIndex: -1,
				}),
				z > L
					? ((C.sortIndex = z),
						t(u, C),
						n(a) === null && C === n(u) && (v ? (h(T), (T = -1)) : (v = !0), K(k, z - L)))
					: ((C.sortIndex = F), t(a, C), w || y || ((w = !0), U(E))),
				C
			);
		}),
		(e.unstable_shouldYield = $),
		(e.unstable_wrapCallback = function (C) {
			var j = c;
			return function () {
				var z = c;
				c = j;
				try {
					return C.apply(this, arguments);
				} finally {
					c = z;
				}
			};
		});
})(jf);
Rf.exports = jf;
var Fg = Rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $g = x,
	Ze = Fg;
function R(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Of = new Set(),
	Ro = {};
function rr(e, t) {
	Br(e, t), Br(e + 'Capture', t);
}
function Br(e, t) {
	for (Ro[e] = t, e = 0; e < t.length; e++) Of.add(t[e]);
}
var Bt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Vl = Object.prototype.hasOwnProperty,
	Ug =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	wc = {},
	Sc = {};
function Bg(e) {
	return Vl.call(Sc, e) ? !0 : Vl.call(wc, e) ? !1 : Ug.test(e) ? (Sc[e] = !0) : ((wc[e] = !0), !1);
}
function Vg(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Wg(e, t, n, r) {
	if (t === null || typeof t > 'u' || Vg(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function De(e, t, n, r, o, i, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = s);
}
var be = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		be[e] = new De(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	be[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	be[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
	be[e] = new De(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		be[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	be[e] = new De(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	be[e] = new De(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	be[e] = new De(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	be[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nu = /[\-:]([a-z])/g;
function ru(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(nu, ru);
		be[t] = new De(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(nu, ru);
		be[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(nu, ru);
	be[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	be[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new De('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	be[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ou(e, t, n, r) {
	var o = be.hasOwnProperty(t) ? be[t] : null;
	(o !== null
		? o.type !== 0
		: r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
		(Wg(t, n, o, r) && (n = null),
		r || o === null
			? Bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: o.mustUseProperty
				? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
				: ((t = o.attributeName),
					(r = o.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((o = o.type),
							(n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
							r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	gi = Symbol.for('react.element'),
	pr = Symbol.for('react.portal'),
	hr = Symbol.for('react.fragment'),
	iu = Symbol.for('react.strict_mode'),
	Wl = Symbol.for('react.profiler'),
	_f = Symbol.for('react.provider'),
	Af = Symbol.for('react.context'),
	su = Symbol.for('react.forward_ref'),
	Hl = Symbol.for('react.suspense'),
	Ql = Symbol.for('react.suspense_list'),
	lu = Symbol.for('react.memo'),
	ln = Symbol.for('react.lazy'),
	Mf = Symbol.for('react.offscreen'),
	kc = Symbol.iterator;
function oo(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (kc && e[kc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var de = Object.assign,
	al;
function mo(e) {
	if (al === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			al = (t && t[1]) || '';
		}
	return (
		`
` +
		al +
		e
	);
}
var ul = !1;
function cl(e, t) {
	if (!e || ul) return '';
	ul = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var o = u.stack.split(`
`),
					i = r.stack.split(`
`),
					s = o.length - 1,
					l = i.length - 1;
				1 <= s && 0 <= l && o[s] !== i[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (o[s] !== i[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || o[s] !== i[l])) {
								var a =
									`
` + o[s].replace(' at new ', ' at ');
								return (
									e.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(ul = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? mo(e) : '';
}
function Hg(e) {
	switch (e.tag) {
		case 5:
			return mo(e.type);
		case 16:
			return mo('Lazy');
		case 13:
			return mo('Suspense');
		case 19:
			return mo('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = cl(e.type, !1)), e;
		case 11:
			return (e = cl(e.type.render, !1)), e;
		case 1:
			return (e = cl(e.type, !0)), e;
		default:
			return '';
	}
}
function Kl(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case hr:
			return 'Fragment';
		case pr:
			return 'Portal';
		case Wl:
			return 'Profiler';
		case iu:
			return 'StrictMode';
		case Hl:
			return 'Suspense';
		case Ql:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Af:
				return (e.displayName || 'Context') + '.Consumer';
			case _f:
				return (e._context.displayName || 'Context') + '.Provider';
			case su:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case lu:
				return (t = e.displayName || null), t !== null ? t : Kl(e.type) || 'Memo';
			case ln:
				(t = e._payload), (e = e._init);
				try {
					return Kl(e(t));
				} catch {}
		}
	return null;
}
function Qg(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return Kl(t);
		case 8:
			return t === iu ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Tn(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Lf(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Kg(e) {
	var t = Lf(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (s) {
					(r = '' + s), i.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = '' + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function vi(e) {
	e._valueTracker || (e._valueTracker = Kg(e));
}
function If(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Lf(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ji(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Gl(e, t) {
	var n = t.checked;
	return de({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ec(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Tn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
		});
}
function Df(e, t) {
	(t = t.checked), t != null && ou(e, 'checked', t, !1);
}
function Yl(e, t) {
	Df(e, t);
	var n = Tn(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? Xl(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Xl(e, t.type, Tn(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Cc(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function Xl(e, t, n) {
	(t !== 'number' || Ji(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var go = Array.isArray;
function br(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Tn(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				(e[o].selected = !0), r && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function ql(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
	return de({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function bc(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(R(92));
			if (go(n)) {
				if (1 < n.length) throw Error(R(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Tn(n) };
}
function zf(e, t) {
	var n = Tn(t.value),
		r = Tn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function Pc(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ff(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Jl(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Ff(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: e;
}
var yi,
	$f = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
		else {
			for (
				yi = yi || document.createElement('div'),
					yi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = yi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function jo(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var xo = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Gg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xo).forEach(function (e) {
	Gg.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
	});
});
function Uf(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (xo.hasOwnProperty(e) && xo[e])
			? ('' + t).trim()
			: t + 'px';
}
function Bf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				o = Uf(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
		}
}
var Yg = de(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function Zl(e, t) {
	if (t) {
		if (Yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(R(60));
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
				throw Error(R(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(R(62));
	}
}
function ea(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var ta = null;
function au(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var na = null,
	Pr = null,
	Nr = null;
function Nc(e) {
	if ((e = oi(e))) {
		if (typeof na != 'function') throw Error(R(280));
		var t = e.stateNode;
		t && ((t = Ms(t)), na(e.stateNode, e.type, t));
	}
}
function Vf(e) {
	Pr ? (Nr ? Nr.push(e) : (Nr = [e])) : (Pr = e);
}
function Wf() {
	if (Pr) {
		var e = Pr,
			t = Nr;
		if (((Nr = Pr = null), Nc(e), t)) for (e = 0; e < t.length; e++) Nc(t[e]);
	}
}
function Hf(e, t) {
	return e(t);
}
function Qf() {}
var dl = !1;
function Kf(e, t, n) {
	if (dl) return e(t, n);
	dl = !0;
	try {
		return Hf(e, t, n);
	} finally {
		(dl = !1), (Pr !== null || Nr !== null) && (Qf(), Wf());
	}
}
function Oo(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Ms(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
	return n;
}
var ra = !1;
if (Bt)
	try {
		var io = {};
		Object.defineProperty(io, 'passive', {
			get: function () {
				ra = !0;
			},
		}),
			window.addEventListener('test', io, io),
			window.removeEventListener('test', io, io);
	} catch {
		ra = !1;
	}
function Xg(e, t, n, r, o, i, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var wo = !1,
	Zi = null,
	es = !1,
	oa = null,
	qg = {
		onError: function (e) {
			(wo = !0), (Zi = e);
		},
	};
function Jg(e, t, n, r, o, i, s, l, a) {
	(wo = !1), (Zi = null), Xg.apply(qg, arguments);
}
function Zg(e, t, n, r, o, i, s, l, a) {
	if ((Jg.apply(this, arguments), wo)) {
		if (wo) {
			var u = Zi;
			(wo = !1), (Zi = null);
		} else throw Error(R(198));
		es || ((es = !0), (oa = u));
	}
}
function or(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Gf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
			return t.dehydrated;
	}
	return null;
}
function Tc(e) {
	if (or(e) !== e) throw Error(R(188));
}
function ev(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = or(e)), t === null)) throw Error(R(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return Tc(o), e;
				if (i === r) return Tc(o), t;
				i = i.sibling;
			}
			throw Error(R(188));
		}
		if (n.return !== r.return) (n = o), (r = i);
		else {
			for (var s = !1, l = o.child; l; ) {
				if (l === n) {
					(s = !0), (n = o), (r = i);
					break;
				}
				if (l === r) {
					(s = !0), (r = o), (n = i);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = i.child; l; ) {
					if (l === n) {
						(s = !0), (n = i), (r = o);
						break;
					}
					if (l === r) {
						(s = !0), (r = i), (n = o);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(R(189));
			}
		}
		if (n.alternate !== r) throw Error(R(190));
	}
	if (n.tag !== 3) throw Error(R(188));
	return n.stateNode.current === n ? e : t;
}
function Yf(e) {
	return (e = ev(e)), e !== null ? Xf(e) : null;
}
function Xf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Xf(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var qf = Ze.unstable_scheduleCallback,
	Rc = Ze.unstable_cancelCallback,
	tv = Ze.unstable_shouldYield,
	nv = Ze.unstable_requestPaint,
	he = Ze.unstable_now,
	rv = Ze.unstable_getCurrentPriorityLevel,
	uu = Ze.unstable_ImmediatePriority,
	Jf = Ze.unstable_UserBlockingPriority,
	ts = Ze.unstable_NormalPriority,
	ov = Ze.unstable_LowPriority,
	Zf = Ze.unstable_IdlePriority,
	js = null,
	jt = null;
function iv(e) {
	if (jt && typeof jt.onCommitFiberRoot == 'function')
		try {
			jt.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var gt = Math.clz32 ? Math.clz32 : av,
	sv = Math.log,
	lv = Math.LN2;
function av(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((sv(e) / lv) | 0)) | 0;
}
var xi = 64,
	wi = 4194304;
function vo(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function ns(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~o;
		l !== 0 ? (r = vo(l)) : ((i &= s), i !== 0 && (r = vo(i)));
	} else (s = n & ~o), s !== 0 ? (r = vo(s)) : i !== 0 && (r = vo(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - gt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
	return r;
}
function uv(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function cv(e, t) {
	for (
		var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
		0 < i;

	) {
		var s = 31 - gt(i),
			l = 1 << s,
			a = o[s];
		a === -1 ? (!(l & n) || l & r) && (o[s] = uv(l, t)) : a <= t && (e.expiredLanes |= l),
			(i &= ~l);
	}
}
function ia(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ep() {
	var e = xi;
	return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function fl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function ni(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - gt(t)),
		(e[t] = n);
}
function dv(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - gt(n),
			i = 1 << o;
		(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
	}
}
function cu(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - gt(n),
			o = 1 << r;
		(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
	}
}
var Z = 0;
function tp(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var np,
	du,
	rp,
	op,
	ip,
	sa = !1,
	Si = [],
	xn = null,
	wn = null,
	Sn = null,
	_o = new Map(),
	Ao = new Map(),
	un = [],
	fv =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function jc(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			xn = null;
			break;
		case 'dragenter':
		case 'dragleave':
			wn = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Sn = null;
			break;
		case 'pointerover':
		case 'pointerout':
			_o.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Ao.delete(t.pointerId);
	}
}
function so(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [o],
			}),
			t !== null && ((t = oi(t)), t !== null && du(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			o !== null && t.indexOf(o) === -1 && t.push(o),
			e);
}
function pv(e, t, n, r, o) {
	switch (t) {
		case 'focusin':
			return (xn = so(xn, e, t, n, r, o)), !0;
		case 'dragenter':
			return (wn = so(wn, e, t, n, r, o)), !0;
		case 'mouseover':
			return (Sn = so(Sn, e, t, n, r, o)), !0;
		case 'pointerover':
			var i = o.pointerId;
			return _o.set(i, so(_o.get(i) || null, e, t, n, r, o)), !0;
		case 'gotpointercapture':
			return (i = o.pointerId), Ao.set(i, so(Ao.get(i) || null, e, t, n, r, o)), !0;
	}
	return !1;
}
function sp(e) {
	var t = Un(e.target);
	if (t !== null) {
		var n = or(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Gf(n)), t !== null)) {
					(e.blockedOn = t),
						ip(e.priority, function () {
							rp(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Fi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = la(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ta = r), n.target.dispatchEvent(r), (ta = null);
		} else return (t = oi(n)), t !== null && du(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Oc(e, t, n) {
	Fi(e) && n.delete(t);
}
function hv() {
	(sa = !1),
		xn !== null && Fi(xn) && (xn = null),
		wn !== null && Fi(wn) && (wn = null),
		Sn !== null && Fi(Sn) && (Sn = null),
		_o.forEach(Oc),
		Ao.forEach(Oc);
}
function lo(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		sa || ((sa = !0), Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, hv)));
}
function Mo(e) {
	function t(o) {
		return lo(o, e);
	}
	if (0 < Si.length) {
		lo(Si[0], e);
		for (var n = 1; n < Si.length; n++) {
			var r = Si[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		xn !== null && lo(xn, e),
			wn !== null && lo(wn, e),
			Sn !== null && lo(Sn, e),
			_o.forEach(t),
			Ao.forEach(t),
			n = 0;
		n < un.length;
		n++
	)
		(r = un[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
		sp(n), n.blockedOn === null && un.shift();
}
var Tr = Gt.ReactCurrentBatchConfig,
	rs = !0;
function mv(e, t, n, r) {
	var o = Z,
		i = Tr.transition;
	Tr.transition = null;
	try {
		(Z = 1), fu(e, t, n, r);
	} finally {
		(Z = o), (Tr.transition = i);
	}
}
function gv(e, t, n, r) {
	var o = Z,
		i = Tr.transition;
	Tr.transition = null;
	try {
		(Z = 4), fu(e, t, n, r);
	} finally {
		(Z = o), (Tr.transition = i);
	}
}
function fu(e, t, n, r) {
	if (rs) {
		var o = la(e, t, n, r);
		if (o === null) kl(e, t, r, os, n), jc(e, r);
		else if (pv(o, e, t, n, r)) r.stopPropagation();
		else if ((jc(e, r), t & 4 && -1 < fv.indexOf(e))) {
			for (; o !== null; ) {
				var i = oi(o);
				if ((i !== null && np(i), (i = la(e, t, n, r)), i === null && kl(e, t, r, os, n), i === o))
					break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else kl(e, t, r, null, n);
	}
}
var os = null;
function la(e, t, n, r) {
	if (((os = null), (e = au(r)), (e = Un(e)), e !== null))
		if (((t = or(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Gf(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (os = e), null;
}
function lp(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (rv()) {
				case uu:
					return 1;
				case Jf:
					return 4;
				case ts:
				case ov:
					return 16;
				case Zf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var gn = null,
	pu = null,
	$i = null;
function ap() {
	if ($i) return $i;
	var e,
		t = pu,
		n = t.length,
		r,
		o = 'value' in gn ? gn.value : gn.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
	return ($i = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ui(e) {
	var t = e.keyCode;
	return (
		'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ki() {
	return !0;
}
function _c() {
	return !1;
}
function tt(e) {
	function t(n, r, o, i, s) {
		(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? ki
				: _c),
			(this.isPropagationStopped = _c),
			this
		);
	}
	return (
		de(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = ki));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = ki));
			},
			persist: function () {},
			isPersistent: ki,
		}),
		t
	);
}
var Jr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	hu = tt(Jr),
	ri = de({}, Jr, { view: 0, detail: 0 }),
	vv = tt(ri),
	pl,
	hl,
	ao,
	Os = de({}, ri, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: mu,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== ao &&
						(ao && e.type === 'mousemove'
							? ((pl = e.screenX - ao.screenX), (hl = e.screenY - ao.screenY))
							: (hl = pl = 0),
						(ao = e)),
					pl);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : hl;
		},
	}),
	Ac = tt(Os),
	yv = de({}, Os, { dataTransfer: 0 }),
	xv = tt(yv),
	wv = de({}, ri, { relatedTarget: 0 }),
	ml = tt(wv),
	Sv = de({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	kv = tt(Sv),
	Ev = de({}, Jr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Cv = tt(Ev),
	bv = de({}, Jr, { data: 0 }),
	Mc = tt(bv),
	Pv = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Nv = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Tv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Rv(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Tv[e]) ? !!t[e] : !1;
}
function mu() {
	return Rv;
}
var jv = de({}, ri, {
		key: function (e) {
			if (e.key) {
				var t = Pv[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Ui(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
					? Nv[e.keyCode] || 'Unidentified'
					: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: mu,
		charCode: function (e) {
			return e.type === 'keypress' ? Ui(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Ui(e)
				: e.type === 'keydown' || e.type === 'keyup'
					? e.keyCode
					: 0;
		},
	}),
	Ov = tt(jv),
	_v = de({}, Os, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Lc = tt(_v),
	Av = de({}, ri, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: mu,
	}),
	Mv = tt(Av),
	Lv = de({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Iv = tt(Lv),
	Dv = de({}, Os, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
					? -e.wheelDeltaY
					: 'wheelDelta' in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	zv = tt(Dv),
	Fv = [9, 13, 27, 32],
	gu = Bt && 'CompositionEvent' in window,
	So = null;
Bt && 'documentMode' in document && (So = document.documentMode);
var $v = Bt && 'TextEvent' in window && !So,
	up = Bt && (!gu || (So && 8 < So && 11 >= So)),
	Ic = ' ',
	Dc = !1;
function cp(e, t) {
	switch (e) {
		case 'keyup':
			return Fv.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function dp(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var mr = !1;
function Uv(e, t) {
	switch (e) {
		case 'compositionend':
			return dp(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Dc = !0), Ic);
		case 'textInput':
			return (e = t.data), e === Ic && Dc ? null : e;
		default:
			return null;
	}
}
function Bv(e, t) {
	if (mr)
		return e === 'compositionend' || (!gu && cp(e, t))
			? ((e = ap()), ($i = pu = gn = null), (mr = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return up && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Vv = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function zc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Vv[e.type] : t === 'textarea';
}
function fp(e, t, n, r) {
	Vf(r),
		(t = is(t, 'onChange')),
		0 < t.length &&
			((n = new hu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var ko = null,
	Lo = null;
function Wv(e) {
	Ep(e, 0);
}
function _s(e) {
	var t = yr(e);
	if (If(t)) return e;
}
function Hv(e, t) {
	if (e === 'change') return t;
}
var pp = !1;
if (Bt) {
	var gl;
	if (Bt) {
		var vl = 'oninput' in document;
		if (!vl) {
			var Fc = document.createElement('div');
			Fc.setAttribute('oninput', 'return;'), (vl = typeof Fc.oninput == 'function');
		}
		gl = vl;
	} else gl = !1;
	pp = gl && (!document.documentMode || 9 < document.documentMode);
}
function $c() {
	ko && (ko.detachEvent('onpropertychange', hp), (Lo = ko = null));
}
function hp(e) {
	if (e.propertyName === 'value' && _s(Lo)) {
		var t = [];
		fp(t, Lo, e, au(e)), Kf(Wv, t);
	}
}
function Qv(e, t, n) {
	e === 'focusin'
		? ($c(), (ko = t), (Lo = n), ko.attachEvent('onpropertychange', hp))
		: e === 'focusout' && $c();
}
function Kv(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return _s(Lo);
}
function Gv(e, t) {
	if (e === 'click') return _s(t);
}
function Yv(e, t) {
	if (e === 'input' || e === 'change') return _s(t);
}
function Xv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == 'function' ? Object.is : Xv;
function Io(e, t) {
	if (yt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!Vl.call(t, o) || !yt(e[o], t[o])) return !1;
	}
	return !0;
}
function Uc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Bc(e, t) {
	var n = Uc(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Uc(n);
	}
}
function mp(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? mp(e, t.parentNode)
					: 'contains' in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function gp() {
	for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ji(e.document);
	}
	return t;
}
function vu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function qv(e) {
	var t = gp(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && mp(n.ownerDocument.documentElement, n)) {
		if (r !== null && vu(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
			) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				(r = r.end === void 0 ? i : Math.min(r.end, o)),
					!e.extend && i > r && ((o = r), (r = i), (i = o)),
					(o = Bc(n, i));
				var s = Bc(n, r);
				o &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
	}
}
var Jv = Bt && 'documentMode' in document && 11 >= document.documentMode,
	gr = null,
	aa = null,
	Eo = null,
	ua = !1;
function Vc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ua ||
		gr == null ||
		gr !== Ji(r) ||
		((r = gr),
		'selectionStart' in r && vu(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
				})),
		(Eo && Io(Eo, r)) ||
			((Eo = r),
			(r = is(aa, 'onSelect')),
			0 < r.length &&
				((t = new hu('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = gr))));
}
function Ei(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var vr = {
		animationend: Ei('Animation', 'AnimationEnd'),
		animationiteration: Ei('Animation', 'AnimationIteration'),
		animationstart: Ei('Animation', 'AnimationStart'),
		transitionend: Ei('Transition', 'TransitionEnd'),
	},
	yl = {},
	vp = {};
Bt &&
	((vp = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete vr.animationend.animation,
		delete vr.animationiteration.animation,
		delete vr.animationstart.animation),
	'TransitionEvent' in window || delete vr.transitionend.transition);
function As(e) {
	if (yl[e]) return yl[e];
	if (!vr[e]) return e;
	var t = vr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in vp) return (yl[e] = t[n]);
	return e;
}
var yp = As('animationend'),
	xp = As('animationiteration'),
	wp = As('animationstart'),
	Sp = As('transitionend'),
	kp = new Map(),
	Wc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function Mn(e, t) {
	kp.set(e, t), rr(t, [e]);
}
for (var xl = 0; xl < Wc.length; xl++) {
	var wl = Wc[xl],
		Zv = wl.toLowerCase(),
		ey = wl[0].toUpperCase() + wl.slice(1);
	Mn(Zv, 'on' + ey);
}
Mn(yp, 'onAnimationEnd');
Mn(xp, 'onAnimationIteration');
Mn(wp, 'onAnimationStart');
Mn('dblclick', 'onDoubleClick');
Mn('focusin', 'onFocus');
Mn('focusout', 'onBlur');
Mn(Sp, 'onTransitionEnd');
Br('onMouseEnter', ['mouseout', 'mouseover']);
Br('onMouseLeave', ['mouseout', 'mouseover']);
Br('onPointerEnter', ['pointerout', 'pointerover']);
Br('onPointerLeave', ['pointerout', 'pointerover']);
rr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
rr(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
rr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
rr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
rr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
rr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var yo =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	ty = new Set('cancel close invalid load scroll toggle'.split(' ').concat(yo));
function Hc(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Zg(r, t, void 0, e), (e.currentTarget = null);
}
function Ep(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
					Hc(o, l, u), (i = a);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== i && o.isPropagationStopped())
					)
						break e;
					Hc(o, l, u), (i = a);
				}
		}
	}
	if (es) throw ((e = oa), (es = !1), (oa = null), e);
}
function oe(e, t) {
	var n = t[ha];
	n === void 0 && (n = t[ha] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Cp(t, e, 2, !1), n.add(r));
}
function Sl(e, t, n) {
	var r = 0;
	t && (r |= 4), Cp(n, e, r, t);
}
var Ci = '_reactListening' + Math.random().toString(36).slice(2);
function Do(e) {
	if (!e[Ci]) {
		(e[Ci] = !0),
			Of.forEach(function (n) {
				n !== 'selectionchange' && (ty.has(n) || Sl(n, !1, e), Sl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ci] || ((t[Ci] = !0), Sl('selectionchange', !1, t));
	}
}
function Cp(e, t, n, r) {
	switch (lp(t)) {
		case 1:
			var o = mv;
			break;
		case 4:
			o = gv;
			break;
		default:
			o = fu;
	}
	(n = o.bind(null, t, n, e)),
		(o = void 0),
		!ra || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
				? e.addEventListener(t, n, { passive: o })
				: e.addEventListener(t, n, !1);
}
function kl(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = Un(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = i = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	Kf(function () {
		var u = i,
			d = au(n),
			f = [];
		e: {
			var c = kp.get(e);
			if (c !== void 0) {
				var y = hu,
					w = e;
				switch (e) {
					case 'keypress':
						if (Ui(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = Ov;
						break;
					case 'focusin':
						(w = 'focus'), (y = ml);
						break;
					case 'focusout':
						(w = 'blur'), (y = ml);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = ml;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						y = Ac;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = xv;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = Mv;
						break;
					case yp:
					case xp:
					case wp:
						y = kv;
						break;
					case Sp:
						y = Iv;
						break;
					case 'scroll':
						y = vv;
						break;
					case 'wheel':
						y = zv;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = Cv;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = Lc;
				}
				var v = (t & 4) !== 0,
					S = !v && e === 'scroll',
					h = v ? (c !== null ? c + 'Capture' : null) : c;
				v = [];
				for (var p = u, g; p !== null; ) {
					g = p;
					var k = g.stateNode;
					if (
						(g.tag === 5 &&
							k !== null &&
							((g = k), h !== null && ((k = Oo(p, h)), k != null && v.push(zo(p, k, g)))),
						S)
					)
						break;
					p = p.return;
				}
				0 < v.length && ((c = new y(c, w, null, n, d)), f.push({ event: c, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((c = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					c && n !== ta && (w = n.relatedTarget || n.fromElement) && (Un(w) || w[Vt]))
				)
					break e;
				if (
					(y || c) &&
					((c =
						d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window),
					y
						? ((w = n.relatedTarget || n.toElement),
							(y = u),
							(w = w ? Un(w) : null),
							w !== null && ((S = or(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) && (w = null))
						: ((y = null), (w = u)),
					y !== w)
				) {
					if (
						((v = Ac),
						(k = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(p = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((v = Lc), (k = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
						(S = y == null ? c : yr(y)),
						(g = w == null ? c : yr(w)),
						(c = new v(k, p + 'leave', y, n, d)),
						(c.target = S),
						(c.relatedTarget = g),
						(k = null),
						Un(d) === u &&
							((v = new v(h, p + 'enter', w, n, d)),
							(v.target = g),
							(v.relatedTarget = S),
							(k = v)),
						(S = k),
						y && w)
					)
						t: {
							for (v = y, h = w, p = 0, g = v; g; g = fr(g)) p++;
							for (g = 0, k = h; k; k = fr(k)) g++;
							for (; 0 < p - g; ) (v = fr(v)), p--;
							for (; 0 < g - p; ) (h = fr(h)), g--;
							for (; p--; ) {
								if (v === h || (h !== null && v === h.alternate)) break t;
								(v = fr(v)), (h = fr(h));
							}
							v = null;
						}
					else v = null;
					y !== null && Qc(f, c, y, v, !1), w !== null && S !== null && Qc(f, S, w, v, !0);
				}
			}
			e: {
				if (
					((c = u ? yr(u) : window),
					(y = c.nodeName && c.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && c.type === 'file'))
				)
					var E = Hv;
				else if (zc(c))
					if (pp) E = Yv;
					else {
						E = Kv;
						var b = Qv;
					}
				else
					(y = c.nodeName) &&
						y.toLowerCase() === 'input' &&
						(c.type === 'checkbox' || c.type === 'radio') &&
						(E = Gv);
				if (E && (E = E(e, u))) {
					fp(f, E, n, d);
					break e;
				}
				b && b(e, c, u),
					e === 'focusout' &&
						(b = c._wrapperState) &&
						b.controlled &&
						c.type === 'number' &&
						Xl(c, 'number', c.value);
			}
			switch (((b = u ? yr(u) : window), e)) {
				case 'focusin':
					(zc(b) || b.contentEditable === 'true') && ((gr = b), (aa = u), (Eo = null));
					break;
				case 'focusout':
					Eo = aa = gr = null;
					break;
				case 'mousedown':
					ua = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(ua = !1), Vc(f, n, d);
					break;
				case 'selectionchange':
					if (Jv) break;
				case 'keydown':
				case 'keyup':
					Vc(f, n, d);
			}
			var P;
			if (gu)
				e: {
					switch (e) {
						case 'compositionstart':
							var T = 'onCompositionStart';
							break e;
						case 'compositionend':
							T = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							T = 'onCompositionUpdate';
							break e;
					}
					T = void 0;
				}
			else
				mr
					? cp(e, n) && (T = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
			T &&
				(up &&
					n.locale !== 'ko' &&
					(mr || T !== 'onCompositionStart'
						? T === 'onCompositionEnd' && mr && (P = ap())
						: ((gn = d), (pu = 'value' in gn ? gn.value : gn.textContent), (mr = !0))),
				(b = is(u, T)),
				0 < b.length &&
					((T = new Mc(T, e, null, n, d)),
					f.push({ event: T, listeners: b }),
					P ? (T.data = P) : ((P = dp(n)), P !== null && (T.data = P)))),
				(P = $v ? Uv(e, n) : Bv(e, n)) &&
					((u = is(u, 'onBeforeInput')),
					0 < u.length &&
						((d = new Mc('onBeforeInput', 'beforeinput', null, n, d)),
						f.push({ event: d, listeners: u }),
						(d.data = P)));
		}
		Ep(f, t);
	});
}
function zo(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function is(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = Oo(e, n)),
			i != null && r.unshift(zo(e, i, o)),
			(i = Oo(e, t)),
			i != null && r.push(zo(e, i, o))),
			(e = e.return);
	}
	return r;
}
function fr(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Qc(e, t, n, r, o) {
	for (var i = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			o
				? ((a = Oo(n, i)), a != null && s.unshift(zo(n, a, l)))
				: o || ((a = Oo(n, i)), a != null && s.push(zo(n, a, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var ny = /\r\n?/g,
	ry = /\u0000|\uFFFD/g;
function Kc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			ny,
			`
`
		)
		.replace(ry, '');
}
function bi(e, t, n) {
	if (((t = Kc(t)), Kc(e) !== t && n)) throw Error(R(425));
}
function ss() {}
var ca = null,
	da = null;
function fa(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var pa = typeof setTimeout == 'function' ? setTimeout : void 0,
	oy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Gc = typeof Promise == 'function' ? Promise : void 0,
	iy =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Gc < 'u'
				? function (e) {
						return Gc.resolve(null).then(e).catch(sy);
					}
				: pa;
function sy(e) {
	setTimeout(function () {
		throw e;
	});
}
function El(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(o), Mo(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = o;
	} while (n);
	Mo(t);
}
function kn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Yc(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Zr = Math.random().toString(36).slice(2),
	Rt = '__reactFiber$' + Zr,
	Fo = '__reactProps$' + Zr,
	Vt = '__reactContainer$' + Zr,
	ha = '__reactEvents$' + Zr,
	ly = '__reactListeners$' + Zr,
	ay = '__reactHandles$' + Zr;
function Un(e) {
	var t = e[Rt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Vt] || n[Rt])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = Yc(e); e !== null; ) {
					if ((n = e[Rt])) return n;
					e = Yc(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function oi(e) {
	return (
		(e = e[Rt] || e[Vt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function yr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(R(33));
}
function Ms(e) {
	return e[Fo] || null;
}
var ma = [],
	xr = -1;
function Ln(e) {
	return { current: e };
}
function ie(e) {
	0 > xr || ((e.current = ma[xr]), (ma[xr] = null), xr--);
}
function te(e, t) {
	xr++, (ma[xr] = e.current), (e.current = t);
}
var Rn = {},
	Oe = Ln(Rn),
	Ue = Ln(!1),
	Xn = Rn;
function Vr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Rn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function Be(e) {
	return (e = e.childContextTypes), e != null;
}
function ls() {
	ie(Ue), ie(Oe);
}
function Xc(e, t, n) {
	if (Oe.current !== Rn) throw Error(R(168));
	te(Oe, t), te(Ue, n);
}
function bp(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(R(108, Qg(e) || 'Unknown', o));
	return de({}, n, r);
}
function as(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
		(Xn = Oe.current),
		te(Oe, e),
		te(Ue, Ue.current),
		!0
	);
}
function qc(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(R(169));
	n
		? ((e = bp(e, t, Xn)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			ie(Ue),
			ie(Oe),
			te(Oe, e))
		: ie(Ue),
		te(Ue, n);
}
var zt = null,
	Ls = !1,
	Cl = !1;
function Pp(e) {
	zt === null ? (zt = [e]) : zt.push(e);
}
function uy(e) {
	(Ls = !0), Pp(e);
}
function In() {
	if (!Cl && zt !== null) {
		Cl = !0;
		var e = 0,
			t = Z;
		try {
			var n = zt;
			for (Z = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(zt = null), (Ls = !1);
		} catch (o) {
			throw (zt !== null && (zt = zt.slice(e + 1)), qf(uu, In), o);
		} finally {
			(Z = t), (Cl = !1);
		}
	}
	return null;
}
var wr = [],
	Sr = 0,
	us = null,
	cs = 0,
	rt = [],
	ot = 0,
	qn = null,
	Ft = 1,
	$t = '';
function Fn(e, t) {
	(wr[Sr++] = cs), (wr[Sr++] = us), (us = e), (cs = t);
}
function Np(e, t, n) {
	(rt[ot++] = Ft), (rt[ot++] = $t), (rt[ot++] = qn), (qn = e);
	var r = Ft;
	e = $t;
	var o = 32 - gt(r) - 1;
	(r &= ~(1 << o)), (n += 1);
	var i = 32 - gt(t) + o;
	if (30 < i) {
		var s = o - (o % 5);
		(i = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(o -= s),
			(Ft = (1 << (32 - gt(t) + o)) | (n << o) | r),
			($t = i + e);
	} else (Ft = (1 << i) | (n << o) | r), ($t = e);
}
function yu(e) {
	e.return !== null && (Fn(e, 1), Np(e, 1, 0));
}
function xu(e) {
	for (; e === us; ) (us = wr[--Sr]), (wr[Sr] = null), (cs = wr[--Sr]), (wr[Sr] = null);
	for (; e === qn; )
		(qn = rt[--ot]),
			(rt[ot] = null),
			($t = rt[--ot]),
			(rt[ot] = null),
			(Ft = rt[--ot]),
			(rt[ot] = null);
}
var qe = null,
	Xe = null,
	se = !1,
	mt = null;
function Tp(e, t) {
	var n = it(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
				t !== null ? ((e.stateNode = t), (qe = e), (Xe = kn(t.firstChild)), !0) : !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (qe = e), (Xe = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = qn !== null ? { id: Ft, overflow: $t } : null),
						(e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
						(n = it(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(qe = e),
						(Xe = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function ga(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function va(e) {
	if (se) {
		var t = Xe;
		if (t) {
			var n = t;
			if (!Jc(e, t)) {
				if (ga(e)) throw Error(R(418));
				t = kn(n.nextSibling);
				var r = qe;
				t && Jc(e, t) ? Tp(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
			}
		} else {
			if (ga(e)) throw Error(R(418));
			(e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e);
		}
	}
}
function Zc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	qe = e;
}
function Pi(e) {
	if (e !== qe) return !1;
	if (!se) return Zc(e), (se = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== 'head' && t !== 'body' && !fa(e.type, e.memoizedProps))),
		t && (t = Xe))
	) {
		if (ga(e)) throw (Rp(), Error(R(418)));
		for (; t; ) Tp(e, t), (t = kn(t.nextSibling));
	}
	if ((Zc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Xe = kn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Xe = null;
		}
	} else Xe = qe ? kn(e.stateNode.nextSibling) : null;
	return !0;
}
function Rp() {
	for (var e = Xe; e; ) e = kn(e.nextSibling);
}
function Wr() {
	(Xe = qe = null), (se = !1);
}
function wu(e) {
	mt === null ? (mt = [e]) : mt.push(e);
}
var cy = Gt.ReactCurrentBatchConfig;
function uo(e, t, n) {
	if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(R(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(R(147, e));
			var o = r,
				i = '' + e;
			return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
				? t.ref
				: ((t = function (s) {
						var l = o.refs;
						s === null ? delete l[i] : (l[i] = s);
					}),
					(t._stringRef = i),
					t);
		}
		if (typeof e != 'string') throw Error(R(284));
		if (!n._owner) throw Error(R(290, e));
	}
	return e;
}
function Ni(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			R(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
		))
	);
}
function ed(e) {
	var t = e._init;
	return t(e._payload);
}
function jp(e) {
	function t(h, p) {
		if (e) {
			var g = h.deletions;
			g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
		}
	}
	function n(h, p) {
		if (!e) return null;
		for (; p !== null; ) t(h, p), (p = p.sibling);
		return null;
	}
	function r(h, p) {
		for (h = new Map(); p !== null; )
			p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
		return h;
	}
	function o(h, p) {
		return (h = Pn(h, p)), (h.index = 0), (h.sibling = null), h;
	}
	function i(h, p, g) {
		return (
			(h.index = g),
			e
				? ((g = h.alternate),
					g !== null ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g) : ((h.flags |= 2), p))
				: ((h.flags |= 1048576), p)
		);
	}
	function s(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function l(h, p, g, k) {
		return p === null || p.tag !== 6
			? ((p = Ol(g, h.mode, k)), (p.return = h), p)
			: ((p = o(p, g)), (p.return = h), p);
	}
	function a(h, p, g, k) {
		var E = g.type;
		return E === hr
			? d(h, p, g.props.children, k, g.key)
			: p !== null &&
				  (p.elementType === E ||
						(typeof E == 'object' && E !== null && E.$$typeof === ln && ed(E) === p.type))
				? ((k = o(p, g.props)), (k.ref = uo(h, p, g)), (k.return = h), k)
				: ((k = Gi(g.type, g.key, g.props, null, h.mode, k)),
					(k.ref = uo(h, p, g)),
					(k.return = h),
					k);
	}
	function u(h, p, g, k) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== g.containerInfo ||
			p.stateNode.implementation !== g.implementation
			? ((p = _l(g, h.mode, k)), (p.return = h), p)
			: ((p = o(p, g.children || [])), (p.return = h), p);
	}
	function d(h, p, g, k, E) {
		return p === null || p.tag !== 7
			? ((p = Yn(g, h.mode, k, E)), (p.return = h), p)
			: ((p = o(p, g)), (p.return = h), p);
	}
	function f(h, p, g) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = Ol('' + p, h.mode, g)), (p.return = h), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case gi:
					return (
						(g = Gi(p.type, p.key, p.props, null, h.mode, g)),
						(g.ref = uo(h, null, p)),
						(g.return = h),
						g
					);
				case pr:
					return (p = _l(p, h.mode, g)), (p.return = h), p;
				case ln:
					var k = p._init;
					return f(h, k(p._payload), g);
			}
			if (go(p) || oo(p)) return (p = Yn(p, h.mode, g, null)), (p.return = h), p;
			Ni(h, p);
		}
		return null;
	}
	function c(h, p, g, k) {
		var E = p !== null ? p.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return E !== null ? null : l(h, p, '' + g, k);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case gi:
					return g.key === E ? a(h, p, g, k) : null;
				case pr:
					return g.key === E ? u(h, p, g, k) : null;
				case ln:
					return (E = g._init), c(h, p, E(g._payload), k);
			}
			if (go(g) || oo(g)) return E !== null ? null : d(h, p, g, k, null);
			Ni(h, g);
		}
		return null;
	}
	function y(h, p, g, k, E) {
		if ((typeof k == 'string' && k !== '') || typeof k == 'number')
			return (h = h.get(g) || null), l(p, h, '' + k, E);
		if (typeof k == 'object' && k !== null) {
			switch (k.$$typeof) {
				case gi:
					return (h = h.get(k.key === null ? g : k.key) || null), a(p, h, k, E);
				case pr:
					return (h = h.get(k.key === null ? g : k.key) || null), u(p, h, k, E);
				case ln:
					var b = k._init;
					return y(h, p, g, b(k._payload), E);
			}
			if (go(k) || oo(k)) return (h = h.get(g) || null), d(p, h, k, E, null);
			Ni(p, k);
		}
		return null;
	}
	function w(h, p, g, k) {
		for (var E = null, b = null, P = p, T = (p = 0), I = null; P !== null && T < g.length; T++) {
			P.index > T ? ((I = P), (P = null)) : (I = P.sibling);
			var _ = c(h, P, g[T], k);
			if (_ === null) {
				P === null && (P = I);
				break;
			}
			e && P && _.alternate === null && t(h, P),
				(p = i(_, p, T)),
				b === null ? (E = _) : (b.sibling = _),
				(b = _),
				(P = I);
		}
		if (T === g.length) return n(h, P), se && Fn(h, T), E;
		if (P === null) {
			for (; T < g.length; T++)
				(P = f(h, g[T], k)),
					P !== null && ((p = i(P, p, T)), b === null ? (E = P) : (b.sibling = P), (b = P));
			return se && Fn(h, T), E;
		}
		for (P = r(h, P); T < g.length; T++)
			(I = y(P, h, T, g[T], k)),
				I !== null &&
					(e && I.alternate !== null && P.delete(I.key === null ? T : I.key),
					(p = i(I, p, T)),
					b === null ? (E = I) : (b.sibling = I),
					(b = I));
		return (
			e &&
				P.forEach(function ($) {
					return t(h, $);
				}),
			se && Fn(h, T),
			E
		);
	}
	function v(h, p, g, k) {
		var E = oo(g);
		if (typeof E != 'function') throw Error(R(150));
		if (((g = E.call(g)), g == null)) throw Error(R(151));
		for (
			var b = (E = null), P = p, T = (p = 0), I = null, _ = g.next();
			P !== null && !_.done;
			T++, _ = g.next()
		) {
			P.index > T ? ((I = P), (P = null)) : (I = P.sibling);
			var $ = c(h, P, _.value, k);
			if ($ === null) {
				P === null && (P = I);
				break;
			}
			e && P && $.alternate === null && t(h, P),
				(p = i($, p, T)),
				b === null ? (E = $) : (b.sibling = $),
				(b = $),
				(P = I);
		}
		if (_.done) return n(h, P), se && Fn(h, T), E;
		if (P === null) {
			for (; !_.done; T++, _ = g.next())
				(_ = f(h, _.value, k)),
					_ !== null && ((p = i(_, p, T)), b === null ? (E = _) : (b.sibling = _), (b = _));
			return se && Fn(h, T), E;
		}
		for (P = r(h, P); !_.done; T++, _ = g.next())
			(_ = y(P, h, T, _.value, k)),
				_ !== null &&
					(e && _.alternate !== null && P.delete(_.key === null ? T : _.key),
					(p = i(_, p, T)),
					b === null ? (E = _) : (b.sibling = _),
					(b = _));
		return (
			e &&
				P.forEach(function (D) {
					return t(h, D);
				}),
			se && Fn(h, T),
			E
		);
	}
	function S(h, p, g, k) {
		if (
			(typeof g == 'object' &&
				g !== null &&
				g.type === hr &&
				g.key === null &&
				(g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case gi:
					e: {
						for (var E = g.key, b = p; b !== null; ) {
							if (b.key === E) {
								if (((E = g.type), E === hr)) {
									if (b.tag === 7) {
										n(h, b.sibling), (p = o(b, g.props.children)), (p.return = h), (h = p);
										break e;
									}
								} else if (
									b.elementType === E ||
									(typeof E == 'object' && E !== null && E.$$typeof === ln && ed(E) === b.type)
								) {
									n(h, b.sibling),
										(p = o(b, g.props)),
										(p.ref = uo(h, b, g)),
										(p.return = h),
										(h = p);
									break e;
								}
								n(h, b);
								break;
							} else t(h, b);
							b = b.sibling;
						}
						g.type === hr
							? ((p = Yn(g.props.children, h.mode, k, g.key)), (p.return = h), (h = p))
							: ((k = Gi(g.type, g.key, g.props, null, h.mode, k)),
								(k.ref = uo(h, p, g)),
								(k.return = h),
								(h = k));
					}
					return s(h);
				case pr:
					e: {
						for (b = g.key; p !== null; ) {
							if (p.key === b)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === g.containerInfo &&
									p.stateNode.implementation === g.implementation
								) {
									n(h, p.sibling), (p = o(p, g.children || [])), (p.return = h), (h = p);
									break e;
								} else {
									n(h, p);
									break;
								}
							else t(h, p);
							p = p.sibling;
						}
						(p = _l(g, h.mode, k)), (p.return = h), (h = p);
					}
					return s(h);
				case ln:
					return (b = g._init), S(h, p, b(g._payload), k);
			}
			if (go(g)) return w(h, p, g, k);
			if (oo(g)) return v(h, p, g, k);
			Ni(h, g);
		}
		return (typeof g == 'string' && g !== '') || typeof g == 'number'
			? ((g = '' + g),
				p !== null && p.tag === 6
					? (n(h, p.sibling), (p = o(p, g)), (p.return = h), (h = p))
					: (n(h, p), (p = Ol(g, h.mode, k)), (p.return = h), (h = p)),
				s(h))
			: n(h, p);
	}
	return S;
}
var Hr = jp(!0),
	Op = jp(!1),
	ds = Ln(null),
	fs = null,
	kr = null,
	Su = null;
function ku() {
	Su = kr = fs = null;
}
function Eu(e) {
	var t = ds.current;
	ie(ds), (e._currentValue = t);
}
function ya(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function Rr(e, t) {
	(fs = e),
		(Su = kr = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function lt(e) {
	var t = e._currentValue;
	if (Su !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), kr === null)) {
			if (fs === null) throw Error(R(308));
			(kr = e), (fs.dependencies = { lanes: 0, firstContext: e });
		} else kr = kr.next = e;
	return t;
}
var Bn = null;
function Cu(e) {
	Bn === null ? (Bn = [e]) : Bn.push(e);
}
function _p(e, t, n, r) {
	var o = t.interleaved;
	return (
		o === null ? ((n.next = n), Cu(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		Wt(e, r)
	);
}
function Wt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function bu(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Ap(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Ut(e, t) {
	return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function En(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), X & 2)) {
		var o = r.pending;
		return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Wt(e, n);
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), Cu(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		Wt(e, n)
	);
}
function Bi(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
	}
}
function td(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function ps(e, t, n, r) {
	var o = e.updateQueue;
	an = !1;
	var i = o.firstBaseUpdate,
		s = o.lastBaseUpdate,
		l = o.shared.pending;
	if (l !== null) {
		o.shared.pending = null;
		var a = l,
			u = a.next;
		(a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(l = d.lastBaseUpdate),
			l !== s && (l === null ? (d.firstBaseUpdate = u) : (l.next = u), (d.lastBaseUpdate = a)));
	}
	if (i !== null) {
		var f = o.baseState;
		(s = 0), (d = u = a = null), (l = i);
		do {
			var c = l.lane,
				y = l.eventTime;
			if ((r & c) === c) {
				d !== null &&
					(d = d.next =
						{
							eventTime: y,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var w = e,
						v = l;
					switch (((c = t), (y = n), v.tag)) {
						case 1:
							if (((w = v.payload), typeof w == 'function')) {
								f = w.call(y, f, c);
								break e;
							}
							f = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (((w = v.payload), (c = typeof w == 'function' ? w.call(y, f, c) : w), c == null))
								break e;
							f = de({}, f, c);
							break e;
						case 2:
							an = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [l]) : c.push(l));
			} else
				(y = {
					eventTime: y,
					lane: c,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					d === null ? ((u = d = y), (a = f)) : (d = d.next = y),
					(s |= c);
			if (((l = l.next), l === null)) {
				if (((l = o.shared.pending), l === null)) break;
				(c = l), (l = c.next), (c.next = null), (o.lastBaseUpdate = c), (o.shared.pending = null);
			}
		} while (!0);
		if (
			(d === null && (a = f),
			(o.baseState = a),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = d),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (s |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(Zn |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function nd(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(R(191, o));
				o.call(r);
			}
		}
}
var ii = {},
	Ot = Ln(ii),
	$o = Ln(ii),
	Uo = Ln(ii);
function Vn(e) {
	if (e === ii) throw Error(R(174));
	return e;
}
function Pu(e, t) {
	switch ((te(Uo, t), te($o, e), te(Ot, ii), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Jl(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Jl(t, e));
	}
	ie(Ot), te(Ot, t);
}
function Qr() {
	ie(Ot), ie($o), ie(Uo);
}
function Mp(e) {
	Vn(Uo.current);
	var t = Vn(Ot.current),
		n = Jl(t, e.type);
	t !== n && (te($o, e), te(Ot, n));
}
function Nu(e) {
	$o.current === e && (ie(Ot), ie($o));
}
var ue = Ln(0);
function hs(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var bl = [];
function Tu() {
	for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
	bl.length = 0;
}
var Vi = Gt.ReactCurrentDispatcher,
	Pl = Gt.ReactCurrentBatchConfig,
	Jn = 0,
	ce = null,
	ve = null,
	we = null,
	ms = !1,
	Co = !1,
	Bo = 0,
	dy = 0;
function Ne() {
	throw Error(R(321));
}
function Ru(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++) if (!yt(e[n], t[n])) return !1;
	return !0;
}
function ju(e, t, n, r, o, i) {
	if (
		((Jn = i),
		(ce = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Vi.current = e === null || e.memoizedState === null ? my : gy),
		(e = n(r, o)),
		Co)
	) {
		i = 0;
		do {
			if (((Co = !1), (Bo = 0), 25 <= i)) throw Error(R(301));
			(i += 1), (we = ve = null), (t.updateQueue = null), (Vi.current = vy), (e = n(r, o));
		} while (Co);
	}
	if (
		((Vi.current = gs),
		(t = ve !== null && ve.next !== null),
		(Jn = 0),
		(we = ve = ce = null),
		(ms = !1),
		t)
	)
		throw Error(R(300));
	return e;
}
function Ou() {
	var e = Bo !== 0;
	return (Bo = 0), e;
}
function bt() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
	return we === null ? (ce.memoizedState = we = e) : (we = we.next = e), we;
}
function at() {
	if (ve === null) {
		var e = ce.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ve.next;
	var t = we === null ? ce.memoizedState : we.next;
	if (t !== null) (we = t), (ve = e);
	else {
		if (e === null) throw Error(R(310));
		(ve = e),
			(e = {
				memoizedState: ve.memoizedState,
				baseState: ve.baseState,
				baseQueue: ve.baseQueue,
				queue: ve.queue,
				next: null,
			}),
			we === null ? (ce.memoizedState = we = e) : (we = we.next = e);
	}
	return we;
}
function Vo(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function Nl(e) {
	var t = at(),
		n = t.queue;
	if (n === null) throw Error(R(311));
	n.lastRenderedReducer = e;
	var r = ve,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var s = o.next;
			(o.next = i.next), (i.next = s);
		}
		(r.baseQueue = o = i), (n.pending = null);
	}
	if (o !== null) {
		(i = o.next), (r = r.baseState);
		var l = (s = null),
			a = null,
			u = i;
		do {
			var d = u.lane;
			if ((Jn & d) === d)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((l = a = f), (s = r)) : (a = a.next = f), (ce.lanes |= d), (Zn |= d);
			}
			u = u.next;
		} while (u !== null && u !== i);
		a === null ? (s = r) : (a.next = l),
			yt(r, t.memoizedState) || ($e = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (ce.lanes |= i), (Zn |= i), (o = o.next);
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Tl(e) {
	var t = at(),
		n = t.queue;
	if (n === null) throw Error(R(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var s = (o = o.next);
		do (i = e(i, s.action)), (s = s.next);
		while (s !== o);
		yt(i, t.memoizedState) || ($e = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function Lp() {}
function Ip(e, t) {
	var n = ce,
		r = at(),
		o = t(),
		i = !yt(r.memoizedState, o);
	if (
		(i && ((r.memoizedState = o), ($e = !0)),
		(r = r.queue),
		_u(Fp.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), Wo(9, zp.bind(null, n, r, o, t), void 0, null), Se === null))
			throw Error(R(349));
		Jn & 30 || Dp(n, t, o);
	}
	return o;
}
function Dp(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ce.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (ce.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zp(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), $p(t) && Up(e);
}
function Fp(e, t, n) {
	return n(function () {
		$p(t) && Up(e);
	});
}
function $p(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !yt(e, n);
	} catch {
		return !0;
	}
}
function Up(e) {
	var t = Wt(e, 1);
	t !== null && vt(t, e, 1, -1);
}
function rd(e) {
	var t = bt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vo,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = hy.bind(null, ce, e)),
		[t.memoizedState, e]
	);
}
function Wo(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ce.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(ce.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Bp() {
	return at().memoizedState;
}
function Wi(e, t, n, r) {
	var o = bt();
	(ce.flags |= e), (o.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Is(e, t, n, r) {
	var o = at();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ve !== null) {
		var s = ve.memoizedState;
		if (((i = s.destroy), r !== null && Ru(r, s.deps))) {
			o.memoizedState = Wo(t, n, i, r);
			return;
		}
	}
	(ce.flags |= e), (o.memoizedState = Wo(1 | t, n, i, r));
}
function od(e, t) {
	return Wi(8390656, 8, e, t);
}
function _u(e, t) {
	return Is(2048, 8, e, t);
}
function Vp(e, t) {
	return Is(4, 2, e, t);
}
function Wp(e, t) {
	return Is(4, 4, e, t);
}
function Hp(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Qp(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), Is(4, 4, Hp.bind(null, t, e), n);
}
function Au() {}
function Kp(e, t) {
	var n = at();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ru(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Gp(e, t) {
	var n = at();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ru(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yp(e, t, n) {
	return Jn & 21
		? (yt(n, t) || ((n = ep()), (ce.lanes |= n), (Zn |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function fy(e, t) {
	var n = Z;
	(Z = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Pl.transition;
	Pl.transition = {};
	try {
		e(!1), t();
	} finally {
		(Z = n), (Pl.transition = r);
	}
}
function Xp() {
	return at().memoizedState;
}
function py(e, t, n) {
	var r = bn(e);
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), qp(e)))
		Jp(t, n);
	else if (((n = _p(e, t, n, r)), n !== null)) {
		var o = Le();
		vt(n, e, r, o), Zp(n, t, r);
	}
}
function hy(e, t, n) {
	var r = bn(e),
		o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (qp(e)) Jp(t, o);
	else {
		var i = e.alternate;
		if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
			try {
				var s = t.lastRenderedState,
					l = i(s, n);
				if (((o.hasEagerState = !0), (o.eagerState = l), yt(l, s))) {
					var a = t.interleaved;
					a === null ? ((o.next = o), Cu(t)) : ((o.next = a.next), (a.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(n = _p(e, t, o, r)), n !== null && ((o = Le()), vt(n, e, r, o), Zp(n, t, r));
	}
}
function qp(e) {
	var t = e.alternate;
	return e === ce || (t !== null && t === ce);
}
function Jp(e, t) {
	Co = ms = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Zp(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
	}
}
var gs = {
		readContext: lt,
		useCallback: Ne,
		useContext: Ne,
		useEffect: Ne,
		useImperativeHandle: Ne,
		useInsertionEffect: Ne,
		useLayoutEffect: Ne,
		useMemo: Ne,
		useReducer: Ne,
		useRef: Ne,
		useState: Ne,
		useDebugValue: Ne,
		useDeferredValue: Ne,
		useTransition: Ne,
		useMutableSource: Ne,
		useSyncExternalStore: Ne,
		useId: Ne,
		unstable_isNewReconciler: !1,
	},
	my = {
		readContext: lt,
		useCallback: function (e, t) {
			return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: lt,
		useEffect: od,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), Wi(4194308, 4, Hp.bind(null, t, e), n);
		},
		useLayoutEffect: function (e, t) {
			return Wi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Wi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = bt();
			return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
		},
		useReducer: function (e, t, n) {
			var r = bt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = py.bind(null, ce, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = bt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: rd,
		useDebugValue: Au,
		useDeferredValue: function (e) {
			return (bt().memoizedState = e);
		},
		useTransition: function () {
			var e = rd(!1),
				t = e[0];
			return (e = fy.bind(null, e[1])), (bt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ce,
				o = bt();
			if (se) {
				if (n === void 0) throw Error(R(407));
				n = n();
			} else {
				if (((n = t()), Se === null)) throw Error(R(349));
				Jn & 30 || Dp(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(o.queue = i),
				od(Fp.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Wo(9, zp.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = bt(),
				t = Se.identifierPrefix;
			if (se) {
				var n = $t,
					r = Ft;
				(n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Bo++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = dy++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	gy = {
		readContext: lt,
		useCallback: Kp,
		useContext: lt,
		useEffect: _u,
		useImperativeHandle: Qp,
		useInsertionEffect: Vp,
		useLayoutEffect: Wp,
		useMemo: Gp,
		useReducer: Nl,
		useRef: Bp,
		useState: function () {
			return Nl(Vo);
		},
		useDebugValue: Au,
		useDeferredValue: function (e) {
			var t = at();
			return Yp(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = Nl(Vo)[0],
				t = at().memoizedState;
			return [e, t];
		},
		useMutableSource: Lp,
		useSyncExternalStore: Ip,
		useId: Xp,
		unstable_isNewReconciler: !1,
	},
	vy = {
		readContext: lt,
		useCallback: Kp,
		useContext: lt,
		useEffect: _u,
		useImperativeHandle: Qp,
		useInsertionEffect: Vp,
		useLayoutEffect: Wp,
		useMemo: Gp,
		useReducer: Tl,
		useRef: Bp,
		useState: function () {
			return Tl(Vo);
		},
		useDebugValue: Au,
		useDeferredValue: function (e) {
			var t = at();
			return ve === null ? (t.memoizedState = e) : Yp(t, ve.memoizedState, e);
		},
		useTransition: function () {
			var e = Tl(Vo)[0],
				t = at().memoizedState;
			return [e, t];
		},
		useMutableSource: Lp,
		useSyncExternalStore: Ip,
		useId: Xp,
		unstable_isNewReconciler: !1,
	};
function dt(e, t) {
	if (e && e.defaultProps) {
		(t = de({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function xa(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : de({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ds = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? or(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Le(),
			o = bn(e),
			i = Ut(r, o);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = En(e, i, o)),
			t !== null && (vt(t, e, o, r), Bi(t, e, o));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Le(),
			o = bn(e),
			i = Ut(r, o);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = En(e, i, o)),
			t !== null && (vt(t, e, o, r), Bi(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Le(),
			r = bn(e),
			o = Ut(n, r);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = En(e, o, r)),
			t !== null && (vt(t, e, r, n), Bi(t, e, r));
	},
};
function id(e, t, n, r, o, i, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, s)
			: t.prototype && t.prototype.isPureReactComponent
				? !Io(n, r) || !Io(o, i)
				: !0
	);
}
function eh(e, t, n) {
	var r = !1,
		o = Rn,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = lt(i))
			: ((o = Be(t) ? Xn : Oe.current),
				(r = t.contextTypes),
				(i = (r = r != null) ? Vr(e, o) : Rn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Ds),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function sd(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Ds.enqueueReplaceState(t, t.state, null);
}
function wa(e, t, n, r) {
	var o = e.stateNode;
	(o.props = n), (o.state = e.memoizedState), (o.refs = {}), bu(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (o.context = lt(i))
		: ((i = Be(t) ? Xn : Oe.current), (o.context = Vr(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (xa(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function' ||
			(typeof o.UNSAFE_componentWillMount != 'function' &&
				typeof o.componentWillMount != 'function') ||
			((t = o.state),
			typeof o.componentWillMount == 'function' && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
			t !== o.state && Ds.enqueueReplaceState(o, o.state, null),
			ps(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Kr(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Hg(r)), (r = r.return);
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function Rl(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sa(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var yy = typeof WeakMap == 'function' ? WeakMap : Map;
function th(e, t, n) {
	(n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ys || ((ys = !0), (Oa = r)), Sa(e, t);
		}),
		n
	);
}
function nh(e, t, n) {
	(n = Ut(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var o = t.value;
		(n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				Sa(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				Sa(e, t), typeof r != 'function' && (Cn === null ? (Cn = new Set([this])) : Cn.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
			}),
		n
	);
}
function ld(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new yy();
		var o = new Set();
		r.set(t, o);
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
	o.has(n) || (o.add(n), (e = _y.bind(null, e, t, n)), t.then(e, e));
}
function ad(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function ud(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null ? (n.tag = 17) : ((t = Ut(-1, 1)), (t.tag = 2), En(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var xy = Gt.ReactCurrentOwner,
	$e = !1;
function Ae(e, t, n, r) {
	t.child = e === null ? Op(t, null, n, r) : Hr(t, e.child, n, r);
}
function cd(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return (
		Rr(t, o),
		(r = ju(e, t, n, r, i, o)),
		(n = Ou()),
		e !== null && !$e
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ht(e, t, o))
			: (se && n && yu(t), (t.flags |= 1), Ae(e, t, r, o), t.child)
	);
}
function dd(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!Uu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), rh(e, t, i, r, o))
			: ((e = Gi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var s = i.memoizedProps;
		if (((n = n.compare), (n = n !== null ? n : Io), n(s, r) && e.ref === t.ref))
			return Ht(e, t, o);
	}
	return (t.flags |= 1), (e = Pn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function rh(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Io(i, r) && e.ref === t.ref)
			if ((($e = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && ($e = !0);
			else return (t.lanes = e.lanes), Ht(e, t, o);
	}
	return ka(e, t, n, r, o);
}
function oh(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				te(Cr, Ge),
				(Ge |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					te(Cr, Ge),
					(Ge |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				te(Cr, Ge),
				(Ge |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), te(Cr, Ge), (Ge |= r);
	return Ae(e, t, o, n), t.child;
}
function ih(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, o) {
	var i = Be(n) ? Xn : Oe.current;
	return (
		(i = Vr(t, i)),
		Rr(t, o),
		(n = ju(e, t, n, r, i, o)),
		(r = Ou()),
		e !== null && !$e
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ht(e, t, o))
			: (se && r && yu(t), (t.flags |= 1), Ae(e, t, n, o), t.child)
	);
}
function fd(e, t, n, r, o) {
	if (Be(n)) {
		var i = !0;
		as(t);
	} else i = !1;
	if ((Rr(t, o), t.stateNode === null)) Hi(e, t), eh(t, n, r), wa(t, n, r, o), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == 'object' && u !== null
			? (u = lt(u))
			: ((u = Be(n) ? Xn : Oe.current), (u = Vr(t, u)));
		var d = n.getDerivedStateFromProps,
			f = typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && sd(t, s, r, u)),
			(an = !1);
		var c = t.memoizedState;
		(s.state = c),
			ps(t, r, s, o),
			(a = t.memoizedState),
			l !== r || c !== a || Ue.current || an
				? (typeof d == 'function' && (xa(t, n, d, r), (a = t.memoizedState)),
					(l = an || id(t, n, l, r, c, a, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != 'function' &&
									typeof s.componentWillMount != 'function') ||
								(typeof s.componentWillMount == 'function' && s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
							typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = a)),
					(s.props = r),
					(s.state = a),
					(s.context = u),
					(r = l))
				: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
	} else {
		(s = t.stateNode),
			Ap(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : dt(t.type, l)),
			(s.props = u),
			(f = t.pendingProps),
			(c = s.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = lt(a))
				: ((a = Be(n) ? Xn : Oe.current), (a = Vr(t, a)));
		var y = n.getDerivedStateFromProps;
		(d = typeof y == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== f || c !== a) && sd(t, s, r, a)),
			(an = !1),
			(c = t.memoizedState),
			(s.state = c),
			ps(t, r, s, o);
		var w = t.memoizedState;
		l !== f || c !== w || Ue.current || an
			? (typeof y == 'function' && (xa(t, n, y, r), (w = t.memoizedState)),
				(u = an || id(t, n, u, r, c, w, a) || !1)
					? (d ||
							(typeof s.UNSAFE_componentWillUpdate != 'function' &&
								typeof s.componentWillUpdate != 'function') ||
							(typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, w, a),
							typeof s.UNSAFE_componentWillUpdate == 'function' &&
								s.UNSAFE_componentWillUpdate(r, w, a)),
						typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && c === e.memoizedState) ||
							(t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && c === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = w)),
				(s.props = r),
				(s.state = w),
				(s.context = a),
				(r = u))
			: (typeof s.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && c === e.memoizedState) ||
					(t.flags |= 4),
				typeof s.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && c === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1));
	}
	return Ea(e, t, n, r, i, o);
}
function Ea(e, t, n, r, o, i) {
	ih(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return o && qc(t, n, !1), Ht(e, t, i);
	(r = t.stateNode), (xy.current = t);
	var l = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Hr(t, e.child, null, i)), (t.child = Hr(t, null, l, i)))
			: Ae(e, t, l, i),
		(t.memoizedState = r.state),
		o && qc(t, n, !0),
		t.child
	);
}
function sh(e) {
	var t = e.stateNode;
	t.pendingContext
		? Xc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Xc(e, t.context, !1),
		Pu(e, t.containerInfo);
}
function pd(e, t, n, r, o) {
	return Wr(), wu(o), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function ba(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function lh(e, t, n) {
	var r = t.pendingProps,
		o = ue.current,
		i = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
		te(ue, o & 1),
		e === null)
	)
		return (
			va(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
					null)
				: ((s = r.children),
					(e = r.fallback),
					i
						? ((r = t.mode),
							(i = t.child),
							(s = { mode: 'hidden', children: s }),
							!(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = s))
								: (i = $s(s, r, 0, null)),
							(e = Yn(e, r, n, null)),
							(i.return = t),
							(e.return = t),
							(i.sibling = e),
							(t.child = i),
							(t.child.memoizedState = ba(n)),
							(t.memoizedState = Ca),
							e)
						: Mu(t, s))
		);
	if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
		return wy(e, t, s, r, l, o, n);
	if (i) {
		(i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
		var a = { mode: 'hidden', children: r.children };
		return (
			!(s & 1) && t.child !== o
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
				: ((r = Pn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
			l !== null ? (i = Pn(l, i)) : ((i = Yn(i, s, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? ba(n)
					: { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
			(i.memoizedState = s),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = Ca),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = Pn(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Mu(e, t) {
	return (t = $s({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ti(e, t, n, r) {
	return (
		r !== null && wu(r),
		Hr(t, e.child, null, n),
		(e = Mu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function wy(e, t, n, r, o, i, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Rl(Error(R(422)))), Ti(e, t, s, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((i = r.fallback),
					(o = t.mode),
					(r = $s({ mode: 'visible', children: r.children }, o, 0, null)),
					(i = Yn(i, o, s, null)),
					(i.flags |= 2),
					(r.return = t),
					(i.return = t),
					(r.sibling = i),
					(t.child = r),
					t.mode & 1 && Hr(t, e.child, null, s),
					(t.child.memoizedState = ba(s)),
					(t.memoizedState = Ca),
					i);
	if (!(t.mode & 1)) return Ti(e, t, s, null);
	if (o.data === '$!') {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (i = Error(R(419))), (r = Rl(i, r, void 0)), Ti(e, t, s, r);
	}
	if (((l = (s & e.childLanes) !== 0), $e || l)) {
		if (((r = Se), r !== null)) {
			switch (s & -s) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (r.suspendedLanes | s) ? 0 : o),
				o !== 0 && o !== i.retryLane && ((i.retryLane = o), Wt(e, o), vt(r, e, o, -1));
		}
		return $u(), (r = Rl(Error(R(421)))), Ti(e, t, s, r);
	}
	return o.data === '$?'
		? ((t.flags |= 128), (t.child = e.child), (t = Ay.bind(null, e)), (o._reactRetry = t), null)
		: ((e = i.treeContext),
			(Xe = kn(o.nextSibling)),
			(qe = t),
			(se = !0),
			(mt = null),
			e !== null &&
				((rt[ot++] = Ft),
				(rt[ot++] = $t),
				(rt[ot++] = qn),
				(Ft = e.id),
				($t = e.overflow),
				(qn = t)),
			(t = Mu(t, r.children)),
			(t.flags |= 4096),
			t);
}
function hd(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ya(e.return, t, n);
}
function jl(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o,
			})
		: ((i.isBackwards = t),
			(i.rendering = null),
			(i.renderingStartTime = 0),
			(i.last = r),
			(i.tail = n),
			(i.tailMode = o));
}
function ah(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((Ae(e, t, r.children, n), (r = ue.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && hd(e, n, t);
				else if (e.tag === 19) hd(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((te(ue, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case 'forwards':
				for (n = t.child, o = null; n !== null; )
					(e = n.alternate), e !== null && hs(e) === null && (o = n), (n = n.sibling);
				(n = o),
					n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
					jl(t, !1, o, n, i);
				break;
			case 'backwards':
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && hs(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = n), (n = o), (o = e);
				}
				jl(t, !0, n, null, i);
				break;
			case 'together':
				jl(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Hi(e, t) {
	!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
	if ((e !== null && (t.dependencies = e.dependencies), (Zn |= t.lanes), !(n & t.childLanes)))
		return null;
	if (e !== null && t.child !== e.child) throw Error(R(153));
	if (t.child !== null) {
		for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = Pn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Sy(e, t, n) {
	switch (t.tag) {
		case 3:
			sh(t), Wr();
			break;
		case 5:
			Mp(t);
			break;
		case 1:
			Be(t.type) && as(t);
			break;
		case 4:
			Pu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			te(ds, r._currentValue), (r._currentValue = o);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (te(ue, ue.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? lh(e, t, n)
						: (te(ue, ue.current & 1), (e = Ht(e, t, n)), e !== null ? e.sibling : null);
			te(ue, ue.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return ah(e, t, n);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				te(ue, ue.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), oh(e, t, n);
	}
	return Ht(e, t, n);
}
var uh, Pa, ch, dh;
uh = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Pa = function () {};
ch = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		(e = t.stateNode), Vn(Ot.current);
		var i = null;
		switch (n) {
			case 'input':
				(o = Gl(e, o)), (r = Gl(e, r)), (i = []);
				break;
			case 'select':
				(o = de({}, o, { value: void 0 })), (r = de({}, r, { value: void 0 })), (i = []);
				break;
			case 'textarea':
				(o = ql(e, o)), (r = ql(e, r)), (i = []);
				break;
			default:
				typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ss);
		}
		Zl(n, r);
		var s;
		n = null;
		for (u in o)
			if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === 'style') {
					var l = o[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Ro.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = o != null ? o[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
						for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
					} else n || (i || (i = []), i.push(u, n)), (n = a);
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
							(l = l ? l.__html : void 0),
							a != null && l !== a && (i = i || []).push(u, a))
						: u === 'children'
							? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
							: u !== 'suppressContentEditableWarning' &&
								u !== 'suppressHydrationWarning' &&
								(Ro.hasOwnProperty(u)
									? (a != null && u === 'onScroll' && oe('scroll', e), i || l === a || (i = []))
									: (i = i || []).push(u, a));
		}
		n && (i = i || []).push('style', n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
dh = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function co(e, t) {
	if (!se)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Te(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ky(e, t, n) {
	var r = t.pendingProps;
	switch ((xu(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Te(t), null;
		case 1:
			return Be(t.type) && ls(), Te(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Qr(),
				ie(Ue),
				ie(Oe),
				Tu(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Pi(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), mt !== null && (Ma(mt), (mt = null)))),
				Pa(e, t),
				Te(t),
				null
			);
		case 5:
			Nu(t);
			var o = Vn(Uo.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				ch(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(R(166));
					return Te(t), null;
				}
				if (((e = Vn(Ot.current)), Pi(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Rt] = t), (r[Fo] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							oe('cancel', r), oe('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							oe('load', r);
							break;
						case 'video':
						case 'audio':
							for (o = 0; o < yo.length; o++) oe(yo[o], r);
							break;
						case 'source':
							oe('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							oe('error', r), oe('load', r);
							break;
						case 'details':
							oe('toggle', r);
							break;
						case 'input':
							Ec(r, i), oe('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }), oe('invalid', r);
							break;
						case 'textarea':
							bc(r, i), oe('invalid', r);
					}
					Zl(n, i), (o = null);
					for (var s in i)
						if (i.hasOwnProperty(s)) {
							var l = i[s];
							s === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
										(i.suppressHydrationWarning !== !0 && bi(r.textContent, l, e),
										(o = ['children', l]))
									: typeof l == 'number' &&
										r.textContent !== '' + l &&
										(i.suppressHydrationWarning !== !0 && bi(r.textContent, l, e),
										(o = ['children', '' + l]))
								: Ro.hasOwnProperty(s) && l != null && s === 'onScroll' && oe('scroll', r);
						}
					switch (n) {
						case 'input':
							vi(r), Cc(r, i, !0);
							break;
						case 'textarea':
							vi(r), Pc(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = ss);
					}
					(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = o.nodeType === 9 ? o : o.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Ff(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = s.createElement('div')),
									(e.innerHTML = '<script><\/script>'),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
									? (e = s.createElement(n, { is: r.is }))
									: ((e = s.createElement(n)),
										n === 'select' &&
											((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Rt] = t),
						(e[Fo] = r),
						uh(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = ea(n, r)), n)) {
							case 'dialog':
								oe('cancel', e), oe('close', e), (o = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								oe('load', e), (o = r);
								break;
							case 'video':
							case 'audio':
								for (o = 0; o < yo.length; o++) oe(yo[o], e);
								o = r;
								break;
							case 'source':
								oe('error', e), (o = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								oe('error', e), oe('load', e), (o = r);
								break;
							case 'details':
								oe('toggle', e), (o = r);
								break;
							case 'input':
								Ec(e, r), (o = Gl(e, r)), oe('invalid', e);
								break;
							case 'option':
								o = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(o = de({}, r, { value: void 0 })),
									oe('invalid', e);
								break;
							case 'textarea':
								bc(e, r), (o = ql(e, r)), oe('invalid', e);
								break;
							default:
								o = r;
						}
						Zl(n, o), (l = o);
						for (i in l)
							if (l.hasOwnProperty(i)) {
								var a = l[i];
								i === 'style'
									? Bf(e, a)
									: i === 'dangerouslySetInnerHTML'
										? ((a = a ? a.__html : void 0), a != null && $f(e, a))
										: i === 'children'
											? typeof a == 'string'
												? (n !== 'textarea' || a !== '') && jo(e, a)
												: typeof a == 'number' && jo(e, '' + a)
											: i !== 'suppressContentEditableWarning' &&
												i !== 'suppressHydrationWarning' &&
												i !== 'autoFocus' &&
												(Ro.hasOwnProperty(i)
													? a != null && i === 'onScroll' && oe('scroll', e)
													: a != null && ou(e, i, a, s));
							}
						switch (n) {
							case 'input':
								vi(e), Cc(e, r, !1);
								break;
							case 'textarea':
								vi(e), Pc(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Tn(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? br(e, !!r.multiple, i, !1)
										: r.defaultValue != null && br(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == 'function' && (e.onclick = ss);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return Te(t), null;
		case 6:
			if (e && t.stateNode != null) dh(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
				if (((n = Vn(Uo.current)), Vn(Ot.current), Pi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Rt] = t),
						(i = r.nodeValue !== n) && ((e = qe), e !== null))
					)
						switch (e.tag) {
							case 3:
								bi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									bi(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Rt] = t),
						(t.stateNode = r);
			}
			return Te(t), null;
		case 13:
			if (
				(ie(ue),
				(r = t.memoizedState),
				e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (se && Xe !== null && t.mode & 1 && !(t.flags & 128))
					Rp(), Wr(), (t.flags |= 98560), (i = !1);
				else if (((i = Pi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(R(318));
						if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
							throw Error(R(317));
						i[Rt] = t;
					} else Wr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Te(t), (i = !1);
				} else mt !== null && (Ma(mt), (mt = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 && (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : $u())),
					t.updateQueue !== null && (t.flags |= 4),
					Te(t),
					null);
		case 4:
			return Qr(), Pa(e, t), e === null && Do(t.stateNode.containerInfo), Te(t), null;
		case 10:
			return Eu(t.type._context), Te(t), null;
		case 17:
			return Be(t.type) && ls(), Te(t), null;
		case 19:
			if ((ie(ue), (i = t.memoizedState), i === null)) return Te(t), null;
			if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
				if (r) co(i, !1);
				else {
					if (xe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = hs(e)), s !== null)) {
								for (
									t.flags |= 128,
										co(i, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(s = i.alternate),
										s === null
											? ((i.childLanes = 0),
												(i.lanes = e),
												(i.child = null),
												(i.subtreeFlags = 0),
												(i.memoizedProps = null),
												(i.memoizedState = null),
												(i.updateQueue = null),
												(i.dependencies = null),
												(i.stateNode = null))
											: ((i.childLanes = s.childLanes),
												(i.lanes = s.lanes),
												(i.child = s.child),
												(i.subtreeFlags = 0),
												(i.deletions = null),
												(i.memoizedProps = s.memoizedProps),
												(i.memoizedState = s.memoizedState),
												(i.updateQueue = s.updateQueue),
												(i.type = s.type),
												(e = s.dependencies),
												(i.dependencies =
													e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
										(n = n.sibling);
								return te(ue, (ue.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						he() > Gr &&
						((t.flags |= 128), (r = !0), co(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = hs(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							co(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !s.alternate && !se)
						)
							return Te(t), null;
					} else
						2 * he() - i.renderingStartTime > Gr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), co(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
			}
			return i.tail !== null
				? ((t = i.tail),
					(i.rendering = t),
					(i.tail = t.sibling),
					(i.renderingStartTime = he()),
					(t.sibling = null),
					(n = ue.current),
					te(ue, r ? (n & 1) | 2 : n & 1),
					t)
				: (Te(t), null);
		case 22:
		case 23:
			return (
				Fu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ge & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Te(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(R(156, t.tag));
}
function Ey(e, t) {
	switch ((xu(t), t.tag)) {
		case 1:
			return (
				Be(t.type) && ls(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Qr(),
				ie(Ue),
				ie(Oe),
				Tu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Nu(t), null;
		case 13:
			if ((ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(R(340));
				Wr();
			}
			return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 19:
			return ie(ue), null;
		case 4:
			return Qr(), null;
		case 10:
			return Eu(t.type._context), null;
		case 22:
		case 23:
			return Fu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ri = !1,
	je = !1,
	Cy = typeof WeakSet == 'function' ? WeakSet : Set,
	M = null;
function Er(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				pe(e, t, r);
			}
		else n.current = null;
}
function Na(e, t, n) {
	try {
		n();
	} catch (r) {
		pe(e, t, r);
	}
}
var md = !1;
function by(e, t) {
	if (((ca = rs), (e = gp()), vu(e))) {
		if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						d = 0,
						f = e,
						c = null;
					t: for (;;) {
						for (
							var y;
							f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
								f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(y = f.firstChild) !== null;

						)
							(c = f), (f = y);
						for (;;) {
							if (f === e) break t;
							if (
								(c === n && ++u === o && (l = s),
								c === i && ++d === r && (a = s),
								(y = f.nextSibling) !== null)
							)
								break;
							(f = c), (c = f.parentNode);
						}
						f = y;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (da = { focusedElem: e, selectionRange: n }, rs = !1, M = t; M !== null; )
		if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (M = e);
		else
			for (; M !== null; ) {
				t = M;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var v = w.memoizedProps,
										S = w.memoizedState,
										h = t.stateNode,
										p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : dt(t.type, v), S);
									h.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var g = t.stateNode.containerInfo;
								g.nodeType === 1
									? (g.textContent = '')
									: g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(R(163));
						}
				} catch (k) {
					pe(t, t.return, k);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (M = e);
					break;
				}
				M = t.return;
			}
	return (w = md), (md = !1), w;
}
function bo(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && Na(t, n, i);
			}
			o = o.next;
		} while (o !== r);
	}
}
function zs(e, t) {
	if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Ta(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function fh(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), fh(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null && (delete t[Rt], delete t[Fo], delete t[ha], delete t[ly], delete t[ay])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function ph(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gd(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || ph(e.return)) return null;
			e = e.return;
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Ra(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = ss));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), (e = e.sibling);
}
function ja(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
var Ee = null,
	ht = !1;
function nn(e, t, n) {
	for (n = n.child; n !== null; ) hh(e, t, n), (n = n.sibling);
}
function hh(e, t, n) {
	if (jt && typeof jt.onCommitFiberUnmount == 'function')
		try {
			jt.onCommitFiberUnmount(js, n);
		} catch {}
	switch (n.tag) {
		case 5:
			je || Er(n, t);
		case 6:
			var r = Ee,
				o = ht;
			(Ee = null),
				nn(e, t, n),
				(Ee = r),
				(ht = o),
				Ee !== null &&
					(ht
						? ((e = Ee),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ee.removeChild(n.stateNode));
			break;
		case 18:
			Ee !== null &&
				(ht
					? ((e = Ee),
						(n = n.stateNode),
						e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n),
						Mo(e))
					: El(Ee, n.stateNode));
			break;
		case 4:
			(r = Ee),
				(o = ht),
				(Ee = n.stateNode.containerInfo),
				(ht = !0),
				nn(e, t, n),
				(Ee = r),
				(ht = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!je && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
				o = r = r.next;
				do {
					var i = o,
						s = i.destroy;
					(i = i.tag), s !== void 0 && (i & 2 || i & 4) && Na(n, t, s), (o = o.next);
				} while (o !== r);
			}
			nn(e, t, n);
			break;
		case 1:
			if (!je && (Er(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
				try {
					(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
				} catch (l) {
					pe(n, t, l);
				}
			nn(e, t, n);
			break;
		case 21:
			nn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((je = (r = je) || n.memoizedState !== null), nn(e, t, n), (je = r))
				: nn(e, t, n);
			break;
		default:
			nn(e, t, n);
	}
}
function vd(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Cy()),
			t.forEach(function (r) {
				var o = My.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			});
	}
}
function ct(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(Ee = l.stateNode), (ht = !1);
							break e;
						case 3:
							(Ee = l.stateNode.containerInfo), (ht = !0);
							break e;
						case 4:
							(Ee = l.stateNode.containerInfo), (ht = !0);
							break e;
					}
					l = l.return;
				}
				if (Ee === null) throw Error(R(160));
				hh(i, s, o), (Ee = null), (ht = !1);
				var a = o.alternate;
				a !== null && (a.return = null), (o.return = null);
			} catch (u) {
				pe(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mh(t, e), (t = t.sibling);
}
function mh(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((ct(t, e), Ct(e), r & 4)) {
				try {
					bo(3, e, e.return), zs(3, e);
				} catch (v) {
					pe(e, e.return, v);
				}
				try {
					bo(5, e, e.return);
				} catch (v) {
					pe(e, e.return, v);
				}
			}
			break;
		case 1:
			ct(t, e), Ct(e), r & 512 && n !== null && Er(n, n.return);
			break;
		case 5:
			if ((ct(t, e), Ct(e), r & 512 && n !== null && Er(n, n.return), e.flags & 32)) {
				var o = e.stateNode;
				try {
					jo(o, '');
				} catch (v) {
					pe(e, e.return, v);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					s = n !== null ? n.memoizedProps : i,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === 'input' && i.type === 'radio' && i.name != null && Df(o, i), ea(l, s);
						var u = ea(l, i);
						for (s = 0; s < a.length; s += 2) {
							var d = a[s],
								f = a[s + 1];
							d === 'style'
								? Bf(o, f)
								: d === 'dangerouslySetInnerHTML'
									? $f(o, f)
									: d === 'children'
										? jo(o, f)
										: ou(o, d, f, u);
						}
						switch (l) {
							case 'input':
								Yl(o, i);
								break;
							case 'textarea':
								zf(o, i);
								break;
							case 'select':
								var c = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var y = i.value;
								y != null
									? br(o, !!i.multiple, y, !1)
									: c !== !!i.multiple &&
										(i.defaultValue != null
											? br(o, !!i.multiple, i.defaultValue, !0)
											: br(o, !!i.multiple, i.multiple ? [] : '', !1));
						}
						o[Fo] = i;
					} catch (v) {
						pe(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((ct(t, e), Ct(e), r & 4)) {
				if (e.stateNode === null) throw Error(R(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (v) {
					pe(e, e.return, v);
				}
			}
			break;
		case 3:
			if ((ct(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
				try {
					Mo(t.containerInfo);
				} catch (v) {
					pe(e, e.return, v);
				}
			break;
		case 4:
			ct(t, e), Ct(e);
			break;
		case 13:
			ct(t, e),
				Ct(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Du = he())),
				r & 4 && vd(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((je = (u = je) || d), ct(t, e), (je = u)) : ct(t, e),
				Ct(e),
				r & 8192)
			) {
				if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
					for (M = e, d = e.child; d !== null; ) {
						for (f = M = d; M !== null; ) {
							switch (((c = M), (y = c.child), c.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									bo(4, c, c.return);
									break;
								case 1:
									Er(c, c.return);
									var w = c.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = c), (n = c.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (v) {
											pe(r, n, v);
										}
									}
									break;
								case 5:
									Er(c, c.return);
									break;
								case 22:
									if (c.memoizedState !== null) {
										xd(f);
										continue;
									}
							}
							y !== null ? ((y.return = c), (M = y)) : xd(f);
						}
						d = d.sibling;
					}
				e: for (d = null, f = e; ; ) {
					if (f.tag === 5) {
						if (d === null) {
							d = f;
							try {
								(o = f.stateNode),
									u
										? ((i = o.style),
											typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((l = f.stateNode),
											(a = f.memoizedProps.style),
											(s = a != null && a.hasOwnProperty('display') ? a.display : null),
											(l.style.display = Uf('display', s)));
							} catch (v) {
								pe(e, e.return, v);
							}
						}
					} else if (f.tag === 6) {
						if (d === null)
							try {
								f.stateNode.nodeValue = u ? '' : f.memoizedProps;
							} catch (v) {
								pe(e, e.return, v);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						d === f && (d = null), (f = f.return);
					}
					d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			ct(t, e), Ct(e), r & 4 && vd(e);
			break;
		case 21:
			break;
		default:
			ct(t, e), Ct(e);
	}
}
function Ct(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (ph(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(R(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (jo(o, ''), (r.flags &= -33));
					var i = gd(e);
					ja(e, i, o);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = gd(e);
					Ra(e, l, s);
					break;
				default:
					throw Error(R(161));
			}
		} catch (a) {
			pe(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Py(e, t, n) {
	(M = e), gh(e);
}
function gh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; M !== null; ) {
		var o = M,
			i = o.child;
		if (o.tag === 22 && r) {
			var s = o.memoizedState !== null || Ri;
			if (!s) {
				var l = o.alternate,
					a = (l !== null && l.memoizedState !== null) || je;
				l = Ri;
				var u = je;
				if (((Ri = s), (je = a) && !u))
					for (M = o; M !== null; )
						(s = M),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? wd(o)
								: a !== null
									? ((a.return = s), (M = a))
									: wd(o);
				for (; i !== null; ) (M = i), gh(i), (i = i.sibling);
				(M = o), (Ri = l), (je = u);
			}
			yd(e);
		} else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : yd(e);
	}
}
function yd(e) {
	for (; M !== null; ) {
		var t = M;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							je || zs(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !je)
								if (n === null) r.componentDidMount();
								else {
									var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
									r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
								}
							var i = t.updateQueue;
							i !== null && nd(t, i, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								nd(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus();
										break;
									case 'img':
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && Mo(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(R(163));
					}
				je || (t.flags & 512 && Ta(t));
			} catch (c) {
				pe(t, t.return, c);
			}
		}
		if (t === e) {
			M = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (M = n);
			break;
		}
		M = t.return;
	}
}
function xd(e) {
	for (; M !== null; ) {
		var t = M;
		if (t === e) {
			M = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (M = n);
			break;
		}
		M = t.return;
	}
}
function wd(e) {
	for (; M !== null; ) {
		var t = M;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						zs(4, t);
					} catch (a) {
						pe(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							pe(t, o, a);
						}
					}
					var i = t.return;
					try {
						Ta(t);
					} catch (a) {
						pe(t, i, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						Ta(t);
					} catch (a) {
						pe(t, s, a);
					}
			}
		} catch (a) {
			pe(t, t.return, a);
		}
		if (t === e) {
			M = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (M = l);
			break;
		}
		M = t.return;
	}
}
var Ny = Math.ceil,
	vs = Gt.ReactCurrentDispatcher,
	Lu = Gt.ReactCurrentOwner,
	st = Gt.ReactCurrentBatchConfig,
	X = 0,
	Se = null,
	me = null,
	Ce = 0,
	Ge = 0,
	Cr = Ln(0),
	xe = 0,
	Ho = null,
	Zn = 0,
	Fs = 0,
	Iu = 0,
	Po = null,
	Fe = null,
	Du = 0,
	Gr = 1 / 0,
	Dt = null,
	ys = !1,
	Oa = null,
	Cn = null,
	ji = !1,
	vn = null,
	xs = 0,
	No = 0,
	_a = null,
	Qi = -1,
	Ki = 0;
function Le() {
	return X & 6 ? he() : Qi !== -1 ? Qi : (Qi = he());
}
function bn(e) {
	return e.mode & 1
		? X & 2 && Ce !== 0
			? Ce & -Ce
			: cy.transition !== null
				? (Ki === 0 && (Ki = ep()), Ki)
				: ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lp(e.type))), e)
		: 1;
}
function vt(e, t, n, r) {
	if (50 < No) throw ((No = 0), (_a = null), Error(R(185)));
	ni(e, n, r),
		(!(X & 2) || e !== Se) &&
			(e === Se && (!(X & 2) && (Fs |= n), xe === 4 && cn(e, Ce)),
			Ve(e, r),
			n === 1 && X === 0 && !(t.mode & 1) && ((Gr = he() + 500), Ls && In()));
}
function Ve(e, t) {
	var n = e.callbackNode;
	cv(e, t);
	var r = ns(e, e === Se ? Ce : 0);
	if (r === 0) n !== null && Rc(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Rc(n), t === 1))
			e.tag === 0 ? uy(Sd.bind(null, e)) : Pp(Sd.bind(null, e)),
				iy(function () {
					!(X & 6) && In();
				}),
				(n = null);
		else {
			switch (tp(r)) {
				case 1:
					n = uu;
					break;
				case 4:
					n = Jf;
					break;
				case 16:
					n = ts;
					break;
				case 536870912:
					n = Zf;
					break;
				default:
					n = ts;
			}
			n = Ch(n, vh.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function vh(e, t) {
	if (((Qi = -1), (Ki = 0), X & 6)) throw Error(R(327));
	var n = e.callbackNode;
	if (jr() && e.callbackNode !== n) return null;
	var r = ns(e, e === Se ? Ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
	else {
		t = r;
		var o = X;
		X |= 2;
		var i = xh();
		(Se !== e || Ce !== t) && ((Dt = null), (Gr = he() + 500), Gn(e, t));
		do
			try {
				jy();
				break;
			} catch (l) {
				yh(e, l);
			}
		while (!0);
		ku(), (vs.current = i), (X = o), me !== null ? (t = 0) : ((Se = null), (Ce = 0), (t = xe));
	}
	if (t !== 0) {
		if ((t === 2 && ((o = ia(e)), o !== 0 && ((r = o), (t = Aa(e, o)))), t === 1))
			throw ((n = Ho), Gn(e, 0), cn(e, r), Ve(e, he()), n);
		if (t === 6) cn(e, r);
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!Ty(o) &&
					((t = ws(e, r)), t === 2 && ((i = ia(e)), i !== 0 && ((r = i), (t = Aa(e, i)))), t === 1))
			)
				throw ((n = Ho), Gn(e, 0), cn(e, r), Ve(e, he()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(R(345));
				case 2:
					$n(e, Fe, Dt);
					break;
				case 3:
					if ((cn(e, r), (r & 130023424) === r && ((t = Du + 500 - he()), 10 < t))) {
						if (ns(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							Le(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = pa($n.bind(null, e, Fe, Dt), t);
						break;
					}
					$n(e, Fe, Dt);
					break;
				case 4:
					if ((cn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var s = 31 - gt(r);
						(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
					}
					if (
						((r = o),
						(r = he() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * Ny(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = pa($n.bind(null, e, Fe, Dt), r);
						break;
					}
					$n(e, Fe, Dt);
					break;
				case 5:
					$n(e, Fe, Dt);
					break;
				default:
					throw Error(R(329));
			}
		}
	}
	return Ve(e, he()), e.callbackNode === n ? vh.bind(null, e) : null;
}
function Aa(e, t) {
	var n = Po;
	return (
		e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256),
		(e = ws(e, t)),
		e !== 2 && ((t = Fe), (Fe = n), t !== null && Ma(t)),
		e
	);
}
function Ma(e) {
	Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Ty(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!yt(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function cn(e, t) {
	for (
		t &= ~Iu, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - gt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Sd(e) {
	if (X & 6) throw Error(R(327));
	jr();
	var t = ns(e, 0);
	if (!(t & 1)) return Ve(e, he()), null;
	var n = ws(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ia(e);
		r !== 0 && ((t = r), (n = Aa(e, r)));
	}
	if (n === 1) throw ((n = Ho), Gn(e, 0), cn(e, t), Ve(e, he()), n);
	if (n === 6) throw Error(R(345));
	return (
		(e.finishedWork = e.current.alternate), (e.finishedLanes = t), $n(e, Fe, Dt), Ve(e, he()), null
	);
}
function zu(e, t) {
	var n = X;
	X |= 1;
	try {
		return e(t);
	} finally {
		(X = n), X === 0 && ((Gr = he() + 500), Ls && In());
	}
}
function er(e) {
	vn !== null && vn.tag === 0 && !(X & 6) && jr();
	var t = X;
	X |= 1;
	var n = st.transition,
		r = Z;
	try {
		if (((st.transition = null), (Z = 1), e)) return e();
	} finally {
		(Z = r), (st.transition = n), (X = t), !(X & 6) && In();
	}
}
function Fu() {
	(Ge = Cr.current), ie(Cr);
}
function Gn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), oy(n)), me !== null))
		for (n = me.return; n !== null; ) {
			var r = n;
			switch ((xu(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ls();
					break;
				case 3:
					Qr(), ie(Ue), ie(Oe), Tu();
					break;
				case 5:
					Nu(r);
					break;
				case 4:
					Qr();
					break;
				case 13:
					ie(ue);
					break;
				case 19:
					ie(ue);
					break;
				case 10:
					Eu(r.type._context);
					break;
				case 22:
				case 23:
					Fu();
			}
			n = n.return;
		}
	if (
		((Se = e),
		(me = e = Pn(e.current, null)),
		(Ce = Ge = t),
		(xe = 0),
		(Ho = null),
		(Iu = Fs = Zn = 0),
		(Fe = Po = null),
		Bn !== null)
	) {
		for (t = 0; t < Bn.length; t++)
			if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var s = i.next;
					(i.next = o), (r.next = s);
				}
				n.pending = r;
			}
		Bn = null;
	}
	return e;
}
function yh(e, t) {
	do {
		var n = me;
		try {
			if ((ku(), (Vi.current = gs), ms)) {
				for (var r = ce.memoizedState; r !== null; ) {
					var o = r.queue;
					o !== null && (o.pending = null), (r = r.next);
				}
				ms = !1;
			}
			if (
				((Jn = 0),
				(we = ve = ce = null),
				(Co = !1),
				(Bo = 0),
				(Lu.current = null),
				n === null || n.return === null)
			) {
				(xe = 1), (Ho = t), (me = null);
				break;
			}
			e: {
				var i = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = Ce),
					(l.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						d = l,
						f = d.tag;
					if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var c = d.alternate;
						c
							? ((d.updateQueue = c.updateQueue),
								(d.memoizedState = c.memoizedState),
								(d.lanes = c.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var y = ad(s);
					if (y !== null) {
						(y.flags &= -257), ud(y, s, l, i, t), y.mode & 1 && ld(i, u, t), (t = y), (a = u);
						var w = t.updateQueue;
						if (w === null) {
							var v = new Set();
							v.add(a), (t.updateQueue = v);
						} else w.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							ld(i, u, t), $u();
							break e;
						}
						a = Error(R(426));
					}
				} else if (se && l.mode & 1) {
					var S = ad(s);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256), ud(S, s, l, i, t), wu(Kr(a, l));
						break e;
					}
				}
				(i = a = Kr(a, l)), xe !== 4 && (xe = 2), Po === null ? (Po = [i]) : Po.push(i), (i = s);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var h = th(i, a, t);
							td(i, h);
							break e;
						case 1:
							l = a;
							var p = i.type,
								g = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof p.getDerivedStateFromError == 'function' ||
									(g !== null &&
										typeof g.componentDidCatch == 'function' &&
										(Cn === null || !Cn.has(g))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var k = nh(i, l, t);
								td(i, k);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Sh(n);
		} catch (E) {
			(t = E), me === n && n !== null && (me = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function xh() {
	var e = vs.current;
	return (vs.current = gs), e === null ? gs : e;
}
function $u() {
	(xe === 0 || xe === 3 || xe === 2) && (xe = 4),
		Se === null || (!(Zn & 268435455) && !(Fs & 268435455)) || cn(Se, Ce);
}
function ws(e, t) {
	var n = X;
	X |= 2;
	var r = xh();
	(Se !== e || Ce !== t) && ((Dt = null), Gn(e, t));
	do
		try {
			Ry();
			break;
		} catch (o) {
			yh(e, o);
		}
	while (!0);
	if ((ku(), (X = n), (vs.current = r), me !== null)) throw Error(R(261));
	return (Se = null), (Ce = 0), xe;
}
function Ry() {
	for (; me !== null; ) wh(me);
}
function jy() {
	for (; me !== null && !tv(); ) wh(me);
}
function wh(e) {
	var t = Eh(e.alternate, e, Ge);
	(e.memoizedProps = e.pendingProps), t === null ? Sh(e) : (me = t), (Lu.current = null);
}
function Sh(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Ey(n, t)), n !== null)) {
				(n.flags &= 32767), (me = n);
				return;
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(xe = 6), (me = null);
				return;
			}
		} else if (((n = ky(n, t, Ge)), n !== null)) {
			me = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			me = t;
			return;
		}
		me = t = e;
	} while (t !== null);
	xe === 0 && (xe = 5);
}
function $n(e, t, n) {
	var r = Z,
		o = st.transition;
	try {
		(st.transition = null), (Z = 1), Oy(e, t, n, r);
	} finally {
		(st.transition = o), (Z = r);
	}
	return null;
}
function Oy(e, t, n, r) {
	do jr();
	while (vn !== null);
	if (X & 6) throw Error(R(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(dv(e, i),
		e === Se && ((me = Se = null), (Ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ji ||
			((ji = !0),
			Ch(ts, function () {
				return jr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = st.transition), (st.transition = null);
		var s = Z;
		Z = 1;
		var l = X;
		(X |= 4),
			(Lu.current = null),
			by(e, n),
			mh(n, e),
			qv(da),
			(rs = !!ca),
			(da = ca = null),
			(e.current = n),
			Py(n),
			nv(),
			(X = l),
			(Z = s),
			(st.transition = i);
	} else e.current = n;
	if (
		(ji && ((ji = !1), (vn = e), (xs = o)),
		(i = e.pendingLanes),
		i === 0 && (Cn = null),
		iv(n.stateNode),
		Ve(e, he()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
	if (ys) throw ((ys = !1), (e = Oa), (Oa = null), e);
	return (
		xs & 1 && e.tag !== 0 && jr(),
		(i = e.pendingLanes),
		i & 1 ? (e === _a ? No++ : ((No = 0), (_a = e))) : (No = 0),
		In(),
		null
	);
}
function jr() {
	if (vn !== null) {
		var e = tp(xs),
			t = st.transition,
			n = Z;
		try {
			if (((st.transition = null), (Z = 16 > e ? 16 : e), vn === null)) var r = !1;
			else {
				if (((e = vn), (vn = null), (xs = 0), X & 6)) throw Error(R(331));
				var o = X;
				for (X |= 4, M = e.current; M !== null; ) {
					var i = M,
						s = i.child;
					if (M.flags & 16) {
						var l = i.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (M = u; M !== null; ) {
									var d = M;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											bo(8, d, i);
									}
									var f = d.child;
									if (f !== null) (f.return = d), (M = f);
									else
										for (; M !== null; ) {
											d = M;
											var c = d.sibling,
												y = d.return;
											if ((fh(d), d === u)) {
												M = null;
												break;
											}
											if (c !== null) {
												(c.return = y), (M = c);
												break;
											}
											M = y;
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var v = w.child;
								if (v !== null) {
									w.child = null;
									do {
										var S = v.sibling;
										(v.sibling = null), (v = S);
									} while (v !== null);
								}
							}
							M = i;
						}
					}
					if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (M = s);
					else
						e: for (; M !== null; ) {
							if (((i = M), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										bo(9, i, i.return);
								}
							var h = i.sibling;
							if (h !== null) {
								(h.return = i.return), (M = h);
								break e;
							}
							M = i.return;
						}
				}
				var p = e.current;
				for (M = p; M !== null; ) {
					s = M;
					var g = s.child;
					if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (M = g);
					else
						e: for (s = p; M !== null; ) {
							if (((l = M), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											zs(9, l);
									}
								} catch (E) {
									pe(l, l.return, E);
								}
							if (l === s) {
								M = null;
								break e;
							}
							var k = l.sibling;
							if (k !== null) {
								(k.return = l.return), (M = k);
								break e;
							}
							M = l.return;
						}
				}
				if (((X = o), In(), jt && typeof jt.onPostCommitFiberRoot == 'function'))
					try {
						jt.onPostCommitFiberRoot(js, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(Z = n), (st.transition = t);
		}
	}
	return !1;
}
function kd(e, t, n) {
	(t = Kr(n, t)),
		(t = th(e, t, 1)),
		(e = En(e, t, 1)),
		(t = Le()),
		e !== null && (ni(e, 1, t), Ve(e, t));
}
function pe(e, t, n) {
	if (e.tag === 3) kd(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				kd(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' && (Cn === null || !Cn.has(r)))
				) {
					(e = Kr(n, e)),
						(e = nh(t, e, 1)),
						(t = En(t, e, 1)),
						(e = Le()),
						t !== null && (ni(t, 1, e), Ve(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function _y(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Le()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Se === e &&
			(Ce & n) === n &&
			(xe === 4 || (xe === 3 && (Ce & 130023424) === Ce && 500 > he() - Du) ? Gn(e, 0) : (Iu |= n)),
		Ve(e, t);
}
function kh(e, t) {
	t === 0 && (e.mode & 1 ? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304)) : (t = 1));
	var n = Le();
	(e = Wt(e, t)), e !== null && (ni(e, t, n), Ve(e, n));
}
function Ay(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), kh(e, n);
}
function My(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(R(314));
	}
	r !== null && r.delete(t), kh(e, n);
}
var Eh;
Eh = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ue.current) $e = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), Sy(e, t, n);
			$e = !!(e.flags & 131072);
		}
	else ($e = !1), se && t.flags & 1048576 && Np(t, cs, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Hi(e, t), (e = t.pendingProps);
			var o = Vr(t, Oe.current);
			Rr(t, n), (o = ju(null, t, r, e, o, n));
			var i = Ou();
			return (
				(t.flags |= 1),
				typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						Be(r) ? ((i = !0), as(t)) : (i = !1),
						(t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
						bu(t),
						(o.updater = Ds),
						(t.stateNode = o),
						(o._reactInternals = t),
						wa(t, r, e, n),
						(t = Ea(null, t, r, !0, i, n)))
					: ((t.tag = 0), se && i && yu(t), Ae(null, t, o, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Hi(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = Iy(r)),
					(e = dt(r, e)),
					o)
				) {
					case 0:
						t = ka(null, t, r, e, n);
						break e;
					case 1:
						t = fd(null, t, r, e, n);
						break e;
					case 11:
						t = cd(null, t, r, e, n);
						break e;
					case 14:
						t = dd(null, t, r, dt(r.type, e), n);
						break e;
				}
				throw Error(R(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : dt(r, o)),
				ka(e, t, r, o, n)
			);
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : dt(r, o)),
				fd(e, t, r, o, n)
			);
		case 3:
			e: {
				if ((sh(t), e === null)) throw Error(R(387));
				(r = t.pendingProps), (i = t.memoizedState), (o = i.element), Ap(e, t), ps(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(o = Kr(Error(R(423)), t)), (t = pd(e, t, r, n, o));
						break e;
					} else if (r !== o) {
						(o = Kr(Error(R(424)), t)), (t = pd(e, t, r, n, o));
						break e;
					} else
						for (
							Xe = kn(t.stateNode.containerInfo.firstChild),
								qe = t,
								se = !0,
								mt = null,
								n = Op(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Wr(), r === o)) {
						t = Ht(e, t, n);
						break e;
					}
					Ae(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Mp(t),
				e === null && va(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(s = o.children),
				fa(r, o) ? (s = null) : i !== null && fa(r, i) && (t.flags |= 32),
				ih(e, t),
				Ae(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && va(t), null;
		case 13:
			return lh(e, t, n);
		case 4:
			return (
				Pu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Hr(t, null, r, n)) : Ae(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : dt(r, o)),
				cd(e, t, r, o, n)
			);
		case 7:
			return Ae(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ae(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ae(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(s = o.value),
					te(ds, r._currentValue),
					(r._currentValue = s),
					i !== null)
				)
					if (yt(i.value, s)) {
						if (i.children === o.children && !Ue.current) {
							t = Ht(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var l = i.dependencies;
							if (l !== null) {
								s = i.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (i.tag === 1) {
											(a = Ut(-1, n & -n)), (a.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)),
													(u.pending = a);
											}
										}
										(i.lanes |= n),
											(a = i.alternate),
											a !== null && (a.lanes |= n),
											ya(i.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (i.tag === 10) s = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((s = i.return), s === null)) throw Error(R(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									ya(s, n, t),
									(s = i.sibling);
							} else s = i.child;
							if (s !== null) s.return = i;
							else
								for (s = i; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((i = s.sibling), i !== null)) {
										(i.return = s.return), (s = i);
										break;
									}
									s = s.return;
								}
							i = s;
						}
				Ae(e, t, o.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				Rr(t, n),
				(o = lt(o)),
				(r = r(o)),
				(t.flags |= 1),
				Ae(e, t, r, n),
				t.child
			);
		case 14:
			return (r = t.type), (o = dt(r, t.pendingProps)), (o = dt(r.type, o)), dd(e, t, r, o, n);
		case 15:
			return rh(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : dt(r, o)),
				Hi(e, t),
				(t.tag = 1),
				Be(r) ? ((e = !0), as(t)) : (e = !1),
				Rr(t, n),
				eh(t, r, o),
				wa(t, r, o, n),
				Ea(null, t, r, !0, e, n)
			);
		case 19:
			return ah(e, t, n);
		case 22:
			return oh(e, t, n);
	}
	throw Error(R(156, t.tag));
};
function Ch(e, t) {
	return qf(e, t);
}
function Ly(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function it(e, t, n, r) {
	return new Ly(e, t, n, r);
}
function Uu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Iy(e) {
	if (typeof e == 'function') return Uu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === su)) return 11;
		if (e === lu) return 14;
	}
	return 2;
}
function Pn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = it(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Gi(e, t, n, r, o, i) {
	var s = 2;
	if (((r = e), typeof e == 'function')) Uu(e) && (s = 1);
	else if (typeof e == 'string') s = 5;
	else
		e: switch (e) {
			case hr:
				return Yn(n.children, o, i, t);
			case iu:
				(s = 8), (o |= 8);
				break;
			case Wl:
				return (e = it(12, n, t, o | 2)), (e.elementType = Wl), (e.lanes = i), e;
			case Hl:
				return (e = it(13, n, t, o)), (e.elementType = Hl), (e.lanes = i), e;
			case Ql:
				return (e = it(19, n, t, o)), (e.elementType = Ql), (e.lanes = i), e;
			case Mf:
				return $s(n, o, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case _f:
							s = 10;
							break e;
						case Af:
							s = 9;
							break e;
						case su:
							s = 11;
							break e;
						case lu:
							s = 14;
							break e;
						case ln:
							(s = 16), (r = null);
							break e;
					}
				throw Error(R(130, e == null ? e : typeof e, ''));
		}
	return (t = it(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Yn(e, t, n, r) {
	return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
	return (
		(e = it(22, e, r, t)), (e.elementType = Mf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
	);
}
function Ol(e, t, n) {
	return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function _l(e, t, n) {
	return (
		(t = it(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Dy(e, t, n, r, o) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = fl(0)),
		(this.expirationTimes = fl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = fl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function Bu(e, t, n, r, o, i, s, l, a) {
	return (
		(e = new Dy(e, t, n, l, a)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = it(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		bu(i),
		e
	);
}
function zy(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: pr,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function bh(e) {
	if (!e) return Rn;
	e = e._reactInternals;
	e: {
		if (or(e) !== e || e.tag !== 1) throw Error(R(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Be(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(R(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Be(n)) return bp(e, n, t);
	}
	return t;
}
function Ph(e, t, n, r, o, i, s, l, a) {
	return (
		(e = Bu(n, r, !0, e, o, i, s, l, a)),
		(e.context = bh(null)),
		(n = e.current),
		(r = Le()),
		(o = bn(n)),
		(i = Ut(r, o)),
		(i.callback = t ?? null),
		En(n, i, o),
		(e.current.lanes = o),
		ni(e, o, r),
		Ve(e, r),
		e
	);
}
function Us(e, t, n, r) {
	var o = t.current,
		i = Le(),
		s = bn(o);
	return (
		(n = bh(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ut(i, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = En(o, t, s)),
		e !== null && (vt(e, o, s, i), Bi(e, o, s)),
		s
	);
}
function Ss(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ed(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Vu(e, t) {
	Ed(e, t), (e = e.alternate) && Ed(e, t);
}
function Fy() {
	return null;
}
var Nh =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
			};
function Wu(e) {
	this._internalRoot = e;
}
Bs.prototype.render = Wu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(R(409));
	Us(e, t, null, null);
};
Bs.prototype.unmount = Wu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		er(function () {
			Us(null, e, null, null);
		}),
			(t[Vt] = null);
	}
};
function Bs(e) {
	this._internalRoot = e;
}
Bs.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = op();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
		un.splice(n, 0, e), n === 0 && sp(e);
	}
};
function Hu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vs(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Cd() {}
function $y(e, t, n, r, o) {
	if (o) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var u = Ss(s);
				i.call(u);
			};
		}
		var s = Ph(t, r, e, 0, null, !1, !1, '', Cd);
		return (
			(e._reactRootContainer = s),
			(e[Vt] = s.current),
			Do(e.nodeType === 8 ? e.parentNode : e),
			er(),
			s
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var u = Ss(a);
			l.call(u);
		};
	}
	var a = Bu(e, 0, !1, null, null, !1, !1, '', Cd);
	return (
		(e._reactRootContainer = a),
		(e[Vt] = a.current),
		Do(e.nodeType === 8 ? e.parentNode : e),
		er(function () {
			Us(t, a, n, r);
		}),
		a
	);
}
function Ws(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var s = i;
		if (typeof o == 'function') {
			var l = o;
			o = function () {
				var a = Ss(s);
				l.call(a);
			};
		}
		Us(t, s, e, o);
	} else s = $y(n, t, e, o, r);
	return Ss(s);
}
np = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = vo(t.pendingLanes);
				n !== 0 && (cu(t, n | 1), Ve(t, he()), !(X & 6) && ((Gr = he() + 500), In()));
			}
			break;
		case 13:
			er(function () {
				var r = Wt(e, 1);
				if (r !== null) {
					var o = Le();
					vt(r, e, 1, o);
				}
			}),
				Vu(e, 1);
	}
};
du = function (e) {
	if (e.tag === 13) {
		var t = Wt(e, 134217728);
		if (t !== null) {
			var n = Le();
			vt(t, e, 134217728, n);
		}
		Vu(e, 134217728);
	}
};
rp = function (e) {
	if (e.tag === 13) {
		var t = bn(e),
			n = Wt(e, t);
		if (n !== null) {
			var r = Le();
			vt(n, e, t, r);
		}
		Vu(e, t);
	}
};
op = function () {
	return Z;
};
ip = function (e, t) {
	var n = Z;
	try {
		return (Z = e), t();
	} finally {
		Z = n;
	}
};
na = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Yl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = Ms(r);
						if (!o) throw Error(R(90));
						If(r), Yl(r, o);
					}
				}
			}
			break;
		case 'textarea':
			zf(e, n);
			break;
		case 'select':
			(t = n.value), t != null && br(e, !!n.multiple, t, !1);
	}
};
Hf = zu;
Qf = er;
var Uy = { usingClientEntryPoint: !1, Events: [oi, yr, Ms, Vf, Wf, zu] },
	fo = {
		findFiberByHostInstance: Un,
		bundleType: 0,
		version: '18.3.1',
		rendererPackageName: 'react-dom',
	},
	By = {
		bundleType: fo.bundleType,
		version: fo.version,
		rendererPackageName: fo.rendererPackageName,
		rendererConfig: fo.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Gt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Yf(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: fo.findFiberByHostInstance || Fy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Oi.isDisabled && Oi.supportsFiber)
		try {
			(js = Oi.inject(By)), (jt = Oi);
		} catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uy;
et.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Hu(t)) throw Error(R(200));
	return zy(e, t, null, n);
};
et.createRoot = function (e, t) {
	if (!Hu(e)) throw Error(R(299));
	var n = !1,
		r = '',
		o = Nh;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Bu(e, 1, !1, null, null, n, !1, r, o)),
		(e[Vt] = t.current),
		Do(e.nodeType === 8 ? e.parentNode : e),
		new Wu(t)
	);
};
et.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(R(188))
			: ((e = Object.keys(e).join(',')), Error(R(268, e)));
	return (e = Yf(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
	return er(e);
};
et.hydrate = function (e, t, n) {
	if (!Vs(t)) throw Error(R(200));
	return Ws(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
	if (!Hu(e)) throw Error(R(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = '',
		s = Nh;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Ph(t, null, e, 1, n ?? null, o, !1, i, s)),
		(e[Vt] = t.current),
		Do(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o);
	return new Bs(t);
};
et.render = function (e, t, n) {
	if (!Vs(t)) throw Error(R(200));
	return Ws(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
	if (!Vs(e)) throw Error(R(40));
	return e._reactRootContainer
		? (er(function () {
				Ws(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Vt] = null);
				});
			}),
			!0)
		: !1;
};
et.unstable_batchedUpdates = zu;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Vs(n)) throw Error(R(200));
	if (e == null || e._reactInternals === void 0) throw Error(R(38));
	return Ws(e, t, n, !1, r);
};
et.version = '18.3.1-next-f1338f8080-20240426';
function Th() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th);
		} catch (e) {
			console.error(e);
		}
}
Th(), (Tf.exports = et);
var si = Tf.exports;
const Rh = gf(si);
var jh,
	bd = si;
(jh = bd.createRoot), bd.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qo() {
	return (
		(Qo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Qo.apply(this, arguments)
	);
}
var yn;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(yn || (yn = {}));
const Pd = 'popstate';
function Vy(e) {
	e === void 0 && (e = {});
	function t(o, i) {
		let { pathname: s = '/', search: l = '', hash: a = '' } = ir(o.location.hash.substr(1));
		return (
			!s.startsWith('/') && !s.startsWith('.') && (s = '/' + s),
			La(
				'',
				{ pathname: s, search: l, hash: a },
				(i.state && i.state.usr) || null,
				(i.state && i.state.key) || 'default'
			)
		);
	}
	function n(o, i) {
		let s = o.document.querySelector('base'),
			l = '';
		if (s && s.getAttribute('href')) {
			let a = o.location.href,
				u = a.indexOf('#');
			l = u === -1 ? a : a.slice(0, u);
		}
		return l + '#' + (typeof i == 'string' ? i : ks(i));
	}
	function r(o, i) {
		Qu(
			o.pathname.charAt(0) === '/',
			'relative pathnames are not supported in hash history.push(' + JSON.stringify(i) + ')'
		);
	}
	return Hy(t, n, r, e);
}
function ge(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Qu(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Wy() {
	return Math.random().toString(36).substr(2, 8);
}
function Nd(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function La(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Qo(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? ir(t) : t,
			{ state: n, key: (t && t.key) || r || Wy() }
		)
	);
}
function ks(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function ir(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
	}
	return t;
}
function Hy(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		s = o.history,
		l = yn.Pop,
		a = null,
		u = d();
	u == null && ((u = 0), s.replaceState(Qo({}, s.state, { idx: u }), ''));
	function d() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		l = yn.Pop;
		let S = d(),
			h = S == null ? null : S - u;
		(u = S), a && a({ action: l, location: v.location, delta: h });
	}
	function c(S, h) {
		l = yn.Push;
		let p = La(v.location, S, h);
		n && n(p, S), (u = d() + 1);
		let g = Nd(p, u),
			k = v.createHref(p);
		try {
			s.pushState(g, '', k);
		} catch (E) {
			if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
			o.location.assign(k);
		}
		i && a && a({ action: l, location: v.location, delta: 1 });
	}
	function y(S, h) {
		l = yn.Replace;
		let p = La(v.location, S, h);
		n && n(p, S), (u = d());
		let g = Nd(p, u),
			k = v.createHref(p);
		s.replaceState(g, '', k), i && a && a({ action: l, location: v.location, delta: 0 });
	}
	function w(S) {
		let h = o.location.origin !== 'null' ? o.location.origin : o.location.href,
			p = typeof S == 'string' ? S : ks(S);
		return (
			(p = p.replace(/ $/, '%20')),
			ge(h, 'No window.location.(origin|href) available to create URL for href: ' + p),
			new URL(p, h)
		);
	}
	let v = {
		get action() {
			return l;
		},
		get location() {
			return e(o, s);
		},
		listen(S) {
			if (a) throw new Error('A history only accepts one active listener');
			return (
				o.addEventListener(Pd, f),
				(a = S),
				() => {
					o.removeEventListener(Pd, f), (a = null);
				}
			);
		},
		createHref(S) {
			return t(o, S);
		},
		createURL: w,
		encodeLocation(S) {
			let h = w(S);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: c,
		replace: y,
		go(S) {
			return s.go(S);
		},
	};
	return v;
}
var Td;
(function (e) {
	(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Td || (Td = {}));
function Qy(e, t, n) {
	return n === void 0 && (n = '/'), Ky(e, t, n, !1);
}
function Ky(e, t, n, r) {
	let o = typeof t == 'string' ? ir(t) : t,
		i = Ku(o.pathname || '/', n);
	if (i == null) return null;
	let s = Oh(e);
	Gy(s);
	let l = null;
	for (let a = 0; l == null && a < s.length; ++a) {
		let u = i0(i);
		l = r0(s[a], u, r);
	}
	return l;
}
function Oh(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let o = (i, s, l) => {
		let a = {
			relativePath: l === void 0 ? i.path || '' : l,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: s,
			route: i,
		};
		a.relativePath.startsWith('/') &&
			(ge(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = Nn([r, a.relativePath]),
			d = n.concat(a);
		i.children &&
			i.children.length > 0 &&
			(ge(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + u + '".')
			),
			Oh(i.children, t, d, u)),
			!(i.path == null && !i.index) && t.push({ path: u, score: t0(u, i.index), routesMeta: d });
	};
	return (
		e.forEach((i, s) => {
			var l;
			if (i.path === '' || !((l = i.path) != null && l.includes('?'))) o(i, s);
			else for (let a of _h(i.path)) o(i, s, a);
		}),
		t
	);
}
function _h(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		o = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return o ? [i, ''] : [i];
	let s = _h(r.join('/')),
		l = [];
	return (
		l.push(...s.map(a => (a === '' ? i : [i, a].join('/')))),
		o && l.push(...s),
		l.map(a => (e.startsWith('/') && a === '' ? '/' : a))
	);
}
function Gy(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: n0(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex)
				)
	);
}
const Yy = /^:[\w-]+$/,
	Xy = 3,
	qy = 2,
	Jy = 1,
	Zy = 10,
	e0 = -2,
	Rd = e => e === '*';
function t0(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(Rd) && (r += e0),
		t && (r += qy),
		n.filter(o => !Rd(o)).reduce((o, i) => o + (Yy.test(i) ? Xy : i === '' ? Jy : Zy), r)
	);
}
function n0(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function r0(e, t, n) {
	let { routesMeta: r } = e,
		o = {},
		i = '/',
		s = [];
	for (let l = 0; l < r.length; ++l) {
		let a = r[l],
			u = l === r.length - 1,
			d = i === '/' ? t : t.slice(i.length) || '/',
			f = jd({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, d),
			c = a.route;
		if (
			(!f &&
				u &&
				n &&
				!r[r.length - 1].route.index &&
				(f = jd({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, d)),
			!f)
		)
			return null;
		Object.assign(o, f.params),
			s.push({
				params: o,
				pathname: Nn([i, f.pathname]),
				pathnameBase: u0(Nn([i, f.pathnameBase])),
				route: c,
			}),
			f.pathnameBase !== '/' && (i = Nn([i, f.pathnameBase]));
	}
	return s;
}
function jd(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = o0(e.path, e.caseSensitive, e.end),
		o = t.match(n);
	if (!o) return null;
	let i = o[0],
		s = i.replace(/(.)\/+$/, '$1'),
		l = o.slice(1);
	return {
		params: r.reduce((u, d, f) => {
			let { paramName: c, isOptional: y } = d;
			if (c === '*') {
				let v = l[f] || '';
				s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
			}
			const w = l[f];
			return y && !w ? (u[c] = void 0) : (u[c] = (w || '').replace(/%2F/g, '/')), u;
		}, {}),
		pathname: i,
		pathnameBase: s,
		pattern: e,
	};
}
function o0(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Qu(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		o =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, l, a) => (
						r.push({ paramName: l, isOptional: a != null }), a ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				);
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
				? (o += '\\/*$')
				: e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
		[new RegExp(o, t ? void 0 : 'i'), r]
	);
}
function i0(e) {
	try {
		return e
			.split('/')
			.map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return (
			Qu(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function Ku(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function s0(e, t) {
	t === void 0 && (t = '/');
	let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? ir(e) : e;
	return { pathname: n ? (n.startsWith('/') ? n : l0(n, t)) : t, search: c0(r), hash: d0(o) };
}
function l0(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach(o => {
			o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Al(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function a0(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Ah(e, t) {
	let n = a0(e);
	return t
		? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
		: n.map(r => r.pathnameBase);
}
function Mh(e, t, n, r) {
	r === void 0 && (r = !1);
	let o;
	typeof e == 'string'
		? (o = ir(e))
		: ((o = Qo({}, e)),
			ge(!o.pathname || !o.pathname.includes('?'), Al('?', 'pathname', 'search', o)),
			ge(!o.pathname || !o.pathname.includes('#'), Al('#', 'pathname', 'hash', o)),
			ge(!o.search || !o.search.includes('#'), Al('#', 'search', 'hash', o)));
	let i = e === '' || o.pathname === '',
		s = i ? '/' : o.pathname,
		l;
	if (s == null) l = n;
	else {
		let f = t.length - 1;
		if (!r && s.startsWith('..')) {
			let c = s.split('/');
			for (; c[0] === '..'; ) c.shift(), (f -= 1);
			o.pathname = c.join('/');
		}
		l = f >= 0 ? t[f] : '/';
	}
	let a = s0(o, l),
		u = s && s !== '/' && s.endsWith('/'),
		d = (i || s === '.') && n.endsWith('/');
	return !a.pathname.endsWith('/') && (u || d) && (a.pathname += '/'), a;
}
const Nn = e => e.join('/').replace(/\/\/+/g, '/'),
	u0 = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	c0 = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	d0 = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function f0(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Lh = ['post', 'put', 'patch', 'delete'];
new Set(Lh);
const p0 = ['get', ...Lh];
new Set(p0);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ko() {
	return (
		(Ko = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		Ko.apply(this, arguments)
	);
}
const Gu = x.createContext(null),
	h0 = x.createContext(null),
	sr = x.createContext(null),
	Hs = x.createContext(null),
	lr = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Ih = x.createContext(null);
function m0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	li() || ge(!1);
	let { basename: r, navigator: o } = x.useContext(sr),
		{ hash: i, pathname: s, search: l } = zh(e, { relative: n }),
		a = s;
	return (
		r !== '/' && (a = s === '/' ? r : Nn([r, s])), o.createHref({ pathname: a, search: l, hash: i })
	);
}
function li() {
	return x.useContext(Hs) != null;
}
function ai() {
	return li() || ge(!1), x.useContext(Hs).location;
}
function Dh(e) {
	x.useContext(sr).static || x.useLayoutEffect(e);
}
function g0() {
	let { isDataRoute: e } = x.useContext(lr);
	return e ? R0() : v0();
}
function v0() {
	li() || ge(!1);
	let e = x.useContext(Gu),
		{ basename: t, future: n, navigator: r } = x.useContext(sr),
		{ matches: o } = x.useContext(lr),
		{ pathname: i } = ai(),
		s = JSON.stringify(Ah(o, n.v7_relativeSplatPath)),
		l = x.useRef(!1);
	return (
		Dh(() => {
			l.current = !0;
		}),
		x.useCallback(
			function (u, d) {
				if ((d === void 0 && (d = {}), !l.current)) return;
				if (typeof u == 'number') {
					r.go(u);
					return;
				}
				let f = Mh(u, JSON.parse(s), i, d.relative === 'path');
				e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : Nn([t, f.pathname])),
					(d.replace ? r.replace : r.push)(f, d.state, d);
			},
			[t, r, s, i, e]
		)
	);
}
function zh(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = x.useContext(sr),
		{ matches: o } = x.useContext(lr),
		{ pathname: i } = ai(),
		s = JSON.stringify(Ah(o, r.v7_relativeSplatPath));
	return x.useMemo(() => Mh(e, JSON.parse(s), i, n === 'path'), [e, s, i, n]);
}
function y0(e, t) {
	return x0(e, t);
}
function x0(e, t, n, r) {
	li() || ge(!1);
	let { navigator: o } = x.useContext(sr),
		{ matches: i } = x.useContext(lr),
		s = i[i.length - 1],
		l = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : '/';
	s && s.route;
	let u = ai(),
		d;
	if (t) {
		var f;
		let S = typeof t == 'string' ? ir(t) : t;
		a === '/' || ((f = S.pathname) != null && f.startsWith(a)) || ge(!1), (d = S);
	} else d = u;
	let c = d.pathname || '/',
		y = c;
	if (a !== '/') {
		let S = a.replace(/^\//, '').split('/');
		y = '/' + c.replace(/^\//, '').split('/').slice(S.length).join('/');
	}
	let w = Qy(e, { pathname: y }),
		v = C0(
			w &&
				w.map(S =>
					Object.assign({}, S, {
						params: Object.assign({}, l, S.params),
						pathname: Nn([
							a,
							o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname,
						]),
						pathnameBase:
							S.pathnameBase === '/'
								? a
								: Nn([
										a,
										o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase,
									]),
					})
				),
			i,
			n,
			r
		);
	return t && v
		? x.createElement(
				Hs.Provider,
				{
					value: {
						location: Ko({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, d),
						navigationType: yn.Pop,
					},
				},
				v
			)
		: v;
}
function w0() {
	let e = T0(),
		t = f0(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
	return x.createElement(
		x.Fragment,
		null,
		x.createElement('h2', null, 'Unexpected Application Error!'),
		x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? x.createElement('pre', { style: o }, n) : null,
		null
	);
}
const S0 = x.createElement(w0, null);
class k0 extends x.Component {
	constructor(t) {
		super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
				};
	}
	componentDidCatch(t, n) {
		console.error('React Router caught the following error during render', t, n);
	}
	render() {
		return this.state.error !== void 0
			? x.createElement(
					lr.Provider,
					{ value: this.props.routeContext },
					x.createElement(Ih.Provider, { value: this.state.error, children: this.props.component })
				)
			: this.props.children;
	}
}
function E0(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = x.useContext(Gu);
	return (
		o &&
			o.static &&
			o.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(o.staticContext._deepestRenderedBoundaryId = n.route.id),
		x.createElement(lr.Provider, { value: t }, r)
	);
}
function C0(e, t, n, r) {
	var o;
	if (
		(t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
	) {
		var i;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (
			(i = r) != null &&
			i.v7_partialHydration &&
			t.length === 0 &&
			!n.initialized &&
			n.matches.length > 0
		)
			e = n.matches;
		else return null;
	}
	let s = e,
		l = (o = n) == null ? void 0 : o.errors;
	if (l != null) {
		let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
		d >= 0 || ge(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
	}
	let a = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < s.length; d++) {
			let f = s[d];
			if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id)) {
				let { loaderData: c, errors: y } = n,
					w = f.route.loader && c[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
				if (f.route.lazy || w) {
					(a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((d, f, c) => {
		let y,
			w = !1,
			v = null,
			S = null;
		n &&
			((y = l && f.route.id ? l[f.route.id] : void 0),
			(v = f.route.errorElement || S0),
			a &&
				(u < 0 && c === 0
					? ((w = !0), (S = null))
					: u === c && ((w = !0), (S = f.route.hydrateFallbackElement || null))));
		let h = t.concat(s.slice(0, c + 1)),
			p = () => {
				let g;
				return (
					y
						? (g = v)
						: w
							? (g = S)
							: f.route.Component
								? (g = x.createElement(f.route.Component, null))
								: f.route.element
									? (g = f.route.element)
									: (g = d),
					x.createElement(E0, {
						match: f,
						routeContext: { outlet: d, matches: h, isDataRoute: n != null },
						children: g,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0)
			? x.createElement(k0, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: y,
					children: p(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
				})
			: p();
	}, null);
}
var Fh = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			e
		);
	})(Fh || {}),
	Es = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		);
	})(Es || {});
function b0(e) {
	let t = x.useContext(Gu);
	return t || ge(!1), t;
}
function P0(e) {
	let t = x.useContext(h0);
	return t || ge(!1), t;
}
function N0(e) {
	let t = x.useContext(lr);
	return t || ge(!1), t;
}
function $h(e) {
	let t = N0(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ge(!1), n.route.id;
}
function T0() {
	var e;
	let t = x.useContext(Ih),
		n = P0(Es.UseRouteError),
		r = $h(Es.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function R0() {
	let { router: e } = b0(Fh.UseNavigateStable),
		t = $h(Es.UseNavigateStable),
		n = x.useRef(!1);
	return (
		Dh(() => {
			n.current = !0;
		}),
		x.useCallback(
			function (o, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof o == 'number' ? e.navigate(o) : e.navigate(o, Ko({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
function Ia(e) {
	ge(!1);
}
function j0(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: o = yn.Pop,
		navigator: i,
		static: s = !1,
		future: l,
	} = e;
	li() && ge(!1);
	let a = t.replace(/^\/*/, '/'),
		u = x.useMemo(
			() => ({ basename: a, navigator: i, static: s, future: Ko({ v7_relativeSplatPath: !1 }, l) }),
			[a, l, i, s]
		);
	typeof r == 'string' && (r = ir(r));
	let { pathname: d = '/', search: f = '', hash: c = '', state: y = null, key: w = 'default' } = r,
		v = x.useMemo(() => {
			let S = Ku(d, a);
			return S == null
				? null
				: { location: { pathname: S, search: f, hash: c, state: y, key: w }, navigationType: o };
		}, [a, d, f, c, y, w, o]);
	return v == null
		? null
		: x.createElement(
				sr.Provider,
				{ value: u },
				x.createElement(Hs.Provider, { children: n, value: v })
			);
}
function O0(e) {
	let { children: t, location: n } = e;
	return y0(Da(t), n);
}
new Promise(() => {});
function Da(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		x.Children.forEach(e, (r, o) => {
			if (!x.isValidElement(r)) return;
			let i = [...t, o];
			if (r.type === x.Fragment) {
				n.push.apply(n, Da(r.props.children, i));
				return;
			}
			r.type !== Ia && ge(!1), !r.props.index || !r.props.children || ge(!1);
			let s = {
				id: r.props.id || i.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (s.children = Da(r.props.children, i)), n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function za() {
	return (
		(za = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		za.apply(this, arguments)
	);
}
function _0(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function A0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function M0(e, t) {
	return e.button === 0 && (!t || t === '_self') && !A0(e);
}
const L0 = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
		'viewTransition',
	],
	I0 = '6';
try {
	window.__reactRouterVersion = I0;
} catch {}
const D0 = 'startTransition',
	Od = _g[D0];
function z0(e) {
	let { basename: t, children: n, future: r, window: o } = e,
		i = x.useRef();
	i.current == null && (i.current = Vy({ window: o, v5Compat: !0 }));
	let s = i.current,
		[l, a] = x.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		d = x.useCallback(
			f => {
				u && Od ? Od(() => a(f)) : a(f);
			},
			[a, u]
		);
	return (
		x.useLayoutEffect(() => s.listen(d), [s, d]),
		x.createElement(j0, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
			future: r,
		})
	);
}
const F0 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	$0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ae = x.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: o,
				reloadDocument: i,
				replace: s,
				state: l,
				target: a,
				to: u,
				preventScrollReset: d,
				viewTransition: f,
			} = t,
			c = _0(t, L0),
			{ basename: y } = x.useContext(sr),
			w,
			v = !1;
		if (typeof u == 'string' && $0.test(u) && ((w = u), F0))
			try {
				let g = new URL(window.location.href),
					k = u.startsWith('//') ? new URL(g.protocol + u) : new URL(u),
					E = Ku(k.pathname, y);
				k.origin === g.origin && E != null ? (u = E + k.search + k.hash) : (v = !0);
			} catch {}
		let S = m0(u, { relative: o }),
			h = U0(u, {
				replace: s,
				state: l,
				target: a,
				preventScrollReset: d,
				relative: o,
				viewTransition: f,
			});
		function p(g) {
			r && r(g), g.defaultPrevented || h(g);
		}
		return x.createElement(
			'a',
			za({}, c, { href: w || S, onClick: v || i ? r : p, ref: n, target: a })
		);
	});
var _d;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState');
})(_d || (_d = {}));
var Ad;
(function (e) {
	(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(Ad || (Ad = {}));
function U0(e, t) {
	let {
			target: n,
			replace: r,
			state: o,
			preventScrollReset: i,
			relative: s,
			viewTransition: l,
		} = t === void 0 ? {} : t,
		a = g0(),
		u = ai(),
		d = zh(e, { relative: s });
	return x.useCallback(
		f => {
			if (M0(f, n)) {
				f.preventDefault();
				let c = r !== void 0 ? r : ks(u) === ks(d);
				a(e, { replace: c, state: o, preventScrollReset: i, relative: s, viewTransition: l });
			}
		},
		[u, a, d, r, o, n, e, i, s, l]
	);
}
const B0 = 1,
	V0 = 1e6;
let Ml = 0;
function W0() {
	return (Ml = (Ml + 1) % Number.MAX_SAFE_INTEGER), Ml.toString();
}
const Ll = new Map(),
	Md = e => {
		if (Ll.has(e)) return;
		const t = setTimeout(() => {
			Ll.delete(e), To({ type: 'REMOVE_TOAST', toastId: e });
		}, V0);
		Ll.set(e, t);
	},
	H0 = (e, t) => {
		switch (t.type) {
			case 'ADD_TOAST':
				return { ...e, toasts: [t.toast, ...e.toasts].slice(0, B0) };
			case 'UPDATE_TOAST':
				return {
					...e,
					toasts: e.toasts.map(n => (n.id === t.toast.id ? { ...n, ...t.toast } : n)),
				};
			case 'DISMISS_TOAST': {
				const { toastId: n } = t;
				return (
					n
						? Md(n)
						: e.toasts.forEach(r => {
								Md(r.id);
							}),
					{ ...e, toasts: e.toasts.map(r => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
				);
			}
			case 'REMOVE_TOAST':
				return t.toastId === void 0
					? { ...e, toasts: [] }
					: { ...e, toasts: e.toasts.filter(n => n.id !== t.toastId) };
		}
	},
	Yi = [];
let Xi = { toasts: [] };
function To(e) {
	(Xi = H0(Xi, e)),
		Yi.forEach(t => {
			t(Xi);
		});
}
function Q0({ ...e }) {
	const t = W0(),
		n = o => To({ type: 'UPDATE_TOAST', toast: { ...o, id: t } }),
		r = () => To({ type: 'DISMISS_TOAST', toastId: t });
	return (
		To({
			type: 'ADD_TOAST',
			toast: {
				...e,
				id: t,
				open: !0,
				onOpenChange: o => {
					o || r();
				},
			},
		}),
		{ id: t, dismiss: r, update: n }
	);
}
function K0() {
	const [e, t] = x.useState(Xi);
	return (
		x.useEffect(
			() => (
				Yi.push(t),
				() => {
					const n = Yi.indexOf(t);
					n > -1 && Yi.splice(n, 1);
				}
			),
			[e]
		),
		{ ...e, toast: Q0, dismiss: n => To({ type: 'DISMISS_TOAST', toastId: n }) }
	);
}
function ye(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function (o) {
		if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
	};
}
function G0(e, t) {
	typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function Uh(...e) {
	return t => e.forEach(n => G0(n, t));
}
function xt(...e) {
	return x.useCallback(Uh(...e), e);
}
function Y0(e, t = []) {
	let n = [];
	function r(i, s) {
		const l = x.createContext(s),
			a = n.length;
		n = [...n, s];
		function u(f) {
			const { scope: c, children: y, ...w } = f,
				v = (c == null ? void 0 : c[e][a]) || l,
				S = x.useMemo(() => w, Object.values(w));
			return m.jsx(v.Provider, { value: S, children: y });
		}
		function d(f, c) {
			const y = (c == null ? void 0 : c[e][a]) || l,
				w = x.useContext(y);
			if (w) return w;
			if (s !== void 0) return s;
			throw new Error(`\`${f}\` must be used within \`${i}\``);
		}
		return (u.displayName = i + 'Provider'), [u, d];
	}
	const o = () => {
		const i = n.map(s => x.createContext(s));
		return function (l) {
			const a = (l == null ? void 0 : l[e]) || i;
			return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
		};
	};
	return (o.scopeName = e), [r, X0(o, ...t)];
}
function X0(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName }));
		return function (i) {
			const s = r.reduce((l, { useScope: a, scopeName: u }) => {
				const f = a(i)[`__scope${u}`];
				return { ...l, ...f };
			}, {});
			return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
		};
	};
	return (n.scopeName = t.scopeName), n;
}
var Go = x.forwardRef((e, t) => {
	const { children: n, ...r } = e,
		o = x.Children.toArray(n),
		i = o.find(q0);
	if (i) {
		const s = i.props.children,
			l = o.map(a =>
				a === i
					? x.Children.count(s) > 1
						? x.Children.only(null)
						: x.isValidElement(s)
							? s.props.children
							: null
					: a
			);
		return m.jsx(Fa, {
			...r,
			ref: t,
			children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null,
		});
	}
	return m.jsx(Fa, { ...r, ref: t, children: n });
});
Go.displayName = 'Slot';
var Fa = x.forwardRef((e, t) => {
	const { children: n, ...r } = e;
	if (x.isValidElement(n)) {
		const o = Z0(n);
		return x.cloneElement(n, { ...J0(r, n.props), ref: t ? Uh(t, o) : o });
	}
	return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
Fa.displayName = 'SlotClone';
var Bh = ({ children: e }) => m.jsx(m.Fragment, { children: e });
function q0(e) {
	return x.isValidElement(e) && e.type === Bh;
}
function J0(e, t) {
	const n = { ...t };
	for (const r in t) {
		const o = e[r],
			i = t[r];
		/^on[A-Z]/.test(r)
			? o && i
				? (n[r] = (...l) => {
						i(...l), o(...l);
					})
				: o && (n[r] = o)
			: r === 'style'
				? (n[r] = { ...o, ...i })
				: r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
	}
	return { ...e, ...n };
}
function Z0(e) {
	var r, o;
	let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
		n = t && 'isReactWarning' in t && t.isReactWarning;
	return n
		? e.ref
		: ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
			(n = t && 'isReactWarning' in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
function ex(e) {
	const t = e + 'CollectionProvider',
		[n, r] = Y0(t),
		[o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
		s = y => {
			const { scope: w, children: v } = y,
				S = O.useRef(null),
				h = O.useRef(new Map()).current;
			return m.jsx(o, { scope: w, itemMap: h, collectionRef: S, children: v });
		};
	s.displayName = t;
	const l = e + 'CollectionSlot',
		a = O.forwardRef((y, w) => {
			const { scope: v, children: S } = y,
				h = i(l, v),
				p = xt(w, h.collectionRef);
			return m.jsx(Go, { ref: p, children: S });
		});
	a.displayName = l;
	const u = e + 'CollectionItemSlot',
		d = 'data-radix-collection-item',
		f = O.forwardRef((y, w) => {
			const { scope: v, children: S, ...h } = y,
				p = O.useRef(null),
				g = xt(w, p),
				k = i(u, v);
			return (
				O.useEffect(() => (k.itemMap.set(p, { ref: p, ...h }), () => void k.itemMap.delete(p))),
				m.jsx(Go, { [d]: '', ref: g, children: S })
			);
		});
	f.displayName = u;
	function c(y) {
		const w = i(e + 'CollectionConsumer', y);
		return O.useCallback(() => {
			const S = w.collectionRef.current;
			if (!S) return [];
			const h = Array.from(S.querySelectorAll(`[${d}]`));
			return Array.from(w.itemMap.values()).sort(
				(k, E) => h.indexOf(k.ref.current) - h.indexOf(E.ref.current)
			);
		}, [w.collectionRef, w.itemMap]);
	}
	return [{ Provider: s, Slot: a, ItemSlot: f }, c, r];
}
function Vh(e, t = []) {
	let n = [];
	function r(i, s) {
		const l = x.createContext(s),
			a = n.length;
		n = [...n, s];
		const u = f => {
			var h;
			const { scope: c, children: y, ...w } = f,
				v = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l,
				S = x.useMemo(() => w, Object.values(w));
			return m.jsx(v.Provider, { value: S, children: y });
		};
		u.displayName = i + 'Provider';
		function d(f, c) {
			var v;
			const y = ((v = c == null ? void 0 : c[e]) == null ? void 0 : v[a]) || l,
				w = x.useContext(y);
			if (w) return w;
			if (s !== void 0) return s;
			throw new Error(`\`${f}\` must be used within \`${i}\``);
		}
		return [u, d];
	}
	const o = () => {
		const i = n.map(s => x.createContext(s));
		return function (l) {
			const a = (l == null ? void 0 : l[e]) || i;
			return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
		};
	};
	return (o.scopeName = e), [r, tx(o, ...t)];
}
function tx(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName }));
		return function (i) {
			const s = r.reduce((l, { useScope: a, scopeName: u }) => {
				const f = a(i)[`__scope${u}`];
				return { ...l, ...f };
			}, {});
			return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
		};
	};
	return (n.scopeName = t.scopeName), n;
}
var nx = [
		'a',
		'button',
		'div',
		'form',
		'h2',
		'h3',
		'img',
		'input',
		'label',
		'li',
		'nav',
		'ol',
		'p',
		'span',
		'svg',
		'ul',
	],
	We = nx.reduce((e, t) => {
		const n = x.forwardRef((r, o) => {
			const { asChild: i, ...s } = r,
				l = i ? Go : t;
			return (
				typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), m.jsx(l, { ...s, ref: o })
			);
		});
		return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
	}, {});
function Wh(e, t) {
	e && si.flushSync(() => e.dispatchEvent(t));
}
function _t(e) {
	const t = x.useRef(e);
	return (
		x.useEffect(() => {
			t.current = e;
		}),
		x.useMemo(
			() =>
				(...n) => {
					var r;
					return (r = t.current) == null ? void 0 : r.call(t, ...n);
				},
			[]
		)
	);
}
function rx(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = _t(e);
	x.useEffect(() => {
		const r = o => {
			o.key === 'Escape' && n(o);
		};
		return (
			t.addEventListener('keydown', r, { capture: !0 }),
			() => t.removeEventListener('keydown', r, { capture: !0 })
		);
	}, [n, t]);
}
var ox = 'DismissableLayer',
	$a = 'dismissableLayer.update',
	ix = 'dismissableLayer.pointerDownOutside',
	sx = 'dismissableLayer.focusOutside',
	Ld,
	Hh = x.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
	}),
	Yu = x.forwardRef((e, t) => {
		const {
				disableOutsidePointerEvents: n = !1,
				onEscapeKeyDown: r,
				onPointerDownOutside: o,
				onFocusOutside: i,
				onInteractOutside: s,
				onDismiss: l,
				...a
			} = e,
			u = x.useContext(Hh),
			[d, f] = x.useState(null),
			c =
				(d == null ? void 0 : d.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, y] = x.useState({}),
			w = xt(t, P => f(P)),
			v = Array.from(u.layers),
			[S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
			h = v.indexOf(S),
			p = d ? v.indexOf(d) : -1,
			g = u.layersWithOutsidePointerEventsDisabled.size > 0,
			k = p >= h,
			E = ax(P => {
				const T = P.target,
					I = [...u.branches].some(_ => _.contains(T));
				!k || I || (o == null || o(P), s == null || s(P), P.defaultPrevented || l == null || l());
			}, c),
			b = ux(P => {
				const T = P.target;
				[...u.branches].some(_ => _.contains(T)) ||
					(i == null || i(P), s == null || s(P), P.defaultPrevented || l == null || l());
			}, c);
		return (
			rx(P => {
				p === u.layers.size - 1 &&
					(r == null || r(P), !P.defaultPrevented && l && (P.preventDefault(), l()));
			}, c),
			x.useEffect(() => {
				if (d)
					return (
						n &&
							(u.layersWithOutsidePointerEventsDisabled.size === 0 &&
								((Ld = c.body.style.pointerEvents), (c.body.style.pointerEvents = 'none')),
							u.layersWithOutsidePointerEventsDisabled.add(d)),
						u.layers.add(d),
						Id(),
						() => {
							n &&
								u.layersWithOutsidePointerEventsDisabled.size === 1 &&
								(c.body.style.pointerEvents = Ld);
						}
					);
			}, [d, c, n, u]),
			x.useEffect(
				() => () => {
					d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Id());
				},
				[d, u]
			),
			x.useEffect(() => {
				const P = () => y({});
				return document.addEventListener($a, P), () => document.removeEventListener($a, P);
			}, []),
			m.jsx(We.div, {
				...a,
				ref: w,
				style: { pointerEvents: g ? (k ? 'auto' : 'none') : void 0, ...e.style },
				onFocusCapture: ye(e.onFocusCapture, b.onFocusCapture),
				onBlurCapture: ye(e.onBlurCapture, b.onBlurCapture),
				onPointerDownCapture: ye(e.onPointerDownCapture, E.onPointerDownCapture),
			})
		);
	});
Yu.displayName = ox;
var lx = 'DismissableLayerBranch',
	Qh = x.forwardRef((e, t) => {
		const n = x.useContext(Hh),
			r = x.useRef(null),
			o = xt(t, r);
		return (
			x.useEffect(() => {
				const i = r.current;
				if (i)
					return (
						n.branches.add(i),
						() => {
							n.branches.delete(i);
						}
					);
			}, [n.branches]),
			m.jsx(We.div, { ...e, ref: o })
		);
	});
Qh.displayName = lx;
function ax(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = _t(e),
		r = x.useRef(!1),
		o = x.useRef(() => {});
	return (
		x.useEffect(() => {
			const i = l => {
					if (l.target && !r.current) {
						let a = function () {
							Kh(ix, n, u, { discrete: !0 });
						};
						const u = { originalEvent: l };
						l.pointerType === 'touch'
							? (t.removeEventListener('click', o.current),
								(o.current = a),
								t.addEventListener('click', o.current, { once: !0 }))
							: a();
					} else t.removeEventListener('click', o.current);
					r.current = !1;
				},
				s = window.setTimeout(() => {
					t.addEventListener('pointerdown', i);
				}, 0);
			return () => {
				window.clearTimeout(s),
					t.removeEventListener('pointerdown', i),
					t.removeEventListener('click', o.current);
			};
		}, [t, n]),
		{ onPointerDownCapture: () => (r.current = !0) }
	);
}
function ux(e, t = globalThis == null ? void 0 : globalThis.document) {
	const n = _t(e),
		r = x.useRef(!1);
	return (
		x.useEffect(() => {
			const o = i => {
				i.target && !r.current && Kh(sx, n, { originalEvent: i }, { discrete: !1 });
			};
			return t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o);
		}, [t, n]),
		{ onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
	);
}
function Id() {
	const e = new CustomEvent($a);
	document.dispatchEvent(e);
}
function Kh(e, t, n, { discrete: r }) {
	const o = n.originalEvent.target,
		i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
	t && o.addEventListener(e, t, { once: !0 }), r ? Wh(o, i) : o.dispatchEvent(i);
}
var cx = Yu,
	dx = Qh,
	tr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
	fx = 'Portal',
	Gh = x.forwardRef((e, t) => {
		var l;
		const { container: n, ...r } = e,
			[o, i] = x.useState(!1);
		tr(() => i(!0), []);
		const s =
			n ||
			(o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body));
		return s ? Rh.createPortal(m.jsx(We.div, { ...r, ref: t }), s) : null;
	});
Gh.displayName = fx;
function px(e, t) {
	return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Xu = e => {
	const { present: t, children: n } = e,
		r = hx(t),
		o = typeof n == 'function' ? n({ present: r.isPresent }) : x.Children.only(n),
		i = xt(r.ref, mx(o));
	return typeof n == 'function' || r.isPresent ? x.cloneElement(o, { ref: i }) : null;
};
Xu.displayName = 'Presence';
function hx(e) {
	const [t, n] = x.useState(),
		r = x.useRef({}),
		o = x.useRef(e),
		i = x.useRef('none'),
		s = e ? 'mounted' : 'unmounted',
		[l, a] = px(s, {
			mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
			unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
			unmounted: { MOUNT: 'mounted' },
		});
	return (
		x.useEffect(() => {
			const u = _i(r.current);
			i.current = l === 'mounted' ? u : 'none';
		}, [l]),
		tr(() => {
			const u = r.current,
				d = o.current;
			if (d !== e) {
				const c = i.current,
					y = _i(u);
				e
					? a('MOUNT')
					: y === 'none' || (u == null ? void 0 : u.display) === 'none'
						? a('UNMOUNT')
						: a(d && c !== y ? 'ANIMATION_OUT' : 'UNMOUNT'),
					(o.current = e);
			}
		}, [e, a]),
		tr(() => {
			if (t) {
				let u;
				const d = t.ownerDocument.defaultView ?? window,
					f = y => {
						const v = _i(r.current).includes(y.animationName);
						if (y.target === t && v && (a('ANIMATION_END'), !o.current)) {
							const S = t.style.animationFillMode;
							(t.style.animationFillMode = 'forwards'),
								(u = d.setTimeout(() => {
									t.style.animationFillMode === 'forwards' && (t.style.animationFillMode = S);
								}));
						}
					},
					c = y => {
						y.target === t && (i.current = _i(r.current));
					};
				return (
					t.addEventListener('animationstart', c),
					t.addEventListener('animationcancel', f),
					t.addEventListener('animationend', f),
					() => {
						d.clearTimeout(u),
							t.removeEventListener('animationstart', c),
							t.removeEventListener('animationcancel', f),
							t.removeEventListener('animationend', f);
					}
				);
			} else a('ANIMATION_END');
		}, [t, a]),
		{
			isPresent: ['mounted', 'unmountSuspended'].includes(l),
			ref: x.useCallback(u => {
				u && (r.current = getComputedStyle(u)), n(u);
			}, []),
		}
	);
}
function _i(e) {
	return (e == null ? void 0 : e.animationName) || 'none';
}
function mx(e) {
	var r, o;
	let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
		n = t && 'isReactWarning' in t && t.isReactWarning;
	return n
		? e.ref
		: ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
			(n = t && 'isReactWarning' in t && t.isReactWarning),
			n ? e.props.ref : e.props.ref || e.ref);
}
function gx({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	const [r, o] = vx({ defaultProp: t, onChange: n }),
		i = e !== void 0,
		s = i ? e : r,
		l = _t(n),
		a = x.useCallback(
			u => {
				if (i) {
					const f = typeof u == 'function' ? u(e) : u;
					f !== e && l(f);
				} else o(u);
			},
			[i, e, o, l]
		);
	return [s, a];
}
function vx({ defaultProp: e, onChange: t }) {
	const n = x.useState(e),
		[r] = n,
		o = x.useRef(r),
		i = _t(t);
	return (
		x.useEffect(() => {
			o.current !== r && (i(r), (o.current = r));
		}, [r, o, i]),
		n
	);
}
var yx = 'VisuallyHidden',
	Qs = x.forwardRef((e, t) =>
		m.jsx(We.span, {
			...e,
			ref: t,
			style: {
				position: 'absolute',
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				wordWrap: 'normal',
				...e.style,
			},
		})
	);
Qs.displayName = yx;
var xx = Qs,
	qu = 'ToastProvider',
	[Ju, wx, Sx] = ex('Toast'),
	[Yh, pk] = Vh('Toast', [Sx]),
	[kx, Ks] = Yh(qu),
	Xh = e => {
		const {
				__scopeToast: t,
				label: n = 'Notification',
				duration: r = 5e3,
				swipeDirection: o = 'right',
				swipeThreshold: i = 50,
				children: s,
			} = e,
			[l, a] = x.useState(null),
			[u, d] = x.useState(0),
			f = x.useRef(!1),
			c = x.useRef(!1);
		return (
			n.trim() ||
				console.error(
					`Invalid prop \`label\` supplied to \`${qu}\`. Expected non-empty \`string\`.`
				),
			m.jsx(Ju.Provider, {
				scope: t,
				children: m.jsx(kx, {
					scope: t,
					label: n,
					duration: r,
					swipeDirection: o,
					swipeThreshold: i,
					toastCount: u,
					viewport: l,
					onViewportChange: a,
					onToastAdd: x.useCallback(() => d(y => y + 1), []),
					onToastRemove: x.useCallback(() => d(y => y - 1), []),
					isFocusedToastEscapeKeyDownRef: f,
					isClosePausedRef: c,
					children: s,
				}),
			})
		);
	};
Xh.displayName = qu;
var qh = 'ToastViewport',
	Ex = ['F8'],
	Ua = 'toast.viewportPause',
	Ba = 'toast.viewportResume',
	Jh = x.forwardRef((e, t) => {
		const { __scopeToast: n, hotkey: r = Ex, label: o = 'Notifications ({hotkey})', ...i } = e,
			s = Ks(qh, n),
			l = wx(n),
			a = x.useRef(null),
			u = x.useRef(null),
			d = x.useRef(null),
			f = x.useRef(null),
			c = xt(t, f, s.onViewportChange),
			y = r.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
			w = s.toastCount > 0;
		x.useEffect(() => {
			const S = h => {
				var g;
				r.length !== 0 &&
					r.every(k => h[k] || h.code === k) &&
					((g = f.current) == null || g.focus());
			};
			return (
				document.addEventListener('keydown', S), () => document.removeEventListener('keydown', S)
			);
		}, [r]),
			x.useEffect(() => {
				const S = a.current,
					h = f.current;
				if (w && S && h) {
					const p = () => {
							if (!s.isClosePausedRef.current) {
								const b = new CustomEvent(Ua);
								h.dispatchEvent(b), (s.isClosePausedRef.current = !0);
							}
						},
						g = () => {
							if (s.isClosePausedRef.current) {
								const b = new CustomEvent(Ba);
								h.dispatchEvent(b), (s.isClosePausedRef.current = !1);
							}
						},
						k = b => {
							!S.contains(b.relatedTarget) && g();
						},
						E = () => {
							S.contains(document.activeElement) || g();
						};
					return (
						S.addEventListener('focusin', p),
						S.addEventListener('focusout', k),
						S.addEventListener('pointermove', p),
						S.addEventListener('pointerleave', E),
						window.addEventListener('blur', p),
						window.addEventListener('focus', g),
						() => {
							S.removeEventListener('focusin', p),
								S.removeEventListener('focusout', k),
								S.removeEventListener('pointermove', p),
								S.removeEventListener('pointerleave', E),
								window.removeEventListener('blur', p),
								window.removeEventListener('focus', g);
						}
					);
				}
			}, [w, s.isClosePausedRef]);
		const v = x.useCallback(
			({ tabbingDirection: S }) => {
				const p = l().map(g => {
					const k = g.ref.current,
						E = [k, ...Ix(k)];
					return S === 'forwards' ? E : E.reverse();
				});
				return (S === 'forwards' ? p.reverse() : p).flat();
			},
			[l]
		);
		return (
			x.useEffect(() => {
				const S = f.current;
				if (S) {
					const h = p => {
						var E, b, P;
						const g = p.altKey || p.ctrlKey || p.metaKey;
						if (p.key === 'Tab' && !g) {
							const T = document.activeElement,
								I = p.shiftKey;
							if (p.target === S && I) {
								(E = u.current) == null || E.focus();
								return;
							}
							const D = v({ tabbingDirection: I ? 'backwards' : 'forwards' }),
								H = D.findIndex(A => A === T);
							Il(D.slice(H + 1))
								? p.preventDefault()
								: I
									? (b = u.current) == null || b.focus()
									: (P = d.current) == null || P.focus();
						}
					};
					return S.addEventListener('keydown', h), () => S.removeEventListener('keydown', h);
				}
			}, [l, v]),
			m.jsxs(dx, {
				ref: a,
				role: 'region',
				'aria-label': o.replace('{hotkey}', y),
				tabIndex: -1,
				style: { pointerEvents: w ? void 0 : 'none' },
				children: [
					w &&
						m.jsx(Va, {
							ref: u,
							onFocusFromOutsideViewport: () => {
								const S = v({ tabbingDirection: 'forwards' });
								Il(S);
							},
						}),
					m.jsx(Ju.Slot, { scope: n, children: m.jsx(We.ol, { tabIndex: -1, ...i, ref: c }) }),
					w &&
						m.jsx(Va, {
							ref: d,
							onFocusFromOutsideViewport: () => {
								const S = v({ tabbingDirection: 'backwards' });
								Il(S);
							},
						}),
				],
			})
		);
	});
Jh.displayName = qh;
var Zh = 'ToastFocusProxy',
	Va = x.forwardRef((e, t) => {
		const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
			i = Ks(Zh, n);
		return m.jsx(Qs, {
			'aria-hidden': !0,
			tabIndex: 0,
			...o,
			ref: t,
			style: { position: 'fixed' },
			onFocus: s => {
				var u;
				const l = s.relatedTarget;
				!((u = i.viewport) != null && u.contains(l)) && r();
			},
		});
	});
Va.displayName = Zh;
var Gs = 'Toast',
	Cx = 'toast.swipeStart',
	bx = 'toast.swipeMove',
	Px = 'toast.swipeCancel',
	Nx = 'toast.swipeEnd',
	em = x.forwardRef((e, t) => {
		const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
			[l = !0, a] = gx({ prop: r, defaultProp: o, onChange: i });
		return m.jsx(Xu, {
			present: n || l,
			children: m.jsx(jx, {
				open: l,
				...s,
				ref: t,
				onClose: () => a(!1),
				onPause: _t(e.onPause),
				onResume: _t(e.onResume),
				onSwipeStart: ye(e.onSwipeStart, u => {
					u.currentTarget.setAttribute('data-swipe', 'start');
				}),
				onSwipeMove: ye(e.onSwipeMove, u => {
					const { x: d, y: f } = u.detail.delta;
					u.currentTarget.setAttribute('data-swipe', 'move'),
						u.currentTarget.style.setProperty('--radix-toast-swipe-move-x', `${d}px`),
						u.currentTarget.style.setProperty('--radix-toast-swipe-move-y', `${f}px`);
				}),
				onSwipeCancel: ye(e.onSwipeCancel, u => {
					u.currentTarget.setAttribute('data-swipe', 'cancel'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
				}),
				onSwipeEnd: ye(e.onSwipeEnd, u => {
					const { x: d, y: f } = u.detail.delta;
					u.currentTarget.setAttribute('data-swipe', 'end'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
						u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
						u.currentTarget.style.setProperty('--radix-toast-swipe-end-x', `${d}px`),
						u.currentTarget.style.setProperty('--radix-toast-swipe-end-y', `${f}px`),
						a(!1);
				}),
			}),
		});
	});
em.displayName = Gs;
var [Tx, Rx] = Yh(Gs, { onClose() {} }),
	jx = x.forwardRef((e, t) => {
		const {
				__scopeToast: n,
				type: r = 'foreground',
				duration: o,
				open: i,
				onClose: s,
				onEscapeKeyDown: l,
				onPause: a,
				onResume: u,
				onSwipeStart: d,
				onSwipeMove: f,
				onSwipeCancel: c,
				onSwipeEnd: y,
				...w
			} = e,
			v = Ks(Gs, n),
			[S, h] = x.useState(null),
			p = xt(t, A => h(A)),
			g = x.useRef(null),
			k = x.useRef(null),
			E = o || v.duration,
			b = x.useRef(0),
			P = x.useRef(E),
			T = x.useRef(0),
			{ onToastAdd: I, onToastRemove: _ } = v,
			$ = _t(() => {
				var Q;
				(S == null ? void 0 : S.contains(document.activeElement)) &&
					((Q = v.viewport) == null || Q.focus()),
					s();
			}),
			D = x.useCallback(
				A => {
					!A ||
						A === 1 / 0 ||
						(window.clearTimeout(T.current),
						(b.current = new Date().getTime()),
						(T.current = window.setTimeout($, A)));
				},
				[$]
			);
		x.useEffect(() => {
			const A = v.viewport;
			if (A) {
				const Q = () => {
						D(P.current), u == null || u();
					},
					U = () => {
						const K = new Date().getTime() - b.current;
						(P.current = P.current - K), window.clearTimeout(T.current), a == null || a();
					};
				return (
					A.addEventListener(Ua, U),
					A.addEventListener(Ba, Q),
					() => {
						A.removeEventListener(Ua, U), A.removeEventListener(Ba, Q);
					}
				);
			}
		}, [v.viewport, E, a, u, D]),
			x.useEffect(() => {
				i && !v.isClosePausedRef.current && D(E);
			}, [i, E, v.isClosePausedRef, D]),
			x.useEffect(() => (I(), () => _()), [I, _]);
		const H = x.useMemo(() => (S ? lm(S) : null), [S]);
		return v.viewport
			? m.jsxs(m.Fragment, {
					children: [
						H &&
							m.jsx(Ox, {
								__scopeToast: n,
								role: 'status',
								'aria-live': r === 'foreground' ? 'assertive' : 'polite',
								'aria-atomic': !0,
								children: H,
							}),
						m.jsx(Tx, {
							scope: n,
							onClose: $,
							children: si.createPortal(
								m.jsx(Ju.ItemSlot, {
									scope: n,
									children: m.jsx(cx, {
										asChild: !0,
										onEscapeKeyDown: ye(l, () => {
											v.isFocusedToastEscapeKeyDownRef.current || $(),
												(v.isFocusedToastEscapeKeyDownRef.current = !1);
										}),
										children: m.jsx(We.li, {
											role: 'status',
											'aria-live': 'off',
											'aria-atomic': !0,
											tabIndex: 0,
											'data-state': i ? 'open' : 'closed',
											'data-swipe-direction': v.swipeDirection,
											...w,
											ref: p,
											style: { userSelect: 'none', touchAction: 'none', ...e.style },
											onKeyDown: ye(e.onKeyDown, A => {
												A.key === 'Escape' &&
													(l == null || l(A.nativeEvent),
													A.nativeEvent.defaultPrevented ||
														((v.isFocusedToastEscapeKeyDownRef.current = !0), $()));
											}),
											onPointerDown: ye(e.onPointerDown, A => {
												A.button === 0 && (g.current = { x: A.clientX, y: A.clientY });
											}),
											onPointerMove: ye(e.onPointerMove, A => {
												if (!g.current) return;
												const Q = A.clientX - g.current.x,
													U = A.clientY - g.current.y,
													K = !!k.current,
													C = ['left', 'right'].includes(v.swipeDirection),
													j = ['left', 'up'].includes(v.swipeDirection) ? Math.min : Math.max,
													z = C ? j(0, Q) : 0,
													L = C ? 0 : j(0, U),
													F = A.pointerType === 'touch' ? 10 : 2,
													Y = { x: z, y: L },
													le = { originalEvent: A, delta: Y };
												K
													? ((k.current = Y), Ai(bx, f, le, { discrete: !1 }))
													: Dd(Y, v.swipeDirection, F)
														? ((k.current = Y),
															Ai(Cx, d, le, { discrete: !1 }),
															A.target.setPointerCapture(A.pointerId))
														: (Math.abs(Q) > F || Math.abs(U) > F) && (g.current = null);
											}),
											onPointerUp: ye(e.onPointerUp, A => {
												const Q = k.current,
													U = A.target;
												if (
													(U.hasPointerCapture(A.pointerId) && U.releasePointerCapture(A.pointerId),
													(k.current = null),
													(g.current = null),
													Q)
												) {
													const K = A.currentTarget,
														C = { originalEvent: A, delta: Q };
													Dd(Q, v.swipeDirection, v.swipeThreshold)
														? Ai(Nx, y, C, { discrete: !0 })
														: Ai(Px, c, C, { discrete: !0 }),
														K.addEventListener('click', j => j.preventDefault(), { once: !0 });
												}
											}),
										}),
									}),
								}),
								v.viewport
							),
						}),
					],
				})
			: null;
	}),
	Ox = e => {
		const { __scopeToast: t, children: n, ...r } = e,
			o = Ks(Gs, t),
			[i, s] = x.useState(!1),
			[l, a] = x.useState(!1);
		return (
			Mx(() => s(!0)),
			x.useEffect(() => {
				const u = window.setTimeout(() => a(!0), 1e3);
				return () => window.clearTimeout(u);
			}, []),
			l
				? null
				: m.jsx(Gh, {
						asChild: !0,
						children: m.jsx(Qs, {
							...r,
							children: i && m.jsxs(m.Fragment, { children: [o.label, ' ', n] }),
						}),
					})
		);
	},
	_x = 'ToastTitle',
	tm = x.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return m.jsx(We.div, { ...r, ref: t });
	});
tm.displayName = _x;
var Ax = 'ToastDescription',
	nm = x.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e;
		return m.jsx(We.div, { ...r, ref: t });
	});
nm.displayName = Ax;
var rm = 'ToastAction',
	om = x.forwardRef((e, t) => {
		const { altText: n, ...r } = e;
		return n.trim()
			? m.jsx(sm, { altText: n, asChild: !0, children: m.jsx(Zu, { ...r, ref: t }) })
			: (console.error(
					`Invalid prop \`altText\` supplied to \`${rm}\`. Expected non-empty \`string\`.`
				),
				null);
	});
om.displayName = rm;
var im = 'ToastClose',
	Zu = x.forwardRef((e, t) => {
		const { __scopeToast: n, ...r } = e,
			o = Rx(im, n);
		return m.jsx(sm, {
			asChild: !0,
			children: m.jsx(We.button, {
				type: 'button',
				...r,
				ref: t,
				onClick: ye(e.onClick, o.onClose),
			}),
		});
	});
Zu.displayName = im;
var sm = x.forwardRef((e, t) => {
	const { __scopeToast: n, altText: r, ...o } = e;
	return m.jsx(We.div, {
		'data-radix-toast-announce-exclude': '',
		'data-radix-toast-announce-alt': r || void 0,
		...o,
		ref: t,
	});
});
function lm(e) {
	const t = [];
	return (
		Array.from(e.childNodes).forEach(r => {
			if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Lx(r))) {
				const o = r.ariaHidden || r.hidden || r.style.display === 'none',
					i = r.dataset.radixToastAnnounceExclude === '';
				if (!o)
					if (i) {
						const s = r.dataset.radixToastAnnounceAlt;
						s && t.push(s);
					} else t.push(...lm(r));
			}
		}),
		t
	);
}
function Ai(e, t, n, { discrete: r }) {
	const o = n.originalEvent.currentTarget,
		i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
	t && o.addEventListener(e, t, { once: !0 }), r ? Wh(o, i) : o.dispatchEvent(i);
}
var Dd = (e, t, n = 0) => {
	const r = Math.abs(e.x),
		o = Math.abs(e.y),
		i = r > o;
	return t === 'left' || t === 'right' ? i && r > n : !i && o > n;
};
function Mx(e = () => {}) {
	const t = _t(e);
	tr(() => {
		let n = 0,
			r = 0;
		return (
			(n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
			() => {
				window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
			}
		);
	}, [t]);
}
function Lx(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
function Ix(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: r => {
				const o = r.tagName === 'INPUT' && r.type === 'hidden';
				return r.disabled || r.hidden || o
					? NodeFilter.FILTER_SKIP
					: r.tabIndex >= 0
						? NodeFilter.FILTER_ACCEPT
						: NodeFilter.FILTER_SKIP;
			},
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function Il(e) {
	const t = document.activeElement;
	return e.some(n => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var Dx = Xh,
	am = Jh,
	um = em,
	cm = tm,
	dm = nm,
	fm = om,
	pm = Zu;
function hm(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++) e[t] && (n = hm(e[t])) && (r && (r += ' '), (r += n));
		} else for (n in e) e[n] && (r && (r += ' '), (r += n));
	return r;
}
function mm() {
	for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
		(e = arguments[n]) && (t = hm(e)) && (r && (r += ' '), (r += t));
	return r;
}
const zd = e => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	Fd = mm,
	gm = (e, t) => n => {
		var r;
		if ((t == null ? void 0 : t.variants) == null)
			return Fd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
		const { variants: o, defaultVariants: i } = t,
			s = Object.keys(o).map(u => {
				const d = n == null ? void 0 : n[u],
					f = i == null ? void 0 : i[u];
				if (d === null) return null;
				const c = zd(d) || zd(f);
				return o[u][c];
			}),
			l =
				n &&
				Object.entries(n).reduce((u, d) => {
					let [f, c] = d;
					return c === void 0 || (u[f] = c), u;
				}, {}),
			a =
				t == null || (r = t.compoundVariants) === null || r === void 0
					? void 0
					: r.reduce((u, d) => {
							let { class: f, className: c, ...y } = d;
							return Object.entries(y).every(w => {
								let [v, S] = w;
								return Array.isArray(S) ? S.includes({ ...i, ...l }[v]) : { ...i, ...l }[v] === S;
							})
								? [...u, f, c]
								: u;
						}, []);
		return Fd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
	};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zx = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
	vm = (...e) =>
		e
			.filter((t, n, r) => !!t && t.trim() !== '' && r.indexOf(t) === n)
			.join(' ')
			.trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Fx = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $x = x.forwardRef(
	(
		{
			color: e = 'currentColor',
			size: t = 24,
			strokeWidth: n = 2,
			absoluteStrokeWidth: r,
			className: o = '',
			children: i,
			iconNode: s,
			...l
		},
		a
	) =>
		x.createElement(
			'svg',
			{
				ref: a,
				...Fx,
				width: t,
				height: t,
				stroke: e,
				strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
				className: vm('lucide', o),
				...l,
			},
			[...s.map(([u, d]) => x.createElement(u, d)), ...(Array.isArray(i) ? i : [i])]
		)
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = (e, t) => {
	const n = x.forwardRef(({ className: r, ...o }, i) =>
		x.createElement($x, { ref: i, iconNode: t, className: vm(`lucide-${zx(e)}`, r), ...o })
	);
	return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dl = Yt('ArrowRight', [
	['path', { d: 'M5 12h14', key: '1ays0h' }],
	['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = Yt('ArrowUp', [
	['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
	['path', { d: 'M12 19V5', key: 'x0mq9r' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = Yt('ChevronUp', [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = Yt('Github', [
	[
		'path',
		{
			d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
			key: 'tonef',
		},
	],
	['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wx = Yt('Linkedin', [
	[
		'path',
		{
			d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
			key: 'c2jq9f',
		},
	],
	['rect', { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' }],
	['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hx = Yt('Moon', [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qx = Yt('Sun', [
	['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
	['path', { d: 'M12 2v2', key: 'tus03m' }],
	['path', { d: 'M12 20v2', key: '1lh1kg' }],
	['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
	['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
	['path', { d: 'M2 12h2', key: '1t8f8n' }],
	['path', { d: 'M20 12h2', key: '1q8mjw' }],
	['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
	['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kx = Yt('Twitter', [
	[
		'path',
		{
			d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
			key: 'pff0z6',
		},
	],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gx = Yt('X', [
		['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
		['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
	]),
	ec = '-',
	Yx = e => {
		const t = qx(e),
			{ conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
		return {
			getClassGroupId: s => {
				const l = s.split(ec);
				return l[0] === '' && l.length !== 1 && l.shift(), ym(l, t) || Xx(s);
			},
			getConflictingClassGroupIds: (s, l) => {
				const a = n[s] || [];
				return l && r[s] ? [...a, ...r[s]] : a;
			},
		};
	},
	ym = (e, t) => {
		var s;
		if (e.length === 0) return t.classGroupId;
		const n = e[0],
			r = t.nextPart.get(n),
			o = r ? ym(e.slice(1), r) : void 0;
		if (o) return o;
		if (t.validators.length === 0) return;
		const i = e.join(ec);
		return (s = t.validators.find(({ validator: l }) => l(i))) == null ? void 0 : s.classGroupId;
	},
	$d = /^\[(.+)\]$/,
	Xx = e => {
		if ($d.test(e)) {
			const t = $d.exec(e)[1],
				n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
			if (n) return 'arbitrary..' + n;
		}
	},
	qx = e => {
		const { theme: t, prefix: n } = e,
			r = { nextPart: new Map(), validators: [] };
		return (
			Zx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
				Wa(s, r, i, t);
			}),
			r
		);
	},
	Wa = (e, t, n, r) => {
		e.forEach(o => {
			if (typeof o == 'string') {
				const i = o === '' ? t : Ud(t, o);
				i.classGroupId = n;
				return;
			}
			if (typeof o == 'function') {
				if (Jx(o)) {
					Wa(o(r), t, n, r);
					return;
				}
				t.validators.push({ validator: o, classGroupId: n });
				return;
			}
			Object.entries(o).forEach(([i, s]) => {
				Wa(s, Ud(t, i), n, r);
			});
		});
	},
	Ud = (e, t) => {
		let n = e;
		return (
			t.split(ec).forEach(r => {
				n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
					(n = n.nextPart.get(r));
			}),
			n
		);
	},
	Jx = e => e.isThemeGetter,
	Zx = (e, t) =>
		t
			? e.map(([n, r]) => {
					const o = r.map(i =>
						typeof i == 'string'
							? t + i
							: typeof i == 'object'
								? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l]))
								: i
					);
					return [n, o];
				})
			: e,
	ew = e => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let t = 0,
			n = new Map(),
			r = new Map();
		const o = (i, s) => {
			n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
		};
		return {
			get(i) {
				let s = n.get(i);
				if (s !== void 0) return s;
				if ((s = r.get(i)) !== void 0) return o(i, s), s;
			},
			set(i, s) {
				n.has(i) ? n.set(i, s) : o(i, s);
			},
		};
	},
	xm = '!',
	tw = e => {
		const { separator: t, experimentalParseClassName: n } = e,
			r = t.length === 1,
			o = t[0],
			i = t.length,
			s = l => {
				const a = [];
				let u = 0,
					d = 0,
					f;
				for (let S = 0; S < l.length; S++) {
					let h = l[S];
					if (u === 0) {
						if (h === o && (r || l.slice(S, S + i) === t)) {
							a.push(l.slice(d, S)), (d = S + i);
							continue;
						}
						if (h === '/') {
							f = S;
							continue;
						}
					}
					h === '[' ? u++ : h === ']' && u--;
				}
				const c = a.length === 0 ? l : l.substring(d),
					y = c.startsWith(xm),
					w = y ? c.substring(1) : c,
					v = f && f > d ? f - d : void 0;
				return {
					modifiers: a,
					hasImportantModifier: y,
					baseClassName: w,
					maybePostfixModifierPosition: v,
				};
			};
		return n ? l => n({ className: l, parseClassName: s }) : s;
	},
	nw = e => {
		if (e.length <= 1) return e;
		const t = [];
		let n = [];
		return (
			e.forEach(r => {
				r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
			}),
			t.push(...n.sort()),
			t
		);
	},
	rw = e => ({ cache: ew(e.cacheSize), parseClassName: tw(e), ...Yx(e) }),
	ow = /\s+/,
	iw = (e, t) => {
		const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
			i = [],
			s = e.trim().split(ow);
		let l = '';
		for (let a = s.length - 1; a >= 0; a -= 1) {
			const u = s[a],
				{
					modifiers: d,
					hasImportantModifier: f,
					baseClassName: c,
					maybePostfixModifierPosition: y,
				} = n(u);
			let w = !!y,
				v = r(w ? c.substring(0, y) : c);
			if (!v) {
				if (!w) {
					l = u + (l.length > 0 ? ' ' + l : l);
					continue;
				}
				if (((v = r(c)), !v)) {
					l = u + (l.length > 0 ? ' ' + l : l);
					continue;
				}
				w = !1;
			}
			const S = nw(d).join(':'),
				h = f ? S + xm : S,
				p = h + v;
			if (i.includes(p)) continue;
			i.push(p);
			const g = o(v, w);
			for (let k = 0; k < g.length; ++k) {
				const E = g[k];
				i.push(h + E);
			}
			l = u + (l.length > 0 ? ' ' + l : l);
		}
		return l;
	};
function sw() {
	let e = 0,
		t,
		n,
		r = '';
	for (; e < arguments.length; ) (t = arguments[e++]) && (n = wm(t)) && (r && (r += ' '), (r += n));
	return r;
}
const wm = e => {
	if (typeof e == 'string') return e;
	let t,
		n = '';
	for (let r = 0; r < e.length; r++) e[r] && (t = wm(e[r])) && (n && (n += ' '), (n += t));
	return n;
};
function lw(e, ...t) {
	let n,
		r,
		o,
		i = s;
	function s(a) {
		const u = t.reduce((d, f) => f(d), e());
		return (n = rw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
	}
	function l(a) {
		const u = r(a);
		if (u) return u;
		const d = iw(a, n);
		return o(a, d), d;
	}
	return function () {
		return i(sw.apply(null, arguments));
	};
}
const re = e => {
		const t = n => n[e] || [];
		return (t.isThemeGetter = !0), t;
	},
	Sm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	aw = /^\d+\/\d+$/,
	uw = new Set(['px', 'full', 'screen']),
	cw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	dw =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	fw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	pw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	hw =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	Lt = e => Or(e) || uw.has(e) || aw.test(e),
	rn = e => eo(e, 'length', kw),
	Or = e => !!e && !Number.isNaN(Number(e)),
	zl = e => eo(e, 'number', Or),
	po = e => !!e && Number.isInteger(Number(e)),
	mw = e => e.endsWith('%') && Or(e.slice(0, -1)),
	V = e => Sm.test(e),
	on = e => cw.test(e),
	gw = new Set(['length', 'size', 'percentage']),
	vw = e => eo(e, gw, km),
	yw = e => eo(e, 'position', km),
	xw = new Set(['image', 'url']),
	ww = e => eo(e, xw, Cw),
	Sw = e => eo(e, '', Ew),
	ho = () => !0,
	eo = (e, t, n) => {
		const r = Sm.exec(e);
		return r ? (r[1] ? (typeof t == 'string' ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
	},
	kw = e => dw.test(e) && !fw.test(e),
	km = () => !1,
	Ew = e => pw.test(e),
	Cw = e => hw.test(e),
	bw = () => {
		const e = re('colors'),
			t = re('spacing'),
			n = re('blur'),
			r = re('brightness'),
			o = re('borderColor'),
			i = re('borderRadius'),
			s = re('borderSpacing'),
			l = re('borderWidth'),
			a = re('contrast'),
			u = re('grayscale'),
			d = re('hueRotate'),
			f = re('invert'),
			c = re('gap'),
			y = re('gradientColorStops'),
			w = re('gradientColorStopPositions'),
			v = re('inset'),
			S = re('margin'),
			h = re('opacity'),
			p = re('padding'),
			g = re('saturate'),
			k = re('scale'),
			E = re('sepia'),
			b = re('skew'),
			P = re('space'),
			T = re('translate'),
			I = () => ['auto', 'contain', 'none'],
			_ = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			$ = () => ['auto', V, t],
			D = () => [V, t],
			H = () => ['', Lt, rn],
			A = () => ['auto', Or, V],
			Q = () => [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top',
			],
			U = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
			K = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity',
			],
			C = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
			j = () => ['', '0', V],
			z = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
			L = () => [Or, V];
		return {
			cacheSize: 500,
			separator: ':',
			theme: {
				colors: [ho],
				spacing: [Lt, rn],
				blur: ['none', '', on, V],
				brightness: L(),
				borderColor: [e],
				borderRadius: ['none', '', 'full', on, V],
				borderSpacing: D(),
				borderWidth: H(),
				contrast: L(),
				grayscale: j(),
				hueRotate: L(),
				invert: j(),
				gap: D(),
				gradientColorStops: [e],
				gradientColorStopPositions: [mw, rn],
				inset: $(),
				margin: $(),
				opacity: L(),
				padding: D(),
				saturate: L(),
				scale: L(),
				sepia: j(),
				skew: L(),
				space: D(),
				translate: D(),
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', 'video', V] }],
				container: ['container'],
				columns: [{ columns: [on] }],
				'break-after': [{ 'break-after': z() }],
				'break-before': [{ 'break-before': z() }],
				'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden',
				],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
				'object-position': [{ object: [...Q(), V] }],
				overflow: [{ overflow: _() }],
				'overflow-x': [{ 'overflow-x': _() }],
				'overflow-y': [{ 'overflow-y': _() }],
				overscroll: [{ overscroll: I() }],
				'overscroll-x': [{ 'overscroll-x': I() }],
				'overscroll-y': [{ 'overscroll-y': I() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: [v] }],
				'inset-x': [{ 'inset-x': [v] }],
				'inset-y': [{ 'inset-y': [v] }],
				start: [{ start: [v] }],
				end: [{ end: [v] }],
				top: [{ top: [v] }],
				right: [{ right: [v] }],
				bottom: [{ bottom: [v] }],
				left: [{ left: [v] }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: ['auto', po, V] }],
				basis: [{ basis: $() }],
				'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
				'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
				flex: [{ flex: ['1', 'auto', 'initial', 'none', V] }],
				grow: [{ grow: j() }],
				shrink: [{ shrink: j() }],
				order: [{ order: ['first', 'last', 'none', po, V] }],
				'grid-cols': [{ 'grid-cols': [ho] }],
				'col-start-end': [{ col: ['auto', { span: ['full', po, V] }, V] }],
				'col-start': [{ 'col-start': A() }],
				'col-end': [{ 'col-end': A() }],
				'grid-rows': [{ 'grid-rows': [ho] }],
				'row-start-end': [{ row: ['auto', { span: [po, V] }, V] }],
				'row-start': [{ 'row-start': A() }],
				'row-end': [{ 'row-end': A() }],
				'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
				'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', V] }],
				'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', V] }],
				gap: [{ gap: [c] }],
				'gap-x': [{ 'gap-x': [c] }],
				'gap-y': [{ 'gap-y': [c] }],
				'justify-content': [{ justify: ['normal', ...C()] }],
				'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
				'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				'align-content': [{ content: ['normal', ...C(), 'baseline'] }],
				'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
				'place-content': [{ 'place-content': [...C(), 'baseline'] }],
				'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				p: [{ p: [p] }],
				px: [{ px: [p] }],
				py: [{ py: [p] }],
				ps: [{ ps: [p] }],
				pe: [{ pe: [p] }],
				pt: [{ pt: [p] }],
				pr: [{ pr: [p] }],
				pb: [{ pb: [p] }],
				pl: [{ pl: [p] }],
				m: [{ m: [S] }],
				mx: [{ mx: [S] }],
				my: [{ my: [S] }],
				ms: [{ ms: [S] }],
				me: [{ me: [S] }],
				mt: [{ mt: [S] }],
				mr: [{ mr: [S] }],
				mb: [{ mb: [S] }],
				ml: [{ ml: [S] }],
				'space-x': [{ 'space-x': [P] }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': [P] }],
				'space-y-reverse': ['space-y-reverse'],
				w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', V, t] }],
				'min-w': [{ 'min-w': [V, t, 'min', 'max', 'fit'] }],
				'max-w': [
					{ 'max-w': [V, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [on] }, on] },
				],
				h: [{ h: [V, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'min-h': [{ 'min-h': [V, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'max-h': [{ 'max-h': [V, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				size: [{ size: [V, t, 'auto', 'min', 'max', 'fit'] }],
				'font-size': [{ text: ['base', on, rn] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [
					{
						font: [
							'thin',
							'extralight',
							'light',
							'normal',
							'medium',
							'semibold',
							'bold',
							'extrabold',
							'black',
							zl,
						],
					},
				],
				'font-family': [{ font: [ho] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
				tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', V] }],
				'line-clamp': [{ 'line-clamp': ['none', Or, zl] }],
				leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', Lt, V] }],
				'list-image': [{ 'list-image': ['none', V] }],
				'list-style-type': [{ list: ['none', 'disc', 'decimal', V] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'placeholder-color': [{ placeholder: [e] }],
				'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
				'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
				'text-color': [{ text: [e] }],
				'text-opacity': [{ 'text-opacity': [h] }],
				'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
				'text-decoration-style': [{ decoration: [...U(), 'wavy'] }],
				'text-decoration-thickness': [{ decoration: ['auto', 'from-font', Lt, rn] }],
				'underline-offset': [{ 'underline-offset': ['auto', Lt, V] }],
				'text-decoration-color': [{ decoration: [e] }],
				'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: D() }],
				'vertical-align': [
					{
						align: [
							'baseline',
							'top',
							'middle',
							'bottom',
							'text-top',
							'text-bottom',
							'sub',
							'super',
							V,
						],
					},
				],
				whitespace: [
					{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
				],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', V] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-opacity': [{ 'bg-opacity': [h] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: [...Q(), yw] }],
				'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
				'bg-size': [{ bg: ['auto', 'cover', 'contain', vw] }],
				'bg-image': [
					{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, ww] },
				],
				'bg-color': [{ bg: [e] }],
				'gradient-from-pos': [{ from: [w] }],
				'gradient-via-pos': [{ via: [w] }],
				'gradient-to-pos': [{ to: [w] }],
				'gradient-from': [{ from: [y] }],
				'gradient-via': [{ via: [y] }],
				'gradient-to': [{ to: [y] }],
				rounded: [{ rounded: [i] }],
				'rounded-s': [{ 'rounded-s': [i] }],
				'rounded-e': [{ 'rounded-e': [i] }],
				'rounded-t': [{ 'rounded-t': [i] }],
				'rounded-r': [{ 'rounded-r': [i] }],
				'rounded-b': [{ 'rounded-b': [i] }],
				'rounded-l': [{ 'rounded-l': [i] }],
				'rounded-ss': [{ 'rounded-ss': [i] }],
				'rounded-se': [{ 'rounded-se': [i] }],
				'rounded-ee': [{ 'rounded-ee': [i] }],
				'rounded-es': [{ 'rounded-es': [i] }],
				'rounded-tl': [{ 'rounded-tl': [i] }],
				'rounded-tr': [{ 'rounded-tr': [i] }],
				'rounded-br': [{ 'rounded-br': [i] }],
				'rounded-bl': [{ 'rounded-bl': [i] }],
				'border-w': [{ border: [l] }],
				'border-w-x': [{ 'border-x': [l] }],
				'border-w-y': [{ 'border-y': [l] }],
				'border-w-s': [{ 'border-s': [l] }],
				'border-w-e': [{ 'border-e': [l] }],
				'border-w-t': [{ 'border-t': [l] }],
				'border-w-r': [{ 'border-r': [l] }],
				'border-w-b': [{ 'border-b': [l] }],
				'border-w-l': [{ 'border-l': [l] }],
				'border-opacity': [{ 'border-opacity': [h] }],
				'border-style': [{ border: [...U(), 'hidden'] }],
				'divide-x': [{ 'divide-x': [l] }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': [l] }],
				'divide-y-reverse': ['divide-y-reverse'],
				'divide-opacity': [{ 'divide-opacity': [h] }],
				'divide-style': [{ divide: U() }],
				'border-color': [{ border: [o] }],
				'border-color-x': [{ 'border-x': [o] }],
				'border-color-y': [{ 'border-y': [o] }],
				'border-color-s': [{ 'border-s': [o] }],
				'border-color-e': [{ 'border-e': [o] }],
				'border-color-t': [{ 'border-t': [o] }],
				'border-color-r': [{ 'border-r': [o] }],
				'border-color-b': [{ 'border-b': [o] }],
				'border-color-l': [{ 'border-l': [o] }],
				'divide-color': [{ divide: [o] }],
				'outline-style': [{ outline: ['', ...U()] }],
				'outline-offset': [{ 'outline-offset': [Lt, V] }],
				'outline-w': [{ outline: [Lt, rn] }],
				'outline-color': [{ outline: [e] }],
				'ring-w': [{ ring: H() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: [e] }],
				'ring-opacity': [{ 'ring-opacity': [h] }],
				'ring-offset-w': [{ 'ring-offset': [Lt, rn] }],
				'ring-offset-color': [{ 'ring-offset': [e] }],
				shadow: [{ shadow: ['', 'inner', 'none', on, Sw] }],
				'shadow-color': [{ shadow: [ho] }],
				opacity: [{ opacity: [h] }],
				'mix-blend': [{ 'mix-blend': [...K(), 'plus-lighter', 'plus-darker'] }],
				'bg-blend': [{ 'bg-blend': K() }],
				filter: [{ filter: ['', 'none'] }],
				blur: [{ blur: [n] }],
				brightness: [{ brightness: [r] }],
				contrast: [{ contrast: [a] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', on, V] }],
				grayscale: [{ grayscale: [u] }],
				'hue-rotate': [{ 'hue-rotate': [d] }],
				invert: [{ invert: [f] }],
				saturate: [{ saturate: [g] }],
				sepia: [{ sepia: [E] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
				'backdrop-blur': [{ 'backdrop-blur': [n] }],
				'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
				'backdrop-invert': [{ 'backdrop-invert': [f] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [g] }],
				'backdrop-sepia': [{ 'backdrop-sepia': [E] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': [s] }],
				'border-spacing-x': [{ 'border-spacing-x': [s] }],
				'border-spacing-y': [{ 'border-spacing-y': [s] }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [
					{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', V] },
				],
				duration: [{ duration: L() }],
				ease: [{ ease: ['linear', 'in', 'out', 'in-out', V] }],
				delay: [{ delay: L() }],
				animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', V] }],
				transform: [{ transform: ['', 'gpu', 'none'] }],
				scale: [{ scale: [k] }],
				'scale-x': [{ 'scale-x': [k] }],
				'scale-y': [{ 'scale-y': [k] }],
				rotate: [{ rotate: [po, V] }],
				'translate-x': [{ 'translate-x': [T] }],
				'translate-y': [{ 'translate-y': [T] }],
				'skew-x': [{ 'skew-x': [b] }],
				'skew-y': [{ 'skew-y': [b] }],
				'transform-origin': [
					{
						origin: [
							'center',
							'top',
							'top-right',
							'right',
							'bottom-right',
							'bottom',
							'bottom-left',
							'left',
							'top-left',
							V,
						],
					},
				],
				accent: [{ accent: ['auto', e] }],
				appearance: [{ appearance: ['none', 'auto'] }],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							V,
						],
					},
				],
				'caret-color': [{ caret: [e] }],
				'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
				resize: [{ resize: ['none', 'y', 'x', ''] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scroll-m': [{ 'scroll-m': D() }],
				'scroll-mx': [{ 'scroll-mx': D() }],
				'scroll-my': [{ 'scroll-my': D() }],
				'scroll-ms': [{ 'scroll-ms': D() }],
				'scroll-me': [{ 'scroll-me': D() }],
				'scroll-mt': [{ 'scroll-mt': D() }],
				'scroll-mr': [{ 'scroll-mr': D() }],
				'scroll-mb': [{ 'scroll-mb': D() }],
				'scroll-ml': [{ 'scroll-ml': D() }],
				'scroll-p': [{ 'scroll-p': D() }],
				'scroll-px': [{ 'scroll-px': D() }],
				'scroll-py': [{ 'scroll-py': D() }],
				'scroll-ps': [{ 'scroll-ps': D() }],
				'scroll-pe': [{ 'scroll-pe': D() }],
				'scroll-pt': [{ 'scroll-pt': D() }],
				'scroll-pr': [{ 'scroll-pr': D() }],
				'scroll-pb': [{ 'scroll-pb': D() }],
				'scroll-pl': [{ 'scroll-pl': D() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', V] }],
				fill: [{ fill: [e, 'none'] }],
				'stroke-w': [{ stroke: [Lt, rn, zl] }],
				stroke: [{ stroke: [e, 'none'] }],
				sr: ['sr-only', 'not-sr-only'],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
			},
			conflictingClassGroups: {
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': [
					'fvn-ordinal',
					'fvn-slashed-zero',
					'fvn-figure',
					'fvn-spacing',
					'fvn-fraction',
				],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl',
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': [
					'border-w-s',
					'border-w-e',
					'border-w-t',
					'border-w-r',
					'border-w-b',
					'border-w-l',
				],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-s',
					'border-color-e',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l',
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml',
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl',
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch'],
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] },
		};
	},
	Pw = lw(bw);
function Xt(...e) {
	return Pw(mm(e));
}
const Nw = Dx,
	Em = x.forwardRef(({ className: e, ...t }, n) =>
		m.jsx(am, {
			ref: n,
			className: Xt(
				'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
				e
			),
			...t,
		})
	);
Em.displayName = am.displayName;
const Tw = gm(
		'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
		{
			variants: {
				variant: {
					default: 'border bg-background text-foreground',
					destructive:
						'destructive group border-destructive bg-destructive text-destructive-foreground',
				},
			},
			defaultVariants: { variant: 'default' },
		}
	),
	Cm = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
		m.jsx(um, { ref: r, className: Xt(Tw({ variant: t }), e), ...n })
	);
Cm.displayName = um.displayName;
const Rw = x.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(fm, {
		ref: n,
		className: Xt(
			'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
			e
		),
		...t,
	})
);
Rw.displayName = fm.displayName;
const bm = x.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(pm, {
		ref: n,
		className: Xt(
			'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
			e
		),
		'toast-close': '',
		...t,
		children: m.jsx(Gx, { className: 'h-4 w-4' }),
	})
);
bm.displayName = pm.displayName;
const Pm = x.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(cm, { ref: n, className: Xt('text-sm font-semibold', e), ...t })
);
Pm.displayName = cm.displayName;
const Nm = x.forwardRef(({ className: e, ...t }, n) =>
	m.jsx(dm, { ref: n, className: Xt('text-sm opacity-90', e), ...t })
);
Nm.displayName = dm.displayName;
function jw() {
	const { toasts: e } = K0();
	return m.jsxs(Nw, {
		children: [
			e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
				return m.jsxs(
					Cm,
					{
						...i,
						children: [
							m.jsxs('div', {
								className: 'grid gap-1',
								children: [n && m.jsx(Pm, { children: n }), r && m.jsx(Nm, { children: r })],
							}),
							o,
							m.jsx(bm, {}),
						],
					},
					t
				);
			}),
			m.jsx(Em, {}),
		],
	});
}
var Bd = ['light', 'dark'],
	Ow = '(prefers-color-scheme: dark)',
	_w = x.createContext(void 0),
	Aw = { setTheme: e => {}, themes: [] },
	Mw = () => {
		var e;
		return (e = x.useContext(_w)) != null ? e : Aw;
	};
x.memo(
	({
		forcedTheme: e,
		storageKey: t,
		attribute: n,
		enableSystem: r,
		enableColorScheme: o,
		defaultTheme: i,
		value: s,
		attrs: l,
		nonce: a,
	}) => {
		let u = i === 'system',
			d =
				n === 'class'
					? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(',')})`};`
					: `var d=document.documentElement,n='${n}',s='setAttribute';`,
			f = o
				? Bd.includes(i) && i
					? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
					: "if(e==='light'||e==='dark')d.style.colorScheme=e"
				: '',
			c = (w, v = !1, S = !0) => {
				let h = s ? s[w] : w,
					p = v ? w + "|| ''" : `'${h}'`,
					g = '';
				return (
					o && S && !v && Bd.includes(w) && (g += `d.style.colorScheme = '${w}';`),
					n === 'class'
						? v || h
							? (g += `c.add(${p})`)
							: (g += 'null')
						: h && (g += `d[s](n,${p})`),
					g
				);
			},
			y = e
				? `!function(){${d}${c(e)}}()`
				: r
					? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Ow}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c('dark')}}else{${c('light')}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ''}${c(s ? 'x[e]' : 'e', !0)}}${u ? '' : 'else{' + c(i, !1, !1) + '}'}${f}}catch(e){}}()`
					: `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ''}${c(s ? 'x[e]' : 'e', !0)}}else{${c(i, !1, !1)};}${f}}catch(t){}}();`;
		return x.createElement('script', { nonce: a, dangerouslySetInnerHTML: { __html: y } });
	}
);
var Lw = e => {
		switch (e) {
			case 'success':
				return zw;
			case 'info':
				return $w;
			case 'warning':
				return Fw;
			case 'error':
				return Uw;
			default:
				return null;
		}
	},
	Iw = Array(12).fill(0),
	Dw = ({ visible: e }) =>
		O.createElement(
			'div',
			{ className: 'sonner-loading-wrapper', 'data-visible': e },
			O.createElement(
				'div',
				{ className: 'sonner-spinner' },
				Iw.map((t, n) =>
					O.createElement('div', { className: 'sonner-loading-bar', key: `spinner-bar-${n}` })
				)
			)
		),
	zw = O.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20',
		},
		O.createElement('path', {
			fillRule: 'evenodd',
			d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
			clipRule: 'evenodd',
		})
	),
	Fw = O.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 24 24',
			fill: 'currentColor',
			height: '20',
			width: '20',
		},
		O.createElement('path', {
			fillRule: 'evenodd',
			d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
			clipRule: 'evenodd',
		})
	),
	$w = O.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20',
		},
		O.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
			clipRule: 'evenodd',
		})
	),
	Uw = O.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20',
		},
		O.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
			clipRule: 'evenodd',
		})
	),
	Bw = () => {
		let [e, t] = O.useState(document.hidden);
		return (
			O.useEffect(() => {
				let n = () => {
					t(document.hidden);
				};
				return (
					document.addEventListener('visibilitychange', n),
					() => window.removeEventListener('visibilitychange', n)
				);
			}, []),
			e
		);
	},
	Ha = 1,
	Vw = class {
		constructor() {
			(this.subscribe = e => (
				this.subscribers.push(e),
				() => {
					let t = this.subscribers.indexOf(e);
					this.subscribers.splice(t, 1);
				}
			)),
				(this.publish = e => {
					this.subscribers.forEach(t => t(e));
				}),
				(this.addToast = e => {
					this.publish(e), (this.toasts = [...this.toasts, e]);
				}),
				(this.create = e => {
					var t;
					let { message: n, ...r } = e,
						o =
							typeof (e == null ? void 0 : e.id) == 'number' ||
							((t = e.id) == null ? void 0 : t.length) > 0
								? e.id
								: Ha++,
						i = this.toasts.find(l => l.id === o),
						s = e.dismissible === void 0 ? !0 : e.dismissible;
					return (
						i
							? (this.toasts = this.toasts.map(l =>
									l.id === o
										? (this.publish({ ...l, ...e, id: o, title: n }),
											{ ...l, ...e, id: o, dismissible: s, title: n })
										: l
								))
							: this.addToast({ title: n, ...r, dismissible: s, id: o }),
						o
					);
				}),
				(this.dismiss = e => (
					e ||
						this.toasts.forEach(t => {
							this.subscribers.forEach(n => n({ id: t.id, dismiss: !0 }));
						}),
					this.subscribers.forEach(t => t({ id: e, dismiss: !0 })),
					e
				)),
				(this.message = (e, t) => this.create({ ...t, message: e })),
				(this.error = (e, t) => this.create({ ...t, message: e, type: 'error' })),
				(this.success = (e, t) => this.create({ ...t, type: 'success', message: e })),
				(this.info = (e, t) => this.create({ ...t, type: 'info', message: e })),
				(this.warning = (e, t) => this.create({ ...t, type: 'warning', message: e })),
				(this.loading = (e, t) => this.create({ ...t, type: 'loading', message: e })),
				(this.promise = (e, t) => {
					if (!t) return;
					let n;
					t.loading !== void 0 &&
						(n = this.create({
							...t,
							promise: e,
							type: 'loading',
							message: t.loading,
							description: typeof t.description != 'function' ? t.description : void 0,
						}));
					let r = e instanceof Promise ? e : e(),
						o = n !== void 0;
					return (
						r
							.then(async i => {
								if (Hw(i) && !i.ok) {
									o = !1;
									let s =
											typeof t.error == 'function'
												? await t.error(`HTTP error! status: ${i.status}`)
												: t.error,
										l =
											typeof t.description == 'function'
												? await t.description(`HTTP error! status: ${i.status}`)
												: t.description;
									this.create({ id: n, type: 'error', message: s, description: l });
								} else if (t.success !== void 0) {
									o = !1;
									let s = typeof t.success == 'function' ? await t.success(i) : t.success,
										l = typeof t.description == 'function' ? await t.description(i) : t.description;
									this.create({ id: n, type: 'success', message: s, description: l });
								}
							})
							.catch(async i => {
								if (t.error !== void 0) {
									o = !1;
									let s = typeof t.error == 'function' ? await t.error(i) : t.error,
										l = typeof t.description == 'function' ? await t.description(i) : t.description;
									this.create({ id: n, type: 'error', message: s, description: l });
								}
							})
							.finally(() => {
								var i;
								o && (this.dismiss(n), (n = void 0)), (i = t.finally) == null || i.call(t);
							}),
						n
					);
				}),
				(this.custom = (e, t) => {
					let n = (t == null ? void 0 : t.id) || Ha++;
					return this.create({ jsx: e(n), id: n, ...t }), n;
				}),
				(this.subscribers = []),
				(this.toasts = []);
		}
	},
	Ke = new Vw(),
	Ww = (e, t) => {
		let n = (t == null ? void 0 : t.id) || Ha++;
		return Ke.addToast({ title: e, ...t, id: n }), n;
	},
	Hw = e =>
		e &&
		typeof e == 'object' &&
		'ok' in e &&
		typeof e.ok == 'boolean' &&
		'status' in e &&
		typeof e.status == 'number',
	Qw = Ww,
	Kw = () => Ke.toasts;
Object.assign(
	Qw,
	{
		success: Ke.success,
		info: Ke.info,
		warning: Ke.warning,
		error: Ke.error,
		custom: Ke.custom,
		message: Ke.message,
		promise: Ke.promise,
		dismiss: Ke.dismiss,
		loading: Ke.loading,
	},
	{ getHistory: Kw }
);
function Gw(e, { insertAt: t } = {}) {
	if (typeof document > 'u') return;
	let n = document.head || document.getElementsByTagName('head')[0],
		r = document.createElement('style');
	(r.type = 'text/css'),
		t === 'top' && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
		r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Gw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Mi(e) {
	return e.label !== void 0;
}
var Yw = 3,
	Xw = '32px',
	qw = 4e3,
	Jw = 356,
	Zw = 14,
	e1 = 20,
	t1 = 200;
function n1(...e) {
	return e.filter(Boolean).join(' ');
}
var r1 = e => {
	var t, n, r, o, i, s, l, a, u, d;
	let {
			invert: f,
			toast: c,
			unstyled: y,
			interacting: w,
			setHeights: v,
			visibleToasts: S,
			heights: h,
			index: p,
			toasts: g,
			expanded: k,
			removeToast: E,
			defaultRichColors: b,
			closeButton: P,
			style: T,
			cancelButtonStyle: I,
			actionButtonStyle: _,
			className: $ = '',
			descriptionClassName: D = '',
			duration: H,
			position: A,
			gap: Q,
			loadingIcon: U,
			expandByDefault: K,
			classNames: C,
			icons: j,
			closeButtonAriaLabel: z = 'Close toast',
			pauseWhenPageIsHidden: L,
			cn: F,
		} = e,
		[Y, le] = O.useState(!1),
		[He, J] = O.useState(!1),
		[ut, qt] = O.useState(!1),
		[Jt, Zt] = O.useState(!1),
		[ci, ar] = O.useState(0),
		[Dn, ro] = O.useState(0),
		di = O.useRef(null),
		en = O.useRef(null),
		nl = p === 0,
		rl = p + 1 <= S,
		ke = c.type,
		ur = c.dismissible !== !1,
		ug = c.className || '',
		cg = c.descriptionClassName || '',
		fi = O.useMemo(() => h.findIndex(B => B.toastId === c.id) || 0, [h, c.id]),
		dg = O.useMemo(() => {
			var B;
			return (B = c.closeButton) != null ? B : P;
		}, [c.closeButton, P]),
		dc = O.useMemo(() => c.duration || H || qw, [c.duration, H]),
		ol = O.useRef(0),
		cr = O.useRef(0),
		fc = O.useRef(0),
		dr = O.useRef(null),
		[pc, fg] = A.split('-'),
		hc = O.useMemo(() => h.reduce((B, ne, ee) => (ee >= fi ? B : B + ne.height), 0), [h, fi]),
		mc = Bw(),
		pg = c.invert || f,
		il = ke === 'loading';
	(cr.current = O.useMemo(() => fi * Q + hc, [fi, hc])),
		O.useEffect(() => {
			le(!0);
		}, []),
		O.useLayoutEffect(() => {
			if (!Y) return;
			let B = en.current,
				ne = B.style.height;
			B.style.height = 'auto';
			let ee = B.getBoundingClientRect().height;
			(B.style.height = ne),
				ro(ee),
				v(kt =>
					kt.find(Et => Et.toastId === c.id)
						? kt.map(Et => (Et.toastId === c.id ? { ...Et, height: ee } : Et))
						: [{ toastId: c.id, height: ee, position: c.position }, ...kt]
				);
		}, [Y, c.title, c.description, v, c.id]);
	let tn = O.useCallback(() => {
		J(!0),
			ar(cr.current),
			v(B => B.filter(ne => ne.toastId !== c.id)),
			setTimeout(() => {
				E(c);
			}, t1);
	}, [c, E, v, cr]);
	O.useEffect(() => {
		if ((c.promise && ke === 'loading') || c.duration === 1 / 0 || c.type === 'loading') return;
		let B,
			ne = dc;
		return (
			k || w || (L && mc)
				? (() => {
						if (fc.current < ol.current) {
							let ee = new Date().getTime() - ol.current;
							ne = ne - ee;
						}
						fc.current = new Date().getTime();
					})()
				: ne !== 1 / 0 &&
					((ol.current = new Date().getTime()),
					(B = setTimeout(() => {
						var ee;
						(ee = c.onAutoClose) == null || ee.call(c, c), tn();
					}, ne))),
			() => clearTimeout(B)
		);
	}, [k, w, K, c, dc, tn, c.promise, ke, L, mc]),
		O.useEffect(() => {
			let B = en.current;
			if (B) {
				let ne = B.getBoundingClientRect().height;
				return (
					ro(ne),
					v(ee => [{ toastId: c.id, height: ne, position: c.position }, ...ee]),
					() => v(ee => ee.filter(kt => kt.toastId !== c.id))
				);
			}
		}, [v, c.id]),
		O.useEffect(() => {
			c.delete && tn();
		}, [tn, c.delete]);
	function hg() {
		return j != null && j.loading
			? O.createElement(
					'div',
					{ className: 'sonner-loader', 'data-visible': ke === 'loading' },
					j.loading
				)
			: U
				? O.createElement(
						'div',
						{ className: 'sonner-loader', 'data-visible': ke === 'loading' },
						U
					)
				: O.createElement(Dw, { visible: ke === 'loading' });
	}
	return O.createElement(
		'li',
		{
			'aria-live': c.important ? 'assertive' : 'polite',
			'aria-atomic': 'true',
			role: 'status',
			tabIndex: 0,
			ref: en,
			className: F(
				$,
				ug,
				C == null ? void 0 : C.toast,
				(t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
				C == null ? void 0 : C.default,
				C == null ? void 0 : C[ke],
				(n = c == null ? void 0 : c.classNames) == null ? void 0 : n[ke]
			),
			'data-sonner-toast': '',
			'data-rich-colors': (r = c.richColors) != null ? r : b,
			'data-styled': !(c.jsx || c.unstyled || y),
			'data-mounted': Y,
			'data-promise': !!c.promise,
			'data-removed': He,
			'data-visible': rl,
			'data-y-position': pc,
			'data-x-position': fg,
			'data-index': p,
			'data-front': nl,
			'data-swiping': ut,
			'data-dismissible': ur,
			'data-type': ke,
			'data-invert': pg,
			'data-swipe-out': Jt,
			'data-expanded': !!(k || (K && Y)),
			style: {
				'--index': p,
				'--toasts-before': p,
				'--z-index': g.length - p,
				'--offset': `${He ? ci : cr.current}px`,
				'--initial-height': K ? 'auto' : `${Dn}px`,
				...T,
				...c.style,
			},
			onPointerDown: B => {
				il ||
					!ur ||
					((di.current = new Date()),
					ar(cr.current),
					B.target.setPointerCapture(B.pointerId),
					B.target.tagName !== 'BUTTON' && (qt(!0), (dr.current = { x: B.clientX, y: B.clientY })));
			},
			onPointerUp: () => {
				var B, ne, ee, kt;
				if (Jt || !ur) return;
				dr.current = null;
				let Et = Number(
						((B = en.current) == null
							? void 0
							: B.style.getPropertyValue('--swipe-amount').replace('px', '')) || 0
					),
					pi = new Date().getTime() - ((ne = di.current) == null ? void 0 : ne.getTime()),
					mg = Math.abs(Et) / pi;
				if (Math.abs(Et) >= e1 || mg > 0.11) {
					ar(cr.current), (ee = c.onDismiss) == null || ee.call(c, c), tn(), Zt(!0);
					return;
				}
				(kt = en.current) == null || kt.style.setProperty('--swipe-amount', '0px'), qt(!1);
			},
			onPointerMove: B => {
				var ne;
				if (!dr.current || !ur) return;
				let ee = B.clientY - dr.current.y,
					kt = B.clientX - dr.current.x,
					Et = (pc === 'top' ? Math.min : Math.max)(0, ee),
					pi = B.pointerType === 'touch' ? 10 : 2;
				Math.abs(Et) > pi
					? (ne = en.current) == null || ne.style.setProperty('--swipe-amount', `${ee}px`)
					: Math.abs(kt) > pi && (dr.current = null);
			},
		},
		dg && !c.jsx
			? O.createElement(
					'button',
					{
						'aria-label': z,
						'data-disabled': il,
						'data-close-button': !0,
						onClick:
							il || !ur
								? () => {}
								: () => {
										var B;
										tn(), (B = c.onDismiss) == null || B.call(c, c);
									},
						className: F(
							C == null ? void 0 : C.closeButton,
							(o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton
						),
					},
					O.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: '12',
							height: '12',
							viewBox: '0 0 24 24',
							fill: 'none',
							stroke: 'currentColor',
							strokeWidth: '1.5',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
						},
						O.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
						O.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
					)
				)
			: null,
		c.jsx || O.isValidElement(c.title)
			? c.jsx || c.title
			: O.createElement(
					O.Fragment,
					null,
					ke || c.icon || c.promise
						? O.createElement(
								'div',
								{
									'data-icon': '',
									className: F(
										C == null ? void 0 : C.icon,
										(i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon
									),
								},
								c.promise || (c.type === 'loading' && !c.icon) ? c.icon || hg() : null,
								c.type !== 'loading' ? c.icon || (j == null ? void 0 : j[ke]) || Lw(ke) : null
							)
						: null,
					O.createElement(
						'div',
						{
							'data-content': '',
							className: F(
								C == null ? void 0 : C.content,
								(s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content
							),
						},
						O.createElement(
							'div',
							{
								'data-title': '',
								className: F(
									C == null ? void 0 : C.title,
									(l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title
								),
							},
							c.title
						),
						c.description
							? O.createElement(
									'div',
									{
										'data-description': '',
										className: F(
											D,
											cg,
											C == null ? void 0 : C.description,
											(a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description
										),
									},
									c.description
								)
							: null
					),
					O.isValidElement(c.cancel)
						? c.cancel
						: c.cancel && Mi(c.cancel)
							? O.createElement(
									'button',
									{
										'data-button': !0,
										'data-cancel': !0,
										style: c.cancelButtonStyle || I,
										onClick: B => {
											var ne, ee;
											Mi(c.cancel) &&
												ur &&
												((ee = (ne = c.cancel).onClick) == null || ee.call(ne, B), tn());
										},
										className: F(
											C == null ? void 0 : C.cancelButton,
											(u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton
										),
									},
									c.cancel.label
								)
							: null,
					O.isValidElement(c.action)
						? c.action
						: c.action && Mi(c.action)
							? O.createElement(
									'button',
									{
										'data-button': !0,
										'data-action': !0,
										style: c.actionButtonStyle || _,
										onClick: B => {
											var ne, ee;
											Mi(c.action) &&
												(B.defaultPrevented ||
													((ee = (ne = c.action).onClick) == null || ee.call(ne, B), tn()));
										},
										className: F(
											C == null ? void 0 : C.actionButton,
											(d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton
										),
									},
									c.action.label
								)
							: null
				)
	);
};
function Vd() {
	if (typeof window > 'u' || typeof document > 'u') return 'ltr';
	let e = document.documentElement.getAttribute('dir');
	return e === 'auto' || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var o1 = e => {
	let {
			invert: t,
			position: n = 'bottom-right',
			hotkey: r = ['altKey', 'KeyT'],
			expand: o,
			closeButton: i,
			className: s,
			offset: l,
			theme: a = 'light',
			richColors: u,
			duration: d,
			style: f,
			visibleToasts: c = Yw,
			toastOptions: y,
			dir: w = Vd(),
			gap: v = Zw,
			loadingIcon: S,
			icons: h,
			containerAriaLabel: p = 'Notifications',
			pauseWhenPageIsHidden: g,
			cn: k = n1,
		} = e,
		[E, b] = O.useState([]),
		P = O.useMemo(
			() => Array.from(new Set([n].concat(E.filter(L => L.position).map(L => L.position)))),
			[E, n]
		),
		[T, I] = O.useState([]),
		[_, $] = O.useState(!1),
		[D, H] = O.useState(!1),
		[A, Q] = O.useState(
			a !== 'system'
				? a
				: typeof window < 'u' &&
					  window.matchMedia &&
					  window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
		),
		U = O.useRef(null),
		K = r.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
		C = O.useRef(null),
		j = O.useRef(!1),
		z = O.useCallback(
			L => {
				var F;
				((F = E.find(Y => Y.id === L.id)) != null && F.delete) || Ke.dismiss(L.id),
					b(Y => Y.filter(({ id: le }) => le !== L.id));
			},
			[E]
		);
	return (
		O.useEffect(
			() =>
				Ke.subscribe(L => {
					if (L.dismiss) {
						b(F => F.map(Y => (Y.id === L.id ? { ...Y, delete: !0 } : Y)));
						return;
					}
					setTimeout(() => {
						Rh.flushSync(() => {
							b(F => {
								let Y = F.findIndex(le => le.id === L.id);
								return Y !== -1
									? [...F.slice(0, Y), { ...F[Y], ...L }, ...F.slice(Y + 1)]
									: [L, ...F];
							});
						});
					});
				}),
			[]
		),
		O.useEffect(() => {
			if (a !== 'system') {
				Q(a);
				return;
			}
			a === 'system' &&
				(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? Q('dark')
					: Q('light')),
				typeof window < 'u' &&
					window
						.matchMedia('(prefers-color-scheme: dark)')
						.addEventListener('change', ({ matches: L }) => {
							Q(L ? 'dark' : 'light');
						});
		}, [a]),
		O.useEffect(() => {
			E.length <= 1 && $(!1);
		}, [E]),
		O.useEffect(() => {
			let L = F => {
				var Y, le;
				r.every(He => F[He] || F.code === He) && ($(!0), (Y = U.current) == null || Y.focus()),
					F.code === 'Escape' &&
						(document.activeElement === U.current ||
							((le = U.current) != null && le.contains(document.activeElement))) &&
						$(!1);
			};
			return (
				document.addEventListener('keydown', L), () => document.removeEventListener('keydown', L)
			);
		}, [r]),
		O.useEffect(() => {
			if (U.current)
				return () => {
					C.current &&
						(C.current.focus({ preventScroll: !0 }), (C.current = null), (j.current = !1));
				};
		}, [U.current]),
		E.length
			? O.createElement(
					'section',
					{ 'aria-label': `${p} ${K}`, tabIndex: -1 },
					P.map((L, F) => {
						var Y;
						let [le, He] = L.split('-');
						return O.createElement(
							'ol',
							{
								key: L,
								dir: w === 'auto' ? Vd() : w,
								tabIndex: -1,
								ref: U,
								className: s,
								'data-sonner-toaster': !0,
								'data-theme': A,
								'data-y-position': le,
								'data-x-position': He,
								style: {
									'--front-toast-height': `${((Y = T[0]) == null ? void 0 : Y.height) || 0}px`,
									'--offset': typeof l == 'number' ? `${l}px` : l || Xw,
									'--width': `${Jw}px`,
									'--gap': `${v}px`,
									...f,
								},
								onBlur: J => {
									j.current &&
										!J.currentTarget.contains(J.relatedTarget) &&
										((j.current = !1),
										C.current && (C.current.focus({ preventScroll: !0 }), (C.current = null)));
								},
								onFocus: J => {
									(J.target instanceof HTMLElement && J.target.dataset.dismissible === 'false') ||
										j.current ||
										((j.current = !0), (C.current = J.relatedTarget));
								},
								onMouseEnter: () => $(!0),
								onMouseMove: () => $(!0),
								onMouseLeave: () => {
									D || $(!1);
								},
								onPointerDown: J => {
									(J.target instanceof HTMLElement && J.target.dataset.dismissible === 'false') ||
										H(!0);
								},
								onPointerUp: () => H(!1),
							},
							E.filter(J => (!J.position && F === 0) || J.position === L).map((J, ut) => {
								var qt, Jt;
								return O.createElement(r1, {
									key: J.id,
									icons: h,
									index: ut,
									toast: J,
									defaultRichColors: u,
									duration: (qt = y == null ? void 0 : y.duration) != null ? qt : d,
									className: y == null ? void 0 : y.className,
									descriptionClassName: y == null ? void 0 : y.descriptionClassName,
									invert: t,
									visibleToasts: c,
									closeButton: (Jt = y == null ? void 0 : y.closeButton) != null ? Jt : i,
									interacting: D,
									position: L,
									style: y == null ? void 0 : y.style,
									unstyled: y == null ? void 0 : y.unstyled,
									classNames: y == null ? void 0 : y.classNames,
									cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
									actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
									removeToast: z,
									toasts: E.filter(Zt => Zt.position == J.position),
									heights: T.filter(Zt => Zt.position == J.position),
									setHeights: I,
									expandByDefault: o,
									gap: v,
									loadingIcon: S,
									expanded: _,
									pauseWhenPageIsHidden: g,
									cn: k,
								});
							})
						);
					})
				)
			: null
	);
};
const i1 = ({ ...e }) => {
		const { theme: t = 'system' } = Mw();
		return m.jsx(o1, {
			theme: t,
			className: 'toaster group',
			toastOptions: {
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
				},
			},
			...e,
		});
	},
	s1 = ['top', 'right', 'bottom', 'left'],
	jn = Math.min,
	Ye = Math.max,
	Cs = Math.round,
	Li = Math.floor,
	On = e => ({ x: e, y: e }),
	l1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	a1 = { start: 'end', end: 'start' };
function Qa(e, t, n) {
	return Ye(e, jn(t, n));
}
function Qt(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function Kt(e) {
	return e.split('-')[0];
}
function to(e) {
	return e.split('-')[1];
}
function tc(e) {
	return e === 'x' ? 'y' : 'x';
}
function nc(e) {
	return e === 'y' ? 'height' : 'width';
}
function _n(e) {
	return ['top', 'bottom'].includes(Kt(e)) ? 'y' : 'x';
}
function rc(e) {
	return tc(_n(e));
}
function u1(e, t, n) {
	n === void 0 && (n = !1);
	const r = to(e),
		o = rc(e),
		i = nc(o);
	let s =
		o === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
	return t.reference[i] > t.floating[i] && (s = bs(s)), [s, bs(s)];
}
function c1(e) {
	const t = bs(e);
	return [Ka(e), t, Ka(t)];
}
function Ka(e) {
	return e.replace(/start|end/g, t => a1[t]);
}
function d1(e, t, n) {
	const r = ['left', 'right'],
		o = ['right', 'left'],
		i = ['top', 'bottom'],
		s = ['bottom', 'top'];
	switch (e) {
		case 'top':
		case 'bottom':
			return n ? (t ? o : r) : t ? r : o;
		case 'left':
		case 'right':
			return t ? i : s;
		default:
			return [];
	}
}
function f1(e, t, n, r) {
	const o = to(e);
	let i = d1(Kt(e), n === 'start', r);
	return o && ((i = i.map(s => s + '-' + o)), t && (i = i.concat(i.map(Ka)))), i;
}
function bs(e) {
	return e.replace(/left|right|bottom|top/g, t => l1[t]);
}
function p1(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Tm(e) {
	return typeof e != 'number' ? p1(e) : { top: e, right: e, bottom: e, left: e };
}
function Ps(e) {
	const { x: t, y: n, width: r, height: o } = e;
	return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Wd(e, t, n) {
	let { reference: r, floating: o } = e;
	const i = _n(t),
		s = rc(t),
		l = nc(s),
		a = Kt(t),
		u = i === 'y',
		d = r.x + r.width / 2 - o.width / 2,
		f = r.y + r.height / 2 - o.height / 2,
		c = r[l] / 2 - o[l] / 2;
	let y;
	switch (a) {
		case 'top':
			y = { x: d, y: r.y - o.height };
			break;
		case 'bottom':
			y = { x: d, y: r.y + r.height };
			break;
		case 'right':
			y = { x: r.x + r.width, y: f };
			break;
		case 'left':
			y = { x: r.x - o.width, y: f };
			break;
		default:
			y = { x: r.x, y: r.y };
	}
	switch (to(t)) {
		case 'start':
			y[s] -= c * (n && u ? -1 : 1);
			break;
		case 'end':
			y[s] += c * (n && u ? -1 : 1);
			break;
	}
	return y;
}
const h1 = async (e, t, n) => {
	const { placement: r = 'bottom', strategy: o = 'absolute', middleware: i = [], platform: s } = n,
		l = i.filter(Boolean),
		a = await (s.isRTL == null ? void 0 : s.isRTL(t));
	let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
		{ x: d, y: f } = Wd(u, r, a),
		c = r,
		y = {},
		w = 0;
	for (let v = 0; v < l.length; v++) {
		const { name: S, fn: h } = l[v],
			{
				x: p,
				y: g,
				data: k,
				reset: E,
			} = await h({
				x: d,
				y: f,
				initialPlacement: r,
				placement: c,
				strategy: o,
				middlewareData: y,
				rects: u,
				platform: s,
				elements: { reference: e, floating: t },
			});
		(d = p ?? d),
			(f = g ?? f),
			(y = { ...y, [S]: { ...y[S], ...k } }),
			E &&
				w <= 50 &&
				(w++,
				typeof E == 'object' &&
					(E.placement && (c = E.placement),
					E.rects &&
						(u =
							E.rects === !0
								? await s.getElementRects({ reference: e, floating: t, strategy: o })
								: E.rects),
					({ x: d, y: f } = Wd(u, c, a))),
				(v = -1));
	}
	return { x: d, y: f, placement: c, strategy: o, middlewareData: y };
};
async function Yo(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
		{
			boundary: u = 'clippingAncestors',
			rootBoundary: d = 'viewport',
			elementContext: f = 'floating',
			altBoundary: c = !1,
			padding: y = 0,
		} = Qt(t, e),
		w = Tm(y),
		S = l[c ? (f === 'floating' ? 'reference' : 'floating') : f],
		h = Ps(
			await i.getClippingRect({
				element:
					(n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n
						? S
						: S.contextElement ||
							(await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating))),
				boundary: u,
				rootBoundary: d,
				strategy: a,
			})
		),
		p =
			f === 'floating'
				? { x: r, y: o, width: s.floating.width, height: s.floating.height }
				: s.reference,
		g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)),
		k = (await (i.isElement == null ? void 0 : i.isElement(g)))
			? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		E = Ps(
			i.convertOffsetParentRelativeRectToViewportRelativeRect
				? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: l,
						rect: p,
						offsetParent: g,
						strategy: a,
					})
				: p
		);
	return {
		top: (h.top - E.top + w.top) / k.y,
		bottom: (E.bottom - h.bottom + w.bottom) / k.y,
		left: (h.left - E.left + w.left) / k.x,
		right: (E.right - h.right + w.right) / k.x,
	};
}
const m1 = e => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const { x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a } = t,
				{ element: u, padding: d = 0 } = Qt(e, t) || {};
			if (u == null) return {};
			const f = Tm(d),
				c = { x: n, y: r },
				y = rc(o),
				w = nc(y),
				v = await s.getDimensions(u),
				S = y === 'y',
				h = S ? 'top' : 'left',
				p = S ? 'bottom' : 'right',
				g = S ? 'clientHeight' : 'clientWidth',
				k = i.reference[w] + i.reference[y] - c[y] - i.floating[w],
				E = c[y] - i.reference[y],
				b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
			let P = b ? b[g] : 0;
			(!P || !(await (s.isElement == null ? void 0 : s.isElement(b)))) &&
				(P = l.floating[g] || i.floating[w]);
			const T = k / 2 - E / 2,
				I = P / 2 - v[w] / 2 - 1,
				_ = jn(f[h], I),
				$ = jn(f[p], I),
				D = _,
				H = P - v[w] - $,
				A = P / 2 - v[w] / 2 + T,
				Q = Qa(D, A, H),
				U =
					!a.arrow &&
					to(o) != null &&
					A !== Q &&
					i.reference[w] / 2 - (A < D ? _ : $) - v[w] / 2 < 0,
				K = U ? (A < D ? A - D : A - H) : 0;
			return {
				[y]: c[y] + K,
				data: { [y]: Q, centerOffset: A - Q - K, ...(U && { alignmentOffset: K }) },
				reset: U,
			};
		},
	}),
	g1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var n, r;
					const {
							placement: o,
							middlewareData: i,
							rects: s,
							initialPlacement: l,
							platform: a,
							elements: u,
						} = t,
						{
							mainAxis: d = !0,
							crossAxis: f = !0,
							fallbackPlacements: c,
							fallbackStrategy: y = 'bestFit',
							fallbackAxisSideDirection: w = 'none',
							flipAlignment: v = !0,
							...S
						} = Qt(e, t);
					if ((n = i.arrow) != null && n.alignmentOffset) return {};
					const h = Kt(o),
						p = _n(l),
						g = Kt(l) === l,
						k = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
						E = c || (g || !v ? [bs(l)] : c1(l)),
						b = w !== 'none';
					!c && b && E.push(...f1(l, v, w, k));
					const P = [l, ...E],
						T = await Yo(t, S),
						I = [];
					let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
					if ((d && I.push(T[h]), f)) {
						const A = u1(o, s, k);
						I.push(T[A[0]], T[A[1]]);
					}
					if (((_ = [..._, { placement: o, overflows: I }]), !I.every(A => A <= 0))) {
						var $, D;
						const A = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
							Q = P[A];
						if (Q) return { data: { index: A, overflows: _ }, reset: { placement: Q } };
						let U =
							(D = _.filter(K => K.overflows[0] <= 0).sort(
								(K, C) => K.overflows[1] - C.overflows[1]
							)[0]) == null
								? void 0
								: D.placement;
						if (!U)
							switch (y) {
								case 'bestFit': {
									var H;
									const K =
										(H = _.filter(C => {
											if (b) {
												const j = _n(C.placement);
												return j === p || j === 'y';
											}
											return !0;
										})
											.map(C => [
												C.placement,
												C.overflows.filter(j => j > 0).reduce((j, z) => j + z, 0),
											])
											.sort((C, j) => C[1] - j[1])[0]) == null
											? void 0
											: H[0];
									K && (U = K);
									break;
								}
								case 'initialPlacement':
									U = l;
									break;
							}
						if (o !== U) return { reset: { placement: U } };
					}
					return {};
				},
			}
		);
	};
function Hd(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width,
	};
}
function Qd(e) {
	return s1.some(t => e[t] >= 0);
}
const v1 = function (e) {
	return (
		e === void 0 && (e = {}),
		{
			name: 'hide',
			options: e,
			async fn(t) {
				const { rects: n } = t,
					{ strategy: r = 'referenceHidden', ...o } = Qt(e, t);
				switch (r) {
					case 'referenceHidden': {
						const i = await Yo(t, { ...o, elementContext: 'reference' }),
							s = Hd(i, n.reference);
						return { data: { referenceHiddenOffsets: s, referenceHidden: Qd(s) } };
					}
					case 'escaped': {
						const i = await Yo(t, { ...o, altBoundary: !0 }),
							s = Hd(i, n.floating);
						return { data: { escapedOffsets: s, escaped: Qd(s) } };
					}
					default:
						return {};
				}
			},
		}
	);
};
async function y1(e, t) {
	const { placement: n, platform: r, elements: o } = e,
		i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
		s = Kt(n),
		l = to(n),
		a = _n(n) === 'y',
		u = ['left', 'top'].includes(s) ? -1 : 1,
		d = i && a ? -1 : 1,
		f = Qt(t, e);
	let {
		mainAxis: c,
		crossAxis: y,
		alignmentAxis: w,
	} = typeof f == 'number'
		? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
	return (
		l && typeof w == 'number' && (y = l === 'end' ? w * -1 : w),
		a ? { x: y * d, y: c * u } : { x: c * u, y: y * d }
	);
}
const x1 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var n, r;
					const { x: o, y: i, placement: s, middlewareData: l } = t,
						a = await y1(t, e);
					return s === ((n = l.offset) == null ? void 0 : n.placement) &&
						(r = l.arrow) != null &&
						r.alignmentOffset
						? {}
						: { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
				},
			}
		);
	},
	w1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: o } = t,
						{
							mainAxis: i = !0,
							crossAxis: s = !1,
							limiter: l = {
								fn: S => {
									let { x: h, y: p } = S;
									return { x: h, y: p };
								},
							},
							...a
						} = Qt(e, t),
						u = { x: n, y: r },
						d = await Yo(t, a),
						f = _n(Kt(o)),
						c = tc(f);
					let y = u[c],
						w = u[f];
					if (i) {
						const S = c === 'y' ? 'top' : 'left',
							h = c === 'y' ? 'bottom' : 'right',
							p = y + d[S],
							g = y - d[h];
						y = Qa(p, y, g);
					}
					if (s) {
						const S = f === 'y' ? 'top' : 'left',
							h = f === 'y' ? 'bottom' : 'right',
							p = w + d[S],
							g = w - d[h];
						w = Qa(p, w, g);
					}
					const v = l.fn({ ...t, [c]: y, [f]: w });
					return { ...v, data: { x: v.x - n, y: v.y - r, enabled: { [c]: i, [f]: s } } };
				},
			}
		);
	},
	S1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
						{ offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Qt(e, t),
						d = { x: n, y: r },
						f = _n(o),
						c = tc(f);
					let y = d[c],
						w = d[f];
					const v = Qt(l, t),
						S =
							typeof v == 'number'
								? { mainAxis: v, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...v };
					if (a) {
						const g = c === 'y' ? 'height' : 'width',
							k = i.reference[c] - i.floating[g] + S.mainAxis,
							E = i.reference[c] + i.reference[g] - S.mainAxis;
						y < k ? (y = k) : y > E && (y = E);
					}
					if (u) {
						var h, p;
						const g = c === 'y' ? 'width' : 'height',
							k = ['top', 'left'].includes(Kt(o)),
							E =
								i.reference[f] -
								i.floating[g] +
								((k && ((h = s.offset) == null ? void 0 : h[f])) || 0) +
								(k ? 0 : S.crossAxis),
							b =
								i.reference[f] +
								i.reference[g] +
								(k ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
								(k ? S.crossAxis : 0);
						w < E ? (w = E) : w > b && (w = b);
					}
					return { [c]: y, [f]: w };
				},
			}
		);
	},
	k1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					var n, r;
					const { placement: o, rects: i, platform: s, elements: l } = t,
						{ apply: a = () => {}, ...u } = Qt(e, t),
						d = await Yo(t, u),
						f = Kt(o),
						c = to(o),
						y = _n(o) === 'y',
						{ width: w, height: v } = i.floating;
					let S, h;
					f === 'top' || f === 'bottom'
						? ((S = f),
							(h =
								c === ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating))) ? 'start' : 'end')
									? 'left'
									: 'right'))
						: ((h = f), (S = c === 'end' ? 'top' : 'bottom'));
					const p = v - d.top - d.bottom,
						g = w - d.left - d.right,
						k = jn(v - d[S], p),
						E = jn(w - d[h], g),
						b = !t.middlewareData.shift;
					let P = k,
						T = E;
					if (
						((n = t.middlewareData.shift) != null && n.enabled.x && (T = g),
						(r = t.middlewareData.shift) != null && r.enabled.y && (P = p),
						b && !c)
					) {
						const _ = Ye(d.left, 0),
							$ = Ye(d.right, 0),
							D = Ye(d.top, 0),
							H = Ye(d.bottom, 0);
						y
							? (T = w - 2 * (_ !== 0 || $ !== 0 ? _ + $ : Ye(d.left, d.right)))
							: (P = v - 2 * (D !== 0 || H !== 0 ? D + H : Ye(d.top, d.bottom)));
					}
					await a({ ...t, availableWidth: T, availableHeight: P });
					const I = await s.getDimensions(l.floating);
					return w !== I.width || v !== I.height ? { reset: { rects: !0 } } : {};
				},
			}
		);
	};
function Ys() {
	return typeof window < 'u';
}
function no(e) {
	return Rm(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Je(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mt(e) {
	var t;
	return (t = (Rm(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement;
}
function Rm(e) {
	return Ys() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function wt(e) {
	return Ys() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function At(e) {
	return Ys() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function Kd(e) {
	return !Ys() || typeof ShadowRoot > 'u'
		? !1
		: e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function ui(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: o } = St(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o);
}
function E1(e) {
	return ['table', 'td', 'th'].includes(no(e));
}
function Xs(e) {
	return [':popover-open', ':modal'].some(t => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
function oc(e) {
	const t = ic(),
		n = wt(e) ? St(e) : e;
	return (
		n.transform !== 'none' ||
		n.perspective !== 'none' ||
		(n.containerType ? n.containerType !== 'normal' : !1) ||
		(!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
		(!t && (n.filter ? n.filter !== 'none' : !1)) ||
		['transform', 'perspective', 'filter'].some(r => (n.willChange || '').includes(r)) ||
		['paint', 'layout', 'strict', 'content'].some(r => (n.contain || '').includes(r))
	);
}
function C1(e) {
	let t = An(e);
	for (; At(t) && !Yr(t); ) {
		if (oc(t)) return t;
		if (Xs(t)) return null;
		t = An(t);
	}
	return null;
}
function ic() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Yr(e) {
	return ['html', 'body', '#document'].includes(no(e));
}
function St(e) {
	return Je(e).getComputedStyle(e);
}
function qs(e) {
	return wt(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function An(e) {
	if (no(e) === 'html') return e;
	const t = e.assignedSlot || e.parentNode || (Kd(e) && e.host) || Mt(e);
	return Kd(t) ? t.host : t;
}
function jm(e) {
	const t = An(e);
	return Yr(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : At(t) && ui(t) ? t : jm(t);
}
function Xo(e, t, n) {
	var r;
	t === void 0 && (t = []), n === void 0 && (n = !0);
	const o = jm(e),
		i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		s = Je(o);
	if (i) {
		const l = Ga(s);
		return t.concat(s, s.visualViewport || [], ui(o) ? o : [], l && n ? Xo(l) : []);
	}
	return t.concat(o, Xo(o, [], n));
}
function Ga(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Om(e) {
	const t = St(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const o = At(e),
		i = o ? e.offsetWidth : n,
		s = o ? e.offsetHeight : r,
		l = Cs(n) !== i || Cs(r) !== s;
	return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function sc(e) {
	return wt(e) ? e : e.contextElement;
}
function _r(e) {
	const t = sc(e);
	if (!At(t)) return On(1);
	const n = t.getBoundingClientRect(),
		{ width: r, height: o, $: i } = Om(t);
	let s = (i ? Cs(n.width) : n.width) / r,
		l = (i ? Cs(n.height) : n.height) / o;
	return (
		(!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l }
	);
}
const b1 = On(0);
function _m(e) {
	const t = Je(e);
	return !ic() || !t.visualViewport
		? b1
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function P1(e, t, n) {
	return t === void 0 && (t = !1), !n || (t && n !== Je(e)) ? !1 : t;
}
function nr(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const o = e.getBoundingClientRect(),
		i = sc(e);
	let s = On(1);
	t && (r ? wt(r) && (s = _r(r)) : (s = _r(e)));
	const l = P1(i, n, r) ? _m(i) : On(0);
	let a = (o.left + l.x) / s.x,
		u = (o.top + l.y) / s.y,
		d = o.width / s.x,
		f = o.height / s.y;
	if (i) {
		const c = Je(i),
			y = r && wt(r) ? Je(r) : r;
		let w = c,
			v = Ga(w);
		for (; v && r && y !== w; ) {
			const S = _r(v),
				h = v.getBoundingClientRect(),
				p = St(v),
				g = h.left + (v.clientLeft + parseFloat(p.paddingLeft)) * S.x,
				k = h.top + (v.clientTop + parseFloat(p.paddingTop)) * S.y;
			(a *= S.x), (u *= S.y), (d *= S.x), (f *= S.y), (a += g), (u += k), (w = Je(v)), (v = Ga(w));
		}
	}
	return Ps({ width: d, height: f, x: a, y: u });
}
function N1(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
	const i = o === 'fixed',
		s = Mt(r),
		l = t ? Xs(t.floating) : !1;
	if (r === s || (l && i)) return n;
	let a = { scrollLeft: 0, scrollTop: 0 },
		u = On(1);
	const d = On(0),
		f = At(r);
	if ((f || (!f && !i)) && ((no(r) !== 'body' || ui(s)) && (a = qs(r)), At(r))) {
		const c = nr(r);
		(u = _r(r)), (d.x = c.x + r.clientLeft), (d.y = c.y + r.clientTop);
	}
	return {
		width: n.width * u.x,
		height: n.height * u.y,
		x: n.x * u.x - a.scrollLeft * u.x + d.x,
		y: n.y * u.y - a.scrollTop * u.y + d.y,
	};
}
function T1(e) {
	return Array.from(e.getClientRects());
}
function Ya(e, t) {
	const n = qs(e).scrollLeft;
	return t ? t.left + n : nr(Mt(e)).left + n;
}
function R1(e) {
	const t = Mt(e),
		n = qs(e),
		r = e.ownerDocument.body,
		o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let s = -n.scrollLeft + Ya(e);
	const l = -n.scrollTop;
	return (
		St(r).direction === 'rtl' && (s += Ye(t.clientWidth, r.clientWidth) - o),
		{ width: o, height: i, x: s, y: l }
	);
}
function j1(e, t) {
	const n = Je(e),
		r = Mt(e),
		o = n.visualViewport;
	let i = r.clientWidth,
		s = r.clientHeight,
		l = 0,
		a = 0;
	if (o) {
		(i = o.width), (s = o.height);
		const u = ic();
		(!u || (u && t === 'fixed')) && ((l = o.offsetLeft), (a = o.offsetTop));
	}
	return { width: i, height: s, x: l, y: a };
}
function O1(e, t) {
	const n = nr(e, !0, t === 'fixed'),
		r = n.top + e.clientTop,
		o = n.left + e.clientLeft,
		i = At(e) ? _r(e) : On(1),
		s = e.clientWidth * i.x,
		l = e.clientHeight * i.y,
		a = o * i.x,
		u = r * i.y;
	return { width: s, height: l, x: a, y: u };
}
function Gd(e, t, n) {
	let r;
	if (t === 'viewport') r = j1(e, n);
	else if (t === 'document') r = R1(Mt(e));
	else if (wt(t)) r = O1(t, n);
	else {
		const o = _m(e);
		r = { ...t, x: t.x - o.x, y: t.y - o.y };
	}
	return Ps(r);
}
function Am(e, t) {
	const n = An(e);
	return n === t || !wt(n) || Yr(n) ? !1 : St(n).position === 'fixed' || Am(n, t);
}
function _1(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = Xo(e, [], !1).filter(l => wt(l) && no(l) !== 'body'),
		o = null;
	const i = St(e).position === 'fixed';
	let s = i ? An(e) : e;
	for (; wt(s) && !Yr(s); ) {
		const l = St(s),
			a = oc(s);
		!a && l.position === 'fixed' && (o = null),
			(
				i
					? !a && !o
					: (!a && l.position === 'static' && !!o && ['absolute', 'fixed'].includes(o.position)) ||
						(ui(s) && !a && Am(e, s))
			)
				? (r = r.filter(d => d !== s))
				: (o = l),
			(s = An(s));
	}
	return t.set(e, r), r;
}
function A1(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
	const s = [...(n === 'clippingAncestors' ? (Xs(t) ? [] : _1(t, this._c)) : [].concat(n)), r],
		l = s[0],
		a = s.reduce(
			(u, d) => {
				const f = Gd(t, d, o);
				return (
					(u.top = Ye(f.top, u.top)),
					(u.right = jn(f.right, u.right)),
					(u.bottom = jn(f.bottom, u.bottom)),
					(u.left = Ye(f.left, u.left)),
					u
				);
			},
			Gd(t, l, o)
		);
	return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function M1(e) {
	const { width: t, height: n } = Om(e);
	return { width: t, height: n };
}
function L1(e, t, n) {
	const r = At(t),
		o = Mt(t),
		i = n === 'fixed',
		s = nr(e, !0, i, t);
	let l = { scrollLeft: 0, scrollTop: 0 };
	const a = On(0);
	if (r || (!r && !i))
		if (((no(t) !== 'body' || ui(o)) && (l = qs(t)), r)) {
			const y = nr(t, !0, i, t);
			(a.x = y.x + t.clientLeft), (a.y = y.y + t.clientTop);
		} else o && (a.x = Ya(o));
	let u = 0,
		d = 0;
	if (o && !r && !i) {
		const y = o.getBoundingClientRect();
		(d = y.top + l.scrollTop), (u = y.left + l.scrollLeft - Ya(o, y));
	}
	const f = s.left + l.scrollLeft - a.x - u,
		c = s.top + l.scrollTop - a.y - d;
	return { x: f, y: c, width: s.width, height: s.height };
}
function Fl(e) {
	return St(e).position === 'static';
}
function Yd(e, t) {
	if (!At(e) || St(e).position === 'fixed') return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Mt(e) === n && (n = n.ownerDocument.body), n;
}
function Mm(e, t) {
	const n = Je(e);
	if (Xs(e)) return n;
	if (!At(e)) {
		let o = An(e);
		for (; o && !Yr(o); ) {
			if (wt(o) && !Fl(o)) return o;
			o = An(o);
		}
		return n;
	}
	let r = Yd(e, t);
	for (; r && E1(r) && Fl(r); ) r = Yd(r, t);
	return r && Yr(r) && Fl(r) && !oc(r) ? n : r || C1(e) || n;
}
const I1 = async function (e) {
	const t = this.getOffsetParent || Mm,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: L1(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: r.width, height: r.height },
	};
};
function D1(e) {
	return St(e).direction === 'rtl';
}
const z1 = {
	convertOffsetParentRelativeRectToViewportRelativeRect: N1,
	getDocumentElement: Mt,
	getClippingRect: A1,
	getOffsetParent: Mm,
	getElementRects: I1,
	getClientRects: T1,
	getDimensions: M1,
	getScale: _r,
	isElement: wt,
	isRTL: D1,
};
function F1(e, t) {
	let n = null,
		r;
	const o = Mt(e);
	function i() {
		var l;
		clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
	}
	function s(l, a) {
		l === void 0 && (l = !1), a === void 0 && (a = 1), i();
		const { left: u, top: d, width: f, height: c } = e.getBoundingClientRect();
		if ((l || t(), !f || !c)) return;
		const y = Li(d),
			w = Li(o.clientWidth - (u + f)),
			v = Li(o.clientHeight - (d + c)),
			S = Li(u),
			p = {
				rootMargin: -y + 'px ' + -w + 'px ' + -v + 'px ' + -S + 'px',
				threshold: Ye(0, jn(1, a)) || 1,
			};
		let g = !0;
		function k(E) {
			const b = E[0].intersectionRatio;
			if (b !== a) {
				if (!g) return s();
				b
					? s(!1, b)
					: (r = setTimeout(() => {
							s(!1, 1e-7);
						}, 1e3));
			}
			g = !1;
		}
		try {
			n = new IntersectionObserver(k, { ...p, root: o.ownerDocument });
		} catch {
			n = new IntersectionObserver(k, p);
		}
		n.observe(e);
	}
	return s(!0), i;
}
function $1(e, t, n, r) {
	r === void 0 && (r = {});
	const {
			ancestorScroll: o = !0,
			ancestorResize: i = !0,
			elementResize: s = typeof ResizeObserver == 'function',
			layoutShift: l = typeof IntersectionObserver == 'function',
			animationFrame: a = !1,
		} = r,
		u = sc(e),
		d = o || i ? [...(u ? Xo(u) : []), ...Xo(t)] : [];
	d.forEach(h => {
		o && h.addEventListener('scroll', n, { passive: !0 }), i && h.addEventListener('resize', n);
	});
	const f = u && l ? F1(u, n) : null;
	let c = -1,
		y = null;
	s &&
		((y = new ResizeObserver(h => {
			let [p] = h;
			p &&
				p.target === u &&
				y &&
				(y.unobserve(t),
				cancelAnimationFrame(c),
				(c = requestAnimationFrame(() => {
					var g;
					(g = y) == null || g.observe(t);
				}))),
				n();
		})),
		u && !a && y.observe(u),
		y.observe(t));
	let w,
		v = a ? nr(e) : null;
	a && S();
	function S() {
		const h = nr(e);
		v && (h.x !== v.x || h.y !== v.y || h.width !== v.width || h.height !== v.height) && n(),
			(v = h),
			(w = requestAnimationFrame(S));
	}
	return (
		n(),
		() => {
			var h;
			d.forEach(p => {
				o && p.removeEventListener('scroll', n), i && p.removeEventListener('resize', n);
			}),
				f == null || f(),
				(h = y) == null || h.disconnect(),
				(y = null),
				a && cancelAnimationFrame(w);
		}
	);
}
const U1 = x1,
	B1 = w1,
	V1 = g1,
	W1 = k1,
	H1 = v1,
	Xd = m1,
	Q1 = S1,
	K1 = (e, t, n) => {
		const r = new Map(),
			o = { platform: z1, ...n },
			i = { ...o.platform, _c: r };
		return h1(e, t, { ...o, platform: i });
	};
var qi = typeof document < 'u' ? x.useLayoutEffect : x.useEffect;
function Ns(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == 'function' && e.toString() === t.toString()) return !0;
	let n, r, o;
	if (e && t && typeof e == 'object') {
		if (Array.isArray(e)) {
			if (((n = e.length), n !== t.length)) return !1;
			for (r = n; r-- !== 0; ) if (!Ns(e[r], t[r])) return !1;
			return !0;
		}
		if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
		for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
		for (r = n; r-- !== 0; ) {
			const i = o[r];
			if (!(i === '_owner' && e.$$typeof) && !Ns(e[i], t[i])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Lm(e) {
	return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qd(e, t) {
	const n = Lm(e);
	return Math.round(t * n) / n;
}
function $l(e) {
	const t = x.useRef(e);
	return (
		qi(() => {
			t.current = e;
		}),
		t
	);
}
function G1(e) {
	e === void 0 && (e = {});
	const {
			placement: t = 'bottom',
			strategy: n = 'absolute',
			middleware: r = [],
			platform: o,
			elements: { reference: i, floating: s } = {},
			transform: l = !0,
			whileElementsMounted: a,
			open: u,
		} = e,
		[d, f] = x.useState({
			x: 0,
			y: 0,
			strategy: n,
			placement: t,
			middlewareData: {},
			isPositioned: !1,
		}),
		[c, y] = x.useState(r);
	Ns(c, r) || y(r);
	const [w, v] = x.useState(null),
		[S, h] = x.useState(null),
		p = x.useCallback(C => {
			C !== b.current && ((b.current = C), v(C));
		}, []),
		g = x.useCallback(C => {
			C !== P.current && ((P.current = C), h(C));
		}, []),
		k = i || w,
		E = s || S,
		b = x.useRef(null),
		P = x.useRef(null),
		T = x.useRef(d),
		I = a != null,
		_ = $l(a),
		$ = $l(o),
		D = $l(u),
		H = x.useCallback(() => {
			if (!b.current || !P.current) return;
			const C = { placement: t, strategy: n, middleware: c };
			$.current && (C.platform = $.current),
				K1(b.current, P.current, C).then(j => {
					const z = { ...j, isPositioned: D.current !== !1 };
					A.current &&
						!Ns(T.current, z) &&
						((T.current = z),
						si.flushSync(() => {
							f(z);
						}));
				});
		}, [c, t, n, $, D]);
	qi(() => {
		u === !1 &&
			T.current.isPositioned &&
			((T.current.isPositioned = !1), f(C => ({ ...C, isPositioned: !1 })));
	}, [u]);
	const A = x.useRef(!1);
	qi(
		() => (
			(A.current = !0),
			() => {
				A.current = !1;
			}
		),
		[]
	),
		qi(() => {
			if ((k && (b.current = k), E && (P.current = E), k && E)) {
				if (_.current) return _.current(k, E, H);
				H();
			}
		}, [k, E, H, _, I]);
	const Q = x.useMemo(
			() => ({ reference: b, floating: P, setReference: p, setFloating: g }),
			[p, g]
		),
		U = x.useMemo(() => ({ reference: k, floating: E }), [k, E]),
		K = x.useMemo(() => {
			const C = { position: n, left: 0, top: 0 };
			if (!U.floating) return C;
			const j = qd(U.floating, d.x),
				z = qd(U.floating, d.y);
			return l
				? {
						...C,
						transform: 'translate(' + j + 'px, ' + z + 'px)',
						...(Lm(U.floating) >= 1.5 && { willChange: 'transform' }),
					}
				: { position: n, left: j, top: z };
		}, [n, l, U.floating, d.x, d.y]);
	return x.useMemo(
		() => ({ ...d, update: H, refs: Q, elements: U, floatingStyles: K }),
		[d, H, Q, U, K]
	);
}
const Y1 = e => {
		function t(n) {
			return {}.hasOwnProperty.call(n, 'current');
		}
		return {
			name: 'arrow',
			options: e,
			fn(n) {
				const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
				return r && t(r)
					? r.current != null
						? Xd({ element: r.current, padding: o }).fn(n)
						: {}
					: r
						? Xd({ element: r, padding: o }).fn(n)
						: {};
			},
		};
	},
	X1 = (e, t) => ({ ...U1(e), options: [e, t] }),
	q1 = (e, t) => ({ ...B1(e), options: [e, t] }),
	J1 = (e, t) => ({ ...Q1(e), options: [e, t] }),
	Z1 = (e, t) => ({ ...V1(e), options: [e, t] }),
	eS = (e, t) => ({ ...W1(e), options: [e, t] }),
	tS = (e, t) => ({ ...H1(e), options: [e, t] }),
	nS = (e, t) => ({ ...Y1(e), options: [e, t] });
var rS = 'Arrow',
	Im = x.forwardRef((e, t) => {
		const { children: n, width: r = 10, height: o = 5, ...i } = e;
		return m.jsx(We.svg, {
			...i,
			ref: t,
			width: r,
			height: o,
			viewBox: '0 0 30 10',
			preserveAspectRatio: 'none',
			children: e.asChild ? n : m.jsx('polygon', { points: '0,0 30,0 15,10' }),
		});
	});
Im.displayName = rS;
var oS = Im;
function iS(e, t = []) {
	let n = [];
	function r(i, s) {
		const l = x.createContext(s),
			a = n.length;
		n = [...n, s];
		function u(f) {
			const { scope: c, children: y, ...w } = f,
				v = (c == null ? void 0 : c[e][a]) || l,
				S = x.useMemo(() => w, Object.values(w));
			return m.jsx(v.Provider, { value: S, children: y });
		}
		function d(f, c) {
			const y = (c == null ? void 0 : c[e][a]) || l,
				w = x.useContext(y);
			if (w) return w;
			if (s !== void 0) return s;
			throw new Error(`\`${f}\` must be used within \`${i}\``);
		}
		return (u.displayName = i + 'Provider'), [u, d];
	}
	const o = () => {
		const i = n.map(s => x.createContext(s));
		return function (l) {
			const a = (l == null ? void 0 : l[e]) || i;
			return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
		};
	};
	return (o.scopeName = e), [r, sS(o, ...t)];
}
function sS(...e) {
	const t = e[0];
	if (e.length === 1) return t;
	const n = () => {
		const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName }));
		return function (i) {
			const s = r.reduce((l, { useScope: a, scopeName: u }) => {
				const f = a(i)[`__scope${u}`];
				return { ...l, ...f };
			}, {});
			return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
		};
	};
	return (n.scopeName = t.scopeName), n;
}
function lS(e) {
	const [t, n] = x.useState(void 0);
	return (
		tr(() => {
			if (e) {
				n({ width: e.offsetWidth, height: e.offsetHeight });
				const r = new ResizeObserver(o => {
					if (!Array.isArray(o) || !o.length) return;
					const i = o[0];
					let s, l;
					if ('borderBoxSize' in i) {
						const a = i.borderBoxSize,
							u = Array.isArray(a) ? a[0] : a;
						(s = u.inlineSize), (l = u.blockSize);
					} else (s = e.offsetWidth), (l = e.offsetHeight);
					n({ width: s, height: l });
				});
				return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
			} else n(void 0);
		}, [e]),
		t
	);
}
var Dm = 'Popper',
	[zm, Fm] = iS(Dm),
	[hk, $m] = zm(Dm),
	Um = 'PopperAnchor',
	Bm = x.forwardRef((e, t) => {
		const { __scopePopper: n, virtualRef: r, ...o } = e,
			i = $m(Um, n),
			s = x.useRef(null),
			l = xt(t, s);
		return (
			x.useEffect(() => {
				i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
			}),
			r ? null : m.jsx(We.div, { ...o, ref: l })
		);
	});
Bm.displayName = Um;
var lc = 'PopperContent',
	[aS, uS] = zm(lc),
	Vm = x.forwardRef((e, t) => {
		var ut, qt, Jt, Zt, ci, ar;
		const {
				__scopePopper: n,
				side: r = 'bottom',
				sideOffset: o = 0,
				align: i = 'center',
				alignOffset: s = 0,
				arrowPadding: l = 0,
				avoidCollisions: a = !0,
				collisionBoundary: u = [],
				collisionPadding: d = 0,
				sticky: f = 'partial',
				hideWhenDetached: c = !1,
				updatePositionStrategy: y = 'optimized',
				onPlaced: w,
				...v
			} = e,
			S = $m(lc, n),
			[h, p] = x.useState(null),
			g = xt(t, Dn => p(Dn)),
			[k, E] = x.useState(null),
			b = lS(k),
			P = (b == null ? void 0 : b.width) ?? 0,
			T = (b == null ? void 0 : b.height) ?? 0,
			I = r + (i !== 'center' ? '-' + i : ''),
			_ = typeof d == 'number' ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
			$ = Array.isArray(u) ? u : [u],
			D = $.length > 0,
			H = { padding: _, boundary: $.filter(dS), altBoundary: D },
			{
				refs: A,
				floatingStyles: Q,
				placement: U,
				isPositioned: K,
				middlewareData: C,
			} = G1({
				strategy: 'fixed',
				placement: I,
				whileElementsMounted: (...Dn) => $1(...Dn, { animationFrame: y === 'always' }),
				elements: { reference: S.anchor },
				middleware: [
					X1({ mainAxis: o + T, alignmentAxis: s }),
					a && q1({ mainAxis: !0, crossAxis: !1, limiter: f === 'partial' ? J1() : void 0, ...H }),
					a && Z1({ ...H }),
					eS({
						...H,
						apply: ({ elements: Dn, rects: ro, availableWidth: di, availableHeight: en }) => {
							const { width: nl, height: rl } = ro.reference,
								ke = Dn.floating.style;
							ke.setProperty('--radix-popper-available-width', `${di}px`),
								ke.setProperty('--radix-popper-available-height', `${en}px`),
								ke.setProperty('--radix-popper-anchor-width', `${nl}px`),
								ke.setProperty('--radix-popper-anchor-height', `${rl}px`);
						},
					}),
					k && nS({ element: k, padding: l }),
					fS({ arrowWidth: P, arrowHeight: T }),
					c && tS({ strategy: 'referenceHidden', ...H }),
				],
			}),
			[j, z] = Qm(U),
			L = _t(w);
		tr(() => {
			K && (L == null || L());
		}, [K, L]);
		const F = (ut = C.arrow) == null ? void 0 : ut.x,
			Y = (qt = C.arrow) == null ? void 0 : qt.y,
			le = ((Jt = C.arrow) == null ? void 0 : Jt.centerOffset) !== 0,
			[He, J] = x.useState();
		return (
			tr(() => {
				h && J(window.getComputedStyle(h).zIndex);
			}, [h]),
			m.jsx('div', {
				ref: A.setFloating,
				'data-radix-popper-content-wrapper': '',
				style: {
					...Q,
					transform: K ? Q.transform : 'translate(0, -200%)',
					minWidth: 'max-content',
					zIndex: He,
					'--radix-popper-transform-origin': [
						(Zt = C.transformOrigin) == null ? void 0 : Zt.x,
						(ci = C.transformOrigin) == null ? void 0 : ci.y,
					].join(' '),
					...(((ar = C.hide) == null ? void 0 : ar.referenceHidden) && {
						visibility: 'hidden',
						pointerEvents: 'none',
					}),
				},
				dir: e.dir,
				children: m.jsx(aS, {
					scope: n,
					placedSide: j,
					onArrowChange: E,
					arrowX: F,
					arrowY: Y,
					shouldHideArrow: le,
					children: m.jsx(We.div, {
						'data-side': j,
						'data-align': z,
						...v,
						ref: g,
						style: { ...v.style, animation: K ? void 0 : 'none' },
					}),
				}),
			})
		);
	});
Vm.displayName = lc;
var Wm = 'PopperArrow',
	cS = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
	Hm = x.forwardRef(function (t, n) {
		const { __scopePopper: r, ...o } = t,
			i = uS(Wm, r),
			s = cS[i.placedSide];
		return m.jsx('span', {
			ref: i.onArrowChange,
			style: {
				position: 'absolute',
				left: i.arrowX,
				top: i.arrowY,
				[s]: 0,
				transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
					i.placedSide
				],
				transform: {
					top: 'translateY(100%)',
					right: 'translateY(50%) rotate(90deg) translateX(-50%)',
					bottom: 'rotate(180deg)',
					left: 'translateY(50%) rotate(-90deg) translateX(50%)',
				}[i.placedSide],
				visibility: i.shouldHideArrow ? 'hidden' : void 0,
			},
			children: m.jsx(oS, { ...o, ref: n, style: { ...o.style, display: 'block' } }),
		});
	});
Hm.displayName = Wm;
function dS(e) {
	return e !== null;
}
var fS = e => ({
	name: 'transformOrigin',
	options: e,
	fn(t) {
		var S, h, p;
		const { placement: n, rects: r, middlewareData: o } = t,
			s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0,
			l = s ? 0 : e.arrowWidth,
			a = s ? 0 : e.arrowHeight,
			[u, d] = Qm(n),
			f = { start: '0%', center: '50%', end: '100%' }[d],
			c = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
			y = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
		let w = '',
			v = '';
		return (
			u === 'bottom'
				? ((w = s ? f : `${c}px`), (v = `${-a}px`))
				: u === 'top'
					? ((w = s ? f : `${c}px`), (v = `${r.floating.height + a}px`))
					: u === 'right'
						? ((w = `${-a}px`), (v = s ? f : `${y}px`))
						: u === 'left' && ((w = `${r.floating.width + a}px`), (v = s ? f : `${y}px`)),
			{ data: { x: w, y: v } }
		);
	},
});
function Qm(e) {
	const [t, n = 'center'] = e.split('-');
	return [t, n];
}
var pS = Bm,
	hS = Vm,
	mS = Hm,
	[Js, mk] = Vh('Tooltip', [Fm]),
	ac = Fm(),
	Km = 'TooltipProvider',
	gS = 700,
	Jd = 'tooltip.open',
	[vS, Gm] = Js(Km),
	Ym = e => {
		const {
				__scopeTooltip: t,
				delayDuration: n = gS,
				skipDelayDuration: r = 300,
				disableHoverableContent: o = !1,
				children: i,
			} = e,
			[s, l] = x.useState(!0),
			a = x.useRef(!1),
			u = x.useRef(0);
		return (
			x.useEffect(() => {
				const d = u.current;
				return () => window.clearTimeout(d);
			}, []),
			m.jsx(vS, {
				scope: t,
				isOpenDelayed: s,
				delayDuration: n,
				onOpen: x.useCallback(() => {
					window.clearTimeout(u.current), l(!1);
				}, []),
				onClose: x.useCallback(() => {
					window.clearTimeout(u.current), (u.current = window.setTimeout(() => l(!0), r));
				}, [r]),
				isPointerInTransitRef: a,
				onPointerInTransitChange: x.useCallback(d => {
					a.current = d;
				}, []),
				disableHoverableContent: o,
				children: i,
			})
		);
	};
Ym.displayName = Km;
var Xm = 'Tooltip',
	[gk, Zs] = Js(Xm),
	Xa = 'TooltipTrigger',
	yS = x.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			o = Zs(Xa, n),
			i = Gm(Xa, n),
			s = ac(n),
			l = x.useRef(null),
			a = xt(t, l, o.onTriggerChange),
			u = x.useRef(!1),
			d = x.useRef(!1),
			f = x.useCallback(() => (u.current = !1), []);
		return (
			x.useEffect(() => () => document.removeEventListener('pointerup', f), [f]),
			m.jsx(pS, {
				asChild: !0,
				...s,
				children: m.jsx(We.button, {
					'aria-describedby': o.open ? o.contentId : void 0,
					'data-state': o.stateAttribute,
					...r,
					ref: a,
					onPointerMove: ye(e.onPointerMove, c => {
						c.pointerType !== 'touch' &&
							!d.current &&
							!i.isPointerInTransitRef.current &&
							(o.onTriggerEnter(), (d.current = !0));
					}),
					onPointerLeave: ye(e.onPointerLeave, () => {
						o.onTriggerLeave(), (d.current = !1);
					}),
					onPointerDown: ye(e.onPointerDown, () => {
						(u.current = !0), document.addEventListener('pointerup', f, { once: !0 });
					}),
					onFocus: ye(e.onFocus, () => {
						u.current || o.onOpen();
					}),
					onBlur: ye(e.onBlur, o.onClose),
					onClick: ye(e.onClick, o.onClose),
				}),
			})
		);
	});
yS.displayName = Xa;
var xS = 'TooltipPortal',
	[vk, wS] = Js(xS, { forceMount: void 0 }),
	Xr = 'TooltipContent',
	qm = x.forwardRef((e, t) => {
		const n = wS(Xr, e.__scopeTooltip),
			{ forceMount: r = n.forceMount, side: o = 'top', ...i } = e,
			s = Zs(Xr, e.__scopeTooltip);
		return m.jsx(Xu, {
			present: r || s.open,
			children: s.disableHoverableContent
				? m.jsx(Jm, { side: o, ...i, ref: t })
				: m.jsx(SS, { side: o, ...i, ref: t }),
		});
	}),
	SS = x.forwardRef((e, t) => {
		const n = Zs(Xr, e.__scopeTooltip),
			r = Gm(Xr, e.__scopeTooltip),
			o = x.useRef(null),
			i = xt(t, o),
			[s, l] = x.useState(null),
			{ trigger: a, onClose: u } = n,
			d = o.current,
			{ onPointerInTransitChange: f } = r,
			c = x.useCallback(() => {
				l(null), f(!1);
			}, [f]),
			y = x.useCallback(
				(w, v) => {
					const S = w.currentTarget,
						h = { x: w.clientX, y: w.clientY },
						p = bS(h, S.getBoundingClientRect()),
						g = PS(h, p),
						k = NS(v.getBoundingClientRect()),
						E = RS([...g, ...k]);
					l(E), f(!0);
				},
				[f]
			);
		return (
			x.useEffect(() => () => c(), [c]),
			x.useEffect(() => {
				if (a && d) {
					const w = S => y(S, d),
						v = S => y(S, a);
					return (
						a.addEventListener('pointerleave', w),
						d.addEventListener('pointerleave', v),
						() => {
							a.removeEventListener('pointerleave', w), d.removeEventListener('pointerleave', v);
						}
					);
				}
			}, [a, d, y, c]),
			x.useEffect(() => {
				if (s) {
					const w = v => {
						const S = v.target,
							h = { x: v.clientX, y: v.clientY },
							p = (a == null ? void 0 : a.contains(S)) || (d == null ? void 0 : d.contains(S)),
							g = !TS(h, s);
						p ? c() : g && (c(), u());
					};
					return (
						document.addEventListener('pointermove', w),
						() => document.removeEventListener('pointermove', w)
					);
				}
			}, [a, d, s, u, c]),
			m.jsx(Jm, { ...e, ref: i })
		);
	}),
	[kS, ES] = Js(Xm, { isInside: !1 }),
	Jm = x.forwardRef((e, t) => {
		const {
				__scopeTooltip: n,
				children: r,
				'aria-label': o,
				onEscapeKeyDown: i,
				onPointerDownOutside: s,
				...l
			} = e,
			a = Zs(Xr, n),
			u = ac(n),
			{ onClose: d } = a;
		return (
			x.useEffect(
				() => (document.addEventListener(Jd, d), () => document.removeEventListener(Jd, d)),
				[d]
			),
			x.useEffect(() => {
				if (a.trigger) {
					const f = c => {
						const y = c.target;
						y != null && y.contains(a.trigger) && d();
					};
					return (
						window.addEventListener('scroll', f, { capture: !0 }),
						() => window.removeEventListener('scroll', f, { capture: !0 })
					);
				}
			}, [a.trigger, d]),
			m.jsx(Yu, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: i,
				onPointerDownOutside: s,
				onFocusOutside: f => f.preventDefault(),
				onDismiss: d,
				children: m.jsxs(hS, {
					'data-state': a.stateAttribute,
					...u,
					...l,
					ref: t,
					style: {
						...l.style,
						'--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
						'--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
						'--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
						'--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
						'--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
					},
					children: [
						m.jsx(Bh, { children: r }),
						m.jsx(kS, {
							scope: n,
							isInside: !0,
							children: m.jsx(xx, { id: a.contentId, role: 'tooltip', children: o || r }),
						}),
					],
				}),
			})
		);
	});
qm.displayName = Xr;
var Zm = 'TooltipArrow',
	CS = x.forwardRef((e, t) => {
		const { __scopeTooltip: n, ...r } = e,
			o = ac(n);
		return ES(Zm, n).isInside ? null : m.jsx(mS, { ...o, ...r, ref: t });
	});
CS.displayName = Zm;
function bS(e, t) {
	const n = Math.abs(t.top - e.y),
		r = Math.abs(t.bottom - e.y),
		o = Math.abs(t.right - e.x),
		i = Math.abs(t.left - e.x);
	switch (Math.min(n, r, o, i)) {
		case i:
			return 'left';
		case o:
			return 'right';
		case n:
			return 'top';
		case r:
			return 'bottom';
		default:
			throw new Error('unreachable');
	}
}
function PS(e, t, n = 5) {
	const r = [];
	switch (t) {
		case 'top':
			r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
			break;
		case 'bottom':
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
			break;
		case 'left':
			r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
			break;
		case 'right':
			r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
			break;
	}
	return r;
}
function NS(e) {
	const { top: t, right: n, bottom: r, left: o } = e;
	return [
		{ x: o, y: t },
		{ x: n, y: t },
		{ x: n, y: r },
		{ x: o, y: r },
	];
}
function TS(e, t) {
	const { x: n, y: r } = e;
	let o = !1;
	for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
		const l = t[i].x,
			a = t[i].y,
			u = t[s].x,
			d = t[s].y;
		a > r != d > r && n < ((u - l) * (r - a)) / (d - a) + l && (o = !o);
	}
	return o;
}
function RS(e) {
	const t = e.slice();
	return (
		t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), jS(t)
	);
}
function jS(e) {
	if (e.length <= 1) return e.slice();
	const t = [];
	for (let r = 0; r < e.length; r++) {
		const o = e[r];
		for (; t.length >= 2; ) {
			const i = t[t.length - 1],
				s = t[t.length - 2];
			if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
			else break;
		}
		t.push(o);
	}
	t.pop();
	const n = [];
	for (let r = e.length - 1; r >= 0; r--) {
		const o = e[r];
		for (; n.length >= 2; ) {
			const i = n[n.length - 1],
				s = n[n.length - 2];
			if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
			else break;
		}
		n.push(o);
	}
	return (
		n.pop(),
		t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
	);
}
var OS = Ym,
	eg = qm;
const _S = OS,
	AS = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
		m.jsx(eg, {
			ref: r,
			sideOffset: t,
			className: Xt(
				'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				e
			),
			...n,
		})
	);
AS.displayName = eg.displayName;
var el = class {
		constructor() {
			(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					this.listeners.delete(e), this.onUnsubscribe();
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	tl = typeof window > 'u' || 'Deno' in globalThis;
function ft() {}
function MS(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function LS(e) {
	return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function IS(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function Zd(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function DS(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function ef(e, t) {
	const { type: n = 'all', exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l } = e;
	if (s) {
		if (r) {
			if (t.queryHash !== uc(s, t.options)) return !1;
		} else if (!Jo(t.queryKey, s)) return !1;
	}
	if (n !== 'all') {
		const a = t.isActive();
		if ((n === 'active' && !a) || (n === 'inactive' && a)) return !1;
	}
	return !(
		(typeof l == 'boolean' && t.isStale() !== l) ||
		(o && o !== t.state.fetchStatus) ||
		(i && !i(t))
	);
}
function tf(e, t) {
	const { exact: n, status: r, predicate: o, mutationKey: i } = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (qo(t.options.mutationKey) !== qo(i)) return !1;
		} else if (!Jo(t.options.mutationKey, i)) return !1;
	}
	return !((r && t.state.status !== r) || (o && !o(t)));
}
function uc(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || qo)(e);
}
function qo(e) {
	return JSON.stringify(e, (t, n) =>
		qa(n)
			? Object.keys(n)
					.sort()
					.reduce((r, o) => ((r[o] = n[o]), r), {})
			: n
	);
}
function Jo(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
			? !1
			: e && t && typeof e == 'object' && typeof t == 'object'
				? !Object.keys(t).some(n => !Jo(e[n], t[n]))
				: !1;
}
function tg(e, t) {
	if (e === t) return e;
	const n = nf(e) && nf(t);
	if (n || (qa(e) && qa(t))) {
		const r = n ? e : Object.keys(e),
			o = r.length,
			i = n ? t : Object.keys(t),
			s = i.length,
			l = n ? [] : {};
		let a = 0;
		for (let u = 0; u < s; u++) {
			const d = n ? u : i[u];
			((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
				? ((l[d] = void 0), a++)
				: ((l[d] = tg(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && a++);
		}
		return o === s && a === o ? e : l;
	}
	return t;
}
function nf(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function qa(e) {
	if (!rf(e)) return !1;
	const t = e.constructor;
	if (t === void 0) return !0;
	const n = t.prototype;
	return !(
		!rf(n) ||
		!n.hasOwnProperty('isPrototypeOf') ||
		Object.getPrototypeOf(e) !== Object.prototype
	);
}
function rf(e) {
	return Object.prototype.toString.call(e) === '[object Object]';
}
function zS(e) {
	return new Promise(t => {
		setTimeout(t, e);
	});
}
function FS(e, t, n) {
	return typeof n.structuralSharing == 'function'
		? n.structuralSharing(e, t)
		: n.structuralSharing !== !1
			? tg(e, t)
			: t;
}
function $S(e, t, n = 0) {
	const r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function US(e, t, n = 0) {
	const r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var cc = Symbol();
function ng(e, t) {
	return !e.queryFn && t != null && t.initialPromise
		? () => t.initialPromise
		: !e.queryFn || e.queryFn === cc
			? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
			: e.queryFn;
}
var Wn,
	dn,
	Ar,
	af,
	BS =
		((af = class extends el {
			constructor() {
				super();
				q(this, Wn);
				q(this, dn);
				q(this, Ar);
				W(this, Ar, t => {
					if (!tl && window.addEventListener) {
						const n = () => t();
						return (
							window.addEventListener('visibilitychange', n, !1),
							() => {
								window.removeEventListener('visibilitychange', n);
							}
						);
					}
				});
			}
			onSubscribe() {
				N(this, dn) || this.setEventListener(N(this, Ar));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() || ((t = N(this, dn)) == null || t.call(this), W(this, dn, void 0));
			}
			setEventListener(t) {
				var n;
				W(this, Ar, t),
					(n = N(this, dn)) == null || n.call(this),
					W(
						this,
						dn,
						t(r => {
							typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
						})
					);
			}
			setFocused(t) {
				N(this, Wn) !== t && (W(this, Wn, t), this.onFocus());
			}
			onFocus() {
				const t = this.isFocused();
				this.listeners.forEach(n => {
					n(t);
				});
			}
			isFocused() {
				var t;
				return typeof N(this, Wn) == 'boolean'
					? N(this, Wn)
					: ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
			}
		}),
		(Wn = new WeakMap()),
		(dn = new WeakMap()),
		(Ar = new WeakMap()),
		af),
	rg = new BS(),
	Mr,
	fn,
	Lr,
	uf,
	VS =
		((uf = class extends el {
			constructor() {
				super();
				q(this, Mr, !0);
				q(this, fn);
				q(this, Lr);
				W(this, Lr, t => {
					if (!tl && window.addEventListener) {
						const n = () => t(!0),
							r = () => t(!1);
						return (
							window.addEventListener('online', n, !1),
							window.addEventListener('offline', r, !1),
							() => {
								window.removeEventListener('online', n), window.removeEventListener('offline', r);
							}
						);
					}
				});
			}
			onSubscribe() {
				N(this, fn) || this.setEventListener(N(this, Lr));
			}
			onUnsubscribe() {
				var t;
				this.hasListeners() || ((t = N(this, fn)) == null || t.call(this), W(this, fn, void 0));
			}
			setEventListener(t) {
				var n;
				W(this, Lr, t),
					(n = N(this, fn)) == null || n.call(this),
					W(this, fn, t(this.setOnline.bind(this)));
			}
			setOnline(t) {
				N(this, Mr) !== t &&
					(W(this, Mr, t),
					this.listeners.forEach(r => {
						r(t);
					}));
			}
			isOnline() {
				return N(this, Mr);
			}
		}),
		(Mr = new WeakMap()),
		(fn = new WeakMap()),
		(Lr = new WeakMap()),
		uf),
	Ts = new VS();
function WS() {
	let e, t;
	const n = new Promise((o, i) => {
		(e = o), (t = i);
	});
	(n.status = 'pending'), n.catch(() => {});
	function r(o) {
		Object.assign(n, o), delete n.resolve, delete n.reject;
	}
	return (
		(n.resolve = o => {
			r({ status: 'fulfilled', value: o }), e(o);
		}),
		(n.reject = o => {
			r({ status: 'rejected', reason: o }), t(o);
		}),
		n
	);
}
function HS(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function og(e) {
	return (e ?? 'online') === 'online' ? Ts.isOnline() : !0;
}
var ig = class extends Error {
	constructor(e) {
		super('CancelledError'),
			(this.revert = e == null ? void 0 : e.revert),
			(this.silent = e == null ? void 0 : e.silent);
	}
};
function Ul(e) {
	return e instanceof ig;
}
function sg(e) {
	let t = !1,
		n = 0,
		r = !1,
		o;
	const i = WS(),
		s = v => {
			var S;
			r || (c(new ig(v)), (S = e.abort) == null || S.call(e));
		},
		l = () => {
			t = !0;
		},
		a = () => {
			t = !1;
		},
		u = () => rg.isFocused() && (e.networkMode === 'always' || Ts.isOnline()) && e.canRun(),
		d = () => og(e.networkMode) && e.canRun(),
		f = v => {
			var S;
			r || ((r = !0), (S = e.onSuccess) == null || S.call(e, v), o == null || o(), i.resolve(v));
		},
		c = v => {
			var S;
			r || ((r = !0), (S = e.onError) == null || S.call(e, v), o == null || o(), i.reject(v));
		},
		y = () =>
			new Promise(v => {
				var S;
				(o = h => {
					(r || u()) && v(h);
				}),
					(S = e.onPause) == null || S.call(e);
			}).then(() => {
				var v;
				(o = void 0), r || (v = e.onContinue) == null || v.call(e);
			}),
		w = () => {
			if (r) return;
			let v;
			const S = n === 0 ? e.initialPromise : void 0;
			try {
				v = S ?? e.fn();
			} catch (h) {
				v = Promise.reject(h);
			}
			Promise.resolve(v)
				.then(f)
				.catch(h => {
					var b;
					if (r) return;
					const p = e.retry ?? (tl ? 0 : 3),
						g = e.retryDelay ?? HS,
						k = typeof g == 'function' ? g(n, h) : g,
						E = p === !0 || (typeof p == 'number' && n < p) || (typeof p == 'function' && p(n, h));
					if (t || !E) {
						c(h);
						return;
					}
					n++,
						(b = e.onFail) == null || b.call(e, n, h),
						zS(k)
							.then(() => (u() ? void 0 : y()))
							.then(() => {
								t ? c(h) : w();
							});
				});
		};
	return {
		promise: i,
		cancel: s,
		continue: () => (o == null || o(), i),
		cancelRetry: l,
		continueRetry: a,
		canStart: d,
		start: () => (d() ? w() : y().then(w), i),
	};
}
function QS() {
	let e = [],
		t = 0,
		n = l => {
			l();
		},
		r = l => {
			l();
		},
		o = l => setTimeout(l, 0);
	const i = l => {
			t
				? e.push(l)
				: o(() => {
						n(l);
					});
		},
		s = () => {
			const l = e;
			(e = []),
				l.length &&
					o(() => {
						r(() => {
							l.forEach(a => {
								n(a);
							});
						});
					});
		};
	return {
		batch: l => {
			let a;
			t++;
			try {
				a = l();
			} finally {
				t--, t || s();
			}
			return a;
		},
		batchCalls:
			l =>
			(...a) => {
				i(() => {
					l(...a);
				});
			},
		schedule: i,
		setNotifyFunction: l => {
			n = l;
		},
		setBatchNotifyFunction: l => {
			r = l;
		},
		setScheduler: l => {
			o = l;
		},
	};
}
var Me = QS(),
	Hn,
	cf,
	lg =
		((cf = class {
			constructor() {
				q(this, Hn);
			}
			destroy() {
				this.clearGcTimeout();
			}
			scheduleGc() {
				this.clearGcTimeout(),
					LS(this.gcTime) &&
						W(
							this,
							Hn,
							setTimeout(() => {
								this.optionalRemove();
							}, this.gcTime)
						);
			}
			updateGcTime(e) {
				this.gcTime = Math.max(this.gcTime || 0, e ?? (tl ? 1 / 0 : 5 * 60 * 1e3));
			}
			clearGcTimeout() {
				N(this, Hn) && (clearTimeout(N(this, Hn)), W(this, Hn, void 0));
			}
		}),
		(Hn = new WeakMap()),
		cf),
	Ir,
	Dr,
	nt,
	Re,
	Zo,
	Qn,
	pt,
	It,
	df,
	KS =
		((df = class extends lg {
			constructor(t) {
				super();
				q(this, pt);
				q(this, Ir);
				q(this, Dr);
				q(this, nt);
				q(this, Re);
				q(this, Zo);
				q(this, Qn);
				W(this, Qn, !1),
					W(this, Zo, t.defaultOptions),
					this.setOptions(t.options),
					(this.observers = []),
					W(this, nt, t.cache),
					(this.queryKey = t.queryKey),
					(this.queryHash = t.queryHash),
					W(this, Ir, YS(this.options)),
					(this.state = t.state ?? N(this, Ir)),
					this.scheduleGc();
			}
			get meta() {
				return this.options.meta;
			}
			get promise() {
				var t;
				return (t = N(this, Re)) == null ? void 0 : t.promise;
			}
			setOptions(t) {
				(this.options = { ...N(this, Zo), ...t }), this.updateGcTime(this.options.gcTime);
			}
			optionalRemove() {
				!this.observers.length && this.state.fetchStatus === 'idle' && N(this, nt).remove(this);
			}
			setData(t, n) {
				const r = FS(this.state.data, t, this.options);
				return (
					Pe(this, pt, It).call(this, {
						data: r,
						type: 'success',
						dataUpdatedAt: n == null ? void 0 : n.updatedAt,
						manual: n == null ? void 0 : n.manual,
					}),
					r
				);
			}
			setState(t, n) {
				Pe(this, pt, It).call(this, { type: 'setState', state: t, setStateOptions: n });
			}
			cancel(t) {
				var r, o;
				const n = (r = N(this, Re)) == null ? void 0 : r.promise;
				return (
					(o = N(this, Re)) == null || o.cancel(t), n ? n.then(ft).catch(ft) : Promise.resolve()
				);
			}
			destroy() {
				super.destroy(), this.cancel({ silent: !0 });
			}
			reset() {
				this.destroy(), this.setState(N(this, Ir));
			}
			isActive() {
				return this.observers.some(t => DS(t.options.enabled, this) !== !1);
			}
			isDisabled() {
				return this.getObserversCount() > 0
					? !this.isActive()
					: this.options.queryFn === cc ||
							this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
			}
			isStale() {
				return this.state.isInvalidated
					? !0
					: this.getObserversCount() > 0
						? this.observers.some(t => t.getCurrentResult().isStale)
						: this.state.data === void 0;
			}
			isStaleByTime(t = 0) {
				return (
					this.state.isInvalidated || this.state.data === void 0 || !IS(this.state.dataUpdatedAt, t)
				);
			}
			onFocus() {
				var n;
				const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
				t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Re)) == null || n.continue();
			}
			onOnline() {
				var n;
				const t = this.observers.find(r => r.shouldFetchOnReconnect());
				t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Re)) == null || n.continue();
			}
			addObserver(t) {
				this.observers.includes(t) ||
					(this.observers.push(t),
					this.clearGcTimeout(),
					N(this, nt).notify({ type: 'observerAdded', query: this, observer: t }));
			}
			removeObserver(t) {
				this.observers.includes(t) &&
					((this.observers = this.observers.filter(n => n !== t)),
					this.observers.length ||
						(N(this, Re) &&
							(N(this, Qn) ? N(this, Re).cancel({ revert: !0 }) : N(this, Re).cancelRetry()),
						this.scheduleGc()),
					N(this, nt).notify({ type: 'observerRemoved', query: this, observer: t }));
			}
			getObserversCount() {
				return this.observers.length;
			}
			invalidate() {
				this.state.isInvalidated || Pe(this, pt, It).call(this, { type: 'invalidate' });
			}
			fetch(t, n) {
				var a, u, d;
				if (this.state.fetchStatus !== 'idle') {
					if (this.state.data !== void 0 && n != null && n.cancelRefetch)
						this.cancel({ silent: !0 });
					else if (N(this, Re)) return N(this, Re).continueRetry(), N(this, Re).promise;
				}
				if ((t && this.setOptions(t), !this.options.queryFn)) {
					const f = this.observers.find(c => c.options.queryFn);
					f && this.setOptions(f.options);
				}
				const r = new AbortController(),
					o = f => {
						Object.defineProperty(f, 'signal', {
							enumerable: !0,
							get: () => (W(this, Qn, !0), r.signal),
						});
					},
					i = () => {
						const f = ng(this.options, n),
							c = { queryKey: this.queryKey, meta: this.meta };
						return (
							o(c),
							W(this, Qn, !1),
							this.options.persister ? this.options.persister(f, c, this) : f(c)
						);
					},
					s = {
						fetchOptions: n,
						options: this.options,
						queryKey: this.queryKey,
						state: this.state,
						fetchFn: i,
					};
				o(s),
					(a = this.options.behavior) == null || a.onFetch(s, this),
					W(this, Dr, this.state),
					(this.state.fetchStatus === 'idle' ||
						this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
						Pe(this, pt, It).call(this, {
							type: 'fetch',
							meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
						});
				const l = f => {
					var c, y, w, v;
					(Ul(f) && f.silent) || Pe(this, pt, It).call(this, { type: 'error', error: f }),
						Ul(f) ||
							((y = (c = N(this, nt).config).onError) == null || y.call(c, f, this),
							(v = (w = N(this, nt).config).onSettled) == null ||
								v.call(w, this.state.data, f, this)),
						this.scheduleGc();
				};
				return (
					W(
						this,
						Re,
						sg({
							initialPromise: n == null ? void 0 : n.initialPromise,
							fn: s.fetchFn,
							abort: r.abort.bind(r),
							onSuccess: f => {
								var c, y, w, v;
								if (f === void 0) {
									l(new Error(`${this.queryHash} data is undefined`));
									return;
								}
								try {
									this.setData(f);
								} catch (S) {
									l(S);
									return;
								}
								(y = (c = N(this, nt).config).onSuccess) == null || y.call(c, f, this),
									(v = (w = N(this, nt).config).onSettled) == null ||
										v.call(w, f, this.state.error, this),
									this.scheduleGc();
							},
							onError: l,
							onFail: (f, c) => {
								Pe(this, pt, It).call(this, { type: 'failed', failureCount: f, error: c });
							},
							onPause: () => {
								Pe(this, pt, It).call(this, { type: 'pause' });
							},
							onContinue: () => {
								Pe(this, pt, It).call(this, { type: 'continue' });
							},
							retry: s.options.retry,
							retryDelay: s.options.retryDelay,
							networkMode: s.options.networkMode,
							canRun: () => !0,
						})
					),
					N(this, Re).start()
				);
			}
		}),
		(Ir = new WeakMap()),
		(Dr = new WeakMap()),
		(nt = new WeakMap()),
		(Re = new WeakMap()),
		(Zo = new WeakMap()),
		(Qn = new WeakMap()),
		(pt = new WeakSet()),
		(It = function (t) {
			const n = r => {
				switch (t.type) {
					case 'failed':
						return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
					case 'pause':
						return { ...r, fetchStatus: 'paused' };
					case 'continue':
						return { ...r, fetchStatus: 'fetching' };
					case 'fetch':
						return { ...r, ...GS(r.data, this.options), fetchMeta: t.meta ?? null };
					case 'success':
						return {
							...r,
							data: t.data,
							dataUpdateCount: r.dataUpdateCount + 1,
							dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
							error: null,
							isInvalidated: !1,
							status: 'success',
							...(!t.manual && {
								fetchStatus: 'idle',
								fetchFailureCount: 0,
								fetchFailureReason: null,
							}),
						};
					case 'error':
						const o = t.error;
						return Ul(o) && o.revert && N(this, Dr)
							? { ...N(this, Dr), fetchStatus: 'idle' }
							: {
									...r,
									error: o,
									errorUpdateCount: r.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: r.fetchFailureCount + 1,
									fetchFailureReason: o,
									fetchStatus: 'idle',
									status: 'error',
								};
					case 'invalidate':
						return { ...r, isInvalidated: !0 };
					case 'setState':
						return { ...r, ...t.state };
				}
			};
			(this.state = n(this.state)),
				Me.batch(() => {
					this.observers.forEach(r => {
						r.onQueryUpdate();
					}),
						N(this, nt).notify({ query: this, type: 'updated', action: t });
				});
		}),
		df);
function GS(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: og(t.networkMode) ? 'fetching' : 'paused',
		...(e === void 0 && { error: null, status: 'pending' }),
	};
}
function YS(e) {
	const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
		n = t !== void 0,
		r = n
			? typeof e.initialDataUpdatedAt == 'function'
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? (r ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? 'success' : 'pending',
		fetchStatus: 'idle',
	};
}
var Pt,
	ff,
	XS =
		((ff = class extends el {
			constructor(t = {}) {
				super();
				q(this, Pt);
				(this.config = t), W(this, Pt, new Map());
			}
			build(t, n, r) {
				const o = n.queryKey,
					i = n.queryHash ?? uc(o, n);
				let s = this.get(i);
				return (
					s ||
						((s = new KS({
							cache: this,
							queryKey: o,
							queryHash: i,
							options: t.defaultQueryOptions(n),
							state: r,
							defaultOptions: t.getQueryDefaults(o),
						})),
						this.add(s)),
					s
				);
			}
			add(t) {
				N(this, Pt).has(t.queryHash) ||
					(N(this, Pt).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
			}
			remove(t) {
				const n = N(this, Pt).get(t.queryHash);
				n &&
					(t.destroy(),
					n === t && N(this, Pt).delete(t.queryHash),
					this.notify({ type: 'removed', query: t }));
			}
			clear() {
				Me.batch(() => {
					this.getAll().forEach(t => {
						this.remove(t);
					});
				});
			}
			get(t) {
				return N(this, Pt).get(t);
			}
			getAll() {
				return [...N(this, Pt).values()];
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find(r => ef(n, r));
			}
			findAll(t = {}) {
				const n = this.getAll();
				return Object.keys(t).length > 0 ? n.filter(r => ef(t, r)) : n;
			}
			notify(t) {
				Me.batch(() => {
					this.listeners.forEach(n => {
						n(t);
					});
				});
			}
			onFocus() {
				Me.batch(() => {
					this.getAll().forEach(t => {
						t.onFocus();
					});
				});
			}
			onOnline() {
				Me.batch(() => {
					this.getAll().forEach(t => {
						t.onOnline();
					});
				});
			}
		}),
		(Pt = new WeakMap()),
		ff),
	Nt,
	_e,
	Kn,
	Tt,
	sn,
	pf,
	qS =
		((pf = class extends lg {
			constructor(t) {
				super();
				q(this, Tt);
				q(this, Nt);
				q(this, _e);
				q(this, Kn);
				(this.mutationId = t.mutationId),
					W(this, _e, t.mutationCache),
					W(this, Nt, []),
					(this.state = t.state || JS()),
					this.setOptions(t.options),
					this.scheduleGc();
			}
			setOptions(t) {
				(this.options = t), this.updateGcTime(this.options.gcTime);
			}
			get meta() {
				return this.options.meta;
			}
			addObserver(t) {
				N(this, Nt).includes(t) ||
					(N(this, Nt).push(t),
					this.clearGcTimeout(),
					N(this, _e).notify({ type: 'observerAdded', mutation: this, observer: t }));
			}
			removeObserver(t) {
				W(
					this,
					Nt,
					N(this, Nt).filter(n => n !== t)
				),
					this.scheduleGc(),
					N(this, _e).notify({ type: 'observerRemoved', mutation: this, observer: t });
			}
			optionalRemove() {
				N(this, Nt).length ||
					(this.state.status === 'pending' ? this.scheduleGc() : N(this, _e).remove(this));
			}
			continue() {
				var t;
				return (
					((t = N(this, Kn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
				);
			}
			async execute(t) {
				var o, i, s, l, a, u, d, f, c, y, w, v, S, h, p, g, k, E, b, P;
				W(
					this,
					Kn,
					sg({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t)
								: Promise.reject(new Error('No mutationFn found')),
						onFail: (T, I) => {
							Pe(this, Tt, sn).call(this, { type: 'failed', failureCount: T, error: I });
						},
						onPause: () => {
							Pe(this, Tt, sn).call(this, { type: 'pause' });
						},
						onContinue: () => {
							Pe(this, Tt, sn).call(this, { type: 'continue' });
						},
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => N(this, _e).canRun(this),
					})
				);
				const n = this.state.status === 'pending',
					r = !N(this, Kn).canStart();
				try {
					if (!n) {
						Pe(this, Tt, sn).call(this, { type: 'pending', variables: t, isPaused: r }),
							await ((i = (o = N(this, _e).config).onMutate) == null ? void 0 : i.call(o, t, this));
						const I = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
						I !== this.state.context &&
							Pe(this, Tt, sn).call(this, {
								type: 'pending',
								context: I,
								variables: t,
								isPaused: r,
							});
					}
					const T = await N(this, Kn).start();
					return (
						await ((u = (a = N(this, _e).config).onSuccess) == null
							? void 0
							: u.call(a, T, t, this.state.context, this)),
						await ((f = (d = this.options).onSuccess) == null
							? void 0
							: f.call(d, T, t, this.state.context)),
						await ((y = (c = N(this, _e).config).onSettled) == null
							? void 0
							: y.call(c, T, null, this.state.variables, this.state.context, this)),
						await ((v = (w = this.options).onSettled) == null
							? void 0
							: v.call(w, T, null, t, this.state.context)),
						Pe(this, Tt, sn).call(this, { type: 'success', data: T }),
						T
					);
				} catch (T) {
					try {
						throw (
							(await ((h = (S = N(this, _e).config).onError) == null
								? void 0
								: h.call(S, T, t, this.state.context, this)),
							await ((g = (p = this.options).onError) == null
								? void 0
								: g.call(p, T, t, this.state.context)),
							await ((E = (k = N(this, _e).config).onSettled) == null
								? void 0
								: E.call(k, void 0, T, this.state.variables, this.state.context, this)),
							await ((P = (b = this.options).onSettled) == null
								? void 0
								: P.call(b, void 0, T, t, this.state.context)),
							T)
						);
					} finally {
						Pe(this, Tt, sn).call(this, { type: 'error', error: T });
					}
				} finally {
					N(this, _e).runNext(this);
				}
			}
		}),
		(Nt = new WeakMap()),
		(_e = new WeakMap()),
		(Kn = new WeakMap()),
		(Tt = new WeakSet()),
		(sn = function (t) {
			const n = r => {
				switch (t.type) {
					case 'failed':
						return { ...r, failureCount: t.failureCount, failureReason: t.error };
					case 'pause':
						return { ...r, isPaused: !0 };
					case 'continue':
						return { ...r, isPaused: !1 };
					case 'pending':
						return {
							...r,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: t.isPaused,
							status: 'pending',
							variables: t.variables,
							submittedAt: Date.now(),
						};
					case 'success':
						return {
							...r,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: 'success',
							isPaused: !1,
						};
					case 'error':
						return {
							...r,
							data: void 0,
							error: t.error,
							failureCount: r.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: 'error',
						};
				}
			};
			(this.state = n(this.state)),
				Me.batch(() => {
					N(this, Nt).forEach(r => {
						r.onMutationUpdate(t);
					}),
						N(this, _e).notify({ mutation: this, type: 'updated', action: t });
				});
		}),
		pf);
function JS() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: 'idle',
		variables: void 0,
		submittedAt: 0,
	};
}
var Qe,
	ei,
	hf,
	ZS =
		((hf = class extends el {
			constructor(t = {}) {
				super();
				q(this, Qe);
				q(this, ei);
				(this.config = t), W(this, Qe, new Map()), W(this, ei, Date.now());
			}
			build(t, n, r) {
				const o = new qS({
					mutationCache: this,
					mutationId: ++hi(this, ei)._,
					options: t.defaultMutationOptions(n),
					state: r,
				});
				return this.add(o), o;
			}
			add(t) {
				const n = Ii(t),
					r = N(this, Qe).get(n) ?? [];
				r.push(t), N(this, Qe).set(n, r), this.notify({ type: 'added', mutation: t });
			}
			remove(t) {
				var r;
				const n = Ii(t);
				if (N(this, Qe).has(n)) {
					const o = (r = N(this, Qe).get(n)) == null ? void 0 : r.filter(i => i !== t);
					o && (o.length === 0 ? N(this, Qe).delete(n) : N(this, Qe).set(n, o));
				}
				this.notify({ type: 'removed', mutation: t });
			}
			canRun(t) {
				var r;
				const n =
					(r = N(this, Qe).get(Ii(t))) == null ? void 0 : r.find(o => o.state.status === 'pending');
				return !n || n === t;
			}
			runNext(t) {
				var r;
				const n =
					(r = N(this, Qe).get(Ii(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
				return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
			}
			clear() {
				Me.batch(() => {
					this.getAll().forEach(t => {
						this.remove(t);
					});
				});
			}
			getAll() {
				return [...N(this, Qe).values()].flat();
			}
			find(t) {
				const n = { exact: !0, ...t };
				return this.getAll().find(r => tf(n, r));
			}
			findAll(t = {}) {
				return this.getAll().filter(n => tf(t, n));
			}
			notify(t) {
				Me.batch(() => {
					this.listeners.forEach(n => {
						n(t);
					});
				});
			}
			resumePausedMutations() {
				const t = this.getAll().filter(n => n.state.isPaused);
				return Me.batch(() => Promise.all(t.map(n => n.continue().catch(ft))));
			}
		}),
		(Qe = new WeakMap()),
		(ei = new WeakMap()),
		hf);
function Ii(e) {
	var t;
	return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function of(e) {
	return {
		onFetch: (t, n) => {
			var d, f, c, y, w;
			const r = t.options,
				o =
					(c =
						(f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) ==
					null
						? void 0
						: c.direction,
				i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
				s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
			let l = { pages: [], pageParams: [] },
				a = 0;
			const u = async () => {
				let v = !1;
				const S = g => {
						Object.defineProperty(g, 'signal', {
							enumerable: !0,
							get: () => (
								t.signal.aborted
									? (v = !0)
									: t.signal.addEventListener('abort', () => {
											v = !0;
										}),
								t.signal
							),
						});
					},
					h = ng(t.options, t.fetchOptions),
					p = async (g, k, E) => {
						if (v) return Promise.reject();
						if (k == null && g.pages.length) return Promise.resolve(g);
						const b = {
							queryKey: t.queryKey,
							pageParam: k,
							direction: E ? 'backward' : 'forward',
							meta: t.options.meta,
						};
						S(b);
						const P = await h(b),
							{ maxPages: T } = t.options,
							I = E ? US : $S;
						return { pages: I(g.pages, P, T), pageParams: I(g.pageParams, k, T) };
					};
				if (o && i.length) {
					const g = o === 'backward',
						k = g ? ek : sf,
						E = { pages: i, pageParams: s },
						b = k(r, E);
					l = await p(E, b, g);
				} else {
					const g = e ?? i.length;
					do {
						const k = a === 0 ? (s[0] ?? r.initialPageParam) : sf(r, l);
						if (a > 0 && k == null) break;
						(l = await p(l, k)), a++;
					} while (a < g);
				}
				return l;
			};
			t.options.persister
				? (t.fetchFn = () => {
						var v, S;
						return (S = (v = t.options).persister) == null
							? void 0
							: S.call(v, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
					})
				: (t.fetchFn = u);
		},
	};
}
function sf(e, { pages: t, pageParams: n }) {
	const r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function ek(e, { pages: t, pageParams: n }) {
	var r;
	return t.length > 0
		? (r = e.getPreviousPageParam) == null
			? void 0
			: r.call(e, t[0], t, n[0], n)
		: void 0;
}
var fe,
	pn,
	hn,
	zr,
	Fr,
	mn,
	$r,
	Ur,
	mf,
	tk =
		((mf = class {
			constructor(e = {}) {
				q(this, fe);
				q(this, pn);
				q(this, hn);
				q(this, zr);
				q(this, Fr);
				q(this, mn);
				q(this, $r);
				q(this, Ur);
				W(this, fe, e.queryCache || new XS()),
					W(this, pn, e.mutationCache || new ZS()),
					W(this, hn, e.defaultOptions || {}),
					W(this, zr, new Map()),
					W(this, Fr, new Map()),
					W(this, mn, 0);
			}
			mount() {
				hi(this, mn)._++,
					N(this, mn) === 1 &&
						(W(
							this,
							$r,
							rg.subscribe(async e => {
								e && (await this.resumePausedMutations(), N(this, fe).onFocus());
							})
						),
						W(
							this,
							Ur,
							Ts.subscribe(async e => {
								e && (await this.resumePausedMutations(), N(this, fe).onOnline());
							})
						));
			}
			unmount() {
				var e, t;
				hi(this, mn)._--,
					N(this, mn) === 0 &&
						((e = N(this, $r)) == null || e.call(this),
						W(this, $r, void 0),
						(t = N(this, Ur)) == null || t.call(this),
						W(this, Ur, void 0));
			}
			isFetching(e) {
				return N(this, fe).findAll({ ...e, fetchStatus: 'fetching' }).length;
			}
			isMutating(e) {
				return N(this, pn).findAll({ ...e, status: 'pending' }).length;
			}
			getQueryData(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data;
			}
			ensureQueryData(e) {
				const t = this.getQueryData(e.queryKey);
				if (t === void 0) return this.fetchQuery(e);
				{
					const n = this.defaultQueryOptions(e),
						r = N(this, fe).build(this, n);
					return (
						e.revalidateIfStale && r.isStaleByTime(Zd(n.staleTime, r)) && this.prefetchQuery(n),
						Promise.resolve(t)
					);
				}
			}
			getQueriesData(e) {
				return N(this, fe)
					.findAll(e)
					.map(({ queryKey: t, state: n }) => {
						const r = n.data;
						return [t, r];
					});
			}
			setQueryData(e, t, n) {
				const r = this.defaultQueryOptions({ queryKey: e }),
					o = N(this, fe).get(r.queryHash),
					i = o == null ? void 0 : o.state.data,
					s = MS(t, i);
				if (s !== void 0)
					return N(this, fe)
						.build(this, r)
						.setData(s, { ...n, manual: !0 });
			}
			setQueriesData(e, t, n) {
				return Me.batch(() =>
					N(this, fe)
						.findAll(e)
						.map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
				);
			}
			getQueryState(e) {
				var n;
				const t = this.defaultQueryOptions({ queryKey: e });
				return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state;
			}
			removeQueries(e) {
				const t = N(this, fe);
				Me.batch(() => {
					t.findAll(e).forEach(n => {
						t.remove(n);
					});
				});
			}
			resetQueries(e, t) {
				const n = N(this, fe),
					r = { type: 'active', ...e };
				return Me.batch(
					() => (
						n.findAll(e).forEach(o => {
							o.reset();
						}),
						this.refetchQueries(r, t)
					)
				);
			}
			cancelQueries(e = {}, t = {}) {
				const n = { revert: !0, ...t },
					r = Me.batch(() =>
						N(this, fe)
							.findAll(e)
							.map(o => o.cancel(n))
					);
				return Promise.all(r).then(ft).catch(ft);
			}
			invalidateQueries(e = {}, t = {}) {
				return Me.batch(() => {
					if (
						(N(this, fe)
							.findAll(e)
							.forEach(r => {
								r.invalidate();
							}),
						e.refetchType === 'none')
					)
						return Promise.resolve();
					const n = { ...e, type: e.refetchType ?? e.type ?? 'active' };
					return this.refetchQueries(n, t);
				});
			}
			refetchQueries(e = {}, t) {
				const n = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
					r = Me.batch(() =>
						N(this, fe)
							.findAll(e)
							.filter(o => !o.isDisabled())
							.map(o => {
								let i = o.fetch(void 0, n);
								return (
									n.throwOnError || (i = i.catch(ft)),
									o.state.fetchStatus === 'paused' ? Promise.resolve() : i
								);
							})
					);
				return Promise.all(r).then(ft);
			}
			fetchQuery(e) {
				const t = this.defaultQueryOptions(e);
				t.retry === void 0 && (t.retry = !1);
				const n = N(this, fe).build(this, t);
				return n.isStaleByTime(Zd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
			}
			prefetchQuery(e) {
				return this.fetchQuery(e).then(ft).catch(ft);
			}
			fetchInfiniteQuery(e) {
				return (e.behavior = of(e.pages)), this.fetchQuery(e);
			}
			prefetchInfiniteQuery(e) {
				return this.fetchInfiniteQuery(e).then(ft).catch(ft);
			}
			ensureInfiniteQueryData(e) {
				return (e.behavior = of(e.pages)), this.ensureQueryData(e);
			}
			resumePausedMutations() {
				return Ts.isOnline() ? N(this, pn).resumePausedMutations() : Promise.resolve();
			}
			getQueryCache() {
				return N(this, fe);
			}
			getMutationCache() {
				return N(this, pn);
			}
			getDefaultOptions() {
				return N(this, hn);
			}
			setDefaultOptions(e) {
				W(this, hn, e);
			}
			setQueryDefaults(e, t) {
				N(this, zr).set(qo(e), { queryKey: e, defaultOptions: t });
			}
			getQueryDefaults(e) {
				const t = [...N(this, zr).values()];
				let n = {};
				return (
					t.forEach(r => {
						Jo(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
					}),
					n
				);
			}
			setMutationDefaults(e, t) {
				N(this, Fr).set(qo(e), { mutationKey: e, defaultOptions: t });
			}
			getMutationDefaults(e) {
				const t = [...N(this, Fr).values()];
				let n = {};
				return (
					t.forEach(r => {
						Jo(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
					}),
					n
				);
			}
			defaultQueryOptions(e) {
				if (e._defaulted) return e;
				const t = {
					...N(this, hn).queries,
					...this.getQueryDefaults(e.queryKey),
					...e,
					_defaulted: !0,
				};
				return (
					t.queryHash || (t.queryHash = uc(t.queryKey, t)),
					t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
					t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
					!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
					t.enabled !== !0 && t.queryFn === cc && (t.enabled = !1),
					t
				);
			}
			defaultMutationOptions(e) {
				return e != null && e._defaulted
					? e
					: {
							...N(this, hn).mutations,
							...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
							...e,
							_defaulted: !0,
						};
			}
			clear() {
				N(this, fe).clear(), N(this, pn).clear();
			}
		}),
		(fe = new WeakMap()),
		(pn = new WeakMap()),
		(hn = new WeakMap()),
		(zr = new WeakMap()),
		(Fr = new WeakMap()),
		(mn = new WeakMap()),
		($r = new WeakMap()),
		(Ur = new WeakMap()),
		mf),
	nk = x.createContext(void 0),
	rk = ({ client: e, children: t }) => (
		x.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e]
		),
		m.jsx(nk.Provider, { value: e, children: t })
	);
const ok = gm(
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90',
					destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline',
				},
				size: {
					default: 'h-10 px-4 py-2',
					sm: 'h-9 rounded-md px-3',
					lg: 'h-11 rounded-md px-8',
					icon: 'h-10 w-10',
				},
			},
			defaultVariants: { variant: 'default', size: 'default' },
		}
	),
	ze = x.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
		const s = r ? Go : 'button';
		return m.jsx(s, { className: Xt(ok({ variant: t, size: n, className: e })), ref: i, ...o });
	});
ze.displayName = 'Button';
const lf = () => {
		const [e, t] = x.useState('light');
		x.useEffect(() => {
			const r = localStorage.getItem('theme');
			r
				? (t(r), document.documentElement.classList.toggle('dark', r === 'dark'))
				: window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: dark)').matches &&
					(t('dark'), document.documentElement.classList.add('dark'));
		}, []);
		const n = () => {
			const r = e === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', r),
				t(r),
				document.documentElement.classList.toggle('dark', r === 'dark');
		};
		return m.jsx(ze, {
			onClick: n,
			'aria-label': 'Toggle theme',
			variant: 'ghost',
			className: 'relative z-20 w-10 h-10 p-0 rounded-full',
			children: m.jsx('div', {
				className: 'rounded-full bg-accent dark:bg-accent p-2 flex items-center justify-center',
				children:
					e === 'light' ? m.jsx(Qx, { className: 'h-5 w-5' }) : m.jsx(Hx, { className: 'h-5 w-5' }),
			}),
		});
	},
	ik = () => {
		const [e, t] = x.useState(!1),
			[n, r] = x.useState(!1),
			o = ai();
		x.useEffect(() => {
			const l = () => {
				window.scrollY > 10 ? t(!0) : t(!1);
			};
			return (
				window.addEventListener('scroll', l),
				() => {
					window.removeEventListener('scroll', l);
				}
			);
		}, []);
		const i = l => o.pathname === l,
			s = '';
		return m.jsxs('nav', {
			className: `fixed w-full z-50 transition-all duration-300 ${e ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'}`,
			children: [
				m.jsxs('div', {
					className: 'container mx-auto px-4 flex justify-between items-center',
					children: [
						m.jsxs(ae, {
							to: '/',
							className: 'flex items-center gap-2',
							children: [
								m.jsx('img', {
									src: 'public/uploads/tektalentlogo.png',
									alt: 'Tek Talent Africa',
									className: 'h-10',
								}),
								m.jsx('span', {
									className:
										'text-xl font-bold text-tekOrange dark:text-tekOrange hidden md:inline',
									children: 'TekTalent Africa Community',
								}),
							],
						}),
						m.jsxs('div', {
							className: 'hidden md:flex items-center gap-8',
							children: [
								m.jsx(ae, {
									to: '/',
									className: `${i('/') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`,
									children: 'Home',
								}),
								m.jsx(ae, {
									to: '/events',
									className: `${i('/events') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`,
									children: 'Events & Activities',
								}),
								m.jsx(ae, {
									to: '/projects',
									className: `${i('/projects') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`,
									children: 'Projects',
								}),
								m.jsx(ae, {
									to: '/blog',
									className: `${i('/blog') ? 'text-tekOrange font-semibold' : 'hover:text-tekOrange'} transition-colors dark:text-gray-200`,
									children: 'Blog',
								}),
								m.jsx(lf, {}),
								m.jsx(ze, {
									className: 'bg-tekOrange hover:bg-orange-600 text-white',
									onClick: () => window.open(s, '_blank'),
									children: 'Join Us',
								}),
							],
						}),
						m.jsxs('div', {
							className: 'flex md:hidden items-center gap-3',
							children: [
								m.jsx(lf, {}),
								m.jsxs(ze, {
									variant: 'ghost',
									onClick: () => r(!n),
									className: 'relative p-2 h-10 w-10',
									'aria-label': n ? 'Close menu' : 'Open menu',
									children: [
										m.jsx('span', {
											className: `block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${n ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`,
										}),
										m.jsx('span', {
											className: `block w-5 h-0.5 bg-current absolute transition-opacity duration-300 ease-in-out ${n ? 'opacity-0' : 'opacity-100'}`,
										}),
										m.jsx('span', {
											className: `block w-5 h-0.5 bg-current absolute transition-transform duration-300 ease-in-out ${n ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`,
										}),
									],
								}),
							],
						}),
					],
				}),
				m.jsx('div', {
					className: `md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${n ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`,
					children: m.jsxs('div', {
						className: 'flex flex-col py-4 px-4',
						children: [
							m.jsx(ae, {
								to: '/',
								className: `py-3 px-4 ${i('/') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`,
								onClick: () => r(!1),
								children: 'Home',
							}),
							m.jsx(ae, {
								to: '/events',
								className: `py-3 px-4 ${i('/events') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`,
								onClick: () => r(!1),
								children: 'Events & Activities',
							}),
							m.jsx(ae, {
								to: '/projects',
								className: `py-3 px-4 ${i('/projects') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`,
								onClick: () => r(!1),
								children: 'Projects',
							}),
							m.jsx(ae, {
								to: '/blog',
								className: `py-3 px-4 ${i('/blog') ? 'text-tekOrange font-semibold' : ''} dark:text-gray-200`,
								onClick: () => r(!1),
								children: 'Blog',
							}),
							m.jsx('div', {
								className: 'px-4 pt-2',
								children: m.jsx(ze, {
									className: 'bg-tekOrange hover:bg-orange-600 text-white w-full',
									onClick: () => {
										window.open(s, '_blank'), r(!1);
									},
									children: 'Join Us',
								}),
							}),
						],
					}),
				}),
			],
		});
	},
	sk = () => {
		const e = () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		};
		return m.jsx('footer', {
			className: 'bg-tekBlack text-white pt-16 pb-8',
			children: m.jsxs('div', {
				className: 'container mx-auto px-4',
				children: [
					m.jsxs('div', {
						className: 'grid grid-cols-1 md:grid-cols-4 gap-8 mb-12',
						children: [
							m.jsxs('div', {
								className: 'col-span-1',
								children: [
									m.jsx('img', {
										src: 'public/uploads/tektalentlogo.png',
										alt: 'Tek Talent Africa',
										className: 'h-14 mb-6',
									}),
									m.jsx('p', {
										className: 'text-gray-300 mb-4',
										children:
											'Empowering innovation through collaboration, creativity, and community engagement.',
									}),
								],
							}),
							m.jsxs('div', {
								className: 'col-span-1',
								children: [
									m.jsx('h4', {
										className: 'text-lg font-semibold mb-4',
										children: 'Community Links',
									}),
									m.jsxs('div', {
										className: 'flex flex-col gap-2',
										children: [
											m.jsx(ae, {
												to: '/events',
												className: 'text-gray-300 hover:text-tekOrange transition-colors',
												children: 'Events',
											}),
											m.jsx(ae, {
												to: '/projects',
												className: 'text-gray-300 hover:text-tekOrange transition-colors',
												children: 'Projects',
											}),
											m.jsx(ae, {
												to: '/blog',
												className: 'text-gray-300 hover:text-tekOrange transition-colors',
												children: 'Blog Posts',
											}),
										],
									}),
								],
							}),
							m.jsxs('div', {
								className: 'col-span-1',
								children: [
									m.jsx('h4', { className: 'text-lg font-semibold mb-4', children: 'Explore' }),
									m.jsx('div', {
										className: 'flex flex-col gap-2',
										children: m.jsx(ae, {
											to: '#join-us',
											className: 'text-gray-300 hover:text-tekOrange transition-colors',
											children: 'Join Us',
										}),
									}),
								],
							}),
							m.jsxs('div', {
								className: 'col-span-1',
								children: [
									m.jsx('h4', { className: 'text-lg font-semibold mb-4', children: 'Company' }),
									m.jsxs('div', {
										className: 'flex flex-col gap-2',
										children: [
											m.jsx(ae, {
												to: '/about',
												className: 'text-gray-300 hover:text-tekOrange transition-colors',
												children: 'About us',
											}),
											m.jsx(ae, {
												to: '/contact',
												className: 'text-gray-300 hover:text-tekOrange transition-colors',
												children: 'Contact us',
											}),
										],
									}),
								],
							}),
						],
					}),
					m.jsxs('div', {
						className:
							'border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center',
						children: [
							m.jsx('p', {
								className: 'text-gray-400 text-sm mb-4 md:mb-0',
								children: '© 2025 Tek Talent Africa. All rights reserved.',
							}),
							m.jsxs('div', {
								className: 'flex space-x-6',
								children: [
									m.jsxs(ae, {
										to: '#',
										className: 'text-gray-400 hover:text-tekOrange transition-colors',
										children: [
											m.jsx(Kx, { size: 18 }),
											m.jsx('span', { className: 'sr-only', children: 'Twitter' }),
										],
									}),
									m.jsxs(ae, {
										to: '#',
										className: 'text-gray-400 hover:text-tekOrange transition-colors',
										children: [
											m.jsx(Wx, { size: 18 }),
											m.jsx('span', { className: 'sr-only', children: 'LinkedIn' }),
										],
									}),
									m.jsxs(ae, {
										to: '#',
										className: 'text-gray-400 hover:text-tekOrange transition-colors',
										children: [
											m.jsx(Vx, { size: 18 }),
											m.jsx('span', { className: 'sr-only', children: 'GitHub' }),
										],
									}),
								],
							}),
							m.jsx('button', {
								onClick: e,
								className:
									'fixed bottom-8 right-8 bg-tekOrange p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40',
								'aria-label': 'Back to Top',
								children: m.jsx(Ux, { size: 20, className: 'text-white' }),
							}),
						],
					}),
				],
			}),
		});
	},
	ag = () => {
		const [e, t] = x.useState(!1),
			n = () => {
				const o = document.documentElement.scrollHeight,
					i = document.documentElement.clientHeight,
					s = (o - i) / 2;
				window.scrollY > s ? t(!0) : t(!1);
			},
			r = () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			};
		return (
			x.useEffect(
				() => (window.addEventListener('scroll', n), () => window.removeEventListener('scroll', n)),
				[]
			),
			m.jsx('div', {
				className: `back-to-top ${e ? 'opacity-100' : 'opacity-0 invisible'}`,
				children: m.jsx(ze, {
					className: 'rounded-full w-12 h-12 bg-tekOrange hover:bg-orange-600 text-white shadow-lg',
					onClick: r,
					'aria-label': 'Back to top',
					children: m.jsx(Bx, { size: 24 }),
				}),
			})
		);
	};
function zn({ className: e, ...t }) {
	return m.jsx('div', { className: Xt('animate-pulse rounded-md bg-muted', e), ...t });
}
const Bl = ({ className: e = '' }) =>
		m.jsxs('div', {
			className: `rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md ${e}`,
			children: [
				m.jsx(zn, { className: 'h-48 w-full' }),
				m.jsxs('div', {
					className: 'p-5',
					children: [
						m.jsx(zn, { className: 'h-6 w-3/4 mb-3' }),
						m.jsx(zn, { className: 'h-4 w-1/4 mb-4' }),
						m.jsxs('div', {
							className: 'space-y-2',
							children: [
								m.jsx(zn, { className: 'h-4 w-full' }),
								m.jsx(zn, { className: 'h-4 w-full' }),
								m.jsx(zn, { className: 'h-4 w-2/3' }),
							],
						}),
						m.jsx(zn, { className: 'h-8 w-1/3 mt-4 rounded' }),
					],
				}),
			],
		}),
	lk = () => {
		const [e, t] = x.useState(!0),
			[n, r] = x.useState([]),
			o = x.useRef(null),
			i = x.useRef(null),
			s = x.useRef(null);
		x.useEffect(() => {
			const u = setTimeout(() => {
					t(!1);
				}, 1500),
				d = new IntersectionObserver(
					f => {
						f.forEach(c => {
							c.isIntersecting && r(y => [...y, c.target.id]);
						});
					},
					{ threshold: 0.2 }
				);
			return (
				o.current && d.observe(o.current),
				i.current && d.observe(i.current),
				s.current && d.observe(s.current),
				() => {
					clearTimeout(u), d.disconnect();
				}
			);
		}, []);
		const l = [
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
			],
			a = [
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
				'public/uploads/tektalentlogo.png',
			];
		return m.jsxs('div', {
			className: 'min-h-screen bg-white dark:bg-gray-900',
			children: [
				m.jsxs('section', {
					className:
						'relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16',
					children: [
						m.jsx('div', {
							className: 'container mx-auto px-4 z-10 text-center mb-8',
							children: m.jsxs('div', {
								className: 'animate-fade-in',
								children: [
									m.jsxs('h1', {
										className: 'text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white',
										children: [
											m.jsx('span', { className: 'text-tekOrange', children: 'Tek Talent' }),
											' Africa Community',
										],
									}),
									m.jsx('p', {
										className:
											'text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto',
										children:
											'A vibrant community of tech enthusiasts, developers and innovators building the future of technology in Africa.',
									}),
									m.jsxs('div', {
										className: 'flex flex-wrap gap-4 justify-center',
										children: [
											m.jsx(ze, {
												className: 'bg-tekOrange hover:bg-orange-600 text-white text-lg px-8 py-6',
												children: 'Join Our Community',
											}),
											m.jsx(ze, {
												variant: 'outline',
												className:
													'border-tekOrange text-tekOrange hover:bg-tekOrange/10 text-lg px-8 py-6',
												children: 'Learn More',
											}),
										],
									}),
								],
							}),
						}),
						m.jsxs('div', {
							className: 'w-full mt-12',
							children: [
								m.jsx('div', {
									className: 'carousel-container w-full mb-4',
									children: m.jsxs('div', {
										className: 'carousel-track carousel-track-right',
										children: [
											l.map((u, d) =>
												m.jsx(
													'div',
													{
														className: 'flex-shrink-0 w-80 h-60 p-1',
														children: m.jsx('img', {
															src: u,
															alt: `Tech Event ${d}`,
															className: 'w-full h-full object-cover rounded-lg shadow-md',
														}),
													},
													`top-${d}`
												)
											),
											l.map((u, d) =>
												m.jsx(
													'div',
													{
														className: 'flex-shrink-0 w-80 h-60 p-1',
														children: m.jsx('img', {
															src: u,
															alt: `Tech Event ${d}`,
															className: 'w-full h-full object-cover rounded-lg shadow-md',
														}),
													},
													`top-repeat-${d}`
												)
											),
										],
									}),
								}),
								m.jsx('div', {
									className: 'carousel-container w-full',
									children: m.jsxs('div', {
										className: 'carousel-track carousel-track-left',
										children: [
											a.map((u, d) =>
												m.jsx(
													'div',
													{
														className: 'flex-shrink-0 w-80 h-60 p-1',
														children: m.jsx('img', {
															src: u,
															alt: `Tech Community ${d}`,
															className: 'w-full h-full object-cover rounded-lg shadow-md',
														}),
													},
													`bottom-${d}`
												)
											),
											a.map((u, d) =>
												m.jsx(
													'div',
													{
														className: 'flex-shrink-0 w-80 h-60 p-1',
														children: m.jsx('img', {
															src: u,
															alt: `Tech Community ${d}`,
															className: 'w-full h-full object-cover rounded-lg shadow-md',
														}),
													},
													`bottom-repeat-${d}`
												)
											),
										],
									}),
								}),
							],
						}),
						m.jsx('div', {
							className: 'absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce',
							children: m.jsx('div', {
								className:
									'w-8 h-12 border-2 border-tekOrange rounded-full flex items-start justify-center p-1',
								children: m.jsx('div', {
									className: 'w-1.5 h-3 bg-tekOrange rounded-full animate-bounce-subtle',
								}),
							}),
						}),
					],
				}),
				m.jsx('section', {
					id: 'about',
					ref: o,
					className: 'py-20 bg-gray-50 dark:bg-gray-800',
					children: m.jsxs('div', {
						className: 'container mx-auto px-4',
						children: [
							m.jsxs('div', {
								className: `text-center mb-16 ${n.includes('about') ? 'animate-fade-in' : 'opacity-0'}`,
								children: [
									m.jsx('h2', {
										className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white',
										children: 'About Us',
									}),
									m.jsx('div', { className: 'w-24 h-1 bg-tekOrange mx-auto mb-6' }),
									m.jsx('p', {
										className: 'text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto',
										children:
											"We're building a community that nurtures tech talent and drives innovation across Africa.",
									}),
								],
							}),
							m.jsxs('div', {
								className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center',
								children: [
									m.jsx('div', {
										className: e
											? 'space-y-4'
											: `space-y-4 ${n.includes('about') ? 'animate-fade-in' : 'opacity-0'}`,
										children: e
											? m.jsxs(m.Fragment, {
													children: [
														m.jsx('div', { className: 'skeleton h-8 w-3/4 mb-2' }),
														m.jsx('div', { className: 'skeleton h-4 w-full' }),
														m.jsx('div', { className: 'skeleton h-4 w-full' }),
														m.jsx('div', { className: 'skeleton h-4 w-5/6' }),
														m.jsx('div', { className: 'skeleton h-8 w-1/2 mt-4' }),
													],
												})
											: m.jsxs(m.Fragment, {
													children: [
														m.jsx('h3', {
															className: 'text-2xl font-bold text-gray-800 dark:text-white',
															children: 'Our Mission',
														}),
														m.jsx('p', {
															className: 'text-gray-600 dark:text-gray-300',
															children:
																'Tek Talent Africa is dedicated to empowering tech enthusiasts with the knowledge, skills, and community support needed to thrive in the global technology landscape while solving local problems.',
														}),
														m.jsx('p', {
															className: 'text-gray-600 dark:text-gray-300',
															children:
																'We believe in collaboration, continuous learning, and creating opportunities for tech talent in Africa to grow and make meaningful contributions to the tech ecosystem.',
														}),
														m.jsx('div', {
															className: 'pt-4',
															children: m.jsx(ae, {
																to: '/about',
																children: m.jsx(ze, {
																	variant: 'outline',
																	className:
																		'border-tekOrange text-tekOrange hover:bg-tekOrange/10',
																	children: 'Learn More About Us',
																}),
															}),
														}),
													],
												}),
									}),
									m.jsx('div', {
										className: e
											? 'h-80'
											: `h-80 overflow-hidden rounded-xl shadow-lg ${n.includes('about') ? 'animate-fade-in' : 'opacity-0'}`,
										children: e
											? m.jsx('div', { className: 'skeleton h-full w-full rounded-xl' })
											: m.jsx('img', {
													src: 'public/uploads/tektalentlogo.png',
													alt: 'Tek Talent comunity',
													className: 'w-full h-full object-cover',
												}),
									}),
								],
							}),
						],
					}),
				}),
				m.jsx('section', {
					id: 'features',
					ref: i,
					className: 'py-20 bg-white dark:bg-gray-900',
					children: m.jsxs('div', {
						className: 'container mx-auto px-4',
						children: [
							m.jsxs('div', {
								className: `text-center mb-16 ${n.includes('features') ? 'animate-fade-in' : 'opacity-0'}`,
								children: [
									m.jsx('h2', {
										className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white',
										children: 'What We Do',
									}),
									m.jsx('div', { className: 'w-24 h-1 bg-tekOrange mx-auto mb-6' }),
									m.jsx('p', {
										className: 'text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto',
										children:
											"Discover the various initiatives and activities we're undertaking to foster tech growth and innovation.",
									}),
								],
							}),
							m.jsxs('div', {
								className: 'grid grid-cols-1 md:grid-cols-3 gap-8',
								children: [
									e
										? m.jsx(Bl, {})
										: m.jsxs('div', {
												className: `rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${n.includes('features') ? 'animate-fade-in delay-100' : 'opacity-0'}`,
												children: [
													m.jsx('div', {
														className: 'h-48 overflow-hidden',
														children: m.jsx('img', {
															src: 'public/uploads/tektalentlogo.png',
															alt: 'Tech Events',
															className: 'w-full h-full object-cover',
														}),
													}),
													m.jsxs('div', {
														className: 'p-6',
														children: [
															m.jsx('h3', {
																className: 'text-xl font-bold mb-3 text-gray-800 dark:text-white',
																children: 'Events & Activities',
															}),
															m.jsx('p', {
																className: 'text-gray-600 dark:text-gray-300 mb-4',
																children:
																	'From workshops to hackathons, we organize a variety of events to help you learn, connect, and grow your skills.',
															}),
															m.jsx(ae, {
																to: '/events',
																children: m.jsxs(ze, {
																	variant: 'ghost',
																	className:
																		'text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center',
																	children: [
																		'Explore Events ',
																		m.jsx(Dl, { size: 16, className: 'ml-1' }),
																	],
																}),
															}),
														],
													}),
												],
											}),
									e
										? m.jsx(Bl, {})
										: m.jsxs('div', {
												className: `rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${n.includes('features') ? 'animate-fade-in delay-200' : 'opacity-0'}`,
												children: [
													m.jsx('div', {
														className: 'h-48 overflow-hidden',
														children: m.jsx('img', {
															src: 'public/uploads/tektalentlogo.png',
															alt: 'Tech Projects',
															className: 'w-full h-full object-cover',
														}),
													}),
													m.jsxs('div', {
														className: 'p-6',
														children: [
															m.jsx('h3', {
																className: 'text-xl font-bold mb-3 text-gray-800 dark:text-white',
																children: 'Projects',
															}),
															m.jsx('p', {
																className: 'text-gray-600 dark:text-gray-300 mb-4',
																children:
																	'Collaborative projects where members work together to build solutions for real-world challenges.',
															}),
															m.jsx(ae, {
																to: '/projects',
																children: m.jsxs(ze, {
																	variant: 'ghost',
																	className:
																		'text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center',
																	children: [
																		'Discover Projects ',
																		m.jsx(Dl, { size: 16, className: 'ml-1' }),
																	],
																}),
															}),
														],
													}),
												],
											}),
									e
										? m.jsx(Bl, {})
										: m.jsxs('div', {
												className: `rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 ${n.includes('features') ? 'animate-fade-in delay-300' : 'opacity-0'}`,
												children: [
													m.jsx('div', {
														className: 'h-48 overflow-hidden',
														children: m.jsx('img', {
															src: 'public/uploads/tektalentlogo.png',
															alt: 'Tech Blog',
															className: 'w-full h-full object-cover',
														}),
													}),
													m.jsxs('div', {
														className: 'p-6',
														children: [
															m.jsx('h3', {
																className: 'text-xl font-bold mb-3 text-gray-800 dark:text-white',
																children: 'Blog',
															}),
															m.jsx('p', {
																className: 'text-gray-600 dark:text-gray-300 mb-4',
																children:
																	'Insights, tutorials, and stories from our community members and tech experts in Africa and beyond.',
															}),
															m.jsx(ae, {
																to: '/blog',
																children: m.jsxs(ze, {
																	variant: 'ghost',
																	className:
																		'text-tekOrange hover:bg-tekOrange/10 p-0 flex items-center',
																	children: [
																		'Read Articles ',
																		m.jsx(Dl, { size: 16, className: 'ml-1' }),
																	],
																}),
															}),
														],
													}),
												],
											}),
								],
							}),
						],
					}),
				}),
				m.jsx('section', {
					id: 'cta',
					ref: s,
					className: 'py-20 bg-gradient-to-r from-tekOrange to-orange-600 text-white',
					children: m.jsx('div', {
						className: 'container mx-auto px-4',
						children: m.jsxs('div', {
							className: `text-center max-w-3xl mx-auto ${n.includes('cta') ? 'animate-fade-in' : 'opacity-0'}`,
							children: [
								m.jsx('h2', {
									className: 'text-3xl md:text-4xl font-bold mb-6',
									children: 'Join Our Growing Community',
								}),
								m.jsx('p', {
									className: 'text-lg mb-8',
									children:
										'Connect with like-minded tech enthusiasts, access resources, participate in events and grow your skills with the Tek Talent Africa community.',
								}),
								m.jsx(ze, {
									size: 'lg',
									className: 'bg-white text-tekOrange hover:bg-gray-100 text-lg px-8 py-6',
									children: 'Become a Member',
								}),
							],
						}),
					}),
				}),
				m.jsx(ag, {}),
			],
		});
	},
	ak = () =>
		m.jsx('div', {
			className: 'min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4',
			children: m.jsxs('div', {
				className: 'max-w-md w-full text-center space-y-6',
				children: [
					m.jsx('div', {
						className: 'text-tekOrange',
						children: m.jsx('h1', { className: 'text-9xl font-bold', children: '404' }),
					}),
					m.jsx('h2', {
						className: 'text-3xl font-bold text-gray-800 dark:text-white',
						children: 'Page Not Found',
					}),
					m.jsx('p', {
						className: 'text-lg text-gray-600 dark:text-gray-300',
						children: "The page you're looking for doesn't exist or has been moved.",
					}),
					m.jsx('div', {
						className: 'pt-6',
						children: m.jsx(ae, {
							to: '/',
							children: m.jsx(ze, {
								className: 'bg-tekOrange hover:bg-orange-600 text-white',
								children: 'Return to Home',
							}),
						}),
					}),
				],
			}),
		}),
	uk = new tk(),
	ck = z0,
	dk = () =>
		m.jsx(rk, {
			client: uk,
			children: m.jsxs(_S, {
				children: [
					m.jsx(jw, {}),
					m.jsx(i1, {}),
					m.jsx(ck, {
						children: m.jsxs('div', {
							className: 'flex flex-col min-h-screen dark:bg-gray-900',
							children: [
								m.jsx(ik, {}),
								m.jsx('main', {
									className: 'flex-grow',
									children: m.jsxs(O0, {
										children: [
											m.jsx(Ia, { path: '*', element: m.jsx(lk, {}) }),
											m.jsx(Ia, { path: '/', element: m.jsx(ak, {}) }),
										],
									}),
								}),
								m.jsx(sk, {}),
								m.jsx(ag, {}),
							],
						}),
					}),
				],
			}),
		});
jh(document.getElementById('root')).render(m.jsx(dk, {}));
