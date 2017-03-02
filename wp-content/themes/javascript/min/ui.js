function loadSite() {
    $("#loading-mask").fadeOut(950, function() {
        var e = $(".to-box").html();
        $(this).remove(), loadRunning = !0, browserMobile || scrollLoading(), $(".logo", $header).addClass("flickerReverse"), setTimeout(function() {
            $section.addClass("flickerIn"), browserMobile ? $(".to-load, .floating-text, .linethrough, #section-navigation, .block .bottom").addClass("loaded") : scrollLoading(), setTimeout(function() {
                $(".to-box").each(function() {
                    loadRunning = !1, $ajaxBoxContent.html(e), openSubPage()
                }), checkAnimState(), checkPitch(), mouseMotion(), setTimeout(function() {
                    scrollIcon()
                }, 1250)
            }, 450), $ajaxContent.addClass("loaded")
        }, 1e3)
    }), $wrapper.addClass("site-loaded")
}

function checkUrl() {
    var e = window.location.href,
        t = window.location.href,
        i = php_array.blog_url + "/";
    $("nav ul li.active", $header).removeClass("active"), 1 == $("#section-event").length ? (e = $("nav ul li:eq(3) a", $header).attr("href"), $("nav ul li:eq(3)", $header).addClass("active")) : ($("nav ul li a", $header).each(function() {
        e.indexOf($(this).attr("href")) > -1 && ($(this).parent().addClass("active"), e = $(this).attr("href"))
    }), $("nav ul li.active", $header).length < 1 && (e = php_array.blog_url + "/", "en" == php_array.blog_lang && (e += "en/"))), $wrapper.attr("data-current-page", e), $header.removeClass("opened"), $("#background .img > li").each(function() {
        var e = $(this),
            t = e.attr("data-section");
        $("#" + t).length > 0 ? e.addClass("active") : e.removeClass("active")
    }), $header.removeClass("opened"), $("#load-mask-section li").each(function() {
        var e = $(this),
            t = e.attr("data-section");
        $("#" + t).length > 0 ? setTimeout(function() {
            e.addClass("active")
        }, 200) : e.removeClass("active")
    })
}

function loadSubPage(e) {
    $(".overlay", $box).addClass("opened"), animRunning || (animRunning = !0, loadRunning = !1, $.ajax({
        url: e,
        type: "get",
        data: {
            action: "ajax_change_page",
            url: e,
            request_type: "ajax"
        },
        success: function(t) {
            $ajaxBoxContent.html(t), imagesLoaded($ajaxBoxContent, function() {
                openSubPage()
            });
            var i = $(".page-title", $ajaxBoxContent).text();
            if (i != php_array.blog_name) var a = i + " - " + php_array.blog_name;
            else var a = php_array.blog_name;
            History.pushState(null, a, e)
        },
        error: function(e, t, i) {
            var a = php_array.blog_url + "/";
            "en" == php_array.blog_lang && (a += "en/"), window.location.href = a
        }
    })), checkSubpage()
}

function openSubPage() {
    $section.css({
        position: "fixed",
        top: -currentScroll
    }).attr("data-top", currentScroll).addClass("fixed"), $("html,body").scrollTop(0), $box.show(), positionContent(), 1 == $("#event-slider").length && (InfiniteSliderEvent = new InfiniteSlider($("#event-slider"), 1250, 3e3, "slide", "easeInOutQuart", !1, !1), $('.gallery .slick-slider .slick-slide[data-active="true"]').length > 0 && (imgIndex = $('.gallery .slick-slider .slick-slide[data-active="true"]').attr("data-slide"), $(".slider-controls > li a").eq(imgIndex).trigger("click"))), $box.addClass("opened"), setTimeout(function() {
        animRunning = !1, loadRunning = !0, browserMobile ? $(".to-load", $box).addClass("loaded") : scrollLoading()
    }, 500), checkSubpage(), positionContent()
}

function closeSubPage() {
    animRunning || (animRunning = !0, $(".to-load", $box).removeClass("loaded"), $(".overlay", $box).removeClass("opened"), $box.removeClass("opened"), setTimeout(function() {
        $(".content").addClass("to-leave"), setTimeout(function() {
            $box.hide(), $(".content").removeClass("to-leave").removeClass("slider-artist"), checkSubpage(), $ajaxBoxContent.empty(), $section.css({
                position: "relative",
                top: 0
            }).removeClass("fixed").attr("style", ""), $("html,body").scrollTop(parseFloat($section.attr("data-top")));
            var e = $wrapper.attr("data-current-page"),
                t = $(".page-title", $ajaxContent).text();
            if (t != php_array.blog_name) var i = t + " - " + php_array.blog_name;
            else var i = php_array.blog_name;
            History.pushState(null, i, e), animRunning = !1
        }, 1e3)
    }, 500))
}

function checkAnimLoad() {
    setTimeout(function() {
        $("#load-mask-section ul li.active").hasClass("anim-done") && !$("#section-404").length ? loadRunning && $(".flickerIn #section-navigation, .flickerIn .floating-text, .linethrough, header .linethrough, .flickerIn .linethrough, .flickerIn .to-load, .flickerIn .block .bottom").each(function() {
            var e = $(this);
            1 == e.parents("header").length ? (e.removeClass("no-anim"), e.addClass("loaded")) : newScroll + .85 * $(window).height() > $(this).offset().top ? (e.removeClass("no-anim"), e.addClass("loaded")) : newScroll + $(window).height() < $(this).offset().top && (e.addClass("no-anim"), e.removeClass("loaded"))
        }) : setTimeout(function() {
            $("#section-404 .to-load, footer").addClass("loaded")
        }, 1250)
    }, 100)
}

function scrollIcon() {
    var e = $(window).width();
    !browserMobile && e > 980 && $ajaxContent.hasClass("loaded") && ($("#scroll-icon").css("opacity", "1"), $("#scroll-icon").css("transform", "translateY(0)"))
}

function checkAnimState() {
    var e = $(window).width();
    if (!browserMobile) {
        var t = $(".page-change");
        $("#load-mask-section ul li.active").hasClass("anim-done") || $("#section-404").length || ($("html").css("overflow", "hidden"), $("body").css("overflow", "auto"), $footer.css("visibility", "hidden"), $footer.css("opacity", "0")), setTimeout(function() {
            $wrapper.one("mousewheel", function(e) {
                $("#load-mask-section ul li.active").addClass("anim-done"), $("#scroll-icon").css("opacity", "0"), $("#load-mask-section ul li.active").hasClass("anim-done") && (setTimeout(function() {
                    $("html").css("overflow", ""), $("body").css("overflow", "")
                }, 1e3), setTimeout(function() {
                    t.show(), scrollContent(), positionContent(), setTimeout(function() {
                        $footer.css("visibility", "visible"), $footer.css("opacity", "1"), t.css("opacity", "1"), checkAnimLoad()
                    }, 150)
                }, 1700))
            }), $("section").on("click", function(e) {
                $("#load-mask-section ul li.active").addClass("anim-done"), $("#scroll-icon").css("opacity", "0"), $("#load-mask-section ul li.active").hasClass("anim-done") && (setTimeout(function() {
                    $("html").css("overflow", ""), $("body").css("overflow", "")
                }, 1e3), setTimeout(function() {
                    t.show(), scrollContent(), positionContent(), setTimeout(function() {
                        $footer.css("visibility", "visible"), $footer.css("opacity", "1"), t.css("opacity", "1"), checkAnimLoad()
                    }, 150)
                }, 1700))
            })
        }, 2e3)
    }
}

function checkBeforeAnimState() {
    var e = $(window).width();
    if (!browserMobile) {
        var t = $(".page-change");
        $("#load-mask-section ul li.active").hasClass("anim-done") || $("#section-404").length || ($("html").css("overflow", "hidden"), $("body").css("overflow", "auto"), $footer.css("visibility", "hidden"), $footer.css("opacity", "0"))
    }
}

function checkSubpage() {
    $("#artist-slider").length ? $(".content").addClass("slider-artist") : $(".content").removeClass("slider-artist")
}

function checkPitch() {
    $("#section-home").length ? ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .member-login-btn a").css("color", ""), $("#loader").css("background", "")) : $("#section-about").length ? ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .member-login-btn a").css("color", "#caa66d"), $("#loader").css("background", "#caa66d")) : $("#section-events").length ? ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .btn-arrow span, .date, .member-login-btn a").css("color", "#699eda"), $(".btn-full, #loader").css("background", "#699eda"), $("#loader").css("background", "#699eda")) : $("#section-artists").length ? ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .btn-arrow span, .date, .member-login-btn a").css("color", "#cf7a80"), $("#loader").css("background", "#cf7a80")) : $("#section-photos").length ? ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .btn-arrow span, .date, .member-login-btn a").css("color", "#6ca7a9"), $("#loader").css("background", "#6ca7a9")) : $("#section-contact").length && ($("#section-navigation a, #header-buttons a, #header-buttons, #copyright a, .btn-arrow span, .date, .member-login-btn a").css("color", "#817cbd"), $("#loader").css("background", "#817cbd"))
}

function positionContent() {
    if ($("#load-mask-section .img-slide").width($(window).width()), $(".img-fit").each(function() {
            var e = $(this),
                t = $(this).parent(),
                i = t.width(),
                a = t.height(),
                o = $(this).attr("data-size").split("|"),
                n = o[0] / o[1],
                s = i / a;
            e.hasClass("invert") ? s > n ? e.height(a).width(a * n).css("left", i / 2 - a * n / 2).css("top", "0") : e.width(i).height(i / n).css("left", "0").css("top", a / 2 - i / n / 2) : n > s ? e.height(a).width(a * n).css("left", i / 2 - a * n / 2).css("top", "0") : e.width(i).height(i / n).css("left", "0").css("top", a / 2 - i / n / 2)
        }), $("#load-mask-section ul li.active").hasClass("anim-done") && $pageChange.show(), $("section.fixed").each(function() {
            var e = $(this);
            e.width($wrapper.width() - parseFloat(e.css("margin-left")) - parseFloat(e.css("margin-right")) - parseFloat(e.css("padding-right")))
        }), $(".content", box).css({
            "min-height": $(window).height()
        }), $ajaxContent.css({
            "min-height": $(window).height() - $footer.outerHeight() - parseFloat($section.css("margin-top"))
        }), $("header .bottom nav, footer nav").each(function() {
            var e = 0;
            $("> ul > li", this).each(function() {
                e += $(this).width()
            }), $("> ul > li + li", this).css("padding-left", Math.floor(($(this).width() - e) / ($("> ul > li", this).length - 1)))
        }), $(".linethrough").each(function() {
            $("span", this).css("background-size", $(this).width() + "px 70%")
        }), $(".twitter-slider").width($section.width()).each(function() {
            var e = $section.width() - 80;
            $(window).width() >= 1400 ? $(".twitter-slider .slick-slide > div").width(e / 3) : $(window).width() >= 600 ? $(".twitter-slider .slick-slide > div").width(e / 2) : $(".twitter-slider .slick-slide > div").width(e + 40);
            var t = 0;
            $(".slick-slide p", this).each(function() {
                $(this).outerHeight() > t && (t = $(this).outerHeight())
            }), $(".slick-slide > div > div", this).height(t)
        }), $("#section-photos .slick-slider .slick-list").width($section.outerWidth()), $(window).width() < 1080) var e = .5;
    else var e = 1;
    var t = $(window).height() - (parseFloat($ajaxBoxContent.css("padding-top")) + parseFloat($ajaxBoxContent.css("padding-bottom"))),
        i = t * e;
    $("#section-event #event-slider").css({
        height: i
    }), scrollContent(), checkBeforeAnimState()
}

function scrollContent() {
    var e = $(document).height() - $(window).height();
    browserMobile ? newScroll = $(window).scrollTop() : "Safari" == whichBrs() || "Chrome" == whichBrs() ? newScroll = $("body").scrollTop() : newScroll = $("html,body").scrollTop(), browserMobile || (scrollLoading(), checkAnimLoad(), $(window).width() > 980 && (imgOverlay = Math.floor(scrollOverlay / 4), 15 == imgOverlay && (imgOverlay = 0, scrollOverlay = 0), $("#background > .overlay > li").css("transform", "translate3d(0, -" + 100 * imgOverlay + "%, 0)")), $(".floating-text").each(function() {
        $object = $(this);
        var e = 1,
            t = newScroll + $(window).height() - $object.offset().top;
        0 > t && (t = 0);
        var i = $(window).height() / 2,
            a = 0,
            o = 0;
        a = i > t ? -(i - t) / i : (t - i) / i;
        var o = 75 * e * a;
        $object.css("transform", "translateY(" + o + "px)")
    }), "none" == $box.css("display") && $("#section-navigation > nav > ul > li").each(function() {
        var t = $(this),
            i = t.index(),
            a = $(".block").eq(i),
            o = e - a.offset().top;
        if (o >= 0) var n = $(window).height() / 2 - 150,
            s = newScroll + $(window).height() / 2 - a.offset().top;
        else var n = $(window).height() - 150 + o,
            s = newScroll + ($(window).height() - 150) - a.offset().top;
        var r = s / n;
        0 > r && (r = 0), r > 1 && (r = 1), $(this).css({
            transform: "translate(0, -" + 200 * r + "px)"
        })
    })), currentScroll = newScroll
}

function scrollLoading() {
    loadRunning && $("header .to-load, #box .to-load").each(function() {
        var e = $(this);
        1 == e.parents("header").length ? (e.removeClass("no-anim"), e.addClass("loaded")) : newScroll + .85 * $(window).height() > $(this).offset().top ? (e.removeClass("no-anim"), e.addClass("loaded")) : newScroll + $(window).height() < $(this).offset().top && (e.addClass("no-anim"), e.removeClass("loaded"))
    })
}

function mouseMotion(e, t) {
    positionContent();
    var i = e / 2,
        a = t - e,
        o = {
            y: -1
        };
    $(window).width() > 981 && $(window).mousemove(function(e) {
        o.y = e.pageY - $(window).scrollTop();
        var t = o.y,
            n = Math.abs(t - i),
            s = n / i,
            r = Math.round(s * (a / 2)),
            l;
        l = t > i ? "-" : "+", 100 > s && $(".visible #fullscreen li.active img").css("top", "calc(50% + " + l + r + "px")
    })
}

function whichBrs() {
    var e = navigator.userAgent.toLowerCase();
    return -1 != e.indexOf("opera") ? "Opera" : -1 != e.indexOf("staroffice") ? "Star Office" : -1 != e.indexOf("webtv") ? "WebTV" : -1 != e.indexOf("beonex") ? "Beonex" : -1 != e.indexOf("chimera") ? "Chimera" : -1 != e.indexOf("netpositive") ? "NetPositive" : -1 != e.indexOf("phoenix") ? "Phoenix" : -1 != e.indexOf("firefox") ? "Firefox" : -1 != e.indexOf("chrome") ? "Chrome" : -1 != e.indexOf("safari") ? "Safari" : -1 != e.indexOf("skipstone") ? "SkipStone" : -1 != e.indexOf("msie") ? "Internet Explorer" : -1 != e.indexOf("netscape") ? "Netscape" : -1 != e.indexOf("mozilla/5.0") ? "Mozilla" : -1 != e.indexOf("/") ? "mozilla" != e.substr(0, e.indexOf("/")) ? navigator.userAgent.substr(0, e.indexOf("/")) : "Netscape" : -1 != e.indexOf(" ") ? navigator.userAgent.substr(0, e.indexOf(" ")) : navigator.userAgent
}
var browserIE = !1;
"Internet Explorer" == whichBrs() && (browserIE = !0);
var browserMobile = !1;
$("body").hasClass("layout-mobile") && (browserMobile = !0);
var $wrapper = $("#wrapper"),
    $header = $("header"),
    $section = $("section"),
    $footer = $("footer"),
    $ajaxContent = $("#ajax-content"),
    $ajaxBoxContent = $("#ajax-box-content"),
    $box = $("#box"),
    $pageChange = $(".page-change"),
    $autoChange = $("#load-mask-section ul"),
    $loader = $("#loader"),
    animRunning = !1,
    currentScroll = -1,
    InfiniteSliderEvent, imgOverlay = 0,
    loadRunning = !1,
    scrollOverlay = 0,
    currentUrl = window.location.href,
    urlFr = php_array.blog_url + "/",
    urlEn = php_array.blog_url + "/en/";
browserMobile ? $("#background .img > li").each(function() {
        var e = $(this),
            t = e.attr("data-section");
        $("#" + t).length > 0 ? e.addClass("active") : e.removeClass("active")
    }) : checkUrl(), $(document).ready(function() {
        browserMobile && browserIE || $("#loading-mask").imagesLoaded(function() {
            $(".dial").knob(), setTimeout(function() {
                $(".progress .icon").show(), $(".bg .dial").each(function() {
                    $(this).val(0).trigger("change"), $(this).parent().siblings(".dummy").css("margin-left", "0"), 0 == $(this).val() && $(this).parent().siblings(".dummy").animate({
                        marginLeft: -$(this).attr("data-goal-value")
                    }, {
                        duration: 1e3,
                        easing: "easeOutCubic",
                        step: function() {
                            var e = -Math.ceil(parseFloat($(this).css("margin-left")));
                            $(this).siblings("div").find(".dial").val(e).trigger("change")
                        },
                        complete: function() {
                            var e = -Math.ceil(parseFloat($(this).css("margin-left")));
                            $(this).siblings("div").find(".dial").val(e).trigger("change")
                        }
                    })
                })
            }, 1500), setTimeout(function() {
                $(".progress .icon").show(), $(".fg .dial").each(function() {
                    $(this).val(0).trigger("change"), $(this).parent().siblings(".dummy").css("margin-left", "0"), 0 == $(this).val() && $(this).parent().siblings(".dummy").animate({
                        marginLeft: -$(this).attr("data-goal-value")
                    }, {
                        duration: 5e3,
                        easing: "easeOutCubic",
                        step: function() {
                            var e = -Math.ceil(parseFloat($(this).css("margin-left")));
                            $(this).siblings("div").find(".dial").val(e).trigger("change")
                        },
                        complete: function() {
                            var e = -Math.ceil(parseFloat($(this).css("margin-left")));
                            $(this).siblings("div").find(".dial").val(e).trigger("change")
                        }
                    })
                })
            }, 2e3), $(".blur-container").css("opacity", "1"), $(".progress").css("opacity", "1"), $(".blur-1").css("opacity", "1"), setTimeout(function() {
                $("#logo-container").addClass("flickerReverse"), setTimeout(function() {
                    $("#logo-container").removeClass("flickerReverse"), setTimeout(function() {
                        $("#video-mask").show(), $("#logo-container").addClass("flickerReverse"), setTimeout(function() {
                            $(".bg").css("display", "none"), $(".progress").css("opacity", "0")
                        }, 2500)
                    }, 10)
                }, 3e3)
            }, 1e3), setTimeout(function() {
                window._wq = window._wq || [], _wq.push({
                    _all: function(e) {
                        e.play()
                    }
                })
            }, 5e3), $("#btn-skip").on("click", function() {
                $("#loading-mask video").animate({
                    volume: 0
                }, 450), $("#loading-mask video").fadeOut(), loadSite()
            }), setTimeout(function() {
                setTimeout(function() {
                    $("#loading-mask").addClass("done"), setTimeout(function() {
                        $("#btn-skip").addClass("btn-animate")
                    }, 500)
                }, 500)
            }, 7e3)
        })
    }), $(window).on("load", function() {
        browserMobile || urlFr != currentUrl && urlEn != currentUrl ? (positionContent(), loadSite()) : (positionContent(), setTimeout(function() {
            loadSite()
        }, 36e3))
    }), $(window).load(function() {
        $wrapper.on("click", "a", function() {
            var e = $(this),
                t = e.attr("href");
            if ("" != t && "_blank" != e.attr("target") && -1 == t.indexOf("mailto") && !e.hasClass("no-history")) {
                if (e.hasClass("btn-box")) return loadSubPage(t), !1;
                if (!browserMobile) return t != window.location.href && loadPage(t), !1
            }
        }), $(".overlay", $box).on("click", function() {
            return closeSubPage(), !1
        }), $(".btn-menu-mobile", $header).on("click", function(e) {
            $header.toggleClass("opened")
        }), $wrapper.on("click", "#section-navigation > nav > ul > li > a", function() {
            var e = $(this),
                t = e.parent().index(),
                i = $(".block").eq(t);
            return $("html,body").stop().animate({
                scrollTop: i.offset().top - 200
            }, 750, "easeInOutQuad"), !1
        }), $wrapper.on("click", "#artist-slider .btn-arrow", function() {
            var e = $(this),
                t = e.parents("#artist-slider"),
                i = e.parent().siblings("ul");
            if (!i.hasClass("animating")) {
                i.addClass("animating");
                var a = $("> li", i).length - 1,
                    o = $("> li.active", i).index();
                if (e.hasClass("btn-previous-slide")) {
                    t.addClass("no-anim"), t.removeClass("right").addClass("left");
                    var n = o - 1;
                    0 > n && (n = a)
                } else {
                    t.addClass("no-anim"), t.removeClass("left").addClass("right");
                    var n = o + 1;
                    n > a && (n = 0)
                }
                setTimeout(function() {
                    t.removeClass("no-anim"), $("> li", i).eq(o).removeClass("animated").addClass("leaving"), $("> li", i).eq(n).addClass("animated active"), setTimeout(function() {
                        i.removeClass("animating"), $("> li", i).eq(o).removeClass("active").removeClass("leaving")
                    }, 950)
                }, 50)
            }
            return !1
        }), $wrapper.on("click", "#artist-slider ul", function() {}), $(".slick-slider").slick({
            centerMode: !1,
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: !0
        }), $wrapper.on("click", ".gallery .slick-slider .slick-slide", function() {
            $('.gallery .slick-slider .slick-slide[data-active="true"]').attr("data-active", "false"), $(this).attr("data-active", "true")
        }), $wrapper.on("click", "#event-slider .slider li img", function() {
            $("#event-slider .slider-arrows .next a").trigger("click")
        }), $wrapper.on("click", "#section-faq .navigation a", function() {
            var e = $(this),
                t = e.parent().index(),
                i = $("#section-faq .questions > li").eq(t);
            return $("html,body").stop().animate({
                scrollTop: i.offset().top
            }, 750, "easeInOutQuad"), !1
        }), $(window).trigger("resize")
    }).resize(function() {
        positionContent()
    }).scroll(function() {
        scrollContent(), $(window).width() > 980 && (scrollOverlay += 1)
    }),
    function(e, t) {
        var i = e.History;
        i.Adapter.bind(e, "statechange", function() {
            var e = i.getState(),
                t = e.url,
                a = !0;
            animRunning || ($("nav ul li a", $header).each(function() {
                t == $(this).attr("href") && (a = !1)
            }), t != php_array.blog_url + "/" && t != php_array.blog_url + "/en/" || (a = !1), a ? loadSubPage(t) : ("block" == $box.css("display") && closeSubPage(), loadPage(t)))
        })
    }(window), $("body").on("click", "#section-photos .btn-image", function() {
        var e = $(this).attr("data-sliderfull"),
            t = $(".slider[data-sliderfull='" + e + "']"),
            i = $(".slider-transition"),
            a = $(".slider"),
            o = t.find("#fullscreen li.images"),
            n = t.find("#fullscreen li.images.active");
        if ($(window).width() > 981 && !browserMobile) {
            var s = o.first().find("img.lazy");
            void 0 === s.attr("src") && s.attr("src", s.attr("data-original")), setTimeout(function() {
                i.css("transition-duration", ""), i.css("transform", "translate3d(0%, 0, 0)")
            }, 50), setTimeout(function() {
                i.css("width", "0%")
            }, 1e3), setTimeout(function() {
                i.css("transition-duration", "0s"), i.css("width", ""), i.css("transform", "")
            }, 1750), s.on("load", function() {
                var e = o.eq(1).find("img.lazy");
                void 0 === e.attr("src") && e.attr("src", e.attr("data-original")), e.on("load", function() {
                    var e = o.last().find("img.lazy");
                    void 0 === e.attr("src") && e.attr("src", e.attr("data-original"))
                })
            }), $("body").css("overflow", "hidden"), t.show(), setTimeout(function() {
                t.addClass("visible"), $("section").css("z-index", "99998"), setTimeout(function() {
                    i.css("width", "0%")
                }, 740), setTimeout(function() {
                    $("ul#fullscreen", t).show(), setTimeout(function() {
                        n.css("transition-delay", "0s"), n.addClass("animated"), mouseMotion($(window).height(), $(".visible #fullscreen li.active img").height())
                    }, 10)
                }, 740)
            }, 10)
        } else setTimeout(function() {
            i.css("transition-duration", ""), i.css("transform", "translate3d(0%, 0, 0)")
        }, 50), setTimeout(function() {
            i.css("width", "0%")
        }, 1e3), setTimeout(function() {
            i.css("transition-duration", "0s"), i.css("width", ""), i.css("transform", "")
        }, 1750), t.show().css("margin-top", "60px"), setTimeout(function() {
            t.addClass("visible"), setTimeout(function() {
                i.css("width", "0%")
            }, 740), setTimeout(function() {
                $("ul#fullscreen", t).show(), setTimeout(function() {
                    n.css("transition-delay", "0s"), n.addClass("animated"), mouseMotion($(window).height(), $(".visible #fullscreen li.active img").height())
                }, 10)
            }, 740)
        }, 10), $("#fullscreen li.images img.lazy", t).each(function() {
            $(this).attr("src", $(this).attr("data-original"))
        })
    }), $("body").on("click", "#section-photos .slider ul", function(e) {
        var t = $(".slider-transition"),
            i = $(this).attr("data-sliderfull"),
            a = $(".slider[data-sliderfull='" + i + "']"),
            o = a.find("#fullscreen li.images.active"),
            n = $(".slider");
        $("body").css("overflow", ""), $(".slider").fadeOut().css("margin-top", ""), setTimeout(function() {
            $(".slider").removeClass("visible"), $(".slider").fadeOut(), $("ul#fullscreen").fadeOut(), t.css("width", ""), t.css("transform", ""), t.css("transition-duration", "0s"), o.css("transition-delay", ""), $("section").css("z-index", ""), $("#section-photos .slider ul li").removeClass("animated"), n.removeClass("right")
        }, 500)
    }), $("#section-photos .slider-arrows").click(function() {}), $wrapper.on("click", "#section-photos .btn-arrow-slide", function() {
        var e = $(this),
            t = $(".slider"),
            i = $(".slider-transition"),
            a = e.parent().siblings("ul");
        if (e.css("pointer-events", "none"), !a.hasClass("animating")) {
            a.addClass("animating");
            var o = $("> li", a).length - 1,
                n = $("> li.active", a).index();
            if (e.hasClass("btn-next-slide")) {
                t.addClass("no-anim"), t.removeClass("right").addClass("left");
                var s = n - 1,
                    r = n - 2;
                0 > s && (s = o, r = o - 1)
            } else {
                t.addClass("no-anim"), t.removeClass("left").addClass("right");
                var s = n + 1,
                    r = n + 2;
                s > o && (s = 0, r = 1)
            }
            var l = t.find(".active");
            l.css("transition-delay", ""), setTimeout(function() {
                t.hasClass("right") ? (i.css("transition-duration", ""), i.css("transform", "translate3d(0%, 0, 0)")) : (i.css("transition-duration", ""), i.css("transform", "translate3d(0%, 0, 0)"))
            }, 50), setTimeout(function() {
                t.hasClass("right") ? i.css("width", "0%") : i.css("width", "0%")
            }, 1e3), setTimeout(function() {
                t.hasClass("right") ? (i.css("transition-duration", "0s"), i.css("width", ""), i.css("transform", "")) : (i.css("transition-duration", "0s"), i.css("width", ""), i.css("transform", ""))
            }, 1750), setTimeout(function() {
                t.removeClass("no-anim");
                var i = $("> li", a).eq(s).find("img.lazy");
                void 0 === i.attr("src") && i.attr("src", i.attr("data-original"));
                var o = $("> li", a).eq(r).find("img.lazy");
                void 0 === o.attr("src") && o.attr("src", o.attr("data-original")), $("> li", a).eq(n).removeClass("animated").addClass("leaving"), $("> li", a).eq(s).addClass("animated active"), setTimeout(function() {
                    a.removeClass("animating"), $("> li", a).eq(n).removeClass("active").removeClass("leaving"), setTimeout(function() {
                        e.css("pointer-events", "auto")
                    }, 750), mouseMotion($(window).height(), $(".visible #fullscreen li.active img").height())
                }, 950)
            }, 50)
        }
        return !1
    });