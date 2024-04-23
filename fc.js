/*! For license information please see png_script.js.LICENSE.txt */
(() => {
    var e = {
        845: () => {
            document.addEventListener("DOMContentLoaded", (function () {
                if (!document.querySelector(".hamburger")) return;
                const e = document.querySelector(".hamburger"), t = document.querySelector(".header__burger-menu"), n = document.querySelector(".header__burger-close");
                e.addEventListener("click", (function () {
                    t.classList.add("active")
                })), n.addEventListener("click", (function () {
                    t.classList.remove("active")
                }))
            }))
        }, 736: (e, t, n) => {
            var r, i, s;
            window.jQuery, window.Zepto, i = [n(755)], void 0 === (s = "function" == typeof (r = function (e) {
                "use strict";
                var t = function (t, n, r) {
                    var i = {
                        invalid: [], getCaret: function () {
                            try {
                                var e, n = 0, r = t.get(0), s = document.selection, a = r.selectionStart;
                                return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((e = s.createRange()).moveStart("character", -i.val().length), n = e.text.length) : (a || "0" === a) && (n = a), n
                            } catch (e) {
                            }
                        }, setCaret: function (e) {
                            try {
                                if (t.is(":focus")) {
                                    var n, r = t.get(0);
                                    r.setSelectionRange ? r.setSelectionRange(e, e) : ((n = r.createTextRange()).collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                                }
                            } catch (e) {
                            }
                        }, events: function () {
                            t.on("keydown.mask", (function (e) {
                                t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val()), t.data("mask-previus-caret-pos", i.getCaret()), i.maskDigitPosMapOld = i.maskDigitPosMap
                            })).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", i.behaviour).on("paste.mask drop.mask", (function () {
                                setTimeout((function () {
                                    t.keydown().keyup()
                                }), 100)
                            })).on("change.mask", (function () {
                                t.data("changed", !0)
                            })).on("blur.mask", (function () {
                                o === i.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                            })).on("blur.mask", (function () {
                                o = i.val()
                            })).on("focus.mask", (function (t) {
                                !0 === r.selectOnFocus && e(t.target).select()
                            })).on("focusout.mask", (function () {
                                r.clearIfNotMatch && !s.test(i.val()) && i.val("")
                            }))
                        }, getRegexMask: function () {
                            for (var e, t, r, i, s, o, l = [], c = 0; c < n.length; c++) (e = a.translation[n.charAt(c)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), r = e.optional, (i = e.recursive) ? (l.push(n.charAt(c)), s = {digit: n.charAt(c), pattern: t}) : l.push(r || i ? t + "?" : t)) : l.push(n.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                            return o = l.join(""), s && (o = o.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(o)
                        }, destroyEvents: function () {
                            t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                        }, val: function (e) {
                            var n, r = t.is("input") ? "val" : "text";
                            return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
                        }, calculateCaretPosition: function (e) {
                            var n = i.getMasked(), r = i.getCaret();
                            if (e !== n) {
                                var s = t.data("mask-previus-caret-pos") || 0, a = n.length, o = e.length, l = 0, c = 0, u = 0, d = 0, p = 0;
                                for (p = r; p < a && i.maskDigitPosMap[p]; p++) c++;
                                for (p = r - 1; p >= 0 && i.maskDigitPosMap[p]; p--) l++;
                                for (p = r - 1; p >= 0; p--) i.maskDigitPosMap[p] && u++;
                                for (p = s - 1; p >= 0; p--) i.maskDigitPosMapOld[p] && d++;
                                if (r > o) r = 10 * a; else if (s >= r && s !== o) {
                                    if (!i.maskDigitPosMapOld[r]) {
                                        var f = r;
                                        r -= d - u, r -= l, i.maskDigitPosMap[r] && (r = f)
                                    }
                                } else r > s && (r += u - d, r += c)
                            }
                            return r
                        }, behaviour: function (n) {
                            n = n || window.event, i.invalid = [];
                            var r = t.data("mask-keycode");
                            if (-1 === e.inArray(r, a.byPassKeys)) {
                                var s = i.getMasked(), o = i.getCaret(), l = t.data("mask-previus-value") || "";
                                return setTimeout((function () {
                                    i.setCaret(i.calculateCaretPosition(l))
                                }), e.jMaskGlobals.keyStrokeCompensation), i.val(s), i.setCaret(o), i.callbacks(n)
                            }
                        }, getMasked: function (e, t) {
                            var s, o, l, c = [], u = void 0 === t ? i.val() : t + "", d = 0, p = n.length, f = 0, h = u.length, m = 1, v = "push", g = -1, y = 0, _ = [];
                            for (r.reverse ? (v = "unshift", m = -1, s = 0, d = p - 1, f = h - 1, o = function () {
                                return d > -1 && f > -1
                            }) : (s = p - 1, o = function () {
                                return d < p && f < h
                            }); o();) {
                                var w = n.charAt(d), b = u.charAt(f), x = a.translation[w];
                                x ? (b.match(x.pattern) ? (c[v](b), x.recursive && (-1 === g ? g = d : d === s && d !== g && (d = g - m), s === g && (d -= m)), d += m) : b === l ? (y--, l = void 0) : x.optional ? (d += m, f -= m) : x.fallback ? (c[v](x.fallback), d += m, f -= m) : i.invalid.push({
                                    p: f,
                                    v: b,
                                    e: x.pattern
                                }), f += m) : (e || c[v](w), b === w ? (_.push(f), f += m) : (l = w, _.push(f + y), y++), d += m)
                            }
                            var T = n.charAt(s);
                            p !== h + 1 || a.translation[T] || c.push(T);
                            var S = c.join("");
                            return i.mapMaskdigitPositions(S, _, h), S
                        }, mapMaskdigitPositions: function (e, t, n) {
                            var s = r.reverse ? e.length - n : 0;
                            i.maskDigitPosMap = {};
                            for (var a = 0; a < t.length; a++) i.maskDigitPosMap[t[a] + s] = 1
                        }, callbacks: function (e) {
                            var s = i.val(), a = s !== o, l = [s, e, t, r], c = function (e, t, n) {
                                "function" == typeof r[e] && t && r[e].apply(this, n)
                            };
                            c("onChange", !0 === a, l), c("onKeyPress", !0 === a, l), c("onComplete", s.length === n.length, l), c("onInvalid", i.invalid.length > 0, [s, e, t, i.invalid, r])
                        }
                    };
                    t = e(t);
                    var s, a = this, o = i.val();
                    n = "function" == typeof n ? n(i.val(), void 0, t, r) : n, a.mask = n, a.options = r, a.remove = function () {
                        var e = i.getCaret();
                        return a.options.placeholder && t.removeAttr("placeholder"), t.data("mask-maxlength") && t.removeAttr("maxlength"), i.destroyEvents(), i.val(a.getCleanVal()), i.setCaret(e), t
                    }, a.getCleanVal = function () {
                        return i.getMasked(!0)
                    }, a.getMaskedVal = function (e) {
                        return i.getMasked(!1, e)
                    }, a.init = function (o) {
                        if (o = o || !1, r = r || {}, a.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, a.byPassKeys = e.jMaskGlobals.byPassKeys, a.translation = e.extend({}, e.jMaskGlobals.translation, r.translation), a = e.extend(!0, {}, a, r), s = i.getRegexMask(), o) i.events(), i.val(i.getMasked()); else {
                            r.placeholder && t.attr("placeholder", r.placeholder), t.data("mask") && t.attr("autocomplete", "off");
                            for (var l = 0, c = !0; l < n.length; l++) {
                                var u = a.translation[n.charAt(l)];
                                if (u && u.recursive) {
                                    c = !1;
                                    break
                                }
                            }
                            c && t.attr("maxlength", n.length).data("mask-maxlength", !0), i.destroyEvents(), i.events();
                            var d = i.getCaret();
                            i.val(i.getMasked()), i.setCaret(d)
                        }
                    }, a.init(!t.is("input"))
                };
                e.maskWatchers = {};
                var n = function () {
                    var n = e(this), i = {}, s = "data-mask-", a = n.attr("data-mask");
                    if (n.attr(s + "reverse") && (i.reverse = !0), n.attr(s + "clearifnotmatch") && (i.clearIfNotMatch = !0), "true" === n.attr(s + "selectonfocus") && (i.selectOnFocus = !0), r(n, a, i)) return n.data("mask", new t(this, a, i))
                }, r = function (t, n, r) {
                    r = r || {};
                    var i = e(t).data("mask"), s = JSON.stringify, a = e(t).val() || e(t).text();
                    try {
                        return "function" == typeof n && (n = n(a)), "object" != typeof i || s(i.options) !== s(r) || i.mask !== n
                    } catch (e) {
                    }
                };
                e.fn.mask = function (n, i) {
                    i = i || {};
                    var s = this.selector, a = e.jMaskGlobals, o = a.watchInterval, l = i.watchInputs || a.watchInputs, c = function () {
                        if (r(this, n, i)) return e(this).data("mask", new t(this, n, i))
                    };
                    return e(this).each(c), s && "" !== s && l && (clearInterval(e.maskWatchers[s]), e.maskWatchers[s] = setInterval((function () {
                        e(document).find(s).each(c)
                    }), o)), this
                }, e.fn.masked = function (e) {
                    return this.data("mask").getMaskedVal(e)
                }, e.fn.unmask = function () {
                    return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each((function () {
                        var t = e(this).data("mask");
                        t && t.remove().removeData("mask")
                    }))
                }, e.fn.cleanVal = function () {
                    return this.data("mask").getCleanVal()
                }, e.applyDataMask = function (t) {
                    ((t = t || e.jMaskGlobals.maskElements) instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(n)
                };
                var i, s, a, o = {
                    maskElements: "input,td,span,div",
                    dataMaskAttr: "[data-mask]",
                    dataMask: !0,
                    watchInterval: 300,
                    watchInputs: !0,
                    keyStrokeCompensation: 10,
                    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && (i = "input", a = document.createElement("div"), (s = (i = "on" + i) in a) || (a.setAttribute(i, "return;"), s = "function" == typeof a[i]), a = null, s),
                    watchDataMask: !1,
                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                    translation: {0: {pattern: /\d/}, 9: {pattern: /\d/, optional: !0}, "#": {pattern: /\d/, recursive: !0}, A: {pattern: /[a-zA-Z0-9]/}, S: {pattern: /[a-zA-Z]/}}
                };
                e.jMaskGlobals = e.jMaskGlobals || {}, (o = e.jMaskGlobals = e.extend(!0, {}, o, e.jMaskGlobals)).dataMask && e.applyDataMask(), setInterval((function () {
                    e.jMaskGlobals.watchDataMask && e.applyDataMask()
                }), o.watchInterval)
            }) ? r.apply(t, i) : r) || (e.exports = s)
        }, 577: (e, t, n) => {
            var r, i, s;
            n.g.jQuery = n(755), void 0 === (i = "function" == typeof (r = function () {
                var e = Object.assign || window.jQuery && jQuery.extend, t = 8, n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
                    return window.setTimeout((function () {
                        e()
                    }), 25)
                };
                !function () {
                    if ("function" == typeof window.CustomEvent) return !1;

                    function e(e, t) {
                        t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    }

                    e.prototype = window.Event.prototype, window.CustomEvent = e
                }();
                var r = {textarea: !0, input: !0, select: !0, button: !0}, i = {move: "mousemove", cancel: "mouseup dragstart", end: "mouseup"}, s = {move: "touchmove", cancel: "touchend", end: "touchend"}, a = /\s+/, o = {bubbles: !0, cancelable: !0}, l = "function" == typeof Symbol ? Symbol("events") : {};

                function c(e) {
                    return e[l] || (e[l] = {})
                }

                function u(e, t, n, r, i) {
                    t = t.split(a);
                    var s, o = c(e), l = t.length;

                    function u(e) {
                        n(e, r)
                    }

                    for (; l--;) (o[s = t[l]] || (o[s] = [])).push([n, u]), e.addEventListener(s, u)
                }

                function d(e, t, n, r) {
                    t = t.split(a);
                    var i, s, o, l = c(e), u = t.length;
                    if (l) for (; u--;) if (s = l[i = t[u]]) for (o = s.length; o--;) s[o][0] === n && (e.removeEventListener(i, s[o][1]), s.splice(o, 1))
                }

                function p(t, n, r) {
                    var i = function (e) {
                        return new CustomEvent(e, o)
                    }(n);
                    r && e(i, r), t.dispatchEvent(i)
                }

                function f(e) {
                    var t = e, r = !1, i = !1;

                    function s(e) {
                        r ? (t(), n(s), i = !0, r = !1) : i = !1
                    }

                    this.kick = function (e) {
                        r = !0, i || s()
                    }, this.end = function (e) {
                        var n = t;
                        e && (i ? (t = r ? function () {
                            n(), e()
                        } : e, r = !0) : e())
                    }
                }

                function h() {
                }

                function m(e) {
                    e.preventDefault()
                }

                function v(e, t) {
                    var n, r;
                    if (e.identifiedTouch) return e.identifiedTouch(t);
                    for (n = -1, r = e.length; ++n < r;) if (e[n].identifier === t) return e[n]
                }

                function g(e, t) {
                    var n = v(e.changedTouches, t.identifier);
                    if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n
                }

                function y(e, t) {
                    x(e, t, e, w)
                }

                function _(e, t) {
                    w()
                }

                function w() {
                    d(document, i.move, y), d(document, i.cancel, _)
                }

                function b(e) {
                    d(document, s.move, e.touchmove), d(document, s.cancel, e.touchend)
                }

                function x(e, n, r, i) {
                    var s = r.pageX - n.pageX, a = r.pageY - n.pageY;
                    s * s + a * a < t * t || function (e, t, n, r, i, s) {
                        var a = e.targetTouches, o = e.timeStamp - t.timeStamp, l = {
                            altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, startX: t.pageX, startY: t.pageY, distX: r, distY: i, deltaX: r, deltaY: i, pageX: n.pageX, pageY: n.pageY, velocityX: r / o, velocityY: i / o, identifier: t.identifier, targetTouches: a, finger: a ? a.length : 1, enableMove: function () {
                                this.moveEnabled = !0, this.enableMove = h
                            }
                        };
                        p(t.target, "movestart", l), s(t)
                    }(e, n, r, s, a, i)
                }

                function T(e, t) {
                    var n = t.timer;
                    t.touch = e, t.timeStamp = e.timeStamp, n.kick()
                }

                function S(e, t) {
                    var n = t.target, r = t.event, s = t.timer;
                    d(document, i.move, T), d(document, i.end, S), C(n, r, s, (function () {
                        setTimeout((function () {
                            d(n, "click", m)
                        }), 0)
                    }))
                }

                function k(e, t) {
                    var n = t.target, r = t.event, i = t.timer;
                    v(e.changedTouches, r.identifier) && (function (e) {
                        d(document, s.move, e.activeTouchmove), d(document, s.end, e.activeTouchend)
                    }(t), C(n, r, i))
                }

                function C(e, t, n, r) {
                    n.end((function () {
                        return p(e, "moveend", t), r && r()
                    }))
                }

                if (u(document, "mousedown", (function (e) {
                    (function (e) {
                        return 1 === e.which && !e.ctrlKey && !e.altKey
                    })(e) && (function (e) {
                        return !!r[e.target.tagName.toLowerCase()]
                    }(e) || (u(document, i.move, y, e), u(document, i.cancel, _, e)))
                })), u(document, "touchstart", (function (e) {
                    if (!r[e.target.tagName.toLowerCase()]) {
                        var t = e.changedTouches[0], n = {
                            target: t.target, pageX: t.pageX, pageY: t.pageY, identifier: t.identifier, touchmove: function (e, t) {
                                !function (e, t) {
                                    var n = g(e, t);
                                    n && x(e, t, n, b)
                                }(e, t)
                            }, touchend: function (e, t) {
                                !function (e, t) {
                                    v(e.changedTouches, t.identifier) && b(t)
                                }(e, t)
                            }
                        };
                        u(document, s.move, n.touchmove, n), u(document, s.cancel, n.touchend, n)
                    }
                })), u(document, "movestart", (function (e) {
                    if (!e.defaultPrevented && e.moveEnabled) {
                        var t = {startX: e.startX, startY: e.startY, pageX: e.pageX, pageY: e.pageY, distX: e.distX, distY: e.distY, deltaX: e.deltaX, deltaY: e.deltaY, velocityX: e.velocityX, velocityY: e.velocityY, identifier: e.identifier, targetTouches: e.targetTouches, finger: e.finger}, n = {
                            target: e.target, event: t, timer: new f((function (e) {
                                (function (e, t, n) {
                                    var r = n - e.timeStamp;
                                    e.distX = t.pageX - e.startX, e.distY = t.pageY - e.startY, e.deltaX = t.pageX - e.pageX, e.deltaY = t.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / r, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / r, e.pageX = t.pageX, e.pageY = t.pageY
                                })(t, n.touch, n.timeStamp), p(n.target, "move", t)
                            })), touch: void 0, timeStamp: e.timeStamp
                        };
                        void 0 === e.identifier ? (u(e.target, "click", m), u(document, i.move, T, n), u(document, i.end, S, n)) : (n.activeTouchmove = function (e, t) {
                            !function (e, t) {
                                var n = t.event, r = t.timer, i = g(e, n);
                                i && (n.targetTouches = e.targetTouches, t.touch = i, t.timeStamp = e.timeStamp, r.kick())
                            }(e, t)
                        }, n.activeTouchend = function (e, t) {
                            k(e, t)
                        }, u(document, s.move, n.activeTouchmove, n), u(document, s.end, n.activeTouchend, n))
                    }
                })), window.jQuery) {
                    var E = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");
                    jQuery.event.special.movestart = {
                        setup: function () {
                            return u(this, "movestart", M), !1
                        }, teardown: function () {
                            return d(this, "movestart", M), !1
                        }, add: O
                    }, jQuery.event.special.move = {
                        setup: function () {
                            return u(this, "movestart", A), !1
                        }, teardown: function () {
                            return d(this, "movestart", A), !1
                        }, add: O
                    }, jQuery.event.special.moveend = {
                        setup: function () {
                            return u(this, "movestart", P), !1
                        }, teardown: function () {
                            return d(this, "movestart", P), !1
                        }, add: O
                    }
                }

                function M(e) {
                    e.enableMove()
                }

                function A(e) {
                    e.enableMove()
                }

                function P(e) {
                    e.enableMove()
                }

                function O(e) {
                    var t = e.handler;
                    e.handler = function (e) {
                        for (var n, r = E.length; r--;) e[n = E[r]] = e.originalEvent[n];
                        t.apply(this, arguments)
                    }
                }
            }) ? r.apply(t, []) : r) || (e.exports = i), (s = jQuery).fn.twentytwenty = function (e) {
                return e = s.extend({default_offset_pct: .5, orientation: "horizontal", before_label: "Before", after_label: "After", no_overlay: !1, move_slider_on_hover: !1, move_with_handle_only: !0, click_to_move: !1}, e), this.each((function () {
                    var t = e.default_offset_pct, n = s(this), r = e.orientation, i = "vertical" === r ? "down" : "left", a = "vertical" === r ? "up" : "right";
                    if (n.wrap("<div class='twentytwenty-wrapper twentytwenty-" + r + "'></div>"), !e.no_overlay) {
                        n.append("<div class='twentytwenty-overlay'></div>");
                        var o = n.find(".twentytwenty-overlay");
                        o.append("<div class='twentytwenty-before-label' data-content='" + e.before_label + "'></div>"), o.append("<div class='twentytwenty-after-label' data-content='" + e.after_label + "'></div>")
                    }
                    var l = n.find("img:first"), c = n.find("img:last");
                    n.append("<div class='twentytwenty-handle'></div>");
                    var u = n.find(".twentytwenty-handle");
                    u.append("<span class='twentytwenty-" + i + "-arrow'></span>"), u.append("<span class='twentytwenty-" + a + "-arrow'></span>"), n.addClass("twentytwenty-container"), l.addClass("twentytwenty-before"), c.addClass("twentytwenty-after");
                    var d = function (e) {
                        var t, i, s, a = (t = e, {w: (i = l.width()) + "px", h: (s = l.height()) + "px", cw: t * i + "px", ch: t * s + "px"});
                        u.css("vertical" === r ? "top" : "left", "vertical" === r ? a.ch : a.cw), function (e) {
                            "vertical" === r ? (l.css("clip", "rect(0," + e.w + "," + e.ch + ",0)"), c.css("clip", "rect(" + e.ch + "," + e.w + "," + e.h + ",0)")) : (l.css("clip", "rect(0," + e.cw + "," + e.h + ",0)"), c.css("clip", "rect(0," + e.w + "," + e.h + "," + e.cw + ")")), n.css("height", e.h)
                        }(a)
                    }, p = function (e, t) {
                        var n;
                        return n = "vertical" === r ? (t - h) / v : (e - f) / m, 0, 1, Math.max(0, Math.min(1, n))
                    };
                    s(window).on("resize.twentytwenty", (function (e) {
                        d(t)
                    }));
                    var f = 0, h = 0, m = 0, v = 0, g = function (e) {
                        ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && "vertical" !== r || (e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && "vertical" === r) && e.preventDefault(), n.addClass("active"), f = n.offset().left, h = n.offset().top, m = l.width(), v = l.height()
                    }, y = function (e) {
                        n.hasClass("active") && (t = p(e.pageX, e.pageY), d(t))
                    }, _ = function () {
                        n.removeClass("active")
                    }, w = e.move_with_handle_only ? u : n;
                    w.on("movestart", g), w.on("move", y), w.on("moveend", _), e.move_slider_on_hover && (n.on("mouseenter", g), n.on("mousemove", y), n.on("mouseleave", _)), u.on("touchmove", (function (e) {
                        e.preventDefault()
                    })), n.find("img").on("mousedown", (function (e) {
                        e.preventDefault()
                    })), e.click_to_move && n.on("click", (function (e) {
                        f = n.offset().left, h = n.offset().top, m = l.width(), v = l.height(), t = p(e.pageX, e.pageY), d(t)
                    })), s(window).trigger("resize.twentytwenty")
                }))
            }
        }, 755: function (e, t) {
            var n;
            !function (t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }("undefined" != typeof window ? window : this, (function (r, i) {
                "use strict";
                var s = [], a = Object.getPrototypeOf, o = s.slice, l = s.flat ? function (e) {
                    return s.flat.call(e)
                } : function (e) {
                    return s.concat.apply([], e)
                }, c = s.push, u = s.indexOf, d = {}, p = d.toString, f = d.hasOwnProperty, h = f.toString, m = h.call(Object), v = {}, g = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }, y = function (e) {
                    return null != e && e === e.window
                }, _ = r.document, w = {type: !0, src: !0, nonce: !0, noModule: !0};

                function b(e, t, n) {
                    var r, i, s = (n = n || _).createElement("script");
                    if (s.text = e, t) for (r in w) (i = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, i);
                    n.head.appendChild(s).parentNode.removeChild(s)
                }

                function x(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
                }

                var T = "3.7.1", S = /HTML$/i, k = function (e, t) {
                    return new k.fn.init(e, t)
                };

                function C(e) {
                    var t = !!e && "length" in e && e.length, n = x(e);
                    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }

                function E(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }

                k.fn = k.prototype = {
                    jquery: T, constructor: k, length: 0, toArray: function () {
                        return o.call(this)
                    }, get: function (e) {
                        return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
                    }, pushStack: function (e) {
                        var t = k.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    }, each: function (e) {
                        return k.each(this, e)
                    }, map: function (e) {
                        return this.pushStack(k.map(this, (function (t, n) {
                            return e.call(t, n, t)
                        })))
                    }, slice: function () {
                        return this.pushStack(o.apply(this, arguments))
                    }, first: function () {
                        return this.eq(0)
                    }, last: function () {
                        return this.eq(-1)
                    }, even: function () {
                        return this.pushStack(k.grep(this, (function (e, t) {
                            return (t + 1) % 2
                        })))
                    }, odd: function () {
                        return this.pushStack(k.grep(this, (function (e, t) {
                            return t % 2
                        })))
                    }, eq: function (e) {
                        var t = this.length, n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    }, end: function () {
                        return this.prevObject || this.constructor()
                    }, push: c, sort: s.sort, splice: s.splice
                }, k.extend = k.fn.extend = function () {
                    var e, t, n, r, i, s, a = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || g(a) || (a = {}), o === l && (a = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], s = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(c, s, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, k.extend({
                    expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                        throw new Error(e)
                    }, noop: function () {
                    }, isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof (n = f.call(t, "constructor") && t.constructor) || h.call(n) !== m))
                    }, isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    }, globalEval: function (e, t, n) {
                        b(e, {nonce: t && t.nonce}, n)
                    }, each: function (e, t) {
                        var n, r = 0;
                        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e
                    }, text: function (e) {
                        var t, n = "", r = 0, i = e.nodeType;
                        if (!i) for (; t = e[r++];) n += k.text(t);
                        return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                    }, makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (C(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                    }, inArray: function (e, t, n) {
                        return null == t ? -1 : u.call(t, e, n)
                    }, isXMLDoc: function (e) {
                        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                        return !S.test(t || n && n.nodeName || "HTML")
                    }, merge: function (e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    }, grep: function (e, t, n) {
                        for (var r = [], i = 0, s = e.length, a = !n; i < s; i++) !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    }, map: function (e, t, n) {
                        var r, i, s = 0, a = [];
                        if (C(e)) for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && a.push(i); else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
                        return l(a)
                    }, guid: 1, support: v
                }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = s[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                    d["[object " + t + "]"] = t.toLowerCase()
                }));
                var M = s.pop, A = s.sort, P = s.splice, O = "[\\x20\\t\\r\\n\\f]", D = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g");
                k.contains = function (e, t) {
                    var n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                };
                var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

                function I(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }

                k.escapeSelector = function (e) {
                    return (e + "").replace(L, I)
                };
                var N = _, z = c;
                !function () {
                    var e, t, n, i, a, l, c, d, p, h, m = z, g = k.expando, y = 0, _ = 0, w = ee(), b = ee(), x = ee(), T = ee(), S = function (e, t) {
                            return e === t && (a = !0), 0
                        }, C = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "(?:\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", I = "\\[" + O + "*(" + L + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + O + "*\\]",
                        R = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", j = new RegExp(O + "+", "g"), q = new RegExp("^" + O + "*," + O + "*"), F = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"), B = new RegExp(O + "|>"), X = new RegExp(R), H = new RegExp("^" + L + "$"), Y = {
                            ID: new RegExp("^#(" + L + ")"),
                            CLASS: new RegExp("^\\.(" + L + ")"),
                            TAG: new RegExp("^(" + L + "|[*])"),
                            ATTR: new RegExp("^" + I),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + C + ")$", "i"),
                            needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                        }, $ = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, W = /[+~]/, U = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"), K = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        }, Q = function () {
                            le()
                        }, Z = pe((function (e) {
                            return !0 === e.disabled && E(e, "fieldset")
                        }), {dir: "parentNode", next: "legend"});
                    try {
                        m.apply(s = o.call(N.childNodes), N.childNodes), s[N.childNodes.length].nodeType
                    } catch (e) {
                        m = {
                            apply: function (e, t) {
                                z.apply(e, o.call(t))
                            }, call: function (e) {
                                z.apply(e, o.call(arguments, 1))
                            }
                        }
                    }

                    function J(e, t, n, r) {
                        var i, s, a, o, c, u, f, h = t && t.ownerDocument, y = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return n;
                        if (!r && (le(t), t = t || l, d)) {
                            if (11 !== y && (c = G.exec(e))) if (i = c[1]) {
                                if (9 === y) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return m.call(n, a), n
                                } else if (h && (a = h.getElementById(i)) && J.contains(t, a) && a.id === i) return m.call(n, a), n
                            } else {
                                if (c[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = c[3]) && t.getElementsByClassName) return m.apply(n, t.getElementsByClassName(i)), n
                            }
                            if (!(T[e + " "] || p && p.test(e))) {
                                if (f = e, h = t, 1 === y && (B.test(e) || F.test(e))) {
                                    for ((h = W.test(e) && oe(t.parentNode) || t) == t && v.scope || ((o = t.getAttribute("id")) ? o = k.escapeSelector(o) : t.setAttribute("id", o = g)), s = (u = ue(e)).length; s--;) u[s] = (o ? "#" + o : ":scope") + " " + de(u[s]);
                                    f = u.join(",")
                                }
                                try {
                                    return m.apply(n, h.querySelectorAll(f)), n
                                } catch (t) {
                                    T(e, !0)
                                } finally {
                                    o === g && t.removeAttribute("id")
                                }
                            }
                        }
                        return ye(e.replace(D, "$1"), t, n, r)
                    }

                    function ee() {
                        var e = [];
                        return function n(r, i) {
                            return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = i
                        }
                    }

                    function te(e) {
                        return e[g] = !0, e
                    }

                    function ne(e) {
                        var t = l.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function re(e) {
                        return function (t) {
                            return E(t, "input") && t.type === e
                        }
                    }

                    function ie(e) {
                        return function (t) {
                            return (E(t, "input") || E(t, "button")) && t.type === e
                        }
                    }

                    function se(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Z(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function ae(e) {
                        return te((function (t) {
                            return t = +t, te((function (n, r) {
                                for (var i, s = e([], n.length, t), a = s.length; a--;) n[i = s[a]] && (n[i] = !(r[i] = n[i]))
                            }))
                        }))
                    }

                    function oe(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    function le(e) {
                        var n, r = e ? e.ownerDocument || e : N;
                        return r != l && 9 === r.nodeType && r.documentElement ? (c = (l = r).documentElement, d = !k.isXMLDoc(l), h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, c.msMatchesSelector && N != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", Q), v.getById = ne((function (e) {
                            return c.appendChild(e).id = k.expando, !l.getElementsByName || !l.getElementsByName(k.expando).length
                        })), v.disconnectedMatch = ne((function (e) {
                            return h.call(e, "*")
                        })), v.scope = ne((function () {
                            return l.querySelectorAll(":scope")
                        })), v.cssHas = ne((function () {
                            try {
                                return l.querySelector(":has(*,:jqfake)"), !1
                            } catch (e) {
                                return !0
                            }
                        })), v.getById ? (t.filter.ID = function (e) {
                            var t = e.replace(U, K);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, t.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && d) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (t.filter.ID = function (e) {
                            var t = e.replace(U, K);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, t.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && d) {
                                var n, r, i, s = t.getElementById(e);
                                if (s) {
                                    if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                    for (i = t.getElementsByName(e), r = 0; s = i[r++];) if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                                }
                                return []
                            }
                        }), t.find.TAG = function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                        }, t.find.CLASS = function (e, t) {
                            if (void 0 !== t.getElementsByClassName && d) return t.getElementsByClassName(e)
                        }, p = [], ne((function (e) {
                            var t;
                            c.appendChild(e).innerHTML = "<a id='" + g + "' href='' disabled='disabled'></a><select id='" + g + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + O + "*(?:value|" + C + ")"), e.querySelectorAll("[id~=" + g + "-]").length || p.push("~="), e.querySelectorAll("a#" + g + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = l.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = l.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")")
                        })), v.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), S = function (e, t) {
                            if (e === t) return a = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument == N && J.contains(N, e) ? -1 : t === l || t.ownerDocument == N && J.contains(N, t) ? 1 : i ? u.call(i, e) - u.call(i, t) : 0 : 4 & n ? -1 : 1)
                        }, l) : l
                    }

                    for (e in J.matches = function (e, t) {
                        return J(e, null, null, t)
                    }, J.matchesSelector = function (e, t) {
                        if (le(e), d && !T[t + " "] && (!p || !p.test(t))) try {
                            var n = h.call(e, t);
                            if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            T(t, !0)
                        }
                        return J(t, l, null, [e]).length > 0
                    }, J.contains = function (e, t) {
                        return (e.ownerDocument || e) != l && le(e), k.contains(e, t)
                    }, J.attr = function (e, n) {
                        (e.ownerDocument || e) != l && le(e);
                        var r = t.attrHandle[n.toLowerCase()], i = r && f.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !d) : void 0;
                        return void 0 !== i ? i : e.getAttribute(n)
                    }, J.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, k.uniqueSort = function (e) {
                        var t, n = [], r = 0, s = 0;
                        if (a = !v.sortStable, i = !v.sortStable && o.call(e, 0), A.call(e, S), a) {
                            for (; t = e[s++];) t === e[s] && (r = n.push(s));
                            for (; r--;) P.call(e, n[r], 1)
                        }
                        return i = null, e
                    }, k.fn.uniqueSort = function () {
                        return this.pushStack(k.uniqueSort(o.apply(this)))
                    }, t = k.expr = {
                        cacheLength: 50, createPseudo: te, match: Y, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(U, K), e[3] = (e[3] || e[4] || e[5] || "").replace(U, K), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || J.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && J.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = ue(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        }, filter: {
                            TAG: function (e) {
                                var t = e.replace(U, K).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return E(e, t)
                                }
                            }, CLASS: function (e) {
                                var t = w[e + " "];
                                return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && w(e, (function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            }, ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = J.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            }, CHILD: function (e, t, n, r, i) {
                                var s = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
                                return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var c, u, d, p, f, h = s !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = o && t.nodeName.toLowerCase(), _ = !l && !o, w = !1;
                                    if (m) {
                                        if (s) {
                                            for (; h;) {
                                                for (d = t; d = d[h];) if (o ? E(d, v) : 1 === d.nodeType) return !1;
                                                f = h = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [a ? m.firstChild : m.lastChild], a && _) {
                                            for (w = (p = (c = (u = m[g] || (m[g] = {}))[e] || [])[0] === y && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[h] || (w = p = 0) || f.pop();) if (1 === d.nodeType && ++w && d === t) {
                                                u[e] = [y, p, w];
                                                break
                                            }
                                        } else if (_ && (w = p = (c = (u = t[g] || (t[g] = {}))[e] || [])[0] === y && c[1]), !1 === w) for (; (d = ++p && d && d[h] || (w = p = 0) || f.pop()) && (!(o ? E(d, v) : 1 === d.nodeType) || !++w || (_ && ((u = d[g] || (d[g] = {}))[e] = [y, w]), d !== t));) ;
                                        return (w -= i) === r || w % r == 0 && w / r >= 0
                                    }
                                }
                            }, PSEUDO: function (e, n) {
                                var r, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || J.error("unsupported pseudo: " + e);
                                return i[g] ? i(n) : i.length > 1 ? (r = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function (e, t) {
                                    for (var r, s = i(e, n), a = s.length; a--;) e[r = u.call(e, s[a])] = !(t[r] = s[a])
                                })) : function (e) {
                                    return i(e, 0, r)
                                }) : i
                            }
                        }, pseudos: {
                            not: te((function (e) {
                                var t = [], n = [], r = ge(e.replace(D, "$1"));
                                return r[g] ? te((function (e, t, n, i) {
                                    for (var s, a = r(e, null, i, []), o = e.length; o--;) (s = a[o]) && (e[o] = !(t[o] = s))
                                })) : function (e, i, s) {
                                    return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                                }
                            })), has: te((function (e) {
                                return function (t) {
                                    return J(e, t).length > 0
                                }
                            })), contains: te((function (e) {
                                return e = e.replace(U, K), function (t) {
                                    return (t.textContent || k.text(t)).indexOf(e) > -1
                                }
                            })), lang: te((function (e) {
                                return H.test(e || "") || J.error("unsupported lang: " + e), e = e.replace(U, K).toLowerCase(), function (t) {
                                    var n;
                                    do {
                                        if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            })), target: function (e) {
                                var t = r.location && r.location.hash;
                                return t && t.slice(1) === e.id
                            }, root: function (e) {
                                return e === c
                            }, focus: function (e) {
                                return e === function () {
                                    try {
                                        return l.activeElement
                                    } catch (e) {
                                    }
                                }() && l.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: se(!1), disabled: se(!0), checked: function (e) {
                                return E(e, "input") && !!e.checked || E(e, "option") && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            }, parent: function (e) {
                                return !t.pseudos.empty(e)
                            }, header: function (e) {
                                return V.test(e.nodeName)
                            }, input: function (e) {
                                return $.test(e.nodeName)
                            }, button: function (e) {
                                return E(e, "input") && "button" === e.type || E(e, "button")
                            }, text: function (e) {
                                var t;
                                return E(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: ae((function () {
                                return [0]
                            })), last: ae((function (e, t) {
                                return [t - 1]
                            })), eq: ae((function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            })), even: ae((function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })), odd: ae((function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })), lt: ae((function (e, t, n) {
                                var r;
                                for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })), gt: ae((function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }, t.pseudos.nth = t.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) t.pseudos[e] = re(e);
                    for (e in {submit: !0, reset: !0}) t.pseudos[e] = ie(e);

                    function ce() {
                    }

                    function ue(e, n) {
                        var r, i, s, a, o, l, c, u = b[e + " "];
                        if (u) return n ? 0 : u.slice(0);
                        for (o = e, l = [], c = t.preFilter; o;) {
                            for (a in r && !(i = q.exec(o)) || (i && (o = o.slice(i[0].length) || o), l.push(s = [])), r = !1, (i = F.exec(o)) && (r = i.shift(), s.push({value: r, type: i[0].replace(D, " ")}), o = o.slice(r.length)), t.filter) !(i = Y[a].exec(o)) || c[a] && !(i = c[a](i)) || (r = i.shift(), s.push({value: r, type: a, matches: i}), o = o.slice(r.length));
                            if (!r) break
                        }
                        return n ? o.length : o ? J.error(e) : b(e, l).slice(0)
                    }

                    function de(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function pe(e, t, n) {
                        var r = t.dir, i = t.next, s = i || r, a = n && "parentNode" === s, o = _++;
                        return t.first ? function (t, n, i) {
                            for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function (t, n, l) {
                            var c, u, d = [y, o];
                            if (l) {
                                for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                            } else for (; t = t[r];) if (1 === t.nodeType || a) if (u = t[g] || (t[g] = {}), i && E(t, i)) t = t[r] || t; else {
                                if ((c = u[s]) && c[0] === y && c[1] === o) return d[2] = c[2];
                                if (u[s] = d, d[2] = e(t, n, l)) return !0
                            }
                            return !1
                        }
                    }

                    function fe(e) {
                        return e.length > 1 ? function (t, n, r) {
                            for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function he(e, t, n, r, i) {
                        for (var s, a = [], o = 0, l = e.length, c = null != t; o < l; o++) (s = e[o]) && (n && !n(s, r, i) || (a.push(s), c && t.push(o)));
                        return a
                    }

                    function me(e, t, n, r, i, s) {
                        return r && !r[g] && (r = me(r)), i && !i[g] && (i = me(i, s)), te((function (s, a, o, l) {
                            var c, d, p, f, h = [], v = [], g = a.length, y = s || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) J(e, t[r], n);
                                return n
                            }(t || "*", o.nodeType ? [o] : o, []), _ = !e || !s && t ? y : he(y, h, e, o, l);
                            if (n ? n(_, f = i || (s ? e : g || r) ? [] : a, o, l) : f = _, r) for (c = he(f, v), r(c, [], o, l), d = c.length; d--;) (p = c[d]) && (f[v[d]] = !(_[v[d]] = p));
                            if (s) {
                                if (i || e) {
                                    if (i) {
                                        for (c = [], d = f.length; d--;) (p = f[d]) && c.push(_[d] = p);
                                        i(null, f = [], c, l)
                                    }
                                    for (d = f.length; d--;) (p = f[d]) && (c = i ? u.call(s, p) : h[d]) > -1 && (s[c] = !(a[c] = p))
                                }
                            } else f = he(f === a ? f.splice(g, f.length) : f), i ? i(null, a, f, l) : m.apply(a, f)
                        }))
                    }

                    function ve(e) {
                        for (var r, i, s, a = e.length, o = t.relative[e[0].type], l = o || t.relative[" "], c = o ? 1 : 0, d = pe((function (e) {
                            return e === r
                        }), l, !0), p = pe((function (e) {
                            return u.call(r, e) > -1
                        }), l, !0), f = [function (e, t, i) {
                            var s = !o && (i || t != n) || ((r = t).nodeType ? d(e, t, i) : p(e, t, i));
                            return r = null, s
                        }]; c < a; c++) if (i = t.relative[e[c].type]) f = [pe(fe(f), i)]; else {
                            if ((i = t.filter[e[c].type].apply(null, e[c].matches))[g]) {
                                for (s = ++c; s < a && !t.relative[e[s].type]; s++) ;
                                return me(c > 1 && fe(f), c > 1 && de(e.slice(0, c - 1).concat({value: " " === e[c - 2].type ? "*" : ""})).replace(D, "$1"), i, c < s && ve(e.slice(c, s)), s < a && ve(e = e.slice(s)), s < a && de(e))
                            }
                            f.push(i)
                        }
                        return fe(f)
                    }

                    function ge(e, r) {
                        var i, s = [], a = [], o = x[e + " "];
                        if (!o) {
                            for (r || (r = ue(e)), i = r.length; i--;) (o = ve(r[i]))[g] ? s.push(o) : a.push(o);
                            o = x(e, function (e, r) {
                                var i = r.length > 0, s = e.length > 0, a = function (a, o, c, u, p) {
                                    var f, h, v, g = 0, _ = "0", w = a && [], b = [], x = n, T = a || s && t.find.TAG("*", p), S = y += null == x ? 1 : Math.random() || .1, C = T.length;
                                    for (p && (n = o == l || o || p); _ !== C && null != (f = T[_]); _++) {
                                        if (s && f) {
                                            for (h = 0, o || f.ownerDocument == l || (le(f), c = !d); v = e[h++];) if (v(f, o || l, c)) {
                                                m.call(u, f);
                                                break
                                            }
                                            p && (y = S)
                                        }
                                        i && ((f = !v && f) && g--, a && w.push(f))
                                    }
                                    if (g += _, i && _ !== g) {
                                        for (h = 0; v = r[h++];) v(w, b, o, c);
                                        if (a) {
                                            if (g > 0) for (; _--;) w[_] || b[_] || (b[_] = M.call(u));
                                            b = he(b)
                                        }
                                        m.apply(u, b), p && !a && b.length > 0 && g + r.length > 1 && k.uniqueSort(u)
                                    }
                                    return p && (y = S, n = x), w
                                };
                                return i ? te(a) : a
                            }(a, s)), o.selector = e
                        }
                        return o
                    }

                    function ye(e, n, r, i) {
                        var s, a, o, l, c, u = "function" == typeof e && e, p = !i && ue(e = u.selector || e);
                        if (r = r || [], 1 === p.length) {
                            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (o = a[0]).type && 9 === n.nodeType && d && t.relative[a[1].type]) {
                                if (!(n = (t.find.ID(o.matches[0].replace(U, K), n) || [])[0])) return r;
                                u && (n = n.parentNode), e = e.slice(a.shift().value.length)
                            }
                            for (s = Y.needsContext.test(e) ? 0 : a.length; s-- && (o = a[s], !t.relative[l = o.type]);) if ((c = t.find[l]) && (i = c(o.matches[0].replace(U, K), W.test(a[0].type) && oe(n.parentNode) || n))) {
                                if (a.splice(s, 1), !(e = i.length && de(a))) return m.apply(r, i), r;
                                break
                            }
                        }
                        return (u || ge(e, p))(i, n, !d, r, !n || W.test(e) && oe(n.parentNode) || n), r
                    }

                    ce.prototype = t.filters = t.pseudos, t.setFilters = new ce, v.sortStable = g.split("").sort(S).join("") === g, le(), v.sortDetached = ne((function (e) {
                        return 1 & e.compareDocumentPosition(l.createElement("fieldset"))
                    })), k.find = J, k.expr[":"] = k.expr.pseudos, k.unique = k.uniqueSort, J.compile = ge, J.select = ye, J.setDocument = le, J.tokenize = ue, J.escape = k.escapeSelector, J.getText = k.text, J.isXML = k.isXMLDoc, J.selectors = k.expr, J.support = k.support, J.uniqueSort = k.uniqueSort
                }();
                var R = function (e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                        if (i && k(e).is(n)) break;
                        r.push(e)
                    }
                    return r
                }, j = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }, q = k.expr.match.needsContext, F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function B(e, t, n) {
                    return g(t) ? k.grep(e, (function (e, r) {
                        return !!t.call(e, r, e) !== n
                    })) : t.nodeType ? k.grep(e, (function (e) {
                        return e === t !== n
                    })) : "string" != typeof t ? k.grep(e, (function (e) {
                        return u.call(t, e) > -1 !== n
                    })) : k.filter(t, e, n)
                }

                k.filter = function (e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, (function (e) {
                        return 1 === e.nodeType
                    })))
                }, k.fn.extend({
                    find: function (e) {
                        var t, n, r = this.length, i = this;
                        if ("string" != typeof e) return this.pushStack(k(e).filter((function () {
                            for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
                        return r > 1 ? k.uniqueSort(n) : n
                    }, filter: function (e) {
                        return this.pushStack(B(this, e || [], !1))
                    }, not: function (e) {
                        return this.pushStack(B(this, e || [], !0))
                    }, is: function (e) {
                        return !!B(this, "string" == typeof e && q.test(e) ? k(e) : e || [], !1).length
                    }
                });
                var X, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (k.fn.init = function (e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if (n = n || X, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), F.test(r[1]) && k.isPlainObject(t)) for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = _.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
                }).prototype = k.fn, X = k(_);
                var Y = /^(?:parents|prev(?:Until|All))/, $ = {children: !0, contents: !0, next: !0, prev: !0};

                function V(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType;) ;
                    return e
                }

                k.fn.extend({
                    has: function (e) {
                        var t = k(e, this), n = t.length;
                        return this.filter((function () {
                            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
                        }))
                    }, closest: function (e, t) {
                        var n, r = 0, i = this.length, s = [], a = "string" != typeof e && k(e);
                        if (!q.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
                        return this.pushStack(s.length > 1 ? k.uniqueSort(s) : s)
                    }, index: function (e) {
                        return e ? "string" == typeof e ? u.call(k(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    }, add: function (e, t) {
                        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
                    }, addBack: function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), k.each({
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    }, parents: function (e) {
                        return R(e, "parentNode")
                    }, parentsUntil: function (e, t, n) {
                        return R(e, "parentNode", n)
                    }, next: function (e) {
                        return V(e, "nextSibling")
                    }, prev: function (e) {
                        return V(e, "previousSibling")
                    }, nextAll: function (e) {
                        return R(e, "nextSibling")
                    }, prevAll: function (e) {
                        return R(e, "previousSibling")
                    }, nextUntil: function (e, t, n) {
                        return R(e, "nextSibling", n)
                    }, prevUntil: function (e, t, n) {
                        return R(e, "previousSibling", n)
                    }, siblings: function (e) {
                        return j((e.parentNode || {}).firstChild, e)
                    }, children: function (e) {
                        return j(e.firstChild)
                    }, contents: function (e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
                    }
                }, (function (e, t) {
                    k.fn[e] = function (n, r) {
                        var i = k.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = k.filter(r, i)), this.length > 1 && ($[e] || k.uniqueSort(i), Y.test(e) && i.reverse()), this.pushStack(i)
                    }
                }));
                var G = /[^\x20\t\r\n\f]+/g;

                function W(e) {
                    return e
                }

                function U(e) {
                    throw e
                }

                function K(e, t, n, r) {
                    var i;
                    try {
                        e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }

                k.Callbacks = function (e) {
                    e = "string" == typeof e ? function (e) {
                        var t = {};
                        return k.each(e.match(G) || [], (function (e, n) {
                            t[n] = !0
                        })), t
                    }(e) : k.extend({}, e);
                    var t, n, r, i, s = [], a = [], o = -1, l = function () {
                        for (i = i || e.once, r = t = !0; a.length; o = -1) for (n = a.shift(); ++o < s.length;) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
                    }, c = {
                        add: function () {
                            return s && (n && !t && (o = s.length - 1, a.push(n)), function t(n) {
                                k.each(n, (function (n, r) {
                                    g(r) ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== x(r) && t(r)
                                }))
                            }(arguments), n && !t && l()), this
                        }, remove: function () {
                            return k.each(arguments, (function (e, t) {
                                for (var n; (n = k.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= o && o--
                            })), this
                        }, has: function (e) {
                            return e ? k.inArray(e, s) > -1 : s.length > 0
                        }, empty: function () {
                            return s && (s = []), this
                        }, disable: function () {
                            return i = a = [], s = n = "", this
                        }, disabled: function () {
                            return !s
                        }, lock: function () {
                            return i = a = [], n || t || (s = n = ""), this
                        }, locked: function () {
                            return !!i
                        }, fireWith: function (e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                        }, fire: function () {
                            return c.fireWith(this, arguments), this
                        }, fired: function () {
                            return !!r
                        }
                    };
                    return c
                }, k.extend({
                    Deferred: function (e) {
                        var t = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], n = "pending", i = {
                            state: function () {
                                return n
                            }, always: function () {
                                return s.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return i.then(null, e)
                            }, pipe: function () {
                                var e = arguments;
                                return k.Deferred((function (n) {
                                    k.each(t, (function (t, r) {
                                        var i = g(e[r[4]]) && e[r[4]];
                                        s[r[1]]((function () {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            }, then: function (e, n, i) {
                                var s = 0;

                                function a(e, t, n, i) {
                                    return function () {
                                        var o = this, l = arguments, c = function () {
                                            var r, c;
                                            if (!(e < s)) {
                                                if ((r = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = r && ("object" == typeof r || "function" == typeof r) && r.then, g(c) ? i ? c.call(r, a(s, t, W, i), a(s, t, U, i)) : (s++, c.call(r, a(s, t, W, i), a(s, t, U, i), a(s, t, W, t.notifyWith))) : (n !== W && (o = void 0, l = [r]), (i || t.resolveWith)(o, l))
                                            }
                                        }, u = i ? c : function () {
                                            try {
                                                c()
                                            } catch (r) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(r, u.error), e + 1 >= s && (n !== U && (o = void 0, l = [r]), t.rejectWith(o, l))
                                            }
                                        };
                                        e ? u() : (k.Deferred.getErrorHook ? u.error = k.Deferred.getErrorHook() : k.Deferred.getStackHook && (u.error = k.Deferred.getStackHook()), r.setTimeout(u))
                                    }
                                }

                                return k.Deferred((function (r) {
                                    t[0][3].add(a(0, r, g(i) ? i : W, r.notifyWith)), t[1][3].add(a(0, r, g(e) ? e : W)), t[2][3].add(a(0, r, g(n) ? n : U))
                                })).promise()
                            }, promise: function (e) {
                                return null != e ? k.extend(e, i) : i
                            }
                        }, s = {};
                        return k.each(t, (function (e, r) {
                            var a = r[2], o = r[5];
                            i[r[1]] = a.add, o && a.add((function () {
                                n = o
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), s[r[0]] = function () {
                                return s[r[0] + "With"](this === s ? void 0 : this, arguments), this
                            }, s[r[0] + "With"] = a.fireWith
                        })), i.promise(s), e && e.call(s, s), s
                    }, when: function (e) {
                        var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), s = k.Deferred(), a = function (e) {
                            return function (n) {
                                r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(r, i)
                            }
                        };
                        if (t <= 1 && (K(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(i[n] && i[n].then))) return s.then();
                        for (; n--;) K(i[n], a(n), s.reject);
                        return s.promise()
                    }
                });
                var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                k.Deferred.exceptionHook = function (e, t) {
                    r.console && r.console.warn && e && Q.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, k.readyException = function (e) {
                    r.setTimeout((function () {
                        throw e
                    }))
                };
                var Z = k.Deferred();

                function J() {
                    _.removeEventListener("DOMContentLoaded", J), r.removeEventListener("load", J), k.ready()
                }

                k.fn.ready = function (e) {
                    return Z.then(e).catch((function (e) {
                        k.readyException(e)
                    })), this
                }, k.extend({
                    isReady: !1, readyWait: 1, ready: function (e) {
                        (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || Z.resolveWith(_, [k]))
                    }
                }), k.ready.then = Z.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? r.setTimeout(k.ready) : (_.addEventListener("DOMContentLoaded", J), r.addEventListener("load", J));
                var ee = function (e, t, n, r, i, s, a) {
                    var o = 0, l = e.length, c = null == n;
                    if ("object" === x(n)) for (o in i = !0, n) ee(e, t, o, n[o], !0, s, a); else if (void 0 !== r && (i = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(k(e), n)
                    })), t)) for (; o < l; o++) t(e[o], n, a ? r : r.call(e[o], o, t(e[o], n)));
                    return i ? e : c ? t.call(e) : l ? t(e[0], n) : s
                }, te = /^-ms-/, ne = /-([a-z])/g;

                function re(e, t) {
                    return t.toUpperCase()
                }

                function ie(e) {
                    return e.replace(te, "ms-").replace(ne, re)
                }

                var se = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function ae() {
                    this.expando = k.expando + ae.uid++
                }

                ae.uid = 1, ae.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || (t = {}, se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t
                    }, set: function (e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[ie(t)] = n; else for (r in t) i[ie(r)] = t[r];
                        return i
                    }, get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ie(t)]
                    }, access: function (e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    }, remove: function (e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(ie) : (t = ie(t)) in r ? [t] : t.match(G) || []).length;
                                for (; n--;) delete r[t[n]]
                            }
                            (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    }, hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !k.isEmptyObject(t)
                    }
                };
                var oe = new ae, le = new ae, ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ue = /[A-Z]/g;

                function de(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ue, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function (e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {
                        }
                        le.set(e, t, n)
                    } else n = void 0;
                    return n
                }

                k.extend({
                    hasData: function (e) {
                        return le.hasData(e) || oe.hasData(e)
                    }, data: function (e, t, n) {
                        return le.access(e, t, n)
                    }, removeData: function (e, t) {
                        le.remove(e, t)
                    }, _data: function (e, t, n) {
                        return oe.access(e, t, n)
                    }, _removeData: function (e, t) {
                        oe.remove(e, t)
                    }
                }), k.fn.extend({
                    data: function (e, t) {
                        var n, r, i, s = this[0], a = s && s.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = le.get(s), 1 === s.nodeType && !oe.get(s, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = ie(r.slice(5)), de(s, r, i[r]));
                                oe.set(s, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function () {
                            le.set(this, e)
                        })) : ee(this, (function (t) {
                            var n;
                            if (s && void 0 === t) return void 0 !== (n = le.get(s, e)) || void 0 !== (n = de(s, e)) ? n : void 0;
                            this.each((function () {
                                le.set(this, e, t)
                            }))
                        }), null, t, arguments.length > 1, null, !0)
                    }, removeData: function (e) {
                        return this.each((function () {
                            le.remove(this, e)
                        }))
                    }
                }), k.extend({
                    queue: function (e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = oe.get(e, t), n && (!r || Array.isArray(n) ? r = oe.access(e, t, k.makeArray(n)) : r.push(n)), r || []
                    }, dequeue: function (e, t) {
                        t = t || "fx";
                        var n = k.queue(e, t), r = n.length, i = n.shift(), s = k._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, (function () {
                            k.dequeue(e, t)
                        }), s)), !r && s && s.empty.fire()
                    }, _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return oe.get(e, n) || oe.access(e, n, {
                            empty: k.Callbacks("once memory").add((function () {
                                oe.remove(e, [t + "queue", n])
                            }))
                        })
                    }
                }), k.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                            var n = k.queue(this, e, t);
                            k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
                        }))
                    }, dequeue: function (e) {
                        return this.each((function () {
                            k.dequeue(this, e)
                        }))
                    }, clearQueue: function (e) {
                        return this.queue(e || "fx", [])
                    }, promise: function (e, t) {
                        var n, r = 1, i = k.Deferred(), s = this, a = this.length, o = function () {
                            --r || i.resolveWith(s, [s])
                        };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = oe.get(s[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
                        return o(), i.promise(t)
                    }
                });
                var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, fe = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), he = ["Top", "Right", "Bottom", "Left"], me = _.documentElement, ve = function (e) {
                    return k.contains(e.ownerDocument, e)
                }, ge = {composed: !0};
                me.getRootNode && (ve = function (e) {
                    return k.contains(e.ownerDocument, e) || e.getRootNode(ge) === e.ownerDocument
                });
                var ye = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ve(e) && "none" === k.css(e, "display")
                };

                function _e(e, t, n, r) {
                    var i, s, a = 20, o = r ? function () {
                        return r.cur()
                    } : function () {
                        return k.css(e, t, "")
                    }, l = o(), c = n && n[3] || (k.cssNumber[t] ? "" : "px"), u = e.nodeType && (k.cssNumber[t] || "px" !== c && +l) && fe.exec(k.css(e, t));
                    if (u && u[3] !== c) {
                        for (l /= 2, c = c || u[3], u = +l || 1; a--;) k.style(e, t, u + c), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), u /= s;
                        u *= 2, k.style(e, t, u + c), n = n || []
                    }
                    return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
                }

                var we = {};

                function be(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, i = we[r];
                    return i || (t = n.body.appendChild(n.createElement(r)), i = k.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), we[r] = i, i)
                }

                function xe(e, t) {
                    for (var n, r, i = [], s = 0, a = e.length; s < a; s++) (r = e[s]).style && (n = r.style.display, t ? ("none" === n && (i[s] = oe.get(r, "display") || null, i[s] || (r.style.display = "")), "" === r.style.display && ye(r) && (i[s] = be(r))) : "none" !== n && (i[s] = "none", oe.set(r, "display", n)));
                    for (s = 0; s < a; s++) null != i[s] && (e[s].style.display = i[s]);
                    return e
                }

                k.fn.extend({
                    show: function () {
                        return xe(this, !0)
                    }, hide: function () {
                        return xe(this)
                    }, toggle: function (e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                            ye(this) ? k(this).show() : k(this).hide()
                        }))
                    }
                });
                var Te, Se, ke = /^(?:checkbox|radio)$/i, Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ee = /^$|^module$|\/(?:java|ecma)script/i;
                Te = _.createDocumentFragment().appendChild(_.createElement("div")), (Se = _.createElement("input")).setAttribute("type", "radio"), Se.setAttribute("checked", "checked"), Se.setAttribute("name", "t"), Te.appendChild(Se), v.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked, Te.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue, Te.innerHTML = "<option></option>", v.option = !!Te.lastChild;
                var Me = {thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};

                function Ae(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? k.merge([e], n) : n
                }

                function Pe(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) oe.set(e[n], "globalEval", !t || oe.get(t[n], "globalEval"))
                }

                Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, v.option || (Me.optgroup = Me.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Oe = /<|&#?\w+;/;

                function De(e, t, n, r, i) {
                    for (var s, a, o, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((s = e[f]) || 0 === s) if ("object" === x(s)) k.merge(p, s.nodeType ? [s] : s); else if (Oe.test(s)) {
                        for (a = a || d.appendChild(t.createElement("div")), o = (Ce.exec(s) || ["", ""])[1].toLowerCase(), l = Me[o] || Me._default, a.innerHTML = l[1] + k.htmlPrefilter(s) + l[2], u = l[0]; u--;) a = a.lastChild;
                        k.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
                    } else p.push(t.createTextNode(s));
                    for (d.textContent = "", f = 0; s = p[f++];) if (r && k.inArray(s, r) > -1) i && i.push(s); else if (c = ve(s), a = Ae(d.appendChild(s), "script"), c && Pe(a), n) for (u = 0; s = a[u++];) Ee.test(s.type || "") && n.push(s);
                    return d
                }

                var Le = /^([^.]*)(?:\.(.+)|)/;

                function Ie() {
                    return !0
                }

                function Ne() {
                    return !1
                }

                function ze(e, t, n, r, i, s) {
                    var a, o;
                    if ("object" == typeof t) {
                        for (o in "string" != typeof n && (r = r || n, n = void 0), t) ze(e, o, n, r, t[o], s);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne; else if (!i) return e;
                    return 1 === s && (a = i, i = function (e) {
                        return k().off(e), a.apply(this, arguments)
                    }, i.guid = a.guid || (a.guid = k.guid++)), e.each((function () {
                        k.event.add(this, t, i, r, n)
                    }))
                }

                function Re(e, t, n) {
                    n ? (oe.set(e, t, !1), k.event.add(e, t, {
                        namespace: !1, handler: function (e) {
                            var n, r = oe.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r) (k.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = o.call(arguments), oe.set(this, t, r), this[t](), n = oe.get(this, t), oe.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                            } else r && (oe.set(this, t, k.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ie)
                        }
                    })) : void 0 === oe.get(e, t) && k.event.add(e, t, Ie)
                }

                k.event = {
                    global: {}, add: function (e, t, n, r, i) {
                        var s, a, o, l, c, u, d, p, f, h, m, v = oe.get(e);
                        if (se(e)) for (n.handler && (n = (s = n).handler, i = s.selector), i && k.find.matchesSelector(me, i), n.guid || (n.guid = k.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
                            return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(G) || [""]).length; c--;) f = m = (o = Le.exec(t[c]) || [])[1], h = (o[2] || "").split(".").sort(), f && (d = k.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = k.event.special[f] || {}, u = k.extend({
                            type: f,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && k.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), k.event.global[f] = !0)
                    }, remove: function (e, t, n, r, i) {
                        var s, a, o, l, c, u, d, p, f, h, m, v = oe.hasData(e) && oe.get(e);
                        if (v && (l = v.events)) {
                            for (c = (t = (t || "").match(G) || [""]).length; c--;) if (f = m = (o = Le.exec(t[c]) || [])[1], h = (o[2] || "").split(".").sort(), f) {
                                for (d = k.event.special[f] || {}, p = l[f = (r ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length; s--;) u = p[s], !i && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(s, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || k.removeEvent(e, f, v.handle), delete l[f])
                            } else for (f in l) k.event.remove(e, f + t[c], n, r, !0);
                            k.isEmptyObject(l) && oe.remove(e, "handle events")
                        }
                    }, dispatch: function (e) {
                        var t, n, r, i, s, a, o = new Array(arguments.length), l = k.event.fix(e), c = (oe.get(this, "events") || Object.create(null))[l.type] || [], u = k.event.special[l.type] || {};
                        for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
                        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                            for (a = k.event.handlers.call(this, l, c), t = 0; (i = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = i.elem, n = 0; (s = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (r = ((k.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, o)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, l), l.result
                        }
                    }, handlers: function (e, t) {
                        var n, r, i, s, a, o = [], l = t.delegateCount, c = e.target;
                        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (s = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? k(i, this).index(c) > -1 : k.find(i, this, null, [c]).length), a[i] && s.push(r);
                            s.length && o.push({elem: c, handlers: s})
                        }
                        return c = this, l < t.length && o.push({elem: c, handlers: t.slice(l)}), o
                    }, addProp: function (e, t) {
                        Object.defineProperty(k.Event.prototype, e, {
                            enumerable: !0, configurable: !0, get: g(t) ? function () {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function () {
                                if (this.originalEvent) return this.originalEvent[e]
                            }, set: function (t) {
                                Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                            }
                        })
                    }, fix: function (e) {
                        return e[k.expando] ? e : new k.Event(e)
                    }, special: {
                        load: {noBubble: !0}, click: {
                            setup: function (e) {
                                var t = this || e;
                                return ke.test(t.type) && t.click && E(t, "input") && Re(t, "click", !0), !1
                            }, trigger: function (e) {
                                var t = this || e;
                                return ke.test(t.type) && t.click && E(t, "input") && Re(t, "click"), !0
                            }, _default: function (e) {
                                var t = e.target;
                                return ke.test(t.type) && t.click && E(t, "input") && oe.get(t, "click") || E(t, "a")
                            }
                        }, beforeunload: {
                            postDispatch: function (e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, k.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, k.Event = function (e, t) {
                    if (!(this instanceof k.Event)) return new k.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ie : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
                }, k.Event.prototype = {
                    constructor: k.Event, isDefaultPrevented: Ne, isPropagationStopped: Ne, isImmediatePropagationStopped: Ne, isSimulated: !1, preventDefault: function () {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ie, e && !this.isSimulated && e.preventDefault()
                    }, stopPropagation: function () {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ie, e && !this.isSimulated && e.stopPropagation()
                    }, stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ie, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, k.each({
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
                    char: !0,
                    code: !0,
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
                    which: !0
                }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                    function n(e) {
                        if (_.documentMode) {
                            var n = oe.get(this, "handle"), r = k.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
                        } else k.event.simulate(t, e.target, k.event.fix(e))
                    }

                    k.event.special[e] = {
                        setup: function () {
                            var r;
                            if (Re(this, e, !0), !_.documentMode) return !1;
                            (r = oe.get(this, t)) || this.addEventListener(t, n), oe.set(this, t, (r || 0) + 1)
                        }, trigger: function () {
                            return Re(this, e), !0
                        }, teardown: function () {
                            var e;
                            if (!_.documentMode) return !1;
                            (e = oe.get(this, t) - 1) ? oe.set(this, t, e) : (this.removeEventListener(t, n), oe.remove(this, t))
                        }, _default: function (t) {
                            return oe.get(t.target, e)
                        }, delegateType: t
                    }, k.event.special[t] = {
                        setup: function () {
                            var r = this.ownerDocument || this.document || this, i = _.documentMode ? this : r, s = oe.get(i, t);
                            s || (_.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), oe.set(i, t, (s || 0) + 1)
                        }, teardown: function () {
                            var r = this.ownerDocument || this.document || this, i = _.documentMode ? this : r, s = oe.get(i, t) - 1;
                            s ? oe.set(i, t, s) : (_.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), oe.remove(i, t))
                        }
                    }
                })), k.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, (function (e, t) {
                    k.event.special[e] = {
                        delegateType: t, bindType: t, handle: function (e) {
                            var n, r = e.relatedTarget, i = e.handleObj;
                            return r && (r === this || k.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), k.fn.extend({
                    on: function (e, t, n, r) {
                        return ze(this, e, t, n, r)
                    }, one: function (e, t, n, r) {
                        return ze(this, e, t, n, r, 1)
                    }, off: function (e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each((function () {
                            k.event.remove(this, e, n, t)
                        }))
                    }
                });
                var je = /<script|<style|<link/i, qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                function Be(e, t) {
                    return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
                }

                function Xe(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function He(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Ye(e, t) {
                    var n, r, i, s, a, o;
                    if (1 === t.nodeType) {
                        if (oe.hasData(e) && (o = oe.get(e).events)) for (i in oe.remove(t, "handle events"), o) for (n = 0, r = o[i].length; n < r; n++) k.event.add(t, i, o[i][n]);
                        le.hasData(e) && (s = le.access(e), a = k.extend({}, s), le.set(t, a))
                    }
                }

                function $e(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }

                function Ve(e, t, n, r) {
                    t = l(t);
                    var i, s, a, o, c, u, d = 0, p = e.length, f = p - 1, h = t[0], m = g(h);
                    if (m || p > 1 && "string" == typeof h && !v.checkClone && qe.test(h)) return e.each((function (i) {
                        var s = e.eq(i);
                        m && (t[0] = h.call(this, i, s.html())), Ve(s, t, n, r)
                    }));
                    if (p && (s = (i = De(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
                        for (o = (a = k.map(Ae(i, "script"), Xe)).length; d < p; d++) c = i, d !== f && (c = k.clone(c, !0, !0), o && k.merge(a, Ae(c, "script"))), n.call(e[d], c, d);
                        if (o) for (u = a[a.length - 1].ownerDocument, k.map(a, He), d = 0; d < o; d++) c = a[d], Ee.test(c.type || "") && !oe.access(c, "globalEval") && k.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : b(c.textContent.replace(Fe, ""), c, u))
                    }
                    return e
                }

                function Ge(e, t, n) {
                    for (var r, i = t ? k.filter(t, e) : e, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || k.cleanData(Ae(r)), r.parentNode && (n && ve(r) && Pe(Ae(r, "script")), r.parentNode.removeChild(r));
                    return e
                }

                k.extend({
                    htmlPrefilter: function (e) {
                        return e
                    }, clone: function (e, t, n) {
                        var r, i, s, a, o = e.cloneNode(!0), l = ve(e);
                        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = Ae(o), r = 0, i = (s = Ae(e)).length; r < i; r++) $e(s[r], a[r]);
                        if (t) if (n) for (s = s || Ae(e), a = a || Ae(o), r = 0, i = s.length; r < i; r++) Ye(s[r], a[r]); else Ye(e, o);
                        return (a = Ae(o, "script")).length > 0 && Pe(a, !l && Ae(e, "script")), o
                    }, cleanData: function (e) {
                        for (var t, n, r, i = k.event.special, s = 0; void 0 !== (n = e[s]); s++) if (se(n)) {
                            if (t = n[oe.expando]) {
                                if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                                n[oe.expando] = void 0
                            }
                            n[le.expando] && (n[le.expando] = void 0)
                        }
                    }
                }), k.fn.extend({
                    detach: function (e) {
                        return Ge(this, e, !0)
                    }, remove: function (e) {
                        return Ge(this, e)
                    }, text: function (e) {
                        return ee(this, (function (e) {
                            return void 0 === e ? k.text(this) : this.empty().each((function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    }, append: function () {
                        return Ve(this, arguments, (function (e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Be(this, e).appendChild(e)
                        }))
                    }, prepend: function () {
                        return Ve(this, arguments, (function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Be(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }))
                    }, before: function () {
                        return Ve(this, arguments, (function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    }, after: function () {
                        return Ve(this, arguments, (function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    }, empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(Ae(e, !1)), e.textContent = "");
                        return this
                    }, clone: function (e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function () {
                            return k.clone(this, e, t)
                        }))
                    }, html: function (e) {
                        return ee(this, (function (e) {
                            var t = this[0] || {}, n = 0, r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !je.test(e) && !Me[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = k.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(Ae(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {
                                }
                            }
                            t && this.empty().append(e)
                        }), null, e, arguments.length)
                    }, replaceWith: function () {
                        var e = [];
                        return Ve(this, arguments, (function (t) {
                            var n = this.parentNode;
                            k.inArray(this, e) < 0 && (k.cleanData(Ae(this)), n && n.replaceChild(t, this))
                        }), e)
                    }
                }), k.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, (function (e, t) {
                    k.fn[e] = function (e) {
                        for (var n, r = [], i = k(e), s = i.length - 1, a = 0; a <= s; a++) n = a === s ? this : this.clone(!0), k(i[a])[t](n), c.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }));
                var We = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Ue = /^--/, Ke = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r), t.getComputedStyle(e)
                }, Qe = function (e, t, n) {
                    var r, i, s = {};
                    for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                    for (i in r = n.call(e), t) e.style[i] = s[i];
                    return r
                }, Ze = new RegExp(he.join("|"), "i");

                function Je(e, t, n) {
                    var r, i, s, a, o = Ue.test(t), l = e.style;
                    return (n = n || Ke(e)) && (a = n.getPropertyValue(t) || n[t], o && a && (a = a.replace(D, "$1") || void 0), "" !== a || ve(e) || (a = k.style(e, t)), !v.pixelBoxStyles() && We.test(a) && Ze.test(t) && (r = l.width, i = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = r, l.minWidth = i, l.maxWidth = s)), void 0 !== a ? a + "" : a
                }

                function et(e, t) {
                    return {
                        get: function () {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }

                !function () {
                    function e() {
                        if (u) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(c).appendChild(u);
                            var e = r.getComputedStyle(u);
                            n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", s = 12 === t(u.offsetWidth / 3), me.removeChild(c), u = null
                        }
                    }

                    function t(e) {
                        return Math.round(parseFloat(e))
                    }

                    var n, i, s, a, o, l, c = _.createElement("div"), u = _.createElement("div");
                    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(v, {
                        boxSizingReliable: function () {
                            return e(), i
                        }, pixelBoxStyles: function () {
                            return e(), a
                        }, pixelPosition: function () {
                            return e(), n
                        }, reliableMarginLeft: function () {
                            return e(), l
                        }, scrollboxSize: function () {
                            return e(), s
                        }, reliableTrDimensions: function () {
                            var e, t, n, i;
                            return null == o && (e = _.createElement("table"), t = _.createElement("tr"), n = _.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", me.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), o = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, me.removeChild(e)), o
                        }
                    }))
                }();
                var tt = ["Webkit", "Moz", "ms"], nt = _.createElement("div").style, rt = {};

                function it(e) {
                    return k.cssProps[e] || rt[e] || (e in nt ? e : rt[e] = function (e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;) if ((e = tt[n] + t) in nt) return e
                    }(e) || e)
                }

                var st = /^(none|table(?!-c[ea]).+)/, at = {position: "absolute", visibility: "hidden", display: "block"}, ot = {letterSpacing: "0", fontWeight: "400"};

                function lt(e, t, n) {
                    var r = fe.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function ct(e, t, n, r, i, s) {
                    var a = "width" === t ? 1 : 0, o = 0, l = 0, c = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (c += k.css(e, n + he[a], !0, i)), r ? ("content" === n && (l -= k.css(e, "padding" + he[a], !0, i)), "margin" !== n && (l -= k.css(e, "border" + he[a] + "Width", !0, i))) : (l += k.css(e, "padding" + he[a], !0, i), "padding" !== n ? l += k.css(e, "border" + he[a] + "Width", !0, i) : o += k.css(e, "border" + he[a] + "Width", !0, i));
                    return !r && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5)) || 0), l + c
                }

                function ut(e, t, n) {
                    var r = Ke(e), i = (!v.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), s = i, a = Je(e, t, r), o = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (We.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (s = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + ct(e, t, n || (i ? "border" : "content"), s, r, a) + "px"
                }

                function dt(e, t, n, r, i) {
                    return new dt.prototype.init(e, t, n, r, i)
                }

                k.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) {
                                    var n = Je(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function (e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, s, a, o = ie(t), l = Ue.test(t), c = e.style;
                            if (l || (t = it(o)), a = k.cssHooks[t] || k.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                            "string" == (s = typeof n) && (i = fe.exec(n)) && i[1] && (n = _e(e, t, i), s = "number"), null != n && n == n && ("number" !== s || l || (n += i && i[3] || (k.cssNumber[o] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                        }
                    },
                    css: function (e, t, n, r) {
                        var i, s, a, o = ie(t);
                        return Ue.test(t) || (t = it(o)), (a = k.cssHooks[t] || k.cssHooks[o]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Je(e, t, r)), "normal" === i && t in ot && (i = ot[t]), "" === n || n ? (s = parseFloat(i), !0 === n || isFinite(s) ? s || 0 : i) : i
                    }
                }), k.each(["height", "width"], (function (e, t) {
                    k.cssHooks[t] = {
                        get: function (e, n, r) {
                            if (n) return !st.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, t, r) : Qe(e, at, (function () {
                                return ut(e, t, r)
                            }))
                        }, set: function (e, n, r) {
                            var i, s = Ke(e), a = !v.scrollboxSize() && "absolute" === s.position, o = (a || r) && "border-box" === k.css(e, "boxSizing", !1, s), l = r ? ct(e, t, r, o, s) : 0;
                            return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - ct(e, t, "border", !1, s) - .5)), l && (i = fe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = k.css(e, t)), lt(0, n, l)
                        }
                    }
                })), k.cssHooks.marginLeft = et(v.reliableMarginLeft, (function (e, t) {
                    if (t) return (parseFloat(Je(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {marginLeft: 0}, (function () {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), k.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
                    k.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + he[r] + t] = s[r] || s[r - 2] || s[0];
                            return i
                        }
                    }, "margin" !== e && (k.cssHooks[e + t].set = lt)
                })), k.fn.extend({
                    css: function (e, t) {
                        return ee(this, (function (e, t, n) {
                            var r, i, s = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Ke(e), i = t.length; a < i; a++) s[t[a]] = k.css(e, t[a], !1, r);
                                return s
                            }
                            return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                        }), e, t, arguments.length > 1)
                    }
                }), k.Tween = dt, dt.prototype = {
                    constructor: dt, init: function (e, t, n, r, i, s) {
                        this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (k.cssNumber[n] ? "" : "px")
                    }, cur: function () {
                        var e = dt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : dt.propHooks._default.get(this)
                    }, run: function (e) {
                        var t, n = dt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : dt.propHooks._default.set(this), this
                    }
                }, dt.prototype.init.prototype = dt.prototype, dt.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        }, set: function (e) {
                            k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, dt.propHooks.scrollTop = dt.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, k.easing = {
                    linear: function (e) {
                        return e
                    }, swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    }, _default: "swing"
                }, k.fx = dt.prototype.init, k.fx.step = {};
                var pt, ft, ht = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;

                function vt() {
                    ft && (!1 === _.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(vt) : r.setTimeout(vt, k.fx.interval), k.fx.tick())
                }

                function gt() {
                    return r.setTimeout((function () {
                        pt = void 0
                    })), pt = Date.now()
                }

                function yt(e, t) {
                    var n, r = 0, i = {height: e};
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = he[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function _t(e, t, n) {
                    for (var r, i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), s = 0, a = i.length; s < a; s++) if (r = i[s].call(n, t, e)) return r
                }

                function wt(e, t, n) {
                    var r, i, s = 0, a = wt.prefilters.length, o = k.Deferred().always((function () {
                        delete l.elem
                    })), l = function () {
                        if (i) return !1;
                        for (var t = pt || gt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), s = 0, a = c.tweens.length; s < a; s++) c.tweens[s].run(r);
                        return o.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
                    }, c = o.promise({
                        elem: e, props: k.extend({}, t), opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, n), originalProperties: t, originalOptions: n, startTime: pt || gt(), duration: n.duration, tweens: [], createTween: function (t, n) {
                            var r = k.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        }, stop: function (t) {
                            var n = 0, r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                        }
                    }), u = c.props;
                    for (function (e, t) {
                        var n, r, i, s, a;
                        for (n in e) if (i = t[r = ie(n)], s = e[n], Array.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in s = a.expand(s), delete e[r], s) n in e || (e[n] = s[n], t[n] = i); else t[r] = i
                    }(u, c.opts.specialEasing); s < a; s++) if (r = wt.prefilters[s].call(c, e, u, c.opts)) return g(r.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                    return k.map(u, _t, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, {elem: e, anim: c, queue: c.opts.queue})), c
                }

                k.Animation = k.extend(wt, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return _e(n.elem, e, fe.exec(t), n), n
                        }]
                    }, tweener: function (e, t) {
                        g(e) ? (t = e, e = ["*"]) : e = e.match(G);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], wt.tweeners[n] = wt.tweeners[n] || [], wt.tweeners[n].unshift(t)
                    }, prefilters: [function (e, t, n) {
                        var r, i, s, a, o, l, c, u, d = "width" in t || "height" in t, p = this, f = {}, h = e.style, m = e.nodeType && ye(e), v = oe.get(e, "fxshow");
                        for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
                            a.unqueued || o()
                        }), a.unqueued++, p.always((function () {
                            p.always((function () {
                                a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                            }))
                        }))), t) if (i = t[r], ht.test(i)) {
                            if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                                if ("show" !== i || !v || void 0 === v[r]) continue;
                                m = !0
                            }
                            f[r] = v && v[r] || k.style(e, r)
                        }
                        if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(f)) for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = oe.get(e, "display")), "none" === (u = k.css(e, "display")) && (c ? u = c : (xe([e], !0), c = e.style.display || c, u = k.css(e, "display"), xe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === k.css(e, "float") && (l || (p.done((function () {
                            h.display = c
                        })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function () {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        }))), l = !1, f) l || (v ? "hidden" in v && (m = v.hidden) : v = oe.access(e, "fxshow", {display: c}), s && (v.hidden = !m), m && xe([e], !0), p.done((function () {
                            for (r in m || xe([e]), oe.remove(e, "fxshow"), f) k.style(e, r, f[r])
                        }))), l = _t(m ? v[r] : 0, r, p), r in v || (v[r] = l.start, m && (l.end = l.start, l.start = 0))
                    }], prefilter: function (e, t) {
                        t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
                    }
                }), k.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? k.extend({}, e) : {complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t};
                    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        g(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
                    }, r
                }, k.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(ye).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                    }, animate: function (e, t, n, r) {
                        var i = k.isEmptyObject(e), s = k.speed(t, n, r), a = function () {
                            var t = wt(this, k.extend({}, e), s);
                            (i || oe.get(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a, i || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                    }, stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                            var t = !0, i = null != e && e + "queueHooks", s = k.timers, a = oe.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
                            for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                            !t && n || k.dequeue(this, e)
                        }))
                    }, finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each((function () {
                            var t, n = oe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = k.timers, a = r ? r.length : 0;
                            for (n.finish = !0, k.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), k.each(["toggle", "show", "hide"], (function (e, t) {
                    var n = k.fn[t];
                    k.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(yt(t, !0), e, r, i)
                    }
                })), k.each({slideDown: yt("show"), slideUp: yt("hide"), slideToggle: yt("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, (function (e, t) {
                    k.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                })), k.timers = [], k.fx.tick = function () {
                    var e, t = 0, n = k.timers;
                    for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || k.fx.stop(), pt = void 0
                }, k.fx.timer = function (e) {
                    k.timers.push(e), k.fx.start()
                }, k.fx.interval = 13, k.fx.start = function () {
                    ft || (ft = !0, vt())
                }, k.fx.stop = function () {
                    ft = null
                }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (e, t) {
                    return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, n) {
                        var i = r.setTimeout(t, e);
                        n.stop = function () {
                            r.clearTimeout(i)
                        }
                    }))
                }, function () {
                    var e = _.createElement("input"), t = _.createElement("select").appendChild(_.createElement("option"));
                    e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = _.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                }();
                var bt, xt = k.expr.attrHandle;
                k.fn.extend({
                    attr: function (e, t) {
                        return ee(this, k.attr, e, t, arguments.length > 1)
                    }, removeAttr: function (e) {
                        return this.each((function () {
                            k.removeAttr(this, e)
                        }))
                    }
                }), k.extend({
                    attr: function (e, t, n) {
                        var r, i, s = e.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === s && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
                    }, attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!v.radioValue && "radio" === t && E(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    }, removeAttr: function (e, t) {
                        var n, r = 0, i = t && t.match(G);
                        if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), bt = {
                    set: function (e, t, n) {
                        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, k.each(k.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                    var n = xt[t] || k.find.attr;
                    xt[t] = function (e, t, r) {
                        var i, s, a = t.toLowerCase();
                        return r || (s = xt[a], xt[a] = i, i = null != n(e, t, r) ? a : null, xt[a] = s), i
                    }
                }));
                var Tt = /^(?:input|select|textarea|button)$/i, St = /^(?:a|area)$/i;

                function kt(e) {
                    return (e.match(G) || []).join(" ")
                }

                function Ct(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function Et(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(G) || []
                }

                k.fn.extend({
                    prop: function (e, t) {
                        return ee(this, k.prop, e, t, arguments.length > 1)
                    }, removeProp: function (e) {
                        return this.each((function () {
                            delete this[k.propFix[e] || e]
                        }))
                    }
                }), k.extend({
                    prop: function (e, t, n) {
                        var r, i, s = e.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    }, propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = k.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Tt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    }, propFix: {for: "htmlFor", class: "className"}
                }), v.optSelected || (k.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    }, set: function (e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                    k.propFix[this.toLowerCase()] = this
                })), k.fn.extend({
                    addClass: function (e) {
                        var t, n, r, i, s, a;
                        return g(e) ? this.each((function (t) {
                            k(this).addClass(e.call(this, t, Ct(this)))
                        })) : (t = Et(e)).length ? this.each((function () {
                            if (r = Ct(this), n = 1 === this.nodeType && " " + kt(r) + " ") {
                                for (s = 0; s < t.length; s++) i = t[s], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                a = kt(n), r !== a && this.setAttribute("class", a)
                            }
                        })) : this
                    }, removeClass: function (e) {
                        var t, n, r, i, s, a;
                        return g(e) ? this.each((function (t) {
                            k(this).removeClass(e.call(this, t, Ct(this)))
                        })) : arguments.length ? (t = Et(e)).length ? this.each((function () {
                            if (r = Ct(this), n = 1 === this.nodeType && " " + kt(r) + " ") {
                                for (s = 0; s < t.length; s++) for (i = t[s]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                                a = kt(n), r !== a && this.setAttribute("class", a)
                            }
                        })) : this : this.attr("class", "")
                    }, toggleClass: function (e, t) {
                        var n, r, i, s, a = typeof e, o = "string" === a || Array.isArray(e);
                        return g(e) ? this.each((function (n) {
                            k(this).toggleClass(e.call(this, n, Ct(this), t), t)
                        })) : "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : (n = Et(e), this.each((function () {
                            if (o) for (s = k(this), i = 0; i < n.length; i++) r = n[i], s.hasClass(r) ? s.removeClass(r) : s.addClass(r); else void 0 !== e && "boolean" !== a || ((r = Ct(this)) && oe.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : oe.get(this, "__className__") || ""))
                        })))
                    }, hasClass: function (e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + kt(Ct(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var Mt = /\r/g;
                k.fn.extend({
                    val: function (e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = g(e), this.each((function (n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, k(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = k.map(i, (function (e) {
                                return null == e ? "" : e + ""
                            }))), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }))) : i ? (t = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Mt, "") : null == n ? "" : n : void 0
                    }
                }), k.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = k.find.attr(e, "value");
                                return null != t ? t : kt(k.text(e))
                            }
                        }, select: {
                            get: function (e) {
                                var t, n, r, i = e.options, s = e.selectedIndex, a = "select-one" === e.type, o = a ? null : [], l = a ? s + 1 : i.length;
                                for (r = s < 0 ? l : a ? s : 0; r < l; r++) if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                    if (t = k(n).val(), a) return t;
                                    o.push(t)
                                }
                                return o
                            }, set: function (e, t) {
                                for (var n, r, i = e.options, s = k.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = k.inArray(k.valHooks.option.get(r), s) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), s
                            }
                        }
                    }
                }), k.each(["radio", "checkbox"], (function () {
                    k.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
                        }
                    }, v.checkOn || (k.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                }));
                var At = r.location, Pt = {guid: Date.now()}, Ot = /\?/;
                k.parseXML = function (e) {
                    var t, n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {
                    }
                    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || k.error("Invalid XML: " + (n ? k.map(n.childNodes, (function (e) {
                        return e.textContent
                    })).join("\n") : e)), t
                };
                var Dt = /^(?:focusinfocus|focusoutblur)$/, Lt = function (e) {
                    e.stopPropagation()
                };
                k.extend(k.event, {
                    trigger: function (e, t, n, i) {
                        var s, a, o, l, c, u, d, p, h = [n || _], m = f.call(e, "type") ? e.type : e, v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = p = o = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(m + k.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[k.expando] ? e : new k.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), d = k.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                            if (!i && !d.noBubble && !y(n)) {
                                for (l = d.delegateType || m, Dt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
                                o === (n.ownerDocument || _) && h.push(o.defaultView || o.parentWindow || r)
                            }
                            for (s = 0; (a = h[s++]) && !e.isPropagationStopped();) p = a, e.type = s > 1 ? l : d.bindType || m, (u = (oe.get(a, "events") || Object.create(null))[e.type] && oe.get(a, "handle")) && u.apply(a, t), (u = c && a[c]) && u.apply && se(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !se(n) || c && g(n[m]) && !y(n) && ((o = n[c]) && (n[c] = null), k.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Lt), n[m](), e.isPropagationStopped() && p.removeEventListener(m, Lt), k.event.triggered = void 0, o && (n[c] = o)), e.result
                        }
                    }, simulate: function (e, t, n) {
                        var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
                        k.event.trigger(r, null, t)
                    }
                }), k.fn.extend({
                    trigger: function (e, t) {
                        return this.each((function () {
                            k.event.trigger(e, t, this)
                        }))
                    }, triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return k.event.trigger(e, t, n, !0)
                    }
                });
                var It = /\[\]$/, Nt = /\r?\n/g, zt = /^(?:submit|button|image|reset|file)$/i, Rt = /^(?:input|select|textarea|keygen)/i;

                function jt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t)) k.each(t, (function (t, i) {
                        n || It.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    })); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
                }

                k.param = function (e, t) {
                    var n, r = [], i = function (e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, (function () {
                        i(this.name, this.value)
                    })); else for (n in e) jt(n, e[n], t, i);
                    return r.join("&")
                }, k.fn.extend({
                    serialize: function () {
                        return k.param(this.serializeArray())
                    }, serializeArray: function () {
                        return this.map((function () {
                            var e = k.prop(this, "elements");
                            return e ? k.makeArray(e) : this
                        })).filter((function () {
                            var e = this.type;
                            return this.name && !k(this).is(":disabled") && Rt.test(this.nodeName) && !zt.test(e) && (this.checked || !ke.test(e))
                        })).map((function (e, t) {
                            var n = k(this).val();
                            return null == n ? null : Array.isArray(n) ? k.map(n, (function (e) {
                                return {name: t.name, value: e.replace(Nt, "\r\n")}
                            })) : {name: t.name, value: n.replace(Nt, "\r\n")}
                        })).get()
                    }
                });
                var qt = /%20/g, Ft = /#.*$/, Bt = /([?&])_=[^&]*/, Xt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:GET|HEAD)$/, Yt = /^\/\//, $t = {}, Vt = {}, Gt = "*/".concat("*"), Wt = _.createElement("a");

                function Ut(e) {
                    return function (t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0, s = t.toLowerCase().match(G) || [];
                        if (g(n)) for (; r = s[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function Kt(e, t, n, r) {
                    var i = {}, s = e === Vt;

                    function a(o) {
                        var l;
                        return i[o] = !0, k.each(e[o] || [], (function (e, o) {
                            var c = o(t, n, r);
                            return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                        })), l
                    }

                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }

                function Qt(e, t) {
                    var n, r, i = k.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && k.extend(!0, e, r), e
                }

                Wt.href = At.href, k.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: At.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {"*": Gt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
                        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                        converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
                        flatOptions: {url: !0, context: !0}
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Qt(Qt(e, k.ajaxSettings), t) : Qt(k.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ut($t),
                    ajaxTransport: Ut(Vt),
                    ajax: function (e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var n, i, s, a, o, l, c, u, d, p, f = k.ajaxSetup({}, t), h = f.context || f, m = f.context && (h.nodeType || h.jquery) ? k(h) : k.event, v = k.Deferred(), g = k.Callbacks("once memory"), y = f.statusCode || {}, w = {}, b = {}, x = "canceled", T = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (c) {
                                    if (!a) for (a = {}; t = Xt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            }, getAllResponseHeaders: function () {
                                return c ? s : null
                            }, setRequestHeader: function (e, t) {
                                return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == c && (f.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (c) T.always(e[T.status]); else for (t in e) y[t] = [y[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || x;
                                return n && n.abort(t), S(0, t), this
                            }
                        };
                        if (v.promise(T), f.url = ((e || f.url || At.href) + "").replace(Yt, At.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(G) || [""], null == f.crossDomain) {
                            l = _.createElement("a");
                            try {
                                l.href = f.url, l.href = l.href, f.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                            } catch (e) {
                                f.crossDomain = !0
                            }
                        }
                        if (f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Kt($t, f, t, T), c) return T;
                        for (d in (u = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ht.test(f.type), i = f.url.replace(Ft, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(qt, "+")) : (p = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (Ot.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(Bt, "$1"), p = (Ot.test(i) ? "&" : "?") + "_=" + Pt.guid++ + p), f.url = i + p), f.ifModified && (k.lastModified[i] && T.setRequestHeader("If-Modified-Since", k.lastModified[i]), k.etag[i] && T.setRequestHeader("If-None-Match", k.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(d, f.headers[d]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
                        if (x = "abort", g.add(f.complete), T.done(f.success), T.fail(f.error), n = Kt(Vt, f, t, T)) {
                            if (T.readyState = 1, u && m.trigger("ajaxSend", [T, f]), c) return T;
                            f.async && f.timeout > 0 && (o = r.setTimeout((function () {
                                T.abort("timeout")
                            }), f.timeout));
                            try {
                                c = !1, n.send(w, S)
                            } catch (e) {
                                if (c) throw e;
                                S(-1, e)
                            }
                        } else S(-1, "No Transport");

                        function S(e, t, a, l) {
                            var d, p, _, w, b, x = t;
                            c || (c = !0, o && r.clearTimeout(o), n = void 0, s = l || "", T.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, a && (w = function (e, t, n) {
                                for (var r, i, s, a, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) for (i in o) if (o[i] && o[i].test(r)) {
                                    l.unshift(i);
                                    break
                                }
                                if (l[0] in n) s = l[0]; else {
                                    for (i in n) {
                                        if (!l[0] || e.converters[i + " " + l[0]]) {
                                            s = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    s = s || a
                                }
                                if (s) return s !== l[0] && l.unshift(s), n[s]
                            }(f, T, a)), !d && k.inArray("script", f.dataTypes) > -1 && k.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {
                            }), w = function (e, t, n, r) {
                                var i, s, a, o, l, c = {}, u = e.dataTypes.slice();
                                if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                for (s = u.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                                    if (!(a = c[l + " " + s] || c["* " + s])) for (i in c) if ((o = i.split(" "))[1] === s && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                        !0 === a ? a = c[i] : !0 !== c[i] && (s = o[0], u.unshift(o[1]));
                                        break
                                    }
                                    if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + s}
                                    }
                                }
                                return {state: "success", data: t}
                            }(f, w, T, d), d ? (f.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (k.lastModified[i] = b), (b = T.getResponseHeader("etag")) && (k.etag[i] = b)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, p = w.data, d = !(_ = w.error))) : (_ = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", d ? v.resolveWith(h, [p, x, T]) : v.rejectWith(h, [T, x, _]), T.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? p : _]), g.fireWith(h, [T, x]), u && (m.trigger("ajaxComplete", [T, f]), --k.active || k.event.trigger("ajaxStop")))
                        }

                        return T
                    },
                    getJSON: function (e, t, n) {
                        return k.get(e, t, n, "json")
                    },
                    getScript: function (e, t) {
                        return k.get(e, void 0, t, "script")
                    }
                }), k.each(["get", "post"], (function (e, t) {
                    k[t] = function (e, n, r, i) {
                        return g(n) && (i = i || r, r = n, n = void 0), k.ajax(k.extend({url: e, type: t, dataType: i, data: n, success: r}, k.isPlainObject(e) && e))
                    }
                })), k.ajaxPrefilter((function (e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                })), k._evalUrl = function (e, t, n) {
                    return k.ajax({
                        url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: {
                            "text script": function () {
                            }
                        }, dataFilter: function (e) {
                            k.globalEval(e, t, n)
                        }
                    })
                }, k.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return this[0] && (g(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    }, wrapInner: function (e) {
                        return g(e) ? this.each((function (t) {
                            k(this).wrapInner(e.call(this, t))
                        })) : this.each((function () {
                            var t = k(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }))
                    }, wrap: function (e) {
                        var t = g(e);
                        return this.each((function (n) {
                            k(this).wrapAll(t ? e.call(this, n) : e)
                        }))
                    }, unwrap: function (e) {
                        return this.parent(e).not("body").each((function () {
                            k(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), k.expr.pseudos.hidden = function (e) {
                    return !k.expr.pseudos.visible(e)
                }, k.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, k.ajaxSettings.xhr = function () {
                    try {
                        return new r.XMLHttpRequest
                    } catch (e) {
                    }
                };
                var Zt = {0: 200, 1223: 204}, Jt = k.ajaxSettings.xhr();
                v.cors = !!Jt && "withCredentials" in Jt, v.ajax = Jt = !!Jt, k.ajaxTransport((function (e) {
                    var t, n;
                    if (v.cors || Jt && !e.crossDomain) return {
                        send: function (i, s) {
                            var a, o = e.xhr();
                            if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                            for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) o.setRequestHeader(a, i[a]);
                            t = function (e) {
                                return function () {
                                    t && (t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Zt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                                }
                            }, o.onload = t(), n = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                                4 === o.readyState && r.setTimeout((function () {
                                    t && n()
                                }))
                            }, t = t("abort");
                            try {
                                o.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        }, abort: function () {
                            t && t()
                        }
                    }
                })), k.ajaxPrefilter((function (e) {
                    e.crossDomain && (e.contents.script = !1)
                })), k.ajaxSetup({
                    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
                        "text script": function (e) {
                            return k.globalEval(e), e
                        }
                    }
                }), k.ajaxPrefilter("script", (function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), k.ajaxTransport("script", (function (e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function (r, i) {
                            t = k("<script>").attr(e.scriptAttrs || {}).prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), _.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }));
                var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
                k.ajaxSetup({
                    jsonp: "callback", jsonpCallback: function () {
                        var e = tn.pop() || k.expando + "_" + Pt.guid++;
                        return this[e] = !0, e
                    }
                }), k.ajaxPrefilter("json jsonp", (function (e, t, n) {
                    var i, s, a, o = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(nn, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                        return a || k.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", s = r[i], r[i] = function () {
                        a = arguments
                    }, n.always((function () {
                        void 0 === s ? k(r).removeProp(i) : r[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, tn.push(i)), a && g(s) && s(a[0]), a = s = void 0
                    })), "script"
                })), v.createHTMLDocument = ((en = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === en.childNodes.length), k.parseHTML = function (e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, t.head.appendChild(r)) : t = _), s = !n && [], (i = F.exec(e)) ? [t.createElement(i[1])] : (i = De([e], t, s), s && s.length && k(s).remove(), k.merge([], i.childNodes)));
                    var r, i, s
                }, k.fn.load = function (e, t, n) {
                    var r, i, s, a = this, o = e.indexOf(" ");
                    return o > -1 && (r = kt(e.slice(o)), e = e.slice(0, o)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && k.ajax({url: e, type: i || "GET", dataType: "html", data: t}).done((function (e) {
                        s = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                    })).always(n && function (e, t) {
                        a.each((function () {
                            n.apply(this, s || [e.responseText, t, e])
                        }))
                    }), this
                }, k.expr.pseudos.animated = function (e) {
                    return k.grep(k.timers, (function (t) {
                        return e === t.elem
                    })).length
                }, k.offset = {
                    setOffset: function (e, t, n) {
                        var r, i, s, a, o, l, c = k.css(e, "position"), u = k(e), d = {};
                        "static" === c && (e.style.position = "relative"), o = u.offset(), s = k.css(e, "top"), l = k.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(s) || 0, i = parseFloat(l) || 0), g(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
                    }
                }, k.fn.extend({
                    offset: function (e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                            k.offset.setOffset(this, e, t)
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset}) : {top: 0, left: 0} : void 0
                    }, position: function () {
                        if (this[0]) {
                            var e, t, n, r = this[0], i = {top: 0, left: 0};
                            if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                            }
                            return {top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0)}
                        }
                    }, offsetParent: function () {
                        return this.map((function () {
                            for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                            return e || me
                        }))
                    }
                }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
                    var n = "pageYOffset" === t;
                    k.fn[e] = function (r) {
                        return ee(this, (function (e, r, i) {
                            var s;
                            if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === i) return s ? s[t] : e[r];
                            s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i
                        }), e, r, arguments.length)
                    }
                })), k.each(["top", "left"], (function (e, t) {
                    k.cssHooks[t] = et(v.pixelPosition, (function (e, n) {
                        if (n) return n = Je(e, t), We.test(n) ? k(e).position()[t] + "px" : n
                    }))
                })), k.each({Height: "height", Width: "width"}, (function (e, t) {
                    k.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, r) {
                        k.fn[r] = function (i, s) {
                            var a = arguments.length && (n || "boolean" != typeof i), o = n || (!0 === i || !0 === s ? "margin" : "border");
                            return ee(this, (function (t, n, i) {
                                var s;
                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? k.css(t, n, o) : k.style(t, n, i, o)
                            }), t, a ? i : void 0, a)
                        }
                    }))
                })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                    k.fn[t] = function (e) {
                        return this.on(t, e)
                    }
                })), k.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n)
                    }, unbind: function (e, t) {
                        return this.off(e, null, t)
                    }, delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r)
                    }, undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }, hover: function (e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e)
                    }
                }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                    k.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }));
                var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                k.proxy = function (e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)))
                    }, i.guid = e.guid = e.guid || k.guid++, i
                }, k.holdReady = function (e) {
                    e ? k.readyWait++ : k.ready(!0)
                }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = E, k.isFunction = g, k.isWindow = y, k.camelCase = ie, k.type = x, k.now = Date.now, k.isNumeric = function (e) {
                    var t = k.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, k.trim = function (e) {
                    return null == e ? "" : (e + "").replace(rn, "$1")
                }, void 0 === (n = function () {
                    return k
                }.apply(t, [])) || (e.exports = n);
                var sn = r.jQuery, an = r.$;
                return k.noConflict = function (e) {
                    return r.$ === k && (r.$ = an), e && r.jQuery === k && (r.jQuery = sn), k
                }, void 0 === i && (r.jQuery = r.$ = k), k
            }))
        }
    }, t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var s = t[r] = {exports: {}};
        return e[r].call(s.exports, s, s.exports, n), s.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        n(845);
        var e = n(755), t = n.n(e);

        function r(e, t, n) {
            e.on("focusout", (function () {
                0 !== e.val().length && (n(e) || (e.addClass("active"), t.addClass("active")))
            })), e.on("focus", (function () {
                0 === e.val().length && (e.removeClass("active"), t.removeClass("active"))
            })), e.on("keyup", (function () {
                n(e) && (e.removeClass("active"), t.removeClass("active")), 0 === e.val().length && (e.removeClass("active"), t.removeClass("active"))
            }))
        }

        function i(e, t, n) {
            return !!n(e) || (e.addClass("active"), t.addClass("active"), !1)
        }

        function s(e) {
            return t()(".feedback__resume-file").html().length > 0
        }

        function a(e) {
            return e.val().match(/^[^ ]+@[^ ]+\.[a-z]{2,20}$/)
        }

        function o(e) {
            return e.val().length > 0
        }

        function l(e) {
            return e.val().length > 10
        }

        function c(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function u(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((n => {
                void 0 === e[n] ? e[n] = t[n] : c(t[n]) && c(e[n]) && Object.keys(t[n]).length > 0 && u(e[n], t[n])
            }))
        }

        t()(document).ready((function () {
            document.querySelector(".header__mobile-nav") && t()(".header__mobile-nav-sub").click((function (e) {
                e.preventDefault(), t()(this).hasClass("active") ? (t()(this).removeClass("active"), t()(this).siblings(".header__mobile-submenu").slideUp(400)) : (t()(".header__mobile-nav-sub").removeClass("active"), t()(this).addClass("active"), t()(".header__mobile-submenu").slideUp(400), t()(this).siblings(".header__mobile-submenu").slideDown(400))
            }))
        })), document.addEventListener("DOMContentLoaded", (function () {
            document.querySelector(".form") && (t()(".feedback__tel-block").find(".form__tel-input").mask("(000) 000-00-00"), t()("#feedback").submit((function (e) {
                return e.preventDefault(), !!function () {
                    const e = i(t()(".feedback__name-block").children(".form__input"), t()(".feedback__name-block").children(".form__error-msg"), o), n = i(t()(".feedback__email-block").children(".form__input"), t()(".feedback__email-block").children(".form__error-msg"), a),
                        r = i(t()(".feedback__comment-block").children(".form__input"), t()(".feedback__comment-block").children(".form__error-msg"), l);
                    return e && n && r
                }() && (t()(".modal-thanks").addClass("active"), !1)
            })), t()("#form-resume").submit((function (e) {
                return e.preventDefault(), !!function () {
                    const e = i(t()(".feedback__name-block").children(".form__input"), t()(".feedback__name-block").children(".form__error-msg"), o), n = i(t()(".feedback__email-block").children(".form__input"), t()(".feedback__email-block").children(".form__error-msg"), a),
                        r = i(t()(".feedback__resume-block").find(".form__input_resume"), t()(".feedback__resume-block").children(".form__error-msg"), s);
                    return e && n && r
                }() && (t()(".modal-thanks").addClass("active"), !1)
            })), document.querySelector("#feedback") && function () {
                r(t()(".feedback__name-block").children(".form__input"), t()(".feedback__name-block").children(".form__error-msg"), o);
                r(t()(".feedback__email-block").children(".form__input"), t()(".feedback__email-block").children(".form__error-msg"), a);
                r(t()(".feedback__comment-block").children(".form__input"), t()(".feedback__comment-block").children(".form__error-msg"), l)
            }(), document.querySelector("#form-resume") && function () {
                r(t()(".feedback__name-block").children(".form__input"), t()(".feedback__name-block").children(".form__error-msg"), o);
                r(t()(".feedback__email-block").children(".form__input"), t()(".feedback__email-block").children(".form__error-msg"), a);
                const e = t()(".feedback__resume-block").find(".form__input_resume"), n = t()(".feedback__resume-block").children(".form__error-msg");
                var i, s;
                s = n, (i = e).on("change", (function () {
                    let e = this.files[0];
                    e && (i.removeClass("active"), s.removeClass("active"), t()(".feedback__resume-block").find(".feedback__resume-file").html(e.name), t()(".feedback__resume-block").find(".feedback__resume-label").html(""))
                }))
            }())
        })), document.addEventListener("DOMContentLoaded", (function () {
            document.querySelector(".form") && t()(".tel-code-open").click((function () {
                screen.width > 769 ? t()(this).hasClass("active") ? (t()(this).removeClass("active"), t()(".form__code-drop").slideUp(300)) : (t()(this).addClass("active"), t()(".form__code-drop").slideDown(300)) : (t()(".modal-code").addClass("active"), t()(document.body).css("overflow", "hidden"))
            }))
        })), document.addEventListener("DOMContentLoaded", (function () {

            document.querySelector(".form") && (t()(".form__code-list").click((function (e) {
                if (!e.target.classList.contains("form__code-list")) {
                    const n = e.target, r = n.classList.contains("form__code-item") ? n.children[0].textContent : n.textContent;
                    t()(".form__code-input").val(r), screen.width > 769 ? (t()(".tel-code-open").removeClass("active"), t()(".form__code-drop").slideUp(300)) : t()(".modal-code").removeClass("active")
                }
            })), t()(".modal-code").find(".modal__close").click((function () {
                t()(".modal-code").removeClass("active"), t()(document.body).css("overflow", "auto")
            })), document.addEventListener("click", (e => {
                screen.width < 768 || 0 === t()(".form__code-box").find(e.target).length && (t()(".tel-code-open").removeClass("active"), t()(".form__code-drop").slideUp(300))
            })), t()(".vacancies__display").click((function (e) {
                if (e.target.classList.contains("vacancies__item-resp-btn")) {
                    const n = e.target.parentElement.previousElementSibling.querySelector(".vacancies__item-title").textContent;
                    t()(".feedback__vacancy-block").find(".form__input").val(n)
                }
            })), t()(window).resize((function () {
                !function () {
                    if (screen.width > 768) {
                        if (!t()(".modal-code").hasClass("active")) return;
                        t()(".modal-code").removeClass("active"), t()(document.body).css("overflow", "auto")
                    }
                }()
            })), t()(".form__code-search").on("keyup", (function (e) {
                !function (e) {
                    if (isNaN(Number(e))) {
                        const n = t()(".form__code-list").children(".form__code-item");
                        if ("" === e) {
                            for (let e = 0; e < n.length; e++) n[e].classList.remove("hidden");
                            return
                        }
                        for (let t = 0; t < n.length; t++) n[t].textContent.toLowerCase().includes(e.toLowerCase()) ? n[t].classList.remove("hidden") : n[t].classList.add("hidden")
                    } else {
                        const n = t()(".form__code-list").children(".form__code-item"), r = t()(".form__code-list").find("span");
                        if ("" === e) {
                            for (let e = 0; e < r.length; e++) n[e].classList.remove("hidden");
                            return
                        }
                        for (let t = 0; t < r.length; t++) r[t].textContent.toLowerCase().includes(e.toLowerCase()) ? n[t].classList.remove("hidden") : n[t].classList.add("hidden")
                    }
                }(e.target.value)
            })))
        })), t()(document).ready((function () {
            if (!document.querySelector(".modal-person")) return;
            const e = document.querySelector(".modal-person"), n = document.querySelector(".modal"), r = document.querySelector(".modal__close"), i = () => {
                e.classList.remove("active")
            };
            t()("body").on('click', '.people-open-modal', (function () {
                (n => {
                    const r = n.attr("data-people"), i = n.children(".people__item-photo-box");
                    let s;
                    if (i.children(".people__item-img").length > 0) t()(".modal-person__img-box").removeClass("modal-person_man"), t()(".modal-person__img-box").removeClass("modal-person_woman"), s = i.children(".people__item-img")[0].src, t()(".modal-person__img").attr("src", s); else {
                        const e = "man" == r ? "woman" : "man";
                        t()(".modal-person__img-box").removeClass(`modal-person_${e}`), t()(".modal-person__img-box").addClass(`modal-person_${r}`)
                    }
                    const a = n.find(".people__item-name").text();
                    t()(".modal-person__name").text(a);
                    const o = n.find(".people__item-position").text();
                    t()(".modal-person__position").text(o);
                    const l = n.find(".people__item-text").html();
                    t()(".modal-person__text").html(l), e.classList.add("active")
                })(t()(this))
            })), r.addEventListener("click", (() => {
                i()
            })), document.body.addEventListener("click", (e => {
                e.target === n && i()
            }))
        })), t()(document).ready((function () {
            if (!document.querySelector(".modal-thanks")) return;
            const e = document.querySelector(".modal-thanks"), n = t()(".modal-thanks").find(".modal__close"), r = () => {
                e.classList.remove("active")
            };
            n.click((function () {
                r()
            })), document.body.addEventListener("click", (t => {
                t.target === e && r()
            }))
        })), n(736), n(577);
        const d = {
            body: {}, addEventListener() {
            }, removeEventListener() {
            }, activeElement: {
                blur() {
                }, nodeName: ""
            }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({
                initEvent() {
                }
            }), createElement: () => ({
                children: [], childNodes: [], style: {}, setAttribute() {
                }, getElementsByTagName: () => []
            }), createElementNS: () => ({}), importNode: () => null, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function p() {
            const e = "undefined" != typeof document ? document : {};
            return u(e, d), e
        }

        const f = {
            document: d, navigator: {userAgent: ""}, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}, history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            }, CustomEvent: function () {
                return this
            }, addEventListener() {
            }, removeEventListener() {
            }, getComputedStyle: () => ({getPropertyValue: () => ""}), Image() {
            }, Date() {
            }, screen: {}, setTimeout() {
            }, clearTimeout() {
            }, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0), cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function h() {
            const e = "undefined" != typeof window ? window : {};
            return u(e, f), e
        }

        function m(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function v() {
            return Date.now()
        }

        function g(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function y() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
                const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                if (null != i && (n = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                    const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, r = n.length; t < r; t += 1) {
                        const r = n[t], s = Object.getOwnPropertyDescriptor(i, r);
                        void 0 !== s && s.enumerable && (g(e[r]) && g(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : y(e[r], i[r]) : !g(e[r]) && g(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : y(e[r], i[r])) : e[r] = i[r])
                    }
                }
            }
            var n;
            return e
        }

        function _(e, t, n) {
            e.style.setProperty(t, n)
        }

        function w(e) {
            let {swiper: t, targetPosition: n, side: r} = e;
            const i = h(), s = -t.translate;
            let a, o = null;
            const l = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
            const c = n > s ? "next" : "prev", u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, d = () => {
                a = (new Date).getTime(), null === o && (o = a);
                const e = Math.max(Math.min((a - o) / l, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
                let p = s + c * (n - s);
                if (u(p, n) && (p = n), t.wrapperEl.scrollTo({[r]: p}), u(p, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[r]: p})
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(d)
            };
            d()
        }

        function b(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function x(e) {
            try {
                return void console.warn(e)
            } catch (e) {
            }
        }

        function T(e, t) {
            void 0 === t && (t = []);
            const n = document.createElement(e);
            return n.classList.add(...Array.isArray(t) ? t : function (e) {
                return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
            }(t)), n
        }

        function S(e, t) {
            return h().getComputedStyle(e, null).getPropertyValue(t)
        }

        function k(e) {
            let t, n = e;
            if (n) {
                for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
                return t
            }
        }

        function C(e, t, n) {
            const r = h();
            return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        let E, M, A;

        function P() {
            return E || (E = function () {
                const e = h(), t = p();
                return {smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)}
            }()), E
        }

        var O = {
            on(e, t, n) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" != typeof t) return r;
                const i = n ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                })), r
            }, once(e, t, n) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" != typeof t) return r;

                function i() {
                    r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                    for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                    t.apply(r, s)
                }

                return i.__emitterProxy = t, r.on(e, i, n)
            }, onAny(e, t) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof e) return n;
                const r = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            }, off(e, t) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, i) => {
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                    }))
                })), n) : n
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, n, r;
                for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], n = s.slice(1, s.length), r = e) : (t = s[0].events, n = s[0].data, r = s[0].context || e), n.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(r, [t, ...n])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(r, n)
                    }))
                })), e
            }
        };
        const D = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const n = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (n) {
                let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    n.shadowRoot && (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        }, L = (e, t) => {
            if (!e.slides[t]) return;
            const n = e.slides[t].querySelector('[loading="lazy"]');
            n && n.removeAttribute("loading")
        }, I = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const n = e.slides.length;
            if (!n || !t || t < 0) return;
            t = Math.min(t, n);
            const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const n = i, s = [n - t];
                return s.push(...Array.from({length: t}).map(((e, t) => n + r + t))), void e.slides.forEach(((t, n) => {
                    s.includes(t.column) && L(e, n)
                }))
            }
            const s = i + r - 1;
            if (e.params.rewind || e.params.loop) for (let r = i - t; r <= s + t; r += 1) {
                const t = (r % n + n) % n;
                (t < i || t > s) && L(e, t)
            } else for (let r = Math.max(i - t, 0); r <= Math.min(s + t, n - 1); r += 1) r !== i && (r > s || r < i) && L(e, r)
        };
        var N = {
            updateSize: function () {
                const e = this;
                let t, n;
                const r = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(S(r, "padding-left") || 0, 10) - parseInt(S(r, "padding-right") || 0, 10), n = n - parseInt(S(r, "padding-top") || 0, 10) - parseInt(S(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t, n) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0)
                }

                const n = e.params, {wrapperEl: r, slidesEl: i, size: s, rtlTranslate: a, wrongRTL: o} = e, l = e.virtual && n.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length, u = b(i, `.${e.params.slideClass}, swiper-slide`), d = l ? e.virtual.slides.length : u.length;
                let p = [];
                const f = [], h = [];
                let m = n.slidesOffsetBefore;
                "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
                let v = n.slidesOffsetAfter;
                "function" == typeof v && (v = n.slidesOffsetAfter.call(e));
                const g = e.snapGrid.length, y = e.slidesGrid.length;
                let w = n.spaceBetween, x = -m, T = 0, k = 0;
                if (void 0 === s) return;
                "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * s : "string" == typeof w && (w = parseFloat(w)), e.virtualSize = -w, u.forEach((e => {
                    a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), n.centeredSlides && n.cssMode && (_(r, "--swiper-centered-offset-before", ""), _(r, "--swiper-centered-offset-after", ""));
                const E = n.grid && n.grid.rows > 1 && e.grid;
                let M;
                E ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
                const A = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => void 0 !== n.breakpoints[e].slidesPerView)).length > 0;
                for (let r = 0; r < d; r += 1) {
                    let i;
                    if (M = 0, u[r] && (i = u[r]), E && e.grid.updateSlide(r, i, u), !u[r] || "none" !== S(i, "display")) {
                        if ("auto" === n.slidesPerView) {
                            A && (u[r].style[e.getDirectionLabel("width")] = "");
                            const s = getComputedStyle(i), a = i.style.transform, o = i.style.webkitTransform;
                            if (a && (i.style.transform = "none"), o && (i.style.webkitTransform = "none"), n.roundLengths) M = e.isHorizontal() ? C(i, "width", !0) : C(i, "height", !0); else {
                                const e = t(s, "width"), n = t(s, "padding-left"), r = t(s, "padding-right"), a = t(s, "margin-left"), o = t(s, "margin-right"), l = s.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) M = e + a + o; else {
                                    const {clientWidth: t, offsetWidth: s} = i;
                                    M = e + n + r + a + o + (s - t)
                                }
                            }
                            a && (i.style.transform = a), o && (i.style.webkitTransform = o), n.roundLengths && (M = Math.floor(M))
                        } else M = (s - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (M = Math.floor(M)), u[r] && (u[r].style[e.getDirectionLabel("width")] = `${M}px`);
                        u[r] && (u[r].swiperSlideSize = M), h.push(M), n.centeredSlides ? (x = x + M / 2 + T / 2 + w, 0 === T && 0 !== r && (x = x - s / 2 - w), 0 === r && (x = x - s / 2 - w), Math.abs(x) < .001 && (x = 0), n.roundLengths && (x = Math.floor(x)), k % n.slidesPerGroup == 0 && p.push(x), f.push(x)) : (n.roundLengths && (x = Math.floor(x)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup == 0 && p.push(x), f.push(x), x = x + M + w), e.virtualSize += M + w, T = M, k += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, s) + v, a && o && ("slide" === n.effect || "coverflow" === n.effect) && (r.style.width = `${e.virtualSize + w}px`), n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`), E && e.grid.updateWrapperSize(M, p), !n.centeredSlides) {
                    const t = [];
                    for (let r = 0; r < p.length; r += 1) {
                        let i = p[r];
                        n.roundLengths && (i = Math.floor(i)), p[r] <= e.virtualSize - s && t.push(i)
                    }
                    p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                }
                if (l && n.loop) {
                    const t = h[0] + w;
                    if (n.slidesPerGroup > 1) {
                        const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup), i = t * n.slidesPerGroup;
                        for (let e = 0; e < r; e += 1) p.push(p[p.length - 1] + i)
                    }
                    for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === n.slidesPerGroup && p.push(p[p.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
                }
                if (0 === p.length && (p = [0]), 0 !== w) {
                    const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
                    u.filter(((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[t] = `${w}px`
                    }))
                }
                if (n.centeredSlides && n.centeredSlidesBounds) {
                    let e = 0;
                    h.forEach((t => {
                        e += t + (w || 0)
                    })), e -= w;
                    const t = e - s;
                    p = p.map((e => e <= 0 ? -m : e > t ? t + v : e))
                }
                if (n.centerInsufficientSlides) {
                    let e = 0;
                    if (h.forEach((t => {
                        e += t + (w || 0)
                    })), e -= w, e < s) {
                        const t = (s - e) / 2;
                        p.forEach(((e, n) => {
                            p[n] = e - t
                        })), f.forEach(((e, n) => {
                            f[n] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {slides: u, snapGrid: p, slidesGrid: f, slidesSizesGrid: h}), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                    _(r, "--swiper-centered-offset-before", -p[0] + "px"), _(r, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                }
                if (d !== c && e.emit("slidesLengthChange"), p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                    const t = `${n.containerModifierClass}backface-hidden`, r = e.el.classList.contains(t);
                    d <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, n = [], r = t.virtual && t.params.virtual.enabled;
                let i, s = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                    n.push(e)
                })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                    const e = t.activeIndex + i;
                    if (e > t.slides.length && !r) break;
                    n.push(a(e))
                } else n.push(a(t.activeIndex));
                for (i = 0; i < n.length; i += 1) if (void 0 !== n[i]) {
                    const e = n[i].offsetHeight;
                    s = e > s ? e : s
                }
                (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides, n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, n = t.params, {slides: r, rtlTranslate: i, snapGrid: s} = t;
                if (0 === r.length) return;
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                i && (a = e), r.forEach((e => {
                    e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = n.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < r.length; e += 1) {
                    const l = r[e];
                    let c = l.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
                    const u = (a + (n.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o), d = (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + o), p = -(a - c), f = p + t.slidesSizesGrid[e], h = p >= 0 && p <= t.size - t.slidesSizesGrid[e];
                    (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), r[e].classList.add(n.slideVisibleClass)), h && r[e].classList.add(n.slideFullyVisibleClass), l.progress = i ? -u : u, l.originalProgress = i ? -d : d
                }
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params, r = t.maxTranslate() - t.minTranslate();
                let {progress: i, isBeginning: s, isEnd: a, progressLoop: o} = t;
                const l = s, c = a;
                if (0 === r) i = 0, s = !0, a = !0; else {
                    i = (e - t.minTranslate()) / r;
                    const n = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                    s = n || i <= 0, a = o || i >= 1, n && (i = 0), o && (i = 1)
                }
                if (n.loop) {
                    const n = t.getSlideIndexByData(0), r = t.getSlideIndexByData(t.slides.length - 1), i = t.slidesGrid[n], s = t.slidesGrid[r], a = t.slidesGrid[t.slidesGrid.length - 1], l = Math.abs(e);
                    o = l >= i ? (l - i) / a : (l + a - s) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {progress: i, progressLoop: o, isBeginning: s, isEnd: a}), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !c && t.emit("reachEnd toEdge"), (l && !s || c && !a) && t.emit("fromEdge"), t.emit("progress", i)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: n, slidesEl: r, activeIndex: i} = e, s = e.virtual && n.virtual.enabled, a = e.grid && n.grid && n.grid.rows > 1, o = e => b(r, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
                let l, c, u;
                if (t.forEach((e => {
                    e.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
                })), s) if (n.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                } else l = o(`[data-swiper-slide-index="${i}"]`); else a ? (l = t.filter((e => e.column === i))[0], u = t.filter((e => e.column === i + 1))[0], c = t.filter((e => e.column === i - 1))[0]) : l = t[i];
                l && (l.classList.add(n.slideActiveClass), a ? (u && u.classList.add(n.slideNextClass), c && c.classList.add(n.slidePrevClass)) : (u = function (e, t) {
                    const n = [];
                    for (; e.nextElementSibling;) {
                        const r = e.nextElementSibling;
                        t ? r.matches(t) && n.push(r) : n.push(r), e = r
                    }
                    return n
                }(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && !u && (u = t[0]), u && u.classList.add(n.slideNextClass), c = function (e, t) {
                    const n = [];
                    for (; e.previousElementSibling;) {
                        const r = e.previousElementSibling;
                        t ? r.matches(t) && n.push(r) : n.push(r), e = r
                    }
                    return n
                }(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(n.slidePrevClass))), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {snapGrid: r, params: i, activeIndex: s, realIndex: a, snapIndex: o} = t;
                let l, c = e;
                const u = e => {
                    let n = e - t.virtual.slidesBefore;
                    return n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n
                };
                if (void 0 === c && (c = function (e) {
                    const {slidesGrid: t, params: n} = e, r = e.rtlTranslate ? e.translate : -e.translate;
                    let i;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : r >= t[e] && r < t[e + 1] && (i = e + 1) : r >= t[e] && (i = e);
                    return n.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
                }(t)), r.indexOf(n) >= 0) l = r.indexOf(n); else {
                    const e = Math.min(i.slidesPerGroupSkip, c);
                    l = e + Math.floor((c - e) / i.slidesPerGroup)
                }
                if (l >= r.length && (l = r.length - 1), c === s && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                if (c === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = u(c));
                const d = t.grid && i.grid && i.grid.rows > 1;
                let p;
                if (t.virtual && i.virtual.enabled && i.loop) p = u(c); else if (d) {
                    const e = t.slides.filter((e => e.column === c))[0];
                    let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(n / i.grid.rows)
                } else if (t.slides[c]) {
                    const e = t.slides[c].getAttribute("data-swiper-slide-index");
                    p = e ? parseInt(e, 10) : c
                } else p = c;
                Object.assign(t, {previousSnapIndex: o, snapIndex: l, previousRealIndex: a, realIndex: p, previousIndex: s, activeIndex: c}), t.initialized && I(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== p && t.emit("realIndexChange"), t.emit("slideChange"))
            }, updateClickedSlide: function (e, t) {
                const n = this, r = n.params;
                let i = e.closest(`.${r.slideClass}, swiper-slide`);
                !i && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
                }));
                let s, a = !1;
                if (i) for (let e = 0; e < n.slides.length; e += 1) if (n.slides[e] === i) {
                    a = !0, s = e;
                    break
                }
                if (!i || !a) return n.clickedSlide = void 0, void (n.clickedIndex = void 0);
                n.clickedSlide = i, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = s, r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
            }
        };

        function z(e) {
            let {swiper: t, runCallbacks: n, direction: r, step: i} = e;
            const {activeIndex: s, previousIndex: a} = t;
            let o = r;
            if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${i}`), n && s !== a) {
                if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
                t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
            }
        }

        var R = {
            slideTo: function (e, t, n, r, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                const s = this;
                let a = e;
                a < 0 && (a = 0);
                const {params: o, snapGrid: l, slidesGrid: c, previousIndex: u, activeIndex: d, rtlTranslate: p, wrapperEl: f, enabled: h} = s;
                if (s.animating && o.preventInteractionOnTransition || !h && !r && !i) return !1;
                const m = Math.min(s.params.slidesPerGroupSkip, a);
                let v = m + Math.floor((a - m) / s.params.slidesPerGroup);
                v >= l.length && (v = l.length - 1);
                const g = -l[v];
                if (o.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * g), n = Math.floor(100 * c[e]), r = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= n && t < r - (r - n) / 2 ? a = e : t >= n && t < r && (a = e + 1) : t >= n && (a = e)
                }
                if (s.initialized && a !== d) {
                    if (!s.allowSlideNext && (p ? g > s.translate && g > s.minTranslate() : g < s.translate && g < s.minTranslate())) return !1;
                    if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (d || 0) !== a) return !1
                }
                let y;
                if (a !== (u || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(g), y = a > d ? "next" : a < d ? "prev" : "reset", p && -g === s.translate || !p && g === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(g), "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)), !1;
                if (o.cssMode) {
                    const e = s.isHorizontal(), n = p ? g : -g;
                    if (0 === t) {
                        const t = s.virtual && s.params.virtual.enabled;
                        t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            f[e ? "scrollLeft" : "scrollTop"] = n
                        }))) : f[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                            s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                        }))
                    } else {
                        if (!s.support.smoothScroll) return w({swiper: s, targetPosition: n, side: e ? "left" : "top"}), !0;
                        f.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
                    }
                    return !0
                }
                return s.setTransition(t), s.setTranslate(g), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, r), s.transitionStart(n, y), 0 === t ? s.transitionEnd(n, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, y))
                }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, n, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                const i = this, s = i.grid && i.params.grid && i.params.grid.rows > 1;
                let a = e;
                if (i.params.loop) if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore; else {
                    let e;
                    if (s) {
                        const t = a * i.params.grid.rows;
                        e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else e = i.getSlideIndexByData(a);
                    const t = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {centeredSlides: n} = i.params;
                    let r = i.params.slidesPerView;
                    "auto" === r ? r = i.slidesPerViewDynamic() : (r = Math.ceil(parseFloat(i.params.slidesPerView, 10)), n && r % 2 == 0 && (r += 1));
                    let o = t - e < r;
                    if (n && (o = o || e < Math.ceil(r / 2)), o) {
                        const r = n ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({direction: r, slideTo: !0, activeSlideIndex: "next" === r ? e + 1 : e - t + 1, slideRealIndex: "next" === r ? i.realIndex : void 0})
                    }
                    if (s) {
                        const e = a * i.params.grid.rows;
                        a = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else a = i.getSlideIndexByData(a)
                }
                return requestAnimationFrame((() => {
                    i.slideTo(a, t, n, r)
                })), i
            }, slideNext: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const r = this, {enabled: i, params: s, animating: a} = r;
                if (!i) return r;
                let o = s.slidesPerGroup;
                "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o, c = r.virtual && s.virtual.enabled;
                if (s.loop) {
                    if (a && !c && s.loopPreventsSliding) return !1;
                    if (r.loopFix({direction: "next"}), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && s.cssMode) return requestAnimationFrame((() => {
                        r.slideTo(r.activeIndex + l, e, t, n)
                    })), !0
                }
                return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
            }, slidePrev: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const r = this, {params: i, snapGrid: s, slidesGrid: a, rtlTranslate: o, enabled: l, animating: c} = r;
                if (!l) return r;
                const u = r.virtual && i.virtual.enabled;
                if (i.loop) {
                    if (c && !u && i.loopPreventsSliding) return !1;
                    r.loopFix({direction: "prev"}), r._clientLeft = r.wrapperEl.clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const p = d(o ? r.translate : -r.translate), f = s.map((e => d(e)));
                let h = s[f.indexOf(p) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    s.forEach(((t, n) => {
                        p >= t && (e = n)
                    })), void 0 !== e && (h = s[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== h && (m = a.indexOf(h), m < 0 && (m = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - r.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && r.isBeginning) {
                    const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                    return r.slideTo(i, e, t, n)
                }
                return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
                    r.slideTo(m, e, t, n)
                })), !0) : r.slideTo(m, e, t, n)
            }, slideReset: function (e, t, n) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
            }, slideToClosest: function (e, t, n, r) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === r && (r = .5);
                const i = this;
                let s = i.activeIndex;
                const a = Math.min(i.params.slidesPerGroupSkip, s), o = a + Math.floor((s - a) / i.params.slidesPerGroup), l = i.rtlTranslate ? i.translate : -i.translate;
                if (l >= i.snapGrid[o]) {
                    const e = i.snapGrid[o];
                    l - e > (i.snapGrid[o + 1] - e) * r && (s += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[o - 1];
                    l - e <= (i.snapGrid[o] - e) * r && (s -= i.params.slidesPerGroup)
                }
                return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, n)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, slidesEl: n} = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, s = e.clickedIndex;
                const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = e.getSlideIndex(b(n, `${a}[data-swiper-slide-index="${i}"]`)[0]), m((() => {
                        e.slideTo(s)
                    }))) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = e.getSlideIndex(b(n, `${a}[data-swiper-slide-index="${i}"]`)[0]), m((() => {
                        e.slideTo(s)
                    }))) : e.slideTo(s)
                } else e.slideTo(s)
            }
        }, j = {
            loopCreate: function (e) {
                const t = this, {params: n, slidesEl: r} = t;
                if (!n.loop || t.virtual && t.params.virtual.enabled) return;
                const i = () => {
                    b(r, `.${n.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }))
                }, s = t.grid && n.grid && n.grid.rows > 1, a = n.slidesPerGroup * (s ? n.grid.rows : 1), o = t.slides.length % a != 0, l = s && t.slides.length % n.grid.rows != 0, c = e => {
                    for (let r = 0; r < e; r += 1) {
                        const e = t.isElement ? T("swiper-slide", [n.slideBlankClass]) : T("div", [n.slideClass, n.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                };
                o ? (n.loopAddBlankSlides ? (c(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : x("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : l ? (n.loopAddBlankSlides ? (c(n.grid.rows - t.slides.length % n.grid.rows), t.recalcSlides(), t.updateSlides()) : x("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
                    slideRealIndex: e,
                    direction: n.centeredSlides ? void 0 : "next"
                })
            }, loopFix: function (e) {
                let {slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: i, activeSlideIndex: s, byController: a, byMousewheel: o} = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {slides: c, allowSlidePrev: u, allowSlideNext: d, slidesEl: p, params: f} = l, {centeredSlides: h} = f;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) return n && (f.centeredSlides || 0 !== l.snapIndex ? f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = u, l.allowSlideNext = d, void l.emit("loopFix");
                let m = f.slidesPerView;
                "auto" === m ? m = l.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(f.slidesPerView, 10)), h && m % 2 == 0 && (m += 1));
                const v = f.slidesPerGroupAuto ? m : f.slidesPerGroup;
                let g = v;
                g % v != 0 && (g += v - g % v), g += f.loopAdditionalSlides, l.loopedSlides = g;
                const y = l.grid && f.grid && f.grid.rows > 1;
                c.length < m + g ? x("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : y && "row" === f.grid.fill && x("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const _ = [], w = [];
                let b = l.activeIndex;
                void 0 === s ? s = l.getSlideIndex(c.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : b = s;
                const T = "next" === r || !r, S = "prev" === r || !r;
                let k = 0, C = 0;
                const E = y ? Math.ceil(c.length / f.grid.rows) : c.length, M = (y ? c[s].column : s) + (h && void 0 === i ? -m / 2 + .5 : 0);
                if (M < g) {
                    k = Math.max(g - M, v);
                    for (let e = 0; e < g - M; e += 1) {
                        const t = e - Math.floor(e / E) * E;
                        if (y) {
                            const e = E - t - 1;
                            for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && _.push(t)
                        } else _.push(E - t - 1)
                    }
                } else if (M + m > E - g) {
                    C = Math.max(M - (E - 2 * g), v);
                    for (let e = 0; e < C; e += 1) {
                        const t = e - Math.floor(e / E) * E;
                        y ? c.forEach(((e, n) => {
                            e.column === t && w.push(n)
                        })) : w.push(t)
                    }
                }
                if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                    l.__preventObserver__ = !1
                })), S && _.forEach((e => {
                    c[e].swiperLoopMoveDOM = !0, p.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                })), T && w.forEach((e => {
                    c[e].swiperLoopMoveDOM = !0, p.append(c[e]), c[e].swiperLoopMoveDOM = !1
                })), l.recalcSlides(), "auto" === f.slidesPerView ? l.updateSlides() : y && (_.length > 0 && S || w.length > 0 && T) && l.slides.forEach(((e, t) => {
                    l.grid.updateSlide(t, e, l.slides)
                })), f.watchSlidesProgress && l.updateSlidesOffset(), n) if (_.length > 0 && S) {
                    if (void 0 === t) {
                        const e = l.slidesGrid[b], t = l.slidesGrid[b + k] - e;
                        o ? l.setTranslate(l.translate - t) : (l.slideTo(b + k, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                    } else if (i) {
                        const e = y ? _.length / f.grid.rows : _.length;
                        l.slideTo(l.activeIndex + e, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                    }
                } else if (w.length > 0 && T) if (void 0 === t) {
                    const e = l.slidesGrid[b], t = l.slidesGrid[b - C] - e;
                    o ? l.setTranslate(l.translate - t) : (l.slideTo(b - C, 0, !1, !0), i && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                } else {
                    const e = y ? w.length / f.grid.rows : w.length;
                    l.slideTo(l.activeIndex - e, 0, !1, !0)
                }
                if (l.allowSlidePrev = u, l.allowSlideNext = d, l.controller && l.controller.control && !a) {
                    const e = {slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: s, byController: !0};
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({...e, slideTo: t.params.slidesPerView === f.slidesPerView && n})
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({...e, slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && n})
                }
                l.emit("loopFix")
            }, loopDestroy: function () {
                const e = this, {params: t, slidesEl: n} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const r = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    r[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), r.forEach((e => {
                    n.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        };

        function q(e, t, n) {
            const r = h(), {params: i} = e, s = i.edgeSwipeDetection, a = i.edgeSwipeThreshold;
            return !s || !(n <= a || n >= r.innerWidth - a) || "prevent" === s && (t.preventDefault(), !0)
        }

        function F(e) {
            const t = this, n = p();
            let r = e;
            r.originalEvent && (r = r.originalEvent);
            const i = t.touchEventsData;
            if ("pointerdown" === r.type) {
                if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
                i.pointerId = r.pointerId
            } else "touchstart" === r.type && 1 === r.targetTouches.length && (i.touchId = r.targetTouches[0].identifier);
            if ("touchstart" === r.type) return void q(t, r, r.targetTouches[0].pageX);
            const {params: s, touches: a, enabled: o} = t;
            if (!o) return;
            if (!s.simulateTouch && "mouse" === r.pointerType) return;
            if (t.animating && s.preventInteractionOnTransition) return;
            !t.animating && s.cssMode && s.loop && t.loopFix();
            let l = r.target;
            if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(l)) return;
            if ("which" in r && 3 === r.which) return;
            if ("button" in r && r.button > 0) return;
            if (i.isTouched && i.isMoved) return;
            const c = !!s.noSwipingClass && "" !== s.noSwipingClass, u = r.composedPath ? r.composedPath() : r.path;
            c && r.target && r.target.shadowRoot && u && (l = u[0]);
            const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, f = !(!r.target || !r.target.shadowRoot);
            if (s.noSwiping && (f ? function (e, t) {
                return void 0 === t && (t = this), function t(n) {
                    if (!n || n === p() || n === h()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode ? r || t(n.getRootNode().host) : null
                }(t)
            }(d, l) : l.closest(d))) return void (t.allowClick = !0);
            if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
            a.currentX = r.pageX, a.currentY = r.pageY;
            const m = a.currentX, g = a.currentY;
            if (!q(t, r, m)) return;
            Object.assign(i, {isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0}), a.startX = m, a.startY = g, i.touchStartTime = v(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
            let y = !0;
            l.matches(i.focusableElements) && (y = !1, "SELECT" === l.nodeName && (i.isTouched = !1)), n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== l && n.activeElement.blur();
            const _ = y && t.allowTouchMove && s.touchStartPreventDefault;
            !s.touchStartForcePreventDefault && !_ || l.isContentEditable || r.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
        }

        function B(e) {
            const t = p(), n = this, r = n.touchEventsData, {params: i, touches: s, rtlTranslate: a, enabled: o} = n;
            if (!o) return;
            if (!i.simulateTouch && "mouse" === e.pointerType) return;
            let l, c = e;
            if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
                if (null !== r.touchId) return;
                if (c.pointerId !== r.pointerId) return
            }
            if ("touchmove" === c.type) {
                if (l = [...c.changedTouches].filter((e => e.identifier === r.touchId))[0], !l || l.identifier !== r.touchId) return
            } else l = c;
            if (!r.isTouched) return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
            const u = l.pageX, d = l.pageY;
            if (c.preventedByNestedSwiper) return s.startX = u, void (s.startY = d);
            if (!n.allowTouchMove) return c.target.matches(r.focusableElements) || (n.allowClick = !1), void (r.isTouched && (Object.assign(s, {startX: u, startY: d, currentX: u, currentY: d}), r.touchStartTime = v()));
            if (i.touchReleaseOnEdges && !i.loop) if (n.isVertical()) {
                if (d < s.startY && n.translate <= n.maxTranslate() || d > s.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
            } else if (u < s.startX && n.translate <= n.maxTranslate() || u > s.startX && n.translate >= n.minTranslate()) return;
            if (t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements)) return r.isMoved = !0, void (n.allowClick = !1);
            r.allowTouchCallbacks && n.emit("touchMove", c), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = u, s.currentY = d;
            const f = s.currentX - s.startX, h = s.currentY - s.startY;
            if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold) return;
            if (void 0 === r.isScrolling) {
                let e;
                n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
            }
            if (r.isScrolling && n.emit("touchMoveOpposite", c), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) return void (r.isTouched = !1);
            if (!r.startMoving) return;
            n.allowClick = !1, !i.cssMode && c.cancelable && c.preventDefault(), i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
            let m = n.isHorizontal() ? f : h, g = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
            i.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), s.diff = m, m *= i.touchRatio, a && (m = -m, g = -g);
            const y = n.touchesDirection;
            n.swipeDirection = m > 0 ? "prev" : "next", n.touchesDirection = g > 0 ? "prev" : "next";
            const _ = n.params.loop && !i.cssMode, w = "next" === n.touchesDirection && n.allowSlideNext || "prev" === n.touchesDirection && n.allowSlidePrev;
            if (!r.isMoved) {
                if (_ && w && n.loopFix({direction: n.swipeDirection}), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
                    const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                    n.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1, !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)
            }
            if ((new Date).getTime(), r.isMoved && r.allowThresholdMove && y !== n.touchesDirection && _ && w && Math.abs(m) >= 1) return Object.assign(s, {startX: u, startY: d, currentX: u, currentY: d, startTranslate: r.currentTranslate}), r.loopSwapReset = !0, void (r.startTranslate = r.currentTranslate);
            n.emit("sliderMove", c), r.isMoved = !0, r.currentTranslate = m + r.startTranslate;
            let b = !0, x = i.resistanceRatio;
            if (i.touchReleaseOnEdges && (x = 0), m > 0 ? (_ && w && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) && n.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), r.currentTranslate > n.minTranslate() && (b = !1, i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** x))) : m < 0 && (_ && w && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) && n.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: n.slides.length - ("auto" === i.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
            }), r.currentTranslate < n.maxTranslate() && (b = !1, i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** x))), b && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
                if (!(Math.abs(m) > i.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
            }
            i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
        }

        function X(e) {
            const t = this, n = t.touchEventsData;
            let r, i = e;
            if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
                if (r = [...i.changedTouches].filter((e => e.identifier === n.touchId))[0], !r || r.identifier !== n.touchId) return
            } else {
                if (null !== n.touchId) return;
                if (i.pointerId !== n.pointerId) return;
                r = i
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
            n.pointerId = null, n.touchId = null;
            const {params: s, touches: a, rtlTranslate: o, slidesGrid: l, enabled: c} = t;
            if (!c) return;
            if (!s.simulateTouch && "mouse" === i.pointerType) return;
            if (n.allowTouchCallbacks && t.emit("touchEnd", i), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && s.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
            s.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = v(), d = u - n.touchStartTime;
            if (t.allowClick) {
                const e = i.path || i.composedPath && i.composedPath();
                t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), d < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
            }
            if (n.lastClickTime = v(), m((() => {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
            let p;
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, p = s.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, s.cssMode) return;
            if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: p});
            let f = 0, h = t.slidesSizesGrid[0];
            for (let e = 0; e < l.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== l[e + t] ? p >= l[e] && p < l[e + t] && (f = e, h = l[e + t] - l[e]) : p >= l[e] && (f = e, h = l[l.length - 1] - l[l.length - 2])
            }
            let g = null, y = null;
            s.rewind && (t.isBeginning ? y = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
            const _ = (p - l[f]) / h, w = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (d > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (_ >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : f + w) : t.slideTo(f)), "prev" === t.swipeDirection && (_ > 1 - s.longSwipesRatio ? t.slideTo(f + w) : null !== y && _ < 0 && Math.abs(_) > s.longSwipesRatio ? t.slideTo(y) : t.slideTo(f))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + w), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : f)) : i.target === t.navigation.nextEl ? t.slideTo(f + w) : t.slideTo(f)
            }
        }

        function H() {
            const e = this, {params: t, el: n} = e;
            if (n && 0 === n.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: r, allowSlidePrev: i, snapGrid: s} = e, a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }

        function Y(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function $() {
            const e = this, {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
            if (!r) return;
            let i;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const s = e.maxTranslate() - e.minTranslate();
            i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function V(e) {
            const t = this;
            D(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }

        function G() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }

        const W = (e, t) => {
            const n = p(), {params: r, el: i, wrapperEl: s, device: a} = e, o = !!r.nested, l = "on" === t ? "addEventListener" : "removeEventListener", c = t;
            n[l]("touchstart", e.onDocumentTouchStart, {passive: !1, capture: o}), i[l]("touchstart", e.onTouchStart, {passive: !1}), i[l]("pointerdown", e.onTouchStart, {passive: !1}), n[l]("touchmove", e.onTouchMove, {passive: !1, capture: o}), n[l]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), n[l]("touchend", e.onTouchEnd, {passive: !0}), n[l]("pointerup", e.onTouchEnd, {passive: !0}), n[l]("pointercancel", e.onTouchEnd, {passive: !0}), n[l]("touchcancel", e.onTouchEnd, {passive: !0}), n[l]("pointerout", e.onTouchEnd, {passive: !0}), n[l]("pointerleave", e.onTouchEnd, {passive: !0}), n[l]("contextmenu", e.onTouchEnd, {passive: !0}), (r.preventClicks || r.preventClicksPropagation) && i[l]("click", e.onClick, !0), r.cssMode && s[l]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e[c]("observerUpdate", H, !0), i[l]("load", e.onLoad, {capture: !0})
        }, U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var K = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function Q(e, t) {
            return function (n) {
                void 0 === n && (n = {});
                const r = Object.keys(n)[0], i = n[r];
                "object" == typeof i && null !== i ? (!0 === e[r] && (e[r] = {enabled: !0}), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i ? ("object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {enabled: !1}), y(t, n)) : y(t, n)) : y(t, n)
            }
        }

        const Z = {
            eventsEmitter: O, update: N, translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {params: t, rtlTranslate: n, translate: r, wrapperEl: i} = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let s = function (e, t) {
                        void 0 === t && (t = "x");
                        const n = h();
                        let r, i, s;
                        const a = function (e) {
                            const t = h();
                            let n;
                            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                        }(e);
                        return n.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = s.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? s.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? s.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
                    }(i, e);
                    return s += this.cssOverflowAdjustment(), n && (s = -s), s || 0
                }, setTranslate: function (e, t) {
                    const n = this, {rtlTranslate: r, params: i, wrapperEl: s, progress: a} = n;
                    let o, l = 0, c = 0;
                    n.isHorizontal() ? l = r ? -e : e : c = e, i.roundLengths && (l = Math.floor(l), c = Math.floor(c)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c, i.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : i.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : c -= n.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                    const u = n.maxTranslate() - n.minTranslate();
                    o = 0 === u ? 0 : (e - n.minTranslate()) / u, o !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                }, minTranslate: function () {
                    return -this.snapGrid[0]
                }, maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }, translateTo: function (e, t, n, r, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
                    const s = this, {params: a, wrapperEl: o} = s;
                    if (s.animating && a.preventInteractionOnTransition) return !1;
                    const l = s.minTranslate(), c = s.maxTranslate();
                    let u;
                    if (u = r && e > l ? l : r && e < c ? c : e, s.updateProgress(u), a.cssMode) {
                        const e = s.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u; else {
                            if (!s.support.smoothScroll) return w({swiper: s, targetPosition: -u, side: e ? "left" : "top"}), !0;
                            o.scrollTo({[e ? "left" : "top"]: -u, behavior: "smooth"})
                        }
                        return !0
                    }
                    return 0 === t ? (s.setTransition(0), s.setTranslate(u), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(u), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, n && s.emit("transitionEnd"))
                    }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
                }
            }, transition: {
                setTransition: function (e, t) {
                    const n = this;
                    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), n.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const n = this, {params: r} = n;
                    r.cssMode || (r.autoHeight && n.updateAutoHeight(), z({swiper: n, runCallbacks: e, direction: t, step: "Start"}))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const n = this, {params: r} = n;
                    n.animating = !1, r.cssMode || (n.setTransition(0), z({swiper: n, runCallbacks: e, direction: t, step: "End"}))
                }
            }, slide: R, loop: j, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                }, unsetGrabCursor: function () {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            }, events: {
                attachEvents: function () {
                    const e = this, {params: t} = e;
                    e.onTouchStart = F.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = X.bind(e), e.onDocumentTouchStart = G.bind(e), t.cssMode && (e.onScroll = $.bind(e)), e.onClick = Y.bind(e), e.onLoad = V.bind(e), W(e, "on")
                }, detachEvents: function () {
                    W(this, "off")
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    const e = this, {realIndex: t, initialized: n, params: r, el: i} = e, s = r.breakpoints;
                    if (!s || s && 0 === Object.keys(s).length) return;
                    const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a) return;
                    const o = (a in s ? s[a] : void 0) || e.originalParams, l = U(e, r), c = U(e, o), u = r.enabled;
                    l && !c ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && c && (i.classList.add(`${r.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === o[t]) return;
                        const n = r[t] && r[t].enabled, i = o[t] && o[t].enabled;
                        n && !i && e[t].disable(), !n && i && e[t].enable()
                    }));
                    const d = o.direction && o.direction !== r.direction, p = r.loop && (o.slidesPerView !== r.slidesPerView || d), f = r.loop;
                    d && n && e.changeDirection(), y(e.params, o);
                    const h = e.params.enabled, m = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), n && (p ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && m ? (e.loopCreate(t), e.updateSlides()) : f && !m && e.loopDestroy()), e.emit("breakpoint", o)
                }, getBreakpoint: function (e, t, n) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                    let r = !1;
                    const i = h(), s = "window" === t ? i.innerHeight : n.clientHeight, a = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {value: s * t, point: e}
                        }
                        return {value: e, point: e}
                    }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < a.length; e += 1) {
                        const {point: s, value: o} = a[e];
                        "window" === t ? i.matchMedia(`(min-width: ${o}px)`).matches && (r = s) : o <= n.clientWidth && (r = s)
                    }
                    return r || "max"
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: r} = n;
                    if (r) {
                        const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: {
                addClasses: function () {
                    const e = this, {classNames: t, params: n, rtl: r, el: i, device: s} = e, a = function (e, t) {
                        const n = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((r => {
                                e[r] && n.push(t + r)
                            })) : "string" == typeof e && n.push(t + e)
                        })), n
                    }(["initialized", n.direction, {"free-mode": e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: r}, {grid: n.grid && n.grid.rows > 1}, {"grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": n.cssMode}, {centered: n.cssMode && n.centeredSlides}, {"watch-progress": n.watchSlidesProgress}], n.containerModifierClass);
                    t.push(...a), i.classList.add(...t), e.emitContainerClasses()
                }, removeClasses: function () {
                    const {el: e, classNames: t} = this;
                    e.classList.remove(...t), this.emitContainerClasses()
                }
            }
        }, J = {};

        class ee {
            constructor() {
                let e, t;
                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = y({}, t), e && !t.el && (t.el = e);
                const s = p();
                if (t.el && "string" == typeof t.el && s.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return s.querySelectorAll(t.el).forEach((n => {
                        const r = y({}, t, {el: n});
                        e.push(new ee(r))
                    })), e
                }
                const a = this;
                var o;
                a.__swiper__ = !0, a.support = P(), a.device = (void 0 === (o = {userAgent: t.userAgent}) && (o = {}), M || (M = function (e) {
                    let {userAgent: t} = void 0 === e ? {} : e;
                    const n = P(), r = h(), i = r.navigator.platform, s = t || r.navigator.userAgent, a = {ios: !1, android: !1}, o = r.screen.width, l = r.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = s.match(/(iPad).*OS\s([\d_]+)/);
                    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = "Win32" === i;
                    let m = "MacIntel" === i;
                    return !u && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !f && (a.os = "android", a.android = !0), (u || p || d) && (a.os = "ios", a.ios = !0), a
                }(o)), M), a.browser = (A || (A = function () {
                    const e = h();
                    let t = !1;

                    function n() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }

                    if (n()) {
                        const n = String(e.navigator.userAgent);
                        if (n.includes("Version/")) {
                            const [e, r] = n.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            t = e < 16 || 16 === e && r < 2
                        }
                    }
                    return {isSafari: t || n(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}
                }()), A), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                const l = {};
                a.modules.forEach((e => {
                    e({params: t, swiper: a, extendParams: Q(t, l), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a)})
                }));
                const c = y({}, K, l);
                return a.params = y({}, c, J, t), a.originalParams = y({}, a.params), a.passedParams = y({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                    a.on(e, a.params.on[e])
                })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === a.params.direction,
                    isVertical: () => "vertical" === a.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.emit("_swiper"), a.params.init && a.init(), a
            }

            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom"}[e]
            }

            getSlideIndex(e) {
                const {slidesEl: t, params: n} = this, r = k(b(t, `.${n.slideClass}, swiper-slide`)[0]);
                return k(e) - r
            }

            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }

            recalcSlides() {
                const {slidesEl: e, params: t} = this;
                this.slides = b(e, `.${t.slideClass}, swiper-slide`)
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const n = this;
                e = Math.min(Math.max(e, 0), 1);
                const r = n.minTranslate(), i = (n.maxTranslate() - r) * e + r;
                n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((n => {
                    const r = e.getSlideClasses(n);
                    t.push({slideEl: n, classNames: r}), e.emit("_slideClass", n, r)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: n, slides: r, slidesGrid: i, slidesSizesGrid: s, size: a, activeIndex: o} = this;
                let l = 1;
                if ("number" == typeof n.slidesPerView) return n.slidesPerView;
                if (n.centeredSlides) {
                    let e, t = r[o] ? r[o].swiperSlideSize : 0;
                    for (let n = o + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > a && (e = !0));
                    for (let n = o - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e) for (let e = o + 1; e < r.length; e += 1) (t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: n} = e;

                function r() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate, n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let i;
                if (n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && D(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n.freeMode && n.freeMode.enabled && !n.cssMode) r(), n.autoHeight && e.updateAutoHeight(); else {
                    if (("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                        const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                        i = e.slideTo(t.length - 1, 0, !1, !0)
                    } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                    i || r()
                }
                n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const n = this, r = n.params.direction;
                return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.el.classList.remove(`${n.params.containerModifierClass}${r}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let n = e || t.params.el;
                if ("string" == typeof n && (n = document.querySelector(n)), !n) return !1;
                n.swiper = t, n.parentNode && n.parentNode.host && "SWIPER-CONTAINER" === n.parentNode.host.nodeName && (t.isElement = !0);
                const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let i = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(r()) : b(n, r())[0];
                return !i && t.params.createElements && (i = T("div", t.params.wrapperClass), n.append(i), b(n, `.${t.params.slideClass}`).forEach((e => {
                    i.append(e)
                }))), Object.assign(t, {
                    el: n,
                    wrapperEl: i,
                    slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : i,
                    hostEl: t.isElement ? n.parentNode.host : n,
                    mounted: !0,
                    rtl: "rtl" === n.dir.toLowerCase() || "rtl" === S(n, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === S(n, "direction")),
                    wrongRTL: "-webkit-box" === S(i, "display")
                }), !0
            }

            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const n = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((e => {
                    e.complete ? D(t, e) : e.addEventListener("load", (e => {
                        D(t, e.target)
                    }))
                })), I(t), t.initialized = !0, I(t), t.emit("init"), t.emit("afterInit"), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const n = this, {params: r, el: i, wrapperEl: s, slides: a} = n;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttribute("style"), s.removeAttribute("style"), a && a.length && a.forEach((e => {
                    e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                    n.off(e)
                })), !1 !== e && (n.el.swiper = null, function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(n)), n.destroyed = !0), null
            }

            static extendDefaults(e) {
                y(J, e)
            }

            static get extendedDefaults() {
                return J
            }

            static get defaults() {
                return K
            }

            static installModule(e) {
                ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
                const t = ee.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
            }
        }

        function te(e) {
            let {swiper: t, extendParams: n, on: r, emit: i} = e;
            const s = h();
            let a;
            n({mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null, noMousewheelClass: "swiper-no-mousewheel"}}), t.mousewheel = {enabled: !1};
            let o, l = v();
            const c = [];

            function u() {
                t.enabled && (t.mouseEntered = !0)
            }

            function d() {
                t.enabled && (t.mouseEntered = !1)
            }

            function p(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && v() - l < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && v() - l < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), l = (new s.Date).getTime(), 1))
            }

            function f(e) {
                let n = e, r = !0;
                if (!t.enabled) return;
                if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                const s = t.params.mousewheel;
                t.params.cssMode && n.preventDefault();
                let l = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (l = document.querySelector(t.params.mousewheel.eventsTarget));
                const u = l && l.contains(n.target);
                if (!t.mouseEntered && !u && !s.releaseOnEdges) return !0;
                n.originalEvent && (n = n.originalEvent);
                let d = 0;
                const f = t.rtlTranslate ? -1 : 1, h = function (e) {
                    let t = 0, n = 0, r = 0, i = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, i = 10 * n, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = i, i = 0), (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: i
                    }
                }(n);
                if (s.forceToAxis) if (t.isHorizontal()) {
                    if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                    d = -h.pixelX * f
                } else {
                    if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                    d = -h.pixelY
                } else d = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * f : -h.pixelY;
                if (0 === d) return !0;
                s.invert && (d = -d);
                let g = t.getTranslate() + d * s.sensitivity;
                if (g >= t.minTranslate() && (g = t.minTranslate()), g <= t.maxTranslate() && (g = t.maxTranslate()), r = !!t.params.loop || !(g === t.minTranslate() || g === t.maxTranslate()), r && t.params.nested && n.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {time: v(), delta: Math.abs(d), direction: Math.sign(d)}, r = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                    if (!r) {
                        o = void 0;
                        let l = t.getTranslate() + d * s.sensitivity;
                        const u = t.isBeginning, p = t.isEnd;
                        if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0), t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!u && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                            clearTimeout(a), a = void 0, c.length >= 15 && c.shift();
                            const n = c.length ? c[c.length - 1] : void 0, r = c[0];
                            if (c.push(e), n && (e.delta > n.delta || e.direction !== n.direction)) c.splice(0); else if (c.length >= 15 && e.time - r.time < 500 && r.delta - e.delta >= 1 && e.delta <= 6) {
                                const n = d > 0 ? .8 : .2;
                                o = e, c.splice(0), a = m((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, n)
                                }), 0)
                            }
                            a || (a = m((() => {
                                o = e, c.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (r || i("scroll", n), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), s.releaseOnEdges && (l === t.minTranslate() || l === t.maxTranslate())) return !0
                    }
                } else {
                    const n = {time: v(), delta: Math.abs(d), direction: Math.sign(d), raw: e};
                    c.length >= 2 && c.shift();
                    const r = c.length ? c[c.length - 1] : void 0;
                    if (c.push(n), r ? (n.direction !== r.direction || n.delta > r.delta || n.time > r.time + 150) && p(n) : p(n), function (e) {
                        const n = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                        return !1
                    }(n)) return !0
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
            }

            function g(e) {
                let n = t.el;
                "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget)), n[e]("mouseenter", u), n[e]("mouseleave", d), n[e]("wheel", f)
            }

            function y() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", f), !0) : !t.mousewheel.enabled && (g("addEventListener"), t.mousewheel.enabled = !0, !0)
            }

            function _() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, f), !0) : !!t.mousewheel.enabled && (g("removeEventListener"), t.mousewheel.enabled = !1, !0)
            }

            r("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && _(), t.params.mousewheel.enabled && y()
            })), r("destroy", (() => {
                t.params.cssMode && y(), t.mousewheel.enabled && _()
            })), Object.assign(t.mousewheel, {enable: y, disable: _})
        }

        function ne(e) {
            let {swiper: t, extendParams: n, on: r, emit: i} = e;
            n({navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled"}}), t.navigation = {nextEl: null, prevEl: null};
            const s = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

            function a(e) {
                let n;
                return e && "string" == typeof e && t.isElement && (n = t.el.querySelector(e), n) ? n : (e && ("string" == typeof e && (n = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.el.querySelectorAll(e).length && (n = t.el.querySelector(e))), e && !n ? e : n)
            }

            function o(e, n) {
                const r = t.params.navigation;
                (e = s(e)).forEach((e => {
                    e && (e.classList[n ? "add" : "remove"](...r.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = n), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
                }))
            }

            function l() {
                const {nextEl: e, prevEl: n} = t.navigation;
                if (t.params.loop) return o(n, !1), void o(e, !1);
                o(n, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
            }

            function c(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
            }

            function u(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
            }

            function d() {
                const e = t.params.navigation;
                if (t.params.navigation = function (e, t, n, r) {
                    return e.params.createElements && Object.keys(r).forEach((i => {
                        if (!n[i] && !0 === n.auto) {
                            let s = b(e.el, `.${r[i]}`)[0];
                            s || (s = T("div", r[i]), s.className = r[i], e.el.append(s)), n[i] = s, t[i] = s
                        }
                    })), n
                }(t, t.originalParams.navigation, t.params.navigation, {nextEl: "swiper-button-next", prevEl: "swiper-button-prev"}), !e.nextEl && !e.prevEl) return;
                let n = a(e.nextEl), r = a(e.prevEl);
                Object.assign(t.navigation, {nextEl: n, prevEl: r}), n = s(n), r = s(r);
                const i = (n, r) => {
                    n && n.addEventListener("click", "next" === r ? u : c), !t.enabled && n && n.classList.add(...e.lockClass.split(" "))
                };
                n.forEach((e => i(e, "next"))), r.forEach((e => i(e, "prev")))
            }

            function p() {
                let {nextEl: e, prevEl: n} = t.navigation;
                e = s(e), n = s(n);
                const r = (e, n) => {
                    e.removeEventListener("click", "next" === n ? u : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                };
                e.forEach((e => r(e, "next"))), n.forEach((e => r(e, "prev")))
            }

            r("init", (() => {
                !1 === t.params.navigation.enabled ? f() : (d(), l())
            })), r("toEdge fromEdge lock unlock", (() => {
                l()
            })), r("destroy", (() => {
                p()
            })), r("enable disable", (() => {
                let {nextEl: e, prevEl: n} = t.navigation;
                e = s(e), n = s(n), t.enabled ? l() : [...e, ...n].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
            })), r("click", ((e, n) => {
                let {nextEl: r, prevEl: a} = t.navigation;
                r = s(r), a = s(a);
                const o = n.target;
                if (t.params.navigation.hideOnClick && !a.includes(o) && !r.includes(o)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                    let e;
                    r.length ? e = r[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...r, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }));
            const f = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), d(), l()
                }, disable: f, update: l, init: d, destroy: p
            })
        }

        Object.keys(Z).forEach((e => {
            Object.keys(Z[e]).forEach((t => {
                ee.prototype[t] = Z[e][t]
            }))
        })), ee.use([function (e) {
            let {swiper: t, on: n, emit: r} = e;
            const i = h();
            let s = null, a = null;
            const o = () => {
                t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
            }, l = () => {
                t && !t.destroyed && t.initialized && r("orientationchange")
            };
            n("init", (() => {
                t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
                    a = i.requestAnimationFrame((() => {
                        const {width: n, height: r} = t;
                        let i = n, s = r;
                        e.forEach((e => {
                            let {contentBoxSize: n, contentRect: r, target: a} = e;
                            a && a !== t.el || (i = r ? r.width : (n[0] || n).inlineSize, s = r ? r.height : (n[0] || n).blockSize)
                        })), i === n && s === r || o()
                    }))
                })), s.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", l))
            })), n("destroy", (() => {
                a && i.cancelAnimationFrame(a), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", l)
            }))
        }, function (e) {
            let {swiper: t, extendParams: n, on: r, emit: i} = e;
            const s = [], a = h(), o = function (e, n) {
                void 0 === n && (n = {});
                const r = new (a.MutationObserver || a.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const n = function () {
                        i("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(n) : a.setTimeout(n, 0)
                }));
                r.observe(e, {attributes: void 0 === n.attributes || n.attributes, childList: void 0 === n.childList || n.childList, characterData: void 0 === n.characterData || n.characterData}), s.push(r)
            };
            n({observer: !1, observeParents: !1, observeSlideChildren: !1}), r("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = function (e, t) {
                            const n = [];
                            let r = e.parentElement;
                            for (; r;) n.push(r), r = r.parentElement;
                            return n
                        }(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) o(e[t])
                    }
                    o(t.hostEl, {childList: t.params.observeSlideChildren}), o(t.wrapperEl, {attributes: !1})
                }
            })), r("destroy", (() => {
                s.forEach((e => {
                    e.disconnect()
                })), s.splice(0, s.length)
            }))
        }]);
        var re, ie = (re = document.getElementsByTagName("html")[0], function () {
            return parseInt(window.getComputedStyle(re).fontSize)
        });

        function se(e) {
            return parseInt(e) / ie()
        }

        function ae(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function oe(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }

        t()(document).ready((function () {
            if (!document.querySelector(".approach__twenty")) return;
            t()(".approach__twenty").twentytwenty({default_offset_pct: .5, move_with_handle_only: !0, no_overlay: !0});
            const e = new IntersectionObserver((function (n) {
                n.forEach((n => {
                    n.isIntersecting && (n.target.classList.add("hidden"), t()(".approach__preview-box").addClass("hidden"), e.unobserve(n.target))
                }))
            }), {threshold: [.9]}), n = document.querySelector(".approach__img-card_over");
            e.observe(n)
        })), t()(document).ready((function () {
            if (!document.querySelector(".services")) return;
            new ee(".services__slider", {modules: [ne], slidesPerView: "1.1", spaceBetween: "2%", grabCursor: !0, navigation: {nextEl: ".services__swiper-btn-next", prevEl: ".services__swiper-btn-prev"}, breakpoints: {768: {slidesPerView: "3.4", spaceBetween: "2%"}}});
            const e = {threshold: [0], root: document.querySelector(".services__slider-wrapper")}, t = new IntersectionObserver((function (e) {
                e.forEach((e => {
                    e.isIntersecting ? e.target.classList.remove("hidden") : e.target.classList.add("hidden")
                }))
            }), e), n = document.querySelectorAll(".services__swiper-slide");
            n.forEach((e => {
                e.classList.add("hidden"), t.observe(e)
            }));
            const r = document.querySelector(".services__swiper-btn-next"), i = new MutationObserver((e => {
                for (let t of e) if ("attributes" === t.type) {
                    if ("class" !== t.attributeName) return;
                    t.target.classList.contains("swiper-button-disabled") ? n.forEach((e => {
                        e.classList.add("last")
                    })) : n.forEach((e => {
                        e.classList.remove("last")
                    }))
                }
            }));
            i.observe(r, {attributes: !0, attributeOldValue: !0})
        })), t()(document).ready((function () {
            if (!document.querySelector(".advantages")) return;
            const e = document.querySelectorAll(".advantages__list-item");
            let n = "0", r = new Map;
            const i = new Map, s = t()('.advantages__display-title[data-advantages="0"]').css("height");
            t()(".advantages__display-title-list").css("height", s);
            const a = t()('.advantages__display-text[data-advantages="0"]').css("height");
            t()(".advantages__display-text-list").css("height", a), e.forEach(((e, s) => {
                const a = e.getAttribute("data-advantages");
                r.set(e, t()(`.advantages__display-title[data-advantages="${a}"]`)), i.set(e, t()(`.advantages__display-text[data-advantages="${a}"]`)), e.addEventListener("click", (s => {
                    let dataAdvantages = e.getAttribute('data-advantages');
                    document.querySelectorAll('.advantages__more-link').forEach((elem)=>{
                        elem.classList.remove('active');
                        let elemData = elem.getAttribute('data-advantages');
                        if(dataAdvantages == elemData){
                            elem.classList.add('active');
                        }
                    });
                    ((e, s) => {
                        t()(`.advantages__list-item[data-advantages="${n}"]`)[0].classList.remove("active"), e.classList.add("active"), t()(`.advantages__display-title[data-advantages="${n}"]`)[0].classList.remove("active"), e.classList.add("active"), t()(`.advantages__display-text[data-advantages="${n}"]`)[0].classList.remove("active"), e.classList.add("active");
                        const a = r.get(e), o = i.get(e);
                        a[0].classList.add("active"), o[0].classList.add("active");
                        const l = a.css("height");
                        t()(".advantages__display-title-list").css("height", `${se(l)}rem`);
                        const c = o.css("height");
                        t()(".advantages__display-text-list").css("height", `${se(c)}rem`), n = s
                    })(e, a)
                }))
            }))
        })), t()(document).ready((function () {
            document.querySelector(".advantages") && t()(".advantages__item-title").click((function (e) {
                e.preventDefault(), t()(this).hasClass("active") ? (t()(this).removeClass("active"), t()(this).siblings(".advantages__item-info").slideUp(400)) : (t()(".advantages__item-title").removeClass("active"), t()(this).addClass("active"), t()(".advantages__item-info").slideUp(400), t()(this).siblings(".advantages__item-info").slideDown(400))
            }))
        })), t()(document).ready((function () {
            if (!document.querySelector(".plan")) return;
            const e = document.querySelectorAll(".plan__graph"), t = document.querySelectorAll(".plan__graph-percent"), n = document.querySelectorAll(".plan__circle"), r = new IntersectionObserver((function (e) {
                e.forEach((e => {
                    e.isIntersecting && (t[0].classList.contains("done") || t.forEach((e => {
                        !function (e) {
                            let t = 0;
                            const n = Number(e.getAttribute("data-dev-number")), r = Math.round(3e3 / (10 * n));
                            let i = 0;
                            for (let s = 0; s < 10 * n; s++) setTimeout((() => {
                                t += .1, e.textContent = `${t.toFixed(1).toString().replace(".", ",")}%`
                            }), i), i += r
                        }(e), e.classList.add("done")
                    })), n.forEach((e => {
                        !function (e) {
                            e.classList.add("animate-plan-circle")
                        }(e)
                    })), r.unobserve(e.target))
                }))
            }), {threshold: [.95]});
            e.forEach((e => {
                r.observe(e)
            }))
        })), t()(document).ready((function () {
            document.querySelector(".news__slider") && new ee(".news__slider", {modules: [ne], slidesPerView: "1.1", speed: 400, grabCursor: !0, navigation: {nextEl: ".news__swiper-btn-next", prevEl: ".news__swiper-btn-prev"}, breakpoints: {768: {slidesPerView: 6, spaceBetween: 30, centeredSlides: !0}}})
        })), t()(document).ready((function () {
            document.querySelector(".approach__view-all") && t()(".approach__view-all").click((function () {
                t()(this).hasClass("hide") ? (t()(".approach__text").removeClass("display"), t()(this).removeClass("hide"), t()(this).html("View all")) : (t()(".approach__text").addClass("display"), t()(this).addClass("hide"), t()(this).html("Hide"))
            }))
        })), t()(document).ready((function () {
            document.querySelector(".plan__view-all") && t()(".plan__view-all").click((function () {
                t()(this).hasClass("hide") ? (t()(".plan__text").removeClass("display"), t()(this).removeClass("hide"), t()(this).html("View all")) : (t()(".plan__text").addClass("display"), t()(this).addClass("hide"), t()(this).html("Hide"))
            }))
        })), t()(document).ready((function () {
            document.querySelector(".news-list") && t()(".news-list__view-all").click((function () {
                t()(".news-list__wrapper").css({"max-height": "100%"})
            }))
        }));
        var le, ce, ue, de, pe, fe, he, me, ve, ge, ye, _e, we, be, xe, Te = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}}, Se = {duration: .5, overwrite: !1, delay: 0}, ke = 1e8, Ce = 1e-8, Ee = 2 * Math.PI, Me = Ee / 4, Ae = 0, Pe = Math.sqrt, Oe = Math.cos, De = Math.sin, Le = function (e) {
            return "string" == typeof e
        }, Ie = function (e) {
            return "function" == typeof e
        }, Ne = function (e) {
            return "number" == typeof e
        }, ze = function (e) {
            return void 0 === e
        }, Re = function (e) {
            return "object" == typeof e
        }, je = function (e) {
            return !1 !== e
        }, qe = function () {
            return "undefined" != typeof window
        }, Fe = function (e) {
            return Ie(e) || Le(e)
        }, Be = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, Xe = Array.isArray, He = /(?:-?\.?\d|\.)+/gi, Ye = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, $e = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ve = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ge = /[+-]=-?[.\d]+/, We = /[^,'"\[\]\s]+/gi, Ue = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ke = {}, Qe = {}, Ze = function (e) {
            return (Qe = Et(e, Ke)) && Mr
        }, Je = function (e, t) {
            return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        }, et = function (e, t) {
            return !t && console.warn(e)
        }, tt = function (e, t) {
            return e && (Ke[e] = t) && Qe && (Qe[e] = t) || Ke
        }, nt = function () {
            return 0
        }, rt = {suppressEvents: !0, isStart: !0, kill: !1}, it = {suppressEvents: !0, kill: !1}, st = {suppressEvents: !0}, at = {}, ot = [], lt = {}, ct = {}, ut = {}, dt = 30, pt = [], ft = "", ht = function (e) {
            var t, n, r = e[0];
            if (Re(r) || Ie(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
                for (n = pt.length; n-- && !pt[n].targetTest(r);) ;
                t = pt[n]
            }
            for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new Xn(e[n], t))) || e.splice(n, 1);
            return e
        }, mt = function (e) {
            return e._gsap || ht(sn(e))[0]._gsap
        }, vt = function (e, t, n) {
            return (n = e[t]) && Ie(n) ? e[t]() : ze(n) && e.getAttribute && e.getAttribute(t) || n
        }, gt = function (e, t) {
            return (e = e.split(",")).forEach(t) || e
        }, yt = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, _t = function (e) {
            return Math.round(1e7 * e) / 1e7 || 0
        }, wt = function (e, t) {
            var n = t.charAt(0), r = parseFloat(t.substr(2));
            return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        }, bt = function (e, t) {
            for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;) ;
            return r < n
        }, xt = function () {
            var e, t, n = ot.length, r = ot.slice(0);
            for (lt = {}, ot.length = 0, e = 0; e < n; e++) (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        }, Tt = function (e, t, n, r) {
            ot.length && !ce && xt(), e.render(t, n, r || ce && t < 0 && (e._initted || e._startAt)), ot.length && !ce && xt()
        }, St = function (e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(We).length < 2 ? t : Le(e) ? e.trim() : e
        }, kt = function (e) {
            return e
        }, Ct = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e
        }, Et = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }, Mt = function e(t, n) {
            for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = Re(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
            return t
        }, At = function (e, t) {
            var n, r = {};
            for (n in e) n in t || (r[n] = e[n]);
            return r
        }, Pt = function (e) {
            var t, n = e.parent || de, r = e.keyframes ? (t = Xe(e.keyframes), function (e, n) {
                for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
            }) : Ct;
            if (je(e.inherit)) for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
            return e
        }, Ot = function (e, t, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var s, a = e[r];
            if (i) for (s = t[i]; a && a[i] > s;) a = a._prev;
            return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t
        }, Dt = function (e, t, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = t._prev, s = t._next;
            i ? i._next = s : e[n] === t && (e[n] = s), s ? s._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null
        }, Lt = function (e, t) {
            e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        }, It = function (e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
            return e
        }, Nt = function (e, t, n, r) {
            return e._startAt && (ce ? e._startAt.revert(it) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
        }, zt = function e(t) {
            return !t || t._ts && e(t.parent)
        }, Rt = function (e) {
            return e._repeat ? jt(e._tTime, e = e.duration() + e._rDelay) * e : 0
        }, jt = function (e, t) {
            var n = Math.floor(e /= t);
            return e && n === e ? n - 1 : n
        }, qt = function (e, t) {
            return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        }, Ft = function (e) {
            return e._end = _t(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ce) || 0))
        }, Bt = function (e, t) {
            var n = e._dp;
            return n && n.smoothChildTiming && e._ts && (e._start = _t(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ft(e), n._dirty || It(n, e)), e
        }, Xt = function (e, t) {
            var n;
            if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = qt(e.rawTime(), t), (!t._dur || en(0, t.totalDuration(), n) - t._tTime > Ce) && t.render(n, !0)), It(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                e._zTime = -1e-8
            }
        }, Ht = function (e, t, n, r) {
            return t.parent && Lt(t), t._start = _t((Ne(n) ? n : n || e !== de ? Qt(e, n, t) : e._time) + t._delay), t._end = _t(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ot(e, t, "_first", "_last", e._sort ? "_start" : 0), Gt(t) || (e._recent = t), r || Xt(e, t), e._ts < 0 && Bt(e, e._tTime), e
        }, Yt = function (e, t) {
            return (Ke.ScrollTrigger || Je("scrollTrigger", t)) && Ke.ScrollTrigger.create(t, e)
        }, $t = function (e, t, n, r, i) {
            return Kn(e, t, i), e._initted ? !n && e._pt && !ce && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && ve !== An.frame ? (ot.push(e), e._lazy = [i, r], 1) : void 0 : 1
        }, Vt = function e(t) {
            var n = t.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        }, Gt = function (e) {
            var t = e.data;
            return "isFromStart" === t || "isStart" === t
        }, Wt = function (e, t, n, r) {
            var i = e._repeat, s = _t(t) || 0, a = e._tTime / e._tDur;
            return a && !r && (e._time *= s / e._dur), e._dur = s, e._tDur = i ? i < 0 ? 1e10 : _t(s * (i + 1) + e._rDelay * i) : s, a > 0 && !r && Bt(e, e._tTime = e._tDur * a), e.parent && Ft(e), n || It(e.parent, e), e
        }, Ut = function (e) {
            return e instanceof Yn ? It(e) : Wt(e, e._dur)
        }, Kt = {_start: 0, endTime: nt, totalDuration: nt}, Qt = function e(t, n, r) {
            var i, s, a, o = t.labels, l = t._recent || Kt, c = t.duration() >= ke ? l.endTime(!1) : t._dur;
            return Le(n) && (isNaN(n) || n in o) ? (s = n.charAt(0), a = "%" === n.substr(-1), i = n.indexOf("="), "<" === s || ">" === s ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (i < 0 ? l : r).totalDuration() / 100 : 1)) : i < 0 ? (n in o || (o[n] = c), o[n]) : (s = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), a && r && (s = s / 100 * (Xe(r) ? r[0] : r).totalDuration()), i > 1 ? e(t, n.substr(0, i - 1), r) + s : c + s)) : null == n ? c : +n
        }, Zt = function (e, t, n) {
            var r, i, s = Ne(t[1]), a = (s ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
            if (s && (o.duration = t[1]), o.parent = n, e) {
                for (r = o, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = je(i.vars.inherit) && i.parent;
                o.immediateRender = je(r.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
            }
            return new tr(t[0], o, t[a + 1])
        }, Jt = function (e, t) {
            return e || 0 === e ? t(e) : t
        }, en = function (e, t, n) {
            return n < e ? e : n > t ? t : n
        }, tn = function (e, t) {
            return Le(e) && (t = Ue.exec(e)) ? t[1] : ""
        }, nn = [].slice, rn = function (e, t) {
            return e && Re(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Re(e[0])) && !e.nodeType && e !== pe
        }, sn = function (e, t, n) {
            return ue && !t && ue.selector ? ue.selector(e) : !Le(e) || n || !fe && Pn() ? Xe(e) ? function (e, t, n) {
                return void 0 === n && (n = []), e.forEach((function (e) {
                    var r;
                    return Le(e) && !t || rn(e, 1) ? (r = n).push.apply(r, sn(e)) : n.push(e)
                })) || n
            }(e, n) : rn(e) ? nn.call(e, 0) : e ? [e] : [] : nn.call((t || he).querySelectorAll(e), 0)
        }, an = function (e) {
            return e = sn(e)[0] || et("Invalid scope") || {}, function (t) {
                var n = e.current || e.nativeElement || e;
                return sn(t, n.querySelectorAll ? n : n === e ? et("Invalid scope") || he.createElement("div") : e)
            }
        }, on = function (e) {
            return e.sort((function () {
                return .5 - Math.random()
            }))
        }, ln = function (e) {
            if (Ie(e)) return e;
            var t = Re(e) ? e : {each: e}, n = Rn(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, s = {}, a = r > 0 && r < 1, o = isNaN(r) || a, l = t.axis, c = r, u = r;
            return Le(r) ? c = u = {center: .5, edges: .5, end: 1}[r] || 0 : !a && o && (c = r[0], u = r[1]), function (e, a, d) {
                var p, f, h, m, v, g, y, _, w, b = (d || t).length, x = s[b];
                if (!x) {
                    if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, ke])[1])) {
                        for (y = -ke; y < (y = d[w++].getBoundingClientRect().left) && w < b;) ;
                        w < b && w--
                    }
                    for (x = s[b] = [], p = o ? Math.min(w, b) * c - .5 : r % w, f = w === ke ? 0 : o ? b * u / w - .5 : r / w | 0, y = 0, _ = ke, g = 0; g < b; g++) h = g % w - p, m = f - (g / w | 0), x[g] = v = l ? Math.abs("y" === l ? m : h) : Pe(h * h + m * m), v > y && (y = v), v < _ && (_ = v);
                    "random" === r && on(x), x.max = y - _, x.min = _, x.v = b = (parseFloat(t.amount) || parseFloat(t.each) * (w > b ? b - 1 : l ? "y" === l ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === r ? -1 : 1), x.b = b < 0 ? i - b : i, x.u = tn(t.amount || t.each) || 0, n = n && b < 0 ? Nn(n) : n
                }
                return b = (x[e] - x.min) / x.max || 0, _t(x.b + (n ? n(b) : b) * x.v) + x.u
            }
        }, cn = function (e) {
            var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function (n) {
                var r = _t(Math.round(parseFloat(n) / e) * e * t);
                return (r - r % 1) / t + (Ne(n) ? 0 : tn(n))
            }
        }, un = function (e, t) {
            var n, r, i = Xe(e);
            return !i && Re(e) && (n = i = e.radius || ke, e.values ? (e = sn(e.values), (r = !Ne(e[0])) && (n *= n)) : e = cn(e.increment)), Jt(t, i ? Ie(e) ? function (t) {
                return r = e(t), Math.abs(r - t) <= n ? r : t
            } : function (t) {
                for (var i, s, a = parseFloat(r ? t.x : t), o = parseFloat(r ? t.y : 0), l = ke, c = 0, u = e.length; u--;) (i = r ? (i = e[u].x - a) * i + (s = e[u].y - o) * s : Math.abs(e[u] - a)) < l && (l = i, c = u);
                return c = !n || l <= n ? e[c] : t, r || c === t || Ne(t) ? c : c + tn(t)
            } : cn(e))
        }, dn = function (e, t, n, r) {
            return Jt(Xe(e) ? !t : !0 === n ? !!(n = 0) : !r, (function () {
                return Xe(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
            }))
        }, pn = function (e, t, n) {
            return Jt(n, (function (n) {
                return e[~~t(n)]
            }))
        }, fn = function (e) {
            for (var t, n, r, i, s = 0, a = ""; ~(t = e.indexOf("random(", s));) r = e.indexOf(")", t), i = "[" === e.charAt(t + 7), n = e.substr(t + 7, r - t - 7).match(i ? We : He), a += e.substr(s, t - s) + dn(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), s = r + 1;
            return a + e.substr(s, e.length - s)
        }, hn = function (e, t, n, r, i) {
            var s = t - e, a = r - n;
            return Jt(i, (function (t) {
                return n + ((t - e) / s * a || 0)
            }))
        }, mn = function (e, t, n) {
            var r, i, s, a = e.labels, o = ke;
            for (r in a) (i = a[r] - t) < 0 == !!n && i && o > (i = Math.abs(i)) && (s = r, o = i);
            return s
        }, vn = function (e, t, n) {
            var r, i, s, a = e.vars, o = a[t], l = ue, c = e._ctx;
            if (o) return r = a[t + "Params"], i = a.callbackScope || e, n && ot.length && xt(), c && (ue = c), s = r ? o.apply(i, r) : o.call(i), ue = l, s
        }, gn = function (e) {
            return Lt(e), e.scrollTrigger && e.scrollTrigger.kill(!!ce), e.progress() < 1 && vn(e, "onInterrupt"), e
        }, yn = [], _n = function (e) {
            if (qe() && e) {
                var t = (e = !e.name && e.default || e).name, n = Ie(e), r = t && !n && e.init ? function () {
                    this._props = []
                } : e, i = {init: nt, render: ur, add: Wn, kill: pr, modifier: dr, rawVars: 0}, s = {targetTest: 0, get: 0, getSetter: ar, aliases: {}, register: 0};
                if (Pn(), e !== r) {
                    if (ct[t]) return;
                    Ct(r, Ct(At(e, i), s)), Et(r.prototype, Et(i, At(e, s))), ct[r.prop = t] = r, e.targetTest && (pt.push(r), at[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                tt(t, r), e.register && e.register(Mr, r, mr)
            } else e && yn.push(e)
        }, wn = 255, bn = {
            aqua: [0, wn, wn],
            lime: [0, wn, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, wn],
            navy: [0, 0, 128],
            white: [wn, wn, wn],
            olive: [128, 128, 0],
            yellow: [wn, wn, 0],
            orange: [wn, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [wn, 0, 0],
            pink: [wn, 192, 203],
            cyan: [0, wn, wn],
            transparent: [wn, wn, wn, 0]
        }, xn = function (e, t, n) {
            return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * wn + .5 | 0
        }, Tn = function (e, t, n) {
            var r, i, s, a, o, l, c, u, d, p, f = e ? Ne(e) ? [e >> 16, e >> 8 & wn, e & wn] : 0 : bn.black;
            if (!f) {
                if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), bn[e]) f = bn[e]; else if ("#" === e.charAt(0)) {
                    if (e.length < 6 && (r = e.charAt(1), i = e.charAt(2), s = e.charAt(3), e = "#" + r + r + i + i + s + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(f = parseInt(e.substr(1, 6), 16)) >> 16, f >> 8 & wn, f & wn, parseInt(e.substr(7), 16) / 255];
                    f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & wn, e & wn]
                } else if ("hsl" === e.substr(0, 3)) if (f = p = e.match(He), t) {
                    if (~e.indexOf("=")) return f = e.match(Ye), n && f.length < 4 && (f[3] = 1), f
                } else a = +f[0] % 360 / 360, o = +f[1] / 100, r = 2 * (l = +f[2] / 100) - (i = l <= .5 ? l * (o + 1) : l + o - l * o), f.length > 3 && (f[3] *= 1), f[0] = xn(a + 1 / 3, r, i), f[1] = xn(a, r, i), f[2] = xn(a - 1 / 3, r, i); else f = e.match(He) || bn.transparent;
                f = f.map(Number)
            }
            return t && !p && (r = f[0] / wn, i = f[1] / wn, s = f[2] / wn, l = ((c = Math.max(r, i, s)) + (u = Math.min(r, i, s))) / 2, c === u ? a = o = 0 : (d = c - u, o = l > .5 ? d / (2 - c - u) : d / (c + u), a = c === r ? (i - s) / d + (i < s ? 6 : 0) : c === i ? (s - r) / d + 2 : (r - i) / d + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * l + .5)), n && f.length < 4 && (f[3] = 1), f
        }, Sn = function (e) {
            var t = [], n = [], r = -1;
            return e.split(Cn).forEach((function (e) {
                var i = e.match($e) || [];
                t.push.apply(t, i), n.push(r += i.length + 1)
            })), t.c = n, t
        }, kn = function (e, t, n) {
            var r, i, s, a, o = "", l = (e + o).match(Cn), c = t ? "hsla(" : "rgba(", u = 0;
            if (!l) return e;
            if (l = l.map((function (e) {
                return (e = Tn(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            })), n && (s = Sn(e), (r = n.c).join(o) !== s.c.join(o))) for (a = (i = e.replace(Cn, "1").split($e)).length - 1; u < a; u++) o += i[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : n).shift());
            if (!i) for (a = (i = e.split(Cn)).length - 1; u < a; u++) o += i[u] + l[u];
            return o + i[a]
        }, Cn = function () {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in bn) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(), En = /hsl[a]?\(/, Mn = function (e) {
            var t, n = e.join(" ");
            if (Cn.lastIndex = 0, Cn.test(n)) return t = En.test(n), e[1] = kn(e[1], t), e[0] = kn(e[0], t, Sn(e[1])), !0
        }, An = function () {
            var e, t, n, r, i, s, a = Date.now, o = 500, l = 33, c = a(), u = c, d = 1e3 / 240, p = d, f = [], h = function n(h) {
                var m, v, g, y, _ = a() - u, w = !0 === h;
                if (_ > o && (c += _ - l), ((m = (g = (u += _) - c) - p) > 0 || w) && (y = ++r.frame, i = g - 1e3 * r.time, r.time = g /= 1e3, p += m + (m >= d ? 4 : d - m), v = 1), w || (e = t(n)), v) for (s = 0; s < f.length; s++) f[s](g, i, y, h)
            };
            return r = {
                time: 0, frame: 0, tick: function () {
                    h(!0)
                }, deltaRatio: function (e) {
                    return i / (1e3 / (e || 60))
                }, wake: function () {
                    me && (!fe && qe() && (pe = fe = window, he = pe.document || {}, Ke.gsap = Mr, (pe.gsapVersions || (pe.gsapVersions = [])).push(Mr.version), Ze(Qe || pe.GreenSockGlobals || !pe.gsap && pe || {}), n = pe.requestAnimationFrame, yn.forEach(_n)), e && r.sleep(), t = n || function (e) {
                        return setTimeout(e, p - 1e3 * r.time + 1 | 0)
                    }, ye = 1, h(2))
                }, sleep: function () {
                    (n ? pe.cancelAnimationFrame : clearTimeout)(e), ye = 0, t = nt
                }, lagSmoothing: function (e, t) {
                    o = e || 1 / 0, l = Math.min(t || 33, o)
                }, fps: function (e) {
                    d = 1e3 / (e || 240), p = 1e3 * r.time + d
                }, add: function (e, t, n) {
                    var i = t ? function (t, n, s, a) {
                        e(t, n, s, a), r.remove(i)
                    } : e;
                    return r.remove(e), f[n ? "unshift" : "push"](i), Pn(), i
                }, remove: function (e, t) {
                    ~(t = f.indexOf(e)) && f.splice(t, 1) && s >= t && s--
                }, _listeners: f
            }
        }(), Pn = function () {
            return !ye && An.wake()
        }, On = {}, Dn = /^[\d.\-M][\d.\-,\s]/, Ln = /["']/g, In = function (e) {
            for (var t, n, r, i = {}, s = e.substr(1, e.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++) n = s[o], t = o !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), i[a] = isNaN(r) ? r.replace(Ln, "").trim() : +r, a = n.substr(t + 1).trim();
            return i
        }, Nn = function (e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        }, zn = function e(t, n) {
            for (var r, i = t._first; i;) i instanceof Yn ? e(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? e(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        }, Rn = function (e, t) {
            return e && (Ie(e) ? e : On[e] || function (e) {
                var t, n, r, i, s = (e + "").split("("), a = On[s[0]];
                return a && s.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [In(s[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", n), t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)).split(",").map(St)) : On._CE && Dn.test(e) ? On._CE("", e) : a
            }(e)) || t
        }, jn = function (e, t, n, r) {
            void 0 === n && (n = function (e) {
                return 1 - t(1 - e)
            }), void 0 === r && (r = function (e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            });
            var i, s = {easeIn: t, easeOut: n, easeInOut: r};
            return gt(e, (function (e) {
                for (var t in On[e] = Ke[e] = s, On[i = e.toLowerCase()] = n, s) On[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = On[e + "." + t] = s[t]
            })), s
        }, qn = function (e) {
            return function (t) {
                return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
            }
        }, Fn = function e(t, n, r) {
            var i = n >= 1 ? n : 1, s = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), a = s / Ee * (Math.asin(1 / i) || 0), o = function (e) {
                return 1 === e ? 1 : i * Math.pow(2, -10 * e) * De((e - a) * s) + 1
            }, l = "out" === t ? o : "in" === t ? function (e) {
                return 1 - o(1 - e)
            } : qn(o);
            return s = Ee / s, l.config = function (n, r) {
                return e(t, n, r)
            }, l
        }, Bn = function e(t, n) {
            void 0 === n && (n = 1.70158);
            var r = function (e) {
                return e ? --e * e * ((n + 1) * e + n) + 1 : 0
            }, i = "out" === t ? r : "in" === t ? function (e) {
                return 1 - r(1 - e)
            } : qn(r);
            return i.config = function (n) {
                return e(t, n)
            }, i
        };
        gt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (e, t) {
            var n = t < 5 ? t + 1 : t;
            jn(e + ",Power" + (n - 1), t ? function (e) {
                return Math.pow(e, n)
            } : function (e) {
                return e
            }, (function (e) {
                return 1 - Math.pow(1 - e, n)
            }), (function (e) {
                return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
            }))
        })), On.Linear.easeNone = On.none = On.Linear.easeIn, jn("Elastic", Fn("in"), Fn("out"), Fn()), _e = 7.5625, be = 1 / (we = 2.75), jn("Bounce", (function (e) {
            return 1 - xe(1 - e)
        }), xe = function (e) {
            return e < be ? _e * e * e : e < .7272727272727273 ? _e * Math.pow(e - 1.5 / we, 2) + .75 : e < .9090909090909092 ? _e * (e -= 2.25 / we) * e + .9375 : _e * Math.pow(e - 2.625 / we, 2) + .984375
        }), jn("Expo", (function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
        })), jn("Circ", (function (e) {
            return -(Pe(1 - e * e) - 1)
        })), jn("Sine", (function (e) {
            return 1 === e ? 1 : 1 - Oe(e * Me)
        })), jn("Back", Bn("in"), Bn("out"), Bn()), On.SteppedEase = On.steps = Ke.SteppedEase = {
            config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e, r = e + (t ? 0 : 1), i = t ? 1 : 0;
                return function (e) {
                    return ((r * en(0, .99999999, e) | 0) + i) * n
                }
            }
        }, Se.ease = On["quad.out"], gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (e) {
            return ft += e + "," + e + "Params,"
        }));
        var Xn = function (e, t) {
            this.id = Ae++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : vt, this.set = t ? t.getSetter : ar
        }, Hn = function () {
            function e(e) {
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Wt(this, +e.duration, 1, 1), this.data = e.data, ue && (this._ctx = ue, ue.data.push(this)), ye || An.wake()
            }

            var t = e.prototype;
            return t.delay = function (e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function (e) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function (e) {
                return arguments.length ? (this._dirty = 0, Wt(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function (e, t) {
                if (Pn(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Bt(this, e), !n._dp || n.parent || Xt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ht(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Ce || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Tt(this, e, t)), this
            }, t.time = function (e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Rt(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function (e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, t.progress = function (e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Rt(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, t.iteration = function (e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? jt(this._tTime, n) + 1 : 1
            }, t.timeScale = function (e, t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var n = this.parent && this._ts ? qt(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(en(-Math.abs(this._delay), this._tDur, n), !1 !== t), Ft(this), function (e) {
                    for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                    return e
                }(this)
            }, t.paused = function (e) {
                return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ce && (this._tTime -= Ce)))), this) : this._ps
            }, t.startTime = function (e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return t && (t._sort || !this.parent) && Ht(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function (e) {
                return this._start + (je(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qt(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.revert = function (e) {
                void 0 === e && (e = st);
                var t = ce;
                return ce = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), ce = t, this
            }, t.globalTime = function (e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
                return !this.parent && this._sat ? this._sat.globalTime(e) : n
            }, t.repeat = function (e) {
                return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ut(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, t.repeatDelay = function (e) {
                if (arguments.length) {
                    var t = this._time;
                    return this._rDelay = e, Ut(this), t ? this.time(t) : this
                }
                return this._rDelay
            }, t.yoyo = function (e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function (e, t) {
                return this.totalTime(Qt(this, e), je(t))
            }, t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, je(t))
            }, t.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function () {
                return this.paused(!1)
            }, t.reversed = function (e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
            }, t.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, t.isActive = function () {
                var e, t = this.parent || this._dp, n = this._start;
                return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - Ce))
            }, t.eventCallback = function (e, t, n) {
                var r = this.vars;
                return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
            }, t.then = function (e) {
                var t = this;
                return new Promise((function (n) {
                    var r = Ie(e) ? e : kt, i = function () {
                        var e = t.then;
                        t.then = null, Ie(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), t.then = e
                    };
                    t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
                }))
            }, t.kill = function () {
                gn(this)
            }, e
        }();
        Ct(Hn.prototype, {_time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1});
        var Yn = function (e) {
            function t(t, n) {
                var r;
                return void 0 === t && (t = {}), (r = e.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = je(t.sortChildren), de && Ht(t.parent || de, ae(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Yt(ae(r), t.scrollTrigger), r
            }

            oe(t, e);
            var n = t.prototype;
            return n.to = function (e, t, n) {
                return Zt(0, arguments, this), this
            }, n.from = function (e, t, n) {
                return Zt(1, arguments, this), this
            }, n.fromTo = function (e, t, n, r) {
                return Zt(2, arguments, this), this
            }, n.set = function (e, t, n) {
                return t.duration = 0, t.parent = this, Pt(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new tr(e, t, Qt(this, n), 1), this
            }, n.call = function (e, t, n) {
                return Ht(this, tr.delayedCall(0, e, t), n)
            }, n.staggerTo = function (e, t, n, r, i, s, a) {
                return n.duration = t, n.stagger = n.stagger || r, n.onComplete = s, n.onCompleteParams = a, n.parent = this, new tr(e, n, Qt(this, i)), this
            }, n.staggerFrom = function (e, t, n, r, i, s, a) {
                return n.runBackwards = 1, Pt(n).immediateRender = je(n.immediateRender), this.staggerTo(e, t, n, r, i, s, a)
            }, n.staggerFromTo = function (e, t, n, r, i, s, a, o) {
                return r.startAt = n, Pt(r).immediateRender = je(r.immediateRender), this.staggerTo(e, t, r, i, s, a, o)
            }, n.render = function (e, t, n) {
                var r, i, s, a, o, l, c, u, d, p, f, h, m = this._time, v = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, y = e <= 0 ? 0 : _t(e), _ = this._zTime < 0 != e < 0 && (this._initted || !g);
                if (this !== de && y > v && e >= 0 && (y = v), y !== this._tTime || n || _) {
                    if (m !== this._time && g && (y += this._time - m, e += this._time - m), r = y, d = this._start, l = !(u = this._ts), _ && (g || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                        if (f = this._yoyo, o = g + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * o + e, t, n);
                        if (r = _t(y % o), y === v ? (a = this._repeat, r = g) : ((a = ~~(y / o)) && a === y / o && (r = g, a--), r > g && (r = g)), p = jt(this._tTime, o), !m && this._tTime && p !== a && this._tTime - p * o - this._dur <= 0 && (p = a), f && 1 & a && (r = g - r, h = 1), a !== p && !this._lock) {
                            var w = f && 1 & p, b = w === (f && 1 & a);
                            if (a < p && (w = !w), m = w ? 0 : y % g ? g : y, this._lock = 1, this.render(m || (h ? 0 : _t(a * o)), t, !g)._lock = 0, this._tTime = y, !t && this.parent && vn(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (g = this._dur, v = this._tDur, b && (this._lock = 2, m = w ? g : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                            zn(this, h)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (e, t, n) {
                        var r;
                        if (n > t) for (r = e._first; r && r._start <= n;) {
                            if ("isPause" === r.data && r._start > t) return r;
                            r = r._next
                        } else for (r = e._last; r && r._start >= n;) {
                            if ("isPause" === r.data && r._start < t) return r;
                            r = r._prev
                        }
                    }(this, _t(m), _t(r)), c && (y -= r - (r = c._start))), this._tTime = y, this._time = r, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, m = 0), !m && r && !t && !a && (vn(this, "onStart"), this._tTime !== y)) return this;
                    if (r >= m && e >= 0) for (i = this._first; i;) {
                        if (s = i._next, (i._act || r >= i._start) && i._ts && c !== i) {
                            if (i.parent !== this) return this.render(e, t, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n), r !== this._time || !this._ts && !l) {
                                c = 0, s && (y += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var x = e < 0 ? e : r; i;) {
                            if (s = i._prev, (i._act || x <= i._end) && i._ts && c !== i) {
                                if (i.parent !== this) return this.render(e, t, n);
                                if (i.render(i._ts > 0 ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, t, n || ce && (i._initted || i._startAt)), r !== this._time || !this._ts && !l) {
                                    c = 0, s && (y += this._zTime = x ? -1e-8 : Ce);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                    if (c && !t && (this.pause(), c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1, this._ts)) return this._start = d, Ft(this), this.render(e, t, n);
                    this._onUpdate && !t && vn(this, "onUpdate", !0), (y === v && this._tTime >= this.totalDuration() || !y && m) && (d !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !g) && (y === v && this._ts > 0 || !y && this._ts < 0) && Lt(this, 1), t || e < 0 && !m || !y && !m && v || (vn(this, y === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, n.add = function (e, t) {
                var n = this;
                if (Ne(t) || (t = Qt(this, t, e)), !(e instanceof Hn)) {
                    if (Xe(e)) return e.forEach((function (e) {
                        return n.add(e, t)
                    })), this;
                    if (Le(e)) return this.addLabel(e, t);
                    if (!Ie(e)) return this;
                    e = tr.delayedCall(0, e)
                }
                return this !== e ? Ht(this, e, t) : this
            }, n.getChildren = function (e, t, n, r) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -ke);
                for (var i = [], s = this._first; s;) s._start >= r && (s instanceof tr ? t && i.push(s) : (n && i.push(s), e && i.push.apply(i, s.getChildren(!0, t, n)))), s = s._next;
                return i
            }, n.getById = function (e) {
                for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n]
            }, n.remove = function (e) {
                return Le(e) ? this.removeLabel(e) : Ie(e) ? this.killTweensOf(e) : (Dt(this, e), e === this._recent && (this._recent = this._last), It(this))
            }, n.totalTime = function (t, n) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _t(An.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
            }, n.addLabel = function (e, t) {
                return this.labels[e] = Qt(this, t), this
            }, n.removeLabel = function (e) {
                return delete this.labels[e], this
            }, n.addPause = function (e, t, n) {
                var r = tr.delayedCall(0, t || nt, n);
                return r.data = "isPause", this._hasPause = 1, Ht(this, r, Qt(this, e))
            }, n.removePause = function (e) {
                var t = this._first;
                for (e = Qt(this, e); t;) t._start === e && "isPause" === t.data && Lt(t), t = t._next
            }, n.killTweensOf = function (e, t, n) {
                for (var r = this.getTweensOf(e, n), i = r.length; i--;) $n !== r[i] && r[i].kill(e, t);
                return this
            }, n.getTweensOf = function (e, t) {
                for (var n, r = [], i = sn(e), s = this._first, a = Ne(t); s;) s instanceof tr ? bt(s._targets, i) && (a ? (!$n || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && r.push(s) : (n = s.getTweensOf(i, t)).length && r.push.apply(r, n), s = s._next;
                return r
            }, n.tweenTo = function (e, t) {
                t = t || {};
                var n, r = this, i = Qt(r, e), s = t, a = s.startAt, o = s.onStart, l = s.onStartParams, c = s.immediateRender, u = tr.to(r, Ct({
                    ease: t.ease || "none", lazy: !1, immediateRender: !1, time: i, overwrite: "auto", duration: t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || Ce, onStart: function () {
                        if (r.pause(), !n) {
                            var e = t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                            u._dur !== e && Wt(u, e, 0, 1).render(u._time, !0, !0), n = 1
                        }
                        o && o.apply(u, l || [])
                    }
                }, t));
                return c ? u.render(0) : u
            }, n.tweenFromTo = function (e, t, n) {
                return this.tweenTo(t, Ct({startAt: {time: Qt(this, e)}}, n))
            }, n.recent = function () {
                return this._recent
            }, n.nextLabel = function (e) {
                return void 0 === e && (e = this._time), mn(this, Qt(this, e))
            }, n.previousLabel = function (e) {
                return void 0 === e && (e = this._time), mn(this, Qt(this, e), 1)
            }, n.currentLabel = function (e) {
                return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Ce)
            }, n.shiftChildren = function (e, t, n) {
                void 0 === n && (n = 0);
                for (var r, i = this._first, s = this.labels; i;) i._start >= n && (i._start += e, i._end += e), i = i._next;
                if (t) for (r in s) s[r] >= n && (s[r] += e);
                return It(this)
            }, n.invalidate = function (t) {
                var n = this._first;
                for (this._lock = 0; n;) n.invalidate(t), n = n._next;
                return e.prototype.invalidate.call(this, t)
            }, n.clear = function (e) {
                void 0 === e && (e = !0);
                for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
                return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), It(this)
            }, n.totalDuration = function (e) {
                var t, n, r, i = 0, s = this, a = s._last, o = ke;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
                if (s._dirty) {
                    for (r = s.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (n = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Ht(s, a, n - a._delay, 1)._lock = 0) : o = n, n < 0 && a._ts && (i -= n, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += n / s._ts, s._time -= n, s._tTime -= n), s.shiftChildren(-n, !1, -Infinity), o = 0), a._end > i && a._ts && (i = a._end), a = t;
                    Wt(s, s === de && s._time > i ? s._time : i, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, t.updateRoot = function (e) {
                if (de._ts && (Tt(de, qt(e, de)), ve = An.frame), An.frame >= dt) {
                    dt += Te.autoSleep || 120;
                    var t = de._first;
                    if ((!t || !t._ts) && Te.autoSleep && An._listeners.length < 2) {
                        for (; t && !t._ts;) t = t._next;
                        t || An.sleep()
                    }
                }
            }, t
        }(Hn);
        Ct(Yn.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
        var $n, Vn, Gn = function (e, t, n, r, i, s, a) {
            var o, l, c, u, d, p, f, h, m = new mr(this._pt, e, t, 0, 1, cr, null, i), v = 0, g = 0;
            for (m.b = n, m.e = r, n += "", (f = ~(r += "").indexOf("random(")) && (r = fn(r)), s && (s(h = [n, r], e, t), n = h[0], r = h[1]), l = n.match(Ve) || []; o = Ve.exec(r);) u = o[0], d = r.substring(v, o.index), c ? c = (c + 1) % 5 : "rgba(" === d.substr(-5) && (c = 1), u !== l[g++] && (p = parseFloat(l[g - 1]) || 0, m._pt = {
                _next: m._pt,
                p: d || 1 === g ? d : ",",
                s: p,
                c: "=" === u.charAt(1) ? wt(p, u) - p : parseFloat(u) - p,
                m: c && c < 4 ? Math.round : 0
            }, v = Ve.lastIndex);
            return m.c = v < r.length ? r.substring(v, r.length) : "", m.fp = a, (Ge.test(r) || f) && (m.e = 0), this._pt = m, m
        }, Wn = function (e, t, n, r, i, s, a, o, l, c) {
            Ie(r) && (r = r(i || 0, e, s));
            var u, d = e[t], p = "get" !== n ? n : Ie(d) ? l ? e[t.indexOf("set") || !Ie(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d, f = Ie(d) ? l ? ir : rr : nr;
            if (Le(r) && (~r.indexOf("random(") && (r = fn(r)), "=" === r.charAt(1) && ((u = wt(p, r) + (tn(p) || 0)) || 0 === u) && (r = u)), !c || p !== r || Vn) return isNaN(p * r) || "" === r ? (!d && !(t in e) && Je(t, r), Gn.call(this, e, t, p, r, f, o || Te.stringFilter, l)) : (u = new mr(this._pt, e, t, +p || 0, r - (p || 0), "boolean" == typeof d ? lr : or, 0, f), l && (u.fp = l), a && u.modifier(a, this, e), this._pt = u)
        }, Un = function (e, t, n, r, i, s) {
            var a, o, l, c;
            if (ct[e] && !1 !== (a = new ct[e]).init(i, a.rawVars ? t[e] : function (e, t, n, r, i) {
                if (Ie(e) && (e = Zn(e, i, t, n, r)), !Re(e) || e.style && e.nodeType || Xe(e) || Be(e)) return Le(e) ? Zn(e, i, t, n, r) : e;
                var s, a = {};
                for (s in e) a[s] = Zn(e[s], i, t, n, r);
                return a
            }(t[e], r, i, s, n), n, r, s) && (n._pt = o = new mr(n._pt, i, e, 0, 1, a.render, a, 0, a.priority), n !== ge)) for (l = n._ptLookup[n._targets.indexOf(i)], c = a._props.length; c--;) l[a._props[c]] = o;
            return a
        }, Kn = function e(t, n, r) {
            var i, s, a, o, l, c, u, d, p, f, h, m, v, g = t.vars, y = g.ease, _ = g.startAt, w = g.immediateRender, b = g.lazy, x = g.onUpdate, T = g.runBackwards, S = g.yoyoEase, k = g.keyframes, C = g.autoRevert, E = t._dur, M = t._startAt, A = t._targets, P = t.parent, O = P && "nested" === P.data ? P.vars.targets : A, D = "auto" === t._overwrite && !le, L = t.timeline;
            if (L && (!k || !y) && (y = "none"), t._ease = Rn(y, Se.ease), t._yEase = S ? Nn(Rn(!0 === S ? y : S, Se.ease)) : 0, S && t._yoyo && !t._repeat && (S = t._yEase, t._yEase = t._ease, t._ease = S), t._from = !L && !!g.runBackwards, !L || k && !g.stagger) {
                if (m = (d = A[0] ? mt(A[0]).harness : 0) && g[d.prop], i = At(g, at), M && (M._zTime < 0 && M.progress(1), n < 0 && T && w && !C ? M.render(-1, !0) : M.revert(T && E ? it : rt), M._lazy = 0), _) {
                    if (Lt(t._startAt = tr.set(A, Ct({
                        data: "isStart", overwrite: !1, parent: P, immediateRender: !0, lazy: !M && je(b), startAt: null, delay: 0, onUpdate: x && function () {
                            return vn(t, "onUpdate")
                        }, stagger: 0
                    }, _))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (ce || !w && !C) && t._startAt.revert(it), w && E && n <= 0 && r <= 0) return void (n && (t._zTime = n))
                } else if (T && E && !M) if (n && (w = !1), a = Ct({overwrite: !1, data: "isFromStart", lazy: w && !M && je(b), immediateRender: w, stagger: 0, parent: P}, i), m && (a[d.prop] = m), Lt(t._startAt = tr.set(A, a)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (ce ? t._startAt.revert(it) : t._startAt.render(-1, !0)), t._zTime = n, w) {
                    if (!n) return
                } else e(t._startAt, Ce, Ce);
                for (t._pt = t._ptCache = 0, b = E && je(b) || b && !E, s = 0; s < A.length; s++) {
                    if (u = (l = A[s])._gsap || ht(A)[s]._gsap, t._ptLookup[s] = f = {}, lt[u.id] && ot.length && xt(), h = O === A ? s : O.indexOf(l), d && !1 !== (p = new d).init(l, m || i, t, h, O) && (t._pt = o = new mr(t._pt, l, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function (e) {
                        f[e] = o
                    })), p.priority && (c = 1)), !d || m) for (a in i) ct[a] && (p = Un(a, i, t, h, l, O)) ? p.priority && (c = 1) : f[a] = o = Wn.call(t, l, a, "get", i[a], h, O, 0, g.stringFilter);
                    t._op && t._op[s] && t.kill(l, t._op[s]), D && t._pt && ($n = t, de.killTweensOf(l, f, t.globalTime(n)), v = !t.parent, $n = 0), t._pt && b && (lt[u.id] = 1)
                }
                c && hr(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = x, t._initted = (!t._op || t._pt) && !v, k && n <= 0 && L.render(ke, !0, !0)
        }, Qn = function (e, t, n, r) {
            var i, s, a = t.ease || r || "power1.inOut";
            if (Xe(t)) s = n[e] || (n[e] = []), t.forEach((function (e, n) {
                return s.push({t: n / (t.length - 1) * 100, v: e, e: a})
            })); else for (i in t) s = n[i] || (n[i] = []), "ease" === i || s.push({t: parseFloat(e), v: t[i], e: a})
        }, Zn = function (e, t, n, r, i) {
            return Ie(e) ? e.call(t, n, r, i) : Le(e) && ~e.indexOf("random(") ? fn(e) : e
        }, Jn = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", er = {};
        gt(Jn + ",id,stagger,delay,duration,paused,scrollTrigger", (function (e) {
            return er[e] = 1
        }));
        var tr = function (e) {
            function t(t, n, r, i) {
                var s;
                "number" == typeof n && (r.duration = n, n = r, r = null);
                var a, o, l, c, u, d, p, f, h = (s = e.call(this, i ? n : Pt(n)) || this).vars, m = h.duration, v = h.delay, g = h.immediateRender, y = h.stagger, _ = h.overwrite, w = h.keyframes, b = h.defaults, x = h.scrollTrigger, T = h.yoyoEase, S = n.parent || de, k = (Xe(t) || Be(t) ? Ne(t[0]) : "length" in n) ? [t] : sn(t);
                if (s._targets = k.length ? ht(k) : et("GSAP target " + t + " not found. https://gsap.com", !Te.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = _, w || y || Fe(m) || Fe(v)) {
                    if (n = s.vars, (a = s.timeline = new Yn({data: "nested", defaults: b || {}, targets: S && "nested" === S.data ? S.vars.targets : k})).kill(), a.parent = a._dp = ae(s), a._start = 0, y || Fe(m) || Fe(v)) {
                        if (c = k.length, p = y && ln(y), Re(y)) for (u in y) ~Jn.indexOf(u) && (f || (f = {}), f[u] = y[u]);
                        for (o = 0; o < c; o++) (l = At(n, er)).stagger = 0, T && (l.yoyoEase = T), f && Et(l, f), d = k[o], l.duration = +Zn(m, ae(s), o, d, k), l.delay = (+Zn(v, ae(s), o, d, k) || 0) - s._delay, !y && 1 === c && l.delay && (s._delay = v = l.delay, s._start += v, l.delay = 0), a.to(d, l, p ? p(o, d, k) : 0), a._ease = On.none;
                        a.duration() ? m = v = 0 : s.timeline = 0
                    } else if (w) {
                        Pt(Ct(a.vars.defaults, {ease: "none"})), a._ease = Rn(w.ease || n.ease || "none");
                        var C, E, M, A = 0;
                        if (Xe(w)) w.forEach((function (e) {
                            return a.to(k, e, ">")
                        })), a.duration(); else {
                            for (u in l = {}, w) "ease" === u || "easeEach" === u || Qn(u, w[u], l, w.easeEach);
                            for (u in l) for (C = l[u].sort((function (e, t) {
                                return e.t - t.t
                            })), A = 0, o = 0; o < C.length; o++) (M = {ease: (E = C[o]).e, duration: (E.t - (o ? C[o - 1].t : 0)) / 100 * m})[u] = E.v, a.to(k, M, A), A += M.duration;
                            a.duration() < m && a.to({}, {duration: m - a.duration()})
                        }
                    }
                    m || s.duration(m = a.duration())
                } else s.timeline = 0;
                return !0 !== _ || le || ($n = ae(s), de.killTweensOf(k), $n = 0), Ht(S, ae(s), r), n.reversed && s.reverse(), n.paused && s.paused(!0), (g || !m && !w && s._start === _t(S._time) && je(g) && zt(ae(s)) && "nested" !== S.data) && (s._tTime = -1e-8, s.render(Math.max(0, -v) || 0)), x && Yt(ae(s), x), s
            }

            oe(t, e);
            var n = t.prototype;
            return n.render = function (e, t, n) {
                var r, i, s, a, o, l, c, u, d, p = this._time, f = this._tDur, h = this._dur, m = e < 0, v = e > f - Ce && !m ? f : e < Ce ? 0 : e;
                if (h) {
                    if (v !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                        if (r = v, u = this.timeline, this._repeat) {
                            if (a = h + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + e, t, n);
                            if (r = _t(v % a), v === f ? (s = this._repeat, r = h) : ((s = ~~(v / a)) && s === _t(v / a) && (r = h, s--), r > h && (r = h)), (l = this._yoyo && 1 & s) && (d = this._yEase, r = h - r), o = jt(this._tTime, a), r === p && !n && this._initted && s === o) return this._tTime = v, this;
                            s !== o && (u && this._yEase && zn(u, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== h && this._initted && (this._lock = n = 1, this.render(_t(a * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if ($t(this, m ? e : r, n, t, v)) return this._tTime = 0, this;
                            if (!(p === this._time || n && this.vars.repeatRefresh && s !== o)) return this;
                            if (h !== this._dur) return this.render(e, t, n)
                        }
                        if (this._tTime = v, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(r / h), this._from && (this.ratio = c = 1 - c), r && !p && !t && !s && (vn(this, "onStart"), this._tTime !== v)) return this;
                        for (i = this._pt; i;) i.r(c, i.d), i = i._next;
                        u && u.render(e < 0 ? e : !r && l ? -1e-8 : u._dur * u._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (m && Nt(this, e, 0, n), vn(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !t && this.parent && vn(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && Nt(this, e, 0, !0), (e || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Lt(this, 1), t || m && !p || !(v || p || l) || (vn(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                    }
                } else !function (e, t, n, r) {
                    var i, s, a, o = e.ratio, l = t < 0 || !t && (!e._start && Vt(e) && (e._initted || !Gt(e)) || (e._ts < 0 || e._dp._ts < 0) && !Gt(e)) ? 0 : 1, c = e._rDelay, u = 0;
                    if (c && e._repeat && (u = en(0, e._tDur, t), s = jt(u, c), e._yoyo && 1 & s && (l = 1 - l), s !== jt(e._tTime, c) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || ce || r || e._zTime === Ce || !t && e._zTime) {
                        if (!e._initted && $t(e, t, r, n, u)) return;
                        for (a = e._zTime, e._zTime = t || (n ? Ce : 0), n || (n = t && !a), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, i = e._pt; i;) i.r(l, i.d), i = i._next;
                        t < 0 && Nt(e, t, 0, !0), e._onUpdate && !n && vn(e, "onUpdate"), u && e._repeat && !n && e.parent && vn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && Lt(e, 1), n || ce || (vn(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, n);
                return this
            }, n.targets = function () {
                return this._targets
            }, n.invalidate = function (t) {
                return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
            }, n.resetTo = function (e, t, n, r, i) {
                ye || An.wake(), this._ts || this.play();
                var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || Kn(this, s), function (e, t, n, r, i, s, a, o) {
                    var l, c, u, d, p = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                    if (!p) for (p = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length; d--;) {
                        if ((l = u[d][t]) && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                        if (!l) return Vn = 1, e.vars[t] = "+=0", Kn(e, a), Vn = 0, o ? et(t + " not eligible for reset") : 1;
                        p.push(l)
                    }
                    for (d = p.length; d--;) (l = (c = p[d])._pt || c).s = !r && 0 !== r || i ? l.s + (r || 0) + s * l.c : r, l.c = n - l.s, c.e && (c.e = yt(n) + tn(c.e)), c.b && (c.b = l.s + tn(c.b))
                }(this, e, t, n, r, this._ease(s / this._dur), s, i) ? this.resetTo(e, t, n, r, 1) : (Bt(this, 0), this.parent || Ot(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, n.kill = function (e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? gn(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, $n && !0 !== $n.vars.overwrite)._first || gn(this), this.parent && n !== this.timeline.totalDuration() && Wt(this, this._dur * this.timeline._tDur / n, 0, 1), this
                }
                var r, i, s, a, o, l, c, u = this._targets, d = e ? sn(e) : u, p = this._ptLookup, f = this._pt;
                if ((!t || "all" === t) && function (e, t) {
                    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];) ;
                    return n < 0
                }(u, d)) return "all" === t && (this._pt = 0), gn(this);
                for (r = this._op = this._op || [], "all" !== t && (Le(t) && (o = {}, gt(t, (function (e) {
                    return o[e] = 1
                })), t = o), t = function (e, t) {
                    var n, r, i, s, a = e[0] ? mt(e[0]).harness : 0, o = a && a.aliases;
                    if (!o) return t;
                    for (r in n = Et({}, t), o) if (r in n) for (i = (s = o[r].split(",")).length; i--;) n[s[i]] = n[r];
                    return n
                }(u, t)), c = u.length; c--;) if (~d.indexOf(u[c])) for (o in i = p[c], "all" === t ? (r[c] = t, a = i, s = {}) : (s = r[c] = r[c] || {}, a = t), a) (l = i && i[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Dt(this, l, "_pt"), delete i[o]), "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && f && gn(this), this
            }, t.to = function (e, n) {
                return new t(e, n, arguments[2])
            }, t.from = function (e, t) {
                return Zt(1, arguments)
            }, t.delayedCall = function (e, n, r, i) {
                return new t(n, 0, {immediateRender: !1, lazy: !1, overwrite: !1, delay: e, onComplete: n, onReverseComplete: n, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i})
            }, t.fromTo = function (e, t, n) {
                return Zt(2, arguments)
            }, t.set = function (e, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
            }, t.killTweensOf = function (e, t, n) {
                return de.killTweensOf(e, t, n)
            }, t
        }(Hn);
        Ct(tr.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0}), gt("staggerTo,staggerFrom,staggerFromTo", (function (e) {
            tr[e] = function () {
                var t = new Yn, n = nn.call(arguments, 0);
                return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            }
        }));
        var nr = function (e, t, n) {
            return e[t] = n
        }, rr = function (e, t, n) {
            return e[t](n)
        }, ir = function (e, t, n, r) {
            return e[t](r.fp, n)
        }, sr = function (e, t, n) {
            return e.setAttribute(t, n)
        }, ar = function (e, t) {
            return Ie(e[t]) ? rr : ze(e[t]) && e.setAttribute ? sr : nr
        }, or = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        }, lr = function (e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        }, cr = function (e, t) {
            var n = t._pt, r = "";
            if (!e && t.b) r = t.b; else if (1 === e && t.e) r = t.e; else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r, n = n._next;
                r += t.c
            }
            t.set(t.t, t.p, r, t)
        }, ur = function (e, t) {
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        }, dr = function (e, t, n, r) {
            for (var i, s = this._pt; s;) i = s._next, s.p === r && s.modifier(e, t, n), s = i
        }, pr = function (e) {
            for (var t, n, r = this._pt; r;) n = r._next, r.p === e && !r.op || r.op === e ? Dt(this, r, "_pt") : r.dep || (t = 1), r = n;
            return !t
        }, fr = function (e, t, n, r) {
            r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
        }, hr = function (e) {
            for (var t, n, r, i, s = e._pt; s;) {
                for (t = s._next, n = r; n && n.pr > s.pr;) n = n._next;
                (s._prev = n ? n._prev : i) ? s._prev._next = s : r = s, (s._next = n) ? n._prev = s : i = s, s = t
            }
            e._pt = r
        }, mr = function () {
            function e(e, t, n, r, i, s, a, o, l) {
                this.t = t, this.s = r, this.c = i, this.p = n, this.r = s || or, this.d = a || this, this.set = o || nr, this.pr = l || 0, this._next = e, e && (e._prev = this)
            }

            return e.prototype.modifier = function (e, t, n) {
                this.mSet = this.mSet || this.set, this.set = fr, this.m = e, this.mt = n, this.tween = t
            }, e
        }();
        gt(ft + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (e) {
            return at[e] = 1
        })), Ke.TweenMax = Ke.TweenLite = tr, Ke.TimelineLite = Ke.TimelineMax = Yn, de = new Yn({sortChildren: !1, defaults: Se, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0}), Te.stringFilter = Mn;
        var vr = [], gr = {}, yr = [], _r = 0, wr = 0, br = function (e) {
            return (gr[e] || yr).map((function (e) {
                return e()
            }))
        }, xr = function () {
            var e = Date.now(), t = [];
            e - _r > 2 && (br("matchMediaInit"), vr.forEach((function (e) {
                var n, r, i, s, a = e.queries, o = e.conditions;
                for (r in a) (n = pe.matchMedia(a[r]).matches) && (i = 1), n !== o[r] && (o[r] = n, s = 1);
                s && (e.revert(), i && t.push(e))
            })), br("matchMediaRevert"), t.forEach((function (e) {
                return e.onMatch(e, (function (t) {
                    return e.add(null, t)
                }))
            })), _r = e, br("matchMedia"))
        }, Tr = function () {
            function e(e, t) {
                this.selector = t && an(t), this.data = [], this._r = [], this.isReverted = !1, this.id = wr++, e && this.add(e)
            }

            var t = e.prototype;
            return t.add = function (e, t, n) {
                Ie(e) && (n = t, t = e, e = Ie);
                var r = this, i = function () {
                    var e, i = ue, s = r.selector;
                    return i && i !== r && i.data.push(r), n && (r.selector = an(n)), ue = r, e = t.apply(r, arguments), Ie(e) && r._r.push(e), ue = i, r.selector = s, r.isReverted = !1, e
                };
                return r.last = i, e === Ie ? i(r, (function (e) {
                    return r.add(null, e)
                })) : e ? r[e] = i : i
            }, t.ignore = function (e) {
                var t = ue;
                ue = null, e(this), ue = t
            }, t.getTweens = function () {
                var t = [];
                return this.data.forEach((function (n) {
                    return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof tr && !(n.parent && "nested" === n.parent.data) && t.push(n)
                })), t
            }, t.clear = function () {
                this._r.length = this.data.length = 0
            }, t.kill = function (e, t) {
                var n = this;
                if (e ? function () {
                    for (var t, r = n.getTweens(), i = n.data.length; i--;) "isFlip" === (t = n.data[i]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (e) {
                        return r.splice(r.indexOf(e), 1)
                    })));
                    for (r.map((function (e) {
                        return {g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0, t: e}
                    })).sort((function (e, t) {
                        return t.g - e.g || -1 / 0
                    })).forEach((function (t) {
                        return t.t.revert(e)
                    })), i = n.data.length; i--;) (t = n.data[i]) instanceof Yn ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof tr) && t.revert && t.revert(e);
                    n._r.forEach((function (t) {
                        return t(e, n)
                    })), n.isReverted = !0
                }() : this.data.forEach((function (e) {
                    return e.kill && e.kill()
                })), this.clear(), t) for (var r = vr.length; r--;) vr[r].id === this.id && vr.splice(r, 1)
            }, t.revert = function (e) {
                this.kill(e || {})
            }, e
        }(), Sr = function () {
            function e(e) {
                this.contexts = [], this.scope = e
            }

            var t = e.prototype;
            return t.add = function (e, t, n) {
                Re(e) || (e = {matches: e});
                var r, i, s, a = new Tr(0, n || this.scope), o = a.conditions = {};
                for (i in ue && !a.selector && (a.selector = ue.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === i ? s = 1 : (r = pe.matchMedia(e[i])) && (vr.indexOf(a) < 0 && vr.push(a), (o[i] = r.matches) && (s = 1), r.addListener ? r.addListener(xr) : r.addEventListener("change", xr));
                return s && t(a, (function (e) {
                    return a.add(null, e)
                })), this
            }, t.revert = function (e) {
                this.kill(e || {})
            }, t.kill = function (e) {
                this.contexts.forEach((function (t) {
                    return t.kill(e, !0)
                }))
            }, e
        }(), kr = {
            registerPlugin: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                t.forEach((function (e) {
                    return _n(e)
                }))
            }, timeline: function (e) {
                return new Yn(e)
            }, getTweensOf: function (e, t) {
                return de.getTweensOf(e, t)
            }, getProperty: function (e, t, n, r) {
                Le(e) && (e = sn(e)[0]);
                var i = mt(e || {}).get, s = n ? kt : St;
                return "native" === n && (n = ""), e ? t ? s((ct[t] && ct[t].get || i)(e, t, n, r)) : function (t, n, r) {
                    return s((ct[t] && ct[t].get || i)(e, t, n, r))
                } : e
            }, quickSetter: function (e, t, n) {
                if ((e = sn(e)).length > 1) {
                    var r = e.map((function (e) {
                        return Mr.quickSetter(e, t, n)
                    })), i = r.length;
                    return function (e) {
                        for (var t = i; t--;) r[t](e)
                    }
                }
                e = e[0] || {};
                var s = ct[t], a = mt(e), o = a.harness && (a.harness.aliases || {})[t] || t, l = s ? function (t) {
                    var r = new s;
                    ge._pt = 0, r.init(e, n ? t + n : t, ge, 0, [e]), r.render(1, r), ge._pt && ur(1, ge)
                } : a.set(e, o);
                return s ? l : function (t) {
                    return l(e, o, n ? t + n : t, a, 1)
                }
            }, quickTo: function (e, t, n) {
                var r, i = Mr.to(e, Et(((r = {})[t] = "+=0.1", r.paused = !0, r), n || {})), s = function (e, n, r) {
                    return i.resetTo(t, e, n, r)
                };
                return s.tween = i, s
            }, isTweening: function (e) {
                return de.getTweensOf(e, !0).length > 0
            }, defaults: function (e) {
                return e && e.ease && (e.ease = Rn(e.ease, Se.ease)), Mt(Se, e || {})
            }, config: function (e) {
                return Mt(Te, e || {})
            }, registerEffect: function (e) {
                var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, s = e.extendTimeline;
                (r || "").split(",").forEach((function (e) {
                    return e && !ct[e] && !Ke[e] && et(t + " effect requires " + e + " plugin.")
                })), ut[t] = function (e, t, r) {
                    return n(sn(e), Ct(t || {}, i), r)
                }, s && (Yn.prototype[t] = function (e, n, r) {
                    return this.add(ut[t](e, Re(n) ? n : (r = n) && {}, this), r)
                })
            }, registerEase: function (e, t) {
                On[e] = Rn(t)
            }, parseEase: function (e, t) {
                return arguments.length ? Rn(e, t) : On
            }, getById: function (e) {
                return de.getById(e)
            }, exportRoot: function (e, t) {
                void 0 === e && (e = {});
                var n, r, i = new Yn(e);
                for (i.smoothChildTiming = je(e.smoothChildTiming), de.remove(i), i._dp = 0, i._time = i._tTime = de._time, n = de._first; n;) r = n._next, !t && !n._dur && n instanceof tr && n.vars.onComplete === n._targets[0] || Ht(i, n, n._start - n._delay), n = r;
                return Ht(de, i, 0), i
            }, context: function (e, t) {
                return e ? new Tr(e, t) : ue
            }, matchMedia: function (e) {
                return new Sr(e)
            }, matchMediaRefresh: function () {
                return vr.forEach((function (e) {
                    var t, n, r = e.conditions;
                    for (n in r) r[n] && (r[n] = !1, t = 1);
                    t && e.revert()
                })) || xr()
            }, addEventListener: function (e, t) {
                var n = gr[e] || (gr[e] = []);
                ~n.indexOf(t) || n.push(t)
            }, removeEventListener: function (e, t) {
                var n = gr[e], r = n && n.indexOf(t);
                r >= 0 && n.splice(r, 1)
            }, utils: {
                wrap: function e(t, n, r) {
                    var i = n - t;
                    return Xe(t) ? pn(t, e(0, t.length), n) : Jt(r, (function (e) {
                        return (i + (e - t) % i) % i + t
                    }))
                }, wrapYoyo: function e(t, n, r) {
                    var i = n - t, s = 2 * i;
                    return Xe(t) ? pn(t, e(0, t.length - 1), n) : Jt(r, (function (e) {
                        return t + ((e = (s + (e - t) % s) % s || 0) > i ? s - e : e)
                    }))
                }, distribute: ln, random: dn, snap: un, normalize: function (e, t, n) {
                    return hn(e, t, 0, 1, n)
                }, getUnit: tn, clamp: function (e, t, n) {
                    return Jt(n, (function (n) {
                        return en(e, t, n)
                    }))
                }, splitColor: Tn, toArray: sn, selector: an, mapRange: hn, pipe: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function (e) {
                        return t.reduce((function (e, t) {
                            return t(e)
                        }), e)
                    }
                }, unitize: function (e, t) {
                    return function (n) {
                        return e(parseFloat(n)) + (t || tn(n))
                    }
                }, interpolate: function e(t, n, r, i) {
                    var s = isNaN(t + n) ? 0 : function (e) {
                        return (1 - e) * t + e * n
                    };
                    if (!s) {
                        var a, o, l, c, u, d = Le(t), p = {};
                        if (!0 === r && (i = 1) && (r = null), d) t = {p: t}, n = {p: n}; else if (Xe(t) && !Xe(n)) {
                            for (l = [], c = t.length, u = c - 2, o = 1; o < c; o++) l.push(e(t[o - 1], t[o]));
                            c--, s = function (e) {
                                e *= c;
                                var t = Math.min(u, ~~e);
                                return l[t](e - t)
                            }, r = n
                        } else i || (t = Et(Xe(t) ? [] : {}, t));
                        if (!l) {
                            for (a in n) Wn.call(p, t, a, "get", n[a]);
                            s = function (e) {
                                return ur(e, p) || (d ? t.p : t)
                            }
                        }
                    }
                    return Jt(r, s)
                }, shuffle: on
            }, install: Ze, effects: ut, ticker: An, updateRoot: Yn.updateRoot, plugins: ct, globalTimeline: de, core: {
                PropTween: mr, globals: tt, Tween: tr, Timeline: Yn, Animation: Hn, getCache: mt, _removeLinkedListItem: Dt, reverting: function () {
                    return ce
                }, context: function (e) {
                    return e && ue && (ue.data.push(e), e._ctx = ue), ue
                }, suppressOverwrites: function (e) {
                    return le = e
                }
            }
        };
        gt("to,from,fromTo,delayedCall,set,killTweensOf", (function (e) {
            return kr[e] = tr[e]
        })), An.add(Yn.updateRoot), ge = kr.to({}, {duration: 0});
        var Cr = function (e, t) {
            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
            return n
        }, Er = function (e, t) {
            return {
                name: e, rawVars: 1, init: function (e, n, r) {
                    r._onInit = function (e) {
                        var r, i;
                        if (Le(n) && (r = {}, gt(n, (function (e) {
                            return r[e] = 1
                        })), n = r), t) {
                            for (i in r = {}, n) r[i] = t(n[i]);
                            n = r
                        }
                        !function (e, t) {
                            var n, r, i, s = e._targets;
                            for (n in t) for (r = s.length; r--;) (i = e._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Cr(i, n)), i && i.modifier && i.modifier(t[n], e, s[r], n))
                        }(e, n)
                    }
                }
            }
        }, Mr = kr.registerPlugin({
            name: "attr", init: function (e, t, n, r, i) {
                var s, a, o;
                for (s in this.tween = n, t) o = e.getAttribute(s) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[s], r, i, 0, 0, s)).op = s, a.b = o, this._props.push(s)
            }, render: function (e, t) {
                for (var n = t._pt; n;) ce ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
            }
        }, {
            name: "endArray", init: function (e, t) {
                for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
            }
        }, Er("roundProps", cn), Er("modifiers"), Er("snap", un)) || kr;
        tr.version = Yn.version = Mr.version = "3.12.3", me = 1, qe() && Pn(), On.Power0, On.Power1, On.Power2, On.Power3, On.Power4, On.Linear, On.Quad, On.Cubic, On.Quart, On.Quint, On.Strong, On.Elastic, On.Back, On.SteppedEase, On.Bounce, On.Sine, On.Expo, On.Circ;
        var Ar, Pr, Or, Dr, Lr, Ir, Nr, zr, Rr = {}, jr = 180 / Math.PI, qr = Math.PI / 180, Fr = Math.atan2, Br = /([A-Z])/g, Xr = /(left|right|width|margin|padding|x)/i, Hr = /[\s,\(]\S/, Yr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, $r = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        }, Vr = function (e, t) {
            return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        }, Gr = function (e, t) {
            return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        }, Wr = function (e, t) {
            var n = t.s + t.c * e;
            t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        }, Ur = function (e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t)
        }, Kr = function (e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        }, Qr = function (e, t, n) {
            return e.style[t] = n
        }, Zr = function (e, t, n) {
            return e.style.setProperty(t, n)
        }, Jr = function (e, t, n) {
            return e._gsap[t] = n
        }, ei = function (e, t, n) {
            return e._gsap.scaleX = e._gsap.scaleY = n
        }, ti = function (e, t, n, r, i) {
            var s = e._gsap;
            s.scaleX = s.scaleY = n, s.renderTransform(i, s)
        }, ni = function (e, t, n, r, i) {
            var s = e._gsap;
            s[t] = n, s.renderTransform(i, s)
        }, ri = "transform", ii = ri + "Origin", si = function e(t, n) {
            var r = this, i = this.target, s = i.style, a = i._gsap;
            if (t in Rr && s) {
                if (this.tfm = this.tfm || {}, "transform" === t) return Yr.transform.split(",").forEach((function (t) {
                    return e.call(r, t, n)
                }));
                if (~(t = Yr[t] || t).indexOf(",") ? t.split(",").forEach((function (e) {
                    return r.tfm[e] = Ti(i, e)
                })) : this.tfm[t] = a.x ? a[t] : Ti(i, t), t === ii && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(ri) >= 0) return;
                a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ii, n, "")), t = ri
            }
            (s || n) && this.props.push(t, n, s[t])
        }, ai = function (e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        }, oi = function () {
            var e, t, n = this.props, r = this.target, i = r.style, s = r._gsap;
            for (e = 0; e < n.length; e += 3) n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? i[n[e]] = n[e + 2] : i.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(Br, "-$1").toLowerCase());
            if (this.tfm) {
                for (t in this.tfm) s[t] = this.tfm[t];
                s.svg && (s.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = Nr()) && e.isStart || i[ri] || (ai(i), s.zOrigin && i[ii] && (i[ii] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
            }
        }, li = function (e, t) {
            var n = {target: e, props: [], revert: oi, save: si};
            return e._gsap || Mr.core.getCache(e), t && t.split(",").forEach((function (e) {
                return n.save(e)
            })), n
        }, ci = function (e, t) {
            var n = Pr.createElementNS ? Pr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Pr.createElement(e);
            return n && n.style ? n : Pr.createElement(e)
        }, ui = function e(t, n, r) {
            var i = getComputedStyle(t);
            return i[n] || i.getPropertyValue(n.replace(Br, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, pi(n) || n, 1) || ""
        }, di = "O,Moz,ms,Ms,Webkit".split(","), pi = function (e, t, n) {
            var r = (t || Lr).style, i = 5;
            if (e in r && !n) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(di[i] + e in r);) ;
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? di[i] : "") + e
        }, fi = function () {
            "undefined" != typeof window && window.document && (Ar = window, Pr = Ar.document, Or = Pr.documentElement, Lr = ci("div") || {style: {}}, ci("div"), ri = pi(ri), ii = ri + "Origin", Lr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zr = !!pi("perspective"), Nr = Mr.core.reverting, Dr = 1)
        }, hi = function e(t) {
            var n, r = ci("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, a = this.style.cssText;
            if (Or.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
            } catch (e) {
            } else this._gsapBBox && (n = this._gsapBBox());
            return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), Or.removeChild(r), this.style.cssText = a, n
        }, mi = function (e, t) {
            for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        }, vi = function (e) {
            var t;
            try {
                t = e.getBBox()
            } catch (n) {
                t = hi.call(e, !0)
            }
            return t && (t.width || t.height) || e.getBBox === hi || (t = hi.call(e, !0)), !t || t.width || t.x || t.y ? t : {x: +mi(e, ["x", "cx", "x1"]) || 0, y: +mi(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0}
        }, gi = function (e) {
            return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !vi(e))
        }, yi = function (e, t) {
            if (t) {
                var n, r = e.style;
                t in Rr && t !== ii && (t = ri), r.removeProperty ? ("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty("--" === n ? t : t.replace(Br, "-$1").toLowerCase())) : r.removeAttribute(t)
            }
        }, _i = function (e, t, n, r, i, s) {
            var a = new mr(e._pt, t, n, 0, 1, s ? Kr : Ur);
            return e._pt = a, a.b = r, a.e = i, e._props.push(n), a
        }, wi = {deg: 1, rad: 1, turn: 1}, bi = {grid: 1, flex: 1}, xi = function e(t, n, r, i) {
            var s, a, o, l, c = parseFloat(r) || 0, u = (r + "").trim().substr((c + "").length) || "px", d = Lr.style, p = Xr.test(n), f = "svg" === t.tagName.toLowerCase(), h = (f ? "client" : "offset") + (p ? "Width" : "Height"), m = 100, v = "px" === i, g = "%" === i;
            if (i === u || !c || wi[i] || wi[u]) return c;
            if ("px" !== u && !v && (c = e(t, n, r, "px")), l = t.getCTM && gi(t), (g || "%" === u) && (Rr[n] || ~n.indexOf("adius"))) return s = l ? t.getBBox()[p ? "width" : "height"] : t[h], yt(g ? c / s * m : c / 100 * s);
            if (d[p ? "width" : "height"] = m + (v ? u : i), a = ~n.indexOf("adius") || "em" === i && t.appendChild && !f ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Pr && a.appendChild || (a = Pr.body), (o = a._gsap) && g && o.width && p && o.time === An.time && !o.uncache) return yt(c / o.width * m);
            if (!g || "height" !== n && "width" !== n) (g || "%" === u) && !bi[ui(a, "display")] && (d.position = ui(t, "position")), a === t && (d.position = "static"), a.appendChild(Lr), s = Lr[h], a.removeChild(Lr), d.position = "absolute"; else {
                var y = t.style[n];
                t.style[n] = m + i, s = t[h], y ? t.style[n] = y : yi(t, n)
            }
            return p && g && ((o = mt(a)).time = An.time, o.width = a[h]), yt(v ? s * c / m : s && c ? m / s * c : 0)
        }, Ti = function (e, t, n, r) {
            var i;
            return Dr || fi(), t in Yr && "transform" !== t && ~(t = Yr[t]).indexOf(",") && (t = t.split(",")[0]), Rr[t] && "transform" !== t ? (i = Ii(e, r), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Ni(ui(e, ii)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Ei[t] && Ei[t](e, t, n) || ui(e, t) || vt(e, t) || ("opacity" === t ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? xi(e, t, i, n) + n : i
        }, Si = function (e, t, n, r) {
            if (!n || "none" === n) {
                var i = pi(t, e, 1), s = i && ui(e, i, 1);
                s && s !== n ? (t = i, n = s) : "borderColor" === t && (n = ui(e, "borderTopColor"))
            }
            var a, o, l, c, u, d, p, f, h, m, v, g = new mr(this._pt, e.style, t, 0, 1, cr), y = 0, _ = 0;
            if (g.b = n, g.e = r, n += "", "auto" == (r += "") && (d = e.style[t], e.style[t] = r, r = ui(e, t) || r, d ? e.style[t] = d : yi(e, t)), Mn(a = [n, r]), r = a[1], l = (n = a[0]).match($e) || [], (r.match($e) || []).length) {
                for (; o = $e.exec(r);) p = o[0], h = r.substring(y, o.index), u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1), p !== (d = l[_++] || "") && (c = parseFloat(d) || 0, v = d.substr((c + "").length), "=" === p.charAt(1) && (p = wt(c, p) + v), f = parseFloat(p), m = p.substr((f + "").length), y = $e.lastIndex - m.length, m || (m = m || Te.units[t] || v, y === r.length && (r += m, g.e += m)), v !== m && (c = xi(e, t, d, m) || 0), g._pt = {
                    _next: g._pt,
                    p: h || 1 === _ ? h : ",",
                    s: c,
                    c: f - c,
                    m: u && u < 4 || "zIndex" === t ? Math.round : 0
                });
                g.c = y < r.length ? r.substring(y, r.length) : ""
            } else g.r = "display" === t && "none" === r ? Kr : Ur;
            return Ge.test(r) && (g.e = 0), this._pt = g, g
        }, ki = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, Ci = function (e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
                var n, r, i, s = t.t, a = s.style, o = t.u, l = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", r = 1; else for (i = (o = o.split(",")).length; --i > -1;) n = o[i], Rr[n] && (r = 1, n = "transformOrigin" === n ? ii : ri), yi(s, n);
                r && (yi(s, ri), l && (l.svg && s.removeAttribute("transform"), Ii(s, 1), l.uncache = 1, ai(a)))
            }
        }, Ei = {
            clearProps: function (e, t, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var s = e._pt = new mr(e._pt, t, n, 0, 0, Ci);
                    return s.u = r, s.pr = -10, s.tween = i, e._props.push(n), 1
                }
            }
        }, Mi = [1, 0, 0, 1, 0, 0], Ai = {}, Pi = function (e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        }, Oi = function (e) {
            var t = ui(e, ri);
            return Pi(t) ? Mi : t.substr(7).match(Ye).map(yt)
        }, Di = function (e, t) {
            var n, r, i, s, a = e._gsap || mt(e), o = e.style, l = Oi(e);
            return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Mi : l : (l !== Mi || e.offsetParent || e === Or || a.svg || (i = o.display, o.display = "block", (n = e.parentNode) && e.offsetParent || (s = 1, r = e.nextElementSibling, Or.appendChild(e)), l = Oi(e), i ? o.display = i : yi(e, "display"), s && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Or.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        }, Li = function (e, t, n, r, i, s) {
            var a, o, l, c = e._gsap, u = i || Di(e, !0), d = c.xOrigin || 0, p = c.yOrigin || 0, f = c.xOffset || 0, h = c.yOffset || 0, m = u[0], v = u[1], g = u[2], y = u[3], _ = u[4], w = u[5], b = t.split(" "), x = parseFloat(b[0]) || 0, T = parseFloat(b[1]) || 0;
            n ? u !== Mi && (o = m * y - v * g) && (l = x * (-v / o) + T * (m / o) - (m * w - v * _) / o, x = x * (y / o) + T * (-g / o) + (g * w - y * _) / o, T = l) : (x = (a = vi(e)).x + (~b[0].indexOf("%") ? x / 100 * a.width : x), T = a.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * a.height : T), "xOrigin" in c || !x && !T || (x -= a.x, T -= a.y)), r || !1 !== r && c.smooth ? (_ = x - d, w = T - p, c.xOffset = f + (_ * m + w * g) - _, c.yOffset = h + (_ * v + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!r, c.origin = t, c.originIsAbsolute = !!n, e.style[ii] = "0px 0px", s && (_i(s, c, "xOrigin", d, x), _i(s, c, "yOrigin", p, T), _i(s, c, "xOffset", f, c.xOffset), _i(s, c, "yOffset", h, c.yOffset)), e.setAttribute("data-svg-origin", x + " " + T)
        }, Ii = function (e, t) {
            var n = e._gsap || new Xn(e);
            if ("x" in n && !t && !n.uncache) return n;
            var r, i, s, a, o, l, c, u, d, p, f, h, m, v, g, y, _, w, b, x, T, S, k, C, E, M, A, P, O, D, L, I, N = e.style, z = n.scaleX < 0, R = "px", j = "deg", q = getComputedStyle(e), F = ui(e, ii) || "0";
            return r = i = s = l = c = u = d = p = f = 0, a = o = 1, n.svg = !(!e.getCTM || !gi(e)), q.translate && ("none" === q.translate && "none" === q.scale && "none" === q.rotate || (N[ri] = ("none" !== q.translate ? "translate3d(" + (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") + ("none" !== q.scale ? "scale(" + q.scale.split(" ").join(",") + ") " : "") + ("none" !== q[ri] ? q[ri] : "")), N.scale = N.rotate = N.translate = "none"), v = Di(e, n.svg), n.svg && (n.uncache ? (E = e.getBBox(), F = n.xOrigin - E.x + "px " + (n.yOrigin - E.y) + "px", C = "") : C = !t && e.getAttribute("data-svg-origin"), Li(e, C || F, !!C || n.originIsAbsolute, !1 !== n.smooth, v)), h = n.xOrigin || 0, m = n.yOrigin || 0, v !== Mi && (w = v[0], b = v[1], x = v[2], T = v[3], r = S = v[4], i = k = v[5], 6 === v.length ? (a = Math.sqrt(w * w + b * b), o = Math.sqrt(T * T + x * x), l = w || b ? Fr(b, w) * jr : 0, (d = x || T ? Fr(x, T) * jr + l : 0) && (o *= Math.abs(Math.cos(d * qr))), n.svg && (r -= h - (h * w + m * x), i -= m - (h * b + m * T))) : (I = v[6], D = v[7], A = v[8], P = v[9], O = v[10], L = v[11], r = v[12], i = v[13], s = v[14], c = (g = Fr(I, O)) * jr, g && (C = S * (y = Math.cos(-g)) + A * (_ = Math.sin(-g)), E = k * y + P * _, M = I * y + O * _, A = S * -_ + A * y, P = k * -_ + P * y, O = I * -_ + O * y, L = D * -_ + L * y, S = C, k = E, I = M), u = (g = Fr(-x, O)) * jr, g && (y = Math.cos(-g), L = T * (_ = Math.sin(-g)) + L * y, w = C = w * y - A * _, b = E = b * y - P * _, x = M = x * y - O * _), l = (g = Fr(b, w)) * jr, g && (C = w * (y = Math.cos(g)) + b * (_ = Math.sin(g)), E = S * y + k * _, b = b * y - w * _, k = k * y - S * _, w = C, S = E), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), a = yt(Math.sqrt(w * w + b * b + x * x)), o = yt(Math.sqrt(k * k + I * I)), g = Fr(S, k), d = Math.abs(g) > 2e-4 ? g * jr : 0, f = L ? 1 / (L < 0 ? -L : L) : 0), n.svg && (C = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Pi(ui(e, ri)), C && e.setAttribute("transform", C))), Math.abs(d) > 90 && Math.abs(d) < 270 && (z ? (a *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + R, n.y = i - ((n.yPercent = i && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + R, n.z = s + R, n.scaleX = yt(a), n.scaleY = yt(o), n.rotation = yt(l) + j, n.rotationX = yt(c) + j, n.rotationY = yt(u) + j, n.skewX = d + j, n.skewY = p + j, n.transformPerspective = f + R, (n.zOrigin = parseFloat(F.split(" ")[2]) || !t && n.zOrigin || 0) && (N[ii] = Ni(F)), n.svg || (n.xOffset = n.yOffset = 0), n.force3D = Te.force3D, n.renderTransform = n.svg ? Xi : zr ? Bi : Ri, n.uncache = 0, n
        }, Ni = function (e) {
            return (e = e.split(" "))[0] + " " + e[1]
        }, zi = function (e, t, n) {
            var r = tn(t);
            return yt(parseFloat(t) + parseFloat(xi(e, "x", n + "px", r))) + r
        }, Ri = function (e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Bi(e, t)
        }, ji = "0deg", qi = "0px", Fi = ") ", Bi = function (e, t) {
            var n = t || this, r = n.xPercent, i = n.yPercent, s = n.x, a = n.y, o = n.z, l = n.rotation, c = n.rotationY, u = n.rotationX, d = n.skewX, p = n.skewY, f = n.scaleX, h = n.scaleY, m = n.transformPerspective, v = n.force3D, g = n.target, y = n.zOrigin, _ = "", w = "auto" === v && e && 1 !== e || !0 === v;
            if (y && (u !== ji || c !== ji)) {
                var b, x = parseFloat(c) * qr, T = Math.sin(x), S = Math.cos(x);
                x = parseFloat(u) * qr, b = Math.cos(x), s = zi(g, s, T * b * -y), a = zi(g, a, -Math.sin(x) * -y), o = zi(g, o, S * b * -y + y)
            }
            m !== qi && (_ += "perspective(" + m + Fi), (r || i) && (_ += "translate(" + r + "%, " + i + "%) "), (w || s !== qi || a !== qi || o !== qi) && (_ += o !== qi || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Fi), l !== ji && (_ += "rotate(" + l + Fi), c !== ji && (_ += "rotateY(" + c + Fi), u !== ji && (_ += "rotateX(" + u + Fi), d === ji && p === ji || (_ += "skew(" + d + ", " + p + Fi), 1 === f && 1 === h || (_ += "scale(" + f + ", " + h + Fi), g.style[ri] = _ || "translate(0, 0)"
        }, Xi = function (e, t) {
            var n, r, i, s, a, o = t || this, l = o.xPercent, c = o.yPercent, u = o.x, d = o.y, p = o.rotation, f = o.skewX, h = o.skewY, m = o.scaleX, v = o.scaleY, g = o.target, y = o.xOrigin, _ = o.yOrigin, w = o.xOffset, b = o.yOffset, x = o.forceCSS, T = parseFloat(u), S = parseFloat(d);
            p = parseFloat(p), f = parseFloat(f), (h = parseFloat(h)) && (f += h = parseFloat(h), p += h), p || f ? (p *= qr, f *= qr, n = Math.cos(p) * m, r = Math.sin(p) * m, i = Math.sin(p - f) * -v, s = Math.cos(p - f) * v, f && (h *= qr, a = Math.tan(f - h), i *= a = Math.sqrt(1 + a * a), s *= a, h && (a = Math.tan(h), n *= a = Math.sqrt(1 + a * a), r *= a)), n = yt(n), r = yt(r), i = yt(i), s = yt(s)) : (n = m, s = v, r = i = 0), (T && !~(u + "").indexOf("px") || S && !~(d + "").indexOf("px")) && (T = xi(g, "x", u, "px"), S = xi(g, "y", d, "px")), (y || _ || w || b) && (T = yt(T + y - (y * n + _ * i) + w), S = yt(S + _ - (y * r + _ * s) + b)), (l || c) && (a = g.getBBox(), T = yt(T + l / 100 * a.width), S = yt(S + c / 100 * a.height)), a = "matrix(" + n + "," + r + "," + i + "," + s + "," + T + "," + S + ")", g.setAttribute("transform", a), x && (g.style[ri] = a)
        }, Hi = function (e, t, n, r, i) {
            var s, a, o = 360, l = Le(i), c = parseFloat(i) * (l && ~i.indexOf("rad") ? jr : 1) - r, u = r + c + "deg";
            return l && ("short" === (s = i.split("_")[1]) && (c %= o) != c % 180 && (c += c < 0 ? o : -360), "cw" === s && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === s && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), e._pt = a = new mr(e._pt, t, n, r, c, Vr), a.e = u, a.u = "deg", e._props.push(n), a
        }, Yi = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }, $i = function (e, t, n) {
            var r, i, s, a, o, l, c, u = Yi({}, n._gsap), d = n.style;
            for (i in u.svg ? (s = n.getAttribute("transform"), n.setAttribute("transform", ""), d[ri] = t, r = Ii(n, 1), yi(n, ri), n.setAttribute("transform", s)) : (s = getComputedStyle(n)[ri], d[ri] = t, r = Ii(n, 1), d[ri] = s), Rr) (s = u[i]) !== (a = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = tn(s) !== (c = tn(a)) ? xi(n, i, s, c) : parseFloat(s), l = parseFloat(a), e._pt = new mr(e._pt, r, i, o, l - o, $r), e._pt.u = c || 0, e._props.push(i));
            Yi(r, u)
        };
        gt("padding,margin,Width,Radius", (function (e, t) {
            var n = "Top", r = "Right", i = "Bottom", s = "Left", a = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map((function (n) {
                return t < 2 ? e + n : "border" + n + e
            }));
            Ei[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
                var s, o;
                if (arguments.length < 4) return s = a.map((function (t) {
                    return Ti(e, t, n)
                })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                s = (r + "").split(" "), o = {}, a.forEach((function (e, t) {
                    return o[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
                })), e.init(t, o, i)
            }
        }));
        var Vi, Gi, Wi = {
            name: "css", register: fi, targetTest: function (e) {
                return e.style && e.nodeType
            }, init: function (e, t, n, r, i) {
                var s, a, o, l, c, u, d, p, f, h, m, v, g, y, _, w, b, x, T, S, k = this._props, C = e.style, E = n.vars.startAt;
                for (d in Dr || fi(), this.styles = this.styles || li(e), w = this.styles.props, this.tween = n, t) if ("autoRound" !== d && (a = t[d], !ct[d] || !Un(d, t, n, r, e, i))) if (c = typeof a, u = Ei[d], "function" === c && (c = typeof (a = a.call(n, r, e, i))), "string" === c && ~a.indexOf("random(") && (a = fn(a)), u) u(this, e, d, a, n) && (_ = 1); else if ("--" === d.substr(0, 2)) s = (getComputedStyle(e).getPropertyValue(d) + "").trim(), a += "", Cn.lastIndex = 0, Cn.test(s) || (p = tn(s), f = tn(a)), f ? p !== f && (s = xi(e, d, s, f) + f) : p && (a += p), this.add(C, "setProperty", s, a, r, i, 0, 0, d), k.push(d), w.push(d, 0, C[d]); else if ("undefined" !== c) {
                    if (E && d in E ? (s = "function" == typeof E[d] ? E[d].call(n, r, e, i) : E[d], Le(s) && ~s.indexOf("random(") && (s = fn(s)), tn(s + "") || "auto" === s || (s += Te.units[d] || tn(Ti(e, d)) || ""), "=" === (s + "").charAt(1) && (s = Ti(e, d))) : s = Ti(e, d), l = parseFloat(s), (h = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), d in Yr && ("autoAlpha" === d && (1 === l && "hidden" === Ti(e, "visibility") && o && (l = 0), w.push("visibility", 0, C.visibility), _i(this, C, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== d && "transform" !== d && ~(d = Yr[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Rr) if (this.styles.save(d), v || ((g = e._gsap).renderTransform && !t.parseTransform || Ii(e, t.parseTransform), y = !1 !== t.smoothOrigin && g.smooth, (v = this._pt = new mr(this._pt, C, ri, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === d) this._pt = new mr(this._pt, g, "scaleY", g.scaleY, (h ? wt(g.scaleY, h + o) : o) - g.scaleY || 0, $r), this._pt.u = 0, k.push("scaleY", d), d += "X"; else {
                        if ("transformOrigin" === d) {
                            w.push(ii, 0, C[ii]), x = void 0, T = void 0, S = void 0, T = (x = (b = a).split(" "))[0], S = x[1] || "50%", "top" !== T && "bottom" !== T && "left" !== S && "right" !== S || (b = T, T = S, S = b), x[0] = ki[T] || T, x[1] = ki[S] || S, a = x.join(" "), g.svg ? Li(e, a, 0, y, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && _i(this, g, "zOrigin", g.zOrigin, f), _i(this, C, d, Ni(s), Ni(a)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            Li(e, a, 1, y, 0, this);
                            continue
                        }
                        if (d in Ai) {
                            Hi(this, g, d, l, h ? wt(l, h + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            _i(this, g, "smooth", g.smooth, a);
                            continue
                        }
                        if ("force3D" === d) {
                            g[d] = a;
                            continue
                        }
                        if ("transform" === d) {
                            $i(this, a, e);
                            continue
                        }
                    } else d in C || (d = pi(d) || d);
                    if (m || (o || 0 === o) && (l || 0 === l) && !Hr.test(a) && d in C) o || (o = 0), (p = (s + "").substr((l + "").length)) !== (f = tn(a) || (d in Te.units ? Te.units[d] : p)) && (l = xi(e, d, s, f)), this._pt = new mr(this._pt, m ? g : C, d, l, (h ? wt(l, h + o) : o) - l, m || "px" !== f && "zIndex" !== d || !1 === t.autoRound ? $r : Wr), this._pt.u = f || 0, p !== f && "%" !== f && (this._pt.b = s, this._pt.r = Gr); else if (d in C) Si.call(this, e, d, s, h ? h + a : a); else if (d in e) this.add(e, d, s || e[d], h ? h + a : a, r, i); else if ("parseTransform" !== d) {
                        Je(d, a);
                        continue
                    }
                    m || (d in C ? w.push(d, 0, C[d]) : w.push(d, 1, s || e[d])), k.push(d)
                }
                _ && hr(this)
            }, render: function (e, t) {
                if (t.tween._time || !Nr()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next; else t.styles.revert()
            }, get: Ti, aliases: Yr, getSetter: function (e, t, n) {
                var r = Yr[t];
                return r && r.indexOf(",") < 0 && (t = r), t in Rr && t !== ii && (e._gsap.x || Ti(e, "x")) ? n && Ir === n ? "scale" === t ? ei : Jr : (Ir = n || {}) && ("scale" === t ? ti : ni) : e.style && !ze(e.style[t]) ? Qr : ~t.indexOf("-") ? Zr : ar(e, t)
            }, core: {_removeProperty: yi, _getMatrix: Di}
        };
        Mr.utils.checkPrefix = pi, Mr.core.getStyleSaver = li, Gi = gt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Vi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (e) {
            Rr[e] = 1
        })), gt(Vi, (function (e) {
            Te.units[e] = "deg", Ai[e] = 1
        })), Yr[Gi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Vi, gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (e) {
            var t = e.split(":");
            Yr[t[1]] = Gi[t[0]]
        })), gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (e) {
            Te.units[e] = "px"
        })), Mr.registerPlugin(Wi);
        var Ui = Mr.registerPlugin(Wi) || Mr;

        function Ki(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        Ui.core.Tween;
        var Qi, Zi, Ji, es, ts, ns, rs, is, ss, as, os, ls, cs, us = function () {
            return Qi || "undefined" != typeof window && (Qi = window.gsap) && Qi.registerPlugin && Qi
        }, ds = 1, ps = [], fs = [], hs = [], ms = Date.now, vs = function (e, t) {
            return t
        }, gs = function (e, t) {
            return ~hs.indexOf(e) && hs[hs.indexOf(e) + 1][t]
        }, ys = function (e) {
            return !!~as.indexOf(e)
        }, _s = function (e, t, n, r, i) {
            return e.addEventListener(t, n, {passive: !r, capture: !!i})
        }, ws = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r)
        }, bs = "scrollLeft", xs = "scrollTop", Ts = function () {
            return os && os.isPressed || fs.cache++
        }, Ss = function (e, t) {
            var n = function n(r) {
                if (r || 0 === r) {
                    ds && (Ji.history.scrollRestoration = "manual");
                    var i = os && os.isPressed;
                    r = n.v = Math.round(r) || (os && os.iOS ? 1 : 0), e(r), n.cacheID = fs.cache, i && vs("ss", r)
                } else (t || fs.cache !== n.cacheID || vs("ref")) && (n.cacheID = fs.cache, n.v = e());
                return n.v + n.offset
            };
            return n.offset = 0, e && n
        }, ks = {
            s: bs, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: Ss((function (e) {
                return arguments.length ? Ji.scrollTo(e, Cs.sc()) : Ji.pageXOffset || es[bs] || ts[bs] || ns[bs] || 0
            }))
        }, Cs = {
            s: xs, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: ks, sc: Ss((function (e) {
                return arguments.length ? Ji.scrollTo(ks.sc(), e) : Ji.pageYOffset || es[xs] || ts[xs] || ns[xs] || 0
            }))
        }, Es = function (e, t) {
            return (t && t._ctx && t._ctx.selector || Qi.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Qi.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        }, Ms = function (e, t) {
            var n = t.s, r = t.sc;
            ys(e) && (e = es.scrollingElement || ts);
            var i = fs.indexOf(e), s = r === Cs.sc ? 1 : 2;
            !~i && (i = fs.push(e) - 1), fs[i + s] || _s(e, "scroll", Ts);
            var a = fs[i + s], o = a || (fs[i + s] = Ss(gs(e, n), !0) || (ys(e) ? r : Ss((function (t) {
                return arguments.length ? e[n] = t : e[n]
            }))));
            return o.target = e, a || (o.smooth = "smooth" === Qi.getProperty(e, "scrollBehavior")), o
        }, As = function (e, t, n) {
            var r = e, i = e, s = ms(), a = s, o = t || 50, l = Math.max(500, 3 * o), c = function (e, t) {
                var l = ms();
                t || l - s > o ? (i = r, r = e, a = s, s = l) : n ? r += e : r = i + (e - i) / (l - a) * (s - a)
            };
            return {
                update: c, reset: function () {
                    i = r = n ? 0 : r, a = s = 0
                }, getVelocity: function (e) {
                    var t = a, o = i, u = ms();
                    return (e || 0 === e) && e !== r && c(e), s === a || u - a > l ? 0 : (r + (n ? o : -o)) / ((n ? u : s) - t) * 1e3
                }
            }
        }, Ps = function (e, t) {
            return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        }, Os = function (e) {
            var t = Math.max.apply(Math, e), n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n
        }, Ds = function () {
            var e, t, n, r;
            (ss = Qi.core.globals().ScrollTrigger) && ss.core && (e = ss.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies, n.push.apply(n, fs), r.push.apply(r, hs), fs = n, hs = r, vs = function (e, n) {
                return t[e](n)
            })
        }, Ls = function (e) {
            return Qi = e || us(), !Zi && Qi && "undefined" != typeof document && document.body && (Ji = window, es = document, ts = es.documentElement, ns = es.body, as = [Ji, es, ts, ns], Qi.utils.clamp, cs = Qi.core.context || function () {
            }, is = "onpointerenter" in ns ? "pointer" : "mouse", rs = Is.isTouch = Ji.matchMedia && Ji.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ji || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ls = Is.eventTypes = ("ontouchstart" in ts ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ts ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
                return ds = 0
            }), 500), Ds(), Zi = 1), Zi
        };
        ks.op = Cs, fs.cache = 0;
        var Is = function () {
            function e(e) {
                this.init(e)
            }

            var t, n;
            return e.prototype.init = function (e) {
                Zi || Ls(Qi) || console.warn("Please gsap.registerPlugin(Observer)"), ss || Ds();
                var t = e.tolerance, n = e.dragMinimum, r = e.type, i = e.target, s = e.lineHeight, a = e.debounce, o = e.preventDefault, l = e.onStop, c = e.onStopDelay, u = e.ignore, d = e.wheelSpeed, p = e.event, f = e.onDragStart, h = e.onDragEnd, m = e.onDrag, v = e.onPress, g = e.onRelease, y = e.onRight, _ = e.onLeft, w = e.onUp, b = e.onDown, x = e.onChangeX, T = e.onChangeY,
                    S = e.onChange, k = e.onToggleX, C = e.onToggleY, E = e.onHover, M = e.onHoverEnd, A = e.onMove, P = e.ignoreCheck, O = e.isNormalizer, D = e.onGestureStart, L = e.onGestureEnd, I = e.onWheel, N = e.onEnable, z = e.onDisable, R = e.onClick, j = e.scrollSpeed, q = e.capture, F = e.allowClicks, B = e.lockAxis, X = e.onLockAxis;
                this.target = i = Es(i) || ts, this.vars = e, u && (u = Qi.utils.toArray(u)), t = t || 1e-9, n = n || 0, d = d || 1, j = j || 1, r = r || "wheel,touch,pointer", a = !1 !== a, s || (s = parseFloat(Ji.getComputedStyle(ns).lineHeight) || 22);
                var H, Y, $, V, G, W, U, K = this, Q = 0, Z = 0, J = Ms(i, ks), ee = Ms(i, Cs), te = J(), ne = ee(), re = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === ls[0], ie = ys(i), se = i.ownerDocument || es, ae = [0, 0, 0], oe = [0, 0, 0], le = 0, ce = function () {
                    return le = ms()
                }, ue = function (e, t) {
                    return (K.event = e) && u && ~u.indexOf(e.target) || t && re && "touch" !== e.pointerType || P && P(e, t)
                }, de = function () {
                    var e = K.deltaX = Os(ae), n = K.deltaY = Os(oe), r = Math.abs(e) >= t, i = Math.abs(n) >= t;
                    S && (r || i) && S(K, e, n, ae, oe), r && (y && K.deltaX > 0 && y(K), _ && K.deltaX < 0 && _(K), x && x(K), k && K.deltaX < 0 != Q < 0 && k(K), Q = K.deltaX, ae[0] = ae[1] = ae[2] = 0), i && (b && K.deltaY > 0 && b(K), w && K.deltaY < 0 && w(K), T && T(K), C && K.deltaY < 0 != Z < 0 && C(K), Z = K.deltaY, oe[0] = oe[1] = oe[2] = 0), (V || $) && (A && A(K), $ && (m(K), $ = !1), V = !1), W && !(W = !1) && X && X(K), G && (I(K), G = !1), H = 0
                }, pe = function (e, t, n) {
                    ae[n] += e, oe[n] += t, K._vx.update(e), K._vy.update(t), a ? H || (H = requestAnimationFrame(de)) : de()
                }, fe = function (e, t) {
                    B && !U && (K.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y", W = !0), "y" !== U && (ae[2] += e, K._vx.update(e, !0)), "x" !== U && (oe[2] += t, K._vy.update(t, !0)), a ? H || (H = requestAnimationFrame(de)) : de()
                }, he = function (e) {
                    if (!ue(e, 1)) {
                        var t = (e = Ps(e, o)).clientX, r = e.clientY, i = t - K.x, s = r - K.y, a = K.isDragging;
                        K.x = t, K.y = r, (a || Math.abs(K.startX - t) >= n || Math.abs(K.startY - r) >= n) && (m && ($ = !0), a || (K.isDragging = !0), fe(i, s), a || f && f(K))
                    }
                }, me = K.onPress = function (e) {
                    ue(e, 1) || e && e.button || (K.axis = U = null, Y.pause(), K.isPressed = !0, e = Ps(e), Q = Z = 0, K.startX = K.x = e.clientX, K.startY = K.y = e.clientY, K._vx.reset(), K._vy.reset(), _s(O ? i : se, ls[1], he, o, !0), K.deltaX = K.deltaY = 0, v && v(K))
                }, ve = K.onRelease = function (e) {
                    if (!ue(e, 1)) {
                        ws(O ? i : se, ls[1], he, !0);
                        var t = !isNaN(K.y - K.startY), n = K.isDragging, r = n && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3), s = Ps(e);
                        !r && t && (K._vx.reset(), K._vy.reset(), o && F && Qi.delayedCall(.08, (function () {
                            if (ms() - le > 300 && !e.defaultPrevented) if (e.target.click) e.target.click(); else if (se.createEvent) {
                                var t = se.createEvent("MouseEvents");
                                t.initMouseEvent("click", !0, !0, Ji, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                            }
                        }))), K.isDragging = K.isGesturing = K.isPressed = !1, l && n && !O && Y.restart(!0), h && n && h(K), g && g(K, r)
                    }
                }, ge = function (e) {
                    return e.touches && e.touches.length > 1 && (K.isGesturing = !0) && D(e, K.isDragging)
                }, ye = function () {
                    return (K.isGesturing = !1) || L(K)
                }, _e = function (e) {
                    if (!ue(e)) {
                        var t = J(), n = ee();
                        pe((t - te) * j, (n - ne) * j, 1), te = t, ne = n, l && Y.restart(!0)
                    }
                }, we = function (e) {
                    if (!ue(e)) {
                        e = Ps(e, o), I && (G = !0);
                        var t = (1 === e.deltaMode ? s : 2 === e.deltaMode ? Ji.innerHeight : 1) * d;
                        pe(e.deltaX * t, e.deltaY * t, 0), l && !O && Y.restart(!0)
                    }
                }, be = function (e) {
                    if (!ue(e)) {
                        var t = e.clientX, n = e.clientY, r = t - K.x, i = n - K.y;
                        K.x = t, K.y = n, V = !0, l && Y.restart(!0), (r || i) && fe(r, i)
                    }
                }, xe = function (e) {
                    K.event = e, E(K)
                }, Te = function (e) {
                    K.event = e, M(K)
                }, Se = function (e) {
                    return ue(e) || Ps(e, o) && R(K)
                };
                Y = K._dc = Qi.delayedCall(c || .25, (function () {
                    K._vx.reset(), K._vy.reset(), Y.pause(), l && l(K)
                })).pause(), K.deltaX = K.deltaY = 0, K._vx = As(0, 50, !0), K._vy = As(0, 50, !0), K.scrollX = J, K.scrollY = ee, K.isDragging = K.isGesturing = K.isPressed = !1, cs(this), K.enable = function (e) {
                    return K.isEnabled || (_s(ie ? se : i, "scroll", Ts), r.indexOf("scroll") >= 0 && _s(ie ? se : i, "scroll", _e, o, q), r.indexOf("wheel") >= 0 && _s(i, "wheel", we, o, q), (r.indexOf("touch") >= 0 && rs || r.indexOf("pointer") >= 0) && (_s(i, ls[0], me, o, q), _s(se, ls[2], ve), _s(se, ls[3], ve), F && _s(i, "click", ce, !1, !0), R && _s(i, "click", Se), D && _s(se, "gesturestart", ge), L && _s(se, "gestureend", ye), E && _s(i, is + "enter", xe), M && _s(i, is + "leave", Te), A && _s(i, is + "move", be)), K.isEnabled = !0, e && e.type && me(e), N && N(K)), K
                }, K.disable = function () {
                    K.isEnabled && (ps.filter((function (e) {
                        return e !== K && ys(e.target)
                    })).length || ws(ie ? se : i, "scroll", Ts), K.isPressed && (K._vx.reset(), K._vy.reset(), ws(O ? i : se, ls[1], he, !0)), ws(ie ? se : i, "scroll", _e, q), ws(i, "wheel", we, q), ws(i, ls[0], me, q), ws(se, ls[2], ve), ws(se, ls[3], ve), ws(i, "click", ce, !0), ws(i, "click", Se), ws(se, "gesturestart", ge), ws(se, "gestureend", ye), ws(i, is + "enter", xe), ws(i, is + "leave", Te), ws(i, is + "move", be), K.isEnabled = K.isPressed = K.isDragging = !1, z && z(K))
                }, K.kill = K.revert = function () {
                    K.disable();
                    var e = ps.indexOf(K);
                    e >= 0 && ps.splice(e, 1), os === K && (os = 0)
                }, ps.push(K), O && ys(i) && (os = K), K.enable(p)
            }, t = e, (n = [{
                key: "velocityX", get: function () {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY", get: function () {
                    return this._vy.getVelocity()
                }
            }]) && Ki(t.prototype, n), e
        }();
        Is.version = "3.12.3", Is.create = function (e) {
            return new Is(e)
        }, Is.register = Ls, Is.getAll = function () {
            return ps.slice()
        }, Is.getById = function (e) {
            return ps.filter((function (t) {
                return t.vars.id === e
            }))[0]
        }, us() && Qi.registerPlugin(Is);
        var Ns, zs, Rs, js, qs, Fs, Bs, Xs, Hs, Ys, $s, Vs, Gs, Ws, Us, Ks, Qs, Zs, Js, ea, ta, na, ra, ia, sa, aa, oa, la, ca, ua, da, pa, fa, ha, ma, va, ga, ya, _a = 1, wa = Date.now, ba = wa(), xa = 0, Ta = 0, Sa = function (e, t, n) {
            var r = ja(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        }, ka = function (e, t) {
            return !t || ja(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        }, Ca = function e() {
            return Ta && requestAnimationFrame(e)
        }, Ea = function () {
            return Ws = 1
        }, Ma = function () {
            return Ws = 0
        }, Aa = function (e) {
            return e
        }, Pa = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, Oa = function () {
            return "undefined" != typeof window
        }, Da = function () {
            return Ns || Oa() && (Ns = window.gsap) && Ns.registerPlugin && Ns
        }, La = function (e) {
            return !!~Bs.indexOf(e)
        }, Ia = function (e) {
            return ("Height" === e ? da : Rs["inner" + e]) || qs["client" + e] || Fs["client" + e]
        }, Na = function (e) {
            return gs(e, "getBoundingClientRect") || (La(e) ? function () {
                return Uo.width = Rs.innerWidth, Uo.height = da, Uo
            } : function () {
                return oo(e)
            })
        }, za = function (e, t) {
            var n = t.s, r = t.d2, i = t.d, s = t.a;
            return Math.max(0, (n = "scroll" + r) && (s = gs(e, n)) ? s() - Na(e)()[i] : La(e) ? (qs[n] || Fs[n]) - Ia(r) : e[n] - e["offset" + r])
        }, Ra = function (e, t) {
            for (var n = 0; n < Js.length; n += 3) (!t || ~t.indexOf(Js[n + 1])) && e(Js[n], Js[n + 1], Js[n + 2])
        }, ja = function (e) {
            return "string" == typeof e
        }, qa = function (e) {
            return "function" == typeof e
        }, Fa = function (e) {
            return "number" == typeof e
        }, Ba = function (e) {
            return "object" == typeof e
        }, Xa = function (e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause()
        }, Ha = function (e, t) {
            if (e.enabled) {
                var n = e._ctx ? e._ctx.add((function () {
                    return t(e)
                })) : t(e);
                n && n.totalTime && (e.callbackAnimation = n)
            }
        }, Ya = Math.abs, $a = "left", Va = "right", Ga = "bottom", Wa = "width", Ua = "height", Ka = "Right", Qa = "Left", Za = "Top", Ja = "Bottom", eo = "padding", to = "margin", no = "Width", ro = "Height", io = "px", so = function (e) {
            return Rs.getComputedStyle(e)
        }, ao = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e
        }, oo = function (e, t) {
            var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== so(e)[Us] && Ns.to(e, {x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0}).progress(1), r = e.getBoundingClientRect();
            return n && n.progress(0).kill(), r
        }, lo = function (e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0
        }, co = function (e) {
            var t, n = [], r = e.labels, i = e.duration();
            for (t in r) n.push(r[t] / i);
            return n
        }, uo = function (e) {
            var t = Ns.utils.snap(e), n = Array.isArray(e) && e.slice(0).sort((function (e, t) {
                return e - t
            }));
            return n ? function (e, r, i) {
                var s;
                if (void 0 === i && (i = .001), !r) return t(e);
                if (r > 0) {
                    for (e -= i, s = 0; s < n.length; s++) if (n[s] >= e) return n[s];
                    return n[s - 1]
                }
                for (s = n.length, e += i; s--;) if (n[s] <= e) return n[s];
                return n[0]
            } : function (n, r, i) {
                void 0 === i && (i = .001);
                var s = t(n);
                return !r || Math.abs(s - n) < i || s - n < 0 == r < 0 ? s : t(r < 0 ? n - e : n + e)
            }
        }, po = function (e, t, n, r) {
            return n.split(",").forEach((function (n) {
                return e(t, n, r)
            }))
        }, fo = function (e, t, n, r, i) {
            return e.addEventListener(t, n, {passive: !r, capture: !!i})
        }, ho = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r)
        }, mo = function (e, t, n) {
            (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
        }, vo = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"}, go = {toggleActions: "play", anticipatePin: 0}, yo = {top: 0, left: 0, center: .5, bottom: 1, right: 1}, _o = function (e, t) {
            if (ja(e)) {
                var n = e.indexOf("="), r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
                ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in yo ? yo[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        }, wo = function (e, t, n, r, i, s, a, o) {
            var l = i.startColor, c = i.endColor, u = i.fontSize, d = i.indent, p = i.fontWeight, f = js.createElement("div"), h = La(n) || "fixed" === gs(n, "pinType"), m = -1 !== e.indexOf("scroller"), v = h ? Fs : n, g = -1 !== e.indexOf("start"), y = g ? l : c,
                _ = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return _ += "position:" + ((m || o) && h ? "fixed;" : "absolute;"), (m || o || !h) && (_ += (r === Cs ? Va : Ga) + ":" + (s + parseFloat(d)) + "px;"), a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = g, f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), f.style.cssText = _, f.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f), f._offset = f["offset" + r.op.d2], bo(f, 0, r, g), f
        }, bo = function (e, t, n, r) {
            var i = {display: "block"}, s = n[r ? "os2" : "p2"], a = n[r ? "p2" : "os2"];
            e._isFlipped = r, i[n.a + "Percent"] = r ? -100 : 0, i[n.a] = r ? "1px" : 0, i["border" + s + no] = 1, i["border" + a + no] = 0, i[n.p] = t + "px", Ns.set(e, i)
        }, xo = [], To = {}, So = function () {
            return wa() - xa > 34 && (ma || (ma = requestAnimationFrame(Xo)))
        }, ko = function () {
            (!ra || !ra.isPressed || ra.startX > Fs.clientWidth) && (fs.cache++, ra ? ma || (ma = requestAnimationFrame(Xo)) : Xo(), xa || Oo("scrollStart"), xa = wa())
        }, Co = function () {
            aa = Rs.innerWidth, sa = Rs.innerHeight
        }, Eo = function () {
            fs.cache++, !Gs && !na && !js.fullscreenElement && !js.webkitFullscreenElement && (!ia || aa !== Rs.innerWidth || Math.abs(Rs.innerHeight - sa) > .25 * Rs.innerHeight) && Xs.restart(!0)
        }, Mo = {}, Ao = [], Po = function e() {
            return ho(nl, "scrollEnd", e) || qo(!0)
        }, Oo = function (e) {
            return Mo[e] && Mo[e].map((function (e) {
                return e()
            })) || Ao
        }, Do = [], Lo = function (e) {
            for (var t = 0; t < Do.length; t += 5) (!e || Do[t + 4] && Do[t + 4].query === e) && (Do[t].style.cssText = Do[t + 1], Do[t].getBBox && Do[t].setAttribute("transform", Do[t + 2] || ""), Do[t + 3].uncache = 1)
        }, Io = function (e, t) {
            var n;
            for (Ks = 0; Ks < xo.length; Ks++) !(n = xo[Ks]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
            pa = !0, t && Lo(t), t || Oo("revert")
        }, No = function (e, t) {
            fs.cache++, (t || !va) && fs.forEach((function (e) {
                return qa(e) && e.cacheID++ && (e.rec = 0)
            })), ja(e) && (Rs.history.scrollRestoration = ca = e)
        }, zo = 0, Ro = function () {
            Fs.appendChild(ua), da = !ra && ua.offsetHeight || Rs.innerHeight, Fs.removeChild(ua)
        }, jo = function (e) {
            return Hs(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function (t) {
                return t.style.display = e ? "none" : "block"
            }))
        }, qo = function (e, t) {
            if (!xa || e) {
                Ro(), va = nl.isRefreshing = !0, fs.forEach((function (e) {
                    return qa(e) && ++e.cacheID && (e.rec = e())
                }));
                var n = Oo("refreshInit");
                ea && nl.sort(), t || Io(), fs.forEach((function (e) {
                    qa(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                })), xo.slice(0).forEach((function (e) {
                    return e.refresh()
                })), pa = !1, xo.forEach((function (e) {
                    if (e._subPinOffset && e.pin) {
                        var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[t];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh()
                    }
                })), fa = 1, jo(!0), xo.forEach((function (e) {
                    var t = za(e.scroller, e._dir), n = "max" === e.vars.end || e._endClamp && e.end > t, r = e._startClamp && e.start >= t;
                    (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
                })), jo(!1), fa = 0, n.forEach((function (e) {
                    return e && e.render && e.render(-1)
                })), fs.forEach((function (e) {
                    qa(e) && (e.smooth && requestAnimationFrame((function () {
                        return e.target.style.scrollBehavior = "smooth"
                    })), e.rec && e(e.rec))
                })), No(ca, 1), Xs.pause(), zo++, va = 2, Xo(2), xo.forEach((function (e) {
                    return qa(e.vars.onRefresh) && e.vars.onRefresh(e)
                })), va = nl.isRefreshing = !1, Oo("refresh")
            } else fo(nl, "scrollEnd", Po)
        }, Fo = 0, Bo = 1, Xo = function (e) {
            if (2 === e || !va && !pa) {
                nl.isUpdating = !0, ya && ya.update(0);
                var t = xo.length, n = wa(), r = n - ba >= 50, i = t && xo[0].scroll();
                if (Bo = Fo > i ? -1 : 1, va || (Fo = i), r && (xa && !Ws && n - xa > 200 && (xa = 0, Oo("scrollEnd")), $s = ba, ba = n), Bo < 0) {
                    for (Ks = t; Ks-- > 0;) xo[Ks] && xo[Ks].update(0, r);
                    Bo = 1
                } else for (Ks = 0; Ks < t; Ks++) xo[Ks] && xo[Ks].update(0, r);
                nl.isUpdating = !1
            }
            ma = 0
        }, Ho = [$a, "top", Ga, Va, to + Ja, to + Ka, to + Za, to + Qa, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Yo = Ho.concat([Wa, Ua, "boxSizing", "max" + no, "max" + ro, "position", to, eo, eo + Za, eo + Ka, eo + Ja, eo + Qa]), $o = function (e, t, n, r) {
            if (!e._gsap.swappedIn) {
                for (var i, s = Ho.length, a = t.style, o = e.style; s--;) a[i = Ho[s]] = n[i];
                a.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (a.display = "inline-block"), o[Ga] = o[Va] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Wa] = lo(e, ks) + io, a[Ua] = lo(e, Cs) + io, a[eo] = o[to] = o.top = o[$a] = "0", Go(r), o[Wa] = o["max" + no] = n[Wa], o[Ua] = o["max" + ro] = n[Ua], o[eo] = n[eo], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
            }
        }, Vo = /([A-Z])/g, Go = function (e) {
            if (e) {
                var t, n, r = e.t.style, i = e.length, s = 0;
                for ((e.t._gsap || Ns.core.getCache(e.t)).uncache = 1; s < i; s += 2) n = e[s + 1], t = e[s], n ? r[t] = n : r[t] && r.removeProperty(t.replace(Vo, "-$1").toLowerCase())
            }
        }, Wo = function (e) {
            for (var t = Yo.length, n = e.style, r = [], i = 0; i < t; i++) r.push(Yo[i], n[Yo[i]]);
            return r.t = e, r
        }, Uo = {left: 0, top: 0}, Ko = function (e, t, n, r, i, s, a, o, l, c, u, d, p, f) {
            qa(e) && (e = e(o)), ja(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? _o("0" + e.substr(3), n) : 0));
            var h, m, v, g = p ? p.time() : 0;
            if (p && p.seek(0), isNaN(e) || (e = +e), Fa(e)) p && (e = Ns.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, d, e)), a && bo(a, n, r, !0); else {
                qa(t) && (t = t(o));
                var y, _, w, b, x = (e || "0").split(" ");
                v = Es(t, o) || Fs, (y = oo(v) || {}) && (y.left || y.top) || "none" !== so(v).display || (b = v.style.display, v.style.display = "block", y = oo(v), b ? v.style.display = b : v.style.removeProperty("display")), _ = _o(x[0], y[r.d]), w = _o(x[1] || "0", n), e = y[r.p] - l[r.p] - c + _ + i - w, a && bo(a, w, r, n - w < 20 || a._isStart && w > 20), n -= n - w
            }
            if (f && (o[f] = e || -.001, e < 0 && (e = 0)), s) {
                var T = e + n, S = s._isStart;
                h = "scroll" + r.d2, bo(s, T, r, S && T > 20 || !S && (u ? Math.max(Fs[h], qs[h]) : s.parentNode[h]) <= T + 1), u && (l = oo(a), u && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + io))
            }
            return p && v && (h = oo(v), p.seek(d), m = oo(v), p._caScrollDist = h[r.p] - m[r.p], e = e / p._caScrollDist * d), p && p.seek(g), p ? e : Math.round(e)
        }, Qo = /(webkit|moz|length|cssText|inset)/i, Zo = function (e, t, n, r) {
            if (e.parentNode !== t) {
                var i, s, a = e.style;
                if (t === Fs) {
                    for (i in e._stOrig = a.cssText, s = so(e)) +i || Qo.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
                    a.top = n, a.left = r
                } else a.cssText = e._stOrig;
                Ns.core.getCache(e).uncache = 1, t.appendChild(e)
            }
        }, Jo = function (e, t, n) {
            var r = t, i = r;
            return function (t) {
                var s = Math.round(e());
                return s !== r && s !== i && Math.abs(s - r) > 3 && Math.abs(s - i) > 3 && (t = s, n && n()), i = r, r = t, t
            }
        }, el = function (e, t, n) {
            var r = {};
            r[t.p] = "+=" + n, Ns.set(e, r)
        }, tl = function (e, t) {
            var n = Ms(e, t), r = "_scroll" + t.p2, i = function t(i, s, a, o, l) {
                var c = t.tween, u = s.onComplete, d = {};
                a = a || n();
                var p = Jo(n, a, (function () {
                    c.kill(), t.tween = 0
                }));
                return l = o && l || 0, o = o || i - a, c && c.kill(), s[r] = i, s.modifiers = d, d[r] = function () {
                    return p(a + o * c.ratio + l * c.ratio * c.ratio)
                }, s.onUpdate = function () {
                    fs.cache++, t.tween && Xo()
                }, s.onComplete = function () {
                    t.tween = 0, u && u.call(c)
                }, c = t.tween = Ns.to(e, s)
            };
            return e[r] = n, n.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }, fo(e, "wheel", n.wheelHandler), nl.isTouch && fo(e, "touchmove", n.wheelHandler), i
        }, nl = function () {
            function e(t, n) {
                zs || e.register(Ns) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), la(this), this.init(t, n)
            }

            return e.prototype.init = function (t, n) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Ta) {
                    var r, i, s, a, o, l, c, u, d, p, f, h, m, v, g, y, _, w, b, x, T, S, k, C, E, M, A, P, O, D, L, I, N, z, R, j, q, F, B, X, H, Y, $ = t = ao(ja(t) || Fa(t) || t.nodeType ? {trigger: t} : t, go), V = $.onUpdate, G = $.toggleClass, W = $.id, U = $.onToggle, K = $.onRefresh, Q = $.scrub, Z = $.trigger, J = $.pin, ee = $.pinSpacing, te = $.invalidateOnRefresh, ne = $.anticipatePin,
                        re = $.onScrubComplete, ie = $.onSnapComplete, se = $.once, ae = $.snap, oe = $.pinReparent, le = $.pinSpacer, ce = $.containerAnimation, ue = $.fastScrollEnd, de = $.preventOverlaps, pe = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? ks : Cs, fe = !Q && 0 !== Q, he = Es(t.scroller || Rs), me = Ns.core.getCache(he), ve = La(he),
                        ge = "fixed" === ("pinType" in t ? t.pinType : gs(he, "pinType") || ve && "fixed"), ye = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], _e = fe && t.toggleActions.split(" "), we = "markers" in t ? t.markers : go.markers, be = ve ? 0 : parseFloat(so(he)["border" + pe.p2 + no]) || 0, xe = this, Te = t.onRefreshInit && function () {
                            return t.onRefreshInit(xe)
                        }, Se = function (e, t, n) {
                            var r = n.d, i = n.d2, s = n.a;
                            return (s = gs(e, "getBoundingClientRect")) ? function () {
                                return s()[r]
                            } : function () {
                                return (t ? Ia(i) : e["client" + i]) || 0
                            }
                        }(he, ve, pe), ke = function (e, t) {
                            return !t || ~hs.indexOf(e) ? Na(e) : function () {
                                return Uo
                            }
                        }(he, ve), Ce = 0, Ee = 0, Me = 0, Ae = Ms(he, pe);
                    if (xe._startClamp = xe._endClamp = !1, xe._dir = pe, ne *= 45, xe.scroller = he, xe.scroll = ce ? ce.time.bind(ce) : Ae, a = Ae(), xe.vars = t, n = n || t.animation, "refreshPriority" in t && (ea = 1, -9999 === t.refreshPriority && (ya = xe)), me.tweenScroll = me.tweenScroll || {
                        top: tl(he, Cs),
                        left: tl(he, ks)
                    }, xe.tweenTo = r = me.tweenScroll[pe.p], xe.scrubDuration = function (e) {
                        (N = Fa(e) && e) ? I ? I.duration(e) : I = Ns.to(n, {
                            ease: "expo", totalProgress: "+=0", duration: N, paused: !0, onComplete: function () {
                                return re && re(xe)
                            }
                        }) : (I && I.progress(1).kill(), I = 0)
                    }, n && (n.vars.lazy = !1, n._initted && !xe.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), xe.animation = n.pause(), n.scrollTrigger = xe, xe.scrubDuration(Q), D = 0, W || (W = n.vars.id)), ae && (Ba(ae) && !ae.push || (ae = {snapTo: ae}), "scrollBehavior" in Fs.style && Ns.set(ve ? [Fs, qs] : he, {scrollBehavior: "auto"}), fs.forEach((function (e) {
                        return qa(e) && e.target === (ve ? js.scrollingElement || qs : he) && (e.smooth = !1)
                    })), s = qa(ae.snapTo) ? ae.snapTo : "labels" === ae.snapTo ? function (e) {
                        return function (t) {
                            return Ns.utils.snap(co(e), t)
                        }
                    }(n) : "labelsDirectional" === ae.snapTo ? (X = n, function (e, t) {
                        return uo(co(X))(e, t.direction)
                    }) : !1 !== ae.directional ? function (e, t) {
                        return uo(ae.snapTo)(e, wa() - Ee < 500 ? 0 : t.direction)
                    } : Ns.utils.snap(ae.snapTo), z = ae.duration || {min: .1, max: 2}, z = Ba(z) ? Ys(z.min, z.max) : Ys(z, z), R = Ns.delayedCall(ae.delay || N / 2 || .1, (function () {
                        var e = Ae(), t = wa() - Ee < 500, i = r.tween;
                        if (!(t || Math.abs(xe.getVelocity()) < 10) || i || Ws || Ce === e) xe.isActive && Ce !== e && R.restart(!0); else {
                            var a = (e - l) / v, o = n && !fe ? n.totalProgress() : a, u = t ? 0 : (o - L) / (wa() - $s) * 1e3 || 0, d = Ns.utils.clamp(-a, 1 - a, Ya(u / 2) * u / .185), p = a + (!1 === ae.inertia ? 0 : d), f = Ys(0, 1, s(p, xe)), h = Math.round(l + f * v), m = ae, g = m.onStart, y = m.onInterrupt, _ = m.onComplete;
                            if (e <= c && e >= l && h !== e) {
                                if (i && !i._initted && i.data <= Ya(h - e)) return;
                                !1 === ae.inertia && (d = f - a), r(h, {
                                    duration: z(Ya(.185 * Math.max(Ya(p - o), Ya(f - o)) / u / .05 || 0)), ease: ae.ease || "power3", data: Ya(h - e), onInterrupt: function () {
                                        return R.restart(!0) && y && y(xe)
                                    }, onComplete: function () {
                                        xe.update(), Ce = Ae(), I && n && n.progress(f), D = L = n && !fe ? n.totalProgress() : xe.progress, ie && ie(xe), _ && _(xe)
                                    }
                                }, e, d * v, h - e - d * v), g && g(xe, r.tween)
                            }
                        }
                    })).pause()), W && (To[W] = xe), (B = (Z = xe.trigger = Es(Z || !0 !== J && J)) && Z._gsap && Z._gsap.stRevert) && (B = B(xe)), J = !0 === J ? Z : Es(J), ja(G) && (G = {
                        targets: Z,
                        className: G
                    }), J && (!1 === ee || ee === to || (ee = !(!ee && J.parentNode && J.parentNode.style && "flex" === so(J.parentNode).display) && eo), xe.pin = J, (i = Ns.core.getCache(J)).spacer ? g = i.pinState : (le && ((le = Es(le)) && !le.nodeType && (le = le.current || le.nativeElement), i.spacerIsNative = !!le, le && (i.spacerState = Wo(le))), i.spacer = w = le || js.createElement("div"), w.classList.add("pin-spacer"), W && w.classList.add("pin-spacer-" + W), i.pinState = g = Wo(J)), !1 !== t.force3D && Ns.set(J, {force3D: !0}), xe.spacer = w = i.spacer, O = so(J), C = O[ee + pe.os2], x = Ns.getProperty(J), T = Ns.quickSetter(J, pe.a, io), $o(J, w, O), _ = Wo(J)), we) {
                        h = Ba(we) ? ao(we, vo) : vo, p = wo("scroller-start", W, he, pe, h, 0), f = wo("scroller-end", W, he, pe, h, 0, p), b = p["offset" + pe.op.d2];
                        var Pe = Es(gs(he, "content") || he);
                        u = this.markerStart = wo("start", W, Pe, pe, h, b, 0, ce), d = this.markerEnd = wo("end", W, Pe, pe, h, b, 0, ce), ce && (F = Ns.quickSetter([u, d], pe.a, io)), ge || hs.length && !0 === gs(he, "fixedMarkers") || (Y = so(H = ve ? Fs : he).position, H.style.position = "absolute" === Y || "fixed" === Y ? Y : "relative", Ns.set([p, f], {force3D: !0}), M = Ns.quickSetter(p, pe.a, io), P = Ns.quickSetter(f, pe.a, io))
                    }
                    if (ce) {
                        var Oe = ce.vars.onUpdate, De = ce.vars.onUpdateParams;
                        ce.eventCallback("onUpdate", (function () {
                            xe.update(0, 0, 1), Oe && Oe.apply(ce, De || [])
                        }))
                    }
                    if (xe.previous = function () {
                        return xo[xo.indexOf(xe) - 1]
                    }, xe.next = function () {
                        return xo[xo.indexOf(xe) + 1]
                    }, xe.revert = function (e, t) {
                        if (!t) return xe.kill(!0);
                        var r = !1 !== e || !xe.enabled, i = Gs;
                        r !== xe.isReverted && (r && (j = Math.max(Ae(), xe.scroll.rec || 0), Me = xe.progress, q = n && n.progress()), u && [u, d, p, f].forEach((function (e) {
                            return e.style.display = r ? "none" : "block"
                        })), r && (Gs = xe, xe.update(r)), !J || oe && xe.isActive || (r ? function (e, t, n) {
                            Go(n);
                            var r = e._gsap;
                            if (r.spacerIsNative) Go(r.spacerState); else if (e._gsap.swappedIn) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t), i.removeChild(t))
                            }
                            e._gsap.swappedIn = !1
                        }(J, w, g) : $o(J, w, so(J), E)), r || xe.update(r), Gs = i, xe.isReverted = r)
                    }, xe.refresh = function (i, s, h, b) {
                        if (!Gs && xe.enabled || s) if (J && i && xa) fo(e, "scrollEnd", Po); else {
                            !va && Te && Te(xe), Gs = xe, r.tween && !h && (r.tween.kill(), r.tween = 0), I && I.pause(), te && n && n.revert({kill: !1}).invalidate(), xe.isReverted || xe.revert(!0, !0), xe._subPinOffset = !1;
                            var T, C, M, P, O, D, L, N, z, F, B, X, H, Y = Se(), $ = ke(), V = ce ? ce.duration() : za(he, pe), G = v <= .01, W = 0, U = b || 0, Q = Ba(h) ? h.end : t.end, ne = t.endTrigger || Z, re = Ba(h) ? h.start : t.start || (0 !== t.start && Z ? J ? "0 0" : "0 100%" : 0), ie = xe.pinnedContainer = t.pinnedContainer && Es(t.pinnedContainer, xe),
                                se = Z && Math.max(0, xo.indexOf(xe)) || 0, ae = se;
                            for (we && Ba(h) && (X = Ns.getProperty(p, pe.p), H = Ns.getProperty(f, pe.p)); ae--;) (D = xo[ae]).end || D.refresh(0, 1) || (Gs = xe), !(L = D.pin) || L !== Z && L !== J && L !== ie || D.isReverted || (F || (F = []), F.unshift(D), D.revert(!0, !0)), D !== xo[ae] && (se--, ae--);
                            for (qa(re) && (re = re(xe)), re = Sa(re, "start", xe), l = Ko(re, Z, Y, pe, Ae(), u, p, xe, $, be, ge, V, ce, xe._startClamp && "_startClamp") || (J ? -.001 : 0), qa(Q) && (Q = Q(xe)), ja(Q) && !Q.indexOf("+=") && (~Q.indexOf(" ") ? Q = (ja(re) ? re.split(" ")[0] : "") + Q : (W = _o(Q.substr(2), Y), Q = ja(re) ? re : (ce ? Ns.utils.mapRange(0, ce.duration(), ce.scrollTrigger.start, ce.scrollTrigger.end, l) : l) + W, ne = Z)), Q = Sa(Q, "end", xe), c = Math.max(l, Ko(Q || (ne ? "100% 0" : V), ne, Y, pe, Ae() + W, d, f, xe, $, be, ge, V, ce, xe._endClamp && "_endClamp")) || -.001, W = 0, ae = se; ae--;) (L = (D = xo[ae]).pin) && D.start - D._pinPush <= l && !ce && D.end > 0 && (T = D.end - (xe._startClamp ? Math.max(0, D.start) : D.start), (L === Z && D.start - D._pinPush < l || L === ie) && isNaN(re) && (W += T * (1 - D.progress)), L === J && (U += T));
                            if (l += W, c += W, xe._startClamp && (xe._startClamp += W), xe._endClamp && !va && (xe._endClamp = c || -.001, c = Math.min(c, za(he, pe))), v = c - l || (l -= .01) && .001, G && (Me = Ns.utils.clamp(0, 1, Ns.utils.normalize(l, c, j))), xe._pinPush = U, u && W && ((T = {})[pe.a] = "+=" + W, ie && (T[pe.p] = "-=" + Ae()), Ns.set([u, d], T)), !J || fa && xe.end >= za(he, pe)) {
                                if (Z && Ae() && !ce) for (C = Z.parentNode; C && C !== Fs;) C._pinOffset && (l -= C._pinOffset, c -= C._pinOffset), C = C.parentNode
                            } else T = so(J), P = pe === Cs, M = Ae(), S = parseFloat(x(pe.a)) + U, !V && c > 1 && (B = {
                                style: B = (ve ? js.scrollingElement || qs : he).style,
                                value: B["overflow" + pe.a.toUpperCase()]
                            }, ve && "scroll" !== so(Fs)["overflow" + pe.a.toUpperCase()] && (B.style["overflow" + pe.a.toUpperCase()] = "scroll")), $o(J, w, T), _ = Wo(J), C = oo(J, !0), N = ge && Ms(he, P ? ks : Cs)(), ee && ((E = [ee + pe.os2, v + U + io]).t = w, (ae = ee === eo ? lo(J, pe) + v + U : 0) && (E.push(pe.d, ae + io), "auto" !== w.style.flexBasis && (w.style.flexBasis = ae + io)), Go(E), ie && xo.forEach((function (e) {
                                e.pin === ie && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            })), ge && Ae(j)), ge && ((O = {
                                top: C.top + (P ? M - l : N) + io,
                                left: C.left + (P ? N : M - l) + io,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[Wa] = O["max" + no] = Math.ceil(C.width) + io, O[Ua] = O["max" + ro] = Math.ceil(C.height) + io, O[to] = O[to + Za] = O[to + Ka] = O[to + Ja] = O[to + Qa] = "0", O[eo] = T[eo], O[eo + Za] = T[eo + Za], O[eo + Ka] = T[eo + Ka], O[eo + Ja] = T[eo + Ja], O[eo + Qa] = T[eo + Qa], y = function (e, t, n) {
                                for (var r, i = [], s = e.length, a = n ? 8 : 0; a < s; a += 2) r = e[a], i.push(r, r in t ? t[r] : e[a + 1]);
                                return i.t = e.t, i
                            }(g, O, oe), va && Ae(0)), n ? (z = n._initted, ta(1), n.render(n.duration(), !0, !0), k = x(pe.a) - S + v + U, A = Math.abs(v - k) > 1, ge && A && y.splice(y.length - 2, 2), n.render(0, !0, !0), z || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), ta(0)) : k = v, B && (B.value ? B.style["overflow" + pe.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + pe.a));
                            F && F.forEach((function (e) {
                                return e.revert(!1, !0)
                            })), xe.start = l, xe.end = c, a = o = va ? j : Ae(), ce || va || (a < j && Ae(j), xe.scroll.rec = 0), xe.revert(!1, !0), Ee = wa(), R && (Ce = -1, R.restart(!0)), Gs = 0, n && fe && (n._initted || q) && n.progress() !== q && n.progress(q || 0, !0).render(n.time(), !0, !0), (G || Me !== xe.progress || ce) && (n && !fe && n.totalProgress(ce && l < -.001 && !Me ? Ns.utils.normalize(l, c, 0) : Me, !0), xe.progress = G || (a - l) / v === Me ? 0 : Me), J && ee && (w._pinOffset = Math.round(xe.progress * k)), I && I.invalidate(), isNaN(X) || (X -= Ns.getProperty(p, pe.p), H -= Ns.getProperty(f, pe.p), el(p, pe, X), el(u, pe, X - (b || 0)), el(f, pe, H), el(d, pe, H - (b || 0))), G && !va && xe.update(), !K || va || m || (m = !0, K(xe), m = !1)
                        }
                    }, xe.getVelocity = function () {
                        return (Ae() - o) / (wa() - $s) * 1e3 || 0
                    }, xe.endAnimation = function () {
                        Xa(xe.callbackAnimation), n && (I ? I.progress(1) : n.paused() ? fe || Xa(n, xe.direction < 0, 1) : Xa(n, n.reversed()))
                    }, xe.labelToScroll = function (e) {
                        return n && n.labels && (l || xe.refresh() || l) + n.labels[e] / n.duration() * v || 0
                    }, xe.getTrailing = function (e) {
                        var t = xo.indexOf(xe), n = xe.direction > 0 ? xo.slice(0, t).reverse() : xo.slice(t + 1);
                        return (ja(e) ? n.filter((function (t) {
                            return t.vars.preventOverlaps === e
                        })) : n).filter((function (e) {
                            return xe.direction > 0 ? e.end <= l : e.start >= c
                        }))
                    }, xe.update = function (e, t, i) {
                        if (!ce || i || e) {
                            var s, u, d, f, h, m, g, b = !0 === va ? j : xe.scroll(), x = e ? 0 : (b - l) / v, E = x < 0 ? 0 : x > 1 ? 1 : x || 0, O = xe.progress;
                            if (t && (o = a, a = ce ? Ae() : b, ae && (L = D, D = n && !fe ? n.totalProgress() : E)), ne && !E && J && !Gs && !_a && xa && l < b + (b - o) / (wa() - $s) * ne && (E = 1e-4), E !== O && xe.enabled) {
                                if (f = (h = (s = xe.isActive = !!E && E < 1) != (!!O && O < 1)) || !!E != !!O, xe.direction = E > O ? 1 : -1, xe.progress = E, f && !Gs && (u = E && !O ? 0 : 1 === E ? 1 : 1 === O ? 2 : 3, fe && (d = !h && "none" !== _e[u + 1] && _e[u + 1] || _e[u], g = n && ("complete" === d || "reset" === d || d in n))), de && (h || g) && (g || Q || !n) && (qa(de) ? de(xe) : xe.getTrailing(de).forEach((function (e) {
                                    return e.endAnimation()
                                }))), fe || (!I || Gs || _a ? n && n.totalProgress(E, !(!Gs || !Ee && !e)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", E, n._tTime / n._tDur) : (I.vars.totalProgress = E, I.invalidate().restart()))), J) if (e && ee && (w.style[ee + pe.os2] = C), ge) {
                                    if (f) {
                                        if (m = !e && E > O && c + 1 > b && b + 1 >= za(he, pe), oe) if (e || !s && !m) Zo(J, w); else {
                                            var N = oo(J, !0), z = b - l;
                                            Zo(J, Fs, N.top + (pe === Cs ? z : 0) + io, N.left + (pe === Cs ? 0 : z) + io)
                                        }
                                        Go(s || m ? y : _), A && E < 1 && s || T(S + (1 !== E || m ? 0 : k))
                                    }
                                } else T(Pa(S + k * E));
                                ae && !r.tween && !Gs && !_a && R.restart(!0), G && (h || se && E && (E < 1 || !ha)) && Hs(G.targets).forEach((function (e) {
                                    return e.classList[s || se ? "add" : "remove"](G.className)
                                })), V && !fe && !e && V(xe), f && !Gs ? (fe && (g && ("complete" === d ? n.pause().totalProgress(1) : "reset" === d ? n.restart(!0).pause() : "restart" === d ? n.restart(!0) : n[d]()), V && V(xe)), !h && ha || (U && h && Ha(xe, U), ye[u] && Ha(xe, ye[u]), se && (1 === E ? xe.kill(!1, 1) : ye[u] = 0), h || ye[u = 1 === E ? 1 : 3] && Ha(xe, ye[u])), ue && !s && Math.abs(xe.getVelocity()) > (Fa(ue) ? ue : 2500) && (Xa(xe.callbackAnimation), I ? I.progress(1) : Xa(n, "reverse" === d ? 1 : !E, 1))) : fe && V && !Gs && V(xe)
                            }
                            if (P) {
                                var q = ce ? b / ce.duration() * (ce._caScrollDist || 0) : b;
                                M(q + (p._isFlipped ? 1 : 0)), P(q)
                            }
                            F && F(-b / ce.duration() * (ce._caScrollDist || 0))
                        }
                    }, xe.enable = function (t, n) {
                        xe.enabled || (xe.enabled = !0, fo(he, "resize", Eo), ve || fo(he, "scroll", ko), Te && fo(e, "refreshInit", Te), !1 !== t && (xe.progress = Me = 0, a = o = Ce = Ae()), !1 !== n && xe.refresh())
                    }, xe.getTween = function (e) {
                        return e && r ? r.tween : I
                    }, xe.setPositions = function (e, t, n, r) {
                        if (ce) {
                            var i = ce.scrollTrigger, s = ce.duration(), a = i.end - i.start;
                            e = i.start + a * e / s, t = i.start + a * t / s
                        }
                        xe.refresh(!1, !1, {start: ka(e, n && !!xe._startClamp), end: ka(t, n && !!xe._endClamp)}, r), xe.update()
                    }, xe.adjustPinSpacing = function (e) {
                        if (E && e) {
                            var t = E.indexOf(pe.d) + 1;
                            E[t] = parseFloat(E[t]) + e + io, E[1] = parseFloat(E[1]) + e + io, Go(E)
                        }
                    }, xe.disable = function (t, n) {
                        if (xe.enabled && (!1 !== t && xe.revert(!0, !0), xe.enabled = xe.isActive = !1, n || I && I.pause(), j = 0, i && (i.uncache = 1), Te && ho(e, "refreshInit", Te), R && (R.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !ve)) {
                            for (var s = xo.length; s--;) if (xo[s].scroller === he && xo[s] !== xe) return;
                            ho(he, "resize", Eo), ve || ho(he, "scroll", ko)
                        }
                    }, xe.kill = function (e, r) {
                        xe.disable(e, r), I && !r && I.kill(), W && delete To[W];
                        var s = xo.indexOf(xe);
                        s >= 0 && xo.splice(s, 1), s === Ks && Bo > 0 && Ks--, s = 0, xo.forEach((function (e) {
                            return e.scroller === xe.scroller && (s = 1)
                        })), s || va || (xe.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({kill: !1}), r || n.kill()), u && [u, d, p, f].forEach((function (e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        })), ya === xe && (ya = 0), J && (i && (i.uncache = 1), s = 0, xo.forEach((function (e) {
                            return e.pin === J && s++
                        })), s || (i.spacer = 0)), t.onKill && t.onKill(xe)
                    }, xo.push(xe), xe.enable(!1, !1), B && B(xe), n && n.add && !v) {
                        var Le = xe.update;
                        xe.update = function () {
                            xe.update = Le, l || c || xe.refresh()
                        }, Ns.delayedCall(.01, xe.update), v = .01, l = c = 0
                    } else xe.refresh();
                    J && function () {
                        if (ga !== zo) {
                            var e = ga = zo;
                            requestAnimationFrame((function () {
                                return e === zo && qo(!0)
                            }))
                        }
                    }()
                } else this.update = this.refresh = this.kill = Aa
            }, e.register = function (t) {
                return zs || (Ns = t || Da(), Oa() && window.document && e.enable(), zs = Ta), zs
            }, e.defaults = function (e) {
                if (e) for (var t in e) go[t] = e[t];
                return go
            }, e.disable = function (e, t) {
                Ta = 0, xo.forEach((function (n) {
                    return n[t ? "kill" : "disable"](e)
                })), ho(Rs, "wheel", ko), ho(js, "scroll", ko), clearInterval(Vs), ho(js, "touchcancel", Aa), ho(Fs, "touchstart", Aa), po(ho, js, "pointerdown,touchstart,mousedown", Ea), po(ho, js, "pointerup,touchend,mouseup", Ma), Xs.kill(), Ra(ho);
                for (var n = 0; n < fs.length; n += 3) mo(ho, fs[n], fs[n + 1]), mo(ho, fs[n], fs[n + 2])
            }, e.enable = function () {
                if (Rs = window, js = document, qs = js.documentElement, Fs = js.body, Ns && (Hs = Ns.utils.toArray, Ys = Ns.utils.clamp, la = Ns.core.context || Aa, ta = Ns.core.suppressOverwrites || Aa, ca = Rs.history.scrollRestoration || "auto", Fo = Rs.pageYOffset, Ns.core.globals("ScrollTrigger", e), Fs)) {
                    Ta = 1, (ua = document.createElement("div")).style.height = "100vh", ua.style.position = "absolute", Ro(), Ca(), Is.register(Ns), e.isTouch = Is.isTouch, oa = Is.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fo(Rs, "wheel", ko), Bs = [Rs, js, qs, Fs], Ns.matchMedia ? (e.matchMedia = function (e) {
                        var t, n = Ns.matchMedia();
                        for (t in e) n.add(t, e[t]);
                        return n
                    }, Ns.addEventListener("matchMediaInit", (function () {
                        return Io()
                    })), Ns.addEventListener("matchMediaRevert", (function () {
                        return Lo()
                    })), Ns.addEventListener("matchMedia", (function () {
                        qo(0, 1), Oo("matchMedia")
                    })), Ns.matchMedia("(orientation: portrait)", (function () {
                        return Co(), Co
                    }))) : console.warn("Requires GSAP 3.11.0 or later"), Co(), fo(js, "scroll", ko);
                    var t, n, r = Fs.style, i = r.borderTopStyle, s = Ns.core.Animation.prototype;
                    for (s.revert || Object.defineProperty(s, "revert", {
                        value: function () {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", t = oo(Fs), Cs.m = Math.round(t.top + Cs.sc()) || 0, ks.m = Math.round(t.left + ks.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), Vs = setInterval(So, 250), Ns.delayedCall(.5, (function () {
                        return _a = 0
                    })), fo(js, "touchcancel", Aa), fo(Fs, "touchstart", Aa), po(fo, js, "pointerdown,touchstart,mousedown", Ea), po(fo, js, "pointerup,touchend,mouseup", Ma), Us = Ns.utils.checkPrefix("transform"), Yo.push(Us), zs = wa(), Xs = Ns.delayedCall(.2, qo).pause(), Js = [js, "visibilitychange", function () {
                        var e = Rs.innerWidth, t = Rs.innerHeight;
                        js.hidden ? (Qs = e, Zs = t) : Qs === e && Zs === t || Eo()
                    }, js, "DOMContentLoaded", qo, Rs, "load", qo, Rs, "resize", Eo], Ra(fo), xo.forEach((function (e) {
                        return e.enable(0, 1)
                    })), n = 0; n < fs.length; n += 3) mo(ho, fs[n], fs[n + 1]), mo(ho, fs[n], fs[n + 2])
                }
            }, e.config = function (t) {
                "limitCallbacks" in t && (ha = !!t.limitCallbacks);
                var n = t.syncInterval;
                n && clearInterval(Vs) || (Vs = n) && setInterval(So, n), "ignoreMobileResize" in t && (ia = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ra(ho) || Ra(fo, t.autoRefreshEvents || "none"), na = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }, e.scrollerProxy = function (e, t) {
                var n = Es(e), r = fs.indexOf(n), i = La(n);
                ~r && fs.splice(r, i ? 6 : 2), t && (i ? hs.unshift(Rs, t, Fs, t, qs, t) : hs.unshift(n, t))
            }, e.clearMatchMedia = function (e) {
                xo.forEach((function (t) {
                    return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                }))
            }, e.isInViewport = function (e, t, n) {
                var r = (ja(e) ? Es(e) : e).getBoundingClientRect(), i = r[n ? Wa : Ua] * t || 0;
                return n ? r.right - i > 0 && r.left + i < Rs.innerWidth : r.bottom - i > 0 && r.top + i < Rs.innerHeight
            }, e.positionInViewport = function (e, t, n) {
                ja(e) && (e = Es(e));
                var r = e.getBoundingClientRect(), i = r[n ? Wa : Ua], s = null == t ? i / 2 : t in yo ? yo[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
                return n ? (r.left + s) / Rs.innerWidth : (r.top + s) / Rs.innerHeight
            }, e.killAll = function (e) {
                if (xo.slice(0).forEach((function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                })), !0 !== e) {
                    var t = Mo.killAll || [];
                    Mo = {}, t.forEach((function (e) {
                        return e()
                    }))
                }
            }, e
        }();
        nl.version = "3.12.3", nl.saveStyles = function (e) {
            return e ? Hs(e).forEach((function (e) {
                if (e && e.style) {
                    var t = Do.indexOf(e);
                    t >= 0 && Do.splice(t, 5), Do.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ns.core.getCache(e), la())
                }
            })) : Do
        }, nl.revert = function (e, t) {
            return Io(!e, t)
        }, nl.create = function (e, t) {
            return new nl(e, t)
        }, nl.refresh = function (e) {
            return e ? Eo() : (zs || nl.register()) && qo(!0)
        }, nl.update = function (e) {
            return ++fs.cache && Xo(!0 === e ? 2 : 0)
        }, nl.clearScrollMemory = No, nl.maxScroll = function (e, t) {
            return za(e, t ? ks : Cs)
        }, nl.getScrollFunc = function (e, t) {
            return Ms(Es(e), t ? ks : Cs)
        }, nl.getById = function (e) {
            return To[e]
        }, nl.getAll = function () {
            return xo.filter((function (e) {
                return "ScrollSmoother" !== e.vars.id
            }))
        }, nl.isScrolling = function () {
            return !!xa
        }, nl.snapDirectional = uo, nl.addEventListener = function (e, t) {
            var n = Mo[e] || (Mo[e] = []);
            ~n.indexOf(t) || n.push(t)
        }, nl.removeEventListener = function (e, t) {
            var n = Mo[e], r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
        }, nl.batch = function (e, t) {
            var n, r = [], i = {}, s = t.interval || .016, a = t.batchMax || 1e9, o = function (e, t) {
                var n = [], r = [], i = Ns.delayedCall(s, (function () {
                    t(n, r), n = [], r = []
                })).pause();
                return function (e) {
                    n.length || i.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && i.progress(1)
                }
            };
            for (n in t) i[n] = "on" === n.substr(0, 2) && qa(t[n]) && "onRefreshInit" !== n ? o(0, t[n]) : t[n];
            return qa(a) && (a = a(), fo(nl, "refresh", (function () {
                return a = t.batchMax()
            }))), Hs(e).forEach((function (e) {
                var t = {};
                for (n in i) t[n] = i[n];
                t.trigger = e, r.push(nl.create(t))
            })), r
        };
        var rl, il = function (e, t, n, r) {
            return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        }, sl = function e(t, n) {
            !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (Is.isTouch ? " pinch-zoom" : "") : "none", t === qs && e(Fs, n)
        }, al = {auto: 1, scroll: 1}, ol = function (e) {
            var t, n = e.event, r = e.target, i = e.axis, s = (n.changedTouches ? n.changedTouches[0] : n).target, a = s._gsap || Ns.core.getCache(s), o = wa();
            if (!a._isScrollT || o - a._isScrollT > 2e3) {
                for (; s && s !== Fs && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !al[(t = so(s)).overflowY] && !al[t.overflowX]);) s = s.parentNode;
                a._isScroll = s && s !== r && !La(s) && (al[(t = so(s)).overflowY] || al[t.overflowX]), a._isScrollT = o
            }
            (a._isScroll || "x" === i) && (n.stopPropagation(), n._gsapAllow = !0)
        }, ll = function (e, t, n, r) {
            return Is.create({
                target: e, capture: !0, debounce: !1, lockAxis: !0, type: t, onWheel: r = r && ol, onPress: r, onDrag: r, onScroll: r, onEnable: function () {
                    return n && fo(js, Is.eventTypes[0], ul, !1, !0)
                }, onDisable: function () {
                    return ho(js, Is.eventTypes[0], ul, !0)
                }
            })
        }, cl = /(input|label|select|textarea)/i, ul = function (e) {
            var t = cl.test(e.target.tagName);
            (t || rl) && (e._gsapAllow = !0, rl = t)
        };
        nl.sort = function (e) {
            return xo.sort(e || function (e, t) {
                return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
            })
        }, nl.observe = function (e) {
            return new Is(e)
        }, nl.normalizeScroll = function (e) {
            if (void 0 === e) return ra;
            if (!0 === e && ra) return ra.enable();
            if (!1 === e) return ra && ra.kill(), void (ra = e);
            var t = e instanceof Is ? e : function (e) {
                Ba(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
                var t, n, r, i, s, a, o, l, c = e, u = c.normalizeScrollX, d = c.momentum, p = c.allowNestedScroll, f = c.onRelease, h = Es(e.target) || qs, m = Ns.core.globals().ScrollSmoother, v = m && m.get(), g = oa && (e.content && Es(e.content) || v && !1 !== e.content && !v.smooth() && v.content()), y = Ms(h, Cs), _ = Ms(h, ks), w = 1,
                    b = (Is.isTouch && Rs.visualViewport ? Rs.visualViewport.scale * Rs.visualViewport.width : Rs.outerWidth) / Rs.innerWidth, x = 0, T = qa(d) ? function () {
                        return d(t)
                    } : function () {
                        return d || 2.8
                    }, S = ll(h, e.type, !0, p), k = function () {
                        return i = !1
                    }, C = Aa, E = Aa, M = function () {
                        n = za(h, Cs), E = Ys(oa ? 1 : 0, n), u && (C = Ys(0, za(h, ks))), r = zo
                    }, A = function () {
                        g._gsap.y = Pa(parseFloat(g._gsap.y) + y.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
                    }, P = function () {
                        M(), s.isActive() && s.vars.scrollY > n && (y() > n ? s.progress(1) && y(n) : s.resetTo("scrollY", n))
                    };
                return g && Ns.set(g, {y: "+=0"}), e.ignoreCheck = function (e) {
                    return oa && "touchmove" === e.type && function () {
                        if (i) {
                            requestAnimationFrame(k);
                            var e = Pa(t.deltaY / 2), n = E(y.v - e);
                            if (g && n !== y.v + y.offset) {
                                y.offset = n - y.v;
                                var r = Pa((parseFloat(g && g._gsap.y) || 0) - y.offset);
                                g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", g._gsap.y = r + "px", y.cacheID = fs.cache, Xo()
                            }
                            return !0
                        }
                        y.offset && A(), i = !0
                    }() || w > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
                }, e.onPress = function () {
                    i = !1;
                    var e = w;
                    w = Pa((Rs.visualViewport && Rs.visualViewport.scale || 1) / b), s.pause(), e !== w && sl(h, w > 1.01 || !u && "x"), a = _(), o = y(), M(), r = zo
                }, e.onRelease = e.onGestureStart = function (e, t) {
                    if (y.offset && A(), t) {
                        fs.cache++;
                        var r, i, a = T();
                        u && (i = (r = _()) + .05 * a * -e.velocityX / .227, a *= il(_, r, i, za(h, ks)), s.vars.scrollX = C(i)), i = (r = y()) + .05 * a * -e.velocityY / .227, a *= il(y, r, i, za(h, Cs)), s.vars.scrollY = E(i), s.invalidate().duration(a).play(.01), (oa && s.vars.scrollY >= n || r >= n - 1) && Ns.to({}, {onUpdate: P, duration: a})
                    } else l.restart(!0);
                    f && f(e)
                }, e.onWheel = function () {
                    s._ts && s.pause(), wa() - x > 1e3 && (r = 0, x = wa())
                }, e.onChange = function (e, t, n, i, s) {
                    if (zo !== r && M(), t && u && _(C(i[2] === t ? a + (e.startX - e.x) : _() + t - i[1])), n) {
                        y.offset && A();
                        var l = s[2] === n, c = l ? o + e.startY - e.y : y() + n - s[1], d = E(c);
                        l && c !== d && (o += d - c), y(d)
                    }
                    (n || t) && Xo()
                }, e.onEnable = function () {
                    sl(h, !u && "x"), nl.addEventListener("refresh", P), fo(Rs, "resize", P), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = _.smooth = !1), S.enable()
                }, e.onDisable = function () {
                    sl(h, !0), ho(Rs, "resize", P), nl.removeEventListener("refresh", P), S.kill()
                }, e.lockAxis = !1 !== e.lockAxis, (t = new Is(e)).iOS = oa, oa && !y() && y(1), oa && Ns.ticker.add(Aa), l = t._dc, s = Ns.to(t, {
                    ease: "power4", paused: !0, scrollX: u ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: {
                        scrollY: Jo(y, y(), (function () {
                            return s.pause()
                        }))
                    }, onUpdate: Xo, onComplete: l.vars.onComplete
                }), t
            }(e);
            return ra && ra.target === t.target && ra.kill(), La(t.target) && (ra = t), t
        }, nl.core = {
            _getVelocityProp: As, _inputObserver: ll, _scrollers: fs, _proxies: hs, bridge: {
                ss: function () {
                    xa || Oo("scrollStart"), xa = wa()
                }, ref: function () {
                    return Gs
                }
            }
        }, Da() && Ns.registerPlugin(nl);
        var dl, pl, fl, hl, ml, vl, gl, yl, _l = function () {
            return "undefined" != typeof window
        }, wl = function () {
            return dl || _l() && (dl = window.gsap) && dl.registerPlugin && dl
        }, bl = function (e) {
            return "string" == typeof e
        }, xl = function (e) {
            return "function" == typeof e
        }, Tl = function (e, t) {
            var n = "x" === t ? "Width" : "Height", r = "scroll" + n, i = "client" + n;
            return e === fl || e === hl || e === ml ? Math.max(hl[r], ml[r]) - (fl["inner" + n] || hl[i] || ml[i]) : e[r] - e["offset" + n]
        }, Sl = function (e, t) {
            var n = "scroll" + ("x" === t ? "Left" : "Top");
            return e === fl && (null != e.pageXOffset ? n = "page" + t.toUpperCase() + "Offset" : e = null != hl[n] ? hl : ml), function () {
                return e[n]
            }
        }, kl = function (e, t) {
            if (!(e = vl(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {x: 0, y: 0};
            var n = e.getBoundingClientRect(), r = !t || t === fl || t === ml, i = r ? {top: hl.clientTop - (fl.pageYOffset || hl.scrollTop || ml.scrollTop || 0), left: hl.clientLeft - (fl.pageXOffset || hl.scrollLeft || ml.scrollLeft || 0)} : t.getBoundingClientRect(), s = {x: n.left - i.left, y: n.top - i.top};
            return !r && t && (s.x += Sl(t, "x")(), s.y += Sl(t, "y")()), s
        }, Cl = function (e, t, n, r, i) {
            return isNaN(e) || "object" == typeof e ? bl(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - i : "max" === e ? Tl(t, n) - i : Math.min(Tl(t, n), kl(e, t)[n] - i) : parseFloat(e) - i
        }, El = function () {
            dl = wl(), _l() && dl && "undefined" != typeof document && document.body && (fl = window, ml = document.body, hl = document.documentElement, vl = dl.utils.toArray, dl.config({autoKillThreshold: 7}), gl = dl.config(), pl = 1)
        }, Ml = {
            version: "3.12.3", name: "scrollTo", rawVars: 1, register: function (e) {
                dl = e, El()
            }, init: function (e, t, n, r, i) {
                pl || El();
                var s = this, a = dl.getProperty(e, "scrollSnapType");
                s.isWin = e === fl, s.target = e, s.tween = n, t = function (e, t, n, r) {
                    if (xl(e) && (e = e(t, n, r)), "object" != typeof e) return bl(e) && "max" !== e && "=" !== e.charAt(1) ? {x: e, y: e} : {y: e};
                    if (e.nodeType) return {y: e, x: e};
                    var i, s = {};
                    for (i in e) s[i] = "onAutoKill" !== i && xl(e[i]) ? e[i](t, n, r) : e[i];
                    return s
                }(t, r, e, i), s.vars = t, s.autoKill = !!t.autoKill, s.getX = Sl(e, "x"), s.getY = Sl(e, "y"), s.x = s.xPrev = s.getX(), s.y = s.yPrev = s.getY(), yl || (yl = dl.core.globals().ScrollTrigger), "smooth" === dl.getProperty(e, "scrollBehavior") && dl.set(e, {scrollBehavior: "auto"}), a && "none" !== a && (s.snap = 1, s.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (s.add(s, "x", s.x, Cl(t.x, e, "x", s.x, t.offsetX || 0), r, i), s._props.push("scrollTo_x")) : s.skipX = 1, null != t.y ? (s.add(s, "y", s.y, Cl(t.y, e, "y", s.y, t.offsetY || 0), r, i), s._props.push("scrollTo_y")) : s.skipY = 1
            }, render: function (e, t) {
                for (var n, r, i, s, a, o = t._pt, l = t.target, c = t.tween, u = t.autoKill, d = t.xPrev, p = t.yPrev, f = t.isWin, h = t.snap, m = t.snapInline; o;) o.r(e, o.d), o = o._next;
                n = f || !t.skipX ? t.getX() : d, i = (r = f || !t.skipY ? t.getY() : p) - p, s = n - d, a = gl.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (s > a || s < -a) && n < Tl(l, "x") && (t.skipX = 1), !t.skipY && (i > a || i < -a) && r < Tl(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), f ? fl.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), !h || 1 !== e && 0 !== e || (r = l.scrollTop, n = l.scrollLeft, m ? l.style.scrollSnapType = m : l.style.removeProperty("scroll-snap-type"), l.scrollTop = r + 1, l.scrollLeft = n + 1, l.scrollTop = r, l.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y, yl && yl.update()
            }, kill: function (e) {
                var t = "scrollTo" === e;
                (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
            }
        };
        Ml.max = Tl, Ml.getOffset = kl, Ml.buildGetter = Sl, wl() && dl.registerPlugin(Ml), Ui.registerPlugin(nl, Ml);
        var Al = function () {
            var e = document.getElementsByTagName("html")[0];
            return function () {
                return parseInt(window.getComputedStyle(e).fontSize)
            }
        }();

        function Pl(e) {
            return parseInt(e) / Al()
        }

        t()(document).ready((function () {
            if (!document.querySelector(".rigs-design")) return;
            const e = document.querySelectorAll(".rigs-design__tab-item");
            let n = "0", r = new Map;
            const i = t()('.rigs-design__tab-info[data-rig-design="0"]').css("height");
            t()(".rigs-design__tabs-display").css("height", `${Pl(i)}rem`), e.forEach(((e, i) => {
                const s = e.getAttribute("data-rig-design");
                r.set(e, t()(`.rigs-design__tab-info[data-rig-design="${s}"]`)), e.addEventListener("click", (i => {
                    ((e, i) => {
                        t()(`.rigs-design__tab-item[data-rig-design="${n}"]`)[0].classList.remove("active"), t()(`.rigs-design__tab-info[data-rig-design="${n}"]`)[0].classList.remove("active"), e.classList.add("active");
                        const s = r.get(e);
                        s[0].classList.add("active");
                        const a = s.css("height");
                        t()(".rigs-design__tabs-display").css("height", `${Pl(a)}rem`), n = i
                    })(e, s)
                }))
            })), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".rigs-design__tabs-display").data("platform")) return;
                        t()(".rigs-design__tabs-display").data("platform", "mobile");
                        const e = t()(`.rigs-design__tab-info[data-rig-design="${n}"]`).css("height");
                        t()(".rigs-design__tabs-display").css("height", `${Pl(e)}rem`)
                    } else {
                        if ("mobile" != t()(".rigs-design__tabs-display").data("platform")) return;
                        t()(".rigs-design__tabs-display").data("platform", "desktop");
                        const e = t()(`.rigs-design__tab-info[data-rig-design="${n}"]`).css("height");
                        t()(".rigs-design__tabs-display").css("height", `${Pl(e)}rem`)
                    }
                }()
            })), t()(".rigs-design__tabs-display").data("platform") || (screen.width < 769 ? t()(".rigs-design__tabs-display").data("platform", "mobile") : t()(".rigs-design__tabs-display").data("platform", "desktop"))
        })), t()(document).ready((function () {
            if (!document.querySelector(".land-rigs")) return;
            let e;
            document.querySelector(".land-rigs"), t()(".land-rigs").data("platform") || (screen.width < 769 ? t()(".land-rigs").data("platform", "mobile") : t()(".land-rigs").data("platform", "desktop"));
            const n = Ui.utils.toArray(".land-rigs__item-text").length, r = Ui.timeline({scrollTrigger: {trigger: ".land-rigs", pin: !0, start: "top top", end: () => "+=" + 350 * n}});
            Ui.registerPlugin(nl), Ui.set(".land-rigs__info-text-wrapper", {autoAlpha: 1});
            var i = Ui.utils.toArray(".land-rigs__item-text");
            Ui.set(i[0], {position: "fixed"});
            var s = i.slice(1);
            Ui.set(s, {position: "absolute", yPercent: 100});
            var a = Ui.utils.toArray(".land-rigs__item-photo");
            Ui.set(a, {position: "fixed"});
            var o = a.slice(1);
            Ui.set(a, {autoAlpha: 0}), Ui.set(a[0], {autoAlpha: 1}), Ui.utils.toArray("land-rigs__item-text p").slice(1);
            var l = Ui.utils.toArray(".trigger");
            Ui.set(l, {visibility: "hidden"}), s.forEach(((e, t) => {
                s[0].classList.add('_is-active')
                
                Ui.timeline({scrollTrigger: {trigger: l[t], start: "top top", toggleActions: "play none none reverse"}}).to(e, {yPercent: 0, duration: .6, ease: "power3.inOut"})
            })), s.forEach(((e, t) => {
                Ui.timeline({scrollTrigger: {trigger: l[t], start: "top top", toggleActions: "play none none reverse"}}).to(i[t], {yPercent: -100, duration: .6, ease: "power3.inOut", onStart: () => {
                s.forEach(section => section.classList.remove('_is-active'))
                s[t + 1].classList.add('_is-active')
              },
              onReverseComplete: () => {
                s.forEach(section => section.classList.remove('_is-active'))
                s[t].classList.add('_is-active')
              }})
            })), s.forEach(((e, t) => {
                Ui.timeline({scrollTrigger: {trigger: l[t], start: "top top", toggleActions: "play none none reverse"}}).to(o[t], {autoAlpha: 1, duration: .6, ease: "power3.inOut"})
            })), screen.width > 769 ? (nl.refresh(), e = new ee(".land-rigs__info-slider", {modules: [te], slidesPerView: 1, speed: 1e3, direction: "vertical", mousewheel: {releaseOnEdges: !0}, spaceBetween: 30}), e.destroy()) : (r.scrollTrigger.kill(), e = new ee(".land-rigs__info-slider", {
                modules: [ne],
                slidesPerView: 1,
                navigation: {nextEl: ".land-rigs__swiper-btn-next", prevEl: ".land-rigs__swiper-btn-prev"},
                spaceBetween: 30
            })), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".land-rigs").data("platform")) return;
                        t()(".land-rigs").data("platform", "mobile"), nl.disable(), e.destroy(), e = new ee(".land-rigs__info-slider", {modules: [te, ne], slidesPerView: 1, navigation: {nextEl: ".land-rigs__swiper-btn-next", prevEl: ".land-rigs__swiper-btn-prev"}, spaceBetween: 30})
                    } else {
                        if ("mobile" != t()(".land-rigs").data("platform")) return;
                        t()(".land-rigs").data("platform", "desktop"), e.destroy(), Ui.timeline({scrollTrigger: {trigger: ".land-rigs", pin: !0, start: "top top", end: () => "+=" + 350 * n}}), nl.enable(), nl.refresh()
                    }
                }()
            })), t()(".land-rigs__slide-more-btn").click((function (e) {
                const n = t()(this).closest(".land-rigs__slide-text").children(".land-rigs__info-list");
                "none" === n.css("display") ? n.slideDown(400) : n.slideUp(400)
            }))
        })), Ui.registerPlugin(nl, Ml), t()(document).ready((function () {
            if (!document.querySelector(".well-cem")) return;
            document.querySelector(".well-cem__display");
            const e = Ui.utils.toArray(".well-cem__item").length;
            Ui.timeline({scrollTrigger: {trigger: ".well-cem", pin: !0, start: "top top", end: () => "+=" + 750 * e}}), Ui.registerPlugin(nl), Ui.set(".well-cem__display", {autoAlpha: 1});
            var n = Ui.utils.toArray(".well-cem__item");
            Ui.set(n[0], {position: "fixed"});
            var r = n.slice(1);
            Ui.set(r, {position: "absolute", yPercent: 100}), Ui.utils.toArray("well-cem__item p").slice(1);
            var i = Ui.utils.toArray(".trigger");
            Ui.set(i, {height: 1e3}), Ui.set(i, {visibility: "hidden"}), r.forEach(((e, t) => {
                r[0].classList.add('_is-active')
                
                Ui.timeline({scrollTrigger: {trigger: i[t], start: "top -150px", toggleActions: "play none none reverse"}}).to(e, {yPercent: 0, duration: .6, ease: "power3.inOut"})
            })), r.forEach(((e, t) => {
                Ui.timeline({scrollTrigger: {trigger: i[t], start: "top -150px", toggleActions: "play none none reverse"}}).to(n[t], {yPercent: -100, duration: .6, ease: "power3.inOut", onStart: () => {
                r.forEach(section => section.classList.remove('_is-active'))
                r[t + 1].classList.add('_is-active')
              },
              onReverseComplete: () => {
                r.forEach(section => section.classList.remove('_is-active'))
                r[t].classList.add('_is-active')
              }})
            })), t()(".well-cem").data("platform") || (screen.width < 769 ? t()(".well-cem").data("platform", "mobile") : t()(".well-cem").data("platform", "desktop")), screen.width > 769 ? (Ui.set(i, {height: 1e3}), nl.refresh()) : (Ui.set(i, {height: 500}), nl.refresh()), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".well-cem").data("platform")) return;
                        t()(".well-cem").data("platform", "mobile"), Ui.set(i, {height: 500}), nl.refresh()
                    } else {
                        if ("mobile" != t()(".well-cem").data("platform")) return;
                        t()(".well-cem").data("platform", "desktop"), Ui.set(i, {height: 1e3}), nl.refresh()
                    }
                }()
            }))
        }));
        var Ol = function () {
            var e = document.getElementsByTagName("html")[0];
            return function () {
                return parseInt(window.getComputedStyle(e).fontSize)
            }
        }();

        function Dl(e) {
            return parseInt(e) / Ol()
        }

        t()(document).ready((function () {
            if (!document.querySelector(".mpd-advan")) return;
            const e = document.querySelectorAll(".mpd-advan__tab-item");
            let n = "0", r = new Map;
            const i = t()('.mpd-advan__tab-info[data-mpd-advan="0"]').css("height");
            t()(".mpd-advan__tabs-display").css("height", `${Dl(i)}rem`), e.forEach(((e, i) => {
                const s = e.getAttribute("data-mpd-advan");
                r.set(e, t()(`.mpd-advan__tab-info[data-mpd-advan="${s}"]`)), e.addEventListener("click", (i => {
                    ((e, i) => {
                        t()(`.mpd-advan__tab-item[data-mpd-advan="${n}"]`)[0].classList.remove("active"), t()(`.mpd-advan__tab-info[data-mpd-advan="${n}"]`)[0].classList.remove("active"), e.classList.add("active");
                        const s = r.get(e);
                        s[0].classList.add("active");
                        const a = s.css("height");
                        t()(".mpd-advan__tabs-display").css("height", `${Dl(a)}rem`), n = i
                    })(e, s)
                }))
            })), t()(".mpd-advan__tabs-display").data("platform") || (screen.width < 769 ? t()(".mpd-advan__tabs-display").data("platform", "mobile") : t()(".mpd-advan__tabs-display").data("platform", "desktop")), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".mpd-advan__tabs-display").data("platform")) return;
                        t()(".mpd-advan__tabs-display").data("platform", "mobile");
                        const e = t()('.mpd-advan__tab-info[data-mpd-advan="0"]').css("height");
                        t()(".mpd-advan__tabs-display").css("height", `${Dl(e)}rem`)
                    } else {
                        if ("mobile" != t()(".mpd-advan__tabs-display").data("platform")) return;
                        t()(".mpd-advan__tabs-display").data("platform", "desktop");
                        const e = t()(`.mpd-advan__tab-info[data-mpd-advan="${n}"]`).css("height");
                        t()(".mpd-advan__tabs-display").css("height", `${Dl(e)}rem`)
                    }
                }()
            }))
        })), t()(document).ready((function () {
            document.querySelector(".mpd-advan") && t()(".mpd-advan__item-title").click((function (e) {
                e.preventDefault(), t()(this).hasClass("active") ? (t()(this).removeClass("active"), t()(this).siblings(".mpd-advan__item-info").slideUp(400)) : (t()(".mpd-advan__item-title").removeClass("active"), t()(this).addClass("active"), t()(".mpd-advan__item-info").slideUp(400), t()(this).siblings(".mpd-advan__item-info").slideDown(400))
            }))
        })), document.getElementsByTagName("html")[0], t()(document).ready((function () {
            if (!document.querySelector(".history")) return;
            let e;
            t()(".history__swiper").data("platform") || (screen.width < 769 ? t()(".history__swiper").data("platform", "mobile") : t()(".history__swiper").data("platform", "desktop")), e = screen.width > 769 ? new ee(".history__swiper", {
                modules: [ne],
                slidesPerView: 2.25,
                speed: 600,
                navigation: {nextEl: ".history__swiper-btn-next", prevEl: ".history__swiper-btn-prev"}
            }) : new ee(".history__swiper", {modules: [ne], slidesPerView: 1.1, speed: 400, navigation: {nextEl: ".history__swiper-btn-next", prevEl: ".history__swiper-btn-prev"}}), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".history__swiper").data("platform")) return;
                        t()(".history__swiper").data("platform", "mobile"), e.destroy(), e = new ee(".history__swiper", {modules: [ne], slidesPerView: 1.1, speed: 400, navigation: {nextEl: ".history__swiper-btn-next", prevEl: ".history__swiper-btn-prev"}})
                    } else {
                        if ("mobile" != t()(".history__swiper").data("platform")) return;
                        t()(".history__swiper").data("platform", "desktop"), e.destroy(), e = new ee(".history__swiper", {modules: [ne], slidesPerView: 2.25, speed: 600, navigation: {nextEl: ".history__swiper-btn-next", prevEl: ".history__swiper-btn-prev"}})
                    }
                }()
            }))
        })), t()(document).ready((function () {
            // document.querySelector(".people") && t()(".people__view-all-btn").click((function () {
            //     t()(".people__wrapper").hasClass("show") ? (t()(".people__wrapper").removeClass("show"), t()(this).html("View all employees")) : (t()(".people__wrapper").addClass("show"), t()(this).html("Hide"))
            // }))
        })), t()(document).ready((function () {
            document.querySelector(".about-adv") && (t()(".about-adv__item-top").click((function (e) {
                e.preventDefault(), t()(this).hasClass("active") ? (t()(this).removeClass("active"), t()(this).siblings(".about-adv__item-info").slideUp(400)) : (t()(".about-adv__item-top").removeClass("active"), t()(this).addClass("active"), t()(".about-adv__item-info").slideUp(400), t()(this).siblings(".about-adv__item-info").slideDown(400))
            })), t()(".about-adv__item-view-all").click((function () {
                t()(this).hasClass("hide") ? (t()(this).siblings(".about-adv__item-info-more").removeClass("show"), t()(this).removeClass("hide"), t()(this).html("View all")) : (t()(this).siblings(".about-adv__item-info-more").addClass("show"), t()(this).addClass("hide"), t()(this).html("Hide"))
            })))
        })), t()(document).ready((function () {
            if (!document.querySelector(".licenses")) return;
            let e;
            t()(".licenses__swiper").data("platform") || (screen.width < 769 ? t()(".licenses__swiper").data("platform", "mobile") : t()(".licenses__swiper").data("platform", "desktop")), e = screen.width > 769 ? new ee(".licenses__swiper", {
                modules: [ne],
                slidesPerView: 3,
                speed: 500,
                navigation: {nextEl: ".licenses__swiper-btn-next", prevEl: ".licenses__swiper-btn-prev"}
            }) : new ee(".licenses__swiper", {modules: [ne], slidesPerView: 1.4, speed: 500, navigation: {nextEl: ".licenses__swiper-btn-next", prevEl: ".licenses__swiper-btn-prev"}}), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".licenses__swiper").data("platform")) return;
                        t()(".licenses__swiper").data("platform", "mobile"), e.destroy(), e = new ee(".licenses__swiper", {modules: [ne], slidesPerView: 1.4, speed: 500, navigation: {nextEl: ".licenses__swiper-btn-next", prevEl: ".licenses__swiper-btn-prev"}})
                    } else {
                        if ("mobile" != t()(".licenses__swiper").data("platform")) return;
                        t()(".licenses__swiper").data("platform", "desktop"), e.destroy(), e = new ee(".licenses__swiper", {modules: [ne], slidesPerView: 3, speed: 500, navigation: {nextEl: ".licenses__swiper-btn-next", prevEl: ".licenses__swiper-btn-prev"}})
                    }
                }()
            }))
        })), t()(document).ready((function () {
            if (!document.querySelector(".caring")) return;
            let e;
            t()(".caring__swiper").data("platform") || (screen.width < 769 ? t()(".caring__swiper").data("platform", "mobile") : t()(".caring__swiper").data("platform", "desktop")), screen.width < 769 && (e = new ee(".caring__swiper", {
                modules: [ne],
                slidesPerView: 1,
                speed: 400,
                navigation: {nextEl: ".caring__swiper-btn-next", prevEl: ".caring__swiper-btn-prev"}
            })), t()(window).resize((function () {
                !function () {
                    if (screen.width < 769) {
                        if ("desktop" != t()(".caring__swiper").data("platform")) return;
                        t()(".caring__swiper").data("platform", "mobile"), e && e.destroy(), e = new ee(".caring__swiper", {modules: [ne], slidesPerView: 1, speed: 400, navigation: {nextEl: ".caring__swiper-btn-next", prevEl: ".caring__swiper-btn-prev"}})
                    } else {
                        if ("mobile" != t()(".caring__swiper").data("platform")) return;
                        t()(".caring__swiper").data("platform", "desktop"), e.destroy()
                    }
                }()
            }))
        })), t()(document).ready((function () {
            document.querySelector(".vacancies") && (t()(".vacancies__filter-fieldset").click((function (e) {
                if (e.target.classList.contains("vacancies__filter-input")) {
                    const n = e.target.getAttribute("id"), r = e.target.getAttribute("value"), m = e.target.getAttribute("data-name");
                    if (e.target.checked) {
                        t()(".vacancies__filter-box").find(`.vacancies__filter-input#${n}`).prop("checked", !0), t()(".modal-filter").find(`.vacancies__filter-input#${n}`).prop("checked", !0), t()(".modal-filter").find(`.vacancies__form-label#${n}`).addClass("active");
                        const e = `<div class="vacancies__filter-result-item" id="${n}">${m}<span class="vacancies__filter-close" id=${n}></span></div>`;
                        t()(".vacancies__filter-result").append(e)
                    } else t()(".vacancies__filter-box").find(`.vacancies__filter-input#${n}`).prop("checked", !1), t()(".modal-filter").find(`.vacancies__filter-input#${n}`).prop("checked", !1), t()(".modal-filter").find(`.vacancies__form-label#${n}`).removeClass("active"), t()(".vacancies__filter-result").find(`.vacancies__filter-result-item#${n}`).remove()
                }
            })), t()(".vacancies__filter-result").click((function (e) {
                if (e.target.classList.contains("vacancies__filter-close")) {
                    const n = e.target.getAttribute("id");
                    t()(".modal-filter").find(`.vacancies__form-label#${n}`).removeClass("active"), t()(`.vacancies__filter-result-item#${n}`).remove(), t()(`.vacancies__filter-input#${n}`).prop("checked", !1)
                }
            })), t()(".vacancies__filter-legend").click((function (e) {
                const n = t()(this).siblings(".vacancies__filter-second");
                t()(this).hasClass("active") ? (n.slideUp(300), t()(this).removeClass("active")) : (t()(".vacancies__filter-legend").removeClass("active"), t()(".vacancies__filter-second").slideUp(300), n.slideDown(300), t()(this).addClass("active"))
            })), t()(".vacancies__filter-title").click((function (e) {
                const n = t()(this).siblings(".vacancies__filter-drop");
                screen.width < 768 ? (t()(".modal-filter").addClass("active"), t()(document.body).css("overflow", "hidden")) : t()(".vacancies__filter-box").hasClass("active") ? (n.slideUp(300), t()(".vacancies__filter-box").removeClass("active")) : (n.slideDown(300), t()(".vacancies__filter-box").addClass("active"))
            })), t()(".modal-filter").find(".modal__close").click((function () {
                t()(document.body).css("overflow", "auto"), t()(".modal-filter").removeClass("active")
            })), t()(".vacancies__form-apply-btn").click((function (e) {
                e.preventDefault(), t()(document.body).css("overflow", "auto"), t()(".modal-filter").removeClass("active")
            })), t()(window).resize((function () {
                !function () {
                    if (screen.width > 768) {
                        if (!t()(".modal-filter").hasClass("active")) return;
                        t()(".modal-filter").removeClass("active"), t()(document.body).css("overflow", "auto")
                    }
                }()
            })), document.addEventListener("click", (e => {
                screen.width < 768 || 0 === t()(".vacancies__filter-box").find(e.target).length && (t()(".vacancies__filter-box").removeClass("active"), t()(".vacancies__filter-drop").slideUp(300))
            })), t()(".vacancies__display").click((function (e) {
                if (!e.target.classList.contains("vacancies__item-view-all")) return;
                const t = e.target.parentElement, n = e.target;
                t.classList.contains("show") ? (t.classList.remove("show"), n.textContent = "View all") : (t.classList.add("show"), n.textContent = "Hide")
            })))
        }))
    })()
})();