(function () {
	var h = {}, mt = {}, c = {
		id: "1331f25c781162db9003a44282c234a3",
		dm: ["hly.com"],
		js: "tongji.baidu.com/hm-web/js/",
		etrk: [],
		icon: '/hmt/icon/21|gif|20|20',
		ctrk: false,
		align: -1,
		nv: -1,
		vdur: 1800000,
		age: 31536000000,
		rec: 0,
		rp: [],
		trust: 1,
		vcard: 5144164,
		qiao: 0,
		lxb: 0,
		conv: 0,
		med: 0,
		cvcc: {q: /tencent:\/\/|qq\.(com|htm)|kefu|openkf|swt|zoos|53kf|doyoo|looyu|leyu|zixun|chat|talk|openQQ|open_ask|online/i},
		cvcf: ['save_btn'],
		apps: ''
	};
	var q = void 0, r = !0, s = null, u = !1;
	mt.i = {};
	mt.i.Ca = /msie (\d+\.\d+)/i.test(navigator.userAgent);
	mt.i.Aa = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : q;
	mt.i.cookieEnabled = navigator.cookieEnabled;
	mt.i.javaEnabled = navigator.javaEnabled();
	mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
	mt.i.Ea = (window.screen.width || 0) + "x" + (window.screen.height || 0);
	mt.i.colorDepth = window.screen.colorDepth || 0;
	mt.cookie = {};
	mt.cookie.set = function (a, e, f) {
		var d;
		f.I && (d = new Date, d.setTime(d.getTime() + f.I));
		document.cookie = a + "=" + e + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (f.$a ? "; secure" : "")
	};
	mt.cookie.get = function (a) {
		return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : s
	};
	mt.p = {};
	mt.p.T = function (a) {
		return document.getElementById(a)
	};
	mt.p.Ua = function (a, e) {
		for (e = e.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == e) return a;
		return s
	};
	(mt.p.O = function () {
		function a () {
			if (!a.C) {
				a.C = r;
				for (var e = 0, f = d.length; e < f; e++) d[e]()
			}
		}

		function e () {
			try {
				document.documentElement.doScroll("left")
			} catch (d) {
				setTimeout(e, 1);
				return
			}
			a()
		}

		var f = u, d = [], k;
		document.addEventListener ? k = function () {
			document.removeEventListener("DOMContentLoaded", k, u);
			a()
		} : document.attachEvent && (k = function () {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", k), a())
		});
		(function () {
			if (!f) if (f = r, "complete" === document.readyState) a.C = r; else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
				k, u), window.addEventListener("load", a, u); else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", k);
				window.attachEvent("onload", a);
				var d = u;
				try {
					d = window.frameElement == s
				} catch (n) {
				}
				document.documentElement.doScroll && d && e()
			}
		})();
		return function (e) {
			a.C ? e() : d.push(e)
		}
	}()).C = u;
	mt.event = {};
	mt.event.c = function (a, e, f) {
		a.attachEvent ? a.attachEvent("on" + e, function (d) {
			f.call(a, d)
		}) : a.addEventListener && a.addEventListener(e, f, u)
	};
	mt.event.preventDefault = function (a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = u
	};
	mt.j = {};
	mt.j.parse = function () {
		return (new Function('return (" + source + ")'))()
	};
	mt.j.stringify = function () {
		function a (a) {
			/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
				var d = f[a];
				if (d) return d;
				d = a.charCodeAt();
				return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
			}));
			return '"' + a + '"'
		}

		function e (a) {
			return 10 > a ? "0" + a : a
		}

		var f = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
		return function (d) {
			switch (typeof d) {
				case "undefined":
					return "undefined";
				case "number":
					return isFinite(d) ? String(d) : "null";
				case "string":
					return a(d);
				case "boolean":
					return String(d);
				default:
					if (d === s) return "null";
					if (d instanceof Array) {
						var f = ["["], l = d.length, n, p, g;
						for (p = 0; p < l; p++) switch (g = d[p], typeof g) {
							case "undefined":
							case "function":
							case "unknown":
								break;
							default:
								n && f.push(","), f.push(mt.j.stringify(g)), n = 1
						}
						f.push("]");
						return f.join("")
					}
					if (d instanceof Date) return '"' + d.getFullYear() + "-" + e(d.getMonth() + 1) + "-" + e(d.getDate()) + "T" + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds()) + '"';
					n = ["{"];
					p = mt.j.stringify;
					for (l in d) if (Object.prototype.hasOwnProperty.call(d, l)) switch (g =
						d[l], typeof g) {
						case "undefined":
						case "unknown":
						case "function":
							break;
						default:
							f && n.push(","), f = 1, n.push(p(l) + ":" + p(g))
					}
					n.push("}");
					return n.join("")
			}
		}
	}();
	mt.lang = {};
	mt.lang.d = function (a, e) {
		return "[object " + e + "]" === {}.toString.call(a)
	};
	mt.lang.Xa = function (a) {
		return mt.lang.d(a, "Number") && isFinite(a)
	};
	mt.lang.Za = function (a) {
		return mt.lang.d(a, "String")
	};
	mt.localStorage = {};
	mt.localStorage.G = function () {
		if (!mt.localStorage.g) try {
			mt.localStorage.g = document.createElement("input"), mt.localStorage.g.type = "hidden", mt.localStorage.g.style.display = "none", mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
		} catch (a) {
			return u
		}
		return r
	};
	mt.localStorage.set = function (a, e, f) {
		var d = new Date;
		d.setTime(d.getTime() + f || 31536E6);
		try {
			window.localStorage ? (e = d.getTime() + "|" + e, window.localStorage.setItem(a, e)) : mt.localStorage.G() && (mt.localStorage.g.expires = d.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, e), mt.localStorage.g.save(document.location.hostname))
		} catch (k) {
		}
	};
	mt.localStorage.get = function (a) {
		if (window.localStorage) {
			if (a = window.localStorage.getItem(a)) {
				var e = a.indexOf("|"), f = a.substring(0, e) - 0;
				if (f && f > (new Date).getTime()) return a.substring(e + 1)
			}
		} else if (mt.localStorage.G()) try {
			return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(a)
		} catch (d) {
		}
		return s
	};
	mt.localStorage.remove = function (a) {
		if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.G()) try {
			mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(a), mt.localStorage.g.save(document.location.hostname)
		} catch (e) {
		}
	};
	mt.sessionStorage = {};
	mt.sessionStorage.set = function (a, e) {
		if (window.sessionStorage) try {
			window.sessionStorage.setItem(a, e)
		} catch (f) {
		}
	};
	mt.sessionStorage.get = function (a) {
		return window.sessionStorage ? window.sessionStorage.getItem(a) : s
	};
	mt.sessionStorage.remove = function (a) {
		window.sessionStorage && window.sessionStorage.removeItem(a)
	};
	mt.$ = {};
	mt.$.log = function (a, e) {
		var f = new Image, d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
		window[d] = f;
		f.onload = f.onerror = f.onabort = function () {
			f.onload = f.onerror = f.onabort = s;
			f = window[d] = s;
			e && e(a)
		};
		f.src = a
	};
	mt.F = {};
	mt.F.sa = function () {
		var a = "";
		if (navigator.plugins && navigator.mimeTypes.length) {
			var e = navigator.plugins["Shockwave Flash"];
			e && e.description && (a = e.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
		} else if (window.ActiveXObject) try {
			if (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = e.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
		} catch (f) {
		}
		return a
	};
	mt.F.ga = function (a, e, f, d, k) {
		return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + e + '" /><param name="flashvars" value="' + (k || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + e + '" flashvars="' + (k || "") + '" allowscriptaccess="always" /></object>'
	};
	mt.url = {};
	mt.url.f = function (a, e) {
		var f = a.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
		return f ? f[3] : s
	};
	mt.url.Wa = function (a) {
		return (a = a.match(/^(https?:)\/\//)) ? a[1] : s
	};
	mt.url.pa = function (a) {
		return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : s
	};
	mt.url.V = function (a) {
		return (a = mt.url.pa(a)) ? a.replace(/:\d+$/, "") : a
	};
	mt.url.Va = function (a) {
		return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : s
	};
	(function () {
		function a () {
			for (var a = u, f = document.getElementsByTagName("script"), d = f.length, d = 100 < d ? 100 : d, k = 0; k < d; k++) {
				var l = f[k].src;
				if (l && 0 === l.indexOf("https://hm.baidu.com/h")) {
					a = r;
					break
				}
			}
			return a
		}

		return h.na = a
	})();
	var A = h.na;
	h.o = {
		za: "http://tongji.baidu.com/hm-web/welcome/ico",
		Z: "hm.baidu.com/hm.gif",
		da: "baidu.com",
		wa: "hmmd",
		xa: "hmpl",
		Na: "utm_medium",
		va: "hmkw",
		Pa: "utm_term",
		ta: "hmci",
		Ma: "utm_content",
		ya: "hmsr",
		Oa: "utm_source",
		ua: "hmcu",
		La: "utm_campaign",
		s: 0,
		k: Math.round(+new Date / 1E3),
		R: Math.round(+new Date / 1E3) % 65535,
		protocol: "https:" === document.location.protocol ? "https:" : "http:",
		M: A() || "https:" === document.location.protocol ? "https:" : "http:",
		Ya: 0,
		Ra: 6E5,
		Sa: 10,
		Ta: 1024,
		Qa: 1,
		z: 2147483647,
		aa: "cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")
	};
	(function () {
		var a = {
			m: {}, c: function (a, f) {
				this.m[a] = this.m[a] || [];
				this.m[a].push(f)
			}, A: function (a, f) {
				this.m[a] = this.m[a] || [];
				for (var d = this.m[a].length, k = 0; k < d; k++) this.m[a][k](f)
			}
		};
		return h.r = a
	})();
	(function () {
		function a (a, d) {
			var k = document.createElement("script");
			k.charset = "utf-8";
			e.d(d, "Function") && (k.readyState ? k.onreadystatechange = function () {
				if ("loaded" === k.readyState || "complete" === k.readyState) k.onreadystatechange = s, d()
			} : k.onload = function () {
				d()
			});
			k.src = a;
			var l = document.getElementsByTagName("script")[0];
			l.parentNode.insertBefore(k, l)
		}

		var e = mt.lang;
		return h.load = a
	})();
	(function () {
		function a () {
			var a = "";
			h.b.a.nv ? (a = encodeURIComponent(document.referrer), window.sessionStorage ? f.set("Hm_from_" + c.id, a) : e.set("Hm_from_" + c.id, a, 864E5)) : a = (window.sessionStorage ? f.get("Hm_from_" + c.id) : e.get("Hm_from_" + c.id)) || "";
			return a
		}

		var e = mt.localStorage, f = mt.sessionStorage;
		return h.S = a
	})();
	(function () {
		var a = h.o, e = mt.F, f = {
			init: function () {
				if ("" !== c.icon) {
					var d;
					d = c.icon.split("|");
					var f = a.za + "?s=" + c.id,
						l = ("http:" == a.protocol ? "http://eiv" : "https://bs") + ".baidu.com" + d[0] + "." + d[1];
					switch (d[1]) {
						case "swf":
							d = e.ga("HolmesIcon" + a.k, l, d[2], d[3], "s=" + f);
							break;
						case "gif":
							d = '<a href="' + f + '" target="_blank"><img border="0" src="' + l + '" width="' + d[2] + '" height="' + d[3] + '"></a>';
							break;
						default:
							d = '<a href="' + f + '" target="_blank">' + d[0] + "</a>"
					}
					document.write(d)
				}
			}
		};
		h.r.c("pv-b", f.init);
		return f
	})();
	(function () {
		var a = mt.p, e = h.o, f = h.load, d = h.S;
		h.r.c("pv-b", function () {
			var k = e.protocol + "//crs.baidu.com/";
			c.rec && a.O(function () {
				for (var l = 0, n = c.rp.length; l < n; l++) {
					var p = c.rp[l][0], g = c.rp[l][1], b = a.T("hm_t_" + p);
					if (g && !(2 == g && !b || b && "" !== b.innerHTML)) b = "", b = Math.round(Math.random() * e.z), b = 4 == g ? k + "hl.js?" + ["siteId=" + c.id, "planId=" + p, "rnd=" + b].join("&") : k + "t.js?" + ["siteId=" + c.id, "planId=" + p, "from=" + d(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" + b].join("&"),
						f(b)
				}
			})
		})
	})();
	(function () {
		var a = h.o, e = h.load, f = h.S;
		h.r.c("pv-b", function () {
			if (c.trust && c.vcard) {
				var d = "https://tag.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + f(), "rnd=" + Math.round(Math.random() * a.z), "hm=1"].join("&");
				e(d)
			}
		})
	})();
	(function () {
		function a () {
			return function () {
				h.b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.H.qa() + "," + h.H.oa();
				h.b.h()
			}
		}

		function e () {
			clearTimeout(y);
			var a;
			x && (a = "visible" == document[x]);
			z && (a = !document[z]);
			p = "undefined" == typeof a ? r : a;
			if ((!n || !g) && p && b) v = r, m = +new Date; else if (n && g && (!p || !b)) v = u, t += +new Date - m;
			n = p;
			g = b;
			y = setTimeout(e, 100)
		}

		function f (b) {
			var a = document, m = "";
			if (b in a) m = b; else for (var d = ["webkit", "ms", "moz", "o"], t = 0; t < d.length; t++) {
				var e = d[t] + b.charAt(0).toUpperCase() + b.slice(1);
				if (e in a) {
					m =
						e;
					break
				}
			}
			return m
		}

		function d (a) {
			if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) b = "focus" == a.type || "focusin" == a.type ? r : u, e()
		}

		var k = mt.event, l = h.r, n = r, p = r, g = r, b = r, w = +new Date, m = w, t = 0, v = r,
			x = f("visibilityState"), z = f("hidden"), y;
		e();
		(function () {
			var b = x.replace(/[vV]isibilityState/, "visibilitychange");
			k.c(document, b, e);
			k.c(window, "pageshow", e);
			k.c(window, "pagehide", e);
			"object" == typeof document.onfocusin ? (k.c(document, "focusin", d), k.c(document, "focusout", d)) : (k.c(window, "focus", d),
				k.c(window, "blur", d))
		})();
		h.H = {
			qa: function () {
				return +new Date - w
			}, oa: function () {
				return v ? +new Date - m + t : t
			}
		};
		l.c("pv-b", function () {
			k.c(window, "unload", a())
		});
		return h.H
	})();
	(function () {
		var a = mt.lang, e = h.o, f = h.load, d = {
			Ba: function (d) {
				if ((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
					var l = h.b.J();
					f([e.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), d)
				}
			}, Ka: function (d) {
				if (a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
			}
		};
		return h.ha = d
	})();
	(function () {
		function a (b, a, m, d) {
			if (!(b === q || a === q || d === q)) {
				if ("" === b) return [a, m, d].join("*");
				b = String(b).split("!");
				for (var e, f = u, g = 0; g < b.length; g++) if (e = b[g].split("*"), String(a) === e[0]) {
					e[1] = m;
					e[2] = d;
					b[g] = e.join("*");
					f = r;
					break
				}
				f || b.push([a, m, d].join("*"));
				return b.join("!")
			}
		}

		function e (b) {
			for (var a in b) if ({}.hasOwnProperty.call(b, a)) {
				var m = b[a];
				d.d(m, "Object") || d.d(m, "Array") ? e(m) : b[a] = String(m)
			}
		}

		function f (b) {
			return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
		}

		var d =
			mt.lang, k = mt.j, l = h.o, n = h.r, p = h.ha, g = {
			w: [], D: 0, X: u, l: {Q: "", page: ""}, init: function () {
				g.e = 0;
				n.c("pv-b", function () {
					g.ia();
					g.la()
				});
				n.c("pv-d", function () {
					g.ma();
					g.l.page = ""
				});
				n.c("stag-b", function () {
					h.b.a.api = g.e || g.D ? g.e + "_" + g.D : "";
					h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), g.l.Q, g.l.page].join("!")
				});
				n.c("stag-d", function () {
					h.b.a.api = 0;
					g.e = 0;
					g.D = 0
				})
			}, ia: function () {
				var b = window._hmt || [];
				if (!b || d.d(b, "Array")) window._hmt = {
					id: c.id, cmd: {}, push: function () {
						for (var b = window._hmt, a = 0; a < arguments.length; a++) {
							var e =
								arguments[a];
							d.d(e, "Array") && (b.cmd[b.id].push(e), "_setAccount" === e[0] && (1 < e.length && /^[0-9a-f]{32}$/.test(e[1])) && (e = e[1], b.id = e, b.cmd[e] = b.cmd[e] || []))
						}
					}
				}, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
			}, la: function () {
				var b = window._hmt;
				if (b && b.cmd && b.cmd[c.id]) for (var a = b.cmd[c.id], m = /^_track(Event|MobConv|Order|RTEvent)$/, d = 0, e = a.length; d < e; d++) {
					var f = a[d];
					m.test(f[0]) ? g.w.push(f) : g.N(f)
				}
				b.cmd[c.id] = {push: g.N}
			}, ma: function () {
				if (0 < g.w.length) for (var b = 0, a = g.w.length; b < a; b++) g.N(g.w[b]);
				g.w = s
			}, N: function (b) {
				var a = b[0];
				if (g.hasOwnProperty(a) && d.d(g[a], "Function")) g[a](b)
			}, _setAccount: function (b) {
				1 < b.length && /^[0-9a-f]{32}$/.test(b[1]) && (g.e |= 1)
			}, _setAutoPageview: function (b) {
				if (1 < b.length && (b = b[1], u === b || r === b)) g.e |= 2, h.b.W = b
			}, _trackPageview: function (b) {
				if (1 < b.length && b[1].charAt && "/" === b[1].charAt(0)) {
					g.e |= 4;
					h.b.a.et = 0;
					h.b.a.ep = "";
					h.b.K ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.K = r;
					var a = h.b.a.u, m = h.b.a.su;
					h.b.a.u = l.protocol + "//" + document.location.host + b[1];
					g.X || (h.b.a.su = document.location.href);
					h.b.h();
					h.b.a.u = a;
					h.b.a.su = m
				}
			}, _trackEvent: function (b) {
				2 < b.length && (g.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = f(b[1]) + "*" + f(b[2]) + (b[3] ? "*" + f(b[3]) : "") + (b[4] ? "*" + f(b[4]) : ""), h.b.h())
			}, _setCustomVar: function (b) {
				if (!(4 > b.length)) {
					var a = b[1], m = b[4] || 3;
					if (0 < a && 6 > a && 0 < m && 4 > m) {
						g.D++;
						for (var d = (h.b.a.cv || "*").split("!"), e = d.length; e < a - 1; e++) d.push("*");
						d[a - 1] = m + "*" + f(b[2]) + "*" + f(b[3]);
						h.b.a.cv = d.join("!");
						b = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
						"" !== b ? h.b.setData("Hm_cv_" +
							c.id, encodeURIComponent(b), c.age) : h.b.Da("Hm_cv_" + c.id)
					}
				}
			}, _setUserTag: function (b) {
				if (!(3 > b.length)) {
					var d = f(b[1]);
					b = f(b[2]);
					if (d !== q && b !== q) {
						var m = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), m = a(m, d, 1, b);
						h.b.setData("Hm_ct_" + c.id, encodeURIComponent(m), c.age)
					}
				}
			}, _setVisitTag: function (b) {
				if (!(3 > b.length)) {
					var d = f(b[1]);
					b = f(b[2]);
					if (d !== q && b !== q) {
						var m = g.l.Q, m = a(m, d, 2, b);
						g.l.Q = m
					}
				}
			}, _setPageTag: function (b) {
				if (!(3 > b.length)) {
					var d = f(b[1]);
					b = f(b[2]);
					if (d !== q && b !== q) {
						var m = g.l.page, m = a(m, d, 3, b);
						g.l.page = m
					}
				}
			}, _setReferrerOverride: function (a) {
				1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? l.protocol + "//" + window.location.host + a[1] : a[1], g.X = r)
			}, _trackOrder: function (a) {
				a = a[1];
				d.d(a, "Object") && (e(a), g.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = k.stringify(a), h.b.h())
			}, _trackMobConv: function (a) {
				if (a = {
						webim: 1,
						tel: 2,
						map: 3,
						sms: 4,
						callback: 5,
						share: 6
					}[a[1]]) g.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.h()
			}, _trackRTPageview: function (a) {
				a = a[1];
				d.d(a, "Object") && (e(a), a = k.stringify(a), 512 >= encodeURIComponent(a).length &&
				(g.e |= 64, h.b.a.rt = a))
			}, _trackRTEvent: function (a) {
				a = a[1];
				if (d.d(a, "Object")) {
					e(a);
					a = encodeURIComponent(k.stringify(a));
					var f = function (a) {
						var b = h.b.a.rt;
						g.e |= 128;
						h.b.a.et = 90;
						h.b.a.rt = a;
						h.b.h();
						h.b.a.rt = b
					}, m = a.length;
					if (900 >= m) f.call(this, a); else for (var m = Math.ceil(m / 900), t = "block|" + Math.round(Math.random() * l.z).toString(16) + "|" + m + "|", v = [], x = 0; x < m; x++) v.push(x), v.push(a.substring(900 * x, 900 * x + 900)), f.call(this, t + v.join("|")), v = []
				}
			}, _setUserId: function (a) {
				a = a[1];
				p.Ba();
				p.Ka(a)
			}
		};
		g.init();
		h.ea = g;
		return h.ea
	})();
	(function () {
		function a () {
			"undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = r, this.a = {}, this.W = r, this.K = u, this.init())
		}

		var e = mt.url, f = mt.$, d = mt.F, k = mt.lang, l = mt.cookie, n = mt.i, p = mt.localStorage,
			g = mt.sessionStorage, b = h.o, w = h.r;
		a.prototype = {
			L: function (a, b) {
				a = "." + a.replace(/:\d+/, "");
				b = "." + b.replace(/:\d+/, "");
				var d = a.indexOf(b);
				return -1 < d && d + b.length === a.length
			}, Y: function (a, b) {
				a = a.replace(/^https?:\/\//, "");
				return 0 === a.indexOf(b)
			}, B: function (a) {
				for (var b = 0; b < c.dm.length; b++) if (-1 <
					c.dm[b].indexOf("/")) {
					if (this.Y(a, c.dm[b])) return r
				} else {
					var d = e.V(a);
					if (d && this.L(d, c.dm[b])) return r
				}
				return u
			}, J: function () {
				for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.L(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
				return a
			}, U: function () {
				for (var a = 0, b = c.dm.length; a < b; a++) {
					var d = c.dm[a];
					if (-1 < d.indexOf("/") && this.Y(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
				}
				return "/"
			}, ra: function () {
				if (!document.referrer) return b.k - b.s > c.vdur ? 1 : 4;
				var a =
					u;
				this.B(document.referrer) && this.B(document.location.href) ? a = r : (a = e.V(document.referrer), a = this.L(a || "", document.location.hostname));
				return a ? b.k - b.s > c.vdur ? 1 : 4 : 3
			}, getData: function (a) {
				try {
					return l.get(a) || g.get(a) || p.get(a)
				} catch (b) {
				}
			}, setData: function (a, b, d) {
				try {
					l.set(a, b, {domain: this.J(), path: this.U(), I: d}), d ? p.set(a, b, d) : g.set(a, b)
				} catch (e) {
				}
			}, Da: function (a) {
				try {
					l.set(a, "", {domain: this.J(), path: this.U(), I: -1}), g.remove(a), p.remove(a)
				} catch (b) {
				}
			}, Ia: function () {
				var a, d, e, f, g;
				b.s = this.getData("Hm_lpvt_" +
					c.id) || 0;
				13 === b.s.length && (b.s = Math.round(b.s / 1E3));
				d = this.ra();
				a = 4 !== d ? 1 : 0;
				if (e = this.getData("Hm_lvt_" + c.id)) {
					f = e.split(",");
					for (g = f.length - 1; 0 <= g; g--) 13 === f[g].length && (f[g] = "" + Math.round(f[g] / 1E3));
					for (; 2592E3 < b.k - f[0];) f.shift();
					g = 4 > f.length ? 2 : 3;
					for (1 === a && f.push(b.k); 4 < f.length;) f.shift();
					e = f.join(",");
					f = f[f.length - 1]
				} else e = b.k, f = "", g = 1;
				this.setData("Hm_lvt_" + c.id, e, c.age);
				this.setData("Hm_lpvt_" + c.id, b.k);
				e = b.k === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
				if (0 === c.nv && this.B(document.location.href) &&
					("" === document.referrer || this.B(document.referrer))) a = 0, d = 4;
				this.a.nv = a;
				this.a.st = d;
				this.a.cc = e;
				this.a.lt = f;
				this.a.lv = g
			}, Ha: function () {
				for (var a = [], d = this.a.et, e = 0, f = b.aa.length; e < f; e++) {
					var g = b.aa[e], k = this.a[g];
					"undefined" !== typeof k && "" !== k && ("tt" !== g || "tt" === g && 0 === d) && ("ct" !== g || "ct" === g && 0 === d) && a.push(g + "=" + encodeURIComponent(k))
				}
				switch (d) {
					case 0:
						a.push("sn=" + b.R);
						this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
						break;
					case 3:
						a.push("sn=" + b.R);
						break;
					case 90:
						this.a.rt && a.push("rt=" + this.a.rt)
				}
				return a.join("&")
			},
			Ja: function () {
				this.Ia();
				this.a.si = c.id;
				this.a.su = document.referrer;
				this.a.ds = n.Ea;
				this.a.cl = n.colorDepth + "-bit";
				this.a.ln = String(n.language).toLowerCase();
				this.a.ja = n.javaEnabled ? 1 : 0;
				this.a.ck = n.cookieEnabled ? 1 : 0;
				this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
				this.a.fl = d.sa();
				this.a.v = "1.2.16";
				this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
				this.a.tt = document.title || "";
				var a = document.location.href;
				this.a.cm = e.f(a, b.wa) || "";
				this.a.cp = e.f(a, b.xa) || e.f(a, b.Na) || "";
				this.a.cw = e.f(a, b.va) || e.f(a,
					b.Pa) || "";
				this.a.ci = e.f(a, b.ta) || e.f(a, b.Ma) || "";
				this.a.cf = e.f(a, b.ya) || e.f(a, b.Oa) || "";
				this.a.cu = e.f(a, b.ua) || e.f(a, b.La) || ""
			}, init: function () {
				try {
					this.Ja(), 0 === this.a.nv ? this.Ga() : this.P(".*"), h.b = this, this.fa(), w.A("pv-b"), this.Fa()
				} catch (a) {
					var d = [];
					d.push("si=" + c.id);
					d.push("n=" + encodeURIComponent(a.name));
					d.push("m=" + encodeURIComponent(a.message));
					d.push("r=" + encodeURIComponent(document.referrer));
					f.log(b.M + "//" + b.Z + "?" + d.join("&"))
				}
			}, Fa: function () {
				function a () {
					w.A("pv-d")
				}

				this.W ? (this.K = r,
					this.a.et = 0, this.a.ep = "", this.h(a)) : a()
			}, h: function (a) {
				var d = this;
				d.a.rnd = Math.round(Math.random() * b.z);
				w.A("stag-b");
				var e = b.M + "//" + b.Z + "?" + d.Ha();
				w.A("stag-d");
				d.ca(e);
				f.log(e, function (b) {
					d.P(b);
					k.d(a, "Function") && a.call(d)
				})
			}, fa: function () {
				var a = document.location.hash.substring(1), d = RegExp(c.id), f = -1 < document.referrer.indexOf(b.da),
					g = e.f(a, "jn"), k = /^heatlink$|^select$/.test(g);
				a && (d.test(a) && f && k) && (this.a.rnd = Math.round(Math.random() * b.z), a = document.createElement("script"), a.setAttribute("type",
					"text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", b.protocol + "//" + c.js + g + ".js?" + this.a.rnd), g = document.getElementsByTagName("script")[0], g.parentNode.insertBefore(a, g))
			}, ca: function (a) {
				var b = g.get("Hm_unsent_" + c.id) || "",
					d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
					b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
				g.set("Hm_unsent_" + c.id, b)
			}, P: function (a) {
				var b = g.get("Hm_unsent_" + c.id) || "";
				b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")),
					a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? g.set("Hm_unsent_" + c.id, b) : g.remove("Hm_unsent_" + c.id))
			}, Ga: function () {
				var a = this, d = g.get("Hm_unsent_" + c.id);
				if (d) for (var d = d.split(","), e = function (d) {
					f.log(b.M + "//" + decodeURIComponent(d), function (b) {
						a.P(b)
					})
				}, k = 0, l = d.length; k < l; k++) e(d[k])
			}
		};
		return new a
	})();
	(function () {
		var a = mt.p, e = mt.event, f = mt.url, d = mt.j;
		try {
			if (window.performance && performance.timing && "undefined" !== typeof h.b) {
				var k = +new Date, l = function (a) {
					var d = performance.timing, e = d[a + "Start"] ? d[a + "Start"] : 0;
					a = d[a + "End"] ? d[a + "End"] : 0;
					return {start: e, end: a, value: 0 < a - e ? a - e : 0}
				}, n = s;
				a.O(function () {
					n = +new Date
				});
				var p = function () {
					var a, e, g;
					g = l("navigation");
					e = l("request");
					g = {
						netAll: e.start - g.start,
						netDns: l("domainLookup").value,
						netTcp: l("connect").value,
						srv: l("response").start - e.start,
						dom: performance.timing.domInteractive -
						performance.timing.fetchStart,
						loadEvent: l("loadEvent").end - g.start
					};
					a = document.referrer;
					var p = a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [], v = s;
					e = s;
					if ("www.baidu.com" === p[2] || "m.baidu.com" === p[2]) v = f.f(a, "qid"), e = f.f(a, "click_t");
					a = v;
					g.qid = a != s ? a : "";
					e != s ? (g.bdDom = n ? n - e : 0, g.bdRun = k - e, g.bdDef = l("navigation").start - e) : (g.bdDom = 0, g.bdRun = 0, g.bdDef = 0);
					h.b.a.et = 87;
					h.b.a.ep = d.stringify(g);
					h.b.h()
				};
				e.c(window, "load", function () {
					setTimeout(p, 500)
				})
			}
		} catch (g) {
		}
	})();
	(function () {
		var a = mt.i, e = mt.lang, f = mt.event, d = mt.j;
		if ("undefined" !== typeof h.b && (c.med || (!a.Ca || 7 < a.Aa) && c.cvcc)) {
			var k, l, n, p, g = function (a) {
				if (a.item) {
					for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
					return d
				}
				return [].slice.call(a)
			}, b = function (a, b) {
				for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === u) return u
			}, w = function (a, b) {
				var f = {};
				f.n = k;
				f.t = "clk";
				f.v = a;
				if (b) {
					var g = b.getAttribute("href"), l = b.getAttribute("onclick") ? "" + b.getAttribute("onclick") : s,
						m = b.getAttribute("id") || "";
					n.test(g) ? (f.sn = "mediate",
						f.snv = g) : e.d(l, "String") && n.test(l) && (f.sn = "wrap", f.snv = l);
					f.id = m
				}
				h.b.a.et = 86;
				h.b.a.ep = d.stringify(f);
				h.b.h();
				for (f = +new Date; 400 >= +new Date - f;) ;
			};
			if (c.med) l = "/zoosnet", k = "swt", n = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
				click: function () {
					for (var a = [], b = g(document.getElementsByTagName("a")), b = [].concat.apply(b, g(document.getElementsByTagName("area"))), b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f = 0, k = b.length; f < k; f++) d = b[f], e = d.getAttribute("onclick"),
						d = d.getAttribute("href"), (n.test(e) || n.test(d)) && a.push(b[f]);
					return a
				}
			}; else if (c.cvcc) {
				l = "/other-comm";
				k = "other";
				n = c.cvcc.q || q;
				var m = c.cvcc.id || q;
				p = {
					click: function () {
						for (var a = [], b = g(document.getElementsByTagName("a")), b = [].concat.apply(b, g(document.getElementsByTagName("area"))), b = [].concat.apply(b, g(document.getElementsByTagName("img"))), d, e, f, k = 0, l = b.length; k < l; k++) d = b[k], n !== q ? (e = d.getAttribute("onclick"), f = d.getAttribute("href"), m ? (d = d.getAttribute("id"), (n.test(e) || n.test(f) || m.test(d)) &&
						a.push(b[k])) : (n.test(e) || n.test(f)) && a.push(b[k])) : m !== q && (d = d.getAttribute("id"), m.test(d) && a.push(b[k]));
						return a
					}
				}
			}
			if ("undefined" !== typeof p && "undefined" !== typeof n) {
				var t;
				l += /\/$/.test(l) ? "" : "/";
				var v = function (a, b) {
					if (t === b) return w(l + a, b), u;
					if (e.d(b, "Array") || e.d(b, "NodeList")) for (var d = 0, f = b.length; d < f; d++) if (t === b[d]) return w(l + a + "/" + (d + 1), b[d]), u
				};
				f.c(document, "mousedown", function (a) {
					a = a || window.event;
					t = a.target || a.srcElement;
					var d = {};
					for (b(p, function (a, b) {
						d[a] = e.d(b, "Function") ? b() : document.getElementById(b)
					}); t &&
						 t !== document && b(d, v) !== u;) t = t.parentNode
				})
			}
		}
	})();
	(function () {
		var a = mt.p, e = mt.lang, f = mt.event, d = mt.j;
		if ("undefined" !== typeof h.b && e.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
			var k = {
				ba: function () {
					for (var d = c.cvcf.length, e, p = 0; p < d; p++) (e = a.T(decodeURIComponent(c.cvcf[p]))) && f.c(e, "click", k.ka())
				}, ka: function () {
					return function () {
						h.b.a.et = 86;
						var a = {n: "form", t: "clk"};
						a.id = this.id;
						h.b.a.ep = d.stringify(a);
						h.b.h()
					}
				}
			};
			a.O(function () {
				k.ba()
			})
		}
	})();
	(function () {
		var a = mt.event, e = mt.j;
		if (c.med && "undefined" !== typeof h.b) {
			var f = +new Date, d = {n: "anti", sb: 0, kb: 0, clk: 0}, k = function () {
				h.b.a.et = 86;
				h.b.a.ep = e.stringify(d);
				h.b.h()
			};
			a.c(document, "click", function () {
				d.clk++
			});
			a.c(document, "keyup", function () {
				d.kb = 1
			});
			a.c(window, "scroll", function () {
				d.sb++
			});
			a.c(window, "unload", function () {
				d.t = +new Date - f;
				k()
			});
			a.c(window, "load", function () {
				setTimeout(k, 5E3)
			})
		}
	})();
})();
