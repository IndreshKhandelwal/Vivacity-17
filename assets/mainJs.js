function author() {
    return "/*! albedoabsolute.js v1.0.0 | SE7ENSKY frontend studio <hello@se7ensky.com> */"
}

function waitUntilFnThenFn(t, e) {
    t() ? e() : setTimeout(function() {
        waitUntilFnThenFn(t, e)
    }, 100)
}! function(t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function s() {
        var t, e, i, s, o, r, a;
        for (var l in f)
            if (f.hasOwnProperty(l)) {
                if (t = [], e = f[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (s = n(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) r = t[o], a = r.split("."), 1 === a.length ? g[a[0]] = s : (!g[a[0]] || g[a[0]] instanceof Boolean || (g[a[0]] = new Boolean(g[a[0]])), g[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"))
            }
    }

    function o(t) {
        var e = v.className,
            i = g._config.classPrefix || "";
        if (_ && (e = e.baseVal), g._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        g._config.enableClasses && (e += " " + i + t.join(" " + i), _ ? v.className.baseVal = e : v.className = e)
    }

    function r() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : _ ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function a(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function l() {
        var t = e.body;
        return t || (t = r(_ ? "svg" : "body"), t.fake = !0), t
    }

    function h(t, i, n, s) {
        var o, a, h, u, d = "modernizr",
            c = r("div"),
            p = l();
        if (parseInt(n, 10))
            for (; n--;) h = r("div"), h.id = s ? s[n] : d + (n + 1), c.appendChild(h);
        return o = r("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = v.style.overflow, v.style.overflow = "hidden", v.appendChild(p)), a = i(c, t), p.fake ? (p.parentNode.removeChild(p), v.style.overflow = u, v.offsetHeight) : c.parentNode.removeChild(c), !!a
    }

    function u(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(e, n) {
        var s = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; s--;)
                if (t.CSS.supports(u(e[s]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var o = []; s--;) o.push("(" + u(e[s]) + ":" + n + ")");
            return o = o.join(" or "), h("@supports (" + o + ") { #modernizr { position: absolute; } }", function(t) {
                return "absolute" == getComputedStyle(t, null).position
            })
        }
        return i
    }

    function c(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function p(t, e, s, o) {
        function l() {
            u && (delete x.style, delete x.modElem)
        }
        if (o = n(o, "undefined") ? !1 : o, !n(s, "undefined")) {
            var h = d(t, s);
            if (!n(h, "undefined")) return h
        }
        for (var u, p, f, m, g, y = ["modernizr", "tspan"]; !x.style;) u = !0, x.modElem = r(y.shift()), x.style = x.modElem.style;
        for (f = t.length, p = 0; f > p; p++)
            if (m = t[p], g = x.style[m], a(m, "-") && (m = c(m)), x.style[m] !== i) {
                if (o || n(s, "undefined")) return l(), "pfx" == e ? m : !0;
                try {
                    x.style[m] = s
                } catch (v) {}
                if (x.style[m] != g) return l(), "pfx" == e ? m : !0
            }
        return l(), !1
    }
    var f = [],
        m = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t])
                }, 0)
            },
            addTest: function(t, e, i) {
                f.push({
                    name: t,
                    fn: e,
                    options: i
                })
            },
            addAsyncTest: function(t) {
                f.push({
                    name: null,
                    fn: t
                })
            }
        },
        g = function() {};
    g.prototype = m, g = new g;
    var y = [],
        v = e.documentElement,
        _ = "svg" === v.nodeName.toLowerCase(),
        w = function() {
            function t(t, e) {
                var s;
                return t ? (e && "string" != typeof e || (e = r(e || "div")), t = "on" + t, s = t in e, !s && n && (e.setAttribute || (e = r("div")), e.setAttribute(t, ""), s = "function" == typeof e[t], e[t] !== i && (e[t] = i), e.removeAttribute(t)), s) : !1
            }
            var n = !("onblur" in e.documentElement);
            return t
        }();
    m.hasEvent = w;
    var b = {
        elem: r("modernizr")
    };
    g._q.push(function() {
        delete b.elem
    });
    var x = {
        style: b.elem.style
    };
    g._q.unshift(function() {
        delete x.style
    }), m.testProp = function(t, e, n) {
        return p([t], i, e, n)
    }, g.addTest("canvas", function() {
        var t = r("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    });
    var O = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    m._prefixes = O;
    var C = m.testStyles = h;
    g.addTest("touchevents", function() {
        var i;
        if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
        else {
            var n = ["@media (", O.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            C(n, function(t) {
                i = 9 === t.offsetTop
            })
        }
        return i
    }), g.addTest("webgl", function() {
        var e = r("canvas"),
            i = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
        return i in e ? e[i]("webgl") || e[i]("experimental-webgl") : "WebGLRenderingContext" in t
    }), s(), o(y), delete m.addTest, delete m.addAsyncTest;
    for (var T = 0; T < g._q.length; T++) g._q[T]();
    t.Modernizr = g
}(window, document), ! function(t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this.drag = t.extend({}, c), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(s.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Pipe, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function o(t) {
        if (t.touches !== n) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === n) {
            if (t.pageX !== n) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === n) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, n, s = i.createElement("div"),
            o = t;
        for (e in o)
            if (n = o[e], "undefined" != typeof s.style[n]) return s = null, [n, e];
        return [!1]
    }

    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function h() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function u() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function d() {
        return e.navigator.msPointerEnabled
    }
    var c, p, f;
    c = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, p = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, f = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, s.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, s.Plugins = {}, s.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones,
                e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                n = this._items,
                s = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(s / 2); e > t; t++) s > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, n = this.settings.rtl ? 1 : -1,
                s = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : s * t) * n, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, n = (this.width() / this.settings.items).toFixed(3),
                s = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(s), s = {
                    width: this.settings.autoWidth ? "auto" : n - this.settings.margin
                }, s[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) s.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(s);
            else this.$stage.children().css(s)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * s,
                l = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], s.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, s;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, s.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            s = null;
        i ? (t.each(i, function(t) {
            e >= t && t > n && (n = Number(t))
        }), s = t.extend({}, this.options, i[n]), delete s.responsive, s.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + n)) : s = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, s.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, s.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}
    }, s.prototype.width = function(t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function() {
        return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, s.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, s.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, s.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, s.prototype.internalEvents = function() {
        var i = (u(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, s.prototype.onDragStart = function(n) {
        var s, r, a, l;
        if (s = n.originalEvent || n || e.event, 3 === s.which || this.state.isTouch) return !1;
        if ("mousedown" === s.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(s).x, a = o(s).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = s.target || s.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, s.prototype.onDragMove = function(t) {
        var i, s, r, a, l, h;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, s = o(i).x, r = o(i).y, this.drag.currentX = s - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, s.prototype.onDragEnd = function(e) {
        var n, s, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, s = Math.abs(this.drag.distance), (s > 3 || n > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, s.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, s.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, s.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, s.prototype.closest = function(e) {
        var i = -1,
            n = 30,
            s = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
            return e > r - n && r + n > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - s) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, s.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, s.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, s.prototype.reset = function(t) {
        t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function(e, i) {
        var s = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > s ? n : e = this._clones.length ? (e % s + s) % s : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, s.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function(t) {
        var e, i, n, s = 0,
            o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (n = this.coordinates(s)) && !(n * revert >= i);) e = ++s
            } else e = this._items.length - o.items;
        return e
    }, s.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            o = function(t) {
                return t % 2 === 0 ? s + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, s.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function(e) {
        var i = null;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, s.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function(i, n) {
        if (this.settings.loop) {
            var s = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + s,
                l = 0 > r - a ? !0 : !1,
                h = this._clones.length + this._items.length;
            a < this.settings.items && l === !1 ? (o = r + this._items.length, this.reset(o)) : a >= h - this.settings.items && l === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), o + s, n)), this.current(o + s), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
    }, s.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.transitionEnd = function(t) {
        return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, s.prototype.viewport = function() {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) n = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, s.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function(t, e) {
        e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, s.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, s.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, s.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function n() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
    }, s.prototype.preloadAutoWidthImages = function(e) {
        var i, n, s, o;
        i = 0, n = this, e.each(function(r, a) {
            s = t(a), o = new Image, o.onload = function() {
                i++, s.attr("src", o.src), s.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
            }, o.src = s.attr("src") || s.attr("data-src") || s.attr("data-src-retina")
        })
    }, s.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var n in this._plugins) this._plugins[n].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, s.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : i > t;
            case ">":
                return n ? i > t : t > i;
            case ">=":
                return n ? i >= t : t >= i;
            case "<=":
                return n ? t >= i : i >= t
        }
    }, s.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function(e, i, n) {
        var s = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, s, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
    }, s.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.browserSupport = function() {
        if (this.support3d = h(), this.support3d) {
            this.transformVendor = l();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new s(this, e))
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, o = (e.property && e.property.value || this._core.current()) + s, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); s++ < n;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            s = n && n.find(".owl-lazy");
        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
            var s, o = t(n),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : (s = new Image, s.onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), s.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: s,
                height: o
            }, e.attr("data-video", r),
            this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            h = "",
            u = this._core.settings,
            d = function(t) {
                s = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
            };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, d(o)
            }
        }))
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, n.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, n, s = t(e.target || e.srcElement),
            o = s.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            a = r.width || "100%",
            l = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), s.after(n)
    }, n.prototype.isInFullScreen = function() {
        var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), n && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, n.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && s.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, s.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, n.prototype.play = function() {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, n.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, n.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        n = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, i, n = this._core.settings;
        n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(n.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i, n = this._core.settings,
            s = this._core.clones().length / 2,
            o = s + this._core.items().length,
            r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = s, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - s,
                end: t - s + r - 1
            }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, n = "",
            s = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!s.nav || s.loop || s.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(s.nav), this._controls.$next.toggle(s.nav), s.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, s.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(n)
            } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(s.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, n) {
        var s;
        n ? t.proxy(this._overrides.to, this._core)(e, i) : (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                n = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return t ? void this._core.to(n, !1, !0) : !1
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function() {
        var i, n;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";

    function i(i, n) {
        function s(t) {
            return pt.preferFlash && ot && !pt.ignoreFlash && pt.flash[t] !== e && pt.flash[t]
        }

        function o(t) {
            return function(e) {
                var i, n = this._s;
                return i = n && n._a ? t.call(this, e) : null
            }
        }
        this.setupOptions = {
            url: i || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            forceUseGlobalHTML5Audio: !1,
            ignoreMobileRestrictions: !1,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !1,
            noSWFCache: !1,
            idPrefix: "sound"
        }, this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        }, this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        }, this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        }, this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        }, this.movieID = "sm2-container", this.id = n || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20150601", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        }, this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        }, this.sandbox = {}, this.html5 = {
            usingFlash: null
        }, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
        var r, a, l, h, u, d, c, p, f, m, g, y, v, _, w, b, x, O, C, T, M, P, S, $, E, L, D, I, A, F, k, H, z, R, N, X, Y, B, j, W, U, V, q, Q, Z, G, J, K, tt, et, it, nt, st, ot, rt, at, lt, ht, ut, dt, ct, pt = this,
            ft = null,
            mt = null,
            gt = navigator.userAgent,
            yt = t.location.href.toString(),
            vt = document,
            _t = [],
            wt = !1,
            bt = !1,
            xt = !1,
            Ot = !1,
            Ct = !1,
            Tt = 8,
            Mt = null,
            Pt = null,
            St = !1,
            $t = !1,
            Et = 0,
            Lt = null,
            Dt = [],
            It = null,
            At = Array.prototype.slice,
            Ft = !1,
            kt = 0,
            Ht = 1e3,
            zt = gt.match(/(ipad|iphone|ipod)/i),
            Rt = gt.match(/android/i),
            Nt = gt.match(/msie/i),
            Xt = gt.match(/webkit/i),
            Yt = gt.match(/safari/i) && !gt.match(/chrome/i),
            Bt = gt.match(/opera/i),
            jt = gt.match(/(mobile|pre\/|xoom)/i) || zt || Rt,
            Wt = !yt.match(/usehtml5audio/i) && !yt.match(/sm2\-ignorebadua/i) && Yt && !gt.match(/silk/i) && gt.match(/OS X 10_6_([3-7])/i),
            Ut = (t.console !== e && console.log !== e, vt.hasFocus !== e ? vt.hasFocus() : null),
            Vt = Yt && (vt.hasFocus === e || !vt.hasFocus()),
            qt = !Vt,
            Qt = /(mp3|mp4|mpa|m4a|m4b)/i,
            Zt = "about:blank",
            Gt = "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==",
            Jt = vt.location ? vt.location.protocol.match(/http/i) : null,
            Kt = Jt ? "" : "http://",
            te = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            ee = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            ie = new RegExp("\\.(" + ee.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !Jt, N = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        }, this.hasHTML5 = function() {
            try {
                return Audio !== e && (Bt && opera !== e && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== e
            } catch (t) {
                return !1
            }
        }(), this.setup = function(t) {
            var i = !pt.url;
            return t !== e && xt && It && pt.ok() && (t.flashVersion !== e || t.url !== e || t.html5Test !== e), f(t), pt.setupOptions.useHTML5Audio && !Ft && pt.setupOptions.forceUseGlobalHTML5Audio && (Dt.push(C.globalHTML5), Ft = !0), !ct && jt && (pt.setupOptions.ignoreMobileRestrictions && Dt.push(C.ignoreMobile), pt.setupOptions.useHTML5Audio = !0, pt.setupOptions.preferFlash = !1, Rt && !gt.match(/android\s2\.3/i) && (zt && (pt.ignoreFlash = !0), Ft = !0)), t && (i && S && t.url !== e && pt.beginDelayedInit(), S || t.url === e || "complete" !== vt.readyState || setTimeout(M, 1)), ct = !0, pt
        }, this.ok = function() {
            return It ? xt && !Ot : pt.useHTML5Audio && pt.hasHTML5
        }, this.supported = this.ok, this.getMovie = function(e) {
            return a(e) || vt[e] || t[e]
        }, this.createSound = function(t, i) {
            function n() {
                return o = X(o), pt.sounds[o.id] = new r(o), pt.soundIDs.push(o.id), pt.sounds[o.id]
            }
            var s, o, a = null;
            if (!xt || !pt.ok()) return !1;
            if (i !== e && (t = {
                    id: t,
                    url: i
                }), o = p(t), o.url = q(o.url), o.id === e && (o.id = pt.setupOptions.idPrefix + kt++), j(o.id, !0)) return pt.sounds[o.id];
            if (G(o)) a = n(), a._setup_html5(o);
            else {
                if (pt.html5Only) return n();
                if (pt.html5.usingFlash && o.url && o.url.match(/data\:/i)) return n();
                d > 8 && null === o.isMovieStar && (o.isMovieStar = !!(o.serverURL || (o.type ? o.type.match(te) : !1) || o.url && o.url.match(ie))), o = Y(o, s), a = n(), 8 === d ? mt._createSound(o.id, o.loops || 1, o.usePolicyFile) : (mt._createSound(o.id, o.url, o.usePeakData, o.useWaveformData, o.useEQData, o.isMovieStar, o.isMovieStar ? o.bufferTime : !1, o.loops || 1, o.serverURL, o.duration || null, o.autoPlay, !0, o.autoLoad, o.usePolicyFile), o.serverURL || (a.connected = !0, o.onconnect && o.onconnect.apply(a))), o.serverURL || !o.autoLoad && !o.autoPlay || a.load(o)
            }
            return !o.serverURL && o.autoPlay && a.play(), a
        }, this.destroySound = function(t, e) {
            if (!j(t)) return !1;
            var i, n = pt.sounds[t];
            for (n.stop(), n._iO = {}, n.unload(), i = 0; i < pt.soundIDs.length; i++)
                if (pt.soundIDs[i] === t) {
                    pt.soundIDs.splice(i, 1);
                    break
                }
            return e || n.destruct(!0), n = null, delete pt.sounds[t], !0
        }, this.load = function(t, e) {
            return j(t) ? pt.sounds[t].load(e) : !1
        }, this.unload = function(t) {
            return j(t) ? pt.sounds[t].unload() : !1
        }, this.onPosition = function(t, e, i, n) {
            return j(t) ? pt.sounds[t].onposition(e, i, n) : !1
        }, this.onposition = this.onPosition, this.clearOnPosition = function(t, e, i) {
            return j(t) ? pt.sounds[t].clearOnPosition(e, i) : !1
        }, this.play = function(t, e) {
            var i = null,
                n = e && !(e instanceof Object);
            if (!xt || !pt.ok()) return !1;
            if (j(t, n)) n && (e = {
                url: e
            });
            else {
                if (!n) return !1;
                n && (e = {
                    url: e
                }), e && e.url && (e.id = t, i = pt.createSound(e).play())
            }
            return null === i && (i = pt.sounds[t].play(e)), i
        }, this.start = this.play, this.setPosition = function(t, e) {
            return j(t) ? pt.sounds[t].setPosition(e) : !1
        }, this.stop = function(t) {
            return j(t) ? pt.sounds[t].stop() : !1
        }, this.stopAll = function() {
            var t;
            for (t in pt.sounds) pt.sounds.hasOwnProperty(t) && pt.sounds[t].stop()
        }, this.pause = function(t) {
            return j(t) ? pt.sounds[t].pause() : !1
        }, this.pauseAll = function() {
            var t;
            for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].pause()
        }, this.resume = function(t) {
            return j(t) ? pt.sounds[t].resume() : !1
        }, this.resumeAll = function() {
            var t;
            for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].resume()
        }, this.togglePause = function(t) {
            return j(t) ? pt.sounds[t].togglePause() : !1
        }, this.setPan = function(t, e) {
            return j(t) ? pt.sounds[t].setPan(e) : !1
        }, this.setVolume = function(t, i) {
            var n, s; {
                if (t === e || isNaN(t) || i !== e) return j(t) ? pt.sounds[t].setVolume(i) : !1;
                for (n = 0, s = pt.soundIDs.length; s > n; n++) pt.sounds[pt.soundIDs[n]].setVolume(t)
            }
        }, this.mute = function(t) {
            var e = 0;
            if (t instanceof String && (t = null), t) return j(t) ? pt.sounds[t].mute() : !1;
            for (e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].mute();
            return pt.muted = !0, !0
        }, this.muteAll = function() {
            pt.mute()
        }, this.unmute = function(t) {
            var e;
            if (t instanceof String && (t = null), t) return j(t) ? pt.sounds[t].unmute() : !1;
            for (e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].unmute();
            return pt.muted = !1, !0
        }, this.unmuteAll = function() {
            pt.unmute()
        }, this.toggleMute = function(t) {
            return j(t) ? pt.sounds[t].toggleMute() : !1
        }, this.getMemoryUse = function() {
            var t = 0;
            return mt && 8 !== d && (t = parseInt(mt._getMemoryUse(), 10)), t
        }, this.disable = function(i) {
            var n;
            if (i === e && (i = !1), Ot) return !1;
            for (Ot = !0, n = pt.soundIDs.length - 1; n >= 0; n--) A(pt.sounds[pt.soundIDs[n]]);
            return c(i), nt.remove(t, "load", v), !0
        }, this.canPlayMIME = function(t) {
            var e;
            return pt.hasHTML5 && (e = J({
                type: t
            })), !e && It && (e = t && pt.ok() ? !!((d > 8 ? t.match(te) : null) || t.match(pt.mimePattern)) : null), e
        }, this.canPlayURL = function(t) {
            var e;
            return pt.hasHTML5 && (e = J({
                url: t
            })), !e && It && (e = t && pt.ok() ? !!t.match(pt.filePattern) : null), e
        }, this.canPlayLink = function(t) {
            return t.type !== e && t.type && pt.canPlayMIME(t.type) ? !0 : pt.canPlayURL(t.href)
        }, this.getSoundById = function(t, e) {
            if (!t) return null;
            var i = pt.sounds[t];
            return i
        }, this.onready = function(e, i) {
            var n = "onready",
                s = !1;
            if ("function" != typeof e) throw H("needFunction", n);
            return i || (i = t), g(n, e, i), y(), s = !0, s
        }, this.ontimeout = function(e, i) {
            var n = "ontimeout",
                s = !1;
            if ("function" != typeof e) throw H("needFunction", n);
            return i || (i = t), g(n, e, i), y({
                type: n
            }), s = !0, s
        }, this._writeDebug = function(t, e) {
            return !0
        }, this._wD = this._writeDebug, this._debug = function() {}, this.reboot = function(e, i) {
            var n, s, o;
            for (n = pt.soundIDs.length - 1; n >= 0; n--) pt.sounds[pt.soundIDs[n]].destruct();
            if (mt) try {
                Nt && (Pt = mt.innerHTML), Mt = mt.parentNode.removeChild(mt)
            } catch (r) {}
            if (Pt = Mt = It = mt = null, pt.enabled = S = xt = St = $t = wt = bt = Ot = Ft = pt.swfLoaded = !1, pt.soundIDs = [], pt.sounds = {}, kt = 0, ct = !1, e) _t = [];
            else
                for (n in _t)
                    if (_t.hasOwnProperty(n))
                        for (s = 0, o = _t[n].length; o > s; s++) _t[n][s].fired = !1; return pt.html5 = {
                usingFlash: null
            }, pt.flash = {}, pt.html5Only = !1, pt.ignoreFlash = !1, t.setTimeout(function() {
                i || pt.beginDelayedInit()
            }, 20), pt
        }, this.reset = function() {
            return pt.reboot(!0, !0)
        }, this.getMoviePercent = function() {
            return mt && "PercentLoaded" in mt ? mt.PercentLoaded() : null
        }, this.beginDelayedInit = function() {
            Ct = !0, M(), setTimeout(function() {
                return $t ? !1 : (E(), T(), $t = !0, !0)
            }, 20), _()
        }, this.destruct = function() {
            pt.disable(!0)
        }, r = function(t) {
            var i, n, s, o, r, a, l, h, u, c, f = this,
                m = !1,
                g = [],
                y = 0,
                v = null;
            u = {
                duration: null,
                time: null
            }, this.id = t.id, this.sID = this.id, this.url = t.url, this.options = p(t), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, c = this.url ? !1 : !0, this.id3 = {}, this._debug = function() {}, this.load = function(t) {
                var i, n = null;
                if (t !== e ? f._iO = p(t, f.options) : (t = f.options, f._iO = t, v && v !== f.url && (f._iO.url = f.url, f.url = null)), f._iO.url || (f._iO.url = f.url), f._iO.url = q(f._iO.url), f.instanceOptions = f._iO, i = f._iO, !i.url && !f.url) return f;
                if (i.url === f.url && 0 !== f.readyState && 2 !== f.readyState) return 3 === f.readyState && i.onload && dt(f, function() {
                    i.onload.apply(f, [!!f.duration])
                }), f;
                if (f.loaded = !1, f.readyState = 1, f.playState = 0, f.id3 = {}, G(i)) n = f._setup_html5(i), n._called_load || (f._html5_canplay = !1, f.url !== i.url && (f._a.src = i.url, f.setPosition(0)), f._a.autobuffer = "auto", f._a.preload = "auto", f._a._called_load = !0);
                else {
                    if (pt.html5Only) return f;
                    if (f._iO.url && f._iO.url.match(/data\:/i)) return f;
                    try {
                        f.isHTML5 = !1, f._iO = Y(X(i)), f._iO.autoPlay && (f._iO.position || f._iO.from) && (f._iO.autoPlay = !1), i = f._iO, 8 === d ? mt._load(f.id, i.url, i.stream, i.autoPlay, i.usePolicyFile) : mt._load(f.id, i.url, !!i.stream, !!i.autoPlay, i.loops || 1, !!i.autoLoad, i.usePolicyFile)
                    } catch (s) {
                        L({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                return f.url = i.url, f
            }, this.unload = function() {
                return 0 !== f.readyState && (f.isHTML5 ? (o(), f._a && (f._a.pause(), v = tt(f._a))) : 8 === d ? mt._unload(f.id, Zt) : mt._unload(f.id), i()), f
            }, this.destruct = function(t) {
                f.isHTML5 ? (o(), f._a && (f._a.pause(), tt(f._a), Ft || s(), f._a._s = null, f._a = null)) : (f._iO.onfailure = null, mt._destroySound(f.id)), t || pt.destroySound(f.id, !0)
            }, this.play = function(t, i) {
                var n, s, o, l, u, g, y = !0,
                    v = null;
                if (i = i === e ? !0 : i, t || (t = {}), f.url && (f._iO.url = f.url), f._iO = p(f._iO, f.options), f._iO = p(t, f._iO), f._iO.url = q(f._iO.url), f.instanceOptions = f._iO, !f.isHTML5 && f._iO.serverURL && !f.connected) return f.getAutoPlay() || f.setAutoPlay(!0), f;
                if (G(f._iO) && (f._setup_html5(f._iO), r()), 1 !== f.playState || f.paused || (n = f._iO.multiShot, n || (f.isHTML5 && f.setPosition(f._iO.position), v = f)), null !== v) return v;
                if (t.url && t.url !== f.url && (f.readyState || f.isHTML5 || 8 !== d || !c ? f.load(f._iO) : c = !1), f.loaded || (0 === f.readyState ? (f.isHTML5 || pt.html5Only ? f.isHTML5 ? f.load(f._iO) : v = f : (f._iO.autoPlay = !0, f.load(f._iO)), f.instanceOptions = f._iO) : 2 === f.readyState && (v = f)), null !== v) return v;
                if (!f.isHTML5 && 9 === d && f.position > 0 && f.position === f.duration && (t.position = 0), f.paused && f.position >= 0 && (!f._iO.serverURL || f.position > 0)) f.resume();
                else {
                    if (f._iO = p(t, f._iO), (!f.isHTML5 && null !== f._iO.position && f._iO.position > 0 || null !== f._iO.from && f._iO.from > 0 || null !== f._iO.to) && 0 === f.instanceCount && 0 === f.playState && !f._iO.serverURL) {
                        if (o = function() {
                                f._iO = p(t, f._iO), f.play(f._iO)
                            }, f.isHTML5 && !f._html5_canplay ? (f.load({
                                _oncanplay: o
                            }), v = !1) : f.isHTML5 || f.loaded || f.readyState && 2 === f.readyState || (f.load({
                                onload: o
                            }), v = !1), null !== v) return v;
                        f._iO = h()
                    }(!f.instanceCount || f._iO.multiShotEvents || f.isHTML5 && f._iO.multiShot && !Ft || !f.isHTML5 && d > 8 && !f.getAutoPlay()) && f.instanceCount++, f._iO.onposition && 0 === f.playState && a(f), f.playState = 1, f.paused = !1, f.position = f._iO.position === e || isNaN(f._iO.position) ? 0 : f._iO.position, f.isHTML5 || (f._iO = Y(X(f._iO))), f._iO.onplay && i && (f._iO.onplay.apply(f), m = !0), f.setVolume(f._iO.volume, !0), f.setPan(f._iO.pan, !0), f.isHTML5 ? f.instanceCount < 2 ? (r(), s = f._setup_html5(), f.setPosition(f._iO.position), s.play()) : (l = new Audio(f._iO.url), u = function() {
                        nt.remove(l, "ended", u), f._onfinish(f), tt(l), l = null
                    }, g = function() {
                        nt.remove(l, "canplay", g);
                        try {
                            l.currentTime = f._iO.position / Ht
                        } catch (t) {}
                        l.play()
                    }, nt.add(l, "ended", u), f._iO.volume !== e && (l.volume = Math.max(0, Math.min(1, f._iO.volume / 100))), f.muted && (l.muted = !0), f._iO.position ? nt.add(l, "canplay", g) : l.play()) : (y = mt._start(f.id, f._iO.loops || 1, 9 === d ? f.position : f.position / Ht, f._iO.multiShot || !1), 9 !== d || y || f._iO.onplayerror && f._iO.onplayerror.apply(f))
                }
                return f
            }, this.start = this.play, this.stop = function(t) {
                var e, i = f._iO;
                return 1 === f.playState && (f._onbufferchange(0), f._resetOnPosition(0), f.paused = !1, f.isHTML5 || (f.playState = 0), l(), i.to && f.clearOnPosition(i.to), f.isHTML5 ? f._a && (e = f.position, f.setPosition(0), f.position = e, f._a.pause(), f.playState = 0, f._onTimer(), o()) : (mt._stop(f.id, t), i.serverURL && f.unload()), f.instanceCount = 0, f._iO = {}, i.onstop && i.onstop.apply(f)), f
            }, this.setAutoPlay = function(t) {
                f._iO.autoPlay = t, f.isHTML5 || (mt._setAutoPlay(f.id, t), t && (f.instanceCount || 1 !== f.readyState || f.instanceCount++))
            }, this.getAutoPlay = function() {
                return f._iO.autoPlay
            }, this.setPosition = function(t) {
                t === e && (t = 0);
                var i, n, s = f.isHTML5 ? Math.max(t, 0) : Math.min(f.duration || f._iO.duration, Math.max(t, 0));
                if (f.position = s, n = f.position / Ht, f._resetOnPosition(f.position), f._iO.position = s, f.isHTML5) {
                    if (f._a) {
                        if (f._html5_canplay) {
                            if (f._a.currentTime !== n) try {
                                f._a.currentTime = n, (0 === f.playState || f.paused) && f._a.pause()
                            } catch (o) {}
                        } else if (n) return f;
                        f.paused && f._onTimer(!0)
                    }
                } else i = 9 === d ? f.position : n, f.readyState && 2 !== f.readyState && mt._setPosition(f.id, i, f.paused || !f.playState, f._iO.multiShot);
                return f
            }, this.pause = function(t) {
                return f.paused || 0 === f.playState && 1 !== f.readyState ? f : (f.paused = !0, f.isHTML5 ? (f._setup_html5().pause(), o()) : (t || t === e) && mt._pause(f.id, f._iO.multiShot), f._iO.onpause && f._iO.onpause.apply(f), f)
            }, this.resume = function() {
                var t = f._iO;
                return f.paused ? (f.paused = !1, f.playState = 1, f.isHTML5 ? (f._setup_html5().play(), r()) : (t.isMovieStar && !t.serverURL && f.setPosition(f.position), mt._pause(f.id, t.multiShot)), !m && t.onplay ? (t.onplay.apply(f), m = !0) : t.onresume && t.onresume.apply(f), f) : f
            }, this.togglePause = function() {
                return 0 === f.playState ? (f.play({
                    position: 9 !== d || f.isHTML5 ? f.position / Ht : f.position
                }), f) : (f.paused ? f.resume() : f.pause(), f)
            }, this.setPan = function(t, i) {
                return t === e && (t = 0), i === e && (i = !1), f.isHTML5 || mt._setPan(f.id, t), f._iO.pan = t, i || (f.pan = t, f.options.pan = t), f
            }, this.setVolume = function(t, i) {
                return t === e && (t = 100), i === e && (i = !1), f.isHTML5 ? f._a && (pt.muted && !f.muted && (f.muted = !0, f._a.muted = !0), f._a.volume = Math.max(0, Math.min(1, t / 100))) : mt._setVolume(f.id, pt.muted && !f.muted || f.muted ? 0 : t), f._iO.volume = t, i || (f.volume = t, f.options.volume = t), f
            }, this.mute = function() {
                return f.muted = !0, f.isHTML5 ? f._a && (f._a.muted = !0) : mt._setVolume(f.id, 0), f
            }, this.unmute = function() {
                f.muted = !1;
                var t = f._iO.volume !== e;
                return f.isHTML5 ? f._a && (f._a.muted = !1) : mt._setVolume(f.id, t ? f._iO.volume : f.options.volume), f
            }, this.toggleMute = function() {
                return f.muted ? f.unmute() : f.mute()
            }, this.onPosition = function(t, i, n) {
                return g.push({
                    position: parseInt(t, 10),
                    method: i,
                    scope: n !== e ? n : f,
                    fired: !1
                }), f
            }, this.onposition = this.onPosition, this.clearOnPosition = function(t, e) {
                var i;
                if (t = parseInt(t, 10), isNaN(t)) return !1;
                for (i = 0; i < g.length; i++) t === g[i].position && (e && e !== g[i].method || (g[i].fired && y--, g.splice(i, 1)))
            }, this._processOnPosition = function() {
                var t, e, i = g.length;
                if (!i || !f.playState || y >= i) return !1;
                for (t = i - 1; t >= 0; t--) e = g[t], !e.fired && f.position >= e.position && (e.fired = !0, y++, e.method.apply(e.scope, [e.position]), i = g.length);
                return !0
            }, this._resetOnPosition = function(t) {
                var e, i, n = g.length;
                if (!n) return !1;
                for (e = n - 1; e >= 0; e--) i = g[e], i.fired && t <= i.position && (i.fired = !1, y--);
                return !0
            }, h = function() {
                var t, e, i = f._iO,
                    n = i.from,
                    s = i.to;
                return e = function() {
                    f.clearOnPosition(s, e), f.stop()
                }, t = function() {
                    null === s || isNaN(s) || f.onPosition(s, e)
                }, null === n || isNaN(n) || (i.position = n, i.multiShot = !1, t()), i
            }, a = function() {
                var t, e = f._iO.onposition;
                if (e)
                    for (t in e) e.hasOwnProperty(t) && f.onPosition(parseInt(t, 10), e[t])
            }, l = function() {
                var t, e = f._iO.onposition;
                if (e)
                    for (t in e) e.hasOwnProperty(t) && f.clearOnPosition(parseInt(t, 10))
            }, r = function() {
                f.isHTML5 && W(f)
            }, o = function() {
                f.isHTML5 && U(f)
            }, i = function(t) {
                t || (g = [], y = 0), m = !1, f._hasTimer = null, f._a = null, f._html5_canplay = !1, f.bytesLoaded = null, f.bytesTotal = null, f.duration = f._iO && f._iO.duration ? f._iO.duration : null, f.durationEstimate = null, f.buffered = [], f.eqData = [], f.eqData.left = [], f.eqData.right = [], f.failures = 0, f.isBuffering = !1, f.instanceOptions = {}, f.instanceCount = 0, f.loaded = !1, f.metadata = {}, f.readyState = 0, f.muted = !1, f.paused = !1, f.peakData = {
                    left: 0,
                    right: 0
                }, f.waveformData = {
                    left: [],
                    right: []
                }, f.playState = 0, f.position = null, f.id3 = {}
            }, i(), this._onTimer = function(t) {
                var e, i, n = !1,
                    s = {};
                return f._hasTimer || t ? (f._a && (t || (f.playState > 0 || 1 === f.readyState) && !f.paused) && (e = f._get_html5_duration(), e !== u.duration && (u.duration = e, f.duration = e, n = !0), f.durationEstimate = f.duration, i = f._a.currentTime * Ht || 0, i !== u.time && (u.time = i, n = !0), (n || t) && f._whileplaying(i, s, s, s, s)), n) : void 0
            }, this._get_html5_duration = function() {
                var t = f._iO,
                    e = f._a && f._a.duration ? f._a.duration * Ht : t && t.duration ? t.duration : null,
                    i = e && !isNaN(e) && e !== 1 / 0 ? e : null;
                return i
            }, this._apply_loop = function(t, e) {
                t.loop = e > 1 ? "loop" : ""
            }, this._setup_html5 = function(t) {
                var e, s = p(f._iO, t),
                    o = Ft ? ft : f._a,
                    r = decodeURI(s.url);
                if (Ft ? r === decodeURI(st) && (e = !0) : r === decodeURI(v) && (e = !0), o) {
                    if (o._s)
                        if (Ft) o._s && o._s.playState && !e && o._s.stop();
                        else if (!Ft && r === decodeURI(v)) return f._apply_loop(o, s.loops), o;
                    e || (v && i(!1), o.src = s.url, f.url = s.url, v = s.url, st = s.url, o._called_load = !1)
                } else s.autoLoad || s.autoPlay ? (f._a = new Audio(s.url), f._a.load()) : f._a = Bt && opera.version() < 10 ? new Audio(null) : new Audio, o = f._a, o._called_load = !1, Ft && (ft = o);
                return f.isHTML5 = !0, f._a = o, o._s = f, n(), f._apply_loop(o, s.loops), s.autoLoad || s.autoPlay ? f.load() : (o.autobuffer = !1, o.preload = "auto"), o
            }, n = function() {
                function t(t, e, i) {
                    return f._a ? f._a.addEventListener(t, e, i || !1) : null
                }
                if (f._a._added_events) return !1;
                var e;
                f._a._added_events = !0;
                for (e in lt) lt.hasOwnProperty(e) && t(e, lt[e]);
                return !0
            }, s = function() {
                function t(t, e, i) {
                    return f._a ? f._a.removeEventListener(t, e, i || !1) : null
                }
                var e;
                f._a._added_events = !1;
                for (e in lt) lt.hasOwnProperty(e) && t(e, lt[e])
            }, this._onload = function(t) {
                var e = !!t || !f.isHTML5 && 8 === d && f.duration;
                return f.loaded = e, f.readyState = e ? 3 : 2, f._onbufferchange(0), f._iO.onload && dt(f, function() {
                    f._iO.onload.apply(f, [e])
                }), !0
            }, this._onbufferchange = function(t) {
                return 0 === f.playState ? !1 : t && f.isBuffering || !t && !f.isBuffering ? !1 : (f.isBuffering = 1 === t, f._iO.onbufferchange && f._iO.onbufferchange.apply(f, [t]), !0)
            }, this._onsuspend = function() {
                return f._iO.onsuspend && f._iO.onsuspend.apply(f), !0
            }, this._onfailure = function(t, e, i) {
                f.failures++, f._iO.onfailure && 1 === f.failures && f._iO.onfailure(t, e, i)
            }, this._onwarning = function(t, e, i) {
                f._iO.onwarning && f._iO.onwarning(t, e, i)
            }, this._onfinish = function() {
                var t = f._iO.onfinish;
                f._onbufferchange(0), f._resetOnPosition(0), f.instanceCount && (f.instanceCount--, f.instanceCount || (l(), f.playState = 0, f.paused = !1, f.instanceCount = 0, f.instanceOptions = {}, f._iO = {}, o(), f.isHTML5 && (f.position = 0)), (!f.instanceCount || f._iO.multiShotEvents) && t && dt(f, function() {
                    t.apply(f)
                }))
            }, this._whileloading = function(t, e, i, n) {
                var s = f._iO;
                f.bytesLoaded = t, f.bytesTotal = e, f.duration = Math.floor(i), f.bufferLength = n, f.isHTML5 || s.isMovieStar ? f.durationEstimate = f.duration : s.duration ? f.durationEstimate = f.duration > s.duration ? f.duration : s.duration : f.durationEstimate = parseInt(f.bytesTotal / f.bytesLoaded * f.duration, 10), f.isHTML5 || (f.buffered = [{
                    start: 0,
                    end: f.duration
                }]), (3 !== f.readyState || f.isHTML5) && s.whileloading && s.whileloading.apply(f)
            }, this._whileplaying = function(t, i, n, s, o) {
                var r, a = f._iO;
                return isNaN(t) || null === t ? !1 : (f.position = Math.max(0, t), f._processOnPosition(), !f.isHTML5 && d > 8 && (a.usePeakData && i !== e && i && (f.peakData = {
                    left: i.leftPeak,
                    right: i.rightPeak
                }), a.useWaveformData && n !== e && n && (f.waveformData = {
                    left: n.split(","),
                    right: s.split(",")
                }), a.useEQData && o !== e && o && o.leftEQ && (r = o.leftEQ.split(","), f.eqData = r, f.eqData.left = r, o.rightEQ !== e && o.rightEQ && (f.eqData.right = o.rightEQ.split(",")))), 1 === f.playState && (f.isHTML5 || 8 !== d || f.position || !f.isBuffering || f._onbufferchange(0), a.whileplaying && a.whileplaying.apply(f)), !0)
            }, this._oncaptiondata = function(t) {
                f.captiondata = t, f._iO.oncaptiondata && f._iO.oncaptiondata.apply(f, [t])
            }, this._onmetadata = function(t, e) {
                var i, n, s = {};
                for (i = 0, n = t.length; n > i; i++) s[t[i]] = e[i];
                f.metadata = s, f._iO.onmetadata && f._iO.onmetadata.call(f, f.metadata)
            }, this._onid3 = function(t, e) {
                var i, n, s = [];
                for (i = 0, n = t.length; n > i; i++) s[t[i]] = e[i];
                f.id3 = p(f.id3, s), f._iO.onid3 && f._iO.onid3.apply(f)
            }, this._onconnect = function(t) {
                t = 1 === t, f.connected = t, t && (f.failures = 0, j(f.id) && (f.getAutoPlay() ? f.play(e, f.getAutoPlay()) : f._iO.autoLoad && f.load()), f._iO.onconnect && f._iO.onconnect.apply(f, [t]))
            }, this._ondataerror = function(t) {
                f.playState > 0 && f._iO.ondataerror && f._iO.ondataerror.apply(f)
            }
        }, $ = function() {
            return vt.body || vt.getElementsByTagName("div")[0]
        }, a = function(t) {
            return vt.getElementById(t)
        }, p = function(t, i) {
            var n, s, o = t || {};
            n = i === e ? pt.defaultOptions : i;
            for (s in n) n.hasOwnProperty(s) && o[s] === e && ("object" != typeof n[s] || null === n[s] ? o[s] = n[s] : o[s] = p(o[s], n[s]));
            return o
        }, dt = function(e, i) {
            e.isHTML5 || 8 !== d ? i() : t.setTimeout(i, 0)
        }, m = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        }, f = function(t, i) {
            var n, s = !0,
                o = i !== e,
                r = pt.setupOptions,
                a = m;
            for (n in t)
                if (t.hasOwnProperty(n))
                    if ("object" != typeof t[n] || null === t[n] || t[n] instanceof Array || t[n] instanceof RegExp) o && a[i] !== e ? pt[i][n] = t[n] : r[n] !== e ? (pt.setupOptions[n] = t[n], pt[n] = t[n]) : a[n] === e ? s = !1 : pt[n] instanceof Function ? pt[n].apply(pt, t[n] instanceof Array ? t[n] : [t[n]]) : pt[n] = t[n];
                    else {
                        if (a[n] !== e) return f(t[n], n);
                        s = !1
                    }
            return s
        }, nt = function() {
            function e(t) {
                var e = At.call(t),
                    i = e.length;
                return o ? (e[1] = "on" + e[1], i > 3 && e.pop()) : 3 === i && e.push(!1), e
            }

            function i(t, e) {
                var i = t.shift(),
                    n = [r[e]];
                o ? i[n](t[0], t[1]) : i[n].apply(i, t)
            }

            function n() {
                i(e(arguments), "add")
            }

            function s() {
                i(e(arguments), "remove")
            }
            var o = t.attachEvent,
                r = {
                    add: o ? "attachEvent" : "addEventListener",
                    remove: o ? "detachEvent" : "removeEventListener"
                };
            return {
                add: n,
                remove: s
            }
        }(), lt = {
            abort: o(function() {}),
            canplay: o(function() {
                var t, i = this._s;
                if (i._html5_canplay) return !0;
                if (i._html5_canplay = !0, i._onbufferchange(0), t = i._iO.position === e || isNaN(i._iO.position) ? null : i._iO.position / Ht, this.currentTime !== t) try {
                    this.currentTime = t
                } catch (n) {}
                i._iO._oncanplay && i._iO._oncanplay()
            }),
            canplaythrough: o(function() {
                var t = this._s;
                t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(!0))
            }),
            durationchange: o(function() {
                var t, e = this._s;
                t = e._get_html5_duration(), isNaN(t) || t === e.duration || (e.durationEstimate = e.duration = t)
            }),
            ended: o(function() {
                var t = this._s;
                t._onfinish()
            }),
            error: o(function() {
                this._s._onload(!1)
            }),
            loadeddata: o(function() {
                var t = this._s;
                t._loaded || Yt || (t.duration = t._get_html5_duration())
            }),
            loadedmetadata: o(function() {}),
            loadstart: o(function() {
                this._s._onbufferchange(1)
            }),
            play: o(function() {
                this._s._onbufferchange(0)
            }),
            playing: o(function() {
                this._s._onbufferchange(0)
            }),
            progress: o(function(t) {
                var e, i, n = this._s,
                    s = 0,
                    o = ("progress" === t.type, t.target.buffered),
                    r = t.loaded || 0,
                    a = t.total || 1;
                if (n.buffered = [], o && o.length) {
                    for (e = 0, i = o.length; i > e; e++) n.buffered.push({
                        start: o.start(e) * Ht,
                        end: o.end(e) * Ht
                    });
                    s = (o.end(0) - o.start(0)) * Ht, r = Math.min(1, s / (t.target.duration * Ht))
                }
                isNaN(r) || (n._whileloading(r, a, n._get_html5_duration()), r && a && r === a && lt.canplaythrough.call(this, t))
            }),
            ratechange: o(function() {}),
            suspend: o(function(t) {
                var e = this._s;
                lt.progress.call(this, t), e._onsuspend()
            }),
            stalled: o(function() {}),
            timeupdate: o(function() {
                this._s._onTimer()
            }),
            waiting: o(function() {
                var t = this._s;
                t._onbufferchange(1)
            })
        }, G = function(t) {
            var e;
            return e = t && (t.type || t.url || t.serverURL) ? t.serverURL || t.type && s(t.type) ? !1 : t.type ? J({
                type: t.type
            }) : J({
                url: t.url
            }) || pt.html5Only || t.url.match(/data\:/i) : !1
        }, tt = function(t) {
            var i;
            return t && (i = Yt ? Zt : pt.html5.canPlayType("audio/wav") ? Gt : Zt, t.src = i, t._called_unload !== e && (t._called_load = !1)), Ft && (st = null), i
        }, J = function(t) {
            if (!pt.useHTML5Audio || !pt.hasHTML5) return !1;
            var i, n, o, r, a = t.url || null,
                l = t.type || null,
                h = pt.audioFormats;
            if (l && pt.html5[l] !== e) return pt.html5[l] && !s(l);
            if (!K) {
                K = [];
                for (r in h) h.hasOwnProperty(r) && (K.push(r), h[r].related && (K = K.concat(h[r].related)));
                K = new RegExp("\\.(" + K.join("|") + ")(\\?.*)?$", "i")
            }
            return o = a ? a.toLowerCase().match(K) : null, o && o.length ? o = o[1] : l ? (n = l.indexOf(";"), o = (-1 !== n ? l.substr(0, n) : l).substr(6)) : i = !1, o && pt.html5[o] !== e ? i = pt.html5[o] && !s(o) : (l = "audio/" + o, i = pt.html5.canPlayType({
                type: l
            }), pt.html5[o] = i, i = i && pt.html5[l] && !s(l)), i
        }, it = function() {
            function t(t) {
                var e, i, n = !1,
                    s = !1;
                if (!r || "function" != typeof r.canPlayType) return n;
                if (t instanceof Array) {
                    for (o = 0, i = t.length; i > o; o++)(pt.html5[t[o]] || r.canPlayType(t[o]).match(pt.html5Test)) && (s = !0, pt.html5[t[o]] = !0, pt.flash[t[o]] = !!t[o].match(Qt));
                    n = s
                } else e = r && "function" == typeof r.canPlayType ? r.canPlayType(t) : !1, n = !(!e || !e.match(pt.html5Test));
                return n
            }
            if (!pt.useHTML5Audio || !pt.hasHTML5) return pt.html5.usingFlash = !0, It = !0, !1;
            var i, n, s, o, r = Audio !== e ? Bt && opera.version() < 10 ? new Audio(null) : new Audio : null,
                a = {};
            s = pt.audioFormats;
            for (i in s)
                if (s.hasOwnProperty(i) && (n = "audio/" + i, a[i] = t(s[i].type), a[n] = a[i], i.match(Qt) ? (pt.flash[i] = !0, pt.flash[n] = !0) : (pt.flash[i] = !1, pt.flash[n] = !1), s[i] && s[i].related))
                    for (o = s[i].related.length - 1; o >= 0; o--) a["audio/" + s[i].related[o]] = a[i], pt.html5[s[i].related[o]] = a[i], pt.flash[s[i].related[o]] = a[i];
            return a.canPlayType = r ? t : null, pt.html5 = p(pt.html5, a), pt.html5.usingFlash = Z(), It = pt.html5.usingFlash, !0
        }, C = {}, H = function() {}, X = function(t) {
            return 8 === d && t.loops > 1 && t.stream && (t.stream = !1), t
        }, Y = function(t, e) {
            return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (t.usePolicyFile = !0), t
        }, B = function(t) {}, l = function() {
            return !1
        }, A = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l);
            e = null
        }, F = function(t) {
            t === e && (t = !1), (Ot || t) && pt.disable(t)
        }, k = function(t) {
            var e, i = null;
            if (t)
                if (t.match(/\.swf(\?.*)?$/i)) {
                    if (i = t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t
                } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
            return e = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + pt.movieURL, pt.noSWFCache && (e += "?ts=" + (new Date).getTime()), e
        }, x = function() {
            d = parseInt(pt.flashVersion, 10), 8 !== d && 9 !== d && (pt.flashVersion = d = Tt);
            var t = pt.debugMode || pt.debugFlash ? "_debug.swf" : ".swf";
            pt.useHTML5Audio && !pt.html5Only && pt.audioFormats.mp4.required && 9 > d && (pt.flashVersion = d = 9), pt.version = pt.versionNumber + (pt.html5Only ? " (HTML5-only mode)" : 9 === d ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), d > 8 ? (pt.defaultOptions = p(pt.defaultOptions, pt.flash9Options), pt.features.buffering = !0, pt.defaultOptions = p(pt.defaultOptions, pt.movieStarOptions), pt.filePatterns.flash9 = new RegExp("\\.(mp3|" + ee.join("|") + ")(\\?.*)?$", "i"), pt.features.movieStar = !0) : pt.features.movieStar = !1, pt.filePattern = pt.filePatterns[8 !== d ? "flash9" : "flash8"], pt.movieURL = (8 === d ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", t), pt.features.peakData = pt.features.waveformData = pt.features.eqData = d > 8
        }, D = function(t, e) {
            return mt ? void mt._setPolling(t, e) : !1
        }, I = function() {}, j = this.getSoundById, R = function() {
            var t = [];
            return pt.debugMode && t.push(N.sm2Debug), pt.debugFlash && t.push(N.flashDebug), pt.useHighPerformance && t.push(N.highPerf), t.join(" ")
        }, z = function() {
            var t = (H("fbHandler"), pt.getMoviePercent()),
                e = N,
                i = {
                    type: "FLASHBLOCK"
                };
            return pt.html5Only ? !1 : void(pt.ok() ? pt.oMC && (pt.oMC.className = [R(), e.swfDefault, e.swfLoaded + (pt.didFlashBlock ? " " + e.swfUnblocked : "")].join(" ")) : (It && (pt.oMC.className = R() + " " + e.swfDefault + " " + (null === t ? e.swfTimedout : e.swfError)), pt.didFlashBlock = !0, y({
                type: "ontimeout",
                ignoreInit: !0,
                error: i
            }), L(i)))
        }, g = function(t, i, n) {
            _t[t] === e && (_t[t] = []), _t[t].push({
                method: i,
                scope: n || null,
                fired: !1
            })
        }, y = function(t) {
            if (t || (t = {
                    type: pt.ok() ? "onready" : "ontimeout"
                }), !xt && t && !t.ignoreInit) return !1;
            if ("ontimeout" === t.type && (pt.ok() || Ot && !t.ignoreInit)) return !1;
            var e, i, n = {
                    success: t && t.ignoreInit ? pt.ok() : !Ot
                },
                s = t && t.type ? _t[t.type] || [] : [],
                o = [],
                r = [n],
                a = It && !pt.ok();
            for (t.error && (r[0].error = t.error), e = 0, i = s.length; i > e; e++) s[e].fired !== !0 && o.push(s[e]);
            if (o.length)
                for (e = 0, i = o.length; i > e; e++) o[e].scope ? o[e].method.apply(o[e].scope, r) : o[e].method.apply(this, r), a || (o[e].fired = !0);
            return !0
        }, v = function() {
            t.setTimeout(function() {
                pt.useFlashBlock && z(), y(), "function" == typeof pt.onload && pt.onload.apply(t), pt.waitForWindowLoad && nt.add(t, "load", v)
            }, 1)
        }, rt = function() {
            if (ot !== e) return ot;
            var i, n, s, o = !1,
                r = navigator,
                a = r.plugins,
                l = t.ActiveXObject;
            if (a && a.length) n = "application/x-shockwave-flash", s = r.mimeTypes, s && s[n] && s[n].enabledPlugin && s[n].enabledPlugin.description && (o = !0);
            else if (l !== e && !gt.match(/MSAppHost/i)) {
                try {
                    i = new l("ShockwaveFlash.ShockwaveFlash")
                } catch (h) {
                    i = null
                }
                o = !!i, i = null
            }
            return ot = o, o
        }, Z = function() {
            var t, e, i = pt.audioFormats,
                n = zt && !!gt.match(/os (1|2|3_0|3_1)\s/i);
            if (n ? (pt.hasHTML5 = !1, pt.html5Only = !0, pt.oMC && (pt.oMC.style.display = "none")) : pt.useHTML5Audio && (pt.html5 && pt.html5.canPlayType || (pt.hasHTML5 = !1)), pt.useHTML5Audio && pt.hasHTML5) {
                Q = !0;
                for (e in i) i.hasOwnProperty(e) && i[e].required && (pt.html5.canPlayType(i[e].type) ? pt.preferFlash && (pt.flash[e] || pt.flash[i[e].type]) && (t = !0) : (Q = !1, t = !0))
            }
            return pt.ignoreFlash && (t = !1, Q = !0), pt.html5Only = pt.hasHTML5 && pt.useHTML5Audio && !t, !pt.html5Only
        }, q = function(t) {
            var e, i, n, s = 0;
            if (t instanceof Array) {
                for (e = 0, i = t.length; i > e; e++)
                    if (t[e] instanceof Object) {
                        if (pt.canPlayMIME(t[e].type)) {
                            s = e;
                            break
                        }
                    } else if (pt.canPlayURL(t[e])) {
                    s = e;
                    break
                }
                t[s].url && (t[s] = t[s].url), n = t[s]
            } else n = t;
            return n
        }, W = function(t) {
            t._hasTimer || (t._hasTimer = !0, !jt && pt.html5PollingInterval && (null === Lt && 0 === Et && (Lt = setInterval(V, pt.html5PollingInterval)), Et++))
        }, U = function(t) {
            t._hasTimer && (t._hasTimer = !1, !jt && pt.html5PollingInterval && Et--)
        }, V = function() {
            var t;
            if (null !== Lt && !Et) return clearInterval(Lt), Lt = null, !1;
            for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].isHTML5 && pt.sounds[pt.soundIDs[t]]._hasTimer && pt.sounds[pt.soundIDs[t]]._onTimer()
        }, L = function(i) {
            i = i !== e ? i : {}, "function" == typeof pt.onerror && pt.onerror.apply(t, [{
                type: i.type !== e ? i.type : null
            }]), i.fatal !== e && i.fatal && pt.disable()
        }, at = function() {
            if (!Wt || !rt()) return !1;
            var t, e, i = pt.audioFormats;
            for (e in i)
                if (i.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (pt.html5[e] = !1, i[e] && i[e].related))
                    for (t = i[e].related.length - 1; t >= 0; t--) pt.html5[i[e].related[t]] = !1
        }, this._setSandboxType = function(t) {}, this._externalInterfaceOK = function(t) {
            if (pt.swfLoaded) return !1;
            pt.swfLoaded = !0, Vt = !1, Wt && at(), setTimeout(u, Nt ? 100 : 1)
        }, E = function(t, i) {
            function n() {}

            function s(t, e) {
                return '<param name="' + t + '" value="' + e + '" />'
            }
            if (wt && bt) return !1;
            if (pt.html5Only) return x(), n(), pt.oMC = a(pt.movieID), u(), wt = !0, bt = !0, !1;
            var o, r, l, h, d, c, p, f, m = i || pt.url,
                g = pt.altURL || m,
                y = "JS/Flash audio component (SoundManager 2)",
                v = $(),
                _ = R(),
                w = null,
                b = vt.getElementsByTagName("html")[0];
            if (w = b && b.dir && b.dir.match(/rtl/i), t = t === e ? pt.id : t, x(), pt.url = k(Jt ? m : g), i = pt.url, pt.wmode = !pt.wmode && pt.useHighPerformance ? "transparent" : pt.wmode, null !== pt.wmode && (gt.match(/msie 8/i) || !Nt && !pt.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Dt.push(C.spcWmode), pt.wmode = null), o = {
                    name: t,
                    id: t,
                    src: i,
                    quality: "high",
                    allowScriptAccess: pt.allowScriptAccess,
                    bgcolor: pt.bgColor,
                    pluginspage: Kt + "www.macromedia.com/go/getflashplayer",
                    title: y,
                    type: "application/x-shockwave-flash",
                    wmode: pt.wmode,
                    hasPriority: "true"
                }, pt.debugFlash && (o.FlashVars = "debug=1"), pt.wmode || delete o.wmode, Nt) r = vt.createElement("div"), h = ['<object id="' + t + '" data="' + i + '" type="' + o.type + '" title="' + o.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', s("movie", i), s("AllowScriptAccess", pt.allowScriptAccess), s("quality", o.quality), pt.wmode ? s("wmode", pt.wmode) : "", s("bgcolor", pt.bgColor), s("hasPriority", "true"), pt.debugFlash ? s("FlashVars", o.FlashVars) : "", "</object>"].join("");
            else {
                r = vt.createElement("embed");
                for (l in o) o.hasOwnProperty(l) && r.setAttribute(l, o[l])
            }
            if (I(), _ = R(), v = $())
                if (pt.oMC = a(pt.movieID) || vt.createElement("div"), pt.oMC.id) f = pt.oMC.className, pt.oMC.className = (f ? f + " " : N.swfDefault) + (_ ? " " + _ : ""), pt.oMC.appendChild(r), Nt && (d = pt.oMC.appendChild(vt.createElement("div")), d.className = N.swfBox, d.innerHTML = h), bt = !0;
                else {
                    if (pt.oMC.id = pt.movieID, pt.oMC.className = N.swfDefault + " " + _, c = null, d = null, pt.useFlashBlock || (pt.useHighPerformance ? c = {
                            position: "fixed",
                            width: "8px",
                            height: "8px",
                            bottom: "0px",
                            left: "0px",
                            overflow: "hidden"
                        } : (c = {
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            top: "-9999px",
                            left: "-9999px"
                        }, w && (c.left = Math.abs(parseInt(c.left, 10)) + "px"))), Xt && (pt.oMC.style.zIndex = 1e4), !pt.debugFlash)
                        for (p in c) c.hasOwnProperty(p) && (pt.oMC.style[p] = c[p]);
                    try {
                        Nt || pt.oMC.appendChild(r), v.appendChild(pt.oMC), Nt && (d = pt.oMC.appendChild(vt.createElement("div")), d.className = N.swfBox, d.innerHTML = h), bt = !0
                    } catch (O) {
                        throw new Error(H("domError") + " \n" + O.toString())
                    }
                }
            return wt = !0, n(), !0
        }, T = function() {
            return pt.html5Only ? (E(), !1) : mt ? !1 : pt.url ? (mt = pt.getMovie(pt.id), mt || (Mt ? (Nt ? pt.oMC.innerHTML = Pt : pt.oMC.appendChild(Mt), Mt = null, wt = !0) : E(pt.id, pt.url), mt = pt.getMovie(pt.id)), "function" == typeof pt.oninitmovie && setTimeout(pt.oninitmovie, 1), !0) : !1
        }, _ = function() {
            setTimeout(w, 1e3)
        }, b = function() {
            t.setTimeout(function() {
                pt.setup({
                    preferFlash: !1
                }).reboot(), pt.didFlashBlock = !0, pt.beginDelayedInit()
            }, 1)
        }, w = function() {
            var e, i = !1;
            return pt.url ? St ? !1 : (St = !0, nt.remove(t, "load", _), ot && Vt && !Ut ? !1 : (xt || (e = pt.getMoviePercent(), e > 0 && 100 > e && (i = !0)), void setTimeout(function() {
                return e = pt.getMoviePercent(), i ? (St = !1, t.setTimeout(_, 1), !1) : void(!xt && qt && (null === e ? pt.useFlashBlock || 0 === pt.flashLoadTimeout ? pt.useFlashBlock && z() : !pt.useFlashBlock && Q ? b() : y({
                    type: "ontimeout",
                    ignoreInit: !0,
                    error: {
                        type: "INIT_FLASHBLOCK"
                    }
                }) : 0 === pt.flashLoadTimeout || (!pt.useFlashBlock && Q ? b() : F(!0))))
            }, pt.flashLoadTimeout))) : !1
        }, O = function() {
            function e() {
                nt.remove(t, "focus", O)
            }
            return Ut || !Vt ? (e(), !0) : (qt = !0, Ut = !0, St = !1, _(), e(), !0)
        }, ut = function() {}, ht = function() {}, c = function(e) {
            if (xt) return !1;
            if (pt.html5Only) return xt = !0, v(), !0;
            var i, n = pt.useFlashBlock && pt.flashLoadTimeout && !pt.getMoviePercent(),
                s = !0;
            return n || (xt = !0), i = {
                type: !ot && It ? "NO_FLASH" : "INIT_TIMEOUT"
            }, (Ot || e) && (pt.useFlashBlock && pt.oMC && (pt.oMC.className = R() + " " + (null === pt.getMoviePercent() ? N.swfTimedout : N.swfError)), y({
                type: "ontimeout",
                error: i,
                ignoreInit: !0
            }), L(i), s = !1), Ot || (pt.waitForWindowLoad && !Ct ? nt.add(t, "load", v) : v()), s
        }, h = function() {
            var t, i = pt.setupOptions;
            for (t in i) i.hasOwnProperty(t) && (pt[t] === e ? pt[t] = i[t] : pt[t] !== i[t] && (pt.setupOptions[t] = pt[t]))
        }, u = function() {
            function e() {
                nt.remove(t, "load", pt.beginDelayedInit)
            }
            if (xt) return !1;
            if (pt.html5Only) return xt || (e(), pt.enabled = !0, c()), !0;
            T();
            try {
                mt._externalInterfaceTest(!1), D(!0, pt.flashPollingInterval || (pt.useHighPerformance ? 10 : 50)), pt.debugMode || mt._disableDebug(), pt.enabled = !0, pt.html5Only || nt.add(t, "unload", l)
            } catch (i) {
                return L({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), F(!0), c(), !1
            }
            return c(), e(), !0
        }, M = function() {
            return S ? !1 : (S = !0, h(), I(), !ot && pt.hasHTML5 && pt.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            }), it(), !ot && It && (Dt.push(C.needFlash), pt.setup({
                flashLoadTimeout: 1
            })), vt.removeEventListener && vt.removeEventListener("DOMContentLoaded", M, !1), T(), !0)
        }, et = function() {
            return "complete" === vt.readyState && (M(), vt.detachEvent("onreadystatechange", et)), !0
        }, P = function() {
            Ct = !0, M(), nt.remove(t, "load", P)
        }, rt(), nt.add(t, "focus", O), nt.add(t, "load", _), nt.add(t, "load", P), vt.addEventListener ? vt.addEventListener("DOMContentLoaded", M, !1) : vt.attachEvent ? vt.attachEvent("onreadystatechange", et) : L({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        })
    }
    if (!t || !t.document) throw new Error("SoundManager requires a browser with window and document objects.");
    var n = null;
    t.SM2_DEFER !== e && SM2_DEFER || (n = new i), "object" == typeof module && module && "object" == typeof module.exports ? (module.exports.SoundManager = i, module.exports.soundManager = n) : "function" == typeof define && define.amd && define(function() {
        function e(e) {
            if (!t.soundManager && e instanceof Function) {
                var n = e(i);
                n instanceof i && (t.soundManager = n)
            }
            return t.soundManager
        }
        return {
            constructor: i,
            getInstance: e
        }
    }), t.SoundManager = i, t.soundManager = n
}(window),
function(t, e, i, n) {
    "use strict";

    function s(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var s in n) null === n[s] && delete n[s];
        t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var o = "parallax",
        r = 30,
        a = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    s.prototype.transformSupport = function(t) {
        for (var s = i.createElement("div"), o = !1, r = null, a = !1, l = null, h = null, u = 0, d = this.vendors.length; d > u; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", h = this.vendors[u][1] + "Transform") : (l = "transform", h = "transform"), s.style[h] !== n) {
                o = !0;
                break
            }
        switch (t) {
            case "2D":
                a = o;
                break;
            case "3D":
                if (o) {
                    var c = i.body || i.createElement("body"),
                        p = i.documentElement,
                        f = p.style.overflow;
                    i.body || (p.style.overflow = "hidden", p.appendChild(c), c.style.overflow = "hidden", c.style.background = ""), c.appendChild(s), s.style[h] = "translate3d(1px,1px,1px)", r = e.getComputedStyle(s).getPropertyValue(l), a = r !== n && r.length > 0 && "none" !== r, p.style.overflow = f, c.removeChild(s)
                }
        }
        return a
    }, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, s.prototype.wrx = null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], s.prototype.motionSupport = !!e.DeviceMotionEvent, s.prototype.orientationSupport = !!e.DeviceOrientationEvent, s.prototype.orientationStatus = 0, s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), s.prototype.transform3DSupport = s.prototype.transformSupport("3D"), s.prototype.propertyCache = {}, s.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, s.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, s.prototype.updateDimensions = function() {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, s.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, s.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, s.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, s.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, s.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
    }, s.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
    }, s.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
    }, s.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
    }, s.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
    }, s.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
    }, s.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, s.prototype.css = function(e, i, s) {
        var o = this.propertyCache[i];
        if (!o)
            for (var r = 0, a = this.vendors.length; a > r; r++)
                if (o = null !== this.vendors[r] ? t.camelCase(this.vendors[r][1] + "-" + i) : i, e.style[o] !== n) {
                    this.propertyCache[i] = o;
                    break
                }
        e.style[o] = s
    }, s.prototype.accelerate = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
        }
    }, s.prototype.setPosition = function(t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, s.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, s.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0
    }, s.prototype.onWindowResize = function(t) {
        this.updateDimensions()
    }, s.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, n = this.$layers.length; n > i; i++) {
            var s = this.depths[i],
                o = this.$layers[i],
                r = this.vx * s * (this.invertX ? -1 : 1),
                a = this.vy * s * (this.invertY ? -1 : 1);
            this.setPosition(o, r, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, s.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / r,
                n = (t.gamma || 0) / r,
                s = e.innerHeight > e.innerWidth;
            this.portrait !== s && (this.portrait = s, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
        }
    }, s.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: s.prototype.enable,
        disable: s.prototype.disable,
        updateLayers: s.prototype.updateLayers,
        calibrate: s.prototype.calibrate,
        friction: s.prototype.friction,
        invert: s.prototype.invert,
        scalar: s.prototype.scalar,
        limit: s.prototype.limit,
        origin: s.prototype.origin
    };
    t.fn[o] = function(e) {
        var i = arguments;
        return this.each(function() {
            var n = t(this),
                r = n.data(o);
            r || (r = new s(this, e), n.data(o, r)), l[e] && r[e].apply(r, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    };
    $.fn.mod = function(e, i) {
        return null == i && (i = !0), this.each(function() {
            var n, s, o, r, a;
            return n = $(this), o = n.attr("class"), s = o.split(" ")[0], a = o.match(new RegExp("" + s + "_" + e + "\\S*", "g")), r = null, i && (r = "" + s + "_" + e, i !== !0 && (r += "_" + i), a && t.call(a, r) >= 0 && a.splice(a.indexOf(r), 1)), a && a.length > 0 && n.removeClass(a.join(" ")), r && n.addClass(r), n.trigger("mod", [e, i])
        })
    }, $.block = function(t) {
        return $("." + t)
    }, $.fn.block = function(t) {
        return this.find("." + t)
    }, $.fn.element = function(t) {
        var e, i;
        return i = this.attr("class"), e = i.split(" ")[0], this.find("." + e + "__" + t)
    }
}.call(this),
    function() {
        var t, e, i, n = [].indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
        n.call(window, "ontouchstart") >= 0 || window.DocumentTouch && document instanceof DocumentTouch || $("a[href^='tel:']").each(function() {
            return $(this).attr("href", $(this).attr("href").replace("tel:", "callto:"))
        }), i = function(t) {
            var e, i;
            return i = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, e = t.match(i), e && 11 === e[7].length ? e[7] : !1
        }, t = function(t) {
            t = t || window.event, t.preventDefault && t.preventDefault(), t.returnValue = !1
        }, e = function(e) {
            var i;
            return i = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            }, i[e.keyCode] ? (t(e), !1) : void 0
        }, window.disableScroll = function() {
            window.addEventListener && window.addEventListener("DOMMouseScroll", t, !1), window.onwheel = t, window.onmousewheel = document.onmousewheel = t, window.ontouchmove = t, document.onkeydown = e
        }, window.enableScroll = function() {
            window.removeEventListener && window.removeEventListener("DOMMouseScroll", t, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
        }, disableScroll(), $(function() {
            var t, e, n, s;
            return window.ytPlayers = {}, window.scPlayers = {}, window.nowPlaying = {}, $("iframe[src*='youtu']").each(function() {
                var t, e, n;
                return n = i($(this).attr("src")), e = $(this).attr("width"), t = $(this).attr("height"), $(this).parent().append('<div data-ytid="' + n + '" data-width="' + e + '" data-height="' + t + '"></div>'), $(this).remove()
            }), $(".gallery").on("initialized.owl.carousel", function() {
                return window.onYouTubeIframeAPIReady = function() {
                    return $("div[data-ytid]").each(function() {
                        var t, e, i, n, o, r;
                        return t = "yt" + Math.floor(1e6 * Math.random()), $(this).get(0).id = t, r = $(this).data(), o = r.ytid, n = r.width, e = r.height, i = new YT.Player($(this).get(0), {
                            height: e,
                            width: n,
                            videoId: o,
                            events: {
                                onStateChange: s
                            }
                        }), ytPlayers[t] = i
                    })
                }, "undefined" != typeof YT && null !== YT && onYouTubeIframeAPIReady(), waitUntilFnThenFn(function() {
                    return "undefined" != typeof SC && null !== SC ? !0 : !1
                }, function() {
                    return $("iframe[src*='soundcloud']").each(function() {
                        var t, e, i;
                        return t = "sc" + Math.floor(1e6 * Math.random()), e = $(this).get(0), e.id = t, i = SC.Widget(e), scPlayers[t] = e, i.bind(SC.Widget.Events.READY, function() {
                            return i.bind(SC.Widget.Events.PLAY, function() {
                                return nowPlaying[t] = !0, $(document).trigger("player.playing", t)
                            }), i.bind(SC.Widget.Events.PAUSE, function() {
                                return nowPlaying[t] = !1, $(document).trigger("player.paused", t)
                            })
                        })
                    })
                })
            }), s = function(t) {
                var e;
                return e = t.target.getIframe().id, 1 === t.data && (nowPlaying[e] = !0, $(document).trigger("player.playing", e)), 2 === t.data || 0 === t.data ? (nowPlaying[e] = !1, $(document).trigger("player.paused", e)) : void 0
            }, $(document).on("player.playing", function(t, e) {
                var i, n, s, o;
                for (i in ytPlayers) n = ytPlayers[i], i !== e && n.pauseVideo();
                o = [];
                for (i in scPlayers) n = scPlayers[i], i !== e ? (s = SC.Widget(n), o.push(s.pause())) : o.push(void 0);
                return o
            }), t = $("section, .footer").parallax(), n = !1, e = function() {
                return n ? void 0 : ($(".preloader").fadeOut(200, function() {
                    return $(this).remove()
                }), $(document).trigger("document.load"), $("html").addClass("loaded").removeClass("preloading"), setTimeout(function() {
                    return enableScroll()
                }, 1e3), n = !0)
            }, $(window).load(function() {
                return e()
            }), setTimeout(function() {
                return e()
            }, 3e4), Modernizr.touchevents ? setTimeout(function() {
                return e()
            }, 1500) : void 0
        })
    }.call(this),
    function() {
        $(function() {})
    }.call(this),
    function() {
        $(function() {
            var t, e, i, n, s, o, r, a;
            if (t = $(".gallery"), t.length) {
                for (i = t.find(".gallery__list"), e = t.find(".gallery__box"), s = 0, n = ["gallery__list-item_1", "gallery__list-item_2", "gallery__list-item_3"]; s < e.length;) 4 > s && e.length > 4 ? (a = 1, 1 === a && (r = "gallery__list-item_0")) : (a = 0, o = Math.round(2 * Math.random()), r = n[o]), e.slice(s, s + 4 + a).wrapAll("<div class='gallery__list-item " + r + "'></div>"), s += 4 + a;
                return e.length <= 5 ? void t.trigger("initialized.owl.carousel") : i.owlCarousel({
                    loop: !0,
                    nav: !0,
                    navText: "",
                    dots: !1,
                    items: 1,
                    margin: 50
                })
            }
        })
    }.call(this),
    function() {
        $(function() {
            var t, e;
            return t = $(".news"), t.length ? (e = t.find(".news__list"), e.owlCarousel({
                loop: !0,
                nav: !0,
                navText: "",
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    999: {
                        items: 3
                    }
                }
            })) : void 0
        })
    }.call(this),
    function() {
        $(function() {
            var t;
            return t = $(".sound"), t.length ? ("undefined" != typeof soundManager && (soundManager.fadeTo = function(t, e, i, n) {
                var s, o, r, a;
                e = e || 1e3, i = i || 0, n = "function" == typeof n ? n : function() {}, r = soundManager.getSoundById(t),
                    o = r.volume, a = e / Math.abs(o - i), s = setInterval(function() {
                        o = o > i ? o - 1 : o + 1, r.setVolume(o), o === i && (n.call(this), clearInterval(s), s = null)
                    }, a)
            }), $(document).on("document.load", function() {
                var e;
                return e = window.soundFile ? window.soundFile : "http://tmp.static.se7enapp.com/albedoabsolute/bg.mp3", soundManager.setup({
                    onready: function() {
                        var i, n;
                        return n = soundManager.createSound({
                            autoLoad: !0,
                            id: "bg",
                            url: e
                        }), n ? (t.addClass("active"), i = function(t) {
                            return t.play({
                                onfinish: function() {
                                    return i(t)
                                }
                            })
                        }, i(n), t.on("click", function(e) {
                            if (t.hasClass("mute")) {
                                if (t.hasClass("disabled")) return;
                                return t.removeClass("mute"), soundManager.play("bg"), soundManager.fadeTo("bg", 1e3, 100)
                            }
                            return t.addClass("mute"), t.addClass("disabled"), soundManager.fadeTo("bg", 1e3, 0, function() {
                                return soundManager.pause("bg"), t.removeClass("disabled")
                            })
                        }), $(document).on("player.playing", function(e) {
                            return t.removeClass("active"), soundManager.fadeTo("bg", 1e3, 0, function() {
                                return soundManager.pause("bg")
                            })
                        }), $(document).on("player.paused", function(e) {
                            var i, n;
                            if (!t.hasClass("active")) {
                                for (i in nowPlaying)
                                    if (n = nowPlaying[i]) return;
                                return t.addClass("active"), t.hasClass("mute") ? void 0 : (soundManager.getSoundById("bg").setVolume(0), soundManager.play("bg"), soundManager.fadeTo("bg", 1e3, 100))
                            }
                        })) : void 0
                    }
                })
            })) : void 0
        })
    }.call(this),
    function() {
        $(function() {
            var t, e, i, n;
            return $(window).width() < 768 ? $("html").addClass("touchevents") : Modernizr.touchevents || (Modernizr.webgl && (e = document.createElement("script"), e.src = "assets/mainJsAnimationsBg.js", document.body.appendChild(e)), t = document.createElement("script"), t.src = "assets/mainJsAnimations.js", document.body.appendChild(t)), n = document.createElement("script"), n.src = "https://www.youtube.com/iframe_api", document.body.appendChild(n), i = document.createElement("script"), i.src = "https://w.soundcloud.com/player/api.js", document.body.appendChild(i)
        })
    }.call(this);