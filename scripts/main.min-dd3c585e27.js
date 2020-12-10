window.Modernizr = function (e, t, n) {
    function r(e) {
        m.cssText = e
    }

    function o(e, t) {
        return typeof e === t
    }

    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && m[o] !== n) return "pfx" == t ? o : !0
        }
        return !1
    }

    function a(e, t, r) {
        for (var i in e) {
            var l = t[e[i]];
            if (l !== n) return r === !1 ? e[i] : o(l, "function") ? l.bind(r || t) : l
        }
        return !1
    }

    function s(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + Y.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? l(i, t) : (i = (e + " " + X.join(r + " ") + r).split(" "), a(i, t, n))
    }

    var c, u, d, f = "2.6.2", p = {}, h = !0, g = t.documentElement, b = "modernizr", v = t.createElement(b),
        m = v.style, y = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), w = "Webkit Moz O ms", Y = w.split(" "),
        X = w.toLowerCase().split(" "), S = {}, R = [], W = R.slice, T = function (e, n, r, o) {
            var i, l, a, s, c = t.createElement("div"), u = t.body, d = u || t.createElement("body");
            if (parseInt(r, 10)) for (; r--;) a = t.createElement("div"), a.id = o ? o[r] : b + (r + 1), c.appendChild(a);
            return i = ["&#173;", '<style id="s', b, '">', e, "</style>"].join(""), c.id = b, (u ? c : d).innerHTML += i, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), l = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = s), !!l
        }, x = {}.hasOwnProperty;
    d = o(x, "undefined") || o(x.call, "undefined") ? function (e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return x.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = W.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var o = function () {
                };
                o.prototype = t.prototype;
                var i = new o, l = t.apply(i, n.concat(W.call(arguments)));
                return Object(l) === l ? l : i
            }
            return t.apply(e, n.concat(W.call(arguments)))
        };
        return r
    }), S.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", y.join("touch-enabled),("), b, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, S.cssanimations = function () {
        return s("animationName")
    }, S.csstransitions = function () {
        return s("transition")
    };
    for (var L in S) d(S, L) && (u = L.toLowerCase(), p[u] = S[L](), R.push((p[u] ? "" : "no-") + u));
    return p.addTest = function (e, t) {
        if ("object" == typeof e) for (var r in e) d(e, r) && p.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), p[e] !== n) return p;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
        }
        return p
    }, r(""), v = c = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = b[e[h]];
            return t || (t = {}, g++, e[h] = g, b[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !f.test(e) ? r.frag.appendChild(i) : i
        }

        function l(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), l = 0, a = r(), s = a.length; s > l; l++) i.createElement(a[l]);
            return i
        }

        function a(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return v.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function s(e) {
            e || (e = t);
            var r = o(e);
            return v.shivCSS && !c && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || a(e, r), e
        }

        var c, u, d = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv", g = 0, b = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, u = !0
            }
        }();
        var v = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: s,
            createElement: i,
            createDocumentFragment: l
        };
        e.html5 = v, s(t)
    }(this, t), p._version = f, p._prefixes = y, p._domPrefixes = X, p._cssomPrefixes = Y, p.testProp = function (e) {
        return l([e])
    }, p.testAllProps = s, p.testStyles = T, p.prefixed = function (e, t, n) {
        return t ? s(e, t, n) : s(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + R.join(" ") : ""), p
}(this, this.document), function (e, t, n) {
    function r(e) {
        return "[object Function]" == b.call(e)
    }

    function o(e) {
        return "string" == typeof e
    }

    function i() {
    }

    function l(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function a() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), a()) : m = 0
    }

    function s(e, n, r, o, i, s, c) {
        function u(t) {
            if (!p && l(d.readyState) && (y.r = p = 1, !m && a(), d.onload = d.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    Y.removeChild(d)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }

        var c = c || f.errorTimeout, d = t.createElement(e), p = 0, b = 0, y = {t: r, s: n, e: i, a: s, x: c};
        1 === T[n] && (b = 1, T[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            u.call(this, b)
        }, v.splice(o, 0, y), "img" != e && (b || 2 === T[n] ? (Y.insertBefore(d, w ? null : g), h(u, c)) : T[n].push(d))
    }

    function c(e, t, n, r, i) {
        return m = 0, t = t || "j", o(e) ? s("c" == t ? S : X, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
    }

    function u() {
        var e = f;
        return e.loader = {load: c, i: 0}, e
    }

    var d, f, p = t.documentElement, h = e.setTimeout, g = t.getElementsByTagName("script")[0], b = {}.toString, v = [],
        m = 0, y = "MozAppearance" in p.style, w = y && !!t.createRange().compareNode, Y = w ? p : g.parentNode,
        p = e.opera && "[object Opera]" == b.call(e.opera), p = !!t.attachEvent && !p,
        X = y ? "object" : p ? "script" : "img", S = p ? "script" : X, R = Array.isArray || function (e) {
            return "[object Array]" == b.call(e)
        }, W = [], T = {}, x = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    f = function (e) {
        function t(e) {
            var t, n, r, e = e.split("!"), o = W.length, i = e.pop(), l = e.length,
                i = {url: i, origUrl: i, prefixes: e};
            for (n = 0; l > n; n++) r = e[n].split("="), (t = x[r.shift()]) && (i = t(i, r));
            for (n = 0; o > n; n++) i = W[n](i);
            return i
        }

        function l(e, o, i, l, a) {
            var s = t(e), c = s.autoCallback;
            s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[l] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, l, a) : (T[s.url] ? s.noexec = !0 : T[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(c)) && i.load(function () {
                u(), o && o(s.origUrl, a, l), c && c(s.origUrl, a, l), T[s.url] = 2
            })))
        }

        function a(e, t) {
            function n(e, n) {
                if (e) {
                    if (o(e)) n || (d = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    }), l(e, d, t, 0, c); else if (Object(e) === e) for (s in a = function () {
                        var t, n = 0;
                        for (t in e) e.hasOwnProperty(t) && n++;
                        return n
                    }(), e) e.hasOwnProperty(s) && (!n && !--a && (r(d) ? d = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    } : d[s] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(f[s])), l(e[s], d, t, s, c))
                } else !n && p()
            }

            var a, s, c = !!e.test, u = e.load || e.both, d = e.callback || i, f = d, p = e.complete || i;
            n(c ? e.yep : e.nope, !!u), u && n(u)
        }

        var s, c, d = this.yepnope.loader;
        if (o(e)) l(e, 0, d, 0); else if (R(e)) for (s = 0; s < e.length; s++) c = e[s], o(c) ? l(c, 0, d, 0) : R(c) ? f(c) : Object(c) === c && a(c, d); else Object(e) === e && a(e, d)
    }, f.addPrefix = function (e, t) {
        x[e] = t
    }, f.addFilter = function (e) {
        W.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function () {
        t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = a, e.yepnope.injectJs = function (e, n, r, o, s, c) {
        var u, d, p = t.createElement("script"), o = o || f.errorTimeout;
        p.src = e;
        for (d in r) p.setAttribute(d, r[d]);
        n = c ? a : n || i, p.onreadystatechange = p.onload = function () {
            !u && l(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, h(function () {
            u || (u = 1, n(1))
        }, o), s ? p.onload() : g.parentNode.insertBefore(p, g)
    }, e.yepnope.injectCss = function (e, n, r, o, l, s) {
        var c, o = t.createElement("link"), n = s ? a : n || i;
        o.href = e, o.rel = "stylesheet", o.type = "text/css";
        for (c in r) o.setAttribute(c, r[c]);
        l || (g.parentNode.insertBefore(o, g), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
var Boxlayout = function () {
    function e() {
        o()
    }

    function t(e) {
        var t = e.find("iframe");
        t && t.attr("src", t.attr("src"))
    }

    function n(e, n) {
        var r;
        e || (e = l.filter(function () {
            return $(this).data("open") === !0
        }), r = e.data("targetModal"), n = $("#" + r)), n && (n.removeClass("bl-expand"), t(n), n.find(".bl-icon-close").off("click")), e && e.data("open", !1)
    }

    function r(e) {
        var t, n = e.find(".bl-video");
        t = 1.5 * e.height(), n.css({"max-width": t})
    }

    function o() {
        $(document).keydown(function (e) {
            27 === e.keyCode && n()
        }), l.each(function () {
            var e, t, o = $(this);
            o.on("click", function () {
                n(), o.data("open") || (o.data("open", !0), e = o.data("targetModal"), t = $("#" + e), t.addClass("bl-expand"), t.find(".bl-body").perfectScrollbar("update"), r(t)), t.find(".bl-icon-close").on("click", function (e) {
                    n(o, t), e.preventDefault(), e.stopPropagation()
                })
            })
        })
    }

    var i = $("#bl-main"), l = i.children("section");
    return {init: e}
}();
!function e(t, n, r) {
    function o(l, a) {
        if (!n[l]) {
            if (!t[l]) {
                var s = "function" == typeof require && require;
                if (!a && s) return s(l, !0);
                if (i) return i(l, !0);
                var c = new Error("Cannot find module '" + l + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[l] = {exports: {}};
            t[l][0].call(u.exports, function (e) {
                var n = t[l][1][e];
                return o(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[l].exports
    }

    for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]);
    return o
}({
    1: [function (e, t, n) {
        "use strict";

        function r(e) {
            e.fn.perfectScrollbar = function (t) {
                return this.each(function () {
                    if ("object" == typeof t || "undefined" == typeof t) {
                        var n = t;
                        i.get(this) || o.initialize(this, n)
                    } else {
                        var r = t;
                        "update" === r ? o.update(this) : "destroy" === r && o.destroy(this)
                    }
                    return e(this)
                })
            }
        }

        var o = e("../main"), i = e("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r); else {
            var l = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof l && r(l)
        }
        t.exports = r
    }, {"../main": 7, "../plugin/instances": 18}],
    2: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = e.className.split(" ");
            n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
        }

        function o(e, t) {
            var n = e.className.split(" "), r = n.indexOf(t);
            r >= 0 && n.splice(r, 1), e.className = n.join(" ")
        }

        n.add = function (e, t) {
            e.classList ? e.classList.add(t) : r(e, t)
        }, n.remove = function (e, t) {
            e.classList ? e.classList.remove(t) : o(e, t)
        }, n.list = function (e) {
            return e.classList ? e.classList : e.className.split(" ")
        }
    }, {}],
    3: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return window.getComputedStyle(e)[t]
        }

        function o(e, t, n) {
            return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
        }

        function i(e, t) {
            for (var n in t) {
                var r = t[n];
                "number" == typeof r && (r = r.toString() + "px"), e.style[n] = r
            }
            return e
        }

        n.e = function (e, t) {
            var n = document.createElement(e);
            return n.className = t, n
        }, n.appendTo = function (e, t) {
            return t.appendChild(e), e
        }, n.css = function (e, t, n) {
            return "object" == typeof t ? i(e, t) : "undefined" == typeof n ? r(e, t) : o(e, t, n)
        }, n.matches = function (e, t) {
            return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
        }, n.remove = function (e) {
            "undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }
    }, {}],
    4: [function (e, t, n) {
        "use strict";
        var r = function (e) {
            this.element = e, this.events = {}
        };
        r.prototype.bind = function (e, t) {
            "undefined" == typeof this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
        }, r.prototype.unbind = function (e, t) {
            var n = "undefined" != typeof t;
            this.events[e] = this.events[e].filter(function (r) {
                return n && r !== t ? !0 : (this.element.removeEventListener(e, r, !1), !1)
            }, this)
        }, r.prototype.unbindAll = function () {
            for (var e in this.events) this.unbind(e)
        };
        var o = function () {
            this.eventElements = []
        };
        o.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e
            })[0];
            return "undefined" == typeof t && (t = new r(e), this.eventElements.push(t)), t
        }, o.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n)
        }, o.prototype.unbind = function (e, t, n) {
            this.eventElement(e).unbind(t, n)
        }, o.prototype.unbindAll = function () {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
        }, o.prototype.once = function (e, t, n) {
            var r = this.eventElement(e), o = function (e) {
                r.unbind(t, o), n(e)
            };
            r.bind(t, o)
        }, t.exports = o
    }, {}],
    5: [function (e, t, n) {
        "use strict";
        t.exports = function () {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }, {}],
    6: [function (e, t, n) {
        "use strict";
        var r = e("./class"), o = e("./dom");
        n.toInt = function (e) {
            return parseInt(e, 10) || 0
        }, n.clone = function (e) {
            if (null === e) return null;
            if ("object" == typeof e) {
                var t = {};
                for (var n in e) t[n] = this.clone(e[n]);
                return t
            }
            return e
        }, n.extend = function (e, t) {
            var n = this.clone(e);
            for (var r in t) n[r] = this.clone(t[r]);
            return n
        }, n.isEditable = function (e) {
            return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
        }, n.removePsClasses = function (e) {
            for (var t = r.list(e), n = 0; n < t.length; n++) {
                var o = t[n];
                0 === o.indexOf("ps-") && r.remove(e, o)
            }
        }, n.outerWidth = function (e) {
            return this.toInt(o.css(e, "width")) + this.toInt(o.css(e, "paddingLeft")) + this.toInt(o.css(e, "paddingRight")) + this.toInt(o.css(e, "borderLeftWidth")) + this.toInt(o.css(e, "borderRightWidth"))
        }, n.startScrolling = function (e, t) {
            r.add(e, "ps-in-scrolling"), "undefined" != typeof t ? r.add(e, "ps-" + t) : (r.add(e, "ps-x"), r.add(e, "ps-y"))
        }, n.stopScrolling = function (e, t) {
            r.remove(e, "ps-in-scrolling"), "undefined" != typeof t ? r.remove(e, "ps-" + t) : (r.remove(e, "ps-x"), r.remove(e, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {"./class": 2, "./dom": 3}],
    7: [function (e, t, n) {
        "use strict";
        var r = e("./plugin/destroy"), o = e("./plugin/initialize"), i = e("./plugin/update");
        t.exports = {initialize: o, update: i, destroy: r}
    }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 20}],
    8: [function (e, t, n) {
        "use strict";
        t.exports = {
            wheelSpeed: 1,
            wheelPropagation: !1,
            swipePropagation: !0,
            minScrollbarLength: null,
            maxScrollbarLength: null,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0
        }
    }, {}],
    9: [function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"), o = e("../lib/helper"), i = e("./instances");
        t.exports = function (e) {
            var t = i.get(e);
            t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), r.remove(t.scrollbarYRail), o.removePsClasses(e), i.remove(e)
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    10: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            function n(e) {
                return e.getBoundingClientRect()
            }

            var r = window.Event.prototype.stopPropagation.bind;
            t.event.bind(t.scrollbarY, "click", r), t.event.bind(t.scrollbarYRail, "click", function (r) {
                var i = o.toInt(t.scrollbarYHeight / 2),
                    a = t.railYRatio * (r.pageY - window.scrollY - n(t.scrollbarYRail).top - i),
                    s = t.railYRatio * (t.railYHeight - t.scrollbarYHeight), c = a / s;
                0 > c ? c = 0 : c > 1 && (c = 1), e.scrollTop = (t.contentHeight - t.containerHeight) * c, l(e), r.stopPropagation()
            }), t.event.bind(t.scrollbarX, "click", r), t.event.bind(t.scrollbarXRail, "click", function (r) {
                var i = o.toInt(t.scrollbarXWidth / 2),
                    a = t.railXRatio * (r.pageX - window.scrollX - n(t.scrollbarXRail).left - i),
                    s = t.railXRatio * (t.railXWidth - t.scrollbarXWidth), c = a / s;
                0 > c ? c = 0 : c > 1 && (c = 1), e.scrollLeft = (t.contentWidth - t.containerWidth) * c - t.negativeScrollAdjustment, l(e), r.stopPropagation()
            })
        }

        var o = e("../../lib/helper"), i = e("../instances"), l = e("../update-geometry");
        t.exports = function (e) {
            var t = i.get(e);
            r(e, t)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19}],
    11: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            function n(n) {
                var o = r + n * t.railXRatio,
                    i = t.scrollbarXRail.getBoundingClientRect().left + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                t.scrollbarXLeft = 0 > o ? 0 : o > i ? i : o;
                var a = l.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                e.scrollLeft = a
            }

            var r = null, o = null, a = function (t) {
                n(t.pageX - o), s(e), t.stopPropagation(), t.preventDefault()
            }, c = function () {
                l.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
            };
            t.event.bind(t.scrollbarX, "mousedown", function (n) {
                o = n.pageX, r = l.toInt(i.css(t.scrollbarX, "left")) * t.railXRatio, l.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(e, t) {
            function n(n) {
                var o = r + n * t.railYRatio,
                    i = t.scrollbarYRail.getBoundingClientRect().top + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                t.scrollbarYTop = 0 > o ? 0 : o > i ? i : o;
                var a = l.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                e.scrollTop = a
            }

            var r = null, o = null, a = function (t) {
                n(t.pageY - o), s(e), t.stopPropagation(), t.preventDefault()
            }, c = function () {
                l.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
            };
            t.event.bind(t.scrollbarY, "mousedown", function (n) {
                o = n.pageY, r = l.toInt(i.css(t.scrollbarY, "top")) * t.railYRatio, l.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", c), n.stopPropagation(), n.preventDefault()
            })
        }

        var i = e("../../lib/dom"), l = e("../../lib/helper"), a = e("../instances"), s = e("../update-geometry");
        t.exports = function (e) {
            var t = a.get(e);
            r(e, t), o(e, t)
        }
    }, {"../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19}],
    12: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            function n(n, r) {
                var o = e.scrollTop;
                if (0 === n) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= t.contentHeight - t.containerHeight && 0 > r) return !t.settings.wheelPropagation
                }
                var i = e.scrollLeft;
                if (0 === r) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === i && 0 > n || i >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                }
                return !0
            }

            var r = !1;
            t.event.bind(e, "mouseenter", function () {
                r = !0
            }), t.event.bind(e, "mouseleave", function () {
                r = !1
            });
            var i = !1;
            t.event.bind(t.ownerDocument, "keydown", function (a) {
                if ((!a.isDefaultPrevented || !a.isDefaultPrevented()) && r) {
                    var s = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (s) {
                        for (; s.shadowRoot;) s = s.shadowRoot.activeElement;
                        if (o.isEditable(s)) return
                    }
                    var c = 0, u = 0;
                    switch (a.which) {
                        case 37:
                            c = -30;
                            break;
                        case 38:
                            u = 30;
                            break;
                        case 39:
                            c = 30;
                            break;
                        case 40:
                            u = -30;
                            break;
                        case 33:
                            u = 90;
                            break;
                        case 32:
                        case 34:
                            u = -90;
                            break;
                        case 35:
                            u = a.ctrlKey ? -t.contentHeight : -t.containerHeight;
                            break;
                        case 36:
                            u = a.ctrlKey ? e.scrollTop : t.containerHeight;
                            break;
                        default:
                            return
                    }
                    e.scrollTop = e.scrollTop - u, e.scrollLeft = e.scrollLeft + c, l(e), i = n(c, u), i && a.preventDefault()
                }
            })
        }

        var o = e("../../lib/helper"), i = e("../instances"), l = e("../update-geometry");
        t.exports = function (e) {
            var t = i.get(e);
            r(e, t)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19}],
    13: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            function n(n, r) {
                var o = e.scrollTop;
                if (0 === n) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= t.contentHeight - t.containerHeight && 0 > r) return !t.settings.wheelPropagation
                }
                var i = e.scrollLeft;
                if (0 === r) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === i && 0 > n || i >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                }
                return !0
            }

            function r(e) {
                var t = e.deltaX, n = -1 * e.deltaY;
                return ("undefined" == typeof t || "undefined" == typeof n) && (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), [t, n]
            }

            function i(t, n) {
                var r = e.querySelector("textarea:hover");
                if (r) {
                    var o = r.scrollHeight - r.clientHeight;
                    if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0;
                    var i = r.scrollLeft - r.clientWidth;
                    if (i > 0 && !(0 === r.scrollLeft && 0 > t || r.scrollLeft === i && t > 0)) return !0
                }
                return !1
            }

            function a(a) {
                if (o.env.isWebKit || !e.querySelector("select:focus")) {
                    var c = r(a), u = c[0], d = c[1];
                    i(u, d) || (s = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (e.scrollTop = d ? e.scrollTop - d * t.settings.wheelSpeed : e.scrollTop + u * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (e.scrollLeft = u ? e.scrollLeft + u * t.settings.wheelSpeed : e.scrollLeft - d * t.settings.wheelSpeed, s = !0) : (e.scrollTop = e.scrollTop - d * t.settings.wheelSpeed, e.scrollLeft = e.scrollLeft + u * t.settings.wheelSpeed), l(e), s = s || n(u, d), s && (a.stopPropagation(), a.preventDefault()))
                }
            }

            var s = !1;
            "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", a) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", a)
        }

        var o = e("../../lib/helper"), i = e("../instances"), l = e("../update-geometry");
        t.exports = function (e) {
            var t = i.get(e);
            r(e, t)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19}],
    14: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            t.event.bind(e, "scroll", function () {
                i(e)
            })
        }

        var o = e("../instances"), i = e("../update-geometry");
        t.exports = function (e) {
            var t = o.get(e);
            r(e, t)
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    15: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            function n() {
                var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
            }

            function r() {
                s || (s = setInterval(function () {
                    return i.get(e) ? (e.scrollTop = e.scrollTop + c.top, e.scrollLeft = e.scrollLeft + c.left, void l(e)) : void clearInterval(s)
                }, 50))
            }

            function a() {
                s && (clearInterval(s), s = null), o.stopScrolling(e)
            }

            var s = null, c = {top: 0, left: 0}, u = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function () {
                e.contains(n()) ? u = !0 : (u = !1, a())
            }), t.event.bind(window, "mouseup", function () {
                u && (u = !1, a())
            }), t.event.bind(window, "mousemove", function (t) {
                if (u) {
                    var n = {x: t.pageX, y: t.pageY}, i = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                    n.x < i.left + 3 ? (c.left = -5, o.startScrolling(e, "x")) : n.x > i.right - 3 ? (c.left = 5, o.startScrolling(e, "x")) : c.left = 0, n.y < i.top + 3 ? (c.top = i.top + 3 - n.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : n.y > i.bottom - 3 ? (c.top = n.y - i.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? a() : r()
                }
            })
        }

        var o = e("../../lib/helper"), i = e("../instances"), l = e("../update-geometry");
        t.exports = function (e) {
            var t = i.get(e);
            r(e, t)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19}],
    16: [function (e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            function l(n, r) {
                var o = e.scrollTop, i = e.scrollLeft, l = Math.abs(n), a = Math.abs(r);
                if (a > l) {
                    if (0 > r && o === t.contentHeight - t.containerHeight || r > 0 && 0 === o) return !t.settings.swipePropagation
                } else if (l > a && (0 > n && i === t.contentWidth - t.containerWidth || n > 0 && 0 === i)) return !t.settings.swipePropagation;
                return !0
            }

            function a(t, n) {
                e.scrollTop = e.scrollTop - n, e.scrollLeft = e.scrollLeft - t, i(e)
            }

            function s() {
                y = !0
            }

            function c() {
                y = !1
            }

            function u(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }

            function d(e) {
                return e.targetTouches && 1 === e.targetTouches.length ? !0 : e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE ? !0 : !1
            }

            function f(e) {
                if (d(e)) {
                    w = !0;
                    var t = u(e);
                    g.pageX = t.pageX, g.pageY = t.pageY, b = (new Date).getTime(), null !== m && clearInterval(m), e.stopPropagation()
                }
            }

            function p(e) {
                if (!y && w && d(e)) {
                    var t = u(e), n = {pageX: t.pageX, pageY: t.pageY}, r = n.pageX - g.pageX, o = n.pageY - g.pageY;
                    a(r, o), g = n;
                    var i = (new Date).getTime(), s = i - b;
                    s > 0 && (v.x = r / s, v.y = o / s, b = i), l(r, o) && (e.stopPropagation(), e.preventDefault())
                }
            }

            function h() {
                !y && w && (w = !1, clearInterval(m), m = setInterval(function () {
                    return o.get(e) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(m) : (a(30 * v.x, 30 * v.y), v.x *= .8, void (v.y *= .8)) : void clearInterval(m)
                }, 10))
            }

            var g = {}, b = 0, v = {}, m = null, y = !1, w = !1;
            n && (t.event.bind(window, "touchstart", s), t.event.bind(window, "touchend", c), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", h)), r && (window.PointerEvent ? (t.event.bind(window, "pointerdown", s), t.event.bind(window, "pointerup", c), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", s), t.event.bind(window, "MSPointerUp", c), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", h)))
        }

        var o = e("../instances"), i = e("../update-geometry");
        t.exports = function (e, t, n) {
            var i = o.get(e);
            r(e, i, t, n)
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    17: [function (e, t, n) {
        "use strict";
        var r = e("../lib/class"), o = e("../lib/helper"), i = e("./instances"), l = e("./update-geometry"),
            a = e("./handler/click-rail"), s = e("./handler/drag-scrollbar"), c = e("./handler/keyboard"),
            u = e("./handler/mouse-wheel"), d = e("./handler/native-scroll"), f = e("./handler/selection"),
            p = e("./handler/touch");
        t.exports = function (e, t) {
            t = "object" == typeof t ? t : {}, r.add(e, "ps-container");
            var n = i.add(e);
            n.settings = o.extend(n.settings, t), a(e), s(e), u(e), d(e), f(e), (o.env.supportsTouch || o.env.supportsIePointer) && p(e, o.env.supportsTouch, o.env.supportsIePointer), n.settings.useKeyboard && c(e), l(e)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function (e, t, n) {
        "use strict";

        function r(e) {
            var t = this;
            t.settings = d.clone(s), t.containerWidth = null, t.containerHeight = null, t.contentWidth = null, t.contentHeight = null, t.isRtl = "rtl" === a.css(e, "direction"), t.isNegativeScroll = function () {
                var t = e.scrollLeft, n = null;
                return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
            }(), t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, t.event = new c, t.ownerDocument = e.ownerDocument || document, t.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), e), t.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), t.scrollbarXRail), t.scrollbarXActive = null, t.scrollbarXWidth = null, t.scrollbarXLeft = null, t.scrollbarXBottom = d.toInt(a.css(t.scrollbarXRail, "bottom")), t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom, t.scrollbarXTop = t.isScrollbarXUsingBottom ? null : d.toInt(a.css(t.scrollbarXRail, "top")), t.railBorderXWidth = d.toInt(a.css(t.scrollbarXRail, "borderLeftWidth")) + d.toInt(a.css(t.scrollbarXRail, "borderRightWidth")), a.css(t.scrollbarXRail, "display", "block"), t.railXMarginWidth = d.toInt(a.css(t.scrollbarXRail, "marginLeft")) + d.toInt(a.css(t.scrollbarXRail, "marginRight")), a.css(t.scrollbarXRail, "display", ""), t.railXWidth = null, t.railXRatio = null, t.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), e), t.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), t.scrollbarYRail), t.scrollbarYActive = null, t.scrollbarYHeight = null, t.scrollbarYTop = null, t.scrollbarYRight = d.toInt(a.css(t.scrollbarYRail, "right")), t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight, t.scrollbarYLeft = t.isScrollbarYUsingRight ? null : d.toInt(a.css(t.scrollbarYRail, "left")), t.scrollbarYOuterWidth = t.isRtl ? d.outerWidth(t.scrollbarY) : null, t.railBorderYWidth = d.toInt(a.css(t.scrollbarYRail, "borderTopWidth")) + d.toInt(a.css(t.scrollbarYRail, "borderBottomWidth")), a.css(t.scrollbarYRail, "display", "block"), t.railYMarginHeight = d.toInt(a.css(t.scrollbarYRail, "marginTop")) + d.toInt(a.css(t.scrollbarYRail, "marginBottom")), a.css(t.scrollbarYRail, "display", ""), t.railYHeight = null, t.railYRatio = null
        }

        function o(e) {
            return "undefined" == typeof e.dataset ? e.getAttribute("data-ps-id") : e.dataset.psId
        }

        function i(e, t) {
            "undefined" == typeof e.dataset ? e.setAttribute("data-ps-id", t) : e.dataset.psId = t
        }

        function l(e) {
            "undefined" == typeof e.dataset ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
        }

        var a = e("../lib/dom"), s = e("./default-setting"), c = e("../lib/event-manager"), u = e("../lib/guid"),
            d = e("../lib/helper"), f = {};
        n.add = function (e) {
            var t = u();
            return i(e, t), f[t] = new r(e), f[t]
        }, n.remove = function (e) {
            delete f[o(e)], l(e)
        }, n.get = function (e) {
            return f[o(e)]
        }
    }, {"../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8}],
    19: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function o(e, t) {
            var n = {width: t.railXWidth};
            n.left = t.isRtl ? t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, l.css(t.scrollbarXRail, n);
            var r = {top: e.scrollTop, height: t.railYHeight};
            t.isScrollbarYUsingRight ? r.right = t.isRtl ? t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : t.scrollbarYRight - e.scrollLeft : r.left = t.isRtl ? t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : t.scrollbarYLeft + e.scrollLeft, l.css(t.scrollbarYRail, r), l.css(t.scrollbarX, {
                left: t.scrollbarXLeft,
                width: t.scrollbarXWidth - t.railBorderXWidth
            }), l.css(t.scrollbarY, {top: t.scrollbarYTop, height: t.scrollbarYHeight - t.railBorderYWidth})
        }

        var i = e("../lib/class"), l = e("../lib/dom"), a = e("../lib/helper"), s = e("./instances");
        t.exports = function (e) {
            var t = s.get(e);
            t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || l.appendTo(t.scrollbarXRail, e), e.contains(t.scrollbarYRail) || l.appendTo(t.scrollbarYRail, e), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = r(t, a.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = a.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : (t.scrollbarXActive = !1, t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = r(t, a.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = a.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : (t.scrollbarYActive = !1, t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0), t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), i[t.scrollbarXActive ? "add" : "remove"](e, "ps-active-x"), i[t.scrollbarYActive ? "add" : "remove"](e, "ps-active-y")
        }
    }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    20: [function (e, t, n) {
        "use strict";
        var r = e("../lib/dom"), o = e("../lib/helper"), i = e("./instances"), l = e("./update-geometry");
        t.exports = function (e) {
            var t = i.get(e);
            t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = o.toInt(r.css(t.scrollbarXRail, "marginLeft")) + o.toInt(r.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = o.toInt(r.css(t.scrollbarYRail, "marginTop")) + o.toInt(r.css(t.scrollbarYRail, "marginBottom")), r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), l(e), r.css(t.scrollbarXRail, "display", ""),
                r.css(t.scrollbarYRail, "display", "")
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19}]
}, {}, [1]), $(function () {
    Boxlayout.init(), $(".bl-body").perfectScrollbar()
});