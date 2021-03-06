! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length
            , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(me) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ke, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n)
                }
                catch (Q) {}
                Te.set(e, t, n)
            }
            else n = void 0;
        return n
    }

    function l(e, t, n, r) {
        var i, o = 1
            , s = 20
            , a = r ? function () {
                return r.cur()
            } : function () {
                return oe.css(e, t, "")
            }
            , u = a()
            , l = n && n[3] || (oe.cssNumber[t] ? "" : "px")
            , c = (oe.cssNumber[t] || "px" !== l && +u) && Ne.exec(oe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, oe.style(e, t, c + l)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function c(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, r = e.length; r > n; n++) we.set(e[n], "globalEval", !t || we.get(t[n], "globalEval"))
    }

    function p(e, t, n, r, i) {
        for (var o, s, a, u, l, p, d = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)
            if ((o = e[g]) || 0 === o)
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (He.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Ae.exec(o) || ["", ""])[1].toLowerCase(), u = Le[a] || Le._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--;) s = s.lastChild;
            oe.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
        }
        else h.push(t.createTextNode(o));
        for (d.textContent = "", g = 0; o = h[g++];)
            if (r && oe.inArray(o, r) > -1) i && i.push(o);
            else if (l = oe.contains(o.ownerDocument, o), s = c(d.appendChild(o), "script"), l && f(s), n)
            for (p = 0; o = s[p++];) qe.test(o.type || "") && n.push(o);
        return d
    }

    function d() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return G.activeElement
        }
        catch (e) {}
    }

    function v(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) v(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
        else if (!i) return e;
        return 1 === o && (s = i, i = function (e) {
            return oe().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, i, r, n)
        })
    }

    function m(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ie.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (we.hasData(e) && (o = we.access(e), s = we.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) oe.event.add(t, i, l[i][n])
            }
            Te.hasData(e) && (a = Te.access(e), u = oe.extend({}, a), Te.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && De.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = J.apply([], t);
        var i, o, s, a, u, l, f = 0
            , d = e.length
            , h = d - 1
            , g = t[0]
            , v = oe.isFunction(g);
        if (v || d > 1 && "string" == typeof g && !re.checkClone && Me.test(g)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r)
        });
        if (d && (i = p(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = oe.map(c(i, "script"), y), a = s.length; d > f; f++) u = i, f !== h && (u = oe.clone(u, !0, !0), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
            if (a)
                for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; a > f; f++) u = s[f], qe.test(u.type || "") && !we.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(We, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function k(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body)
            , r = oe.css(n[0], "display");
        return n.detach(), r
    }

    function E(e) {
        var t = G
            , n = Be[e];
        return n || (n = k(e, t), "none" !== n && n || ($e = ($e || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = $e[0].contentDocument, t.write(), t.close(), n = k(e, t), $e.detach()), Be[e] = n), n
    }

    function N(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || ze(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !re.pixelMarginRight() && Xe.test(s) && _e.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function S(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in Ke) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
            if ((e = Je[n] + t) in Ke) return e
    }

    function D(e, t, n) {
        var r = Ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function A(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + Se[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + Se[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + Se[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + Se[o] + "Width", !0, i)));
        return s
    }

    function q(e, t, n) {
        var r = !0
            , i = "width" === t ? e.offsetWidth : e.offsetHeight
            , o = ze(e)
            , s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = N(e, t, o), (0 > i || null == i) && (i = e.style[t]), Xe.test(i)) return i;
            r = s && (re.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function L(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = we.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && je(r) && (o[s] = we.access(r, "olddisplay", E(r.nodeName)))) : (i = je(r), "none" === n && i || we.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function O() {
        return e.setTimeout(function () {
            Ze = void 0
        }), Ze = oe.now()
    }

    function F(e, t) {
        var n, r = 0
            , i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function P(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function R(e, t, n) {
        var r, i, o, s, a, u, l, c = this
            , f = {}
            , p = e.style
            , d = e.nodeType && je(e)
            , h = we.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), "inline" === ("none" === l ? we.get(e, "olddisplay") || E(e.nodeName) : l) && "none" === oe.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    d = !0
                }
                f[r] = h && h[r] || oe.style(e, r)
            }
            else l = void 0;
        if (oe.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            h ? "hidden" in h && (d = h.hidden) : h = we.access(e, "fxshow", {}), o && (h.hidden = !d), d ? oe(e).show() : c.done(function () {
                oe(e).hide()
            }), c.done(function () {
                var t;
                we.remove(e, "fxshow");
                for (t in f) oe.style(e, t, f[t])
            });
            for (r in f) s = P(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function M(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = oe.cssHooks[r]) && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            }
            else t[r] = i
    }

    function I(e, t, n) {
        var r, i, o = 0
            , s = I.prefilters.length
            , a = oe.Deferred().always(function () {
                delete u.elem
            })
            , u = function () {
                if (i) return !1;
                for (var t = Ze || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            }
            , l = a.promise({
                elem: e
                , props: oe.extend({}, t)
                , opts: oe.extend(!0, {
                    specialEasing: {}
                    , easing: oe.easing._default
                }, n)
                , originalProperties: t
                , originalOptions: n
                , startTime: Ze || O()
                , duration: n.duration
                , tweens: []
                , createTween: function (t, n) {
                    var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                }
                , stop: function (t) {
                    var n = 0
                        , r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            })
            , c = l.props;
        for (M(c, l.opts.specialEasing); s > o; o++)
            if (r = I.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
        return oe.map(c, P, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
            elem: e
            , anim: l
            , queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function $(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0
                , o = t.toLowerCase().match(me) || [];
            if (oe.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function B(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {}
            , s = e === mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function _(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e
    }

    function X(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, s, a, u, l = {}
            , c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                }
                catch (re) {
                    return {
                        state: "parsererror"
                        , error: s ? re : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success"
            , data: t
        }
    }

    function U(e, t, n, r) {
        var i;
        if (oe.isArray(t)) oe.each(t, function (t, i) {
            n || bt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (i in t) U(e + "[" + i + "]", t[i], n, r)
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = []
        , G = e.document
        , Q = Y.slice
        , J = Y.concat
        , K = Y.push
        , Z = Y.indexOf
        , ee = {}
        , te = ee.toString
        , ne = ee.hasOwnProperty
        , re = {}
        , ie = "2.2.4"
        , oe = function (e, t) {
            return new oe.fn.init(e, t)
        }
        , se = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie
        , constructor: oe
        , selector: ""
        , length: 0
        , toArray: function () {
            return Q.call(this)
        }
        , get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        }
        , pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }
        , each: function (e) {
            return oe.each(this, e)
        }
        , map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }
        , slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        }
        , first: function () {
            return this.eq(0)
        }
        , last: function () {
            return this.eq(-1)
        }
        , eq: function (e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }
        , end: function () {
            return this.prevObject || this.constructor()
        }
        , push: K
        , sort: Y.sort
        , splice: Y.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}
            , a = 1
            , u = arguments.length
            , l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, "")
        , isReady: !0
        , error: function (e) {
            throw new Error(e)
        }
        , noop: function () {}
        , isFunction: function (e) {
            return "function" === oe.type(e)
        }
        , isArray: Array.isArray
        , isWindow: function (e) {
            return null != e && e === e.window
        }
        , isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }
        , isPlainObject: function (e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        }
        , isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }
        , type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        }
        , globalEval: function (e) {
            var t, n = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }
        , camelCase: function (e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, se)
        }
        , nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        , each: function (e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        }
        , trim: function (e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        , makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        }
        , inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        }
        , merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        }
        , grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; o > i; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        }
        , map: function (e, t, r) {
            var i, o, s = 0
                , a = [];
            if (n(e))
                for (i = e.length; i > s; s++) null != (o = t(e[s], s, r)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, r)) && a.push(o);
            return J.apply([], a)
        }
        , guid: 1
        , proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (r = Q.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(Q.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        }
        , now: Date.now
        , support: re
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ae = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, l, f, p, d, h = t && t.ownerDocument
                , g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t : M) !== A && D(t), t = t || A, L)) {
                if (11 !== g && (f = ge.exec(e)))
                    if (i = f[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        }
                        else if (h && (s = h.getElementById(i)) && P(t, s) && s.id === i) return n.push(s), n
                    }
                    else {
                        if (f[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = f[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                    }
                if (x.qsa && !_[e + " "] && (!H || !H.test(e))) {
                    if (1 !== g) h = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(me, "\\$&") : t.setAttribute("id", a = R), p = C(e), o = p.length, l = ce.test(a) ? "#" + a : "[id='" + a + "']"; o--;) p[o] = l + " " + c(p[o]);
                        d = p.join(","), h = ve.test(e) && u(t.parentNode) || t
                    }
                    if (d) try {
                        return Q.apply(n, h.querySelectorAll(d)), n
                    }
                    catch ($) {}
                    finally {
                        a === R && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[R] = !0, e
        }

        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            }
            catch (x) {
                return !1
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {}

        function c(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir
                , i = n && "parentNode" === r
                , o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l, c = [I, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                }
                else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[R] || (t[R] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === I && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function d(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function h(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function g(e, t, n, i, o, s) {
            return i && !i[R] && (i = g(i)), o && !o[R] && (o = g(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = []
                    , g = []
                    , v = s.length
                    , m = r || d(t || "*", a.nodeType ? [a] : a, [])
                    , y = !e || !r && t ? m : h(m, p, e, a, u)
                    , x = n ? o || (r ? e : v || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = h(x, g), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[g[c]] = !(y[g[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                }
                else x = h(x === s ? x.splice(v, x.length) : x), o ? o(null, s, x, u) : Q.apply(s, x)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = f(function (e) {
                    return e === t
                }, s, !0), l = f(function (e) {
                    return K(t, e) > -1
                }, s, !0), d = [function (e, n, r) {
                    var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > a; a++)
                if (n = b.relative[e[a].type]) d = [f(p(d), n)];
                else {
                    if (n = b.filter[e[a].type].apply(null, e[a].matches), n[R]) {
                        for (r = ++a; i > r && !b.relative[e[r].type]; r++);
                        return g(a > 1 && p(d), a > 1 && c(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, r > a && v(e.slice(a, r)), i > r && v(e = e.slice(r)), i > r && c(e))
                    }
                    d.push(n)
                }
            return p(d)
        }

        function m(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , s = function (r, s, a, u, l) {
                    var c, f, p, d = 0
                        , g = "0"
                        , v = r && []
                        , m = []
                        , y = N
                        , x = r || o && b.find.TAG("*", l)
                        , w = I += null == y ? 1 : Math.random() || .1
                        , T = x.length;
                    for (l && (N = s === A || s || l); g !== T && null != (c = x[g]); g++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === A || (D(c), a = !L); p = e[f++];)
                                if (p(c, s || A, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (I = w)
                        }
                        i && ((c = !p && c) && d--, r && v.push(c))
                    }
                    if (d += g, i && g !== d) {
                        for (f = 0; p = n[f++];) p(v, m, s, a);
                        if (r) {
                            if (d > 0)
                                for (; g--;) v[g] || m[g] || (m[g] = Y.call(u));
                            m = h(m)
                        }
                        Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (I = w, N = y), v
                };
            return i ? r(s) : s
        }
        var y, x, b, w, T, C, k, E, N, S, j, D, A, q, L, H, O, F, P, R = "sizzle" + 1 * new Date
            , M = e.document
            , I = 0
            , W = 0
            , $ = n()
            , B = n()
            , _ = n()
            , X = function (e, t) {
                return e === t && (j = !0), 0
            }
            , z = 1 << 31
            , U = {}.hasOwnProperty
            , V = []
            , Y = V.pop
            , G = V.push
            , Q = V.push
            , J = V.slice
            , K = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            }
            , Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
            , ee = "[\\x20\\t\\r\\n\\f]"
            , te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
            , ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]"
            , re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)"
            , ie = new RegExp(ee + "+", "g")
            , oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g")
            , se = new RegExp("^" + ee + "*," + ee + "*")
            , ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*")
            , ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g")
            , le = new RegExp(re)
            , ce = new RegExp("^" + te + "$")
            , fe = {
                ID: new RegExp("^#(" + te + ")")
                , CLASS: new RegExp("^\\.(" + te + ")")
                , TAG: new RegExp("^(" + te + "|[*])")
                , ATTR: new RegExp("^" + ne)
                , PSEUDO: new RegExp("^" + re)
                , CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i")
                , bool: new RegExp("^(?:" + Z + ")$", "i")
                , needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }
            , pe = /^(?:input|select|textarea|button)$/i
            , de = /^h\d$/i
            , he = /^[^{]+\{\s*\[native \w/
            , ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
            , ve = /[+~]/
            , me = /'|\\/g
            , ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig")
            , xe = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }
            , be = function () {
                D()
            };
        try {
            Q.apply(V = J.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
        }
        catch (Fe) {
            Q = {
                apply: V.length ? function (e, t) {
                    G.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : M;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, q = A.documentElement, L = !T(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), x.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function (e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(A.getElementsByClassName), x.getById = i(function (e) {
                return q.appendChild(e).id = R, !A.getElementsByName || !A.getElementsByName(R).length
            }), x.getById ? (b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, b.filter.ID = function (e) {
                var t = e.replace(ye, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function (e) {
                var t = e.replace(ye, xe);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), b.find.TAG = x.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = []
                    , i = 0
                    , o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = x.getElementsByClassName && function (e, t) {
                return void 0 !== t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
            }, O = [], H = [], (x.qsa = he.test(A.querySelectorAll)) && (i(function (e) {
                q.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
            }), i(function (e) {
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (x.matchesSelector = he.test(F = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
                x.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", re)
            }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(q.compareDocumentPosition), P = t || he.test(q.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                    , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === M && P(M, e) ? -1 : t === A || t.ownerDocument === M && P(M, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0
                    , i = e.parentNode
                    , o = t.parentNode
                    , a = [e]
                    , u = [t];
                if (!i || !o) return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : S ? K(S, e) - K(S, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === M ? -1 : u[r] === M ? 1 : 0
            }, A) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && L && !_[n + " "] && (!O || !O.test(n)) && (!H || !H.test(n))) try {
                var r = F.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            }
            catch (w) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && D(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && D(e);
            var n = b.attrHandle[t.toLowerCase()]
                , r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : x.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = []
                , r = 0
                , i = 0;
            if (j = !x.detectDuplicates, S = !x.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, w = t.getText = function (e) {
            var t, n = ""
                , r = 0
                , i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                }
                else if (3 === i || 4 === i) return e.nodeValue
            }
            else
                for (; t = e[r++];) n += w(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50
            , createPseudo: r
            , match: fe
            , attrHandle: {}
            , find: {}
            , relative: {
                ">": {
                    dir: "parentNode"
                    , first: !0
                }
                , " ": {
                    dir: "parentNode"
                }
                , "+": {
                    dir: "previousSibling"
                    , first: !0
                }
                , "~": {
                    dir: "previousSibling"
                }
            }
            , preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }
                , CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }
                , PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            }
            , filter: {
                TAG: function (e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }
                , CLASS: function (e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }
                , ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }
                , CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                        , s = "last" !== e.slice(-4)
                        , a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling"
                            , v = t.parentNode
                            , m = a && t.nodeName.toLowerCase()
                            , y = !u && !a
                            , x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (p = v, f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === I && l[1], x = d && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [I, d, x];
                                        break
                                    }
                            }
                            else if (y && (p = t, f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === I && l[1], x = d), x === !1)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[R] || (p[R] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [I, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                }
                , PSEUDO: function (e, n) {
                    var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = K(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            }
            , pseudos: {
                not: r(function (e) {
                    var t = []
                        , n = []
                        , i = k(e.replace(oe, "$1"));
                    return i[R] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                })
                , has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                })
                , contains: r(function (e) {
                    return e = e.replace(ye, xe)
                        , function (t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                })
                , lang: r(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase()
                        , function (t) {
                            var n;
                            do {
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                })
                , target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }
                , root: function (e) {
                    return e === q
                }
                , focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }
                , enabled: function (e) {
                    return e.disabled === !1
                }
                , disabled: function (e) {
                    return e.disabled === !0
                }
                , checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }
                , selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }
                , empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                }
                , parent: function (e) {
                    return !b.pseudos.empty(e)
                }
                , header: function (e) {
                    return de.test(e.nodeName)
                }
                , input: function (e) {
                    return pe.test(e.nodeName)
                }
                , button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }
                , text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }
                , first: a(function () {
                    return [0]
                })
                , last: a(function (e, t) {
                    return [t - 1]
                })
                , eq: a(function (e, t, n) {
                    return [0 > n ? n + t : n]
                })
                , even: a(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                })
                , odd: a(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                })
                , lt: a(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                })
                , gt: a(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (y in {
                radio: !0
                , checkbox: !0
                , file: !0
                , password: !0
                , image: !0
            }) b.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0
                , reset: !0
            }) b.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = b.filters = b.pseudos, b.setFilters = new l, C = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = b.preFilter; a;) {
                r && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ae.exec(a)) && (r = i.shift(), o.push({
                    value: r
                    , type: i[0].replace(oe, " ")
                }), a = a.slice(r.length));
                for (s in b.filter) !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r
                    , type: s
                    , matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : B(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = []
                , i = []
                , o = _[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]), o[R] ? r.push(o) : i.push(o);
                o = _(e, m(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function (e, t, n, r) {
            var i, o, s, a, l, f = "function" == typeof e && e
                , p = !r && C(e = f.selector || e);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === t.nodeType && L && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (r = l(s.matches[0].replace(ye, xe), ve.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && c(o))) return Q.apply(n, r), n;
                        break
                    }
            }
            return (f || k(e, p))(r, t, !L, n, !t || ve.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = R.split("").sort(X).join("") === R, x.detectDuplicates = !!j, D(), x.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = ae, oe.expr = ae.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ae.uniqueSort, oe.text = ae.getText, oe.isXMLDoc = ae.isXML, oe.contains = ae.contains;
    var ue = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && oe(e).is(n)) break;
                    r.push(e)
                }
            return r
        }
        , le = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        , ce = oe.expr.match.needsContext
        , fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , pe = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = this.length
                , r = []
                , i = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }
        , filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }
        , not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }
        , is: function (e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var de, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || de, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), fe.test(r[1]) && oe.isPlainObject(t))
                    for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = G.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    }).prototype = oe.fn, de = oe(G);
    var ge = /^(?:parents|prev(?:Until|All))/
        , ve = {
            children: !0
            , contents: !0
            , next: !0
            , prev: !0
        };
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this)
                , n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        }
        , closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        }
        , index: function (e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }
        , add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        }
        , addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }
        , parents: function (e) {
            return ue(e, "parentNode")
        }
        , parentsUntil: function (e, t, n) {
            return ue(e, "parentNode", n)
        }
        , next: function (e) {
            return i(e, "nextSibling")
        }
        , prev: function (e) {
            return i(e, "previousSibling")
        }
        , nextAll: function (e) {
            return ue(e, "nextSibling")
        }
        , prevAll: function (e) {
            return ue(e, "previousSibling")
        }
        , nextUntil: function (e, t, n) {
            return ue(e, "nextSibling", n)
        }
        , prevUntil: function (e, t, n) {
            return ue(e, "previousSibling", n)
        }
        , siblings: function (e) {
            return le((e.parentNode || {}).firstChild, e)
        }
        , children: function (e) {
            return le(e.firstChild)
        }
        , contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (ve[e] || oe.uniqueSort(i), ge.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var me = /\S+/g;
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, r, i, s = []
            , a = []
            , u = -1
            , l = function () {
                for (i = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
            }
            , c = {
                add: function () {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                        oe.each(n, function (n, r) {
                            oe.isFunction(r) ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== oe.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                }
                , remove: function () {
                    return oe.each(arguments, function (e, t) {
                        for (var n;
                            (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), u >= n && u--
                    }), this
                }
                , has: function (e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                }
                , empty: function () {
                    return s && (s = []), this
                }
                , disable: function () {
                    return i = a = [], s = n = "", this
                }
                , disabled: function () {
                    return !s
                }
                , lock: function () {
                    return i = a = [], n || (s = n = ""), this
                }
                , locked: function () {
                    return !!i
                }
                , fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                }
                , fire: function () {
                    return c.fireWith(this, arguments), this
                }
                , fired: function () {
                    return !!r
                }
            };
        return c
    }, oe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
                , n = "pending"
                , r = {
                    state: function () {
                        return n
                    }
                    , always: function () {
                        return i.done(arguments).fail(arguments), this
                    }
                    , then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }
                    , promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                }
                , i = {};
            return r.pipe = r.then, oe.each(t, function (e, o) {
                var s = o[2]
                    , a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }
        , when: function (e) {
            var t, n, r, i = 0
                , o = Q.call(arguments)
                , s = o.length
                , a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0
                , u = 1 === a ? e : oe.Deferred()
                , l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ye;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1
        , readyWait: 1
        , holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        }
        , ready: function (e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (ye.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function (t) {
        return ye || (ye = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ye.promise(t)
    }, oe.ready.promise();
    var xe = function (e, t, n, r, i, o, s) {
            var a = 0
                , u = e.length
                , l = null == n;
            if ("object" === oe.type(n)) {
                i = !0;
                for (a in n) xe(e, t, a, n[a], !0, o, s)
            }
            else if (void 0 !== r && (i = !0, oe.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(oe(e), n)
                })), t))
                for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }
        , be = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n
                , writable: !0
                , configurable: !0
            }), e[this.expando]
        }
        , cache: function (e) {
            if (!be(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t
                , configurable: !0
            }))), t
        }
        , set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        }
        , get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }
        , access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }
        , remove: function (e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(me) || [])), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }
        , hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var we = new a
        , Te = new a
        , Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , ke = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Te.hasData(e) || we.hasData(e)
        }
        , data: function (e, t, n) {
            return Te.access(e, t, n)
        }
        , removeData: function (e, t) {
            Te.remove(e, t)
        }
        , _data: function (e, t, n) {
            return we.access(e, t, n)
        }
        , _removeData: function (e, t) {
            we.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0]
                , s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Te.get(o), 1 === o.nodeType && !we.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
                    we.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Te.set(this, e)
            }) : xe(this, function (t) {
                var n, r;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Te.get(o, e) || Te.get(o, e.replace(ke, "-$&").toLowerCase()))) return n;
                    if (r = oe.camelCase(e), void 0 !== (n = Te.get(o, r))) return n;
                    if (void 0 !== (n = u(o, r, void 0))) return n
                }
                else r = oe.camelCase(e), this.each(function () {
                    var n = Te.get(this, r);
                    Te.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }
        , removeData: function (e) {
            return this.each(function () {
                Te.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = we.get(e, t), n && (!r || oe.isArray(n) ? r = we.access(e, t, oe.makeArray(n)) : r.push(n)), r || []) : void 0
        }
        , dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
                , r = n.length
                , i = n.shift()
                , o = oe._queueHooks(e, t)
                , s = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }
        , _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return we.get(e, n) || we.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    we.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        }
        , dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        }
        , clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }
        , promise: function (e, t) {
            var n, r = 1
                , i = oe.Deferred()
                , o = this
                , s = this.length
                , a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = we.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ne = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i")
        , Se = ["Top", "Right", "Bottom", "Left"]
        , je = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        }
        , De = /^(?:checkbox|radio)$/i
        , Ae = /<([\w:-]+)/
        , qe = /^$|\/(?:java|ecma)script/i
        , Le = {
            option: [1, "<select multiple='multiple'>", "</select>"]
            , thead: [1, "<table>", "</table>"]
            , col: [2, "<table><colgroup>", "</colgroup></table>"]
            , tr: [2, "<table><tbody>", "</tbody></table>"]
            , td: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
            , _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td;
    var He = /<|&#?\w+;/;
    ! function () {
        var e = G.createDocumentFragment()
            , t = e.appendChild(G.createElement("div"))
            , n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Oe = /^key/
        , Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Pe = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {}
        , add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = we.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(me) || [""], l = t.length; l--;) a = Pe.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = oe.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = oe.event.special[d] || {}, c = oe.extend({
                    type: d
                    , origType: g
                    , data: r
                    , handler: n
                    , guid: n.guid
                    , selector: i
                    , needsContext: i && oe.expr.match.needsContext.test(i)
                    , namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), oe.event.global[d] = !0)
        }
        , remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = we.hasData(e) && we.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(me) || [""], l = t.length; l--;)
                    if (a = Pe.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = oe.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, d, v.handle), delete u[d])
                    }
                    else
                        for (d in u) oe.event.remove(e, d + t[l], n, r, !0);
                oe.isEmptyObject(u) && we.remove(e, "handle events")
            }
        }
        , dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, s = []
                , a = Q.call(arguments)
                , u = (we.get(this, "events") || {})[e.type] || []
                , l = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        }
        , handlers: function (e, t) {
            var n, r, i, o, s = []
                , a = t.delegateCount
                , u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u
                            , handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this
                , handlers: t.slice(a)
            }), s
        }
        , props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")
        , fixHooks: {}
        , keyHooks: {
            props: "char charCode key keyCode".split(" ")
            , filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        }
        , mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" ")
            , filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        }
        , fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, r, i = e.type
                , o = e
                , s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Fe.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        }
        , special: {
            load: {
                noBubble: !0
            }
            , focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                }
                , delegateType: "focusin"
            }
            , blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                }
                , delegateType: "focusout"
            }
            , click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                }
                , _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            }
            , beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event
        , isDefaultPrevented: h
        , isPropagationStopped: h
        , isImmediatePropagationStopped: h
        , isSimulated: !1
        , preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && !this.isSimulated && e.preventDefault()
        }
        , stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && !this.isSimulated && e.stopPropagation()
        }
        , stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover"
        , mouseleave: "mouseout"
        , pointerenter: "pointerover"
        , pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t
            , bindType: t
            , handle: function (e) {
                var n, r = this
                    , i = e.relatedTarget
                    , o = e.handleObj;
                return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, r) {
            return v(this, e, t, n, r)
        }
        , one: function (e, t, n, r) {
            return v(this, e, t, n, r, 1)
        }
        , off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Re = /<script|<style|<link/i
        , Me = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ie = /^true\/(.*)/
        , We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        }
        , clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0)
                , u = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a), o = c(e), r = 0, i = o.length; i > r; r++) w(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || c(e), s = s || c(a), r = 0, i = o.length; i > r; r++) b(o[r], s[r]);
                else b(e, a);
            return s = c(a, "script"), s.length > 0 && f(s, !u && c(e, "script")), a
        }
        , cleanData: function (e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (be(n)) {
                    if (t = n[we.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[we.expando] = void 0
                    }
                    n[Te.expando] && (n[Te.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: T
        , detach: function (e) {
            return C(this, e, !0)
        }
        , remove: function (e) {
            return C(this, e)
        }
        , text: function (e) {
            return xe(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }
        , append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    m(this, e).appendChild(e)
                }
            })
        }
        , prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }
        , before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }
        , after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }
        , empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
            return this
        }
        , clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        }
        , html: function (e) {
            return xe(this, function (e) {
                var t = this[0] || {}
                    , n = 0
                    , r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Re.test(e) && !Le[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    }
                    catch (Q) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }
        , replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append"
        , prependTo: "prepend"
        , insertBefore: "before"
        , insertAfter: "after"
        , replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(i[s])[t](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var $e, Be = {
            HTML: "block"
            , BODY: "block"
        }
        , _e = /^margin/
        , Xe = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i")
        , ze = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }
        , Ue = function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        }
        , Ve = G.documentElement;
    ! function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ve.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Ve.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div")
            , a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(re, {
            pixelPosition: function () {
                return t(), n
            }
            , boxSizingReliable: function () {
                return null == r && t(), r
            }
            , pixelMarginRight: function () {
                return null == r && t(), i
            }
            , reliableMarginLeft: function () {
                return null == r && t(), o
            }
            , reliableMarginRight: function () {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ve.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ve.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/
        , Ge = {
            position: "absolute"
            , visibility: "hidden"
            , display: "block"
        }
        , Qe = {
            letterSpacing: "0"
            , fontWeight: "400"
        }
        , Je = ["Webkit", "O", "Moz", "ms"]
        , Ke = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }
        , cssNumber: {
            animationIterationCount: !0
            , columnCount: !0
            , fillOpacity: !0
            , flexGrow: !0
            , flexShrink: !0
            , fontWeight: !0
            , lineHeight: !0
            , opacity: !0
            , order: !0
            , orphans: !0
            , widows: !0
            , zIndex: !0
            , zoom: !0
        }
        , cssProps: {
            float: "cssFloat"
        }
        , style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = oe.camelCase(t)
                    , u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ne.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        }
        , css: function (e, t, n, r) {
            var i, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? Ye.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ue(e, Ge, function () {
                    return q(e, t, r)
                }) : q(e, t, r) : void 0
            }
            , set: function (e, n, r) {
                var i, o = r && ze(e)
                    , s = r && A(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (i = Ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), D(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = S(re.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = S(re.reliableMarginRight, function (e, t) {
        return t ? Ue(e, {
            display: "inline-block"
        }, N, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: ""
        , padding: ""
        , border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, _e.test(e) || (oe.cssHooks[e + t].set = D)
    }), oe.fn.extend({
        css: function (e, t) {
            return xe(this, function (e, t, n) {
                var r, i, o = {}
                    , s = 0;
                if (oe.isArray(t)) {
                    for (r = ze(e), i = t.length; i > s; s++) o[t[s]] = oe.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        }
        , show: function () {
            return L(this, !0)
        }
        , hide: function () {
            return L(this)
        }
        , toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                je(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = H, H.prototype = {
        constructor: H
        , init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        }
        , cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        }
        , run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }
            , set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        }
        , swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
        , _default: "swing"
    }, oe.fx = H.prototype.init, oe.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/
        , nt = /queueHooks$/;
    oe.Animation = oe.extend(I, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, Ne.exec(t), n), n
                }]
            }
            , tweener: function (e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(me);
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
            }
            , prefilters: [R]
            , prefilter: function (e, t) {
                t ? I.prefilters.unshift(e) : I.prefilters.push(e)
            }
        }), oe.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e
                , duration: e
                , easing: n && t || t && !oe.isFunction(t) && t
            };
            return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
            }, r
        }, oe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(je).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            }
            , animate: function (e, t, n, r) {
                var i = oe.isEmptyObject(e)
                    , o = oe.speed(t, n, r)
                    , s = function () {
                        var t = I(this, oe.extend({}, e), o);
                        (i || we.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            }
            , stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0
                        , i = null != e && e + "queueHooks"
                        , o = oe.timers
                        , s = we.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && nt.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || oe.dequeue(this, e)
                })
            }
            , finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = we.get(this)
                        , r = n[e + "queue"]
                        , i = n[e + "queueHooks"]
                        , o = oe.timers
                        , s = r ? r.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
            }
        }), oe.each({
            slideDown: F("show")
            , slideUp: F("hide")
            , slideToggle: F("toggle")
            , fadeIn: {
                opacity: "show"
            }
            , fadeOut: {
                opacity: "hide"
            }
            , fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            oe.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var e, t = 0
                , n = oe.timers;
            for (Ze = oe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), Ze = void 0
        }, oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13
        , oe.fx.start = function () {
            et || (et = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            e.clearInterval(et), et = null
        }, oe.fx.speeds = {
            slow: 600
            , fast: 200
            , _default: 400
        }, oe.fn.delay = function (t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        }
        , function () {
            var e = G.createElement("input")
                , t = G.createElement("select")
                , n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
    var rt, it = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return xe(this, oe.attr, e, t, arguments.length > 1)
        }
        , removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? rt : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
        }
        , attrHooks: {
            type: {
                set: function (e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
        , removeAttr: function (e, t) {
            var n, r, i = 0
                , o = t && t.match(me);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), rt = {
        set: function (e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = it[t] || oe.find.attr;
        it[t] = function (e, t, r) {
            var i, o;
            return r || (o = it[t], it[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = o), i
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i
        , st = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return xe(this, oe.prop, e, t, arguments.length > 1)
        }
        , removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }
        , propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
        , propFix: {
            for: "htmlFor"
            , class: "className"
        }
    }), re.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
        , set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[u++];)
                    if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(at, " ")) {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        }
        , removeClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[u++];)
                    if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(at, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        }
        , toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = oe(this), o = e.match(me) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = W(this), t && we.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : we.get(this, "__className__") || ""))
            })
        }
        , hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + W(n) + " ").replace(at, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    oe.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = oe.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(/[\x20\t\r\n\f]+/g, " ")
                }
            }
            , select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                }
                , set: function (e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        }, re.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || G]
                , d = ne.call(t, "type") ? t.type : t
                , h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !ut.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !oe.isWindow(r)) {
                    for (u = f.delegateType || d, ut.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (we.get(s, "events") || {})[t.type] && we.get(s, "handle"), c && c.apply(s, n), (c = l && s[l]) && c.apply && be(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !be(r) || l && oe.isFunction(r[d]) && !oe.isWindow(r) && (a = r[l], a && (r[l] = null), oe.event.triggered = d, r[d](), oe.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        }
        , simulate: function (e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e
                , isSimulated: !0
            });
            oe.event.trigger(r, null, t)
        }
    }), oe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        }
        , triggerHandler: function (e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || oe.each({
        focus: "focusin"
        , blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this
                    , i = we.access(r, t);
                i || r.addEventListener(e, n, !0), we.access(r, t, (i || 0) + 1)
            }
            , teardown: function () {
                var r = this.ownerDocument || this
                    , i = we.access(r, t) - 1;
                i ? we.access(r, t, i) : (r.removeEventListener(e, n, !0), we.remove(r, t))
            }
        }
    });
    var lt = e.location
        , ct = oe.now()
        , ft = /\?/;
    oe.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        }
        catch (G) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var pt = /([?&])_=[^&]*/
        , dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , gt = /^(?:GET|HEAD)$/
        , vt = {}
        , mt = {}
        , yt = "*/".concat("*")
        , xt = G.createElement("a");
    xt.href = lt.href, oe.extend({
        active: 0
        , lastModified: {}
        , etag: {}
        , ajaxSettings: {
            url: lt.href
            , type: "GET"
            , isLocal: ht.test(lt.protocol)
            , global: !0
            , processData: !0
            , async: !0
            , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            , accepts: {
                "*": yt
                , text: "text/plain"
                , html: "text/html"
                , xml: "application/xml, text/xml"
                , json: "application/json, text/javascript"
            }
            , contents: {
                xml: /\bxml\b/
                , html: /\bhtml/
                , json: /\bjson\b/
            }
            , responseFields: {
                xml: "responseXML"
                , text: "responseText"
                , json: "responseJSON"
            }
            , converters: {
                "* text": String
                , "text html": !0
                , "text json": oe.parseJSON
                , "text xml": oe.parseXML
            }
            , flatOptions: {
                url: !0
                , context: !0
            }
        }
        , ajaxSetup: function (e, t) {
            return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e)
        }
        , ajaxPrefilter: $(vt)
        , ajaxTransport: $(mt)
        , ajax: function (t, n) {
            function r(t, n, r, a) {
                var l, f, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (x = X(p, T, r)), x = z(p, x, T, l), l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, y = x.error, l = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]), T.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : y]), v.fireWith(d, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, p = oe.ajaxSetup({}, n)
                , d = p.context || p
                , h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event
                , g = oe.Deferred()
                , v = oe.Callbacks("once memory")
                , m = p.statusCode || {}
                , y = {}
                , x = {}
                , b = 0
                , w = "canceled"
                , T = {
                    readyState: 0
                    , getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = dt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }
                    , getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    }
                    , setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    }
                    , overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    }
                    , statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    }
                    , abort: function (e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || lt.href) + "").replace(/#.*$/, "").replace(/^\/\//, lt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(me) || [""], null == p.crossDomain) {
                l = G.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = xt.protocol + "//" + xt.host != l.protocol + "//" + l.host
                }
                catch (pe) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), B(vt, p, n, T), 2 === b) return T;
            c = oe.event && p.global, c && 0 == oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !gt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ft.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = pt.test(o) ? o.replace(pt, "$1_=" + ct++) : o + (ft.test(o) ? "&" : "?") + "_=" + ct++)), p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (f in {
                    success: 1
                    , error: 1
                    , complete: 1
                }) T[f](p[f]);
            if (i = B(mt, p, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), 2 === b) return T;
                p.async && p.timeout > 0 && (u = e.setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(y, r)
                }
                catch (pe) {
                    if (!(2 > b)) throw pe;
                    r(-1, pe)
                }
            }
            else r(-1, "No Transport");
            return T
        }
        , getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        }
        , getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, r, i) {
            return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
                url: e
                , type: t
                , dataType: i
                , data: n
                , success: r
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e
            , type: "GET"
            , dataType: "script"
            , async: !1
            , global: !1
            , throws: !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }
        , wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this)
                    , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }
        , wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }
        , unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var bt = /\[\]$/
        , wt = /^(?:submit|button|image|reset|file)$/i
        , Tt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, r = []
            , i = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(/%20/g, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        }
        , serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !De.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name
                        , value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name
                    , value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        }
        catch (t) {}
    };
    var Ct = {
            0: 200
            , 1223: 204
        }
        , kt = oe.ajaxSettings.xhr();
    re.cors = !!kt && "withCredentials" in kt, re.ajax = kt = !!kt, oe.ajaxTransport(function (t) {
        var n, r;
        return re.cors || kt && !t.crossDomain ? {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function (e) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ct[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                }
                catch (ee) {
                    if (n) throw ee
                }
            }
            , abort: function () {
                n && n()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }
        , contents: {
            script: /\b(?:java|ecma)script\b/
        }
        , converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset
                        , src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                }
                , abort: function () {
                    n && n()
                }
            }
        }
    });
    var Et = []
        , Nt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback"
        , jsonpCallback: function () {
            var e = Et.pop() || oe.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + i) : t.jsonp !== !1 && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || oe.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Et.push(i)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var r = fe.exec(e)
            , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
    };
    var St = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && St) return St.apply(this, arguments);
        var r, i, o, s = this
            , a = e.indexOf(" ");
        return a > -1 && (r = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && oe.ajax({
            url: e
            , type: i || "GET"
            , dataType: "html"
            , data: t
        }).done(function (e) {
            o = arguments, s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = oe.css(e, "position")
                , f = oe(e)
                , p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0]
                , i = {
                    top: 0
                    , left: 0
                }
                , o = r && r.ownerDocument;
            return o ? (t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - t.clientTop
                , left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        }
        , position: function () {
            if (this[0]) {
                var e, t, n = this[0]
                    , r = {
                        top: 0
                        , left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0)
                    , left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        }
        , offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ve
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset"
        , scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (r) {
            return xe(this, function (e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = S(re.pixelPosition, function (e, n) {
            return n ? (n = N(e, t), Xe.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height"
        , Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e
            , content: t
            , "": "outer" + e
        }, function (n, r) {
            oe.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                    , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return xe(this, function (t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, s) : oe.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }
        , unbind: function (e, t) {
            return this.off(e, null, t)
        }
        , delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }
        , undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
        , size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var jt = e.jQuery
        , Dt = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = Dt), t && e.jQuery === oe && (e.jQuery = jt), oe
    }, t || (e.jQuery = e.$ = oe), oe
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery)
, function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap")
            , e = {
                WebkitTransition: "webkitTransitionEnd"
                , MozTransition: "transitionend"
                , OTransition: "oTransitionEnd otransitionend"
                , transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1
            , o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end
            , delegateType: t.support.transition.end
            , handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this)
                , n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]'
        , o = function (e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this)
            , s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.button")
                , s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function (e) {
        var i = "disabled"
            , o = this.$element
            , n = o.is("input") ? "val" : "html"
            , s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0
            , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        }
        else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.carousel")
                , s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e)
                , a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }
    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3
        , pause: "hover"
        , wrap: !0
        , keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1
            , n = (i + o) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function (t) {
        var e = this
            , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active")
            , s = o || this.getItemForDirection(e, n)
            , a = this.interval
            , r = "next" == e ? "left" : "right"
            , l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0]
            , d = t.Event("slide.bs.carousel", {
                relatedTarget: h
                , direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h
                , direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this)
            , s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data())
                , r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this)
                , n = i.data("bs.collapse")
                , s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n)
            , a = s.data("bs.collapse")
            , r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this)
                , n = e(o)
                , s = {
                    relatedTarget: this
                };
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this)
                , o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var n = ".dropdown-backdrop"
        , s = '[data-toggle="dropdown"]'
        , a = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n)
                , a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o)
                    , a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var l = r.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery)
, function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this)
                , s = n.data("bs.modal")
                , a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }
    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0
        , keyboard: !0
        , show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this
            , n = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this
            , n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        }
        else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        }
        else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : ""
            , paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: ""
            , paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this)
            , n = o.attr("href")
            , s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
            , a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.tooltip")
                , s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0
        , placement: "top"
        , selector: !1
        , template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        , trigger: "hover focus"
        , title: ""
        , delay: 0
        , html: !1
        , container: !1
        , viewport: {
            selector: "body"
            , padding: 0
        }
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1
                , hover: !1
                , focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin"
                    , l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual"
            , selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay
            , hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}
            , i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this
                , s = this.tip()
                , a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement
                , l = /\s?auto?\s?/i
                , h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0
                , left: 0
                , display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition()
                , p = s[0].offsetWidth
                , c = s[0].offsetHeight;
            if (h) {
                var f = r
                    , u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip()
            , n = o[0].offsetWidth
            , s = o[0].offsetHeight
            , a = parseInt(o.css("margin-top"), 10)
            , r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({
                    top: Math.round(t.top)
                    , left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth
            , h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i)
            , c = p ? 2 * d.left - n + l : 2 * d.top - s + h
            , f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip()
            , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this
            , s = t(this.$tip)
            , a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0]
            , o = "BODY" == i.tagName
            , n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left
            , height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement
            , a = o ? {
                top: 0
                , left: 0
            } : s ? null : e.offset()
            , r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            }
            , l = o ? {
                width: t(window).width()
                , height: t(window).height()
            } : null;
        return t.extend({}, n, r, l, a)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height
            , left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o
            , left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2
            , left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2
            , left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {
            top: 0
            , left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0
            , a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll
                , l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        }
        else {
            var h = e.left - s
                , d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t = this.$element
            , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, i.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.popover")
                , s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right"
        , trigger: "click"
        , content: ""
        , template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip()
            , e = this.getTitle()
            , i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element
            , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery)
, function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.scrollspy")
                , s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this
            , i = "offset"
            , o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this)
                , n = e.data("target") || e.attr("href")
                , s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset
            , i = this.getScrollHeight()
            , o = this.options.offset + i - this.$scrollElement.height()
            , n = this.offsets
            , s = this.targets
            , a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
            , o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element
            , i = e.closest("ul:not(.dropdown-menu)")
            , o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a")
                , s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                })
                , a = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab"
                        , relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab"
                        , relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var a = o.find("> .active")
            , r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery)
, function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this)
                , n = o.data("bs.affix")
                , s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0
        , target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop()
            , s = this.$element.offset()
            , a = this.$target.height();
        if (null != i && "top" == this.affixed) return n <= i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed
            , l = r ? n : s.top
            , h = r ? a : e;
        return null != i && n <= i ? "top" : null != o && l + h >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop()
            , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
                , o = this.options.offset
                , n = o.top
                , s = o.bottom
                , a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : "")
                    , h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this)
                , o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
! function (e) {
    function r(r) {
        return e(r).filter(function () {
            return e(this).is(":appeared")
        })
    }

    function t() {
        a = !1;
        for (var e = 0, t = i.length; e < t; e++) {
            var n = r(i[e]);
            if (n.trigger("appear", [n]), p[e]) {
                var o = p[e].not(n);
                o.trigger("disappear", [o])
            }
            p[e] = n
        }
    }

    function n(e) {
        i.push(e), p.push()
    }
    var i = []
        , o = !1
        , a = !1
        , f = {
            interval: 250
            , force_process: !1
        }
        , u = e(window)
        , p = [];
    e.expr[":"].appeared = function (r) {
        var t = e(r);
        if (!t.is(":visible")) return !1;
        var n = u.scrollLeft()
            , i = u.scrollTop()
            , o = t.offset()
            , a = o.left
            , f = o.top;
        return f + t.height() >= i && f - (t.data("appear-top-offset") || 0) <= i + u.height() && a + t.width() >= n && a - (t.data("appear-left-offset") || 0) <= n + u.width()
    }, e.fn.extend({
        appear: function (r) {
            var i = e.extend({}, f, r || {})
                , u = this.selector || this;
            if (!o) {
                var p = function () {
                    a || (a = !0, setTimeout(t, i.interval))
                };
                e(window).scroll(p).resize(p), o = !0
            }
            return i.force_process && setTimeout(t, i.interval), n(u), e(u)
        }
    }), e.extend({
        force_appear: function () {
            return !!o && (t(), !0)
        }
    })
}(function () {
    return "undefined" != typeof module ? require("jquery") : jQuery
}());
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad"
    , swing: function (n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    }
    , easeInQuad: function (n, e, t, u, a) {
        return u * (e /= a) * e + t
    }
    , easeOutQuad: function (n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    }
    , easeInOutQuad: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    }
    , easeInCubic: function (n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    }
    , easeOutCubic: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    }
    , easeInOutCubic: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    }
    , easeInQuart: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    }
    , easeOutQuart: function (n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    }
    , easeInOutQuart: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    }
    , easeInQuint: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    }
    , easeOutQuint: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    }
    , easeInOutQuint: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    }
    , easeInSine: function (n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    }
    , easeOutSine: function (n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    }
    , easeInOutSine: function (n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    }
    , easeInExpo: function (n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    }
    , easeOutExpo: function (n, e, t, u, a) {
        return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t
    }
    , easeInOutExpo: function (n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t
    }
    , easeInCirc: function (n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    }
    , easeOutCirc: function (n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    }
    , easeInOutCirc: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    }
    , easeInElastic: function (n, e, t, u, a) {
        var r = 1.70158
            , i = 0
            , s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        }
        else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    }
    , easeOutElastic: function (n, e, t, u, a) {
        var r = 1.70158
            , i = 0
            , s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        }
        else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    }
    , easeInOutElastic: function (n, e, t, u, a) {
        var r = 1.70158
            , i = 0
            , s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        }
        else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    }
    , easeInBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    }
    , easeOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    }
    , easeInOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
    }
    , easeInBounce: function (n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    }
    , easeOutBounce: function (n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    }
    , easeInOutBounce: function (n, e, t, u, a) {
        return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
! function (o) {
    o.fn.UItoTop = function (n) {
        var e = {
                text: "To Top"
                , min: 200
                , inDelay: 600
                , outDelay: 400
                , containerID: "toTop"
                , containerHoverID: "toTopHover"
                , scrollSpeed: 1200
                , easingType: "linear"
            }
            , t = o.extend(e, n)
            , i = "#" + t.containerID
            , a = "#" + t.containerHoverID;
        o("body").append('<a href="#" id="' + t.containerID + '">' + t.text + "</a>"), o(i).hide().on("click.UItoTop", function () {
            return o("html, body").animate({
                scrollTop: 0
            }, t.scrollSpeed, t.easingType), o("#" + t.containerHoverID, this).stop().animate({
                opacity: 0
            }, t.inDelay, t.easingType), !1
        }).prepend('<span id="' + t.containerHoverID + '"></span>').hover(function () {
            o(a, this).stop().animate({
                opacity: 1
            }, 600, "linear")
        }, function () {
            o(a, this).stop().animate({
                opacity: 0
            }, 700, "linear")
        }), o(window).scroll(function () {
            var n = o(window).scrollTop();
            void 0 === document.body.style.maxHeight && o(i).css({
                position: "absolute"
                , top: n + o(window).height() - 50
            }), n > t.min ? o(i).fadeIn(t.inDelay) : o(i).fadeOut(t.Outdelay)
        })
    }
}(jQuery);
! function (l, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof exports ? require("jquery") : l.jQuery)
}(this, function (l) {
    "use strict";

    function e(e) {
        if (r.webkit && !e) return {
            height: 0
            , width: 0
        };
        if (!r.data.outer) {
            var s = {
                border: "none"
                , "box-sizing": "content-box"
                , height: "200px"
                , margin: "0"
                , padding: "0"
                , width: "200px"
            };
            r.data.inner = l("<div>").css(l.extend({}, s)), r.data.outer = l("<div>").css(l.extend({
                left: "-1000px"
                , overflow: "scroll"
                , position: "absolute"
                , top: "-1000px"
            }, s)).append(r.data.inner).appendTo("body")
        }
        return r.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(r.data.outer.offset().top - r.data.inner.offset().top || 0)
            , width: Math.ceil(r.data.outer.offset().left - r.data.inner.offset().left || 0)
        }
    }

    function s() {
        var l = e(!0);
        return !(l.height || l.width)
    }

    function o(l) {
        var e = l.originalEvent;
        return !(e.axis && e.axis === e.HORIZONTAL_AXIS || e.wheelDeltaX)
    }
    var r = {
        data: {
            index: 0
            , name: "scrollbar"
        }
        , firefox: /firefox/i.test(navigator.userAgent)
        , macosx: /mac/i.test(navigator.platform)
        , msedge: /edge\/\d+/i.test(navigator.userAgent)
        , msie: /(msie|trident)/i.test(navigator.userAgent)
        , mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent)
        , overlay: null
        , scroll: null
        , scrolls: []
        , webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    r.scrolls.add = function (l) {
        this.remove(l).push(l)
    }, r.scrolls.remove = function (e) {
        for (; l.inArray(e, this) >= 0;) this.splice(l.inArray(e, this), 1);
        return this
    };
    var t = {
            autoScrollSize: !0
            , autoUpdate: !0
            , debug: !1
            , disableBodyScroll: !1
            , duration: 200
            , ignoreMobile: !1
            , ignoreOverlay: !1
            , isRtl: !1
            , scrollStep: 30
            , showArrows: !1
            , stepScrolling: !0
            , scrollx: null
            , scrolly: null
            , onDestroy: null
            , onFallback: null
            , onInit: null
            , onScroll: null
            , onUpdate: null
        }
        , i = function (o) {
            r.scroll || (r.overlay = s(), r.scroll = e(), a(), l(window).resize(function () {
                var l = !1;
                if (r.scroll && (r.scroll.height || r.scroll.width)) {
                    var s = e();
                    s.height === r.scroll.height && s.width === r.scroll.width || (r.scroll = s, l = !0)
                }
                a(l)
            })), this.container = o, this.namespace = ".scrollbar_" + r.data.index++, this.options = l.extend({}, t, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, o.data(r.data.name, this), r.scrolls.add(this)
        };
    i.prototype = {
        destroy: function () {
            if (this.wrapper) {
                this.container.removeData(r.data.name), r.scrolls.remove(this);
                var e = this.container.scrollLeft()
                    , s = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: ""
                    , margin: ""
                    , "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(s), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), l(document).add("body").off(this.namespace), l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        }
        , init: function (e) {
            var s = this
                , t = this.container
                , i = this.containerWrapper || t
                , n = this.namespace
                , a = l.extend(this.options, e || {})
                , c = {
                    x: this.scrollx
                    , y: this.scrolly
                }
                , d = this.wrapper
                , h = {}
                , u = {
                    scrollLeft: t.scrollLeft()
                    , scrollTop: t.scrollTop()
                };
            if (r.mobile && a.ignoreMobile || r.overlay && a.ignoreOverlay || r.macosx && !r.webkit) return l.isFunction(a.onFallback) && a.onFallback.apply(this, [t]), !1;
            if (d) h = {
                height: "auto"
                , "margin-bottom": r.scroll.height * -1 + "px"
                , "max-height": ""
            }, h[a.isRtl ? "margin-left" : "margin-right"] = r.scroll.width * -1 + "px", i.css(h);
            else {
                if (this.wrapper = d = l("<div>").addClass("scroll-wrapper").addClass(t.attr("class")).css("position", "absolute" === t.css("position") ? "absolute" : "relative").insertBefore(t).append(t), a.isRtl && d.addClass("scroll--rtl"), t.is("textarea") && (this.containerWrapper = i = l("<div>").insertBefore(t).append(t), d.addClass("scroll-textarea")), h = {
                        height: "auto"
                        , "margin-bottom": r.scroll.height * -1 + "px"
                        , "max-height": ""
                    }, h[a.isRtl ? "margin-left" : "margin-right"] = r.scroll.width * -1 + "px", i.addClass("scroll-content").css(h), t.on("scroll" + n, function (e) {
                        var o = t.scrollLeft()
                            , i = t.scrollTop();
                        if (a.isRtl) switch (!0) {
                        case r.firefox:
                            o = Math.abs(o);
                        case r.msedge || r.msie:
                            o = t[0].scrollWidth - t[0].clientWidth - o
                        }
                        l.isFunction(a.onScroll) && a.onScroll.call(s, {
                            maxScroll: c.y.maxScrollOffset
                            , scroll: i
                            , size: c.y.size
                            , visible: c.y.visible
                        }, {
                            maxScroll: c.x.maxScrollOffset
                            , scroll: o
                            , size: c.x.size
                            , visible: c.x.visible
                        }), c.x.isVisible && c.x.scroll.bar.css("left", o * c.x.kx + "px"), c.y.isVisible && c.y.scroll.bar.css("top", i * c.y.kx + "px")
                    }), d.on("scroll" + n, function () {
                        d.scrollTop(0).scrollLeft(0)
                    }), a.disableBodyScroll) {
                    var p = function (l) {
                        o(l) ? c.y.isVisible && c.y.mousewheel(l) : c.x.isVisible && c.x.mousewheel(l)
                    };
                    d.on("MozMousePixelScroll" + n, p), d.on("mousewheel" + n, p), r.mobile && d.on("touchstart" + n, function (e) {
                        var s = e.originalEvent.touches && e.originalEvent.touches[0] || e
                            , o = {
                                pageX: s.pageX
                                , pageY: s.pageY
                            }
                            , r = {
                                left: t.scrollLeft()
                                , top: t.scrollTop()
                            };
                        l(document).on("touchmove" + n, function (l) {
                            var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
                            t.scrollLeft(r.left + o.pageX - e.pageX), t.scrollTop(r.top + o.pageY - e.pageY), l.preventDefault()
                        }), l(document).on("touchend" + n, function () {
                            l(document).off(n)
                        })
                    })
                }
                l.isFunction(a.onInit) && a.onInit.apply(this, [t])
            }
            l.each(c, function (e, i) {
                var d = null
                    , h = 1
                    , u = "x" === e ? "scrollLeft" : "scrollTop"
                    , p = a.scrollStep
                    , f = function () {
                        var l = t[u]();
                        t[u](l + p), 1 == h && l + p >= v && (l = t[u]()), h == -1 && l + p <= v && (l = t[u]()), t[u]() == l && d && d()
                    }
                    , v = 0;
                i.scroll || (i.scroll = s._getScroll(a["scroll" + e]).addClass("scroll-" + e), a.showArrows && i.scroll.addClass("scroll-element_arrows_visible"), i.mousewheel = function (l) {
                    if (!i.isVisible || "x" === e && o(l)) return !0;
                    if ("y" === e && !o(l)) return c.x.mousewheel(l), !0;
                    var r = l.originalEvent.wheelDelta * -1 || l.originalEvent.detail
                        , n = i.size - i.visible - i.offset;
                    return r || ("x" === e && l.originalEvent.deltaX ? r = 40 * l.originalEvent.deltaX : "y" === e && l.originalEvent.deltaY && (r = 40 * l.originalEvent.deltaY)), (r > 0 && v < n || r < 0 && v > 0) && (v += r, v < 0 && (v = 0), v > n && (v = n), s.scrollTo = s.scrollTo || {}, s.scrollTo[u] = v, setTimeout(function () {
                        s.scrollTo && (t.stop().animate(s.scrollTo, 240, "linear", function () {
                            v = t[u]()
                        }), s.scrollTo = null)
                    }, 1)), l.preventDefault(), !1
                }, i.scroll.on("MozMousePixelScroll" + n, i.mousewheel).on("mousewheel" + n, i.mousewheel).on("mouseenter" + n, function () {
                    v = t[u]()
                }), i.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function (o) {
                    if (1 != o.which) return !0;
                    h = 1;
                    var n = {
                            eventOffset: o["x" === e ? "pageX" : "pageY"]
                            , maxScrollValue: i.size - i.visible - i.offset
                            , scrollbarOffset: i.scroll.bar.offset()["x" === e ? "left" : "top"]
                            , scrollbarSize: i.scroll.bar["x" === e ? "outerWidth" : "outerHeight"]()
                        }
                        , c = 0
                        , m = 0;
                    if (l(this).hasClass("scroll-arrow")) {
                        if (h = l(this).hasClass("scroll-arrow_more") ? 1 : -1, p = a.scrollStep * h, v = h > 0 ? n.maxScrollValue : 0, a.isRtl) switch (!0) {
                        case r.firefox:
                            v = h > 0 ? 0 : n.maxScrollValue * -1;
                            break;
                        case r.msie || r.msedge:
                        }
                    }
                    else h = n.eventOffset > n.scrollbarOffset + n.scrollbarSize ? 1 : n.eventOffset < n.scrollbarOffset ? -1 : 0, "x" === e && a.isRtl && (r.msie || r.msedge) && (h *= -1), p = Math.round(.75 * i.visible) * h, v = n.eventOffset - n.scrollbarOffset - (a.stepScrolling ? 1 == h ? n.scrollbarSize : 0 : Math.round(n.scrollbarSize / 2)), v = t[u]() + v / i.kx;
                    return s.scrollTo = s.scrollTo || {}, s.scrollTo[u] = a.stepScrolling ? t[u]() + p : v, a.stepScrolling && (d = function () {
                        v = t[u](), clearInterval(m), clearTimeout(c), c = 0, m = 0
                    }, c = setTimeout(function () {
                        m = setInterval(f, 40)
                    }, a.duration + 100)), setTimeout(function () {
                        s.scrollTo && (t.animate(s.scrollTo, a.duration), s.scrollTo = null)
                    }, 1), s._handleMouseDown(d, o)
                }), i.scroll.bar.on("mousedown" + n, function (o) {
                    if (1 != o.which) return !0;
                    var c = o["x" === e ? "pageX" : "pageY"]
                        , d = t[u]();
                    return i.scroll.addClass("scroll-draggable"), l(document).on("mousemove" + n, function (l) {
                        var s = parseInt((l["x" === e ? "pageX" : "pageY"] - c) / i.kx, 10);
                        "x" === e && a.isRtl && (r.msie || r.msedge) && (s *= -1), t[u](d + s)
                    }), s._handleMouseDown(function () {
                        i.scroll.removeClass("scroll-draggable"), v = t[u]()
                    }, o)
                }))
            }), l.each(c, function (l, e) {
                var s = "scroll-scroll" + l + "_visible"
                    , o = "x" == l ? c.y : c.x;
                e.scroll.removeClass(s), o.scroll.removeClass(s), i.removeClass(s)
            }), l.each(c, function (e, s) {
                l.extend(s, "x" == e ? {
                    offset: parseInt(t.css("left"), 10) || 0
                    , size: t.prop("scrollWidth")
                    , visible: d.width()
                } : {
                    offset: parseInt(t.css("top"), 10) || 0
                    , size: t.prop("scrollHeight")
                    , visible: d.height()
                })
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), l.isFunction(a.onUpdate) && a.onUpdate.apply(this, [t]), l.each(c, function (l, e) {
                var s = "x" === l ? "left" : "top"
                    , o = "x" === l ? "outerWidth" : "outerHeight"
                    , r = "x" === l ? "width" : "height"
                    , i = parseInt(t.css(s), 10) || 0
                    , n = e.size
                    , c = e.visible + i
                    , d = e.scroll.size[o]() + (parseInt(e.scroll.size.css(s), 10) || 0);
                a.autoScrollSize && (e.scrollbarSize = parseInt(d * c / n, 10), e.scroll.bar.css(r, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[o](), e.kx = (d - e.scrollbarSize) / (n - c) || 1, e.maxScrollOffset = n - c
            }), t.scrollLeft(u.scrollLeft).scrollTop(u.scrollTop).trigger("scroll")
        }
        , _getScroll: function (e) {
            var s = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join("")
                , simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return s[e] && (e = s[e]), e || (e = s.simple), e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e), l.extend(e, {
                bar: e.find(".scroll-bar")
                , size: e.find(".scroll-element_size")
                , track: e.find(".scroll-element_track")
            }), e
        }
        , _handleMouseDown: function (e, s) {
            var o = this.namespace;
            return l(document).on("blur" + o, function () {
                l(document).add("body").off(o), e && e()
            }), l(document).on("dragstart" + o, function (l) {
                return l.preventDefault(), !1
            }), l(document).on("mouseup" + o, function () {
                l(document).add("body").off(o), e && e()
            }), l("body").on("selectstart" + o, function (l) {
                return l.preventDefault(), !1
            }), s && s.preventDefault(), !1
        }
        , _updateScroll: function (e, s) {
            var o = this.container
                , t = this.containerWrapper || o
                , i = "scroll-scroll" + e + "_visible"
                , n = "x" === e ? this.scrolly : this.scrollx
                , a = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0
                , c = this.wrapper
                , d = s.size
                , h = s.visible + a;
            s.isVisible = d - h > 1, s.isVisible ? (s.scroll.addClass(i), n.scroll.addClass(i), t.addClass(i)) : (s.scroll.removeClass(i), n.scroll.removeClass(i), t.removeClass(i)), "y" === e && (o.is("textarea") || d < h ? t.css({
                height: h + r.scroll.height + "px"
                , "max-height": "none"
            }) : t.css({
                "max-height": h + r.scroll.height + "px"
            })), s.size == o.prop("scrollWidth") && n.size == o.prop("scrollHeight") && s.visible == c.width() && n.visible == c.height() && s.offset == (parseInt(o.css("left"), 10) || 0) && n.offset == (parseInt(o.css("top"), 10) || 0) || (l.extend(this.scrollx, {
                offset: parseInt(o.css("left"), 10) || 0
                , size: o.prop("scrollWidth")
                , visible: c.width()
            }), l.extend(this.scrolly, {
                offset: parseInt(o.css("top"), 10) || 0
                , size: this.container.prop("scrollHeight")
                , visible: c.height()
            }), this._updateScroll("x" === e ? "y" : "x", n))
        }
    };
    var n = i;
    l.fn.scrollbar = function (e, s) {
        return "string" != typeof e && (s = e, e = "init"), void 0 === s && (s = []), l.isArray(s) || (s = [s]), this.not("body, .scroll-wrapper").each(function () {
            var o = l(this)
                , t = o.data(r.data.name);
            (t || "init" === e) && (t || (t = new n(o)), t[e] && t[e].apply(t, s))
        }), this
    }, l.fn.scrollbar.options = t;
    var a = function () {
        var l = 0
            , e = 0;
        return function (s) {
            var o, t, i, n, c, d, h;
            for (o = 0; o < r.scrolls.length; o++) n = r.scrolls[o], t = n.container, i = n.options, c = n.wrapper, d = n.scrollx, h = n.scrolly, (s || i.autoUpdate && c && c.is(":visible") && (t.prop("scrollWidth") != d.size || t.prop("scrollHeight") != h.size || c.width() != d.visible || c.height() != h.visible)) && (n.init(), i.debug && (window.console && console.log({
                scrollHeight: t.prop("scrollHeight") + ":" + n.scrolly.size
                , scrollWidth: t.prop("scrollWidth") + ":" + n.scrollx.size
                , visibleHeight: c.height() + ":" + n.scrolly.visible
                , visibleWidth: c.width() + ":" + n.scrollx.visible
            }, !0), e++));
            clearTimeout(l), l = setTimeout(a, 300)
        }
    }();
    window.angular && function (l) {
        l.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
            var e = t;
            return {
                setOptions: function (s) {
                    l.extend(e, s)
                }
                , $get: function () {
                    return {
                        options: l.copy(e)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (l, e) {
            return {
                restrict: "AC"
                , link: function (s, o, r) {
                    var t = e(r.jqueryScrollbar)
                        , i = t(s);
                    o.scrollbar(i || l.options).on("$destroy", function () {
                        o.scrollbar("destroy")
                    })
                }
            }
        }])
    }(window.angular)
});
! function (e, t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function (e) {
    var t = function (e, t) {
            var n, a = document.createElement("canvas");
            e.appendChild(a), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
            var i = a.getContext("2d");
            a.width = a.height = t.size;
            var r = 1;
            window.devicePixelRatio > 1 && (r = window.devicePixelRatio, a.style.width = a.style.height = [t.size, "px"].join(""), a.width = a.height = t.size * r, i.scale(r, r)), i.translate(t.size / 2, t.size / 2), i.rotate((-.5 + t.rotate / 180) * Math.PI);
            var o = (t.size - t.lineWidth) / 2;
            t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
            var s = function (e, t, n) {
                    n = Math.min(Math.max(-1, n || 0), 1);
                    var a = 0 >= n;
                    i.beginPath(), i.arc(0, 0, o, 0, 2 * Math.PI * n, a), i.strokeStyle = e, i.lineWidth = t, i.stroke()
                }
                , d = function () {
                    var e, n;
                    i.lineWidth = 1, i.fillStyle = t.scaleColor, i.save();
                    for (var a = 24; a > 0; --a) a % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), i.fillRect(-t.size / 2 + e, 0, n, 1), i.rotate(Math.PI / 12);
                    i.restore()
                }
                , h = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                        window.setTimeout(e, 1e3 / 60)
                    }
                }()
                , u = function () {
                    t.scaleColor && d(), t.trackColor && s(t.trackColor, t.lineWidth, 1)
                };
            this.getCanvas = function () {
                return a
            }, this.getCtx = function () {
                return i
            }, this.clear = function () {
                i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
            }, this.draw = function (e) {
                t.scaleColor || t.trackColor ? i.getImageData && i.putImageData ? n ? i.putImageData(n, 0, 0) : (u(), n = i.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), u()) : this.clear(), i.lineCap = t.lineCap;
                var a;
                a = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(a, t.lineWidth, e / 100)
            }.bind(this), this.animate = function (e, n) {
                var a = Date.now();
                t.onStart(e, n);
                var i = function () {
                    var r = Math.min(Date.now() - a, t.animate.duration)
                        , o = t.easing(this, r, e, n - e, t.animate.duration);
                    this.draw(o), t.onStep(e, n, o), r >= t.animate.duration ? t.onStop(e, n) : h(i)
                }.bind(this);
                h(i)
            }.bind(this)
        }
        , n = function (e, n) {
            var a = {
                barColor: "#ef1e25"
                , trackColor: "#f9f9f9"
                , scaleColor: "#dfe0e0"
                , scaleLength: 5
                , lineCap: "round"
                , lineWidth: 3
                , size: 110
                , rotate: 0
                , animate: {
                    duration: 1e3
                    , enabled: !0
                }
                , easing: function (e, t, n, a, i) {
                    return t /= i / 2, 1 > t ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
                }
                , onStart: function () {}
                , onStep: function () {}
                , onStop: function () {}
            };
            if (void 0 !== t) a.renderer = t;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                a.renderer = SVGRenderer
            }
            var i = {}
                , r = 0
                , o = function () {
                    this.el = e, this.options = i;
                    for (var t in a) a.hasOwnProperty(t) && (i[t] = n && void 0 !== n[t] ? n[t] : a[t], "function" == typeof i[t] && (i[t] = i[t].bind(this)));
                    i.easing = "string" == typeof i.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[i.easing]) ? jQuery.easing[i.easing] : a.easing, "number" == typeof i.animate && (i.animate = {
                        duration: i.animate
                        , enabled: !0
                    }), "boolean" != typeof i.animate || i.animate || (i.animate = {
                        duration: 1e3
                        , enabled: i.animate
                    }), this.renderer = new i.renderer(e, i), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                }.bind(this);
            this.update = function (e) {
                return e = parseFloat(e), i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
            }.bind(this), this.disableAnimation = function () {
                return i.animate.enabled = !1, this
            }, this.enableAnimation = function () {
                return i.animate.enabled = !0, this
            }, o()
        };
    e.fn.easyPieChart = function (t) {
        return this.each(function () {
            var a;
            e.data(this, "easyPieChart") || (a = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, a)))
        })
    }
});
! function (t) {
    "use strict";
    var e = function (n, s) {
        this.$element = t(n), this.options = t.extend({}, e.defaults, s)
    };
    e.defaults = {
        transition_delay: 300
        , refresh_speed: 50
        , display_text: "none"
        , use_percentage: !0
        , percent_format: function (t) {
            return t + "%"
        }
        , amount_format: function (t, e) {
            return t + " / " + e
        }
        , update: t.noop
        , done: t.noop
        , fail: t.noop
    }, e.prototype.transition = function () {
        var n = this.$element
            , s = n.parent()
            , a = this.$back_text
            , r = this.$front_text
            , i = this.options
            , o = parseInt(n.attr("data-transitiongoal"))
            , h = parseInt(n.attr("aria-valuemin")) || 0
            , d = parseInt(n.attr("aria-valuemax")) || 100
            , f = s.hasClass("vertical")
            , p = i.update && "function" == typeof i.update ? i.update : e.defaults.update
            , u = i.done && "function" == typeof i.done ? i.done : e.defaults.done
            , c = i.fail && "function" == typeof i.fail ? i.fail : e.defaults.fail;
        if (isNaN(o)) return void c("data-transitiongoal not set");
        var l = Math.round(100 * (o - h) / (d - h));
        if ("center" === i.display_text && !a && !r) {
            this.$back_text = a = t("<span>").addClass("progressbar-back-text").prependTo(s), this.$front_text = r = t("<span>").addClass("progressbar-front-text").prependTo(n);
            var g;
            f ? (g = s.css("height"), a.css({
                height: g
                , "line-height": g
            }), r.css({
                height: g
                , "line-height": g
            }), t(window).resize(function () {
                g = s.css("height"), a.css({
                    height: g
                    , "line-height": g
                }), r.css({
                    height: g
                    , "line-height": g
                })
            })) : (g = s.css("width"), r.css({
                width: g
            }), t(window).resize(function () {
                g = s.css("width"), r.css({
                    width: g
                })
            }))
        }
        setTimeout(function () {
            var t, e, c, g, _;
            f ? n.css("height", l + "%") : n.css("width", l + "%");
            var x = setInterval(function () {
                f ? (c = n.height(), g = s.height()) : (c = n.width(), g = s.width()), t = Math.round(100 * c / g), e = Math.round(h + c / g * (d - h)), t >= l && (t = l, e = o, u(n), clearInterval(x)), "none" !== i.display_text && (_ = i.use_percentage ? i.percent_format(t) : i.amount_format(e, d, h), "fill" === i.display_text ? n.text(_) : "center" === i.display_text && (a.text(_), r.text(_))), n.attr("aria-valuenow", e), p(t, n)
            }, i.refresh_speed)
        }, i.transition_delay)
    };
    var n = t.fn.progressbar;
    t.fn.progressbar = function (n) {
        return this.each(function () {
            var s = t(this)
                , a = s.data("bs.progressbar")
                , r = "object" == typeof n && n;
            a && r && t.extend(a.options, r), a || s.data("bs.progressbar", a = new e(this, r)), a.transition()
        })
    }, t.fn.progressbar.Constructor = e, t.fn.progressbar.noConflict = function () {
        return t.fn.progressbar = n, this
    }
}(window.jQuery);
! function (t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    t.fn.countTo = function (e) {
        return e = e || {}, t(this).each(function () {
            function a() {
                s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
            }

            function n(t) {
                var e = o.formatter.call(f, t, o);
                i.text(e)
            }
            var o = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from")
                    , to: t(this).data("to")
                    , speed: t(this).data("speed")
                    , refreshInterval: t(this).data("refresh-interval")
                    , decimals: t(this).data("decimals")
                }, e)
                , r = Math.ceil(o.speed / o.refreshInterval)
                , l = (o.to - o.from) / r
                , f = this
                , i = t(this)
                , c = 0
                , s = o.from
                , d = i.data("countTo") || {};
            i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
        })
    }, t.fn.countTo.defaults = {
        from: 0
        , to: 0
        , speed: 1e3
        , refreshInterval: 100
        , decimals: 0
        , formatter: e
        , onUpdate: null
        , onComplete: null
    }
}(jQuery);
! function (t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null
            , target: null
            , pointer: null
            , stage: {
                start: null
                , current: null
            }
            , direction: null
        }, this._states = {
            current: {}
            , tags: {
                initializing: ["busy"]
                , animating: ["busy"]
                , dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(n.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Workers, t.proxy(function (e, i) {
            this._pipe.push({
                filter: i.filter
                , run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    n.Defaults = {
        items: 3
        , loop: !1
        , center: !1
        , rewind: !1
        , mouseDrag: !0
        , touchDrag: !0
        , pullDrag: !0
        , freeDrag: !1
        , margin: 0
        , stagePadding: 0
        , merge: !1
        , mergeFit: !0
        , autoWidth: !1
        , startPosition: 0
        , rtl: !1
        , smartSpeed: 250
        , fluidSpeed: !1
        , dragEndSpeed: !1
        , responsive: {}
        , responsiveRefreshRate: 200
        , responsiveBaseElement: e
        , fallbackEasing: "swing"
        , info: !1
        , nestedItemSelector: !1
        , itemElement: "div"
        , stageElement: "div"
        , refreshClass: "owl-refresh"
        , loadedClass: "owl-loaded"
        , loadingClass: "owl-loading"
        , rtlClass: "owl-rtl"
        , responsiveClass: "owl-responsive"
        , dragClass: "owl-drag"
        , itemClass: "owl-item"
        , stageClass: "owl-stage"
        , stageOuterClass: "owl-stage-outer"
        , grabClass: "owl-grab"
    }, n.Width = {
        Default: "default"
        , Inner: "inner"
        , Outer: "outer"
    }, n.Type = {
        Event: "event"
        , State: "state"
    }, n.Plugins = {}, n.Workers = [{
        filter: ["width", "settings"]
        , run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"]
        , run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function (t) {
            var e = this.settings.margin || ""
                , i = !this.settings.autoWidth
                , s = this.settings.rtl
                , n = {
                    width: "auto"
                    , "margin-left": s ? e : ""
                    , "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                , i = null
                , s = this._items.length
                , n = !this.settings.autoWidth
                , o = [];
            for (t.items = {
                    merge: !1
                    , width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"]
        , run: function () {
            var e = []
                , i = this._items
                , s = this.settings
                , n = Math.max(2 * s.items, 4)
                , o = 2 * Math.ceil(i.length / 2)
                , r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0
                , a = ""
                , h = "";
            for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), h = i[e[e.length - 1]][0].outerHTML + h;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(h).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function () {
            var t = this.settings.stagePadding
                , e = this._coordinates
                , i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t
                    , "padding-left": t || ""
                    , "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function (t) {
            var e = this._coordinates.length
                , i = !this.settings.autoWidth
                , s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"]
        , run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"]
        , run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"]
        , run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"]
        , run: function () {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1
                , o = 2 * this.settings.stagePadding
                , r = this.coordinates(this.current()) + o
                , a = r + this.width() * n
                , h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], n.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, i, n;
            e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, n.prototype.setup = function () {
        var e = this.viewport()
            , i = this.options.responsive
            , s = -1
            , n = null;
        i ? (t.each(i, function (t) {
            t <= e && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), "function" == typeof n.stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings"
                , value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings"
                , value: this.settings
            }
        })
    }, n.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
                return this[t]
            }, this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, n.prototype.width = function (t) {
        switch (t = t || n.Width.Default) {
        case n.Width.Inner:
        case n.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, n.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, n.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, n.prototype.onDragStart = function (e) {
        var s = null;
        3 !== e.which && (t.support.transform ? (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), s = {
            x: s[16 === s.length ? 12 : 4]
            , y: s[16 === s.length ? 13 : 5]
        }) : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left
            , y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, n.prototype.onDragMove = function (t) {
        var e = null
            , i = null
            , s = null
            , n = this.difference(this._drag.pointer, this.pointer(t))
            , o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, n.prototype.onDragEnd = function (e) {
        var s = this.difference(this._drag.pointer, this.pointer(e))
            , n = this._drag.stage.current
            , o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, n.prototype.closest = function (e, i) {
        var s = -1
            , n = this.width()
            , o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
            return "left" === i && e > r - 30 && e < r + 30 ? s = t : "right" === i && e > r - n - 30 && e < r - n + 30 ? s = t + 1 : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (s = "left" === i ? t + 1 : t), s === -1
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (s = e = this.maximum())), s
    }, n.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)"
            , transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, n.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, n.prototype.current = function (t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position"
                    , value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position"
                    , value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, n.prototype.reset = function (t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function (t, e) {
        var i = this._items.length
            , n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, n.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function (t) {
        var e, i, s, n = this.settings
            , o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
            o = e + 1
        }
        else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, n.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function (t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function (t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function (e) {
        var i = this._clones.length / 2
            , n = i + this._items.length
            , o = function (t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function (t, e) {
            return o(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function (e) {
        var i, n = 1
            , o = e - 1;
        return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, n.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function (t, e) {
        var i = this.current()
            , s = null
            , n = t - this.relative(i)
            , o = (n > 0) - (n < 0)
            , r = this._items.length
            , a = this.minimum()
            , h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += o * -1 * r), t = i + n, (s = ((t - a) % r + r) % r + a) !== t && s - n <= h && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? (h += 1, t = (t % h + h) % h) : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, n.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.onTransitionEnd = function (t) {
        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, n.prototype.viewport = function () {
        var s;
        return this.options.responsiveBaseElement !== e ? s = t(this.options.responsiveBaseElement).width() : e.innerWidth ? s = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? s = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), s
    }, n.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function (e, i) {
        var n = this.relative(this._current);
        i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e
            , position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e
            , position: i
        })
    }, n.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t]
            , position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null
            , position: t
        }))
    }, n.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, n.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var s in this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, n.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
        case "<":
            return s ? t > i : t < i;
        case ">":
            return s ? t < i : t > i;
        case ">=":
            return s ? t <= i : t >= i;
        case "<=":
            return s ? t >= i : t <= i
        }
    }, n.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function (e, i, s, o, r) {
        var a = {
                item: {
                    count: this._items.length
                    , index: this.current()
                }
            }
            , h = t.camelCase(t.grep(["on", e, s], function (t) {
                return t
            }).join("-").toLowerCase())
            , l = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(l)
        }), this.register({
            type: n.Type.Event
            , name: e
        }), this.$element.trigger(l), this.settings && "function" == typeof this.settings[h] && this.settings[h].call(this, l)), l
    }, n.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, n.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, n.prototype.register = function (e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && t.namespace.indexOf("owl") !== -1 ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        }
        else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        }, this)))
    }, n.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.pointer = function (t) {
        var i = {
            x: null
            , y: null
        };
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, n.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, n.prototype.difference = function (t, e) {
        return {
            x: t.x - e.x
            , y: t.y - e.y
        }
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var s = t(this)
                , o = s.data("owl.carousel");
            o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                o.register({
                    type: n.Type.Event
                    , name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0
        , autoRefreshInterval: 500
    }, n.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && s * -1 || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i)
            , n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
            var n, o = t(s)
                , r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o
                , url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o
                    , url: r
                }, "lazy")
            }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function () {
                o.css({
                    "background-image": 'url("' + r + '")'
                    , opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o
                    , url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this)
            , "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this)
            , "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoHeight: !1
        , autoHeightClass: "owl-height"
    }, n.prototype.update = function () {
        var e = this._core._current
            , i = e + this._core.settings.items
            , s = this._core.$stage.children().toArray().slice(e, i)
            , n = []
            , o = 0;
        t.each(s, function (e, i) {
            n.push(t(i).height())
        }), o = Math.max.apply(null, n), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({
                    type: "state"
                    , name: "playing"
                    , tags: ["interacting"]
                })
            }, this)
            , "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this)
            , "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this)
            , "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this)
            , "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1
        , videoHeight: !1
        , videoWidth: !1
    }, n.prototype.fetch = function (t, e) {
        var i = function () {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }()
            , s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
            , n = t.attr("data-width") || this._core.settings.videoWidth
            , o = t.attr("data-height") || this._core.settings.videoHeight
            , r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(s[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i
            , id: s
            , width: n
            , height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function (e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : ""
            , a = e.find("img")
            , h = "src"
            , l = ""
            , c = this._core.settings
            , p = function (t) {
                n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length) return p(a.attr(h)), a.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", p(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET"
            , url: "//vimeo.com/api/v2/video/" + i.id + ".json"
            , jsonp: "callback"
            , dataType: "jsonp"
            , success: function (t) {
                o = t[0].thumbnail_large, p(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET"
            , url: "//vzaar.com/api/videos/" + i.id + ".json"
            , jsonp: "callback"
            , dataType: "jsonp"
            , success: function (t) {
                o = t.framegrab_url, p(o)
            }
        })
    }, n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function (e) {
        var i, s = t(e.target)
            , n = s.closest("." + this._core.settings.itemClass)
            , o = this._videos[n.attr("data-video")]
            , r = o.width || "100%"
            , a = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === o.type ? i = '<iframe width="' + r + '" height="' + a + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this)
            , "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this)
            , "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
            animateOut: !1
            , animateIn: !1
        }, n.prototype.swap = function () {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this)
                    , s = this.core.$stage.children().eq(this.previous)
                    , n = this.core.$stage.children().eq(this.next)
                    , o = this.core.settings.animateIn
                    , r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, n.prototype.clear = function (e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, n.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }
        , t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    var n = function (e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this)
            , "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this)
            , "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this)
            , "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this)
            , "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this)
            , "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this)
            , "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this)
            , "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1
        , autoplayTimeout: 5e3
        , autoplayHoverPause: !1
        , autoplaySpeed: !1
    }, n.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, n.prototype._getNextTimeout = function (s, n) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
        }, this), s || this._core.settings.autoplayTimeout)
    }, n.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, n.prototype.stop = function () {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, n.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, n.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    "use strict";
    var n = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next
            , prev: this._core.prev
            , to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this)
            , "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this)
            , "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this)
            , "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this)
            , "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this)
            , "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1
        , navText: ["prev", "next"]
        , navSpeed: !1
        , navElement: "div"
        , navContainer: !1
        , navContainerClass: "owl-nav"
        , navClass: ["owl-prev", "owl-next"]
        , slideBy: 1
        , dotClass: "owl-dot"
        , dotsClass: "owl-dots"
        , dots: !0
        , dotsEach: !1
        , dotsData: !1
        , dotsSpeed: !1
        , dotsContainer: !1
    }, n.prototype.initialize = function () {
        var e, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
            var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(s, i.dotsSpeed)
        }, this));
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
    }, n.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function () {
        var t, e, i, s = this._core.clones().length / 2
            , n = s + this._core.items().length
            , o = this._core.maximum(!0)
            , r = this._core.settings
            , a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], t = s, e = 0, i = 0; t < n; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - s)
                            , end: t - s + a - 1
                        }), Math.min(o, t - s) === o) break;
                    e = 0, ++i
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function () {
        var e, i = this._core.settings
            , s = this._core.items().length <= i.items
            , n = this._core.relative(this._core.current())
            , o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages)
            , count: this._pages.length
            , size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, n.prototype.getPosition = function (e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function (e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    "use strict";
    var n = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this)
            , "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this)
            , "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current()))
                        , n = t.map(this._hashes, function (t, e) {
                            return t === s ? e : null
                        }).join();
                    if (!n || e.location.hash.slice(1) === n) return;
                    e.location.hash = n
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1)
                , s = this._core.$stage.children()
                , n = this._hashes[i] && s.index(this._hashes[i]);
            void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function () {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document)
, function (t, e, i, s) {
    function n(e, i) {
        var n = !1
            , o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
            if (r[e] !== s) return n = !i || e, !1
        }), n
    }

    function o(t) {
        return n(t, !0)
    }
    var r = t("<support>").get(0).style
        , a = "Webkit Moz O ms".split(" ")
        , h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd"
                    , MozTransition: "transitionend"
                    , OTransition: "oTransitionEnd"
                    , transition: "transitionend"
                }
            }
            , animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd"
                    , MozAnimation: "animationend"
                    , OAnimation: "oAnimationEnd"
                    , animation: "animationend"
                }
            }
        }
        , l = {
            csstransforms: function () {
                return !!n("transform")
            }
            , csstransforms3d: function () {
                return !!n("perspective")
            }
            , csstransitions: function () {
                return !!n("transition")
            }
            , cssanimations: function () {
                return !!n("animation")
            }
        };
    l.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = h.transition.end[t.support.transition]), l.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = h.animation.end[t.support.animation]), l.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = l.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        }
        catch (e) {}
    }

    function t(n, o) {
        var i = u.raw ? n : r(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g
        , u = e.cookie = function (r, c, f) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (f = e.extend({}, u.defaults, f), "number" == typeof f.expires) {
                    var a = f.expires
                        , d = f.expires = new Date;
                    d.setTime(+d + 864e5 * a)
                }
                return document.cookie = [n(r), "=", i(c), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
            }
            for (var p = r ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; m < x; m++) {
                var l = s[m].split("=")
                    , k = o(l.shift())
                    , v = l.join("=");
                if (r && r === k) {
                    p = t(v, c);
                    break
                }
                r || void 0 === (v = t(v)) || (p[k] = v)
            }
            return p
        };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return void 0 !== e.cookie(n) && (e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n))
    }
});