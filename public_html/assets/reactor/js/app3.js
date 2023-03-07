function locateFormButtons() {
    refreshFormButtonsOffset(), w.outerHeight() + w.scrollTop() - 16 < fbT + 40 ? formButtons.css({
        bottom: "16px",
        position: "fixed"
    }) : formButtons.css({bottom: "", position: ""})
}
function refreshFormButtonsOffset() {
    d.outerHeight() !== dH && (dH = d.outerHeight(), formButtons.css({
        bottom: "",
        position: ""
    }), fbT = formButtons.offset().top)
}
function compileSelectedForBulkAction() {
    for (var t = [], e = $(".content-list__checkbox:checked"), n = 0; n < e.length; n++)t.push(e.eq(n).val());
    bulkSelectedInput.val(JSON.stringify(t))
}
function ajax_loaded(t) {
    var e = 0, n = t.loaded || t.position, i = t.total;
    return t.lengthComputable && (e = Math.ceil(n / i * 100)), e
}
function add_http(t) {
    if ("#" === t.slice(0, 1) || "mailto:" === t.slice(0, 7))return t;
    var e = /^(f|ht)tps?:\/\//;
    return e.test(t) || (t = "http://" + t), t
}
function readable_size(t) {
    var e = ["bytes", "kB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(t) / Math.log(1024));
    return (t / Math.pow(1024, n)).toFixed(2) + " " + e[n]
}
function html_entities(t) {
    return $("<div/>").text(t).html()
}
function closeNavigation() {
    contentContainer.removeClass("container-content--slide"), navigationContainer.removeClass("container-navigation--slide"), contentWhiteout.removeClass("content-whiteout--active"), hamburger.removeClass("hamburger--open"), body.removeClass("scroll-disabled")
}
function toggleNavigation() {
    contentContainer.toggleClass("container-content--slide"), navigationContainer.toggleClass("container-navigation--slide"), contentWhiteout.toggleClass("content-whiteout--active"), body.toggleClass("scroll-disabled")
}
window.Modernizr = function (t, e, n) {
    function i(t) {
        p.cssText = t
    }

    function o(t, e) {
        return typeof t === e
    }

    var r, s, a, l = "2.8.3", c = {}, u = !0, h = e.documentElement, d = "modernizr", f = e.createElement(d), p = f.style, g = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), m = {}, v = [], y = v.slice, b = function (t, n, i, o) {
        var r, s, a, l, c = e.createElement("div"), u = e.body, f = u || e.createElement("body");
        if (parseInt(i, 10))for (; i--;)a = e.createElement("div"), a.id = o ? o[i] : d + (i + 1), c.appendChild(a);
        return r = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), c.id = d, (u ? c : f).innerHTML += r, f.appendChild(c), u || (f.style.background = "", f.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(f)), s = n(c, t), u ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f), h.style.overflow = l), !!s
    }, w = {}.hasOwnProperty;
    a = o(w, "undefined") || o(w.call, "undefined") ? function (t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return w.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e)throw new TypeError;
        var n = y.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var o = function () {
                };
                o.prototype = e.prototype;
                var r = new o, s = e.apply(r, n.concat(y.call(arguments)));
                return Object(s) === s ? s : r
            }
            return e.apply(t, n.concat(y.call(arguments)))
        };
        return i
    }), m.touch = function () {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : b(["@media (", g.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
            n = 9 === t.offsetTop
        }), n
    };
    for (var x in m)a(m, x) && (s = x.toLowerCase(), c[s] = m[x](), v.push((c[s] ? "" : "no-") + s));
    return c.addTest = function (t, e) {
        if ("object" == typeof t)for (var i in t)a(t, i) && c.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), c[t] !== n)return c;
            e = "function" == typeof e ? e() : e, "undefined" != typeof u && u && (h.className += " " + (e ? "" : "no-") + t), c[t] = e
        }
        return c
    }, i(""), f = r = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function o(t) {
            var e = v[t[g]];
            return e || (e = {}, m++, t[g] = m, v[m] = e), e
        }

        function r(t, n, i) {
            if (n || (n = e), u)return n.createElement(t);
            i || (i = o(n));
            var r;
            return r = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || f.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
        }

        function s(t, n) {
            if (t || (t = e), u)return t.createDocumentFragment();
            n = n || o(t);
            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++)r.createElement(a[s]);
            return r
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return y.shivMethods ? r(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(y, e.frag)
        }

        function l(t) {
            t || (t = e);
            var i = o(t);
            return y.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, i), t
        }

        var c, u, h = "3.7.0", d = t.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", m = 0, v = {};
        !function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function () {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                    }()
            } catch (n) {
                c = !0, u = !0
            }
        }();
        var y = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: h,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: s
        };
        t.html5 = y, l(e)
    }(this, e), c._version = l, c._prefixes = g, c.testStyles = b, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (u ? " js " + v.join(" ") : ""), c
}(this, this.document), function (t, e, n) {
    function i(t) {
        return "[object Function]" == m.call(t)
    }

    function o(t) {
        return "string" == typeof t
    }

    function r() {
    }

    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function a() {
        var t = v.shift();
        y = 1, t ? t.t ? p(function () {
            ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), a()) : y = 0
    }

    function l(t, n, i, o, r, l, c) {
        function u(e) {
            if (!f && s(h.readyState) && (b.r = f = 1, !y && a(), h.onload = h.onreadystatechange = null, e)) {
                "img" != t && p(function () {
                    x.removeChild(h)
                }, 50);
                for (var i in S[n])S[n].hasOwnProperty(i) && S[n][i].onload()
            }
        }

        var c = c || d.errorTimeout, h = e.createElement(t), f = 0, m = 0, b = {t: i, s: n, e: r, a: l, x: c};
        1 === S[n] && (m = 1, S[n] = []), "object" == t ? h.data = n : (h.src = n, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function () {
            u.call(this, m)
        }, v.splice(o, 0, b), "img" != t && (m || 2 === S[n] ? (x.insertBefore(h, w ? null : g), p(u, c)) : S[n].push(h))
    }

    function c(t, e, n, i, r) {
        return y = 0, e = e || "j", o(t) ? l("c" == e ? C : _, t, e, this.i++, n, i, r) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
    }

    function u() {
        var t = d;
        return t.loader = {load: c, i: 0}, t
    }

    var h, d, f = e.documentElement, p = t.setTimeout, g = e.getElementsByTagName("script")[0], m = {}.toString, v = [], y = 0, b = "MozAppearance" in f.style, w = b && !!e.createRange().compareNode, x = w ? f : g.parentNode, f = t.opera && "[object Opera]" == m.call(t.opera), f = !!e.attachEvent && !f, _ = b ? "object" : f ? "script" : "img", C = f ? "script" : _, T = Array.isArray || function (t) {
            return "[object Array]" == m.call(t)
        }, E = [], S = {}, k = {
        timeout: function (t, e) {
            return e.length && (t.timeout = e[0]), t
        }
    };
    d = function (t) {
        function e(t) {
            var e, n, i, t = t.split("!"), o = E.length, r = t.pop(), s = t.length, r = {
                url: r,
                origUrl: r,
                prefixes: t
            };
            for (n = 0; n < s; n++)i = t[n].split("="), (e = k[i.shift()]) && (r = e(r, i));
            for (n = 0; n < o; n++)r = E[n](r);
            return r
        }

        function s(t, o, r, s, a) {
            var l = e(t), c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, r, s, a) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(o) || i(c)) && r.load(function () {
                u(), o && o(l.origUrl, a, s), c && c(l.origUrl, a, s), S[l.url] = 2
            })))
        }

        function a(t, e) {
            function n(t, n) {
                if (t) {
                    if (o(t))n || (h = function () {
                        var t = [].slice.call(arguments);
                        d.apply(this, t), f()
                    }), s(t, h, e, 0, c); else if (Object(t) === t)for (l in a = function () {
                        var e, n = 0;
                        for (e in t)t.hasOwnProperty(e) && n++;
                        return n
                    }(), t)t.hasOwnProperty(l) && (!n && !--a && (i(h) ? h = function () {
                        var t = [].slice.call(arguments);
                        d.apply(this, t), f()
                    } : h[l] = function (t) {
                        return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), f()
                        }
                    }(d[l])), s(t[l], h, e, l, c))
                } else!n && f()
            }

            var a, l, c = !!t.test, u = t.load || t.both, h = t.callback || r, d = h, f = t.complete || r;
            n(c ? t.yep : t.nope, !!u), u && n(u)
        }

        var l, c, h = this.yepnope.loader;
        if (o(t))s(t, 0, h, 0); else if (T(t))for (l = 0; l < t.length; l++)c = t[l], o(c) ? s(c, 0, h, 0) : T(c) ? d(c) : Object(c) === c && a(c, h); else Object(t) === t && a(t, h)
    }, d.addPrefix = function (t, e) {
        k[t] = e
    }, d.addFilter = function (t) {
        E.push(t)
    }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function () {
        e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
    }, 0)), t.yepnope = u(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, o, l, c) {
        var u, h, f = e.createElement("script"), o = o || d.errorTimeout;
        f.src = t;
        for (h in i)f.setAttribute(h, i[h]);
        n = c ? a : n || r, f.onreadystatechange = f.onload = function () {
            !u && s(f.readyState) && (u = 1, n(), f.onload = f.onreadystatechange = null)
        }, p(function () {
            u || (u = 1, n(1))
        }, o), l ? f.onload() : g.parentNode.insertBefore(f, g)
    }, t.yepnope.injectCss = function (t, n, i, o, s, l) {
        var c, o = e.createElement("link"), n = l ? a : n || r;
        o.href = t, o.rel = "stylesheet", o.type = "text/css";
        for (c in i)o.setAttribute(c, i[c]);
        s || (g.parentNode.insertBefore(o, g), p(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, !function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function n(t, e) {
        e = e || Z;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length, n = dt.type(t);
        return "function" !== n && !dt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e, n) {
        if (dt.isFunction(e))return dt.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType)return dt.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (_t.test(e))return dt.filter(e, t, n);
            e = dt.filter(e, t)
        }
        return dt.grep(t, function (t) {
            return ot.call(e, t) > -1 !== n && 1 === t.nodeType
        })
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = {};
        return dt.each(t.match(Dt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function c(t, e, n) {
        var i;
        try {
            t && dt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && dt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }

    function u() {
        Z.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), dt.ready()
    }

    function h() {
        this.expando = dt.expando + h.uid++
    }

    function d(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(Mt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : jt.test(n) ? JSON.parse(n) : n)
            } catch (o) {
            }
            It.set(t, e, n)
        } else n = void 0;
        return n
    }

    function f(t, e, n, i) {
        var o, r = 1, s = 20, a = i ? function () {
            return i.cur()
        } : function () {
            return dt.css(t, e, "")
        }, l = a(), c = n && n[3] || (dt.cssNumber[e] ? "" : "px"), u = (dt.cssNumber[e] || "px" !== c && +l) && Ot.exec(dt.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do r = r || ".5", u /= r, dt.style(t, e, u + c); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function p(t) {
        var e, n = t.ownerDocument, i = t.nodeName, o = Yt[i];
        return o ? o : (e = n.body.appendChild(n.createElement(i)), o = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Yt[i] = o, o)
    }

    function g(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = Ht.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Xt(i) && (o[r] = p(i))) : "none" !== n && (o[r] = "none", Ht.set(i, "display", n)));
        for (r = 0; r < s; r++)null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    function m(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], n) : n
    }

    function v(t, e) {
        for (var n = 0, i = t.length; n < i; n++)Ht.set(t[n], "globalEval", !e || Ht.get(e[n], "globalEval"))
    }

    function y(t, e, n, i, o) {
        for (var r, s, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)if (r = t[f], r || 0 === r)if ("object" === dt.type(r))dt.merge(d, r.nodeType ? [r] : r); else if (Ut.test(r)) {
            for (s = s || h.appendChild(e.createElement("div")), a = ($t.exec(r) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, s.innerHTML = l[1] + dt.htmlPrefilter(r) + l[2], u = l[0]; u--;)s = s.lastChild;
            dt.merge(d, s.childNodes), s = h.firstChild, s.textContent = ""
        } else d.push(e.createTextNode(r));
        for (h.textContent = "", f = 0; r = d[f++];)if (i && dt.inArray(r, i) > -1)o && o.push(r); else if (c = dt.contains(r.ownerDocument, r), s = m(h.appendChild(r), "script"), c && v(s), n)for (u = 0; r = s[u++];)Bt.test(r.type || "") && n.push(r);
        return h
    }

    function b() {
        return !0
    }

    function w() {
        return !1
    }

    function x() {
        try {
            return Z.activeElement
        } catch (t) {
        }
    }

    function _(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e)_(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1)o = w; else if (!o)return t;
        return 1 === r && (s = o, o = function (t) {
            return dt().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = dt.guid++)), t.each(function () {
            dt.event.add(this, e, o, i, n)
        })
    }

    function C(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function T(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function E(t) {
        var e = ee.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function S(t, e) {
        var n, i, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (Ht.hasData(t) && (r = Ht.access(t), s = Ht.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)for (n = 0, i = c[o].length; n < i; n++)dt.event.add(e, o, c[o][n])
            }
            It.hasData(t) && (a = It.access(t), l = dt.extend({}, a), It.set(e, l))
        }
    }

    function k(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && qt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function D(t, e, i, o) {
        e = nt.apply([], e);
        var r, s, a, l, c, u, h = 0, d = t.length, f = d - 1, p = e[0], g = dt.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !ut.checkClone && te.test(p))return t.each(function (n) {
            var r = t.eq(n);
            g && (e[0] = p.call(this, n, r.html())), D(r, e, i, o)
        });
        if (d && (r = y(e, t[0].ownerDocument, !1, t, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = dt.map(m(r, "script"), T), l = a.length; h < d; h++)c = r, h !== f && (c = dt.clone(c, !0, !0), l && dt.merge(a, m(c, "script"))), i.call(t[h], c, h);
            if (l)for (u = a[a.length - 1].ownerDocument, dt.map(a, E), h = 0; h < l; h++)c = a[h], Bt.test(c.type || "") && !Ht.access(c, "globalEval") && dt.contains(u, c) && (c.src ? dt._evalUrl && dt._evalUrl(c.src) : n(c.textContent.replace(ne, ""), u))
        }
        return t
    }

    function P(t, e, n) {
        for (var i, o = e ? dt.filter(e, t) : t, r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || dt.cleanData(m(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && v(m(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function N(t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || re(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !ut.pixelMarginRight() && oe.test(s) && ie.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function A(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function L(t) {
        if (t in ue)return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ce.length; n--;)if (t = ce[n] + e, t in ue)return t
    }

    function H(t, e, n) {
        var i = Ot.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function I(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2)"margin" === n && (s += dt.css(t, n + Rt[r], !0, o)), i ? ("content" === n && (s -= dt.css(t, "padding" + Rt[r], !0, o)), "margin" !== n && (s -= dt.css(t, "border" + Rt[r] + "Width", !0, o))) : (s += dt.css(t, "padding" + Rt[r], !0, o), "padding" !== n && (s += dt.css(t, "border" + Rt[r] + "Width", !0, o)));
        return s
    }

    function j(t, e, n) {
        var i, o = !0, r = re(t), s = "border-box" === dt.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
            if (i = N(t, e, r), (i < 0 || null == i) && (i = t.style[e]), oe.test(i))return i;
            o = s && (ut.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + I(t, e, n || (s ? "border" : "content"), o, r) + "px"
    }

    function M(t, e, n, i, o) {
        return new M.prototype.init(t, e, n, i, o)
    }

    function W() {
        de && (t.requestAnimationFrame(W), dt.fx.tick())
    }

    function O() {
        return t.setTimeout(function () {
            he = void 0
        }), he = dt.now()
    }

    function R(t, e) {
        var n, i = 0, o = {height: t};
        for (e = e ? 1 : 0; i < 4; i += 2 - e)n = Rt[i], o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function X(t, e, n) {
        for (var i, o = (q.tweeners[e] || []).concat(q.tweeners["*"]), r = 0, s = o.length; r < s; r++)if (i = o[r].call(n, e, t))return i
    }

    function F(t, e, n) {
        var i, o, r, s, a, l, c, u, h = "width" in e || "height" in e, d = this, f = {}, p = t.style, m = t.nodeType && Xt(t), v = Ht.get(t, "fxshow");
        n.queue || (s = dt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, dt.queue(t, "fx").length || s.empty.fire()
            })
        }));
        for (i in e)if (o = e[i], fe.test(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[i])continue;
                m = !0
            }
            f[i] = v && v[i] || dt.style(t, i)
        }
        if (l = !dt.isEmptyObject(e), l || !dt.isEmptyObject(f)) {
            h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = v && v.display, null == c && (c = Ht.get(t, "display")), u = dt.css(t, "display"), "none" === u && (c ? u = c : (g([t], !0), c = t.style.display || c, u = dt.css(t, "display"), g([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === dt.css(t, "float") && (l || (d.done(function () {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f)l || (v ? "hidden" in v && (m = v.hidden) : v = Ht.access(t, "fxshow", {display: c}), r && (v.hidden = !m), m && g([t], !0), d.done(function () {
                m || g([t]), Ht.remove(t, "fxshow");
                for (i in f)dt.style(t, i, f[i])
            })), l = X(m ? v[i] : 0, i, d), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function Y(t, e) {
        var n, i, o, r, s;
        for (n in t)if (i = dt.camelCase(n), o = e[i], r = t[n], dt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = dt.cssHooks[i], s && "expand" in s) {
            r = s.expand(r), delete t[i];
            for (n in r)n in t || (t[n] = r[n], e[n] = o)
        } else e[i] = o
    }

    function q(t, e, n) {
        var i, o, r = 0, s = q.prefilters.length, a = dt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var e = he || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++)c.tweens[s].run(r);
            return a.notifyWith(t, [c, r, n]), r < 1 && l ? n : (a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: dt.extend({}, e),
            opts: dt.extend(!0, {specialEasing: {}, easing: dt.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: he || O(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = dt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (o)return this;
                for (o = !0; n < i; n++)c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), u = c.props;
        for (Y(u, c.opts.specialEasing); r < s; r++)if (i = q.prefilters[r].call(c, t, u, c.opts))return dt.isFunction(i.stop) && (dt._queueHooks(c.elem, c.opts.queue).stop = dt.proxy(i.stop, i)), i;
        return dt.map(u, X, c), dt.isFunction(c.opts.start) && c.opts.start.call(t, c), dt.fx.timer(dt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function $(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function B(t, e, n, i) {
        var o;
        if (dt.isArray(e))dt.each(e, function (e, o) {
            n || Se.test(t) ? i(t, o) : B(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        }); else if (n || "object" !== dt.type(e))i(t, e); else for (o in e)B(t + "[" + o + "]", e[o], n, i)
    }

    function z(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, r = e.toLowerCase().match(Dt) || [];
            if (dt.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function U(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, dt.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var r = {}, s = t === Oe;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function V(t, e) {
        var n, i, o = dt.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && dt.extend(!0, t, i), t
    }

    function Q(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)for (o in a)if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n)r = l[0]; else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r)return r !== l[0] && l.unshift(r), n[r]
    }

    function K(t, e, n, i) {
        var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1])for (s in t.converters)c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && t["throws"])e = s(e); else try {
                e = s(e)
            } catch (h) {
                return {state: "parsererror", error: s ? h : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: e}
    }

    function G(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var J = [], Z = t.document, tt = Object.getPrototypeOf, et = J.slice, nt = J.concat, it = J.push, ot = J.indexOf, rt = {}, st = rt.toString, at = rt.hasOwnProperty, lt = at.toString, ct = lt.call(Object), ut = {}, ht = "3.1.0", dt = function (t, e) {
        return new dt.fn.init(t, e)
    }, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^-ms-/, gt = /-([a-z])/g, mt = function (t, e) {
        return e.toUpperCase()
    };
    dt.fn = dt.prototype = {
        jquery: ht, constructor: dt, length: 0, toArray: function () {
            return et.call(this)
        }, get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : et.call(this)
        }, pushStack: function (t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return dt.each(this, t)
        }, map: function (t) {
            return this.pushStack(dt.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(et.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: it, sort: J.sort, splice: J.splice
    }, dt.extend = dt.fn.extend = function () {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (c && i && (dt.isPlainObject(i) || (o = dt.isArray(i))) ? (o ? (o = !1, r = n && dt.isArray(n) ? n : []) : r = n && dt.isPlainObject(n) ? n : {}, s[e] = dt.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }, dt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === dt.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = dt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== st.call(t) || (e = tt(t)) && (n = at.call(e, "constructor") && e.constructor, "function" != typeof n || lt.call(n) !== ct))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[st.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            n(t)
        }, camelCase: function (t) {
            return t.replace(pt, "ms-").replace(gt, mt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var n, o = 0;
            if (i(t))for (n = t.length; o < n && e.call(t[o], o, t[o]) !== !1; o++); else for (o in t)if (e.call(t[o], o, t[o]) === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(ft, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : it.call(n, t)), n
        }, inArray: function (t, e, n) {
            return null == e ? -1 : ot.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++)t[o++] = e[i];
            return t.length = o, t
        }, grep: function (t, e, n) {
            for (var i, o = [], r = 0, s = t.length, a = !n; r < s; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
            return o
        }, map: function (t, e, n) {
            var o, r, s = 0, a = [];
            if (i(t))for (o = t.length; s < o; s++)r = e(t[s], s, n), null != r && a.push(r); else for (s in t)r = e(t[s], s, n), null != r && a.push(r);
            return nt.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t))return i = et.call(arguments, 2), o = function () {
                return t.apply(e || this, i.concat(et.call(arguments)))
            }, o.guid = t.guid = t.guid || dt.guid++, o
        }, now: Date.now, support: ut
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = J[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        rt["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function (t) {
        function e(t, e, n, i) {
            var o, r, s, a, l, c, u, d = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)return n;
            if (!i && ((e ? e.ownerDocument || e : F) !== H && L(e), e = e || H, j)) {
                if (11 !== p && (l = vt.exec(t)))if (o = l[1]) {
                    if (9 === p) {
                        if (!(s = e.getElementById(o)))return n;
                        if (s.id === o)return n.push(s), n
                    } else if (d && (s = d.getElementById(o)) && R(e, s) && s.id === o)return n.push(s), n
                } else {
                    if (l[2])return J.apply(n, e.getElementsByTagName(t)), n;
                    if ((o = l[3]) && _.getElementsByClassName && e.getElementsByClassName)return J.apply(n, e.getElementsByClassName(o)), n
                }
                if (_.qsa && !z[t + " "] && (!M || !M.test(t))) {
                    if (1 !== p)d = e, u = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, _t) : e.setAttribute("id", a = X), c = S(t), r = c.length; r--;)c[r] = "#" + a + " " + f(c[r]);
                        u = c.join(","), d = yt.test(t) && h(e.parentNode) || e
                    }
                    if (u)try {
                        return J.apply(n, d.querySelectorAll(u)), n
                    } catch (g) {
                    } finally {
                        a === X && e.removeAttribute("id")
                    }
                }
            }
            return D(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            var e = [];
            return t
        }

        function i(t) {
            return t[X] = !0, t
        }

        function o(t) {
            var e = H.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)C.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === e)return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return function (e) {
                return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && e.disabled === !1 && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !Tt(e)) !== t)
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {
        }

        function f(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir, o = e.next, r = o || i, s = n && "parentNode" === r, a = q++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)if (1 === e.nodeType || s)return t(e, n, o)
            } : function (e, n, l) {
                var c, u, h, d = [Y, a];
                if (l) {
                    for (; e = e[i];)if ((1 === e.nodeType || s) && t(e, n, l))return !0
                } else for (; e = e[i];)if (1 === e.nodeType || s)if (h = e[X] || (e[X] = {}), u = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase())e = e[i] || e; else {
                    if ((c = u[r]) && c[0] === Y && c[1] === a)return d[2] = c[2];
                    if (u[r] = d, d[2] = t(e, n, l))return !0
                }
            }
        }

        function g(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++)e(t, n[o], i);
            return i
        }

        function v(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
            return s
        }

        function y(t, e, n, o, r, s) {
            return o && !o[X] && (o = y(o)), r && !r[X] && (r = y(r, s)), i(function (i, s, a, l) {
                var c, u, h, d = [], f = [], p = s.length, g = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? g : v(g, d, t, a, l), b = n ? r || (i ? t : p || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)for (c = v(b, f), o(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(h = b[u]) && (c = r ? tt(i, h) : d[u]) > -1 && (i[c] = !(s[c] = h))
                    }
                } else b = v(b === s ? b.splice(p, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
            })
        }

        function b(t) {
            for (var e, n, i, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = p(function (t) {
                return t === e
            }, s, !0), c = p(function (t) {
                return tt(e, t) > -1
            }, s, !0), u = [function (t, n, i) {
                var o = !r && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                return e = null, o
            }]; a < o; a++)if (n = C.relative[t[a].type])u = [p(g(u), n)]; else {
                if (n = C.filter[t[a].type].apply(null, t[a].matches), n[X]) {
                    for (i = ++a; i < o && !C.relative[t[i].type]; i++);
                    return y(a > 1 && g(u), a > 1 && f(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, a < i && b(t.slice(a, i)), i < o && b(t = t.slice(i)), i < o && f(t))
                }
                u.push(n)
            }
            return g(u)
        }

        function w(t, n) {
            var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, c) {
                var u, h, d, f = 0, p = "0", g = i && [], m = [], y = P, b = i || r && C.find.TAG("*", c), w = Y += null == y ? 1 : Math.random() || .1, x = b.length;
                for (c && (P = s === H || s || c); p !== x && null != (u = b[p]); p++) {
                    if (r && u) {
                        for (h = 0, s || u.ownerDocument === H || (L(u), a = !j); d = t[h++];)if (d(u, s || H, a)) {
                            l.push(u);
                            break
                        }
                        c && (Y = w)
                    }
                    o && ((u = !d && u) && f--, i && g.push(u))
                }
                if (f += p, o && p !== f) {
                    for (h = 0; d = n[h++];)d(g, m, s, a);
                    if (i) {
                        if (f > 0)for (; p--;)g[p] || m[p] || (m[p] = K.call(l));
                        m = v(m)
                    }
                    J.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                }
                return c && (Y = w, P = y), g
            };
            return o ? i(s) : s
        }

        var x, _, C, T, E, S, k, D, P, N, A, L, H, I, j, M, W, O, R, X = "sizzle" + 1 * new Date, F = t.document, Y = 0, q = 0, $ = n(), B = n(), z = n(), U = function (t, e) {
            return t === e && (A = !0), 0
        }, V = {}.hasOwnProperty, Q = [], K = Q.pop, G = Q.push, J = Q.push, Z = Q.slice, tt = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++)if (t[n] === e)return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(rt), dt = new RegExp("^" + it + "$"), ft = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + rt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, pt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), wt = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, _t = function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, Ct = function () {
            L()
        }, Tt = p(function (t) {
            return t.disabled === !0
        }, {dir: "parentNode", next: "legend"});
        try {
            J.apply(Q = Z.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (Et) {
            J = {
                apply: Q.length ? function (t, e) {
                    G.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, E = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, L = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : F;
            return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, I = H.documentElement, j = !E(H), F !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), _.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = o(function (t) {
                return t.appendChild(H.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = mt.test(H.getElementsByClassName), _.getById = o(function (t) {
                return I.appendChild(t).id = X, !H.getElementsByName || !H.getElementsByName(X).length
            }), _.getById ? (C.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, C.filter.ID = function (t) {
                var e = t.replace(bt, wt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function (t) {
                var e = t.replace(bt, wt);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), C.find.TAG = _.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, C.find.CLASS = _.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && j)return e.getElementsByClassName(t)
                }, W = [], M = [], (_.qsa = mt.test(H.querySelectorAll)) && (o(function (t) {
                I.appendChild(t).innerHTML = "<a id='" + X + "'></a><select id='" + X + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + X + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + X + "+*").length || M.push(".#.+[+~]")
            }), o(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = H.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (_.matchesSelector = mt.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (t) {
                _.disconnectedMatch = O.call(t, "*"), O.call(t, "[s!='']:x"), W.push("!=", rt)
            }), M = M.length && new RegExp(M.join("|")), W = W.length && new RegExp(W.join("|")), e = mt.test(I.compareDocumentPosition), R = e || mt.test(I.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e)return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === H || t.ownerDocument === F && R(F, t) ? -1 : e === H || e.ownerDocument === F && R(F, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return A = !0, 0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, a = [t], l = [e];
                if (!o || !r)return t === H ? -1 : e === H ? 1 : o ? -1 : r ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (o === r)return s(t, e);
                for (n = t; n = n.parentNode;)a.unshift(n);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (; a[i] === l[i];)i++;
                return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
            }, H) : H
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== H && L(t), n = n.replace(ut, "='$1']"), _.matchesSelector && j && !z[n + " "] && (!W || !W.test(n)) && (!M || !M.test(n)))try {
                var i = O.call(t, n);
                if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
            } catch (o) {
            }
            return e(n, H, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== H && L(t), R(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== H && L(t);
            var n = C.attrHandle[e.toLowerCase()], i = n && V.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== i ? i : _.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function (t) {
            return (t + "").replace(xt, _t)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], i = 0, o = 0;
            if (A = !_.detectDuplicates, N = !_.sortStable && t.slice(0), t.sort(U), A) {
                for (; e = t[o++];)e === t[o] && (i = n.push(o));
                for (; i--;)t.splice(n[i], 1)
            }
            return N = null, t
        }, T = e.getText = function (t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                } else if (3 === o || 4 === o)return t.nodeValue
            } else for (; e = t[i++];)n += T(e);
            return n
        }, C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && $(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, n, i) {
                    return function (o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var c, u, h, d, f, p, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = e; d = d[g];)if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (d = m, h = d[X] || (d[X] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], f = c[0] === Y && c[1], b = f && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)if (1 === d.nodeType && ++b && d === e) {
                                    u[t] = [Y, f, b];
                                    break
                                }
                            } else if (y && (d = e, h = d[X] || (d[X] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], f = c[0] === Y && c[1], b = f), b === !1)for (; (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[X] || (d[X] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), u[t] = [Y, b]), d !== e)););
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[X] ? r(n) : r.length > 1 ? (o = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, o = r(t, n), s = o.length; s--;)i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                    }) : function (t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [], n = [], o = k(t.replace(at, "$1"));
                    return o[X] ? i(function (t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                    }
                }), has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: i(function (t) {
                    return t = t.replace(bt, wt), function (e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }), lang: i(function (t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(), function (e) {
                        var n;
                        do if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === I
                }, focus: function (t) {
                    return t === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: c(!1), disabled: c(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !C.pseudos.empty(t)
                }, header: function (t) {
                    return gt.test(t.nodeName)
                }, input: function (t) {
                    return pt.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (t, e) {
                    return [e - 1]
                }), eq: u(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }), even: u(function (t, e) {
                    for (var n = 0; n < e; n += 2)t.push(n);
                    return t
                }), odd: u(function (t, e) {
                    for (var n = 1; n < e; n += 2)t.push(n);
                    return t
                }), lt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;)t.push(i);
                    return t
                }), gt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;)t.push(i);
                    return t
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = a(x);
        for (x in{submit: !0, reset: !0})C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = e.tokenize = function (t, n) {
            var i, o, r, s, a, l, c, u = B[t + " "];
            if (u)return n ? 0 : u.slice(0);
            for (a = t, l = [], c = C.preFilter; a;) {
                i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ct.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in C.filter)!(o = ft[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i)break
            }
            return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, k = e.compile = function (t, e) {
            var n, i = [], o = [], r = z[t + " "];
            if (!r) {
                for (e || (e = S(t)), n = e.length; n--;)r = b(e[n]), r[X] ? i.push(r) : o.push(r);
                r = z(t, w(o, i)), r.selector = t
            }
            return r
        }, D = e.select = function (t, e, n, i) {
            var o, r, s, a, l, c = "function" == typeof t && t, u = !i && S(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && _.getById && 9 === e.nodeType && j && C.relative[r[1].type]) {
                    if (e = (C.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e)return n;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)if ((l = C.find[a]) && (i = l(s.matches[0].replace(bt, wt), yt.test(r[0].type) && h(e.parentNode) || e))) {
                    if (r.splice(o, 1), t = i.length && f(r), !t)return J.apply(n, i), n;
                    break
                }
            }
            return (c || k(t, u))(i, e, !j, n, !e || yt.test(t) && h(e.parentNode) || e), n
        }, _.sortStable = X.split("").sort(U).join("") === X, _.detectDuplicates = !!A, L(), _.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(H.createElement("fieldset"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (t, e, n) {
            if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function (t, e, n) {
            var i;
            if (!n)return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    dt.find = vt, dt.expr = vt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = vt.uniqueSort, dt.text = vt.getText, dt.isXMLDoc = vt.isXML, dt.contains = vt.contains, dt.escapeSelector = vt.escape;
    var yt = function (t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
            if (o && dt(t).is(n))break;
            i.push(t)
        }
        return i
    }, bt = function (t, e) {
        for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
        return n
    }, wt = dt.expr.match.needsContext, xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, _t = /^.[^:#\[\.,]*$/;
    dt.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function (t) {
            var e, n, i = this.length, o = this;
            if ("string" != typeof t)return this.pushStack(dt(t).filter(function () {
                for (e = 0; e < i; e++)if (dt.contains(o[e], this))return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++)dt.find(t, o[e], n);
            return i > 1 ? dt.uniqueSort(n) : n
        }, filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        }, is: function (t) {
            return !!o(this, "string" == typeof t && wt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var Ct, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Et = dt.fn.init = function (t, e, n) {
        var i, o;
        if (!t)return this;
        if (n = n || Ct, "string" == typeof t) {
            if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), xt.test(i[1]) && dt.isPlainObject(e))for (i in e)dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return o = Z.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : dt.makeArray(t, this)
    };
    Et.prototype = dt.fn, Ct = dt(Z);
    var St = /^(?:parents|prev(?:Until|All))/, kt = {children: !0, contents: !0, next: !0, prev: !0};
    dt.fn.extend({
        has: function (t) {
            var e = dt(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)if (dt.contains(this, e[t]))return !0
            })
        }, closest: function (t, e) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof t && dt(t);
            if (!wt.test(t))for (; i < o; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? dt.uniqueSort(r) : r)
        }, index: function (t) {
            return t ? "string" == typeof t ? ot.call(dt(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return yt(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return yt(t, "parentNode", n)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return yt(t, "nextSibling")
        }, prevAll: function (t) {
            return yt(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return yt(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return yt(t, "previousSibling", n)
        }, siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return bt(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || dt.merge([], t.childNodes)
        }
    }, function (t, e) {
        dt.fn[t] = function (n, i) {
            var o = dt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = dt.filter(i, o)), this.length > 1 && (kt[t] || dt.uniqueSort(o), St.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var Dt = /\S+/g;
    dt.Callbacks = function (t) {
        t = "string" == typeof t ? s(t) : dt.extend({}, t);
        var e, n, i, o, r = [], a = [], l = -1, c = function () {
            for (o = t.once, i = e = !0; a.length; l = -1)for (n = a.shift(); ++l < r.length;)r[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = r.length, n = !1);
            t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
        }, u = {
            add: function () {
                return r && (n && !e && (l = r.length - 1, a.push(n)), function i(e) {
                    dt.each(e, function (e, n) {
                        dt.isFunction(n) ? t.unique && u.has(n) || r.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                    })
                }(arguments), n && !e && c()), this
            }, remove: function () {
                return dt.each(arguments, function (t, e) {
                    for (var n; (n = dt.inArray(e, r, n)) > -1;)r.splice(n, 1), n <= l && l--
                }), this
            }, has: function (t) {
                return t ? dt.inArray(t, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = a = [], r = n = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = a = [], n || e || (r = n = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, n) {
                return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, dt.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2], ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]], i = "pending", o = {
                state: function () {
                    return i
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, "catch": function (t) {
                    return o.then(null, t)
                }, pipe: function () {
                    var t = arguments;
                    return dt.Deferred(function (e) {
                        dt.each(n, function (n, i) {
                            var o = dt.isFunction(t[i[4]]) && t[i[4]];
                            r[i[1]](function () {
                                var t = o && o.apply(this, arguments);
                                t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, then: function (e, i, o) {
                    function r(e, n, i, o) {
                        return function () {
                            var c = this, u = arguments, h = function () {
                                var t, h;
                                if (!(e < s)) {
                                    if (t = i.apply(c, u), t === n.promise())throw new TypeError("Thenable self-resolution");
                                    h = t && ("object" == typeof t || "function" == typeof t) && t.then, dt.isFunction(h) ? o ? h.call(t, r(s, n, a, o), r(s, n, l, o)) : (s++, h.call(t, r(s, n, a, o), r(s, n, l, o), r(s, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [t]), (o || n.resolveWith)(c, u))
                                }
                            }, d = o ? h : function () {
                                try {
                                    h()
                                } catch (t) {
                                    dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
                                }
                            };
                            e ? d() : (dt.Deferred.getStackHook && (d.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(d))
                        }
                    }

                    var s = 0;
                    return dt.Deferred(function (t) {
                        n[0][3].add(r(0, t, dt.isFunction(o) ? o : a, t.notifyWith)), n[1][3].add(r(0, t, dt.isFunction(e) ? e : a)), n[2][3].add(r(0, t, dt.isFunction(i) ? i : l))
                    }).promise()
                }, promise: function (t) {
                    return null != t ? dt.extend(t, o) : o
                }
            }, r = {};
            return dt.each(n, function (t, e) {
                var s = e[2], a = e[5];
                o[e[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        }, when: function (t) {
            var e = arguments.length, n = e, i = Array(n), o = et.call(arguments), r = dt.Deferred(), s = function (t) {
                return function (n) {
                    i[t] = this, o[t] = arguments.length > 1 ? et.call(arguments) : n, --e || r.resolveWith(i, o)
                }
            };
            if (e <= 1 && (c(t, r.done(s(n)).resolve, r.reject), "pending" === r.state() || dt.isFunction(o[n] && o[n].then)))return r.then();
            for (; n--;)c(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    dt.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && Pt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, dt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Nt = dt.Deferred();
    dt.fn.ready = function (t) {
        return Nt.then(t)["catch"](function (t) {
            dt.readyException(t)
        }), this
    }, dt.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? dt.readyWait++ : dt.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || Nt.resolveWith(Z, [dt]))
        }
    }), dt.ready.then = Nt.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? t.setTimeout(dt.ready) : (Z.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var At = function (t, e, n, i, o, r, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === dt.type(n)) {
            o = !0;
            for (a in n)At(t, e, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, dt.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                return c.call(dt(t), n)
            })), e))for (; a < l; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    }, Lt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    h.uid = 1, h.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Lt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e)o[dt.camelCase(e)] = n; else for (i in e)o[dt.camelCase(i)] = e[i];
            return o
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
        }, access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in i ? [e] : e.match(Dt) || []), n = e.length;
                    for (; n--;)delete i[e[n]]
                }
                (void 0 === e || dt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !dt.isEmptyObject(e)
        }
    };
    var Ht = new h, It = new h, jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Mt = /[A-Z]/g;
    dt.extend({
        hasData: function (t) {
            return It.hasData(t) || Ht.hasData(t)
        }, data: function (t, e, n) {
            return It.access(t, e, n)
        }, removeData: function (t, e) {
            It.remove(t, e)
        }, _data: function (t, e, n) {
            return Ht.access(t, e, n)
        }, _removeData: function (t, e) {
            Ht.remove(t, e)
        }
    }), dt.fn.extend({
        data: function (t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = It.get(r), 1 === r.nodeType && !Ht.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), d(r, i, o[i])));
                    Ht.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                It.set(this, t)
            }) : At(this, function (e) {
                var n;
                if (r && void 0 === e) {
                    if (n = It.get(r, t), void 0 !== n)return n;
                    if (n = d(r, t), void 0 !== n)return n
                } else this.each(function () {
                    It.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                It.remove(this, t)
            })
        }
    }), dt.extend({
        queue: function (t, e, n) {
            var i;
            if (t)return e = (e || "fx") + "queue", i = Ht.get(t, e), n && (!i || dt.isArray(n) ? i = Ht.access(t, e, dt.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = dt.queue(t, e), i = n.length, o = n.shift(), r = dt._queueHooks(t, e), s = function () {
                dt.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Ht.get(t, n) || Ht.access(t, n, {
                    empty: dt.Callbacks("once memory").add(function () {
                        Ht.remove(t, [e + "queue", n])
                    })
                })
        }
    }), dt.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                dt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, o = dt.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = Ht.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ot = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"), Rt = ["Top", "Right", "Bottom", "Left"], Xt = function (t, e) {
        return t = e || t, "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
    }, Ft = function (t, e, n, i) {
        var o, r, s = {};
        for (r in e)s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e)t.style[r] = s[r];
        return o
    }, Yt = {};
    dt.fn.extend({
        show: function () {
            return g(this, !0)
        }, hide: function () {
            return g(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Xt(this) ? dt(this).show() : dt(this).hide()
            })
        }
    });
    var qt = /^(?:checkbox|radio)$/i, $t = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Bt = /^$|\/(?:java|ecma)script/i, zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
    var Ut = /<|&#?\w+;/;
    !function () {
        var t = Z.createDocumentFragment(), e = t.appendChild(Z.createElement("div")), n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ut.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ut.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Vt = Z.documentElement, Qt = /^key/, Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Gt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {}, add: function (t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = Ht.get(t);
            if (m)for (n.handler && (r = n, n = r.handler, o = r.selector), o && dt.find.matchesSelector(Vt, o), n.guid || (n.guid = dt.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(Dt) || [""], c = e.length; c--;)a = Gt.exec(e[c]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (h = dt.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, h = dt.event.special[f] || {}, u = dt.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && dt.expr.match.needsContext.test(o),
                namespace: p.join(".")
            }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, p, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), dt.event.global[f] = !0)
        }, remove: function (t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = Ht.hasData(t) && Ht.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(Dt) || [""], c = e.length; c--;)if (a = Gt.exec(e[c]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (h = dt.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)u = d[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                    s && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || dt.removeEvent(t, f, m.handle), delete l[f])
                } else for (f in l)dt.event.remove(t, f + e[c], n, i, !0);
                dt.isEmptyObject(l) && Ht.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, n, i, o, r, s, a = dt.event.fix(t), l = new Array(arguments.length), c = (Ht.get(this, "events") || {})[a.type] || [], u = dt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++)l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (s = dt.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped();)for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((dt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (i = [], n = 0; n < a; n++)r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? dt(o, this).index(l) > -1 : dt.find(o, this, null, [l]).length), i[o] && i.push(r);
                i.length && s.push({elem: l, handlers: i})
            }
            return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(dt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: dt.isFunction(e) ? function () {
                    if (this.originalEvent)return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[dt.expando] ? t : new dt.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== x() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === x() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && dt.nodeName(this, "input"))return this.click(), !1
                }, _default: function (t) {
                    return dt.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, dt.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, dt.Event = function (t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? b : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Qt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, dt.event.addProp), dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        dt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return o && (o === i || dt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.fn.extend({
        on: function (t, e, n, i) {
            return _(this, t, e, n, i)
        }, one: function (t, e, n, i) {
            return _(this, t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t)this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = w), this.each(function () {
                dt.event.remove(this, t, n, e);
            })
        }
    });
    var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Zt = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i, ee = /^true\/(.*)/, ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    dt.extend({
        htmlPrefilter: function (t) {
            return t.replace(Jt, "<$1></$2>")
        }, clone: function (t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0), l = dt.contains(t.ownerDocument, t);
            if (!(ut.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))for (s = m(a), r = m(t), i = 0, o = r.length; i < o; i++)k(r[i], s[i]);
            if (e)if (n)for (r = r || m(t), s = s || m(a), i = 0, o = r.length; i < o; i++)S(r[i], s[i]); else S(t, a);
            return s = m(a, "script"), s.length > 0 && v(s, !l && m(t, "script")), a
        }, cleanData: function (t) {
            for (var e, n, i, o = dt.event.special, r = 0; void 0 !== (n = t[r]); r++)if (Lt(n)) {
                if (e = n[Ht.expando]) {
                    if (e.events)for (i in e.events)o[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                    n[Ht.expando] = void 0
                }
                n[It.expando] && (n[It.expando] = void 0)
            }
        }
    }), dt.fn.extend({
        detach: function (t) {
            return P(this, t, !0)
        }, remove: function (t) {
            return P(this, t)
        }, text: function (t) {
            return At(this, function (t) {
                return void 0 === t ? dt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return D(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return D(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return D(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return D(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (dt.cleanData(m(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return dt.clone(this, t, e)
            })
        }, html: function (t) {
            return At(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                if ("string" == typeof t && !Zt.test(t) && !zt[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return D(this, arguments, function (e) {
                var n = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(m(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        dt.fn[t] = function (t) {
            for (var n, i = [], o = dt(t), r = o.length - 1, s = 0; s <= r; s++)n = s === r ? this : this.clone(!0), dt(o[s])[e](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ie = /^margin/, oe = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"), re = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Vt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Vt.removeChild(s), a = null
            }
        }

        var n, i, o, r, s = Z.createElement("div"), a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ut.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), dt.extend(ut, {
            pixelPosition: function () {
                return e(), n
            }, boxSizingReliable: function () {
                return e(), i
            }, pixelMarginRight: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), r
            }
        }))
    }();
    var se = /^(none|table(?!-c[ea]).+)/, ae = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, le = {letterSpacing: "0", fontWeight: "400"}, ce = ["Webkit", "Moz", "ms"], ue = Z.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = N(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = dt.camelCase(e), l = t.style;
                return e = dt.cssProps[a] || (dt.cssProps[a] = L(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Ot.exec(n)) && o[1] && (n = f(t, e, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (dt.cssNumber[a] ? "" : "px")), ut.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var o, r, s, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = L(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in le && (o = le[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), dt.each(["height", "width"], function (t, e) {
        dt.cssHooks[e] = {
            get: function (t, n, i) {
                if (n)return !se.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? j(t, e, i) : Ft(t, ae, function () {
                    return j(t, e, i)
                })
            }, set: function (t, n, i) {
                var o, r = i && re(t), s = i && I(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, r), r);
                return s && (o = Ot.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), H(t, n, s)
            }
        }
    }), dt.cssHooks.marginLeft = A(ut.reliableMarginLeft, function (t, e) {
        if (e)return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
    }), dt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        dt.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)o[t + Rt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ie.test(t) || (dt.cssHooks[t + e].set = H)
    }), dt.fn.extend({
        css: function (t, e) {
            return At(this, function (t, e, n) {
                var i, o, r = {}, s = 0;
                if (dt.isArray(e)) {
                    for (i = re(t), o = e.length; s < o; s++)r[e[s]] = dt.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), dt.Tween = M, M.prototype = {
        constructor: M, init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (dt.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, dt.fx = M.prototype.init, dt.fx.step = {};
    var he, de, fe = /^(?:toggle|show|hide)$/, pe = /queueHooks$/;
    dt.Animation = dt.extend(q, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return f(n.elem, t, Ot.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
            for (var n, i = 0, o = t.length; i < o; i++)n = t[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(e)
        }, prefilters: [F], prefilter: function (t, e) {
            e ? q.prefilters.unshift(t) : q.prefilters.push(t)
        }
    }), dt.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? dt.extend({}, t) : {
            complete: n || !n && e || dt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !dt.isFunction(e) && e
        };
        return dt.fx.off || Z.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
        }, i
    }, dt.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(Xt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var o = dt.isEmptyObject(t), r = dt.speed(e, n, i), s = function () {
                var e = q(this, dt.extend({}, t), r);
                (o || Ht.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", r = dt.timers, s = Ht.get(this);
                if (o)s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && pe.test(o) && i(s[o]);
                for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                !e && n || dt.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = Ht.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = dt.timers, s = i ? i.length : 0;
                for (n.finish = !0, dt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++)i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), dt.each(["toggle", "show", "hide"], function (t, e) {
        var n = dt.fn[e];
        dt.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, o)
        }
    }), dt.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        dt.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), dt.timers = [], dt.fx.tick = function () {
        var t, e = 0, n = dt.timers;
        for (he = dt.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || dt.fx.stop(), he = void 0
    }, dt.fx.timer = function (t) {
        dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
    }, dt.fx.interval = 13, dt.fx.start = function () {
        de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(W) : t.setInterval(dt.fx.tick, dt.fx.interval))
    }, dt.fx.stop = function () {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null
    }, dt.fx.speeds = {slow: 600, fast: 200, _default: 400}, dt.fn.delay = function (e, n) {
        return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, function () {
        var t = Z.createElement("input"), e = Z.createElement("select"), n = e.appendChild(Z.createElement("option"));
        t.type = "checkbox", ut.checkOn = "" !== t.value, ut.optSelected = n.selected, t = Z.createElement("input"), t.value = "t", t.type = "radio", ut.radioValue = "t" === t.value
    }();
    var ge, me = dt.expr.attrHandle;
    dt.fn.extend({
        attr: function (t, e) {
            return At(this, dt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === r && dt.isXMLDoc(t) || (o = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ut.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, i = 0, o = e && e.match(Dt);
            if (o && 1 === t.nodeType)for (; n = o[i++];)t.removeAttribute(n)
        }
    }), ge = {
        set: function (t, e, n) {
            return e === !1 ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = me[e] || dt.find.attr;
        me[e] = function (t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = me[s], me[s] = o, o = null != n(t, e, i) ? s : null, me[s] = r), o
        }
    });
    var ve = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function (t, e) {
            return At(this, dt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[dt.propFix[t] || t]
            })
        }
    }), dt.extend({
        prop: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)return 1 === r && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, o = dt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ut.optSelected || (dt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        dt.propFix[this.toLowerCase()] = this
    });
    var be = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (dt.isFunction(t))return this.each(function (e) {
                dt(this).addClass(t.call(this, e, $(this)))
            });
            if ("string" == typeof t && t)for (e = t.match(Dt) || []; n = this[l++];)if (o = $(n), i = 1 === n.nodeType && (" " + o + " ").replace(be, " ")) {
                for (s = 0; r = e[s++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                a = dt.trim(i), o !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (dt.isFunction(t))return this.each(function (e) {
                dt(this).removeClass(t.call(this, e, $(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof t && t)for (e = t.match(Dt) || []; n = this[l++];)if (o = $(n), i = 1 === n.nodeType && (" " + o + " ").replace(be, " ")) {
                for (s = 0; r = e[s++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
                a = dt.trim(i), o !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function (n) {
                dt(this).toggleClass(t.call(this, n, $(this), e), e)
            }) : this.each(function () {
                var e, i, o, r;
                if ("string" === n)for (i = 0, o = dt(this), r = t.match(Dt) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || (e = $(this), e && Ht.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Ht.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)if (1 === n.nodeType && (" " + $(n) + " ").replace(be, " ").indexOf(e) > -1)return !0;
            return !1
        }
    });
    var we = /\r/g, xe = /[\x20\t\r\n\f]+/g;
    dt.fn.extend({
        val: function (t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = dt.isFunction(t), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, dt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : dt.isArray(o) && (o = dt.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = dt.valHooks[o.type] || dt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : dt.trim(dt.text(t)).replace(xe, " ")
                }
            }, select: {
                get: function (t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)if (n = i[l], (n.selected || l === o) && !n.disabled && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                        if (e = dt(n).val(), r)return e;
                        s.push(e)
                    }
                    return s
                }, set: function (t, e) {
                    for (var n, i, o = t.options, r = dt.makeArray(e), s = o.length; s--;)i = o[s], (i.selected = dt.inArray(dt.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function () {
        dt.valHooks[this] = {
            set: function (t, e) {
                if (dt.isArray(e))return t.checked = dt.inArray(dt(t).val(), e) > -1
            }
        }, ut.checkOn || (dt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var _e = /^(?:focusinfocus|focusoutblur)$/;
    dt.extend(dt.event, {
        trigger: function (e, n, i, o) {
            var r, s, a, l, c, u, h, d = [i || Z], f = at.call(e, "type") ? e.type : e, p = at.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(f + dt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[dt.expando] ? e : new dt.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), h = dt.event.special[f] || {}, o || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!o && !h.noBubble && !dt.isWindow(i)) {
                    for (l = h.delegateType || f, _e.test(l + f) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                    a === (i.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = d[r++]) && !e.isPropagationStopped();)e.type = r > 1 ? l : h.bindType || f, u = (Ht.get(s, "events") || {})[e.type] && Ht.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Lt(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = f, o || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), n) !== !1 || !Lt(i) || c && dt.isFunction(i[f]) && !dt.isWindow(i) && (a = i[c], a && (i[c] = null), dt.event.triggered = f, i[f](), dt.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        }, simulate: function (t, e, n) {
            var i = dt.extend(new dt.Event, n, {type: t, isSimulated: !0});
            dt.event.trigger(i, null, e)
        }
    }), dt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                dt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            if (n)return dt.event.trigger(t, e, n, !0)
        }
    }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        dt.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ut.focusin = "onfocusin" in t, ut.focusin || dt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, o = Ht.access(i, e);
                o || i.addEventListener(t, n, !0), Ht.access(i, e, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = Ht.access(i, e) - 1;
                o ? Ht.access(i, e, o) : (i.removeEventListener(t, n, !0), Ht.remove(i, e))
            }
        }
    });
    var Ce = t.location, Te = dt.now(), Ee = /\?/;
    dt.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e)return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
    };
    var Se = /\[\]$/, ke = /\r?\n/g, De = /^(?:submit|button|image|reset|file)$/i, Pe = /^(?:input|select|textarea|keygen)/i;
    dt.param = function (t, e) {
        var n, i = [], o = function (t, e) {
            var n = dt.isFunction(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t))dt.each(t, function () {
            o(this.name, this.value)
        }); else for (n in t)B(n, t[n], e, o);
        return i.join("&")
    }, dt.fn.extend({
        serialize: function () {
            return dt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && Pe.test(this.nodeName) && !De.test(t) && (this.checked || !qt.test(t))
            }).map(function (t, e) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function (t) {
                    return {name: e.name, value: t.replace(ke, "\r\n")}
                }) : {name: e.name, value: n.replace(ke, "\r\n")}
            }).get()
        }
    });
    var Ne = /%20/g, Ae = /#.*$/, Le = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, je = /^(?:GET|HEAD)$/, Me = /^\/\//, We = {}, Oe = {}, Re = "*/".concat("*"), Xe = Z.createElement("a");
    Xe.href = Ce.href, dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: Ie.test(Ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Re,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": dt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? V(V(t, dt.ajaxSettings), e) : V(dt.ajaxSettings, t)
        },
        ajaxPrefilter: z(We),
        ajaxTransport: z(Oe),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var c, d, f, w, x, _ = n;
                u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = Q(p, C, i)), w = K(p, w, C, c), c ? (p.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (dt.lastModified[r] = x), x = C.getResponseHeader("etag"), x && (dt.etag[r] = x)), 204 === e || "HEAD" === p.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, d = w.data, f = w.error, c = !f)) : (f = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || _) + "", c ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, f]), C.statusCode(b), b = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? d : f]), y.fireWith(g, [C, _]), h && (m.trigger("ajaxComplete", [C, p]), --dt.active || dt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, s, a, l, c, u, h, d, f, p = dt.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? dt(g) : dt.event, v = dt.Deferred(), y = dt.Callbacks("once memory"), b = p.statusCode || {}, w = {}, x = {}, _ = "canceled", C = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (u) {
                        if (!a)for (a = {}; e = He.exec(s);)a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return u ? s : null
                },
                setRequestHeader: function (t, e) {
                    return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                },
                overrideMimeType: function (t) {
                    return null == u && (p.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (u)C.always(t[C.status]); else for (e in t)b[e] = [b[e], t[e]];
                    return this
                },
                abort: function (t) {
                    var e = t || _;
                    return o && o.abort(e), i(0, e), this
                }
            };
            if (v.promise(C), p.url = ((e || p.url || Ce.href) + "").replace(Me, Ce.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Dt) || [""], null == p.crossDomain) {
                c = Z.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Xe.protocol + "//" + Xe.host != c.protocol + "//" + c.host
                } catch (T) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = dt.param(p.data, p.traditional)), U(We, p, n, C), u)return C;
            h = dt.event && p.global, h && 0 === dt.active++ && dt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !je.test(p.type), r = p.url.replace(Ae, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ne, "+")) : (f = p.url.slice(r.length), p.data && (r += (Ee.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (r = r.replace(Le, ""), f = (Ee.test(r) ? "&" : "?") + "_=" + Te++ + f), p.url = r + f), p.ifModified && (dt.lastModified[r] && C.setRequestHeader("If-Modified-Since", dt.lastModified[r]), dt.etag[r] && C.setRequestHeader("If-None-Match", dt.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers)C.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(g, C, p) === !1 || u))return C.abort();
            if (_ = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = U(Oe, p, n, C)) {
                if (C.readyState = 1, h && m.trigger("ajaxSend", [C, p]), u)return C;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, o.send(w, i)
                } catch (T) {
                    if (u)throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function (t, e) {
        dt[e] = function (t, n, i, o) {
            return dt.isFunction(n) && (o = o || i, i = n, n = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function (t) {
        return dt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, dt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return dt.isFunction(t) ? this.each(function (e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = dt(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = dt.isFunction(t);
            return this.each(function (n) {
                dt(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                dt(this).replaceWith(this.childNodes)
            }), this
        }
    }), dt.expr.pseudos.hidden = function (t) {
        return !dt.expr.pseudos.visible(t)
    }, dt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, dt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    };
    var Fe = {0: 200, 1223: 204}, Ye = dt.ajaxSettings.xhr();
    ut.cors = !!Ye && "withCredentials" in Ye, ut.ajax = Ye = !!Ye, dt.ajaxTransport(function (e) {
        var n, i;
        if (ut.cors || Ye && !e.crossDomain)return {
            send: function (o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (s in e.xhrFields)a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o)a.setRequestHeader(s, o[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n)throw l
                }
            }, abort: function () {
                n && n()
            }
        }
    }), dt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), dt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, o) {
                    e = dt("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var qe = [], $e = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = qe.pop() || dt.expando + "_" + Te++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o, r, s, a = e.jsonp !== !1 && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])return o = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($e, "$1" + o) : e.jsonp !== !1 && (e.url += (Ee.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || dt.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? dt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, qe.push(o)), s && dt.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), ut.createHTMLDocument = function () {
        var t = Z.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), dt.parseHTML = function (t, e, n) {
        if ("string" != typeof t)return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, o, r;
        return e || (ut.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = Z.location.href, e.head.appendChild(i)) : e = Z), o = xt.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = y([t], e, r), r && r.length && dt(r).remove(), dt.merge([], o.childNodes))
    }, dt.fn.load = function (t, e, n) {
        var i, o, r, s = this, a = t.indexOf(" ");
        return a > -1 && (i = dt.trim(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && dt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        dt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), dt.expr.pseudos.animated = function (t) {
        return dt.grep(dt.timers, function (e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, l, c, u = dt.css(t, "position"), h = dt(t), d = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), r = dt.css(t, "top"), l = dt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = h.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, dt.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = G(o), e = o.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n = this[0], i = {top: 0, left: 0};
                return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + dt.css(t[0], "borderTopWidth", !0),
                    left: i.left + dt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - dt.css(n, "marginTop", !0),
                    left: e.left - i.left - dt.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === dt.css(t, "position");)t = t.offsetParent;
                return t || Vt
            })
        }
    }), dt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = "pageYOffset" === e;
        dt.fn[t] = function (i) {
            return At(this, function (t, i, o) {
                var r = G(t);
                return void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }), dt.each(["top", "left"], function (t, e) {
        dt.cssHooks[e] = A(ut.pixelPosition, function (t, n) {
            if (n)return n = N(t, e), oe.test(n) ? dt(t).position()[e] + "px" : n
        })
    }), dt.each({Height: "height", Width: "width"}, function (t, e) {
        dt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            dt.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o), a = n || (o === !0 || r === !0 ? "margin" : "border");
                return At(this, function (e, n, o) {
                    var r;
                    return dt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? dt.css(e, n, a) : dt.style(e, n, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }), dt.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), dt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return dt
    });
    var Be = t.jQuery, ze = t.$;
    return dt.noConflict = function (e) {
        return t.$ === dt && (t.$ = ze), e && t.jQuery === dt && (t.jQuery = Be), dt
    }, e || (t.jQuery = t.$ = dt), dt
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.0";
    var e = 0, n = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (n) {
            var i, o, r;
            for (r = 0; null != (o = n[r]); r++)try {
                i = t._data(o, "events"), i && i.remove && t(o).triggerHandler("remove")
            } catch (s) {
            }
            e(n)
        }
    }(t.cleanData), t.widget = function (e, n, i) {
        var o, r, s, a = {}, l = e.split(".")[0];
        e = e.split(".")[1];
        var c = l + "-" + e;
        return i || (i = n, n = t.Widget), t.isArray(i) && (i = t.extend.apply(null, [{}].concat(i))), t.expr[":"][c.toLowerCase()] = function (e) {
            return !!t.data(e, c)
        }, t[l] = t[l] || {}, o = t[l][e], r = t[l][e] = function (t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = t.widget.extend({}, s.options), t.each(i, function (e, i) {
            return t.isFunction(i) ? void(a[e] = function () {
                function t() {
                    return n.prototype[e].apply(this, arguments)
                }

                function o(t) {
                    return n.prototype[e].apply(this, t)
                }

                return function () {
                    var e, n = this._super, r = this._superApply;
                    return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = r, e
                }
            }()) : void(a[e] = i)
        }), r.prototype = t.widget.extend(s, {widgetEventPrefix: o ? s.widgetEventPrefix || e : e}, a, {
            constructor: r,
            namespace: l,
            widgetName: e,
            widgetFullName: c
        }), o ? (t.each(o._childConstructors, function (e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r), r
    }, t.widget.extend = function (e) {
        for (var i, o, r = n.call(arguments, 1), s = 0, a = r.length; a > s; s++)for (i in r[s])o = r[s][i], r[s].hasOwnProperty(i) && void 0 !== o && (e[i] = t.isPlainObject(o) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : o);
        return e
    }, t.widget.bridge = function (e, i) {
        var o = i.prototype.widgetFullName || e;
        t.fn[e] = function (r) {
            var s = "string" == typeof r, a = n.call(arguments, 1), l = this;
            return s ? this.each(function () {
                var n, i = t.data(this, o);
                return "instance" === r ? (l = i, !1) : i ? t.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
            }) : (a.length && (r = t.widget.extend.apply(null, [r].concat(a))), this.each(function () {
                var e = t.data(this, o);
                e ? (e.option(r || {}), e._init && e._init()) : t.data(this, o, new i(r, this))
            })), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (n, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function (t, n) {
                e._removeClass(n, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, n) {
            var i, o, r, s = e;
            if (0 === arguments.length)return t.widget.extend({}, this.options);
            if ("string" == typeof e)if (s = {}, i = e.split("."), e = i.shift(), i.length) {
                for (o = s[e] = t.widget.extend({}, this.options[e]), r = 0; i.length - 1 > r; r++)o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                if (e = i.pop(), 1 === arguments.length)return void 0 === o[e] ? null : o[e];
                o[e] = n
            } else {
                if (1 === arguments.length)return void 0 === this.options[e] ? null : this.options[e];
                s[e] = n
            }
            return this._setOptions(s), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t)this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (e) {
            var n, i, o;
            for (n in e)o = this.classesElementLookup[n], e[n] !== this.options.classes[n] && o && o.length && (i = t(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                element: i,
                keys: n,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (e) {
            function n(n, r) {
                var s, a;
                for (a = 0; n.length > a; a++)s = o.classesElementLookup[n[a]] || t(), s = t(e.add ? t.unique(s.get().concat(e.element.get())) : s.not(e.element).get()), o.classesElementLookup[n[a]] = s, i.push(n[a]), r && e.classes[n[a]] && i.push(e.classes[n[a]])
            }

            var i = [], o = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), e.keys && n(e.keys.match(/\S+/g) || [], !0), e.extra && n(e.extra.match(/\S+/g) || []), i.join(" ")
        },
        _removeClass: function (t, e, n) {
            return this._toggleClass(t, e, n, !1)
        },
        _addClass: function (t, e, n) {
            return this._toggleClass(t, e, n, !0)
        },
        _toggleClass: function (t, e, n, i) {
            i = "boolean" == typeof i ? i : n;
            var o = "string" == typeof t || null === t, r = {
                extra: o ? e : n,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: i
            };
            return r.element.toggleClass(this._classes(r), i), this
        },
        _on: function (e, n, i) {
            var o, r = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function (i, s) {
                function a() {
                    return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                }

                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + r.eventNamespace, u = l[2];
                u ? o.on(c, u, a) : n.on(c, a)
            })
        },
        _off: function (e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(n).off(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }

            var i = this;
            return setTimeout(n, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                }, focusout: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (e, n, i) {
            var o, r, s = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], r = n.originalEvent)for (o in r)o in n || (n[o] = r[o]);
            return this.element.trigger(n, i), !(t.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, n) {
        t.Widget.prototype["_" + e] = function (i, o, r) {
            "string" == typeof o && (o = {effect: o});
            var s, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : e;
            o = o || {}, "number" == typeof o && (o = {duration: o}), s = !t.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), s && t.effects && t.effects.effect[a] ? i[e](o) : a !== e && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function (n) {
                t(this)[e](), r && r.call(i[0]), n()
            })
        }
    }), t.widget, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (n) {
                return !!t.data(n, e)
            }
        }) : function (e, n, i) {
            return !!t.data(e, i[3])
        }
    }), t.fn.scrollParent = function (e) {
        var n = this.css("position"), i = "absolute" === n, o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, r = this.parents().filter(function () {
            var e = t(this);
            return (!i || "static" !== e.css("position")) && o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
        return "fixed" !== n && r.length ? r : t(this[0].ownerDocument || document)
    }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var i = !1;
    t(document).on("mouseup", function () {
        i = !1
    }), t.widget("ui.mouse", {
        version: "1.12.0",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (n) {
                return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!i) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var n = this, o = 1 === e.which, r = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(o && !r && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0))
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)return this._mouseUp(e);
                if (!e.which)if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich)return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, i = !1, e.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, n) {
            return t >= e && e + n > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (e, n) {
            var i = null, o = !1, r = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
                    return t.data(this, r.widgetName + "-item") === r ? (i = t(this), !1) : void 0
                }), t.data(e.target, r.widgetName + "-item") === r && (i = t(e.target)), !!i && (!(this.options.handle && !n && (t(this.options.handle, i).find("*").addBack().each(function () {
                    this === e.target && (o = !0)
                }), !o)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (e, n, i) {
            var o, r, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)for (o = this.containers.length - 1; o >= 0; o--)this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var n, i, o, r, s = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), e.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)if (i = this.items[n], o = i.item[0], r = this._intersectsWithPointer(i), r && i.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], o))) {
                if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))break;
                this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, n) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var i = this, o = this.placeholder.offset(), r = this.options.axis, s = {};
                    r && "x" !== r || (s.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function () {
                        i._clear(e)
                    })
                } else this._clear(e, n);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, t(n).each(function () {
                var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function (e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, n.each(function () {
                i.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, n = e + this.helperProportions.width, i = this.positionAbs.top, o = i + this.helperProportions.height, r = t.left, s = r + t.width, a = t.top, l = a + t.height, c = this.offset.click.top, u = this.offset.click.left, h = "x" === this.options.axis || i + c > a && l > i + c, d = "y" === this.options.axis || e + u > r && s > e + u, f = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : e + this.helperProportions.width / 2 > r && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > o - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, n, i = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), o = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), r = i && o;
            return !!r && (e = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(), this.floating ? "right" === n || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), i = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && n || "left" === o && !n : i && ("down" === i && e || "up" === i && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function n() {
                a.push(this)
            }

            var i, o, r, s, a = [], l = [], c = this._connectWith();
            if (c && e)for (i = c.length - 1; i >= 0; i--)for (r = t(c[i], this.document[0]), o = r.length - 1; o >= 0; o--)s = t.data(r[o], this.widgetFullName), s && s !== this && !s.options.disabled && l.push([t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--)l[i][0].each(n);
            return t(a)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var n = 0; e.length > n; n++)if (e[n] === t.item[0])return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var n, i, o, r, s, a, l, c, u = this.items, h = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)for (n = d.length - 1; n >= 0; n--)for (o = t(d[n], this.document[0]), i = o.length - 1; i >= 0; i--)r = t.data(o[i], this.widgetFullName), r && r !== this && !r.options.disabled && (h.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {item: this.currentItem}) : t(r.options.items, r.element), r]), this.containers.push(r));
            for (n = h.length - 1; n >= 0; n--)for (s = h[n][1], a = h[n][0], i = 0, c = a.length; c > i; i++)l = t(a[i]), l.data(this.widgetName + "-item", s), u.push({
                item: l,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, o, r;
            for (n = this.items.length - 1; n >= 0; n--)i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = o.outerWidth(), i.height = o.outerHeight()), r = o.offset(), i.left = r.left, i.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--)r = this.containers[n].element.offset(), this.containers[n].containerCache.left = r.left, this.containers[n].containerCache.top = r.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var n, i = e.options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function () {
                    var i = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + i + ">", e.document[0]);
                    return e._addClass(o, "ui-sortable-placeholder", n || e.currentItem[0].className)._removeClass(o, "ui-sortable-helper"), "tbody" === i ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(o)) : "tr" === i ? e._createTrPlaceholder(e.currentItem, o) : "img" === i && o.attr("src", e.currentItem.attr("src")), n || o.css("visibility", "hidden"), o
                }, update: function (t, o) {
                    (!n || i.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function (e, n) {
            var i = this;
            e.children().each(function () {
                t("<td>&#160;</td>", i.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
            })
        },
        _contactContainers: function (e) {
            var n, i, o, r, s, a, l, c, u, h, d = null, f = null;
            for (n = this.containers.length - 1; n >= 0; n--)if (!t.contains(this.currentItem[0], this.containers[n].element[0]))if (this._intersectsWith(this.containers[n].containerCache)) {
                if (d && t.contains(this.containers[n].element[0], d.element[0]))continue;
                d = this.containers[n], f = n
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (d)if (1 === this.containers.length)this.containers[f].containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1); else {
                for (o = 1e4, r = null, u = d.floating || this._isFloating(this.currentItem), s = u ? "left" : "top", a = u ? "width" : "height", h = u ? "pageX" : "pageY", i = this.items.length - 1; i >= 0; i--)t.contains(this.containers[f].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[s], c = !1, e[h] - l > this.items[i][a] / 2 && (c = !0), o > Math.abs(e[h] - l) && (o = Math.abs(e[h] - l), r = this.items[i], this.direction = c ? "up" : "down"));
                if (!r && !this.options.dropOnEmpty)return;
                if (this.currentContainer === this.containers[f])return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[f].element, !0), this._trigger("change", e, this._uiHash()), this.containers[f]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var n = this.options, i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, n, i, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], n = t(o.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, n) {
            n || (n = this.position);
            var i = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(o[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * i
            }
        },
        _generatePosition: function (e) {
            var n, i, o = this.options, r = e.pageX, s = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), o.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - o.grid[1] : n + o.grid[1] : n, i = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - o.grid[0] : i + o.grid[0] : i)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function (t, e, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function () {
                o === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function (t, e) {
            function n(t, e, n) {
                return function (i) {
                    n._trigger(t, i, e._uiHash(e))
                }
            }

            this.reverting = !1;
            var i, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (o.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), o.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), o.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)e || o.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (o.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (i = 0; o.length > i; i++)o[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var n = e || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || t([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}), !function t(e, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)return l(s, !0);
                if (r)return r(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[s] = {exports: {}};
            e[s][0].call(u.exports, function (t) {
                var n = e[s][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, i)
        }
        return n[s].exports
    }

    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)o(i[s]);
    return o
}({
    1: [function (t, e, n) {
        "use strict";
        function i(t) {
            t.fn.perfectScrollbar = function (t) {
                return this.each(function () {
                    if ("object" == typeof t || "undefined" == typeof t) {
                        var e = t;
                        r.get(this) || o.initialize(this, e)
                    } else {
                        var n = t;
                        "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
                    }
                })
            }
        }

        var o = t("../main"), r = t("../plugin/instances");
        if ("function" == typeof define && define.amd)define(["jquery"], i); else {
            var s = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof s && i(s)
        }
        e.exports = i
    }, {"../main": 7, "../plugin/instances": 18}],
    2: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "), i = n.indexOf(e);
            i >= 0 && n.splice(i, 1), t.className = n.join(" ")
        }

        n.add = function (t, e) {
            t.classList ? t.classList.add(e) : i(t, e)
        }, n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function (t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }, {}],
    3: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function r(t, e) {
            for (var n in e) {
                var i = e[n];
                "number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
            }
            return t
        }

        var s = {};
        s.e = function (t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, s.appendTo = function (t, e) {
            return e.appendChild(t), t
        }, s.css = function (t, e, n) {
            return "object" == typeof e ? r(t, e) : "undefined" == typeof n ? i(t, e) : o(t, e, n)
        }, s.matches = function (t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, s.remove = function (t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, s.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
                return s.matches(t, e)
            })
        }, e.exports = s
    }, {}],
    4: [function (t, e, n) {
        "use strict";
        var i = function (t) {
            this.element = t, this.events = {}
        };
        i.prototype.bind = function (t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, i.prototype.unbind = function (t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function (i) {
                return !(!n || i === e) || (this.element.removeEventListener(t, i, !1), !1)
            }, this)
        }, i.prototype.unbindAll = function () {
            for (var t in this.events)this.unbind(t)
        };
        var o = function () {
            this.eventElements = []
        };
        o.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new i(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)this.eventElements[t].unbindAll()
        }, o.prototype.once = function (t, e, n) {
            var i = this.eventElement(t), o = function (t) {
                i.unbind(e, o), n(t)
            };
            i.bind(e, o)
        }, e.exports = o
    }, {}],
    5: [function (t, e, n) {
        "use strict";
        e.exports = function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function (t, e, n) {
        "use strict";
        var i = t("./class"), o = t("./dom"), r = n.toInt = function (t) {
            return parseInt(t, 10) || 0
        }, s = n.clone = function (t) {
            if (null === t)return null;
            if (t.constructor === Array)return t.map(s);
            if ("object" == typeof t) {
                var e = {};
                for (var n in t)e[n] = s(t[n]);
                return e
            }
            return t
        };
        n.extend = function (t, e) {
            var n = s(t);
            for (var i in e)n[i] = s(e[i]);
            return n
        }, n.isEditable = function (t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function (t) {
            for (var e = i.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && i.remove(t, o)
            }
        }, n.outerWidth = function (t) {
            return r(o.css(t, "width")) + r(o.css(t, "paddingLeft")) + r(o.css(t, "paddingRight")) + r(o.css(t, "borderLeftWidth")) + r(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function (t, e) {
            i.add(t, "ps-in-scrolling"), "undefined" != typeof e ? i.add(t, "ps-" + e) : (i.add(t, "ps-x"), i.add(t, "ps-y"))
        }, n.stopScrolling = function (t, e) {
            i.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? i.remove(t, "ps-" + e) : (i.remove(t, "ps-x"), i.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {"./class": 2, "./dom": 3}],
    7: [function (t, e, n) {
        "use strict";
        var i = t("./plugin/destroy"), o = t("./plugin/initialize"), r = t("./plugin/update");
        e.exports = {initialize: o, update: r, destroy: i}
    }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}],
    8: [function (t, e, n) {
        "use strict";
        e.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/dom"), r = t("./instances");
        e.exports = function (t) {
            var e = r.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), i.removePsClasses(t), r.remove(t))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
    10: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }

            var i = function (t) {
                t.stopPropagation()
            };
            e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", i), e.event.bind(e.scrollbarYRail, "click", function (i) {
                var r = o.toInt(e.scrollbarYHeight / 2), l = e.railYRatio * (i.pageY - window.pageYOffset - n(e.scrollbarYRail).top - r), c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight), u = l / c;
                u < 0 ? u = 0 : u > 1 && (u = 1), a(t, "top", (e.contentHeight - e.containerHeight) * u), s(t), i.stopPropagation()
            }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", i), e.event.bind(e.scrollbarXRail, "click", function (i) {
                var r = o.toInt(e.scrollbarXWidth / 2), l = e.railXRatio * (i.pageX - window.pageXOffset - n(e.scrollbarXRail).left - r), c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth), u = l / c;
                u < 0 ? u = 0 : u > 1 && (u = 1), a(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), s(t), i.stopPropagation()
            })
        }

        var o = t("../../lib/helper"), r = t("../instances"), s = t("../update-geometry"), a = t("../update-scroll");
        e.exports = function (t) {
            var e = r.get(t);
            i(t, e)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    11: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n) {
                var o = i + n * e.railXRatio, s = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                o < 0 ? e.scrollbarXLeft = 0 : o > s ? e.scrollbarXLeft = s : e.scrollbarXLeft = o;
                var a = r.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", a)
            }

            var i = null, o = null, a = function (e) {
                n(e.pageX - o), l(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                r.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a)
            };
            e.event.bind(e.scrollbarX, "mousedown", function (n) {
                o = n.pageX, i = r.toInt(s.css(e.scrollbarX, "left")) * e.railXRatio, r.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = i + n * e.railYRatio, s = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                o < 0 ? e.scrollbarYTop = 0 : o > s ? e.scrollbarYTop = s : e.scrollbarYTop = o;
                var a = r.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", a)
            }

            var i = null, o = null, a = function (e) {
                n(e.pageY - o), l(t), e.stopPropagation(), e.preventDefault()
            }, u = function () {
                r.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a)
            };
            e.event.bind(e.scrollbarY, "mousedown", function (n) {
                o = n.pageY, i = r.toInt(s.css(e.scrollbarY, "top")) * e.railYRatio, r.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        var r = t("../../lib/helper"), s = t("../../lib/dom"), a = t("../instances"), l = t("../update-geometry"), c = t("../update-scroll");
        e.exports = function (t) {
            var e = a.get(t);
            i(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n, i) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)return !e.settings.wheelPropagation
                }
                var r = t.scrollLeft;
                if (0 === i) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            var i = !1;
            e.event.bind(t, "mouseenter", function () {
                i = !0
            }), e.event.bind(t, "mouseleave", function () {
                i = !1
            });
            var s = !1;
            e.event.bind(e.ownerDocument, "keydown", function (c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = r.matches(e.scrollbarX, ":focus") || r.matches(e.scrollbarY, ":focus");
                    if (i || u) {
                        var h = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (h) {
                            if ("IFRAME" === h.tagName)h = h.contentDocument.activeElement; else for (; h.shadowRoot;)h = h.shadowRoot.activeElement;
                            if (o.isEditable(h))return
                        }
                        var d = 0, f = 0;
                        switch (c.which) {
                            case 37:
                                d = -30;
                                break;
                            case 38:
                                f = 30;
                                break;
                            case 39:
                                d = 30;
                                break;
                            case 40:
                                f = -30;
                                break;
                            case 33:
                                f = 90;
                                break;
                            case 32:
                                f = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                f = -90;
                                break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                break;
                            default:
                                return
                        }
                        l(t, "top", t.scrollTop - f), l(t, "left", t.scrollLeft + d), a(t), s = n(d, f), s && c.preventDefault()
                    }
                }
            })
        }

        var o = t("../../lib/helper"), r = t("../../lib/dom"), s = t("../instances"), a = t("../update-geometry"), l = t("../update-scroll");
        e.exports = function (t) {
            var e = s.get(t);
            i(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n(n, i) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive)return !1;
                    if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)return !e.settings.wheelPropagation
                }
                var r = t.scrollLeft;
                if (0 === i) {
                    if (!e.scrollbarXActive)return !1;
                    if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)return !e.settings.wheelPropagation
                }
                return !0
            }

            function i(t) {
                var e = t.deltaX, n = -1 * t.deltaY;
                return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n]
            }

            function o(e, n) {
                var i = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (i) {
                    if ("TEXTAREA" !== i.tagName && !window.getComputedStyle(i).overflow.match(/(scroll|auto)/))return !1;
                    var o = i.scrollHeight - i.clientHeight;
                    if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && n < 0))return !0;
                    var r = i.scrollLeft - i.clientWidth;
                    if (r > 0 && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === r && e > 0))return !0
                }
                return !1
            }

            function a(a) {
                var c = i(a), u = c[0], h = c[1];
                o(u, h) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (h ? s(t, "top", t.scrollTop - h * e.settings.wheelSpeed) : s(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? s(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : s(t, "left", t.scrollLeft - h * e.settings.wheelSpeed), l = !0) : (s(t, "top", t.scrollTop - h * e.settings.wheelSpeed), s(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), r(t), l = l || n(u, h), l && (a.stopPropagation(), a.preventDefault()))
            }

            var l = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", a) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", a)
        }

        var o = t("../instances"), r = t("../update-geometry"), s = t("../update-scroll");
        e.exports = function (t) {
            var e = o.get(t);
            i(t, e)
        }
    }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    14: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            e.event.bind(t, "scroll", function () {
                r(t)
            })
        }

        var o = t("../instances"), r = t("../update-geometry");
        e.exports = function (t) {
            var e = o.get(t);
            i(t, e)
        }
    }, {"../instances": 18, "../update-geometry": 19}],
    15: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function i() {
                c || (c = setInterval(function () {
                    return r.get(t) ? (a(t, "top", t.scrollTop + u.top), a(t, "left", t.scrollLeft + u.left), void s(t)) : void clearInterval(c)
                }, 50))
            }

            function l() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }

            var c = null, u = {top: 0, left: 0}, h = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function () {
                t.contains(n()) ? h = !0 : (h = !1, l())
            }), e.event.bind(window, "mouseup", function () {
                h && (h = !1, l())
            }), e.event.bind(window, "mousemove", function (e) {
                if (h) {
                    var n = {x: e.pageX, y: e.pageY}, r = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                    n.x < r.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > r.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < r.top + 3 ? (r.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > r.bottom - 3 ? (n.y - r.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
                }
            })
        }

        var o = t("../../lib/helper"), r = t("../instances"), s = t("../update-geometry"), a = t("../update-scroll");
        e.exports = function (t) {
            var e = r.get(t);
            i(t, e)
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    16: [function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
            function o(n, i) {
                var o = t.scrollTop, r = t.scrollLeft, s = Math.abs(n), a = Math.abs(i);
                if (a > s) {
                    if (i < 0 && o === e.contentHeight - e.containerHeight || i > 0 && 0 === o)return !e.settings.swipePropagation
                } else if (s > a && (n < 0 && r === e.contentWidth - e.containerWidth || n > 0 && 0 === r))return !e.settings.swipePropagation;
                return !0
            }

            function l(e, n) {
                a(t, "top", t.scrollTop - n), a(t, "left", t.scrollLeft - e), s(t)
            }

            function c() {
                w = !0
            }

            function u() {
                w = !1
            }

            function h(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function d(t) {
                return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
            }

            function f(t) {
                if (d(t)) {
                    x = !0;
                    var e = h(t);
                    m.pageX = e.pageX, m.pageY = e.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), t.stopPropagation()
                }
            }

            function p(t) {
                if (!x && e.settings.swipePropagation && f(t), !w && x && d(t)) {
                    var n = h(t), i = {pageX: n.pageX, pageY: n.pageY}, r = i.pageX - m.pageX, s = i.pageY - m.pageY;
                    l(r, s), m = i;
                    var a = (new Date).getTime(), c = a - v;
                    c > 0 && (y.x = r / c, y.y = s / c, v = a), o(r, s) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function g() {
                !w && x && (x = !1, clearInterval(b), b = setInterval(function () {
                    return r.get(t) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                }, 10))
            }

            var m = {}, v = 0, y = {}, b = null, w = !1, x = !1;
            n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", p), e.event.bind(t, "touchend", g)), i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", p), e.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", p), e.event.bind(t, "MSPointerUp", g)))
        }

        var o = t("../../lib/helper"), r = t("../instances"), s = t("../update-geometry"), a = t("../update-scroll");
        e.exports = function (t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                var e = r.get(t);
                i(t, e, o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {"../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
    17: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/class"), r = t("./instances"), s = t("./update-geometry"), a = {
            "click-rail": t("./handler/click-rail"),
            "drag-scrollbar": t("./handler/drag-scrollbar"),
            keyboard: t("./handler/keyboard"),
            wheel: t("./handler/mouse-wheel"),
            touch: t("./handler/touch"),
            selection: t("./handler/selection")
        }, l = t("./handler/native-scroll");
        e.exports = function (t, e) {
            e = "object" == typeof e ? e : {}, o.add(t, "ps-container");
            var n = r.add(t);
            n.settings = i.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
                a[e](t)
            }), l(t), s(t)
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
    18: [function (t, e, n) {
        "use strict";
        function i(t) {
            function e() {
                l.add(t, "ps-focus")
            }

            function n() {
                l.remove(t, "ps-focus")
            }

            var i = this;
            i.settings = a.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(t, "direction"), i.isNegativeScroll = function () {
                var e = t.scrollLeft, n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), i.negativeScrollAdjustment = i.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, i.event = new h, i.ownerDocument = t.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), i.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", e), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = a.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : a.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = a.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = a.toInt(u.css(i.scrollbarXRail, "marginLeft")) + a.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), i.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", e), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = a.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : a.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? a.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = a.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = a.toInt(u.css(i.scrollbarYRail, "marginTop")) + a.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
        }

        function o(t) {
            return t.getAttribute("data-ps-id")
        }

        function r(t, e) {
            t.setAttribute("data-ps-id", e)
        }

        function s(t) {
            t.removeAttribute("data-ps-id")
        }

        var a = t("../lib/helper"), l = t("../lib/class"), c = t("./default-setting"), u = t("../lib/dom"), h = t("../lib/event-manager"), d = t("../lib/guid"), f = {};
        n.add = function (t) {
            var e = d();
            return r(t, e), f[e] = new i(t), f[e]
        }, n.remove = function (t) {
            delete f[o(t)], s(t)
        }, n.get = function (t) {
            return f[o(t)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {width: e.railXWidth};
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, n);
            var i = {top: t.scrollTop, height: e.railYHeight};
            e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, i), a.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), a.css(e.scrollbarY, {top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth})
        }

        var r = t("../lib/helper"), s = t("../lib/class"), a = t("../lib/dom"), l = t("./instances"), c = t("./update-scroll");
        e.exports = function (t) {
            var e = l.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = a.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
                a.remove(t)
            }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = a.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
                a.remove(t)
            }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = i(e, r.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = r.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = i(e, r.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = r.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? s.add(t, "ps-active-x") : (s.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? s.add(t, "ps-active-y") : (s.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
        }
    }, {"../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20}],
    20: [function (t, e, n) {
        "use strict";
        var i, o, r = t("./instances"), s = document.createEvent("Event"), a = document.createEvent("Event"), l = document.createEvent("Event"), c = document.createEvent("Event"), u = document.createEvent("Event"), h = document.createEvent("Event"), d = document.createEvent("Event"), f = document.createEvent("Event"), p = document.createEvent("Event"), g = document.createEvent("Event");
        s.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), l.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), h.initEvent("ps-scroll-x", !0, !0), d.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), p.initEvent("ps-y-reach-start", !0, !0), g.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) {
            if ("undefined" == typeof t)throw"You must provide an element to the update-scroll function";
            if ("undefined" == typeof e)throw"You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n)throw"You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(p)), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(d));
            var m = r.get(t);
            "top" === e && n >= m.contentHeight - m.containerHeight && (n = m.contentHeight - m.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(g)), "left" === e && n >= m.contentWidth - m.containerWidth && (n = m.contentWidth - m.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(f)), i || (i = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < i && t.dispatchEvent(s), "top" === e && n > i && t.dispatchEvent(a), "left" === e && n < o && t.dispatchEvent(l), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = i = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(h))
        }
    }, {"./instances": 18}],
    21: [function (t, e, n) {
        "use strict";
        var i = t("../lib/helper"), o = t("../lib/dom"), r = t("./instances"), s = t("./update-geometry"), a = t("./update-scroll");
        e.exports = function (t) {
            var e = r.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(o.css(e.scrollbarXRail, "marginLeft")) + i.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(o.css(e.scrollbarYRail, "marginTop")) + i.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
        }
    }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20}]
}, {}, [1]), !function (t) {
    function e(t, e) {
        if (!(t.originalEvent.touches.length > 1)) {
            t.preventDefault();
            var n = t.originalEvent.changedTouches[0], i = document.createEvent("MouseEvents");
            i.initMouseEvent(e, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(i)
        }
    }

    if (t.support.touch = "ontouchend" in document, t.support.touch) {
        var n, i = t.ui.mouse.prototype, o = i._mouseInit, r = i._mouseDestroy;
        i._touchStart = function (t) {
            var i = this;
            !n && i._mouseCapture(t.originalEvent.changedTouches[0]) && (n = !0, i._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
        }, i._touchMove = function (t) {
            n && (this._touchMoved = !0, e(t, "mousemove"))
        }, i._touchEnd = function (t) {
            n && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), n = !1)
        }, i._mouseInit = function () {
            var e = this;
            e.element.bind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), o.call(e)
        }, i._mouseDestroy = function () {
            var e = this;
            e.element.unbind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), r.call(e)
        }
    }
}(jQuery), $.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")}}), $(".scroller").perfectScrollbar(), $(window).on("resize.scroller", function () {
    $(".scroller").perfectScrollbar("update")
}), $(".pagination__selector").on("change", function () {
    window.location = $(this).val()
});
var formButtons = $("#formButtons");
if (formButtons.length > 0) {
    var w = $(window), d = $(document), fbT = formButtons.offset().top, dH = 0;
    locateFormButtons(), w.on("scroll.formbuttons resize.formbuttons", function () {
        locateFormButtons()
    })
}
$("#contentFilter").on("change", function () {
    window.location = $(this).find("option:selected").data("filterurl");
});
var headerBulkActions = $(".header__action--bulk"), bulkSelectedInput = headerBulkActions.find('input[name="_bulkSelected"]');
$(".content-list__checkbox").on("change", function () {
    $(".content-list__checkbox:checked").length > 0 ? headerBulkActions.removeClass("header__action--hidden") : headerBulkActions.addClass("header__action--hidden"), compileSelectedForBulkAction()
}), headerBulkActions.find(".button--select-none").click(function () {
    $(".content-list__checkbox:checked").prop("checked", !1), headerBulkActions.addClass("header__action--hidden"), compileSelectedForBulkAction()
}), headerBulkActions.find(".button--select-all").click(function () {
    $(".content-list__checkbox").prop("checked", !0), compileSelectedForBulkAction()
}), Modernizr.touch ? $(".document").click(function () {
    $(this).find(".document__options").toggleClass("document__options--focus")
}) : ($(".document").on("mouseenter", function () {
    $(this).find(".document__options").addClass("document__options--focus")
}), $(".document").on("mouseleave", function () {
    $(this).find(".document__options").removeClass("document__options--focus")
})), $(".sub-tab-flaps .tabs__link").on("click", function () {
    var t = $(this).data("locale");
    $(".sub-tab-flaps .tabs__link").removeClass("tabs__link--active"), $('.sub-tab-flaps .tabs__link[data-locale="' + t + '"]').addClass("tabs__link--active"), $(".sub-tab").removeClass("sub-tab--active"), $('.sub-tab[data-locale="' + t + '"]').addClass("sub-tab--active")
});
var inheritsFrom = function (t, e) {
    t.prototype = Object.create(e.prototype)
};
!function (t) {
    "use strict";
    function e(t) {
        this.el = t, this._init()
    }

    e.prototype = {
        _init: function () {
            var t = this;
            this.el.find(".flash-message").each(function () {
                t._hideMessage($(this))
            })
        }, _hideMessage: function (t) {
            setTimeout(function () {
                t.addClass("flash-message--hidden")
            }, 2500), setTimeout(function () {
                t.remove()
            }, 5e3)
        }, addMessage: function (t, e) {
            var n = $('<div class="flash-message flash-message--' + e + '">' + t + '<i class="flash-message__icon icon-status-' + ("danger" === e ? "withheld" : "published") + '"></i></div>').appendTo(this.el);
            this._hideMessage(n)
        }
    }, t.Flash = e
}(window), window.flash = new Flash($("#flashContainer")), function (t) {
    "use strict";
    function e() {
        this.dropdowns = $(".has-dropdown"), this.activeClass = "has-dropdown--active", this._initEvents()
    }

    e.prototype = {
        _initEvents: function () {
            var t = this;
            this.dropdowns.on("click.dropdowns", function (e) {
                t._openDropdown($(this)), e.preventDefault(), e.stopPropagation()
            }), this.dropdowns.on("mouseenter.dropdowns", function (e) {
                $(this).data("hover") === !0 && (t._openDropdown($(this)), e.preventDefault(), e.stopPropagation())
            }), this.dropdowns.on("mouseleave.dropdowns", function (e) {
                $(this).data("hover") === !0 && (t.closeDropdowns($(this)), e.preventDefault(), e.stopPropagation())
            }), this.dropdowns.find("a, button").on("click.dropdowns", function (t) {
                return t.stopPropagation(), !0
            })
        }, _openDropdown: function (t) {
            this.closeDropdowns(), t.addClass(this.activeClass), this._bindCloseEscape(), this._bindCloseClick()
        }, closeDropdowns: function () {
            this.dropdowns.removeClass(this.activeClass), this._unbindCloseEscape(), this._unbindCloseClick()
        }, _bindCloseEscape: function () {
            var t = this;
            $(document).bind("keydown.dropdowns", function (e) {
                var n = e.keyCode || e.which;
                27 === n && t.closeDropdowns()
            })
        }, _unbindCloseEscape: function () {
            $(document).unbind("keydown.dropdowns")
        }, _bindCloseClick: function () {
            var t = this;
            $(document).bind("click.dropdowns", function () {
                t.closeDropdowns()
            })
        }, _unbindCloseClick: function () {
            $(document).unbind("click.dropdowns")
        }, refreshEvents: function () {
            this.dropdowns.unbind("click.dropdowns, mouseenter.dropdowns, mouseleave.dropdowns"), this.dropdowns.find("a, button").unbind("click.dropdowns"), this.dropdowns = $(".has-dropdown"), this._initEvents()
        }
    }, t.Dropdown = e
}(window), window.dropdowns = new Dropdown, function (t) {
    "use strict";
    function e(t, e, n) {
        this._init(t, e, n)
    }

    e.prototype = {
        _init: function (t, e, n) {
            this.el = t, this.triggers = n, this.current = null, this.options = $.extend({
                onCreateEvent: function () {
                    return !1
                }, onOpenEvent: function () {
                    return !1
                }, onCloseEvent: function () {
                    return !1
                }, onConfirmEvent: function () {
                    return !1
                }, onOptionEvent: function () {
                    return !1
                }
            }, e), this.isOpen = !1, this.options.onCreateEvent(this), this._initEvents()
        }, _initEvents: function () {
            var t = this.el, e = this;
            this._bindTriggers(), t.find(".button--confirm").click(function (t) {
                e.options.onConfirmEvent(e), e.closeModal(), t.stopPropagation(), t.preventDefault()
            }), t.find(".button--option").click(function (t) {
                e.options.onOptionEvent(e), e.closeModal(), t.stopPropagation(), t.preventDefault()
            }), t.find(".button--close").click(function (t) {
                e.options.onCloseEvent(e), e.closeModal(), t.stopPropagation(), t.preventDefault()
            }), t.find(".modal__whiteout").click(function (t) {
                e.options.onCloseEvent(e), e.closeModal(), t.stopPropagation(), t.preventDefault()
            }), t.find(".modal__inner").click(function (t) {
                t.stopPropagation()
            })
        }, _bindTriggers: function () {
            var t = this;
            "undefined" != typeof this.triggers && null !== this.triggers && this.triggers.on("click.modals", function (e) {
                t.current = $(this), t.openModal(t), e.stopPropagation(), e.preventDefault()
            })
        }, openModal: function () {
            var t = $(this.el), e = this;
            this.isOpen || ($("body").addClass("scroll-disabled"), t.addClass("modal--open"), t.find(".modal__inner").addClass("modal__inner--open"), $(document).bind("keydown.modal", function (t) {
                var n = t.keyCode || t.which;
                27 === n && e.closeModal()
            }), this.options.onOpenEvent(this), this.isOpen = !0)
        }, closeModal: function () {
            var t = $(this.el);
            this.isOpen && (t.removeClass("modal--open"), t.find(".modal__inner").removeClass("modal__inner--open"), $("body").removeClass("scroll-disabled"), $(document).unbind("keydown.modal"), this.options.onCloseEvent(this), this.isOpen = !1)
        }, refreshTriggers: function (t) {
            this.triggers.unbind("click.modals"), this.triggers = t, this._bindTriggers()
        }
    }, t.Modal = e
}(window);
var hamburger = $("#hamburger"), navigationContainer = $("#navigationContainer"), contentContainer = $("#contentContainer"), contentWhiteout = $("#contentWhiteout"), body = $("body");
hamburger.on("click", function (t) {
    return toggleNavigation(), $(this).toggleClass("hamburger--open"), t.preventDefault(), t.stopPropagation(), !1
}), contentWhiteout.on("click", function () {
    closeNavigation()
}), function (t) {
    "use strict";
    function e() {
        this._init()
    }

    e.prototype = {
        _init: function () {
            this.flaps = $(".nodes-tabs__tab, .tabs__nodes-tab"), this.tabs = $(".nodes-list-container"), this.trees = $("ul.nodes-list"), this.localeurl = $("#navigationNodesTree").data("localeurl"), this.sorturl = $("#navigationNodesTree").data("sorturl"), this.blackouts = $("#navigationNodesBlackout, #childTreeWhiteout"), this.enabled = !0, this._initEvents()
        }, _initEvents: function () {
            var t = this;
            this.flaps.on("click", function () {
                t._changeTab($(this))
            }), this._initSortables(this.trees)
        }, _initSortables: function (t) {
            var e = this;
            t.each(function () {
                var t = $(this).sortable({
                    connectWith: "#" + $(this).attr("id") + " ul:not(.dropdown-sub)",
                    items: "> li, .node-children > li",
                    handle: ".node-icon",
                    placeholder: "placeholder",
                    toleranceElement: "> .nodes-list__label",
                    tolerance: "pointer",
                    opacity: .7,
                    delay: 50,
                    start: function (t, e) {
                        e.placeholder.height(e.item.outerHeight()), dropdowns.closeDropdowns()
                    },
                    stop: function (n, i) {
                        e._moveNode(i.item, t)
                    }
                })
            })
        }, _changeTab: function (t) {
            if (this.enabled && !t.hasClass("compact-tabs__tab--active") && !t.hasClass("tabs__child-link--active")) {
                var e = t.data("locale");
                this.flaps.removeClass("compact-tabs__tab--active tabs__child-link--active"), this.tabs.removeClass("nodes-list-container--active"), $(".nodes-tabs__tab--" + e).addClass("compact-tabs__tab--active"), $(".tabs__nodes-tab--" + e).addClass("tabs__child-link--active"), this.tabs.siblings(".nodes-list-container--" + e).addClass("nodes-list-container--active"), this._changeTreeLocales(e)
            }
        }, _changeTreeLocales: function (t) {
            var e = this;
            e._disable(), $.post(this.localeurl, {locale: t}, function (t) {
                e._enable()
            })
        }, _moveNode: function (e, n) {
            var i = this._determineMovement(e), o = this;
            if (i !== !1) {
                var r = n.closest(".node-trees-container");
                i.parent = r.data("parentid"), this._disable(), $.post(this.sorturl, i, function (e) {
                    "danger" === e.type ? (n.sortable("cancel"), t.flash.addMessage(e.message, e.type)) : o._refreshTrees(r, e.html), o._enable()
                })
            }
        }, _determineMovement: function (t) {
            var e = t.next(), n = t.prev();
            return 1 === e.length ? {
                action: "before",
                sibling: e.data("nodeid"),
                node: t.data("nodeid")
            } : 1 === n.length && {action: "after", sibling: n.data("nodeid"), node: t.data("nodeid")}
        }, _refreshTrees: function (e, n) {
            e.html(n), this.tabs = $(".nodes-list-container"), t.dropdowns.refreshEvents(), this._initSortables(e.find("ul.nodes-list")), t.deleteModal.refreshTriggers($(".delete-form > .option-delete, .header__action--bulk .button--bulk-delete"))
        }, _disable: function () {
            this.enabled = !1, this.blackouts.addClass("navigation-nodes-blackout--active")
        }, _enable: function () {
            this.enabled = !0, this.blackouts.removeClass("navigation-nodes-blackout--active")
        }
    }, t.NodeTree = e
}(window), new NodeTree;