(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[664], {
    3991: function(e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            PrefetchKind: function() {
                return n
            },
            ACTION_REFRESH: function() {
                return o
            },
            ACTION_NAVIGATE: function() {
                return u
            },
            ACTION_RESTORE: function() {
                return l
            },
            ACTION_SERVER_PATCH: function() {
                return f
            },
            ACTION_PREFETCH: function() {
                return a
            },
            ACTION_FAST_REFRESH: function() {
                return i
            },
            ACTION_SERVER_ACTION: function() {
                return c
            }
        });
        let o = "refresh"
          , u = "navigate"
          , l = "restore"
          , f = "server-patch"
          , a = "prefetch"
          , i = "fast-refresh"
          , c = "server-action";
        (r = n || (n = {})).AUTO = "auto",
        r.FULL = "full",
        r.TEMPORARY = "temporary",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1516: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(2387),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5569: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return g
            }
        });
        let r = n(8754)
          , o = r._(n(7294))
          , u = n(4532)
          , l = n(3353)
          , f = n(1410)
          , a = n(9064)
          , i = n(370)
          , c = n(9955)
          , s = n(4224)
          , d = n(508)
          , p = n(1516)
          , y = n(4266)
          , b = n(3991)
          , h = new Set;
        function v(e, t, n, r, o, u) {
            if (!u && !(0,
            l.isLocalURL)(t))
                return;
            if (!r.bypassPrefetchedCheck) {
                let o = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                  , u = t + "%" + n + "%" + o;
                if (h.has(u))
                    return;
                h.add(u)
            }
            let f = u ? e.prefetch(t, o) : e.prefetch(t, n, r);
            Promise.resolve(f).catch(e=>{}
            )
        }
        function _(e) {
            return "string" == typeof e ? e : (0,
            f.formatUrl)(e)
        }
        let O = o.default.forwardRef(function(e, t) {
            let n, r;
            let {href: f, as: h, children: O, prefetch: g=null, passHref: C, replace: E, shallow: P, scroll: m, locale: T, onClick: j, onMouseEnter: M, onTouchStart: R, legacyBehavior: A=!1, ...k} = e;
            n = O,
            A && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
            let I = o.default.useContext(c.RouterContext)
              , L = o.default.useContext(s.AppRouterContext)
              , N = null != I ? I : L
              , S = !I
              , x = !1 !== g
              , U = null === g ? b.PrefetchKind.AUTO : b.PrefetchKind.FULL
              , {href: w, as: K} = o.default.useMemo(()=>{
                if (!I) {
                    let e = _(f);
                    return {
                        href: e,
                        as: h ? _(h) : e
                    }
                }
                let[e,t] = (0,
                u.resolveHref)(I, f, !0);
                return {
                    href: e,
                    as: h ? (0,
                    u.resolveHref)(I, h) : t || e
                }
            }
            , [I, f, h])
              , F = o.default.useRef(w)
              , H = o.default.useRef(K);
            A && (r = o.default.Children.only(n));
            let D = A ? r && "object" == typeof r && r.ref : t
              , [V,q,z] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , B = o.default.useCallback(e=>{
                (H.current !== K || F.current !== w) && (z(),
                H.current = K,
                F.current = w),
                V(e),
                D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
            }
            , [K, D, w, z, V]);
            o.default.useEffect(()=>{
                N && q && x && v(N, w, K, {
                    locale: T
                }, {
                    kind: U
                }, S)
            }
            , [K, w, q, T, x, null == I ? void 0 : I.locale, N, S, U]);
            let G = {
                ref: B,
                onClick(e) {
                    A || "function" != typeof j || j(e),
                    A && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    N && !e.defaultPrevented && function(e, t, n, r, u, f, a, i, c, s) {
                        let {nodeName: d} = e.currentTarget
                          , p = "A" === d.toUpperCase();
                        if (p && (function(e) {
                            let t = e.currentTarget
                              , n = t.getAttribute("target");
                            return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        l.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let y = ()=>{
                            let e = null == a || a;
                            "beforePopState"in t ? t[u ? "replace" : "push"](n, r, {
                                shallow: f,
                                locale: i,
                                scroll: e
                            }) : t[u ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !s,
                                scroll: e
                            })
                        }
                        ;
                        c ? o.default.startTransition(y) : y()
                    }(e, N, w, K, E, P, m, T, S, x)
                },
                onMouseEnter(e) {
                    A || "function" != typeof M || M(e),
                    A && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    N && (x || !S) && v(N, w, K, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, S)
                },
                onTouchStart(e) {
                    A || "function" != typeof R || R(e),
                    A && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    N && (x || !S) && v(N, w, K, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: U
                    }, S)
                }
            };
            if ((0,
            a.isAbsoluteUrl)(K))
                G.href = K;
            else if (!A || C || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== T ? T : null == I ? void 0 : I.locale
                  , t = (null == I ? void 0 : I.isLocaleDomain) && (0,
                p.getDomainLocale)(K, e, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                G.href = t || (0,
                y.addBasePath)((0,
                i.addLocale)(K, e, null == I ? void 0 : I.defaultLocale))
            }
            return A ? o.default.cloneElement(r, G) : o.default.createElement("a", {
                ...k,
                ...G
            }, n)
        })
          , g = O;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    508: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = n(7294)
          , o = n(29)
          , u = "function" == typeof IntersectionObserver
          , l = new Map
          , f = [];
        function a(e) {
            let {rootRef: t, rootMargin: n, disabled: a} = e
              , i = a || !u
              , [c,s] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(e=>{
                d.current = e
            }
            , []);
            (0,
            r.useEffect)(()=>{
                if (u) {
                    if (i || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName) {
                        let r = function(e, t, n) {
                            let {id: r, observer: o, elements: u} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = f.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r)))
                                    return t;
                                let o = new Map
                                  , u = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: u,
                                    elements: o
                                },
                                f.push(n),
                                l.set(n, t),
                                t
                            }(n);
                            return u.set(e, t),
                            o.observe(e),
                            function() {
                                if (u.delete(e),
                                o.unobserve(e),
                                0 === u.size) {
                                    o.disconnect(),
                                    l.delete(r);
                                    let e = f.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    e > -1 && f.splice(e, 1)
                                }
                            }
                        }(e, e=>e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!c) {
                    let e = (0,
                    o.requestIdleCallback)(()=>s(!0));
                    return ()=>(0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [i, n, t, c, d.current]);
            let y = (0,
            r.useCallback)(()=>{
                s(!1)
            }
            , []);
            return [p, c, y]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1664: function(e, t, n) {
        e.exports = n(5569)
    }
}]);
