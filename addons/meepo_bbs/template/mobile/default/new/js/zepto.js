var Zepto = function() {
    function a(a) {
        return null  == a ? String(a) : U[V.call(a)] || "object"
    }
    function b(b) {
        return "function" == a(b)
    }
    function c(a) {
        return null  != a && a == a.window
    }
    function d(a) {
        return null  != a && a.nodeType == a.DOCUMENT_NODE
    }
    function e(b) {
        return "object" == a(b)
    }
    function f(a) {
        return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
    }
    function g(a) {
        return "number" == typeof a.length
    }
    function h(a) {
        return D.call(a, function(a) {
            return null  != a
        })
    }
    function i(a) {
        return a.length > 0 ? x.fn.concat.apply([], a) : a
    }
    function j(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function k(a) {
        return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function l(a, b) {
        return "number" != typeof b || H[j(a)] ? b : b + "px"
    }
    function m(a) {
        var b, c;
        return F[a] || (b = E.createElement(a),
        E.body.appendChild(b),
        c = getComputedStyle(b, "").getPropertyValue("display"),
        b.parentNode.removeChild(b),
        "none" == c && (c = "block"),
        F[a] = c),
        F[a]
    }
    function n(a) {
        return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
            return 1 == a.nodeType ? a : void 0
        })
    }
    function o(a, b, c) {
        for (w in b)
            c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}),
            Z(b[w]) && !Z(a[w]) && (a[w] = []),
            o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
    }
    function p(a, b) {
        return null  == b ? x(a) : x(a).filter(b)
    }
    function q(a, c, d, e) {
        return b(c) ? c.call(a, d, e) : c
    }
    function r(a, b, c) {
        null  == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }
    function s(a, b) {
        var c = a.className
          , d = c && c.baseVal !== v;
        return b === v ? d ? c.baseVal : c : void (d ? c.baseVal = b : a.className = b)
    }
    function t(a) {
        var b;
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null  : /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a : b) : a
        } catch (c) {
            return a
        }
    }
    function u(a, b) {
        b(a);
        for (var c in a.childNodes)
            u(a.childNodes[c], b)
    }
    var v, w, x, y, z, A, B = [], C = B.slice, D = B.filter, E = window.document, F = {}, G = {}, H = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, I = /^\s*<(\w+|!)[^>]*>/, J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, L = /^(?:body|html)$/i, M = /([A-Z])/g, N = ["val", "css", "html", "text", "data", "width", "height", "offset"], O = ["after", "prepend", "before", "append"], P = E.createElement("table"), Q = E.createElement("tr"), R = {
        tr: E.createElement("tbody"),
        tbody: P,
        thead: P,
        tfoot: P,
        td: Q,
        th: Q,
        "*": E.createElement("div")
    }, S = /complete|loaded|interactive/, T = /^[\w-]*$/, U = {}, V = U.toString, W = {}, X = E.createElement("div"), Y = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, Z = Array.isArray || function(a) {
        return a instanceof Array
    }
    ;
    return W.matches = function(a, b) {
        if (!b || !a || 1 !== a.nodeType)
            return !1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c)
            return c.call(a, b);
        var d, e = a.parentNode, f = !e;
        return f && (e = X).appendChild(a),
        d = ~W.qsa(e, b).indexOf(a),
        f && X.removeChild(a),
        d
    }
    ,
    z = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }
    ,
    A = function(a) {
        return D.call(a, function(b, c) {
            return a.indexOf(b) == c
        })
    }
    ,
    W.fragment = function(a, b, c) {
        var d, e, g;
        return J.test(a) && (d = x(E.createElement(RegExp.$1))),
        d || (a.replace && (a = a.replace(K, "<$1></$2>")),
        b === v && (b = I.test(a) && RegExp.$1),
        b in R || (b = "*"),
        g = R[b],
        g.innerHTML = "" + a,
        d = x.each(C.call(g.childNodes), function() {
            g.removeChild(this)
        })),
        f(c) && (e = x(d),
        x.each(c, function(a, b) {
            N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
        })),
        d
    }
    ,
    W.Z = function(a, b) {
        return a = a || [],
        a.__proto__ = x.fn,
        a.selector = b || "",
        a
    }
    ,
    W.isZ = function(a) {
        return a instanceof W.Z
    }
    ,
    W.init = function(a, c) {
        var d;
        if (!a)
            return W.Z();
        if ("string" == typeof a)
            if (a = a.trim(),
            "<" == a[0] && I.test(a))
                d = W.fragment(a, RegExp.$1, c),
                a = null ;
            else {
                if (c !== v)
                    return x(c).find(a);
                d = W.qsa(E, a)
            }
        else {
            if (b(a))
                return x(E).ready(a);
            if (W.isZ(a))
                return a;
            if (Z(a))
                d = h(a);
            else if (e(a))
                d = [a],
                a = null ;
            else if (I.test(a))
                d = W.fragment(a.trim(), RegExp.$1, c),
                a = null ;
            else {
                if (c !== v)
                    return x(c).find(a);
                d = W.qsa(E, a)
            }
        }
        return W.Z(d, a)
    }
    ,
    x = function(a, b) {
        return W.init(a, b)
    }
    ,
    x.extend = function(a) {
        var b, c = C.call(arguments, 1);
        return "boolean" == typeof a && (b = a,
        a = c.shift()),
        c.forEach(function(c) {
            o(a, c, b)
        }),
        a
    }
    ,
    W.qsa = function(a, b) {
        var c, e = "#" == b[0], f = !e && "." == b[0], g = e || f ? b.slice(1) : b, h = T.test(g);
        return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    }
    ,
    x.contains = function(a, b) {
        return a !== b && a.contains(b)
    }
    ,
    x.type = a,
    x.isFunction = b,
    x.isWindow = c,
    x.isArray = Z,
    x.isPlainObject = f,
    x.isEmptyObject = function(a) {
        var b;
        for (b in a)
            return !1;
        return !0
    }
    ,
    x.inArray = function(a, b, c) {
        return B.indexOf.call(b, a, c)
    }
    ,
    x.camelCase = z,
    x.trim = function(a) {
        return null  == a ? "" : String.prototype.trim.call(a)
    }
    ,
    x.uuid = 0,
    x.support = {},
    x.expr = {},
    x.map = function(a, b) {
        var c, d, e, f = [];
        if (g(a))
            for (d = 0; d < a.length; d++)
                c = b(a[d], d),
                null  != c && f.push(c);
        else
            for (e in a)
                c = b(a[e], e),
                null  != c && f.push(c);
        return i(f)
    }
    ,
    x.each = function(a, b) {
        var c, d;
        if (g(a)) {
            for (c = 0; c < a.length; c++)
                if (b.call(a[c], c, a[c]) === !1)
                    return a
        } else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    return a;
        return a
    }
    ,
    x.grep = function(a, b) {
        return D.call(a, b)
    }
    ,
    window.JSON && (x.parseJSON = JSON.parse),
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        U["[object " + b + "]"] = b.toLowerCase()
    }),
    x.fn = {
        forEach: B.forEach,
        reduce: B.reduce,
        push: B.push,
        sort: B.sort,
        indexOf: B.indexOf,
        concat: B.concat,
        map: function(a) {
            return x(x.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return x(C.apply(this, arguments))
        },
        ready: function(a) {
            return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
                a(x)
            }, !1),
            this
        },
        get: function(a) {
            return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null  != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            return B.every.call(this, function(b, c) {
                return a.call(b, c, b) !== !1
            }),
            this
        },
        filter: function(a) {
            return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
                return W.matches(b, a)
            }))
        },
        add: function(a, b) {
            return x(A(this.concat(x(a, b))))
        },
        is: function(a) {
            return this.length > 0 && W.matches(this[0], a)
        },
        not: function(a) {
            var c = [];
            if (b(a) && a.call !== v)
                this.each(function(b) {
                    a.call(this, b) || c.push(this)
                });
            else {
                var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                this.forEach(function(a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return x(c)
        },
        has: function(a) {
            return this.filter(function() {
                return e(a) ? x.contains(this, a) : x(this).find(a).size()
            })
        },
        eq: function(a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !e(a) ? a : x(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !e(a) ? a : x(a)
        },
        find: function(a) {
            var b, c = this;
            return b = "object" == typeof a ? x(a).filter(function() {
                var a = this;
                return B.some.call(c, function(b) {
                    return x.contains(b, a)
                })
            }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
                return W.qsa(this, a)
            })
        },
        closest: function(a, b) {
            var c = this[0]
              , e = !1;
            for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a)); )
                c = c !== b && !d(c) && c.parentNode;
            return x(c)
        },
        parents: function(a) {
            for (var b = [], c = this; c.length > 0; )
                c = x.map(c, function(a) {
                    return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a),
                    a) : void 0
                });
            return p(b, a)
        },
        parent: function(a) {
            return p(A(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return p(this.map(function() {
                return n(this)
            }), a)
        },
        contents: function() {
            return this.map(function() {
                return C.call(this.childNodes)
            })
        },
        siblings: function(a) {
            return p(this.map(function(a, b) {
                return D.call(n(b.parentNode), function(a) {
                    return a !== b
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return x.map(this, function(b) {
                return b[a]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var c = b(a);
            if (this[0] && !c)
                var d = x(a).get(0)
                  , e = d.parentNode || this.length > 1;
            return this.each(function(b) {
                x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                x(this[0]).before(a = x(a));
                for (var b; (b = a.children()).length; )
                    a = b.first();
                x(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var c = b(a);
            return this.each(function(b) {
                var d = x(this)
                  , e = d.contents()
                  , f = c ? a.call(this, b) : a;
                e.length ? e.wrapAll(f) : d.append(f)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x(this).replaceWith(x(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var b = x(this);
                (a === v ? "none" == b.css("display") : a) ? b.show() : b.hide()
            })
        },
        prev: function(a) {
            return x(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return x(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null  : this.each(function(b) {
                var c = this.innerHTML;
                x(this).empty().append(q(this, a, b, c))
            })
        },
        text: function(a) {
            return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null  : this.each(function() {
                this.textContent = a === v ? "" : "" + a
            })
        },
        attr: function(a, b) {
            var c;
            return "string" == typeof a && b === v ? 0 == this.length || 1 !== this[0].nodeType ? v : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                if (1 === this.nodeType)
                    if (e(a))
                        for (w in a)
                            r(this, w, a[w]);
                    else
                        r(this, a, q(this, b, c, this.getAttribute(a)))
            })
        },
        removeAttr: function(a) {
            return this.each(function() {
                1 === this.nodeType && r(this, a)
            })
        },
        prop: function(a, b) {
            return a = Y[a] || a,
            b === v ? this[0] && this[0][a] : this.each(function(c) {
                this[a] = q(this, b, c, this[a])
            })
        },
        data: function(a, b) {
            var c = this.attr("data-" + a.replace(M, "-$1").toLowerCase(), b);
            return null  !== c ? t(c) : v
        },
        val: function(a) {
            return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(b) {
                this.value = q(this, a, b, this.value)
            })
        },
        offset: function(a) {
            if (a)
                return this.each(function(b) {
                    var c = x(this)
                      , d = q(this, a, b, c.offset())
                      , e = c.offsetParent().offset()
                      , f = {
                        top: d.top - e.top,
                        left: d.left - e.left
                    };
                    "static" == c.css("position") && (f.position = "relative"),
                    c.css(f)
                });
            if (0 == this.length)
                return null ;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function(b, c) {
            if (arguments.length < 2) {
                var d = this[0]
                  , e = getComputedStyle(d, "");
                if (!d)
                    return;
                if ("string" == typeof b)
                    return d.style[z(b)] || e.getPropertyValue(b);
                if (Z(b)) {
                    var f = {};
                    return x.each(Z(b) ? b : [b], function(a, b) {
                        f[b] = d.style[z(b)] || e.getPropertyValue(b)
                    }),
                    f
                }
            }
            var g = "";
            if ("string" == a(b))
                c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                    this.style.removeProperty(j(b))
                });
            else
                for (w in b)
                    b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
                        this.style.removeProperty(j(w))
                    });
            return this.each(function() {
                this.style.cssText += ";" + g
            })
        },
        index: function(a) {
            return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return a ? B.some.call(this, function(a) {
                return this.test(s(a))
            }, k(a)) : !1
        },
        addClass: function(a) {
            return a ? this.each(function(b) {
                y = [];
                var c = s(this)
                  , d = q(this, a, b, c);
                d.split(/\s+/g).forEach(function(a) {
                    x(this).hasClass(a) || y.push(a)
                }, this),
                y.length && s(this, c + (c ? " " : "") + y.join(" "))
            }) : this
        },
        removeClass: function(a) {
            return this.each(function(b) {
                return a === v ? s(this, "") : (y = s(this),
                q(this, a, b, y).split(/\s+/g).forEach(function(a) {
                    y = y.replace(k(a), " ")
                }),
                void s(this, y.trim()))
            })
        },
        toggleClass: function(a, b) {
            return a ? this.each(function(c) {
                var d = x(this)
                  , e = q(this, a, c, s(this));
                e.split(/\s+/g).forEach(function(a) {
                    (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                })
            }) : this
        },
        scrollTop: function(a) {
            if (this.length) {
                var b = "scrollTop" in this[0];
                return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
                    this.scrollTop = a
                }
                 : function() {
                    this.scrollTo(this.scrollX, a)
                }
                )
            }
        },
        scrollLeft: function(a) {
            if (this.length) {
                var b = "scrollLeft" in this[0];
                return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
                    this.scrollLeft = a
                }
                 : function() {
                    this.scrollTo(a, this.scrollY)
                }
                )
            }
        },
        position: function() {
            if (this.length) {
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = L.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat(x(a).css("margin-top")) || 0,
                c.left -= parseFloat(x(a).css("margin-left")) || 0,
                d.top += parseFloat(x(b[0]).css("border-top-width")) || 0,
                d.left += parseFloat(x(b[0]).css("border-left-width")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position"); )
                    a = a.offsetParent;
                return a
            })
        }
    },
    x.fn.detach = x.fn.remove,
    ["width", "height"].forEach(function(a) {
        var b = a.replace(/./, function(a) {
            return a[0].toUpperCase()
        });
        x.fn[a] = function(e) {
            var f, g = this[0];
            return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                g = x(this),
                g.css(a, q(this, e, b, g[a]()))
            })
        }
    }),
    O.forEach(function(b, c) {
        var d = c % 2;
        x.fn[b] = function() {
            var b, e, f = x.map(arguments, function(c) {
                return b = a(c),
                "object" == b || "array" == b || null  == c ? c : W.fragment(c)
            }), g = this.length > 1;
            return f.length < 1 ? this : this.each(function(a, b) {
                e = d ? b : b.parentNode,
                b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null ,
                f.forEach(function(a) {
                    if (g)
                        a = a.cloneNode(!0);
                    else if (!e)
                        return x(a).remove();
                    u(e.insertBefore(a, b), function(a) {
                        null  == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        }
        ,
        x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
            return x(a)[b](this),
            this
        }
    }),
    W.Z.prototype = x.fn,
    W.uniq = A,
    W.deserializeValue = t,
    x.zepto = W,
    x
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(a) {
    function b(a) {
        return a._zid || (a._zid = m++)
    }
    function c(a, c, f, g) {
        if (c = d(c),
        c.ns)
            var h = e(c.ns);
        return (q[b(a)] || []).filter(function(a) {
            return a && (!c.e || a.e == c.e) && (!c.ns || h.test(a.ns)) && (!f || b(a.fn) === b(f)) && (!g || a.sel == g)
        })
    }
    function d(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function e(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function f(a, b) {
        return a.del && !s && a.e in t || !!b
    }
    function g(a) {
        return u[a] || s && t[a] || a
    }
    function h(c, e, h, i, k, m, n) {
        var o = b(c)
          , p = q[o] || (q[o] = []);
        e.split(/\s/).forEach(function(b) {
            if ("ready" == b)
                return a(document).ready(h);
            var e = d(b);
            e.fn = h,
            e.sel = k,
            e.e in u && (h = function(b) {
                var c = b.relatedTarget;
                return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
            }
            ),
            e.del = m;
            var o = m || h;
            e.proxy = function(a) {
                if (a = j(a),
                !a.isImmediatePropagationStopped()) {
                    a.data = i;
                    var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                    return b === !1 && (a.preventDefault(),
                    a.stopPropagation()),
                    b
                }
            }
            ,
            e.i = p.length,
            p.push(e),
            "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
        })
    }
    function i(a, d, e, h, i) {
        var j = b(a);
        (d || "").split(/\s/).forEach(function(b) {
            c(a, b, e, h).forEach(function(b) {
                delete q[j][b.i],
                "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
            })
        })
    }
    function j(b, c) {
        return (c || !b.isDefaultPrevented) && (c || (c = b),
        a.each(y, function(a, d) {
            var e = c[a];
            b[a] = function() {
                return this[d] = v,
                e && e.apply(c, arguments)
            }
            ,
            b[d] = w
        }),
        (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)),
        b
    }
    function k(a) {
        var b, c = {
            originalEvent: a
        };
        for (b in a)
            x.test(b) || a[b] === l || (c[b] = a[b]);
        return j(c, a)
    }
    var l, m = 1, n = Array.prototype.slice, o = a.isFunction, p = function(a) {
        return "string" == typeof a
    }
    , q = {}, r = {}, s = "onfocusin" in window, t = {
        focus: "focusin",
        blur: "focusout"
    }, u = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents",
    a.event = {
        add: h,
        remove: i
    },
    a.proxy = function(c, d) {
        if (o(c)) {
            var e = function() {
                return c.apply(d, arguments)
            }
            ;
            return e._zid = b(c),
            e
        }
        if (p(d))
            return a.proxy(c[d], c);
        throw new TypeError("expected function")
    }
    ,
    a.fn.bind = function(a, b, c) {
        return this.on(a, b, c)
    }
    ,
    a.fn.unbind = function(a, b) {
        return this.off(a, b)
    }
    ,
    a.fn.one = function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }
    ;
    var v = function() {
        return !0
    }
      , w = function() {
        return !1
    }
      , x = /^([A-Z]|returnValue$|layer[XY]$)/
      , y = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function(a, b, c) {
        return this.on(b, a, c)
    }
    ,
    a.fn.undelegate = function(a, b, c) {
        return this.off(b, a, c)
    }
    ,
    a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c),
        this
    }
    ,
    a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c),
        this
    }
    ,
    a.fn.on = function(b, c, d, e, f) {
        var g, j, m = this;
        return b && !p(b) ? (a.each(b, function(a, b) {
            m.on(a, c, d, b, f)
        }),
        m) : (p(c) || o(e) || e === !1 || (e = d,
        d = c,
        c = l),
        (o(d) || d === !1) && (e = d,
        d = l),
        e === !1 && (e = w),
        m.each(function(l, m) {
            f && (g = function(a) {
                return i(m, a.type, e),
                e.apply(this, arguments)
            }
            ),
            c && (j = function(b) {
                var d, f = a(b.target).closest(c, m).get(0);
                return f && f !== m ? (d = a.extend(k(b), {
                    currentTarget: f,
                    liveFired: m
                }),
                (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
            }
            ),
            h(m, b, e, d, c, j || g)
        }))
    }
    ,
    a.fn.off = function(b, c, d) {
        var e = this;
        return b && !p(b) ? (a.each(b, function(a, b) {
            e.off(a, c, b)
        }),
        e) : (p(c) || o(d) || d === !1 || (d = c,
        c = l),
        d === !1 && (d = w),
        e.each(function() {
            i(this, b, d, c)
        }))
    }
    ,
    a.fn.trigger = function(b, c) {
        return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b),
        b._args = c,
        this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
        })
    }
    ,
    a.fn.triggerHandler = function(b, d) {
        var e, f;
        return this.each(function(g, h) {
            e = k(p(b) ? a.Event(b) : b),
            e._args = d,
            e.target = h,
            a.each(c(h, b.type || b), function(a, b) {
                return f = b.proxy(e),
                e.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        f
    }
    ,
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }),
    ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.each(function() {
                try {
                    this[b]()
                } catch (a) {}
            }),
            this
        }
    }),
    a.Event = function(a, b) {
        p(a) || (b = a,
        a = b.type);
        var c = document.createEvent(r[a] || "Events")
          , d = !0;
        if (b)
            for (var e in b)
                "bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0),
        j(c)
    }
}(Zepto),
function(a) {
    function b(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d),
        !e.isDefaultPrevented()
    }
    function c(a, c, d, e) {
        return a.global ? b(c || s, d, e) : void 0
    }
    function d(b) {
        b.global && 0 === a.active++ && c(b, null , "ajaxStart")
    }
    function e(b) {
        b.global && !--a.active && c(b, null , "ajaxStop")
    }
    function f(a, b) {
        var d = b.context;
        return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
    }
    function g(a, b, d, e) {
        var f = d.context
          , g = "success";
        d.success.call(f, a, g, b),
        e && e.resolveWith(f, [a, g, b]),
        c(d, f, "ajaxSuccess", [b, d, a]),
        i(g, b, d)
    }
    function h(a, b, d, e, f) {
        var g = e.context;
        e.error.call(g, d, b, a),
        f && f.rejectWith(g, [d, b, a]),
        c(e, g, "ajaxError", [d, e, a || b]),
        i(b, d, e)
    }
    function i(a, b, d) {
        var f = d.context;
        d.complete.call(f, b, a),
        c(d, f, "ajaxComplete", [b, d]),
        e(d)
    }
    function j() {}
    function k(a) {
        return a && (a = a.split(";", 2)[0]),
        a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
    }
    function l(a, b) {
        return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }
    function m(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
        !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data),
        b.data = void 0)
    }
    function n(b, c, d, e) {
        return a.isFunction(c) && (e = d,
        d = c,
        c = void 0),
        a.isFunction(d) || (e = d,
        d = void 0),
        {
            url: b,
            data: c,
            success: d,
            dataType: e
        }
    }
    function o(b, c, d, e) {
        var f, g = a.isArray(c), h = a.isPlainObject(c);
        a.each(c, function(c, i) {
            f = a.type(i),
            e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"),
            !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
        })
    }
    var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/;
    a.active = 0,
    a.ajaxJSONP = function(b, c) {
        if (!("type" in b))
            return a.ajax(b);
        var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function(b) {
            a(k).triggerHandler("error", b || "abort")
        }
        , n = {
            abort: m
        };
        return c && c.promise(n),
        a(k).on("load error", function(f, i) {
            clearTimeout(e),
            a(k).off().remove(),
            "error" != f.type && d ? g(d[0], n, b, c) : h(null , i || "error", n, b, c),
            window[j] = l,
            d && a.isFunction(l) && l(d[0]),
            l = d = void 0
        }),
        f(n, b) === !1 ? (m("abort"),
        n) : (window[j] = function() {
            d = arguments
        }
        ,
        k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j),
        s.head.appendChild(k),
        b.timeout > 0 && (e = setTimeout(function() {
            m("timeout")
        }, b.timeout)),
        n)
    }
    ,
    a.ajaxSettings = {
        type: "GET",
        beforeSend: j,
        success: j,
        error: j,
        complete: j,
        context: null ,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: w,
            xml: "application/xml, text/xml",
            html: x,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    a.ajax = function(b) {
        var c = function(a) {
            return /^http:\/\/buluo\.qq\.com\/mobile\//.test(window.location) && (a = a.replace(/^http:\/\/xiaoqu\.qq\.com\/cgi-bin\//g, "http://buluo.qq.com/cgi-bin/")),
            a
        }
        ;
        b.url && (b.url = c(b.url));
        var e = a.extend({}, b || {})
          , i = a.Deferred && a.Deferred();
        for (p in a.ajaxSettings)
            void 0 === e[p] && (e[p] = a.ajaxSettings[p]);
        d(e),
        e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host),
        e.url || (e.url = window.location.toString()),
        m(e),
        e.cache === !1 && (e.url = l(e.url, "_=" + Date.now()));
        var n = e.dataType
          , o = /\?.+=\?/.test(e.url);
        if ("jsonp" == n || o)
            return o || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")),
            a.ajaxJSONP(e, i);
        var r, s = e.accepts[n], t = {}, u = function(a, b) {
            t[a.toLowerCase()] = [a, b]
        }
        , v = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, w = e.xhr(), x = w.setRequestHeader;
        if (i && i.promise(w),
        e.crossDomain || u("X-Requested-With", "XMLHttpRequest"),
        u("Accept", s || "*/*"),
        (s = e.mimeType || s) && (s.indexOf(",") > -1 && (s = s.split(",", 2)[0]),
        w.overrideMimeType && w.overrideMimeType(s)),
        (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && u("Content-Type", e.contentType || "application/x-www-form-urlencoded"),
        e.headers)
            for (q in e.headers)
                u(q, e.headers[q]);
        if (w.setRequestHeader = u,
        w.onreadystatechange = function() {
            if (4 == w.readyState) {
                w.onreadystatechange = j,
                clearTimeout(r);
                var b, c = !1;
                if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == v) {
                    n = n || k(e.mimeType || w.getResponseHeader("content-type")),
                    b = w.responseText;
                    try {
                        "script" == n ? (1,
                        eval)(b) : "xml" == n ? b = w.responseXML : "json" == n && (b = y.test(b) ? null  : a.parseJSON(b))
                    } catch (d) {
                        c = d
                    }
                    c ? h(c, "parsererror", w, e, i) : g(b, w, e, i)
                } else
                    h(w.statusText || null , w.status ? "error" : "abort", w, e, i)
            }
        }
        ,
        f(w, e) === !1)
            return w.abort(),
            h(null , "abort", w, e, i),
            w;
        if (e.xhrFields)
            for (q in e.xhrFields)
                "withCredentials" !== q && (w[q] = e.xhrFields[q]);
        var z = "async" in e ? e.async : !0;
        w.open(e.type, e.url, z, e.username, e.password, e.data ? e.data : null ),
        e.xhrFields && e.xhrFields.withCredentials && (w.withCredentials = !0);
        for (q in t)
            x.apply(w, t[q]);
        return e.timeout > 0 && (r = setTimeout(function() {
            w.onreadystatechange = j,
            w.abort(),
            h(null , "timeout", w, e, i)
        }, e.timeout)),
        w.send(e.data ? e.data : null ),
        w
    }
    ,
    a.get = function() {
        return a.ajax(n.apply(null , arguments))
    }
    ,
    a.post = function() {
        var b = n.apply(null , arguments);
        return b.type = "POST",
        a.ajax(b)
    }
    ,
    a.getJSON = function() {
        var b = n.apply(null , arguments);
        return b.dataType = "json",
        a.ajax(b)
    }
    ,
    a.fn.load = function(b, c, d) {
        if (!this.length)
            return this;
        var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
        return g.length > 1 && (h.url = g[0],
        e = g[1]),
        h.success = function(b) {
            f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b),
            i && i.apply(f, arguments)
        }
        ,
        a.ajax(h),
        this
    }
    ;
    var z = encodeURIComponent;
    a.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(z(a) + "=" + z(b))
        }
        ,
        o(c, a, b),
        c.join("&").replace(/%20/g, "+")
    }
}(Zepto),
function(a) {
    function b(a) {
        var b = this.os = {}
          , c = this.browser = {}
          , d = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
          , e = a.match(/(Android);?[\s\/]+([\d.]+)?/)
          , f = !!a.match(/\(Macintosh\; Intel /)
          , g = a.match(/(iPad).*OS\s([\d_]+)/)
          , h = a.match(/(iPod)(.*OS\s([\d_]+))?/)
          , i = !g && a.match(/(iPhone\sOS)\s([\d_]+)/)
          , j = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
          , k = j && a.match(/TouchPad/)
          , l = a.match(/Kindle\/([\d.]+)/)
          , m = a.match(/Silk\/([\d._]+)/)
          , n = a.match(/(BlackBerry).*Version\/([\d.]+)/)
          , o = a.match(/(BB10).*Version\/([\d.]+)/)
          , p = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
          , q = a.match(/PlayBook/)
          , r = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/)
          , s = a.match(/Firefox\/([\d.]+)/)
          , t = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
          , u = !r && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
          , v = u || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (c.webkit = !!d) && (c.version = d[1]),
        e && (b.android = !0,
        b.version = e[2]),
        i && !h && (b.ios = b.iphone = !0,
        b.version = i[2].replace(/_/g, ".")),
        g && (b.ios = b.ipad = !0,
        b.version = g[2].replace(/_/g, ".")),
        h && (b.ios = b.ipod = !0,
        b.version = h[3] ? h[3].replace(/_/g, ".") : null ),
        j && (b.webos = !0,
        b.version = j[2]),
        k && (b.touchpad = !0),
        n && (b.blackberry = !0,
        b.version = n[2]),
        o && (b.bb10 = !0,
        b.version = o[2]),
        p && (b.rimtabletos = !0,
        b.version = p[2]),
        q && (c.playbook = !0),
        l && (b.kindle = !0,
        b.version = l[1]),
        m && (c.silk = !0,
        c.version = m[1]),
        !m && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
        r && (c.chrome = !0,
        c.version = r[1]),
        s && (c.firefox = !0,
        c.version = s[1]),
        t && (c.ie = !0,
        c.version = t[1]),
        v && (f || b.ios) && (c.safari = !0,
        f && (c.version = v[1])),
        u && (c.webview = !0),
        b.tablet = !!(g || q || e && !a.match(/Mobile/) || s && a.match(/Tablet/) || t && !a.match(/Phone/) && a.match(/Touch/)),
        b.phone = !(b.tablet || b.ipod || !(e || i || j || n || o || r && a.match(/Android/) || r && a.match(/CriOS\/([\d.]+)/) || s && a.match(/Mobile/) || t && a.match(/Touch/)))
    }
    b.call(a, navigator.userAgent),
    a.__detect = b
}(Zepto),
function(a) {
    function b(b, d) {
        var i = b[h]
          , j = i && e[i];
        if (void 0 === d)
            return j || c(b);
        if (j) {
            if (d in j)
                return j[d];
            var k = g(d);
            if (k in j)
                return j[k]
        }
        return f.call(a(b), d)
    }
    function c(b, c, f) {
        var i = b[h] || (b[h] = ++a.uuid)
          , j = e[i] || (e[i] = d(b));
        return void 0 !== c && (j[g(c)] = f),
        j
    }
    function d(b) {
        var c = {};
        return a.each(b.attributes || i, function(b, d) {
            0 == d.name.indexOf("data-") && (c[g(d.name.replace("data-", ""))] = a.zepto.deserializeValue(d.value))
        }),
        c
    }
    var e = {}
      , f = a.fn.data
      , g = a.camelCase
      , h = a.expando = "Zepto" + +new Date
      , i = [];
    a.fn.data = function(d, e) {
        return void 0 === e ? a.isPlainObject(d) ? this.each(function(b, e) {
            a.each(d, function(a, b) {
                c(e, a, b)
            })
        }) : 0 == this.length ? void 0 : b(this[0], d) : this.each(function() {
            c(this, d, e)
        })
    }
    ,
    a.fn.removeData = function(b) {
        return "string" == typeof b && (b = b.split(/\s+/)),
        this.each(function() {
            var c = this[h]
              , d = c && e[c];
            d && a.each(b || d, function(a) {
                delete d[b ? g(this) : a]
            })
        })
    }
    ,
    ["remove", "empty"].forEach(function(b) {
        var c = a.fn[b];
        a.fn[b] = function() {
            var a = this.find("*");
            return "remove" === b && (a = a.add(this)),
            a.removeData(),
            c.call(this)
        }
    })
}(Zepto),
function(a) {
    function b(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }
    function c() {
        k = null ,
        n.last && n.el.trigger("longTap")
    }
    function d() {
        k && clearTimeout(k),
        k = null 
    }
    function e() {
        h && clearTimeout(h),
        i && clearTimeout(i),
        j && clearTimeout(j),
        k && clearTimeout(k),
        h = i = j = k = null ,
        n = {}
    }
    function f(a) {
        return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
    }
    function g(a, b) {
        return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
    }
    var h, i, j, k, l, m, n = {}, o = 750, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = {
        scrollDom: null 
    }, x = {}, y = {};
    a(document).ready(function() {
        var z, A, B, C, D = 0, E = 0;
        "MSGesture" in window && (l = new MSGesture,
        l.target = document.body),
        a(document).bind("MSGestureEnd", function(a) {
            var b = a.velocityX > 1 ? "Right" : a.velocityX < -1 ? "Left" : a.velocityY > 1 ? "Down" : a.velocityY < -1 ? "Up" : null ;
            b && (n.el.trigger("swipe"),
            n.el.trigger("swipe" + b))
        }).on("touchstart MSPointerDown pointerdown", function(b) {
            if (a.os.ios) {
                v = Math.random(),
                clearInterval(m),
                w.scrollDom && (r = w.scrollDom.scrollTop());
                var d = b.target
                  , e = d;
                for (y = {}; e; )
                    e.id || (e.id = "d_" + +new Date),
                    y[e.id] = a(e).scrollTop(),
                    e = e.parentNode
            }
            (!(C = g(b, "down")) || f(b)) && (B = C ? b : b.touches[0],
            b.touches && 1 === b.touches.length && n.x2 && (n.x2 = void 0,
            n.y2 = void 0),
            z = Date.now(),
            A = z - (n.last || z),
            n.el = a("tagName" in B.target ? B.target : B.target.parentNode),
            h && clearTimeout(h),
            n.x1 = B.pageX,
            n.y1 = B.pageY,
            A > 0 && 500 >= A && (n.isDoubleTap = !0),
            n.last = z,
            k = setTimeout(c, o),
            l && C && l.addPointer(b.pointerId))
        }).on("touchmove MSPointerMove pointermove", function(b) {
            if ((!(C = g(b, "move")) || f(b)) && (B = C ? b : b.touches[0],
            d(),
            n.x2 = B.pageX,
            n.y2 = B.pageY,
            D += Math.abs(n.x1 - n.x2),
            E += Math.abs(n.y1 - n.y2),
            a.os.ios)) {
                if (x[v])
                    ;
                else
                    for (var c = b.target, e = c; e; ) {
                        if (Math.abs(a(e).scrollTop() - y[e.id || " "]) > 0) {
                            x[v] = e;
                            break
                        }
                        e = e.parentNode
                    }
                if (x[v]) {
                    var h = x[v];
                    t = a(h).scrollTop(),
                    u = +new Date
                }
            }
        }).on("touchend MSPointerUp pointerup", function(c) {
            if (!(C = g(c, "up")) || f(c)) {
                if (d(),
                n.x2 && Math.abs(n.x1 - n.x2) > 30 || n.y2 && Math.abs(n.y1 - n.y2) > 30) {
                    if (j = setTimeout(function() {
                        try {
                            n.el.trigger("swipe"),
                            n.el.trigger("swipe" + b(n.x1, n.x2, n.y1, n.y2)),
                            n = {}
                        } catch (a) {}
                    }, 0),
                    a.os.ios && x[v]) {
                        var k = x[v];
                        q = a(k).scrollTop();
                        var l = +new Date
                          , r = l - u;
                        s = (q - t) / r,
                        Math.abs(s) > .5 ? m = setInterval(function() {
                            var b = a(k).scrollTop();
                            q == b ? p = 1 : (p = 0,
                            clearInterval(m))
                        }, 20) : p = 0
                    }
                } else if ("last" in n)
                    var w = +new Date - n.last;
                if (30 > D && 30 > E)
                    if (o >= w)
                        i = setTimeout(function() {
                            if (a.os.ios && p)
                                return void (p = 0);
                            var b = a.Event("tap");
                            b.cancelTouch = e,
                            n.el && n.el.trigger(b),
                            n.isDoubleTap ? (n.el && n.el.trigger("doubleTap", [c]),
                            n = {}) : h = setTimeout(function() {
                                h = null ,
                                n.el && n.el.trigger("singleTap"),
                                n = {}
                            }, 250)
                        }, 0);
                    else {
                        if (a.os.ios && p)
                            return void (p = 0);
                        var y = a.Event("press");
                        y.cancelTouch = e,
                        n.el && n.el.trigger(y)
                    }
                else
                    n = {};
                D = E = 0
            }
        }).on("touchcancel MSPointerCancel pointercancel", function() {
            D = E = 0,
            e()
        }),
        a(window).on("scroll", e)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    })
}(Zepto),
function(a) {
    function b(a) {
        return "tagName" in a ? a : a.parentNode
    }
    if (a.os.ios) {
        var c, d = {};
        a(document).bind("gesturestart", function(a) {
            var e = Date.now();
            e - (d.last || e);
            d.target = b(a.target),
            c && clearTimeout(c),
            d.e1 = a.scale,
            d.last = e
        }).bind("gesturechange", function(a) {
            d.e2 = a.scale
        }).bind("gestureend", function(b) {
            d.e2 > 0 ? (0 != Math.abs(d.e1 - d.e2) && a(d.target).trigger("pinch") && a(d.target).trigger("pinch" + (d.e1 - d.e2 > 0 ? "In" : "Out")),
            d.e1 = d.e2 = d.last = 0) : "last" in d && (d = {})
        }),
        ["pinch", "pinchIn", "pinchOut"].forEach(function(b) {
            a.fn[b] = function(a) {
                return this.bind(b, a)
            }
        })
    }
}(Zepto),
function(a) {
    a(Zepto)
}(function(a) {
    function b(a) {
        return i.raw ? a : encodeURIComponent(a)
    }
    function c(a) {
        return i.raw ? a : decodeURIComponent(a)
    }
    function d(a) {
        return b(i.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(h, " ")),
            i.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    function f(b, c) {
        var d = i.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g, h = /\+/g, i = a.cookie = function(e, h, j) {
        if (void 0 !== h && !a.isFunction(h)) {
            if (j = a.extend({}, i.defaults, j),
            "number" == typeof j.expires) {
                var k = j.expires
                  , l = j.expires = new Date;
                l.setTime(+l + 864e5 * k)
            }
            return document.cookie = [b(e), "=", d(h), j.expires ? "; expires=" + j.expires.toUTCString() : "", j.path ? "; path=" + j.path : "", j.domain ? "; domain=" + j.domain : "", j.secure ? "; secure" : ""].join("")
        }
        var m = e ? void 0 : {};
        g = document.cookie ? document.cookie.split("; ") : [];
        for (var n = 0, o = g.length; o > n; n++) {
            var p = g[n].split("=")
              , q = c(p.shift())
              , r = p.join("=");
            if (e && e === q) {
                m = f(r, h);
                break
            }
            e || void 0 === (r = f(r)) || (m[q] = r)
        }
        return m
    }
    ;
    i.defaults = {},
    a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })),
        !a.cookie(b))
    }
});
