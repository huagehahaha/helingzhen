!function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "undefined" == typeof document ? module.exports = b() : a.TmplInline_complain = b()
}(this, function() {
    var a = {}
      , b = function(a, b) {
        a = a || {};
        var c = "";
        return c += '<div class="complain-outer-container"> <div class="complain-container"> <div class="send-vfcode-text">验证码已发送至您的手机:<div class="pho-num-text"></div></div> <div class="validate-code-input-container border-1px"> <input class="validate-code-input" placeholder="请输入手机收到的验证码" type="tel"> </div> <div class="phone-warn-tips">您的帐号可能存在异常，请先完成手机验证！</div> <div class="phone-num-validate-input-container border-1px"> <input class="phone-num-validate-input" placeholder="请输入手机号码" type="tel"> </div> <div class="validate-fail-tips">请输入正确的手机号码</div> <button class="confirm-vfcode-btn">确认</button> <button class="get-vfcode-btn">获取验证码</button> <button class="complain-close-btn"></button> </div> <div class="success-alert">解封成功！</div> </div> '
    }
    ;
    return a.complain = "TmplInline_complain.complain",
    Tmpl.addTmpl(a.complain, b),
    a
}),
function(a, b) {
    a.Complain = b()
}(this, function() {
    function a(a, b) {
        DB.cgiHttp({
            url: v ? "/cgi-bin/bar/post/send_code" : "/cgi-bin/bar/admin/grievance",
            param: {
                phone_num: a
            },
            succ: function(a) {
                b && b(a)
            },
            err: function(a) {
                2003 === a.retcode ? Tip.show("未被拉黑，无法申诉", {
                    type: "warning"
                }) : 2007 === a.retcode ? Tip.show("短信验证码超时", {
                    type: "warning"
                }) : 2008 === a.retcode ? v && Tip.show("请在1分钟以后再进行验证", {
                    type: "warning"
                }) : 2009 === a.retcode ? Tip.show("请在1分钟以后再进行申诉", {
                    type: "warning"
                }) : 2005 === a.retcode ? e(v ? "该手机已绑定其他帐号，请重新输入新的手机号码" : "该手机已申请解封其他帐号，请重新输入新的手机号码") : 2012 === a.retcode && v ? Tip.show("验证次数太频繁，请稍后再试", {
                    type: "warning"
                }) : v ? Tip.show("验证失败,请稍后重试", {
                    type: "warning"
                }) : Tip.show("申诉失败,请稍后重试", {
                    type: "warning"
                })
            }
        })
    }
    function b(a, b, c) {
        var d = {
            phone_num: a
        };
        v ? (d.vcode_type = 2,
        d.vcode = b,
        d.type = A,
        d.code = B) : d.verify_code = b,
        DB.cgiHttp({
            url: v ? "/cgi-bin/bar/post/captcha/verify_v2" : "/cgi-bin/bar/admin/grievance_verify",
            param: d,
            succ: function(a) {
                0 === a.retcode && c && c(a.result)
            },
            err: function(a) {
                var b = a.retcode;
                2008 === b || v && 2007 === b ? Tip.show("验证码输入错误，请输入正确的验证码[" + b + "]", {
                    type: "warning"
                }) : Tip.show("验证失败[" + b + "]", {
                    type: "warning"
                })
            }
        })
    }
    function c(a) {
        q = a,
        k.addClass("waiting"),
        clearTimeout(z),
        d()
    }
    function d() {
        k.text(q + "秒后重新获取"),
        0 === q ? (k.removeClass("waiting"),
        k.text("获取验证码")) : (q--,
        z = setTimeout(d, 1e3))
    }
    function e(a) {
        l.text(a),
        l.show()
    }
    function f(d) {
        d = d || {},
        v = d.isInsidePage,
        w = d.userDefaultPhoneNum,
        x = d.onSuccess,
        A = d.type,
        B = d.code,
        s = $(".complain-wrap"),
        s.show(),
        s.html(Tmpl(window.TmplInline_complain.complain, {}, {}).toString()),
        g = $(".phone-num-validate-input"),
        h = $(".phone-num-validate-input-container"),
        i = $(".validate-code-input"),
        j = $(".validate-code-input-container"),
        k = $(".get-vfcode-btn"),
        l = $(".validate-fail-tips"),
        m = $(".pho-num-text"),
        n = $(".send-vfcode-text"),
        o = $(".confirm-vfcode-btn"),
        p = $(".success-alert"),
        t = $(".complain-close-btn"),
        u = $(".complain-wrap"),
        y = $(".phone-warn-tips"),
        v && y.show(),
        w ? g.val(w) : k.addClass("empty-input"),
        mqq && mqq.ui && mqq.ui.setWebViewBehavior({
            keyboardDisplayRequiresUserAction: !1
        }),
        setTimeout(function() {
            g.focus()
        }, 500);
        var f = localStorage.getItem("vfcode-waiting-start-time");
        if (f) {
            f = Number(f);
            var q, z = (Date.now() - f) / 1e3;
            60 > z && (q = 60 - z,
            c(~~q))
        }
        t.on("tap", function() {
            s.hide()
        }),
        u.on("touchmove", function(a) {
            a.preventDefault()
        }),
        g.on("input", function(a) {
            var b = $(a.target)
              , c = b.val();
            "" === c || 11 !== c.length ? k.addClass("empty-input") : k.removeClass("empty-input")
        }),
        k.on("tap", function() {
            k.hasClass("waiting") || k.hasClass("empty-input") || (k.addClass("active"),
            setTimeout(function() {
                return k.removeClass("active"),
                C.test(g.val()) ? (l.hide(),
                r = g.val(),
                void a(r, function() {
                    c(60),
                    localStorage.setItem("vfcode-waiting-start-time", Date.now()),
                    m.text(r),
                    n.show(),
                    h.hide(),
                    j.show(),
                    o.show(),
                    y.hide()
                })) : void e("请输入正确的手机号码")
            }, 500))
        }),
        o.on("tap", function() {
            var a = i.val();
            o.addClass("active"),
            a && setTimeout(function() {
                o.removeClass("active"),
                b(r, a, function(a) {
                    v ? (s.hide(),
                    x && x(a)) : (p.show(),
                    setTimeout(function() {
                        -1 !== mqq.compare("4.6") ? mqq.ui.popBack() : window.history && window.history.back(),
                        mqq.dispatchEvent("complainSuccess", {})
                    }, 2e3))
                })
            }, 500)
        })
    }
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C = /^\d{11}$/;
    return {
        init: f
    }
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "undefined" == typeof document ? module.exports = b() : a.TmplInline_checkcode = b()
}(this, function() {
    var a = {}
      , b = function(a, b) {
        a = a || {};
        var c = "";
        return c += '<div class="checkcode-content"> <div class="close-checkcode"></div> <h3 class="content-title">请输入验证码</h3> <div class="content-middle"> <img class="content-img" src=""> <input class="content-input" id="inputCheckcode" placeholder="验证码" type="email" maxlength="6"/> <a class="content-button" href="javascript:;" id="submitCheckcode">确定</a> </div> </div> '
    }
    ;
    return a.frame = "TmplInline_checkcode.frame",
    Tmpl.addTmpl(a.frame, b),
    a
}),
function(a, b) {
    a.Checkcode = b(a.$, a.Tmpl)
}(this, function(a, b) {
    function c() {
        i = a('<div class="checkcode"></div>'),
        a(document.body).append(i),
        i.on("tap", function(a) {
            a.target === i[0] && g(),
            "close-checkcode" === a.target.className && g()
        }),
        j = !0
    }
    function d() {
        i.find(".content-img").attr("src", "http://captcha.qq.com/getimage?aid=716013036&v=" + Math.random())
    }
    function e(e, f, g) {
        j || c(),
        Q.monitor(594773),
        i.html(""),
        a(document).on("touchmove", h),
        b(window.TmplInline_checkcode.frame, {}).appendTo(i),
        setTimeout(function() {
            i.find("#inputCheckcode").focus()
        }, 500),
        i.show(),
        d(),
        i.find(".content-button").on("tap", function() {
            l(e, i.find("#inputCheckcode").val(), f, g)
        }),
        i.find(".content-img").on("tap", function() {
            d()
        })
    }
    function f() {
        var c = a('<div class="error-code alert"></div>')
          , e = window.TmplInline_alert.frame
          , f = {
            title: "",
            content: "验证码输入错误，请重新输入",
            confirm: "重新输入",
            cancel: "取消"
        };
        a(document.body).find(".error-code").remove(),
        a(document.body).append(c),
        b(e, f).appendTo(c),
        c.find(".btn").on("tap", function() {
            i.find("#inputCheckcode").focus(),
            i.find("#inputCheckcode").val(""),
            d(),
            c.hide()
        }),
        i.siblings(".error-code").find(".frame").css("top", "120px").css("position", "fixed")
    }
    function g() {
        i.hide(),
        i.find("#inputCheckcode").blur(),
        a(document).off("touchmove", h)
    }
    function h(a) {
        a.preventDefault()
    }
    var i, j = !1, k = {
        festival_verify: "/cgi-bin/bar/cwact/post/captcha/verify_v2",
        verify_v2: "/cgi-bin/bar/post/captcha/verify_v2",
        verify: "/cgi-bin/bar/post/captcha/verify",
        report: "/cgi-bin/bar/admin/jubao"
    }, l = function(b, c, d, e) {
        var h = {
            type: "POST",
            url: k[b],
            param: {
                vcode: c
            },
            succ: function(a) {
                0 === a.retcode ? (g(),
                d && d(a.result)) : f()
            },
            err: function() {
                f()
            }
        };
        "report" === b && (h.ssoCmd = "jubao"),
        a.extend(h.param, e),
        console.log("jubao cgi http:", h),
        DB.cgiHttp(h)
    }
    ;
    return {
        show: e
    }
}),
function(a, b) {
    a.Publish = b(a.$, a.DB)
}(this, function() {
    function a(a, b) {
        return a += "",
        new Array(b > a.length ? b - a.length + 1 : 0).join(0) + a
    }
    function b(a, b) {
        i[a] = $.extend({}, i[a], b)
    }
    function c(a) {
        return mqq && parseInt(mqq.QQVersion) > 0 && mqq.compare("5.2") < 0 ? void Alert.show("", "抱歉！由于您的手机QQ版本过低，\n敬请升级后再使用", {
            cancel: "确认",
            confirm: "立即升级",
            confirmAtRight: !0,
            callback: function() {
                mqq.ui.openUrl({
                    url: "http://im.qq.com/immobile/index.html",
                    target: 1,
                    style: 3
                })
            }
        }) : (a = a || {},
        k = a.pubulishType || "pub",
        n = $.extend({}, h, i[k], a.config || {}),
        p = $.extend({}, a),
        p.replyMode = "pub" !== k,
        v = a,
        q = a.isReply,
        a.onhidden && (v.onhidden = a.onhidden,
        v.ondestroy = v.onhidden),
        void (y || (l = {
            pub: "pub_page",
            reply: "reply_page",
            comment_reply: "two_comment"
        }[k],
        r = a.fromType || "home",
        "nearby" === r && (l = "nearby_page"),
        "comment_reply" === k && (u = "detail" === a.page ? "floor" === a.action ? 1 : 0 : "floor" === a.action ? 3 : 2),
        u = a.postType,
        x = !1,
        "nearby" === r ? e(a) : D(function() {
            a.preventDefaultUI || e(a)
        }))))
    }
    function d(a, b) {
        var c = b.add_credits
          , d = b.new_title
          , e = b.new_level;
        a = parseInt(a);
        var f = mqq.compare("5.3") > -1;
        1 === a ? (mqq.iOS || mqq.android && f) && ("barindex" === r ? localStorage.setItem("upgrade_tip_info", e + "|" + c + "|" + d) : Tip.show("发表成功" + (c > 0 ? "，经验值+" + c : ""), {
            type: "ok"
        }),
        mqq.dispatchEvent("publish_post")) : f && Tip.show("回复成功" + (c > 0 ? "，经验值+" + c : ""), {
            type: "ok"
        })
    }
    function e(a) {
        var b, c = {
            pub: "GroupTribePublish",
            reply: "GroupTribeReply",
            comment_reply: "GroupTribeComment"
        }[k];
        if ("comment_reply" === k)
            b = "回复 " + a.nick_name;
        else if ("reply" === k)
            b = mqq.iOS && void 0 !== a.nick_name ? "回复 " + a.nick_name : "发表评论";
        else {
            b = "内容，" + n.minLength + "-" + n.maxLength + "个字";
            var e = "";
            o && a.requireType && (o.requireType = a.requireType),
            o && a.optionType && (o.optionType = a.optionType),
            o && o.requireType && (e = "必须带" + {
                1: "图片",
                2: "录音",
                4: "音乐",
                8: "视频"
            }[o.requireType]),
            2 & a.flag ? b += "(本部落所有发言将匿名发表" + (e ? "，且" + e : "") + ")" : e && (b += "(本部落" + e + ")")
        }
        var f = n;
        f.maxContentLength = n.maxLength,
        f.minContentLength = n.minLength,
        f.titlePlaceholder = "标题，" + n.minTitleLength + "-" + n.maxTitleLength + "个字",
        f.contentPlaceholder = b,
        f.bid = a.bid,
        f.pid = a.pid,
        f.cid = a.cid,
        f.rid = a.rid,
        f.flag = a.flag,
        f.barName = a.barName,
        f.extparam = f.extparam || {},
        f.extparam.father_pid = a.father_pid,
        f.needCategory = !1,
        $(document.body).addClass("native-" + k),
        $.extend(f, o),
        f.options = {
            audio: {
                cgi: "http://upload.buluo.qq.com/cgi-bin/bar/upload/base64image",
                maxRecord: 123,
                data: {
                    aaa: "bb",
                    ccc: "ddd"
                }
            },
            pic: {
                cgi: "http://upload.buluo.qq.com/cgi-bin/bar/upload/meida",
                data: {
                    aaa: "bb",
                    ccc: "ddd"
                }
            }
        };
        var g = {
            name: c,
            animation: 1001,
            options: f,
            onclose: mqq.callback(function(b) {
                $(document.body).removeClass("native-" + k);
                var c = a.succ;
                if (Publish.destroy(),
                0 === b.code) {
                    A(9),
                    "string" == typeof b.data && (b.data = JSON.parse(b.data));
                    var e = a.cid ? 3 : a.pid ? 2 : 1;
                    if (console.log(b.data.result),
                    b.data.result.sms_vflag)
                        b.data.result.sms_has_phone && (t = b.data.result.sms_phone),
                        setTimeout(function() {
                            window.Complain.init({
                                isInsidePage: !0,
                                userDefaultPhoneNum: t,
                                type: p.cid ? 3 : p.pid ? 2 : 1,
                                code: b.data.result.code,
                                onSuccess: function(a) {
                                    $.extend(b.data.result, a),
                                    d(e, b.data.result),
                                    c && c(b.data.result)
                                }
                            })
                        }, 200);
                    else if (b.data.result.vflag) {
                        var f = "verify_v2";
                        Checkcode.show(f, function(a) {
                            $.extend(b.data.result, a),
                            d(e, b.data.result),
                            c && c(b.data.result)
                        }, {
                            type: e,
                            code: b.data.result.code
                        })
                    } else
                        d(e, b.data.result),
                        c && c(b.data.result)
                } else
                    A(-1 === b.code ? 13 : 8)
            }, !1, !0)
        };
        "comment_reply" === k && (g.viewType = "popWindow"),
        window.usePublish = !0,
        mqq.ui.openView(g)
    }
    function f() {
        v.ondestroy && v.ondestroy()
    }
    function g(a, b, c) {
        var d = {
            bid: p.bid || 10020,
            lat: 0,
            lon: 0,
            coordinate: 1,
            uid: 0
        };
        c.params && $.extend(d, c.params);
        var e = a
          , f = b
          , g = []
          , h = {
            type: "POST",
            url: "/cgi-bin/bar/post/publish_v2",
            param: d,
            succ: function(a) {
                a.result.sms_vflag ? (a.result.sms_has_phone && (t = a.result.sms_phone),
                window.Complain.init({
                    isInsidePage: !0,
                    userDefaultPhoneNum: t,
                    type: p.cid ? 3 : p.pid ? 2 : 1,
                    code: a.result.code,
                    onSuccess: function(b) {
                        $.extend(a.result, b),
                        c.callback && c.callback(a)
                    }
                })) : a.result.vflag ? Checkcode.show("verify_v2", function(b) {
                    $.extend(a.result, b),
                    c.callback && c.callback(a)
                }, {
                    type: p.cid ? 3 : p.pid ? 2 : 1,
                    code: a.result.code
                }) : c.callback && c.callback(a)
            },
            err: function(a) {
                var b = "";
                100006 === a.retcode && parseInt(mqq.QQVersion) > 0 && mqq.compare("5.2") < 0 ? Alert.show("", "抱歉！由于您的手机QQ版本过低，\n敬请升级后再使用", {
                    cancel: "确认",
                    confirm: "立即升级",
                    confirmAtRight: !0,
                    callback: function() {
                        mqq.ui.openUrl({
                            url: "http://im.qq.com/immobile/index.html",
                            target: 1,
                            style: 3
                        })
                    }
                }) : (b = 99999 === a.retcode ? "您的操作太频繁，请稍后再试" : 214 === a.retcode ? "内容中含有敏感词汇，请重新输入" : 215 === a.retcode ? "标题中含有敏感词汇，请重新输入" : 4002 === a.retcode ? "发表内容重复度太高，请重新输入" : 100117 === a.retcode ? "内容字数不满足要求" : 100118 === a.retcode ? "标题字数不满足要求" : 10000188 === a.retcode ? "内容中含有恶意链接，请重新输入" : 10 === a.retcode || 4008 === a.retcode ? "该评论或该话题已被删除" : 100600 === a.retcode ? "您暂时无权限在本部落发帖" : a.msg ? a.msg : "发表失败，请稍后再试",
                Tip.show(b, {
                    type: "warning"
                })),
                A(8),
                publishState = 0
            }
        };
        p.cid ? (d.pid = p.pid,
        d.cid = p.cid,
        d.comment = encodeURIComponent(JSON.stringify({
            content: f
        })),
        p.rid && (d.target_rid = p.rid),
        h.url = "/cgi-bin/bar/post/recomment") : p.pid ? (d.pid = p.pid,
        p.ref_cid && (d.ref_cid = p.ref_cid),
        d.comment = encodeURIComponent(JSON.stringify({
            content: f,
            pic_list: g
        })),
        h.url = "/cgi-bin/bar/post/comment_v2") : (d.title = encodeURIComponent(e),
        d.post = encodeURIComponent(JSON.stringify({
            content: f,
            pic_list: g
        }))),
        DB.cgiHttp(h)
    }
    var h = {
        needLocation: !1,
        needCategory: !1,
        needPhoto: !1,
        needTitle: !1,
        needFace: !0,
        photoOrContent: !1,
        needCancelBtn: !1,
        contentPlaceholder: "",
        maxLength: 700,
        minLength: 10,
        maxTitleLength: 25,
        minTitleLength: 4
    }
      , i = {
        pub: {
            needLocation: !0,
            needCategory: !0,
            needPhoto: !0,
            needTitle: !0
        },
        reply: {
            needLocation: !1,
            needPhoto: !0,
            photoOrContent: !0,
            needCancelBtn: !0,
            minLength: 2
        },
        comment_reply: {
            needCancelBtn: !0,
            minLength: 2
        }
    }
      , j = navigator.userAgent.match(/\bMicroMessenger\/([\d\.]+)/);
    j && (i.reply.needPhoto = !1);
    var k, l, m, n, o, p, q, r, s, t, u, v = {}, w = "http://xiaoqu.qq.com/mobile/", x = !1, y = !1, z = {
        1: {
            action: "visit"
        },
        2: {
            action: "Clk_un_text"
        },
        3: {
            action: "Clk_un_nottext"
        },
        4: {
            action: "input_name"
        },
        5: {
            action: "input_text"
        },
        6: {
            action: "Clk_pic"
        },
        7: {
            action: "pub_fail_rule"
        },
        8: {
            action: "pub_fail_other"
        },
        9: {
            action: "pub_suc"
        },
        10: {
            action: "Clk_choose"
        },
        11: {
            action: "Clk_place"
        },
        12: {
            action: "Clk_pub"
        },
        13: {
            action: "Clk_un"
        },
        14: {
            action: "refuse_rank",
            module: "tribe_hp"
        },
        15: {
            action: "refuse_rank",
            module: "post_detail"
        },
        16: {
            action: "pub_fail_number"
        },
        17: {
            action: "exp_comment"
        }
    }, A = function(a, b, c) {
        var d = {
            opername: "Grp_tribe",
            module: l,
            ver1: p && p.bid
        };
        p && p.pid && (d.obj1 = p.pid),
        "number" == typeof u && (d.ver3 = u);
        for (var e in z[a])
            z[a].hasOwnProperty(e) && (d[e] = z[a][e]);
        for (e in c)
            c.hasOwnProperty(e) && (d[e] = c[e]);
        Q.tdw(d)
    }
    , B = function(a) {
        var b = {
            type: "POST",
            url: "/cgi-bin/bar/post/publishable_v2",
            localCache: !1,
            cacheKey: Login.getUin() + "-publishable_v2-" + a.param.bid + "-" + a.param.pub_type,
            cacheTimeout: 6e5,
            cacheVersion: "1",
            update: null 
        };
        a = $.extend({}, b, a),
        (a.param || (a.param = {})).version = mqq.QQVersion,
        DB.cgiHttp(a)
    }
    , C = function(a, b) {
        var c = !0;
        return a && 2 === parseInt(a.requireType, 10) ? mqq && mqq.compare("5.2") < 0 && !b && (Alert.show("", "本部落必须发表语音，即将在新版本支持，敬请期待", {
            confirm: "我知道了"
        }),
        c = !1) : a && 4 === parseInt(a.requireType) ? mqq && mqq.compare("5.2") < 0 && !b && (Alert.show("", "本部落必须发表音乐，即将在新版本支持，敬请期待", {
            confirm: "我知道了"
        }),
        c = !1) : a && 8 === parseInt(a.requireType) && mqq && mqq.compare("5.3") < 0 && !b && (Alert.show("", "本部落必须发表视频，即将在新版本支持，敬请期待", {
            confirm: "我知道了"
        }),
        c = !1),
        c
    }
    , D = function(b) {
        function c(c) {
            x = !0;
            var d, e = c.result, g = parseInt(e.can_grievance, 10), h = e[p.replyMode ? "can_reply" : "can_send"], i = parseInt(e.vcode, 10);
            if (o = e && e.publish_condition || {},
            d = o.optionType,
            mqq && mqq.compare("5.3") < 0 && 8 === (8 & d) && (o.optionType = d - 8),
            C(o, p.replyMode))
                if ("post_limit" in e && (e.post_limit || (n.minLength = 1,
                n.minTitleLength = 1)),
                0 === h) {
                    var j = function() {
                        b && b(),
                        c.fromCache || (A(1),
                        "comment_reply" === k && A(17))
                    }
                    ;
                    0 === i ? j() : Checkcode.show("verify", function() {
                        setTimeout(function() {
                            j()
                        }, 500)
                    })
                } else {
                    "nearby" !== r && f();
                    var l = function() {
                        "nearby" === r && mqq.ui.popBack()
                    }
                    ;
                    if (1 === h) {
                        var q = parseInt(e.desc.split("-")[0])
                          , t = parseInt(e.desc.split("-")[1] % 86400);
                        Alert.show("本部落只有在" + a(Math.floor(q / 3600), 2) + ":" + a(Math.floor(q % 3600 / 60), 2) + "-" + (q > t ? "次日" : "") + a(Math.floor(t / 3600), 2) + ":" + a(Math.floor(t % 3600 / 60), 2) + "才能发表话题", "", {
                            confirm: "我知道了"
                        })
                    } else if (2 === h)
                        Alert.show("本部落只有相应地区的用户才能发表话题", "", {
                            confirm: "我知道了",
                            callback: l
                        });
                    else if (3 === h) {
                        var u = {
                            confirm: "我知道了",
                            callback: l
                        };
                        1 === g && (u.cancel = "我要申诉",
                        u.cancelCallback = function() {
                            Util.openUrl(w + "complain.html", !0)
                        }
                        ,
                        mqq.addEventListener("complainSuccess", function() {
                            s = null ,
                            localStorage.removeItem("localPubCheckData_" + (k || "reply"))
                        })),
                        m = !0,
                        Alert.show("您的帐号有可疑记录，暂时被系统封停", "", u)
                    } else if (4 === h) {
                        var v = e.publish_level || 8;
                        Alert.show("暂时没有发表权限", "您当前的QQ等级过低, QQ" + v + "级以上的用户才能" + {
                            pub: "发表新话题",
                            reply: "回复话题",
                            comment_reply: "评论话题"
                        }[k], {
                            confirm: "我知道了",
                            callback: l
                        }),
                        A("pub" !== k || c.fromCache ? 15 : 14)
                    } else
                        5 === h ? Alert.show("本部落内测中，只有群主或管理员才能发表话题", "", {
                            confirm: "我知道了",
                            callback: l
                        }) : 6 === h ? Alert.show(o.forbiddenMsg || "您暂时无权限在本部落发帖", "", {
                            confirm: "我知道了",
                            callback: l
                        }) : Alert.show(o.forbiddenMsg || "系统繁忙", "", {
                            confirm: "我知道了",
                            callback: l
                        })
                }
        }
        s ? (c(s),
        y = !1) : B({
            param: {
                bid: p.bid,
                pub_type: "pub" === k ? 0 : 1
            },
            succ: function(a) {
                c(a),
                y = !1
            },
            err: function() {
                y = !1
            }
        })
    }
    , E = function(a) {
        a = a || {};
        var b, c = a.pubulishType, d = $.extend({}, a), e = $.cookie("uin"), f = "localPubCheckData_" + (c || "reply");
        return e && localStorage.getItem(f) && (b = JSON.parse(localStorage.getItem(f))),
        b && b.uin === e && b.bid === d.bid && b.timespan + 36e5 >= (new Date).valueOf() ? void (s = b.data) : void B({
            param: {
                bid: d.bid,
                pubulishType: c,
                pub_type: "pub" === c ? 0 : 1
            },
            noNeedLogin: !0,
            succ: function(a) {
                s = a,
                e && localStorage.setItem(f, JSON.stringify({
                    uin: e,
                    bid: d.bid,
                    timespan: (new Date).valueOf(),
                    data: s
                }))
            }
        })
    }
    ;
    return {
        init: c,
        destroy: f,
        setConfig: b,
        isNative: !0,
        getPreCheckData: E,
        sendData: function(a, b, c) {
            g(a, b, c || {})
        }
    }
}),
function() {
    var a, b = Util.queryString("bid") || Util.getHash("bid"), c = "", d = ["barindex.html", "article_detail.html", "pho_detail.html"];
    for (a = 0; a < d.length; a++)
        if (location.href.toLowerCase().indexOf(d[a]) >= 0) {
            c = "pub";
            break
        }
    b && window.Publish.getPreCheckData({
        bid: b,
        pubulishType: c
    })
}();
