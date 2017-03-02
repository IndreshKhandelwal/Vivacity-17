<script type="text/javascript">
    jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});
</script>

<script type="text/javascript">
        window.NREUM || (NREUM = {}), __nr_require = function(e, t, n) {
            function r(n) {
                if (!t[n]) {
                    var o = t[n] = {
                        exports: {}
                    };
                    e[n][0].call(o.exports, function(t) {
                        var o = e[n][1][t];
                        return r(o || t)
                    }, o, o.exports)
                }
                return t[n].exports
            }
            if ("function" == typeof __nr_require) return __nr_require;
            for (var o = 0; o < n.length; o++) r(n[o]);
            return r
        }({
            1: [function(e, t, n) {
                function r() {}

                function o(e, t, n) {
                    return function() {
                        return i(e, [(new Date).getTime()].concat(u(arguments)), t ? null : this, n), t ? void 0 : this
                    }
                }
                var i = e("handle"),
                    a = e(2),
                    u = e(3),
                    c = e("ee").get("tracer"),
                    f = NREUM;
                "undefined" == typeof window.newrelic && (newrelic = f);
                var s = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit"],
                    l = "api-",
                    p = l + "ixn-";
                a(s, function(e, t) {
                    f[t] = o(l + t, !0, "api")
                }), f.addPageAction = o(l + "addPageAction", !0), f.setCurrentRouteName = o(l + "routeName", !0), t.exports = newrelic, f.interaction = function() {
                    return (new r).get()
                };
                var d = r.prototype = {
                    createTracer: function(e, t) {
                        var n = {},
                            r = this,
                            o = "function" == typeof t;
                        return i(p + "tracer", [Date.now(), e, n], r),
                            function() {
                                if (c.emit((o ? "" : "no-") + "fn-start", [Date.now(), r, o], n), o) try {
                                    return t.apply(this, arguments)
                                } finally {
                                    c.emit("fn-end", [Date.now()], n)
                                }
                            }
                    }
                };
                a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(e, t) {
                    d[t] = o(p + t)
                }), newrelic.noticeError = function(e) {
                    "string" == typeof e && (e = new Error(e)), i("err", [e, (new Date).getTime()])
                }
            }, {}],
            2: [function(e, t, n) {
                function r(e, t) {
                    var n = [],
                        r = "",
                        i = 0;
                    for (r in e) o.call(e, r) && (n[i] = t(r, e[r]), i += 1);
                    return n
                }
                var o = Object.prototype.hasOwnProperty;
                t.exports = r
            }, {}],
            3: [function(e, t, n) {
                function r(e, t, n) {
                    t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                    for (var r = -1, o = n - t || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = e[t + r];
                    return i
                }
                t.exports = r
            }, {}],
            ee: [function(e, t, n) {
                function r() {}

                function o(e) {
                    function t(e) {
                        return e && e instanceof r ? e : e ? c(e, u, i) : i()
                    }

                    function n(n, r, o) {
                        if (!p.aborted) {
                            e && e(n, r, o);
                            for (var i = t(o), a = v(n), u = a.length, c = 0; c < u; c++) a[c].apply(i, r);
                            var f = s[w[n]];
                            return f && f.push([y, n, r, i]), i
                        }
                    }

                    function d(e, t) {
                        b[e] = v(e).concat(t)
                    }

                    function v(e) {
                        return b[e] || []
                    }

                    function g(e) {
                        return l[e] = l[e] || o(n)
                    }

                    function m(e, t) {
                        f(e, function(e, n) {
                            t = t || "feature", w[n] = t, t in s || (s[t] = [])
                        })
                    }
                    var b = {},
                        w = {},
                        y = {
                            on: d,
                            emit: n,
                            get: g,
                            listeners: v,
                            context: t,
                            buffer: m,
                            abort: a,
                            aborted: !1
                        };
                    return y
                }

                function i() {
                    return new r
                }

                function a() {
                    (s.api || s.feature) && (p.aborted = !0, s = p.backlog = {})
                }
                var u = "nr@context",
                    c = e("gos"),
                    f = e(2),
                    s = {},
                    l = {},
                    p = t.exports = o();
                p.backlog = s
            }, {}],
            gos: [function(e, t, n) {
                function r(e, t, n) {
                    if (o.call(e, t)) return e[t];
                    var r = n();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(e, t, {
                            value: r,
                            writable: !0,
                            enumerable: !1
                        }), r
                    } catch (i) {}
                    return e[t] = r, r
                }
                var o = Object.prototype.hasOwnProperty;
                t.exports = r
            }, {}],
            handle: [function(e, t, n) {
                function r(e, t, n, r) {
                    o.buffer([e], r), o.emit(e, t, n)
                }
                var o = e("ee").get("handle");
                t.exports = r, r.ee = o
            }, {}],
            id: [function(e, t, n) {
                function r(e) {
                    var t = typeof e;
                    return !e || "object" !== t && "function" !== t ? -1 : e === window ? 0 : a(e, i, function() {
                        return o++
                    })
                }
                var o = 1,
                    i = "nr@id",
                    a = e("gos");
                t.exports = r
            }, {}],
            loader: [function(e, t, n) {
                function r() {
                    if (!h++) {
                        var e = y.info = NREUM.info,
                            t = l.getElementsByTagName("script")[0];
                        if (setTimeout(f.abort, 3e4), !(e && e.licenseKey && e.applicationID && t)) return f.abort();
                        c(b, function(t, n) {
                            e[t] || (e[t] = n)
                        }), u("mark", ["onload", a()], null, "api");
                        var n = l.createElement("script");
                        n.src = "https://" + e.agent, t.parentNode.insertBefore(n, t)
                    }
                }

                function o() {
                    "complete" === l.readyState && i()
                }

                function i() {
                    u("mark", ["domContent", a()], null, "api")
                }

                function a() {
                    return (new Date).getTime()
                }
                var u = e("handle"),
                    c = e(2),
                    f = e("ee"),
                    s = window,
                    l = s.document,
                    p = "addEventListener",
                    d = "attachEvent",
                    v = s.XMLHttpRequest,
                    g = v && v.prototype;
                NREUM.o = {
                    ST: setTimeout,
                    CT: clearTimeout,
                    XHR: v,
                    REQ: s.Request,
                    EV: s.Event,
                    PR: s.Promise,
                    MO: s.MutationObserver
                }, e(1);
                var m = "" + location,
                    b = {
                        beacon: "bam.nr-data.net",
                        errorBeacon: "bam.nr-data.net",
                        agent: "js-agent.newrelic.com/nr-998.min.js"
                    },
                    w = v && g && g[p] && !/CriOS/.test(navigator.userAgent),
                    y = t.exports = {
                        offset: a(),
                        origin: m,
                        features: {},
                        xhrWrappable: w
                    };
                l[p] ? (l[p]("DOMContentLoaded", i, !1), s[p]("load", r, !1)) : (l[d]("onreadystatechange", o), s[d]("onload", r)), u("mark", ["firstbyte", a()], null, "api");
                var h = 0
            }, {}]
        }, {}, ["loader"]);
    </script>
    <script type='text/javascript' src='wp-includes/jquery/jquery.js'></script>
    <script type='text/javascript' src='wp-includes/jquery/jquery-migrate.js'></script>
    <script type='text/javascript' src='wp-content/plugins/mailchimp/js/scrollto.js'></script>
    <script type='text/javascript' src='wp-includes/jquery/jquery-form.js'></script>
    
     <script type='text/javascript' src='wp-content/plugins/mailchimp/js/mailchimp.js'></script>
    <script type='text/javascript' src='wp-includes/jquery/ui/core.js'></script>
    <script type='text/javascript' src='wp-content/plugins/mailchimp/js/datepicker.js'></script>
    <script type='text/javascript' src='js/jquery.js'></script>
    <script type='text/javascript' src='js/slick.js'></script>
    
    <script type="text/javascript">
        jQuery(function($) {
            $('.date-pick').each(function() {
                var format = $(this).data('format') || 'mm/dd/yyyy';
                format = format.replace(/yyyy/i, 'yy');
                $(this).datepicker({
                    autoFocusNextInput: true,
                    constrainInput: false,
                    changeMonth: true,
                    changeYear: true,
                    beforeShow: function(input, inst) {
                        $('#ui-datepicker-div').addClass('show');
                    },
                    dateFormat: format.toLowerCase(),
                });
            });
            d = new Date();
            $('.birthdate-pick').each(function() {
                var format = $(this).data('format') || 'mm/dd';
                format = format.replace(/yyyy/i, 'yy');
                $(this).datepicker({
                    autoFocusNextInput: true,
                    constrainInput: false,
                    changeMonth: true,
                    changeYear: false,
                    minDate: new Date(d.getFullYear(), 1 - 1, 1),
                    maxDate: new Date(d.getFullYear(), 12 - 1, 31),
                    beforeShow: function(input, inst) {
                        $('#ui-datepicker-div').removeClass('show');
                    },
                    dateFormat: format.toLowerCase(),
                });

            });

        });
    </script>
    <script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()</script>
     <script type='text/javascript' src='wp-content/themes/javascript/plugins.js'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var php_array = {
            "blog_name": "",
            "blog_url": "https:\/\/",
            "blog_lang": "en",
            "admin_ajax": "https:\/\/\/\/"
        };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/themes/javascript/min/ui.js'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var icl_vars = {
            "current_language": "en",
            "icl_home": "https:\/\/\/en\/"
        };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/sitepress/js/sitepress.js'></script>
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-62919026-1', 'auto');
        ga('send', 'pageview');
    </script>
    <script type="text/javascript">
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.nr-data.net",
            "licenseKey": "d088d14224",
            "applicationID": "10145360",
            "transactionName": "NVFRZUdUDBdTUUZcCwwbclJBXA0KHVtcUQEa",
            "queueTime": 0,
            "applicationTime": 405,
            "atts": "GRZSEw9OHxk=",
            "errorBeacon": "bam.nr-data.net",
            "agent": ""
        }
    </script>

    <script type="text/javascript">
        window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
            "ext": ".png",
            "source": {
                "concatemoji": "wp-includes/wp-emoji.js"
            }
        };
        ! function(a, b, c) {
            function d(a) {
                var c = b.createElement("canvas"),
                    d = c.getContext && c.getContext("2d");
                return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357, 56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1
            }

            function e(a) {
                var c = b.createElement("script");
                c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
            }
            var f, g;
            c.supports = {
                simple: d("simple"),
                flag: d("flag")
            }, c.DOMReady = !1, c.readyCallback = function() {
                c.DOMReady = !0
            }, c.supports.simple && c.supports.flag || (g = function() {
                c.readyCallback()
            }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
                "complete" === b.readyState && c.readyCallback()
            })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
        }(window, document, window._wpemojiSettings);
    </script>