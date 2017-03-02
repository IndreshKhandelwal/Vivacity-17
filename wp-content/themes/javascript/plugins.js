// History
typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) === "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, n, r) {
                var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                return i
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, typeof n.init != "undefined" && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            s = e.setInterval || s,
            o = e.History = e.History || {};
        if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function() {
            if (typeof o.initHtml4.initialized != "undefined") return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(e) {
                var t = o.getHashByIndex(),
                    n;
                return n = e === t, n
            }, o.isHashEqual = function(e, t) {
                return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
            }, o.saveHash = function(e) {
                return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
            }, o.getHashByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(e, t, n) {
                var r = o.getHashByState(e),
                    i;
                return i = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, o.discardedStates[r] = i, !0
            }, o.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return o.discardedHashes[e] = r, !0
            }, o.discardedState = function(e) {
                var t = o.getHashByState(e),
                    n;
                return n = o.discardedStates[t] || !1, n
            }, o.discardedHash = function(e) {
                var t = o.discardedHashes[e] || !1;
                return t
            }, o.recycleState = function(e) {
                var t = o.getHashByState(e);
                return o.discardedState(e) && delete o.discardedStates[t], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function() {
                o.checkerFunction = null;
                var t = "",
                    r, i, u, a, f = Boolean(o.getHash());
                return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                    if (a) return !1;
                    a = !0;
                    var n = o.getHash(),
                        r = o.getHash(i.contentWindow.document);
                    return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
                }) : o.checkerFunction = function() {
                    var n = o.getHash() || "";
                    return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(t) {
                var n = t && t.newURL || o.getLocationHref(),
                    r = o.getHashByUrl(n),
                    i = null,
                    s = null,
                    u = null,
                    a;
                return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
            }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getHash(),
                    c = o.expectedStateId == s.id;
                return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
            }, o.replaceState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getStateByIndex(-2);
                return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
                o.Adapter.trigger(e, "hashchange")
            })
        }, typeof o.init != "undefined" && o.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            s = !1,
            o = e.setTimeout,
            u = e.clearTimeout,
            a = e.setInterval,
            f = e.clearInterval,
            l = e.JSON,
            c = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
        } catch (d) {
            s = !1
        }
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
        h.init = function(e) {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
        }, h.initCore = function(d) {
            if (typeof h.initCore.initialized != "undefined") return !1;
            h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                var e, t = h.intervalList;
                if (typeof t != "undefined" && t !== null) {
                    for (e = 0; e < t.length; e++) f(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function() {
                (h.options.debug || !1) && h.log.apply(h, arguments)
            }, h.log = function() {
                var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                    t = r.getElementById("log"),
                    i, s, o, u, a;
                e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                for (s = 1, o = arguments.length; s < o; ++s) {
                    a = arguments[s];
                    if (typeof a == "object" && typeof l != "undefined") try {
                        a = l.stringify(a)
                    } catch (f) {}
                    i += "\n" + a + "\n"
                }
                return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
            }, h.getInternetExplorerMajorVersion = function() {
                var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
                return e
            }, h.isInternetExplorer = function() {
                var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                return e
            }, h.options.html4Mode ? h.emulated = {
                pushState: !0,
                hashChange: !0
            } : h.emulated = {
                pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }, h.cloneObject = function(e) {
                var t, n;
                return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
            }, h.getRootUrl = function() {
                var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                if (r.location.port || !1) e += ":" + r.location.port;
                return e += "/", e
            }, h.getBaseHref = function() {
                var e = r.getElementsByTagName("base"),
                    t = null,
                    n = "";
                return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
            }, h.getBaseUrl = function() {
                var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                return e
            }, h.getPageUrl = function() {
                var e = h.getState(!1, !1),
                    t = (e || {}).url || h.getLocationHref(),
                    n;
                return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /\./.test(e) ? e : e + "/"
                }), n
            }, h.getBasePageUrl = function() {
                var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/";
                return e
            }, h.getFullUrl = function(e, t) {
                var n = e,
                    r = e.substring(0, 1);
                return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function(e) {
                var t = e,
                    n = h.getBaseUrl(),
                    r = h.getRootUrl();
                return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
            }, h.getLocationHref = function(e) {
                return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function(e, t) {
                typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                var n = h.getLastSavedState();
                return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
            }, h.getIdByState = function(e) {
                var t = h.extractId(e.url),
                    n;
                if (!t) {
                    n = h.getStateString(e);
                    if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                    else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                    else {
                        for (;;) {
                            t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                        }
                        h.stateToId[n] = t, h.idToState[t] = e
                    }
                }
                return t
            }, h.normalizeState = function(e) {
                var t, n;
                if (!e || typeof e != "object") e = {};
                if (typeof e.normalized != "undefined") return e;
                if (!e.data || typeof e.data != "object") e.data = {};
                return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
            }, h.createStateObject = function(e, t, n) {
                var r = {
                    data: e,
                    title: t,
                    url: n
                };
                return r = h.normalizeState(r), r
            }, h.getStateById = function(e) {
                e = String(e);
                var n = h.idToState[e] || h.store.idToState[e] || t;
                return n
            }, h.getStateString = function(e) {
                var t, n, r;
                return t = h.normalizeState(e), n = {
                    data: t.data,
                    title: e.title,
                    url: e.url
                }, r = l.stringify(n), r
            }, h.getStateId = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.id, n
            }, h.getHashByState = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.hash, n
            }, h.extractId = function(e) {
                var t, n, r, i;
                return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
            }, h.isTraditionalAnchor = function(e) {
                var t = !/[\/\?\.]/.test(e);
                return t
            }, h.extractState = function(e, t) {
                var n = null,
                    r, i;
                return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
            }, h.getIdByUrl = function(e) {
                var n = h.urlToId[e] || h.store.urlToId[e] || t;
                return n
            }, h.getLastSavedState = function() {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function() {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function(e) {
                var t = !1,
                    n;
                return n = h.extractState(e.url), t = n && n.id !== e.id, t
            }, h.storeState = function(e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function(e) {
                var t = !1,
                    n, r, i;
                return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
            }, h.saveState = function(e) {
                return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
            }, h.getCurrentIndex = function() {
                var e = null;
                return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
            }, h.getHash = function(e) {
                var t = h.getLocationHref(e),
                    n;
                return n = h.getHashByUrl(t), n
            }, h.unescapeHash = function(e) {
                var t = h.normalizeHash(e);
                return t = decodeURIComponent(t), t
            }, h.normalizeHash = function(e) {
                var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                return t
            }, h.setHash = function(e, t) {
                var n, i;
                return t !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
            }, h.escapeHash = function(t) {
                var n = h.normalizeHash(t);
                return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function(e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t), t
            }, h.setTitle = function(e) {
                var t = e.title,
                    n;
                t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                try {
                    r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (i) {}
                return r.title = t, h
            }, h.queues = [], h.busy = function(e) {
                typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                if (!h.busy.flag) {
                    u(h.busy.timeout);
                    var t = function() {
                        var e, n, r;
                        if (h.busy.flag) return;
                        for (e = h.queues.length - 1; e >= 0; --e) {
                            n = h.queues[e];
                            if (n.length === 0) continue;
                            r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                        }
                    };
                    h.busy.timeout = o(t, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function(e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function(e, t) {
                return typeof e == "function" && (e = {
                    callback: e
                }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function() {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function() {
                return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function(e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function() {
                var t = h.extractState(h.getLocationHref()),
                    n;
                if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                return
            }, h.back = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function(e, t) {
                var n;
                if (e > 0)
                    for (n = 1; n <= e; ++n) h.forward(t);
                else {
                    if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (n = -1; n >= e; --n) h.back(t)
                }
                return h
            };
            if (h.emulated.pushState) {
                var v = function() {};
                h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
            } else h.onPopState = function(t, n) {
                var r = !1,
                    i = !1,
                    s, o;
                return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            }, h.replaceState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            };
            if (s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch (m) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
                var e, t, n;
                try {
                    e = l.parse(s.getItem("History.store")) || {}
                } catch (r) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in h.idToState) {
                    if (!h.idToState.hasOwnProperty(t)) continue;
                    e.idToState[t] = h.idToState[t]
                }
                for (t in h.urlToId) {
                    if (!h.urlToId.hasOwnProperty(t)) continue;
                    e.urlToId[t] = h.urlToId[t]
                }
                for (t in h.stateToId) {
                    if (!h.stateToId.hasOwnProperty(t)) continue;
                    e.stateToId[t] = h.stateToId[t]
                }
                h.store = e, h.normalizeStore(), n = l.stringify(e);
                try {
                    s.setItem("History.store", n)
                } catch (i) {
                    if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                    s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                }
            }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
            if (!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function() {
                    h.Adapter.trigger(e, "popstate")
                }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })
            }
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window)

// jQuery Easing
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },
    easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function(n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});

// Infinite Slider
function InfiniteSlider(i, t, e, n, a, o, s) {
    var l = this;
    this.animated = !1, this.hover = o, this.autorotation = s, this.running = !0, this.t, this.wrapper = $(i), this.container = $(".slider", this.wrapper), this.arrows = $(".slider-arrows", this.wrapper), this.count = $(".count", this.arrows), this.controls = $(".slider-controls", this.wrapper), this.infos = $(".slider-infos", this.wrapper), this.speed = t, this.duration = e, this.mode = n, this.easing = a, this.width = this.container.width(), this.height = this.container.height(), this.index = 0, this.indexSlide = 0, this.length = $("> ul > li", this.container).length - 1, $("> ul > li", this.container).each(function() {
        $(this).attr("data-slide", $(this).index() + 1), 0 == $(this).index() ? ($(this).addClass("active"), $(l.controls).append('<li class="active" data-slide="' + ($(this).index() + 1) + '"><a href="">Slide ' + ($(this).index() + 1) + "</a></li>")) : ($(this).addClass("inactive"), $(l.controls).append('<li class="inactive" data-slide="' + ($(this).index() + 1) + '"><a href="">Slide ' + ($(this).index() + 1) + "</a></li>"))
    }), $("li", this.controls).each(function() {
        $(this).attr("data-slide", $(this).index() + 1), $(this).addClass(0 == $(this).index() ? "active" : "inactive")
    }), $(this.count).html("01"), "" != $("> ul > li:eq(0)", this.container).attr("data-infos") && $(this.infos).html($("> ul > li:eq(0)", this.container).attr("data-infos")), 0 == this.length && ($(this.controls).hide(), this.autorotation = !1), this.reset(l), this.hover && ($(this.wrapper).mouseenter(function() {
        l.stop(l)
    }), $(this.wrapper).mouseleave(function() {
        l.start(l)
    })), $("li a", this.controls).click(function() {
        return l.controlsClick($(this), l), !1
    }), $("li a", this.arrows).click(function() {
        return l.arrowsClick($(this), l), !1
    }), $(window).resize(function() {
        l.reset(l)
    }), this.running && this.autoRotation(l)
}
InfiniteSlider.prototype.autoRotation = function(i) {
    clearTimeout(i.t), $("li", i.controls).length > 1 && i.autorotation && i.running && (i.t = setTimeout(function() {
        i.changeSlide(i.indexSlide, i.indexSlide + 1, i)
    }, i.duration))
}, InfiniteSlider.prototype.start = function(i) {
    return i.running = !0, i.autoRotation(i), !1
}, InfiniteSlider.prototype.stop = function(i) {
    return clearTimeout(i.t), i.running = !1, !1
}, InfiniteSlider.prototype.arrowsClick = function(i, t) {
    if (!t.animated) {
        if (t.autorotation = !1, clearTimeout(t.t), $(i).parent().hasClass("next")) var e = t.indexSlide + 1;
        else var e = t.indexSlide - 1;
        t.changeSlide(t.indexSlide, e, t)
    }
    return !1
}, InfiniteSlider.prototype.controlsClick = function(i, t) {
    if (!t.animated && 0 == $(i).parent().hasClass("active")) {
        t.autorotation = !1, clearTimeout(t.t);
        var e = $(i).parent().index();
        $("> ul > li", t.container).each(function() {
            $(this).attr("data-slide") == e + 1 && t.changeSlide(t.indexSlide, $(this).index(), t)
        })
    }
    return !1
}, InfiniteSlider.prototype.reset = function(i) {
    i.animated || (i.stop(i), i.width = i.container.width(), i.height = i.container.height(), "demask" == i.mode && ($("> ul > li.inactive", i.container).width(0), $("> ul > li > img", i.container).width(i.width)), "columns" == i.mode && $("> ul > li > img", i.container).each(function() {
        var i, t = $(this),
            e = $(this).parent(),
            n = e.width(),
            a = e.height(),
            o = parseInt($(this).parent().attr("data-col-width")),
            s = "",
            l = 1920 / 1080,
            r = n / a;
        if (l > r) {
            var h = a * l;
            i = Math.ceil(h / o), i % 2 != 1 && (i += 1), h = i * o, t.width(h).height(h / l).css("left", -(t.width() / 2 - n / 2) + "px").css("top", -(t.height() / 2 - a / 2) + "px"), t.siblings(".columns").width(h).height(h / l).css("left", -(t.width() / 2 - n / 2) + "px").css("top", -(t.height() / 2 - a / 2) + "px")
        } else {
            var h = n;
            i = Math.ceil(h / o), i % 2 != 1 && (i += 1), h = i * o, t.width(h).height(h / l).css("left", -(t.width() / 2 - n / 2) + "px").css("top", -(t.height() / 2 - a / 2) + "px"), t.siblings(".columns").width(h).height(h / l).css("left", -(t.width() / 2 - n / 2) + "px").css("top", -(t.height() / 2 - a / 2) + "px")
        }
        for (var d = 0; i > d; d++) {
            var c = -d * o;
            s += '<li><div><img src="' + $(this).parent().attr("data-img-src") + '" alt="" style="left: ' + c + "px; width: " + t.width() + "px; height: " + t.height() + 'px;" /></div></li>'
        }
        t.siblings(".columns").html(s)
    }), i.start(i))
}, InfiniteSlider.prototype.changeSlide = function(i, t, e) {
    e.animated = !0;
    var n = "next";
    i > t && (n = "previous"), t > e.length ? t = 0 : 0 > t && (t = e.length), $("> ul > li", e.container).removeClass("active").addClass("inactive"), $("> ul > li", e.container).eq(t).removeClass("inactive").addClass("active"), e.index = parseInt($("> ul > li.active", e.container).attr("data-slide")) - 1, e.indexSlide = $("> ul > li.active", e.container).index(), $("li", e.controls).removeClass("active"), $("li", e.controls).eq(e.index).addClass("active");
    var a = parseFloat($("> ul > li.active", e.container).attr("data-slide"));
    10 > a && (a = "0" + a), $(e.count).html(a), $(e.infos).fadeOut(e.speed / 2, function() {
        $("> li", e.infos).hide(), $("> li", e.infos).eq(t).show(), $(this).show().css("opacity", "0"), e.reset(e), $(this).animate({
            opacity: 1
        }, e.speed / 2)
    }), "slide" == e.mode ? "next" == n ? ($("> ul > li", e.container).eq(t).css("left", e.width + "px").show(), $("> ul > li", e.container).animate({
        left: "-=" + e.width
    }, {
        duration: e.speed,
        easing: e.easing,
        complete: function() {
            e.animated = !1, $("> ul > li.inactive", e.container).hide(), e.running && e.autoRotation(e)
        }
    })) : ($("> ul > li", e.container).eq(t).css("left", -e.width + "px").show(), $("> ul > li", e.container).animate({
        left: "+=" + e.width
    }, {
        duration: e.speed,
        easing: e.easing,
        complete: function() {
            e.animated = !1, $("> ul > li.inactive", e.container).hide(), e.running && e.autoRotation(e)
        }
    })) : "slidev" == e.mode ? "next" == n ? ($("> ul > li", e.container).eq(t).css("top", e.height + "px").show(), $("> ul > li", e.container).animate({
        top: "-=" + e.height
    }, {
        duration: e.speed,
        easing: e.easing,
        complete: function() {
            e.animated = !1, $("> ul > li.inactive", e.container).hide(), e.running && e.autoRotation(e)
        }
    })) : ($("> ul > li", e.container).eq(t).css("top", -e.height + "px").show(), $("> ul > li", e.container).animate({
        top: "+=" + e.height
    }, {
        duration: e.speed,
        easing: e.easing,
        complete: function() {
            e.animated = !1, $("> ul > li.inactive", e.container).hide(), e.running && e.autoRotation(e)
        }
    })) : "fade" == e.mode ? $("> ul > li.active", e.container).fadeIn(e.speed, function() {
        $("> ul > li", e.container).eq(i).hide(), e.animated = !1, e.running && e.autoRotation(e)
    }) : "demask" == e.mode ? $("> ul > li.active", e.container).animate({
        width: e.width
    }, e.speed, e.easing, function() {
        $("> ul > li.inactive", e.container).width(0), e.animated = !1, e.running && e.autoRotation(e)
    }) : "columns" == e.mode ? ($("> ul > li", e.container).eq(t).css("left", "0"), $("> ul > li", e.container).eq(i).find(".columns > li > div").animate({
        width: 0
    }, e.speed, e.easing, function() {
        $("> ul > li", e.container).eq(i).css("left", "100%"), $("> ul > li", e.container).eq(i).find(".columns > li > div").width("100%"), e.animated = !1, e.running && e.autoRotation(e)
    })) : "css" == e.mode && $("> ul > li", e.container).eq(i).animate({
        opacity: 0
    }, e.speed / 2, function() {
        $(this).hide(), $("> ul > li", e.container).eq(t).show().animate({
            opacity: 1
        }, e.speed / 2, function() {
            e.animated = !1, e.running && e.autoRotation(e)
        })
    })
};

// Images Loaded
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });

// Mouse Wheel
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});

// Knob
! function(t) {
    "use strict";
    var i = {},
        s = Math.max,
        h = Math.min;
    i.c = {}, i.c.d = t(document), i.c.t = function(t) {
        return t.originalEvent.touches.length - 1
    }, i.o = function() {
        var s = this;
        this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
            var i = function(t, i) {
                var h;
                for (h in i) s.o[h] = i[h];
                s._carve().init(), s._configure()._draw()
            };
            if (!this.$.data("kontroled")) {
                if (this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                        min: this.$.data("min") || 0,
                        max: this.$.data("max") || 100,
                        stopper: !0,
                        readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                        cursor: this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
                        thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                        lineCap: this.$.data("linecap") || "butt",
                        width: this.$.data("width") || 200,
                        height: this.$.data("height") || 200,
                        displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                        displayPrevious: this.$.data("displayprevious"),
                        fgColor: this.$.data("fgcolor") || "#87CEEB",
                        inputColor: this.$.data("inputcolor"),
                        font: this.$.data("font") || "Arial",
                        fontWeight: this.$.data("font-weight") || "bold",
                        inline: !1,
                        step: this.$.data("step") || 1,
                        draw: null,
                        change: null,
                        cancel: null,
                        release: null
                    }, this.o), this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(i) {
                        var h = t(this);
                        s.i[i] = h, s.v[i] = h.val(), h.bind("change blur", function() {
                            var t = {};
                            t[i] = h.val(), s.val(t)
                        })
                    }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.$.val(), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                        s.val(s._validate(s.$.val()))
                    })), !this.o.displayInput && this.$.hide(), this.$c = t(document.createElement("canvas")).attr({
                        width: this.o.width,
                        height: this.o.height
                    }), this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c) throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function() {
                        return this.name + ": " + this.message
                    }
                };
                return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", i).parent().bind("configure", i), this._listen()._configure()._xy().init(), this.isInit = !0, this._draw(), this
            }
        }, this._carve = function() {
            if (this.relative) {
                var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                    i = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(t, i)
            } else this.w = this.o.width, this.h = this.o.height;
            return this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            }), this.$c.attr({
                width: this.w,
                height: this.h
            }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
        }, this._draw = function() {
            var t = !0;
            s.g = s.c, s.clear(), s.dH && (t = s.dH()), t !== !1 && s.draw()
        }, this._touch = function(t) {
            var h = function(t) {
                var i = s.xy2val(t.originalEvent.touches[s.t].pageX, t.originalEvent.touches[s.t].pageY);
                i != s.cv && (s.cH && s.cH(i) === !1 || (s.change(s._validate(i)), s._draw()))
            };
            return this.t = i.c.t(t), h(t), i.c.d.bind("touchmove.k", h).bind("touchend.k", function() {
                i.c.d.unbind("touchmove.k touchend.k"), s.val(s.cv)
            }), this
        }, this._mouse = function(t) {
            var h = function(t) {
                var i = s.xy2val(t.pageX, t.pageY);
                i != s.cv && (s.cH && s.cH(i) === !1 || (s.change(s._validate(i)), s._draw()))
            };
            return h(t), i.c.d.bind("mousemove.k", h).bind("keyup.k", function(t) {
                if (27 === t.keyCode) {
                    if (i.c.d.unbind("mouseup.k mousemove.k keyup.k"), s.eH && s.eH() === !1) return;
                    s.cancel()
                }
            }).bind("mouseup.k", function(t) {
                i.c.d.unbind("mousemove.k mouseup.k keyup.k"), s.val(s.cv)
            }), this
        }, this._xy = function() {
            var t = this.$c.offset();
            return this.x = t.left, this.y = t.top, this
        }, this._listen = function() {
            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                t.preventDefault(), s._xy()._mouse(t)
            }).bind("touchstart", function(t) {
                t.preventDefault(), s._xy()._touch(t)
            }), this.listen()), this.relative && t(window).resize(function() {
                s._carve().init(), s._draw()
            }), this
        }, this._configure = function() {
            return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
        }, this._clear = function() {
            this.$c[0].width = this.$c[0].width
        }, this._validate = function(t) {
            return ~~((0 > t ? -.5 : .5) + t / this.o.step) * this.o.step
        }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(t) {}, this.val = function(t) {}, this.xy2val = function(t, i) {}, this.draw = function() {}, this.clear = function() {
            this._clear()
        }, this.h2rgba = function(t, i) {
            var s;
            return t = t.substring(1, 7), s = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)], "rgba(" + s[0] + "," + s[1] + "," + s[2] + "," + i + ")"
        }, this.copy = function(t, i) {
            for (var s in t) i[s] = t[s]
        }
    }, i.Dial = function() {
        i.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
            this.o = t.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: !0
            }, this.o)
        }, this.val = function(t, i) {
            return null == t ? this.v : void(i !== !1 && t != this.v && this.rH && this.rH(t) === !1 || (this.cv = this.o.stopper ? s(h(t, this.o.max), this.o.min) : t, this.v = this.cv, this.$.val(this.v), this._draw()))
        }, this.xy2val = function(t, i) {
            var n, e;
            return n = Math.atan2(t - (this.x + this.w2), -(i - this.y - this.w2)) - this.angleOffset, this.angleArc != this.PI2 && 0 > n && n > -.5 ? n = 0 : 0 > n && (n += this.PI2), e = ~~(.5 + n * (this.o.max - this.o.min) / this.angleArc) + this.o.min, this.o.stopper && (e = s(h(e, this.o.max), this.o.min)), e
        }, this.listen = function() {
            var i, n, e, a, o = this,
                l = function(t) {
                    t.preventDefault();
                    var e = t.originalEvent,
                        a = e.detail || e.wheelDeltaX,
                        l = e.detail || e.wheelDeltaY,
                        r = o._validate(o.$.val()) + (a > 0 || l > 0 ? o.o.step : 0 > a || 0 > l ? -o.o.step : 0);
                    r = s(h(r, o.o.max), o.o.min), o.val(r, !1), o.rH && (clearTimeout(i), i = setTimeout(function() {
                        o.rH(r), i = null
                    }, 100), n || (n = setTimeout(function() {
                        i && o.rH(r), n = null
                    }, 200)))
                },
                r = 1,
                c = {
                    37: -o.o.step,
                    38: o.o.step,
                    39: o.o.step,
                    40: -o.o.step
                };
            this.$.bind("keydown", function(i) {
                var n = i.keyCode;
                if (n >= 96 && 105 >= n && (n = i.keyCode = n - 48), e = parseInt(String.fromCharCode(n)), isNaN(e) && (13 !== n && 8 !== n && 9 !== n && 189 !== n && i.preventDefault(), t.inArray(n, [37, 38, 39, 40]) > -1)) {
                    i.preventDefault();
                    var l = parseInt(o.$.val()) + c[n] * r;
                    o.o.stopper && (l = s(h(l, o.o.max), o.o.min)), o.change(l), o._draw(), a = window.setTimeout(function() {
                        r *= 2
                    }, 30)
                }
            }).bind("keyup", function(t) {
                isNaN(e) ? a && (window.clearTimeout(a), a = null, r = 1, o.val(o.$.val())) : o.$.val() > o.o.max && o.$.val(o.o.max) || o.$.val() < o.o.min && o.$.val(o.o.min)
            }), this.$c.bind("mousewheel DOMMouseScroll", l), this.$.bind("mousewheel DOMMouseScroll", l)
        }, this.init = function() {
            (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var t = s(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        }, this.change = function(t) {
            this.cv = t, this.$.val(t)
        }, this.angle = function(t) {
            return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        }, this.draw = function() {
            var t, i, s = this.g,
                h = this.angle(this.cv),
                n = this.startAngle,
                e = n + h,
                a = 1;
            s.lineWidth = this.lineWidth, s.lineCap = this.lineCap, this.o.cursor && (n = e - this.cursorExt) && (e += this.cursorExt), s.beginPath(), s.strokeStyle = this.o.bgColor, s.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), s.stroke(), this.o.displayPrevious && (i = this.startAngle + this.angle(this.v), t = this.startAngle, this.o.cursor && (t = i - this.cursorExt) && (i += this.cursorExt), s.beginPath(), s.strokeStyle = this.pColor, s.arc(this.xy, this.xy, this.radius, t - 1e-5, i + 1e-5, !1), s.stroke(), a = this.cv == this.v), s.beginPath(), s.strokeStyle = a ? this.o.fgColor : this.fgColor, s.arc(this.xy, this.xy, this.radius, n - 1e-5, e + 1e-5, !1), s.stroke()
        }, this.cancel = function() {
            this.val(this.v)
        }
    }, t.fn.dial = t.fn.knob = function(s) {
        return this.each(function() {
            var h = new i.Dial;
            h.o = s, h.$ = t(this), h.run()
        }).parent()
    }
}(jQuery);

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
! function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit) return !1
                } else c.trigger("appear"), b = 0
            })
        }
        var h, i = this,
            j = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: b,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
            return g()
        }), this.each(function() {
            var b = this,
                c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return !a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                b.loaded || c.trigger("appear")
            })
        }), e.bind("resize", function() {
            g()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear")
            })
        }), a(c).ready(function() {
            g()
        }), this
    }, a.belowthefold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function(b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);