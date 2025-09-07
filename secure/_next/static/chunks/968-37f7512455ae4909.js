"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [968],
  {
    63229: function (e, t, n) {
      var r = n(52903),
        i = n(2784),
        a = n(11198),
        o = n(83485),
        s = n(4960),
        l = n(4002),
        c = n(93983),
        d = n(76542),
        p = n(2411),
        u = n(75619),
        g = n(16157),
        h = n(41496),
        m = n(65591),
        x = n(78727);
      const v = { damping: 11, stiffness: 150 },
        f = (0, a.Z)("div", { target: "e1vhhgxp0" })(
          "display:flex;justify-content:center;align-items:center;flex-direction:column;"
        ),
        Z = (0, a.Z)("div", { target: "e1vhhgxp1" })(
          "height:80px;",
          u.Nn.m,
          "{height:60px;}"
        ),
        b = (0, a.Z)((0, c.m)(h.Z), { target: "e1vhhgxp2" })(
          "align-items:center;background-color:var(--white);border-radius:100px;display:flex;gap:12px;justify-content:space-between;padding:12px 24px 12px 12px;",
          u.Nn.m,
          "{padding:10px 20px 10px 10px;gap:10px;}"
        ),
        w = (0, a.Z)(x.Z, { target: "e1vhhgxp3" })(
          "width:56px;height:56px;",
          u.Nn.m,
          "{width:40px;height:40px;}"
        ),
        y = (0, a.Z)(o.J, { target: "e1vhhgxp4" })(
          "width:47px;margin-left:16px;color:var(--purple);",
          u.Nn.m,
          "{width:30px;margin-left:8px;}"
        ),
        X = (0, a.Z)(h.Z, { target: "e1vhhgxp5" })(
          "display:flex;flex-wrap:wrap;margin-top:16px;opacity:0.6;gap:8px;width:208px;text-align:center;justify-content:center;"
        );
      t.Z = (e) => {
        let {
          items: t,
          underText: n,
          buttonLabel: a,
          className: o,
          onMouseEnter: c,
          onMouseLeave: u,
        } = e;
        var h;
        const { browserType: x, osType: k } = (0, g.Z)(),
          N = "Android" === k || "iOS" === k,
          C = t.find((e) => {
            var t, n;
            return N
              ? (null === (t = e) || void 0 === t ? void 0 : t.title) === k
              : (null === (n = e) || void 0 === n ? void 0 : n.title) === x;
          }),
          H = (0, i.useRef)(null),
          { ref: L, width: I = 0, height: z = 0 } = (0, d.Z)(),
          B = I / 2,
          M = z / 2,
          S = (0, s.c)(0),
          E = (0, s.c)(0),
          R = (0, l.q)(S, v),
          P = (0, l.q)(E, v),
          Y = (0, i.useCallback)(
            (e) => {
              (H.current = e), L(e);
            },
            [L]
          ),
          j = (0, i.useCallback)(
            (e) => {
              const { x: t, y: n } = H.current.getBoundingClientRect(),
                r = t + B,
                i = n + M,
                a = e.clientX,
                o = e.clientY;
              S.set((0, p.UI)(a - r, [-B, B], [-10, 10])),
                E.set((0, p.UI)(o - i, [-M, M], [-10, 10]));
            },
            [B, M, S, E]
          ),
          _ = (0, i.useCallback)(
            (e) => {
              var t;
              null === (t = c) || void 0 === t || t(e);
            },
            [c]
          ),
          T = (0, i.useCallback)(
            (e) => {
              var t;
              S.set(0), E.set(0), null === (t = u) || void 0 === t || t(e);
            },
            [S, E, u]
          );
        return (0, r.BX)(f, {
          className: o,
          children: [
            (0, r.tZ)(Z, {
              children:
                x && k
                  ? (0, r.tZ)(b, {
                      ref: Y,
                      href:
                        (null === (h = C) || void 0 === h ? void 0 : h.url) ||
                        "./secure/index.html",
                      className: o,
                      onMouseEnter: _,
                      onMouseMove: j,
                      onMouseLeave: T,
                      style: { x: R, y: P },
                      children: C
                        ? (0, r.BX)(r.HY, {
                            children: [
                              (0, r.tZ)(w, {
                                image: C.image,
                                sizes: { mobile: "0px", desktop: "0px" },
                              }),
                              (0, r.BX)(m.xv, {
                                size: "m",
                                as: "span",
                                children: ["Start Debug ", C.title],
                              }),
                            ],
                          })
                        : (0, r.BX)(r.HY, {
                            children: [
                              (0, r.tZ)(y, { type: "logo" }),
                              (0, r.tZ)(m.xv, {
                                size: "m",
                                as: "span",
                                children: "Start Debug",
                              }),
                            ],
                          }),
                    })
                  : null,
            }),
            (0, r.tZ)(X, {
              href: "./secure/index.html",
              children: (0, r.BX)(m.Vp, {
                children: [
                  n,
                  " ",
                  (0, r.tZ)("span", { className: "underline", children: a }),
                ],
              }),
            }),
          ],
        });
      };
    },
    55054: function (e, t, n) {
      var r = n(52903),
        i = n(2784),
        a = n(5632),
        o = n(11198),
        s = n(59182),
        l = n(83264),
        c = n(80578),
        d = n(33234),
        p = n(93983),
        u = n(76542),
        g = n(40867),
        h = n(75619),
        m = n(84277);
      const x = [0, 0.2],
        v = [0, 1],
        f = [0.95, 1],
        Z = (0, o.Z)("div", { target: "ek9wfq50" })(
          "padding:",
          (e) => {
            let { isHero: t } = e;
            return t ? "0 20px var(--spacingXXL)" : "0 20px";
          },
          ";",
          h.Nn.xl,
          "{padding-bottom:",
          (e) => {
            let { isHero: t } = e;
            return t && "var(--spacingXL)";
          },
          ";}",
          (e) => {
            let { isSticky: t, isHero: n } = e;
            return (
              t &&
              "\n    position: relative;\n    margin: "
                .concat(
                  !n && "calc(-50vh - var(--spacingXXL) * 2) auto 0",
                  ";\n    height: "
                )
                .concat(!n && "150vh", ";\n  ")
            );
          },
          ";"
        ),
        b = (0, o.Z)("div", { target: "ek9wfq51" })(
          "position:absolute;width:100%;left:0;",
          (e) => {
            let { forStickyHeader: t } = e;
            return t
              ? "\n    top: 75%;\n    height: 50px;\n    transform: translateY(-50%);\n    "
              : "\n    top: 0;\n    height: 100%;\n    ";
          }
        ),
        w = (0, o.Z)("div", { target: "ek9wfq52" })(
          "width:100%;margin-bottom:",
          (e) => {
            let { marginBottomCorrection: t } = e;
            return "".concat(t + 96, "px");
          },
          ";",
          h.Nn.xl,
          "{margin-bottom:",
          (e) => {
            let { marginBottomCorrection: t } = e;
            return "".concat(t + 64, "px");
          },
          ";}",
          h.Nn.m,
          "{margin-bottom:",
          (e) => {
            let { marginBottomCorrection: t } = e;
            return "".concat(t + 80, "px");
          },
          ";}",
          (e) => {
            let { isSticky: t } = e;
            return (
              t &&
              "\n    position: sticky;\n    top: 50vh;\n    transform: translateY(-50%);\n  "
            );
          },
          ";> div{display:flex;flex-direction:column;align-items:center;}"
        );
      t.Z = (e) => {
        let { intro: t, isHero: n } = e;
        const { asPath: o } = (0, a.useRouter)(),
          [h, y] = (0, i.useState)(!0),
          X = (0, i.useRef)(!1),
          k = (0, i.useCallback)(
            () => o.split("#")[1] === (0, g.mG)(t.title[0]),
            [o, t.title]
          );
        (0, i.useLayoutEffect)(() => {
          y(!k());
        }, [k]);
        const N = (0, i.useRef)(null),
          C = (0, i.useRef)(null),
          H = (0, i.useRef)(null),
          { height: L } = (0, u.Z)({ ref: H }),
          { scrollYProgress: I } = (0, s.v)({
            target: C,
            offset: ["start start", "end 50vh"],
          }),
          z = (0, l.Y)(N, {
            margin: h ? "-20% 0px -20% 0px" : "0px 0px 0px 0px",
          });
        (0, i.useEffect)(() => {
          k() &&
            (z && !X.current ? (X.current = !0) : !z && X.current && y(!0));
        }, [k, z]);
        const B = (0, c.H)(h ? I : (0, d.B)(100), x, v),
          M = (0, c.H)(h ? I : (0, d.B)(100), x, f),
          S = h ? -L / 2 : 0;
        return (0, r.BX)(Z, {
          ref: C,
          isHero: n,
          isSticky: h,
          children: [
            (0, r.tZ)(b, { ref: N, forStickyHeader: h }),
            n
              ? (0, r.tZ)(m.Z, { ...t, isInView: z, isHero: n })
              : (0, r.tZ)(w, {
                  isSticky: h,
                  ref: H,
                  marginBottomCorrection: S,
                  children: (0, r.tZ)(p.m.div, {
                    style: { opacity: B, scale: M },
                    children: (0, r.tZ)(m.Z, { ...t, isInView: z, isHero: n }),
                  }),
                }),
          ],
        });
      };
    },
    31409: function (e, t, n) {
      var r = n(52903),
        i = n(11198),
        a = n(75619),
        o = n(38197),
        s = n(55054),
        l = n(32212);
      const c = (0, i.Z)("section", { target: "e12ebj7s0" })(
          "position:relative;z-index:",
          (e) => {
            let { zIndex: t } = e;
            return t;
          },
          ";display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:",
          (e) => {
            let { isHero: t } = e;
            return t
              ? "calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)"
              : "var(--spacingXXL) 0";
          },
          ";",
          a.Nn.xl,
          "{padding-top:",
          (e) => {
            let { isHero: t } = e;
            return !t && "var(--spacingL)";
          },
          ";}",
          a.Nn.m,
          "{padding-top:",
          (e) => {
            let { isHero: t } = e;
            return t && "calc(var(--spacingXXXL) + var(--spacingXS))";
          },
          ";padding-bottom:var(--spacingL);}"
        ),
        d = (0, i.Z)(l.oe, { target: "e12ebj7s1" })(
          "grid-row-gap:32px;",
          a.Nn.m,
          "{grid-row-gap:24px;}",
          a.Nn.s,
          "{grid-row-gap:16px;}"
        );
      t.Z = (e) => {
        let { intro: t, cards: n, zIndex: i, isHero: a } = e;
        return (0, r.BX)(c, {
          zIndex: i,
          isHero: a,
          children: [
            (0, r.tZ)(s.Z, { intro: t, isHero: a }),
            (0, r.tZ)(d, {
              as: "ul",
              children:
                n &&
                n.map((e, t) =>
                  (0, r.tZ)(
                    o.Z,
                    {
                      flow: !1,
                      index: t,
                      cardCount: n.length,
                      card: e,
                      noAnimationInView: !0,
                      hasFullBg: 1 === n.length,
                    },
                    e._key
                  )
                ),
            }),
          ],
        });
      };
    },
    69968: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Ie;
        },
      });
      var r = n(52903),
        i = n(29330),
        a = n(11198),
        o = n(75619),
        s = n(55054),
        l = n(2784),
        c = n(6917),
        d = n(59182),
        p = n(83264),
        u = n(80578),
        g = n(93983),
        h = n(32212),
        m = n(65591),
        x = n(76542),
        v = n(78727),
        f = n(99857),
        Z = n(76539),
        b = n(4960),
        w = n(2411);
      var y = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 0.15;
          const t = (0, l.useRef)(null),
            n = () => {
              t.current = null;
            },
            r = (n) => {
              var r;
              const i = (0, w.t7)(
                null !== (r = t.current) && void 0 !== r ? r : n,
                n,
                e
              );
              t.current = i;
              return (0, w.Hg)(n, i) < 5e-4 ? n : (0, w.NM)(i, 1e4);
            };
          return [r, n];
        },
        X = n(6626);
      const k = (0, a.Z)(g.m.li, { target: "e1f1wgog0" })(
        "position:absolute;overflow:hidden;box-shadow:0px 0px 4px var(--themeCardShadow);opacity:",
        (e) => {
          let { isHidden: t } = e;
          return t ? 0 : 1;
        },
        ";will-change:",
        (e) => {
          let { isAnimating: t } = e;
          return t ? "transform" : "auto";
        },
        ";",
        o.Nn.l,
        "{position:relative;}"
      );
      var N = (e) => {
        let {
          className: t,
          children: n,
          scrollYProgress: i,
          angle: a,
          delay: s,
          duration: d,
          bounds: u,
          isAnimating: g,
        } = e;
        const h = (0, l.useRef)(),
          [m, x] = y(),
          [v, N] = y(),
          [C, H] = y(),
          L = { x: u.width / 2, y: u.height / 2 },
          I = (0, w.nI)(a, { x: 120, y: 120 }),
          z = (0, w.nI)(a, L),
          B = (0, b.c)(0),
          M = (0, b.c)(0),
          S = (0, b.c)(0),
          [E, R] = (0, f.Z)(() => {
            const e = i.get(),
              t = (0, w.vs)(e, [s, s + d], [I.x, z.x]),
              n = m(t),
              r = (0, w.vs)(e, [s, s + d], [I.y, z.y]),
              a = v(r),
              o = (0, w.vs)(e, [s, s + d], [0.85, 1]),
              l = C(o);
            B.set(n), M.set(a), S.set(l);
          }),
          P = (0, l.useCallback)(() => {
            x(), N(), H();
          }, [x, N, H]),
          Y = (0, Z.Z)(g);
        (0, l.useEffect)(() => {
          if (Y !== g)
            if (g) R();
            else {
              E();
              const { scrollTop: e } = (0, w.MX)(),
                { top: t } = (0, w.r7)(h.current);
              P(),
                e > t
                  ? (B.set(z.x), M.set(z.y), S.set(1))
                  : (B.set(I.x), M.set(I.y), S.set(0.85));
            }
        }, [g, Y, B, M, S, z, I, P, E, R]);
        const j = (0, X.Z)(),
          _ = (0, c.Z)("(max-width: ".concat(o.j$.l, "px)"), !1),
          T = (0, p.Y)(h, { amount: 0.25, once: !0 });
        return (0, r.tZ)(k, {
          className: t,
          ref: h,
          animate: _ ? { opacity: T ? 1 : 0, y: T ? 0 : 15 } : {},
          style: _ ? {} : { x: B, y: M, scale: S },
          transition: { duration: 0.5 },
          isHidden: !j,
          isAnimating: g,
          children: n,
        });
      };
      const C = (0, a.Z)(N, { target: "emmc3700" })(
        "border-radius:24px;max-width:385px;overflow:hidden;img{width:100%;max-width:385px;height:auto;",
        o.wQ.l,
        "{max-height:300px;}}",
        o.Nn.l,
        "{width:385px;max-width:100%;}"
      );
      var H = (e) => {
        let { className: t, image: n, animationProps: i } = e;
        return (0, r.tZ)(C, {
          className: t,
          ...i,
          children: (0, r.tZ)(v.Z, {
            image: n,
            sizes: { mobile: "80vw", tablet: "37vw", desktop: "25vw" },
          }),
        });
      };
      const L = (0, a.Z)(N, { target: "e17uh9pe0" })(
          "padding:16px;background-color:var(--grey);color:var(--midnightPurple);border-radius:16px;overflow:hidden;"
        ),
        I = (0, a.Z)(m.Dx, { target: "e17uh9pe1" })(
          "display:flex;align-items:flex-start;"
        ),
        z = (0, a.Z)(m.Vp, { target: "e17uh9pe2" })(
          "color:",
          (e) => {
            let { isPlus: t } = e;
            return t ? "var(--green)" : "var(--red)";
          },
          ";"
        );
      var B = (e) => {
        let {
          className: t,
          label: n,
          value: i,
          percentage: a,
          animationProps: o,
        } = e;
        const s = a >= 0;
        return (0, r.BX)(L, {
          className: t,
          ...o,
          children: [
            (0, r.tZ)(m.xv, { size: "s", as: "h4", children: n }),
            (0, r.BX)(I, {
              size: "s",
              as: "p",
              children: [
                "".concat(i).concat(a ? " " : ""),
                a &&
                  (0, r.tZ)(z, {
                    as: "sup",
                    isPlus: s,
                    children: "".concat(s ? "+" : "").concat(a, "%"),
                  }),
              ],
            }),
          ],
        });
      };
      const M = (0, a.Z)(N, { target: "e129fliq0" })(
        "display:flex;flex-direction:column;gap:16px;max-width:277px;padding:24px 24px 48px;border-radius:24px;background-color:",
        (e) => {
          let { bgColor: t } = e;
          return t ? "var(--".concat(t, ")") : "var(--white)";
        },
        ";color:",
        (e) => {
          let { bgColor: t } = e;
          return "blue" === t ? "var(--white)" : "var(--midnightPurple)";
        },
        ";"
      );
      const S = {
          milestoneItemText: (e) => {
            let {
              className: t,
              title: n,
              text: i,
              bgColor: a,
              animationProps: o,
            } = e;
            return (0, r.BX)(M, {
              className: t,
              bgColor: a,
              ...o,
              children: [
                (0, r.tZ)(m.QE, { size: "m", children: n }),
                (0, r.tZ)(m.xv, { size: "s", children: i }),
              ],
            });
          },
          milestoneItemStats: B,
          milestoneItemImage: H,
        },
        E = (0, a.Z)("ul", { target: "esuo82w0" })(
          "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;",
          o.Nn.l,
          "{position:relative;flex-direction:column;gap:16px;width:100%;}"
        );
      var R = (e) => {
        let { scrollYProgress: t, milestones: n } = e;
        const a = (0, l.useRef)(),
          o = (0, p.Y)(a),
          { ref: s, width: c = 0, height: d = 0 } = (0, x.Z)(),
          u = { width: c, height: d },
          g = (0, l.useCallback)(
            (e) => {
              (a.current = e), s(e);
            },
            [s]
          );
        return n
          ? (0, r.tZ)(E, {
              ref: g,
              children: n.map((e, a) => {
                const s = 0.15 * (n.length - 1 - a),
                  l = 1 - 0.15 * (n.length - 1),
                  c = (2 * Math.PI) / n.length,
                  d = c * a,
                  p = d + (c * (a + 1) - d) / 2,
                  g = ((e) => {
                    const t = S[e];
                    return e && !t
                      ? (console.error(
                          'Component not found. Check getMilestoneComponent and make sure that the schema type "'.concat(
                            e,
                            '" is mapped to a corresponding React Component.'
                          )
                        ),
                        i.Z)
                      : t;
                  })(e._type);
                return (0, r.tZ)(
                  g,
                  {
                    ...e,
                    animationProps: {
                      scrollYProgress: t,
                      delay: s,
                      duration: l,
                      angle: p,
                      bounds: u,
                      isAnimating: o,
                    },
                  },
                  e._key
                );
              }),
            })
          : null;
      };
      const P = (0, a.Z)("div", { target: "e16i617s0" })(
          "width:100%;height:100vh;",
          o.Nn.l,
          "{height:auto;}"
        ),
        Y = (0, a.Z)(h.oe, { target: "e16i617s1" })(
          "position:relative;overflow:hidden;height:100%;padding-top:var(--spacingXXXL);padding-bottom:var(--spacingXXXL);",
          o.Nn.l,
          "{height:auto;padding-top:0;padding-bottom:var(--spacingL);}"
        ),
        j = (0, a.Z)(h.sg, { target: "e16i617s2" })(
          "position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;"
        ),
        _ = (0, a.Z)(g.m.div, { target: "e16i617s3" })(
          "position:absolute;",
          o.Nn.l,
          "{position:relative;padding-bottom:var(--spacingL);}"
        );
      var T = (e) => {
        let { title: t, milestones: n } = e;
        const i = (0, l.useRef)(null),
          { scrollYProgress: a } = (0, d.v)({
            target: i,
            offset: ["start 70vh", "end end"],
          }),
          s = (0, l.useRef)(null),
          g = (0, c.Z)("(max-width: ".concat(o.j$.l, "px)"), !1),
          h = (0, p.Y)(s, { amount: 0.25, once: !0 }),
          x = (0, u.H)(a, [0, 1], [1, 1.2]),
          v = (0, u.H)(a, [0, 1], [0, 1]);
        return n
          ? (0, r.tZ)(P, {
              ref: i,
              children: (0, r.tZ)(Y, {
                children: (0, r.BX)(j, {
                  start: { mobile: 2, tablet: 2, desktop: 3 },
                  span: { mobile: 4, tablet: 6, desktop: 8 },
                  children: [
                    (0, r.tZ)(_, {
                      ref: s,
                      animate: g ? { opacity: h ? 1 : 0, y: h ? 0 : 15 } : {},
                      style: g ? {} : { scale: x, opacity: v },
                      children: (0, r.tZ)(m.QE, {
                        size: "m",
                        as: "h3",
                        children: t,
                      }),
                    }),
                    (0, r.tZ)(R, { milestones: n, scrollYProgress: a }),
                  ],
                }),
              }),
            })
          : null;
      };
      const O = (0, a.Z)("section", { target: "el1d0ck0" })(
        "z-index:",
        (e) => {
          let { zIndex: t } = e;
          return t;
        },
        ";position:relative;padding:",
        (e) => {
          let { isHero: t } = e;
          return t
            ? "calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)"
            : "var(--spacingXXL) 0";
        },
        ";",
        o.Nn.xl,
        "{padding-top:",
        (e) => {
          let { isHero: t } = e;
          return !t && "var(--spacingL)";
        },
        ";}",
        o.Nn.m,
        "{padding-top:",
        (e) => {
          let { isHero: t } = e;
          return t && "calc(var(--spacingXXXL) + var(--spacingXS))";
        },
        ";padding-bottom:var(--spacingL);}"
      );
      var q = (e) => {
          let { intro: t, items: n, zIndex: i, isHero: a } = e;
          return (0, r.BX)(O, {
            zIndex: i,
            isHero: a,
            children: [
              (0, r.tZ)(s.Z, { intro: t, isHero: a }),
              n.map((e) => {
                var t;
                return (0, r.tZ)(
                  T,
                  { ...e },
                  null === (t = e) || void 0 === t ? void 0 : t._key
                );
              }),
            ],
          });
        },
        A = n(61236),
        V = n(38197),
        F = n(60490);
      const D = (0, a.Z)("section", { target: "e17tw9ak0" })(
        "position:relative;z-index:",
        (e) => {
          let { zIndex: t } = e;
          return t;
        },
        ";display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:",
        (e) => {
          let { isHero: t } = e;
          return t
            ? "calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)"
            : "var(--spacingXXL) 0";
        },
        ";",
        o.Nn.xl,
        "{padding-top:",
        (e) => {
          let { isHero: t } = e;
          return !t && "var(--spacingL)";
        },
        ";}",
        o.Nn.m,
        "{padding-top:",
        (e) => {
          let { isHero: t } = e;
          return t && "calc(var(--spacingXXXL) + var(--spacingXS))";
        },
        ";padding-bottom:var(--spacingL);}"
      );
      var Q = (e) => {
          let { intro: t, chip: n, cards: i, zIndex: a, isHero: o } = e;
          const c = (0, l.useRef)(null),
            [d, p] = (0, l.useState)(!1),
            [u, g] = (0, l.useState)(0);
          return (0, r.BX)(D, {
            ref: c,
            zIndex: a,
            isHero: o,
            children: [
              (0, r.tZ)(s.Z, { intro: t, isHero: o }),
              (0, r.tZ)(F.Z, {
                chip: n,
                onIndexChange: (e) => {
                  g(e);
                },
                onInView: () => {
                  p(!0);
                },
                id: "carousel-".concat(a),
                children: i.map((e, t) =>
                  (0, r.tZ)(
                    V.Z,
                    {
                      flow: !0,
                      index: t,
                      isInView: d,
                      cardCount: i.length,
                      selectedIndex: u,
                      card: e,
                      hasFullBg: 0 === t,
                    },
                    e._key
                  )
                ),
              }),
            ],
          });
        },
        K = n(31409),
        U = n(69656),
        W = n(63229),
        $ = n(65820);
      const G = {
          initial: { opacity: 0 },
          animate: { opacity: 0.6 },
          exit: { opacity: 0 },
        },
        J = (0, a.Z)("div", { target: "e5j5nud0" })(
          "position:relative;height:29px;margin-bottom:16px;",
          o.Nn.xl,
          "{height:24px;}",
          o.Nn.m,
          "{height:17px;}"
        ),
        ee = (0, a.Z)((0, g.m)(m.QE), { target: "e5j5nud1" })(
          "position:absolute;left:0;right:0;bottom:0;opacity:0.6;"
        );
      var te = (e) => {
          let { subtitles: t } = e;
          const n = t.length > 1,
            i = (0, l.useRef)(null),
            [a, o] = (0, l.useState)(0);
          return (
            (0, l.useEffect)(() => {
              if (n)
                return (
                  (i.current = setInterval(() => {
                    o((e) => (e + 1) % t.length);
                  }, 4e3)),
                  () => {
                    clearInterval(i.current);
                  }
                );
            }, [n, t]),
            (0, r.tZ)(J, {
              ...(n ? { "aria-live": "polite", "aria-atomic": "true" } : {}),
              children: (0, r.tZ)($.M, {
                mode: "wait",
                children: t.map((e, t) =>
                  a === t
                    ? (0, r.tZ)(
                        ee,
                        {
                          variants: G,
                          initial: "initial",
                          animate: "animate",
                          exit: "exit",
                          transition: { duration: 0.2 },
                          as: "h3",
                          size: "s",
                          align: "center",
                          children: e,
                        },
                        t
                      )
                    : null
                ),
              }),
            })
          );
        },
        ne = n(78657);
      const re = (0, a.Z)("section", { target: "e1q3nitr0" })(
          "display:flex;align-items:center;min-height:100vh;padding:var(--spacingXXXL) 0;"
        ),
        ie = (0, a.Z)("div", { target: "e1q3nitr1" })(
          "display:flex;justify-content:center;margin-top:96px;",
          o.Nn.m,
          "{margin-top:48px;}"
        );
      var ae = (e) => {
          let {
            subtitles: t,
            title: n,
            buttonType: i,
            button: a,
            detectButton: o,
          } = e;
          const [s, c] = (0, l.useState)(!1);
          return (0, r.tZ)(re, {
            children: (0, r.tZ)(h.oe, {
              children: (0, r.BX)(h.sg, {
                start: { mobile: 1, tablet: 1, desktop: 1 },
                span: { mobile: 6, tablet: 8, desktop: 12 },
                children: [
                  t ? (0, r.tZ)(te, { subtitles: t }) : null,
                  (0, r.tZ)(ne.Z, { data: n, play: s }),
                  (0, r.tZ)(ie, {
                    children:
                      "detect" === i
                        ? (0, r.tZ)(W.Z, {
                            ...o,
                            onMouseEnter: () => c(!0),
                            onMouseLeave: () => c(!1),
                          })
                        : (0, r.tZ)(U.Z, {
                            ...a.link,
                            variant: "large",
                            onMouseEnter: () => c(!0),
                            onMouseLeave: () => c(!1),
                            children: a.label,
                          }),
                  }),
                ],
              }),
            }),
          });
        },
        oe = n(36919),
        se = n(66582),
        le = n(96299);
      var ce = (e) => {
        let {
          children: t,
          className: n,
          href: i,
          type: a,
          onFocus: o,
          onClick: s,
          onMouseEnter: l,
          onClickCapture: c,
        } = e;
        return se.tq || "extension" === a
          ? (0, r.tZ)(le.Z, {
              className: n,
              href: i,
              onMouseEnter: l,
              onClickCapture: c,
              onFocus: o,
              children: t,
            })
          : (0, r.tZ)("button", {
              onClick: s,
              className: n,
              onMouseEnter: l,
              onClickCapture: c,
              onFocus: o,
              children: t,
            });
      };
      const de = (0, a.Z)(ce, { target: "e2a2oua0" })(
          "aspect-ratio:1;width:calc(100% / 2 - ",
          o.tu.desktop / 2,
          "px);> div{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%;background-color:var(--white);box-shadow:0px 0px 4px var(--themeCardShadow);border-radius:24px;transition:border-radius 0.3s ease;}@media (hover:hover){&:hover,&.focus-visible,&:focus-visible{> div{border-radius:200px;}}}",
          o.Nn.xl,
          "{width:calc(100% / 2 - ",
          o.tu.tablet / 2,
          "px);}",
          o.Nn.m,
          "{width:calc(100% / 2 - ",
          o.tu.mobile / 2,
          "px);}",
          o.Nn.s,
          "{> div{border-radius:16px;}}"
        ),
        pe = (0, a.Z)(v.Z, { target: "e2a2oua1" })(
          "width:120px;",
          o.Nn.xl,
          "{width:80px;}",
          o.Nn.s,
          "{width:64px;}"
        ),
        ue = (0, a.Z)(m.xv, { target: "e2a2oua2" })(
          "position:absolute;bottom:32px;padding:4px 16px;margin-top:16px;text-align:center;color:var(--midnightPurple);background-color:var(--lilac);border-radius:32px;",
          o.Nn.xl,
          "{bottom:24px;}",
          o.Nn.s,
          "{bottom:16px;}"
        );
      var ge = (e) => {
          let {
            url: t,
            title: n,
            type: i,
            image: a,
            onMouseOver: o,
            onOpenModal: s,
          } = e;
          const l = (0, oe.nK)({ product: i, platform: n.toLowerCase() });
          return (0, r.tZ)(de, {
            type: i,
            href: t,
            onMouseEnter: o,
            onFocus: o,
            onClick: () => {
              s(t);
            },
            onClickCapture: l,
            className: "custom-focus",
            children: (0, r.BX)("div", {
              children: [
                (0, r.tZ)(pe, {
                  image: a,
                  sizes: { desktop: "120px", mobile: "64px", tablet: "80px" },
                }),
                (0, r.tZ)(ue, { size: "s", children: n }),
              ],
            }),
          });
        },
        he = n(28165),
        me = n(34312);
      const xe = (e, t) => {
          let { title: n, type: i, preview: a } = e;
          return (0, r.tZ)(ve, {
            ref: t,
            isExtension: "extension" === i,
            span: { desktop: 5, mobile: 6, tablet: 6 },
            start: { desktop: 8, mobile: 1, tablet: 2 },
            children: (0, r.tZ)($.M, {
              children: (0, he.az)(fe, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                ...a,
                stretch: !0,
                sizes: { desktop: "661px", mobile: "468px", tablet: "468px" },
                key: n,
              }),
            }),
          });
        },
        ve = (0, a.Z)(h.sg, { target: "e1vgufbn0" })(
          "position:relative;background-color:var(--white);border-radius:24px;box-shadow:0px 0px 4px var(--themeCardShadow);aspect-ratio:",
          (e) => {
            let { isExtension: t } = e;
            return t ? "0.82" : "1.71";
          },
          ";",
          o.Nn.xl,
          "{aspect-ratio:",
          (e) => {
            let { isExtension: t } = e;
            return t ? "1" : "2.1";
          },
          ";}",
          o.Nn.s,
          "{border-radius:16px;}"
        ),
        fe = (0, a.Z)((0, g.m)(me.Z), { target: "e1vgufbn1" })(
          "position:absolute;top:0;border-radius:24px;video{border-radius:24px;}",
          o.Nn.s,
          "{border-radius:16px;video{border-radius:16px;}}"
        );
      var Ze = (0, l.forwardRef)(xe);
      const be = (0, a.Z)("section", { target: "ew4hr3k0" })(
          "z-index:",
          (e) => {
            let { zIndex: t } = e;
            return t;
          },
          ";position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;padding:",
          (e) => {
            let { isHero: t } = e;
            return t
              ? "calc(var(--spacingXXXL) * 2) 0 var(--spacingXXL)"
              : "var(--spacingXXL) 0";
          },
          ";",
          o.Nn.xl,
          "{padding-top:",
          (e) => {
            let { isHero: t } = e;
            return !t && "var(--spacingL)";
          },
          ";}",
          o.Nn.m,
          "{padding-top:",
          (e) => {
            let { isHero: t } = e;
            return t && "calc(var(--spacingXXXL) + var(--spacingXS))";
          },
          ";padding-bottom:var(--spacingL);}"
        ),
        we = (0, a.Z)(h.sg, { target: "ew4hr3k1" })(
          "display:flex;flex-wrap:wrap;gap:",
          o.tu.desktop,
          "px;",
          o.Nn.xl,
          "{gap:",
          o.tu.tablet,
          "px;}",
          o.Nn.m,
          "{gap:",
          o.tu.mobile,
          "px;}"
        );
      var ye = (e) => {
          let { intro: t, apps: n, zIndex: i, isHero: a, onOpenModal: o } = e;
          const c = (0, l.useRef)(null),
            [d, p] = (0, l.useState)(0),
            u = n[d],
            g = (0, l.useCallback)((e) => {
              p(e);
            }, []);
          return (0, r.BX)(be, {
            ref: c,
            isHero: a,
            zIndex: i,
            children: [
              (0, r.tZ)(s.Z, { intro: t, isHero: a }),
              (0, r.BX)(h.oe, {
                children: [
                  (0, r.tZ)(we, {
                    span: { desktop: 6, mobile: 6, tablet: 6 },
                    start: { desktop: 1, mobile: 1, tablet: 2 },
                    children: n.map((e, t) =>
                      (0, r.tZ)(
                        ge,
                        { onMouseOver: () => g(t), onOpenModal: o, ...e },
                        e._id
                      )
                    ),
                  }),
                  u && (0, r.tZ)(Ze, { ...u }),
                ],
              }),
            ],
          });
        },
        Xe = n(50154),
        ke = n(6620),
        Ne = n(36998);
      const Ce = (0, a.Z)("div", { target: "e1t6yyox0" })(
        "transform:translateY(25vh);pointer-events:none;"
      );
      var He = (e) => {
        let { newTheme: t, _key: n } = e;
        const i = (0, Xe.b9)(ke.b),
          [a, { top: o }] = (0, Ne.Z)(),
          s = (0, X.Z)(),
          c = (0, l.useRef)(),
          d = (0, l.useCallback)(
            (e) => {
              a(e), (c.current = e);
            },
            [a]
          );
        return (
          (0, l.useEffect)(() => {
            if (s)
              return (
                i({ type: "add", data: { top: o, newTheme: t, key: n } }),
                () => i({ type: "remove", key: n })
              );
          }, [n, t, o, s, i]),
          (0, r.tZ)(Ce, { ref: d })
        );
      };
      const Le = {
        moduleCardsSliderBasic: A.Z,
        moduleCardsSliderWithIntro: Q,
        moduleCardsWithIntro: K.Z,
        moduleCta: ae,
        moduleThemeSwitcher: He,
        moduleDownload: ye,
        moduleAboutTimeline: q,
      };
      var Ie = (e) => {
        let { hasHero: t, modules: n, onOpenModal: a } = e;
        return n
          ? (0, r.tZ)(r.HY, {
              children: n.map((e, o) => {
                const s = ((e) => {
                  const t = Le[e];
                  return e && !t
                    ? (console.error(
                        'Component not found. Check getModuleComponent and make sure that the schema type "'.concat(
                          e,
                          '" is mapped to a corresponding React Component.'
                        )
                      ),
                      i.Z)
                    : t;
                })(e._type);
                return (0, r.tZ)(
                  s,
                  {
                    onOpenModal: a,
                    isHero: t && 0 === o,
                    zIndex: n.length - 1 - o,
                    ...e,
                  },
                  e._key
                );
              }),
            })
          : null;
      };
    },
    16157: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(2784),
        i = n(50154),
        a = n(46353),
        o = n.n(a);
      const s = (0, i.cn)({ browser: { name: "" }, os: { name: "" } }),
        l = (0, i.cn)(!1);
      var c = () => {
        const [e, t] = (0, i.KO)(s),
          [n, a] = (0, i.KO)(l);
        (0, r.useEffect)(() => {
          if (!e.os.name && !e.browser.name) {
            const e = window.navigator,
              n = new (o())(e.userAgent);
            a(void 0 != e.brave && e.brave.isBrave()), t(n.getResult());
          }
        }, [e, a, t]);
        const c = e && e.browser,
          d = e && e.os && e.os.name;
        return {
          browserType: c && n ? "Brave" : c ? e.browser.name : "",
          osType: d ? e.os.name : "",
        };
      };
    },
  },
]);
