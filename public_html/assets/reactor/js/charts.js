!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
    }
}(function () {
    var t;
    return function e(t, n, i) {
        function a(r, s) {
            if (!n[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)return l(r, !0);
                    if (o)return o(r, !0);
                    var d = new Error("Cannot find module '" + r + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var u = n[r] = {exports: {}};
                t[r][0].call(u.exports, function (e) {
                    var n = t[r][1][e];
                    return a(n ? n : e)
                }, u, u.exports, e, t, n, i)
            }
            return n[r].exports
        }

        for (var o = "function" == typeof require && require, r = 0; r < i.length; r++)a(i[r]);
        return a
    }({
        1: [function (t, e, n) {
            function i(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/, n = /^#([a-fA-F0-9]{6})$/,
                        i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        o = /(\w+)/, r = [0, 0, 0], s = 1, l = t.match(e);
                    if (l) {
                        l = l[1];
                        for (var d = 0; d < r.length; d++)r[d] = parseInt(l[d] + l[d], 16)
                    } else if (l = t.match(n)) {
                        l = l[1];
                        for (var d = 0; d < r.length; d++)r[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16)
                    } else if (l = t.match(i)) {
                        for (var d = 0; d < r.length; d++)r[d] = parseInt(l[d + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(a)) {
                        for (var d = 0; d < r.length; d++)r[d] = Math.round(2.55 * parseFloat(l[d + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(o)) {
                        if ("transparent" == l[1])return [0, 0, 0, 0];
                        if (r = x[l[1]], !r)return
                    }
                    for (var d = 0; d < r.length; d++)r[d] = b(r[d], 0, 255);
                    return s = s || 0 == s ? b(s, 0, 1) : 1, r[3] = s, r
                }
            }

            function a(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]), a = b(parseInt(n[1]), 0, 360), o = b(parseFloat(n[2]), 0, 100),
                            r = b(parseFloat(n[3]), 0, 100), s = b(isNaN(i) ? 1 : i, 0, 1);
                        return [a, o, r, s]
                    }
                }
            }

            function o(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]), a = b(parseInt(n[1]), 0, 360), o = b(parseFloat(n[2]), 0, 100),
                            r = b(parseFloat(n[3]), 0, 100), s = b(isNaN(i) ? 1 : i, 0, 1);
                        return [a, o, r, s]
                    }
                }
            }

            function r(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }

            function s(t) {
                var e = a(t);
                return e && e.slice(0, 3)
            }

            function l(t) {
                var e = i(t);
                return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
            }

            function d(t) {
                return "#" + y(t[0]) + y(t[1]) + y(t[2])
            }

            function u(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }

            function c(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function h(t, e) {
                if (1 > e || t[3] && t[3] < 1)return f(t, e);
                var n = Math.round(t[0] / 255 * 100), i = Math.round(t[1] / 255 * 100),
                    a = Math.round(t[2] / 255 * 100);
                return "rgb(" + n + "%, " + i + "%, " + a + "%)"
            }

            function f(t, e) {
                var n = Math.round(t[0] / 255 * 100), i = Math.round(t[1] / 255 * 100),
                    a = Math.round(t[2] / 255 * 100);
                return "rgba(" + n + "%, " + i + "%, " + a + "%, " + (e || t[3] || 1) + ")"
            }

            function g(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }

            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function m(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }

            function v(t) {
                return k[t.slice(0, 3)]
            }

            function b(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function y(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }

            var x = t(5);
            e.exports = {
                getRgba: i,
                getHsla: a,
                getRgb: r,
                getHsl: s,
                getHwb: o,
                getAlpha: l,
                hexString: d,
                rgbString: u,
                rgbaString: c,
                percentString: h,
                percentaString: f,
                hslString: g,
                hslaString: p,
                hwbString: m,
                keyword: v
            };
            var k = {};
            for (var S in x)k[x[S]] = S
        }, {5: 5}], 2: [function (t, e, n) {
            var i = t(4), a = t(1), o = function (t) {
                if (t instanceof o)return t;
                if (!(this instanceof o))return new o(t);
                this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                };
                var e;
                if ("string" == typeof t)if (e = a.getRgba(t)) this.setValues("rgb", e); else if (e = a.getHsla(t)) this.setValues("hsl", e); else {
                    if (!(e = a.getHwb(t)))throw new Error('Unable to parse color from string "' + t + '"');
                    this.setValues("hwb", e)
                } else if ("object" == typeof t)if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e); else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e); else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e); else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e); else {
                    if (void 0 === e.c && void 0 === e.cyan)throw new Error("Unable to parse color from object " + JSON.stringify(t));
                    this.setValues("cmyk", e)
                }
            };
            o.prototype = {
                rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                }, hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                }, alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                }, red: function (t) {
                    return this.setChannel("rgb", 0, t)
                }, green: function (t) {
                    return this.setChannel("rgb", 1, t)
                }, blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                }, hue: function (t) {
                    return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
                }, saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                }, lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                }, saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                }, whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                }, blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                }, value: function (t) {
                    return this.setChannel("hsv", 2, t)
                }, cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                }, magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                }, yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                }, black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                }, hexString: function () {
                    return a.hexString(this.values.rgb)
                }, rgbString: function () {
                    return a.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return a.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return a.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return a.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return a.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return a.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return a.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                }, luminosity: function () {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                }, contrast: function (t) {
                    var e = this.luminosity(), n = t.luminosity();
                    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                }, level: function (t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var t = this.values.rgb, e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return 128 > e
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var t = [], e = 0; 3 > e; e++)t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                }, lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                }, darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                }, saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                }, desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                }, whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                }, blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                }, greyscale: function () {
                    var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                }, clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                }, opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                }, rotate: function (t) {
                    var e = this.values.hsl, n = (e[0] + t) % 360;
                    return e[0] = 0 > n ? 360 + n : n, this.setValues("hsl", e), this
                }, mix: function (t, e) {
                    var n = this, i = t, a = void 0 === e ? .5 : e, o = 2 * a - 1, r = n.alpha() - i.alpha(),
                        s = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2, l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var t, e, n = new o, i = this.values, a = n.values;
                    for (var r in i)i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : void 0);
                    return n
                }
            }, o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, o.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, o.prototype.getValues = function (t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++)n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, o.prototype.setValues = function (t, e) {
                var n, a = this.values, o = this.spaces, r = this.maxes, s = 1;
                if ("alpha" === t) s = e; else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n < t.length; n++)a[t][n] = e[t.charAt(n)];
                    s = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var l = o[t];
                    for (n = 0; n < t.length; n++)a[t][n] = e[l[n]];
                    s = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t)return !1;
                var d;
                for (n = 0; n < t.length; n++)d = Math.max(0, Math.min(r[t][n], a[t][n])), a[t][n] = Math.round(d);
                for (var u in o)u !== t && (a[u] = i[t][u](a[t]));
                return !0
            }, o.prototype.setSpace = function (t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, o.prototype.setChannel = function (t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
            }, "undefined" != typeof window && (window.Color = o), e.exports = o
        }, {1: 1, 4: 4}], 3: [function (t, e, n) {
            function i(t) {
                var e, n, i, a = t[0] / 255, o = t[1] / 255, r = t[2] / 255, s = Math.min(a, o, r),
                    l = Math.max(a, o, r), d = l - s;
                return l == s ? e = 0 : a == l ? e = (o - r) / d : o == l ? e = 2 + (r - a) / d : r == l && (e = 4 + (a - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (s + l) / 2, n = l == s ? 0 : .5 >= i ? d / (l + s) : d / (2 - l - s), [e, 100 * n, 100 * i]
            }

            function a(t) {
                var e, n, i, a = t[0], o = t[1], r = t[2], s = Math.min(a, o, r), l = Math.max(a, o, r), d = l - s;
                return n = 0 == l ? 0 : d / l * 1e3 / 10, l == s ? e = 0 : a == l ? e = (o - r) / d : o == l ? e = 2 + (r - a) / d : r == l && (e = 4 + (a - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = l / 255 * 1e3 / 10, [e, n, i]
            }

            function o(t) {
                var e = t[0], n = t[1], a = t[2], o = i(t)[0], r = 1 / 255 * Math.min(e, Math.min(n, a)),
                    a = 1 - 1 / 255 * Math.max(e, Math.max(n, a));
                return [o, 100 * r, 100 * a]
            }

            function s(t) {
                var e, n, i, a, o = t[0] / 255, r = t[1] / 255, s = t[2] / 255;
                return a = Math.min(1 - o, 1 - r, 1 - s), e = (1 - o - a) / (1 - a) || 0, n = (1 - r - a) / (1 - a) || 0, i = (1 - s - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a]
            }

            function l(t) {
                return K[JSON.stringify(t)]
            }

            function d(t) {
                var e = t[0] / 255, n = t[1] / 255, i = t[2] / 255;
                e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
                var a = .4124 * e + .3576 * n + .1805 * i, o = .2126 * e + .7152 * n + .0722 * i,
                    r = .0193 * e + .1192 * n + .9505 * i;
                return [100 * a, 100 * o, 100 * r]
            }

            function u(t) {
                var e, n, i, a = d(t), o = a[0], r = a[1], s = a[2];
                return o /= 95.047, r /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * r - 16, n = 500 * (o - r), i = 200 * (r - s), [e, n, i]
            }

            function c(t) {
                return B(u(t))
            }

            function h(t) {
                var e, n, i, a, o, r = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
                if (0 == s)return o = 255 * l, [o, o, o];
                n = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - n, a = [0, 0, 0];
                for (var d = 0; 3 > d; d++)i = r + 1 / 3 * -(d - 1), 0 > i && i++, i > 1 && i--, o = 1 > 6 * i ? e + 6 * (n - e) * i : 1 > 2 * i ? n : 2 > 3 * i ? e + (n - e) * (2 / 3 - i) * 6 : e, a[d] = 255 * o;
                return a
            }

            function f(t) {
                var e, n, i = t[0], a = t[1] / 100, o = t[2] / 100;
                return 0 === o ? [0, 0, 0] : (o *= 2, a *= 1 >= o ? o : 2 - o, n = (o + a) / 2, e = 2 * a / (o + a), [i, 100 * e, 100 * n])
            }

            function p(t) {
                return o(h(t))
            }

            function m(t) {
                return s(h(t))
            }

            function v(t) {
                return l(h(t))
            }

            function y(t) {
                var e = t[0] / 60, n = t[1] / 100, i = t[2] / 100, a = Math.floor(e) % 6, o = e - Math.floor(e),
                    r = 255 * i * (1 - n), s = 255 * i * (1 - n * o), l = 255 * i * (1 - n * (1 - o)), i = 255 * i;
                switch (a) {
                    case 0:
                        return [i, l, r];
                    case 1:
                        return [s, i, r];
                    case 2:
                        return [r, i, l];
                    case 3:
                        return [r, s, i];
                    case 4:
                        return [l, r, i];
                    case 5:
                        return [i, r, s]
                }
            }

            function x(t) {
                var e, n, i = t[0], a = t[1] / 100, o = t[2] / 100;
                return n = (2 - a) * o, e = a * o, e /= 1 >= n ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n]
            }

            function k(t) {
                return o(y(t))
            }

            function S(t) {
                return s(y(t))
            }

            function _(t) {
                return l(y(t))
            }

            function w(t) {
                var e, n, i, a, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100, d = s + l;
                switch (d > 1 && (s /= d, l /= d), e = Math.floor(6 * o), n = 1 - l, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = s + i * (n - s), e) {
                    default:
                    case 6:
                    case 0:
                        r = n, g = a, b = s;
                        break;
                    case 1:
                        r = a, g = n, b = s;
                        break;
                    case 2:
                        r = s, g = n, b = a;
                        break;
                    case 3:
                        r = s, g = a, b = n;
                        break;
                    case 4:
                        r = a, g = s, b = n;
                        break;
                    case 5:
                        r = n, g = s, b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function M(t) {
                return i(w(t))
            }

            function D(t) {
                return a(w(t))
            }

            function C(t) {
                return s(w(t))
            }

            function T(t) {
                return l(w(t))
            }

            function P(t) {
                var e, n, i, a = t[0] / 100, o = t[1] / 100, r = t[2] / 100, s = t[3] / 100;
                return e = 1 - Math.min(1, a * (1 - s) + s), n = 1 - Math.min(1, o * (1 - s) + s), i = 1 - Math.min(1, r * (1 - s) + s), [255 * e, 255 * n, 255 * i]
            }

            function F(t) {
                return i(P(t))
            }

            function A(t) {
                return a(P(t))
            }

            function I(t) {
                return o(P(t))
            }

            function O(t) {
                return l(P(t))
            }

            function R(t) {
                var e, n, i, a = t[0] / 100, o = t[1] / 100, r = t[2] / 100;
                return e = 3.2406 * a + -1.5372 * o + r * -.4986, n = a * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * a + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i]
            }

            function W(t) {
                var e, n, i, a = t[0], o = t[1], r = t[2];
                return a /= 95.047, o /= 100, r /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, n = 500 * (a - o), i = 200 * (o - r), [e, n, i]
            }

            function L(t) {
                return B(W(t))
            }

            function V(t) {
                var e, n, i, a, o = t[0], r = t[1], s = t[2];
                return 8 >= o ? (n = 100 * o / 903.3, a = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3), [e, n, i]
            }

            function B(t) {
                var e, n, i, a = t[0], o = t[1], r = t[2];
                return e = Math.atan2(r, o), n = 360 * e / 2 / Math.PI, 0 > n && (n += 360), i = Math.sqrt(o * o + r * r), [a, i, n]
            }

            function Y(t) {
                return R(V(t))
            }

            function z(t) {
                var e, n, i, a = t[0], o = t[1], r = t[2];
                return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), n = o * Math.sin(i), [a, e, n]
            }

            function H(t) {
                return V(z(t))
            }

            function N(t) {
                return Y(z(t))
            }

            function E(t) {
                return X[t]
            }

            function U(t) {
                return i(E(t))
            }

            function j(t) {
                return a(E(t))
            }

            function G(t) {
                return o(E(t))
            }

            function q(t) {
                return s(E(t))
            }

            function Z(t) {
                return u(E(t))
            }

            function J(t) {
                return d(E(t))
            }

            e.exports = {
                rgb2hsl: i,
                rgb2hsv: a,
                rgb2hwb: o,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: d,
                rgb2lab: u,
                rgb2lch: c,
                hsl2rgb: h,
                hsl2hsv: f,
                hsl2hwb: p,
                hsl2cmyk: m,
                hsl2keyword: v,
                hsv2rgb: y,
                hsv2hsl: x,
                hsv2hwb: k,
                hsv2cmyk: S,
                hsv2keyword: _,
                hwb2rgb: w,
                hwb2hsl: M,
                hwb2hsv: D,
                hwb2cmyk: C,
                hwb2keyword: T,
                cmyk2rgb: P,
                cmyk2hsl: F,
                cmyk2hsv: A,
                cmyk2hwb: I,
                cmyk2keyword: O,
                keyword2rgb: E,
                keyword2hsl: U,
                keyword2hsv: j,
                keyword2hwb: G,
                keyword2cmyk: q,
                keyword2lab: Z,
                keyword2xyz: J,
                xyz2rgb: R,
                xyz2lab: W,
                xyz2lch: L,
                lab2xyz: V,
                lab2rgb: Y,
                lab2lch: B,
                lch2lab: z,
                lch2xyz: H,
                lch2rgb: N
            };
            var X = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, K = {};
            for (var Q in X)K[JSON.stringify(X[Q])] = Q
        }, {}], 4: [function (t, e, n) {
            var i = t(3), a = function () {
                return new d
            };
            for (var o in i) {
                a[o + "Raw"] = function (t) {
                    return function (e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
                    }
                }(o);
                var r = /(\w+)2(\w+)/.exec(o), s = r[1], l = r[2];
                a[s] = a[s] || {}, a[s][l] = a[o] = function (t) {
                    return function (e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var n = i[t](e);
                        if ("string" == typeof n || void 0 === n)return n;
                        for (var a = 0; a < n.length; a++)n[a] = Math.round(n[a]);
                        return n
                    }
                }(o)
            }
            var d = function () {
                this.convs = {}
            };
            d.prototype.routeSpace = function (t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
            }, d.prototype.setValues = function (t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, d.prototype.getValues = function (t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space, i = this.convs[n];
                    e = a[n][t](i), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                d.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = a
        }, {3: 3}], 5: [function (t, e, n) {
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 6: [function (e, n, i) {
            !function (e, a) {
                "object" == typeof i && "undefined" != typeof n ? n.exports = a() : "function" == typeof t && t.amd ? t(a) : e.moment = a()
            }(this, function () {
                "use strict";
                function t() {
                    return pi.apply(null, arguments)
                }

                function i(t) {
                    pi = t
                }

                function a(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function o(t) {
                    return "[object Object]" === Object.prototype.toString.call(t)
                }

                function r(t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                }

                function s(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function l(t, e) {
                    var n, i = [];
                    for (n = 0; n < t.length; ++n)i.push(e(t[n], n));
                    return i
                }

                function d(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function u(t, e) {
                    for (var n in e)d(e, n) && (t[n] = e[n]);
                    return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function c(t, e, n, i) {
                    return be(t, e, n, i, !0).utc()
                }

                function h() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null
                    }
                }

                function f(t) {
                    return null == t._pf && (t._pf = h()), t._pf
                }

                function g(t) {
                    if (null == t._isValid) {
                        var e = f(t), n = mi.call(e.parsedDateParts, function (t) {
                            return null != t
                        });
                        t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
                    }
                    return t._isValid
                }

                function p(t) {
                    var e = c(NaN);
                    return null != t ? u(f(e), t) : f(e).userInvalidated = !0, e
                }

                function m(t) {
                    return void 0 === t
                }

                function v(t, e) {
                    var n, i, a;
                    if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), m(e._i) || (t._i = e._i), m(e._f) || (t._f = e._f), m(e._l) || (t._l = e._l), m(e._strict) || (t._strict = e._strict), m(e._tzm) || (t._tzm = e._tzm), m(e._isUTC) || (t._isUTC = e._isUTC), m(e._offset) || (t._offset = e._offset), m(e._pf) || (t._pf = f(e)), m(e._locale) || (t._locale = e._locale), vi.length > 0)for (n in vi)i = vi[n], a = e[i], m(a) || (t[i] = a);
                    return t
                }

                function b(e) {
                    v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), bi === !1 && (bi = !0, t.updateOffset(this), bi = !1)
                }

                function y(t) {
                    return t instanceof b || null != t && null != t._isAMomentObject
                }

                function x(t) {
                    return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
                }

                function k(t) {
                    var e = +t, n = 0;
                    return 0 !== e && isFinite(e) && (n = x(e)), n
                }

                function S(t, e, n) {
                    var i, a = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), r = 0;
                    for (i = 0; a > i; i++)(n && t[i] !== e[i] || !n && k(t[i]) !== k(e[i])) && r++;
                    return r + o
                }

                function _(e) {
                    t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && void 0
                }

                function w(e, n) {
                    var i = !0;
                    return u(function () {
                        return null != t.deprecationHandler && t.deprecationHandler(null, e), i && (_(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
                    }, n)
                }

                function M(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), yi[e] || (_(n), yi[e] = !0)
                }

                function D(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function C(t) {
                    var e, n;
                    for (n in t)e = t[n], D(e) ? this[n] = e : this["_" + n] = e;
                    this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                }

                function T(t, e) {
                    var n, i = u({}, t);
                    for (n in e)d(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, u(i[n], t[n]), u(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                    for (n in t)d(t, n) && !d(e, n) && o(t[n]) && (i[n] = u({}, i[n]));
                    return i
                }

                function P(t) {
                    null != t && this.set(t)
                }

                function F(t, e, n) {
                    var i = this._calendar[t] || this._calendar.sameElse;
                    return D(i) ? i.call(e, n) : i
                }

                function A(t) {
                    var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }

                function I() {
                    return this._invalidDate
                }

                function O(t) {
                    return this._ordinal.replace("%d", t)
                }

                function R(t, e, n, i) {
                    var a = this._relativeTime[n];
                    return D(a) ? a(t, e, n, i) : a.replace(/%d/i, t)
                }

                function W(t, e) {
                    var n = this._relativeTime[t > 0 ? "future" : "past"];
                    return D(n) ? n(e) : n.replace(/%s/i, e)
                }

                function L(t, e) {
                    var n = t.toLowerCase();
                    Ti[n] = Ti[n + "s"] = Ti[e] = t
                }

                function V(t) {
                    return "string" == typeof t ? Ti[t] || Ti[t.toLowerCase()] : void 0
                }

                function B(t) {
                    var e, n, i = {};
                    for (n in t)d(t, n) && (e = V(n), e && (i[e] = t[n]));
                    return i
                }

                function Y(t, e) {
                    Pi[t] = e
                }

                function z(t) {
                    var e = [];
                    for (var n in t)e.push({unit: n, priority: Pi[n]});
                    return e.sort(function (t, e) {
                        return t.priority - e.priority
                    }), e
                }

                function H(e, n) {
                    return function (i) {
                        return null != i ? (E(this, e, i), t.updateOffset(this, n), this) : N(this, e)
                    }
                }

                function N(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function E(t, e, n) {
                    t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
                }

                function U(t) {
                    return t = V(t), D(this[t]) ? this[t]() : this
                }

                function j(t, e) {
                    if ("object" == typeof t) {
                        t = B(t);
                        for (var n = z(t), i = 0; i < n.length; i++)this[n[i].unit](t[n[i].unit])
                    } else if (t = V(t), D(this[t]))return this[t](e);
                    return this
                }

                function G(t, e, n) {
                    var i = "" + Math.abs(t), a = e - i.length, o = t >= 0;
                    return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
                }

                function q(t, e, n, i) {
                    var a = i;
                    "string" == typeof i && (a = function () {
                        return this[i]()
                    }), t && (Oi[t] = a), e && (Oi[e[0]] = function () {
                        return G(a.apply(this, arguments), e[1], e[2])
                    }), n && (Oi[n] = function () {
                        return this.localeData().ordinal(a.apply(this, arguments), t)
                    })
                }

                function Z(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
                }

                function J(t) {
                    var e, n, i = t.match(Fi);
                    for (e = 0, n = i.length; n > e; e++)Oi[i[e]] ? i[e] = Oi[i[e]] : i[e] = Z(i[e]);
                    return function (e) {
                        var a, o = "";
                        for (a = 0; n > a; a++)o += i[a] instanceof Function ? i[a].call(e, t) : i[a];
                        return o
                    }
                }

                function X(t, e) {
                    return t.isValid() ? (e = K(e, t.localeData()), Ii[e] = Ii[e] || J(e), Ii[e](t)) : t.localeData().invalidDate()
                }

                function K(t, e) {
                    function n(t) {
                        return e.longDateFormat(t) || t
                    }

                    var i = 5;
                    for (Ai.lastIndex = 0; i >= 0 && Ai.test(t);)t = t.replace(Ai, n), Ai.lastIndex = 0, i -= 1;
                    return t
                }

                function Q(t, e, n) {
                    Ki[t] = D(e) ? e : function (t, i) {
                        return t && n ? n : e
                    }
                }

                function $(t, e) {
                    return d(Ki, t) ? Ki[t](e._strict, e._locale) : new RegExp(tt(t))
                }

                function tt(t) {
                    return et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, a) {
                        return e || n || i || a
                    }))
                }

                function et(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function nt(t, e) {
                    var n, i = e;
                    for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
                        n[e] = k(t)
                    }), n = 0; n < t.length; n++)Qi[t[n]] = i
                }

                function it(t, e) {
                    nt(t, function (t, n, i, a) {
                        i._w = i._w || {}, e(t, i._w, i, a)
                    })
                }

                function at(t, e, n) {
                    null != e && d(Qi, t) && Qi[t](e, n._a, n, t)
                }

                function ot(t, e) {
                    return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
                }

                function rt(t, e) {
                    return a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || la).test(e) ? "format" : "standalone"][t.month()]
                }

                function st(t, e) {
                    return a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[la.test(e) ? "format" : "standalone"][t.month()]
                }

                function lt(t, e, n) {
                    var i, a, o, r = t.toLocaleLowerCase();
                    if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i)o = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? (a = ki.call(this._shortMonthsParse, r), -1 !== a ? a : null) : (a = ki.call(this._longMonthsParse, r), -1 !== a ? a : null) : "MMM" === e ? (a = ki.call(this._shortMonthsParse, r), -1 !== a ? a : (a = ki.call(this._longMonthsParse, r), -1 !== a ? a : null)) : (a = ki.call(this._longMonthsParse, r), -1 !== a ? a : (a = ki.call(this._shortMonthsParse, r), -1 !== a ? a : null))
                }

                function dt(t, e, n) {
                    var i, a, o;
                    if (this._monthsParseExact)return lt.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                        if (a = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))return i;
                        if (n && "MMM" === e && this._shortMonthsParse[i].test(t))return i;
                        if (!n && this._monthsParse[i].test(t))return i
                    }
                }

                function ut(t, e) {
                    var n;
                    if (!t.isValid())return t;
                    if ("string" == typeof e)if (/^\d+$/.test(e)) e = k(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
                    return n = Math.min(t.date(), ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
                }

                function ct(e) {
                    return null != e ? (ut(this, e), t.updateOffset(this, !0), this) : N(this, "Month")
                }

                function ht() {
                    return ot(this.year(), this.month())
                }

                function ft(t) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || pt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = ca), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
                }

                function gt(t) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || pt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = ha), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }

                function pt() {
                    function t(t, e) {
                        return e.length - t.length
                    }

                    var e, n, i = [], a = [], o = [];
                    for (e = 0; 12 > e; e++)n = c([2e3, e]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                    for (i.sort(t), a.sort(t), o.sort(t), e = 0; 12 > e; e++)i[e] = et(i[e]), a[e] = et(a[e]);
                    for (e = 0; 24 > e; e++)o[e] = et(o[e]);
                    this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function mt(t) {
                    return vt(t) ? 366 : 365
                }

                function vt(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                }

                function bt() {
                    return vt(this.year())
                }

                function yt(t, e, n, i, a, o, r) {
                    var s = new Date(t, e, n, i, a, o, r);
                    return 100 > t && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
                }

                function xt(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function kt(t, e, n) {
                    var i = 7 + e - n, a = (7 + xt(t, 0, i).getUTCDay() - e) % 7;
                    return -a + i - 1
                }

                function St(t, e, n, i, a) {
                    var o, r, s = (7 + n - i) % 7, l = kt(t, i, a), d = 1 + 7 * (e - 1) + s + l;
                    return 0 >= d ? (o = t - 1, r = mt(o) + d) : d > mt(t) ? (o = t + 1, r = d - mt(t)) : (o = t, r = d), {
                        year: o,
                        dayOfYear: r
                    }
                }

                function _t(t, e, n) {
                    var i, a, o = kt(t.year(), e, n), r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                    return 1 > r ? (a = t.year() - 1, i = r + wt(a, e, n)) : r > wt(t.year(), e, n) ? (i = r - wt(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = r), {
                        week: i,
                        year: a
                    }
                }

                function wt(t, e, n) {
                    var i = kt(t, e, n), a = kt(t + 1, e, n);
                    return (mt(t) - i + a) / 7
                }

                function Mt(t) {
                    return _t(t, this._week.dow, this._week.doy).week
                }

                function Dt() {
                    return this._week.dow
                }

                function Ct() {
                    return this._week.doy
                }

                function Tt(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Pt(t) {
                    var e = _t(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Ft(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
                }

                function At(t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }

                function It(t, e) {
                    return a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
                }

                function Ot(t) {
                    return this._weekdaysShort[t.day()]
                }

                function Rt(t) {
                    return this._weekdaysMin[t.day()]
                }

                function Wt(t, e, n) {
                    var i, a, o, r = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i)o = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? (a = ki.call(this._weekdaysParse, r), -1 !== a ? a : null) : "ddd" === e ? (a = ki.call(this._shortWeekdaysParse, r), -1 !== a ? a : null) : (a = ki.call(this._minWeekdaysParse, r), -1 !== a ? a : null) : "dddd" === e ? (a = ki.call(this._weekdaysParse, r), -1 !== a ? a : (a = ki.call(this._shortWeekdaysParse, r), -1 !== a ? a : (a = ki.call(this._minWeekdaysParse, r), -1 !== a ? a : null))) : "ddd" === e ? (a = ki.call(this._shortWeekdaysParse, r), -1 !== a ? a : (a = ki.call(this._weekdaysParse, r), -1 !== a ? a : (a = ki.call(this._minWeekdaysParse, r), -1 !== a ? a : null))) : (a = ki.call(this._minWeekdaysParse, r), -1 !== a ? a : (a = ki.call(this._weekdaysParse, r), -1 !== a ? a : (a = ki.call(this._shortWeekdaysParse, r), -1 !== a ? a : null)))
                }

                function Lt(t, e, n) {
                    var i, a, o;
                    if (this._weekdaysParseExact)return Wt.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                        if (a = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t))return i;
                        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))return i;
                        if (n && "dd" === e && this._minWeekdaysParse[i].test(t))return i;
                        if (!n && this._weekdaysParse[i].test(t))return i
                    }
                }

                function Vt(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = Ft(t, this.localeData()), this.add(t - e, "d")) : e
                }

                function Bt(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Yt(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    if (null != t) {
                        var e = At(t, this.localeData());
                        return this.day(this.day() % 7 ? e : e - 7)
                    }
                    return this.day() || 7
                }

                function zt(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = ba), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Ht(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ya), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Nt(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xa), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Et() {
                    function t(t, e) {
                        return e.length - t.length
                    }

                    var e, n, i, a, o, r = [], s = [], l = [], d = [];
                    for (e = 0; 7 > e; e++)n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), r.push(i), s.push(a), l.push(o), d.push(i), d.push(a), d.push(o);
                    for (r.sort(t), s.sort(t), l.sort(t), d.sort(t), e = 0; 7 > e; e++)s[e] = et(s[e]), l[e] = et(l[e]), d[e] = et(d[e]);
                    this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
                }

                function Ut() {
                    return this.hours() % 12 || 12
                }

                function jt() {
                    return this.hours() || 24
                }

                function Gt(t, e) {
                    q(t, 0, 0, function () {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function qt(t, e) {
                    return e._meridiemParse
                }

                function Zt(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }

                function Jt(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Xt(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function Kt(t) {
                    for (var e, n, i, a, o = 0; o < t.length;) {
                        for (a = Xt(t[o]).split("-"), e = a.length, n = Xt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                            if (i = Qt(a.slice(0, e).join("-")))return i;
                            if (n && n.length >= e && S(a, n, !0) >= e - 1)break;
                            e--
                        }
                        o++
                    }
                    return null
                }

                function Qt(t) {
                    var i = null;
                    if (!Ma[t] && "undefined" != typeof n && n && n.exports)try {
                        i = ka._abbr, e("./locale/" + t), $t(i)
                    } catch (a) {
                    }
                    return Ma[t]
                }

                function $t(t, e) {
                    var n;
                    return t && (n = m(e) ? ne(t) : te(t, e), n && (ka = n)), ka._abbr
                }

                function te(t, e) {
                    if (null !== e) {
                        var n = wa;
                        return e.abbr = t, null != Ma[t] ? (M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ma[t]._config) : null != e.parentLocale && (null != Ma[e.parentLocale] ? n = Ma[e.parentLocale]._config : M("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Ma[t] = new P(T(n, e)), $t(t), Ma[t]
                    }
                    return delete Ma[t], null
                }

                function ee(t, e) {
                    if (null != e) {
                        var n, i = wa;
                        null != Ma[t] && (i = Ma[t]._config), e = T(i, e), n = new P(e), n.parentLocale = Ma[t], Ma[t] = n, $t(t)
                    } else null != Ma[t] && (null != Ma[t].parentLocale ? Ma[t] = Ma[t].parentLocale : null != Ma[t] && delete Ma[t]);
                    return Ma[t]
                }

                function ne(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return ka;
                    if (!a(t)) {
                        if (e = Qt(t))return e;
                        t = [t]
                    }
                    return Kt(t)
                }

                function ie() {
                    return xi(Ma)
                }

                function ae(t) {
                    var e, n = t._a;
                    return n && -2 === f(t).overflow && (e = n[ta] < 0 || n[ta] > 11 ? ta : n[ea] < 1 || n[ea] > ot(n[$i], n[ta]) ? ea : n[na] < 0 || n[na] > 24 || 24 === n[na] && (0 !== n[ia] || 0 !== n[aa] || 0 !== n[oa]) ? na : n[ia] < 0 || n[ia] > 59 ? ia : n[aa] < 0 || n[aa] > 59 ? aa : n[oa] < 0 || n[oa] > 999 ? oa : -1, f(t)._overflowDayOfYear && ($i > e || e > ea) && (e = ea), f(t)._overflowWeeks && -1 === e && (e = ra), f(t)._overflowWeekday && -1 === e && (e = sa), f(t).overflow = e), t
                }

                function oe(t) {
                    var e, n, i, a, o, r, s = t._i, l = Da.exec(s) || Ca.exec(s);
                    if (l) {
                        for (f(t).iso = !0, e = 0, n = Pa.length; n > e; e++)if (Pa[e][1].exec(l[1])) {
                            a = Pa[e][0], i = Pa[e][2] !== !1;
                            break
                        }
                        if (null == a)return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, n = Fa.length; n > e; e++)if (Fa[e][1].exec(l[3])) {
                                o = (l[2] || " ") + Fa[e][0];
                                break
                            }
                            if (null == o)return void(t._isValid = !1)
                        }
                        if (!i && null != o)return void(t._isValid = !1);
                        if (l[4]) {
                            if (!Ta.exec(l[4]))return void(t._isValid = !1);
                            r = "Z"
                        }
                        t._f = a + (o || "") + (r || ""), ce(t)
                    } else t._isValid = !1
                }

                function re(e) {
                    var n = Aa.exec(e._i);
                    return null !== n ? void(e._d = new Date((+n[1]))) : (oe(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
                }

                function se(t, e, n) {
                    return null != t ? t : null != e ? e : n
                }

                function le(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function de(t) {
                    var e, n, i, a, o = [];
                    if (!t._d) {
                        for (i = le(t), t._w && null == t._a[ea] && null == t._a[ta] && ue(t), t._dayOfYear && (a = se(t._a[$i], i[$i]), t._dayOfYear > mt(a) && (f(t)._overflowDayOfYear = !0), n = xt(a, 0, t._dayOfYear), t._a[ta] = n.getUTCMonth(), t._a[ea] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e)t._a[e] = o[e] = i[e];
                        for (; 7 > e; e++)t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[na] && 0 === t._a[ia] && 0 === t._a[aa] && 0 === t._a[oa] && (t._nextDay = !0, t._a[na] = 0), t._d = (t._useUTC ? xt : yt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[na] = 24)
                    }
                }

                function ue(t) {
                    var e, n, i, a, o, r, s, l;
                    e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, r = 4, n = se(e.GG, t._a[$i], _t(ye(), 1, 4).year), i = se(e.W, 1), a = se(e.E, 1), (1 > a || a > 7) && (l = !0)) : (o = t._locale._week.dow, r = t._locale._week.doy, n = se(e.gg, t._a[$i], _t(ye(), o, r).year), i = se(e.w, 1), null != e.d ? (a = e.d, (0 > a || a > 6) && (l = !0)) : null != e.e ? (a = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : a = o), 1 > i || i > wt(n, o, r) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (s = St(n, i, a, o, r), t._a[$i] = s.year, t._dayOfYear = s.dayOfYear)
                }

                function ce(e) {
                    if (e._f === t.ISO_8601)return void oe(e);
                    e._a = [], f(e).empty = !0;
                    var n, i, a, o, r, s = "" + e._i, l = s.length, d = 0;
                    for (a = K(e._f, e._locale).match(Fi) || [], n = 0; n < a.length; n++)o = a[n], i = (s.match($(o, e)) || [])[0], i && (r = s.substr(0, s.indexOf(i)), r.length > 0 && f(e).unusedInput.push(r), s = s.slice(s.indexOf(i) + i.length), d += i.length), Oi[o] ? (i ? f(e).empty = !1 : f(e).unusedTokens.push(o), at(o, i, e)) : e._strict && !i && f(e).unusedTokens.push(o);
                    f(e).charsLeftOver = l - d, s.length > 0 && f(e).unusedInput.push(s), e._a[na] <= 12 && f(e).bigHour === !0 && e._a[na] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[na] = he(e._locale, e._a[na], e._meridiem), de(e), ae(e)
                }

                function he(t, e, n) {
                    var i;
                    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
                }

                function fe(t) {
                    var e, n, i, a, o;
                    if (0 === t._f.length)return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (a = 0; a < t._f.length; a++)o = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], ce(e), g(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, f(e).score = o, (null == i || i > o) && (i = o, n = e));
                    u(t, n || e)
                }

                function ge(t) {
                    if (!t._d) {
                        var e = B(t._i);
                        t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                            return t && parseInt(t, 10)
                        }), de(t)
                    }
                }

                function pe(t) {
                    var e = new b(ae(me(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }

                function me(t) {
                    var e = t._i, n = t._f;
                    return t._locale = t._locale || ne(t._l), null === e || void 0 === n && "" === e ? p({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new b(ae(e)) : (a(n) ? fe(t) : s(e) ? t._d = e : n ? ce(t) : ve(t), g(t) || (t._d = null), t))
                }

                function ve(e) {
                    var n = e._i;
                    void 0 === n ? e._d = new Date(t.now()) : s(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? re(e) : a(n) ? (e._a = l(n.slice(0), function (t) {
                        return parseInt(t, 10)
                    }), de(e)) : "object" == typeof n ? ge(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function be(t, e, n, i, s) {
                    var l = {};
                    return "boolean" == typeof n && (i = n, n = void 0), (o(t) && r(t) || a(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = t, l._f = e, l._strict = i, pe(l)
                }

                function ye(t, e, n, i) {
                    return be(t, e, n, i, !1)
                }

                function xe(t, e) {
                    var n, i;
                    if (1 === e.length && a(e[0]) && (e = e[0]), !e.length)return ye();
                    for (n = e[0], i = 1; i < e.length; ++i)(!e[i].isValid() || e[i][t](n)) && (n = e[i]);
                    return n
                }

                function ke() {
                    var t = [].slice.call(arguments, 0);
                    return xe("isBefore", t)
                }

                function Se() {
                    var t = [].slice.call(arguments, 0);
                    return xe("isAfter", t)
                }

                function _e(t) {
                    var e = B(t), n = e.year || 0, i = e.quarter || 0, a = e.month || 0, o = e.week || 0,
                        r = e.day || 0, s = e.hour || 0, l = e.minute || 0, d = e.second || 0, u = e.millisecond || 0;
                    this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +r + 7 * o, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
                }

                function we(t) {
                    return t instanceof _e
                }

                function Me(t, e) {
                    q(t, 0, 0, function () {
                        var t = this.utcOffset(), n = "+";
                        return 0 > t && (t = -t, n = "-"), n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
                    })
                }

                function De(t, e) {
                    var n = (e || "").match(t) || [], i = n[n.length - 1] || [], a = (i + "").match(Wa) || ["-", 0, 0],
                        o = +(60 * a[1]) + k(a[2]);
                    return "+" === a[0] ? o : -o
                }

                function Ce(e, n) {
                    var i, a;
                    return n._isUTC ? (i = n.clone(), a = (y(e) || s(e) ? e.valueOf() : ye(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), t.updateOffset(i, !1), i) : ye(e).local()
                }

                function Te(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function Pe(e, n) {
                    var i, a = this._offset || 0;
                    return this.isValid() ? null != e ? ("string" == typeof e ? e = De(Zi, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Te(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!n || this._changeInProgress ? Ge(this, ze(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Te(this) : null != e ? this : NaN
                }

                function Fe(t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }

                function Ae(t) {
                    return this.utcOffset(0, t)
                }

                function Ie(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Te(this), "m")), this
                }

                function Oe() {
                    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(De(qi, this._i)), this
                }

                function Re(t) {
                    return !!this.isValid() && (t = t ? ye(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
                }

                function We() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Le() {
                    if (!m(this._isDSTShifted))return this._isDSTShifted;
                    var t = {};
                    if (v(t, this), t = me(t), t._a) {
                        var e = t._isUTC ? c(t._a) : ye(t._a);
                        this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ve() {
                    return !!this.isValid() && !this._isUTC
                }

                function Be() {
                    return !!this.isValid() && this._isUTC
                }

                function Ye() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function ze(t, e) {
                    var n, i, a, o = t, r = null;
                    return we(t) ? o = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = La.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
                        y: 0,
                        d: k(r[ea]) * n,
                        h: k(r[na]) * n,
                        m: k(r[ia]) * n,
                        s: k(r[aa]) * n,
                        ms: k(r[oa]) * n
                    }) : (r = Va.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
                        y: He(r[2], n),
                        M: He(r[3], n),
                        w: He(r[4], n),
                        d: He(r[5], n),
                        h: He(r[6], n),
                        m: He(r[7], n),
                        s: He(r[8], n)
                    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = Ee(ye(o.from), ye(o.to)), o = {}, o.ms = a.milliseconds, o.M = a.months), i = new _e(o), we(t) && d(t, "_locale") && (i._locale = t._locale), i
                }

                function He(t, e) {
                    var n = t && parseFloat(t.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * e
                }

                function Ne(t, e) {
                    var n = {milliseconds: 0, months: 0};
                    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
                }

                function Ee(t, e) {
                    var n;
                    return t.isValid() && e.isValid() ? (e = Ce(e, t), t.isBefore(e) ? n = Ne(t, e) : (n = Ne(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Ue(t) {
                    return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
                }

                function je(t, e) {
                    return function (n, i) {
                        var a, o;
                        return null === i || isNaN(+i) || (M(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, a = ze(n, i), Ge(this, a, t), this
                    }
                }

                function Ge(e, n, i, a) {
                    var o = n._milliseconds, r = Ue(n._days), s = Ue(n._months);
                    e.isValid() && (a = null == a || a, o && e._d.setTime(e._d.valueOf() + o * i), r && E(e, "Date", N(e, "Date") + r * i), s && ut(e, N(e, "Month") + s * i), a && t.updateOffset(e, r || s))
                }

                function qe(t, e) {
                    var n = t.diff(e, "days", !0);
                    return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
                }

                function Ze(e, n) {
                    var i = e || ye(), a = Ce(i, this).startOf("day"), o = t.calendarFormat(this, a) || "sameElse",
                        r = n && (D(n[o]) ? n[o].call(this, i) : n[o]);
                    return this.format(r || this.localeData().calendar(o, this, ye(i)))
                }

                function Je() {
                    return new b(this)
                }

                function Xe(t, e) {
                    var n = y(t) ? t : ye(t);
                    return !(!this.isValid() || !n.isValid()) && (e = V(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                }

                function Ke(t, e) {
                    var n = y(t) ? t : ye(t);
                    return !(!this.isValid() || !n.isValid()) && (e = V(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                }

                function Qe(t, e, n, i) {
                    return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
                }

                function $e(t, e) {
                    var n, i = y(t) ? t : ye(t);
                    return !(!this.isValid() || !i.isValid()) && (e = V(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                }

                function tn(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }

                function en(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }

                function nn(t, e, n) {
                    var i, a, o, r;
                    return this.isValid() ? (i = Ce(t, this), i.isValid() ? (a = 6e4 * (i.utcOffset() - this.utcOffset()), e = V(e), "year" === e || "month" === e || "quarter" === e ? (r = an(this, i), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (o = this - i, r = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - a) / 864e5 : "week" === e ? (o - a) / 6048e5 : o), n ? r : x(r)) : NaN) : NaN
                }

                function an(t, e) {
                    var n, i, a = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(a, "months");
                    return 0 > e - o ? (n = t.clone().add(a - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(a + 1, "months"), i = (e - o) / (n - o)), -(a + i) || 0
                }

                function on() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function rn() {
                    var t = this.clone().utc();
                    return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : X(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function sn(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = X(this, e);
                    return this.localeData().postformat(n)
                }

                function ln(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? ze({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function dn(t) {
                    return this.from(ye(), t)
                }

                function un(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? ze({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function cn(t) {
                    return this.to(ye(), t)
                }

                function hn(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
                }

                function fn() {
                    return this._locale
                }

                function gn(t) {
                    switch (t = V(t)) {
                        case"year":
                            this.month(0);
                        case"quarter":
                        case"month":
                            this.date(1);
                        case"week":
                        case"isoWeek":
                        case"day":
                        case"date":
                            this.hours(0);
                        case"hour":
                            this.minutes(0);
                        case"minute":
                            this.seconds(0);
                        case"second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function pn(t) {
                    return t = V(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }

                function mn() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function vn() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function bn() {
                    return new Date(this.valueOf())
                }

                function yn() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }

                function xn() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }

                function kn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function Sn() {
                    return g(this)
                }

                function _n() {
                    return u({}, f(this))
                }

                function wn() {
                    return f(this).overflow
                }

                function Mn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function Dn(t, e) {
                    q(0, [t, t.length], 0, e)
                }

                function Cn(t) {
                    return An.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Tn(t) {
                    return An.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Pn() {
                    return wt(this.year(), 1, 4)
                }

                function Fn() {
                    var t = this.localeData()._week;
                    return wt(this.year(), t.dow, t.doy)
                }

                function An(t, e, n, i, a) {
                    var o;
                    return null == t ? _t(this, i, a).year : (o = wt(t, i, a), e > o && (e = o), In.call(this, t, e, n, i, a))
                }

                function In(t, e, n, i, a) {
                    var o = St(t, e, n, i, a), r = xt(o.year, 0, o.dayOfYear);
                    return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
                }

                function On(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }

                function Rn(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Wn(t, e) {
                    e[oa] = k(1e3 * ("0." + t))
                }

                function Ln() {
                    return this._isUTC ? "UTC" : ""
                }

                function Vn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Bn(t) {
                    return ye(1e3 * t)
                }

                function Yn() {
                    return ye.apply(null, arguments).parseZone()
                }

                function zn(t) {
                    return t
                }

                function Hn(t, e, n, i) {
                    var a = ne(), o = c().set(i, e);
                    return a[n](o, t)
                }

                function Nn(t, e, n) {
                    if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return Hn(t, e, n, "month");
                    var i, a = [];
                    for (i = 0; 12 > i; i++)a[i] = Hn(t, i, n, "month");
                    return a
                }

                function En(t, e, n, i) {
                    "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                    var a = ne(), o = t ? a._week.dow : 0;
                    if (null != n)return Hn(e, (n + o) % 7, i, "day");
                    var r, s = [];
                    for (r = 0; 7 > r; r++)s[r] = Hn(e, (r + o) % 7, i, "day");
                    return s
                }

                function Un(t, e) {
                    return Nn(t, e, "months")
                }

                function jn(t, e) {
                    return Nn(t, e, "monthsShort")
                }

                function Gn(t, e, n) {
                    return En(t, e, n, "weekdays")
                }

                function qn(t, e, n) {
                    return En(t, e, n, "weekdaysShort")
                }

                function Zn(t, e, n) {
                    return En(t, e, n, "weekdaysMin")
                }

                function Jn() {
                    var t = this._data;
                    return this._milliseconds = Ja(this._milliseconds), this._days = Ja(this._days), this._months = Ja(this._months), t.milliseconds = Ja(t.milliseconds), t.seconds = Ja(t.seconds), t.minutes = Ja(t.minutes), t.hours = Ja(t.hours), t.months = Ja(t.months), t.years = Ja(t.years), this
                }

                function Xn(t, e, n, i) {
                    var a = ze(e, n);
                    return t._milliseconds += i * a._milliseconds, t._days += i * a._days, t._months += i * a._months, t._bubble()
                }

                function Kn(t, e) {
                    return Xn(this, t, e, 1)
                }

                function Qn(t, e) {
                    return Xn(this, t, e, -1)
                }

                function $n(t) {
                    return 0 > t ? Math.floor(t) : Math.ceil(t)
                }

                function ti() {
                    var t, e, n, i, a, o = this._milliseconds, r = this._days, s = this._months, l = this._data;
                    return o >= 0 && r >= 0 && s >= 0 || 0 >= o && 0 >= r && 0 >= s || (o += 864e5 * $n(ni(s) + r), r = 0, s = 0), l.milliseconds = o % 1e3, t = x(o / 1e3), l.seconds = t % 60, e = x(t / 60), l.minutes = e % 60, n = x(e / 60), l.hours = n % 24, r += x(n / 24), a = x(ei(r)), s += a, r -= $n(ni(a)), i = x(s / 12), s %= 12, l.days = r, l.months = s, l.years = i, this
                }

                function ei(t) {
                    return 4800 * t / 146097
                }

                function ni(t) {
                    return 146097 * t / 4800
                }

                function ii(t) {
                    var e, n, i = this._milliseconds;
                    if (t = V(t), "month" === t || "year" === t)return e = this._days + i / 864e5, n = this._months + ei(e), "month" === t ? n : n / 12;
                    switch (e = this._days + Math.round(ni(this._months)), t) {
                        case"week":
                            return e / 7 + i / 6048e5;
                        case"day":
                            return e + i / 864e5;
                        case"hour":
                            return 24 * e + i / 36e5;
                        case"minute":
                            return 1440 * e + i / 6e4;
                        case"second":
                            return 86400 * e + i / 1e3;
                        case"millisecond":
                            return Math.floor(864e5 * e) + i;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function ai() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12)
                }

                function oi(t) {
                    return function () {
                        return this.as(t)
                    }
                }

                function ri(t) {
                    return t = V(t), this[t + "s"]()
                }

                function si(t) {
                    return function () {
                        return this._data[t]
                    }
                }

                function li() {
                    return x(this.days() / 7)
                }

                function di(t, e, n, i, a) {
                    return a.relativeTime(e || 1, !!n, t, i)
                }

                function ui(t, e, n) {
                    var i = ze(t).abs(), a = ho(i.as("s")), o = ho(i.as("m")), r = ho(i.as("h")), s = ho(i.as("d")),
                        l = ho(i.as("M")), d = ho(i.as("y")),
                        u = a < fo.s && ["s", a] || 1 >= o && ["m"] || o < fo.m && ["mm", o] || 1 >= r && ["h"] || r < fo.h && ["hh", r] || 1 >= s && ["d"] || s < fo.d && ["dd", s] || 1 >= l && ["M"] || l < fo.M && ["MM", l] || 1 >= d && ["y"] || ["yy", d];
                    return u[2] = e, u[3] = +t > 0, u[4] = n, di.apply(null, u)
                }

                function ci(t) {
                    return void 0 === t ? ho : "function" == typeof t && (ho = t, !0)
                }

                function hi(t, e) {
                    return void 0 !== fo[t] && (void 0 === e ? fo[t] : (fo[t] = e, !0))
                }

                function fi(t) {
                    var e = this.localeData(), n = ui(this, !t, e);
                    return t && (n = e.pastFuture(+this, n)), e.postformat(n)
                }

                function gi() {
                    var t, e, n, i = go(this._milliseconds) / 1e3, a = go(this._days), o = go(this._months);
                    t = x(i / 60), e = x(t / 60), i %= 60, t %= 60, n = x(o / 12), o %= 12;
                    var r = n, s = o, l = a, d = e, u = t, c = i, h = this.asSeconds();
                    return h ? (0 > h ? "-" : "") + "P" + (r ? r + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
                }

                var pi, mi;
                mi = Array.prototype.some ? Array.prototype.some : function (t) {
                    for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)if (i in e && t.call(this, e[i], i, e))return !0;
                    return !1
                };
                var vi = t.momentProperties = [], bi = !1, yi = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var xi;
                xi = Object.keys ? Object.keys : function (t) {
                    var e, n = [];
                    for (e in t)d(t, e) && n.push(e);
                    return n
                };
                var ki, Si = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    }, _i = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    }, wi = "Invalid date", Mi = "%d", Di = /\d{1,2}/, Ci = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }, Ti = {}, Pi = {},
                    Fi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ii = {}, Oi = {}, Ri = /\d/, Wi = /\d\d/,
                    Li = /\d{3}/, Vi = /\d{4}/, Bi = /[+-]?\d{6}/, Yi = /\d\d?/, zi = /\d\d\d\d?/, Hi = /\d\d\d\d\d\d?/,
                    Ni = /\d{1,3}/, Ei = /\d{1,4}/, Ui = /[+-]?\d{1,6}/, ji = /\d+/, Gi = /[+-]?\d+/,
                    qi = /Z|[+-]\d\d:?\d\d/gi, Zi = /Z|[+-]\d\d(?::?\d\d)?/gi, Ji = /[+-]?\d+(\.\d{1,3})?/,
                    Xi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    Ki = {}, Qi = {}, $i = 0, ta = 1, ea = 2, na = 3, ia = 4, aa = 5, oa = 6, ra = 7, sa = 8;
                ki = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                    var e;
                    for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
                    return -1
                }, q("M", ["MM", 2], "Mo", function () {
                    return this.month() + 1
                }), q("MMM", 0, 0, function (t) {
                    return this.localeData().monthsShort(this, t)
                }), q("MMMM", 0, 0, function (t) {
                    return this.localeData().months(this, t)
                }), L("month", "M"), Y("month", 8), Q("M", Yi), Q("MM", Yi, Wi), Q("MMM", function (t, e) {
                    return e.monthsShortRegex(t)
                }), Q("MMMM", function (t, e) {
                    return e.monthsRegex(t)
                }), nt(["M", "MM"], function (t, e) {
                    e[ta] = k(t) - 1
                }), nt(["MMM", "MMMM"], function (t, e, n, i) {
                    var a = n._locale.monthsParse(t, i, n._strict);
                    null != a ? e[ta] = a : f(n).invalidMonth = t
                });
                var la = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                    da = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ua = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ca = Xi, ha = Xi;
                q("Y", 0, 0, function () {
                    var t = this.year();
                    return 9999 >= t ? "" + t : "+" + t
                }), q(0, ["YY", 2], 0, function () {
                    return this.year() % 100
                }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), Y("year", 1), Q("Y", Gi), Q("YY", Yi, Wi), Q("YYYY", Ei, Vi), Q("YYYYY", Ui, Bi), Q("YYYYYY", Ui, Bi), nt(["YYYYY", "YYYYYY"], $i), nt("YYYY", function (e, n) {
                    n[$i] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
                }), nt("YY", function (e, n) {
                    n[$i] = t.parseTwoDigitYear(e)
                }), nt("Y", function (t, e) {
                    e[$i] = parseInt(t, 10)
                }), t.parseTwoDigitYear = function (t) {
                    return k(t) + (k(t) > 68 ? 1900 : 2e3)
                };
                var fa = H("FullYear", !0);
                q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), Q("w", Yi), Q("ww", Yi, Wi), Q("W", Yi), Q("WW", Yi, Wi), it(["w", "ww", "W", "WW"], function (t, e, n, i) {
                    e[i.substr(0, 1)] = k(t)
                });
                var ga = {dow: 0, doy: 6};
                q("d", 0, "do", "day"), q("dd", 0, 0, function (t) {
                    return this.localeData().weekdaysMin(this, t)
                }), q("ddd", 0, 0, function (t) {
                    return this.localeData().weekdaysShort(this, t)
                }), q("dddd", 0, 0, function (t) {
                    return this.localeData().weekdays(this, t)
                }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), Q("d", Yi), Q("e", Yi), Q("E", Yi), Q("dd", function (t, e) {
                    return e.weekdaysMinRegex(t)
                }), Q("ddd", function (t, e) {
                    return e.weekdaysShortRegex(t)
                }), Q("dddd", function (t, e) {
                    return e.weekdaysRegex(t)
                }), it(["dd", "ddd", "dddd"], function (t, e, n, i) {
                    var a = n._locale.weekdaysParse(t, i, n._strict);
                    null != a ? e.d = a : f(n).invalidWeekday = t
                }), it(["d", "e", "E"], function (t, e, n, i) {
                    e[i] = k(t)
                });
                var pa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    ma = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), va = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ba = Xi,
                    ya = Xi, xa = Xi;
                q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, Ut), q("k", ["kk", 2], 0, jt), q("hmm", 0, 0, function () {
                    return "" + Ut.apply(this) + G(this.minutes(), 2)
                }), q("hmmss", 0, 0, function () {
                    return "" + Ut.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
                }), q("Hmm", 0, 0, function () {
                    return "" + this.hours() + G(this.minutes(), 2)
                }), q("Hmmss", 0, 0, function () {
                    return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
                }), Gt("a", !0), Gt("A", !1), L("hour", "h"), Y("hour", 13), Q("a", qt), Q("A", qt), Q("H", Yi), Q("h", Yi), Q("HH", Yi, Wi), Q("hh", Yi, Wi), Q("hmm", zi), Q("hmmss", Hi), Q("Hmm", zi), Q("Hmmss", Hi), nt(["H", "HH"], na), nt(["a", "A"], function (t, e, n) {
                    n._isPm = n._locale.isPM(t), n._meridiem = t
                }), nt(["h", "hh"], function (t, e, n) {
                    e[na] = k(t), f(n).bigHour = !0
                }), nt("hmm", function (t, e, n) {
                    var i = t.length - 2;
                    e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i)), f(n).bigHour = !0
                }), nt("hmmss", function (t, e, n) {
                    var i = t.length - 4, a = t.length - 2;
                    e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i, 2)), e[aa] = k(t.substr(a)), f(n).bigHour = !0
                }), nt("Hmm", function (t, e, n) {
                    var i = t.length - 2;
                    e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i))
                }), nt("Hmmss", function (t, e, n) {
                    var i = t.length - 4, a = t.length - 2;
                    e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i, 2)), e[aa] = k(t.substr(a))
                });
                var ka, Sa = /[ap]\.?m?\.?/i, _a = H("Hours", !0), wa = {
                        calendar: Si,
                        longDateFormat: _i,
                        invalidDate: wi,
                        ordinal: Mi,
                        ordinalParse: Di,
                        relativeTime: Ci,
                        months: da,
                        monthsShort: ua,
                        week: ga,
                        weekdays: pa,
                        weekdaysMin: va,
                        weekdaysShort: ma,
                        meridiemParse: Sa
                    }, Ma = {},
                    Da = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    Ca = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                    Ta = /Z|[+-]\d\d(?::?\d\d)?/,
                    Pa = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                    Fa = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                    Aa = /^\/?Date\((\-?\d+)/i;
                t.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function () {
                };
                var Ia = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var t = ye.apply(null, arguments);
                        return this.isValid() && t.isValid() ? this > t ? this : t : p()
                    }),
                    Oa = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var t = ye.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t > this ? this : t : p()
                    }), Ra = function () {
                        return Date.now ? Date.now() : +new Date
                    };
                Me("Z", ":"), Me("ZZ", ""), Q("Z", Zi), Q("ZZ", Zi), nt(["Z", "ZZ"], function (t, e, n) {
                    n._useUTC = !0, n._tzm = De(Zi, t)
                });
                var Wa = /([\+\-]|\d\d)/gi;
                t.updateOffset = function () {
                };
                var La = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                    Va = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                ze.fn = _e.prototype;
                var Ba = je(1, "add"), Ya = je(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var za = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });
                q(0, ["gg", 2], 0, function () {
                    return this.weekYear() % 100
                }), q(0, ["GG", 2], 0, function () {
                    return this.isoWeekYear() % 100
                }), Dn("gggg", "weekYear"), Dn("ggggg", "weekYear"), Dn("GGGG", "isoWeekYear"), Dn("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), Q("G", Gi), Q("g", Gi), Q("GG", Yi, Wi), Q("gg", Yi, Wi), Q("GGGG", Ei, Vi), Q("gggg", Ei, Vi), Q("GGGGG", Ui, Bi), Q("ggggg", Ui, Bi), it(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
                    e[i.substr(0, 2)] = k(t)
                }), it(["gg", "GG"], function (e, n, i, a) {
                    n[a] = t.parseTwoDigitYear(e)
                }), q("Q", 0, "Qo", "quarter"), L("quarter", "Q"), Y("quarter", 7), Q("Q", Ri), nt("Q", function (t, e) {
                    e[ta] = 3 * (k(t) - 1)
                }), q("D", ["DD", 2], "Do", "date"), L("date", "D"), Y("date", 9), Q("D", Yi), Q("DD", Yi, Wi), Q("Do", function (t, e) {
                    return t ? e._ordinalParse : e._ordinalParseLenient
                }), nt(["D", "DD"], ea), nt("Do", function (t, e) {
                    e[ea] = k(t.match(Yi)[0], 10)
                });
                var Ha = H("Date", !0);
                q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), Y("dayOfYear", 4), Q("DDD", Ni), Q("DDDD", Li), nt(["DDD", "DDDD"], function (t, e, n) {
                    n._dayOfYear = k(t)
                }), q("m", ["mm", 2], 0, "minute"), L("minute", "m"), Y("minute", 14), Q("m", Yi), Q("mm", Yi, Wi), nt(["m", "mm"], ia);
                var Na = H("Minutes", !1);
                q("s", ["ss", 2], 0, "second"), L("second", "s"), Y("second", 15), Q("s", Yi), Q("ss", Yi, Wi), nt(["s", "ss"], aa);
                var Ea = H("Seconds", !1);
                q("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), q(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function () {
                    return 10 * this.millisecond()
                }), q(0, ["SSSSS", 5], 0, function () {
                    return 100 * this.millisecond()
                }), q(0, ["SSSSSS", 6], 0, function () {
                    return 1e3 * this.millisecond()
                }), q(0, ["SSSSSSS", 7], 0, function () {
                    return 1e4 * this.millisecond()
                }), q(0, ["SSSSSSSS", 8], 0, function () {
                    return 1e5 * this.millisecond()
                }), q(0, ["SSSSSSSSS", 9], 0, function () {
                    return 1e6 * this.millisecond()
                }), L("millisecond", "ms"), Y("millisecond", 16), Q("S", Ni, Ri), Q("SS", Ni, Wi), Q("SSS", Ni, Li);
                var Ua;
                for (Ua = "SSSS"; Ua.length <= 9; Ua += "S")Q(Ua, ji);
                for (Ua = "S"; Ua.length <= 9; Ua += "S")nt(Ua, Wn);
                var ja = H("Milliseconds", !1);
                q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
                var Ga = b.prototype;
                Ga.add = Ba, Ga.calendar = Ze, Ga.clone = Je, Ga.diff = nn, Ga.endOf = pn, Ga.format = sn, Ga.from = ln, Ga.fromNow = dn, Ga.to = un, Ga.toNow = cn, Ga.get = U, Ga.invalidAt = wn, Ga.isAfter = Xe, Ga.isBefore = Ke, Ga.isBetween = Qe, Ga.isSame = $e, Ga.isSameOrAfter = tn, Ga.isSameOrBefore = en, Ga.isValid = Sn, Ga.lang = za, Ga.locale = hn, Ga.localeData = fn, Ga.max = Oa, Ga.min = Ia, Ga.parsingFlags = _n, Ga.set = j, Ga.startOf = gn, Ga.subtract = Ya, Ga.toArray = yn, Ga.toObject = xn, Ga.toDate = bn, Ga.toISOString = rn, Ga.toJSON = kn, Ga.toString = on, Ga.unix = vn, Ga.valueOf = mn, Ga.creationData = Mn, Ga.year = fa, Ga.isLeapYear = bt, Ga.weekYear = Cn, Ga.isoWeekYear = Tn, Ga.quarter = Ga.quarters = On, Ga.month = ct, Ga.daysInMonth = ht, Ga.week = Ga.weeks = Tt, Ga.isoWeek = Ga.isoWeeks = Pt, Ga.weeksInYear = Fn, Ga.isoWeeksInYear = Pn, Ga.date = Ha, Ga.day = Ga.days = Vt, Ga.weekday = Bt, Ga.isoWeekday = Yt, Ga.dayOfYear = Rn, Ga.hour = Ga.hours = _a, Ga.minute = Ga.minutes = Na, Ga.second = Ga.seconds = Ea, Ga.millisecond = Ga.milliseconds = ja, Ga.utcOffset = Pe, Ga.utc = Ae, Ga.local = Ie, Ga.parseZone = Oe, Ga.hasAlignedHourOffset = Re, Ga.isDST = We, Ga.isLocal = Ve, Ga.isUtcOffset = Be, Ga.isUtc = Ye, Ga.isUTC = Ye, Ga.zoneAbbr = Ln, Ga.zoneName = Vn, Ga.dates = w("dates accessor is deprecated. Use date instead.", Ha), Ga.months = w("months accessor is deprecated. Use month instead", ct), Ga.years = w("years accessor is deprecated. Use year instead", fa), Ga.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Fe), Ga.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Le);
                var qa = Ga, Za = P.prototype;
                Za.calendar = F, Za.longDateFormat = A, Za.invalidDate = I, Za.ordinal = O, Za.preparse = zn, Za.postformat = zn, Za.relativeTime = R, Za.pastFuture = W, Za.set = C, Za.months = rt, Za.monthsShort = st, Za.monthsParse = dt, Za.monthsRegex = gt, Za.monthsShortRegex = ft, Za.week = Mt, Za.firstDayOfYear = Ct, Za.firstDayOfWeek = Dt, Za.weekdays = It, Za.weekdaysMin = Rt, Za.weekdaysShort = Ot, Za.weekdaysParse = Lt, Za.weekdaysRegex = zt, Za.weekdaysShortRegex = Ht, Za.weekdaysMinRegex = Nt, Za.isPM = Zt, Za.meridiem = Jt, $t("en", {
                    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (t) {
                        var e = t % 10,
                            n = 1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                        return t + n
                    }
                }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", $t), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ne);
                var Ja = Math.abs, Xa = oi("ms"), Ka = oi("s"), Qa = oi("m"), $a = oi("h"), to = oi("d"), eo = oi("w"),
                    no = oi("M"), io = oi("y"), ao = si("milliseconds"), oo = si("seconds"), ro = si("minutes"),
                    so = si("hours"), lo = si("days"), uo = si("months"), co = si("years"), ho = Math.round,
                    fo = {s: 45, m: 45, h: 22, d: 26, M: 11}, go = Math.abs, po = _e.prototype;
                po.abs = Jn, po.add = Kn, po.subtract = Qn, po.as = ii, po.asMilliseconds = Xa, po.asSeconds = Ka, po.asMinutes = Qa, po.asHours = $a, po.asDays = to, po.asWeeks = eo, po.asMonths = no, po.asYears = io, po.valueOf = ai, po._bubble = ti, po.get = ri, po.milliseconds = ao, po.seconds = oo, po.minutes = ro, po.hours = so, po.days = lo, po.weeks = li, po.months = uo, po.years = co, po.humanize = fi, po.toISOString = gi, po.toString = gi, po.toJSON = gi, po.locale = hn, po.localeData = fn, po.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gi), po.lang = za, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), Q("x", Gi), Q("X", Ji), nt("X", function (t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t, 10))
                }), nt("x", function (t, e, n) {
                    n._d = new Date(k(t))
                }), t.version = "2.14.1", i(ye), t.fn = qa, t.min = ke, t.max = Se, t.now = Ra, t.utc = c, t.unix = Bn, t.months = Un, t.isDate = s, t.locale = $t, t.invalid = p, t.duration = ze, t.isMoment = y, t.weekdays = Gn, t.parseZone = Yn, t.localeData = ne, t.isDuration = we, t.monthsShort = jn, t.weekdaysMin = Zn, t.defineLocale = te, t.updateLocale = ee, t.locales = ie, t.weekdaysShort = qn, t.normalizeUnits = V, t.relativeTimeRounding = ci, t.relativeTimeThreshold = hi, t.calendarFormat = qe, t.prototype = qa;
                var mo = t;
                return mo
            })
        }, {}], 7: [function (t, e, n) {
            var i = t(27)();
            t(26)(i), t(22)(i), t(25)(i), t(21)(i), t(23)(i), t(24)(i), t(28)(i), t(32)(i), t(30)(i), t(31)(i), t(33)(i), t(29)(i), t(34)(i), t(35)(i), t(36)(i), t(37)(i), t(38)(i), t(41)(i), t(39)(i), t(40)(i), t(42)(i), t(43)(i), t(44)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            8: 8,
            9: 9
        }], 8: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.Bar = function (e, n) {
                    return n.type = "bar", new t(e, n)
                }
            }
        }, {}], 9: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.Bubble = function (e, n) {
                    return n.type = "bubble", new t(e, n)
                }
            }
        }, {}], 10: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.Doughnut = function (e, n) {
                    return n.type = "doughnut", new t(e, n)
                }
            }
        }, {}], 11: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.Line = function (e, n) {
                    return n.type = "line", new t(e, n)
                }
            }
        }, {}], 12: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.PolarArea = function (e, n) {
                    return n.type = "polarArea", new t(e, n)
                }
            }
        }, {}], 13: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                t.Radar = function (e, n) {
                    return n.options = t.helpers.configMerge({aspectRatio: 1}, n.options), n.type = "radar", new t(e, n)
                }
            }
        }, {}], 14: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = {
                    hover: {mode: "single"},
                    scales: {
                        xAxes: [{type: "linear", position: "bottom", id: "x-axis-1"}],
                        yAxes: [{type: "linear", position: "left", id: "y-axis-1"}]
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                };
                t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, n) {
                    return n.type = "scatter", new t(e, n)
                }
            }
        }, {}], 15: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover: {mode: "label"},
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {offsetGridLines: !0}
                        }], yAxes: [{type: "linear"}]
                    }
                }, t.controllers.bar = t.DatasetController.extend({
                    dataElementType: t.elements.Rectangle,
                    initialize: function (e, n) {
                        t.DatasetController.prototype.initialize.call(this, e, n), this.getMeta().bar = !0
                    },
                    getBarCount: function () {
                        var t = this, n = 0;
                        return e.each(t.chart.data.datasets, function (e, i) {
                            var a = t.chart.getDatasetMeta(i);
                            a.bar && t.chart.isDatasetVisible(i) && ++n
                        }, t), n
                    },
                    update: function (t) {
                        var n = this;
                        e.each(n.getMeta().data, function (e, i) {
                            n.updateElement(e, i, t)
                        }, n)
                    },
                    updateElement: function (t, n, i) {
                        var a = this, o = a.getMeta(), r = a.getScaleForId(o.xAxisID), s = a.getScaleForId(o.yAxisID),
                            l = s.getBasePixel(), d = a.chart.options.elements.rectangle, u = t.custom || {},
                            c = a.getDataset();
                        e.extend(t, {
                            _xScale: r,
                            _yScale: s,
                            _datasetIndex: a.index,
                            _index: n,
                            _model: {
                                x: a.calculateBarX(n, a.index),
                                y: i ? l : a.calculateBarY(n, a.index),
                                label: a.chart.data.labels[n],
                                datasetLabel: c.label,
                                base: i ? l : a.calculateBarBase(a.index, n),
                                width: a.calculateBarWidth(n),
                                backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, n, d.backgroundColor),
                                borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                                borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, n, d.borderColor),
                                borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, n, d.borderWidth)
                            }
                        }), t.pivot()
                    },
                    calculateBarBase: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.yAxisID), o = 0;
                        if (a.options.stacked) {
                            for (var r = n.chart, s = r.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                                var u = s[d], c = r.getDatasetMeta(d);
                                if (c.bar && c.yAxisID === a.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += 0 > l ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return a.getPixelForValue(o)
                        }
                        return a.getBasePixel()
                    },
                    getRuler: function (t) {
                        var e, n = this, i = n.getMeta(), a = n.getScaleForId(i.xAxisID), o = n.getBarCount();
                        e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
                        var r = e * a.options.categoryPercentage, s = (e - e * a.options.categoryPercentage) / 2,
                            l = r / o;
                        if (a.ticks.length !== n.chart.data.labels.length) {
                            var d = a.ticks.length / n.chart.data.labels.length;
                            l *= d
                        }
                        var u = l * a.options.barPercentage, c = l - l * a.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickWidth: e,
                            categoryWidth: r,
                            categorySpacing: s,
                            fullBarWidth: l,
                            barWidth: u,
                            barSpacing: c
                        }
                    },
                    calculateBarWidth: function (t) {
                        var e = this.getScaleForId(this.getMeta().xAxisID);
                        if (e.options.barThickness)return e.options.barThickness;
                        var n = this.getRuler(t);
                        return e.options.stacked ? n.categoryWidth : n.barWidth
                    },
                    getBarIndex: function (t) {
                        var e, n, i = 0;
                        for (n = 0; t > n; ++n)e = this.chart.getDatasetMeta(n), e.bar && this.chart.isDatasetVisible(n) && ++i;
                        return i
                    },
                    calculateBarX: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.xAxisID), o = n.getBarIndex(e),
                            r = n.getRuler(t), s = a.getPixelForValue(null, t, e, n.chart.isCombo);
                        return s -= n.chart.isCombo ? r.tickWidth / 2 : 0, a.options.stacked ? s + r.categoryWidth / 2 + r.categorySpacing : s + r.barWidth / 2 + r.categorySpacing + r.barWidth * o + r.barSpacing / 2 + r.barSpacing * o
                    },
                    calculateBarY: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.yAxisID),
                            o = Number(n.getDataset().data[t]);
                        if (a.options.stacked) {
                            for (var r = 0, s = 0, l = 0; e > l; l++) {
                                var d = n.chart.data.datasets[l], u = n.chart.getDatasetMeta(l);
                                if (u.bar && u.yAxisID === a.id && n.chart.isDatasetVisible(l)) {
                                    var c = Number(d.data[t]);
                                    0 > c ? s += c || 0 : r += c || 0
                                }
                            }
                            return 0 > o ? a.getPixelForValue(s + o) : a.getPixelForValue(r + o)
                        }
                        return a.getPixelForValue(o)
                    },
                    draw: function (t) {
                        var n = this, i = t || 1;
                        e.each(n.getMeta().data, function (t, e) {
                            var a = n.getDataset().data[e];
                            null === a || void 0 === a || isNaN(a) || t.transition(i).draw()
                        }, n)
                    },
                    setHoverStyle: function (t) {
                        var n = this.chart.data.datasets[t._datasetIndex], i = t._index, a = t.custom || {},
                            o = t._model;
                        o.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function (t) {
                        var n = this.chart.data.datasets[t._datasetIndex], i = t._index, a = t.custom || {},
                            o = t._model, r = this.chart.options.elements.rectangle;
                        o.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, r.backgroundColor), o.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, r.borderColor), o.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, r.borderWidth)
                    }
                }), t.defaults.horizontalBar = {
                    hover: {mode: "label"},
                    scales: {
                        xAxes: [{type: "linear", position: "bottom"}],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {offsetGridLines: !0}
                        }]
                    },
                    elements: {rectangle: {borderSkipped: "left"}},
                    tooltips: {
                        callbacks: {
                            title: function (t, e) {
                                var n = "";
                                return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                            }, label: function (t, e) {
                                var n = e.datasets[t.datasetIndex].label || "";
                                return n + ": " + t.xLabel
                            }
                        }
                    }
                }, t.controllers.horizontalBar = t.controllers.bar.extend({
                    updateElement: function (t, n, i) {
                        var a = this, o = a.getMeta(), r = a.getScaleForId(o.xAxisID), s = a.getScaleForId(o.yAxisID),
                            l = r.getBasePixel(), d = t.custom || {}, u = a.getDataset(),
                            c = a.chart.options.elements.rectangle;
                        e.extend(t, {
                            _xScale: r,
                            _yScale: s,
                            _datasetIndex: a.index,
                            _index: n,
                            _model: {
                                x: i ? l : a.calculateBarX(n, a.index),
                                y: a.calculateBarY(n, a.index),
                                label: a.chart.data.labels[n],
                                datasetLabel: u.label,
                                base: i ? l : a.calculateBarBase(a.index, n),
                                height: a.calculateBarHeight(n),
                                backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, n, c.backgroundColor),
                                borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                                borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, n, c.borderColor),
                                borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, n, c.borderWidth)
                            },
                            draw: function () {
                                function t(t) {
                                    return l[(u + t) % 4]
                                }

                                var e = this._chart.ctx, n = this._view, i = n.height / 2, a = n.y - i, o = n.y + i,
                                    r = n.base - (n.base - n.x), s = n.borderWidth / 2;
                                n.borderWidth && (a += s, o -= s, r += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                                var l = [[n.base, o], [n.base, a], [r, a], [r, o]],
                                    d = ["bottom", "left", "top", "right"], u = d.indexOf(n.borderSkipped, 0);
                                -1 === u && (u = 0), e.moveTo.apply(e, t(0));
                                for (var c = 1; 4 > c; c++)e.lineTo.apply(e, t(c));
                                e.fill(), n.borderWidth && e.stroke()
                            },
                            inRange: function (t, e) {
                                var n = this._view, i = !1;
                                return n && (i = n.x < n.base ? e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.x && t <= n.base : e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.base && t <= n.x), i
                            }
                        }), t.pivot()
                    }, calculateBarBase: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.xAxisID), o = 0;
                        if (a.options.stacked) {
                            for (var r = n.chart, s = r.data.datasets, l = Number(s[t].data[e]), d = 0; t > d; d++) {
                                var u = s[d], c = r.getDatasetMeta(d);
                                if (c.bar && c.xAxisID === a.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += 0 > l ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return a.getPixelForValue(o)
                        }
                        return a.getBasePixel()
                    }, getRuler: function (t) {
                        var e, n = this, i = n.getMeta(), a = n.getScaleForId(i.yAxisID), o = n.getBarCount();
                        e = "category" === a.options.type ? a.getPixelForTick(t + 1) - a.getPixelForTick(t) : a.width / a.ticks.length;
                        var r = e * a.options.categoryPercentage, s = (e - e * a.options.categoryPercentage) / 2,
                            l = r / o;
                        if (a.ticks.length !== n.chart.data.labels.length) {
                            var d = a.ticks.length / n.chart.data.labels.length;
                            l *= d
                        }
                        var u = l * a.options.barPercentage, c = l - l * a.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickHeight: e,
                            categoryHeight: r,
                            categorySpacing: s,
                            fullBarHeight: l,
                            barHeight: u,
                            barSpacing: c
                        }
                    }, calculateBarHeight: function (t) {
                        var e = this, n = e.getScaleForId(e.getMeta().yAxisID);
                        if (n.options.barThickness)return n.options.barThickness;
                        var i = e.getRuler(t);
                        return n.options.stacked ? i.categoryHeight : i.barHeight
                    }, calculateBarX: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.xAxisID),
                            o = Number(n.getDataset().data[t]);
                        if (a.options.stacked) {
                            for (var r = 0, s = 0, l = 0; e > l; l++) {
                                var d = n.chart.data.datasets[l], u = n.chart.getDatasetMeta(l);
                                if (u.bar && u.xAxisID === a.id && n.chart.isDatasetVisible(l)) {
                                    var c = Number(d.data[t]);
                                    0 > c ? s += c || 0 : r += c || 0
                                }
                            }
                            return 0 > o ? a.getPixelForValue(s + o) : a.getPixelForValue(r + o)
                        }
                        return a.getPixelForValue(o)
                    }, calculateBarY: function (t, e) {
                        var n = this, i = n.getMeta(), a = n.getScaleForId(i.yAxisID), o = n.getBarIndex(e),
                            r = n.getRuler(t), s = a.getPixelForValue(null, t, e, n.chart.isCombo);
                        return s -= n.chart.isCombo ? r.tickHeight / 2 : 0, a.options.stacked ? s + r.categoryHeight / 2 + r.categorySpacing : s + r.barHeight / 2 + r.categorySpacing + r.barHeight * o + r.barSpacing / 2 + r.barSpacing * o
                    }
                })
            }
        }, {}], 16: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover: {mode: "single"},
                    scales: {
                        xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                        yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                var n = e.datasets[t.datasetIndex].label || "",
                                    i = e.datasets[t.datasetIndex].data[t.index];
                                return n + ": (" + i.x + ", " + i.y + ", " + i.r + ")"
                            }
                        }
                    }
                }, t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: t.elements.Point,
                    update: function (t) {
                        var n = this, i = n.getMeta(), a = i.data;
                        e.each(a, function (e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement: function (n, i, a) {
                        var o = this, r = o.getMeta(), s = o.getScaleForId(r.xAxisID), l = o.getScaleForId(r.yAxisID),
                            d = n.custom || {}, u = o.getDataset(), c = u.data[i], h = o.chart.options.elements.point,
                            f = o.index;
                        e.extend(n, {
                            _xScale: s,
                            _yScale: l,
                            _datasetIndex: f,
                            _index: i,
                            _model: {
                                x: a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, i, f, o.chart.isCombo),
                                y: a ? l.getBasePixel() : l.getPixelForValue(c, i, f),
                                radius: a ? 0 : d.radius ? d.radius : o.getRadius(c),
                                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)
                            }
                        }), t.DatasetController.prototype.removeHoverStyle.call(o, n, h);
                        var g = n._model;
                        g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), n.pivot()
                    },
                    getRadius: function (t) {
                        return t.r || this.chart.options.elements.point.radius
                    },
                    setHoverStyle: function (n) {
                        var i = this;
                        t.DatasetController.prototype.setHoverStyle.call(i, n);
                        var a = i.chart.data.datasets[n._datasetIndex], o = n._index, r = n.custom || {}, s = n._model;
                        s.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(a.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(a.data[o])
                    },
                    removeHoverStyle: function (e) {
                        var n = this;
                        t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
                        var i = n.chart.data.datasets[e._datasetIndex].data[e._index], a = e.custom || {}, o = e._model;
                        o.radius = a.radius ? a.radius : n.getRadius(i)
                    }
                })
            }
        }, {}], 17: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = t.defaults;
                n.doughnut = {
                    animation: {animateRotate: !0, animateScale: !1},
                    aspectRatio: 1,
                    hover: {mode: "single"},
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data, i = n.datasets, a = n.labels;
                        if (i.length)for (var o = 0; o < i[0].data.length; ++o)e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
                                    var o = t.getDatasetMeta(0), r = n.datasets[0], s = o.data[a],
                                        l = s && s.custom || {}, d = e.getValueAtIndexOrDefault,
                                        u = t.options.elements.arc,
                                        c = l.backgroundColor ? l.backgroundColor : d(r.backgroundColor, a, u.backgroundColor),
                                        h = l.borderColor ? l.borderColor : d(r.borderColor, a, u.borderColor),
                                        f = l.borderWidth ? l.borderWidth : d(r.borderWidth, a, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[a]) || o.data[a].hidden,
                                        index: a
                                    }
                                }) : []
                            }
                        }, onClick: function (t, e) {
                            var n, i, a, o = e.index, r = this.chart;
                            for (n = 0, i = (r.data.datasets || []).length; i > n; ++n)a = r.getDatasetMeta(n), a.data[o].hidden = !a.data[o].hidden;
                            r.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: Math.PI * -.5,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
                            }
                        }
                    }
                }, n.pie = e.clone(n.doughnut), e.extend(n.pie, {cutoutPercentage: 0}), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    getRingIndex: function (t) {
                        for (var e = 0, n = 0; t > n; ++n)this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function (t) {
                        var n = this, i = n.chart, a = i.chartArea, o = i.options, r = o.elements.arc,
                            s = a.right - a.left - r.borderWidth, l = a.bottom - a.top - r.borderWidth,
                            d = Math.min(s, l), u = {x: 0, y: 0}, c = n.getMeta(), h = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var g = o.rotation % (2 * Math.PI);
                            g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                            var p = g + f, m = {x: Math.cos(g), y: Math.sin(g)}, v = {x: Math.cos(p), y: Math.sin(p)},
                                b = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                                y = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                x = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                                k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                S = h / 100, _ = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), v.x * (v.x < 0 ? 1 : S)),
                                    y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), v.y * (v.y < 0 ? 1 : S))
                                }, w = {
                                    x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), v.x * (v.x > 0 ? 1 : S)),
                                    y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), v.y * (v.y > 0 ? 1 : S))
                                }, M = {width: .5 * (w.x - _.x), height: .5 * (w.y - _.y)};
                            d = Math.min(s / M.width, l / M.height), u = {x: (w.x + _.x) * -.5, y: (w.y + _.y) * -.5}
                        }
                        i.borderWidth = n.getMaxBorderWidth(c.data), i.outerRadius = Math.max((d - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = n.outerRadius - i.radiusLength, e.each(c.data, function (e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement: function (t, n, i) {
                        var a = this, o = a.chart, r = o.chartArea, s = o.options, l = s.animation,
                            d = (r.left + r.right) / 2, u = (r.top + r.bottom) / 2, c = s.rotation, h = s.rotation,
                            f = a.getDataset(),
                            g = i && l.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(f.data[n]) * (s.circumference / (2 * Math.PI)),
                            p = i && l.animateScale ? 0 : a.innerRadius, m = i && l.animateScale ? 0 : a.outerRadius,
                            v = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex: a.index,
                            _index: n,
                            _model: {
                                x: d + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: c,
                                endAngle: h,
                                circumference: g,
                                outerRadius: m,
                                innerRadius: p,
                                label: v(f.label, n, o.data.labels[n])
                            }
                        });
                        var b = t._model;
                        this.removeHoverStyle(t), i && l.animateRotate || (0 === n ? b.startAngle = s.rotation : b.startAngle = a.getMeta().data[n - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                    },
                    removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function () {
                        var t, n = this.getDataset(), i = this.getMeta(), a = 0;
                        return e.each(i.data, function (e, i) {
                            t = n.data[i], isNaN(t) || e.hidden || (a += Math.abs(t))
                        }), a
                    },
                    calculateCircumference: function (t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function (t) {
                        for (var e, n, i = 0, a = this.index, o = t.length, r = 0; o > r; r++)e = t[r]._model ? t[r]._model.borderWidth : 0, n = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0, i = e > i ? e : i, i = n > i ? n : i;
                        return i
                    }
                })
            }
        }, {}], 18: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                function e(t, e) {
                    return n.getValueOrDefault(t.showLine, e.showLines)
                }

                var n = t.helpers;
                t.defaults.line = {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {mode: "label"},
                    scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
                }, t.controllers.line = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    addElementAndReset: function (n) {
                        var i = this, a = i.chart.options, o = i.getMeta();
                        t.DatasetController.prototype.addElementAndReset.call(i, n), e(i.getDataset(), a) && 0 !== o.dataset._model.tension && i.updateBezierControlPoints()
                    },
                    update: function (t) {
                        var i, a, o, r = this, s = r.getMeta(), l = s.dataset, d = s.data || [], u = r.chart.options,
                            c = u.elements.line, h = r.getScaleForId(s.yAxisID), f = r.getDataset(), g = e(f, u);
                        for (g && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = d, l._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                            tension: o.tension ? o.tension : n.getValueOrDefault(f.lineTension, c.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                            fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill,
                            steppedLine: o.steppedLine ? o.steppedLine : n.getValueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
                            scaleTop: h.top,
                            scaleBottom: h.bottom,
                            scaleZero: h.getBasePixel()
                        }, l.pivot()), i = 0, a = d.length; a > i; ++i)r.updateElement(d[i], i, t);
                        for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, a = d.length; a > i; ++i)d[i].pivot()
                    },
                    getPointBackgroundColor: function (t, e) {
                        var i = this.chart.options.elements.point.backgroundColor, a = this.getDataset(),
                            o = t.custom || {};
                        return o.backgroundColor ? i = o.backgroundColor : a.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(a.pointBackgroundColor, e, i) : a.backgroundColor && (i = a.backgroundColor), i
                    },
                    getPointBorderColor: function (t, e) {
                        var i = this.chart.options.elements.point.borderColor, a = this.getDataset(),
                            o = t.custom || {};
                        return o.borderColor ? i = o.borderColor : a.pointBorderColor ? i = n.getValueAtIndexOrDefault(a.pointBorderColor, e, i) : a.borderColor && (i = a.borderColor), i
                    },
                    getPointBorderWidth: function (t, e) {
                        var i = this.chart.options.elements.point.borderWidth, a = this.getDataset(),
                            o = t.custom || {};
                        return o.borderWidth ? i = o.borderWidth : a.pointBorderWidth ? i = n.getValueAtIndexOrDefault(a.pointBorderWidth, e, i) : a.borderWidth && (i = a.borderWidth), i
                    },
                    updateElement: function (t, e, i) {
                        var a, o, r = this, s = r.getMeta(), l = t.custom || {}, d = r.getDataset(), u = r.index,
                            c = d.data[e], h = r.getScaleForId(s.yAxisID), f = r.getScaleForId(s.xAxisID),
                            g = r.chart.options.elements.point, p = r.chart.data.labels || [],
                            m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), a = f.getPixelForValue("object" == typeof c ? c : NaN, e, u, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
                            x: a,
                            y: o,
                            skip: l.skip || isNaN(a) || isNaN(o),
                            radius: l.radius || n.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
                            pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
                        }
                    },
                    calculatePointY: function (t, e, n) {
                        var i, a, o, r = this, s = r.chart, l = r.getMeta(), d = r.getScaleForId(l.yAxisID), u = 0,
                            c = 0;
                        if (d.options.stacked) {
                            for (i = 0; n > i; i++)if (a = s.data.datasets[i], o = s.getDatasetMeta(i), "line" === o.type && o.yAxisID === d.id && s.isDatasetVisible(i)) {
                                var h = Number(d.getRightValue(a.data[e]));
                                0 > h ? c += h || 0 : u += h || 0
                            }
                            var f = Number(d.getRightValue(t));
                            return 0 > f ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f)
                        }
                        return d.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function () {
                        function t(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }

                        var e = this, i = e.getMeta(), a = e.chart.chartArea, o = i.data || [];
                        i.dataset._model.spanGaps && (o = o.filter(function (t) {
                            return !t._model.skip
                        }));
                        var r, s, l, d, u;
                        if ("monotone" == i.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(o); else for (r = 0, s = o.length; s > r; ++r)l = o[r], d = l._model, u = n.splineCurve(n.previousItem(o, r)._model, d, n.nextItem(o, r)._model, i.dataset._model.tension), d.controlPointPreviousX = u.previous.x, d.controlPointPreviousY = u.previous.y, d.controlPointNextX = u.next.x, d.controlPointNextY = u.next.y;
                        if (e.chart.options.elements.line.capBezierPoints)for (r = 0, s = o.length; s > r; ++r)d = o[r]._model, d.controlPointPreviousX = t(d.controlPointPreviousX, a.left, a.right), d.controlPointPreviousY = t(d.controlPointPreviousY, a.top, a.bottom), d.controlPointNextX = t(d.controlPointNextX, a.left, a.right), d.controlPointNextY = t(d.controlPointNextY, a.top, a.bottom)
                    },
                    draw: function (t) {
                        var n, i, a = this, o = a.getMeta(), r = o.data || [], s = t || 1;
                        for (n = 0, i = r.length; i > n; ++n)r[n].transition(s);
                        for (e(a.getDataset(), a.chart.options) && o.dataset.transition(s).draw(), n = 0, i = r.length; i > n; ++n)r[n].draw()
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, a = t.custom || {},
                            o = t._model;
                        o.radius = a.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = a.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function (t) {
                        var e = this, i = e.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {},
                            r = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || n.getValueAtIndexOrDefault(i.pointRadius, a, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, a), r.borderColor = e.getPointBorderColor(t, a), r.borderWidth = e.getPointBorderWidth(t, a)
                    }
                })
            }
        }, {}], 19: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale: {type: "radialLinear", lineArc: !0, ticks: {beginAtZero: !0}},
                    animation: {animateRotate: !0, animateScale: !0},
                    startAngle: -.5 * Math.PI,
                    aspectRatio: 1,
                    legendCallback: function (t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var n = t.data, i = n.datasets, a = n.labels;
                        if (i.length)for (var o = 0; o < i[0].data.length; ++o)e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '">'), a[o] && e.push(a[o]), e.push("</span></li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function (t) {
                                var n = t.data;
                                return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
                                    var o = t.getDatasetMeta(0), r = n.datasets[0], s = o.data[a], l = s.custom || {},
                                        d = e.getValueAtIndexOrDefault, u = t.options.elements.arc,
                                        c = l.backgroundColor ? l.backgroundColor : d(r.backgroundColor, a, u.backgroundColor),
                                        h = l.borderColor ? l.borderColor : d(r.borderColor, a, u.borderColor),
                                        f = l.borderWidth ? l.borderWidth : d(r.borderWidth, a, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[a]) || o.data[a].hidden,
                                        index: a
                                    }
                                }) : []
                            }
                        }, onClick: function (t, e) {
                            var n, i, a, o = e.index, r = this.chart;
                            for (n = 0, i = (r.data.datasets || []).length; i > n; ++n)a = r.getDatasetMeta(n), a.data[o].hidden = !a.data[o].hidden;
                            r.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function () {
                                return ""
                            }, label: function (t, e) {
                                return e.labels[t.index] + ": " + t.yLabel;
                            }
                        }
                    }
                }, t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    update: function (t) {
                        var n = this, i = n.chart, a = i.chartArea, o = n.getMeta(), r = i.options, s = r.elements.arc,
                            l = Math.min(a.right - a.left, a.bottom - a.top);
                        i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, o.count = n.countVisibleElements(), e.each(o.data, function (e, i) {
                            n.updateElement(e, i, t)
                        })
                    },
                    updateElement: function (t, n, i) {
                        for (var a = this, o = a.chart, r = a.getDataset(), s = o.options, l = s.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = a.calculateCircumference(r.data[n]), f = d.xCenter, g = d.yCenter, p = 0, m = a.getMeta(), v = 0; n > v; ++v)isNaN(r.data[v]) || m.data[v].hidden || ++p;
                        var b = s.startAngle, y = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[n]),
                            x = b + h * p, k = x + (t.hidden ? 0 : h),
                            S = l.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[n]);
                        e.extend(t, {
                            _datasetIndex: a.index,
                            _index: n,
                            _scale: d,
                            _model: {
                                x: f,
                                y: g,
                                innerRadius: 0,
                                outerRadius: i ? S : y,
                                startAngle: i && l.animateRotate ? b : x,
                                endAngle: i && l.animateRotate ? b : k,
                                label: u(c, n, c[n])
                            }
                        }), a.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function () {
                        var t = this.getDataset(), n = this.getMeta(), i = 0;
                        return e.each(n.data, function (e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        }), i
                    },
                    calculateCircumference: function (t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {}], 20: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.radar = {
                    scale: {type: "radialLinear"},
                    elements: {line: {tension: 0}}
                }, t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    linkScales: e.noop,
                    addElementAndReset: function (e) {
                        t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints()
                    },
                    update: function (t) {
                        var n = this, i = n.getMeta(), a = i.dataset, o = i.data, r = a.custom || {},
                            s = n.getDataset(), l = n.chart.options.elements.line, d = n.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(i.dataset, {
                            _datasetIndex: n.index,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : e.getValueOrDefault(s.lineTension, l.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                                scaleTop: d.top,
                                scaleBottom: d.bottom,
                                scaleZero: d.getBasePosition()
                            }
                        }), i.dataset.pivot(), e.each(o, function (e, i) {
                            n.updateElement(e, i, t)
                        }, n), n.updateBezierControlPoints()
                    },
                    updateElement: function (t, n, i) {
                        var a = this, o = t.custom || {}, r = a.getDataset(), s = a.chart.scale,
                            l = a.chart.options.elements.point, d = s.getPointPositionForValue(n, r.data[n]);
                        e.extend(t, {
                            _datasetIndex: a.index,
                            _index: n,
                            _scale: s,
                            _model: {
                                x: i ? s.xCenter : d.x,
                                y: i ? s.yCenter : d.y,
                                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, a.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, n, l.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, n, l.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, n, l.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, n, l.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, n, l.pointStyle),
                                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, n, l.hitRadius)
                            }
                        }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function () {
                        var t = this.chart.chartArea, n = this.getMeta();
                        e.each(n.data, function (i, a) {
                            var o = i._model,
                                r = e.splineCurve(e.previousItem(n.data, a, !0)._model, o, e.nextItem(n.data, a, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
                        })
                    },
                    draw: function (t) {
                        var n = this.getMeta(), i = t || 1;
                        e.each(n.data, function (t) {
                            t.transition(i)
                        }), n.dataset.transition(i).draw(), e.each(n.data, function (t) {
                            t.draw()
                        })
                    },
                    setHoverStyle: function (t) {
                        var n = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, a = t._index,
                            o = t._model;
                        o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, a, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, a, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, a, o.borderWidth)
                    },
                    removeHoverStyle: function (t) {
                        var n = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, a = t._index,
                            o = t._model, r = this.chart.options.elements.point;
                        o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.radius, a, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, a, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, a, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, a, r.borderWidth)
                    }
                })
            }
        }, {}], 21: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: e.noop,
                    onComplete: e.noop
                }, t.Animation = t.Element.extend({
                    currentStep: null,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function (t, e, n, i) {
                        var a = this;
                        i || (t.animating = !0);
                        for (var o = 0; o < a.animations.length; ++o)if (a.animations[o].chartInstance === t)return void(a.animations[o].animationObject = e);
                        a.animations.push({
                            chartInstance: t,
                            animationObject: e
                        }), 1 === a.animations.length && a.requestAnimationFrame()
                    },
                    cancelAnimation: function (t) {
                        var n = e.findIndex(this.animations, function (e) {
                            return e.chartInstance === t
                        });
                        -1 !== n && (this.animations.splice(n, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function () {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function () {
                        var t = this, e = Date.now(), n = 0;
                        t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
                        for (var i = 0; i < t.animations.length;)null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + n, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].chartInstance.animating = !1, t.animations.splice(i, 1)) : ++i;
                        var a = Date.now(), o = (a - e) / t.frameDuration;
                        t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame()
                    }
                }
            }
        }, {}], 22: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.canvasHelpers = {};
                e.drawPoint = function (t, e, n, i, a) {
                    var o, r, s, l, d, u;
                    if ("object" == typeof e && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o))return void t.drawImage(e, i - e.width / 2, a - e.height / 2);
                    if (!(isNaN(n) || 0 >= n)) {
                        switch (e) {
                            default:
                                t.beginPath(), t.arc(i, a, n, 0, 2 * Math.PI), t.closePath(), t.fill();
                                break;
                            case"triangle":
                                t.beginPath(), r = 3 * n / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(i - r / 2, a + d / 3), t.lineTo(i + r / 2, a + d / 3), t.lineTo(i, a - 2 * d / 3), t.closePath(), t.fill();
                                break;
                            case"rect":
                                u = 1 / Math.SQRT2 * n, t.beginPath(), t.fillRect(i - u, a - u, 2 * u, 2 * u), t.strokeRect(i - u, a - u, 2 * u, 2 * u);
                                break;
                            case"rectRot":
                                u = 1 / Math.SQRT2 * n, t.beginPath(), t.moveTo(i - u, a), t.lineTo(i, a + u), t.lineTo(i + u, a), t.lineTo(i, a - u), t.closePath(), t.fill();
                                break;
                            case"cross":
                                t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                                break;
                            case"crossRot":
                                t.beginPath(), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i - s, a + l), t.lineTo(i + s, a - l), t.closePath();
                                break;
                            case"star":
                                t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), s = Math.cos(Math.PI / 4) * n, l = Math.sin(Math.PI / 4) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i - s, a + l), t.lineTo(i + s, a - l), t.closePath();
                                break;
                            case"line":
                                t.beginPath(), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                                break;
                            case"dash":
                                t.beginPath(), t.moveTo(i, a), t.lineTo(i + n, a), t.closePath()
                        }
                        t.stroke()
                    }
                }
            }
        }, {}], 23: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (n) {
                    return this.chart = n, this.config = n.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
                        get: function () {
                            return this.config.data
                        }
                    }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
                }, e.extend(t.Controller.prototype, {
                    initialize: function () {
                        var e = this;
                        return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e
                    }, clear: function () {
                        return e.clear(this.chart), this
                    }, stop: function () {
                        return t.animationService.cancelAnimation(this), this
                    }, resize: function (n) {
                        var i = this, a = i.chart, o = a.canvas, r = e.getMaximumWidth(o), s = a.aspectRatio,
                            l = i.options.maintainAspectRatio && isNaN(s) === !1 && isFinite(s) && 0 !== s ? r / s : e.getMaximumHeight(o),
                            d = a.width !== r || a.height !== l;
                        if (!d)return i;
                        o.width = a.width = r, o.height = a.height = l, e.retinaScale(a);
                        var u = {width: r, height: l};
                        return t.plugins.notify("resize", [i, u]), i.options.onResize && i.options.onResize(i, u), n || (i.stop(), i.update(i.options.responsiveAnimationDuration)), i
                    }, ensureScalesHaveIDs: function () {
                        var t = this.options, n = t.scales || {}, i = t.scale;
                        e.each(n.xAxes, function (t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), e.each(n.yAxes, function (t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    }, buildScales: function () {
                        var n = this, i = n.options, a = n.scales = {}, o = [];
                        i.scales && (o = o.concat((i.scales.xAxes || []).map(function (t) {
                            return {options: t, dtype: "category"}
                        }), (i.scales.yAxes || []).map(function (t) {
                            return {options: t, dtype: "linear"}
                        }))), i.scale && o.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0
                        }), e.each(o, function (i) {
                            var o = i.options, r = e.getValueOrDefault(o.type, i.dtype),
                                s = t.scaleService.getScaleConstructor(r);
                            if (s) {
                                var l = new s({id: o.id, options: o, ctx: n.chart.ctx, chart: n});
                                a[l.id] = l, i.isDefault && (n.scale = l)
                            }
                        }), t.scaleService.addScalesToLayout(this)
                    }, updateLayout: function () {
                        t.layoutService.update(this, this.chart.width, this.chart.height)
                    }, buildOrUpdateControllers: function () {
                        var n = this, i = [], a = [];
                        if (e.each(n.data.datasets, function (e, o) {
                                var r = n.getDatasetMeta(o);
                                r.type || (r.type = e.type || n.config.type), i.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](n, o), a.push(r.controller))
                            }, n), i.length > 1)for (var o = 1; o < i.length; o++)if (i[o] !== i[o - 1]) {
                            n.isCombo = !0;
                            break
                        }
                        return a
                    }, resetElements: function () {
                        var t = this;
                        e.each(t.data.datasets, function (e, n) {
                            t.getDatasetMeta(n).controller.reset()
                        }, t)
                    }, update: function (n, i) {
                        var a = this;
                        t.plugins.notify("beforeUpdate", [a]), a.tooltip._data = a.data;
                        var o = a.buildOrUpdateControllers();
                        e.each(a.data.datasets, function (t, e) {
                            a.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, a), t.layoutService.update(a, a.chart.width, a.chart.height), t.plugins.notify("afterScaleUpdate", [a]), e.each(o, function (t) {
                            t.reset()
                        }), a.updateDatasets(), t.plugins.notify("afterUpdate", [a]), a.render(n, i)
                    }, updateDatasets: function () {
                        var e, n, i = this;
                        if (t.plugins.notify("beforeDatasetsUpdate", [i])) {
                            for (e = 0, n = i.data.datasets.length; n > e; ++e)i.getDatasetMeta(e).controller.update();
                            t.plugins.notify("afterDatasetsUpdate", [i])
                        }
                    }, render: function (n, i) {
                        var a = this;
                        t.plugins.notify("beforeRender", [a]);
                        var o = a.options.animation;
                        if (o && ("undefined" != typeof n && 0 !== n || "undefined" == typeof n && 0 !== o.duration)) {
                            var r = new t.Animation;
                            r.numSteps = (n || o.duration) / 16.66, r.easing = o.easing, r.render = function (t, n) {
                                var i = e.easingEffects[n.easing], a = n.currentStep / n.numSteps, o = i(a);
                                t.draw(o, a, n.currentStep)
                            }, r.onAnimationProgress = o.onProgress, r.onAnimationComplete = o.onComplete, t.animationService.addAnimation(a, r, n, i)
                        } else a.draw(), o && o.onComplete && o.onComplete.call && o.onComplete.call(a);
                        return a
                    }, draw: function (n) {
                        var i = this, a = n || 1;
                        i.clear(), t.plugins.notify("beforeDraw", [i, a]), e.each(i.boxes, function (t) {
                            t.draw(i.chartArea)
                        }, i), i.scale && i.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [i, a]), e.each(i.data.datasets, function (t, e) {
                            i.isDatasetVisible(e) && i.getDatasetMeta(e).controller.draw(n)
                        }, i, !0), t.plugins.notify("afterDatasetsDraw", [i, a]), i.tooltip.transition(a).draw(), t.plugins.notify("afterDraw", [i, a])
                    }, getElementAtEvent: function (t) {
                        var n = this, i = e.getRelativePosition(t, n.chart), a = [];
                        return e.each(n.data.datasets, function (t, o) {
                            if (n.isDatasetVisible(o)) {
                                var r = n.getDatasetMeta(o);
                                e.each(r.data, function (t) {
                                    return t.inRange(i.x, i.y) ? (a.push(t), a) : void 0
                                })
                            }
                        }), a.slice(0, 1)
                    }, getElementsAtEvent: function (t) {
                        var n = this, i = e.getRelativePosition(t, n.chart), a = [], o = function () {
                            if (n.data.datasets)for (var t = 0; t < n.data.datasets.length; t++) {
                                var e = n.getDatasetMeta(t);
                                if (n.isDatasetVisible(t))for (var a = 0; a < e.data.length; a++)if (e.data[a].inRange(i.x, i.y))return e.data[a]
                            }
                        }.call(n);
                        return o ? (e.each(n.data.datasets, function (t, e) {
                            if (n.isDatasetVisible(e)) {
                                var i = n.getDatasetMeta(e), r = i.data[o._index];
                                r && !r._view.skip && a.push(r)
                            }
                        }, n), a) : a
                    }, getElementsAtXAxis: function (t) {
                        var n = this, i = e.getRelativePosition(t, n.chart), a = [], o = function () {
                            if (n.data.datasets)for (var t = 0; t < n.data.datasets.length; t++) {
                                var e = n.getDatasetMeta(t);
                                if (n.isDatasetVisible(t))for (var a = 0; a < e.data.length; a++)if (e.data[a].inLabelRange(i.x, i.y))return e.data[a]
                            }
                        }.call(n);
                        return o ? (e.each(n.data.datasets, function (t, i) {
                            if (n.isDatasetVisible(i)) {
                                var r = n.getDatasetMeta(i), s = e.findIndex(r.data, function (t) {
                                    return o._model.x === t._model.x
                                });
                                -1 === s || r.data[s]._view.skip || a.push(r.data[s])
                            }
                        }, n), a) : a
                    }, getElementsAtEventForMode: function (t, e) {
                        var n = this;
                        switch (e) {
                            case"single":
                                return n.getElementAtEvent(t);
                            case"label":
                                return n.getElementsAtEvent(t);
                            case"dataset":
                                return n.getDatasetAtEvent(t);
                            case"x-axis":
                                return n.getElementsAtXAxis(t);
                            default:
                                return t
                        }
                    }, getDatasetAtEvent: function (t) {
                        var e = this.getElementAtEvent(t);
                        return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e
                    }, getDatasetMeta: function (t) {
                        var e = this, n = e.data.datasets[t];
                        n._meta || (n._meta = {});
                        var i = n._meta[e.id];
                        return i || (i = n._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    }, getVisibleDatasetCount: function () {
                        for (var t = 0, e = 0, n = this.data.datasets.length; n > e; ++e)this.isDatasetVisible(e) && t++;
                        return t
                    }, isDatasetVisible: function (t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroy: function () {
                        var n = this;
                        n.stop(), n.clear(), e.unbindEvents(n, n.events), e.removeResizeListener(n.chart.canvas.parentNode);
                        var i = n.chart.canvas;
                        i.width = n.chart.width, i.height = n.chart.height, void 0 !== n.chart.originalDevicePixelRatio && n.chart.ctx.scale(1 / n.chart.originalDevicePixelRatio, 1 / n.chart.originalDevicePixelRatio), i.style.width = n.chart.originalCanvasStyleWidth, i.style.height = n.chart.originalCanvasStyleHeight, t.plugins.notify("destroy", [n]), delete t.instances[n.id]
                    }, toBase64Image: function () {
                        return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                    }, initToolTip: function () {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e.chart,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    }, bindEvents: function () {
                        var t = this;
                        e.bindEvents(t, t.options.events, function (e) {
                            t.eventHandler(e)
                        })
                    }, updateHoverStyle: function (t, e, n) {
                        var i, a, o, r = n ? "setHoverStyle" : "removeHoverStyle";
                        switch (e) {
                            case"single":
                                t = [t[0]];
                                break;
                            case"label":
                            case"dataset":
                            case"x-axis":
                                break;
                            default:
                                return
                        }
                        for (a = 0, o = t.length; o > a; ++a)i = t[a], i && this.getDatasetMeta(i._datasetIndex).controller[r](i)
                    }, eventHandler: function (t) {
                        var n = this, i = n.tooltip, a = n.options || {}, o = a.hover, r = a.tooltips;
                        return n.lastActive = n.lastActive || [], n.lastTooltipActive = n.lastTooltipActive || [], "mouseout" === t.type ? (n.active = [], n.tooltipActive = []) : (n.active = n.getElementsAtEventForMode(t, o.mode), n.tooltipActive = n.getElementsAtEventForMode(t, r.mode)), o.onHover && o.onHover.call(n, n.active), ("mouseup" === t.type || "click" === t.type) && (a.onClick && a.onClick.call(n, t, n.active), n.legend && n.legend.handleEvent && n.legend.handleEvent(t)), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), (r.enabled || r.custom) && (i.initialize(), i._active = n.tooltipActive, i.update(!0)), i.pivot(), n.animating || e.arrayEquals(n.active, n.lastActive) && e.arrayEquals(n.tooltipActive, n.lastTooltipActive) || (n.stop(), (r.enabled || r.custom) && i.update(!0), n.render(o.animationDuration, !0)), n.lastActive = n.active, n.lastTooltipActive = n.tooltipActive, n
                    }
                })
            }
        }, {}], 24: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = e.noop;
                t.DatasetController = function (t, e) {
                    this.initialize.call(this, t, e)
                }, e.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function (t, e) {
                        var n = this;
                        n.chart = t, n.index = e, n.linkScales(), n.addElements()
                    },
                    updateIndex: function (t) {
                        this.index = t
                    },
                    linkScales: function () {
                        var t = this, e = t.getMeta(), n = t.getDataset();
                        null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function (t) {
                        return this.chart.scales[t]
                    },
                    reset: function () {
                        this.update(!0)
                    },
                    createMetaDataset: function () {
                        var t = this, e = t.datasetElementType;
                        return e && new e({_chart: t.chart.chart, _datasetIndex: t.index})
                    },
                    createMetaData: function (t) {
                        var e = this, n = e.dataElementType;
                        return n && new n({_chart: e.chart.chart, _datasetIndex: e.index, _index: t})
                    },
                    addElements: function () {
                        var t, e, n = this, i = n.getMeta(), a = n.getDataset().data || [], o = i.data;
                        for (t = 0, e = a.length; e > t; ++t)o[t] = o[t] || n.createMetaData(i, t);
                        i.dataset = i.dataset || n.createMetaDataset()
                    },
                    addElementAndReset: function (t) {
                        var e = this, n = e.createMetaData(t);
                        e.getMeta().data.splice(t, 0, n), e.updateElement(n, t, !0)
                    },
                    buildOrUpdateElements: function () {
                        var t = this.getMeta(), e = t.data, n = this.getDataset().data.length, i = e.length;
                        if (i > n) e.splice(n, i - n); else if (n > i)for (var a = i; n > a; ++a)this.addElementAndReset(a)
                    },
                    update: n,
                    draw: function (t) {
                        var n = t || 1;
                        e.each(this.getMeta().data, function (t) {
                            t.transition(n).draw()
                        })
                    },
                    removeHoverStyle: function (t, n) {
                        var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {},
                            r = e.getValueAtIndexOrDefault, s = t._model;
                        s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, n.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, n.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, n.borderWidth)
                    },
                    setHoverStyle: function (t) {
                        var n = this.chart.data.datasets[t._datasetIndex], i = t._index, a = t.custom || {},
                            o = e.getValueAtIndexOrDefault, r = e.getHoverColor, s = t._model;
                        s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(n.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(n.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(n.hoverBorderWidth, i, s.borderWidth)
                    }
                }), t.DatasetController.extend = e.inherits
            }
        }, {}], 25: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.elements = {}, t.Element = function (t) {
                    e.extend(this, t), this.initialize.apply(this, arguments)
                }, e.extend(t.Element.prototype, {
                    initialize: function () {
                        this.hidden = !1
                    }, pivot: function () {
                        var t = this;
                        return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
                    }, transition: function (t) {
                        var n = this;
                        return n._view || (n._view = e.clone(n._model)), 1 === t ? (n._view = n._model, n._start = null, n) : (n._start || n.pivot(), e.each(n._model, function (i, a) {
                            if ("_" === a[0]); else if (n._view.hasOwnProperty(a))if (i === n._view[a]); else if ("string" == typeof i)try {
                                var o = e.color(n._model[a]).mix(e.color(n._start[a]), t);
                                n._view[a] = o.rgbString()
                            } catch (r) {
                                n._view[a] = i
                            } else if ("number" == typeof i) {
                                var s = void 0 !== n._start[a] && isNaN(n._start[a]) === !1 ? n._start[a] : 0;
                                n._view[a] = (n._model[a] - s) * t + s
                            } else n._view[a] = i; else"number" != typeof i || isNaN(n._view[a]) ? n._view[a] = i : n._view[a] = i * t
                        }, n), n)
                    }, tooltipPosition: function () {
                        return {x: this._model.x, y: this._model.y}
                    }, hasValue: function () {
                        return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                    }
                }), t.Element.extend = e.inherits
            }
        }, {}], 26: [function (t, e, n) {
            "use strict";
            var i = t(2);
            e.exports = function (t) {
                function e(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 != t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function n(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }

                function a(t, i, a) {
                    var o = document.defaultView, r = t.parentNode, s = o.getComputedStyle(t)[i],
                        l = o.getComputedStyle(r)[i], d = n(s), u = n(l), c = Number.POSITIVE_INFINITY;
                    return d || u ? Math.min(d ? e(s, t, a) : c, u ? e(l, r, a) : c) : "none"
                }

                var o = t.helpers = {};
                o.each = function (t, e, n, i) {
                    var a, r;
                    if (o.isArray(t))if (r = t.length, i)for (a = r - 1; a >= 0; a--)e.call(n, t[a], a); else for (a = 0; r > a; a++)e.call(n, t[a], a); else if ("object" == typeof t) {
                        var s = Object.keys(t);
                        for (r = s.length, a = 0; r > a; a++)e.call(n, t[s[a]], s[a])
                    }
                }, o.clone = function (t) {
                    var e = {};
                    return o.each(t, function (t, n) {
                        o.isArray(t) ? e[n] = t.slice(0) : "object" == typeof t && null !== t ? e[n] = o.clone(t) : e[n] = t
                    }), e
                }, o.extend = function (t) {
                    for (var e = function (e, n) {
                        t[n] = e
                    }, n = 1, i = arguments.length; i > n; n++)o.each(arguments[n], e);
                    return t
                }, o.configMerge = function (e) {
                    var n = o.clone(e);
                    return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
                        o.each(e, function (e, i) {
                            if ("scales" === i) n[i] = o.scaleMerge(n.hasOwnProperty(i) ? n[i] : {}, e); else if ("scale" === i) n[i] = o.configMerge(n.hasOwnProperty(i) ? n[i] : {}, t.scaleService.getScaleDefaults(e.type), e); else if (n.hasOwnProperty(i) && o.isArray(n[i]) && o.isArray(e)) {
                                var a = n[i];
                                o.each(e, function (t, e) {
                                    e < a.length ? "object" == typeof a[e] && null !== a[e] && "object" == typeof t && null !== t ? a[e] = o.configMerge(a[e], t) : a[e] = t : a.push(t)
                                })
                            } else n.hasOwnProperty(i) && "object" == typeof n[i] && null !== n[i] && "object" == typeof e ? n[i] = o.configMerge(n[i], e) : n[i] = e
                        })
                    }), n
                }, o.scaleMerge = function (e, n) {
                    var i = o.clone(e);
                    return o.each(n, function (e, n) {
                        "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? o.each(e, function (e, a) {
                            var r = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                                s = t.scaleService.getScaleDefaults(r);
                            a >= i[n].length || !i[n][a].type ? i[n].push(o.configMerge(s, e)) : e.type && e.type !== i[n][a].type ? i[n][a] = o.configMerge(i[n][a], s, e) : i[n][a] = o.configMerge(i[n][a], e)
                        }) : (i[n] = [], o.each(e, function (e) {
                            var a = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                            i[n].push(o.configMerge(t.scaleService.getScaleDefaults(a), e))
                        })) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof e ? i[n] = o.configMerge(i[n], e) : i[n] = e
                    }), i
                }, o.getValueAtIndexOrDefault = function (t, e, n) {
                    return void 0 === t || null === t ? n : o.isArray(t) ? e < t.length ? t[e] : n : t
                }, o.getValueOrDefault = function (t, e) {
                    return void 0 === t ? e : t
                }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
                    return t.indexOf(e)
                } : function (t, e) {
                    for (var n = 0, i = t.length; i > n; ++n)if (t[n] === e)return n;
                    return -1
                }, o.where = function (t, e) {
                    if (o.isArray(t) && Array.prototype.filter)return t.filter(e);
                    var n = [];
                    return o.each(t, function (t) {
                        e(t) && n.push(t)
                    }), n
                }, o.findIndex = Array.prototype.findIndex ? function (t, e, n) {
                    return t.findIndex(e, n)
                } : function (t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, a = t.length; a > i; ++i)if (e.call(n, t[i], i, t))return i;
                    return -1
                }, o.findNextWhere = function (t, e, n) {
                    (void 0 === n || null === n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var a = t[i];
                        if (e(a))return a
                    }
                }, o.findPreviousWhere = function (t, e, n) {
                    (void 0 === n || null === n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var a = t[i];
                        if (e(a))return a
                    }
                }, o.inherits = function (t) {
                    var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return e.apply(this, arguments)
                    }, i = function () {
                        this.constructor = n
                    };
                    return i.prototype = e.prototype, n.prototype = new i, n.extend = o.inherits, t && o.extend(n.prototype, t), n.__super__ = e.prototype, n
                }, o.noop = function () {
                }, o.uid = function () {
                    var t = 0;
                    return function () {
                        return t++
                    }
                }(), o.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function (t, e, n) {
                    return Math.abs(t - e) < n
                }, o.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                }, o.log10 = Math.log10 ? function (t) {
                    return Math.log10(t)
                } : function (t) {
                    return Math.log(t) / Math.LN10
                }, o.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function (t, e) {
                    var n = e.x - t.x, i = e.y - t.y, a = Math.sqrt(n * n + i * i), o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {angle: o, distance: a}
                }, o.aliasPixel = function (t) {
                    return t % 2 === 0 ? 0 : .5
                }, o.splineCurve = function (t, e, n, i) {
                    var a = t.skip ? e : t, o = e, r = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)), d = s / (s + l),
                        u = l / (s + l);
                    d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
                    var c = i * d, h = i * u;
                    return {
                        previous: {x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y)},
                        next: {x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y)}
                    }
                }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
                    var e, n, i, a, r = (t || []).map(function (t) {
                        return {model: t._model, deltaK: 0, mK: 0}
                    }), s = r.length;
                    for (e = 0; s > e; ++e)i = r[e], i.model.skip || (n = e > 0 ? r[e - 1] : null, a = s - 1 > e ? r[e + 1] : null, a && !a.model.skip && (i.deltaK = (a.model.y - i.model.y) / (a.model.x - i.model.x)), !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) != this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2);
                    var l, d, u, c;
                    for (e = 0; s - 1 > e; ++e)i = r[e], a = r[e + 1], i.model.skip || a.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (l = i.mK / i.deltaK, d = a.mK / i.deltaK, c = Math.pow(l, 2) + Math.pow(d, 2), 9 >= c || (u = 3 / Math.sqrt(c), i.mK = l * u * i.deltaK, a.mK = d * u * i.deltaK)));
                    var h;
                    for (e = 0; s > e; ++e)i = r[e], i.model.skip || (n = e > 0 ? r[e - 1] : null, a = s - 1 > e ? r[e + 1] : null, n && !n.model.skip && (h = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - h, i.model.controlPointPreviousY = i.model.y - h * i.mK), a && !a.model.skip && (h = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + h, i.model.controlPointNextY = i.model.y + h * i.mK))
                }, o.nextItem = function (t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function (t, e, n) {
                    return n ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
                }, o.niceNum = function (t, e) {
                    var n, i = Math.floor(o.log10(t)), a = t / Math.pow(10, i);
                    return n = e ? 1.5 > a ? 1 : 3 > a ? 2 : 7 > a ? 5 : 10 : 1 >= a ? 1 : 2 >= a ? 2 : 5 >= a ? 5 : 10, n * Math.pow(10, i)
                };
                var r = o.easingEffects = {
                    linear: function (t) {
                        return t
                    }, easeInQuad: function (t) {
                        return t * t
                    }, easeOutQuad: function (t) {
                        return -1 * t * (t - 2)
                    }, easeInOutQuad: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    }, easeInCubic: function (t) {
                        return t * t * t
                    }, easeOutCubic: function (t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    }, easeInOutCubic: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    }, easeInQuart: function (t) {
                        return t * t * t * t
                    }, easeOutQuart: function (t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    }, easeInOutQuart: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    }, easeInQuint: function (t) {
                        return 1 * (t /= 1) * t * t * t * t
                    }, easeOutQuint: function (t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    }, easeInOutQuint: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    }, easeInSine: function (t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    }, easeOutSine: function (t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    }, easeInOutSine: function (t) {
                        return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                    }, easeInExpo: function (t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    }, easeOutExpo: function (t) {
                        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                    }, easeInOutExpo: function (t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    }, easeInCirc: function (t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    }, easeOutCirc: function (t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    }, easeInOutCirc: function (t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    }, easeInElastic: function (t) {
                        var e = 1.70158, n = 0, i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
                    }, easeOutElastic: function (t) {
                        var e = 1.70158, n = 0, i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
                    }, easeInOutElastic: function (t) {
                        var e = 1.70158, n = 0, i = 1;
                        return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
                    }, easeInBack: function (t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    }, easeOutBack: function (t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    }, easeInOutBack: function (t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    }, easeInBounce: function (t) {
                        return 1 - r.easeOutBounce(1 - t)
                    }, easeOutBounce: function (t) {
                        return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }, easeInOutBounce: function (t) {
                        return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                    }
                };
                o.requestAnimFrame = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }
                }(), o.cancelAnimFrame = function () {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                            return window.clearTimeout(t, 1e3 / 60)
                        }
                }(), o.getRelativePosition = function (t, e) {
                    var n, i, a = t.originalEvent || t, r = t.currentTarget || t.srcElement,
                        s = r.getBoundingClientRect(), l = a.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = a.clientX, i = a.clientY);
                    var d = parseFloat(o.getStyle(r, "padding-left")), u = parseFloat(o.getStyle(r, "padding-top")),
                        c = parseFloat(o.getStyle(r, "padding-right")), h = parseFloat(o.getStyle(r, "padding-bottom")),
                        f = s.right - s.left - d - c, g = s.bottom - s.top - u - h;
                    return n = Math.round((n - s.left - d) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - u) / g * r.height / e.currentDevicePixelRatio), {
                        x: n,
                        y: i
                    }
                }, o.addEvent = function (t, e, n) {
                    t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
                }, o.removeEvent = function (t, e, n) {
                    t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = o.noop
                }, o.bindEvents = function (t, e, n) {
                    var i = t.events = t.events || {};
                    o.each(e, function (e) {
                        i[e] = function () {
                            n.apply(t, arguments)
                        }, o.addEvent(t.chart.canvas, e, i[e])
                    })
                }, o.unbindEvents = function (t, e) {
                    var n = t.chart.canvas;
                    o.each(e, function (t, e) {
                        o.removeEvent(n, e, t)
                    })
                }, o.getConstraintWidth = function (t) {
                    return a(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function (t) {
                    return a(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function (t) {
                    var e = t.parentNode,
                        n = parseInt(o.getStyle(e, "padding-left")) + parseInt(o.getStyle(e, "padding-right")),
                        i = e.clientWidth - n, a = o.getConstraintWidth(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, o.getMaximumHeight = function (t) {
                    var e = t.parentNode,
                        n = parseInt(o.getStyle(e, "padding-top")) + parseInt(o.getStyle(e, "padding-bottom")),
                        i = e.clientHeight - n, a = o.getConstraintHeight(t);
                    return isNaN(a) ? i : Math.min(i, a)
                }, o.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function (t) {
                    var e = t.ctx, n = t.canvas, i = n.width, a = n.height,
                        o = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                    1 !== o && (n.height = a * o, n.width = i * o, e.scale(o, o), t.originalDevicePixelRatio = t.originalDevicePixelRatio || o), n.style.width = i + "px", n.style.height = a + "px"
                }, o.clear = function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, o.fontString = function (t, e, n) {
                    return e + " " + t + "px " + n
                }, o.longestText = function (t, e, n, i) {
                    i = i || {};
                    var a = i.data = i.data || {}, r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
                    var s = 0;
                    o.each(n, function (e) {
                        void 0 !== e && null !== e && o.isArray(e) !== !0 ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function (e) {
                                void 0 === e || null === e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
                            })
                    });
                    var l = r.length / 2;
                    if (l > n.length) {
                        for (var d = 0; l > d; d++)delete a[r[d]];
                        r.splice(0, l)
                    }
                    return s
                }, o.measureText = function (t, e, n, i, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, n.push(a)), o > i && (i = o), i
                }, o.numberOfLabelLines = function (t) {
                    var e = 1;
                    return o.each(t, function (t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, o.drawRoundedRectangle = function (t, e, n, i, a, o) {
                    t.beginPath(), t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + o), t.lineTo(e + i, n + a - o), t.quadraticCurveTo(e + i, n + a, e + i - o, n + a), t.lineTo(e + o, n + a), t.quadraticCurveTo(e, n + a, e, n + a - o), t.lineTo(e, n + o), t.quadraticCurveTo(e, n, e + o, n), t.closePath()
                }, o.color = function (e) {
                    return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : e
                }, o.addResizeListener = function (t, e) {
                    var n = document.createElement("iframe"), i = "chartjs-hidden-iframe";
                    n.classlist ? n.classlist.add(i) : n.setAttribute("class", i), n.tabIndex = -1;
                    var a = n.style;
                    a.width = "100%", a.display = "block", a.border = 0, a.height = 0, a.margin = 0, a.position = "absolute", a.left = 0, a.right = 0, a.top = 0, a.bottom = 0, t.insertBefore(n, t.firstChild), (n.contentWindow || n).onresize = function () {
                        e && e()
                    }
                }, o.removeResizeListener = function (t) {
                    var e = t.querySelector(".chartjs-hidden-iframe");
                    e && e.parentNode.removeChild(e)
                }, o.isArray = Array.isArray ? function (t) {
                    return Array.isArray(t)
                } : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o.arrayEquals = function (t, e) {
                    var n, i, a, r;
                    if (!t || !e || t.length != e.length)return !1;
                    for (n = 0, i = t.length; i > n; ++n)if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
                        if (!o.arrayEquals(a, r))return !1
                    } else if (a != r)return !1;
                    return !0
                }, o.callCallback = function (t, e, n) {
                    t && "function" == typeof t.call && t.apply(n, e)
                }, o.getHoverColor = function (t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {2: 2}], 27: [function (t, e, n) {
            "use strict";
            e.exports = function () {
                var t = function (e, n) {
                    var i = this, a = t.helpers;
                    return i.config = n || {data: {datasets: []}}, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), i.ctx = e, i.canvas = e.canvas, e.canvas.style.display = e.canvas.style.display || "block", i.width = e.canvas.width || parseInt(a.getStyle(e.canvas, "width"), 10) || a.getMaximumWidth(e.canvas), i.height = e.canvas.height || parseInt(a.getStyle(e.canvas, "height"), 10) || a.getMaximumHeight(e.canvas), i.aspectRatio = i.width / i.height, (isNaN(i.aspectRatio) || isFinite(i.aspectRatio) === !1) && (i.aspectRatio = void 0 !== n.aspectRatio ? n.aspectRatio : 2), i.originalCanvasStyleWidth = e.canvas.style.width, i.originalCanvasStyleHeight = e.canvas.style.height, a.retinaScale(i), i.controller = new t.Controller(i), a.addResizeListener(e.canvas.parentNode, function () {
                        i.controller && i.controller.config.options.responsive && i.controller.resize()
                    }), i.controller ? i.controller : i
                };
                return t.defaults = {
                    global: {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {onHover: null, mode: "single", animationDuration: 400},
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        legendCallback: function (t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var n = 0; n < t.data.datasets.length; n++)e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    }
                }, t.Chart = t, t
            }
        }, {}], 28: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.layoutService = {
                    defaults: {}, addBox: function (t, e) {
                        t.boxes || (t.boxes = []), t.boxes.push(e)
                    }, removeBox: function (t, e) {
                        t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                    }, update: function (t, n, i) {
                        function a(t) {
                            var e, n = t.isHorizontal();
                            n ? (e = t.update(t.options.fullWidth ? p : k, x), S -= e.height) : (e = t.update(y, b), k -= e.width), _.push({
                                horizontal: n,
                                minSize: e,
                                box: t
                            })
                        }

                        function o(t) {
                            var n = e.findNextWhere(_, function (e) {
                                return e.box === t
                            });
                            if (n)if (t.isHorizontal()) {
                                var i = {left: w, right: M, top: 0, bottom: 0};
                                t.update(t.options.fullWidth ? p : k, m / 2, i)
                            } else t.update(n.minSize.width, S)
                        }

                        function r(t) {
                            var n = e.findNextWhere(_, function (e) {
                                return e.box === t
                            }), i = {left: 0, right: 0, top: D, bottom: C};
                            n && t.update(n.minSize.width, S, i)
                        }

                        function s(t) {
                            t.isHorizontal() ? (t.left = t.options.fullWidth ? l : w, t.right = t.options.fullWidth ? n - l : w + k, t.top = A, t.bottom = A + t.height, A = t.bottom) : (t.left = F, t.right = F + t.width, t.top = D, t.bottom = D + S, F = t.right)
                        }

                        if (t) {
                            var l = 0, d = 0, u = e.where(t.boxes, function (t) {
                                return "left" === t.options.position
                            }), c = e.where(t.boxes, function (t) {
                                return "right" === t.options.position
                            }), h = e.where(t.boxes, function (t) {
                                return "top" === t.options.position
                            }), f = e.where(t.boxes, function (t) {
                                return "bottom" === t.options.position
                            }), g = e.where(t.boxes, function (t) {
                                return "chartArea" === t.options.position
                            });
                            h.sort(function (t, e) {
                                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                            }), f.sort(function (t, e) {
                                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                            });
                            var p = n - 2 * l, m = i - 2 * d, v = p / 2, b = m / 2, y = (n - v) / (u.length + c.length),
                                x = (i - b) / (h.length + f.length), k = p, S = m, _ = [];
                            e.each(u.concat(c, h, f), a);
                            var w = l, M = l, D = d, C = d;
                            e.each(u.concat(c), o), e.each(u, function (t) {
                                w += t.width
                            }), e.each(c, function (t) {
                                M += t.width
                            }), e.each(h.concat(f), o), e.each(h, function (t) {
                                D += t.height
                            }), e.each(f, function (t) {
                                C += t.height
                            }), e.each(u.concat(c), r), w = l, M = l, D = d, C = d, e.each(u, function (t) {
                                w += t.width
                            }), e.each(c, function (t) {
                                M += t.width
                            }), e.each(h, function (t) {
                                D += t.height
                            }), e.each(f, function (t) {
                                C += t.height
                            });
                            var T = i - D - C, P = n - w - M;
                            (P !== k || T !== S) && (e.each(u, function (t) {
                                t.height = T
                            }), e.each(c, function (t) {
                                t.height = T
                            }), e.each(h, function (t) {
                                t.options.fullWidth || (t.width = P)
                            }), e.each(f, function (t) {
                                t.options.fullWidth || (t.width = P)
                            }), S = T, k = P);
                            var F = l, A = d;
                            e.each(u.concat(h), s), F += k, A += S, e.each(c, s), e.each(f, s), t.chartArea = {
                                left: w,
                                top: D,
                                right: w + k,
                                bottom: D + S
                            }, e.each(g, function (e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S)
                            })
                        }
                    }
                }
            }
        }, {}], 29: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = e.noop;
                t.defaults.global.legend = {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    onClick: function (t, e) {
                        var n = e.datasetIndex, i = this.chart, a = i.getDatasetMeta(n);
                        a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (t) {
                            var n = t.data;
                            return e.isArray(n.datasets) ? n.datasets.map(function (n, i) {
                                return {
                                    text: n.label,
                                    fillStyle: e.isArray(n.backgroundColor) ? n.backgroundColor[0] : n.backgroundColor,
                                    hidden: !t.isDatasetVisible(i),
                                    lineCap: n.borderCapStyle,
                                    lineDash: n.borderDash,
                                    lineDashOffset: n.borderDashOffset,
                                    lineJoin: n.borderJoinStyle,
                                    lineWidth: n.borderWidth,
                                    strokeStyle: n.borderColor,
                                    pointStyle: n.pointStyle,
                                    datasetIndex: i
                                }
                            }, this) : []
                        }
                    }
                }, t.Legend = t.Element.extend({
                    initialize: function (t) {
                        e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    }, beforeUpdate: n, update: function (t, e, n) {
                        var i = this;
                        return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                    }, afterUpdate: n, beforeSetDimensions: n, setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    }, afterSetDimensions: n, beforeBuildLabels: n, buildLabels: function () {
                        var t = this;
                        t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse()
                    }, afterBuildLabels: n, beforeFit: n, fit: function () {
                        var n = this, i = n.options, a = i.labels, o = i.display, r = n.ctx, s = t.defaults.global,
                            l = e.getValueOrDefault, d = l(a.fontSize, s.defaultFontSize),
                            u = l(a.fontStyle, s.defaultFontStyle), c = l(a.fontFamily, s.defaultFontFamily),
                            h = e.fontString(d, u, c), f = n.legendHitBoxes = [], g = n.minSize, p = n.isHorizontal();
                        if (p ? (g.width = n.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = n.maxHeight), o)if (r.font = h, p) {
                            var m = n.lineWidths = [0], v = n.legendItems.length ? d + a.padding : 0;
                            r.textAlign = "left", r.textBaseline = "top", e.each(n.legendItems, function (t, e) {
                                var i = a.usePointStyle ? d * Math.sqrt(2) : a.boxWidth,
                                    o = i + d / 2 + r.measureText(t.text).width;
                                m[m.length - 1] + o + a.padding >= n.width && (v += d + a.padding, m[m.length] = n.left), f[e] = {
                                    left: 0,
                                    top: 0,
                                    width: o,
                                    height: d
                                }, m[m.length - 1] += o + a.padding
                            }), g.height += v
                        } else {
                            var b = a.padding, y = n.columnWidths = [], x = a.padding, k = 0, S = 0, _ = d + b;
                            e.each(n.legendItems, function (t, e) {
                                var n = a.usePointStyle ? 2 * a.boxWidth : a.boxWidth,
                                    i = n + d / 2 + r.measureText(t.text).width;
                                S + _ > g.height && (x += k + a.padding, y.push(k), k = 0, S = 0), k = Math.max(k, i), S += _, f[e] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: d
                                }
                            }), x += k, y.push(k), g.width += x
                        }
                        n.width = g.width, n.height = g.height
                    }, afterFit: n, isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    }, draw: function () {
                        var n = this, i = n.options, a = i.labels, o = t.defaults.global, r = o.elements.line,
                            s = n.width, l = n.lineWidths;
                        if (i.display) {
                            var d, u = n.ctx, c = e.getValueOrDefault, h = c(a.fontColor, o.defaultFontColor),
                                f = c(a.fontSize, o.defaultFontSize), g = c(a.fontStyle, o.defaultFontStyle),
                                p = c(a.fontFamily, o.defaultFontFamily), m = e.fontString(f, g, p);
                            u.textAlign = "left", u.textBaseline = "top", u.lineWidth = .5, u.strokeStyle = h, u.fillStyle = h, u.font = m;
                            var v = a.boxWidth, b = n.legendHitBoxes, y = function (e, n, a) {
                                if (!(isNaN(v) || 0 >= v)) {
                                    if (u.save(), u.fillStyle = c(a.fillStyle, o.defaultColor), u.lineCap = c(a.lineCap, r.borderCapStyle), u.lineDashOffset = c(a.lineDashOffset, r.borderDashOffset), u.lineJoin = c(a.lineJoin, r.borderJoinStyle), u.lineWidth = c(a.lineWidth, r.borderWidth), u.strokeStyle = c(a.strokeStyle, o.defaultColor), u.setLineDash && u.setLineDash(c(a.lineDash, r.borderDash)), i.labels && i.labels.usePointStyle) {
                                        var s = f * Math.SQRT2 / 2, l = s / Math.SQRT2, d = e + l, h = n + l;
                                        t.canvasHelpers.drawPoint(u, a.pointStyle, s, d, h)
                                    } else u.strokeRect(e, n, v, f), u.fillRect(e, n, v, f);
                                    u.restore()
                                }
                            }, x = function (t, e, n, i) {
                                u.fillText(n.text, v + f / 2 + t, e), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(v + f / 2 + t, e + f / 2), u.lineTo(v + f / 2 + t + i, e + f / 2), u.stroke())
                            }, k = n.isHorizontal();
                            d = k ? {x: n.left + (s - l[0]) / 2, y: n.top + a.padding, line: 0} : {
                                x: n.left + a.padding,
                                y: n.top + a.padding,
                                line: 0
                            };
                            var S = f + a.padding;
                            e.each(n.legendItems, function (t, e) {
                                var i = u.measureText(t.text).width,
                                    o = a.usePointStyle ? f + f / 2 + i : v + f / 2 + i, r = d.x, c = d.y;
                                k ? r + o >= s && (c = d.y += S, d.line++, r = d.x = n.left + (s - l[d.line]) / 2) : c + S > n.bottom && (r = d.x = r + n.columnWidths[d.line] + a.padding, c = d.y = n.top, d.line++), y(r, c, t), b[e].left = r, b[e].top = c, x(r, c, t, i), k ? d.x += o + a.padding : d.y += S
                            })
                        }
                    }, handleEvent: function (t) {
                        var n = this, i = e.getRelativePosition(t, n.chart.chart), a = i.x, o = i.y, r = n.options;
                        if (a >= n.left && a <= n.right && o >= n.top && o <= n.bottom)for (var s = n.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var d = s[l];
                            if (a >= d.left && a <= d.left + d.width && o >= d.top && o <= d.top + d.height) {
                                r.onClick && r.onClick.call(n, t, n.legendItems[l]);
                                break
                            }
                        }
                    }
                }), t.plugins.register({
                    beforeInit: function (e) {
                        var n = e.options, i = n.legend;
                        i && (e.legend = new t.Legend({
                            ctx: e.chart.ctx,
                            options: i,
                            chart: e
                        }), t.layoutService.addBox(e, e.legend))
                    }
                })
            }
        }, {}], 30: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers.noop;
                t.plugins = {
                    _plugins: [], register: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            -1 === e.indexOf(t) && e.push(t)
                        })
                    }, unregister: function (t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function (t) {
                            var n = e.indexOf(t);
                            -1 !== n && e.splice(n, 1)
                        })
                    }, clear: function () {
                        this._plugins = []
                    }, count: function () {
                        return this._plugins.length
                    }, getAll: function () {
                        return this._plugins
                    }, notify: function (t, e) {
                        var n, i, a = this._plugins, o = a.length;
                        for (n = 0; o > n; ++n)if (i = a[n], "function" == typeof i[t] && i[t].apply(i, e || []) === !1)return !1;
                        return !0
                    }
                }, t.PluginBase = t.Element.extend({
                    beforeInit: e,
                    afterInit: e,
                    beforeUpdate: e,
                    afterUpdate: e,
                    beforeDraw: e,
                    afterDraw: e,
                    destroy: e
                }), t.pluginService = t.plugins
            }
        }, {}], 31: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.scale = {
                    display: !0,
                    position: "left",
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {labelString: "", display: !1},
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 10,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: function (t) {
                            return e.isArray(t) ? t : "" + t
                        }
                    }
                }, t.Scale = t.Element.extend({
                    beforeUpdate: function () {
                        e.callCallback(this.options.beforeUpdate, [this])
                    },
                    update: function (t, n, i) {
                        var a = this;
                        return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = n, a.margins = e.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i), a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                    },
                    afterUpdate: function () {
                        e.callCallback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function () {
                        e.callCallback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function () {
                        e.callCallback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function () {
                        e.callCallback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: e.noop,
                    afterDataLimits: function () {
                        e.callCallback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function () {
                        e.callCallback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: e.noop,
                    afterBuildTicks: function () {
                        e.callCallback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function () {
                        e.callCallback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function () {
                        var t = this;
                        t.ticks = t.ticks.map(function (e, n, i) {
                            return t.options.ticks.userCallback ? t.options.ticks.userCallback(e, n, i) : t.options.ticks.callback(e, n, i)
                        }, t)
                    },
                    afterTickToLabelConversion: function () {
                        e.callCallback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function () {
                        e.callCallback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function () {
                        var n = this, i = n.ctx, a = t.defaults.global, o = n.options.ticks,
                            r = e.getValueOrDefault(o.fontSize, a.defaultFontSize),
                            s = e.getValueOrDefault(o.fontStyle, a.defaultFontStyle),
                            l = e.getValueOrDefault(o.fontFamily, a.defaultFontFamily), d = e.fontString(r, s, l);
                        i.font = d;
                        var u, c = i.measureText(n.ticks[0]).width,
                            h = i.measureText(n.ticks[n.ticks.length - 1]).width;
                        if (n.labelRotation = o.minRotation || 0, n.paddingRight = 0, n.paddingLeft = 0, n.options.display && n.isHorizontal()) {
                            n.paddingRight = h / 2 + 3, n.paddingLeft = c / 2 + 3, n.longestTextCache || (n.longestTextCache = {});
                            for (var f, g, p = e.longestText(i, d, n.ticks, n.longestTextCache), m = p, v = n.getPixelForTick(1) - n.getPixelForTick(0) - 6; m > v && n.labelRotation < o.maxRotation;) {
                                if (f = Math.cos(e.toRadians(n.labelRotation)), g = Math.sin(e.toRadians(n.labelRotation)), u = f * c, u + r / 2 > n.yLabelWidth && (n.paddingLeft = u + r / 2), n.paddingRight = r / 2, g * p > n.maxHeight) {
                                    n.labelRotation--;
                                    break
                                }
                                n.labelRotation++, m = f * p
                            }
                        }
                        n.margins && (n.paddingLeft = Math.max(n.paddingLeft - n.margins.left, 0), n.paddingRight = Math.max(n.paddingRight - n.margins.right, 0))
                    },
                    afterCalculateTickRotation: function () {
                        e.callCallback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function () {
                        e.callCallback(this.options.beforeFit, [this])
                    },
                    fit: function () {
                        var n = this, i = n.minSize = {width: 0, height: 0}, a = n.options, o = t.defaults.global,
                            r = a.ticks, s = a.scaleLabel, l = a.gridLines, d = a.display, u = n.isHorizontal(),
                            c = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                            h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                            f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily), g = e.fontString(c, h, f),
                            p = e.getValueOrDefault(s.fontSize, o.defaultFontSize), m = a.gridLines.tickMarkLength;
                        if (u ? i.width = n.isFullWidth() ? n.maxWidth - n.margins.left - n.margins.right : n.maxWidth : i.width = d && l.drawTicks ? m : 0, u ? i.height = d && l.drawTicks ? m : 0 : i.height = n.maxHeight, s.display && d && (u ? i.height += 1.5 * p : i.width += 1.5 * p), r.display && d) {
                            n.longestTextCache || (n.longestTextCache = {});
                            var v = e.longestText(n.ctx, g, n.ticks, n.longestTextCache),
                                b = e.numberOfLabelLines(n.ticks), y = .5 * c;
                            if (u) {
                                n.longestLabelWidth = v;
                                var x = Math.sin(e.toRadians(n.labelRotation)) * n.longestLabelWidth + c * b + y * b;
                                i.height = Math.min(n.maxHeight, i.height + x), n.ctx.font = g;
                                var k = n.ctx.measureText(n.ticks[0]).width,
                                    S = n.ctx.measureText(n.ticks[n.ticks.length - 1]).width,
                                    _ = Math.cos(e.toRadians(n.labelRotation)),
                                    w = Math.sin(e.toRadians(n.labelRotation));
                                n.paddingLeft = 0 !== n.labelRotation ? _ * k + 3 : k / 2 + 3, n.paddingRight = 0 !== n.labelRotation ? w * (c / 2) + 3 : S / 2 + 3
                            } else {
                                var M = n.maxWidth - i.width, D = r.mirror;
                                D ? v = 0 : v += n.options.ticks.padding, M > v ? i.width += v : i.width = n.maxWidth, n.paddingTop = c / 2, n.paddingBottom = c / 2
                            }
                        }
                        n.margins && (n.paddingLeft = Math.max(n.paddingLeft - n.margins.left, 0), n.paddingTop = Math.max(n.paddingTop - n.margins.top, 0), n.paddingRight = Math.max(n.paddingRight - n.margins.right, 0), n.paddingBottom = Math.max(n.paddingBottom - n.margins.bottom, 0)), n.width = i.width, n.height = i.height
                    },
                    afterFit: function () {
                        e.callCallback(this.options.afterFit, [this])
                    },
                    isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function () {
                        return this.options.fullWidth
                    },
                    getRightValue: function (t) {
                        return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t
                    },
                    getLabelForIndex: e.noop,
                    getPixelForValue: e.noop,
                    getValueForPixel: e.noop,
                    getPixelForTick: function (t, e) {
                        var n = this;
                        if (n.isHorizontal()) {
                            var i = n.width - (n.paddingLeft + n.paddingRight),
                                a = i / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                o = a * t + n.paddingLeft;
                            e && (o += a / 2);
                            var r = n.left + Math.round(o);
                            return r += n.isFullWidth() ? n.margins.left : 0
                        }
                        var s = n.height - (n.paddingTop + n.paddingBottom);
                        return n.top + t * (s / (n.ticks.length - 1))
                    },
                    getPixelForDecimal: function (t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = e.width - (e.paddingLeft + e.paddingRight), i = n * t + e.paddingLeft,
                                a = e.left + Math.round(i);
                            return a += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function () {
                        var t = this, e = t.min, n = t.max;
                        return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0)
                    },
                    draw: function (n) {
                        var i = this, a = i.options;
                        if (a.display) {
                            var o, r, s = i.ctx, l = t.defaults.global, d = a.ticks, u = a.gridLines, c = a.scaleLabel,
                                h = 0 !== i.labelRotation, f = d.autoSkip, g = i.isHorizontal();
                            d.maxTicksLimit && (r = d.maxTicksLimit);
                            var p = e.getValueOrDefault(d.fontColor, l.defaultFontColor),
                                m = e.getValueOrDefault(d.fontSize, l.defaultFontSize),
                                v = e.getValueOrDefault(d.fontStyle, l.defaultFontStyle),
                                b = e.getValueOrDefault(d.fontFamily, l.defaultFontFamily), y = e.fontString(m, v, b),
                                x = u.tickMarkLength, k = e.getValueOrDefault(u.borderDash, l.borderDash),
                                S = e.getValueOrDefault(u.borderDashOffset, l.borderDashOffset),
                                _ = e.getValueOrDefault(c.fontColor, l.defaultFontColor),
                                w = e.getValueOrDefault(c.fontSize, l.defaultFontSize),
                                M = e.getValueOrDefault(c.fontStyle, l.defaultFontStyle),
                                D = e.getValueOrDefault(c.fontFamily, l.defaultFontFamily), C = e.fontString(w, M, D),
                                T = e.toRadians(i.labelRotation), P = Math.cos(T), F = i.longestLabelWidth * P;
                            s.fillStyle = p;
                            var A = [];
                            if (g) {
                                if (o = !1, h && (F /= 2), (F + d.autoSkipPadding) * i.ticks.length > i.width - (i.paddingLeft + i.paddingRight) && (o = 1 + Math.floor((F + d.autoSkipPadding) * i.ticks.length / (i.width - (i.paddingLeft + i.paddingRight)))), r && i.ticks.length > r)for (; !o || i.ticks.length / (o || 1) > r;)o || (o = 1), o += 1;
                                f || (o = !1)
                            }
                            var I = "right" === a.position ? i.left : i.right - x,
                                O = "right" === a.position ? i.left + x : i.right,
                                R = "bottom" === a.position ? i.top : i.bottom - x,
                                W = "bottom" === a.position ? i.top + x : i.bottom;
                            if (e.each(i.ticks, function (t, r) {
                                    if (void 0 !== t && null !== t) {
                                        var s = i.ticks.length === r + 1,
                                            l = o > 1 && r % o > 0 || r % o === 0 && r + o >= i.ticks.length;
                                        if ((!l || s) && void 0 !== t && null !== t) {
                                            var c, f;
                                            r === ("undefined" != typeof i.zeroLineIndex ? i.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r), f = e.getValueAtIndexOrDefault(u.color, r));
                                            var p, m, v, b, y, _, w, M, D, C, P, F = "middle";
                                            if (g) {
                                                h || (F = "top" === a.position ? "bottom" : "top"), P = h ? "right" : "center";
                                                var L = i.getPixelForTick(r) + e.aliasPixel(c);
                                                D = i.getPixelForTick(r, u.offsetGridLines) + d.labelOffset, C = h ? i.top + 12 : "top" === a.position ? i.bottom - x : i.top + x, p = v = y = w = L, m = R, b = W, _ = n.top, M = n.bottom
                                            } else {
                                                "left" === a.position ? d.mirror ? (D = i.right + d.padding, P = "left") : (D = i.right - d.padding, P = "right") : d.mirror ? (D = i.left - d.padding, P = "right") : (D = i.left + d.padding, P = "left");
                                                var V = i.getPixelForTick(r);
                                                V += e.aliasPixel(c), C = i.getPixelForTick(r, u.offsetGridLines), p = I, v = O, y = n.left, w = n.right, m = b = _ = M = V
                                            }
                                            A.push({
                                                tx1: p,
                                                ty1: m,
                                                tx2: v,
                                                ty2: b,
                                                x1: y,
                                                y1: _,
                                                x2: w,
                                                y2: M,
                                                labelX: D,
                                                labelY: C,
                                                glWidth: c,
                                                glColor: f,
                                                glBorderDash: k,
                                                glBorderDashOffset: S,
                                                rotation: -1 * T,
                                                label: t,
                                                textBaseline: F,
                                                textAlign: P
                                            })
                                        }
                                    }
                                }), e.each(A, function (t) {
                                    if (u.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), u.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                        s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = y, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                        var n = t.label;
                                        if (e.isArray(n))for (var i = 0, a = 0; i < n.length; ++i)s.fillText("" + n[i], 0, a), a += 1.5 * m; else s.fillText(n, 0, 0);
                                        s.restore()
                                    }
                                }), c.display) {
                                var L, V, B = 0;
                                if (g) L = i.left + (i.right - i.left) / 2, V = "bottom" === a.position ? i.bottom - w / 2 : i.top + w / 2; else {
                                    var Y = "left" === a.position;
                                    L = Y ? i.left + w / 2 : i.right - w / 2, V = i.top + (i.bottom - i.top) / 2, B = Y ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(L, V), s.rotate(B), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = _, s.font = C, s.fillText(c.labelString, 0, 0), s.restore()
                            }
                            if (u.drawBorder) {
                                s.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), s.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                                var z = i.left, H = i.right, N = i.top, E = i.bottom, U = e.aliasPixel(s.lineWidth);
                                g ? (N = E = "top" === a.position ? i.bottom : i.top, N += U, E += U) : (z = H = "left" === a.position ? i.right : i.left, z += U, H += U), s.beginPath(), s.moveTo(z, N), s.lineTo(H, E), s.stroke()
                            }
                        }
                    }
                })
            }
        }, {}], 32: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors: {}, defaults: {}, registerScaleType: function (t, n, i) {
                        this.constructors[t] = n, this.defaults[t] = e.clone(i)
                    }, getScaleConstructor: function (t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    }, getScaleDefaults: function (n) {
                        return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {}
                    }, updateScaleDefaults: function (t, n) {
                        var i = this.defaults;
                        i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n))
                    }, addScalesToLayout: function (n) {
                        e.each(n.scales, function (e) {
                            t.layoutService.addBox(n, e)
                        })
                    }
                }
            }
        }, {}], 33: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers;
                t.defaults.global.title = {
                    display: !1,
                    position: "top",
                    fullWidth: !0,
                    fontStyle: "bold",
                    padding: 10,
                    text: ""
                };
                var n = e.noop;
                t.Title = t.Element.extend({
                    initialize: function (n) {
                        var i = this;
                        e.extend(i, n), i.options = e.configMerge(t.defaults.global.title, n.options), i.legendHitBoxes = []
                    },
                    beforeUpdate: function () {
                        var n = this.chart.options;
                        n && n.title && (this.options = e.configMerge(t.defaults.global.title, n.title))
                    },
                    update: function (t, e, n) {
                        var i = this;
                        return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                    },
                    afterUpdate: n,
                    beforeSetDimensions: n,
                    setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: n,
                    beforeBuildLabels: n,
                    buildLabels: n,
                    afterBuildLabels: n,
                    beforeFit: n,
                    fit: function () {
                        var n = this, i = e.getValueOrDefault, a = n.options, o = t.defaults.global, r = a.display,
                            s = i(a.fontSize, o.defaultFontSize), l = n.minSize;
                        n.isHorizontal() ? (l.width = n.maxWidth, l.height = r ? s + 2 * a.padding : 0) : (l.width = r ? s + 2 * a.padding : 0, l.height = n.maxHeight), n.width = l.width, n.height = l.height
                    },
                    afterFit: n,
                    isHorizontal: function () {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function () {
                        var n = this, i = n.ctx, a = e.getValueOrDefault, o = n.options, r = t.defaults.global;
                        if (o.display) {
                            var s, l, d = a(o.fontSize, r.defaultFontSize), u = a(o.fontStyle, r.defaultFontStyle),
                                c = a(o.fontFamily, r.defaultFontFamily), h = e.fontString(d, u, c), f = 0, g = n.top,
                                p = n.left, m = n.bottom, v = n.right;
                            i.fillStyle = a(o.fontColor, r.defaultFontColor), i.font = h, n.isHorizontal() ? (s = p + (v - p) / 2, l = g + (m - g) / 2) : (s = "left" === o.position ? p + d / 2 : v - d / 2, l = g + (m - g) / 2, f = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(f), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0), i.restore()
                        }
                    }
                }), t.plugins.register({
                    beforeInit: function (e) {
                        var n = e.options, i = n.title;
                        i && (e.titleBlock = new t.Title({
                            ctx: e.chart.ctx,
                            options: i,
                            chart: e
                        }), t.layoutService.addBox(e, e.titleBlock))
                    }
                })
            }
        }, {}], 34: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                function e(t, e) {
                    return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function n(t) {
                    if (!t.length)return !1;
                    var e, n, i = [], a = [];
                    for (e = 0, n = t.length; n > e; ++e) {
                        var o = t[e];
                        if (o && o.hasValue()) {
                            var r = o.tooltipPosition();
                            i.push(r.x), a.push(r.y)
                        }
                    }
                    var s = 0, l = 0;
                    for (e = 0; e < i.length; ++e)i[e] && (s += i[e], l += a[e]);
                    return {x: Math.round(s / i.length), y: Math.round(l / i.length)}
                }

                function i(t) {
                    var e = t._xScale, n = t._yScale || t._scale, i = t._index, a = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(i, a) : "",
                        yLabel: n ? n.getLabelForIndex(i, a) : "",
                        index: i,
                        datasetIndex: a
                    }
                }

                var a = t.helpers;
                t.defaults.global.tooltips = {
                    enabled: !0,
                    custom: null,
                    mode: "single",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    yAlign: "center",
                    xAlign: "center",
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    callbacks: {
                        beforeTitle: a.noop,
                        title: function (t, e) {
                            var n = "", i = e.labels, a = i ? i.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.xLabel ? n = o.xLabel : a > 0 && o.index < a && (n = i[o.index])
                            }
                            return n
                        },
                        afterTitle: a.noop,
                        beforeBody: a.noop,
                        beforeLabel: a.noop,
                        label: function (t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n + ": " + t.yLabel
                        },
                        labelColor: function (t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex), i = n.data[t.index], a = i._view;
                            return {borderColor: a.borderColor, backgroundColor: a.backgroundColor}
                        },
                        afterLabel: a.noop,
                        afterBody: a.noop,
                        beforeFooter: a.noop,
                        footer: a.noop,
                        afterFooter: a.noop
                    }
                }, t.Tooltip = t.Element.extend({
                    initialize: function () {
                        var e = this, n = t.defaults.global, i = e._options, o = a.getValueOrDefault;
                        a.extend(e, {
                            _model: {
                                xPadding: i.xPadding,
                                yPadding: i.yPadding,
                                xAlign: i.xAlign,
                                yAlign: i.yAlign,
                                bodyFontColor: i.bodyFontColor,
                                _bodyFontFamily: o(i.bodyFontFamily, n.defaultFontFamily),
                                _bodyFontStyle: o(i.bodyFontStyle, n.defaultFontStyle),
                                _bodyAlign: i.bodyAlign,
                                bodyFontSize: o(i.bodyFontSize, n.defaultFontSize),
                                bodySpacing: i.bodySpacing,
                                titleFontColor: i.titleFontColor,
                                _titleFontFamily: o(i.titleFontFamily, n.defaultFontFamily),
                                _titleFontStyle: o(i.titleFontStyle, n.defaultFontStyle),
                                titleFontSize: o(i.titleFontSize, n.defaultFontSize),
                                _titleAlign: i.titleAlign,
                                titleSpacing: i.titleSpacing,
                                titleMarginBottom: i.titleMarginBottom,
                                footerFontColor: i.footerFontColor,
                                _footerFontFamily: o(i.footerFontFamily, n.defaultFontFamily),
                                _footerFontStyle: o(i.footerFontStyle, n.defaultFontStyle),
                                footerFontSize: o(i.footerFontSize, n.defaultFontSize),
                                _footerAlign: i.footerAlign,
                                footerSpacing: i.footerSpacing,
                                footerMarginTop: i.footerMarginTop,
                                caretSize: i.caretSize,
                                cornerRadius: i.cornerRadius,
                                backgroundColor: i.backgroundColor,
                                opacity: 0,
                                legendColorBackground: i.multiKeyBackground
                            }
                        })
                    }, getTitle: function () {
                        var t = this, n = t._options, i = n.callbacks, a = i.beforeTitle.apply(t, arguments),
                            o = i.title.apply(t, arguments), r = i.afterTitle.apply(t, arguments), s = [];
                        return s = e(s, a), s = e(s, o), s = e(s, r)
                    }, getBeforeBody: function () {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return a.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getBody: function (t, n) {
                        var i = this, o = i._options.callbacks, r = [];
                        return a.each(t, function (t) {
                            var a = {before: [], lines: [], after: []};
                            e(a.before, o.beforeLabel.call(i, t, n)), e(a.lines, o.label.call(i, t, n)), e(a.after, o.afterLabel.call(i, t, n)), r.push(a)
                        }), r
                    }, getAfterBody: function () {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return a.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getFooter: function () {
                        var t = this, n = t._options.callbacks, i = n.beforeFooter.apply(t, arguments),
                            a = n.footer.apply(t, arguments), o = n.afterFooter.apply(t, arguments), r = [];
                        return r = e(r, i), r = e(r, a), r = e(r, o)
                    }, update: function (t) {
                        var e, o, r = this, s = r._options, l = r._model, d = r._active, u = r._data,
                            c = r._chartInstance;
                        if (d.length) {
                            l.opacity = 1;
                            var h = [], f = n(d), g = [];
                            for (e = 0, o = d.length; o > e; ++e)g.push(i(d[e]));
                            s.itemSort && (g = g.sort(function (t, e) {
                                return s.itemSort(t, e, u)
                            })), d.length > 1 && a.each(g, function (t) {
                                h.push(s.callbacks.labelColor.call(r, t, c))
                            }), a.extend(l, {
                                title: r.getTitle(g, u),
                                beforeBody: r.getBeforeBody(g, u),
                                body: r.getBody(g, u),
                                afterBody: r.getAfterBody(g, u),
                                footer: r.getFooter(g, u),
                                x: Math.round(f.x),
                                y: Math.round(f.y),
                                caretPadding: a.getValueOrDefault(f.padding, 2),
                                labelColors: h
                            });
                            var p = r.getTooltipSize(l);
                            r.determineAlignment(p), a.extend(l, r.getBackgroundPoint(l, p))
                        } else r._model.opacity = 0;
                        return t && s.custom && s.custom.call(r, l), r
                    }, getTooltipSize: function (t) {
                        var e = this._chart.ctx, n = {height: 2 * t.yPadding, width: 0}, i = t.body,
                            o = i.reduce(function (t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        o += t.beforeBody.length + t.afterBody.length;
                        var r = t.title.length, s = t.footer.length, l = t.titleFontSize, d = t.bodyFontSize,
                            u = t.footerFontSize;
                        n.height += r * l, n.height += (r - 1) * t.titleSpacing, n.height += r ? t.titleMarginBottom : 0, n.height += o * d, n.height += o ? (o - 1) * t.bodySpacing : 0, n.height += s ? t.footerMarginTop : 0, n.height += s * u, n.height += s ? (s - 1) * t.footerSpacing : 0;
                        var c = 0, h = function (t) {
                            n.width = Math.max(n.width, e.measureText(t).width + c)
                        };
                        return e.font = a.fontString(l, t._titleFontStyle, t._titleFontFamily), a.each(t.title, h), e.font = a.fontString(d, t._bodyFontStyle, t._bodyFontFamily), a.each(t.beforeBody.concat(t.afterBody), h),
                            c = i.length > 1 ? d + 2 : 0, a.each(i, function (t) {
                            a.each(t.before, h), a.each(t.lines, h), a.each(t.after, h)
                        }), c = 0, e.font = a.fontString(u, t._footerFontStyle, t._footerFontFamily), a.each(t.footer, h), n.width += 2 * t.xPadding, n
                    }, determineAlignment: function (t) {
                        var e = this, n = e._model, i = e._chart, a = e._chartInstance.chartArea;
                        n.y < t.height ? n.yAlign = "top" : n.y > i.height - t.height && (n.yAlign = "bottom");
                        var o, r, s, l, d, u = (a.left + a.right) / 2, c = (a.top + a.bottom) / 2;
                        "center" === n.yAlign ? (o = function (t) {
                            return u >= t
                        }, r = function (t) {
                            return t > u
                        }) : (o = function (e) {
                            return e <= t.width / 2
                        }, r = function (e) {
                            return e >= i.width - t.width / 2
                        }), s = function (e) {
                            return e + t.width > i.width
                        }, l = function (e) {
                            return e - t.width < 0
                        }, d = function (t) {
                            return c >= t ? "top" : "bottom"
                        }, o(n.x) ? (n.xAlign = "left", s(n.x) && (n.xAlign = "center", n.yAlign = d(n.y))) : r(n.x) && (n.xAlign = "right", l(n.x) && (n.xAlign = "center", n.yAlign = d(n.y)))
                    }, getBackgroundPoint: function (t, e) {
                        var n = {x: t.x, y: t.y}, i = t.caretSize, a = t.caretPadding, o = t.cornerRadius, r = t.xAlign,
                            s = t.yAlign, l = i + a, d = o + a;
                        return "right" === r ? n.x -= e.width : "center" === r && (n.x -= e.width / 2), "top" === s ? n.y += l : "bottom" === s ? n.y -= e.height + l : n.y -= e.height / 2, "center" === s ? "left" === r ? n.x += l : "right" === r && (n.x -= l) : "left" === r ? n.x -= d : "right" === r && (n.x += d), n
                    }, drawCaret: function (t, e, n) {
                        var i, o, r, s, l, d, u = this._view, c = this._chart.ctx, h = u.caretSize, f = u.cornerRadius,
                            g = u.xAlign, p = u.yAlign, m = t.x, v = t.y, b = e.width, y = e.height;
                        "center" === p ? ("left" === g ? (i = m, o = i - h, r = i) : (i = m + b, o = i + h, r = i), l = v + y / 2, s = l - h, d = l + h) : ("left" === g ? (i = m + f, o = i + h, r = o + h) : "right" === g ? (i = m + b - f, o = i - h, r = o - h) : (o = m + b / 2, i = o - h, r = o + h), "top" === p ? (s = v, l = s - h, d = s) : (s = v + y, l = s + h, d = s));
                        var x = a.color(u.backgroundColor);
                        c.fillStyle = x.alpha(n * x.alpha()).rgbString(), c.beginPath(), c.moveTo(i, s), c.lineTo(o, l), c.lineTo(r, d), c.closePath(), c.fill()
                    }, drawTitle: function (t, e, n, i) {
                        var o = e.title;
                        if (o.length) {
                            n.textAlign = e._titleAlign, n.textBaseline = "top";
                            var r = e.titleFontSize, s = e.titleSpacing, l = a.color(e.titleFontColor);
                            n.fillStyle = l.alpha(i * l.alpha()).rgbString(), n.font = a.fontString(r, e._titleFontStyle, e._titleFontFamily);
                            var d, u;
                            for (d = 0, u = o.length; u > d; ++d)n.fillText(o[d], t.x, t.y), t.y += r + s, d + 1 === o.length && (t.y += e.titleMarginBottom - s)
                        }
                    }, drawBody: function (t, e, n, i) {
                        var o = e.bodyFontSize, r = e.bodySpacing, s = e.body;
                        n.textAlign = e._bodyAlign, n.textBaseline = "top";
                        var l = a.color(e.bodyFontColor), d = l.alpha(i * l.alpha()).rgbString();
                        n.fillStyle = d, n.font = a.fontString(o, e._bodyFontStyle, e._bodyFontFamily);
                        var u = 0, c = function (e) {
                            n.fillText(e, t.x + u, t.y), t.y += o + r
                        };
                        a.each(e.beforeBody, c);
                        var h = s.length > 1;
                        u = h ? o + 2 : 0, a.each(s, function (r, s) {
                            a.each(r.before, c), a.each(r.lines, function (r) {
                                h && (n.fillStyle = a.color(e.legendColorBackground).alpha(i).rgbaString(), n.fillRect(t.x, t.y, o, o), n.strokeStyle = a.color(e.labelColors[s].borderColor).alpha(i).rgbaString(), n.strokeRect(t.x, t.y, o, o), n.fillStyle = a.color(e.labelColors[s].backgroundColor).alpha(i).rgbaString(), n.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), n.fillStyle = d), c(r)
                            }), a.each(r.after, c)
                        }), u = 0, a.each(e.afterBody, c), t.y -= r
                    }, drawFooter: function (t, e, n, i) {
                        var o = e.footer;
                        if (o.length) {
                            t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top";
                            var r = a.color(e.footerFontColor);
                            n.fillStyle = r.alpha(i * r.alpha()).rgbString(), n.font = a.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), a.each(o, function (i) {
                                n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                            })
                        }
                    }, draw: function () {
                        var t = this._chart.ctx, e = this._view;
                        if (0 !== e.opacity) {
                            var n = this.getTooltipSize(e), i = {x: e.x, y: e.y},
                                o = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            if (this._options.enabled) {
                                var r = a.color(e.backgroundColor);
                                t.fillStyle = r.alpha(o * r.alpha()).rgbString(), a.drawRoundedRectangle(t, i.x, i.y, n.width, n.height, e.cornerRadius), t.fill(), this.drawCaret(i, n, o), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, o), this.drawBody(i, e, t, o), this.drawFooter(i, e, t, o)
                            }
                        }
                    }
                })
            }
        }, {}], 35: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = t.defaults.global;
                n.elements.arc = {
                    backgroundColor: n.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }, t.elements.Arc = t.Element.extend({
                    inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    }, inRange: function (t, n) {
                        var i = this._view;
                        if (i) {
                            for (var a = e.getAngleFromPoint(i, {
                                x: t,
                                y: n
                            }), o = a.angle, r = a.distance, s = i.startAngle, l = i.endAngle; s > l;)l += 2 * Math.PI;
                            for (; o > l;)o -= 2 * Math.PI;
                            for (; s > o;)o += 2 * Math.PI;
                            var d = o >= s && l >= o, u = r >= i.innerRadius && r <= i.outerRadius;
                            return d && u
                        }
                        return !1
                    }, tooltipPosition: function () {
                        var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n}
                    }, draw: function () {
                        var t = this._chart.ctx, e = this._view, n = e.startAngle, i = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }
        }, {}], 36: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension: .4,
                    backgroundColor: n.defaultColor,
                    borderWidth: 3,
                    borderColor: n.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }, t.elements.Line = t.Element.extend({
                    draw: function () {
                        function t(t, e) {
                            var n = e._view;
                            e._view.steppedLine === !0 ? (l.lineTo(e._view.x, t._view.y), l.lineTo(e._view.x, e._view.y)) : 0 === e._view.tension ? l.lineTo(n.x, n.y) : l.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, n.controlPointPreviousX, n.controlPointPreviousY, n.x, n.y)
                        }

                        var i = this, a = i._view, o = a.spanGaps, r = a.scaleZero, s = i._loop, l = i._chart.ctx;
                        l.save();
                        var d = i._children.slice(), u = -1;
                        s && d.length && d.push(d[0]);
                        var c, h, f, g;
                        if (d.length && a.fill) {
                            for (l.beginPath(), c = 0; c < d.length; ++c)h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (s ? l.moveTo(r.x, r.y) : l.moveTo(g.x, r), g.skip || (u = c, l.lineTo(g.x, g.y))) : (f = -1 === u ? f : d[u], g.skip ? o || u !== c - 1 || (s ? l.lineTo(r.x, r.y) : l.lineTo(f._view.x, r)) : (u !== c - 1 ? o && -1 !== u ? t(f, h) : s ? l.lineTo(g.x, g.y) : (l.lineTo(g.x, r), l.lineTo(g.x, g.y)) : t(f, h), u = c));
                            s || -1 === u || l.lineTo(d[u]._view.x, r), l.fillStyle = a.backgroundColor || n.defaultColor, l.closePath(), l.fill()
                        }
                        var p = n.elements.line;
                        for (l.lineCap = a.borderCapStyle || p.borderCapStyle, l.setLineDash && l.setLineDash(a.borderDash || p.borderDash), l.lineDashOffset = a.borderDashOffset || p.borderDashOffset, l.lineJoin = a.borderJoinStyle || p.borderJoinStyle, l.lineWidth = a.borderWidth || p.borderWidth, l.strokeStyle = a.borderColor || n.defaultColor, l.beginPath(), u = -1, c = 0; c < d.length; ++c)h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (l.moveTo(g.x, g.y), u = c) : (f = -1 === u ? f : d[u], g.skip || (u !== c - 1 && !o || -1 === u ? l.moveTo(g.x, g.y) : t(f, h), u = c));
                        l.stroke(), l.restore()
                    }
                })
            }
        }, {}], 37: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = t.defaults.global, i = n.defaultColor;
                n.elements.point = {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: i,
                    borderWidth: 1,
                    borderColor: i,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }, t.elements.Point = t.Element.extend({
                    inRange: function (t, e) {
                        var n = this._view;
                        return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                    }, inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                    }, tooltipPosition: function () {
                        var t = this._view;
                        return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                    }, draw: function () {
                        var a = this._view, o = this._chart.ctx, r = a.pointStyle, s = a.radius, l = a.x, d = a.y;
                        a.skip || (o.strokeStyle = a.borderColor || i, o.lineWidth = e.getValueOrDefault(a.borderWidth, n.elements.point.borderWidth), o.fillStyle = a.backgroundColor || i, t.canvasHelpers.drawPoint(o, r, s, l, d))
                    }
                })
            }
        }, {}], 38: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.defaults.global;
                e.elements.rectangle = {
                    backgroundColor: e.defaultColor,
                    borderWidth: 0,
                    borderColor: e.defaultColor,
                    borderSkipped: "bottom"
                }, t.elements.Rectangle = t.Element.extend({
                    draw: function () {
                        function t(t) {
                            return l[(u + t) % 4]
                        }

                        var e = this._chart.ctx, n = this._view, i = n.width / 2, a = n.x - i, o = n.x + i,
                            r = n.base - (n.base - n.y), s = n.borderWidth / 2;
                        n.borderWidth && (a += s, o -= s, r += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                        var l = [[a, n.base], [a, r], [o, r], [o, n.base]], d = ["bottom", "left", "top", "right"],
                            u = d.indexOf(n.borderSkipped, 0);
                        -1 === u && (u = 0), e.moveTo.apply(e, t(0));
                        for (var c = 1; 4 > c; c++)e.lineTo.apply(e, t(c));
                        e.fill(), n.borderWidth && e.stroke()
                    }, height: function () {
                        var t = this._view;
                        return t.base - t.y
                    }, inRange: function (t, e) {
                        var n = this._view;
                        return !!n && (n.y < n.base ? t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.y && e <= n.base : t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.base && e <= n.y)
                    }, inLabelRange: function (t) {
                        var e = this._view;
                        return !!e && (t >= e.x - e.width / 2 && t <= e.x + e.width / 2)
                    }, tooltipPosition: function () {
                        var t = this._view;
                        return {x: t.x, y: t.y}
                    }
                })
            }
        }, {}], 39: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = {position: "bottom"}, i = t.Scale.extend({
                    getLabels: function () {
                        var t = this.chart.data;
                        return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    }, determineDataLimits: function () {
                        var t = this, n = t.getLabels();
                        t.minIndex = 0, t.maxIndex = n.length - 1;
                        var i;
                        void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                    }, buildTicks: function () {
                        var t = this, e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    }, getLabelForIndex: function (t) {
                        return this.ticks[t]
                    }, getPixelForValue: function (t, e, n, i) {
                        var a = this,
                            o = Math.max(a.maxIndex + 1 - a.minIndex - (a.options.gridLines.offsetGridLines ? 0 : 1), 1);
                        if (void 0 !== t && isNaN(e)) {
                            var r = a.getLabels(), s = r.indexOf(t);
                            e = -1 !== s ? s : e
                        }
                        if (a.isHorizontal()) {
                            var l = a.width - (a.paddingLeft + a.paddingRight), d = l / o,
                                u = d * (e - a.minIndex) + a.paddingLeft;
                            return (a.options.gridLines.offsetGridLines && i || a.maxIndex === a.minIndex && i) && (u += d / 2), a.left + Math.round(u)
                        }
                        var c = a.height - (a.paddingTop + a.paddingBottom), h = c / o,
                            f = h * (e - a.minIndex) + a.paddingTop;
                        return a.options.gridLines.offsetGridLines && i && (f += h / 2), a.top + Math.round(f)
                    }, getPixelForTick: function (t, e) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                    }, getValueForPixel: function (t) {
                        var e, n = this,
                            i = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            a = n.isHorizontal(),
                            o = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.paddingBottom),
                            r = o / i;
                        return t -= a ? n.left : n.top, n.options.gridLines.offsetGridLines && (t -= r / 2), t -= a ? n.paddingLeft : n.paddingTop, e = 0 >= t ? 0 : Math.round(t / r)
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", i, n)
            }
        }, {}], 40: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = {
                    position: "left", ticks: {
                        callback: function (t, n, i) {
                            var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                            var o = e.log10(Math.abs(a)), r = "";
                            if (0 !== t) {
                                var s = -1 * Math.floor(o);
                                s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                            } else r = "0";
                            return r
                        }
                    }
                }, i = t.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        function t(t) {
                            return s ? t.xAxisID === n.id : t.yAxisID === n.id
                        }

                        var n = this, i = n.options, a = n.chart, o = a.data, r = o.datasets, s = n.isHorizontal();
                        if (n.min = null, n.max = null, i.stacked) {
                            var l = {}, d = !1, u = !1;
                            e.each(r, function (o, r) {
                                var s = a.getDatasetMeta(r);
                                void 0 === l[s.type] && (l[s.type] = {positiveValues: [], negativeValues: []});
                                var c = l[s.type].positiveValues, h = l[s.type].negativeValues;
                                a.isDatasetVisible(r) && t(s) && e.each(o.data, function (t, e) {
                                    var a = +n.getRightValue(t);
                                    isNaN(a) || s.data[e].hidden || (c[e] = c[e] || 0, h[e] = h[e] || 0, i.relativePoints ? c[e] = 100 : 0 > a ? (u = !0, h[e] += a) : (d = !0, c[e] += a))
                                })
                            }), e.each(l, function (t) {
                                var i = t.positiveValues.concat(t.negativeValues), a = e.min(i), o = e.max(i);
                                n.min = null === n.min ? a : Math.min(n.min, a), n.max = null === n.max ? o : Math.max(n.max, o)
                            })
                        } else e.each(r, function (i, o) {
                            var r = a.getDatasetMeta(o);
                            a.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                                var i = +n.getRightValue(t);
                                isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                            })
                        });
                        this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var n, i = this, a = i.options.ticks;
                        if (i.isHorizontal()) n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.width / 50)); else {
                            var o = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);
                            n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)))
                        }
                        return n
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForValue: function (t) {
                        var e, n, i = this, a = i.paddingLeft, o = i.paddingBottom, r = i.start,
                            s = +i.getRightValue(t), l = i.end - r;
                        return i.isHorizontal() ? (n = i.width - (a + i.paddingRight), e = i.left + n / l * (s - r), Math.round(e + a)) : (n = i.height - (i.paddingTop + o), e = i.bottom - o - n / l * (s - r), Math.round(e))
                    }, getValueForPixel: function (t) {
                        var e = this, n = e.isHorizontal(), i = e.paddingLeft, a = e.paddingBottom,
                            o = n ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + a),
                            r = (n ? t - e.left - i : e.bottom - a - t) / o;
                        return e.start + (e.end - e.start) * r
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
                t.scaleService.registerScaleType("linear", i, n)
            }
        }, {}], 41: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = e.noop;
                t.LinearScaleBase = t.Scale.extend({
                    handleTickRangeOptions: function () {
                        var t = this, n = t.options, i = n.ticks;
                        if (i.beginAtZero) {
                            var a = e.sign(t.min), o = e.sign(t.max);
                            0 > a && 0 > o ? t.max = 0 : a > 0 && o > 0 && (t.min = 0)
                        }
                        void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--)
                    }, getTickLimit: n, handleDirectionalChanges: n, buildTicks: function () {
                        var t = this, n = t.options, i = t.ticks = [], a = n.ticks, o = e.getValueOrDefault,
                            r = t.getTickLimit();
                        r = Math.max(2, r);
                        var s, l = a.fixedStepSize && a.fixedStepSize > 0 || a.stepSize && a.stepSize > 0;
                        if (l) s = o(a.fixedStepSize, a.stepSize); else {
                            var d = e.niceNum(t.max - t.min, !1);
                            s = e.niceNum(d / (r - 1), !0)
                        }
                        var u = Math.floor(t.min / s) * s, c = Math.ceil(t.max / s) * s, h = (c - u) / s;
                        h = e.almostEquals(h, Math.round(h), s / 1e3) ? Math.round(h) : Math.ceil(h), i.push(void 0 !== a.min ? a.min : u);
                        for (var f = 1; h > f; ++f)i.push(u + f * s);
                        i.push(void 0 !== a.max ? a.max : c), t.handleDirectionalChanges(), t.max = e.max(i), t.min = e.min(i), a.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    }, convertTicksToLabels: function () {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {}], 42: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = {
                    position: "left", ticks: {
                        callback: function (t, n, i) {
                            var a = t / Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === n || n === i.length - 1 ? t.toExponential() : ""
                        }
                    }
                }, i = t.Scale.extend({
                    determineDataLimits: function () {
                        function t(t) {
                            return d ? t.xAxisID === n.id : t.yAxisID === n.id
                        }

                        var n = this, i = n.options, a = i.ticks, o = n.chart, r = o.data, s = r.datasets,
                            l = e.getValueOrDefault, d = n.isHorizontal();
                        if (n.min = null, n.max = null, n.minNotZero = null, i.stacked) {
                            var u = {};
                            e.each(s, function (a, r) {
                                var s = o.getDatasetMeta(r);
                                o.isDatasetVisible(r) && t(s) && (void 0 === u[s.type] && (u[s.type] = []), e.each(a.data, function (t, e) {
                                    var a = u[s.type], o = +n.getRightValue(t);
                                    isNaN(o) || s.data[e].hidden || (a[e] = a[e] || 0, i.relativePoints ? a[e] = 100 : a[e] += o)
                                }))
                            }), e.each(u, function (t) {
                                var i = e.min(t), a = e.max(t);
                                n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? a : Math.max(n.max, a)
                            })
                        } else e.each(s, function (i, a) {
                            var r = o.getDatasetMeta(a);
                            o.isDatasetVisible(a) && t(r) && e.each(i.data, function (t, e) {
                                var i = +n.getRightValue(t);
                                isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i))
                            })
                        });
                        n.min = l(a.min, n.min), n.max = l(a.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
                    }, buildTicks: function () {
                        for (var t = this, n = t.options, i = n.ticks, a = e.getValueOrDefault, o = t.ticks = [], r = a(i.min, Math.pow(10, Math.floor(e.log10(t.min)))); r < t.max;) {
                            o.push(r);
                            var s, l;
                            0 === r ? (s = Math.floor(e.log10(t.minNotZero)), l = Math.round(t.minNotZero / Math.pow(10, s))) : (s = Math.floor(e.log10(r)), l = Math.floor(r / Math.pow(10, s)) + 1), 10 === l && (l = 1, ++s), r = l * Math.pow(10, s)
                        }
                        var d = a(i.max, r);
                        o.push(d), t.isHorizontal() || o.reverse(), t.max = e.max(o), t.min = e.min(o), i.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.tickValues[t])
                    }, getPixelForValue: function (t) {
                        var n, i, a, o = this, r = o.start, s = +o.getRightValue(t), l = o.paddingTop,
                            d = o.paddingBottom, u = o.paddingLeft, c = o.options, h = c.ticks;
                        return o.isHorizontal() ? (a = e.log10(o.end) - e.log10(r), 0 === s ? i = o.left + u : (n = o.width - (u + o.paddingRight), i = o.left + n / a * (e.log10(s) - e.log10(r)), i += u)) : (n = o.height - (l + d), 0 !== r || h.reverse ? 0 === o.end && h.reverse ? (a = e.log10(o.start) - e.log10(o.minNotZero), i = s === o.end ? o.top + l : s === o.minNotZero ? o.top + l + .02 * n : o.top + l + .02 * n + .98 * n / a * (e.log10(s) - e.log10(o.minNotZero))) : (a = e.log10(o.end) - e.log10(r), n = o.height - (l + d), i = o.bottom - d - n / a * (e.log10(s) - e.log10(r))) : (a = e.log10(o.end) - e.log10(o.minNotZero), i = s === r ? o.bottom - d : s === o.minNotZero ? o.bottom - d - .02 * n : o.bottom - d - .02 * n - .98 * n / a * (e.log10(s) - e.log10(o.minNotZero)))), i
                    }, getValueForPixel: function (t) {
                        var n, i, a = this, o = e.log10(a.end) - e.log10(a.start);
                        return a.isHorizontal() ? (i = a.width - (a.paddingLeft + a.paddingRight), n = a.start * Math.pow(10, (t - a.left - a.paddingLeft) * o / i)) : (i = a.height - (a.paddingTop + a.paddingBottom), n = Math.pow(10, (a.bottom - a.paddingBottom - t) * o / i) / a.start), n
                    }
                });
                t.scaleService.registerScaleType("logarithmic", i, n)
            }
        }, {}], 43: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                var e = t.helpers, n = t.defaults.global, i = {
                    display: !0,
                    animate: !0,
                    lineArc: !1,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2
                    },
                    pointLabels: {
                        fontSize: 10, callback: function (t) {
                            return t
                        }
                    }
                }, a = t.LinearScaleBase.extend({
                    getValueCount: function () {
                        return this.chart.data.labels.length
                    }, setDimensions: function () {
                        var t = this, i = t.options, a = i.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var o = e.min([t.height, t.width]), r = e.getValueOrDefault(a.fontSize, n.defaultFontSize);
                        t.drawingArea = i.display ? o / 2 - (r / 2 + a.backdropPaddingY) : o / 2
                    }, determineDataLimits: function () {
                        var t = this, n = t.chart;
                        t.min = null, t.max = null, e.each(n.data.datasets, function (i, a) {
                            if (n.isDatasetVisible(a)) {
                                var o = n.getDatasetMeta(a);
                                e.each(i.data, function (e, n) {
                                    var i = +t.getRightValue(e);
                                    isNaN(i) || o.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i))
                                })
                            }
                        }), t.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var t = this.options.ticks, i = e.getValueOrDefault(t.fontSize, n.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                    }, convertTicksToLabels: function () {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, fit: function () {
                        var t, i, a, o, r, s, l, d, u, c, h, f, g = this.options.pointLabels,
                            p = e.getValueOrDefault(g.fontSize, n.defaultFontSize),
                            m = e.getValueOrDefault(g.fontStyle, n.defaultFontStyle),
                            v = e.getValueOrDefault(g.fontFamily, n.defaultFontFamily), b = e.fontString(p, m, v),
                            y = e.min([this.height / 2 - p - 5, this.width / 2]), x = this.width, k = 0;
                        for (this.ctx.font = b, i = 0; i < this.getValueCount(); i++) {
                            t = this.getPointPosition(i, y), a = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5;
                            var S = this.getIndexAngle(i) + Math.PI / 2, _ = 360 * S / (2 * Math.PI) % 360;
                            0 === _ || 180 === _ ? (o = a / 2, t.x + o > x && (x = t.x + o, r = i), t.x - o < k && (k = t.x - o, l = i)) : 180 > _ ? t.x + a > x && (x = t.x + a, r = i) : t.x - a < k && (k = t.x - a, l = i)
                        }
                        u = k, c = Math.ceil(x - this.width), s = this.getIndexAngle(r), d = this.getIndexAngle(l), h = c / Math.sin(s + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(y - (f + h) / 2), this.setCenterPoint(f, h)
                    }, setCenterPoint: function (t, e) {
                        var n = this, i = n.width - e - n.drawingArea, a = t + n.drawingArea;
                        n.xCenter = Math.round((a + i) / 2 + n.left), n.yCenter = Math.round(n.height / 2 + n.top)
                    }, getIndexAngle: function (t) {
                        var e = 2 * Math.PI / this.getValueCount(),
                            n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                            i = n * Math.PI * 2 / 360;
                        return t * e - Math.PI / 2 + i
                    }, getDistanceFromCenterForValue: function (t) {
                        var e = this;
                        if (null === t)return 0;
                        var n = e.drawingArea / (e.max - e.min);
                        return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
                    }, getPointPosition: function (t, e) {
                        var n = this, i = n.getIndexAngle(t);
                        return {x: Math.round(Math.cos(i) * e) + n.xCenter, y: Math.round(Math.sin(i) * e) + n.yCenter}
                    }, getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    }, getBasePosition: function () {
                        var t = this, e = t.min, n = t.max;
                        return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0)
                    }, draw: function () {
                        var t = this, i = t.options, a = i.gridLines, o = i.ticks, r = i.angleLines, s = i.pointLabels,
                            l = e.getValueOrDefault;
                        if (i.display) {
                            var d = t.ctx, u = l(o.fontSize, n.defaultFontSize), c = l(o.fontStyle, n.defaultFontStyle),
                                h = l(o.fontFamily, n.defaultFontFamily), f = e.fontString(u, c, h);
                            if (e.each(t.ticks, function (r, s) {
                                    if (s > 0 || i.reverse) {
                                        var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]), h = t.yCenter - c;
                                        if (a.display && 0 !== s)if (d.strokeStyle = e.getValueAtIndexOrDefault(a.color, s - 1), d.lineWidth = e.getValueAtIndexOrDefault(a.lineWidth, s - 1), i.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke(); else {
                                            d.beginPath();
                                            for (var g = 0; g < t.getValueCount(); g++) {
                                                var p = t.getPointPosition(g, c);
                                                0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y)
                                            }
                                            d.closePath(), d.stroke()
                                        }
                                        if (o.display) {
                                            var m = l(o.fontColor, n.defaultFontColor);
                                            if (d.font = f, o.showLabelBackdrop) {
                                                var v = d.measureText(r).width;
                                                d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - v / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, v + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY)
                                            }
                                            d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, h)
                                        }
                                    }
                                }), !i.lineArc) {
                                d.lineWidth = r.lineWidth, d.strokeStyle = r.color;
                                for (var g = t.getDistanceFromCenterForValue(i.reverse ? t.min : t.max), p = l(s.fontSize, n.defaultFontSize), m = l(s.fontStyle, n.defaultFontStyle), v = l(s.fontFamily, n.defaultFontFamily), b = e.fontString(p, m, v), y = t.getValueCount() - 1; y >= 0; y--) {
                                    if (r.display) {
                                        var x = t.getPointPosition(y, g);
                                        d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(x.x, x.y), d.stroke(), d.closePath()
                                    }
                                    var k = t.getPointPosition(y, g + 5), S = l(s.fontColor, n.defaultFontColor);
                                    d.font = b, d.fillStyle = S;
                                    var _ = t.pointLabels, w = this.getIndexAngle(y) + Math.PI / 2,
                                        M = 360 * w / (2 * Math.PI) % 360;
                                    0 === M || 180 === M ? d.textAlign = "center" : 180 > M ? d.textAlign = "left" : d.textAlign = "right", 90 === M || 270 === M ? d.textBaseline = "middle" : M > 270 || 90 > M ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(_[y] ? _[y] : "", k.x, k.y)
                                }
                            }
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", a, i)
            }
        }, {}], 44: [function (t, e, n) {
            "use strict";
            var i = t(6);
            i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
                var e = t.helpers, n = {
                    units: [{name: "millisecond", steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]}, {
                        name: "second",
                        steps: [1, 2, 5, 10, 30]
                    }, {name: "minute", steps: [1, 2, 5, 10, 30]}, {
                        name: "hour",
                        steps: [1, 2, 3, 6, 12]
                    }, {name: "day", steps: [1, 2, 5]}, {name: "week", maxStep: 4}, {
                        name: "month",
                        maxStep: 3
                    }, {name: "quarter", maxStep: 4}, {name: "year", maxStep: !1}]
                }, a = {
                    position: "bottom",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm:ss a",
                            hour: "MMM D, hA",
                            day: "ll",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1}
                }, o = t.Scale.extend({
                    initialize: function () {
                        if (!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        t.Scale.prototype.initialize.call(this)
                    }, getLabelMoment: function (t, e) {
                        return "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null
                    }, getMomentStartOf: function (t) {
                        var e = this;
                        return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
                    }, determineDataLimits: function () {
                        var t = this;
                        t.labelMoments = [];
                        var n = [];
                        t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function (e) {
                            var i = t.parseTime(e);
                            i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), n.push(i))
                        }, t), t.firstTick = i.min.call(t, n), t.lastTick = i.max.call(t, n)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function (a, o) {
                            var r = [], s = t.chart.isDatasetVisible(o);
                            "object" == typeof a.data[0] && null !== a.data[0] ? e.each(a.data, function (e) {
                                var n = t.parseTime(t.getRightValue(e));
                                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), r.push(n), s && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, n) : n, t.lastTick = null !== t.lastTick ? i.max(t.lastTick, n) : n))
                            }, t) : r = n, t.labelMoments.push(r)
                        }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || i()).clone(), t.lastTick = (t.lastTick || i()).clone()
                    }, buildTicks: function () {
                        var i = this;
                        i.ctx.save();
                        var a = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            s = e.fontString(a, o, r);
                        if (i.ctx.font = s, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1); else {
                            var l = i.isHorizontal() ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                                d = i.tickFormatFunction(i.firstTick, 0, []), u = i.ctx.measureText(d).width,
                                c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                                h = Math.sin(e.toRadians(i.options.ticks.maxRotation));
                            u = u * c + a * h;
                            var f = l / u;
                            i.tickUnit = "millisecond", i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];
                            for (var g = 0, p = n.units[g]; g < n.units.length;) {
                                if (i.unitScale = 1, e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                                    for (var m = 0; m < p.steps.length; ++m)if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                                        i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);
                                        break
                                    }
                                    break
                                }
                                if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                                    i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                                    break
                                }
                                ++g, p = n.units[g], i.tickUnit = p.name;
                                var v = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                                    b = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                                i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + v + b, i.displayFormat = i.options.time.displayFormats[p.name]
                            }
                        }
                        var y;
                        if (i.options.time.min ? y = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), y = i.firstTick), !i.options.time.max) {
                            var x = i.getMomentStartOf(i.lastTick), k = x.diff(i.lastTick, i.tickUnit, !0);
                            0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = x), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0)
                        }
                        i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());
                        for (var S = 1; S <= i.scaleSizeInUnits; ++S) {
                            var _ = y.clone().add(S, i.tickUnit);
                            if (i.options.time.max && _.diff(i.lastTick, i.tickUnit, !0) >= 0)break;
                            S % i.unitScale === 0 && i.ticks.push(_)
                        }
                        var w = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
                        (0 !== w || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore()
                    }, getLabelForIndex: function (t, e) {
                        var n = this,
                            i = n.chart.data.labels && t < n.chart.data.labels.length ? n.chart.data.labels[t] : "";
                        return "object" == typeof n.chart.data.datasets[e].data[0] && (i = n.getRightValue(n.chart.data.datasets[e].data[t])), n.options.time.tooltipFormat && (i = n.parseTime(i).format(n.options.time.tooltipFormat)), i
                    }, tickFormatFunction: function (t, n, i) {
                        var a = t.format(this.displayFormat), o = this.options.ticks,
                            r = e.getValueOrDefault(o.callback, o.userCallback);
                        return r ? r(a, n, i) : a
                    }, convertTicksToLabels: function () {
                        var t = this;
                        t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
                    }, getPixelForValue: function (t, e, n) {
                        var i = this;
                        t && t.isValid || (t = i.parseTime(i.getRightValue(t)));
                        var a = t && t.isValid && t.isValid() ? t : i.getLabelMoment(n, e);
                        if (a) {
                            var o = a.diff(i.firstTick, i.tickUnit, !0), r = 0 !== o ? o / i.scaleSizeInUnits : o;
                            if (i.isHorizontal()) {
                                var s = i.width - (i.paddingLeft + i.paddingRight), l = s * r + i.paddingLeft;
                                return i.left + Math.round(l)
                            }
                            var d = i.height - (i.paddingTop + i.paddingBottom), u = d * r + i.paddingTop;
                            return i.top + Math.round(u)
                        }
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.tickMoments[t], null, null)
                    }, getValueForPixel: function (t) {
                        var e = this,
                            n = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                            a = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / n;
                        return a *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(a, e.tickUnit).asSeconds(), "seconds")
                    }, parseTime: function (t) {
                        var e = this;
                        return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? e.options.time.format(t) : i(t, e.options.time.format)
                    }
                });
                t.scaleService.registerScaleType("time", o, a)
            }
        }, {6: 6}]
    }, {}, [7])(7)
}), Chart.defaults.global.responsive = !0, Chart.defaults.global.defaultFontFamily = '"Lato", sans-serif', Chart.defaults.global.defaultFontColor = "#BE9100", Chart.defaults.global.tooltips.backgroundColor = "#BE9100", Chart.defaults.global.legend.position = "bottom", Chart.defaults.global.legend.labels.boxWidth = 16, Chart.defaults.global.legend.labels.padding = 32, Chart.defaults.global.legend.labels.usePointStyle = !0, Chart.defaults.global.legend.labels.fontSize = 10, window.chartDisplayDefaults = {
    borderColor: "#dfdfdf",
    fill: !1,
    pointRadius: 6,
    pointHoverRadius: 8,
    pointBackgroundColor: "#dfdfdf",
    pointHoverBackgroundColor: "#dfdfdf",
    pointBorderColor: "rgba(190,140,0,0.5)",
    pointBorderWidth: 4
};
var chartFlaps = $("#chartFlaps .tabs__child-link"), chartTabs = $("#chartTabs .chart__container");
chartFlaps.on("click", function () {
    chartFlaps.removeClass("tabs__child-link--active"), $(this).addClass("tabs__child-link--active"), chartTabs.removeClass("chart__container--active"), $("#chartTabs .chart__container--" + $(this).data("mode")).addClass("chart__container--active")
});