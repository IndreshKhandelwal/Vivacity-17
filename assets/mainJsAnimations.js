var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var r = function(e) {
                        var t, i = [],
                            r = e.length;
                        for (t = 0; t !== r; i.push(e[t++]));
                        return i
                    },
                    s = function(e, t, i) {
                        var r, s, n = e.cycle;
                        for (r in n) s = n[r], e[r] = "function" == typeof s ? s.call(t[i], i) : s[i % s.length];
                        delete e.cycle
                    },
                    n = function(e, t, r) {
                        i.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    h = a.isArray,
                    u = n.prototype = i.to({}, .1, {}),
                    c = [];
                n.version = "1.18.2", u.constructor = n, u.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(e, t) {
                    var r, s = this.ratio,
                        n = this.vars.immediateRender || e.immediateRender;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (r in e) this.vars[r] = e[r];
                    if (this._initted || n)
                        if (t) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || n)
                        for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                    return this
                }, u.render = function(e, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, s, n, l, h, u, c, f, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        d = this._totalTime,
                        m = this._cycle,
                        g = this._duration,
                        y = this._rawPrevTime;
                    if (e >= _ - 1e-7 ? (this._totalTime = _, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > y || 0 >= e && e >= -1e-7 || y === o && "isPause" !== this.data) && y !== e && (i = !0, y > o && (s = "onReverseComplete")), this._rawPrevTime = f = !t || e || y === e ? e : o)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && y > 0) && (s = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !t || e || y === e ? e : o)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, u = this._easeType, c = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), 1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(d !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = d, this._rawPrevTime = y, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && e >= 0 && (this._active = !0), 0 === d && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== d || r) && this._callback("onUpdate")), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === g && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                }, n.to = function(e, t, i) {
                    return new n(e, t, i)
                }, n.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(e, t, i)
                }, n.fromTo = function(e, t, i, r) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new n(e, t, r)
                }, n.staggerTo = n.allTo = function(e, t, o, a, u, f, _) {
                    a = a || 0;
                    var p, d, m, g, y = 0,
                        v = [],
                        w = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(_ || o.callbackScope || this, f || c)
                        },
                        T = o.cycle,
                        x = o.startAt && o.startAt.cycle;
                    for (h(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e))), e = e || [], 0 > a && (e = r(e), e.reverse(), a *= -1), p = e.length - 1, m = 0; p >= m; m++) {
                        d = {};
                        for (g in o) d[g] = o[g];
                        if (T && s(d, e, m), x) {
                            x = d.startAt = {};
                            for (g in o.startAt) x[g] = o.startAt[g];
                            s(d.startAt, e, m)
                        }
                        d.delay = y + (d.delay || 0), m === p && u && (d.onComplete = w), v[m] = new n(e[m], t, d), y += a
                    }
                    return v
                }, n.staggerFrom = n.allFrom = function(e, t, i, r, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(e, t, i, r, s, o, a)
                }, n.staggerFromTo = n.allFromTo = function(e, t, i, r, s, o, a, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, n.staggerTo(e, t, r, s, o, a, l)
                }, n.delayedCall = function(e, t, i, r, s) {
                    return new n(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: r,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, n.set = function(e, t) {
                    return new n(e, 0, t)
                }, n.isTweening = function(e) {
                    return i.getTweensOf(e, !0).length > 0
                };
                var f = function(e, t) {
                        for (var r = [], s = 0, n = e._first; n;) n instanceof i ? r[s++] = n : (t && (r[s++] = n), r = r.concat(f(n, t)), s = r.length), n = n._next;
                        return r
                    },
                    _ = n.getAllTweens = function(t) {
                        return f(e._rootTimeline, t).concat(f(e._rootFramesTimeline, t))
                    };
                n.killAll = function(e, i, r, s) {
                    null == i && (i = !0), null == r && (r = !0);
                    var n, o, a, l = _(0 != s),
                        h = l.length,
                        u = i && r && s;
                    for (a = 0; h > a; a++) o = l[a], (u || o instanceof t || (n = o.target === o.vars.onComplete) && r || i && !n) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, n.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var s, o, u, c, f, _ = a.tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e)), h(e))
                            for (c = e.length; --c > -1;) n.killChildTweensOf(e[c], t);
                        else {
                            s = [];
                            for (u in _)
                                for (o = _[u].target.parentNode; o;) o === e && (s = s.concat(_[u].tweens)), o = o.parentNode;
                            for (f = s.length, c = 0; f > c; c++) t && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(e, i, r, s) {
                    i = i !== !1, r = r !== !1, s = s !== !1;
                    for (var n, o, a = _(s), l = i && r && s, h = a.length; --h > -1;) o = a[h], (l || o instanceof t || (n = o.target === o.vars.onComplete) && r || i && !n) && o.paused(e)
                };
                return n.pauseAll = function(e, t, i) {
                    p(!0, e, t, i)
                }, n.resumeAll = function(e, t, i) {
                    p(!1, e, t, i)
                }, n.globalTimeScale = function(t) {
                    var r = e._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (t = t || o, r._startTime = s - (s - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
                }, u.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, u.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var r = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, r, s = this.vars;
                        for (r in s) i = s[r], l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    n = i._internals,
                    o = r._internals = {},
                    a = n.isSelector,
                    l = n.isArray,
                    h = n.lazyTweens,
                    u = n.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    f = function(e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    _ = function(e, t, i) {
                        var r, s, n = e.cycle;
                        for (r in n) s = n[r], e[r] = "function" == typeof s ? s.call(t[i], i) : s[i % s.length];
                        delete e.cycle
                    },
                    p = o.pauseCallback = function() {},
                    d = function(e) {
                        var t, i = [],
                            r = e.length;
                        for (t = 0; t !== r; i.push(e[t++]));
                        return i
                    },
                    m = r.prototype = new t;
                return r.version = "1.18.2", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(e, t, r, s) {
                    var n = r.repeat && c.TweenMax || i;
                    return t ? this.add(new n(e, t, r), s) : this.set(e, r, s)
                }, m.from = function(e, t, r, s) {
                    return this.add((r.repeat && c.TweenMax || i).from(e, t, r), s)
                }, m.fromTo = function(e, t, r, s, n) {
                    var o = s.repeat && c.TweenMax || i;
                    return t ? this.add(o.fromTo(e, t, r, s), n) : this.set(e, s, n)
                }, m.staggerTo = function(e, t, s, n, o, l, h, u) {
                    var c, p, m = new r({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = s.cycle;
                    for ("string" == typeof e && (e = i.selector(e) || e), e = e || [], a(e) && (e = d(e)), n = n || 0, 0 > n && (e = d(e), e.reverse(), n *= -1), p = 0; p < e.length; p++) c = f(s), c.startAt && (c.startAt = f(c.startAt), c.startAt.cycle && _(c.startAt, e, p)), g && _(c, e, p), m.to(e[p], t, c, p * n);
                    return this.add(m, o)
                }, m.staggerFrom = function(e, t, i, r, s, n, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, s, n, o, a)
                }, m.staggerFromTo = function(e, t, i, r, s, n, o, a, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, r, s, n, o, a, l)
                }, m.call = function(e, t, r, s) {
                    return this.add(i.delayedCall(0, e, t, r), s)
                }, m.set = function(e, t, r) {
                    return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(e, 0, t), r)
                }, r.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var s, n, o = new r(e),
                        a = o._timeline;
                    for (null == t && (t = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, s = a._first; s;) n = s._next, t && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), s = n;
                    return a.add(o, 0), o
                }, m.add = function(s, n, o, a) {
                    var h, u, c, f, _, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof e)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                            for (o = o || "normal", a = a || 0, h = n, u = s.length, c = 0; u > c; c++) l(f = s[c]) && (f = new r({
                                tweens: f
                            })), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === o ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), h += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, n);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (t.prototype.add.call(this, s, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (_ = this, p = _.rawTime() > s._startTime; _._timeline;) p && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), _ = _._timeline;
                    return this
                }, m.remove = function(t) {
                    if (t instanceof e) {
                        this._remove(t, !1);
                        var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && l(t)) {
                        for (var r = t.length; --r > -1;) this.remove(t[r]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, m._remove = function(e, i) {
                    t.prototype._remove.call(this, e, i);
                    var r = this._last;
                    return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, m.insert = m.insertMultiple = function(e, t, i, r) {
                    return this.add(e, t || 0, i, r)
                }, m.appendMultiple = function(e, t, i, r) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
                }, m.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, m.addPause = function(e, t, r, s) {
                    var n = i.delayedCall(0, p, r, s || this);
                    return n.vars.onComplete = n.vars.onReverseComplete = t, n.data = "isPause", this._hasPause = !0, this.add(n, e)
                }, m.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, m.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, m._parseTimeOrLabel = function(t, i, r, s) {
                    var n;
                    if (s instanceof e && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (n = s.length; --n > -1;) s[n] instanceof e && s[n].timeline === this && this.remove(s[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (n = t.indexOf("="), -1 === n) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(n - 1) + "1", 10) * Number(t.substr(n + 1)), t = n > 1 ? this._parseTimeOrLabel(t.substr(0, n - 1), 0, r) : this.duration()
                    }
                    return Number(t) + i
                }, m.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, m.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, m.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, n, o, a, l, c, f, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (e >= _ - 1e-7) this._totalTime = this._time = _, this._reversed || this._hasPausedChild() || (n = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : s, e = _ + 1e-4;
                    else if (1e-7 > e)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", n = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : s, 0 === e && n)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                            e = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (e >= p)
                                for (r = this._first; r && r._startTime <= e && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= e && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                            c && (this._time = e = c._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== p && this._first || i || l || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), f = this._time, f >= p)
                            for (r = this._first; r && (o = r._next, f === this._time && (!this._paused || g));)(r._active || r._startTime <= f && !r._paused && !r._gc) && (c === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = o;
                        else
                            for (r = this._last; r && (o = r._prev, f === this._time && (!this._paused || g));) {
                                if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                                    if (c === r) {
                                        for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                                }
                                r = o
                            }
                        this._onUpdate && (t || (h.length && u(), this._callback("onUpdate"))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                    }
                }, m._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, m.getChildren = function(e, t, r, s) {
                    s = s || -9999999999;
                    for (var n = [], o = this._first, a = 0; o;) o._startTime < s || (o instanceof i ? t !== !1 && (n[a++] = o) : (r !== !1 && (n[a++] = o), e !== !1 && (n = n.concat(o.getChildren(!0, t, r)), a = n.length))), o = o._next;
                    return n
                }, m.getTweensOf = function(e, t) {
                    var r, s, n = this._gc,
                        o = [],
                        a = 0;
                    for (n && this._enabled(!0, !0), r = i.getTweensOf(e), s = r.length; --s > -1;)(r[s].timeline === this || t && this._contains(r[s])) && (o[a++] = r[s]);
                    return n && this._enabled(!1, !0), o
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, m.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var r, s = this._first, n = this._labels; s;) s._startTime >= i && (s._startTime += e), s = s._next;
                    if (t)
                        for (r in n) n[r] >= i && (n[r] += e);
                    return this._uncache(!0)
                }, m._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;) i[r]._kill(e, t) && (s = !0);
                    return s
                }, m.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return e.prototype.invalidate.call(this)
                }, m._enabled = function(e, i) {
                    if (e === this._gc)
                        for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
                    return t.prototype._enabled.call(this, e, i)
                }, m.totalTime = function(t, i, r) {
                    this._forcingPlayhead = !0;
                    var s = e.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, m.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, r = 0, s = this._last, n = 999999999999; s;) t = s._prev, s._dirty && s.totalDuration(), s._startTime > n && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : n = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), i = s._startTime + s._totalDuration / s._timeScale, i > r && (r = i), s = t;
                            this._duration = this._totalDuration = r, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, m.paused = function(t) {
                    if (!t)
                        for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return e.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, r
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                var r = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    s = 1e-10,
                    n = t._internals,
                    o = n.lazyTweens,
                    a = n.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = r.prototype = new e;
                return h.constructor = r, h.kill()._gc = !1, r.version = "1.18.2", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, h.addCallback = function(e, i, r, s) {
                    return this.add(t.delayedCall(0, e, r, s), i)
                }, h.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var i = this.getTweensOf(e, !1), r = i.length, s = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === s && i[r]._enabled(!1, !1);
                    return this
                }, h.removePause = function(t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, h.tweenTo = function(e, i) {
                    i = i || {};
                    var r, s, n, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(e), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, n = new t(this, r, o), o.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && r === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, h.tweenFromTo = function(e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var r = this.tweenTo(t, i);
                    return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
                }, h.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, n, l, h, u, c, f, _, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        y = this._startTime,
                        v = this._timeScale,
                        w = this._rawPrevTime,
                        T = this._paused,
                        x = this._cycle;
                    if (e >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > w || w === s) && w !== e && this._first && (u = !0, w > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = d, e = d + 1e-4);
                    else if (1e-7 > e)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && w !== s && (w > 0 || 0 > e && w >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, h = "onReverseComplete") : w >= 0 && this._first && (u = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = d || !t || e || this._rawPrevTime === e ? e : s, 0 === e && n)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                            e = 0, this._initted || (u = !0)
                        } else if (0 === d && 0 > w && (u = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (c = d + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, e = d + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (e = this._time, e >= m)
                            for (r = this._first; r && r._startTime <= e && !f;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (f = r), r = r._next;
                        else
                            for (r = this._last; r && r._startTime >= e && !f;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (f = r), r = r._prev;
                        f && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & x),
                            P = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            S = this._totalTime,
                            O = this._cycle,
                            R = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = x * d, this._cycle < x ? b = !b : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? w - 1e-4 : w, this._cycle = x, this._locked = !0, m = b ? 0 : d, this.render(m, t, 0 === d), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (P && (m = b ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = k, this._totalTime = S, this._cycle = O, this._rawPrevTime = R
                    }
                    if (!(this._time !== m && this._first || i || u || f)) return void(g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (t || this._callback("onStart")), _ = this._time, _ >= m)
                        for (r = this._first; r && (l = r._next, _ === this._time && (!this._paused || T));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (f === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = l;
                    else
                        for (r = this._last; r && (l = r._prev, _ === this._time && (!this._paused || T));) {
                            if (r._active || r._startTime <= m && !r._paused && !r._gc) {
                                if (f === r) {
                                    for (f = r._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                            }
                            r = l
                        }
                    this._onUpdate && (t || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (y === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this._callback(h)))
                }, h.getActive = function(e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var r, s, n = [],
                        o = this.getChildren(e, t, i),
                        a = 0,
                        l = o.length;
                    for (r = 0; l > r; r++) s = o[r], s.isActive() && (n[a++] = s);
                    return n
                }, h.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        r = i.length;
                    for (t = 0; r > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, h.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (t[i].time < e) return t[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, h.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, h.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, h.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, h.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, r
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    i = [],
                    r = [],
                    s = {},
                    n = _gsScope._gsDefine.globals,
                    o = function(e, t, i, r) {
                        this.a = e, this.b = t, this.c = i, this.d = r, this.da = r - e, this.ca = i - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(e, t, i, r) {
                        var s = {
                                a: e
                            },
                            n = {},
                            o = {},
                            a = {
                                c: r
                            },
                            l = (e + t) / 2,
                            h = (t + i) / 2,
                            u = (i + r) / 2,
                            c = (l + h) / 2,
                            f = (h + u) / 2,
                            _ = (f - c) / 8;
                        return s.b = l + (e - l) / 4, n.b = c + _, s.c = n.a = (s.b + n.b) / 2, n.c = o.a = (c + f) / 2, o.b = f - _, a.b = u + (r - u) / 4, o.c = a.a = (o.b + a.b) / 2, [s, n, o, a]
                    },
                    h = function(e, s, n, o, a) {
                        var h, u, c, f, _, p, d, m, g, y, v, w, T, x = e.length - 1,
                            b = 0,
                            P = e[0].a;
                        for (h = 0; x > h; h++) _ = e[b], u = _.a, c = _.d, f = e[b + 1].d, a ? (v = t[h], w = i[h], T = (w + v) * s * .25 / (o ? .5 : r[h] || .5), p = c - (c - u) * (o ? .5 * s : 0 !== v ? T / v : 0), d = c + (f - c) * (o ? .5 * s : 0 !== w ? T / w : 0), m = c - (p + ((d - p) * (3 * v / (v + w) + .5) / 4 || 0))) : (p = c - (c - u) * s * .5, d = c + (f - c) * s * .5, m = c - (p + d) / 2), p += m, d += m, _.c = g = p, 0 !== h ? _.b = P : _.b = P = _.a + .6 * (_.c - _.a), _.da = c - u, _.ca = g - u, _.ba = P - u, n ? (y = l(u, P, g, c), e.splice(b, 1, y[0], y[1], y[2], y[3]), b += 4) : b++, P = d;
                        _ = e[b], _.b = P, _.c = P + .4 * (_.d - P), _.da = _.d - _.a, _.ca = _.c - _.a, _.ba = P - _.a, n && (y = l(_.a, P, _.c, _.d), e.splice(b, 1, y[0], y[1], y[2], y[3]))
                    },
                    u = function(e, r, s, n) {
                        var a, l, h, u, c, f, _ = [];
                        if (n)
                            for (e = [n].concat(e), l = e.length; --l > -1;) "string" == typeof(f = e[l][r]) && "=" === f.charAt(1) && (e[l][r] = n[r] + Number(f.charAt(0) + f.substr(2)));
                        if (a = e.length - 2, 0 > a) return _[0] = new o(e[0][r], 0, 0, e[-1 > a ? 0 : 1][r]), _;
                        for (l = 0; a > l; l++) h = e[l][r], u = e[l + 1][r], _[l] = new o(h, 0, 0, u), s && (c = e[l + 2][r], t[l] = (t[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (c - u) * (c - u));
                        return _[l] = new o(e[l][r], 0, 0, e[l + 1][r]), _
                    },
                    c = function(e, n, o, l, c, f) {
                        var _, p, d, m, g, y, v, w, T = {},
                            x = [],
                            b = f || e[0];
                        c = "string" == typeof c ? "," + c + "," : a, null == n && (n = 1);
                        for (p in e[0]) x.push(p);
                        if (e.length > 1) {
                            for (w = e[e.length - 1], v = !0, _ = x.length; --_ > -1;)
                                if (p = x[_], Math.abs(b[p] - w[p]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (e = e.concat(), f && e.unshift(f), e.push(e[1]), f = e[e.length - 3])
                        }
                        for (t.length = i.length = r.length = 0, _ = x.length; --_ > -1;) p = x[_], s[p] = -1 !== c.indexOf("," + p + ","), T[p] = u(e, p, s[p], f);
                        for (_ = t.length; --_ > -1;) t[_] = Math.sqrt(t[_]), i[_] = Math.sqrt(i[_]);
                        if (!l) {
                            for (_ = x.length; --_ > -1;)
                                if (s[p])
                                    for (d = T[x[_]], y = d.length - 1, m = 0; y > m; m++) g = d[m + 1].da / i[m] + d[m].da / t[m], r[m] = (r[m] || 0) + g * g;
                            for (_ = r.length; --_ > -1;) r[_] = Math.sqrt(r[_])
                        }
                        for (_ = x.length, m = o ? 4 : 1; --_ > -1;) p = x[_], d = T[p], h(d, n, o, l, s[p]), v && (d.splice(0, m), d.splice(d.length - m, m));
                        return T
                    },
                    f = function(e, t, i) {
                        t = t || "soft";
                        var r, s, n, a, l, h, u, c, f, _, p, d = {},
                            m = "cubic" === t ? 3 : 2,
                            g = "soft" === t,
                            y = [];
                        if (g && i && (e = [i].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                        for (f in e[0]) y.push(f);
                        for (h = y.length; --h > -1;) {
                            for (f = y[h], d[f] = l = [], _ = 0, c = e.length, u = 0; c > u; u++) r = null == i ? e[u][f] : "string" == typeof(p = e[u][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && c - 1 > u && (l[_++] = (r + l[_ - 2]) / 2), l[_++] = r;
                            for (c = _ - m + 1, _ = 0, u = 0; c > u; u += m) r = l[u], s = l[u + 1], n = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[_++] = p = 3 === m ? new o(r, s, n, a) : new o(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                            l.length = _
                        }
                        return d
                    },
                    _ = function(e, t, i) {
                        for (var r, s, n, o, a, l, h, u, c, f, _, p = 1 / i, d = e.length; --d > -1;)
                            for (f = e[d], n = f.a, o = f.d - n, a = f.c - n, l = f.b - n, r = s = 0, u = 1; i >= u; u++) h = p * u, c = 1 - h, r = s - (s = (h * h * o + 3 * c * (h * a + c * l)) * h), _ = d * i + u - 1, t[_] = (t[_] || 0) + r * r
                    },
                    p = function(e, t) {
                        t = t >> 0 || 6;
                        var i, r, s, n, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            u = t - 1,
                            c = [],
                            f = [];
                        for (i in e) _(e[i], o, t);
                        for (s = o.length, r = 0; s > r; r++) l += Math.sqrt(o[r]), n = r % t, f[n] = l, n === u && (h += l, n = r / t >> 0, c[n] = f, a[n] = h, l = 0, f = []);
                        return {
                            length: h,
                            lengths: a,
                            segments: c
                        }
                    },
                    d = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r, s, n, o, a, l = t.values || [],
                                h = {},
                                u = l[0],
                                _ = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = _ ? _ instanceof Array ? _ : [
                                ["x", "y", "rotation", _ === !0 ? 0 : Number(_) || 0]
                            ] : null;
                            for (r in u) this._props.push(r);
                            for (n = this._props.length; --n > -1;) r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof e[r], h[r] = s ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), a || h[r] !== l[0][r] && (a = h);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : f(l, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                                var d = p(this._beziers, this._timeRes);
                                this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (_ = this._autoRotate)
                                for (this._initialRotations = [], _[0] instanceof Array || (this._autoRotate = _ = [_]), n = _.length; --n > -1;) {
                                    for (o = 0; 3 > o; o++) r = _[n][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                    r = _[n][2], this._initialRotations[n] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(t) {
                            var i, r, s, n, o, a, l, h, u, c, f = this._segCount,
                                _ = this._func,
                                p = this._target,
                                d = t !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, c = this._curSeg, t *= this._length, s = this._li, t > this._l2 && f - 1 > s) {
                                    for (h = f - 1; h > s && (this._l2 = u[++s]) <= t;);
                                    this._l1 = u[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                                } else if (t < this._l1 && s > 0) {
                                    for (; s > 0 && (this._l1 = u[--s]) >= t;);
                                    0 === s && t < this._l1 ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = s, t -= this._l1, s = this._si, t > this._s2 && s < c.length - 1) {
                                    for (h = c.length - 1; h > s && (this._s2 = c[++s]) <= t;);
                                    this._s1 = c[s - 1], this._si = s
                                } else if (t < this._s1 && s > 0) {
                                    for (; s > 0 && (this._s1 = c[--s]) >= t;);
                                    0 === s && t < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                                }
                                a = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > t ? 0 : t >= 1 ? f - 1 : f * t >> 0, a = (t - i * (1 / f)) * f;
                            for (r = 1 - a, s = this._props.length; --s > -1;) n = this._props[s], o = this._beziers[n][i], l = (a * a * o.da + 3 * r * (a * o.ca + r * o.ba)) * a + o.a, this._round[n] && (l = Math.round(l)), _[n] ? p[n](l) : p[n] = l;
                            if (this._autoRotate) {
                                var m, g, y, v, w, T, x, b = this._autoRotate;
                                for (s = b.length; --s > -1;) n = b[s][2], T = b[s][3] || 0, x = b[s][4] === !0 ? 1 : e, o = this._beziers[b[s][0]], m = this._beziers[b[s][1]], o && m && (o = o[i], m = m[i], g = o.a + (o.b - o.a) * a, v = o.b + (o.c - o.b) * a, g += (v - g) * a, v += (o.c + (o.d - o.c) * a - v) * a, y = m.a + (m.b - m.a) * a, w = m.b + (m.c - m.b) * a, y += (w - y) * a, w += (m.c + (m.d - m.c) * a - w) * a, l = d ? Math.atan2(w - y, v - g) * x + T : this._initialRotations[s], _[n] ? p[n](l) : p[n] = l)
                            }
                        }
                    }),
                    m = d.prototype;
                d.bezierThrough = c, d.cubicToQuadratic = l, d._autoCSS = !0, d.quadraticToCubic = function(e, t, i) {
                    return new o(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, d._cssRegister = function() {
                    var e = n.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            i = t._parseToProxy,
                            r = t._setPluginRatio,
                            s = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, n, o, a, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new d;
                                var h, u, c, f = t.values,
                                    _ = f.length - 1,
                                    p = [],
                                    m = {};
                                if (0 > _) return a;
                                for (h = 0; _ >= h; h++) c = i(e, f[h], o, a, l, _ !== h), p[h] = c.end;
                                for (u in t) m[u] = t[u];
                                return m.values = p, a = new s(e, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), l._onInitTween(c.proxy, m, o._tween), a
                            }
                        })
                    }
                }, m._roundProps = function(e, t) {
                    for (var i = this._overwriteProps, r = i.length; --r > -1;)(e[i[r]] || e.bezier || e.bezierThrough) && (this._round[i[r]] = t)
                }, m._kill = function(e) {
                    var t, i, r = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;) r[i] === t && r.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var i, r, s, n, o = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new e("css");
                h.constructor = o, o.version = "1.18.2", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var u, c, f, _, p, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    O = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(e, t) {
                        return t.toUpperCase()
                    },
                    M = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    C = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    E = /,(?=[^\)]*(?:\(|$))/gi,
                    D = Math.PI / 180,
                    N = 180 / Math.PI,
                    I = {},
                    F = document,
                    z = function(e) {
                        return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", e) : F.createElement(e)
                    },
                    L = z("div"),
                    X = z("img"),
                    Y = o._internals = {
                        _specialProps: l
                    },
                    j = navigator.userAgent,
                    B = function() {
                        var e = j.indexOf("Android"),
                            t = z("a");
                        return f = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === e || Number(j.substr(e + 8, 1)) > 3), p = f && Number(j.substr(j.indexOf("Version/") + 8, 1)) < 6, _ = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (d = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
                    }(),
                    q = function(e) {
                        return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(e) {
                        window.console && console.log(e)
                    },
                    U = "",
                    $ = "",
                    V = function(e, t) {
                        t = t || L;
                        var i, r, s = t.style;
                        if (void 0 !== s[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + e];);
                        return r >= 0 ? ($ = 3 === r ? "ms" : i[r], U = "-" + $.toLowerCase() + "-", $ + e) : null
                    },
                    W = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                    Q = o.getStyle = function(e, t, i, r, s) {
                        var n;
                        return B || "opacity" !== t ? (!r && e.style[t] ? n = e.style[t] : (i = i || W(e)) ? n = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(S, "-$1").toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : q(e)
                    },
                    H = Y.convertToPixels = function(e, i, r, s, n) {
                        if ("px" === s || !s) return r;
                        if ("auto" === s || !r) return 0;
                        var a, l, h, u = M.test(i),
                            c = e,
                            f = L.style,
                            _ = 0 > r;
                        if (_ && (r = -r), "%" === s && -1 !== i.indexOf("border")) a = r / 100 * (u ? e.clientWidth : e.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + Q(e, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) f[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                            else {
                                if (c = e.parentNode || F.body, l = c._gsCache, h = t.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                                f[u ? "width" : "height"] = r + s
                            }
                            c.appendChild(L), a = parseFloat(L[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(L), u && "%" === s && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = a / r * 100), 0 !== a || n || (a = H(e, i, r, s, !0))
                        }
                        return _ ? -a : a
                    },
                    Z = Y.calculateOffset = function(e, t, i) {
                        if ("absolute" !== Q(e, "position", i)) return 0;
                        var r = "left" === t ? "Left" : "Top",
                            s = Q(e, "margin" + r, i);
                        return e["offset" + r] - (H(e, t, parseFloat(s), s.replace(w, "")) || 0)
                    },
                    K = function(e, t) {
                        var i, r, s, n = {};
                        if (t = t || W(e, null))
                            if (i = t.length)
                                for (; --i > -1;) s = t[i], (-1 === s.indexOf("-transform") || Se === s) && (n[s.replace(O, k)] = t.getPropertyValue(s));
                            else
                                for (i in t)(-1 === i.indexOf("Transform") || Pe === i) && (n[i] = t[i]);
                        else if (t = e.currentStyle || e.style)
                            for (i in t) "string" == typeof i && void 0 === n[i] && (n[i.replace(O, k)] = t[i]);
                        return B || (n.opacity = q(e)), r = ze(e, t, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Re && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(e, t, i, r, s) {
                        var n, o, a, l = {},
                            h = e.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (n = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[o] = "auto" !== n || "left" !== o && "top" !== o ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof t[o] || "" === t[o].replace(v, "") ? n : 0 : Z(e, o), void 0 !== h[o] && (a = new pe(h, o, h[o], a)));
                        if (r)
                            for (o in r) "className" !== o && (l[o] = r[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    ee = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(e, t, i) {
                        var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            s = ee[t],
                            n = s.length;
                        for (i = i || W(e, null); --n > -1;) r -= parseFloat(Q(e, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(e, "border" + s[n] + "Width", i, !0)) || 0;
                        return r
                    },
                    re = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var i = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + s + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(r.replace(v, "")), t.oy = parseFloat(s.replace(v, "")), t.v = e), t || e
                    },
                    se = function(e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    ne = function(e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                    },
                    oe = function(e, t, i, r) {
                        var s, n, o, a, l, h = 1e-6;
                        return null == e ? a = t : "number" == typeof e ? a = e : (s = 360, n = e.split("_"), l = "=" === e.charAt(1), o = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === e.indexOf("rad") ? 1 : N) - (l ? 0 : t), n.length && (r && (r[i] = t + o), -1 !== e.indexOf("short") && (o %= s, o !== o % (s / 2) && (o = 0 > o ? o + s : o - s)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = t + o), h > a && a > -h && (a = 0), a
                    },
                    ae = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    le = function(e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    he = o.parseColor = function(e, t) {
                        var i, r, s, n, o, a, l, h, u, c, f;
                        if (e)
                            if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ae[e]) i = ae[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), s = e.charAt(2), n = e.charAt(3), e = "#" + r + r + s + s + n + n), e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (i = f = e.match(m), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(g)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, s = .5 >= l ? l * (a + 1) : l + a - l * a, r = 2 * l - s, i.length > 3 && (i[3] = Number(e[3])), i[0] = le(o + 1 / 3, r, s), i[1] = le(o, r, s), i[2] = le(o - 1 / 3, r, s);
                                else i = e.match(m) || ae.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = ae.black;
                        return t && !f && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, h = Math.max(r, s, n), u = Math.min(r, s, n), l = (h + u) / 2, h === u ? o = a = 0 : (c = h - u, a = l > .5 ? c / (2 - h - u) : c / (h + u), o = h === r ? (s - n) / c + (n > s ? 6 : 0) : h === s ? (n - r) / c + 2 : (r - s) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ue = function(e, t) {
                        var i, r, s, n = e.match(ce) || [],
                            o = 0,
                            a = n.length ? "" : e;
                        for (i = 0; i < n.length; i++) r = n[i], s = e.substr(o, e.indexOf(r, o) - o), o += s.length + r.length, r = he(r, t), 3 === r.length && r.push(1), a += s + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                        return a
                    },
                    ce = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ae) ce += "|" + h + "\\b";
                ce = new RegExp(ce + ")", "gi"), o.colorStringFilter = function(e) {
                    var t, i = e[0] + e[1];
                    ce.lastIndex = 0, ce.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = ue(e[0], t), e[1] = ue(e[1], t))
                }, t.defaultStringFilter || (t.defaultStringFilter = o.colorStringFilter);
                var fe = function(e, t, i, r) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var s, n = t ? (e.match(ce) || [""])[0] : "",
                            o = e.split(n).join("").match(y) || [],
                            a = e.substr(0, e.indexOf(o[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            h = -1 !== e.indexOf(" ") ? " " : ",",
                            u = o.length,
                            c = u > 0 ? o[0].replace(m, "") : "";
                        return u ? s = t ? function(e) {
                            var t, f, _, p;
                            if ("number" == typeof e) e += c;
                            else if (r && E.test(e)) {
                                for (p = e.replace(E, "|").split("|"), _ = 0; _ < p.length; _++) p[_] = s(p[_]);
                                return p.join(",")
                            }
                            if (t = (e.match(ce) || [n])[0], f = e.split(t).join("").match(y) || [], _ = f.length, u > _--)
                                for (; ++_ < u;) f[_] = i ? f[(_ - 1) / 2 | 0] : o[_];
                            return a + f.join(h) + h + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, n, f;
                            if ("number" == typeof e) e += c;
                            else if (r && E.test(e)) {
                                for (n = e.replace(E, "|").split("|"), f = 0; f < n.length; f++) n[f] = s(n[f]);
                                return n.join(",")
                            }
                            if (t = e.match(y) || [], f = t.length, u > f--)
                                for (; ++f < u;) t[f] = i ? t[(f - 1) / 2 | 0] : o[f];
                            return a + t.join(h) + l
                        } : function(e) {
                            return e
                        }
                    },
                    _e = function(e) {
                        return e = e.split(","),
                            function(t, i, r, s, n, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[e[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return s.parse(t, a, n, o)
                            }
                    },
                    pe = (Y._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, i, r, s, n, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l;) t = a[l.v], l.r ? t = Math.round(t) : h > t && t > -h && (t = 0), l.t[l.p] = t, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === e || 0 === e)
                            for (l = o.firstMPT, n = 1 === e ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                        i[n] = s
                                    }
                                } else i[n] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(e, t, i, r, s) {
                        this.t = e, this.p = t, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
                    }),
                    de = (Y._parseToProxy = function(e, t, i, r, s, n) {
                        var o, a, l, h, u, c = r,
                            f = {},
                            _ = {},
                            p = i._transform,
                            d = I;
                        for (i._transform = null, I = t, r = u = i.parse(e, t, r, s), I = d, n && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                            if (r.type <= 1 && (a = r.p, _[a] = r.s + r.c, f[a] = r.s, n || (h = new pe(r, "s", a, h, r.r), r.c = 0), 1 === r.type))
                                for (o = r.l; --o > 0;) l = "xn" + o, a = r.p + "_" + l, _[a] = r.data[l], f[a] = r[l], n || (h = new pe(r, l, a, h, r.rxp[l]));
                            r = r._next
                        }
                        return {
                            proxy: f,
                            end: _,
                            firstMPT: h,
                            pt: u
                        }
                    }, Y.CSSPropTween = function(e, t, r, s, o, a, l, h, u, c, f) {
                        this.t = e, this.p = t, this.s = r, this.c = s, this.n = l || t, e instanceof de || n.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? r : c, this.e = void 0 === f ? r + s : f, o && (this._next = o, o._prev = this)
                    }),
                    me = function(e, t, i, r, s, n) {
                        var o = new de(e, t, i, r - i, s, -1, n);
                        return o.b = i, o.e = o.xs0 = r, o
                    },
                    ge = o.parseComplex = function(e, t, i, r, s, n, o, a, l, h) {
                        i = i || n || "", o = new de(e, t, 0, 0, o, h ? 2 : 1, null, !1, a, i, r), r += "";
                        var c, f, _, p, d, y, v, w, T, x, b, P, S, O = i.split(", ").join(",").split(" "),
                            R = r.split(", ").join(",").split(" "),
                            k = O.length,
                            M = u !== !1;
                        for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(E, ", ").split(" "), R = R.join(" ").replace(E, ", ").split(" "), k = O.length), k !== R.length && (O = (n || "").split(" "), k = O.length), o.plugin = l, o.setRatio = h, ce.lastIndex = 0, c = 0; k > c; c++)
                            if (p = O[c], d = R[c], w = parseFloat(p), w || 0 === w) o.appendXtra("", w, se(d, w), d.replace(g, ""), M && -1 !== d.indexOf("px"), !0);
                            else if (s && ce.test(p)) P = "," === d.charAt(d.length - 1) ? ")," : ")", S = -1 !== d.indexOf("hsl") && B, p = he(p, S), d = he(d, S), T = p.length + d.length > 6, T && !B && 0 === d[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(R[c]).join("transparent")) : (B || (T = !1), S ? o.appendXtra(T ? "hsla(" : "hsl(", p[0], se(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], se(d[1], p[1]), "%,", !1).appendXtra("", p[2], se(d[2], p[2]), T ? "%," : "%" + P, !1) : o.appendXtra(T ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], T ? "," : P, !0), T && (p = p.length < 4 ? 1 : p[3], o.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, P, !1))), ce.lastIndex = 0;
                        else if (y = p.match(m)) {
                            if (v = d.match(g), !v || v.length !== y.length) return o;
                            for (_ = 0, f = 0; f < y.length; f++) b = y[f], x = p.indexOf(b, _), o.appendXtra(p.substr(_, x - _), Number(b), se(v[f], b), "", M && "px" === p.substr(x + b.length, 2), 0 === f), _ = x + b.length;
                            o["xs" + o.l] += p.substr(_)
                        } else o["xs" + o.l] += o.l ? " " + d : d;
                        if (-1 !== r.indexOf("=") && o.data) {
                            for (P = o.xs0 + o.data.s, c = 1; c < o.l; c++) P += o["xs" + c] + o.data["xn" + c];
                            o.e = P + o["xs" + c]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    ye = 9;
                for (h = de.prototype, h.l = h.pr = 0; --ye > 0;) h["xn" + ye] = 0, h["xs" + ye] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(e, t, i, r, s, n) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += n && a ? " " + e : e || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", a > 0 ? (o.data["xn" + a] = t + i, o.rxp["xn" + a] = s, o["xn" + a] = t, o.plugin || (o.xfirst = new de(o, "xn" + a, t, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: t + i
                    }, o.rxp = {}, o.s = t, o.c = i, o.r = s, o)) : (o["xs" + a] += t + (r || ""), o)
                };
                var ve = function(e, t) {
                        t = t || {}, this.p = t.prefix ? V(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || fe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    we = Y._registerComplexSpecialProp = function(e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var r, s, n = e.split(","),
                            o = t.defaultValue;
                        for (i = i || [o], r = 0; r < n.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || o, s = new ve(n[r], t)
                    },
                    Te = function(e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            we(e, {
                                parser: function(e, i, r, s, n, o, h) {
                                    var u = a.com.greensock.plugins[t];
                                    return u ? (u._cssRegister(), l[r].parse(e, i, r, s, n, o, h)) : (G("Error: " + t + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = ve.prototype, h.parseComplex = function(e, t, i, r, s, n) {
                    var o, a, l, h, u, c, f = this.keyword;
                    if (this.multi && (E.test(i) || E.test(t) ? (a = t.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (a = [t], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) t = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (u = t.indexOf(f), c = i.indexOf(f), u !== c && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === u && (a[o] += " " + f)));
                        t = a.join(", "), i = l.join(", ")
                    }
                    return ge(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, s, n)
                }, h.parse = function(e, t, i, r, n, o, a) {
                    return this.parseComplex(e.style, this.format(Q(e, this.p, s, !1, this.dflt)), this.format(t), n, o)
                }, o.registerSpecialProp = function(e, t, i) {
                    we(e, {
                        parser: function(e, r, s, n, o, a, l) {
                            var h = new de(e, s, 0, 0, o, 2, s, !1, i);
                            return h.plugin = a, h.setRatio = t(e, r, n._tween, s), h
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = f || _;
                var xe, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Pe = V("transform"),
                    Se = U + "transform",
                    Oe = V("transformOrigin"),
                    Re = null !== V("perspective"),
                    ke = Y.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Re ? o.defaultForce3D || "auto" : !1
                    },
                    Me = window.SVGElement,
                    Ae = function(e, t, i) {
                        var r, s = F.createElementNS("http://www.w3.org/2000/svg", e),
                            n = /([a-z])([A-Z])/g;
                        for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                        return t.appendChild(s), s
                    },
                    Ce = F.documentElement,
                    Ee = function() {
                        var e, t, i, r = d || /Android/i.test(j) && !window.chrome;
                        return F.createElementNS && !r && (e = Ae("svg", Ce), t = Ae("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = t.getBoundingClientRect().width, t.style[Oe] = "50% 50%", t.style[Pe] = "scaleX(0.5)", r = i === t.getBoundingClientRect().width && !(_ && Re), Ce.removeChild(e)), r
                    }(),
                    De = function(e, t, i, r, s) {
                        var n, a, l, h, u, c, f, _, p, d, m, g, y, v, w = e._gsTransform,
                            T = Fe(e, !0);
                        w && (y = w.xOrigin, v = w.yOrigin), (!r || (n = r.split(" ")).length < 2) && (f = e.getBBox(), t = re(t).split(" "), n = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) + f.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && T !== Ie && (c = T[0], f = T[1], _ = T[2], p = T[3], d = T[4], m = T[5], g = c * p - f * _, a = h * (p / g) + u * (-_ / g) + (_ * m - p * d) / g, l = h * (-f / g) + u * (c / g) - (c * m - f * d) / g, h = i.xOrigin = n[0] = a, u = i.yOrigin = n[1] = l), w && (s || s !== !1 && o.defaultSmoothOrigin !== !1 ? (a = h - y, l = u - v, w.xOffset += a * T[0] + l * T[2] - a, w.yOffset += a * T[1] + l * T[3] - l) : w.xOffset = w.yOffset = 0), e.setAttribute("data-svg-origin", n.join(" "))
                    },
                    Ne = function(e) {
                        return !!(Me && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Fe = function(e, t) {
                        var i, r, s, n, o, a = e._gsTransform || new ke,
                            l = 1e5;
                        if (Pe ? r = Q(e, Se, null, !0) : e.currentStyle && (r = e.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (a.svg || e.getBBox && Ne(e)) && (i && -1 !== (e.style[Pe] + "").indexOf("matrix") && (r = e.style[Pe], i = 0), s = e.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ye = s.length; --ye > -1;) n = Number(s[ye]), s[ye] = (o = n - (n |= 0)) ? (o * l + (0 > o ? -.5 : .5) | 0) / l + n : n;
                        return t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    ze = Y.getTransform = function(e, i, r, n) {
                        if (e._gsTransform && r && !n) return e._gsTransform;
                        var a, l, h, u, c, f, _ = r ? e._gsTransform || new ke : new ke,
                            p = _.scaleX < 0,
                            d = 2e-5,
                            m = 1e5,
                            g = Re ? parseFloat(Q(e, Oe, i, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0,
                            y = parseFloat(o.defaultTransformPerspective) || 0;
                        if (_.svg = !(!e.getBBox || !Ne(e)), _.svg && (De(e, Q(e, Oe, s, !1, "50% 50%") + "", _, e.getAttribute("data-svg-origin")), xe = o.useSVGTransformAttr || Ee), a = Fe(e), a !== Ie) {
                            if (16 === a.length) {
                                var v, w, T, x, b, P = a[0],
                                    S = a[1],
                                    O = a[2],
                                    R = a[3],
                                    k = a[4],
                                    M = a[5],
                                    A = a[6],
                                    C = a[7],
                                    E = a[8],
                                    D = a[9],
                                    I = a[10],
                                    F = a[12],
                                    z = a[13],
                                    L = a[14],
                                    X = a[11],
                                    Y = Math.atan2(A, I);
                                _.zOrigin && (L = -_.zOrigin, F = E * L - a[12], z = D * L - a[13], L = I * L + _.zOrigin - a[14]), _.rotationX = Y * N, Y && (x = Math.cos(-Y), b = Math.sin(-Y), v = k * x + E * b, w = M * x + D * b, T = A * x + I * b, E = k * -b + E * x, D = M * -b + D * x, I = A * -b + I * x, X = C * -b + X * x, k = v, M = w, A = T), Y = Math.atan2(-O, I), _.rotationY = Y * N, Y && (x = Math.cos(-Y), b = Math.sin(-Y), v = P * x - E * b, w = S * x - D * b, T = O * x - I * b, D = S * b + D * x, I = O * b + I * x, X = R * b + X * x, P = v, S = w, O = T), Y = Math.atan2(S, P), _.rotation = Y * N, Y && (x = Math.cos(-Y), b = Math.sin(-Y), P = P * x + k * b, w = S * x + M * b, M = S * -b + M * x, A = O * -b + A * x, S = w), _.rotationX && Math.abs(_.rotationX) + Math.abs(_.rotation) > 359.9 && (_.rotationX = _.rotation = 0, _.rotationY = 180 - _.rotationY), _.scaleX = (Math.sqrt(P * P + S * S) * m + .5 | 0) / m, _.scaleY = (Math.sqrt(M * M + D * D) * m + .5 | 0) / m, _.scaleZ = (Math.sqrt(A * A + I * I) * m + .5 | 0) / m, _.skewX = 0, _.perspective = X ? 1 / (0 > X ? -X : X) : 0, _.x = F, _.y = z, _.z = L, _.svg && (_.x -= _.xOrigin - (_.xOrigin * P - _.yOrigin * k), _.y -= _.yOrigin - (_.yOrigin * S - _.xOrigin * M))
                            } else if ((!Re || n || !a.length || _.x !== a[4] || _.y !== a[5] || !_.rotationX && !_.rotationY) && (void 0 === _.x || "none" !== Q(e, "display", i))) {
                                var j = a.length >= 6,
                                    B = j ? a[0] : 1,
                                    q = a[1] || 0,
                                    G = a[2] || 0,
                                    U = j ? a[3] : 1;
                                _.x = a[4] || 0, _.y = a[5] || 0, h = Math.sqrt(B * B + q * q), u = Math.sqrt(U * U + G * G), c = B || q ? Math.atan2(q, B) * N : _.rotation || 0, f = G || U ? Math.atan2(G, U) * N + c : _.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (p ? (h *= -1, f += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, f += 0 >= f ? 180 : -180)), _.scaleX = h, _.scaleY = u, _.rotation = c, _.skewX = f, Re && (_.rotationX = _.rotationY = _.z = 0, _.perspective = y, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * B + _.yOrigin * G), _.y -= _.yOrigin - (_.xOrigin * q + _.yOrigin * U))
                            }
                            _.zOrigin = g;
                            for (l in _) _[l] < d && _[l] > -d && (_[l] = 0)
                        }
                        return r && (e._gsTransform = _, _.svg && (xe && e.style[Pe] ? t.delayedCall(.001, function() {
                            je(e.style, Pe)
                        }) : !xe && e.getAttribute("transform") && t.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))), _
                    },
                    Le = function(e) {
                        var t, i, r = this.data,
                            s = -r.rotation * D,
                            n = s + r.skewX * D,
                            o = 1e5,
                            a = (Math.cos(s) * r.scaleX * o | 0) / o,
                            l = (Math.sin(s) * r.scaleX * o | 0) / o,
                            h = (Math.sin(n) * -r.scaleY * o | 0) / o,
                            u = (Math.cos(n) * r.scaleY * o | 0) / o,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -h, h = -i, t = f.filter, c.filter = "";
                            var _, p, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                y = "absolute" !== f.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                x = r.x + m * r.xPercent / 100,
                                b = r.y + g * r.yPercent / 100;
                            if (null != r.ox && (_ = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2, p = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2, x += _ - (_ * a + p * l), b += p - (_ * h + p * u)), y ? (_ = m / 2, p = g / 2, v += ", Dx=" + (_ - (_ * a + p * l) + x) + ", Dy=" + (p - (_ * h + p * u) + b) + ")") : v += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(C, v) : c.filter = v + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === h && 1 === u && (y && -1 === v.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                var P, S, O, R = 8 > d ? 1 : -1;
                                for (_ = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * g)) / 2 + x), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ye = 0; 4 > ye; ye++) S = te[ye], P = f[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : H(this.t, S, parseFloat(P), P.replace(w, "")) || 0, O = i !== r[S] ? 2 > ye ? -r.ieOffsetX : -r.ieOffsetY : 2 > ye ? _ - r.ieOffsetX : p - r.ieOffsetY, c[S] = (r[S] = Math.round(i - O * (0 === ye || 2 === ye ? 1 : R))) + "px"
                            }
                        }
                    },
                    Xe = Y.set3DTransformRatio = Y.setTransformRatio = function(e) {
                        var t, i, r, s, n, o, a, l, h, u, c, f, p, d, m, g, y, v, w, T, x, b, P, S = this.data,
                            O = this.t.style,
                            R = S.rotation,
                            k = S.rotationX,
                            M = S.rotationY,
                            A = S.scaleX,
                            C = S.scaleY,
                            E = S.scaleZ,
                            N = S.x,
                            I = S.y,
                            F = S.z,
                            z = S.svg,
                            L = S.perspective,
                            X = S.force3D;
                        if (((1 === e || 0 === e) && "auto" === X && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !X) && !F && !L && !M && !k && 1 === E || xe && z || !Re) return void(R || S.skewX || z ? (R *= D, b = S.skewX * D, P = 1e5, t = Math.cos(R) * A, s = Math.sin(R) * A, i = Math.sin(R - b) * -C, n = Math.cos(R - b) * C, b && "simple" === S.skewType && (y = Math.tan(b), y = Math.sqrt(1 + y * y), i *= y, n *= y, S.skewY && (t *= y, s *= y)), z && (N += S.xOrigin - (S.xOrigin * t + S.yOrigin * i) + S.xOffset, I += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset, xe && (S.xPercent || S.yPercent) && (d = this.t.getBBox(), N += .01 * S.xPercent * d.width, I += .01 * S.yPercent * d.height), d = 1e-6, d > N && N > -d && (N = 0), d > I && I > -d && (I = 0)), w = (t * P | 0) / P + "," + (s * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + N + "," + I + ")", z && xe ? this.t.setAttribute("transform", "matrix(" + w) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + C + "," + N + "," + I + ")");
                        if (_ && (d = 1e-4, d > A && A > -d && (A = E = 2e-5), d > C && C > -d && (C = E = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), R || S.skewX) R *= D, m = t = Math.cos(R), g = s = Math.sin(R), S.skewX && (R -= S.skewX * D, m = Math.cos(R), g = Math.sin(R), "simple" === S.skewType && (y = Math.tan(S.skewX * D), y = Math.sqrt(1 + y * y), m *= y, g *= y, S.skewY && (t *= y, s *= y))), i = -g, n = m;
                        else {
                            if (!(M || k || 1 !== E || L || z)) return void(O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + I + "px," + F + "px)" + (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""));
                            t = n = 1, i = s = 0
                        }
                        h = 1, r = o = a = l = u = c = 0, f = L ? -1 / L : 0, p = S.zOrigin, d = 1e-6, T = ",", x = "0", R = M * D, R && (m = Math.cos(R), g = Math.sin(R), a = -g, u = f * -g, r = t * g, o = s * g, h = m, f *= m, t *= m, s *= m), R = k * D, R && (m = Math.cos(R), g = Math.sin(R), y = i * m + r * g, v = n * m + o * g, l = h * g, c = f * g, r = i * -g + r * m, o = n * -g + o * m, h *= m, f *= m, i = y, n = v), 1 !== E && (r *= E, o *= E, h *= E, f *= E), 1 !== C && (i *= C, n *= C, l *= C, c *= C), 1 !== A && (t *= A, s *= A, a *= A, u *= A), (p || z) && (p && (N += r * -p, I += o * -p, F += h * -p + p), z && (N += S.xOrigin - (S.xOrigin * t + S.yOrigin * i) + S.xOffset, I += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset), d > N && N > -d && (N = x), d > I && I > -d && (I = x), d > F && F > -d && (F = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (d > t && t > -d ? x : t) + T + (d > s && s > -d ? x : s) + T + (d > a && a > -d ? x : a), w += T + (d > u && u > -d ? x : u) + T + (d > i && i > -d ? x : i) + T + (d > n && n > -d ? x : n), k || M || 1 !== E ? (w += T + (d > l && l > -d ? x : l) + T + (d > c && c > -d ? x : c) + T + (d > r && r > -d ? x : r), w += T + (d > o && o > -d ? x : o) + T + (d > h && h > -d ? x : h) + T + (d > f && f > -d ? x : f) + T) : w += ",0,0,0,0,1,0,", w += N + T + I + T + F + T + (L ? 1 + -F / L : 1) + ")", O[Pe] = w
                    };
                h = ke.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, we("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, i, r, n, a, l) {
                        if (r._lastParsedTransform === l) return n;
                        r._lastParsedTransform = l;
                        var h, u, c, f, _, p, d, m, g, y, v = e._gsTransform,
                            w = e.style,
                            T = 1e-6,
                            x = be.length,
                            b = l,
                            P = {},
                            S = "transformOrigin";
                        if (l.display ? (f = Q(e, "display"), w.display = "block", h = ze(e, s, !0, l.parseTransform), w.display = f) : h = ze(e, s, !0, l.parseTransform), r._transform = h, "string" == typeof b.transform && Pe) f = L.style, f[Pe] = b.transform, f.display = "block", f.position = "absolute", F.body.appendChild(L), u = ze(L, null, !1), F.body.removeChild(L), u.perspective || (u.perspective = h.perspective), null != b.xPercent && (u.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (u.yPercent = ne(b.yPercent, h.yPercent));
                        else if ("object" == typeof b) {
                            if (u = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                                    scaleZ: ne(b.scaleZ, h.scaleZ),
                                    x: ne(b.x, h.x),
                                    y: ne(b.y, h.y),
                                    z: ne(b.z, h.z),
                                    xPercent: ne(b.xPercent, h.xPercent),
                                    yPercent: ne(b.yPercent, h.yPercent),
                                    perspective: ne(b.transformPerspective, h.perspective)
                                }, m = b.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (f in m) b[f] = m[f];
                                else b.rotation = m;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = ne(b.y, h.yPercent)), u.rotation = oe("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Re && (u.rotationX = oe("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), u.rotationY = oe("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), u.skewX = null == b.skewX ? h.skewX : oe(b.skewX, h.skewX), u.skewY = null == b.skewY ? h.skewY : oe(b.skewY, h.skewY), (c = u.skewY - h.skewY) && (u.skewX += c, u.rotation += c)
                        }
                        for (Re && null != b.force3D && (h.force3D = b.force3D, d = !0), h.skewType = b.skewType || h.skewType || o.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == b.scale || (u.scaleZ = 1); --x > -1;) i = be[x], _ = u[i] - h[i], (_ > T || -T > _ || null != b[i] || null != I[i]) && (d = !0, n = new de(h, i, h[i], _, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = a, r._overwriteProps.push(n.n));
                        return _ = b.transformOrigin, h.svg && (_ || b.svgOrigin) && (g = h.xOffset, y = h.yOffset, De(e, re(_), u, b.svgOrigin, b.smoothOrigin), n = me(h, "xOrigin", (v ? h : u).xOrigin, u.xOrigin, n, S), n = me(h, "yOrigin", (v ? h : u).yOrigin, u.yOrigin, n, S), (g !== h.xOffset || y !== h.yOffset) && (n = me(h, "xOffset", v ? g : h.xOffset, h.xOffset, n, S), n = me(h, "yOffset", v ? y : h.yOffset, h.yOffset, n, S)), _ = xe ? null : "0px 0px"), (_ || Re && p && h.zOrigin) && (Pe ? (d = !0, i = Oe, _ = (_ || Q(e, i, s, !1, "50% 50%")) + "", n = new de(w, i, 0, 0, n, -1, S), n.b = w[i], n.plugin = a, Re ? (f = h.zOrigin, _ = _.split(" "), h.zOrigin = (_.length > 2 && (0 === f || "0px" !== _[2]) ? parseFloat(_[2]) : f) || 0, n.xs0 = n.e = _[0] + " " + (_[1] || "50%") + " 0px", n = new de(h, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = _) : re(_ + "", h)), d && (r._transformType = h.svg && xe || !p && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), we("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), we("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, n, o, a) {
                        t = this.format(t);
                        var l, h, u, c, f, _, p, d, m, g, y, v, w, T, x, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = e.style;
                        for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), l = t.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = V(P[h])), f = c = Q(e, P[h], s, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), _ = u = l[h], p = parseFloat(f), v = f.substr((p + "").length), w = "=" === _.charAt(1), w ? (d = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), d *= parseFloat(_), y = _.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(_), y = _.substr((d + "").length)), "" === y && (y = r[i] || v), y !== v && (T = H(e, "borderLeft", p, v), x = H(e, "borderTop", p, v), "%" === y ? (f = T / m * 100 + "%", c = x / g * 100 + "%") : "em" === y ? (b = H(e, "borderLeft", 1, "em"), f = T / b + "em", c = x / b + "em") : (f = T + "px", c = x + "px"), w && (_ = parseFloat(f) + d + y, u = parseFloat(c) + d + y)), o = ge(S, P[h], f + " " + c, _ + " " + u, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: fe("0px 0px 0px 0px", !1, !0)
                }), we("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, r, n, o) {
                        var a, l, h, u, c, f, _ = "background-position",
                            p = s || W(e, null),
                            m = this.format((p ? d ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(t);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (f = Q(e, "backgroundImage").replace(R, ""), f && "none" !== f)) {
                            for (a = m.split(" "), l = g.split(" "), X.setAttribute("src", f), h = 2; --h > -1;) m = a[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? e.offsetWidth - X.width : e.offsetHeight - X.height, a[h] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(e.style, m, g, n, o)
                    },
                    formatter: re
                }), we("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: re
                }), we("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), we("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), we("transformStyle", {
                    prefix: !0
                }), we("backfaceVisibility", {
                    prefix: !0
                }), we("userSelect", {
                    prefix: !0
                }), we("margin", {
                    parser: _e("marginTop,marginRight,marginBottom,marginLeft")
                }), we("padding", {
                    parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), we("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, r, n, o) {
                        var a, l, h;
                        return 9 > d ? (l = e.currentStyle, h = 8 > d ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", t = this.format(t).split(",").join(h)) : (a = this.format(Q(e, this.p, s, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, n, o)
                    }
                }), we("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), we("autoRound,strictUnits", {
                    parser: function(e, t, i, r, s) {
                        return s
                    }
                }), we("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, r, n, o) {
                        return this.parseComplex(e.style, this.format(Q(e, "borderTopWidth", s, !1, "0px") + " " + Q(e, "borderTopStyle", s, !1, "solid") + " " + Q(e, "borderTopColor", s, !1, "#000")), this.format(t), n, o)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(ce) || ["#000"])[0]
                    }
                }), we("borderWidth", {
                    parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), we("float,cssFloat,styleFloat", {
                    parser: function(e, t, i, r, s, n) {
                        var o = e.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new de(o, a, 0, 0, s, -1, i, !1, 0, o[a], t)
                    }
                });
                var Ye = function(e) {
                    var t, i = this.t,
                        r = i.filter || Q(this.data, "filter") || "",
                        s = this.s + this.c * e | 0;
                    100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), t = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""), t = !0)), t || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
                };
                we("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, r, n, o) {
                        var a = parseFloat(Q(e, "opacity", s, !1, "1")),
                            l = e.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), h && 1 === a && "hidden" === Q(e, "visibility", s) && 0 !== t && (a = 0), B ? n = new de(l, "opacity", a, t - a, n) : (n = new de(l, "opacity", 100 * a, 100 * (t - a), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = e, n.plugin = o, n.setRatio = Ye), h && (n = new de(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                    }
                });
                var je = function(e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(S, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Be = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : je(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                we("className", {
                    parser: function(e, t, r, n, o, a, l) {
                        var h, u, c, f, _, p = e.getAttribute("class") || "",
                            d = e.style.cssText;
                        if (o = n._classNamePT = new de(e, r, 0, 0, o, 2), o.setRatio = Be, o.pr = -11, i = !0, o.b = p, u = K(e, s), c = e._gsClassPT) {
                            for (f = {}, _ = c.data; _;) f[_.p] = 1, _ = _._next;
                            c.setRatio(1)
                        }
                        return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), h = J(e, u, K(e), l, f), e.setAttribute("class", p), o.data = h.firstMPT, e.style.cssText = d, o = o.xfirst = n.parse(e, h.difs, o, a)
                    }
                });
                var qe = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, i, r, s, n, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", s = !0;
                        else
                            for (t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) i = t[r], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Oe : l[i].p), je(o, i);
                        s && (je(o, Pe), n = this.t._gsTransform, n && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (we("clearProps", {
                        parser: function(e, t, r, s, n) {
                            return n = new de(e, r, 0, 0, n, 2), n.setRatio = qe, n.e = t, n.pr = -10, n.data = s._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ye = h.length; ye--;) Te(h[ye]);
                h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(e, t, a) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = a, this._vars = t, u = t.autoRound, i = !1, r = t.suffixMap || o.suffixMap, s = W(e, ""), n = this._overwriteProps;
                    var h, _, d, m, g, y, v, w, T, b = e.style;
                    if (c && "" === b.zIndex && (h = Q(e, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof t && (m = b.cssText, h = K(e, s), b.cssText = m + ";" + t, h = J(e, h, K(e)).difs, !B && x.test(t) && (h.opacity = parseFloat(RegExp.$1)), t = h, b.cssText = m), t.className ? this._firstPT = _ = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = _ = this.parse(e, t, null), this._transformType) {
                        for (T = 3 === this._transformType, Pe ? f && (c = !0, "" === b.zIndex && (v = Q(e, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1, d = _; d && d._next;) d = d._next;
                        w = new de(e, "transform", 0, 0, null, 2), this._linkCSSP(w, null, d), w.setRatio = Pe ? Xe : Le, w.data = this._transform || ze(e, s, !0), w.tween = a, w.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; _;) {
                            for (y = _._next, d = m; d && d.pr > _.pr;) d = d._next;
                            (_._prev = d ? d._prev : g) ? _._prev._next = _: m = _, (_._next = d) ? d._prev = _ : g = _, _ = y
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(e, t, i, n) {
                    var o, a, h, c, f, _, p, d, m, g, y = e.style;
                    for (o in t) _ = t[o], a = l[o], a ? i = a.parse(e, _, o, this, i, n, t) : (f = Q(e, o, s) + "", m = "string" == typeof _, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && P.test(_) ? (m || (_ = he(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = ge(y, o, f, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (h = parseFloat(f), p = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (h = ie(e, o, s), p = "px") : "left" === o || "top" === o ? (h = Z(e, o, s), p = "px") : (h = "opacity" !== o ? 0 : 1, p = "")), g = m && "=" === _.charAt(1), g ? (c = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), c *= parseFloat(_), d = _.replace(w, "")) : (c = parseFloat(_), d = m ? _.replace(w, "") : ""), "" === d && (d = o in r ? r[o] : p), _ = c || 0 === c ? (g ? c + h : c) + d : t[o], p !== d && "" !== d && (c || 0 === c) && h && (h = H(e, o, h, p), "%" === d ? (h /= H(e, o, 100, "%") / 100, t.strictUnits !== !0 && (f = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= H(e, o, 1, d) : "px" !== d && (c = H(e, o, c, d), d = "px"), g && (c || 0 === c) && (_ = c + h + d)), g && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== y[o] && (_ || _ + "" != "NaN" && null != _) ? (i = new de(y, o, c || h || 0, 0, i, -1, o, !1, 0, f, _), i.xs0 = "none" !== _ || "display" !== o && -1 === o.indexOf("Style") ? _ : f) : G("invalid " + o + " tween value: " + t[o]) : (i = new de(y, o, h, c - h, i, 0, o, u !== !1 && ("px" === d || "zIndex" === o), 0, f, _), i.xs0 = d)) : i = ge(y, o, f, _, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(e) {
                    var t, i, r, s = this._firstPT,
                        n = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (t = s.c * e + s.s, s.r ? t = Math.round(t) : n > t && t > -n && (t = 0), s.type)
                                    if (1 === s.type)
                                        if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === r) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + t + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(e);
                                else s.t[s.p] = t + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(e), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (t = Math.round(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (r = s.l, i = s.xs0 + t + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = t + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(e);
                                s = s._next
                            }
                }, h._enableTransforms = function(e) {
                    this._transform = this._transform || ze(this._target, s, !0), this._transformType = this._transform.svg && xe || !e && 3 !== this._transformType ? 2 : 3
                };
                var Ge = function(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(e, t, i) {
                    var r = this._firstPT = new de(e, t, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = Ge, r.data = this
                }, h._linkCSSP = function(e, t, i, r) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
                }, h._kill = function(t) {
                    var i, r, s, n = t;
                    if (t.autoAlpha || t.alpha) {
                        n = {};
                        for (r in t) n[r] = t[r];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return t.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), e.prototype._kill.call(this, n)
                };
                var Ue = function(e, t, i) {
                    var r, s, n, o;
                    if (e.slice)
                        for (s = e.length; --s > -1;) Ue(e[s], t, i);
                    else
                        for (r = e.childNodes, s = r.length; --s > -1;) n = r[s], o = n.type, n.style && (t.push(K(n)), i && i.push(n)), 1 !== o && 9 !== o && 11 !== o || !n.childNodes.length || Ue(n, t, i)
                };
                return o.cascadeTo = function(e, i, r) {
                    var s, n, o, a, l = t.to(e, i, r),
                        h = [l],
                        u = [],
                        c = [],
                        f = [],
                        _ = t._internals.reservedProps;
                    for (e = l._targets || l.target, Ue(e, u, f), l.render(i, !0, !0), Ue(e, c), l.render(0, !0, !0), l._enabled(!0), s = f.length; --s > -1;)
                        if (n = J(f[s], u[s], c[s]), n.firstMPT) {
                            n = n.difs;
                            for (o in r) _[o] && (n[o] = r[o]);
                            a = {};
                            for (o in n) a[o] = u[s][o];
                            h.push(t.fromTo(f[s], i, a, n))
                        }
                    return h
                }, e.activate([o]), o
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = function(e) {
                        for (; e;) e.f || e.blob || (e.r = 1), e = e._next
                    },
                    i = e.prototype;
                i._onInitAllProps = function() {
                    for (var e, i, r, s = this._tween, n = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), o = n.length, a = {}, l = s._propLookup.roundProps; --o > -1;) a[n[o]] = 1;
                    for (o = n.length; --o > -1;)
                        for (e = n[o], i = s._firstPT; i;) r = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : s._firstPT === i && (s._firstPT = r), i._next = i._prev = null, s._propLookup[e] = l)), i = r;
                    return !1
                }, i._add = function(e, t, i, r) {
                    this._addTween(e, t, i, i + r, t, !0), this._overwriteProps.push(t)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(e, t, i) {
                        var r;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (r in t) this._addTween(e, "setAttribute", e.getAttribute(r) + "", t[r] + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(e, t, i) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, s, n, o, a, l, h = t.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (r in t) "useRadians" !== r && (l = (t[r] + "").split("_"), s = l[0], n = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? n + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = o - n, l.length && (s = l.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (a / h | 0) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (a / h | 0) * h)), (a > u || -u > a) && (this._addTween(e, r, n, n + a, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, i, r, s = _gsScope.GreenSockGlobals || _gsScope,
                    n = s.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = n._class,
                    h = function(t, i) {
                        var r = l("easing." + t, function() {}, !0),
                            s = r.prototype = new e;
                        return s.constructor = r, s.getRatio = i, r
                    },
                    u = e.register || function() {},
                    c = function(e, t, i, r, s) {
                        var n = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new r
                        }, !0);
                        return u(n, e), n
                    },
                    f = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    _ = function(t, i) {
                        var r = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = r.prototype = new e;
                        return s.constructor = r, s.getRatio = i, s.config = function(e) {
                            return new r(e)
                        }, r
                    },
                    p = c("Back", _("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), _("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), _("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    d = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = d.prototype = new e;
                return m.constructor = d, m.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, d.ease = new d(.7, .7), m.config = d.config = function(e, t, i) {
                    return new d(e, t, i)
                }, t = l("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, m.config = t.config = function(e) {
                    return new t(e)
                }, i = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, r, s, n, o, a, l = t.taper || "none", h = [], u = 0, c = 0 | (t.points || 20), _ = c, p = t.randomize !== !1, d = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --_ > -1;) i = p ? Math.random() : 1 / c * _, r = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (n = 1 - i, s = n * n * g) : "in" === l ? s = i * i * g : .5 > i ? (n = 2 * i, s = n * n * .5 * g) : (n = 2 * (1 - i), s = n * n * .5 * g), p ? r += Math.random() * s - .5 * s : _ % 2 ? r += .5 * s : r -= .5 * s, d && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[u++] = {
                        x: i,
                        y: r
                    };
                    for (h.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new f(1, 1, null), _ = c; --_ > -1;) o = h[_], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), m = i.prototype = new e, m.constructor = i, m.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, m.config = function(e) {
                    return new i(e)
                }, i.ease = new i, c("Bounce", h("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), h("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), h("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), c("Circ", h("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), h("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), h("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), r = function(t, i, r) {
                    var s = l("easing." + t, function(e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        n = s.prototype = new e;
                    return n.constructor = s, n.getRatio = i, n.config = function(e, t) {
                        return new s(e, t)
                    }, s
                }, c("Elastic", r("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                }, .3), r("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), c("Expo", h("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), h("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), h("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), c("Sine", h("SineOut", function(e) {
                    return Math.sin(e * a)
                }), h("SineIn", function(e) {
                    return -Math.cos(e * a) + 1
                }), h("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var r, s, n, o, a, l = function(e) {
                    var t, r = e.split("."),
                        s = i;
                    for (t = 0; t < r.length; t++) s[r[t]] = s = s[r[t]] || {};
                    return s
                },
                h = l("com.greensock"),
                u = 1e-10,
                c = function(e) {
                    var t, i = [],
                        r = e.length;
                    for (t = 0; t !== r; i.push(e[t++]));
                    return i
                },
                f = function() {},
                _ = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                p = {},
                d = function(r, s, n, o) {
                    this.sc = p[r] ? p[r].sc : [], p[r] = this, this.gsClass = null, this.func = n;
                    var a = [];
                    this.check = function(h) {
                        for (var u, c, f, _, m, g = s.length, y = g; --g > -1;)(u = p[s[g]] || new d(s[g], [])).gsClass ? (a[g] = u.gsClass, y--) : h && u.sc.push(this);
                        if (0 === y && n)
                            for (c = ("com.greensock." + r).split("."), f = c.pop(), _ = l(c.join("."))[f] = this.gsClass = n.apply(n, a), o && (i[f] = _, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return _
                                }) : r === t && m && (module.exports = _)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                m = e._gsDefine = function(e, t, i, r) {
                    return new d(e, t, i, r)
                },
                g = h._class = function(e, t, i) {
                    return t = t || function() {}, m(e, [], function() {
                        return t
                    }, i), t
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                v = [],
                w = g("easing.Ease", function(e, t, i, r) {
                    this._func = e, this._type = i || 0, this._power = r || 0, this._params = t ? y.concat(t) : y
                }, !0),
                T = w.map = {},
                x = w.register = function(e, t, i, r) {
                    for (var s, n, o, a, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (n = l[u], s = r ? g("easing." + n, null, !0) : h.easing[n] || {}, o = c.length; --o > -1;) a = c[o], T[n + "." + a] = T[a + n] = s[a] = e.getRatio ? e : e[a] || new e
                };
            for (n = w.prototype, n._calcEnd = !1, n.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;) n = r[s] + ",Power" + s, x(new w(null, null, 1, s), n, "easeOut", !0), x(new w(null, null, 2, s), n, "easeIn" + (0 === s ? ",easeNone" : "")), x(new w(null, null, 3, s), n, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            n = b.prototype, n.addEventListener = function(e, t, i, r, s) {
                s = s || 0;
                var n, l, h = this._listeners[e],
                    u = 0;
                for (null == h && (this._listeners[e] = h = []), l = h.length; --l > -1;) n = h[l], n.c === t && n.s === i ? h.splice(l, 1) : 0 === u && n.pr < s && (u = l + 1);
                h.splice(u, 0, {
                    c: t,
                    s: i,
                    up: r,
                    pr: s
                }), this !== o || a || o.wake()
            }, n.removeEventListener = function(e, t) {
                var i, r = this._listeners[e];
                if (r)
                    for (i = r.length; --i > -1;)
                        if (r[i].c === t) return void r.splice(i, 1)
            }, n.dispatchEvent = function(e) {
                var t, i, r, s = this._listeners[e];
                if (s)
                    for (t = s.length, i = this._eventTarget; --t > -1;) r = s[t], r && (r.up ? r.c.call(r.s || i, {
                        type: e,
                        target: i
                    }) : r.c.call(r.s || i))
            };
            var P = e.requestAnimationFrame,
                S = e.cancelAnimationFrame,
                O = Date.now || function() {
                    return (new Date).getTime()
                },
                R = O();
            for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !P;) P = e[r[s] + "RequestAnimationFrame"], S = e[r[s] + "CancelAnimationFrame"] || e[r[s] + "CancelRequestAnimationFrame"];
            g("Ticker", function(e, t) {
                var i, r, s, n, l, h = this,
                    c = O(),
                    _ = t !== !1 && P ? "auto" : !1,
                    p = 500,
                    d = 33,
                    m = "tick",
                    g = function(e) {
                        var t, o, a = O() - R;
                        a > p && (c += a - d), R += a, h.time = (R - c) / 1e3, t = h.time - l, (!i || t > 0 || e === !0) && (h.frame++, l += t + (t >= n ? .004 : n - t), o = !0), e !== !0 && (s = r(g)), o && h.dispatchEvent(m)
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(e, t) {
                    p = e || 1 / u, d = Math.min(t, p, 0)
                }, h.sleep = function() {
                    null != s && (_ && S ? S(s) : clearTimeout(s), r = f, s = null, h === o && (a = !1))
                }, h.wake = function(e) {
                    null !== s ? h.sleep() : e ? c += -R + (R = O()) : h.frame > 10 && (R = O() - p + 5), r = 0 === i ? f : _ && P ? P : function(e) {
                        return setTimeout(e, 1e3 * (l - h.time) + 1 | 0)
                    }, h === o && (a = !0), g(2)
                }, h.fps = function(e) {
                    return arguments.length ? (i = e, n = 1 / (i || 60), l = this.time + n, void h.wake()) : i
                }, h.useRAF = function(e) {
                    return arguments.length ? (h.sleep(), _ = e, void h.fps(i)) : _
                }, h.fps(e), setTimeout(function() {
                    "auto" === _ && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
                }, 1500)
            }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
            var k = g("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, V) {
                    a || o.wake();
                    var i = this.vars.useFrames ? $ : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = k.ticker = new h.Ticker, n = k.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var M = function() {
                a && O() - R > 2e3 && o.wake(), setTimeout(M, 2e3)
            };
            M(), n.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, n.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, n.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, n.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, n.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, n.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, n.render = function(e, t, i) {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
            }, n._enabled = function(e, t) {
                return a || o.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, n.kill = function(e, t) {
                return this._kill(e, t), this
            }, n._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, n._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, n._callback = function(e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || v)
            }, n.eventCallback = function(e, t, i, r) {
                if ("on" === (e || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[e];
                    null == t ? delete s[e] : (s[e] = t, s[e + "Params"] = _(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, n.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, n.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, n.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, n.totalTime = function(e, t, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            s = this._timeline;
                        if (e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - e : e) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (N.length && Q(), this.render(e, t, !1), N.length && Q())
                }
                return this
            }, n.progress = n.totalProgress = function(e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, n.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, n.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || u, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, n.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, r = this._timeline;
                return e != this._paused && r && (a || e || o.wake(), t = r.rawTime(), i = t - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var A = g("core.SimpleTimeline", function(e) {
                k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = A.prototype = new k, n.constructor = A, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(e, t, i, r) {
                var s, n;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (n = e._startTime; s && s._startTime > n;) s = s._prev;
                return s ? (e._next = s._next, s._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = s, this._recent = e, this._timeline && this._uncache(!0), this
            }, n._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(e, t, i) {
                var r, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; s;) r = s._next, (s._active || e >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)), s = r
            }, n.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var C = g("TweenLite", function(t, i, r) {
                    if (k.call(this, i, r), this.render = C.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : C.selector(t) || t;
                    var s, n, o, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? U[C.defaultOverwrite] : "number" == typeof l ? l >> 0 : U[l], (a || t instanceof Array || t.push && _(t)) && "number" != typeof t[0])
                        for (this._targets = o = c(t), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++) n = o[s], n ? "string" != typeof n ? n.length && n !== e && n[0] && (n[0] === e || n[0].nodeType && n[0].style && !n.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(c(n))) : (this._siblings[s] = H(n, this, !1), 1 === l && this._siblings[s].length > 1 && K(n, this, null, 1, this._siblings[s])) : (n = o[s--] = C.selector(n), "string" == typeof n && o.splice(s + 1, 1)) : o.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = H(t, this, !1), 1 === l && this._siblings.length > 1 && K(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                E = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                D = function(e, t) {
                    var i, r = {};
                    for (i in e) G[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (r[i] = e[i], delete e[i]);
                    e.css = r
                };
            n = C.prototype = new k, n.constructor = C, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, C.version = "1.18.2", C.defaultEase = n._ease = new w(null, null, 1, 1), C.defaultOverwrite = "auto", C.ticker = o, C.autoSleep = 120, C.lagSmoothing = function(e, t) {
                o.lagSmoothing(e, t)
            }, C.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (C.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var N = [],
                I = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                z = function(e) {
                    for (var t, i = this._firstPT, r = 1e-6; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : r > t && t > -r && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                L = function(e, t, i, r) {
                    var s, n, o, a, l, h, u, c = [e, t],
                        f = 0,
                        _ = "",
                        p = 0;
                    for (c.start = e, i && (i(c), e = c[0], t = c[1]), c.length = 0, s = e.match(F) || [], n = t.match(F) || [], r && (r._next = null, r.blob = 1, c._firstPT = r), l = n.length, a = 0; l > a; a++) u = n[a], h = t.substr(f, t.indexOf(u, f) - f), _ += h || !a ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === s[a] || s.length <= a ? _ += u : (_ && (c.push(_), _ = ""), o = parseFloat(s[a]), c.push(o), c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: o,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                        f: 0,
                        r: p && 4 > p
                    }), f += u.length;
                    return _ += t.substr(f), _ && c.push(_), c.setRatio = z, c
                },
                X = function(e, t, i, r, s, n, o, a) {
                    var l, h, u = "get" === i ? e[t] : i,
                        c = typeof e[t],
                        f = "string" == typeof r && "=" === r.charAt(1),
                        _ = {
                            t: e,
                            p: t,
                            s: u,
                            f: "function" === c,
                            pg: 0,
                            n: s || t,
                            r: n,
                            pr: 0,
                            c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - u || 0
                        };
                    return "number" !== c && ("function" === c && "get" === i && (h = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), _.s = u = o ? e[h](o) : e[h]()), "string" == typeof u && (o || isNaN(u)) ? (_.fp = o, l = L(u, r, a || C.defaultStringFilter, _), _ = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || t,
                        pr: 0
                    }) : f || (_.s = parseFloat(u), _.c = parseFloat(r) - _.s || 0)), _.c ? ((_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _) : void 0
                },
                Y = C._internals = {
                    isArray: _,
                    isSelector: E,
                    lazyTweens: N,
                    blobDif: L
                },
                j = C._plugins = {},
                B = Y.tweenLookup = {},
                q = 0,
                G = Y.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                U = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                $ = k._rootFramesTimeline = new A,
                V = k._rootTimeline = new A,
                W = 30,
                Q = Y.lazyRender = function() {
                    var e, t = N.length;
                    for (I = {}; --t > -1;) e = N[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    N.length = 0
                };
            V._startTime = o.time, $._startTime = o.frame, V._active = $._active = !0, setTimeout(Q, 1), k._updateRoot = C.render = function() {
                var e, t, i;
                if (N.length && Q(), V.render((o.time - V._startTime) * V._timeScale, !1, !1), $.render((o.frame - $._startTime) * $._timeScale, !1, !1), N.length && Q(), o.frame >= W) {
                    W = o.frame + (parseInt(C.autoSleep, 10) || 120);
                    for (i in B) {
                        for (t = B[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete B[i]
                    }
                    if (i = V._first, (!i || i._paused) && C.autoSleep && !$._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", k._updateRoot);
            var H = function(e, t, i) {
                    var r, s, n = e._gsTweenID;
                    if (B[n || (e._gsTweenID = n = "t" + q++)] || (B[n] = {
                            target: e,
                            tweens: []
                        }), t && (r = B[n].tweens, r[s = r.length] = t, i))
                        for (; --s > -1;) r[s] === t && r.splice(s, 1);
                    return B[n].tweens
                },
                Z = function(e, t, i, r) {
                    var s, n, o = e.vars.onOverwrite;
                    return o && (s = o(e, t, i, r)), o = C.onOverwrite, o && (n = o(e, t, i, r)), s !== !1 && n !== !1
                },
                K = function(e, t, i, r, s) {
                    var n, o, a, l;
                    if (1 === r || r >= 4) {
                        for (l = s.length, n = 0; l > n; n++)
                            if ((a = s[n]) !== t) a._gc || a._kill(null, e, t) && (o = !0);
                            else if (5 === r) break;
                        return o
                    }
                    var h, c = t._startTime + u,
                        f = [],
                        _ = 0,
                        p = 0 === t._duration;
                    for (n = s.length; --n > -1;)(a = s[n]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (h = h || J(t, 0, p), 0 === J(a, h, p) && (f[_++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((p || !a._initted) && c - a._startTime <= 2e-10 || (f[_++] = a)));
                    for (n = _; --n > -1;)
                        if (a = f[n], 2 === r && a._kill(i, e, t) && (o = !0), 2 !== r || !a._firstPT && a._initted) {
                            if (2 !== r && !Z(a, t)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                J = function(e, t, i) {
                    for (var r = e._timeline, s = r._timeScale, n = e._startTime; r._timeline;) {
                        if (n += r._startTime, s *= r._timeScale, r._paused) return -100;
                        r = r._timeline
                    }
                    return n /= s, n > t ? n - t : i && n === t || !e._initted && 2 * u > n - t ? u : (n += e.totalDuration() / e._timeScale / s) > t + u ? 0 : n - t - u
                };
            n._init = function() {
                var e, t, i, r, s, n = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (r in n.startAt) s[r] = n.startAt[r];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && n.lazy !== !1, s.startAt = s.delay = null, this._startAt = C.to(this.target, 0, s), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (n.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (r in n) G[r] && "autoCSS" !== r || (i[r] = n[r]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = C.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof w ? h : "function" == typeof h ? new w(h, n.easeParams) : T[h] || C.defaultEase : C.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (t && C._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(t, i, r, s) {
                var n, o, a, l, h, u;
                if (null == t) return !1;
                I[t._gsTweenID] && Q(), this.vars.css || t.style && t !== e && t.nodeType && j.css && this.vars.autoCSS !== !1 && D(this.vars, t);
                for (n in this.vars)
                    if (u = this.vars[n], G[n]) u && (u instanceof Array || u.push && _(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this));
                    else if (j[n] && (l = new j[n])._onInitTween(t, this.vars[n], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: n,
                            pg: 1,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[n] = X.call(this, t, n, "get", u, n, 0, null, this.vars.stringFilter);
                return s && this._kill(s, t) ? this._initProps(t, i, r, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && K(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[t._gsTweenID] = !0), a)
            }, n.render = function(e, t, i) {
                var r, s, n, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > h || 0 >= e && e >= -1e-7 || h === u && "isPause" !== this.data) && h !== e && (i = !0, h > u && (s = "onReverseComplete")), this._rawPrevTime = o = !t || e || h === e ? e : u);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !t || e || h === e ? e : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var c = e / l,
                        f = this._easeType,
                        _ = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === _ ? c *= c : 2 === _ ? c *= c * c : 3 === _ ? c *= c * c * c : 4 === _ && (c *= c * c * c * c), 1 === f ? this.ratio = 1 - c : 2 === f ? this.ratio = c : .5 > e / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, N.push(this), void(this._lazy = [e, t]);
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== a || r) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
                }
            }, n._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : C.selector(t) || t;
                var r, s, n, o, a, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((_(t) || E(t)) && "number" != typeof t[0])
                    for (r = t.length; --r > -1;) this._kill(e, t[r], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (r = this._targets.length; --r > -1;)
                            if (t === this._targets[r]) {
                                a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = e || a, u = e !== s && "all" !== s && e !== a && ("object" != typeof e || !e._tempKill), i && (C.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) a[n] && (c || (c = []), c.push(n));
                            if ((c || !e) && !Z(this, i, t, c)) return !1
                        }
                        for (n in h)(o = a[n]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[n]), u && (s[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && C._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
            }, n._enabled = function(e, t) {
                if (a || o.wake(), e && this._gc) {
                    var i, r = this._targets;
                    if (r)
                        for (i = r.length; --i > -1;) this._siblings[i] = H(r[i], this, !0);
                    else this._siblings = H(this.target, this, !0)
                }
                return k.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? C._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, C.to = function(e, t, i) {
                return new C(e, t, i)
            }, C.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new C(e, t, i)
            }, C.fromTo = function(e, t, i, r) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new C(e, t, r)
            }, C.delayedCall = function(e, t, i, r, s) {
                return new C(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: r,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, C.set = function(e, t) {
                return new C(e, 0, t)
            }, C.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : C.selector(e) || e;
                var i, r, s, n;
                if ((_(e) || E(e)) && "number" != typeof e[0]) {
                    for (i = e.length, r = []; --i > -1;) r = r.concat(C.getTweensOf(e[i], t));
                    for (i = r.length; --i > -1;)
                        for (n = r[i], s = i; --s > -1;) n === r[s] && r.splice(i, 1)
                } else
                    for (r = H(e).concat(), i = r.length; --i > -1;)(r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
                return r
            }, C.killTweensOf = C.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var r = C.getTweensOf(e, t), s = r.length; --s > -1;) r[s]._kill(i, e)
            };
            var ee = g("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ee.prototype
            }, !0);
            if (n = ee.prototype, ee.version = "1.18.0", ee.API = 2, n._firstPT = null, n._addTween = X, n.setRatio = z, n._kill = function(e) {
                    var t, i = this._overwriteProps,
                        r = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                    return !1
                }, n._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, C._onPluginEvent = function(e, t) {
                    var i, r, s, n, o, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (o = a._next, r = s; r && r.pr > a.pr;) r = r._next;
                            (a._prev = r ? r._prev : n) ? a._prev._next = a: s = a, (a._next = r) ? r._prev = a : n = a, a = o
                        }
                        a = t._firstPT = s
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                    return i
                }, ee.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === ee.API && (j[(new e[t])._propName] = e[t]);
                    return !0
                }, m.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        r = e.priority || 0,
                        s = e.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            ee.call(this, i, r), this._overwriteProps = s || []
                        }, e.global === !0),
                        a = o.prototype = new ee(i);
                    a.constructor = o, o.API = e.API;
                    for (t in n) "function" == typeof e[t] && (a[n[t]] = e[t]);
                    return o.version = e.version, ee.activate([o]), o
                }, r = e._gsQueue) {
                for (s = 0; s < r.length; s++) r[s]();
                for (n in p) p[n].func || e.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(e) {
        "use strict";
        var t, i, r, s = e.fn.animate,
            n = e.fn.stop,
            o = !0,
            a = function(e) {
                var t, i = {};
                for (t in e) i[t] = e[t];
                return i
            },
            l = {
                overwrite: 1,
                delay: 1,
                useFrames: 1,
                runBackwards: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                autoCSS: 1
            },
            h = ",scrollTop,scrollLeft,show,hide,toggle,",
            u = h,
            c = function(e, t) {
                for (var i in l) l[i] && void 0 !== e[i] && (t[i] = e[i])
            },
            f = function(e) {
                return function(t) {
                    return e.getRatio(t)
                }
            },
            _ = {},
            p = function() {
                var s, n, o, a = window.GreenSockGlobals || window;
                if (t = a.TweenMax || a.TweenLite, t && (s = (t.version + ".0.0").split("."), n = !(Number(s[0]) > 0 && Number(s[1]) > 7), a = a.com.greensock, i = a.plugins.CSSPlugin, _ = a.easing.Ease.map || {}), !t || !i || n) return t = null, void(!r && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (n ? " Version " + s.join(".") + " is too old." : "")), r = !0));
                if (e.easing) {
                    for (o in _) e.easing[o] = f(_[o]);
                    p = !1
                }
            };
        e.fn.animate = function(r, n, l, h) {
            if (r = r || {}, p && (p(), !t || !i)) return s.call(this, r, n, l, h);
            if (!o || r.skipGSAP === !0 || "object" == typeof n && "function" == typeof n.step) return s.call(this, r, n, l, h);
            var f, d, m, g, y = e.speed(n, l, h),
                v = {
                    ease: _[y.easing] || (y.easing === !1 ? _.linear : _.swing)
                },
                w = this,
                T = "object" == typeof n ? n.specialEasing : null;
            for (d in r) {
                if (f = r[d], f instanceof Array && _[f[1]] && (T = T || {}, T[d] = f[1], f = f[0]), "show" === f || "hide" === f || "toggle" === f || -1 !== u.indexOf(d) && -1 !== u.indexOf("," + d + ",")) return s.call(this, r, n, l, h);
                v[-1 === d.indexOf("-") ? d : e.camelCase(d)] = f
            }
            if (T) {
                v = a(v), g = [];
                for (d in T) f = g[g.length] = {}, c(v, f), f.ease = _[T[d]] || v.ease, -1 !== d.indexOf("-") && (d = e.camelCase(d)), f[d] = v[d], delete v[d];
                0 === g.length && (g = null)
            }
            return m = function(i) {
                var r, s = a(v);
                if (g)
                    for (r = g.length; --r > -1;) t.to(this, e.fx.off ? 0 : y.duration / 1e3, g[r]);
                s.onComplete = function() {
                    i ? i() : y.old && e(this).each(y.old)
                }, t.to(this, e.fx.off ? 0 : y.duration / 1e3, s)
            }, y.queue !== !1 ? (w.queue(y.queue, m), "function" == typeof y.old && e(w[w.length - 1]).queue(y.queue, function(e) {
                y.old.call(w), e()
            })) : m.call(w), w
        }, e.fn.stop = function(e, i) {
            if (n.call(this, e, i), t) {
                if (i)
                    for (var r, s = t.getTweensOf(this), o = s.length; --o > -1;) r = s[o].totalTime() / s[o].totalDuration(), r > 0 && 1 > r && s[o].seek(s[o].totalDuration());
                t.killTweensOf(this)
            }
            return this
        }, e.gsap = {
            enabled: function(e) {
                o = e
            },
            version: "0.1.12",
            legacyProps: function(e) {
                u = h + e + ","
            }
        }
    }(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
            var t, i, r, s = _gsScope.GreenSockGlobals || _gsScope,
                n = s.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = n._class,
                h = function(t, i) {
                    var r = l("easing." + t, function() {}, !0),
                        s = r.prototype = new e;
                    return s.constructor = r, s.getRatio = i, r
                },
                u = e.register || function() {},
                c = function(e, t, i, r, s) {
                    var n = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new r
                    }, !0);
                    return u(n, e), n
                },
                f = function(e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                },
                _ = function(t, i) {
                    var r = l("easing." + t, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = r.prototype = new e;
                    return s.constructor = r, s.getRatio = i, s.config = function(e) {
                        return new r(e)
                    }, r
                },
                p = c("Back", _("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), _("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), _("BackInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                d = l("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                m = d.prototype = new e;
            return m.constructor = d, m.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, d.ease = new d(.7, .7), m.config = d.config = function(e, t, i) {
                return new d(e, t, i)
            }, t = l("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, m.config = t.config = function(e) {
                return new t(e)
            }, i = l("easing.RoughEase", function(t) {
                t = t || {};
                for (var i, r, s, n, o, a, l = t.taper || "none", h = [], u = 0, c = 0 | (t.points || 20), _ = c, p = t.randomize !== !1, d = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --_ > -1;) i = p ? Math.random() : 1 / c * _, r = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (n = 1 - i, s = n * n * g) : "in" === l ? s = i * i * g : .5 > i ? (n = 2 * i, s = n * n * .5 * g) : (n = 2 * (1 - i), s = n * n * .5 * g), p ? r += Math.random() * s - .5 * s : _ % 2 ? r += .5 * s : r -= .5 * s, d && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[u++] = {
                    x: i,
                    y: r
                };
                for (h.sort(function(e, t) {
                        return e.x - t.x
                    }), a = new f(1, 1, null), _ = c; --_ > -1;) o = h[_], a = new f(o.x, o.y, a);
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
            }, !0), m = i.prototype = new e, m.constructor = i, m.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, m.config = function(e) {
                return new i(e)
            }, i.ease = new i, c("Bounce", h("BounceOut", function(e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), h("BounceIn", function(e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), h("BounceInOut", function(e) {
                var t = .5 > e;
                return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), c("Circ", h("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), h("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), h("CircInOut", function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), r = function(t, i, r) {
                var s = l("easing." + t, function(e, t) {
                        this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    n = s.prototype = new e;
                return n.constructor = s, n.getRatio = i, n.config = function(e, t) {
                    return new s(e, t)
                }, s
            }, c("Elastic", r("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), r("ElasticIn", function(e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
            }, .3), r("ElasticInOut", function(e) {
                return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), c("Expo", h("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), h("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), h("ExpoInOut", function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), c("Sine", h("SineOut", function(e) {
                return Math.sin(e * a)
            }), h("SineIn", function(e) {
                return -Math.cos(e * a) + 1
            }), h("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return e.map[t]
                }
            }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), p
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() {
        "use strict";
        var e = function() {
            return _gsScope.GreenSockGlobals || _gsScope
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e = document.documentElement,
            t = window,
            i = function(i, r) {
                var s = "x" === r ? "Width" : "Height",
                    n = "scroll" + s,
                    o = "client" + s,
                    a = document.body;
                return i === t || i === e || i === a ? Math.max(e[n], a[n]) - (t["inner" + s] || e[o] || a[o]) : i[n] - i["offset" + s]
            },
            r = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.6",
                init: function(e, r, s) {
                    return this._wdw = e === t, this._target = e, this._tween = s, "object" != typeof r && (r = {
                        y: r
                    }), this.vars = r, this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(e, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(e, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        n = s - this.yPrev,
                        o = r - this.xPrev;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > 7 || -7 > o) && r < i(this._target, "x") && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && s < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            s = r.prototype;
        r.max = i, s.getX = function() {
            return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, s.getY = function() {
            return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, s._kill = function(e) {
            return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var e = function() {
            s.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var t = "data-scrollmagic-pin-spacer";
        e.Controller = function(r) {
            var n, o, a = "ScrollMagic.Controller",
                l = "FORWARD",
                h = "REVERSE",
                u = "PAUSED",
                c = i.defaults,
                f = this,
                _ = s.extend({}, c, r),
                p = [],
                d = !1,
                m = 0,
                g = u,
                y = !0,
                v = 0,
                w = !0,
                T = function() {
                    for (var t in _) c.hasOwnProperty(t) || (A(2, 'WARNING: Unknown option "' + t + '"'), delete _[t]);
                    if (_.container = s.get.elements(_.container)[0], !_.container) throw A(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                    y = _.container === window || _.container === document.body || !document.body.contains(_.container), y && (_.container = window), v = P(), _.container.addEventListener("resize", k), _.container.addEventListener("scroll", k), _.refreshInterval = parseInt(_.refreshInterval) || c.refreshInterval, x(), A(3, "added new " + a + " controller (v" + e.version + ")")
                },
                x = function() {
                    _.refreshInterval > 0 && (o = window.setTimeout(M, _.refreshInterval))
                },
                b = function() {
                    return _.vertical ? s.get.scrollTop(_.container) : s.get.scrollLeft(_.container)
                },
                P = function() {
                    return _.vertical ? s.get.height(_.container) : s.get.width(_.container)
                },
                S = this._setScrollPos = function(e) {
                    _.vertical ? y ? window.scrollTo(s.get.scrollLeft(), e) : _.container.scrollTop = e : y ? window.scrollTo(e, s.get.scrollTop()) : _.container.scrollLeft = e
                },
                O = function() {
                    if (w && d) {
                        var e = s.type.Array(d) ? d : p.slice(0);
                        d = !1;
                        var t = m;
                        m = f.scrollPos();
                        var i = m - t;
                        0 !== i && (g = i > 0 ? l : h), g === h && e.reverse(), e.forEach(function(t, i) {
                            A(3, "updating Scene " + (i + 1) + "/" + e.length + " (" + p.length + " total)"), t.update(!0)
                        }), 0 === e.length && _.loglevel >= 3 && A(3, "updating 0 Scenes (nothing added to controller)")
                    }
                },
                R = function() {
                    n = s.rAF(O)
                },
                k = function(e) {
                    A(3, "event fired causing an update:", e.type), "resize" == e.type && (v = P(), g = u), d !== !0 && (d = !0, R())
                },
                M = function() {
                    if (!y && v != P()) {
                        var e;
                        try {
                            e = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                        }
                        _.container.dispatchEvent(e)
                    }
                    p.forEach(function(e, t) {
                        e.refresh()
                    }), x()
                },
                A = this._log = function(e, t) {
                    _.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments))
                };
            this._options = _;
            var C = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(t) {
                if (s.type.Array(t)) t.forEach(function(e, t) {
                    f.addScene(e)
                });
                else if (t instanceof e.Scene) {
                    if (t.controller() !== f) t.addTo(f);
                    else if (p.indexOf(t) < 0) {
                        p.push(t), p = C(p), t.on("shift.controller_sort", function() {
                            p = C(p)
                        });
                        for (var i in _.globalSceneOptions) t[i] && t[i].call(t, _.globalSceneOptions[i]);
                        A(3, "adding Scene (now " + p.length + " total)")
                    }
                } else A(1, "ERROR: invalid argument supplied for '.addScene()'");
                return f
            }, this.removeScene = function(e) {
                if (s.type.Array(e)) e.forEach(function(e, t) {
                    f.removeScene(e)
                });
                else {
                    var t = p.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), p.splice(t, 1), A(3, "removing Scene (now " + p.length + " left)"), e.remove())
                }
                return f
            }, this.updateScene = function(t, i) {
                return s.type.Array(t) ? t.forEach(function(e, t) {
                    f.updateScene(e, i)
                }) : i ? t.update(!0) : d !== !0 && t instanceof e.Scene && (d = d || [], -1 == d.indexOf(t) && d.push(t), d = C(d), R()), f
            }, this.update = function(e) {
                return k({
                    type: "resize"
                }), e && O(), f
            }, this.scrollTo = function(i, r) {
                if (s.type.Number(i)) S.call(_.container, i, r);
                else if (i instanceof e.Scene) i.controller() === f ? f.scrollTo(i.scrollOffset(), r) : A(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i);
                else if (s.type.Function(i)) S = i;
                else {
                    var n = s.get.elements(i)[0];
                    if (n) {
                        for (; n.parentNode.hasAttribute(t);) n = n.parentNode;
                        var o = _.vertical ? "top" : "left",
                            a = s.get.offset(_.container),
                            l = s.get.offset(n);
                        y || (a[o] -= f.scrollPos()), f.scrollTo(l[o] - a[o], r)
                    } else A(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
                }
                return f
            }, this.scrollPos = function(e) {
                return arguments.length ? (s.type.Function(e) ? b = e : A(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), f) : b.call(f)
            }, this.info = function(e) {
                var t = {
                    size: v,
                    vertical: _.vertical,
                    scrollPos: m,
                    scrollDirection: g,
                    container: _.container,
                    isDocument: y
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void A(1, 'ERROR: option "' + e + '" is not available') : t
            }, this.loglevel = function(e) {
                return arguments.length ? (_.loglevel != e && (_.loglevel = e), f) : _.loglevel
            }, this.enabled = function(e) {
                return arguments.length ? (w != e && (w = !!e, f.updateScene(p, !0)), f) : w
            }, this.destroy = function(e) {
                window.clearTimeout(o);
                for (var t = p.length; t--;) p[t].destroy(e);
                return _.container.removeEventListener("resize", k), _.container.removeEventListener("scroll", k), s.cAF(n), A(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
            }, T(), f
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        e.Controller.addOption = function(e, t) {
            i.defaults[e] = t
        }, e.Controller.extend = function(t) {
            var i = this;
            e.Controller = function() {
                return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
            }, s.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
        }, e.Scene = function(i) {
            var n, o, a = "ScrollMagic.Scene",
                l = "BEFORE",
                h = "DURING",
                u = "AFTER",
                c = r.defaults,
                f = this,
                _ = s.extend({}, c, i),
                p = l,
                d = 0,
                m = {
                    start: 0,
                    end: 0
                },
                g = 0,
                y = !0,
                v = function() {
                    for (var e in _) c.hasOwnProperty(e) || (T(2, 'WARNING: Unknown option "' + e + '"'), delete _[e]);
                    for (var t in c) M(t);
                    R()
                },
                w = {};
            this.on = function(e, t) {
                return s.type.Function(t) ? (e = e.trim().split(" "), e.forEach(function(e) {
                    var i = e.split("."),
                        r = i[0],
                        s = i[1];
                    "*" != r && (w[r] || (w[r] = []), w[r].push({
                        namespace: s || "",
                        callback: t
                    }))
                })) : T(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), f
            }, this.off = function(e, t) {
                return e ? (e = e.trim().split(" "), e.forEach(function(e, i) {
                    var r = e.split("."),
                        s = r[0],
                        n = r[1] || "",
                        o = "*" === s ? Object.keys(w) : [s];
                    o.forEach(function(e) {
                        for (var i = w[e] || [], r = i.length; r--;) {
                            var s = i[r];
                            !s || n !== s.namespace && "*" !== n || t && t != s.callback || i.splice(r, 1)
                        }
                        i.length || delete w[e]
                    })
                }), f) : (T(1, "ERROR: Invalid event name supplied."), f)
            }, this.trigger = function(t, i) {
                if (t) {
                    var r = t.trim().split("."),
                        s = r[0],
                        n = r[1],
                        o = w[s];
                    T(3, "event fired:", s, i ? "->" : "", i || ""), o && o.forEach(function(t, r) {
                        n && n !== t.namespace || t.callback.call(f, new e.Event(s, t.namespace, f, i))
                    })
                } else T(1, "ERROR: Invalid event name supplied.");
                return f
            }, f.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? P() : "reverse" === e.what && f.update())
            }).on("shift.internal", function(e) {
                x(), f.update()
            });
            var T = this._log = function(e, t) {
                _.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), s.log.apply(window, arguments))
            };
            this.addTo = function(t) {
                return t instanceof e.Controller ? o != t && (o && o.removeScene(f), o = t, R(), b(!0), P(!0), x(), o.info("container").addEventListener("resize", S), t.addScene(f), f.trigger("add", {
                    controller: o
                }), T(3, "added " + a + " to controller"), f.update()) : T(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), f
            }, this.enabled = function(e) {
                return arguments.length ? (y != e && (y = !!e, f.update(!0)), f) : y
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", S);
                    var e = o;
                    o = void 0, e.removeScene(f), f.trigger("remove"), T(3, "removed " + a + " from controller")
                }
                return f
            }, this.destroy = function(e) {
                return f.trigger("destroy", {
                    reset: e
                }), f.remove(), f.off("*.*"), T(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"), null
            }, this.update = function(e) {
                if (o)
                    if (e)
                        if (o.enabled() && y) {
                            var t, i = o.info("scrollPos");
                            t = _.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, f.trigger("update", {
                                startPos: m.start,
                                endPos: m.end,
                                scrollPos: i
                            }), f.progress(t)
                        } else A && p === h && E(!0);
                else o.updateScene(f, !1);
                return f
            }, this.refresh = function() {
                return b(), P(), f
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        i = p,
                        r = o ? o.info("scrollDirection") : "PAUSED",
                        s = _.reverse || e >= d;
                    if (0 === _.duration ? (t = d != e, d = 1 > e && s ? 0 : 1, p = 0 === d ? l : h) : 0 > e && p !== l && s ? (d = 0, p = l, t = !0) : e >= 0 && 1 > e && s ? (d = e, p = h, t = !0) : e >= 1 && p !== u ? (d = 1, p = u, t = !0) : p !== h || s || E(), t) {
                        var n = {
                                progress: d,
                                state: p,
                                scrollDirection: r
                            },
                            a = p != i,
                            c = function(e) {
                                f.trigger(e, n)
                            };
                        a && i !== h && (c("enter"), c(i === l ? "start" : "end")), c("progress"), a && p !== h && (c(p === l ? "start" : "end"), c("leave"))
                    }
                    return f
                }
                return d
            };
            var x = function() {
                    m = {
                        start: g + _.offset
                    }, o && _.triggerElement && (m.start -= o.info("size") * _.triggerHook), m.end = m.start + _.duration
                },
                b = function(e) {
                    if (n) {
                        var t = "duration";
                        k(t, n.call(f)) && !e && (f.trigger("change", {
                            what: t,
                            newval: _[t]
                        }), f.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                P = function(e) {
                    var i = 0,
                        r = _.triggerElement;
                    if (o && r) {
                        for (var n = o.info(), a = s.get.offset(n.container), l = n.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                        var h = s.get.offset(r);
                        n.isDocument || (a[l] -= o.scrollPos()), i = h[l] - a[l]
                    }
                    var u = i != g;
                    g = i, u && !e && f.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                S = function(e) {
                    _.triggerHook > 0 && f.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                O = s.extend(r.validate, {
                    duration: function(e) {
                        if (s.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return o ? o.info("size") * t : 0
                            }
                        }
                        if (s.type.Function(e)) {
                            n = e;
                            try {
                                e = parseFloat(n())
                            } catch (i) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e), !s.type.Number(e) || 0 > e) throw n ? (n = void 0, ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                        return e
                    }
                }),
                R = function(e) {
                    e = arguments.length ? [e] : Object.keys(O), e.forEach(function(e, t) {
                        var i;
                        if (O[e]) try {
                            i = O[e](_[e])
                        } catch (r) {
                            i = c[e];
                            var n = s.type.String(r) ? [r] : r;
                            s.type.Array(n) ? (n[0] = "ERROR: " + n[0], n.unshift(1), T.apply(this, n)) : T(1, "ERROR: Problem executing validation callback for option '" + e + "':", r.message)
                        } finally {
                            _[e] = i
                        }
                    })
                },
                k = function(e, t) {
                    var i = !1,
                        r = _[e];
                    return _[e] != t && (_[e] = t, R(e), i = r != _[e]), i
                },
                M = function(e) {
                    f[e] || (f[e] = function(t) {
                        return arguments.length ? ("duration" === e && (n = void 0), k(e, t) && (f.trigger("change", {
                            what: e,
                            newval: _[e]
                        }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                            reason: e
                        })), f) : _[e]
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return p
            }, this.scrollOffset = function() {
                return m.start
            }, this.triggerPosition = function() {
                var e = _.offset;
                return o && (e += _.triggerElement ? g : o.info("size") * f.triggerHook()), e
            };
            var A, C;
            f.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (p === u && t || p === h && 0 === _.duration) && E(), t && D()
            }).on("progress.internal", function(e) {
                E()
            }).on("add.internal", function(e) {
                D()
            }).on("destroy.internal", function(e) {
                f.removePin(e.reset)
            });
            var E = function(e) {
                    if (A && o) {
                        var t = o.info(),
                            i = C.spacer.firstChild;
                        if (e || p !== h) {
                            var r = {
                                    position: C.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                n = s.css(i, "position") != r.position;
                            C.pushFollowers ? _.duration > 0 && (p === u && 0 === parseFloat(s.css(C.spacer, "padding-top")) ? n = !0 : p === l && 0 === parseFloat(s.css(C.spacer, "padding-bottom")) && (n = !0)) : r[t.vertical ? "top" : "left"] = _.duration * d, s.css(i, r), n && D()
                        } else {
                            "fixed" != s.css(i, "position") && (s.css(i, {
                                position: "fixed"
                            }), D());
                            var a = s.get.offset(C.spacer, !0),
                                c = _.reverse || 0 === _.duration ? t.scrollPos - m.start : Math.round(d * _.duration * 10) / 10;
                            a[t.vertical ? "top" : "left"] += c, s.css(C.spacer.firstChild, {
                                top: a.top,
                                left: a.left
                            })
                        }
                    }
                },
                D = function() {
                    if (A && o && C.inFlow) {
                        var e = p === h,
                            t = o.info("vertical"),
                            i = C.spacer.firstChild,
                            r = s.isMarginCollapseType(s.css(C.spacer, "display")),
                            n = {};
                        C.relSize.width || C.relSize.autoFullWidth ? e ? s.css(A, {
                            width: s.get.width(C.spacer)
                        }) : s.css(A, {
                            width: "100%"
                        }) : (n["min-width"] = s.get.width(t ? A : i, !0, !0), n.width = e ? n["min-width"] : "auto"), C.relSize.height ? e ? s.css(A, {
                            height: s.get.height(C.spacer) - (C.pushFollowers ? _.duration : 0)
                        }) : s.css(A, {
                            height: "100%"
                        }) : (n["min-height"] = s.get.height(t ? i : A, !0, !r), n.height = e ? n["min-height"] : "auto"), C.pushFollowers && (n["padding" + (t ? "Top" : "Left")] = _.duration * d, n["padding" + (t ? "Bottom" : "Right")] = _.duration * (1 - d)), s.css(C.spacer, n)
                    }
                },
                N = function() {
                    o && A && p === h && !o.info("isDocument") && E()
                },
                I = function() {
                    o && A && p === h && ((C.relSize.width || C.relSize.autoFullWidth) && s.get.width(window) != s.get.width(C.spacer.parentNode) || C.relSize.height && s.get.height(window) != s.get.height(C.spacer.parentNode)) && D()
                },
                F = function(e) {
                    o && A && p === h && !o.info("isDocument") && (e.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((e.wheelDelta || e[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, i) {
                var r = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (i = s.extend({}, r, i), e = s.get.elements(e)[0], !e) return T(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), f;
                if ("fixed" === s.css(e, "position")) return T(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), f;
                if (A) {
                    if (A === e) return f;
                    f.removePin()
                }
                A = e;
                var n = A.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                A.parentNode.style.display = "none";
                var a = "absolute" != s.css(A, "position"),
                    l = s.css(A, o.concat(["display"])),
                    h = s.css(A, ["width", "height"]);
                A.parentNode.style.display = n, !a && i.pushFollowers && (T(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function() {
                    A && 0 === _.duration && i.pushFollowers && T(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var u = A.parentNode.insertBefore(document.createElement("div"), A),
                    c = s.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || s.extend(c, s.css(A, ["width", "height"])), s.css(u, c), u.setAttribute(t, ""), s.addClass(u, i.spacerClass), C = {
                        spacer: u,
                        relSize: {
                            width: "%" === h.width.slice(-1),
                            height: "%" === h.height.slice(-1),
                            autoFullWidth: "auto" === h.width && a && s.isMarginCollapseType(l.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: a
                    }, !A.___origStyle) {
                    A.___origStyle = {};
                    var p = A.style,
                        d = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    d.forEach(function(e) {
                        A.___origStyle[e] = p[e] || ""
                    })
                }
                return C.relSize.width && s.css(u, {
                    width: h.width
                }), C.relSize.height && s.css(u, {
                    height: h.height
                }), u.appendChild(A), s.css(A, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (C.relSize.width || C.relSize.autoFullWidth) && s.css(A, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", I), A.addEventListener("mousewheel", F), A.addEventListener("DOMMouseScroll", F), T(3, "added pin"), E(), f
            }, this.removePin = function(e) {
                if (A) {
                    if (p === h && E(!0), e || !o) {
                        var i = C.spacer.firstChild;
                        if (i.hasAttribute(t)) {
                            var r = C.spacer.style,
                                n = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, n.forEach(function(e) {
                                margins[e] = r[e] || ""
                            }), s.css(i, margins)
                        }
                        C.spacer.parentNode.insertBefore(i, C.spacer), C.spacer.parentNode.removeChild(C.spacer), A.parentNode.hasAttribute(t) || (s.css(A, A.___origStyle), delete A.___origStyle)
                    }
                    window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", I), A.removeEventListener("mousewheel", F), A.removeEventListener("DOMMouseScroll", F), A = void 0, T(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
                }
                return f
            };
            var z, L = [];
            return f.on("destroy.internal", function(e) {
                f.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var i = s.get.elements(e);
                return 0 !== i.length && s.type.String(t) ? (L.length > 0 && f.removeClassToggle(), z = t, L = i, f.on("enter.internal_class leave.internal_class", function(e) {
                    var t = "enter" === e.type ? s.addClass : s.removeClass;
                    L.forEach(function(e, i) {
                        t(e, z)
                    })
                }), f) : (T(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), f)
            }, this.removeClassToggle = function(e) {
                return e && L.forEach(function(e, t) {
                    s.removeClass(e, z)
                }), f.off("start.internal_class end.internal_class"), z = void 0, L = [], f
            }, v(), f
        };
        var r = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !s.type.Number(e)) throw ['Invalid value for option "offset":', e];
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = s.get.elements(e)[0];
                        if (!t) throw ['Element defined in option "triggerElement" was not found:', e];
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (s.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                },
                loglevel: function(e) {
                    if (e = parseInt(e), !s.type.Number(e) || 0 > e || e > 3) throw ['Invalid value for option "loglevel":', e];
                    return e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        e.Scene.addOption = function(t, i, s, n) {
            t in r.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (r.defaults[t] = i, r.validate[t] = s, n && r.shifts.push(t))
        }, e.Scene.extend = function(t) {
            var i = this;
            e.Scene = function() {
                return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
            }, s.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
        }, e.Event = function(e, t, i, r) {
            r = r || {};
            for (var s in r) this[s] = r[s];
            return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var s = e._util = function(e) {
            var t, i = {},
                r = function(e) {
                    return parseFloat(e) || 0
                },
                s = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                },
                n = function(t, i, n, o) {
                    if (i = i === document ? e : i, i === e) o = !1;
                    else if (!p.DomElement(i)) return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var a = (n ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
                    if (n && o) {
                        var l = s(i);
                        a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                    }
                    return a
                },
                o = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            i.extend = function(e) {
                for (e = e || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
                return e
            }, i.isMarginCollapseType = function(e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                h = e.requestAnimationFrame,
                u = e.cancelAnimationFrame;
            for (t = 0; !h && t < l.length; ++t) h = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
            h || (h = function(t) {
                var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - a)),
                    s = e.setTimeout(function() {
                        t(i + r)
                    }, r);
                return a = i + r, s
            }), u || (u = function(t) {
                e.clearTimeout(t)
            }), i.rAF = h.bind(e), i.cAF = u.bind(e);
            var c = ["error", "warn", "log"],
                f = e.console || {};
            for (f.log = f.log || function() {}, t = 0; t < c.length; t++) {
                var _ = c[t];
                f[_] || (f[_] = f.log)
            }
            i.log = function(e) {
                (e > c.length || 0 >= e) && (e = c.length);
                var t = new Date,
                    i = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                    r = c[e - 1],
                    s = Array.prototype.splice.call(arguments, 1),
                    n = Function.prototype.bind.call(f[r], f);
                s.unshift(i), n.apply(f, s)
            };
            var p = i.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            p.String = function(e) {
                return "string" === p(e)
            }, p.Function = function(e) {
                return "function" === p(e)
            }, p.Array = function(e) {
                return Array.isArray(e)
            }, p.Number = function(e) {
                return !p.Array(e) && e - parseFloat(e) + 1 >= 0
            }, p.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var d = i.get = {};
            return d.elements = function(t) {
                var i = [];
                if (p.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (r) {
                    return i
                }
                if ("nodelist" === p(t) || p.Array(t))
                    for (var s = 0, n = i.length = t.length; n > s; s++) {
                        var o = t[s];
                        i[s] = p.DomElement(o) ? o : d.elements(o)
                    } else(p.DomElement(t) || t === document || t === e) && (i = [t]);
                return i
            }, d.scrollTop = function(t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
            }, d.scrollLeft = function(t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
            }, d.width = function(e, t, i) {
                return n("width", e, t, i)
            }, d.height = function(e, t, i) {
                return n("height", e, t, i)
            }, d.offset = function(e, t) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    i.top = r.top, i.left = r.left, t || (i.top += d.scrollTop(), i.left += d.scrollLeft())
                }
                return i
            }, i.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, i.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(e, t) {
                if (p.String(t)) return s(e)[o(t)];
                if (p.Array(t)) {
                    var i = {},
                        r = s(e);
                    return t.forEach(function(e, t) {
                        i[e] = r[o(e)]
                    }), i
                }
                for (var n in t) {
                    var a = t[n];
                    a == parseFloat(a) && (a += "px"), e.style[o(n)] = a
                }
            }, i
        }(window || {});
        return e.Scene.prototype.addIndicators = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, e.Scene.prototype.removeIndicators = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, e.Scene.prototype.setTween = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, e.Scene.prototype.removeTween = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, e.Scene.prototype.setVelocity = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, e.Scene.prototype.removeVelocity = function() {
            return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, t, i) {
        "use strict";
        var r = "animation.gsap",
            s = window.console || {},
            n = Function.prototype.bind.call(s.error || s.log || function() {}, s);
        e || n("(" + r + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), t || n("(" + r + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var e, s = this,
                n = function() {
                    s._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + r + ")", "->"), s._log.apply(this, arguments))
                };
            s.on("progress.plugin_gsap", function() {
                o()
            }), s.on("destroy.plugin_gsap", function(e) {
                s.removeTween(e.reset)
            });
            var o = function() {
                if (e) {
                    var t = s.progress(),
                        i = s.state();
                    e.repeat && -1 === e.repeat() ? "DURING" === i && e.paused() ? e.play() : "DURING" === i || e.paused() || e.pause() : t != e.progress() && (0 === s.duration() ? t > 0 ? e.play() : e.reverse() : s.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                }
            };
            s.setTween = function(r, a, l) {
                var h;
                arguments.length > 1 && (arguments.length < 3 && (l = a, a = 1), r = t.to(r, a, l));
                try {
                    h = i ? new i({
                        smoothChildTiming: !0
                    }).add(r) : r, h.pause()
                } catch (u) {
                    return n(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), s
                }
                if (e && s.removeTween(), e = h, r.repeat && -1 === r.repeat() && (e.repeat(-1), e.yoyo(r.yoyo())), s.tweenChanges() && !e.tweenTo && n(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), e && s.controller() && s.triggerElement() && s.loglevel() >= 2) {
                    var c = t.getTweensOf(s.triggerElement()),
                        f = s.controller().info("vertical");
                    c.forEach(function(e, t) {
                        var i = e.vars.css || e.vars,
                            r = f ? void 0 !== i.top || void 0 !== i.bottom : void 0 !== i.left || void 0 !== i.right;
                        return r ? (n(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                    })
                }
                if (parseFloat(TweenLite.version) >= 1.14)
                    for (var _, p, d = e.getChildren ? e.getChildren(!0, !0, !1) : [e], m = function() {
                            n(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                        }, g = 0; g < d.length; g++) _ = d[g], p !== m && (p = _.vars.onOverwrite, _.vars.onOverwrite = function() {
                        p && p.apply(this, arguments), m.apply(this, arguments)
                    });
                return n(3, "added tween"), o(), s
            }, s.removeTween = function(t) {
                return e && (t && e.progress(0).pause(), e.kill(), e = void 0, n(3, "removed tween (reset: " + (t ? "true" : "false") + ")")), s
            }
        })
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], t) : "object" == typeof exports ? t(require("scrollmagic"), require("jquery")) : t(e.ScrollMagic, e.jQuery)
    }(this, function(e, t) {
        "use strict";
        var i = "jquery.ScrollMagic",
            r = window.console || {},
            s = Function.prototype.bind.call(r.error || r.log || function() {}, r);
        e || s("(" + i + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), t || s("(" + i + ") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs."), e._util.get.elements = function(e) {
            return t(e).toArray()
        }, e._util.addClass = function(e, i) {
            t(e).addClass(i)
        }, e._util.removeClass = function(e, i) {
            t(e).removeClass(i)
        }, t.ScrollMagic = e
    }),
    function() {
        var e;
        e = function() {
            var e, t, i, r, s, n, o, a, l, h, u, c, f, _, p, d, m, g, y, v, w, T, x, b, P, S, O, R, k, M, A;
            return _ = new ScrollMagic.Controller, A = $(window).height(), f = "undefined" != typeof renderer && null !== renderer ? !0 : !1, t = $(".cover__scene_0"), i = $(".cover__scene_1"), r = $(".cover__scene_2"), s = $(".cover__scene_3"), h = $(".video"), l = $(".synopsis"), n = $(".crew"), e = $(".awards"), a = $(".news"), o = $(".gallery"), f && (P = (new TimelineMax).fromTo(stars1, 1, {
                alpha: 0
            }, {
                alpha: 1
            }, 0).fromTo(stars3, 1, {
                alpha: 0
            }, {
                alpha: 1
            }, 0).fromTo(stars2, .5, {
                alpha: 0
            }, {
                alpha: 1
            }, .5), new ScrollMagic.Scene({
                offset: A / 2,
                duration: t.height() - A,
                triggerElement: t
            }).setTween(P).addTo(_)), S = (new TimelineMax).fromTo(".cover__title svg", .5, {
                opacity: 0,
                scale: 1.2
            }, {
                opacity: 1,
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo("#textGradient .start", .45, {
                attr: {
                    offset: "-20%"
                }
            }, {
                attr: {
                    offset: "120%"
                },
                ease: Power0.easeNone
            }, 0).fromTo("#textGradient .end", .45, {
                attr: {
                    offset: "0%"
                }
            }, {
                attr: {
                    offset: "140%"
                },
                ease: Power0.easeNone
            }, 0).fromTo(".cover__link, .sound", .2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power0.easeNone
            }, 0).fromTo(".cover__scroll", .2, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power0.easeNone
            }, .3).to(".cover__title svg", .5, {
                scaleX: 1.5,
                scaleY: 1.5,
                ease: Power1.easeIn
            }, .5).to(".cover__scroll", .5, {
                y: "150px",
                autoAlpha: 0,
                ease: Power1.easeIn
            }, .5), $(".cover__scroll").click(function() {
                var e;
                return e = r.offset().top + r.height() / 5, TweenMax.to(u, 2, {
                    scrollTo: {
                        y: e,
                        autoKill: !0
                    },
                    ease: Power1.easeOut,
                    overwrite: 5
                })
            }), f && S.to(shockwaveFilter.params, .4, {
                y: 0,
                ease: Power0.easeNone
            }, 0).to(shockwaveFilter.params, .4, {
                y: .5,
                ease: Power0.easeNone
            }, .6).fromTo(cloud1, .5, {
                alpha: 0
            }, {
                alpha: 1,
                ease: Power0.easeNone
            }, 0).to(cloud1, .4, {
                alpha: 0,
                ease: Power0.easeNone
            }, .6).fromTo(cloud1.position, 1, {
                y: A / 2
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, 0).fromTo(cloud2, .5, {
                alpha: 0
            }, {
                alpha: 1,
                ease: Power0.easeNone
            }, 0).to(cloud2, .4, {
                alpha: 0,
                ease: Power0.easeNone
            }, .6).fromTo(cloud2.position, 1, {
                y: A / 4
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, 0).fromTo(light, .5, {
                alpha: 0
            }, {
                alpha: 1,
                ease: Power0.easeNone
            }, 0).to(light, .4, {
                alpha: 0,
                ease: Power0.easeNone
            }, .6), new ScrollMagic.Scene({
                offset: -A / 2,
                duration: i.height() + A,
                triggerElement: i
            }).setTween(S).addTo(_), g = s.offset().top - r.offset().top, O = (new TimelineMax).fromTo(".cover__lines", 1, {
                x: "-60%",
                y: .7 * -A
            }, {
                x: "-10%",
                y: .1 * -A,
                ease: Power1.easeOut
            }, 0).fromTo(".cover__line_1", 1, {
                x: "-70%",
                y: "-70%"
            }, {
                x: "40%",
                y: "15%",
                ease: Power1.easeOut
            }, 0).fromTo(".cover__line_2", 1, {
                x: "50%",
                y: "50%"
            }, {
                x: "30%",
                y: "15%",
                ease: Power1.easeOut
            }, 0).fromTo(".cover__line_3", 1, {
                x: "30%",
                y: "30%"
            }, {
                x: "15%",
                y: "0%",
                ease: Power1.easeOut
            }, 0).fromTo(".cover__line_4", 1, {
                x: "-60%",
                y: "-60%"
            }, {
                x: "30%",
                y: "20%",
                ease: Power1.easeOut
            }, 0).fromTo(".cover__box", 1, {
                y: 3 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".cover__box-img", .5, {
                scaleY: 2
            }, {
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".cover__drops-item_1", .1, {
                x: "30px",
                y: "-150px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_2", .1, {
                x: "0px",
                y: "-100px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_3", .1, {
                x: "0px",
                y: "-100px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_4", .1, {
                x: "-10px",
                y: "-50px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_5", .1, {
                x: "-130px",
                y: "-20px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_6", .1, {
                x: "-100px",
                y: "0px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_7", .1, {
                x: "-60px",
                y: "40px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_8", .1, {
                x: "-50px",
                y: "80px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_9", .1, {
                x: "-300px",
                y: "0px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_10", .1, {
                x: "-150px",
                y: "150px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_11", .1, {
                x: "-140px",
                y: "140px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_12", .1, {
                x: "-140px",
                y: "100px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_13", .1, {
                x: "-150px",
                y: "90px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_14", .1, {
                x: "-220px",
                y: "180px"
            }, {
                x: "0",
                y: "0",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_6, .cover__drops-item_12, .cover__drops-item_13", .02, {
                opacity: "0"
            }, {
                opacity: "1",
                ease: Power1.easeOut
            }, .65).fromTo(".cover__drops-item_9, .cover__drops-item_10", .02, {
                opacity: "0"
            }, {
                opacity: "1",
                ease: Power1.easeOut
            }, .66).fromTo(".cover__drops-item_11, .cover__drops-item_14", .02, {
                opacity: "0"
            }, {
                opacity: "0.5",
                ease: Power1.easeOut
            }, .67).fromTo(".cover__drops-item_1, .cover__drops-item_2, .cover__drops-item_3, .cover__drops-item_4", .015, {
                opacity: "0"
            }, {
                opacity: "1",
                ease: Power1.easeOut
            }, .68).fromTo(".cover__drops-item_5, .cover__drops-item_7, .cover__drops-item_8", .015, {
                opacity: "0"
            }, {
                opacity: "1",
                ease: Power1.easeOut
            }, .7), f && O.to(shockwaveFilter.params, .2, {
                y: 0
            }, .5).to(shockwaveFilter.params, .28, {
                y: .5
            }, .72).fromTo(cloud1, .2, {
                alpha: 0
            }, {
                alpha: 1
            }, .4).to(cloud1, .3, {
                alpha: 0,
                ease: Power0.easeNone
            }, .7).fromTo(cloud1.position, .6, {
                y: A / 2
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, .4).fromTo(cloud2, .2, {
                alpha: 0
            }, {
                alpha: 1
            }, .4).to(cloud2, .3, {
                alpha: 0,
                ease: Power0.easeNone
            }, .7).fromTo(cloud2.position, .6, {
                y: A / 4
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, .4), new ScrollMagic.Scene({
                offset: -A / 1.5,
                duration: r.height() + A / 1.5 * 2,
                triggerElement: r
            }).setTween(O).addTo(_), R = (new TimelineMax).fromTo(".cover__drops-bottom", .1, {
                autoAlpha: 0
            }, {
                autoAlpha: .9,
                ease: Power0.easeOut
            }, 0).fromTo(".cover__drop_1", 1, {
                x: "350px",
                y: "300px",
                scale: .4
            }, {
                x: "-300",
                y: "350",
                scale: 1,
                ease: SlowMo.ease.config(.7, .7, !1)
            }, 0).fromTo(".cover__drop_2", 1, {
                x: "150px",
                y: "-50px",
                scale: .4
            }, {
                x: "0",
                y: "200",
                scale: 1,
                ease: SlowMo.ease.config(.7, .7, !1)
            }, 0).fromTo(".cover__drop_3", 1, {
                x: "-500px",
                y: "0px",
                scale: .4
            }, {
                x: "500",
                y: "100",
                scale: 1.1,
                ease: SlowMo.ease.config(.7, .7, !1)
            }, 0).to(".cover__drops-bottom", .1, {
                autoAlpha: 0,
                ease: Power0.easeOut
            }, .9), p = function(e) {
                return new ScrollMagic.Scene({
                    offset: .5 * A,
                    duration: g,
                    triggerElement: r
                }).setTween(e).addTo(_)
            }, p(R), p(TweenMax.fromTo(".cover__drop_1 img", 40, {
                y: -50
            }, {
                y: 50,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), p(TweenMax.fromTo(".cover__drop_2 img", 30, {
                y: -60
            }, {
                y: 65,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), p(TweenMax.fromTo(".cover__drop_3 img", 20, {
                y: -70
            }, {
                y: 80,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), d = function(e) {
                return new ScrollMagic.Scene({
                    offset: -A / 1.5,
                    duration: s.height() + A / 1.5 * 2,
                    triggerElement: s
                }).setTween(e).addTo(_)
            }, k = (new TimelineMax).fromTo(".cover__subtitle svg", .5, {
                opacity: 0,
                scale: 1.2
            }, {
                opacity: 1,
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo("#subtitleGradient1 .start", .4, {
                attr: {
                    offset: "-20%"
                }
            }, {
                attr: {
                    offset: "100%"
                },
                ease: Power0.easeNone
            }, .1).fromTo("#subtitleGradient1 .end", .4, {
                attr: {
                    offset: "0%"
                }
            }, {
                attr: {
                    offset: "150%"
                },
                ease: Power0.easeNone
            }, .1).fromTo("#subtitleGradient2 .start", .2, {
                attr: {
                    offset: "-100%"
                }
            }, {
                attr: {
                    offset: "110%"
                },
                ease: Power0.easeNone
            }, .2).fromTo("#subtitleGradient2 .end", .2, {
                attr: {
                    offset: "-50%"
                }
            }, {
                attr: {
                    offset: "160%"
                },
                ease: Power0.easeNone
            }, .2).fromTo("#subtitleGradient3 .start", .2, {
                attr: {
                    offset: "-20%"
                }
            }, {
                attr: {
                    offset: "100%"
                },
                ease: Power0.easeNone
            }, .3).fromTo("#subtitleGradient3 .end", .2, {
                attr: {
                    offset: "0%"
                }
            }, {
                attr: {
                    offset: "150%"
                },
                ease: Power0.easeNone
            }, .3).to(".cover__subtitle svg", .5, {
                scale: 1.5,
                y: .3 * -A,
                ease: Power1.easeIn
            }, .5), f && k.to(shockwaveFilter.params, .4, {
                y: 0
            }, 0).fromTo(cloud1, .5, {
                alpha: 0
            }, {
                alpha: 1
            }, 0).to(cloud1, .4, {
                alpha: 0,
                ease: Power0.easeNone
            }, .6).fromTo(cloud1.position, 1, {
                y: A / 2
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, 0).fromTo(cloud2, .5, {
                alpha: 0
            }, {
                alpha: 1
            }, 0).to(cloud2, .4, {
                alpha: 0,
                ease: Power0.easeNone
            }, .6).fromTo(cloud2.position, 1, {
                y: A / 4
            }, {
                y: -A / 2,
                ease: Power0.easeNone
            }, 0).to(stars3, .4, {
                alpha: .8,
                ease: Power0.easeNone
            }, .6).to(light, .4, {
                alpha: .5,
                ease: Power0.easeNone
            }, .6), d(k), M = (new TimelineMax).fromTo(".video__title", .5, {
                y: .3 * A,
                scaleY: 1.5
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".video__box", .5, {
                y: .7 * A,
                scale: 1.7
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".video__link", .5, {
                y: 1.5 * A,
                scale: 1.8
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).to(".video__title", .5, {
                y: 1.5 * -A,
                scaleY: 1.8,
                ease: Power1.easeIn
            }, .5).to(".video__box", .5, {
                y: .7 * -A,
                scale: 1.7,
                ease: Power1.easeIn
            }, .5).to(".video__link", .5, {
                y: .3 * -A,
                scale: 1.5,
                ease: Power1.easeIn
            }, .5), new ScrollMagic.Scene({
                offset: -A / 2,
                duration: h.height() + A,
                triggerElement: h
            }).setTween(M).addTo(_), x = function(e) {
                return new ScrollMagic.Scene({
                    offset: -A / 2,
                    duration: l.height() + A,
                    triggerElement: l
                }).setTween(e).addTo(_)
            }, x(TweenMax.fromTo(".synopsis__el_1 img", 20, {
                y: 0
            }, {
                y: 150,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), x(TweenMax.fromTo(".synopsis__el_2 img", 30, {
                y: 0
            }, {
                y: 125,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), x(TweenMax.fromTo(".synopsis__el_3 img", 40, {
                y: 0
            }, {
                y: 100,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), x((new TimelineMax).fromTo(".synopsis__el_1", .5, {
                y: .6 * -A
            }, {
                y: "0",
                ease: Power0.easeNone
            }, 0).fromTo(".synopsis__el_2", .5, {
                y: .5 * -A
            }, {
                y: "0",
                ease: Power0.easeNone
            }, 0).fromTo(".synopsis__el_3", .5, {
                y: .3 * -A
            }, {
                y: "0",
                ease: Power0.easeNone
            }, 0).fromTo(".synopsis__title", .5, {
                y: .3 * A,
                scaleY: 1.5
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".synopsis__description-short", .5, {
                y: 1 * A,
                scale: 2
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".synopsis__description-full", .5, {
                y: 2 * A,
                scale: 2.4
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".synopsis__footer", .5, {
                y: 3 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).to(".synopsis__el_1", .5, {
                y: .3 * -A,
                scale: 1.5,
                ease: Power0.easeNone
            }, .5).to(".synopsis__el_2", .5, {
                y: .15 * -A,
                scale: 1.3,
                ease: Power0.easeNone
            }, .5).to(".synopsis__el_3", .5, {
                y: 0 * A,
                scale: 1.1,
                ease: Power0.easeNone
            }, .5).to(".synopsis__title", .5, {
                y: 3 * -A,
                scaleY: 1.5,
                ease: Power1.easeIn
            }, .5).to(".synopsis__description-short", .5, {
                y: 2 * -A,
                scale: 2.4,
                ease: Power1.easeIn
            }, .5).to(".synopsis__description-full", .5, {
                y: 1 * -A,
                scale: 2,
                ease: Power1.easeIn
            }, .5).to(".synopsis__footer", .5, {
                y: .3 * -A,
                ease: Power1.easeIn
            }, .5)), m = function(e) {
                return new ScrollMagic.Scene({
                    offset: -A / 2,
                    duration: n.height() + A,
                    triggerElement: n
                }).setTween(e).addTo(_)
            }, m(TweenMax.fromTo(".crew__el_1 img", 20, {
                y: 0
            }, {
                y: 150,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), m(TweenMax.fromTo(".crew__el_2 img", 40, {
                y: 0
            }, {
                y: 100,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), m(TweenMax.fromTo(".crew__el_3 img", 30, {
                y: 0
            }, {
                y: 130,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), m((new TimelineMax).fromTo(".crew__el_1", .5, {
                y: .1 * -A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".crew__el_2", .5, {
                y: .7 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".crew__el_3", .5, {
                y: 1.3 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".crew__title", .5, {
                y: .3 * A,
                scale: 1.8
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".crew__list", .5, {
                y: 1.5 * A,
                scale: 2.6
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".crew__footer", .5, {
                y: 3 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).to(".crew__el_1", .5, {
                y: .2 * A,
                ease: Power1.easeIn
            }, .5).to(".crew__el_2", .5, {
                y: .1 * A,
                ease: Power1.easeIn
            }, .5).to(".crew__el_3", .5, {
                y: .15 * A,
                ease: Power1.easeIn
            }, .5).to(".crew__title", .5, {
                y: 3 * -A,
                scale: 2.2,
                ease: Power1.easeIn
            }, .5).to(".crew__list", .5, {
                y: 1.5 * -A,
                scale: 2.6,
                ease: Power1.easeIn
            }, .5).to(".crew__footer", .5, {
                y: .3 * -A,
                ease: Power1.easeIn
            }, .5)), c = function(t) {
                return new ScrollMagic.Scene({
                    offset: -A / 2,
                    duration: e.height() + A,
                    triggerElement: e
                }).setTween(t).addTo(_)
            }, c(TweenMax.fromTo(".awards__el_1 img", 20, {
                y: 0
            }, {
                y: 150,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), c(TweenMax.fromTo(".awards__el_2 img", 30, {
                y: 0
            }, {
                y: 100,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), c((new TimelineMax).fromTo(".awards__el_1", .5, {
                y: .1 * -A
            }, {
                y: .3 * -A,
                ease: Power1.easeOut
            }, 0).fromTo(".awards__el_2", .5, {
                y: .5 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".awards__title", .5, {
                y: .3 * A,
                scaleY: 1.8
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".awards__list", .5, {
                y: 1.5 * A,
                scale: 2.6
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).to(".awards__title", .5, {
                y: 3 * -A,
                scaleY: 2.2,
                ease: Power1.easeIn
            }, .5).to(".awards__list", .5, {
                y: 2 * -A,
                scale: 2.6,
                ease: Power1.easeIn
            }, .5)), v = function(e) {
                return new ScrollMagic.Scene({
                    offset: -A / 2,
                    duration: a.height() + A,
                    triggerElement: a
                }).setTween(e).addTo(_)
            }, v(TweenMax.fromTo(".news__el_1 img", 20, {
                y: 0
            }, {
                y: 150,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), v(TweenMax.fromTo(".news__el_2 img", 30, {
                y: 0
            }, {
                y: 100,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), v((new TimelineMax).fromTo(".news__title", .5, {
                y: .3 * A,
                scaleY: 1.2
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".news__el_1", .5, {
                y: .1 * -A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".news__el_2", .5, {
                y: .2 * -A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".news__list", .5, {
                y: .5 * A,
                scale: 1.5
            }, {
                y: 0,
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".news__list-item .post__title", .5, {
                y: .7 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".news__list-item .post__image", .5, {
                y: 1 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".news__list-item .post__date", .5, {
                y: 1 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".news__list-item .post__text", .5, {
                y: 1.5 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).to(".news__title", .5, {
                y: 1.5 * -A,
                scaleY: 1.2,
                ease: Power1.easeIn
            }, .5).to(".news__el_1", .5, {
                y: .5 * -A,
                ease: Power1.easeIn
            }, .5).to(".news__el_2", .5, {
                y: .7 * -A,
                ease: Power1.easeIn
            }, .5).to(".news__list", .5, {
                y: .5 * -A,
                scale: 1.3,
                ease: Power1.easeIn
            }, .5).to(".news__list-item .post__title", .5, {
                y: .5 * -A,
                ease: Power1.easeIn
            }, .5).to(".news__list-item .post__image", .5, {
                y: 1 * -A,
                ease: Power1.easeIn
            }, .5).to(".news__list-item .post__date", .5, {
                y: 1 * -A,
                ease: Power1.easeIn
            }, .5).to(".news__list-item .post__text", .5, {
                y: .5 * -A,
                ease: Power1.easeIn
            }, .5)), y = function(e) {
                return new ScrollMagic.Scene({
                    offset: -A / 2,
                    duration: o.height() + A,
                    triggerElement: o
                }).setTween(e).addTo(_)
            }, y(TweenMax.fromTo(".gallery__el_1 img", 30, {
                y: 0
            }, {
                y: 100,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), y(TweenMax.fromTo(".gallery__el_2 img", 20, {
                y: 0
            }, {
                y: 150,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            }, 0)), y((new TimelineMax).fromTo(".gallery__el_1", 1, {
                y: .3 * -A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__el_2", 1, {
                y: .6 * -A
            }, {
                y: "0",
                ease: Power0.easeNone
            }, 0).fromTo(".gallery__title", .5, {
                y: .3 * A,
                scale: 1.2
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__list", .5, {
                y: .5 * A,
                scale: 1.8
            }, {
                y: "0",
                scale: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__box_1", .5, {
                y: .2 * A
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__box_3", .5, {
                y: .2 * A
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__box_4", .5, {
                y: .5 * A
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__box_5", .5, {
                y: .3 * A
            }, {
                y: "0",
                scaleY: 1,
                ease: Power1.easeOut
            }, 0).fromTo(".gallery__bg", 1, {
                y: 2 * A
            }, {
                y: "0",
                ease: Power1.easeOut
            }, 0)), f && (b = (new TimelineMax).to(stars1.tilePosition, 1, {
                y: "-=2000",
                ease: Power0.easeNone
            }, 0).to(stars2.tilePosition, 1, {
                y: "-=4000",
                ease: Power0.easeNone
            }, 0).to(stars3.tilePosition, 1, {
                y: "-=3000",
                ease: Power0.easeNone
            }, 0), new ScrollMagic.Scene({
                offset: -A / 2,
                duration: $("body").height() + A / 2,
                triggerElement: $("body")
            }).setTween(b).addTo(_)), $(document).on("document.load", function() {
                var e;
                return e = i.offset().top + i.height() / 2 - A / 2, TweenLite.fromTo(window, 4, {
                    scrollTo: {
                        y: 0
                    }
                }, {
                    scrollTo: {
                        y: e
                    },
                    ease: Power2.easeInOut
                })
            }), u = $(window), T = .5, w = 130, u.on("mousewheel DOMMouseScroll", function(e) {
                var t, i, r;
                return e.preventDefault(), t = e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3, r = u.scrollTop(), t > 2 && (t = 2), -2 > t && (t = -2), i = r - parseInt(t * w), TweenMax.to(u, T, {
                    scrollTo: {
                        y: i,
                        autoKill: !0
                    },
                    ease: Power1.easeOut,
                    overwrite: 5
                })
            })
        }, Modernizr.webgl ? window.initBgDone ? e() : $(document).on("bg.loaded", function() {
            return e()
        }) : e()
    }.call(this);