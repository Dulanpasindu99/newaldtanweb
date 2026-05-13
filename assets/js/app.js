!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 30));
})([
  function (e, t, n) {
    "use strict";
    var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, i) {
              void 0 === i && (i = n),
                Object.defineProperty(e, i, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, i) {
              void 0 === i && (i = n), (e[i] = t[n]);
            }),
      r =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var n in e) "default" === n || t.hasOwnProperty(n) || i(t, e, n);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(7), t),
      r(n(8), t),
      r(n(24), t);
  },
  function (e, t, n) {
    e.exports = (function (e) {
      var t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var r in e)
              n.d(
                i,
                r,
                function (t) {
                  return e[t];
                }.bind(null, r)
              );
          return i;
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 90))
      );
    })({
      17: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i = n(18),
          r = (function () {
            function e() {}
            return (
              (e.getFirstMatch = function (e, t) {
                var n = t.match(e);
                return (n && n.length > 0 && n[1]) || "";
              }),
              (e.getSecondMatch = function (e, t) {
                var n = t.match(e);
                return (n && n.length > 1 && n[2]) || "";
              }),
              (e.matchAndReturnConst = function (e, t, n) {
                if (e.test(t)) return n;
              }),
              (e.getWindowsVersionName = function (e) {
                switch (e) {
                  case "NT":
                    return "NT";
                  case "XP":
                    return "XP";
                  case "NT 5.0":
                    return "2000";
                  case "NT 5.1":
                    return "XP";
                  case "NT 5.2":
                    return "2003";
                  case "NT 6.0":
                    return "Vista";
                  case "NT 6.1":
                    return "7";
                  case "NT 6.2":
                    return "8";
                  case "NT 6.3":
                    return "8.1";
                  case "NT 10.0":
                    return "10";
                  default:
                    return;
                }
              }),
              (e.getMacOSVersionName = function (e) {
                var t = e
                  .split(".")
                  .splice(0, 2)
                  .map(function (e) {
                    return parseInt(e, 10) || 0;
                  });
                if ((t.push(0), 10 === t[0]))
                  switch (t[1]) {
                    case 5:
                      return "Leopard";
                    case 6:
                      return "Snow Leopard";
                    case 7:
                      return "Lion";
                    case 8:
                      return "Mountain Lion";
                    case 9:
                      return "Mavericks";
                    case 10:
                      return "Yosemite";
                    case 11:
                      return "El Capitan";
                    case 12:
                      return "Sierra";
                    case 13:
                      return "High Sierra";
                    case 14:
                      return "Mojave";
                    case 15:
                      return "Catalina";
                    default:
                      return;
                  }
              }),
              (e.getAndroidVersionName = function (e) {
                var t = e
                  .split(".")
                  .splice(0, 2)
                  .map(function (e) {
                    return parseInt(e, 10) || 0;
                  });
                if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                  return 1 === t[0] && t[1] < 6
                    ? "Cupcake"
                    : 1 === t[0] && t[1] >= 6
                    ? "Donut"
                    : 2 === t[0] && t[1] < 2
                    ? "Eclair"
                    : 2 === t[0] && 2 === t[1]
                    ? "Froyo"
                    : 2 === t[0] && t[1] > 2
                    ? "Gingerbread"
                    : 3 === t[0]
                    ? "Honeycomb"
                    : 4 === t[0] && t[1] < 1
                    ? "Ice Cream Sandwich"
                    : 4 === t[0] && t[1] < 4
                    ? "Jelly Bean"
                    : 4 === t[0] && t[1] >= 4
                    ? "KitKat"
                    : 5 === t[0]
                    ? "Lollipop"
                    : 6 === t[0]
                    ? "Marshmallow"
                    : 7 === t[0]
                    ? "Nougat"
                    : 8 === t[0]
                    ? "Oreo"
                    : 9 === t[0]
                    ? "Pie"
                    : void 0;
              }),
              (e.getVersionPrecision = function (e) {
                return e.split(".").length;
              }),
              (e.compareVersions = function (t, n, i) {
                void 0 === i && (i = !1);
                var r = e.getVersionPrecision(t),
                  s = e.getVersionPrecision(n),
                  o = Math.max(r, s),
                  a = 0,
                  l = e.map([t, n], function (t) {
                    var n = o - e.getVersionPrecision(t),
                      i = t + new Array(n + 1).join(".0");
                    return e
                      .map(i.split("."), function (e) {
                        return new Array(20 - e.length).join("0") + e;
                      })
                      .reverse();
                  });
                for (i && (a = o - Math.min(r, s)), o -= 1; o >= a; ) {
                  if (l[0][o] > l[1][o]) return 1;
                  if (l[0][o] === l[1][o]) {
                    if (o === a) return 0;
                    o -= 1;
                  } else if (l[0][o] < l[1][o]) return -1;
                }
              }),
              (e.map = function (e, t) {
                var n,
                  i = [];
                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                for (n = 0; n < e.length; n += 1) i.push(t(e[n]));
                return i;
              }),
              (e.find = function (e, t) {
                var n, i;
                if (Array.prototype.find)
                  return Array.prototype.find.call(e, t);
                for (n = 0, i = e.length; n < i; n += 1) {
                  var r = e[n];
                  if (t(r, n)) return r;
                }
              }),
              (e.assign = function (e) {
                for (
                  var t,
                    n,
                    i = e,
                    r = arguments.length,
                    s = new Array(r > 1 ? r - 1 : 0),
                    o = 1;
                  o < r;
                  o++
                )
                  s[o - 1] = arguments[o];
                if (Object.assign)
                  return Object.assign.apply(Object, [e].concat(s));
                var a = function () {
                  var e = s[t];
                  "object" == typeof e &&
                    null !== e &&
                    Object.keys(e).forEach(function (t) {
                      i[t] = e[t];
                    });
                };
                for (t = 0, n = s.length; t < n; t += 1) a();
                return e;
              }),
              (e.getBrowserAlias = function (e) {
                return i.BROWSER_ALIASES_MAP[e];
              }),
              (e.getBrowserTypeByAlias = function (e) {
                return i.BROWSER_MAP[e] || "";
              }),
              e
            );
          })();
        (t.default = r), (e.exports = t.default);
      },
      18: function (e, t, n) {
        "use strict";
        (t.__esModule = !0),
          (t.ENGINE_MAP =
            t.OS_MAP =
            t.PLATFORMS_MAP =
            t.BROWSER_MAP =
            t.BROWSER_ALIASES_MAP =
              void 0),
          (t.BROWSER_ALIASES_MAP = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku",
          }),
          (t.BROWSER_MAP = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser",
          }),
          (t.PLATFORMS_MAP = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv",
          }),
          (t.OS_MAP = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku",
          }),
          (t.ENGINE_MAP = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit",
          });
      },
      90: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i,
          r = (i = n(91)) && i.__esModule ? i : { default: i },
          s = n(18);
        var o = (function () {
          function e() {}
          var t;
          return (
            (e.getParser = function (e, t) {
              if ((void 0 === t && (t = !1), "string" != typeof e))
                throw new Error("UserAgent should be a string");
              return new r.default(e, t);
            }),
            (e.parse = function (e) {
              return new r.default(e).getResult();
            }),
            (t = [
              {
                key: "BROWSER_MAP",
                get: function () {
                  return s.BROWSER_MAP;
                },
              },
              {
                key: "ENGINE_MAP",
                get: function () {
                  return s.ENGINE_MAP;
                },
              },
              {
                key: "OS_MAP",
                get: function () {
                  return s.OS_MAP;
                },
              },
              {
                key: "PLATFORMS_MAP",
                get: function () {
                  return s.PLATFORMS_MAP;
                },
              },
            ]) &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              })(e, t),
            e
          );
        })();
        (t.default = o), (e.exports = t.default);
      },
      91: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i = l(n(92)),
          r = l(n(93)),
          s = l(n(94)),
          o = l(n(95)),
          a = l(n(17));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = (function () {
          function e(e, t) {
            if ((void 0 === t && (t = !1), null == e || "" === e))
              throw new Error("UserAgent parameter can't be empty");
            (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
          }
          var t = e.prototype;
          return (
            (t.getUA = function () {
              return this._ua;
            }),
            (t.test = function (e) {
              return e.test(this._ua);
            }),
            (t.parseBrowser = function () {
              var e = this;
              this.parsedResult.browser = {};
              var t = a.default.find(i.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array)
                  return t.test.some(function (t) {
                    return e.test(t);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                t && (this.parsedResult.browser = t.describe(this.getUA())),
                this.parsedResult.browser
              );
            }),
            (t.getBrowser = function () {
              return this.parsedResult.browser
                ? this.parsedResult.browser
                : this.parseBrowser();
            }),
            (t.getBrowserName = function (e) {
              return e
                ? String(this.getBrowser().name).toLowerCase() || ""
                : this.getBrowser().name || "";
            }),
            (t.getBrowserVersion = function () {
              return this.getBrowser().version;
            }),
            (t.getOS = function () {
              return this.parsedResult.os
                ? this.parsedResult.os
                : this.parseOS();
            }),
            (t.parseOS = function () {
              var e = this;
              this.parsedResult.os = {};
              var t = a.default.find(r.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array)
                  return t.test.some(function (t) {
                    return e.test(t);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                t && (this.parsedResult.os = t.describe(this.getUA())),
                this.parsedResult.os
              );
            }),
            (t.getOSName = function (e) {
              var t = this.getOS().name;
              return e ? String(t).toLowerCase() || "" : t || "";
            }),
            (t.getOSVersion = function () {
              return this.getOS().version;
            }),
            (t.getPlatform = function () {
              return this.parsedResult.platform
                ? this.parsedResult.platform
                : this.parsePlatform();
            }),
            (t.getPlatformType = function (e) {
              void 0 === e && (e = !1);
              var t = this.getPlatform().type;
              return e ? String(t).toLowerCase() || "" : t || "";
            }),
            (t.parsePlatform = function () {
              var e = this;
              this.parsedResult.platform = {};
              var t = a.default.find(s.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array)
                  return t.test.some(function (t) {
                    return e.test(t);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                t && (this.parsedResult.platform = t.describe(this.getUA())),
                this.parsedResult.platform
              );
            }),
            (t.getEngine = function () {
              return this.parsedResult.engine
                ? this.parsedResult.engine
                : this.parseEngine();
            }),
            (t.getEngineName = function (e) {
              return e
                ? String(this.getEngine().name).toLowerCase() || ""
                : this.getEngine().name || "";
            }),
            (t.parseEngine = function () {
              var e = this;
              this.parsedResult.engine = {};
              var t = a.default.find(o.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array)
                  return t.test.some(function (t) {
                    return e.test(t);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                t && (this.parsedResult.engine = t.describe(this.getUA())),
                this.parsedResult.engine
              );
            }),
            (t.parse = function () {
              return (
                this.parseBrowser(),
                this.parseOS(),
                this.parsePlatform(),
                this.parseEngine(),
                this
              );
            }),
            (t.getResult = function () {
              return a.default.assign({}, this.parsedResult);
            }),
            (t.satisfies = function (e) {
              var t = this,
                n = {},
                i = 0,
                r = {},
                s = 0;
              if (
                (Object.keys(e).forEach(function (t) {
                  var o = e[t];
                  "string" == typeof o
                    ? ((r[t] = o), (s += 1))
                    : "object" == typeof o && ((n[t] = o), (i += 1));
                }),
                i > 0)
              ) {
                var o = Object.keys(n),
                  l = a.default.find(o, function (e) {
                    return t.isOS(e);
                  });
                if (l) {
                  var u = this.satisfies(n[l]);
                  if (void 0 !== u) return u;
                }
                var c = a.default.find(o, function (e) {
                  return t.isPlatform(e);
                });
                if (c) {
                  var d = this.satisfies(n[c]);
                  if (void 0 !== d) return d;
                }
              }
              if (s > 0) {
                var f = Object.keys(r),
                  h = a.default.find(f, function (e) {
                    return t.isBrowser(e, !0);
                  });
                if (void 0 !== h) return this.compareVersion(r[h]);
              }
            }),
            (t.isBrowser = function (e, t) {
              void 0 === t && (t = !1);
              var n = this.getBrowserName().toLowerCase(),
                i = e.toLowerCase(),
                r = a.default.getBrowserTypeByAlias(i);
              return t && r && (i = r.toLowerCase()), i === n;
            }),
            (t.compareVersion = function (e) {
              var t = [0],
                n = e,
                i = !1,
                r = this.getBrowserVersion();
              if ("string" == typeof r)
                return (
                  ">" === e[0] || "<" === e[0]
                    ? ((n = e.substr(1)),
                      "=" === e[1] ? ((i = !0), (n = e.substr(2))) : (t = []),
                      ">" === e[0] ? t.push(1) : t.push(-1))
                    : "=" === e[0]
                    ? (n = e.substr(1))
                    : "~" === e[0] && ((i = !0), (n = e.substr(1))),
                  t.indexOf(a.default.compareVersions(r, n, i)) > -1
                );
            }),
            (t.isOS = function (e) {
              return this.getOSName(!0) === String(e).toLowerCase();
            }),
            (t.isPlatform = function (e) {
              return this.getPlatformType(!0) === String(e).toLowerCase();
            }),
            (t.isEngine = function (e) {
              return this.getEngineName(!0) === String(e).toLowerCase();
            }),
            (t.is = function (e, t) {
              return (
                void 0 === t && (t = !1),
                this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
              );
            }),
            (t.some = function (e) {
              var t = this;
              return (
                void 0 === e && (e = []),
                e.some(function (e) {
                  return t.is(e);
                })
              );
            }),
            e
          );
        })();
        (t.default = u), (e.exports = t.default);
      },
      92: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i,
          r = (i = n(17)) && i.__esModule ? i : { default: i },
          s = /version\/(\d+(\.?_?\d+)+)/i,
          o = [
            {
              test: [/googlebot/i],
              describe: function (e) {
                var t = { name: "Googlebot" },
                  n =
                    r.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                    r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/opera/i],
              describe: function (e) {
                var t = { name: "Opera" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/opr\/|opios/i],
              describe: function (e) {
                var t = { name: "Opera" },
                  n =
                    r.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                    r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/SamsungBrowser/i],
              describe: function (e) {
                var t = { name: "Samsung Internet for Android" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/Whale/i],
              describe: function (e) {
                var t = { name: "NAVER Whale Browser" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/MZBrowser/i],
              describe: function (e) {
                var t = { name: "MZ Browser" },
                  n =
                    r.default.getFirstMatch(
                      /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/focus/i],
              describe: function (e) {
                var t = { name: "Focus" },
                  n =
                    r.default.getFirstMatch(
                      /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/swing/i],
              describe: function (e) {
                var t = { name: "Swing" },
                  n =
                    r.default.getFirstMatch(
                      /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/coast/i],
              describe: function (e) {
                var t = { name: "Opera Coast" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/opt\/\d+(?:.?_?\d+)+/i],
              describe: function (e) {
                var t = { name: "Opera Touch" },
                  n =
                    r.default.getFirstMatch(
                      /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/yabrowser/i],
              describe: function (e) {
                var t = { name: "Yandex Browser" },
                  n =
                    r.default.getFirstMatch(
                      /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/ucbrowser/i],
              describe: function (e) {
                var t = { name: "UC Browser" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/Maxthon|mxios/i],
              describe: function (e) {
                var t = { name: "Maxthon" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/epiphany/i],
              describe: function (e) {
                var t = { name: "Epiphany" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/puffin/i],
              describe: function (e) {
                var t = { name: "Puffin" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/sleipnir/i],
              describe: function (e) {
                var t = { name: "Sleipnir" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/k-meleon/i],
              describe: function (e) {
                var t = { name: "K-Meleon" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/micromessenger/i],
              describe: function (e) {
                var t = { name: "WeChat" },
                  n =
                    r.default.getFirstMatch(
                      /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/qqbrowser/i],
              describe: function (e) {
                var t = {
                    name: /qqbrowserlite/i.test(e)
                      ? "QQ Browser Lite"
                      : "QQ Browser",
                  },
                  n =
                    r.default.getFirstMatch(
                      /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/msie|trident/i],
              describe: function (e) {
                var t = { name: "Internet Explorer" },
                  n = r.default.getFirstMatch(
                    /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/\sedg\//i],
              describe: function (e) {
                var t = { name: "Microsoft Edge" },
                  n = r.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/edg([ea]|ios)/i],
              describe: function (e) {
                var t = { name: "Microsoft Edge" },
                  n = r.default.getSecondMatch(
                    /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/vivaldi/i],
              describe: function (e) {
                var t = { name: "Vivaldi" },
                  n = r.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/seamonkey/i],
              describe: function (e) {
                var t = { name: "SeaMonkey" },
                  n = r.default.getFirstMatch(
                    /seamonkey\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/sailfish/i],
              describe: function (e) {
                var t = { name: "Sailfish" },
                  n = r.default.getFirstMatch(
                    /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/silk/i],
              describe: function (e) {
                var t = { name: "Amazon Silk" },
                  n = r.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/phantom/i],
              describe: function (e) {
                var t = { name: "PhantomJS" },
                  n = r.default.getFirstMatch(
                    /phantomjs\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/slimerjs/i],
              describe: function (e) {
                var t = { name: "SlimerJS" },
                  n = r.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function (e) {
                var t = { name: "BlackBerry" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/(web|hpw)[o0]s/i],
              describe: function (e) {
                var t = { name: "WebOS Browser" },
                  n =
                    r.default.getFirstMatch(s, e) ||
                    r.default.getFirstMatch(
                      /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/bada/i],
              describe: function (e) {
                var t = { name: "Bada" },
                  n = r.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/tizen/i],
              describe: function (e) {
                var t = { name: "Tizen" },
                  n =
                    r.default.getFirstMatch(
                      /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/qupzilla/i],
              describe: function (e) {
                var t = { name: "QupZilla" },
                  n =
                    r.default.getFirstMatch(
                      /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/firefox|iceweasel|fxios/i],
              describe: function (e) {
                var t = { name: "Firefox" },
                  n = r.default.getFirstMatch(
                    /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/electron/i],
              describe: function (e) {
                var t = { name: "Electron" },
                  n = r.default.getFirstMatch(
                    /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/MiuiBrowser/i],
              describe: function (e) {
                var t = { name: "Miui" },
                  n = r.default.getFirstMatch(
                    /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/chromium/i],
              describe: function (e) {
                var t = { name: "Chromium" },
                  n =
                    r.default.getFirstMatch(
                      /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    ) || r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/chrome|crios|crmo/i],
              describe: function (e) {
                var t = { name: "Chrome" },
                  n = r.default.getFirstMatch(
                    /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                    e
                  );
                return n && (t.version = n), t;
              },
            },
            {
              test: [/GSA/i],
              describe: function (e) {
                var t = { name: "Google Search" },
                  n = r.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: function (e) {
                var t = !e.test(/like android/i),
                  n = e.test(/android/i);
                return t && n;
              },
              describe: function (e) {
                var t = { name: "Android Browser" },
                  n = r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/playstation 4/i],
              describe: function (e) {
                var t = { name: "PlayStation 4" },
                  n = r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/safari|applewebkit/i],
              describe: function (e) {
                var t = { name: "Safari" },
                  n = r.default.getFirstMatch(s, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/.*/i],
              describe: function (e) {
                var t =
                  -1 !== e.search("\\(")
                    ? /^(.*)\/(.*)[ \t]\((.*)/
                    : /^(.*)\/(.*) /;
                return {
                  name: r.default.getFirstMatch(t, e),
                  version: r.default.getSecondMatch(t, e),
                };
              },
            },
          ];
        (t.default = o), (e.exports = t.default);
      },
      93: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i,
          r = (i = n(17)) && i.__esModule ? i : { default: i },
          s = n(18),
          o = [
            {
              test: [/Roku\/DVP/],
              describe: function (e) {
                var t = r.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                return { name: s.OS_MAP.Roku, version: t };
              },
            },
            {
              test: [/windows phone/i],
              describe: function (e) {
                var t = r.default.getFirstMatch(
                  /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                  e
                );
                return { name: s.OS_MAP.WindowsPhone, version: t };
              },
            },
            {
              test: [/windows /i],
              describe: function (e) {
                var t = r.default.getFirstMatch(
                    /Windows ((NT|XP)( \d\d?.\d)?)/i,
                    e
                  ),
                  n = r.default.getWindowsVersionName(t);
                return { name: s.OS_MAP.Windows, version: t, versionName: n };
              },
            },
            {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function (e) {
                var t = { name: s.OS_MAP.iOS },
                  n = r.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/macintosh/i],
              describe: function (e) {
                var t = r.default
                    .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                    .replace(/[_\s]/g, "."),
                  n = r.default.getMacOSVersionName(t),
                  i = { name: s.OS_MAP.MacOS, version: t };
                return n && (i.versionName = n), i;
              },
            },
            {
              test: [/(ipod|iphone|ipad)/i],
              describe: function (e) {
                var t = r.default
                  .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                  .replace(/[_\s]/g, ".");
                return { name: s.OS_MAP.iOS, version: t };
              },
            },
            {
              test: function (e) {
                var t = !e.test(/like android/i),
                  n = e.test(/android/i);
                return t && n;
              },
              describe: function (e) {
                var t = r.default.getFirstMatch(
                    /android[\s/-](\d+(\.\d+)*)/i,
                    e
                  ),
                  n = r.default.getAndroidVersionName(t),
                  i = { name: s.OS_MAP.Android, version: t };
                return n && (i.versionName = n), i;
              },
            },
            {
              test: [/(web|hpw)[o0]s/i],
              describe: function (e) {
                var t = r.default.getFirstMatch(
                    /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                    e
                  ),
                  n = { name: s.OS_MAP.WebOS };
                return t && t.length && (n.version = t), n;
              },
            },
            {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function (e) {
                var t =
                  r.default.getFirstMatch(
                    /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                    e
                  ) ||
                  r.default.getFirstMatch(
                    /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                    e
                  ) ||
                  r.default.getFirstMatch(/\bbb(\d+)/i, e);
                return { name: s.OS_MAP.BlackBerry, version: t };
              },
            },
            {
              test: [/bada/i],
              describe: function (e) {
                var t = r.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                return { name: s.OS_MAP.Bada, version: t };
              },
            },
            {
              test: [/tizen/i],
              describe: function (e) {
                var t = r.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                return { name: s.OS_MAP.Tizen, version: t };
              },
            },
            {
              test: [/linux/i],
              describe: function () {
                return { name: s.OS_MAP.Linux };
              },
            },
            {
              test: [/CrOS/],
              describe: function () {
                return { name: s.OS_MAP.ChromeOS };
              },
            },
            {
              test: [/PlayStation 4/],
              describe: function (e) {
                var t = r.default.getFirstMatch(
                  /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                  e
                );
                return { name: s.OS_MAP.PlayStation4, version: t };
              },
            },
          ];
        (t.default = o), (e.exports = t.default);
      },
      94: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i,
          r = (i = n(17)) && i.__esModule ? i : { default: i },
          s = n(18),
          o = [
            {
              test: [/googlebot/i],
              describe: function () {
                return { type: "bot", vendor: "Google" };
              },
            },
            {
              test: [/huawei/i],
              describe: function (e) {
                var t = r.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                  n = { type: s.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                return t && (n.model = t), n;
              },
            },
            {
              test: [/nexus\s*(?:7|8|9|10).*/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: "Nexus" };
              },
            },
            {
              test: [/ipad/i],
              describe: function () {
                return {
                  type: s.PLATFORMS_MAP.tablet,
                  vendor: "Apple",
                  model: "iPad",
                };
              },
            },
            {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function () {
                return {
                  type: s.PLATFORMS_MAP.tablet,
                  vendor: "Apple",
                  model: "iPad",
                };
              },
            },
            {
              test: [/kftt build/i],
              describe: function () {
                return {
                  type: s.PLATFORMS_MAP.tablet,
                  vendor: "Amazon",
                  model: "Kindle Fire HD 7",
                };
              },
            },
            {
              test: [/silk/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: "Amazon" };
              },
            },
            {
              test: [/tablet(?! pc)/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet };
              },
            },
            {
              test: function (e) {
                var t = e.test(/ipod|iphone/i),
                  n = e.test(/like (ipod|iphone)/i);
                return t && !n;
              },
              describe: function (e) {
                var t = r.default.getFirstMatch(/(ipod|iphone)/i, e);
                return {
                  type: s.PLATFORMS_MAP.mobile,
                  vendor: "Apple",
                  model: t,
                };
              },
            },
            {
              test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: "Nexus" };
              },
            },
            {
              test: [/[^-]mobi/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (e) {
                return "blackberry" === e.getBrowserName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
              },
            },
            {
              test: function (e) {
                return "bada" === e.getBrowserName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (e) {
                return "windows phone" === e.getBrowserName();
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
              },
            },
            {
              test: function (e) {
                var t = Number(String(e.getOSVersion()).split(".")[0]);
                return "android" === e.getOSName(!0) && t >= 3;
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet };
              },
            },
            {
              test: function (e) {
                return "android" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (e) {
                return "macos" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop, vendor: "Apple" };
              },
            },
            {
              test: function (e) {
                return "windows" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop };
              },
            },
            {
              test: function (e) {
                return "linux" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop };
              },
            },
            {
              test: function (e) {
                return "playstation 4" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tv };
              },
            },
            {
              test: function (e) {
                return "roku" === e.getOSName(!0);
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tv };
              },
            },
          ];
        (t.default = o), (e.exports = t.default);
      },
      95: function (e, t, n) {
        "use strict";
        (t.__esModule = !0), (t.default = void 0);
        var i,
          r = (i = n(17)) && i.__esModule ? i : { default: i },
          s = n(18),
          o = [
            {
              test: function (e) {
                return "microsoft edge" === e.getBrowserName(!0);
              },
              describe: function (e) {
                if (/\sedg\//i.test(e)) return { name: s.ENGINE_MAP.Blink };
                var t = r.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                return { name: s.ENGINE_MAP.EdgeHTML, version: t };
              },
            },
            {
              test: [/trident/i],
              describe: function (e) {
                var t = { name: s.ENGINE_MAP.Trident },
                  n = r.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: function (e) {
                return e.test(/presto/i);
              },
              describe: function (e) {
                var t = { name: s.ENGINE_MAP.Presto },
                  n = r.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: function (e) {
                var t = e.test(/gecko/i),
                  n = e.test(/like gecko/i);
                return t && !n;
              },
              describe: function (e) {
                var t = { name: s.ENGINE_MAP.Gecko },
                  n = r.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
            {
              test: [/(apple)?webkit\/537\.36/i],
              describe: function () {
                return { name: s.ENGINE_MAP.Blink };
              },
            },
            {
              test: [/(apple)?webkit/i],
              describe: function (e) {
                var t = { name: s.ENGINE_MAP.WebKit },
                  n = r.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                return n && (t.version = n), t;
              },
            },
          ];
        (t.default = o), (e.exports = t.default);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return st;
      });
      var i,
        r,
        s,
        o,
        a = Object.create,
        l = Object.defineProperty,
        u = Object.getPrototypeOf,
        c = Object.prototype.hasOwnProperty,
        d = Object.getOwnPropertyNames,
        f = Object.getOwnPropertyDescriptor,
        h = (e, t) => () => (
          t || e((t = { exports: {} }).exports, t), t.exports
        ),
        p = h((t) => {
          function n(e, t) {
            const n = Object.create(null),
              i = e.split(",");
            for (let e = 0; e < i.length; e++) n[i[e]] = !0;
            return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = {
              1: "TEXT",
              2: "CLASS",
              4: "STYLE",
              8: "PROPS",
              16: "FULL_PROPS",
              32: "HYDRATE_EVENTS",
              64: "STABLE_FRAGMENT",
              128: "KEYED_FRAGMENT",
              256: "UNKEYED_FRAGMENT",
              512: "NEED_PATCH",
              1024: "DYNAMIC_SLOTS",
              2048: "DEV_ROOT_FRAGMENT",
              [-1]: "HOISTED",
              [-2]: "BAIL",
            },
            r = n(
              "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
            ),
            s =
              "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
            o = n(s),
            a = n(
              s +
                ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
            ),
            l = /[>/="'\u0009\u000a\u000c\u0020]/,
            u = {},
            c = n(
              "animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"
            ),
            d = n(
              "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
            ),
            f = /;(?![^(]*\))/g,
            h = /:(.+)/;
          function p(e) {
            const t = {};
            return (
              e.split(f).forEach((e) => {
                if (e) {
                  const n = e.split(h);
                  n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
              }),
              t
            );
          }
          var m = n(
              "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
            ),
            g = n(
              "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
            ),
            v = n(
              "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
            ),
            y = /["'&<>]/,
            _ = /^-?>|<!--|-->|--!>|<!-$/g;
          function b(e, t) {
            if (e === t) return !0;
            let n = A(e),
              i = A(t);
            if (n || i) return !(!n || !i) && e.getTime() === t.getTime();
            if (((n = k(e)), (i = k(t)), n || i))
              return (
                !(!n || !i) &&
                (function (e, t) {
                  if (e.length !== t.length) return !1;
                  let n = !0;
                  for (let i = 0; n && i < e.length; i++) n = b(e[i], t[i]);
                  return n;
                })(e, t)
              );
            if (((n = z(e)), (i = z(t)), n || i)) {
              if (!n || !i) return !1;
              if (Object.keys(e).length !== Object.keys(t).length) return !1;
              for (const n in e) {
                const i = e.hasOwnProperty(n),
                  r = t.hasOwnProperty(n);
                if ((i && !r) || (!i && r) || !b(e[n], t[n])) return !1;
              }
            }
            return String(e) === String(t);
          }
          var w,
            x = (e, t) =>
              O(t)
                ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                      (e, [t, n]) => ((e[t + " =>"] = n), e),
                      {}
                    ),
                  }
                : P(t)
                ? { [`Set(${t.size})`]: [...t.values()] }
                : !z(t) || k(t) || D(t)
                ? t
                : String(t),
            T = Object.freeze({}),
            S = Object.freeze([]),
            C = /^on[^a-z]/,
            E = Object.assign,
            M = Object.prototype.hasOwnProperty,
            k = Array.isArray,
            O = (e) => "[object Map]" === N(e),
            P = (e) => "[object Set]" === N(e),
            A = (e) => e instanceof Date,
            L = (e) => "function" == typeof e,
            R = (e) => "string" == typeof e,
            z = (e) => null !== e && "object" == typeof e,
            I = Object.prototype.toString,
            N = (e) => I.call(e),
            D = (e) => "[object Object]" === N(e),
            F = n(
              ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
            ),
            B = (e) => {
              const t = Object.create(null);
              return (n) => t[n] || (t[n] = e(n));
            },
            j = /-(\w)/g,
            $ = B((e) => e.replace(j, (e, t) => (t ? t.toUpperCase() : ""))),
            W = /\B([A-Z])/g,
            q = B((e) => e.replace(W, "-$1").toLowerCase()),
            H = B((e) => e.charAt(0).toUpperCase() + e.slice(1)),
            G = B((e) => (e ? "on" + H(e) : ""));
          (t.EMPTY_ARR = S),
            (t.EMPTY_OBJ = T),
            (t.NO = () => !1),
            (t.NOOP = () => {}),
            (t.PatchFlagNames = i),
            (t.babelParserDefaultPlugins = [
              "bigInt",
              "optionalChaining",
              "nullishCoalescingOperator",
            ]),
            (t.camelize = $),
            (t.capitalize = H),
            (t.def = (e, t, n) => {
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n,
              });
            }),
            (t.escapeHtml = function (e) {
              const t = "" + e,
                n = y.exec(t);
              if (!n) return t;
              let i,
                r,
                s = "",
                o = 0;
              for (r = n.index; r < t.length; r++) {
                switch (t.charCodeAt(r)) {
                  case 34:
                    i = "&quot;";
                    break;
                  case 38:
                    i = "&amp;";
                    break;
                  case 39:
                    i = "&#39;";
                    break;
                  case 60:
                    i = "&lt;";
                    break;
                  case 62:
                    i = "&gt;";
                    break;
                  default:
                    continue;
                }
                o !== r && (s += t.substring(o, r)), (o = r + 1), (s += i);
              }
              return o !== r ? s + t.substring(o, r) : s;
            }),
            (t.escapeHtmlComment = function (e) {
              return e.replace(_, "");
            }),
            (t.extend = E),
            (t.generateCodeFrame = function (e, t = 0, n = e.length) {
              const i = e.split(/\r?\n/);
              let r = 0;
              const s = [];
              for (let e = 0; e < i.length; e++)
                if ((r += i[e].length + 1) >= t) {
                  for (let o = e - 2; o <= e + 2 || n > r; o++) {
                    if (o < 0 || o >= i.length) continue;
                    const a = o + 1;
                    s.push(
                      `${a}${" ".repeat(Math.max(3 - String(a).length, 0))}|  ${
                        i[o]
                      }`
                    );
                    const l = i[o].length;
                    if (o === e) {
                      const e = t - (r - l) + 1,
                        i = Math.max(1, n > r ? l - e : n - t);
                      s.push("   |  " + " ".repeat(e) + "^".repeat(i));
                    } else if (o > e) {
                      if (n > r) {
                        const e = Math.max(Math.min(n - r, l), 1);
                        s.push("   |  " + "^".repeat(e));
                      }
                      r += l + 1;
                    }
                  }
                  break;
                }
              return s.join("\n");
            }),
            (t.getGlobalThis = () =>
              w ||
              (w =
                "undefined" != typeof globalThis
                  ? globalThis
                  : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : {})),
            (t.hasChanged = (e, t) => e !== t && (e == e || t == t)),
            (t.hasOwn = (e, t) => M.call(e, t)),
            (t.hyphenate = q),
            (t.invokeArrayFns = (e, t) => {
              for (let n = 0; n < e.length; n++) e[n](t);
            }),
            (t.isArray = k),
            (t.isBooleanAttr = a),
            (t.isDate = A),
            (t.isFunction = L),
            (t.isGloballyWhitelisted = r),
            (t.isHTMLTag = m),
            (t.isIntegerKey = (e) =>
              R(e) &&
              "NaN" !== e &&
              "-" !== e[0] &&
              "" + parseInt(e, 10) === e),
            (t.isKnownAttr = d),
            (t.isMap = O),
            (t.isModelListener = (e) => e.startsWith("onUpdate:")),
            (t.isNoUnitNumericStyleProp = c),
            (t.isObject = z),
            (t.isOn = (e) => C.test(e)),
            (t.isPlainObject = D),
            (t.isPromise = (e) => z(e) && L(e.then) && L(e.catch)),
            (t.isReservedProp = F),
            (t.isSSRSafeAttrName = function (e) {
              if (u.hasOwnProperty(e)) return u[e];
              const t = l.test(e);
              return (
                t && console.error("unsafe attribute name: " + e), (u[e] = !t)
              );
            }),
            (t.isSVGTag = g),
            (t.isSet = P),
            (t.isSpecialBooleanAttr = o),
            (t.isString = R),
            (t.isSymbol = (e) => "symbol" == typeof e),
            (t.isVoidTag = v),
            (t.looseEqual = b),
            (t.looseIndexOf = function (e, t) {
              return e.findIndex((e) => b(e, t));
            }),
            (t.makeMap = n),
            (t.normalizeClass = function e(t) {
              let n = "";
              if (R(t)) n = t;
              else if (k(t))
                for (let i = 0; i < t.length; i++) {
                  const r = e(t[i]);
                  r && (n += r + " ");
                }
              else if (z(t)) for (const e in t) t[e] && (n += e + " ");
              return n.trim();
            }),
            (t.normalizeStyle = function e(t) {
              if (k(t)) {
                const n = {};
                for (let i = 0; i < t.length; i++) {
                  const r = t[i],
                    s = e(R(r) ? p(r) : r);
                  if (s) for (const e in s) n[e] = s[e];
                }
                return n;
              }
              if (z(t)) return t;
            }),
            (t.objectToString = I),
            (t.parseStringStyle = p),
            (t.propsToAttrMap = {
              acceptCharset: "accept-charset",
              className: "class",
              htmlFor: "for",
              httpEquiv: "http-equiv",
            }),
            (t.remove = (e, t) => {
              const n = e.indexOf(t);
              n > -1 && e.splice(n, 1);
            }),
            (t.slotFlagsText = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" }),
            (t.stringifyStyle = function (e) {
              let t = "";
              if (!e) return t;
              for (const n in e) {
                const i = e[n],
                  r = n.startsWith("--") ? n : q(n);
                (R(i) || ("number" == typeof i && c(r))) && (t += `${r}:${i};`);
              }
              return t;
            }),
            (t.toDisplayString = (e) =>
              null == e ? "" : z(e) ? JSON.stringify(e, x, 2) : String(e)),
            (t.toHandlerKey = G),
            (t.toNumber = (e) => {
              const t = parseFloat(e);
              return isNaN(t) ? e : t;
            }),
            (t.toRawType = (e) => N(e).slice(8, -1)),
            (t.toTypeString = N);
        }),
        m = h((e, t) => {
          t.exports = p();
        }),
        g = h((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var t,
            n = m(),
            i = new WeakMap(),
            r = [],
            s = Symbol("iterate"),
            o = Symbol("Map key iterate");
          function a(e, i = n.EMPTY_OBJ) {
            (function (e) {
              return e && !0 === e._isEffect;
            })(e) && (e = e.raw);
            const s = (function (e, n) {
              const i = function () {
                if (!i.active) return e();
                if (!r.includes(i)) {
                  u(i);
                  try {
                    return h(), r.push(i), (t = i), e();
                  } finally {
                    r.pop(), p(), (t = r[r.length - 1]);
                  }
                }
              };
              return (
                (i.id = l++),
                (i.allowRecurse = !!n.allowRecurse),
                (i._isEffect = !0),
                (i.active = !0),
                (i.raw = e),
                (i.deps = []),
                (i.options = n),
                i
              );
            })(e, i);
            return i.lazy || s(), s;
          }
          var l = 0;
          function u(e) {
            const { deps: t } = e;
            if (t.length) {
              for (let n = 0; n < t.length; n++) t[n].delete(e);
              t.length = 0;
            }
          }
          var c = !0,
            d = [];
          function f() {
            d.push(c), (c = !1);
          }
          function h() {
            d.push(c), (c = !0);
          }
          function p() {
            const e = d.pop();
            c = void 0 === e || e;
          }
          function g(e, n, r) {
            if (!c || void 0 === t) return;
            let s = i.get(e);
            s || i.set(e, (s = new Map()));
            let o = s.get(r);
            o || s.set(r, (o = new Set())),
              o.has(t) ||
                (o.add(t),
                t.deps.push(o),
                t.options.onTrack &&
                  t.options.onTrack({ effect: t, target: e, type: n, key: r }));
          }
          function v(e, r, a, l, u, c) {
            const d = i.get(e);
            if (!d) return;
            const f = new Set(),
              h = (e) => {
                e &&
                  e.forEach((e) => {
                    (e !== t || e.allowRecurse) && f.add(e);
                  });
              };
            if ("clear" === r) d.forEach(h);
            else if ("length" === a && n.isArray(e))
              d.forEach((e, t) => {
                ("length" === t || t >= l) && h(e);
              });
            else
              switch ((void 0 !== a && h(d.get(a)), r)) {
                case "add":
                  n.isArray(e)
                    ? n.isIntegerKey(a) && h(d.get("length"))
                    : (h(d.get(s)), n.isMap(e) && h(d.get(o)));
                  break;
                case "delete":
                  n.isArray(e) || (h(d.get(s)), n.isMap(e) && h(d.get(o)));
                  break;
                case "set":
                  n.isMap(e) && h(d.get(s));
              }
            f.forEach((t) => {
              t.options.onTrigger &&
                t.options.onTrigger({
                  effect: t,
                  target: e,
                  key: a,
                  type: r,
                  newValue: l,
                  oldValue: u,
                  oldTarget: c,
                }),
                t.options.scheduler ? t.options.scheduler(t) : t();
            });
          }
          var y = n.makeMap("__proto__,__v_isRef,__isVue"),
            _ = new Set(
              Object.getOwnPropertyNames(Symbol)
                .map((e) => Symbol[e])
                .filter(n.isSymbol)
            ),
            b = C(),
            w = C(!1, !0),
            x = C(!0),
            T = C(!0, !0),
            S = {};
          function C(e = !1, t = !1) {
            return function (i, r, s) {
              if ("__v_isReactive" === r) return !e;
              if ("__v_isReadonly" === r) return e;
              if (
                "__v_raw" === r &&
                s === (e ? (t ? oe : se) : t ? re : ie).get(i)
              )
                return i;
              const o = n.isArray(i);
              if (!e && o && n.hasOwn(S, r)) return Reflect.get(S, r, s);
              const a = Reflect.get(i, r, s);
              return (n.isSymbol(r) ? _.has(r) : y(r))
                ? a
                : (e || g(i, "get", r),
                  t
                    ? a
                    : me(a)
                    ? o && n.isIntegerKey(r)
                      ? a
                      : a.value
                    : n.isObject(a)
                    ? e
                      ? le(a)
                      : ae(a)
                    : a);
            };
          }
          ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
            const t = Array.prototype[e];
            S[e] = function (...e) {
              const n = he(this);
              for (let e = 0, t = this.length; e < t; e++) g(n, "get", e + "");
              const i = t.apply(n, e);
              return -1 === i || !1 === i ? t.apply(n, e.map(he)) : i;
            };
          }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
              const t = Array.prototype[e];
              S[e] = function (...e) {
                f();
                const n = t.apply(this, e);
                return p(), n;
              };
            });
          var E = k(),
            M = k(!0);
          function k(e = !1) {
            return function (t, i, r, s) {
              let o = t[i];
              if (
                !e &&
                ((r = he(r)), (o = he(o)), !n.isArray(t) && me(o) && !me(r))
              )
                return (o.value = r), !0;
              const a =
                  n.isArray(t) && n.isIntegerKey(i)
                    ? Number(i) < t.length
                    : n.hasOwn(t, i),
                l = Reflect.set(t, i, r, s);
              return (
                t === he(s) &&
                  (a
                    ? n.hasChanged(r, o) && v(t, "set", i, r, o)
                    : v(t, "add", i, r)),
                l
              );
            };
          }
          var O = {
              get: b,
              set: E,
              deleteProperty: function (e, t) {
                const i = n.hasOwn(e, t),
                  r = e[t],
                  s = Reflect.deleteProperty(e, t);
                return s && i && v(e, "delete", t, void 0, r), s;
              },
              has: function (e, t) {
                const i = Reflect.has(e, t);
                return (n.isSymbol(t) && _.has(t)) || g(e, "has", t), i;
              },
              ownKeys: function (e) {
                return (
                  g(e, "iterate", n.isArray(e) ? "length" : s),
                  Reflect.ownKeys(e)
                );
              },
            },
            P = {
              get: x,
              set: (e, t) => (
                console.warn(
                  `Set operation on key "${String(
                    t
                  )}" failed: target is readonly.`,
                  e
                ),
                !0
              ),
              deleteProperty: (e, t) => (
                console.warn(
                  `Delete operation on key "${String(
                    t
                  )}" failed: target is readonly.`,
                  e
                ),
                !0
              ),
            },
            A = n.extend({}, O, { get: w, set: M }),
            L = n.extend({}, P, { get: T }),
            R = (e) => (n.isObject(e) ? ae(e) : e),
            z = (e) => (n.isObject(e) ? le(e) : e),
            I = (e) => e,
            N = (e) => Reflect.getPrototypeOf(e);
          function D(e, t, n = !1, i = !1) {
            const r = he((e = e.__v_raw)),
              s = he(t);
            t !== s && !n && g(r, "get", t), !n && g(r, "get", s);
            const { has: o } = N(r),
              a = i ? I : n ? z : R;
            return o.call(r, t)
              ? a(e.get(t))
              : o.call(r, s)
              ? a(e.get(s))
              : void (e !== r && e.get(t));
          }
          function F(e, t = !1) {
            const n = this.__v_raw,
              i = he(n),
              r = he(e);
            return (
              e !== r && !t && g(i, "has", e),
              !t && g(i, "has", r),
              e === r ? n.has(e) : n.has(e) || n.has(r)
            );
          }
          function B(e, t = !1) {
            return (
              (e = e.__v_raw),
              !t && g(he(e), "iterate", s),
              Reflect.get(e, "size", e)
            );
          }
          function j(e) {
            e = he(e);
            const t = he(this);
            return N(t).has.call(t, e) || (t.add(e), v(t, "add", e, e)), this;
          }
          function $(e, t) {
            t = he(t);
            const i = he(this),
              { has: r, get: s } = N(i);
            let o = r.call(i, e);
            o ? ne(i, r, e) : ((e = he(e)), (o = r.call(i, e)));
            const a = s.call(i, e);
            return (
              i.set(e, t),
              o
                ? n.hasChanged(t, a) && v(i, "set", e, t, a)
                : v(i, "add", e, t),
              this
            );
          }
          function W(e) {
            const t = he(this),
              { has: n, get: i } = N(t);
            let r = n.call(t, e);
            r ? ne(t, n, e) : ((e = he(e)), (r = n.call(t, e)));
            const s = i ? i.call(t, e) : void 0,
              o = t.delete(e);
            return r && v(t, "delete", e, void 0, s), o;
          }
          function q() {
            const e = he(this),
              t = 0 !== e.size,
              i = n.isMap(e) ? new Map(e) : new Set(e),
              r = e.clear();
            return t && v(e, "clear", void 0, void 0, i), r;
          }
          function H(e, t) {
            return function (n, i) {
              const r = this,
                o = r.__v_raw,
                a = he(o),
                l = t ? I : e ? z : R;
              return (
                !e && g(a, "iterate", s),
                o.forEach((e, t) => n.call(i, l(e), l(t), r))
              );
            };
          }
          function G(e, t, i) {
            return function (...r) {
              const a = this.__v_raw,
                l = he(a),
                u = n.isMap(l),
                c = "entries" === e || (e === Symbol.iterator && u),
                d = "keys" === e && u,
                f = a[e](...r),
                h = i ? I : t ? z : R;
              return (
                !t && g(l, "iterate", d ? o : s),
                {
                  next() {
                    const { value: e, done: t } = f.next();
                    return t
                      ? { value: e, done: t }
                      : { value: c ? [h(e[0]), h(e[1])] : h(e), done: t };
                  },
                  [Symbol.iterator]() {
                    return this;
                  },
                }
              );
            };
          }
          function V(e) {
            return function (...t) {
              {
                const i = t[0] ? `on key "${t[0]}" ` : "";
                console.warn(
                  `${n.capitalize(
                    e
                  )} operation ${i}failed: target is readonly.`,
                  he(this)
                );
              }
              return "delete" !== e && this;
            };
          }
          var Y = {
              get(e) {
                return D(this, e);
              },
              get size() {
                return B(this);
              },
              has: F,
              add: j,
              set: $,
              delete: W,
              clear: q,
              forEach: H(!1, !1),
            },
            X = {
              get(e) {
                return D(this, e, !1, !0);
              },
              get size() {
                return B(this);
              },
              has: F,
              add: j,
              set: $,
              delete: W,
              clear: q,
              forEach: H(!1, !0),
            },
            U = {
              get(e) {
                return D(this, e, !0);
              },
              get size() {
                return B(this, !0);
              },
              has(e) {
                return F.call(this, e, !0);
              },
              add: V("add"),
              set: V("set"),
              delete: V("delete"),
              clear: V("clear"),
              forEach: H(!0, !1),
            },
            K = {
              get(e) {
                return D(this, e, !0, !0);
              },
              get size() {
                return B(this, !0);
              },
              has(e) {
                return F.call(this, e, !0);
              },
              add: V("add"),
              set: V("set"),
              delete: V("delete"),
              clear: V("clear"),
              forEach: H(!0, !0),
            };
          function Q(e, t) {
            const i = t ? (e ? K : X) : e ? U : Y;
            return (t, r, s) =>
              "__v_isReactive" === r
                ? !e
                : "__v_isReadonly" === r
                ? e
                : "__v_raw" === r
                ? t
                : Reflect.get(n.hasOwn(i, r) && r in t ? i : t, r, s);
          }
          ["keys", "values", "entries", Symbol.iterator].forEach((e) => {
            (Y[e] = G(e, !1, !1)),
              (U[e] = G(e, !0, !1)),
              (X[e] = G(e, !1, !0)),
              (K[e] = G(e, !0, !0));
          });
          var Z = { get: Q(!1, !1) },
            J = { get: Q(!1, !0) },
            ee = { get: Q(!0, !1) },
            te = { get: Q(!0, !0) };
          function ne(e, t, i) {
            const r = he(i);
            if (r !== i && t.call(e, r)) {
              const t = n.toRawType(e);
              console.warn(
                `Reactive ${t} contains both the raw and reactive versions of the same object${
                  "Map" === t ? " as keys" : ""
                }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
              );
            }
          }
          var ie = new WeakMap(),
            re = new WeakMap(),
            se = new WeakMap(),
            oe = new WeakMap();
          function ae(e) {
            return e && e.__v_isReadonly ? e : ue(e, !1, O, Z, ie);
          }
          function le(e) {
            return ue(e, !0, P, ee, se);
          }
          function ue(e, t, i, r, s) {
            if (!n.isObject(e))
              return (
                console.warn("value cannot be made reactive: " + String(e)), e
              );
            if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
            const o = s.get(e);
            if (o) return o;
            const a =
              (l = e).__v_skip || !Object.isExtensible(l)
                ? 0
                : (function (e) {
                    switch (n.toRawType(l)) {
                      case "Object":
                      case "Array":
                        return 1;
                      case "Map":
                      case "Set":
                      case "WeakMap":
                      case "WeakSet":
                        return 2;
                      default:
                        return 0;
                    }
                  })();
            var l;
            if (0 === a) return e;
            const u = new Proxy(e, 2 === a ? r : i);
            return s.set(e, u), u;
          }
          function ce(e) {
            return de(e) ? ce(e.__v_raw) : !(!e || !e.__v_isReactive);
          }
          function de(e) {
            return !(!e || !e.__v_isReadonly);
          }
          function fe(e) {
            return ce(e) || de(e);
          }
          function he(e) {
            return (e && he(e.__v_raw)) || e;
          }
          var pe = (e) => (n.isObject(e) ? ae(e) : e);
          function me(e) {
            return Boolean(e && !0 === e.__v_isRef);
          }
          function ge(e, t = !1) {
            return me(e)
              ? e
              : new (class {
                  constructor(e, t = !1) {
                    (this._rawValue = e),
                      (this._shallow = t),
                      (this.__v_isRef = !0),
                      (this._value = t ? e : pe(e));
                  }
                  get value() {
                    return g(he(this), "get", "value"), this._value;
                  }
                  set value(e) {
                    n.hasChanged(he(e), this._rawValue) &&
                      ((this._rawValue = e),
                      (this._value = this._shallow ? e : pe(e)),
                      v(he(this), "set", "value", e));
                  }
                })(e, t);
          }
          function ve(e) {
            return me(e) ? e.value : e;
          }
          var ye = {
            get: (e, t, n) => ve(Reflect.get(e, t, n)),
            set: (e, t, n, i) => {
              const r = e[t];
              return me(r) && !me(n)
                ? ((r.value = n), !0)
                : Reflect.set(e, t, n, i);
            },
          };
          function _e(e, t) {
            return me(e[t])
              ? e[t]
              : new (class {
                  constructor(e, t) {
                    (this._object = e), (this._key = t), (this.__v_isRef = !0);
                  }
                  get value() {
                    return this._object[this._key];
                  }
                  set value(e) {
                    this._object[this._key] = e;
                  }
                })(e, t);
          }
          (e.ITERATE_KEY = s),
            (e.computed = function (e) {
              let t, i;
              return (
                n.isFunction(e)
                  ? ((t = e),
                    (i = () => {
                      console.warn(
                        "Write operation failed: computed value is readonly"
                      );
                    }))
                  : ((t = e.get), (i = e.set)),
                new (class {
                  constructor(e, t, n) {
                    (this._setter = t),
                      (this._dirty = !0),
                      (this.__v_isRef = !0),
                      (this.effect = a(e, {
                        lazy: !0,
                        scheduler: () => {
                          this._dirty ||
                            ((this._dirty = !0), v(he(this), "set", "value"));
                        },
                      })),
                      (this.__v_isReadonly = n);
                  }
                  get value() {
                    const e = he(this);
                    return (
                      e._dirty && ((e._value = this.effect()), (e._dirty = !1)),
                      g(e, "get", "value"),
                      e._value
                    );
                  }
                  set value(e) {
                    this._setter(e);
                  }
                })(t, i, n.isFunction(e) || !e.set)
              );
            }),
            (e.customRef = function (e) {
              return new (class {
                constructor(e) {
                  this.__v_isRef = !0;
                  const { get: t, set: n } = e(
                    () => g(this, "get", "value"),
                    () => v(this, "set", "value")
                  );
                  (this._get = t), (this._set = n);
                }
                get value() {
                  return this._get();
                }
                set value(e) {
                  this._set(e);
                }
              })(e);
            }),
            (e.effect = a),
            (e.enableTracking = h),
            (e.isProxy = fe),
            (e.isReactive = ce),
            (e.isReadonly = de),
            (e.isRef = me),
            (e.markRaw = function (e) {
              return n.def(e, "__v_skip", !0), e;
            }),
            (e.pauseTracking = f),
            (e.proxyRefs = function (e) {
              return ce(e) ? e : new Proxy(e, ye);
            }),
            (e.reactive = ae),
            (e.readonly = le),
            (e.ref = function (e) {
              return ge(e);
            }),
            (e.resetTracking = p),
            (e.shallowReactive = function (e) {
              return ue(e, !1, A, J, re);
            }),
            (e.shallowReadonly = function (e) {
              return ue(e, !0, L, te, oe);
            }),
            (e.shallowRef = function (e) {
              return ge(e, !0);
            }),
            (e.stop = function (e) {
              e.active &&
                (u(e), e.options.onStop && e.options.onStop(), (e.active = !1));
            }),
            (e.toRaw = he),
            (e.toRef = _e),
            (e.toRefs = function (e) {
              fe(e) ||
                console.warn(
                  "toRefs() expects a reactive object but received a plain one."
                );
              const t = n.isArray(e) ? new Array(e.length) : {};
              for (const n in e) t[n] = _e(e, n);
              return t;
            }),
            (e.track = g),
            (e.trigger = v),
            (e.triggerRef = function (e) {
              v(he(e), "set", "value", e.value);
            }),
            (e.unref = ve);
        }),
        v = h((e, t) => {
          t.exports = g();
        }),
        y = !1,
        _ = !1,
        b = [];
      function w() {
        (y = !1), (_ = !0);
        for (let e = 0; e < b.length; e++) b[e]();
        (b.length = 0), (_ = !1);
      }
      var x = !0;
      function T(e) {
        r = e;
      }
      var S = [],
        C = [],
        E = [];
      function M(e, t) {
        e._x_attributeCleanups &&
          Object.entries(e._x_attributeCleanups).forEach(([n, i]) => {
            (void 0 === t || t.includes(n)) &&
              (i.forEach((e) => e()), delete e._x_attributeCleanups[n]);
          });
      }
      var k = new MutationObserver(N),
        O = !1;
      function P() {
        k.observe(document, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
        }),
          (O = !0);
      }
      var A = [],
        L = !1;
      function R(e) {
        if (!O) return e();
        (A = A.concat(k.takeRecords())).length &&
          !L &&
          ((L = !0),
          queueMicrotask(() => {
            N(A), (A.length = 0), (L = !1);
          })),
          k.disconnect(),
          (O = !1);
        let t = e();
        return P(), t;
      }
      var z = !1,
        I = [];
      function N(e) {
        if (z) return void (I = I.concat(e));
        let t = [],
          n = [],
          i = new Map(),
          r = new Map();
        for (let s = 0; s < e.length; s++)
          if (
            !e[s].target._x_ignoreMutationObserver &&
            ("childList" === e[s].type &&
              (e[s].addedNodes.forEach((e) => 1 === e.nodeType && t.push(e)),
              e[s].removedNodes.forEach((e) => 1 === e.nodeType && n.push(e))),
            "attributes" === e[s].type)
          ) {
            let t = e[s].target,
              n = e[s].attributeName,
              o = e[s].oldValue,
              a = () => {
                i.has(t) || i.set(t, []),
                  i.get(t).push({ name: n, value: t.getAttribute(n) });
              },
              l = () => {
                r.has(t) || r.set(t, []), r.get(t).push(n);
              };
            t.hasAttribute(n) && null === o
              ? a()
              : t.hasAttribute(n)
              ? (l(), a())
              : l();
          }
        r.forEach((e, t) => {
          M(t, e);
        }),
          i.forEach((e, t) => {
            S.forEach((n) => n(t, e));
          });
        for (let e of n) t.includes(e) || C.forEach((t) => t(e));
        t.forEach((e) => {
          (e._x_ignoreSelf = !0), (e._x_ignore = !0);
        });
        for (let e of t)
          n.includes(e) ||
            (e.isConnected &&
              (delete e._x_ignoreSelf,
              delete e._x_ignore,
              E.forEach((t) => t(e)),
              (e._x_ignore = !0),
              (e._x_ignoreSelf = !0)));
        t.forEach((e) => {
          delete e._x_ignoreSelf, delete e._x_ignore;
        }),
          (t = null),
          (n = null),
          (i = null),
          (r = null);
      }
      function D(e, t, n) {
        return (
          (e._x_dataStack = [t, ...B(n || e)]),
          () => {
            e._x_dataStack = e._x_dataStack.filter((e) => e !== t);
          }
        );
      }
      function F(e, t) {
        let n = e._x_dataStack[0];
        Object.entries(t).forEach(([e, t]) => {
          n[e] = t;
        });
      }
      function B(e) {
        return e._x_dataStack
          ? e._x_dataStack
          : "function" == typeof ShadowRoot && e instanceof ShadowRoot
          ? B(e.host)
          : e.parentNode
          ? B(e.parentNode)
          : [];
      }
      function j(e) {
        let t = new Proxy(
          {},
          {
            ownKeys: () =>
              Array.from(new Set(e.flatMap((e) => Object.keys(e)))),
            has: (t, n) => e.some((e) => e.hasOwnProperty(n)),
            get: (n, i) =>
              (e.find((e) => {
                if (e.hasOwnProperty(i)) {
                  let n = Object.getOwnPropertyDescriptor(e, i);
                  if (
                    (n.get && n.get._x_alreadyBound) ||
                    (n.set && n.set._x_alreadyBound)
                  )
                    return !0;
                  if ((n.get || n.set) && n.enumerable) {
                    let r = n.get,
                      s = n.set,
                      o = n;
                    (r = r && r.bind(t)),
                      (s = s && s.bind(t)),
                      r && (r._x_alreadyBound = !0),
                      s && (s._x_alreadyBound = !0),
                      Object.defineProperty(e, i, { ...o, get: r, set: s });
                  }
                  return !0;
                }
                return !1;
              }) || {})[i],
            set: (t, n, i) => {
              let r = e.find((e) => e.hasOwnProperty(n));
              return r ? (r[n] = i) : (e[e.length - 1][n] = i), !0;
            },
          }
        );
        return t;
      }
      function $(e) {
        let t = (n, i = "") => {
          Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
            ([r, { value: s, enumerable: o }]) => {
              if (!1 === o || void 0 === s) return;
              let a = "" === i ? r : `${i}.${r}`;
              var l;
              "object" == typeof s && null !== s && s._x_interceptor
                ? (n[r] = s.initialize(e, a, r))
                : "object" != typeof (l = s) ||
                  Array.isArray(l) ||
                  null === l ||
                  s === n ||
                  s instanceof Element ||
                  t(s, a);
            }
          );
        };
        return t(e);
      }
      function W(e, t = () => {}) {
        let n = {
          initialValue: void 0,
          _x_interceptor: !0,
          initialize(t, n, i) {
            return e(
              this.initialValue,
              () =>
                (function (e, t) {
                  return n.split(".").reduce((e, t) => e[t], e);
                })(t),
              (e) =>
                (function e(t, n, i) {
                  if (
                    ("string" == typeof n && (n = n.split(".")), 1 !== n.length)
                  ) {
                    if (0 === n.length) throw error;
                    return t[n[0]] || (t[n[0]] = {}), e(t[n[0]], n.slice(1), i);
                  }
                  t[n[0]] = i;
                })(t, n, e),
              n,
              i
            );
          },
        };
        return (
          t(n),
          (e) => {
            if ("object" == typeof e && null !== e && e._x_interceptor) {
              let t = n.initialize.bind(n);
              n.initialize = (i, r, s) => {
                let o = e.initialize(i, r, s);
                return (n.initialValue = o), t(i, r, s);
              };
            } else n.initialValue = e;
            return n;
          }
        );
      }
      var q = {};
      function H(e, t) {
        q[e] = t;
      }
      function G(e, t) {
        return (
          Object.entries(q).forEach(([n, i]) => {
            Object.defineProperty(e, "$" + n, {
              get: () => i(t, { Alpine: He, interceptor: W }),
              enumerable: !1,
            });
          }),
          e
        );
      }
      function V(e, t, n) {
        Object.assign(e, { el: t, expression: n }),
          console.warn(
            `Alpine Expression Error: ${e.message}\n\n${
              n ? 'Expression: "' + n + '"\n\n' : ""
            }`,
            t
          ),
          setTimeout(() => {
            throw e;
          }, 0);
      }
      function Y(e, t, n = {}) {
        let i;
        return X(e, t)((e) => (i = e), n), i;
      }
      function X(...e) {
        return U(...e);
      }
      var U = K;
      function K(e, t) {
        let n = {};
        G(n, e);
        let i = [n, ...B(e)];
        if ("function" == typeof t)
          return (function (e, t) {
            return (n = () => {}, { scope: i = {}, params: r = [] } = {}) => {
              Z(n, t.apply(j([i, ...e]), r));
            };
          })(i, t);
        let r = (function (e, t, n) {
          let i = (function (e, t) {
            if (Q[e]) return Q[e];
            let n = Object.getPrototypeOf(async function () {}).constructor,
              i =
                /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
                  ? `(() => { ${e} })()`
                  : e,
              r = (() => {
                try {
                  return new n(
                    ["__self", "scope"],
                    `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`
                  );
                } catch (n) {
                  return V(n, t, e), Promise.resolve();
                }
              })();
            return (Q[e] = r), r;
          })(t, n);
          return (r = () => {}, { scope: s = {}, params: o = [] } = {}) => {
            (i.result = void 0), (i.finished = !1);
            let a = j([s, ...e]);
            if ("function" == typeof i) {
              let e = i(i, a).catch((e) => V(e, n, t));
              i.finished
                ? (Z(r, i.result, a, o, n), (i.result = void 0))
                : e
                    .then((e) => {
                      Z(r, e, a, o, n);
                    })
                    .catch((e) => V(e, n, t))
                    .finally(() => (i.result = void 0));
            }
          };
        })(i, t, e);
        return function (e, t, n, ...i) {
          try {
            return n(...i);
          } catch (n) {
            V(n, e, t);
          }
        }.bind(null, e, t, r);
      }
      var Q = {};
      function Z(e, t, n, i, r) {
        if ("function" == typeof t) {
          let s = t.apply(n, i);
          s instanceof Promise
            ? s.then((t) => Z(e, t, n, i)).catch((e) => V(e, r, t))
            : e(s);
        } else e(t);
      }
      var J = "x-";
      function ee(e = "") {
        return J + e;
      }
      var te = {};
      function ne(e, t) {
        te[e] = t;
      }
      function ie(e, t, n) {
        let i = {};
        return Array.from(t)
          .map(le((e, t) => (i[e] = t)))
          .filter(de)
          .map(
            (function (e, t) {
              return ({ name: n, value: i }) => {
                let r = n.match(fe()),
                  s = n.match(/:([a-zA-Z0-9\-:]+)/),
                  o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                  a = t || e[n] || n;
                return {
                  type: r ? r[1] : null,
                  value: s ? s[1] : null,
                  modifiers: o.map((e) => e.replace(".", "")),
                  expression: i,
                  original: a,
                };
              };
            })(i, n)
          )
          .sort(pe)
          .map((t) =>
            (function (e, t) {
              let n = te[t.type] || (() => {}),
                i = [],
                [o, a] = (function (e) {
                  let t = () => {};
                  return [
                    (n) => {
                      let i = r(n);
                      e._x_effects ||
                        ((e._x_effects = new Set()),
                        (e._x_runEffects = () => {
                          e._x_effects.forEach((e) => e());
                        })),
                        e._x_effects.add(i),
                        (t = () => {
                          void 0 !== i && (e._x_effects.delete(i), s(i));
                        });
                    },
                    () => {
                      t();
                    },
                  ];
                })(e);
              i.push(a);
              let l = {
                  Alpine: He,
                  effect: o,
                  cleanup: (e) => i.push(e),
                  evaluateLater: X.bind(X, e),
                  evaluate: Y.bind(Y, e),
                },
                u = () => i.forEach((e) => e());
              !(function (e, t, n) {
                e._x_attributeCleanups || (e._x_attributeCleanups = {}),
                  e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
                  e._x_attributeCleanups[t].push(n);
              })(e, t.original, u);
              let c = () => {
                e._x_ignore ||
                  e._x_ignoreSelf ||
                  (n.inline && n.inline(e, t, l),
                  (n = n.bind(n, e, t, l)),
                  re ? se.get(oe).push(n) : n());
              };
              return (c.runCleanups = u), c;
            })(e, t)
          );
      }
      var re = !1,
        se = new Map(),
        oe = Symbol(),
        ae =
          (e, t) =>
          ({ name: n, value: i }) => (
            n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: i }
          );
      function le(e = () => {}) {
        return ({ name: t, value: n }) => {
          let { name: i, value: r } = ue.reduce((e, t) => t(e), {
            name: t,
            value: n,
          });
          return i !== t && e(i, t), { name: i, value: r };
        };
      }
      var ue = [];
      function ce(e) {
        ue.push(e);
      }
      function de({ name: e }) {
        return fe().test(e);
      }
      var fe = () => new RegExp(`^${J}([^:^.]+)\\b`),
        he = [
          "ignore",
          "ref",
          "data",
          "id",
          "bind",
          "init",
          "for",
          "model",
          "transition",
          "show",
          "if",
          "DEFAULT",
          "element",
        ];
      function pe(e, t) {
        let n = -1 === he.indexOf(e.type) ? "DEFAULT" : e.type,
          i = -1 === he.indexOf(t.type) ? "DEFAULT" : t.type;
        return he.indexOf(n) - he.indexOf(i);
      }
      function me(e, t, n = {}) {
        e.dispatchEvent(
          new CustomEvent(t, {
            detail: n,
            bubbles: !0,
            composed: !0,
            cancelable: !0,
          })
        );
      }
      var ge = [],
        ve = !1;
      function ye(e) {
        ge.push(e),
          queueMicrotask(() => {
            ve ||
              setTimeout(() => {
                _e();
              });
          });
      }
      function _e() {
        for (ve = !1; ge.length; ) ge.shift()();
      }
      function be(e, t) {
        if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
          return void Array.from(e.children).forEach((e) => be(e, t));
        let n = !1;
        if ((t(e, () => (n = !0)), n)) return;
        let i = e.firstElementChild;
        for (; i; ) be(i, t), (i = i.nextElementSibling);
      }
      function we(e, ...t) {
        console.warn("Alpine Warning: " + e, ...t);
      }
      var xe = [],
        Te = [];
      function Se() {
        return xe.map((e) => e());
      }
      function Ce() {
        return xe.concat(Te).map((e) => e());
      }
      function Ee(e) {
        xe.push(e);
      }
      function Me(e, t = !1) {
        return ke(e, (e) => {
          if ((t ? Ce() : Se()).some((t) => e.matches(t))) return !0;
        });
      }
      function ke(e, t) {
        if (e) {
          if (t(e)) return e;
          if (e.parentElement) return ke(e.parentElement, t);
        }
      }
      function Oe(e, t = be) {
        !(function (e) {
          re = !0;
          let t = Symbol();
          (oe = t), se.set(t, []);
          let n = () => {
            for (; se.get(t).length; ) se.get(t).shift()();
            se.delete(t);
          };
          e(), (re = !1), n();
        })(() => {
          t(e, (e, t) => {
            ie(e, e.attributes).forEach((e) => e()), e._x_ignore && t();
          });
        });
      }
      function Pe(e, t) {
        return Array.isArray(t)
          ? Ae(e, t.join(" "))
          : "object" == typeof t && null !== t
          ? (function (e, t) {
              let n = (e) => e.split(" ").filter(Boolean),
                i = Object.entries(t)
                  .flatMap(([e, t]) => !!t && n(e))
                  .filter(Boolean),
                r = Object.entries(t)
                  .flatMap(([e, t]) => !t && n(e))
                  .filter(Boolean),
                s = [],
                o = [];
              return (
                r.forEach((t) => {
                  e.classList.contains(t) && (e.classList.remove(t), o.push(t));
                }),
                i.forEach((t) => {
                  e.classList.contains(t) || (e.classList.add(t), s.push(t));
                }),
                () => {
                  o.forEach((t) => e.classList.add(t)),
                    s.forEach((t) => e.classList.remove(t));
                }
              );
            })(e, t)
          : "function" == typeof t
          ? Pe(e, t())
          : Ae(e, t);
      }
      function Ae(e, t) {
        return (
          (t = !0 === t ? (t = "") : t || ""),
          (n = t
            .split(" ")
            .filter((t) => !e.classList.contains(t))
            .filter(Boolean)),
          e.classList.add(...n),
          () => {
            e.classList.remove(...n);
          }
        );
        var n;
      }
      function Le(e, t) {
        return "object" == typeof t && null !== t
          ? (function (e, t) {
              let n = {};
              return (
                Object.entries(t).forEach(([t, i]) => {
                  (n[t] = e.style[t]),
                    e.style.setProperty(
                      t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                      i
                    );
                }),
                setTimeout(() => {
                  0 === e.style.length && e.removeAttribute("style");
                }),
                () => {
                  Le(e, n);
                }
              );
            })(e, t)
          : (function (e, t) {
              let n = e.getAttribute("style", t);
              return (
                e.setAttribute("style", t),
                () => {
                  e.setAttribute("style", n);
                }
              );
            })(e, t);
      }
      function Re(e, t = () => {}) {
        let n = !1;
        return function () {
          n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
        };
      }
      function ze(e, t, n = {}) {
        e._x_transition ||
          (e._x_transition = {
            enter: { during: n, start: n, end: n },
            leave: { during: n, start: n, end: n },
            in(n = () => {}, i = () => {}) {
              Ie(
                e,
                t,
                {
                  during: this.enter.during,
                  start: this.enter.start,
                  end: this.enter.end,
                },
                n,
                i
              );
            },
            out(n = () => {}, i = () => {}) {
              Ie(
                e,
                t,
                {
                  during: this.leave.during,
                  start: this.leave.start,
                  end: this.leave.end,
                },
                n,
                i
              );
            },
          });
      }
      function Ie(
        e,
        t,
        { during: n, start: i, end: r } = {},
        s = () => {},
        o = () => {}
      ) {
        if (
          (e._x_transitioning && e._x_transitioning.cancel(),
          0 === Object.keys(n).length &&
            0 === Object.keys(i).length &&
            0 === Object.keys(r).length)
        )
          return s(), void o();
        let a, l, u;
        !(function (e, t) {
          let n,
            i,
            r,
            s = Re(() => {
              R(() => {
                (n = !0),
                  i || t.before(),
                  r || (t.end(), _e()),
                  t.after(),
                  e.isConnected && t.cleanup(),
                  delete e._x_transitioning;
              });
            });
          (e._x_transitioning = {
            beforeCancels: [],
            beforeCancel(e) {
              this.beforeCancels.push(e);
            },
            cancel: Re(function () {
              for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
              s();
            }),
            finish: s,
          }),
            R(() => {
              t.start(), t.during();
            }),
            (ve = !0),
            requestAnimationFrame(() => {
              if (n) return;
              let s =
                  1e3 *
                  Number(
                    getComputedStyle(e)
                      .transitionDuration.replace(/,.*/, "")
                      .replace("s", "")
                  ),
                o =
                  1e3 *
                  Number(
                    getComputedStyle(e)
                      .transitionDelay.replace(/,.*/, "")
                      .replace("s", "")
                  );
              0 === s &&
                (s =
                  1e3 *
                  Number(
                    getComputedStyle(e).animationDuration.replace("s", "")
                  )),
                R(() => {
                  t.before();
                }),
                (i = !0),
                requestAnimationFrame(() => {
                  n ||
                    (R(() => {
                      t.end();
                    }),
                    _e(),
                    setTimeout(e._x_transitioning.finish, s + o),
                    (r = !0));
                });
            });
        })(e, {
          start() {
            a = t(e, i);
          },
          during() {
            l = t(e, n);
          },
          before: s,
          end() {
            a(), (u = t(e, r));
          },
          after: o,
          cleanup() {
            l(), u();
          },
        });
      }
      function Ne(e, t, n) {
        if (-1 === e.indexOf(t)) return n;
        const i = e[e.indexOf(t) + 1];
        if (!i) return n;
        if ("scale" === t && isNaN(i)) return n;
        if ("duration" === t) {
          let e = i.match(/([0-9]+)ms/);
          if (e) return e[1];
        }
        return "origin" === t &&
          ["top", "right", "left", "center", "bottom"].includes(
            e[e.indexOf(t) + 2]
          )
          ? [i, e[e.indexOf(t) + 2]].join(" ")
          : i;
      }
      ne(
        "transition",
        (e, { value: t, modifiers: n, expression: i }, { evaluate: r }) => {
          "function" == typeof i && (i = r(i)),
            i
              ? (function (e, t, n) {
                  ze(e, Pe, ""),
                    {
                      enter: (t) => {
                        e._x_transition.enter.during = t;
                      },
                      "enter-start": (t) => {
                        e._x_transition.enter.start = t;
                      },
                      "enter-end": (t) => {
                        e._x_transition.enter.end = t;
                      },
                      leave: (t) => {
                        e._x_transition.leave.during = t;
                      },
                      "leave-start": (t) => {
                        e._x_transition.leave.start = t;
                      },
                      "leave-end": (t) => {
                        e._x_transition.leave.end = t;
                      },
                    }[n](t);
                })(e, i, t)
              : (function (e, t, n) {
                  ze(e, Le);
                  let i = !t.includes("in") && !t.includes("out") && !n,
                    r = i || t.includes("in") || ["enter"].includes(n),
                    s = i || t.includes("out") || ["leave"].includes(n);
                  t.includes("in") &&
                    !i &&
                    (t = t.filter((e, n) => n < t.indexOf("out"))),
                    t.includes("out") &&
                      !i &&
                      (t = t.filter((e, n) => n > t.indexOf("out")));
                  let o = !t.includes("opacity") && !t.includes("scale"),
                    a = o || t.includes("opacity") ? 0 : 1,
                    l = o || t.includes("scale") ? Ne(t, "scale", 95) / 100 : 1,
                    u = Ne(t, "delay", 0),
                    c = Ne(t, "origin", "center"),
                    d = Ne(t, "duration", 150) / 1e3,
                    f = Ne(t, "duration", 75) / 1e3,
                    h = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                  r &&
                    ((e._x_transition.enter.during = {
                      transformOrigin: c,
                      transitionDelay: u,
                      transitionProperty: "opacity, transform",
                      transitionDuration: d + "s",
                      transitionTimingFunction: h,
                    }),
                    (e._x_transition.enter.start = {
                      opacity: a,
                      transform: `scale(${l})`,
                    }),
                    (e._x_transition.enter.end = {
                      opacity: 1,
                      transform: "scale(1)",
                    })),
                    s &&
                      ((e._x_transition.leave.during = {
                        transformOrigin: c,
                        transitionDelay: u,
                        transitionProperty: "opacity, transform",
                        transitionDuration: f + "s",
                        transitionTimingFunction: h,
                      }),
                      (e._x_transition.leave.start = {
                        opacity: 1,
                        transform: "scale(1)",
                      }),
                      (e._x_transition.leave.end = {
                        opacity: a,
                        transform: `scale(${l})`,
                      }));
                })(e, n, t);
        }
      ),
        (window.Element.prototype._x_toggleAndCascadeWithTransitions =
          function (e, t, n, i) {
            let r = () => {
              "visible" === document.visibilityState
                ? requestAnimationFrame(n)
                : setTimeout(n);
            };
            t
              ? e._x_transition &&
                (e._x_transition.enter || e._x_transition.leave)
                ? e._x_transition.enter &&
                  (Object.entries(e._x_transition.enter.during).length ||
                    Object.entries(e._x_transition.enter.start).length ||
                    Object.entries(e._x_transition.enter.end).length)
                  ? e._x_transition.in(n)
                  : r()
                : e._x_transition
                ? e._x_transition.in(n)
                : r()
              : ((e._x_hidePromise = e._x_transition
                  ? new Promise((t, n) => {
                      e._x_transition.out(
                        () => {},
                        () => t(i)
                      ),
                        e._x_transitioning.beforeCancel(() =>
                          n({ isFromCancelledTransition: !0 })
                        );
                    })
                  : Promise.resolve(i)),
                queueMicrotask(() => {
                  let t = (function e(t) {
                    let n = t.parentNode;
                    if (n) return n._x_hidePromise ? n : e(n);
                  })(e);
                  t
                    ? (t._x_hideChildren || (t._x_hideChildren = []),
                      t._x_hideChildren.push(e))
                    : queueMicrotask(() => {
                        let t = (e) => {
                          let n = Promise.all([
                            e._x_hidePromise,
                            ...(e._x_hideChildren || []).map(t),
                          ]).then(([e]) => e());
                          return (
                            delete e._x_hidePromise, delete e._x_hideChildren, n
                          );
                        };
                        t(e).catch((e) => {
                          if (!e.isFromCancelledTransition) throw e;
                        });
                      });
                }));
          });
      var De = !1;
      function Fe(e, t = () => {}) {
        return (...n) => (De ? t(...n) : e(...n));
      }
      function Be(e, t) {
        var n;
        return function () {
          var i = this,
            r = arguments;
          clearTimeout(n),
            (n = setTimeout(function () {
              (n = null), e.apply(i, r);
            }, t));
        };
      }
      function je(e, t) {
        let n;
        return function () {
          let i = arguments;
          n || (e.apply(this, i), (n = !0), setTimeout(() => (n = !1), t));
        };
      }
      var $e = {},
        We = !1,
        qe = {},
        He = {
          get reactive() {
            return i;
          },
          get release() {
            return s;
          },
          get effect() {
            return r;
          },
          get raw() {
            return o;
          },
          version: "3.6.0",
          flushAndStopDeferringMutations: function () {
            (z = !1), N(I), (I = []);
          },
          disableEffectScheduling: function (e) {
            (x = !1), e(), (x = !0);
          },
          setReactivityEngine: function (e) {
            (i = e.reactive),
              (s = e.release),
              (r = (t) =>
                e.effect(t, {
                  scheduler: (e) => {
                    x
                      ? (function (e) {
                          !(function (e) {
                            b.includes(e) || b.push(e),
                              _ || y || ((y = !0), queueMicrotask(w));
                          })(e);
                        })(e)
                      : e();
                  },
                })),
              (o = e.raw);
          },
          closestDataStack: B,
          skipDuringClone: Fe,
          addRootSelector: Ee,
          deferMutations: function () {
            z = !0;
          },
          mapAttributes: ce,
          evaluateLater: X,
          setEvaluator: function (e) {
            U = e;
          },
          mergeProxies: j,
          closestRoot: Me,
          interceptor: W,
          transition: Ie,
          setStyles: Le,
          mutateDom: R,
          directive: ne,
          throttle: je,
          debounce: Be,
          evaluate: Y,
          initTree: Oe,
          nextTick: ye,
          prefix: function (e) {
            J = e;
          },
          plugin: function (e) {
            e(He);
          },
          magic: H,
          store: function (e, t) {
            if ((We || (($e = i($e)), (We = !0)), void 0 === t)) return $e[e];
            ($e[e] = t),
              "object" == typeof t &&
                null !== t &&
                t.hasOwnProperty("init") &&
                "function" == typeof t.init &&
                $e[e].init(),
              $($e[e]);
          },
          start: function () {
            var e;
            document.body ||
              we(
                "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
              ),
              me(document, "alpine:init"),
              me(document, "alpine:initializing"),
              P(),
              (e = (e) => Oe(e, be)),
              E.push(e),
              C.push((e) => {
                be(e, (e) => M(e));
              }),
              S.push((e, t) => {
                ie(e, t).forEach((e) => e());
              }),
              Array.from(document.querySelectorAll(Ce()))
                .filter((e) => !Me(e.parentElement, !0))
                .forEach((e) => {
                  Oe(e);
                }),
              me(document, "alpine:initialized");
          },
          clone: function (e, t) {
            t._x_dataStack || (t._x_dataStack = e._x_dataStack),
              (De = !0),
              (function (e) {
                let t = r;
                T((e, n) => {
                  let i = t(e);
                  return s(i), () => {};
                }),
                  e(),
                  T(t);
              })(() => {
                !(function (e) {
                  let t = !1;
                  Oe(e, (e, n) => {
                    be(e, (e, i) => {
                      if (
                        t &&
                        (function (e) {
                          return Se().some((t) => e.matches(t));
                        })(e)
                      )
                        return i();
                      (t = !0), n(e, i);
                    });
                  });
                })(t);
              }),
              (De = !1);
          },
          data: function (e, t) {
            qe[e] = t;
          },
        },
        Ge = ((e) => {
          return ((e, t, n) => {
            if ((t && "object" == typeof t) || "function" == typeof t)
              for (let i of d(t))
                c.call(e, i) ||
                  "default" === i ||
                  l(e, i, {
                    get: () => t[i],
                    enumerable: !(n = f(t, i)) || n.enumerable,
                  });
            return e;
          })(
            ((t = l(
              null != e ? a(u(e)) : {},
              "default",
              e && e.__esModule && "default" in e
                ? { get: () => e.default, enumerable: !0 }
                : { value: e, enumerable: !0 }
            )),
            l(t, "__esModule", { value: !0 })),
            e
          );
          var t;
        })(v());
      H("nextTick", () => ye),
        H("dispatch", (e) => me.bind(me, e)),
        H("watch", (e) => (t, n) => {
          let i,
            s = X(e, t),
            o = !0;
          r(() =>
            s((e) => {
              (document.createElement("div").dataset.throwAway = e),
                o
                  ? (i = e)
                  : queueMicrotask(() => {
                      n(e, i), (i = e);
                    }),
                (o = !1);
            })
          );
        }),
        H("store", function () {
          return $e;
        }),
        H("data", (e) => j(B(e))),
        H("root", (e) => Me(e)),
        H(
          "refs",
          (e) => (
            e._x_refs_proxy ||
              (e._x_refs_proxy = j(
                (function (e) {
                  let t = [],
                    n = e;
                  for (; n; )
                    n._x_refs && t.push(n._x_refs), (n = n.parentNode);
                  return t;
                })(e)
              )),
            e._x_refs_proxy
          )
        );
      var Ve = {};
      function Ye(e) {
        return Ve[e] || (Ve[e] = 0), ++Ve[e];
      }
      H("id", (e) => (t, n = null) => {
        let i = (function (e, t) {
            return ke(e, (e) => {
              if (e._x_ids && e._x_ids[t]) return !0;
            });
          })(e, t),
          r = i ? i._x_ids[t] : Ye(t);
        return new Xe(n ? `${t}-${r}-${n}` : `${t}-${r}`);
      });
      var Xe = class {
        constructor(e) {
          this.id = e;
        }
        toString() {
          return this.id;
        }
      };
      H("el", (e) => e);
      var Ue,
        Ke = () => {};
      function Qe(e, t, n, r = []) {
        switch (
          (e._x_bindings || (e._x_bindings = i({})),
          (e._x_bindings[t] = n),
          (t = r.includes("camel")
            ? t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())
            : t))
        ) {
          case "value":
            !(function (e, t) {
              if ("radio" === e.type)
                void 0 === e.attributes.value && (e.value = t),
                  window.fromModel && (e.checked = Ze(e.value, t));
              else if ("checkbox" === e.type)
                Number.isInteger(t)
                  ? (e.value = t)
                  : Number.isInteger(t) ||
                    Array.isArray(t) ||
                    "boolean" == typeof t ||
                    [null, void 0].includes(t)
                  ? Array.isArray(t)
                    ? (e.checked = t.some((t) => Ze(t, e.value)))
                    : (e.checked = !!t)
                  : (e.value = String(t));
              else if ("SELECT" === e.tagName)
                !(function (e, t) {
                  const n = [].concat(t).map((e) => e + "");
                  Array.from(e.options).forEach((e) => {
                    e.selected = n.includes(e.value);
                  });
                })(e, t);
              else {
                if (e.value === t) return;
                e.value = t;
              }
            })(e, n);
            break;
          case "style":
            !(function (e, t) {
              e._x_undoAddedStyles && e._x_undoAddedStyles(),
                (e._x_undoAddedStyles = Le(e, t));
            })(e, n);
            break;
          case "class":
            !(function (e, t) {
              e._x_undoAddedClasses && e._x_undoAddedClasses(),
                (e._x_undoAddedClasses = Pe(e, t));
            })(e, n);
            break;
          default:
            !(function (e, t, n) {
              [null, void 0, !1].includes(n) &&
              !["aria-pressed", "aria-checked", "aria-expanded"].includes(t)
                ? e.removeAttribute(t)
                : ([
                    "disabled",
                    "checked",
                    "required",
                    "readonly",
                    "hidden",
                    "open",
                    "selected",
                    "autofocus",
                    "itemscope",
                    "multiple",
                    "novalidate",
                    "allowfullscreen",
                    "allowpaymentrequest",
                    "formnovalidate",
                    "autoplay",
                    "controls",
                    "loop",
                    "muted",
                    "playsinline",
                    "default",
                    "ismap",
                    "reversed",
                    "async",
                    "defer",
                    "nomodule",
                  ].includes(t) && (n = t),
                  (function (e, t, n) {
                    e.getAttribute(t) != n && e.setAttribute(t, n);
                  })(e, t, n));
            })(e, t, n);
        }
      }
      function Ze(e, t) {
        return e == t;
      }
      function Je(e, t, n, i) {
        let r = e,
          s = (e) => i(e),
          o = {},
          a = (e, t) => (n) => t(e, n);
        if (
          (n.includes("dot") && (t = t.replace(/-/g, ".")),
          n.includes("camel") &&
            (t = t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())),
          n.includes("passive") && (o.passive = !0),
          n.includes("capture") && (o.capture = !0),
          n.includes("window") && (r = window),
          n.includes("document") && (r = document),
          n.includes("prevent") &&
            (s = a(s, (e, t) => {
              t.preventDefault(), e(t);
            })),
          n.includes("stop") &&
            (s = a(s, (e, t) => {
              t.stopPropagation(), e(t);
            })),
          n.includes("self") &&
            (s = a(s, (t, n) => {
              n.target === e && t(n);
            })),
          (n.includes("away") || n.includes("outside")) &&
            ((r = document),
            (s = a(s, (t, n) => {
              e.contains(n.target) ||
                (e.offsetWidth < 1 && e.offsetHeight < 1) ||
                (!1 !== e._x_isShown && t(n));
            }))),
          (s = a(s, (e, i) => {
            ((function (e) {
              return ["keydown", "keyup"].includes(t);
            })() &&
              (function (e, t) {
                let n = t.filter(
                  (e) =>
                    !["window", "document", "prevent", "stop", "once"].includes(
                      e
                    )
                );
                if (n.includes("debounce")) {
                  let e = n.indexOf("debounce");
                  n.splice(
                    e,
                    et((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1
                  );
                }
                if (0 === n.length) return !1;
                if (1 === n.length && tt(e.key).includes(n[0])) return !1;
                const i = [
                  "ctrl",
                  "shift",
                  "alt",
                  "meta",
                  "cmd",
                  "super",
                ].filter((e) => n.includes(e));
                return (
                  (n = n.filter((e) => !i.includes(e))),
                  !(
                    i.length > 0 &&
                    i.filter(
                      (t) => (
                        ("cmd" !== t && "super" !== t) || (t = "meta"),
                        e[t + "Key"]
                      )
                    ).length === i.length &&
                    tt(e.key).includes(n[0])
                  )
                );
              })(i, n)) ||
              e(i);
          })),
          n.includes("debounce"))
        ) {
          let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
            t = et(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
          s = Be(s, t);
        }
        if (n.includes("throttle")) {
          let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
            t = et(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
          s = je(s, t);
        }
        return (
          n.includes("once") &&
            (s = a(s, (e, n) => {
              e(n), r.removeEventListener(t, s, o);
            })),
          r.addEventListener(t, s, o),
          () => {
            r.removeEventListener(t, s, o);
          }
        );
      }
      function et(e) {
        return !Array.isArray(e) && !isNaN(e);
      }
      function tt(e) {
        if (!e) return [];
        e = e
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]/, "-")
          .toLowerCase();
        let t = {
          ctrl: "control",
          slash: "/",
          space: "-",
          spacebar: "-",
          cmd: "meta",
          esc: "escape",
          up: "arrow-up",
          down: "arrow-down",
          left: "arrow-left",
          right: "arrow-right",
          period: ".",
          equal: "=",
        };
        return (
          (t[e] = e),
          Object.keys(t)
            .map((n) => {
              if (t[n] === e) return n;
            })
            .filter((e) => e)
        );
      }
      function nt(e) {
        let t = e ? parseFloat(e) : null;
        return (n = t), Array.isArray(n) || isNaN(n) ? e : t;
        var n;
      }
      function it(e, t, n, i) {
        let r = {};
        return (
          /^\[.*\]$/.test(e.item) && Array.isArray(t)
            ? e.item
                .replace("[", "")
                .replace("]", "")
                .split(",")
                .map((e) => e.trim())
                .forEach((e, n) => {
                  r[e] = t[n];
                })
            : /^\{.*\}$/.test(e.item) &&
              !Array.isArray(t) &&
              "object" == typeof t
            ? e.item
                .replace("{", "")
                .replace("}", "")
                .split(",")
                .map((e) => e.trim())
                .forEach((e) => {
                  r[e] = t[e];
                })
            : (r[e.item] = t),
          e.index && (r[e.index] = n),
          e.collection && (r[e.collection] = i),
          r
        );
      }
      function rt() {}
      (Ke.inline = (e, { modifiers: t }, { cleanup: n }) => {
        t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
          n(() => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
          });
      }),
        ne("ignore", Ke),
        ne("effect", (e, { expression: t }, { effect: n }) => n(X(e, t))),
        ne(
          "model",
          (e, { modifiers: t, expression: n }, { effect: i, cleanup: r }) => {
            let s = X(e, n),
              o = X(e, `${n} = rightSideOfExpression($event, ${n})`);
            var a =
              "select" === e.tagName.toLowerCase() ||
              ["checkbox", "radio"].includes(e.type) ||
              t.includes("lazy")
                ? "change"
                : "input";
            let l = (function (e, t, n) {
                return (
                  "radio" === e.type &&
                    R(() => {
                      e.hasAttribute("name") || e.setAttribute("name", n);
                    }),
                  (n, i) =>
                    R(() => {
                      if (n instanceof CustomEvent && void 0 !== n.detail)
                        return n.detail || n.target.value;
                      if ("checkbox" === e.type) {
                        if (Array.isArray(i)) {
                          let e = t.includes("number")
                            ? nt(n.target.value)
                            : n.target.value;
                          return n.target.checked
                            ? i.concat([e])
                            : i.filter((t) => !(t == e));
                        }
                        return n.target.checked;
                      }
                      if ("select" === e.tagName.toLowerCase() && e.multiple)
                        return t.includes("number")
                          ? Array.from(n.target.selectedOptions).map((e) =>
                              nt(e.value || e.text)
                            )
                          : Array.from(n.target.selectedOptions).map(
                              (e) => e.value || e.text
                            );
                      {
                        let e = n.target.value;
                        return t.includes("number")
                          ? nt(e)
                          : t.includes("trim")
                          ? e.trim()
                          : e;
                      }
                    })
                );
              })(e, t, n),
              u = Je(e, a, t, (e) => {
                o(() => {}, { scope: { $event: e, rightSideOfExpression: l } });
              });
            r(() => u());
            let c = X(e, n + " = __placeholder");
            (e._x_model = {
              get() {
                let e;
                return s((t) => (e = t)), e;
              },
              set(e) {
                c(() => {}, { scope: { __placeholder: e } });
              },
            }),
              (e._x_forceModelUpdate = () => {
                s((t) => {
                  void 0 === t && n.match(/\./) && (t = ""),
                    (window.fromModel = !0),
                    R(() => Qe(e, "value", t)),
                    delete window.fromModel;
                });
              }),
              i(() => {
                (t.includes("unintrusive") &&
                  document.activeElement.isSameNode(e)) ||
                  e._x_forceModelUpdate();
              });
          }
        ),
        ne("cloak", (e) =>
          queueMicrotask(() => R(() => e.removeAttribute(ee("cloak"))))
        ),
        (Ue = () => `[${ee("init")}]`),
        Te.push(Ue),
        ne(
          "init",
          Fe((e, { expression: t }) =>
            "string" == typeof t ? !!t.trim() && Y(e, t, {}) : Y(e, t, {})
          )
        ),
        ne("text", (e, { expression: t }, { effect: n, evaluateLater: i }) => {
          let r = i(t);
          n(() => {
            r((t) => {
              R(() => {
                e.textContent = t;
              });
            });
          });
        }),
        ne("html", (e, { expression: t }, { effect: n, evaluateLater: i }) => {
          let r = i(t);
          n(() => {
            r((t) => {
              e.innerHTML = t;
            });
          });
        }),
        ce(ae(":", ee("bind:"))),
        ne(
          "bind",
          (
            e,
            { value: t, modifiers: n, expression: i, original: r },
            { effect: s }
          ) => {
            if (!t)
              return (function (e, t, n, i) {
                let r = X(e, t),
                  s = [];
                i(() => {
                  for (; s.length; ) s.pop()();
                  r((t) => {
                    let i = Object.entries(t).map(([e, t]) => ({
                        name: e,
                        value: t,
                      })),
                      r = (function (e) {
                        return Array.from(e)
                          .map(le())
                          .filter((e) => !de(e));
                      })(
                        (i = i.filter(
                          (e) =>
                            !(
                              "object" == typeof e.value &&
                              !Array.isArray(e.value) &&
                              null !== e.value
                            )
                        ))
                      );
                    (i = i.map((e) =>
                      r.find((t) => t.name === e.name)
                        ? { name: "x-bind:" + e.name, value: `"${e.value}"` }
                        : e
                    )),
                      ie(e, i, n).map((e) => {
                        s.push(e.runCleanups), e();
                      });
                  });
                });
              })(e, i, r, s);
            if ("key" === t)
              return (function (e, t) {
                e._x_keyExpression = t;
              })(e, i);
            let o = X(e, i);
            s(() =>
              o((r) => {
                void 0 === r && i.match(/\./) && (r = ""),
                  R(() => Qe(e, t, r, n));
              })
            );
          }
        ),
        Ee(() => `[${ee("data")}]`),
        ne(
          "data",
          Fe((e, { expression: t }, { cleanup: n }) => {
            t = "" === t ? "{}" : t;
            let r = {};
            G(r, e);
            let s = {};
            var o, a;
            (o = s),
              (a = r),
              Object.entries(qe).forEach(([e, t]) => {
                Object.defineProperty(o, e, {
                  get:
                    () =>
                    (...e) =>
                      t.bind(a)(...e),
                  enumerable: !1,
                });
              });
            let l = Y(e, t, { scope: s });
            void 0 === l && (l = {}), G(l, e);
            let u = i(l);
            $(u);
            let c = D(e, u);
            u.init && Y(e, u.init),
              n(() => {
                c(), u.destroy && Y(e, u.destroy);
              });
          })
        ),
        ne("show", (e, { modifiers: t, expression: n }, { effect: i }) => {
          let r,
            s = X(e, n),
            o = () =>
              R(() => {
                (e.style.display = "none"), (e._x_isShown = !1);
              }),
            a = () =>
              R(() => {
                1 === e.style.length && "none" === e.style.display
                  ? e.removeAttribute("style")
                  : e.style.removeProperty("display"),
                  (e._x_isShown = !0);
              }),
            l = () => setTimeout(a),
            u = Re(
              (e) => (e ? a() : o()),
              (t) => {
                "function" == typeof e._x_toggleAndCascadeWithTransitions
                  ? e._x_toggleAndCascadeWithTransitions(e, t, a, o)
                  : t
                  ? l()
                  : o();
              }
            ),
            c = !0;
          i(() =>
            s((e) => {
              (c || e !== r) &&
                (t.includes("immediate") && (e ? l() : o()),
                u(e),
                (r = e),
                (c = !1));
            })
          );
        }),
        ne("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
          let s = (function (e) {
              let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                n = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
              if (!n) return;
              let i = {};
              i.items = n[2].trim();
              let r = n[1].replace(/^\s*\(|\)\s*$/g, "").trim(),
                s = r.match(t);
              return (
                s
                  ? ((i.item = r.replace(t, "").trim()),
                    (i.index = s[1].trim()),
                    s[2] && (i.collection = s[2].trim()))
                  : (i.item = r),
                i
              );
            })(t),
            o = X(e, s.items),
            a = X(e, e._x_keyExpression || "index");
          (e._x_prevKeys = []),
            (e._x_lookup = {}),
            n(() =>
              (function (e, t, n, r) {
                let s = e;
                o((n) => {
                  var o;
                  (o = n),
                    !Array.isArray(o) &&
                      !isNaN(o) &&
                      n >= 0 &&
                      (n = Array.from(Array(n).keys(), (e) => e + 1)),
                    void 0 === n && (n = []);
                  let a = e._x_lookup,
                    l = e._x_prevKeys,
                    u = [],
                    c = [];
                  if ("object" != typeof (d = n) || Array.isArray(d))
                    for (let e = 0; e < n.length; e++) {
                      let i = it(t, n[e], e, n);
                      r((e) => c.push(e), { scope: { index: e, ...i } }),
                        u.push(i);
                    }
                  else
                    n = Object.entries(n).map(([e, i]) => {
                      let s = it(t, i, e, n);
                      r((e) => c.push(e), { scope: { index: e, ...s } }),
                        u.push(s);
                    });
                  var d;
                  let f = [],
                    h = [],
                    p = [],
                    m = [];
                  for (let e = 0; e < l.length; e++) {
                    let t = l[e];
                    -1 === c.indexOf(t) && p.push(t);
                  }
                  l = l.filter((e) => !p.includes(e));
                  let g = "template";
                  for (let e = 0; e < c.length; e++) {
                    let t = c[e],
                      n = l.indexOf(t);
                    if (-1 === n) l.splice(e, 0, t), f.push([g, e]);
                    else if (n !== e) {
                      let t = l.splice(e, 1)[0],
                        i = l.splice(n - 1, 1)[0];
                      l.splice(e, 0, i), l.splice(n, 0, t), h.push([t, i]);
                    } else m.push(t);
                    g = t;
                  }
                  for (let e = 0; e < p.length; e++) {
                    let t = p[e];
                    a[t].remove(), (a[t] = null), delete a[t];
                  }
                  for (let e = 0; e < h.length; e++) {
                    let [t, n] = h[e],
                      i = a[t],
                      r = a[n],
                      s = document.createElement("div");
                    R(() => {
                      r.after(s),
                        i.after(r),
                        r._x_currentIfEl && r.after(r._x_currentIfEl),
                        s.before(i),
                        i._x_currentIfEl && i.after(i._x_currentIfEl),
                        s.remove();
                    }),
                      F(r, u[c.indexOf(n)]);
                  }
                  for (let e = 0; e < f.length; e++) {
                    let [t, n] = f[e],
                      r = "template" === t ? s : a[t];
                    r._x_currentIfEl && (r = r._x_currentIfEl);
                    let o = u[n],
                      l = c[n],
                      d = document.importNode(s.content, !0).firstElementChild;
                    D(d, i(o), s),
                      R(() => {
                        r.after(d), Oe(d);
                      }),
                      "object" == typeof l &&
                        we(
                          "x-for key cannot be an object, it must be a string or an integer",
                          s
                        ),
                      (a[l] = d);
                  }
                  for (let e = 0; e < m.length; e++)
                    F(a[m[e]], u[c.indexOf(m[e])]);
                  s._x_prevKeys = c;
                });
              })(e, s, 0, a)
            ),
            r(() => {
              Object.values(e._x_lookup).forEach((e) => e.remove()),
                delete e._x_prevKeys,
                delete e._x_lookup;
            });
        }),
        (rt.inline = (e, { expression: t }, { cleanup: n }) => {
          let i = Me(e);
          i._x_refs || (i._x_refs = {}),
            (i._x_refs[t] = e),
            n(() => delete i._x_refs[t]);
        }),
        ne("ref", rt),
        ne("if", (e, { expression: t }, { effect: n, cleanup: i }) => {
          let r = X(e, t);
          n(() =>
            r((t) => {
              t
                ? (() => {
                    if (e._x_currentIfEl) return e._x_currentIfEl;
                    let t = e.content.cloneNode(!0).firstElementChild;
                    D(t, {}, e),
                      R(() => {
                        e.after(t), Oe(t);
                      }),
                      (e._x_currentIfEl = t),
                      (e._x_undoIf = () => {
                        t.remove(), delete e._x_currentIfEl;
                      });
                  })()
                : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
            })
          ),
            i(() => e._x_undoIf && e._x_undoIf());
        }),
        ne("id", (e, { expression: t }, { evaluate: n }) => {
          n(t).forEach((t) =>
            (function (e, t) {
              e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Ye(t));
            })(e, t)
          );
        }),
        ce(ae("@", ee("on:"))),
        ne(
          "on",
          Fe((e, { value: t, modifiers: n, expression: i }, { cleanup: r }) => {
            let s = i ? X(e, i) : () => {},
              o = Je(e, t, n, (e) => {
                s(() => {}, { scope: { $event: e }, params: [e] });
              });
            r(() => o());
          })
        ),
        He.setEvaluator(K),
        He.setReactivityEngine({
          reactive: Ge.reactive,
          effect: Ge.effect,
          release: Ge.stop,
          raw: Ge.toRaw,
        });
      var st = He;
    }.call(this, n(6)));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.shuffleArray = t.randomArrayMember = t.obtainValue = void 0),
      (t.obtainValue = (e) => ("function" == typeof e ? e() : e)),
      (t.randomArrayMember = (e) => e[Math.floor(Math.random() * e.length)]),
      (t.shuffleArray = (e) => {
        const t = e.slice();
        for (let e = t.length - 1; e > 0; e -= 1) {
          const n = Math.floor(Math.random() * (e + 1)),
            i = t[e];
          (t[e] = t[n]), (t[n] = i);
        }
        return t;
      });
  },
  function (e, t, n) {
    var i, r;
    window,
      void 0 ===
        (r =
          "function" ==
          typeof (i = function () {
            "use strict";
            function e(e) {
              var t = parseFloat(e);
              return -1 == e.indexOf("%") && !isNaN(t) && t;
            }
            var t =
                "undefined" == typeof console
                  ? function () {}
                  : function (e) {
                      console.error(e);
                    },
              n = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
              ],
              i = n.length;
            function r(e) {
              var n = getComputedStyle(e);
              return (
                n ||
                  t(
                    "Style returned " +
                      n +
                      ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                  ),
                n
              );
            }
            var s,
              o = !1;
            return function t(a) {
              if (
                ((function () {
                  if (!o) {
                    o = !0;
                    var n = document.createElement("div");
                    (n.style.width = "200px"),
                      (n.style.padding = "1px 2px 3px 4px"),
                      (n.style.borderStyle = "solid"),
                      (n.style.borderWidth = "1px 2px 3px 4px"),
                      (n.style.boxSizing = "border-box");
                    var i = document.body || document.documentElement;
                    i.appendChild(n);
                    var a = r(n);
                    (s = 200 == Math.round(e(a.width))),
                      (t.isBoxSizeOuter = s),
                      i.removeChild(n);
                  }
                })(),
                "string" == typeof a && (a = document.querySelector(a)),
                a && "object" == typeof a && a.nodeType)
              ) {
                var l = r(a);
                if ("none" == l.display)
                  return (function () {
                    for (
                      var e = {
                          width: 0,
                          height: 0,
                          innerWidth: 0,
                          innerHeight: 0,
                          outerWidth: 0,
                          outerHeight: 0,
                        },
                        t = 0;
                      t < i;
                      t++
                    )
                      e[n[t]] = 0;
                    return e;
                  })();
                var u = {};
                (u.width = a.offsetWidth), (u.height = a.offsetHeight);
                for (
                  var c = (u.isBorderBox = "border-box" == l.boxSizing), d = 0;
                  d < i;
                  d++
                ) {
                  var f = n[d],
                    h = l[f],
                    p = parseFloat(h);
                  u[f] = isNaN(p) ? 0 : p;
                }
                var m = u.paddingLeft + u.paddingRight,
                  g = u.paddingTop + u.paddingBottom,
                  v = u.marginLeft + u.marginRight,
                  y = u.marginTop + u.marginBottom,
                  _ = u.borderLeftWidth + u.borderRightWidth,
                  b = u.borderTopWidth + u.borderBottomWidth,
                  w = c && s,
                  x = e(l.width);
                !1 !== x && (u.width = x + (w ? 0 : m + _));
                var T = e(l.height);
                return (
                  !1 !== T && (u.height = T + (w ? 0 : g + b)),
                  (u.innerWidth = u.width - (m + _)),
                  (u.innerHeight = u.height - (g + b)),
                  (u.outerWidth = u.width + v),
                  (u.outerHeight = u.height + y),
                  u
                );
              }
            };
          })
            ? i.call(t, n, t, e)
            : i) || (e.exports = r);
  },
  function (e, t, n) {
    var i, r;
    window,
      void 0 ===
        (r =
          "function" ==
          typeof (i = function () {
            "use strict";
            function e(t) {
              for (var n in e.defaults) this[n] = e.defaults[n];
              for (n in t) this[n] = t[n];
            }
            e.defaults = { x: 0, y: 0, width: 0, height: 0 };
            var t = e.prototype;
            return (
              (t.contains = function (e) {
                var t = e.width || 0,
                  n = e.height || 0;
                return (
                  this.x <= e.x &&
                  this.y <= e.y &&
                  this.x + this.width >= e.x + t &&
                  this.y + this.height >= e.y + n
                );
              }),
              (t.overlaps = function (e) {
                var t = this.x + this.width,
                  n = this.y + this.height,
                  i = e.x + e.width,
                  r = e.y + e.height;
                return this.x < i && t > e.x && this.y < r && n > e.y;
              }),
              (t.getMaximalFreeRects = function (t) {
                if (!this.overlaps(t)) return !1;
                var n,
                  i = [],
                  r = this.x + this.width,
                  s = this.y + this.height,
                  o = t.x + t.width,
                  a = t.y + t.height;
                return (
                  this.y < t.y &&
                    ((n = new e({
                      x: this.x,
                      y: this.y,
                      width: this.width,
                      height: t.y - this.y,
                    })),
                    i.push(n)),
                  r > o &&
                    ((n = new e({
                      x: o,
                      y: this.y,
                      width: r - o,
                      height: this.height,
                    })),
                    i.push(n)),
                  s > a &&
                    ((n = new e({
                      x: this.x,
                      y: a,
                      width: this.width,
                      height: s - a,
                    })),
                    i.push(n)),
                  this.x < t.x &&
                    ((n = new e({
                      x: this.x,
                      y: this.y,
                      width: t.x - this.x,
                      height: this.height,
                    })),
                    i.push(n)),
                  i
                );
              }),
              (t.canFit = function (e) {
                return this.width >= e.width && this.height >= e.height;
              }),
              e
            );
          })
            ? i.call(t, n, t, e)
            : i) || (e.exports = r);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.defaultEmojis = void 0),
      (t.defaultEmojis = [
        "😁",
        "😂",
        "🤣",
        "😃",
        "😅",
        "😆",
        "😍",
        "🤩",
        "😎",
        "🤔",
        "😒",
        "😭",
        "😱",
        "🤖",
        "😻",
        "🙀",
        "🙈",
        "🙉",
        "🙊",
        "🏄",
        "💪",
        "👌",
        "👋",
        "🙌",
        "💝",
        "💖",
        "💗",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🚀",
        "⛄",
        "🔥",
        "🔥",
        "✨",
        "✨",
        "🎉",
        "🎉",
        "💯",
        "💯",
      ]);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.emojisplosion =
        t.defaultTagName =
        t.defaultPosition =
        t.defaultPhysics =
        t.defaultEmojiCount =
        t.defaultCreateContainer =
        t.defaultClassName =
          void 0);
    const i = n(20),
      r = n(22),
      s = n(7),
      o = n(23),
      a = n(3);
    (t.defaultClassName = "emoji-styles"),
      (t.defaultCreateContainer = (() => {
        let e;
        return () => (
          (null == e ? void 0 : e.parentNode) === document.body ||
            ((e = document.createElement("div")), document.body.prepend(e)),
          e
        );
      })()),
      (t.defaultEmojiCount = () => Math.floor(14 * Math.random()) + 14),
      (t.defaultPhysics = {
        fontSize: { max: 28, min: 14 },
        framerate: 60,
        gravity: 0.35,
        initialVelocities: {
          rotation: { max: 7, min: -7 },
          x: { max: 7, min: -7 },
          y: { max: -7, min: -21 },
        },
        preserveOutOfBounds: !1,
        rotation: { max: 45, min: -45 },
        rotationDeceleration: 0.98,
      }),
      (t.defaultPosition = () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
      }));
    const l = () => {};
    (t.defaultTagName = "span"),
      (t.emojisplosion = (e = {}) => {
        const {
          animator: n = new r.Animator().start(),
          className: u = t.defaultClassName,
          container: c = t.defaultCreateContainer,
          emojiCount: d = t.defaultEmojiCount,
          emojis: f = s.defaultEmojis,
          position: h = t.defaultPosition,
          process: p = l,
          tagName: m = t.defaultTagName,
          uniqueness: g = 1 / 0,
        } = e;
        o.createStyleElementAndClass(u);
        const v = Object.assign(
            Object.assign(Object.assign({}, t.defaultPhysics), e.physics),
            {
              initialVelocities: Object.assign(
                Object.assign({}, t.defaultPhysics.initialVelocities),
                void 0 !== e.physics ? e.physics.initialVelocities : {}
              ),
            }
          ),
          y = {
            className: u,
            container: a.obtainValue(c),
            emojis: a.shuffleArray(a.obtainValue(f)).slice(0, a.obtainValue(g)),
            physics: v,
            position: a.obtainValue(h),
            process: p,
            tagName: a.obtainValue(m),
          },
          _ = a.obtainValue(d);
        for (let e = 0; e < _; e += 1) n.add(new i.EmojiActor(y));
        return n;
      });
  },
  function (e, t, n) {
    var i, r;
    !(function (s, o) {
      "use strict";
      (i = [n(10), n(4), n(25), n(27)]),
        void 0 ===
          (r = function (e, t, n, i) {
            return (function (e, t, n, i, r) {
              var s = e.console,
                o = e.jQuery,
                a = function () {},
                l = 0,
                u = {};
              function c(e, t) {
                var n = i.getQueryElement(e);
                if (n) {
                  (this.element = n),
                    o && (this.$element = o(this.element)),
                    (this.options = i.extend({}, this.constructor.defaults)),
                    this.option(t);
                  var r = ++l;
                  (this.element.outlayerGUID = r),
                    (u[r] = this),
                    this._create(),
                    this._getOption("initLayout") && this.layout();
                } else
                  s &&
                    s.error(
                      "Bad element for " +
                        this.constructor.namespace +
                        ": " +
                        (n || e)
                    );
              }
              (c.namespace = "outlayer"),
                (c.Item = r),
                (c.defaults = {
                  containerStyle: { position: "relative" },
                  initLayout: !0,
                  originLeft: !0,
                  originTop: !0,
                  resize: !0,
                  resizeContainer: !0,
                  transitionDuration: "0.4s",
                  hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                  visibleStyle: { opacity: 1, transform: "scale(1)" },
                });
              var d = c.prototype;
              function f(e) {
                function t() {
                  e.apply(this, arguments);
                }
                return (
                  (t.prototype = Object.create(e.prototype)),
                  (t.prototype.constructor = t),
                  t
                );
              }
              i.extend(d, t.prototype),
                (d.option = function (e) {
                  i.extend(this.options, e);
                }),
                (d._getOption = function (e) {
                  var t = this.constructor.compatOptions[e];
                  return t && void 0 !== this.options[t]
                    ? this.options[t]
                    : this.options[e];
                }),
                (c.compatOptions = {
                  initLayout: "isInitLayout",
                  horizontal: "isHorizontal",
                  layoutInstant: "isLayoutInstant",
                  originLeft: "isOriginLeft",
                  originTop: "isOriginTop",
                  resize: "isResizeBound",
                  resizeContainer: "isResizingContainer",
                }),
                (d._create = function () {
                  this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    i.extend(this.element.style, this.options.containerStyle),
                    this._getOption("resize") && this.bindResize();
                }),
                (d.reloadItems = function () {
                  this.items = this._itemize(this.element.children);
                }),
                (d._itemize = function (e) {
                  for (
                    var t = this._filterFindItemElements(e),
                      n = this.constructor.Item,
                      i = [],
                      r = 0;
                    r < t.length;
                    r++
                  ) {
                    var s = new n(t[r], this);
                    i.push(s);
                  }
                  return i;
                }),
                (d._filterFindItemElements = function (e) {
                  return i.filterFindElements(e, this.options.itemSelector);
                }),
                (d.getItemElements = function () {
                  return this.items.map(function (e) {
                    return e.element;
                  });
                }),
                (d.layout = function () {
                  this._resetLayout(), this._manageStamps();
                  var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                  this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (d._init = d.layout),
                (d._resetLayout = function () {
                  this.getSize();
                }),
                (d.getSize = function () {
                  this.size = n(this.element);
                }),
                (d._getMeasurement = function (e, t) {
                  var i,
                    r = this.options[e];
                  r
                    ? ("string" == typeof r
                        ? (i = this.element.querySelector(r))
                        : r instanceof HTMLElement && (i = r),
                      (this[e] = i ? n(i)[t] : r))
                    : (this[e] = 0);
                }),
                (d.layoutItems = function (e, t) {
                  (e = this._getItemsForLayout(e)),
                    this._layoutItems(e, t),
                    this._postLayout();
                }),
                (d._getItemsForLayout = function (e) {
                  return e.filter(function (e) {
                    return !e.isIgnored;
                  });
                }),
                (d._layoutItems = function (e, t) {
                  if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
                    var n = [];
                    e.forEach(function (e) {
                      var i = this._getItemLayoutPosition(e);
                      (i.item = e),
                        (i.isInstant = t || e.isLayoutInstant),
                        n.push(i);
                    }, this),
                      this._processLayoutQueue(n);
                  }
                }),
                (d._getItemLayoutPosition = function () {
                  return { x: 0, y: 0 };
                }),
                (d._processLayoutQueue = function (e) {
                  this.updateStagger(),
                    e.forEach(function (e, t) {
                      this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                    }, this);
                }),
                (d.updateStagger = function () {
                  var e = this.options.stagger;
                  if (null != e)
                    return (
                      (this.stagger = (function (e) {
                        if ("number" == typeof e) return e;
                        var t = e.match(/(^\d*\.?\d*)(\w*)/),
                          n = t && t[1],
                          i = t && t[2];
                        return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0;
                      })(e)),
                      this.stagger
                    );
                  this.stagger = 0;
                }),
                (d._positionItem = function (e, t, n, i, r) {
                  i
                    ? e.goTo(t, n)
                    : (e.stagger(r * this.stagger), e.moveTo(t, n));
                }),
                (d._postLayout = function () {
                  this.resizeContainer();
                }),
                (d.resizeContainer = function () {
                  if (this._getOption("resizeContainer")) {
                    var e = this._getContainerSize();
                    e &&
                      (this._setContainerMeasure(e.width, !0),
                      this._setContainerMeasure(e.height, !1));
                  }
                }),
                (d._getContainerSize = a),
                (d._setContainerMeasure = function (e, t) {
                  if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox &&
                      (e += t
                        ? n.paddingLeft +
                          n.paddingRight +
                          n.borderLeftWidth +
                          n.borderRightWidth
                        : n.paddingBottom +
                          n.paddingTop +
                          n.borderTopWidth +
                          n.borderBottomWidth),
                      (e = Math.max(e, 0)),
                      (this.element.style[t ? "width" : "height"] = e + "px");
                  }
                }),
                (d._emitCompleteOnItems = function (e, t) {
                  var n = this;
                  function i() {
                    n.dispatchEvent(e + "Complete", null, [t]);
                  }
                  var r = t.length;
                  if (t && r) {
                    var s = 0;
                    t.forEach(function (t) {
                      t.once(e, o);
                    });
                  } else i();
                  function o() {
                    ++s == r && i();
                  }
                }),
                (d.dispatchEvent = function (e, t, n) {
                  var i = t ? [t].concat(n) : n;
                  if ((this.emitEvent(e, i), o))
                    if (
                      ((this.$element = this.$element || o(this.element)), t)
                    ) {
                      var r = o.Event(t);
                      (r.type = e), this.$element.trigger(r, n);
                    } else this.$element.trigger(e, n);
                }),
                (d.ignore = function (e) {
                  var t = this.getItem(e);
                  t && (t.isIgnored = !0);
                }),
                (d.unignore = function (e) {
                  var t = this.getItem(e);
                  t && delete t.isIgnored;
                }),
                (d.stamp = function (e) {
                  (e = this._find(e)) &&
                    ((this.stamps = this.stamps.concat(e)),
                    e.forEach(this.ignore, this));
                }),
                (d.unstamp = function (e) {
                  (e = this._find(e)) &&
                    e.forEach(function (e) {
                      i.removeFrom(this.stamps, e), this.unignore(e);
                    }, this);
                }),
                (d._find = function (e) {
                  if (e)
                    return (
                      "string" == typeof e &&
                        (e = this.element.querySelectorAll(e)),
                      i.makeArray(e)
                    );
                }),
                (d._manageStamps = function () {
                  this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
                }),
                (d._getBoundingRect = function () {
                  var e = this.element.getBoundingClientRect(),
                    t = this.size;
                  this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
                  };
                }),
                (d._manageStamp = a),
                (d._getElementOffset = function (e) {
                  var t = e.getBoundingClientRect(),
                    i = this._boundingRect,
                    r = n(e);
                  return {
                    left: t.left - i.left - r.marginLeft,
                    top: t.top - i.top - r.marginTop,
                    right: i.right - t.right - r.marginRight,
                    bottom: i.bottom - t.bottom - r.marginBottom,
                  };
                }),
                (d.handleEvent = i.handleEvent),
                (d.bindResize = function () {
                  e.addEventListener("resize", this), (this.isResizeBound = !0);
                }),
                (d.unbindResize = function () {
                  e.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
                }),
                (d.onresize = function () {
                  this.resize();
                }),
                i.debounceMethod(c, "onresize", 100),
                (d.resize = function () {
                  this.isResizeBound &&
                    this.needsResizeLayout() &&
                    this.layout();
                }),
                (d.needsResizeLayout = function () {
                  var e = n(this.element);
                  return (
                    this.size && e && e.innerWidth !== this.size.innerWidth
                  );
                }),
                (d.addItems = function (e) {
                  var t = this._itemize(e);
                  return t.length && (this.items = this.items.concat(t)), t;
                }),
                (d.appended = function (e) {
                  var t = this.addItems(e);
                  t.length && (this.layoutItems(t, !0), this.reveal(t));
                }),
                (d.prepended = function (e) {
                  var t = this._itemize(e);
                  if (t.length) {
                    var n = this.items.slice(0);
                    (this.items = t.concat(n)),
                      this._resetLayout(),
                      this._manageStamps(),
                      this.layoutItems(t, !0),
                      this.reveal(t),
                      this.layoutItems(n);
                  }
                }),
                (d.reveal = function (e) {
                  if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, n) {
                      e.stagger(n * t), e.reveal();
                    });
                  }
                }),
                (d.hide = function (e) {
                  if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, n) {
                      e.stagger(n * t), e.hide();
                    });
                  }
                }),
                (d.revealItemElements = function (e) {
                  var t = this.getItems(e);
                  this.reveal(t);
                }),
                (d.hideItemElements = function (e) {
                  var t = this.getItems(e);
                  this.hide(t);
                }),
                (d.getItem = function (e) {
                  for (var t = 0; t < this.items.length; t++) {
                    var n = this.items[t];
                    if (n.element == e) return n;
                  }
                }),
                (d.getItems = function (e) {
                  e = i.makeArray(e);
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      var n = this.getItem(e);
                      n && t.push(n);
                    }, this),
                    t
                  );
                }),
                (d.remove = function (e) {
                  var t = this.getItems(e);
                  this._emitCompleteOnItems("remove", t),
                    t &&
                      t.length &&
                      t.forEach(function (e) {
                        e.remove(), i.removeFrom(this.items, e);
                      }, this);
                }),
                (d.destroy = function () {
                  var e = this.element.style;
                  (e.height = ""),
                    (e.position = ""),
                    (e.width = ""),
                    this.items.forEach(function (e) {
                      e.destroy();
                    }),
                    this.unbindResize();
                  var t = this.element.outlayerGUID;
                  delete u[t],
                    delete this.element.outlayerGUID,
                    o && o.removeData(this.element, this.constructor.namespace);
                }),
                (c.data = function (e) {
                  var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
                  return t && u[t];
                }),
                (c.create = function (e, t) {
                  var n = f(c);
                  return (
                    (n.defaults = i.extend({}, c.defaults)),
                    i.extend(n.defaults, t),
                    (n.compatOptions = i.extend({}, c.compatOptions)),
                    (n.namespace = e),
                    (n.data = c.data),
                    (n.Item = f(r)),
                    i.htmlInit(n, e),
                    o && o.bridget && o.bridget(e, n),
                    n
                  );
                });
              var h = { ms: 1, s: 1e3 };
              return (c.Item = r), c;
            })(s, e, t, n, i);
          }.apply(t, i)) || (e.exports = r);
    })(window);
  },
  function (e, t, n) {
    var i, r;
    "undefined" != typeof window && window,
      void 0 ===
        (r =
          "function" ==
          typeof (i = function () {
            "use strict";
            function e() {}
            var t = e.prototype;
            return (
              (t.on = function (e, t) {
                if (e && t) {
                  var n = (this._events = this._events || {}),
                    i = (n[e] = n[e] || []);
                  return -1 == i.indexOf(t) && i.push(t), this;
                }
              }),
              (t.once = function (e, t) {
                if (e && t) {
                  this.on(e, t);
                  var n = (this._onceEvents = this._onceEvents || {});
                  return ((n[e] = n[e] || {})[t] = !0), this;
                }
              }),
              (t.off = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  var i = n.indexOf(t);
                  return -1 != i && n.splice(i, 1), this;
                }
              }),
              (t.emitEvent = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  (n = n.slice(0)), (t = t || []);
                  for (
                    var i = this._onceEvents && this._onceEvents[e], r = 0;
                    r < n.length;
                    r++
                  ) {
                    var s = n[r];
                    i && i[s] && (this.off(e, s), delete i[s]),
                      s.apply(this, t);
                  }
                  return this;
                }
              }),
              (t.allOff = function () {
                delete this._events, delete this._onceEvents;
              }),
              e
            );
          })
            ? i.call(t, n, t, e)
            : i) || (e.exports = r);
  },
  function (e, t, n) {
    var i, r, s;
    (s = function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n) t[i] = n[i];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(i) {
        function r() {}
        function s(t, n, s) {
          if ("undefined" != typeof document) {
            "number" == typeof (s = e({ path: "/" }, r.defaults, s)).expires &&
              (s.expires = new Date(1 * new Date() + 864e5 * s.expires)),
              (s.expires = s.expires ? s.expires.toUTCString() : "");
            try {
              var o = JSON.stringify(n);
              /^[\{\[]/.test(o) && (n = o);
            } catch (e) {}
            (n = i.write
              ? i.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var a = "";
            for (var l in s)
              s[l] &&
                ((a += "; " + l),
                !0 !== s[l] && (a += "=" + s[l].split(";")[0]));
            return (document.cookie = t + "=" + n + a);
          }
        }
        function o(e, n) {
          if ("undefined" != typeof document) {
            for (
              var r = {},
                s = document.cookie ? document.cookie.split("; ") : [],
                o = 0;
              o < s.length;
              o++
            ) {
              var a = s[o].split("="),
                l = a.slice(1).join("=");
              n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
              try {
                var u = t(a[0]);
                if (((l = (i.read || i)(l, u) || t(l)), n))
                  try {
                    l = JSON.parse(l);
                  } catch (e) {}
                if (((r[u] = l), e === u)) break;
              } catch (e) {}
            }
            return e ? r[e] : r;
          }
        }
        return (
          (r.set = s),
          (r.get = function (e) {
            return o(e, !1);
          }),
          (r.getJSON = function (e) {
            return o(e, !0);
          }),
          (r.remove = function (t, n) {
            s(t, "", e(n, { expires: -1 }));
          }),
          (r.defaults = {}),
          (r.withConverter = n),
          r
        );
      })(function () {});
    }),
      void 0 === (r = "function" == typeof (i = s) ? i.call(t, n, t, e) : i) ||
        (e.exports = r),
      (e.exports = s());
  },
  function (e, t, n) {
    (function (i) {
      var r, s, o;
      (s = []),
        (r = (function (e) {
          "use strict";
          var t,
            i,
            r,
            s = n(15),
            o = {},
            a = {},
            l = n(16),
            u = n(17),
            c = n(18),
            d = !!(
              e &&
              e.document &&
              e.document.querySelector &&
              e.addEventListener
            );
          if ("undefined" != typeof window || d) {
            var f = Object.prototype.hasOwnProperty;
            return (
              (a.destroy = function () {
                var e = p(o);
                null !== e &&
                  (o.skipRendering || (e && (e.innerHTML = "")),
                  o.scrollContainer && document.querySelector(o.scrollContainer)
                    ? (document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          "scroll",
                          this._scrollListener,
                          !1
                        ),
                      document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          "resize",
                          this._scrollListener,
                          !1
                        ),
                      t &&
                        document
                          .querySelector(o.scrollContainer)
                          .removeEventListener(
                            "click",
                            this._clickListener,
                            !1
                          ))
                    : (document.removeEventListener(
                        "scroll",
                        this._scrollListener,
                        !1
                      ),
                      document.removeEventListener(
                        "resize",
                        this._scrollListener,
                        !1
                      ),
                      t &&
                        document.removeEventListener(
                          "click",
                          this._clickListener,
                          !1
                        )));
              }),
              (a.init = function (e) {
                if (d) {
                  (o = (function () {
                    for (var e = {}, t = 0; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var i in n) f.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                  })(s, e || {})),
                    (this.options = o),
                    (this.state = {}),
                    o.scrollSmooth &&
                      ((o.duration = o.scrollSmoothDuration),
                      (o.offset = o.scrollSmoothOffset),
                      (a.scrollSmooth = n(19).initSmoothScrolling(o))),
                    (t = l(o)),
                    (i = u(o)),
                    (this._buildHtml = t),
                    (this._parseContent = i),
                    (this._headingsArray = r),
                    a.destroy();
                  var m = (function (e) {
                    try {
                      return (
                        e.contentElement ||
                        document.querySelector(e.contentSelector)
                      );
                    } catch (t) {
                      return (
                        console.warn(
                          "Contents element not found: " + e.contentSelector
                        ),
                        null
                      );
                    }
                  })(o);
                  if (null !== m) {
                    var g = p(o);
                    if (
                      null !== g &&
                      null !== (r = i.selectHeadings(m, o.headingSelector))
                    ) {
                      var v = i.nestHeadingsArray(r).nest;
                      if (o.skipRendering) return this;
                      t.render(g, v),
                        (this._scrollListener = h(function (e) {
                          t.updateToc(r), !o.disableTocScrollSync && c(o);
                          var n =
                            e &&
                            e.target &&
                            e.target.scrollingElement &&
                            0 === e.target.scrollingElement.scrollTop;
                          ((e &&
                            (0 === e.eventPhase || null === e.currentTarget)) ||
                            n) &&
                            (t.updateToc(r),
                            o.scrollEndCallback && o.scrollEndCallback(e));
                        }, o.throttleTimeout)),
                        this._scrollListener(),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? (document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "scroll",
                                this._scrollListener,
                                !1
                              ),
                            document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "resize",
                                this._scrollListener,
                                !1
                              ))
                          : (document.addEventListener(
                              "scroll",
                              this._scrollListener,
                              !1
                            ),
                            document.addEventListener(
                              "resize",
                              this._scrollListener,
                              !1
                            ));
                      var y = null;
                      return (
                        (this._clickListener = h(function (e) {
                          o.scrollSmooth && t.disableTocAnimation(e),
                            t.updateToc(r),
                            y && clearTimeout(y),
                            (y = setTimeout(function () {
                              t.enableTocAnimation();
                            }, o.scrollSmoothDuration));
                        }, o.throttleTimeout)),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "click",
                                this._clickListener,
                                !1
                              )
                          : document.addEventListener(
                              "click",
                              this._clickListener,
                              !1
                            ),
                        this
                      );
                    }
                  }
                }
              }),
              (a.refresh = function (e) {
                a.destroy(), a.init(e || this.options);
              }),
              (e.tocbot = a),
              a
            );
          }
          function h(e, t, n) {
            var i, r;
            return (
              t || (t = 250),
              function () {
                var s = n || this,
                  o = +new Date(),
                  a = arguments;
                i && o < i + t
                  ? (clearTimeout(r),
                    (r = setTimeout(function () {
                      (i = o), e.apply(s, a);
                    }, t)))
                  : ((i = o), e.apply(s, a));
              }
            );
          }
          function p(e) {
            try {
              return e.tocElement || document.querySelector(e.tocSelector);
            } catch (t) {
              return (
                console.warn("TOC element not found: " + e.tocSelector), null
              );
            }
          }
        })(void 0 !== i ? i : window || i)),
        void 0 === (o = "function" == typeof r ? r.apply(t, s) : r) ||
          (e.exports = o);
    }.call(this, n(6)));
  },
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e = document,
        t = e.createTextNode.bind(e);
      function n(e, t, n) {
        e.style.setProperty(t, n);
      }
      function i(e, t) {
        return e.appendChild(t);
      }
      function r(t, n, r, s) {
        var o = e.createElement("span");
        return (
          n && (o.className = n),
          r && (!s && o.setAttribute("data-" + n, r), (o.textContent = r)),
          (t && i(t, o)) || o
        );
      }
      function s(e, t) {
        return e.getAttribute("data-" + t);
      }
      function o(t, n) {
        return t && 0 != t.length
          ? t.nodeName
            ? [t]
            : [].slice.call(t[0].nodeName ? t : (n || e).querySelectorAll(t))
          : [];
      }
      function a(e) {
        for (var t = []; e--; ) t[e] = [];
        return t;
      }
      function l(e, t) {
        e && e.some(t);
      }
      function u(e) {
        return function (t) {
          return e[t];
        };
      }
      var c = {};
      function d(e, t, n, i) {
        return { by: e, depends: t, key: n, split: i };
      }
      function f(e) {
        c[e.by] = e;
      }
      function h(e, n, s, a, u) {
        e.normalize();
        var c = [],
          d = document.createDocumentFragment();
        a && c.push(e.previousSibling);
        var f = [];
        return (
          o(e.childNodes).some(function (e) {
            if (!e.tagName || e.hasChildNodes()) {
              if (e.childNodes && e.childNodes.length)
                return f.push(e), void c.push.apply(c, h(e, n, s, a, u));
              var i = e.wholeText || "",
                o = i.trim();
              o.length &&
                (" " === i[0] && f.push(t(" ")),
                l(o.split(s), function (e, t) {
                  t && u && f.push(r(d, "whitespace", " ", u));
                  var i = r(d, n, e);
                  c.push(i), f.push(i);
                }),
                " " === i[i.length - 1] && f.push(t(" ")));
            } else f.push(e);
          }),
          l(f, function (e) {
            i(d, e);
          }),
          (e.innerHTML = ""),
          i(e, d),
          c
        );
      }
      var p = d("words", 0, "word", function (e) {
          return h(e, "word", /\s+/, 0, 1);
        }),
        m = d("chars", ["words"], "char", function (e, t, n) {
          var i = [];
          return (
            l(n.words, function (e, n) {
              i.push.apply(i, h(e, "char", "", t.whitespace && n));
            }),
            i
          );
        });
      function g(e) {
        var t = (e = e || {}).key;
        return o(e.target || "[data-splitting]").map(function (i) {
          var r = i["🍌"];
          if (!e.force && r) return r;
          r = i["🍌"] = { el: i };
          var o = (function (e) {
              return (function e(t, n, i) {
                var r = i.indexOf(t);
                if (-1 == r)
                  i.unshift(t),
                    l(c[t].depends, function (n) {
                      e(n, t, i);
                    });
                else {
                  var s = i.indexOf(n);
                  i.splice(r, 1), i.splice(s, 0, t);
                }
                return i;
              })(e, 0, []).map(u(c));
            })(e.by || s(i, "splitting") || "chars"),
            a = (function (e, t) {
              for (var n in t) e[n] = t[n];
              return e;
            })({}, e);
          return (
            l(o, function (e) {
              if (e.split) {
                var s = e.by,
                  o = (t ? "-" + t : "") + e.key,
                  u = e.split(i, a, r);
                o &&
                  (function (e, t, i) {
                    var r = "--" + o,
                      s = r + "-index";
                    l(i, function (e, t) {
                      Array.isArray(e)
                        ? l(e, function (e) {
                            n(e, s, t);
                          })
                        : n(e, s, t);
                    }),
                      n(e, r + "-total", i.length);
                  })(i, 0, u),
                  (r[s] = u),
                  i.classList.add(s);
              }
            }),
            i.classList.add("splitting"),
            r
          );
        });
      }
      function v(e, t, n) {
        var i = o(t.matching || e.children, e),
          r = {};
        return (
          l(i, function (e) {
            var t = Math.round(e[n]);
            (r[t] || (r[t] = [])).push(e);
          }),
          Object.keys(r).map(Number).sort(y).map(u(r))
        );
      }
      function y(e, t) {
        return e - t;
      }
      (g.html = function (e) {
        var t = ((e = e || {}).target = r());
        return (t.innerHTML = e.content), g(e), t.outerHTML;
      }),
        (g.add = f);
      var _ = d("lines", ["words"], "line", function (e, t, n) {
          return v(e, { matching: n.words }, "offsetTop");
        }),
        b = d("items", 0, "item", function (e, t) {
          return o(t.matching || e.children, e);
        }),
        w = d("rows", 0, "row", function (e, t) {
          return v(e, t, "offsetTop");
        }),
        x = d("cols", 0, "col", function (e, t) {
          return v(e, t, "offsetLeft");
        }),
        T = d("grid", ["rows", "cols"]),
        S = d("layout", 0, 0, function (e, t) {
          var a = (t.rows = +(t.rows || s(e, "rows") || 1)),
            l = (t.columns = +(t.columns || s(e, "columns") || 1));
          if (
            ((t.image = t.image || s(e, "image") || e.currentSrc || e.src),
            t.image)
          ) {
            var u = o("img", e)[0];
            t.image = u && (u.currentSrc || u.src);
          }
          t.image && n(e, "background-image", "url(" + t.image + ")");
          for (var c = a * l, d = [], f = r(0, "cell-grid"); c--; ) {
            var h = r(f, "cell");
            r(h, "cell-inner"), d.push(h);
          }
          return i(e, f), d;
        }),
        C = d("cellRows", ["layout"], "row", function (e, t, n) {
          var i = t.rows,
            r = a(i);
          return (
            l(n.layout, function (e, t, n) {
              r[Math.floor(t / (n.length / i))].push(e);
            }),
            r
          );
        }),
        E = d("cellColumns", ["layout"], "col", function (e, t, n) {
          var i = t.columns,
            r = a(i);
          return (
            l(n.layout, function (e, t) {
              r[t % i].push(e);
            }),
            r
          );
        }),
        M = d("cells", ["cellRows", "cellColumns"], "cell", function (e, t, n) {
          return n.layout;
        });
      return (
        f(p), f(m), f(_), f(b), f(w), f(x), f(T), f(S), f(C), f(E), f(M), g
      );
    })();
  },
  function (e, t, n) {
    var i, r, s;
    window,
      (r = [n(4), n(9), n(5), n(28), n(29)]),
      void 0 ===
        (s =
          "function" ==
          typeof (i = function (e, t, n, i, r) {
            "use strict";
            n.prototype.canFit = function (e) {
              return this.width >= e.width - 1 && this.height >= e.height - 1;
            };
            var s = t.create("packery");
            s.Item = r;
            var o = s.prototype;
            function a(e, t) {
              return e.position.y - t.position.y || e.position.x - t.position.x;
            }
            function l(e, t) {
              return e.position.x - t.position.x || e.position.y - t.position.y;
            }
            (o._create = function () {
              t.prototype._create.call(this),
                (this.packer = new i()),
                (this.shiftPacker = new i()),
                (this.isEnabled = !0),
                (this.dragItemCount = 0);
              var e = this;
              (this.handleDraggabilly = {
                dragStart: function () {
                  e.itemDragStart(this.element);
                },
                dragMove: function () {
                  e.itemDragMove(
                    this.element,
                    this.position.x,
                    this.position.y
                  );
                },
                dragEnd: function () {
                  e.itemDragEnd(this.element);
                },
              }),
                (this.handleUIDraggable = {
                  start: function (t, n) {
                    n && e.itemDragStart(t.currentTarget);
                  },
                  drag: function (t, n) {
                    n &&
                      e.itemDragMove(
                        t.currentTarget,
                        n.position.left,
                        n.position.top
                      );
                  },
                  stop: function (t, n) {
                    n && e.itemDragEnd(t.currentTarget);
                  },
                });
            }),
              (o._resetLayout = function () {
                var e, t, n;
                this.getSize(),
                  this._getMeasurements(),
                  this._getOption("horizontal")
                    ? ((e = 1 / 0),
                      (t = this.size.innerHeight + this.gutter),
                      (n = "rightwardTopToBottom"))
                    : ((e = this.size.innerWidth + this.gutter),
                      (t = 1 / 0),
                      (n = "downwardLeftToRight")),
                  (this.packer.width = this.shiftPacker.width = e),
                  (this.packer.height = this.shiftPacker.height = t),
                  (this.packer.sortDirection = this.shiftPacker.sortDirection =
                    n),
                  this.packer.reset(),
                  (this.maxY = 0),
                  (this.maxX = 0);
              }),
              (o._getMeasurements = function () {
                this._getMeasurement("columnWidth", "width"),
                  this._getMeasurement("rowHeight", "height"),
                  this._getMeasurement("gutter", "width");
              }),
              (o._getItemLayoutPosition = function (e) {
                if (
                  (this._setRectSize(e.element, e.rect),
                  this.isShifting || this.dragItemCount > 0)
                ) {
                  var t = this._getPackMethod();
                  this.packer[t](e.rect);
                } else this.packer.pack(e.rect);
                return this._setMaxXY(e.rect), e.rect;
              }),
              (o.shiftLayout = function () {
                (this.isShifting = !0), this.layout(), delete this.isShifting;
              }),
              (o._getPackMethod = function () {
                return this._getOption("horizontal") ? "rowPack" : "columnPack";
              }),
              (o._setMaxXY = function (e) {
                (this.maxX = Math.max(e.x + e.width, this.maxX)),
                  (this.maxY = Math.max(e.y + e.height, this.maxY));
              }),
              (o._setRectSize = function (t, n) {
                var i = e(t),
                  r = i.outerWidth,
                  s = i.outerHeight;
                (r || s) &&
                  ((r = this._applyGridGutter(r, this.columnWidth)),
                  (s = this._applyGridGutter(s, this.rowHeight))),
                  (n.width = Math.min(r, this.packer.width)),
                  (n.height = Math.min(s, this.packer.height));
              }),
              (o._applyGridGutter = function (e, t) {
                if (!t) return e + this.gutter;
                var n = e % (t += this.gutter);
                return Math[n && n < 1 ? "round" : "ceil"](e / t) * t;
              }),
              (o._getContainerSize = function () {
                return this._getOption("horizontal")
                  ? { width: this.maxX - this.gutter }
                  : { height: this.maxY - this.gutter };
              }),
              (o._manageStamp = function (e) {
                var t,
                  i = this.getItem(e);
                if (i && i.isPlacing) t = i.rect;
                else {
                  var r = this._getElementOffset(e);
                  t = new n({
                    x: this._getOption("originLeft") ? r.left : r.right,
                    y: this._getOption("originTop") ? r.top : r.bottom,
                  });
                }
                this._setRectSize(e, t),
                  this.packer.placed(t),
                  this._setMaxXY(t);
              }),
              (o.sortItemsByPosition = function () {
                var e = this._getOption("horizontal") ? l : a;
                this.items.sort(e);
              }),
              (o.fit = function (e, t, n) {
                var i = this.getItem(e);
                i &&
                  (this.stamp(i.element),
                  i.enablePlacing(),
                  this.updateShiftTargets(i),
                  (t = void 0 === t ? i.rect.x : t),
                  (n = void 0 === n ? i.rect.y : n),
                  this.shift(i, t, n),
                  this._bindFitEvents(i),
                  i.moveTo(i.rect.x, i.rect.y),
                  this.shiftLayout(),
                  this.unstamp(i.element),
                  this.sortItemsByPosition(),
                  i.disablePlacing());
              }),
              (o._bindFitEvents = function (e) {
                var t = this,
                  n = 0;
                function i() {
                  2 == ++n && t.dispatchEvent("fitComplete", null, [e]);
                }
                e.once("layout", i), this.once("layoutComplete", i);
              }),
              (o.resize = function () {
                this.isResizeBound &&
                  this.needsResizeLayout() &&
                  (this.options.shiftPercentResize
                    ? this.resizeShiftPercentLayout()
                    : this.layout());
              }),
              (o.needsResizeLayout = function () {
                var t = e(this.element),
                  n = this._getOption("horizontal")
                    ? "innerHeight"
                    : "innerWidth";
                return t[n] != this.size[n];
              }),
              (o.resizeShiftPercentLayout = function () {
                var t = this._getItemsForLayout(this.items),
                  n = this._getOption("horizontal"),
                  i = n ? "y" : "x",
                  r = n ? "height" : "width",
                  s = n ? "rowHeight" : "columnWidth",
                  o = n ? "innerHeight" : "innerWidth",
                  a = this[s];
                if ((a = a && a + this.gutter)) {
                  this._getMeasurements();
                  var l = this[s] + this.gutter;
                  t.forEach(function (e) {
                    var t = Math.round(e.rect[i] / a);
                    e.rect[i] = t * l;
                  });
                } else {
                  var u = e(this.element)[o] + this.gutter,
                    c = this.packer[r];
                  t.forEach(function (e) {
                    e.rect[i] = (e.rect[i] / c) * u;
                  });
                }
                this.shiftLayout();
              }),
              (o.itemDragStart = function (e) {
                if (this.isEnabled) {
                  this.stamp(e);
                  var t = this.getItem(e);
                  t &&
                    (t.enablePlacing(),
                    t.showDropPlaceholder(),
                    this.dragItemCount++,
                    this.updateShiftTargets(t));
                }
              }),
              (o.updateShiftTargets = function (e) {
                this.shiftPacker.reset(), this._getBoundingRect();
                var t = this._getOption("originLeft"),
                  i = this._getOption("originTop");
                this.stamps.forEach(function (e) {
                  var r = this.getItem(e);
                  if (!r || !r.isPlacing) {
                    var s = this._getElementOffset(e),
                      o = new n({
                        x: t ? s.left : s.right,
                        y: i ? s.top : s.bottom,
                      });
                    this._setRectSize(e, o), this.shiftPacker.placed(o);
                  }
                }, this);
                var r,
                  s = this._getOption("horizontal"),
                  o = s ? "rowHeight" : "columnWidth",
                  a = s ? "height" : "width";
                (this.shiftTargetKeys = []), (this.shiftTargets = []);
                var l = this[o];
                if ((l = l && l + this.gutter)) {
                  var u = Math.ceil(e.rect[a] / l),
                    c = Math.floor((this.shiftPacker[a] + this.gutter) / l);
                  r = (c - u) * l;
                  for (var d = 0; d < c; d++) {
                    var f = s ? 0 : d * l,
                      h = s ? d * l : 0;
                    this._addShiftTarget(f, h, r);
                  }
                } else
                  (r = this.shiftPacker[a] + this.gutter - e.rect[a]),
                    this._addShiftTarget(0, 0, r);
                var p = this._getItemsForLayout(this.items),
                  m = this._getPackMethod();
                p.forEach(function (e) {
                  var t = e.rect;
                  this._setRectSize(e.element, t),
                    this.shiftPacker[m](t),
                    this._addShiftTarget(t.x, t.y, r);
                  var n = s ? t.x + t.width : t.x,
                    i = s ? t.y : t.y + t.height;
                  if ((this._addShiftTarget(n, i, r), l))
                    for (var o = Math.round(t[a] / l), u = 1; u < o; u++) {
                      var c = s ? n : t.x + l * u,
                        d = s ? t.y + l * u : i;
                      this._addShiftTarget(c, d, r);
                    }
                }, this);
              }),
              (o._addShiftTarget = function (e, t, n) {
                var i = this._getOption("horizontal") ? t : e;
                if (!(0 !== i && i > n)) {
                  var r = e + "," + t;
                  -1 != this.shiftTargetKeys.indexOf(r) ||
                    (this.shiftTargetKeys.push(r),
                    this.shiftTargets.push({ x: e, y: t }));
                }
              }),
              (o.shift = function (e, t, n) {
                var i,
                  r = 1 / 0,
                  s = { x: t, y: n };
                this.shiftTargets.forEach(function (e) {
                  var t,
                    n,
                    o,
                    a,
                    l =
                      ((o = (n = s).x - (t = e).x),
                      (a = n.y - t.y),
                      Math.sqrt(o * o + a * a));
                  l < r && ((i = e), (r = l));
                }),
                  (e.rect.x = i.x),
                  (e.rect.y = i.y);
              }),
              (o.itemDragMove = function (e, t, n) {
                var i = this.isEnabled && this.getItem(e);
                if (i) {
                  (t -= this.size.paddingLeft), (n -= this.size.paddingTop);
                  var r = this,
                    s = new Date();
                  this._itemDragTime && s - this._itemDragTime < 120
                    ? (clearTimeout(this.dragTimeout),
                      (this.dragTimeout = setTimeout(o, 120)))
                    : (o(), (this._itemDragTime = s));
                }
                function o() {
                  r.shift(i, t, n), i.positionDropPlaceholder(), r.layout();
                }
              }),
              (o.itemDragEnd = function (e) {
                var t = this.isEnabled && this.getItem(e);
                if (t) {
                  clearTimeout(this.dragTimeout),
                    t.element.classList.add("is-positioning-post-drag");
                  var n = 0,
                    i = this;
                  t.once("layout", r),
                    this.once("layoutComplete", r),
                    t.moveTo(t.rect.x, t.rect.y),
                    this.layout(),
                    (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
                    this.sortItemsByPosition(),
                    t.disablePlacing(),
                    this.unstamp(t.element);
                }
                function r() {
                  2 == ++n &&
                    (t.element.classList.remove("is-positioning-post-drag"),
                    t.hideDropPlaceholder(),
                    i.dispatchEvent("dragItemPositioned", null, [t]));
                }
              }),
              (o.bindDraggabillyEvents = function (e) {
                this._bindDraggabillyEvents(e, "on");
              }),
              (o.unbindDraggabillyEvents = function (e) {
                this._bindDraggabillyEvents(e, "off");
              }),
              (o._bindDraggabillyEvents = function (e, t) {
                var n = this.handleDraggabilly;
                e[t]("dragStart", n.dragStart),
                  e[t]("dragMove", n.dragMove),
                  e[t]("dragEnd", n.dragEnd);
              }),
              (o.bindUIDraggableEvents = function (e) {
                this._bindUIDraggableEvents(e, "on");
              }),
              (o.unbindUIDraggableEvents = function (e) {
                this._bindUIDraggableEvents(e, "off");
              }),
              (o._bindUIDraggableEvents = function (e, t) {
                var n = this.handleUIDraggable;
                e[t]("dragstart", n.start)
                  [t]("drag", n.drag)
                  [t]("dragstop", n.stop);
              });
            var u = o.destroy;
            return (
              (o.destroy = function () {
                u.apply(this, arguments), (this.isEnabled = !1);
              }),
              (s.Rect = n),
              (s.Packer = i),
              s
            );
          })
            ? i.apply(t, r)
            : i) || (e.exports = s);
  },
  function (e, t) {
    e.exports = {
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3",
      ignoreSelector: ".js-toc-ignore",
      hasInnerContainers: !1,
      linkClass: "toc-link",
      extraLinkClasses: "",
      activeLinkClass: "is-active-link",
      listClass: "toc-list",
      extraListClasses: "",
      isCollapsedClass: "is-collapsed",
      collapsibleClass: "is-collapsible",
      listItemClass: "toc-list-item",
      activeListItemClass: "is-active-li",
      collapseDepth: 0,
      scrollSmooth: !0,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback: function (e) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: "is-position-fixed",
      fixedSidebarOffset: "auto",
      includeHtml: !1,
      includeTitleTags: !1,
      onClick: function (e) {},
      orderedList: !0,
      scrollContainer: null,
      skipRendering: !1,
      headingLabelCallback: !1,
      ignoreHiddenElements: !1,
      headingObjectCallback: null,
      basePath: "",
      disableTocScrollSync: !1,
      tocScrollOffset: 0,
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t,
        n = [].forEach,
        i = [].some,
        r = document.body,
        s = !0;
      function o(t, i) {
        var r = i.appendChild(
          (function (t) {
            var i = document.createElement("li"),
              r = document.createElement("a");
            return (
              e.listItemClass && i.setAttribute("class", e.listItemClass),
              e.onClick && (r.onclick = e.onClick),
              e.includeTitleTags && r.setAttribute("title", t.textContent),
              e.includeHtml && t.childNodes.length
                ? n.call(t.childNodes, function (e) {
                    r.appendChild(e.cloneNode(!0));
                  })
                : (r.textContent = t.textContent),
              r.setAttribute("href", e.basePath + "#" + t.id),
              r.setAttribute(
                "class",
                e.linkClass +
                  " node-name--" +
                  t.nodeName +
                  " " +
                  e.extraLinkClasses
              ),
              i.appendChild(r),
              i
            );
          })(t)
        );
        if (t.children.length) {
          var s = a(t.isCollapsed);
          t.children.forEach(function (e) {
            o(e, s);
          }),
            r.appendChild(s);
        }
      }
      function a(t) {
        var n = e.orderedList ? "ol" : "ul",
          i = document.createElement(n),
          r = e.listClass + " " + e.extraListClasses;
        return (
          t &&
            (r = (r = r + " " + e.collapsibleClass) + " " + e.isCollapsedClass),
          i.setAttribute("class", r),
          i
        );
      }
      function l(e, t) {
        return e && e.className !== t && (e.className = t), e;
      }
      return {
        enableTocAnimation: function () {
          s = !0;
        },
        disableTocAnimation: function (t) {
          var n = t.target || t.srcElement;
          "string" == typeof n.className &&
            -1 !== n.className.indexOf(e.linkClass) &&
            (s = !1);
        },
        render: function (e, n) {
          var i = a(!1);
          if (
            (n.forEach(function (e) {
              o(e, i);
            }),
            null !== (t = e || t))
          )
            return (
              t.firstChild && t.removeChild(t.firstChild),
              0 === n.length ? t : t.appendChild(i)
            );
        },
        updateToc: function (o) {
          var a;
          (a =
            e.scrollContainer && document.querySelector(e.scrollContainer)
              ? document.querySelector(e.scrollContainer).scrollTop
              : document.documentElement.scrollTop || r.scrollTop),
            e.positionFixedSelector &&
              (function () {
                var n;
                n =
                  e.scrollContainer && document.querySelector(e.scrollContainer)
                    ? document.querySelector(e.scrollContainer).scrollTop
                    : document.documentElement.scrollTop || r.scrollTop;
                var i = document.querySelector(e.positionFixedSelector);
                "auto" === e.fixedSidebarOffset &&
                  (e.fixedSidebarOffset = t.offsetTop),
                  n > e.fixedSidebarOffset
                    ? -1 === i.className.indexOf(e.positionFixedClass) &&
                      (i.className += " " + e.positionFixedClass)
                    : (i.className = i.className.replace(
                        " " + e.positionFixedClass,
                        ""
                      ));
              })();
          var u,
            c = o;
          if (s && null !== t && c.length > 0) {
            i.call(c, function (t, n) {
              return (function t(n) {
                var i = 0;
                return (
                  null !== n &&
                    ((i = n.offsetTop),
                    e.hasInnerContainers && (i += t(n.offsetParent))),
                  i
                );
              })(t) >
                a + e.headingsOffset + 10
                ? ((u = c[0 === n ? n : n - 1]), !0)
                : n === c.length - 1
                ? ((u = c[c.length - 1]), !0)
                : void 0;
            });
            var d = t.querySelector("." + e.activeLinkClass),
              f = t.querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  u.nodeName +
                  '[href="' +
                  e.basePath +
                  "#" +
                  u.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                  '"]'
              );
            if (d === f) return;
            var h = t.querySelectorAll("." + e.linkClass);
            n.call(h, function (t) {
              l(t, t.className.replace(" " + e.activeLinkClass, ""));
            });
            var p = t.querySelectorAll("." + e.listItemClass);
            n.call(p, function (t) {
              l(t, t.className.replace(" " + e.activeListItemClass, ""));
            }),
              f &&
                -1 === f.className.indexOf(e.activeLinkClass) &&
                (f.className += " " + e.activeLinkClass);
            var m = f && f.parentNode;
            m &&
              -1 === m.className.indexOf(e.activeListItemClass) &&
              (m.className += " " + e.activeListItemClass);
            var g = t.querySelectorAll(
              "." + e.listClass + "." + e.collapsibleClass
            );
            n.call(g, function (t) {
              -1 === t.className.indexOf(e.isCollapsedClass) &&
                (t.className += " " + e.isCollapsedClass);
            }),
              f &&
                f.nextSibling &&
                -1 !== f.nextSibling.className.indexOf(e.isCollapsedClass) &&
                l(
                  f.nextSibling,
                  f.nextSibling.className.replace(" " + e.isCollapsedClass, "")
                ),
              (function t(n) {
                return n &&
                  -1 !== n.className.indexOf(e.collapsibleClass) &&
                  -1 !== n.className.indexOf(e.isCollapsedClass)
                  ? (l(n, n.className.replace(" " + e.isCollapsedClass, "")),
                    t(n.parentNode.parentNode))
                  : n;
              })(f && f.parentNode.parentNode);
          }
        },
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [].reduce;
      function n(e) {
        return e[e.length - 1];
      }
      function i(e) {
        return +e.nodeName.toUpperCase().replace("H", "");
      }
      function r(t) {
        if (
          !(function (e) {
            try {
              return (
                e instanceof window.HTMLElement ||
                e instanceof window.parent.HTMLElement
              );
            } catch (t) {
              return e instanceof window.HTMLElement;
            }
          })(t)
        )
          return t;
        if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent))
          return null;
        const n =
          t.getAttribute("data-heading-label") ||
          (e.headingLabelCallback
            ? String(e.headingLabelCallback(t.textContent))
            : t.textContent.trim());
        var r = {
          id: t.id,
          children: [],
          nodeName: t.nodeName,
          headingLevel: i(t),
          textContent: n,
        };
        return (
          e.includeHtml && (r.childNodes = t.childNodes),
          e.headingObjectCallback ? e.headingObjectCallback(r, t) : r
        );
      }
      return {
        nestHeadingsArray: function (i) {
          return t.call(
            i,
            function (t, i) {
              var s = r(i);
              return (
                s &&
                  (function (t, i) {
                    for (
                      var s = r(t),
                        o = s.headingLevel,
                        a = i,
                        l = n(a),
                        u = o - (l ? l.headingLevel : 0);
                      u > 0 && (!(l = n(a)) || o !== l.headingLevel);

                    )
                      l && void 0 !== l.children && (a = l.children), u--;
                    o >= e.collapseDepth && (s.isCollapsed = !0), a.push(s);
                  })(s, t.nest),
                t
              );
            },
            { nest: [] }
          );
        },
        selectHeadings: function (t, n) {
          var i = n;
          e.ignoreSelector &&
            (i = n.split(",").map(function (t) {
              return t.trim() + ":not(" + e.ignoreSelector + ")";
            }));
          try {
            return t.querySelectorAll(i);
          } catch (e) {
            return console.warn("Headers not found with selector: " + i), null;
          }
        },
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.tocElement || document.querySelector(e.tocSelector);
      if (t && t.scrollHeight > t.clientHeight) {
        var n = t.querySelector("." + e.activeListItemClass);
        n && (t.scrollTop = n.offsetTop - e.tocScrollOffset);
      }
    };
  },
  function (e, t) {
    t.initSmoothScrolling = function (e) {
      var t = e.duration,
        n = e.offset,
        i = location.hash ? r(location.href) : location.href;
      function r(e) {
        return e.slice(0, e.lastIndexOf("#"));
      }
      document.body.addEventListener(
        "click",
        function (s) {
          var o;
          "a" !== (o = s.target).tagName.toLowerCase() ||
            !(o.hash.length > 0 || "#" === o.href.charAt(o.href.length - 1)) ||
            (r(o.href) !== i && r(o.href) + "#" !== i) ||
            s.target.className.indexOf("no-smooth-scroll") > -1 ||
            ("#" === s.target.href.charAt(s.target.href.length - 2) &&
              "!" === s.target.href.charAt(s.target.href.length - 1)) ||
            -1 === s.target.className.indexOf(e.linkClass) ||
            (function (e, t) {
              var n,
                i,
                r = window.pageYOffset,
                s = {
                  duration: t.duration,
                  offset: t.offset || 0,
                  callback: t.callback,
                  easing:
                    t.easing ||
                    function (e, t, n, i) {
                      return (e /= i / 2) < 1
                        ? (n / 2) * e * e + t
                        : (-n / 2) * (--e * (e - 2) - 1) + t;
                    },
                },
                o =
                  document.querySelector(
                    '[id="' + decodeURI(e).split("#").join("") + '"]'
                  ) ||
                  document.querySelector(
                    '[id="' + e.split("#").join("") + '"]'
                  ),
                a =
                  "string" == typeof e
                    ? s.offset +
                      (e
                        ? (o && o.getBoundingClientRect().top) || 0
                        : -(
                            document.documentElement.scrollTop ||
                            document.body.scrollTop
                          ))
                    : e,
                l =
                  "function" == typeof s.duration ? s.duration(a) : s.duration;
              function u(e) {
                (i = e - n),
                  window.scrollTo(0, s.easing(i, r, a, l)),
                  i < l
                    ? requestAnimationFrame(u)
                    : (window.scrollTo(0, r + a),
                      "function" == typeof s.callback && s.callback());
              }
              requestAnimationFrame(function (e) {
                (n = e), u(e);
              });
            })(s.target.hash, {
              duration: t,
              offset: n,
              callback: function () {
                var e, t;
                (e = s.target.hash),
                  (t = document.getElementById(e.substring(1))) &&
                    (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
                      (t.tabIndex = -1),
                    t.focus());
              },
            });
        },
        !1
      );
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.EmojiActor = void 0);
    const i = n(21),
      r = n(3);
    t.EmojiActor = class {
      constructor(e) {
        (this.opacity = 1),
          (this.element = document.createElement(e.tagName)),
          (this.element.className = e.className),
          (this.element.style.transition = "16ms opacity, 16ms transform"),
          (this.element.textContent = r.randomArrayMember(e.emojis)),
          this.element.setAttribute("aria-label", "Random emoji"),
          this.element.setAttribute("role", "img"),
          (this.element.style.fontSize =
            i.randomInRange(e.physics.fontSize) + "px"),
          (this.physics = e.physics),
          (this.position = {
            rotation: i.randomInRange(e.physics.rotation),
            x: e.position.x,
            y: e.position.y,
          }),
          (this.velocity = {
            rotation: i.randomInRange(e.physics.initialVelocities.rotation),
            x: i.randomInRange(e.physics.initialVelocities.x),
            y: i.randomInRange(e.physics.initialVelocities.y),
          }),
          this.updateElement(),
          e.process(this.element),
          e.container.appendChild(this.element);
      }
      act(e) {
        if (
          this.physics.opacityDecay &&
          ((this.opacity -=
            e / (this.physics.opacityDecay * this.physics.framerate)),
          this.opacity <= 0)
        )
          return !0;
        (this.velocity.rotation *= this.physics.rotationDeceleration),
          (this.velocity.y += this.physics.gravity),
          (this.position.rotation += this.velocity.rotation),
          (this.position.x += (this.velocity.x * e) / this.physics.framerate),
          (this.position.y += (this.velocity.y * e) / this.physics.framerate);
        const t = window.outerHeight || document.documentElement.clientHeight,
          n = window.outerWidth || document.documentElement.clientWidth;
        if (!this.physics.preserveOutOfBounds) {
          if (this.position.y - this.element.clientHeight > t + 350) return !0;
          if (this.position.y + this.element.clientHeight < -350) return !0;
          if (this.position.x - this.element.clientWidth > n + 350) return !0;
          if (this.position.x + this.element.clientWidth < -350) return !0;
        }
        return this.updateElement(), !1;
      }
      dispose() {
        null !== this.element.parentElement &&
          this.element.parentElement.removeChild(this.element);
      }
      updateElement() {
        (this.element.style.opacity = "" + this.opacity),
          (this.element.style.transform = `translate(${this.position.x}px, ${
            this.position.y
          }px) rotate(${Math.round(this.position.rotation)}deg)`);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.randomInRange = void 0),
      (t.randomInRange = (e) =>
        "number" == typeof e
          ? e
          : Math.floor(Math.random() * (e.max - e.min + 1)) + e.min);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Animator = void 0),
      (t.Animator = class {
        constructor() {
          (this.actors = []),
            (this.tick = (e) => {
              const t = e - this.previousTime;
              for (let e = 0; e < this.actors.length; e += 1) {
                const n = this.actors[e];
                n.act(t) && (n.dispose(), this.actors.splice(e, 1), (e -= 1));
              }
              0 !== this.actors.length &&
                ((this.previousTime = e), requestAnimationFrame(this.tick));
            });
        }
        add(e) {
          this.actors.push(e);
        }
        start() {
          return (
            (this.previousTime = performance.now()),
            requestAnimationFrame(this.tick),
            this
          );
        }
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createStyleElementAndClass = void 0);
    const i = new Set();
    t.createStyleElementAndClass = (e) => {
      if (i.has(e)) return;
      i.add(e);
      const t = document.createElement("style");
      (t.type = "text/css"),
        t.appendChild(
          document.createTextNode(
            `\n        .${e} {\n            cursor: default;\n            margin-left: -1em;\n            margin-top: -1em;\n            position: fixed;\n            user-select: none;\n            z-index: 2147483647;\n        }\n    `
          )
        ),
        document.head.appendChild(t);
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.emojisplosions = void 0);
    const i = n(8),
      r = n(3),
      s = () => 700 + Math.floor(1401 * Math.random());
    t.emojisplosions = (e = {}) => {
      const { interval: t = s, scheduler: n = setTimeout } = e;
      let o = !1;
      const a = () => i.emojisplosion(e),
        l = () => {
          o ||
            ("visible" === document.visibilityState && a(),
            n(l, r.obtainValue(t)));
        };
      return (
        n(l, 0),
        {
          blast: a,
          cancel() {
            o = !0;
          },
        }
      );
    };
  },
  function (e, t, n) {
    var i, r, s;
    (s = window),
      (i = [n(26)]),
      void 0 ===
        (r = function (e) {
          return (function (e, t) {
            "use strict";
            var n = {
                extend: function (e, t) {
                  for (var n in t) e[n] = t[n];
                  return e;
                },
                modulo: function (e, t) {
                  return ((e % t) + t) % t;
                },
              },
              i = Array.prototype.slice;
            (n.makeArray = function (e) {
              return Array.isArray(e)
                ? e
                : null == e
                ? []
                : "object" == typeof e && "number" == typeof e.length
                ? i.call(e)
                : [e];
            }),
              (n.removeFrom = function (e, t) {
                var n = e.indexOf(t);
                -1 != n && e.splice(n, 1);
              }),
              (n.getParent = function (e, n) {
                for (; e.parentNode && e != document.body; )
                  if (((e = e.parentNode), t(e, n))) return e;
              }),
              (n.getQueryElement = function (e) {
                return "string" == typeof e ? document.querySelector(e) : e;
              }),
              (n.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
              }),
              (n.filterFindElements = function (e, i) {
                e = n.makeArray(e);
                var r = [];
                return (
                  e.forEach(function (e) {
                    if (e instanceof HTMLElement)
                      if (i) {
                        t(e, i) && r.push(e);
                        for (
                          var n = e.querySelectorAll(i), s = 0;
                          s < n.length;
                          s++
                        )
                          r.push(n[s]);
                      } else r.push(e);
                  }),
                  r
                );
              }),
              (n.debounceMethod = function (e, t, n) {
                n = n || 100;
                var i = e.prototype[t],
                  r = t + "Timeout";
                e.prototype[t] = function () {
                  var e = this[r];
                  clearTimeout(e);
                  var t = arguments,
                    s = this;
                  this[r] = setTimeout(function () {
                    i.apply(s, t), delete s[r];
                  }, n);
                };
              }),
              (n.docReady = function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t
                  ? setTimeout(e)
                  : document.addEventListener("DOMContentLoaded", e);
              }),
              (n.toDashed = function (e) {
                return e
                  .replace(/(.)([A-Z])/g, function (e, t, n) {
                    return t + "-" + n;
                  })
                  .toLowerCase();
              });
            var r = e.console;
            return (
              (n.htmlInit = function (t, i) {
                n.docReady(function () {
                  var s = n.toDashed(i),
                    o = "data-" + s,
                    a = document.querySelectorAll("[" + o + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = o + "-options",
                    d = e.jQuery;
                  u.forEach(function (e) {
                    var n,
                      s = e.getAttribute(o) || e.getAttribute(c);
                    try {
                      n = s && JSON.parse(s);
                    } catch (t) {
                      return void (
                        r &&
                        r.error(
                          "Error parsing " + o + " on " + e.className + ": " + t
                        )
                      );
                    }
                    var a = new t(e, n);
                    d && d.data(e, i, a);
                  });
                });
              }),
              n
            );
          })(s, e);
        }.apply(t, i)) || (e.exports = r);
  },
  function (e, t, n) {
    var i, r;
    !(function (s, o) {
      "use strict";
      void 0 ===
        (r =
          "function" ==
          typeof (i = function () {
            var e = (function () {
              var e = window.Element.prototype;
              if (e.matches) return "matches";
              if (e.matchesSelector) return "matchesSelector";
              for (
                var t = ["webkit", "moz", "ms", "o"], n = 0;
                n < t.length;
                n++
              ) {
                var i = t[n] + "MatchesSelector";
                if (e[i]) return i;
              }
            })();
            return function (t, n) {
              return t[e](n);
            };
          })
            ? i.call(t, n, t, e)
            : i) || (e.exports = r);
    })(window);
  },
  function (e, t, n) {
    var i, r, s;
    window,
      (r = [n(10), n(4)]),
      void 0 ===
        (s =
          "function" ==
          typeof (i = function (e, t) {
            "use strict";
            var n = document.documentElement.style,
              i =
                "string" == typeof n.transition
                  ? "transition"
                  : "WebkitTransition",
              r =
                "string" == typeof n.transform
                  ? "transform"
                  : "WebkitTransform",
              s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
              }[i],
              o = {
                transform: r,
                transition: i,
                transitionDuration: i + "Duration",
                transitionProperty: i + "Property",
                transitionDelay: i + "Delay",
              };
            function a(e, t) {
              e &&
                ((this.element = e),
                (this.layout = t),
                (this.position = { x: 0, y: 0 }),
                this._create());
            }
            var l = (a.prototype = Object.create(e.prototype));
            (l.constructor = a),
              (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                  this.css({ position: "absolute" });
              }),
              (l.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
              }),
              (l.getSize = function () {
                this.size = t(this.element);
              }),
              (l.css = function (e) {
                var t = this.element.style;
                for (var n in e) t[o[n] || n] = e[n];
              }),
              (l.getPosition = function () {
                var e = getComputedStyle(this.element),
                  t = this.layout._getOption("originLeft"),
                  n = this.layout._getOption("originTop"),
                  i = e[t ? "left" : "right"],
                  r = e[n ? "top" : "bottom"],
                  s = parseFloat(i),
                  o = parseFloat(r),
                  a = this.layout.size;
                -1 != i.indexOf("%") && (s = (s / 100) * a.width),
                  -1 != r.indexOf("%") && (o = (o / 100) * a.height),
                  (s = isNaN(s) ? 0 : s),
                  (o = isNaN(o) ? 0 : o),
                  (s -= t ? a.paddingLeft : a.paddingRight),
                  (o -= n ? a.paddingTop : a.paddingBottom),
                  (this.position.x = s),
                  (this.position.y = o);
              }),
              (l.layoutPosition = function () {
                var e = this.layout.size,
                  t = {},
                  n = this.layout._getOption("originLeft"),
                  i = this.layout._getOption("originTop"),
                  r = n ? "paddingLeft" : "paddingRight",
                  s = n ? "left" : "right",
                  o = n ? "right" : "left",
                  a = this.position.x + e[r];
                (t[s] = this.getXValue(a)), (t[o] = "");
                var l = i ? "paddingTop" : "paddingBottom",
                  u = i ? "top" : "bottom",
                  c = i ? "bottom" : "top",
                  d = this.position.y + e[l];
                (t[u] = this.getYValue(d)),
                  (t[c] = ""),
                  this.css(t),
                  this.emitEvent("layout", [this]);
              }),
              (l.getXValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !t
                  ? (e / this.layout.size.width) * 100 + "%"
                  : e + "px";
              }),
              (l.getYValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && t
                  ? (e / this.layout.size.height) * 100 + "%"
                  : e + "px";
              }),
              (l._transitionTo = function (e, t) {
                this.getPosition();
                var n = this.position.x,
                  i = this.position.y,
                  r = e == this.position.x && t == this.position.y;
                if ((this.setPosition(e, t), !r || this.isTransitioning)) {
                  var s = e - n,
                    o = t - i,
                    a = {};
                  (a.transform = this.getTranslate(s, o)),
                    this.transition({
                      to: a,
                      onTransitionEnd: { transform: this.layoutPosition },
                      isCleaning: !0,
                    });
                } else this.layoutPosition();
              }),
              (l.getTranslate = function (e, t) {
                return (
                  "translate3d(" +
                  (e = this.layout._getOption("originLeft") ? e : -e) +
                  "px, " +
                  (t = this.layout._getOption("originTop") ? t : -t) +
                  "px, 0)"
                );
              }),
              (l.goTo = function (e, t) {
                this.setPosition(e, t), this.layoutPosition();
              }),
              (l.moveTo = l._transitionTo),
              (l.setPosition = function (e, t) {
                (this.position.x = parseFloat(e)),
                  (this.position.y = parseFloat(t));
              }),
              (l._nonTransition = function (e) {
                for (var t in (this.css(e.to),
                e.isCleaning && this._removeStyles(e.to),
                e.onTransitionEnd))
                  e.onTransitionEnd[t].call(this);
              }),
              (l.transition = function (e) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                  var t = this._transn;
                  for (var n in e.onTransitionEnd)
                    t.onEnd[n] = e.onTransitionEnd[n];
                  for (n in e.to)
                    (t.ingProperties[n] = !0),
                      e.isCleaning && (t.clean[n] = !0);
                  e.from && (this.css(e.from), this.element.offsetHeight),
                    this.enableTransition(e.to),
                    this.css(e.to),
                    (this.isTransitioning = !0);
                } else this._nonTransition(e);
              });
            var u =
              "opacity," +
              r.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
              });
            (l.enableTransition = function () {
              if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                (e = "number" == typeof e ? e + "ms" : e),
                  this.css({
                    transitionProperty: u,
                    transitionDuration: e,
                    transitionDelay: this.staggerDelay || 0,
                  }),
                  this.element.addEventListener(s, this, !1);
              }
            }),
              (l.onwebkitTransitionEnd = function (e) {
                this.ontransitionend(e);
              }),
              (l.onotransitionend = function (e) {
                this.ontransitionend(e);
              });
            var c = { "-webkit-transform": "transform" };
            (l.ontransitionend = function (e) {
              if (e.target === this.element) {
                var t = this._transn,
                  n = c[e.propertyName] || e.propertyName;
                delete t.ingProperties[n],
                  (function (e) {
                    for (var t in e) return !1;
                    return !0;
                  })(t.ingProperties) && this.disableTransition(),
                  n in t.clean &&
                    ((this.element.style[e.propertyName] = ""),
                    delete t.clean[n]),
                  n in t.onEnd && (t.onEnd[n].call(this), delete t.onEnd[n]),
                  this.emitEvent("transitionEnd", [this]);
              }
            }),
              (l.disableTransition = function () {
                this.removeTransitionStyles(),
                  this.element.removeEventListener(s, this, !1),
                  (this.isTransitioning = !1);
              }),
              (l._removeStyles = function (e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t);
              });
            var d = {
              transitionProperty: "",
              transitionDuration: "",
              transitionDelay: "",
            };
            return (
              (l.removeTransitionStyles = function () {
                this.css(d);
              }),
              (l.stagger = function (e) {
                (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
              }),
              (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                  this.css({ display: "" }),
                  this.emitEvent("remove", [this]);
              }),
              (l.remove = function () {
                i && parseFloat(this.layout.options.transitionDuration)
                  ? (this.once("transitionEnd", function () {
                      this.removeElem();
                    }),
                    this.hide())
                  : this.removeElem();
              }),
              (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var e = this.layout.options,
                  t = {};
                (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                  this.onRevealTransitionEnd),
                  this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: t,
                  });
              }),
              (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
              }),
              (l.getHideRevealTransitionEndProperty = function (e) {
                var t = this.layout.options[e];
                if (t.opacity) return "opacity";
                for (var n in t) return n;
              }),
              (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var e = this.layout.options,
                  t = {};
                (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                  this.onHideTransitionEnd),
                  this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: t,
                  });
              }),
              (l.onHideTransitionEnd = function () {
                this.isHidden &&
                  (this.css({ display: "none" }), this.emitEvent("hide"));
              }),
              (l.destroy = function () {
                this.css({
                  position: "",
                  left: "",
                  right: "",
                  top: "",
                  bottom: "",
                  transition: "",
                  transform: "",
                });
              }),
              a
            );
          })
            ? i.apply(t, r)
            : i) || (e.exports = s);
  },
  function (e, t, n) {
    var i, r, s;
    window,
      (r = [n(5)]),
      void 0 ===
        (s =
          "function" ==
          typeof (i = function (e) {
            "use strict";
            function t(e, t, n) {
              (this.width = e || 0),
                (this.height = t || 0),
                (this.sortDirection = n || "downwardLeftToRight"),
                this.reset();
            }
            var n = t.prototype;
            (n.reset = function () {
              this.spaces = [];
              var t = new e({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height,
              });
              this.spaces.push(t),
                (this.sorter = i[this.sortDirection] || i.downwardLeftToRight);
            }),
              (n.pack = function (e) {
                for (var t = 0; t < this.spaces.length; t++) {
                  var n = this.spaces[t];
                  if (n.canFit(e)) {
                    this.placeInSpace(e, n);
                    break;
                  }
                }
              }),
              (n.columnPack = function (e) {
                for (var t = 0; t < this.spaces.length; t++) {
                  var n = this.spaces[t];
                  if (
                    n.x <= e.x &&
                    n.x + n.width >= e.x + e.width &&
                    n.height >= e.height - 0.01
                  ) {
                    (e.y = n.y), this.placed(e);
                    break;
                  }
                }
              }),
              (n.rowPack = function (e) {
                for (var t = 0; t < this.spaces.length; t++) {
                  var n = this.spaces[t];
                  if (
                    n.y <= e.y &&
                    n.y + n.height >= e.y + e.height &&
                    n.width >= e.width - 0.01
                  ) {
                    (e.x = n.x), this.placed(e);
                    break;
                  }
                }
              }),
              (n.placeInSpace = function (e, t) {
                (e.x = t.x), (e.y = t.y), this.placed(e);
              }),
              (n.placed = function (e) {
                for (var t = [], n = 0; n < this.spaces.length; n++) {
                  var i = this.spaces[n],
                    r = i.getMaximalFreeRects(e);
                  r ? t.push.apply(t, r) : t.push(i);
                }
                (this.spaces = t), this.mergeSortSpaces();
              }),
              (n.mergeSortSpaces = function () {
                t.mergeRects(this.spaces), this.spaces.sort(this.sorter);
              }),
              (n.addSpace = function (e) {
                this.spaces.push(e), this.mergeSortSpaces();
              }),
              (t.mergeRects = function (e) {
                var t = 0,
                  n = e[t];
                e: for (; n; ) {
                  for (var i = 0, r = e[t + i]; r; ) {
                    if (r == n) i++;
                    else {
                      if (r.contains(n)) {
                        e.splice(t, 1), (n = e[t]);
                        continue e;
                      }
                      n.contains(r) ? e.splice(t + i, 1) : i++;
                    }
                    r = e[t + i];
                  }
                  n = e[++t];
                }
                return e;
              });
            var i = {
              downwardLeftToRight: function (e, t) {
                return e.y - t.y || e.x - t.x;
              },
              rightwardTopToBottom: function (e, t) {
                return e.x - t.x || e.y - t.y;
              },
            };
            return t;
          })
            ? i.apply(t, r)
            : i) || (e.exports = s);
  },
  function (e, t, n) {
    var i, r, s;
    window,
      (r = [n(9), n(5)]),
      void 0 ===
        (s =
          "function" ==
          typeof (i = function (e, t) {
            "use strict";
            var n =
                "string" == typeof document.documentElement.style.transform
                  ? "transform"
                  : "WebkitTransform",
              i = function () {
                e.Item.apply(this, arguments);
              },
              r = (i.prototype = Object.create(e.Item.prototype)),
              s = r._create;
            r._create = function () {
              s.call(this), (this.rect = new t());
            };
            var o = r.moveTo;
            return (
              (r.moveTo = function (e, t) {
                var n = Math.abs(this.position.x - e),
                  i = Math.abs(this.position.y - t);
                this.layout.dragItemCount &&
                !this.isPlacing &&
                !this.isTransitioning &&
                n < 1 &&
                i < 1
                  ? this.goTo(e, t)
                  : o.apply(this, arguments);
              }),
              (r.enablePlacing = function () {
                this.removeTransitionStyles(),
                  this.isTransitioning && n && (this.element.style[n] = "none"),
                  (this.isTransitioning = !1),
                  this.getSize(),
                  this.layout._setRectSize(this.element, this.rect),
                  (this.isPlacing = !0);
              }),
              (r.disablePlacing = function () {
                this.isPlacing = !1;
              }),
              (r.removeElem = function () {
                var e = this.element.parentNode;
                e && e.removeChild(this.element),
                  this.layout.packer.addSpace(this.rect),
                  this.emitEvent("remove", [this]);
              }),
              (r.showDropPlaceholder = function () {
                var e = this.dropPlaceholder;
                e ||
                  (((e = this.dropPlaceholder =
                    document.createElement("div")).className =
                    "packery-drop-placeholder"),
                  (e.style.position = "absolute")),
                  (e.style.width = this.size.width + "px"),
                  (e.style.height = this.size.height + "px"),
                  this.positionDropPlaceholder(),
                  this.layout.element.appendChild(e);
              }),
              (r.positionDropPlaceholder = function () {
                this.dropPlaceholder.style[n] =
                  "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
              }),
              (r.hideDropPlaceholder = function () {
                var e = this.dropPlaceholder.parentNode;
                e && e.removeChild(this.dropPlaceholder);
              }),
              i
            );
          })
            ? i.apply(t, r)
            : i) || (e.exports = s);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(2);
    function r(e, t, n) {
      if (-1 === e.indexOf(t)) return n;
      const i = e[e.indexOf(t) + 1];
      if (!i) return n;
      if ("duration" === t) {
        let e = i.match(/([0-9]+)ms/);
        if (e) return e[1];
      }
      if ("min" === t) {
        let e = i.match(/([0-9]+)px/);
        if (e) return e[1];
      }
      return i;
    }
    var s = n(11),
      o = n.n(s);
    function a(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function l(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : a(t[n]) && a(e[n]) && Object.keys(t[n]).length > 0 && l(e[n], t[n]);
      });
    }
    const u = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function c() {
      const e = "undefined" != typeof document ? document : {};
      return l(e, u), e;
    }
    const d = {
      document: u,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function f() {
      const e = "undefined" != typeof window ? window : {};
      return l(e, d), e;
    }
    class h extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function p(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...p(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function g(e, t) {
      const n = f(),
        i = c();
      let r = [];
      if (!t && e instanceof h) return e;
      if (!e) return new h(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        } else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof h) return e;
        r = e;
      }
      return new h(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    g.fn = h.prototype;
    const v = "resize scroll".split(" ");
    function y(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            v.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : g(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    const _ = {
      addClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        return (
          m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = p(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, r] = e;
        function s(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), g(t).is(n))) i.apply(t, r);
          else {
            const e = g(t).parents();
            for (let t = 0; t < e.length; t += 1)
              g(e[t]).is(n) && i.apply(e[t], r);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: s }),
                t.addEventListener(e, s, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, r] = e;
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const s = t.split(" ");
        for (let e = 0; e < s.length; e += 1) {
          const t = s[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let o;
            if (
              (!n && s.dom7Listeners
                ? (o = s.dom7Listeners[t])
                : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1))
                  : i ||
                    (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = f(),
          n = e[0].split(" "),
          i = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const s = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(s, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = f(),
            t = c(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            s = n.clientTop || r.clientTop || 0,
            o = n.clientLeft || r.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - s, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = f();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = f(),
          n = c(),
          i = this[0];
        let r, s;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (r = g(e), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof h) {
          for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
            if (r[s] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return g([]);
        if (e < 0) {
          const n = t + e;
          return g(n < 0 ? [] : [this[n]]);
        }
        return g([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = c();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof h)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = c();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof h)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e)
              ? g([this[0].nextElementSibling])
              : g([])
            : this[0].nextElementSibling
            ? g([this[0].nextElementSibling])
            : g([])
          : g([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return g([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? g(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return g(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && g(t.previousElementSibling).is(e)
              ? g([t.previousElementSibling])
              : g([])
            : t.previousElementSibling
            ? g([t.previousElementSibling])
            : g([]);
        }
        return g([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return g([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? g(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return g(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? g(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return g(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? g(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return g(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return g(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !g(i[n]).is(e)) || t.push(i[n]);
        }
        return g(t);
      },
      filter: function (e) {
        return g(m(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(_).forEach((e) => {
      Object.defineProperty(g.fn, e, { value: _[e], writable: !0 });
    });
    var b = g;
    function w(e, t = 0) {
      return setTimeout(e, t);
    }
    function x() {
      return Date.now();
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function S(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < e.length; r += 1) {
        const s = e[r];
        if (
          null != s &&
          ((i = s),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, i = e.length; n < i; n += 1) {
            const i = e[n],
              r = Object.getOwnPropertyDescriptor(s, i);
            void 0 !== r &&
              r.enumerable &&
              (T(t[i]) && T(s[i])
                ? s[i].__swiper__
                  ? (t[i] = s[i])
                  : S(t[i], s[i])
                : !T(t[i]) && T(s[i])
                ? ((t[i] = {}), s[i].__swiper__ ? (t[i] = s[i]) : S(t[i], s[i]))
                : (t[i] = s[i]));
          }
        }
      }
      var i;
      return t;
    }
    function C(e, t, n) {
      e.style.setProperty(t, n);
    }
    function E({ swiper: e, targetPosition: t, side: n }) {
      const i = f(),
        r = -e.translate;
      let s,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > r ? "next" : "prev",
        u = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        c = () => {
          (s = new Date().getTime()), null === o && (o = s);
          const l = Math.max(Math.min((s - o) / a, 1), 0),
            d = 0.5 - Math.cos(l * Math.PI) / 2;
          let f = r + d * (t - r);
          if ((u(f, t) && (f = t), e.wrapperEl.scrollTo({ [n]: f }), u(f, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [n]: f });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(c);
        };
      c();
    }
    let M, k, O;
    function P() {
      return (
        M ||
          (M = (function () {
            const e = f(),
              t = c();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        M
      );
    }
    function A({ swiper: e, runCallbacks: t, direction: n, step: i }) {
      const { activeIndex: r, previousIndex: s } = e;
      let o = n;
      if (
        (o || (o = r > s ? "next" : r < s ? "prev" : "reset"),
        e.emit("transition" + i),
        t && r !== s)
      ) {
        if ("reset" === o) return void e.emit("slideResetTransition" + i);
        e.emit("slideChangeTransition" + i),
          "next" === o
            ? e.emit("slideNextTransition" + i)
            : e.emit("slidePrevTransition" + i);
      }
    }
    function L() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
    }
    let R = !1;
    function z() {}
    const I = (e, t) => {
        const n = c(),
          {
            params: i,
            touchEvents: r,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          u = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          f = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[d](r.start, e.onTouchStart, t),
            s[d](
              r.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: u } : u
            ),
            s[d](r.end, e.onTouchEnd, t),
            r.cancel && s[d](r.cancel, e.onTouchEnd, t);
        } else
          s[d](r.start, e.onTouchStart, !1),
            n[d](r.move, e.onTouchMove, u),
            n[d](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          s[d]("click", e.onClick, !0),
          i.cssMode && o[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[f](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                L,
                !0
              )
            : e[f]("observerUpdate", L, !0);
      },
      N = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var D = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
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
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
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
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function F(e, t) {
      return function (n = {}) {
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                S(t, n))
              : S(t, n))
          : S(t, n);
      };
    }
    const B = {
        eventsEmitter: {
          on(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const r = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][r](t);
              }),
              i
            );
          },
          once(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            function r(...n) {
              i.off(e, r),
                r.__emitterProxy && delete r.__emitterProxy,
                t.apply(i, n);
            }
            return (r.__emitterProxy = t), i.on(e, r, n);
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed
              ? n
              : n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((i, r) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(r, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let n, i, r;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
                : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
              i.unshift(r),
              (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(r, [e, ...i]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(r, i);
                    });
              }),
              t
            );
          },
        },
        update: {
          updateSize: function () {
            const e = this;
            let t, n;
            const i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const i = e.params,
              { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
              l = e.virtual && i.virtual.enabled,
              u = l ? e.virtual.slides.length : e.slides.length,
              c = r.children("." + e.params.slideClass),
              d = l ? e.virtual.slides.length : c.length;
            let f = [];
            const h = [],
              p = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let g = i.slidesOffsetAfter;
            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let _ = i.spaceBetween,
              b = -m,
              w = 0,
              x = 0;
            if (void 0 === s) return;
            "string" == typeof _ &&
              _.indexOf("%") >= 0 &&
              (_ = (parseFloat(_.replace("%", "")) / 100) * s),
              (e.virtualSize = -_),
              o
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (C(e.wrapperEl, "--swiper-centered-offset-before", ""),
                C(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = i.grid && i.grid.rows > 1 && e.grid;
            let S;
            T && e.grid.initSlides(d);
            const E =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let r = 0; r < d; r += 1) {
              S = 0;
              const o = c.eq(r);
              if (
                (T && e.grid.updateSlide(r, o, d, t),
                "none" !== o.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  E && (c[r].style[t("width")] = "");
                  const s = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (
                    (a && (o[0].style.transform = "none"),
                    l && (o[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(s, "width"),
                      t = n(s, "padding-left"),
                      i = n(s, "padding-right"),
                      r = n(s, "margin-left"),
                      a = n(s, "margin-right"),
                      l = s.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) S = e + r + a;
                    else {
                      const { clientWidth: n, offsetWidth: s } = o[0];
                      S = e + t + i + r + a + (s - n);
                    }
                  }
                  a && (o[0].style.transform = a),
                    l && (o[0].style.webkitTransform = l),
                    i.roundLengths && (S = Math.floor(S));
                } else
                  (S = (s - (i.slidesPerView - 1) * _) / i.slidesPerView),
                    i.roundLengths && (S = Math.floor(S)),
                    c[r] && (c[r].style[t("width")] = S + "px");
                c[r] && (c[r].swiperSlideSize = S),
                  p.push(S),
                  i.centeredSlides
                    ? ((b = b + S / 2 + w / 2 + _),
                      0 === w && 0 !== r && (b = b - s / 2 - _),
                      0 === r && (b = b - s / 2 - _),
                      Math.abs(b) < 0.001 && (b = 0),
                      i.roundLengths && (b = Math.floor(b)),
                      x % i.slidesPerGroup == 0 && f.push(b),
                      h.push(b))
                    : (i.roundLengths && (b = Math.floor(b)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && f.push(b),
                      h.push(b),
                      (b = b + S + _)),
                  (e.virtualSize += S + _),
                  (w = S),
                  (x += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, s) + g),
              o &&
                a &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                r.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize &&
                r.css({ [t("width")]: e.virtualSize + i.spaceBetween + "px" }),
              T && e.grid.updateWrapperSize(S, f, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < f.length; n += 1) {
                let r = f[n];
                i.roundLengths && (r = Math.floor(r)),
                  f[n] <= e.virtualSize - s && t.push(r);
              }
              (f = t),
                Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) >
                  1 && f.push(e.virtualSize - s);
            }
            if ((0 === f.length && (f = [0]), 0 !== i.spaceBetween)) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
                [n]: _ + "px",
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              p.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              });
              const t = (e -= i.spaceBetween) - s;
              f = f.map((e) => (e < 0 ? -m : e > t ? t + g : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (p.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (e -= i.spaceBetween) < s)
              ) {
                const t = (s - e) / 2;
                f.forEach((e, n) => {
                  f[n] = e - t;
                }),
                  h.forEach((e, n) => {
                    h[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: h,
                slidesSizesGrid: p,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              C(e.wrapperEl, "--swiper-centered-offset-before", -f[0] + "px"),
                C(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - p[p.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            if (
              (d !== u && e.emit("slidesLengthChange"),
              f.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== y && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                l ||
                i.cssMode ||
                ("slide" !== i.effect && "fade" !== i.effect)
              ))
            ) {
              const t = i.containerModifierClass + "backface-hidden",
                n = e.$el.hasClass(t);
              d <= i.maxBackfaceHiddenSlides
                ? n || e.$el.addClass(t)
                : n && e.$el.removeClass(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let r,
              s = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const o = (e) =>
              i
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || b([])).each((e) => {
                  n.push(e);
                });
              else
                for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                  const e = t.activeIndex + r;
                  if (e > t.slides.length && !i) break;
                  n.push(o(e));
                }
            else n.push(o(t.activeIndex));
            for (r = 0; r < n.length; r += 1)
              if (void 0 !== n[r]) {
                const e = n[r].offsetHeight;
                s = e > s ? e : s;
              }
            (s || 0 === s) && t.$wrapperEl.css("height", s + "px");
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1)
              t[n].swiperSlideOffset = e.isHorizontal()
                ? t[n].offsetLeft
                : t[n].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              n = t.params,
              { slides: i, rtlTranslate: r, snapGrid: s } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            r && (o = e),
              i.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < i.length; e += 1) {
              const a = i[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const u =
                  (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                c =
                  (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                d = -(o - l),
                f = d + t.slidesSizesGrid[e];
              ((d >= 0 && d < t.size - 1) ||
                (f > 1 && f <= t.size) ||
                (d <= 0 && f >= t.size)) &&
                (t.visibleSlides.push(a),
                t.visibleSlidesIndexes.push(e),
                i.eq(e).addClass(n.slideVisibleClass)),
                (a.progress = r ? -u : u),
                (a.originalProgress = r ? -c : c);
            }
            t.visibleSlides = b(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: r, isBeginning: s, isEnd: o } = t;
            const a = s,
              l = o;
            0 === i
              ? ((r = 0), (s = !0), (o = !0))
              : ((s = (r = (e - t.minTranslate()) / i) <= 0), (o = r >= 1)),
              Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              s && !a && t.emit("reachBeginning toEdge"),
              o && !l && t.emit("reachEnd toEdge"),
              ((a && !s) || (l && !o)) && t.emit("fromEdge"),
              t.emit("progress", r);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: i,
                activeIndex: r,
                realIndex: s,
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(
              `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
            ),
              (a = o
                ? e.$wrapperEl.find(
                    `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                  )
                : t.eq(r)).addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass));
            let l = a
              .nextAll("." + n.slideClass)
              .eq(0)
              .addClass(n.slideNextClass);
            n.loop &&
              0 === l.length &&
              (l = t.eq(0)).addClass(n.slideNextClass);
            let u = a
              .prevAll("." + n.slideClass)
              .eq(0)
              .addClass(n.slidePrevClass);
            n.loop &&
              0 === u.length &&
              (u = t.eq(-1)).addClass(n.slidePrevClass),
              n.loop &&
                (l.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass),
                u.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${u.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${u.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: r,
                params: s,
                activeIndex: o,
                realIndex: a,
                snapIndex: l,
              } = t;
            let u,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (c = e)
                    : n >= i[e] && n < i[e + 1] && (c = e + 1)
                  : n >= i[e] && (c = e);
              s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (r.indexOf(n) >= 0) u = r.indexOf(n);
            else {
              const e = Math.min(s.slidesPerGroupSkip, c);
              u = e + Math.floor((c - e) / s.slidesPerGroup);
            }
            if ((u >= r.length && (u = r.length - 1), c === o))
              return void (
                u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"))
              );
            const d = parseInt(
              t.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(t, {
              snapIndex: u,
              realIndex: d,
              previousIndex: o,
              activeIndex: c,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== d && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              i = b(e).closest("." + n.slideClass)[0];
            let r,
              s = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (s = !0), (r = e);
                  break;
                }
            if (!i || !s)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    b(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = r),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: n,
              translate: i,
              $wrapperEl: r,
            } = this;
            if (t.virtualTranslate) return n ? -i : i;
            if (t.cssMode) return i;
            let s = (function (e, t = "x") {
              const n = f();
              let i, r, s;
              const o = (function (e) {
                const t = f();
                let n;
                return (
                  t.getComputedStyle && (n = t.getComputedStyle(e, null)),
                  !n && e.currentStyle && (n = e.currentStyle),
                  n || (n = e.style),
                  n
                );
              })(e);
              return (
                n.WebKitCSSMatrix
                  ? ((r = o.transform || o.webkitTransform).split(",").length >
                      6 &&
                      (r = r
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
                  : (i = (s =
                      o.MozTransform ||
                      o.OTransform ||
                      o.MsTransform ||
                      o.msTransform ||
                      o.transform ||
                      o
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,"))
                      .toString()
                      .split(",")),
                "x" === t &&
                  (r = n.WebKitCSSMatrix
                    ? s.m41
                    : 16 === i.length
                    ? parseFloat(i[12])
                    : parseFloat(i[4])),
                "y" === t &&
                  (r = n.WebKitCSSMatrix
                    ? s.m42
                    : 16 === i.length
                    ? parseFloat(i[13])
                    : parseFloat(i[5])),
                r || 0
              );
            })(r[0], e);
            return n && (s = -s), s || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              {
                rtlTranslate: i,
                params: r,
                $wrapperEl: s,
                wrapperEl: o,
                progress: a,
              } = n;
            let l,
              u = 0,
              c = 0;
            n.isHorizontal() ? (u = i ? -e : e) : (c = e),
              r.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
              r.cssMode
                ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -u : -c)
                : r.virtualTranslate ||
                  s.transform(`translate3d(${u}px, ${c}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? u : c);
            const d = n.maxTranslate() - n.minTranslate();
            (l = 0 === d ? 0 : (e - n.minTranslate()) / d) !== a &&
              n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            n = !0,
            i = !0,
            r
          ) {
            const s = this,
              { params: o, wrapperEl: a } = s;
            if (s.animating && o.preventInteractionOnTransition) return !1;
            const l = s.minTranslate(),
              u = s.maxTranslate();
            let c;
            if (
              ((c = i && e > l ? l : i && e < u ? u : e),
              s.updateProgress(c),
              o.cssMode)
            ) {
              const e = s.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!s.support.smoothScroll)
                  return (
                    E({
                      swiper: s,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (s.setTransition(0),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, r),
                    s.emit("transitionEnd")))
                : (s.setTransition(t),
                  s.setTranslate(c),
                  n &&
                    (s.emit("beforeTransitionStart", t, r),
                    s.emit("transitionStart")),
                  s.animating ||
                    ((s.animating = !0),
                    s.onTranslateToWrapperTransitionEnd ||
                      (s.onTranslateToWrapperTransitionEnd = function (e) {
                        s &&
                          !s.destroyed &&
                          e.target === this &&
                          (s.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          s.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            s.onTranslateToWrapperTransitionEnd
                          ),
                          (s.onTranslateToWrapperTransitionEnd = null),
                          delete s.onTranslateToWrapperTransitionEnd,
                          n && s.emit("transitionEnd"));
                      }),
                    s.$wrapperEl[0].addEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              A({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const { params: n } = this;
            (this.animating = !1),
              n.cssMode ||
                (this.setTransition(0),
                A({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e = 0, t = this.params.speed, n = !0, i, r) {
            if ("number" != typeof e && "string" != typeof e)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const s = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: u,
              previousIndex: c,
              activeIndex: d,
              rtlTranslate: f,
              wrapperEl: h,
              enabled: p,
            } = s;
            if (
              (s.animating && a.preventInteractionOnTransition) ||
              (!p && !i && !r)
            )
              return !1;
            const m = Math.min(s.params.slidesPerGroupSkip, o);
            let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const v = -l[g];
            if (a.normalizeSlideIndex)
              for (let e = 0; e < u.length; e += 1) {
                const t = -Math.floor(100 * v),
                  n = Math.floor(100 * u[e]),
                  i = Math.floor(100 * u[e + 1]);
                void 0 !== u[e + 1]
                  ? t >= n && t < i - (i - n) / 2
                    ? (o = e)
                    : t >= n && t < i && (o = e + 1)
                  : t >= n && (o = e);
              }
            if (s.initialized && o !== d) {
              if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
                return !1;
              if (
                !s.allowSlidePrev &&
                v > s.translate &&
                v > s.maxTranslate() &&
                (d || 0) !== o
              )
                return !1;
            }
            let y;
            if (
              (o !== (c || 0) && n && s.emit("beforeSlideChangeStart"),
              s.updateProgress(v),
              (y = o > d ? "next" : o < d ? "prev" : "reset"),
              (f && -v === s.translate) || (!f && v === s.translate))
            )
              return (
                s.updateActiveIndex(o),
                a.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                "slide" !== a.effect && s.setTranslate(v),
                "reset" !== y &&
                  (s.transitionStart(n, y), s.transitionEnd(n, y)),
                !1
              );
            if (a.cssMode) {
              const e = s.isHorizontal(),
                n = f ? v : -v;
              if (0 === t) {
                const t = s.virtual && s.params.virtual.enabled;
                t &&
                  ((s.wrapperEl.style.scrollSnapType = "none"),
                  (s._immediateVirtual = !0)),
                  (h[e ? "scrollLeft" : "scrollTop"] = n),
                  t &&
                    requestAnimationFrame(() => {
                      (s.wrapperEl.style.scrollSnapType = ""),
                        (s._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!s.support.smoothScroll)
                  return (
                    E({
                      swiper: s,
                      targetPosition: n,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              s.setTransition(t),
              s.setTranslate(v),
              s.updateActiveIndex(o),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, i),
              s.transitionStart(n, y),
              0 === t
                ? s.transitionEnd(n, y)
                : s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(n, y));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let s = e;
            return (
              r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, n) {
            const i = this,
              { animating: r, enabled: s, params: o } = i;
            if (!s) return i;
            let a = o.slidesPerGroup;
            "auto" === o.slidesPerView &&
              1 === o.slidesPerGroup &&
              o.slidesPerGroupAuto &&
              (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
            if (o.loop) {
              if (r && o.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return o.rewind && i.isEnd
              ? i.slideTo(0, e, t, n)
              : i.slideTo(i.activeIndex + l, e, t, n);
          },
          slidePrev: function (e = this.params.speed, t = !0, n) {
            const i = this,
              {
                params: r,
                animating: s,
                snapGrid: o,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: u,
              } = i;
            if (!u) return i;
            if (r.loop) {
              if (s && r.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const d = c(l ? i.translate : -i.translate),
              f = o.map((e) => c(e));
            let h = o[f.indexOf(d) - 1];
            if (void 0 === h && r.cssMode) {
              let e;
              o.forEach((t, n) => {
                d >= t && (e = n);
              }),
                void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
            }
            let p = 0;
            if (
              (void 0 !== h &&
                ((p = a.indexOf(h)) < 0 && (p = i.activeIndex - 1),
                "auto" === r.slidesPerView &&
                  1 === r.slidesPerGroup &&
                  r.slidesPerGroupAuto &&
                  ((p = p - i.slidesPerViewDynamic("previous", !0) + 1),
                  (p = Math.max(p, 0)))),
              r.rewind && i.isBeginning)
            ) {
              const r =
                i.params.virtual && i.params.virtual.enabled && i.virtual
                  ? i.virtual.slides.length - 1
                  : i.slides.length - 1;
              return i.slideTo(r, e, t, n);
            }
            return i.slideTo(p, e, t, n);
          },
          slideReset: function (e = this.params.speed, t = !0, n) {
            return this.slideTo(this.activeIndex, e, t, n);
          },
          slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
            const r = this;
            let s = r.activeIndex;
            const o = Math.min(r.params.slidesPerGroupSkip, s),
              a = o + Math.floor((s - o) / r.params.slidesPerGroup),
              l = r.rtlTranslate ? r.translate : -r.translate;
            if (l >= r.snapGrid[a]) {
              const e = r.snapGrid[a];
              l - e > (r.snapGrid[a + 1] - e) * i &&
                (s += r.params.slidesPerGroup);
            } else {
              const e = r.snapGrid[a - 1];
              l - e <= (r.snapGrid[a] - e) * i &&
                (s -= r.params.slidesPerGroup);
            }
            return (
              (s = Math.max(s, 0)),
              (s = Math.min(s, r.slidesGrid.length - 1)),
              r.slideTo(s, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: n } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let r,
              s = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (r = parseInt(
                b(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? s < e.loopedSlides - i / 2 ||
                    s > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (s = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      w(() => {
                        e.slideTo(s);
                      }))
                    : e.slideTo(s)
                  : s > e.slides.length - i
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    w(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s);
            } else e.slideTo(s);
          },
        },
        loop: {
          loopCreate: function () {
            const e = this,
              t = c(),
              { params: n, $wrapperEl: i } = e,
              r = i.children().length > 0 ? b(i.children()[0].parentNode) : i;
            r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
            let s = r.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
              const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
              if (e !== n.slidesPerGroup) {
                for (let i = 0; i < e; i += 1) {
                  const e = b(t.createElement("div")).addClass(
                    `${n.slideClass} ${n.slideBlankClass}`
                  );
                  r.append(e);
                }
                s = r.children("." + n.slideClass);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = s.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10)
              )),
              (e.loopedSlides += n.loopAdditionalSlides),
              e.loopedSlides > s.length &&
                e.params.loopedSlidesLimit &&
                (e.loopedSlides = s.length);
            const o = [],
              a = [];
            s.each((e, t) => {
              b(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
              const e = t - Math.floor(t / s.length) * s.length;
              a.push(s.eq(e)[0]), o.unshift(s.eq(s.length - e - 1)[0]);
            }
            for (let e = 0; e < a.length; e += 1)
              r.append(b(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (let e = o.length - 1; e >= 0; e -= 1)
              r.prepend(b(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: n,
              loopedSlides: i,
              allowSlidePrev: r,
              allowSlideNext: s,
              snapGrid: o,
              rtlTranslate: a,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const u = -o[t] - e.getTranslate();
            t < i
              ? ((l = n.length - 3 * i + t),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== u &&
                  e.setTranslate((a ? -e.translate : e.translate) - u))
              : t >= n.length - i &&
                ((l = -n.length + t + i),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== u &&
                  e.setTranslate((a ? -e.translate : e.translate) - u)),
              (e.allowSlidePrev = r),
              (e.allowSlideNext = s),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: n } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const t =
              "container" === this.params.touchEventsTarget
                ? this.el
                : this.wrapperEl;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this[
                "container" === this.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = c(),
              { params: n, support: i } = e;
            (e.onTouchStart = function (e) {
              const t = this,
                n = c(),
                i = f(),
                r = t.touchEventsData,
                { params: s, touches: o, enabled: a } = t;
              if (!a) return;
              if (t.animating && s.preventInteractionOnTransition) return;
              !t.animating && s.cssMode && s.loop && t.loopFix();
              let l = e;
              l.originalEvent && (l = l.originalEvent);
              let u = b(l.target);
              if (
                "wrapper" === s.touchEventsTarget &&
                !u.closest(t.wrapperEl).length
              )
                return;
              if (
                ((r.isTouchEvent = "touchstart" === l.type),
                !r.isTouchEvent && "which" in l && 3 === l.which)
              )
                return;
              if (!r.isTouchEvent && "button" in l && l.button > 0) return;
              if (r.isTouched && r.isMoved) return;
              const d = !!s.noSwipingClass && "" !== s.noSwipingClass,
                h = e.composedPath ? e.composedPath() : e.path;
              d && l.target && l.target.shadowRoot && h && (u = b(h[0]));
              const p = s.noSwipingSelector
                  ? s.noSwipingSelector
                  : "." + s.noSwipingClass,
                m = !(!l.target || !l.target.shadowRoot);
              if (
                s.noSwiping &&
                (m
                  ? (function (e, t = this) {
                      return (function t(n) {
                        if (!n || n === c() || n === f()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        const i = n.closest(e);
                        return i || n.getRootNode
                          ? i || t(n.getRootNode().host)
                          : null;
                      })(t);
                    })(p, u[0])
                  : u.closest(p)[0])
              )
                return void (t.allowClick = !0);
              if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
              (o.currentX =
                "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
                (o.currentY =
                  "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
              const g = o.currentX,
                v = o.currentY,
                y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                _ = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
              if (y && (g <= _ || g >= i.innerWidth - _)) {
                if ("prevent" !== y) return;
                e.preventDefault();
              }
              if (
                (Object.assign(r, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (o.startX = g),
                (o.startY = v),
                (r.touchStartTime = x()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                s.threshold > 0 && (r.allowThresholdMove = !1),
                "touchstart" !== l.type)
              ) {
                let e = !0;
                u.is(r.focusableElements) &&
                  ((e = !1), "SELECT" === u[0].nodeName && (r.isTouched = !1)),
                  n.activeElement &&
                    b(n.activeElement).is(r.focusableElements) &&
                    n.activeElement !== u[0] &&
                    n.activeElement.blur();
                const i = e && t.allowTouchMove && s.touchStartPreventDefault;
                (!s.touchStartForcePreventDefault && !i) ||
                  u[0].isContentEditable ||
                  l.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !s.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", l);
            }.bind(e)),
              (e.onTouchMove = function (e) {
                const t = c(),
                  n = this,
                  i = n.touchEventsData,
                  { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
                if (!a) return;
                let l = e;
                if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
                  return void (
                    i.startMoving &&
                    i.isScrolling &&
                    n.emit("touchMoveOpposite", l)
                  );
                if (i.isTouchEvent && "touchmove" !== l.type) return;
                const u =
                    "touchmove" === l.type &&
                    l.targetTouches &&
                    (l.targetTouches[0] || l.changedTouches[0]),
                  d = "touchmove" === l.type ? u.pageX : l.pageX,
                  f = "touchmove" === l.type ? u.pageY : l.pageY;
                if (l.preventedByNestedSwiper)
                  return (s.startX = d), void (s.startY = f);
                if (!n.allowTouchMove)
                  return (
                    b(l.target).is(i.focusableElements) || (n.allowClick = !1),
                    void (
                      i.isTouched &&
                      (Object.assign(s, {
                        startX: d,
                        startY: f,
                        currentX: d,
                        currentY: f,
                      }),
                      (i.touchStartTime = x()))
                    )
                  );
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                  if (n.isVertical()) {
                    if (
                      (f < s.startY && n.translate <= n.maxTranslate()) ||
                      (f > s.startY && n.translate >= n.minTranslate())
                    )
                      return (i.isTouched = !1), void (i.isMoved = !1);
                  } else if (
                    (d < s.startX && n.translate <= n.maxTranslate()) ||
                    (d > s.startX && n.translate >= n.minTranslate())
                  )
                    return;
                if (
                  i.isTouchEvent &&
                  t.activeElement &&
                  l.target === t.activeElement &&
                  b(l.target).is(i.focusableElements)
                )
                  return (i.isMoved = !0), void (n.allowClick = !1);
                if (
                  (i.allowTouchCallbacks && n.emit("touchMove", l),
                  l.targetTouches && l.targetTouches.length > 1)
                )
                  return;
                (s.currentX = d), (s.currentY = f);
                const h = s.currentX - s.startX,
                  p = s.currentY - s.startY;
                if (
                  n.params.threshold &&
                  Math.sqrt(h ** 2 + p ** 2) < n.params.threshold
                )
                  return;
                if (void 0 === i.isScrolling) {
                  let e;
                  (n.isHorizontal() && s.currentY === s.startY) ||
                  (n.isVertical() && s.currentX === s.startX)
                    ? (i.isScrolling = !1)
                    : h * h + p * p >= 25 &&
                      ((e =
                        (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
                      (i.isScrolling = n.isHorizontal()
                        ? e > r.touchAngle
                        : 90 - e > r.touchAngle));
                }
                if (
                  (i.isScrolling && n.emit("touchMoveOpposite", l),
                  void 0 === i.startMoving &&
                    ((s.currentX === s.startX && s.currentY === s.startY) ||
                      (i.startMoving = !0)),
                  i.isScrolling)
                )
                  return void (i.isTouched = !1);
                if (!i.startMoving) return;
                (n.allowClick = !1),
                  !r.cssMode && l.cancelable && l.preventDefault(),
                  r.touchMoveStopPropagation &&
                    !r.nested &&
                    l.stopPropagation(),
                  i.isMoved ||
                    (r.loop && !r.cssMode && n.loopFix(),
                    (i.startTranslate = n.getTranslate()),
                    n.setTransition(0),
                    n.animating &&
                      n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !r.grabCursor ||
                      (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
                      n.setGrabCursor(!0),
                    n.emit("sliderFirstMove", l)),
                  n.emit("sliderMove", l),
                  (i.isMoved = !0);
                let m = n.isHorizontal() ? h : p;
                (s.diff = m),
                  (m *= r.touchRatio),
                  o && (m = -m),
                  (n.swipeDirection = m > 0 ? "prev" : "next"),
                  (i.currentTranslate = m + i.startTranslate);
                let g = !0,
                  v = r.resistanceRatio;
                if (
                  (r.touchReleaseOnEdges && (v = 0),
                  m > 0 && i.currentTranslate > n.minTranslate()
                    ? ((g = !1),
                      r.resistance &&
                        (i.currentTranslate =
                          n.minTranslate() -
                          1 +
                          (-n.minTranslate() + i.startTranslate + m) ** v))
                    : m < 0 &&
                      i.currentTranslate < n.maxTranslate() &&
                      ((g = !1),
                      r.resistance &&
                        (i.currentTranslate =
                          n.maxTranslate() +
                          1 -
                          (n.maxTranslate() - i.startTranslate - m) ** v)),
                  g && (l.preventedByNestedSwiper = !0),
                  !n.allowSlideNext &&
                    "next" === n.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  !n.allowSlidePrev &&
                    "prev" === n.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  n.allowSlidePrev ||
                    n.allowSlideNext ||
                    (i.currentTranslate = i.startTranslate),
                  r.threshold > 0)
                ) {
                  if (!(Math.abs(m) > r.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (
                      (i.allowThresholdMove = !0),
                      (s.startX = s.currentX),
                      (s.startY = s.currentY),
                      (i.currentTranslate = i.startTranslate),
                      void (s.diff = n.isHorizontal()
                        ? s.currentX - s.startX
                        : s.currentY - s.startY)
                    );
                }
                r.followFinger &&
                  !r.cssMode &&
                  (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
                    r.watchSlidesProgress) &&
                    (n.updateActiveIndex(), n.updateSlidesClasses()),
                  n.params.freeMode &&
                    r.freeMode.enabled &&
                    n.freeMode &&
                    n.freeMode.onTouchMove(),
                  n.updateProgress(i.currentTranslate),
                  n.setTranslate(i.currentTranslate));
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                const t = this,
                  n = t.touchEventsData,
                  {
                    params: i,
                    touches: r,
                    rtlTranslate: s,
                    slidesGrid: o,
                    enabled: a,
                  } = t;
                if (!a) return;
                let l = e;
                if (
                  (l.originalEvent && (l = l.originalEvent),
                  n.allowTouchCallbacks && t.emit("touchEnd", l),
                  (n.allowTouchCallbacks = !1),
                  !n.isTouched)
                )
                  return (
                    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                i.grabCursor &&
                  n.isMoved &&
                  n.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                const u = x(),
                  c = u - n.touchStartTime;
                if (t.allowClick) {
                  const e = l.path || (l.composedPath && l.composedPath());
                  t.updateClickedSlide((e && e[0]) || l.target),
                    t.emit("tap click", l),
                    c < 300 &&
                      u - n.lastClickTime < 300 &&
                      t.emit("doubleTap doubleClick", l);
                }
                if (
                  ((n.lastClickTime = x()),
                  w(() => {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !n.isTouched ||
                    !n.isMoved ||
                    !t.swipeDirection ||
                    0 === r.diff ||
                    n.currentTranslate === n.startTranslate)
                )
                  return (
                    (n.isTouched = !1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                let d;
                if (
                  ((n.isTouched = !1),
                  (n.isMoved = !1),
                  (n.startMoving = !1),
                  (d = i.followFinger
                    ? s
                      ? t.translate
                      : -t.translate
                    : -n.currentTranslate),
                  i.cssMode)
                )
                  return;
                if (t.params.freeMode && i.freeMode.enabled)
                  return void t.freeMode.onTouchEnd({ currentPos: d });
                let f = 0,
                  h = t.slidesSizesGrid[0];
                for (
                  let e = 0;
                  e < o.length;
                  e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
                ) {
                  const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                  void 0 !== o[e + t]
                    ? d >= o[e] &&
                      d < o[e + t] &&
                      ((f = e), (h = o[e + t] - o[e]))
                    : d >= o[e] &&
                      ((f = e), (h = o[o.length - 1] - o[o.length - 2]));
                }
                let p = null,
                  m = null;
                i.rewind &&
                  (t.isBeginning
                    ? (m =
                        t.params.virtual &&
                        t.params.virtual.enabled &&
                        t.virtual
                          ? t.virtual.slides.length - 1
                          : t.slides.length - 1)
                    : t.isEnd && (p = 0));
                const g = (d - o[f]) / h,
                  v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                  if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    (g >= i.longSwipesRatio
                      ? t.slideTo(i.rewind && t.isEnd ? p : f + v)
                      : t.slideTo(f)),
                    "prev" === t.swipeDirection &&
                      (g > 1 - i.longSwipesRatio
                        ? t.slideTo(f + v)
                        : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
                        ? t.slideTo(m)
                        : t.slideTo(f));
                } else {
                  if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                  !t.navigation ||
                  (l.target !== t.navigation.nextEl &&
                    l.target !== t.navigation.prevEl)
                    ? ("next" === t.swipeDirection &&
                        t.slideTo(null !== p ? p : f + v),
                      "prev" === t.swipeDirection &&
                        t.slideTo(null !== m ? m : f))
                    : l.target === t.navigation.nextEl
                    ? t.slideTo(f + v)
                    : t.slideTo(f);
                }
              }.bind(e)),
              n.cssMode &&
                (e.onScroll = function () {
                  const e = this,
                    { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
                  if (!i) return;
                  let r;
                  (e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                  const s = e.maxTranslate() - e.minTranslate();
                  (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s) !==
                    e.progress &&
                    e.updateProgress(n ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
                }.bind(e)),
              (e.onClick = function (e) {
                const t = this;
                t.enabled &&
                  (t.allowClick ||
                    (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                      t.animating &&
                      (e.stopPropagation(), e.stopImmediatePropagation())));
              }.bind(e)),
              i.touch && !R && (t.addEventListener("touchstart", z), (R = !0)),
              I(e, "on");
          },
          detachEvents: function () {
            I(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: n,
                loopedSlides: i = 0,
                params: r,
                $el: s,
              } = e,
              o = r.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              u = N(e, r),
              c = N(e, l),
              d = r.enabled;
            u && !c
              ? (s.removeClass(
                  `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !u &&
                c &&
                (s.addClass(r.containerModifierClass + "grid"),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === r.grid.fill)) &&
                  s.addClass(r.containerModifierClass + "grid-column"),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const n = r[t] && r[t].enabled,
                  i = l[t] && l[t].enabled;
                n && !i && e[t].disable(), !n && i && e[t].enable();
              });
            const f = l.direction && l.direction !== r.direction,
              h = r.loop && (l.slidesPerView !== r.slidesPerView || f);
            f && n && e.changeDirection(), S(e.params, l);
            const p = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !p ? e.disable() : !d && p && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              h &&
                n &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", n) {
            if (!e || ("container" === t && !n)) return;
            let i = !1;
            const r = f(),
              s = "window" === t ? r.innerHeight : n.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: s * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: s, value: a } = o[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
                : a <= n.clientWidth && (i = s);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
                classNames: e,
                params: t,
                rtl: n,
                $el: i,
                device: r,
                support: s,
              } = this,
              o = (function (e, t) {
                const n = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && n.push(t + i);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  t.direction,
                  { "pointer-events": !s.touch },
                  { "free-mode": this.params.freeMode && t.freeMode.enabled },
                  { autoheight: t.autoHeight },
                  { rtl: n },
                  { grid: t.grid && t.grid.rows > 1 },
                  {
                    "grid-column":
                      t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": t.cssMode },
                  { centered: t.cssMode && t.centeredSlides },
                  { "watch-progress": t.watchSlidesProgress },
                ],
                t.containerModifierClass
              );
            e.push(...o),
              i.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, n, i, r, s) {
            const o = f();
            let a;
            function l() {
              s && s();
            }
            b(e).parent("picture")[0] || (e.complete && r)
              ? l()
              : t
              ? (((a = new o.Image()).onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      j = {};
    class $ {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = S({}, n)),
          t && !n.el && (n.el = t),
          n.el && b(n.el).length > 1)
        ) {
          const e = [];
          return (
            b(n.el).each((t) => {
              const i = S({}, n, { el: t });
              e.push(new $(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = P()),
          (i.device = (function (e = {}) {
            return (
              k ||
                (k = (function ({ userAgent: e } = {}) {
                  const t = P(),
                    n = f(),
                    i = n.navigator.platform,
                    r = e || n.navigator.userAgent,
                    s = { ios: !1, android: !1 },
                    o = n.screen.width,
                    a = n.screen.height,
                    l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let u = r.match(/(iPad).*OS\s([\d_]+)/);
                  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                    d = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === i;
                  let p = "MacIntel" === i;
                  return (
                    !u &&
                      p &&
                      t.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${o}x${a}`) >= 0 &&
                      ((u = r.match(/(Version)\/([\d.]+)/)) ||
                        (u = [0, 1, "13_0_0"]),
                      (p = !1)),
                    l && !h && ((s.os = "android"), (s.android = !0)),
                    (u || d || c) && ((s.os = "ios"), (s.ios = !0)),
                    s
                  );
                })(e)),
              k
            );
          })({ userAgent: n.userAgent })),
          (i.browser =
            (O ||
              (O = (function () {
                const e = f();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            O)),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
        const r = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: F(n, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const s = S({}, D, r);
        return (
          (i.params = S({}, s, j, n)),
          (i.originalParams = S({}, i.params)),
          (i.passedParams = S({}, n)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = b),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: b(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: x(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        const n = this.minTranslate(),
          i = (this.maxTranslate() - n) * e + n;
        this.translateTo(i, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: s,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((l += 1), (t += i[n].swiperSlideSize) > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((l += 1), (t += i[n].swiperSlideSize) > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1)
            (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
        else for (let e = a - 1; e >= 0; e -= 1) r[a] - r[e] < o && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : (r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = b(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = b(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(i()) : b(n).children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = c().createElement("div");
          (r = b(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children("." + t.params.slideClass).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return t.initialized
          ? t
          : (!1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t);
      }
      destroy(e = !0, t = !0) {
        const n = this,
          { params: i, $el: r, $wrapperEl: s, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              s.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = n;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })()),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        S(j, e);
      }
      static get extendedDefaults() {
        return j;
      }
      static get defaults() {
        return D;
      }
      static installModule(e) {
        $.prototype.__modules__ || ($.prototype.__modules__ = []);
        const t = $.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => $.installModule(e)), $)
          : ($.installModule(e), $);
      }
    }
    Object.keys(B).forEach((e) => {
      Object.keys(B[e]).forEach((t) => {
        $.prototype[t] = B[e][t];
      });
    }),
      $.use([
        function ({ swiper: e, on: t, emit: n }) {
          const i = f();
          let r = null,
            s = null;
          const o = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                (r = new ResizeObserver((t) => {
                  s = i.requestAnimationFrame(() => {
                    const { width: n, height: i } = e;
                    let r = n,
                      s = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: n, target: i }) => {
                        (i && i !== e.el) ||
                          ((r = n ? n.width : (t[0] || t).inlineSize),
                          (s = n ? n.height : (t[0] || t).blockSize));
                      }
                    ),
                      (r === n && s === i) || o();
                  });
                })).observe(e.el)
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              s && i.cancelAnimationFrame(s),
                r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          const r = [],
            s = f(),
            o = (e, t = {}) => {
              const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  s.requestAnimationFrame
                    ? s.requestAnimationFrame(t)
                    : s.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    var W = $;
    function q(e, t, n, i) {
      const r = c();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((s) => {
            if (!n[s] && !0 === n.auto) {
              let o = e.$el.children("." + i[s])[0];
              o ||
                (((o = r.createElement("div")).className = i[s]),
                e.$el.append(o)),
                (n[s] = o),
                (t[s] = o);
            }
          }),
        n
      );
    }
    function H(e = "") {
      return (
        "." +
        e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    function G(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function V(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Y(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    var X,
      U,
      K,
      Q,
      Z,
      J,
      ee,
      te,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      ue = { duration: 0.5, overwrite: !1, delay: 0 },
      ce = 1e8,
      de = 2 * Math.PI,
      fe = de / 4,
      he = 0,
      pe = Math.sqrt,
      me = Math.cos,
      ge = Math.sin,
      ve = function (e) {
        return "string" == typeof e;
      },
      ye = function (e) {
        return "function" == typeof e;
      },
      _e = function (e) {
        return "number" == typeof e;
      },
      be = function (e) {
        return void 0 === e;
      },
      we = function (e) {
        return "object" == typeof e;
      },
      xe = function (e) {
        return !1 !== e;
      },
      Te = function () {
        return "undefined" != typeof window;
      },
      Se = function (e) {
        return ye(e) || ve(e);
      },
      Ce =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      Ee = Array.isArray,
      Me = /(?:-?\.?\d|\.)+/gi,
      ke = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Oe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Pe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      Ae = /[+-]=-?[.\d]+/,
      Le = /[^,'"\[\]\s]+/gi,
      Re = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ze = {},
      Ie = {},
      Ne = function (e) {
        return (Ie = ft(e, ze)) && ui;
      },
      De = function (e, t) {
        return console.warn(
          "Invalid property",
          e,
          "set to",
          t,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      Fe = function (e, t) {
        return !t && console.warn(e);
      },
      Be = function (e, t) {
        return (e && (ze[e] = t) && Ie && (Ie[e] = t)) || ze;
      },
      je = function () {
        return 0;
      },
      $e = { suppressEvents: !0, isStart: !0, kill: !1 },
      We = { suppressEvents: !0, kill: !1 },
      qe = { suppressEvents: !0 },
      He = {},
      Ge = [],
      Ve = {},
      Ye = {},
      Xe = {},
      Ue = 30,
      Ke = [],
      Qe = "",
      Ze = function (e) {
        var t,
          n,
          i = e[0];
        if ((we(i) || ye(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
          for (n = Ke.length; n-- && !Ke[n].targetTest(i); );
          t = Ke[n];
        }
        for (n = e.length; n--; )
          (e[n] && (e[n]._gsap || (e[n]._gsap = new Sn(e[n], t)))) ||
            e.splice(n, 1);
        return e;
      },
      Je = function (e) {
        return e._gsap || Ze($t(e))[0]._gsap;
      },
      et = function (e, t, n) {
        return (n = e[t]) && ye(n)
          ? e[t]()
          : (be(n) && e.getAttribute && e.getAttribute(t)) || n;
      },
      tt = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
      },
      nt = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      it = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      },
      rt = function (e, t) {
        var n = t.charAt(0),
          i = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          "+" === n ? e + i : "-" === n ? e - i : "*" === n ? e * i : e / i
        );
      },
      st = function (e, t) {
        for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
        return i < n;
      },
      ot = function () {
        var e,
          t,
          n = Ge.length,
          i = Ge.slice(0);
        for (Ve = {}, Ge.length = 0, e = 0; e < n; e++)
          (t = i[e]) &&
            t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      at = function (e) {
        return !!(e._initted || e._startAt || e.add);
      },
      lt = function (e, t, n, i) {
        Ge.length && !U && ot(),
          e.render(t, n, i || !!(U && t < 0 && at(e))),
          Ge.length && !U && ot();
      },
      ut = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(Le).length < 2
          ? t
          : ve(e)
          ? e.trim()
          : e;
      },
      ct = function (e) {
        return e;
      },
      dt = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      ft = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      ht = function e(t, n) {
        for (var i in n)
          "__proto__" !== i &&
            "constructor" !== i &&
            "prototype" !== i &&
            (t[i] = we(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
        return t;
      },
      pt = function (e, t) {
        var n,
          i = {};
        for (n in e) n in t || (i[n] = e[n]);
        return i;
      },
      mt = function (e) {
        var t,
          n = e.parent || Q,
          i = e.keyframes
            ? ((t = Ee(e.keyframes)),
              function (e, n) {
                for (var i in n)
                  i in e ||
                    ("duration" === i && t) ||
                    "ease" === i ||
                    (e[i] = n[i]);
              })
            : dt;
        if (xe(e.inherit))
          for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp);
        return e;
      },
      gt = function (e, t, n, i, r) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var s,
          o = e[i];
        if (r) for (s = t[r]; o && o[r] > s; ) o = o._prev;
        return (
          o
            ? ((t._next = o._next), (o._next = t))
            : ((t._next = e[n]), (e[n] = t)),
          t._next ? (t._next._prev = t) : (e[i] = t),
          (t._prev = o),
          (t.parent = t._dp = e),
          t
        );
      },
      vt = function (e, t, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var r = t._prev,
          s = t._next;
        r ? (r._next = s) : e[n] === t && (e[n] = s),
          s ? (s._prev = r) : e[i] === t && (e[i] = r),
          (t._next = t._prev = t.parent = null);
      },
      yt = function (e, t) {
        e.parent &&
          (!t || e.parent.autoRemoveChildren) &&
          e.parent.remove &&
          e.parent.remove(e),
          (e._act = 0);
      },
      _t = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
        return e;
      },
      bt = function (e, t, n, i) {
        return (
          e._startAt &&
          (U
            ? e._startAt.revert(We)
            : (e.vars.immediateRender && !e.vars.autoRevert) ||
              e._startAt.render(t, !0, i))
        );
      },
      wt = function (e) {
        return e._repeat ? xt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      xt = function (e, t) {
        var n = Math.floor((e = it(e / t)));
        return e && n === e ? n - 1 : n;
      },
      Tt = function (e, t) {
        return (
          (e - t._start) * t._ts +
          (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
      },
      St = function (e) {
        return (e._end = it(
          e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
        ));
      },
      Ct = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = it(
              n._time -
                (e._ts > 0
                  ? t / e._ts
                  : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            St(e),
            n._dirty || _t(n, e)),
          e
        );
      },
      Et = function (e, t) {
        var n;
        if (
          ((t._time ||
            (!t._dur && t._initted) ||
            (t._start < e._time && (t._dur || !t.add))) &&
            ((n = Tt(e.rawTime(), t)),
            (!t._dur || Dt(0, t.totalDuration(), n) - t._tTime > 1e-8) &&
              t.render(n, !0)),
          _t(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          e._zTime = -1e-8;
        }
      },
      Mt = function (e, t, n, i) {
        return (
          t.parent && yt(t),
          (t._start = it(
            (_e(n) ? n : n || e !== Q ? zt(e, n, t) : e._time) + t._delay
          )),
          (t._end = it(
            t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
          )),
          gt(e, t, "_first", "_last", e._sort ? "_start" : 0),
          Pt(t) || (e._recent = t),
          i || Et(e, t),
          e._ts < 0 && Ct(e, e._tTime),
          e
        );
      },
      kt = function (e, t) {
        return (
          (ze.ScrollTrigger || De("scrollTrigger", t)) &&
          ze.ScrollTrigger.create(t, e)
        );
      },
      Ot = function (e, t, n, i, r) {
        return (
          An(e, t, r),
          e._initted
            ? !n &&
              e._pt &&
              !U &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              ne !== dn.frame
              ? (Ge.push(e), (e._lazy = [r, i]), 1)
              : void 0
            : 1
        );
      },
      Pt = function (e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t;
      },
      At = function (e, t, n, i) {
        var r = e._repeat,
          s = it(t) || 0,
          o = e._tTime / e._tDur;
        return (
          o && !i && (e._time *= s / e._dur),
          (e._dur = s),
          (e._tDur = r ? (r < 0 ? 1e10 : it(s * (r + 1) + e._rDelay * r)) : s),
          o > 0 && !i && Ct(e, (e._tTime = e._tDur * o)),
          e.parent && St(e),
          n || _t(e.parent, e),
          e
        );
      },
      Lt = function (e) {
        return e instanceof En ? _t(e) : At(e, e._dur);
      },
      Rt = { _start: 0, endTime: je, totalDuration: je },
      zt = function e(t, n, i) {
        var r,
          s,
          o,
          a = t.labels,
          l = t._recent || Rt,
          u = t.duration() >= ce ? l.endTime(!1) : t._dur;
        return ve(n) && (isNaN(n) || n in a)
          ? ((s = n.charAt(0)),
            (o = "%" === n.substr(-1)),
            (r = n.indexOf("=")),
            "<" === s || ">" === s
              ? (r >= 0 && (n = n.replace(/=/, "")),
                ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (o ? (r < 0 ? l : i).totalDuration() / 100 : 1))
              : r < 0
              ? (n in a || (a[n] = u), a[n])
              : ((s = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                o && i && (s = (s / 100) * (Ee(i) ? i[0] : i).totalDuration()),
                r > 1 ? e(t, n.substr(0, r - 1), i) + s : u + s))
          : null == n
          ? u
          : +n;
      },
      It = function (e, t, n) {
        var i,
          r,
          s = _e(t[1]),
          o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
          a = t[o];
        if ((s && (a.duration = t[1]), (a.parent = n), e)) {
          for (i = a, r = n; r && !("immediateRender" in i); )
            (i = r.vars.defaults || {}), (r = xe(r.vars.inherit) && r.parent);
          (a.immediateRender = xe(i.immediateRender)),
            e < 2 ? (a.runBackwards = 1) : (a.startAt = t[o - 1]);
        }
        return new Nn(t[0], a, t[o + 1]);
      },
      Nt = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      Dt = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      },
      Ft = function (e, t) {
        return ve(e) && (t = Re.exec(e)) ? t[1] : "";
      },
      Bt = [].slice,
      jt = function (e, t) {
        return (
          e &&
          we(e) &&
          "length" in e &&
          ((!t && !e.length) || (e.length - 1 in e && we(e[0]))) &&
          !e.nodeType &&
          e !== Z
        );
      },
      $t = function (e, t, n) {
        return K && !t && K.selector
          ? K.selector(e)
          : !ve(e) || n || (!J && fn())
          ? Ee(e)
            ? (function (e, t, n) {
                return (
                  void 0 === n && (n = []),
                  e.forEach(function (e) {
                    var i;
                    return (ve(e) && !t) || jt(e, 1)
                      ? (i = n).push.apply(i, $t(e))
                      : n.push(e);
                  }) || n
                );
              })(e, n)
            : jt(e)
            ? Bt.call(e, 0)
            : e
            ? [e]
            : []
          : Bt.call((t || ee).querySelectorAll(e), 0);
      },
      Wt = function (e) {
        return (
          (e = $t(e)[0] || Fe("Invalid scope") || {}),
          function (t) {
            var n = e.current || e.nativeElement || e;
            return $t(
              t,
              n.querySelectorAll
                ? n
                : n === e
                ? Fe("Invalid scope") || ee.createElement("div")
                : e
            );
          }
        );
      },
      qt = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Ht = function (e) {
        if (ye(e)) return e;
        var t = we(e) ? e : { each: e },
          n = _n(t.ease),
          i = t.from || 0,
          r = parseFloat(t.base) || 0,
          s = {},
          o = i > 0 && i < 1,
          a = isNaN(i) || o,
          l = t.axis,
          u = i,
          c = i;
        return (
          ve(i)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
            : !o && a && ((u = i[0]), (c = i[1])),
          function (e, o, d) {
            var f,
              h,
              p,
              m,
              g,
              v,
              y,
              _,
              b,
              w = (d || t).length,
              x = s[w];
            if (!x) {
              if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, ce])[1])) {
                for (
                  y = -ce;
                  y < (y = d[b++].getBoundingClientRect().left) && b < w;

                );
                b < w && b--;
              }
              for (
                x = s[w] = [],
                  f = a ? Math.min(b, w) * u - 0.5 : i % b,
                  h = b === ce ? 0 : a ? (w * c) / b - 0.5 : (i / b) | 0,
                  y = 0,
                  _ = ce,
                  v = 0;
                v < w;
                v++
              )
                (p = (v % b) - f),
                  (m = h - ((v / b) | 0)),
                  (x[v] = g =
                    l ? Math.abs("y" === l ? m : p) : pe(p * p + m * m)),
                  g > y && (y = g),
                  g < _ && (_ = g);
              "random" === i && qt(x),
                (x.max = y - _),
                (x.min = _),
                (x.v = w =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (b > w
                        ? w - 1
                        : l
                        ? "y" === l
                          ? w / b
                          : b
                        : Math.max(b, w / b)) ||
                    0) * ("edges" === i ? -1 : 1)),
                (x.b = w < 0 ? r - w : r),
                (x.u = Ft(t.amount || t.each) || 0),
                (n = n && w < 0 ? vn(n) : n);
            }
            return (
              (w = (x[e] - x.min) / x.max || 0),
              it(x.b + (n ? n(w) : w) * x.v) + x.u
            );
          }
        );
      },
      Gt = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (n) {
          var i = it(Math.round(parseFloat(n) / e) * e * t);
          return (i - (i % 1)) / t + (_e(n) ? 0 : Ft(n));
        };
      },
      Vt = function (e, t) {
        var n,
          i,
          r = Ee(e);
        return (
          !r &&
            we(e) &&
            ((n = r = e.radius || ce),
            e.values
              ? ((e = $t(e.values)), (i = !_e(e[0])) && (n *= n))
              : (e = Gt(e.increment))),
          Nt(
            t,
            r
              ? ye(e)
                ? function (t) {
                    return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                  }
                : function (t) {
                    for (
                      var r,
                        s,
                        o = parseFloat(i ? t.x : t),
                        a = parseFloat(i ? t.y : 0),
                        l = ce,
                        u = 0,
                        c = e.length;
                      c--;

                    )
                      (r = i
                        ? (r = e[c].x - o) * r + (s = e[c].y - a) * s
                        : Math.abs(e[c] - o)) < l && ((l = r), (u = c));
                    return (
                      (u = !n || l <= n ? e[u] : t),
                      i || u === t || _e(t) ? u : u + Ft(t)
                    );
                  }
              : Gt(e)
          )
        );
      },
      Yt = function (e, t, n, i) {
        return Nt(Ee(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
          return Ee(e)
            ? e[~~(Math.random() * e.length)]
            : (n = n || 1e-5) &&
                (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                  ) *
                    n *
                    i
                ) / i;
        });
      },
      Xt = function (e, t, n) {
        return Nt(n, function (n) {
          return e[~~t(n)];
        });
      },
      Ut = function (e) {
        for (var t, n, i, r, s = 0, o = ""; ~(t = e.indexOf("random(", s)); )
          (i = e.indexOf(")", t)),
            (r = "[" === e.charAt(t + 7)),
            (n = e.substr(t + 7, i - t - 7).match(r ? Le : Me)),
            (o +=
              e.substr(s, t - s) +
              Yt(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
            (s = i + 1);
        return o + e.substr(s, e.length - s);
      },
      Kt = function (e, t, n, i, r) {
        var s = t - e,
          o = i - n;
        return Nt(r, function (t) {
          return n + (((t - e) / s) * o || 0);
        });
      },
      Qt = function (e, t, n) {
        var i,
          r,
          s,
          o = e.labels,
          a = ce;
        for (i in o)
          (r = o[i] - t) < 0 == !!n &&
            r &&
            a > (r = Math.abs(r)) &&
            ((s = i), (a = r));
        return s;
      },
      Zt = function (e, t, n) {
        var i,
          r,
          s,
          o = e.vars,
          a = o[t],
          l = K,
          u = e._ctx;
        if (a)
          return (
            (i = o[t + "Params"]),
            (r = o.callbackScope || e),
            n && Ge.length && ot(),
            u && (K = u),
            (s = i ? a.apply(r, i) : a.call(r)),
            (K = l),
            s
          );
      },
      Jt = function (e) {
        return (
          yt(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!U),
          e.progress() < 1 && Zt(e, "onInterrupt"),
          e
        );
      },
      en = [],
      tn = function (e) {
        if (e)
          if (((e = (!e.name && e.default) || e), Te() || e.headless)) {
            var t = e.name,
              n = ye(e),
              i =
                t && !n && e.init
                  ? function () {
                      this._props = [];
                    }
                  : e,
              r = {
                init: je,
                render: Gn,
                add: On,
                kill: Yn,
                modifier: Vn,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: $n,
                aliases: {},
                register: 0,
              };
            if ((fn(), e !== i)) {
              if (Ye[t]) return;
              dt(i, dt(pt(e, r), s)),
                ft(i.prototype, ft(r, pt(e, s))),
                (Ye[(i.prop = t)] = i),
                e.targetTest && (Ke.push(i), (He[t] = 1)),
                (t =
                  ("css" === t
                    ? "CSS"
                    : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
            }
            Be(t, i), e.register && e.register(ui, i, Kn);
          } else en.push(e);
      },
      nn = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      rn = function (e, t, n) {
        return (
          (255 *
            (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) +
            0.5) |
          0
        );
      },
      sn = function (e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          f,
          h = e ? (_e(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : nn.black;
        if (!h) {
          if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), nn[e]))
            h = nn[e];
          else if ("#" === e.charAt(0)) {
            if (
              (e.length < 6 &&
                ((i = e.charAt(1)),
                (r = e.charAt(2)),
                (s = e.charAt(3)),
                (e =
                  "#" +
                  i +
                  i +
                  r +
                  r +
                  s +
                  s +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
              9 === e.length)
            )
              return [
                (h = parseInt(e.substr(1, 6), 16)) >> 16,
                (h >> 8) & 255,
                255 & h,
                parseInt(e.substr(7), 16) / 255,
              ];
            h = [
              (e = parseInt(e.substr(1), 16)) >> 16,
              (e >> 8) & 255,
              255 & e,
            ];
          } else if ("hsl" === e.substr(0, 3))
            if (((h = f = e.match(Me)), t)) {
              if (~e.indexOf("="))
                return (h = e.match(ke)), n && h.length < 4 && (h[3] = 1), h;
            } else
              (o = (+h[0] % 360) / 360),
                (a = +h[1] / 100),
                (i =
                  2 * (l = +h[2] / 100) -
                  (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                h.length > 3 && (h[3] *= 1),
                (h[0] = rn(o + 1 / 3, i, r)),
                (h[1] = rn(o, i, r)),
                (h[2] = rn(o - 1 / 3, i, r));
          else h = e.match(Me) || nn.transparent;
          h = h.map(Number);
        }
        return (
          t &&
            !f &&
            ((i = h[0] / 255),
            (r = h[1] / 255),
            (s = h[2] / 255),
            (l = ((u = Math.max(i, r, s)) + (c = Math.min(i, r, s))) / 2),
            u === c
              ? (o = a = 0)
              : ((d = u - c),
                (a = l > 0.5 ? d / (2 - u - c) : d / (u + c)),
                (o =
                  u === i
                    ? (r - s) / d + (r < s ? 6 : 0)
                    : u === r
                    ? (s - i) / d + 2
                    : (i - r) / d + 4),
                (o *= 60)),
            (h[0] = ~~(o + 0.5)),
            (h[1] = ~~(100 * a + 0.5)),
            (h[2] = ~~(100 * l + 0.5))),
          n && h.length < 4 && (h[3] = 1),
          h
        );
      },
      on = function (e) {
        var t = [],
          n = [],
          i = -1;
        return (
          e.split(ln).forEach(function (e) {
            var r = e.match(Oe) || [];
            t.push.apply(t, r), n.push((i += r.length + 1));
          }),
          (t.c = n),
          t
        );
      },
      an = function (e, t, n) {
        var i,
          r,
          s,
          o,
          a = "",
          l = (e + a).match(ln),
          u = t ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return e;
        if (
          ((l = l.map(function (e) {
            return (
              (e = sn(e, t, 1)) &&
              u +
                (t
                  ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                  : e.join(",")) +
                ")"
            );
          })),
          n && ((s = on(e)), (i = n.c).join(a) !== s.c.join(a)))
        )
          for (o = (r = e.replace(ln, "1").split(Oe)).length - 1; c < o; c++)
            a +=
              r[c] +
              (~i.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (s.length ? s : l.length ? l : n).shift());
        if (!r)
          for (o = (r = e.split(ln)).length - 1; c < o; c++) a += r[c] + l[c];
        return a + r[o];
      },
      ln = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in nn) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      un = /hsl[a]?\(/,
      cn = function (e) {
        var t,
          n = e.join(" ");
        if (((ln.lastIndex = 0), ln.test(n)))
          return (
            (t = un.test(n)),
            (e[1] = an(e[1], t)),
            (e[0] = an(e[0], t, on(e[1]))),
            !0
          );
      },
      dn = (function () {
        var e,
          t,
          n,
          i,
          r,
          s,
          o = Date.now,
          a = 500,
          l = 33,
          u = o(),
          c = u,
          d = 1e3 / 240,
          f = d,
          h = [],
          p = function n(p) {
            var m,
              g,
              v,
              y,
              _ = o() - c,
              b = !0 === p;
            if (
              ((_ > a || _ < 0) && (u += _ - l),
              ((m = (v = (c += _) - u) - f) > 0 || b) &&
                ((y = ++i.frame),
                (r = v - 1e3 * i.time),
                (i.time = v /= 1e3),
                (f += m + (m >= d ? 4 : d - m)),
                (g = 1)),
              b || (e = t(n)),
              g)
            )
              for (s = 0; s < h.length; s++) h[s](v, r, y, p);
          };
        return (i = {
          time: 0,
          frame: 0,
          tick: function () {
            p(!0);
          },
          deltaRatio: function (e) {
            return r / (1e3 / (e || 60));
          },
          wake: function () {
            te &&
              (!J &&
                Te() &&
                ((Z = J = window),
                (ee = Z.document || {}),
                (ze.gsap = ui),
                (Z.gsapVersions || (Z.gsapVersions = [])).push(ui.version),
                Ne(Ie || Z.GreenSockGlobals || (!Z.gsap && Z) || {}),
                en.forEach(tn)),
              (n =
                "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame),
              e && i.sleep(),
              (t =
                n ||
                function (e) {
                  return setTimeout(e, (f - 1e3 * i.time + 1) | 0);
                }),
              (re = 1),
              p(2));
          },
          sleep: function () {
            (n ? cancelAnimationFrame : clearTimeout)(e), (re = 0), (t = je);
          },
          lagSmoothing: function (e, t) {
            (a = e || 1 / 0), (l = Math.min(t || 33, a));
          },
          fps: function (e) {
            (d = 1e3 / (e || 240)), (f = 1e3 * i.time + d);
          },
          add: function (e, t, n) {
            var r = t
              ? function (t, n, s, o) {
                  e(t, n, s, o), i.remove(r);
                }
              : e;
            return i.remove(e), h[n ? "unshift" : "push"](r), fn(), r;
          },
          remove: function (e, t) {
            ~(t = h.indexOf(e)) && h.splice(t, 1) && s >= t && s--;
          },
          _listeners: h,
        });
      })(),
      fn = function () {
        return !re && dn.wake();
      },
      hn = {},
      pn = /^[\d.\-M][\d.\-,\s]/,
      mn = /["']/g,
      gn = function (e) {
        for (
          var t,
            n,
            i,
            r = {},
            s = e.substr(1, e.length - 3).split(":"),
            o = s[0],
            a = 1,
            l = s.length;
          a < l;
          a++
        )
          (n = s[a]),
            (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
            (i = n.substr(0, t)),
            (r[o] = isNaN(i) ? i.replace(mn, "").trim() : +i),
            (o = n.substr(t + 1).trim());
        return r;
      },
      vn = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      yn = function e(t, n) {
        for (var i, r = t._first; r; )
          r instanceof En
            ? e(r, n)
            : !r.vars.yoyoEase ||
              (r._yoyo && r._repeat) ||
              r._yoyo === n ||
              (r.timeline
                ? e(r.timeline, n)
                : ((i = r._ease),
                  (r._ease = r._yEase),
                  (r._yEase = i),
                  (r._yoyo = n))),
            (r = r._next);
      },
      _n = function (e, t) {
        return (
          (e &&
            (ye(e)
              ? e
              : hn[e] ||
                (function (e) {
                  var t,
                    n,
                    i,
                    r,
                    s = (e + "").split("("),
                    o = hn[s[0]];
                  return o && s.length > 1 && o.config
                    ? o.config.apply(
                        null,
                        ~e.indexOf("{")
                          ? [gn(s[1])]
                          : ((t = e),
                            (n = t.indexOf("(") + 1),
                            (i = t.indexOf(")")),
                            (r = t.indexOf("(", n)),
                            t.substring(
                              n,
                              ~r && r < i ? t.indexOf(")", i + 1) : i
                            ))
                              .split(",")
                              .map(ut)
                      )
                    : hn._CE && pn.test(e)
                    ? hn._CE("", e)
                    : o;
                })(e))) ||
          t
        );
      },
      bn = function (e, t, n, i) {
        void 0 === n &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === i &&
            (i = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
        var r,
          s = { easeIn: t, easeOut: n, easeInOut: i };
        return (
          tt(e, function (e) {
            for (var t in ((hn[e] = ze[e] = s),
            (hn[(r = e.toLowerCase())] = n),
            s))
              hn[
                r +
                  ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
              ] = hn[e + "." + t] = s[t];
          }),
          s
        );
      },
      wn = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      },
      xn = function e(t, n, i) {
        var r = n >= 1 ? n : 1,
          s = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          o = (s / de) * (Math.asin(1 / r) || 0),
          a = function (e) {
            return 1 === e ? 1 : r * Math.pow(2, -10 * e) * ge((e - o) * s) + 1;
          },
          l =
            "out" === t
              ? a
              : "in" === t
              ? function (e) {
                  return 1 - a(1 - e);
                }
              : wn(a);
        return (
          (s = de / s),
          (l.config = function (n, i) {
            return e(t, n, i);
          }),
          l
        );
      },
      Tn = function e(t, n) {
        void 0 === n && (n = 1.70158);
        var i = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          r =
            "out" === t
              ? i
              : "in" === t
              ? function (e) {
                  return 1 - i(1 - e);
                }
              : wn(i);
        return (
          (r.config = function (n) {
            return e(t, n);
          }),
          r
        );
      };
    tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var n = t < 5 ? t + 1 : t;
      bn(
        e + ",Power" + (n - 1),
        t
          ? function (e) {
              return Math.pow(e, n);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, n);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, n) / 2
            : 1 - Math.pow(2 * (1 - e), n) / 2;
        }
      );
    }),
      (hn.Linear.easeNone = hn.none = hn.Linear.easeIn),
      bn("Elastic", xn("in"), xn("out"), xn()),
      (se = 7.5625),
      (oe = 1 / 2.75),
      bn(
        "Bounce",
        function (e) {
          return 1 - ae(1 - e);
        },
        (ae = function (e) {
          return e < oe
            ? se * e * e
            : e < 0.7272727272727273
            ? se * Math.pow(e - 1.5 / 2.75, 2) + 0.75
            : e < 0.9090909090909092
            ? se * (e -= 2.25 / 2.75) * e + 0.9375
            : se * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
        })
      ),
      bn("Expo", function (e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
      }),
      bn("Circ", function (e) {
        return -(pe(1 - e * e) - 1);
      }),
      bn("Sine", function (e) {
        return 1 === e ? 1 : 1 - me(e * fe);
      }),
      bn("Back", Tn("in"), Tn("out"), Tn()),
      (hn.SteppedEase =
        hn.steps =
        ze.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var n = 1 / e,
                i = e + (t ? 0 : 1),
                r = t ? 1 : 0;
              return function (e) {
                return (((i * Dt(0, 1 - 1e-8, e)) | 0) + r) * n;
              };
            },
          }),
      (ue.ease = hn["quad.out"]),
      tt(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (Qe += e + "," + e + "Params,");
        }
      );
    var Sn = function (e, t) {
        (this.id = he++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : et),
          (this.set = t ? t.getSetter : $n);
      },
      Cn = (function () {
        function e(e) {
          (this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0),
              (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            At(this, +e.duration, 1, 1),
            (this.data = e.data),
            K && ((this._ctx = K), K.data.push(this)),
            re || dn.wake();
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                At(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((fn(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (
                Ct(this, e), !n._dp || n.parent || Et(n, this);
                n && n.parent;

              )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Mt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), lt(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + wt(this)) %
                    (this._dur + this._rDelay) || (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                    wt(this),
                  t
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.rawTime() > 0
              ? 1
              : 0;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
              ? xt(this._tTime, n) + 1
              : 1;
          }),
          (t.timeScale = function (e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var n =
              this.parent && this._ts
                ? Tt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
              this.totalTime(
                Dt(-Math.abs(this._delay), this.totalDuration(), n),
                !1 !== t
              ),
              St(this),
              (function (e) {
                for (var t = e.parent; t && t.parent; )
                  (t._dirty = 1), t.totalDuration(), (t = t.parent);
                return e;
              })(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (fn(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8)
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && Mt(t, this, e - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (xe(e) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Tt(t.rawTime(e), this)
                : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            void 0 === e && (e = qe);
            var t = U;
            return (
              (U = e),
              at(this) &&
                (this.timeline && this.timeline.revert(e),
                this.totalTime(-0.01, e.suppressEvents)),
              "nested" !== this.data && !1 !== e.kill && this.kill(),
              (U = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
              (n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp);
            return !this.parent && this._sat ? this._sat.globalTime(e) : n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Lt(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return (this._rDelay = e), Lt(this), t ? this.time(t) : this;
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(zt(this, e), xe(t));
          }),
          (t.restart = function (e, t) {
            return (
              this.play().totalTime(e ? -this._delay : 0, xe(t)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() &&
                  this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !(
              t &&
              !(
                this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - 1e-8
              )
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var i = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((i[e] = t),
                    n && (i[e + "Params"] = n),
                    "onUpdate" === e && (this._onUpdate = t))
                  : delete i[e],
                this)
              : i[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var i = ye(e) ? e : ct,
                r = function () {
                  var e = t.then;
                  (t.then = null),
                    ye(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                    n(i),
                    (t.then = e);
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
              (!t._tTime && t._ts < 0)
                ? r()
                : (t._prom = r);
            });
          }),
          (t.kill = function () {
            Jt(this);
          }),
          e
        );
      })();
    dt(Cn.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var En = (function (e) {
      function t(t, n) {
        var i;
        return (
          void 0 === t && (t = {}),
          ((i = e.call(this, t) || this).labels = {}),
          (i.smoothChildTiming = !!t.smoothChildTiming),
          (i.autoRemoveChildren = !!t.autoRemoveChildren),
          (i._sort = xe(t.sortChildren)),
          Q && Mt(t.parent || Q, V(i), n),
          t.reversed && i.reverse(),
          t.paused && i.paused(!0),
          t.scrollTrigger && kt(V(i), t.scrollTrigger),
          i
        );
      }
      Y(t, e);
      var n = t.prototype;
      return (
        (n.to = function (e, t, n) {
          return It(0, arguments, this), this;
        }),
        (n.from = function (e, t, n) {
          return It(1, arguments, this), this;
        }),
        (n.fromTo = function (e, t, n, i) {
          return It(2, arguments, this), this;
        }),
        (n.set = function (e, t, n) {
          return (
            (t.duration = 0),
            (t.parent = this),
            mt(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new Nn(e, t, zt(this, n), 1),
            this
          );
        }),
        (n.call = function (e, t, n) {
          return Mt(this, Nn.delayedCall(0, e, t), n);
        }),
        (n.staggerTo = function (e, t, n, i, r, s, o) {
          return (
            (n.duration = t),
            (n.stagger = n.stagger || i),
            (n.onComplete = s),
            (n.onCompleteParams = o),
            (n.parent = this),
            new Nn(e, n, zt(this, r)),
            this
          );
        }),
        (n.staggerFrom = function (e, t, n, i, r, s, o) {
          return (
            (n.runBackwards = 1),
            (mt(n).immediateRender = xe(n.immediateRender)),
            this.staggerTo(e, t, n, i, r, s, o)
          );
        }),
        (n.staggerFromTo = function (e, t, n, i, r, s, o, a) {
          return (
            (i.startAt = n),
            (mt(i).immediateRender = xe(i.immediateRender)),
            this.staggerTo(e, t, i, r, s, o, a)
          );
        }),
        (n.render = function (e, t, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            f,
            h,
            p,
            m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = e <= 0 ? 0 : it(e),
            _ = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (
            (this !== Q && y > g && e >= 0 && (y = g),
            y !== this._tTime || n || _)
          ) {
            if (
              (m !== this._time &&
                v &&
                ((y += this._time - m), (e += this._time - m)),
              (i = y),
              (d = this._start),
              (l = !(c = this._ts)),
              _ && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((h = this._yoyo),
                (a = v + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * a + e, t, n);
              if (
                ((i = it(y % a)),
                y === g
                  ? ((o = this._repeat), (i = v))
                  : ((o = ~~(f = it(y / a))) && o === f && ((i = v), o--),
                    i > v && (i = v)),
                (f = xt(this._tTime, a)),
                !m &&
                  this._tTime &&
                  f !== o &&
                  this._tTime - f * a - this._dur <= 0 &&
                  (f = o),
                h && 1 & o && ((i = v - i), (p = 1)),
                o !== f && !this._lock)
              ) {
                var b = h && 1 & f,
                  w = b === (h && 1 & o);
                if (
                  (o < f && (b = !b),
                  (m = b ? 0 : y % v ? v : y),
                  (this._lock = 1),
                  (this.render(m || (p ? 0 : it(o * a)), t, !v)._lock = 0),
                  (this._tTime = y),
                  !t && this.parent && Zt(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !p &&
                    (this.invalidate()._lock = 1),
                  (m && m !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((v = this._dur),
                  (g = this._tDur),
                  w &&
                    ((this._lock = 2),
                    (m = b ? v : -1e-4),
                    this.render(m, !0),
                    this.vars.repeatRefresh && !p && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                yn(this, p);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (u = (function (e, t, n) {
                  var i;
                  if (n > t)
                    for (i = e._first; i && i._start <= n; ) {
                      if ("isPause" === i.data && i._start > t) return i;
                      i = i._next;
                    }
                  else
                    for (i = e._last; i && i._start >= n; ) {
                      if ("isPause" === i.data && i._start < t) return i;
                      i = i._prev;
                    }
                })(this, it(m), it(i))) &&
                (y -= i - (i = u._start)),
              (this._tTime = y),
              (this._time = i),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (m = 0)),
              !m && y && !t && !f && (Zt(this, "onStart"), this._tTime !== y))
            )
              return this;
            if (i >= m && e >= 0)
              for (r = this._first; r; ) {
                if (
                  ((s = r._next), (r._act || i >= r._start) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(e, t, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (i - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (i - r._start) * r._ts,
                      t,
                      n
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), s && (y += this._zTime = -1e-8);
                    break;
                  }
                }
                r = s;
              }
            else {
              r = this._last;
              for (var x = e < 0 ? e : i; r; ) {
                if (
                  ((s = r._prev), (r._act || x <= r._end) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(e, t, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (x - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (x - r._start) * r._ts,
                      t,
                      n || (U && at(r))
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), s && (y += this._zTime = x ? -1e-8 : 1e-8);
                    break;
                  }
                }
                r = s;
              }
            }
            if (
              u &&
              !t &&
              (this.pause(),
              (u.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1),
              this._ts)
            )
              return (this._start = d), St(this), this.render(e, t, n);
            this._onUpdate && !t && Zt(this, "onUpdate", !0),
              ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
                ((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !v) &&
                    ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                    yt(this, 1),
                  t ||
                    (e < 0 && !m) ||
                    (!y && !m && g) ||
                    (Zt(
                      this,
                      y === g && e >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(y < g && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (e, t) {
          var n = this;
          if ((_e(t) || (t = zt(this, t, e)), !(e instanceof Cn))) {
            if (Ee(e))
              return (
                e.forEach(function (e) {
                  return n.add(e, t);
                }),
                this
              );
            if (ve(e)) return this.addLabel(e, t);
            if (!ye(e)) return this;
            e = Nn.delayedCall(0, e);
          }
          return this !== e ? Mt(this, e, t) : this;
        }),
        (n.getChildren = function (e, t, n, i) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -ce);
          for (var r = [], s = this._first; s; )
            s._start >= i &&
              (s instanceof Nn
                ? t && r.push(s)
                : (n && r.push(s),
                  e && r.push.apply(r, s.getChildren(!0, t, n)))),
              (s = s._next);
          return r;
        }),
        (n.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e) return t[n];
        }),
        (n.remove = function (e) {
          return ve(e)
            ? this.removeLabel(e)
            : ye(e)
            ? this.killTweensOf(e)
            : (e.parent === this && vt(this, e),
              e === this._recent && (this._recent = this._last),
              _t(this));
        }),
        (n.totalTime = function (t, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = it(
                  dn.time -
                    (this._ts > 0
                      ? t / this._ts
                      : (this.totalDuration() - t) / -this._ts)
                )),
              e.prototype.totalTime.call(this, t, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (e, t) {
          return (this.labels[e] = zt(this, t)), this;
        }),
        (n.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (n.addPause = function (e, t, n) {
          var i = Nn.delayedCall(0, t || je, n);
          return (
            (i.data = "isPause"), (this._hasPause = 1), Mt(this, i, zt(this, e))
          );
        }),
        (n.removePause = function (e) {
          var t = this._first;
          for (e = zt(this, e); t; )
            t._start === e && "isPause" === t.data && yt(t), (t = t._next);
        }),
        (n.killTweensOf = function (e, t, n) {
          for (var i = this.getTweensOf(e, n), r = i.length; r--; )
            Mn !== i[r] && i[r].kill(e, t);
          return this;
        }),
        (n.getTweensOf = function (e, t) {
          for (var n, i = [], r = $t(e), s = this._first, o = _e(t); s; )
            s instanceof Nn
              ? st(s._targets, r) &&
                (o
                  ? (!Mn || (s._initted && s._ts)) &&
                    s.globalTime(0) <= t &&
                    s.globalTime(s.totalDuration()) > t
                  : !t || s.isActive()) &&
                i.push(s)
              : (n = s.getTweensOf(r, t)).length && i.push.apply(i, n),
              (s = s._next);
          return i;
        }),
        (n.tweenTo = function (e, t) {
          t = t || {};
          var n,
            i = this,
            r = zt(i, e),
            s = t,
            o = s.startAt,
            a = s.onStart,
            l = s.onStartParams,
            u = s.immediateRender,
            c = Nn.to(
              i,
              dt(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs(
                      (r - (o && "time" in o ? o.time : i._time)) /
                        i.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((i.pause(), !n)) {
                      var e =
                        t.duration ||
                        Math.abs(
                          (r - (o && "time" in o ? o.time : i._time)) /
                            i.timeScale()
                        );
                      c._dur !== e && At(c, e, 0, 1).render(c._time, !0, !0),
                        (n = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                t
              )
            );
          return u ? c.render(0) : c;
        }),
        (n.tweenFromTo = function (e, t, n) {
          return this.tweenTo(t, dt({ startAt: { time: zt(this, e) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (e) {
          return void 0 === e && (e = this._time), Qt(this, zt(this, e));
        }),
        (n.previousLabel = function (e) {
          return void 0 === e && (e = this._time), Qt(this, zt(this, e), 1);
        }),
        (n.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (n.shiftChildren = function (e, t, n) {
          void 0 === n && (n = 0);
          for (var i, r = this._first, s = this.labels; r; )
            r._start >= n && ((r._start += e), (r._end += e)), (r = r._next);
          if (t) for (i in s) s[i] >= n && (s[i] += e);
          return _t(this);
        }),
        (n.invalidate = function (t) {
          var n = this._first;
          for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
          return e.prototype.invalidate.call(this, t);
        }),
        (n.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n; )
            (t = n._next), this.remove(n), (n = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            _t(this)
          );
        }),
        (n.totalDuration = function (e) {
          var t,
            n,
            i,
            r = 0,
            s = this,
            o = s._last,
            a = ce;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -e : e)
            );
          if (s._dirty) {
            for (i = s.parent; o; )
              (t = o._prev),
                o._dirty && o.totalDuration(),
                (n = o._start) > a && s._sort && o._ts && !s._lock
                  ? ((s._lock = 1), (Mt(s, o, n - o._delay, 1)._lock = 0))
                  : (a = n),
                n < 0 &&
                  o._ts &&
                  ((r -= n),
                  ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                    ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)),
                  s.shiftChildren(-n, !1, -1 / 0),
                  (a = 0)),
                o._end > r && o._ts && (r = o._end),
                (o = t);
            At(s, s === Q && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (t.updateRoot = function (e) {
          if ((Q._ts && (lt(Q, Tt(e, Q)), (ne = dn.frame)), dn.frame >= Ue)) {
            Ue += le.autoSleep || 120;
            var t = Q._first;
            if ((!t || !t._ts) && le.autoSleep && dn._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || dn.sleep();
            }
          }
        }),
        t
      );
    })(Cn);
    dt(En.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Mn,
      kn,
      On = function (e, t, n, i, r, s, o, a, l, u) {
        ye(i) && (i = i(r || 0, e, s));
        var c,
          d = e[t],
          f =
            "get" !== n
              ? n
              : ye(d)
              ? l
                ? e[
                    t.indexOf("set") || !ye(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](l)
                : e[t]()
              : d,
          h = ye(d) ? (l ? Bn : Fn) : Dn;
        if (
          (ve(i) &&
            (~i.indexOf("random(") && (i = Ut(i)),
            "=" === i.charAt(1) &&
              ((c = rt(f, i) + (Ft(f) || 0)) || 0 === c) &&
              (i = c)),
          !u || f !== i || kn)
        )
          return isNaN(f * i) || "" === i
            ? (!d && !(t in e) && De(t, i),
              function (e, t, n, i, r, s, o) {
                var a,
                  l,
                  u,
                  c,
                  d,
                  f,
                  h,
                  p,
                  m = new Kn(this._pt, e, t, 0, 1, Hn, null, r),
                  g = 0,
                  v = 0;
                for (
                  m.b = n,
                    m.e = i,
                    n += "",
                    (h = ~(i += "").indexOf("random(")) && (i = Ut(i)),
                    s && (s((p = [n, i]), e, t), (n = p[0]), (i = p[1])),
                    l = n.match(Pe) || [];
                  (a = Pe.exec(i));

                )
                  (c = a[0]),
                    (d = i.substring(g, a.index)),
                    u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
                    c !== l[v++] &&
                      ((f = parseFloat(l[v - 1]) || 0),
                      (m._pt = {
                        _next: m._pt,
                        p: d || 1 === v ? d : ",",
                        s: f,
                        c:
                          "=" === c.charAt(1)
                            ? rt(f, c) - f
                            : parseFloat(c) - f,
                        m: u && u < 4 ? Math.round : 0,
                      }),
                      (g = Pe.lastIndex));
                return (
                  (m.c = g < i.length ? i.substring(g, i.length) : ""),
                  (m.fp = o),
                  (Ae.test(i) || h) && (m.e = 0),
                  (this._pt = m),
                  m
                );
              }.call(this, e, t, f, i, h, a || le.stringFilter, l))
            : ((c = new Kn(
                this._pt,
                e,
                t,
                +f || 0,
                i - (f || 0),
                "boolean" == typeof d ? qn : Wn,
                0,
                h
              )),
              l && (c.fp = l),
              o && c.modifier(o, this, e),
              (this._pt = c));
      },
      Pn = function (e, t, n, i, r, s) {
        var o, a, l, u;
        if (
          Ye[e] &&
          !1 !==
            (o = new Ye[e]()).init(
              r,
              o.rawVars
                ? t[e]
                : (function (e, t, n, i, r) {
                    if (
                      (ye(e) && (e = Rn(e, r, t, n, i)),
                      !we(e) || (e.style && e.nodeType) || Ee(e) || Ce(e))
                    )
                      return ve(e) ? Rn(e, r, t, n, i) : e;
                    var s,
                      o = {};
                    for (s in e) o[s] = Rn(e[s], r, t, n, i);
                    return o;
                  })(t[e], i, r, s, n),
              n,
              i,
              s
            ) &&
          ((n._pt = a = new Kn(n._pt, r, e, 0, 1, o.render, o, 0, o.priority)),
          n !== ie)
        )
          for (
            l = n._ptLookup[n._targets.indexOf(r)], u = o._props.length;
            u--;

          )
            l[o._props[u]] = a;
        return o;
      },
      An = function e(t, n, i) {
        var r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          m,
          g,
          v = t.vars,
          y = v.ease,
          _ = v.startAt,
          b = v.immediateRender,
          w = v.lazy,
          x = v.onUpdate,
          T = v.runBackwards,
          S = v.yoyoEase,
          C = v.keyframes,
          E = v.autoRevert,
          M = t._dur,
          k = t._startAt,
          O = t._targets,
          P = t.parent,
          A = P && "nested" === P.data ? P.vars.targets : O,
          L = "auto" === t._overwrite && !X,
          R = t.timeline;
        if (
          (R && (!C || !y) && (y = "none"),
          (t._ease = _n(y, ue.ease)),
          (t._yEase = S ? vn(_n(!0 === S ? y : S, ue.ease)) : 0),
          S &&
            t._yoyo &&
            !t._repeat &&
            ((S = t._yEase), (t._yEase = t._ease), (t._ease = S)),
          (t._from = !R && !!v.runBackwards),
          !R || (C && !v.stagger))
        ) {
          if (
            ((m = (d = O[0] ? Je(O[0]).harness : 0) && v[d.prop]),
            (r = pt(v, He)),
            k &&
              (k._zTime < 0 && k.progress(1),
              n < 0 && T && b && !E
                ? k.render(-1, !0)
                : k.revert(T && M ? We : $e),
              (k._lazy = 0)),
            _)
          ) {
            if (
              (yt(
                (t._startAt = Nn.set(
                  O,
                  dt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: P,
                      immediateRender: !0,
                      lazy: !k && xe(w),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        x &&
                        function () {
                          return Zt(t, "onUpdate");
                        },
                      stagger: 0,
                    },
                    _
                  )
                ))
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (U || (!b && !E)) && t._startAt.revert(We),
              b && M && n <= 0 && i <= 0)
            )
              return void (n && (t._zTime = n));
          } else if (T && M && !k)
            if (
              (n && (b = !1),
              (o = dt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && !k && xe(w),
                  immediateRender: b,
                  stagger: 0,
                  parent: P,
                },
                r
              )),
              m && (o[d.prop] = m),
              yt((t._startAt = Nn.set(O, o))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              n < 0 && (U ? t._startAt.revert(We) : t._startAt.render(-1, !0)),
              (t._zTime = n),
              b)
            ) {
              if (!n) return;
            } else e(t._startAt, 1e-8, 1e-8);
          for (
            t._pt = t._ptCache = 0, w = (M && xe(w)) || (w && !M), s = 0;
            s < O.length;
            s++
          ) {
            if (
              ((c = (l = O[s])._gsap || Ze(O)[s]._gsap),
              (t._ptLookup[s] = h = {}),
              Ve[c.id] && Ge.length && ot(),
              (p = A === O ? s : A.indexOf(l)),
              d &&
                !1 !== (f = new d()).init(l, m || r, t, p, A) &&
                ((t._pt = a =
                  new Kn(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (e) {
                  h[e] = a;
                }),
                f.priority && (u = 1)),
              !d || m)
            )
              for (o in r)
                Ye[o] && (f = Pn(o, r, t, p, l, A))
                  ? f.priority && (u = 1)
                  : (h[o] = a =
                      On.call(t, l, o, "get", r[o], p, A, 0, v.stringFilter));
            t._op && t._op[s] && t.kill(l, t._op[s]),
              L &&
                t._pt &&
                ((Mn = t),
                Q.killTweensOf(l, h, t.globalTime(n)),
                (g = !t.parent),
                (Mn = 0)),
              t._pt && w && (Ve[c.id] = 1);
          }
          u && Un(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = x),
          (t._initted = (!t._op || t._pt) && !g),
          C && n <= 0 && R.render(ce, !0, !0);
      },
      Ln = function (e, t, n, i) {
        var r,
          s,
          o = t.ease || i || "power1.inOut";
        if (Ee(t))
          (s = n[e] || (n[e] = [])),
            t.forEach(function (e, n) {
              return s.push({ t: (n / (t.length - 1)) * 100, v: e, e: o });
            });
        else
          for (r in t)
            (s = n[r] || (n[r] = [])),
              "ease" === r || s.push({ t: parseFloat(e), v: t[r], e: o });
      },
      Rn = function (e, t, n, i, r) {
        return ye(e)
          ? e.call(t, n, i, r)
          : ve(e) && ~e.indexOf("random(")
          ? Ut(e)
          : e;
      },
      zn = Qe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      In = {};
    tt(zn + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
      return (In[e] = 1);
    });
    var Nn = (function (e) {
      function t(t, n, i, r) {
        var s;
        "number" == typeof n && ((i.duration = n), (n = i), (i = null));
        var o,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p = (s = e.call(this, r ? n : mt(n)) || this).vars,
          m = p.duration,
          g = p.delay,
          v = p.immediateRender,
          y = p.stagger,
          _ = p.overwrite,
          b = p.keyframes,
          w = p.defaults,
          x = p.scrollTrigger,
          T = p.yoyoEase,
          S = n.parent || Q,
          C = (Ee(t) || Ce(t) ? _e(t[0]) : "length" in n) ? [t] : $t(t);
        if (
          ((s._targets = C.length
            ? Ze(C)
            : Fe(
                "GSAP target " + t + " not found. https://gsap.com",
                !le.nullTargetWarn
              ) || []),
          (s._ptLookup = []),
          (s._overwrite = _),
          b || y || Se(m) || Se(g))
        ) {
          if (
            ((n = s.vars),
            (o = s.timeline =
              new En({
                data: "nested",
                defaults: w || {},
                targets: S && "nested" === S.data ? S.vars.targets : C,
              })).kill(),
            (o.parent = o._dp = V(s)),
            (o._start = 0),
            y || Se(m) || Se(g))
          ) {
            if (((u = C.length), (f = y && Ht(y)), we(y)))
              for (c in y) ~zn.indexOf(c) && (h || (h = {}), (h[c] = y[c]));
            for (a = 0; a < u; a++)
              ((l = pt(n, In)).stagger = 0),
                T && (l.yoyoEase = T),
                h && ft(l, h),
                (d = C[a]),
                (l.duration = +Rn(m, V(s), a, d, C)),
                (l.delay = (+Rn(g, V(s), a, d, C) || 0) - s._delay),
                !y &&
                  1 === u &&
                  l.delay &&
                  ((s._delay = g = l.delay), (s._start += g), (l.delay = 0)),
                o.to(d, l, f ? f(a, d, C) : 0),
                (o._ease = hn.none);
            o.duration() ? (m = g = 0) : (s.timeline = 0);
          } else if (b) {
            mt(dt(o.vars.defaults, { ease: "none" })),
              (o._ease = _n(b.ease || n.ease || "none"));
            var E,
              M,
              k,
              O = 0;
            if (Ee(b))
              b.forEach(function (e) {
                return o.to(C, e, ">");
              }),
                o.duration();
            else {
              for (c in ((l = {}), b))
                "ease" === c || "easeEach" === c || Ln(c, b[c], l, b.easeEach);
              for (c in l)
                for (
                  E = l[c].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    O = 0,
                    a = 0;
                  a < E.length;
                  a++
                )
                  ((k = {
                    ease: (M = E[a]).e,
                    duration: ((M.t - (a ? E[a - 1].t : 0)) / 100) * m,
                  })[c] = M.v),
                    o.to(C, k, O),
                    (O += k.duration);
              o.duration() < m && o.to({}, { duration: m - o.duration() });
            }
          }
          m || s.duration((m = o.duration()));
        } else s.timeline = 0;
        return (
          !0 !== _ || X || ((Mn = V(s)), Q.killTweensOf(C), (Mn = 0)),
          Mt(S, V(s), i),
          n.reversed && s.reverse(),
          n.paused && s.paused(!0),
          (v ||
            (!m &&
              !b &&
              s._start === it(S._time) &&
              xe(v) &&
              (function e(t) {
                return !t || (t._ts && e(t.parent));
              })(V(s)) &&
              "nested" !== S.data)) &&
            ((s._tTime = -1e-8), s.render(Math.max(0, -g) || 0)),
          x && kt(V(s), x),
          s
        );
      }
      Y(t, e);
      var n = t.prototype;
      return (
        (n.render = function (e, t, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            f = this._time,
            h = this._tDur,
            p = this._dur,
            m = e < 0,
            g = e > h - 1e-8 && !m ? h : e < 1e-8 ? 0 : e;
          if (p) {
            if (
              g !== this._tTime ||
              !e ||
              n ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== m) ||
              this._lazy
            ) {
              if (((i = g), (c = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && m))
                  return this.totalTime(100 * o + e, t, n);
                if (
                  ((i = it(g % o)),
                  g === h
                    ? ((s = this._repeat), (i = p))
                    : (s = ~~(a = it(g / o))) && s === a
                    ? ((i = p), s--)
                    : i > p && (i = p),
                  (l = this._yoyo && 1 & s) && ((d = this._yEase), (i = p - i)),
                  (a = xt(this._tTime, o)),
                  i === f && !n && this._initted && s === a)
                )
                  return (this._tTime = g), this;
                s !== a &&
                  (c && this._yEase && yn(c, l),
                  this.vars.repeatRefresh &&
                    !l &&
                    !this._lock &&
                    i !== o &&
                    this._initted &&
                    ((this._lock = n = 1),
                    (this.render(it(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ot(this, m ? e : i, n, t, g))
                  return (this._tTime = 0), this;
                if (
                  !(
                    f === this._time ||
                    (n && this.vars.repeatRefresh && s !== a)
                  )
                )
                  return this;
                if (p !== this._dur) return this.render(e, t, n);
              }
              if (
                ((this._tTime = g),
                (this._time = i),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = u = (d || this._ease)(i / p)),
                this._from && (this.ratio = u = 1 - u),
                !f && g && !t && !a && (Zt(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
              (c &&
                c.render(e < 0 ? e : c._dur * c._ease(i / this._dur), t, n)) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (m && bt(this, e, 0, n), Zt(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  Zt(this, "onRepeat"),
                (g !== this._tDur && g) ||
                  this._tTime !== g ||
                  (m && !this._onUpdate && bt(this, e, 0, !0),
                  (e || !p) &&
                    ((g === this._tDur && this._ts > 0) ||
                      (!g && this._ts < 0)) &&
                    yt(this, 1),
                  t ||
                    (m && !f) ||
                    !(g || f || l) ||
                    (Zt(this, g === h ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(g < h && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (e, t, n, i) {
              var r,
                s,
                o,
                a = e.ratio,
                l =
                  t < 0 ||
                  (!t &&
                    ((!e._start &&
                      (function e(t) {
                        var n = t.parent;
                        return (
                          n &&
                          n._ts &&
                          n._initted &&
                          !n._lock &&
                          (n.rawTime() < 0 || e(n))
                        );
                      })(e) &&
                      (e._initted || !Pt(e))) ||
                      ((e._ts < 0 || e._dp._ts < 0) && !Pt(e))))
                    ? 0
                    : 1,
                u = e._rDelay,
                c = 0;
              if (
                (u &&
                  e._repeat &&
                  ((c = Dt(0, e._tDur, t)),
                  (s = xt(c, u)),
                  e._yoyo && 1 & s && (l = 1 - l),
                  s !== xt(e._tTime, u) &&
                    ((a = 1 - l),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                l !== a || U || i || 1e-8 === e._zTime || (!t && e._zTime))
              ) {
                if (!e._initted && Ot(e, t, i, n, c)) return;
                for (
                  o = e._zTime,
                    e._zTime = t || (n ? 1e-8 : 0),
                    n || (n = t && !o),
                    e.ratio = l,
                    e._from && (l = 1 - l),
                    e._time = 0,
                    e._tTime = c,
                    r = e._pt;
                  r;

                )
                  r.r(l, r.d), (r = r._next);
                t < 0 && bt(e, t, 0, !0),
                  e._onUpdate && !n && Zt(e, "onUpdate"),
                  c && e._repeat && !n && e.parent && Zt(e, "onRepeat"),
                  (t >= e._tDur || t < 0) &&
                    e.ratio === l &&
                    (l && yt(e, 1),
                    n ||
                      U ||
                      (Zt(e, l ? "onComplete" : "onReverseComplete", !0),
                      e._prom && e._prom()));
              } else e._zTime || (e._zTime = t);
            })(this, e, t, n);
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function (t) {
          return (
            (!t || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(t),
            e.prototype.invalidate.call(this, t)
          );
        }),
        (n.resetTo = function (e, t, n, i, r) {
          re || dn.wake(), this._ts || this.play();
          var s = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || An(this, s),
            (function (e, t, n, i, r, s, o, a) {
              var l,
                u,
                c,
                d,
                f = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!f)
                for (
                  f = e._ptCache[t] = [],
                    c = e._ptLookup,
                    d = e._targets.length;
                  d--;

                ) {
                  if ((l = c[d][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                      l = l._next;
                  if (!l)
                    return (
                      (kn = 1),
                      (e.vars[t] = "+=0"),
                      An(e, o),
                      (kn = 0),
                      a ? Fe(t + " not eligible for reset") : 1
                    );
                  f.push(l);
                }
              for (d = f.length; d--; )
                ((l = (u = f[d])._pt || u).s =
                  (!i && 0 !== i) || r ? l.s + (i || 0) + s * l.c : i),
                  (l.c = n - l.s),
                  u.e && (u.e = nt(n) + Ft(u.e)),
                  u.b && (u.b = l.s + Ft(u.b));
            })(this, e, t, n, i, this._ease(s / this._dur), s, r)
              ? this.resetTo(e, t, n, i, 1)
              : (Ct(this, 0),
                this.parent ||
                  gt(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (n.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? Jt(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!U),
              this
            );
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, Mn && !0 !== Mn.vars.overwrite)
                ._first || Jt(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                At(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var i,
            r,
            s,
            o,
            a,
            l,
            u,
            c = this._targets,
            d = e ? $t(e) : c,
            f = this._ptLookup,
            h = this._pt;
          if (
            (!t || "all" === t) &&
            (function (e, t) {
              for (
                var n = e.length, i = n === t.length;
                i && n-- && e[n] === t[n];

              );
              return n < 0;
            })(c, d)
          )
            return "all" === t && (this._pt = 0), Jt(this);
          for (
            i = this._op = this._op || [],
              "all" !== t &&
                (ve(t) &&
                  ((a = {}),
                  tt(t, function (e) {
                    return (a[e] = 1);
                  }),
                  (t = a)),
                (t = (function (e, t) {
                  var n,
                    i,
                    r,
                    s,
                    o = e[0] ? Je(e[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return t;
                  for (i in ((n = ft({}, t)), a))
                    if ((i in n))
                      for (r = (s = a[i].split(",")).length; r--; )
                        n[s[r]] = n[i];
                  return n;
                })(c, t))),
              u = c.length;
            u--;

          )
            if (~d.indexOf(c[u]))
              for (a in ((r = f[u]),
              "all" === t
                ? ((i[u] = t), (o = r), (s = {}))
                : ((s = i[u] = i[u] || {}), (o = t)),
              o))
                (l = r && r[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || vt(this, l, "_pt"),
                  delete r[a]),
                  "all" !== s && (s[a] = 1);
          return this._initted && !this._pt && h && Jt(this), this;
        }),
        (t.to = function (e, n) {
          return new t(e, n, arguments[2]);
        }),
        (t.from = function (e, t) {
          return It(1, arguments);
        }),
        (t.delayedCall = function (e, n, i, r) {
          return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: r,
          });
        }),
        (t.fromTo = function (e, t, n) {
          return It(2, arguments);
        }),
        (t.set = function (e, n) {
          return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
        }),
        (t.killTweensOf = function (e, t, n) {
          return Q.killTweensOf(e, t, n);
        }),
        t
      );
    })(Cn);
    dt(Nn.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      tt("staggerTo,staggerFrom,staggerFromTo", function (e) {
        Nn[e] = function () {
          var t = new En(),
            n = Bt.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
          );
        };
      });
    var Dn = function (e, t, n) {
        return (e[t] = n);
      },
      Fn = function (e, t, n) {
        return e[t](n);
      },
      Bn = function (e, t, n, i) {
        return e[t](i.fp, n);
      },
      jn = function (e, t, n) {
        return e.setAttribute(t, n);
      },
      $n = function (e, t) {
        return ye(e[t]) ? Fn : be(e[t]) && e.setAttribute ? jn : Dn;
      },
      Wn = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      qn = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      Hn = function (e, t) {
        var n = t._pt,
          i = "";
        if (!e && t.b) i = t.b;
        else if (1 === e && t.e) i = t.e;
        else {
          for (; n; )
            (i =
              n.p +
              (n.m
                ? n.m(n.s + n.c * e)
                : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
              i),
              (n = n._next);
          i += t.c;
        }
        t.set(t.t, t.p, i, t);
      },
      Gn = function (e, t) {
        for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
      },
      Vn = function (e, t, n, i) {
        for (var r, s = this._pt; s; )
          (r = s._next), s.p === i && s.modifier(e, t, n), (s = r);
      },
      Yn = function (e) {
        for (var t, n, i = this._pt; i; )
          (n = i._next),
            (i.p === e && !i.op) || i.op === e
              ? vt(this, i, "_pt")
              : i.dep || (t = 1),
            (i = n);
        return !t;
      },
      Xn = function (e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
      },
      Un = function (e) {
        for (var t, n, i, r, s = e._pt; s; ) {
          for (t = s._next, n = i; n && n.pr > s.pr; ) n = n._next;
          (s._prev = n ? n._prev : r) ? (s._prev._next = s) : (i = s),
            (s._next = n) ? (n._prev = s) : (r = s),
            (s = t);
        }
        e._pt = i;
      },
      Kn = (function () {
        function e(e, t, n, i, r, s, o, a, l) {
          (this.t = t),
            (this.s = i),
            (this.c = r),
            (this.p = n),
            (this.r = s || Wn),
            (this.d = o || this),
            (this.set = a || Dn),
            (this.pr = l || 0),
            (this._next = e),
            e && (e._prev = this);
        }
        return (
          (e.prototype.modifier = function (e, t, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = Xn),
              (this.m = e),
              (this.mt = n),
              (this.tween = t);
          }),
          e
        );
      })();
    tt(
      Qe +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (He[e] = 1);
      }
    ),
      (ze.TweenMax = ze.TweenLite = Nn),
      (ze.TimelineLite = ze.TimelineMax = En),
      (Q = new En({
        sortChildren: !1,
        defaults: ue,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (le.stringFilter = cn);
    var Qn = [],
      Zn = {},
      Jn = [],
      ei = 0,
      ti = 0,
      ni = function (e) {
        return (Zn[e] || Jn).map(function (e) {
          return e();
        });
      },
      ii = function () {
        var e = Date.now(),
          t = [];
        e - ei > 2 &&
          (ni("matchMediaInit"),
          Qn.forEach(function (e) {
            var n,
              i,
              r,
              s,
              o = e.queries,
              a = e.conditions;
            for (i in o)
              (n = Z.matchMedia(o[i]).matches) && (r = 1),
                n !== a[i] && ((a[i] = n), (s = 1));
            s && (e.revert(), r && t.push(e));
          }),
          ni("matchMediaRevert"),
          t.forEach(function (e) {
            return e.onMatch(e, function (t) {
              return e.add(null, t);
            });
          }),
          (ei = e),
          ni("matchMedia"));
      },
      ri = (function () {
        function e(e, t) {
          (this.selector = t && Wt(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = ti++),
            e && this.add(e);
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            ye(e) && ((n = t), (t = e), (e = ye));
            var i = this,
              r = function () {
                var e,
                  r = K,
                  s = i.selector;
                return (
                  r && r !== i && r.data.push(i),
                  n && (i.selector = Wt(n)),
                  (K = i),
                  (e = t.apply(i, arguments)),
                  ye(e) && i._r.push(e),
                  (K = r),
                  (i.selector = s),
                  (i.isReverted = !1),
                  e
                );
              };
            return (
              (i.last = r),
              e === ye
                ? r(i, function (e) {
                    return i.add(null, e);
                  })
                : e
                ? (i[e] = r)
                : r
            );
          }),
          (t.ignore = function (e) {
            var t = K;
            (K = null), e(this), (K = t);
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (n) {
                return n instanceof e
                  ? t.push.apply(t, n.getTweens())
                  : n instanceof Nn &&
                      !(n.parent && "nested" === n.parent.data) &&
                      t.push(n);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var n = this;
            if (
              (e
                ? (function () {
                    for (var t, i = n.getTweens(), r = n.data.length; r--; )
                      "isFlip" === (t = n.data[r]).data &&
                        (t.revert(),
                        t.getChildren(!0, !0, !1).forEach(function (e) {
                          return i.splice(i.indexOf(e), 1);
                        }));
                    for (
                      i
                        .map(function (e) {
                          return {
                            g:
                              e._dur ||
                              e._delay ||
                              (e._sat && !e._sat.vars.immediateRender)
                                ? e.globalTime(0)
                                : -1 / 0,
                            t: e,
                          };
                        })
                        .sort(function (e, t) {
                          return t.g - e.g || -1 / 0;
                        })
                        .forEach(function (t) {
                          return t.t.revert(e);
                        }),
                        r = n.data.length;
                      r--;

                    )
                      (t = n.data[r]) instanceof En
                        ? "nested" !== t.data &&
                          (t.scrollTrigger && t.scrollTrigger.revert(),
                          t.kill())
                        : !(t instanceof Nn) && t.revert && t.revert(e);
                    n._r.forEach(function (t) {
                      return t(e, n);
                    }),
                      (n.isReverted = !0);
                  })()
                : this.data.forEach(function (e) {
                    return e.kill && e.kill();
                  }),
              this.clear(),
              t)
            )
              for (var i = Qn.length; i--; )
                Qn[i].id === this.id && Qn.splice(i, 1);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })(),
      si = (function () {
        function e(e) {
          (this.contexts = []), (this.scope = e), K && K.data.push(this);
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, n) {
            we(e) || (e = { matches: e });
            var i,
              r,
              s,
              o = new ri(0, n || this.scope),
              a = (o.conditions = {});
            for (r in (K && !o.selector && (o.selector = K.selector),
            this.contexts.push(o),
            (t = o.add("onMatch", t)),
            (o.queries = e),
            e))
              "all" === r
                ? (s = 1)
                : (i = Z.matchMedia(e[r])) &&
                  (Qn.indexOf(o) < 0 && Qn.push(o),
                  (a[r] = i.matches) && (s = 1),
                  i.addListener
                    ? i.addListener(ii)
                    : i.addEventListener("change", ii));
            return (
              s &&
                t(o, function (e) {
                  return o.add(null, e);
                }),
              this
            );
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })(),
      oi = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          t.forEach(function (e) {
            return tn(e);
          });
        },
        timeline: function (e) {
          return new En(e);
        },
        getTweensOf: function (e, t) {
          return Q.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, i) {
          ve(e) && (e = $t(e)[0]);
          var r = Je(e || {}).get,
            s = n ? ct : ut;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? s(((Ye[t] && Ye[t].get) || r)(e, t, n, i))
                : function (t, n, i) {
                    return s(((Ye[t] && Ye[t].get) || r)(e, t, n, i));
                  }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = $t(e)).length > 1) {
            var i = e.map(function (e) {
                return ui.quickSetter(e, t, n);
              }),
              r = i.length;
            return function (e) {
              for (var t = r; t--; ) i[t](e);
            };
          }
          e = e[0] || {};
          var s = Ye[t],
            o = Je(e),
            a = (o.harness && (o.harness.aliases || {})[t]) || t,
            l = s
              ? function (t) {
                  var i = new s();
                  (ie._pt = 0),
                    i.init(e, n ? t + n : t, ie, 0, [e]),
                    i.render(1, i),
                    ie._pt && Gn(1, ie);
                }
              : o.set(e, a);
          return s
            ? l
            : function (t) {
                return l(e, a, n ? t + n : t, o, 1);
              };
        },
        quickTo: function (e, t, n) {
          var i,
            r = ui.to(
              e,
              dt(
                (((i = {})[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
                n || {}
              )
            ),
            s = function (e, n, i) {
              return r.resetTo(t, e, n, i);
            };
          return (s.tween = r), s;
        },
        isTweening: function (e) {
          return Q.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = _n(e.ease, ue.ease)), ht(ue, e || {});
        },
        config: function (e) {
          return ht(le, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            i = e.plugins,
            r = e.defaults,
            s = e.extendTimeline;
          (i || "").split(",").forEach(function (e) {
            return (
              e &&
              !Ye[e] &&
              !ze[e] &&
              Fe(t + " effect requires " + e + " plugin.")
            );
          }),
            (Xe[t] = function (e, t, i) {
              return n($t(e), dt(t || {}, r), i);
            }),
            s &&
              (En.prototype[t] = function (e, n, i) {
                return this.add(Xe[t](e, we(n) ? n : (i = n) && {}, this), i);
              });
        },
        registerEase: function (e, t) {
          hn[e] = _n(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? _n(e, t) : hn;
        },
        getById: function (e) {
          return Q.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            i,
            r = new En(e);
          for (
            r.smoothChildTiming = xe(e.smoothChildTiming),
              Q.remove(r),
              r._dp = 0,
              r._time = r._tTime = Q._time,
              n = Q._first;
            n;

          )
            (i = n._next),
              (!t &&
                !n._dur &&
                n instanceof Nn &&
                n.vars.onComplete === n._targets[0]) ||
                Mt(r, n, n._start - n._delay),
              (n = i);
          return Mt(Q, r, 0), r;
        },
        context: function (e, t) {
          return e ? new ri(e, t) : K;
        },
        matchMedia: function (e) {
          return new si(e);
        },
        matchMediaRefresh: function () {
          return (
            Qn.forEach(function (e) {
              var t,
                n,
                i = e.conditions;
              for (n in i) i[n] && ((i[n] = !1), (t = 1));
              t && e.revert();
            }) || ii()
          );
        },
        addEventListener: function (e, t) {
          var n = Zn[e] || (Zn[e] = []);
          ~n.indexOf(t) || n.push(t);
        },
        removeEventListener: function (e, t) {
          var n = Zn[e],
            i = n && n.indexOf(t);
          i >= 0 && n.splice(i, 1);
        },
        utils: {
          wrap: function e(t, n, i) {
            var r = n - t;
            return Ee(t)
              ? Xt(t, e(0, t.length), n)
              : Nt(i, function (e) {
                  return ((r + ((e - t) % r)) % r) + t;
                });
          },
          wrapYoyo: function e(t, n, i) {
            var r = n - t,
              s = 2 * r;
            return Ee(t)
              ? Xt(t, e(0, t.length - 1), n)
              : Nt(i, function (e) {
                  return (
                    t + ((e = (s + ((e - t) % s)) % s || 0) > r ? s - e : e)
                  );
                });
          },
          distribute: Ht,
          random: Yt,
          snap: Vt,
          normalize: function (e, t, n) {
            return Kt(e, t, 0, 1, n);
          },
          getUnit: Ft,
          clamp: function (e, t, n) {
            return Nt(n, function (n) {
              return Dt(e, t, n);
            });
          },
          splitColor: sn,
          toArray: $t,
          selector: Wt,
          mapRange: Kt,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || Ft(n));
            };
          },
          interpolate: function e(t, n, i, r) {
            var s = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!s) {
              var o,
                a,
                l,
                u,
                c,
                d = ve(t),
                f = {};
              if ((!0 === i && (r = 1) && (i = null), d))
                (t = { p: t }), (n = { p: n });
              else if (Ee(t) && !Ee(n)) {
                for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++)
                  l.push(e(t[a - 1], t[a]));
                u--,
                  (s = function (e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t);
                  }),
                  (i = n);
              } else r || (t = ft(Ee(t) ? [] : {}, t));
              if (!l) {
                for (o in n) On.call(f, t, o, "get", n[o]);
                s = function (e) {
                  return Gn(e, f) || (d ? t.p : t);
                };
              }
            }
            return Nt(i, s);
          },
          shuffle: qt,
        },
        install: Ne,
        effects: Xe,
        ticker: dn,
        updateRoot: En.updateRoot,
        plugins: Ye,
        globalTimeline: Q,
        core: {
          PropTween: Kn,
          globals: Be,
          Tween: Nn,
          Timeline: En,
          Animation: Cn,
          getCache: Je,
          _removeLinkedListItem: vt,
          reverting: function () {
            return U;
          },
          context: function (e) {
            return e && K && (K.data.push(e), (e._ctx = K)), K;
          },
          suppressOverwrites: function (e) {
            return (X = e);
          },
        },
      };
    tt("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (oi[e] = Nn[e]);
    }),
      dn.add(En.updateRoot),
      (ie = oi.to({}, { duration: 0 }));
    var ai = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
          n = n._next;
        return n;
      },
      li = function (e, t) {
        return {
          name: e,
          headless: 1,
          rawVars: 1,
          init: function (e, n, i) {
            i._onInit = function (e) {
              var i, r;
              if (
                (ve(n) &&
                  ((i = {}),
                  tt(n, function (e) {
                    return (i[e] = 1);
                  }),
                  (n = i)),
                t)
              ) {
                for (r in ((i = {}), n)) i[r] = t(n[r]);
                n = i;
              }
              !(function (e, t) {
                var n,
                  i,
                  r,
                  s = e._targets;
                for (n in t)
                  for (i = s.length; i--; )
                    (r = e._ptLookup[i][n]) &&
                      (r = r.d) &&
                      (r._pt && (r = ai(r, n)),
                      r && r.modifier && r.modifier(t[n], e, s[i], n));
              })(e, n);
            };
          },
        };
      },
      ui =
        oi.registerPlugin(
          {
            name: "attr",
            init: function (e, t, n, i, r) {
              var s, o, a;
              for (s in ((this.tween = n), t))
                (a = e.getAttribute(s) || ""),
                  ((o = this.add(
                    e,
                    "setAttribute",
                    (a || 0) + "",
                    t[s],
                    i,
                    r,
                    0,
                    0,
                    s
                  )).op = s),
                  (o.b = a),
                  this._props.push(s);
            },
            render: function (e, t) {
              for (var n = t._pt; n; )
                U ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
            },
          },
          {
            name: "endArray",
            headless: 1,
            init: function (e, t) {
              for (var n = t.length; n--; )
                this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
            },
          },
          li("roundProps", Gt),
          li("modifiers"),
          li("snap", Vt)
        ) || oi;
    (Nn.version = En.version = ui.version = "3.13.0"),
      (te = 1),
      Te() && fn(),
      hn.Power0,
      hn.Power1,
      hn.Power2,
      hn.Power3,
      hn.Power4,
      hn.Linear,
      hn.Quad,
      hn.Cubic,
      hn.Quart,
      hn.Quint,
      hn.Strong,
      hn.Elastic,
      hn.Back,
      hn.SteppedEase,
      hn.Bounce,
      hn.Sine,
      hn.Expo,
      hn.Circ;
    var ci,
      di,
      fi,
      hi,
      pi,
      mi,
      gi,
      vi,
      yi = {},
      _i = 180 / Math.PI,
      bi = Math.PI / 180,
      wi = Math.atan2,
      xi = /([A-Z])/g,
      Ti = /(left|right|width|margin|padding|x)/i,
      Si = /[\s,\(]\S/,
      Ci = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Ei = function (e, t) {
        return t.set(
          t.t,
          t.p,
          Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      Mi = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      ki = function (e, t) {
        return t.set(
          t.t,
          t.p,
          e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
          t
        );
      },
      Oi = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      Pi = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      Ai = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      Li = function (e, t, n) {
        return (e.style[t] = n);
      },
      Ri = function (e, t, n) {
        return e.style.setProperty(t, n);
      },
      zi = function (e, t, n) {
        return (e._gsap[t] = n);
      },
      Ii = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      },
      Ni = function (e, t, n, i, r) {
        var s = e._gsap;
        (s.scaleX = s.scaleY = n), s.renderTransform(r, s);
      },
      Di = function (e, t, n, i, r) {
        var s = e._gsap;
        (s[t] = n), s.renderTransform(r, s);
      },
      Fi = "transform",
      Bi = Fi + "Origin",
      ji = function e(t, n) {
        var i = this,
          r = this.target,
          s = r.style,
          o = r._gsap;
        if (t in yi && s) {
          if (((this.tfm = this.tfm || {}), "transform" === t))
            return Ci.transform.split(",").forEach(function (t) {
              return e.call(i, t, n);
            });
          if (
            (~(t = Ci[t] || t).indexOf(",")
              ? t.split(",").forEach(function (e) {
                  return (i.tfm[e] = rr(r, e));
                })
              : (this.tfm[t] = o.x ? o[t] : rr(r, t)),
            t === Bi && (this.tfm.zOrigin = o.zOrigin),
            this.props.indexOf(Fi) >= 0)
          )
            return;
          o.svg &&
            ((this.svgo = r.getAttribute("data-svg-origin")),
            this.props.push(Bi, n, "")),
            (t = Fi);
        }
        (s || n) && this.props.push(t, n, s[t]);
      },
      $i = function (e) {
        e.translate &&
          (e.removeProperty("translate"),
          e.removeProperty("scale"),
          e.removeProperty("rotate"));
      },
      Wi = function () {
        var e,
          t,
          n = this.props,
          i = this.target,
          r = i.style,
          s = i._gsap;
        for (e = 0; e < n.length; e += 3)
          n[e + 1]
            ? 2 === n[e + 1]
              ? i[n[e]](n[e + 2])
              : (i[n[e]] = n[e + 2])
            : n[e + 2]
            ? (r[n[e]] = n[e + 2])
            : r.removeProperty(
                "--" === n[e].substr(0, 2)
                  ? n[e]
                  : n[e].replace(xi, "-$1").toLowerCase()
              );
        if (this.tfm) {
          for (t in this.tfm) s[t] = this.tfm[t];
          s.svg &&
            (s.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            ((e = gi()) && e.isStart) ||
              r[Fi] ||
              ($i(r),
              s.zOrigin &&
                r[Bi] &&
                ((r[Bi] += " " + s.zOrigin + "px"),
                (s.zOrigin = 0),
                s.renderTransform()),
              (s.uncache = 1));
        }
      },
      qi = function (e, t) {
        var n = { target: e, props: [], revert: Wi, save: ji };
        return (
          e._gsap || ui.core.getCache(e),
          t &&
            e.style &&
            e.nodeType &&
            t.split(",").forEach(function (e) {
              return n.save(e);
            }),
          n
        );
      },
      Hi = function (e, t) {
        var n = di.createElementNS
          ? di.createElementNS(
              (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              e
            )
          : di.createElement(e);
        return n && n.style ? n : di.createElement(e);
      },
      Gi = function e(t, n, i) {
        var r = getComputedStyle(t);
        return (
          r[n] ||
          r.getPropertyValue(n.replace(xi, "-$1").toLowerCase()) ||
          r.getPropertyValue(n) ||
          (!i && e(t, Yi(n) || n, 1)) ||
          ""
        );
      },
      Vi = "O,Moz,ms,Ms,Webkit".split(","),
      Yi = function (e, t, n) {
        var i = (t || pi).style,
          r = 5;
        if (e in i && !n) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          r-- && !(Vi[r] + e in i);

        );
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Vi[r] : "") + e;
      },
      Xi = function () {
        "undefined" != typeof window &&
          window.document &&
          ((ci = window),
          (di = ci.document),
          (fi = di.documentElement),
          (pi = Hi("div") || { style: {} }),
          Hi("div"),
          (Fi = Yi(Fi)),
          (Bi = Fi + "Origin"),
          (pi.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (vi = !!Yi("perspective")),
          (gi = ui.core.reverting),
          (hi = 1));
      },
      Ui = function (e) {
        var t,
          n = e.ownerSVGElement,
          i = Hi(
            "svg",
            (n && n.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
          ),
          r = e.cloneNode(!0);
        (r.style.display = "block"), i.appendChild(r), fi.appendChild(i);
        try {
          t = r.getBBox();
        } catch (e) {}
        return i.removeChild(r), fi.removeChild(i), t;
      },
      Ki = function (e, t) {
        for (var n = t.length; n--; )
          if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      },
      Qi = function (e) {
        var t, n;
        try {
          t = e.getBBox();
        } catch (i) {
          (t = Ui(e)), (n = 1);
        }
        return (
          (t && (t.width || t.height)) || n || (t = Ui(e)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +Ki(e, ["x", "cx", "x1"]) || 0,
                y: +Ki(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Zi = function (e) {
        return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Qi(e));
      },
      Ji = function (e, t) {
        if (t) {
          var n,
            i = e.style;
          t in yi && t !== Bi && (t = Fi),
            i.removeProperty
              ? (("ms" !== (n = t.substr(0, 2)) &&
                  "webkit" !== t.substr(0, 6)) ||
                  (t = "-" + t),
                i.removeProperty(
                  "--" === n ? t : t.replace(xi, "-$1").toLowerCase()
                ))
              : i.removeAttribute(t);
        }
      },
      er = function (e, t, n, i, r, s) {
        var o = new Kn(e._pt, t, n, 0, 1, s ? Ai : Pi);
        return (e._pt = o), (o.b = i), (o.e = r), e._props.push(n), o;
      },
      tr = { deg: 1, rad: 1, turn: 1 },
      nr = { grid: 1, flex: 1 },
      ir = function e(t, n, i, r) {
        var s,
          o,
          a,
          l,
          u = parseFloat(i) || 0,
          c = (i + "").trim().substr((u + "").length) || "px",
          d = pi.style,
          f = Ti.test(n),
          h = "svg" === t.tagName.toLowerCase(),
          p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
          m = "px" === r,
          g = "%" === r;
        if (r === c || !u || tr[r] || tr[c]) return u;
        if (
          ("px" !== c && !m && (u = e(t, n, i, "px")),
          (l = t.getCTM && Zi(t)),
          (g || "%" === c) && (yi[n] || ~n.indexOf("adius")))
        )
          return (
            (s = l ? t.getBBox()[f ? "width" : "height"] : t[p]),
            nt(g ? (u / s) * 100 : (u / 100) * s)
          );
        if (
          ((d[f ? "width" : "height"] = 100 + (m ? c : r)),
          (o =
            ("rem" !== r && ~n.indexOf("adius")) ||
            ("em" === r && t.appendChild && !h)
              ? t
              : t.parentNode),
          l && (o = (t.ownerSVGElement || {}).parentNode),
          (o && o !== di && o.appendChild) || (o = di.body),
          (a = o._gsap) &&
            g &&
            a.width &&
            f &&
            a.time === dn.time &&
            !a.uncache)
        )
          return nt((u / a.width) * 100);
        if (!g || ("height" !== n && "width" !== n))
          (g || "%" === c) &&
            !nr[Gi(o, "display")] &&
            (d.position = Gi(t, "position")),
            o === t && (d.position = "static"),
            o.appendChild(pi),
            (s = pi[p]),
            o.removeChild(pi),
            (d.position = "absolute");
        else {
          var v = t.style[n];
          (t.style[n] = 100 + r), (s = t[p]), v ? (t.style[n] = v) : Ji(t, n);
        }
        return (
          f && g && (((a = Je(o)).time = dn.time), (a.width = o[p])),
          nt(m ? (s * u) / 100 : s && u ? (100 / s) * u : 0)
        );
      },
      rr = function (e, t, n, i) {
        var r;
        return (
          hi || Xi(),
          t in Ci &&
            "transform" !== t &&
            ~(t = Ci[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          yi[t] && "transform" !== t
            ? ((r = mr(e, i)),
              (r =
                "transformOrigin" !== t
                  ? r[t]
                  : r.svg
                  ? r.origin
                  : gr(Gi(e, Bi)) + " " + r.zOrigin + "px"))
            : (!(r = e.style[t]) ||
                "auto" === r ||
                i ||
                ~(r + "").indexOf("calc(")) &&
              (r =
                (lr[t] && lr[t](e, t, n)) ||
                Gi(e, t) ||
                et(e, t) ||
                ("opacity" === t ? 1 : 0)),
          n && !~(r + "").trim().indexOf(" ") ? ir(e, t, r, n) + n : r
        );
      },
      sr = function (e, t, n, i) {
        if (!n || "none" === n) {
          var r = Yi(t, e, 1),
            s = r && Gi(e, r, 1);
          s && s !== n
            ? ((t = r), (n = s))
            : "borderColor" === t && (n = Gi(e, "borderTopColor"));
        }
        var o,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          m,
          g,
          v = new Kn(this._pt, e.style, t, 0, 1, Hn),
          y = 0,
          _ = 0;
        if (
          ((v.b = n),
          (v.e = i),
          (n += ""),
          "var(--" === (i += "").substring(0, 6) &&
            (i = Gi(e, i.substring(4, i.indexOf(")")))),
          "auto" === i &&
            ((d = e.style[t]),
            (e.style[t] = i),
            (i = Gi(e, t) || i),
            d ? (e.style[t] = d) : Ji(e, t)),
          cn((o = [n, i])),
          (i = o[1]),
          (l = (n = o[0]).match(Oe) || []),
          (i.match(Oe) || []).length)
        ) {
          for (; (a = Oe.exec(i)); )
            (f = a[0]),
              (p = i.substring(y, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                  (c = 1),
              f !== (d = l[_++] || "") &&
                ((u = parseFloat(d) || 0),
                (g = d.substr((u + "").length)),
                "=" === f.charAt(1) && (f = rt(u, f) + g),
                (h = parseFloat(f)),
                (m = f.substr((h + "").length)),
                (y = Oe.lastIndex - m.length),
                m ||
                  ((m = m || le.units[t] || g),
                  y === i.length && ((i += m), (v.e += m))),
                g !== m && (u = ir(e, t, d, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: p || 1 === _ ? p : ",",
                  s: u,
                  c: h - u,
                  m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                }));
          v.c = y < i.length ? i.substring(y, i.length) : "";
        } else v.r = "display" === t && "none" === i ? Ai : Pi;
        return Ae.test(i) && (v.e = 0), (this._pt = v), v;
      },
      or = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      ar = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            i,
            r,
            s = t.t,
            o = s.style,
            a = t.u,
            l = s._gsap;
          if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
          else
            for (r = (a = a.split(",")).length; --r > -1; )
              (n = a[r]),
                yi[n] && ((i = 1), (n = "transformOrigin" === n ? Bi : Fi)),
                Ji(s, n);
          i &&
            (Ji(s, Fi),
            l &&
              (l.svg && s.removeAttribute("transform"),
              (o.scale = o.rotate = o.translate = "none"),
              mr(s, 1),
              (l.uncache = 1),
              $i(o)));
        }
      },
      lr = {
        clearProps: function (e, t, n, i, r) {
          if ("isFromStart" !== r.data) {
            var s = (e._pt = new Kn(e._pt, t, n, 0, 0, ar));
            return (s.u = i), (s.pr = -10), (s.tween = r), e._props.push(n), 1;
          }
        },
      },
      ur = [1, 0, 0, 1, 0, 0],
      cr = {},
      dr = function (e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
      },
      fr = function (e) {
        var t = Gi(e, Fi);
        return dr(t) ? ur : t.substr(7).match(ke).map(nt);
      },
      hr = function (e, t) {
        var n,
          i,
          r,
          s,
          o = e._gsap || Je(e),
          a = e.style,
          l = fr(e);
        return o.svg && e.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (r = e.transform.baseVal.consolidate().matrix).a,
              r.b,
              r.c,
              r.d,
              r.e,
              r.f,
            ]).join(",")
            ? ur
            : l
          : (l !== ur ||
              e.offsetParent ||
              e === fi ||
              o.svg ||
              ((r = a.display),
              (a.display = "block"),
              ((n = e.parentNode) &&
                (e.offsetParent || e.getBoundingClientRect().width)) ||
                ((s = 1), (i = e.nextElementSibling), fi.appendChild(e)),
              (l = fr(e)),
              r ? (a.display = r) : Ji(e, "display"),
              s &&
                (i
                  ? n.insertBefore(e, i)
                  : n
                  ? n.appendChild(e)
                  : fi.removeChild(e))),
            t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      pr = function (e, t, n, i, r, s) {
        var o,
          a,
          l,
          u = e._gsap,
          c = r || hr(e, !0),
          d = u.xOrigin || 0,
          f = u.yOrigin || 0,
          h = u.xOffset || 0,
          p = u.yOffset || 0,
          m = c[0],
          g = c[1],
          v = c[2],
          y = c[3],
          _ = c[4],
          b = c[5],
          w = t.split(" "),
          x = parseFloat(w[0]) || 0,
          T = parseFloat(w[1]) || 0;
        n
          ? c !== ur &&
            (a = m * y - g * v) &&
            ((l = x * (-g / a) + T * (m / a) - (m * b - g * _) / a),
            (x = x * (y / a) + T * (-v / a) + (v * b - y * _) / a),
            (T = l))
          : ((x =
              (o = Qi(e)).x + (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
            (T =
              o.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * o.height : T))),
          i || (!1 !== i && u.smooth)
            ? ((_ = x - d),
              (b = T - f),
              (u.xOffset = h + (_ * m + b * v) - _),
              (u.yOffset = p + (_ * g + b * y) - b))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = x),
          (u.yOrigin = T),
          (u.smooth = !!i),
          (u.origin = t),
          (u.originIsAbsolute = !!n),
          (e.style[Bi] = "0px 0px"),
          s &&
            (er(s, u, "xOrigin", d, x),
            er(s, u, "yOrigin", f, T),
            er(s, u, "xOffset", h, u.xOffset),
            er(s, u, "yOffset", p, u.yOffset)),
          e.setAttribute("data-svg-origin", x + " " + T);
      },
      mr = function (e, t) {
        var n = e._gsap || new Sn(e);
        if ("x" in n && !t && !n.uncache) return n;
        var i,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          m,
          g,
          v,
          y,
          _,
          b,
          w,
          x,
          T,
          S,
          C,
          E,
          M,
          k,
          O,
          P,
          A,
          L,
          R,
          z,
          I = e.style,
          N = n.scaleX < 0,
          D = getComputedStyle(e),
          F = Gi(e, Bi) || "0";
        return (
          (i = r = s = l = u = c = d = f = h = 0),
          (o = a = 1),
          (n.svg = !(!e.getCTM || !Zi(e))),
          D.translate &&
            (("none" === D.translate &&
              "none" === D.scale &&
              "none" === D.rotate) ||
              (I[Fi] =
                ("none" !== D.translate
                  ? "translate3d(" +
                    (D.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== D.rotate ? "rotate(" + D.rotate + ") " : "") +
                ("none" !== D.scale
                  ? "scale(" + D.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== D[Fi] ? D[Fi] : "")),
            (I.scale = I.rotate = I.translate = "none")),
          (g = hr(e, n.svg)),
          n.svg &&
            (n.uncache
              ? ((M = e.getBBox()),
                (F = n.xOrigin - M.x + "px " + (n.yOrigin - M.y) + "px"),
                (E = ""))
              : (E = !t && e.getAttribute("data-svg-origin")),
            pr(e, E || F, !!E || n.originIsAbsolute, !1 !== n.smooth, g)),
          (p = n.xOrigin || 0),
          (m = n.yOrigin || 0),
          g !== ur &&
            ((b = g[0]),
            (w = g[1]),
            (x = g[2]),
            (T = g[3]),
            (i = S = g[4]),
            (r = C = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(b * b + w * w)),
                (a = Math.sqrt(T * T + x * x)),
                (l = b || w ? wi(w, b) * _i : 0),
                (d = x || T ? wi(x, T) * _i + l : 0) &&
                  (a *= Math.abs(Math.cos(d * bi))),
                n.svg &&
                  ((i -= p - (p * b + m * x)), (r -= m - (p * w + m * T))))
              : ((z = g[6]),
                (L = g[7]),
                (O = g[8]),
                (P = g[9]),
                (A = g[10]),
                (R = g[11]),
                (i = g[12]),
                (r = g[13]),
                (s = g[14]),
                (u = (v = wi(z, A)) * _i),
                v &&
                  ((E = S * (y = Math.cos(-v)) + O * (_ = Math.sin(-v))),
                  (M = C * y + P * _),
                  (k = z * y + A * _),
                  (O = S * -_ + O * y),
                  (P = C * -_ + P * y),
                  (A = z * -_ + A * y),
                  (R = L * -_ + R * y),
                  (S = E),
                  (C = M),
                  (z = k)),
                (c = (v = wi(-x, A)) * _i),
                v &&
                  ((y = Math.cos(-v)),
                  (R = T * (_ = Math.sin(-v)) + R * y),
                  (b = E = b * y - O * _),
                  (w = M = w * y - P * _),
                  (x = k = x * y - A * _)),
                (l = (v = wi(w, b)) * _i),
                v &&
                  ((E = b * (y = Math.cos(v)) + w * (_ = Math.sin(v))),
                  (M = S * y + C * _),
                  (w = w * y - b * _),
                  (C = C * y - S * _),
                  (b = E),
                  (S = M)),
                u &&
                  Math.abs(u) + Math.abs(l) > 359.9 &&
                  ((u = l = 0), (c = 180 - c)),
                (o = nt(Math.sqrt(b * b + w * w + x * x))),
                (a = nt(Math.sqrt(C * C + z * z))),
                (v = wi(S, C)),
                (d = Math.abs(v) > 2e-4 ? v * _i : 0),
                (h = R ? 1 / (R < 0 ? -R : R) : 0)),
            n.svg &&
              ((E = e.getAttribute("transform")),
              (n.forceCSS = e.setAttribute("transform", "") || !dr(Gi(e, Fi))),
              E && e.setAttribute("transform", E))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (N
              ? ((o *= -1),
                (d += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (d += d <= 0 ? 180 : -180))),
          (t = t || n.uncache),
          (n.x =
            i -
            ((n.xPercent =
              i &&
              ((!t && n.xPercent) ||
                (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            "px"),
          (n.y =
            r -
            ((n.yPercent =
              r &&
              ((!t && n.yPercent) ||
                (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            "px"),
          (n.z = s + "px"),
          (n.scaleX = nt(o)),
          (n.scaleY = nt(a)),
          (n.rotation = nt(l) + "deg"),
          (n.rotationX = nt(u) + "deg"),
          (n.rotationY = nt(c) + "deg"),
          (n.skewX = d + "deg"),
          (n.skewY = f + "deg"),
          (n.transformPerspective = h + "px"),
          (n.zOrigin = parseFloat(F.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
            (I[Bi] = gr(F)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = le.force3D),
          (n.renderTransform = n.svg ? br : vi ? _r : yr),
          (n.uncache = 0),
          n
        );
      },
      gr = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      vr = function (e, t, n) {
        var i = Ft(t);
        return nt(parseFloat(t) + parseFloat(ir(e, "x", n + "px", i))) + i;
      },
      yr = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          _r(e, t);
      },
      _r = function (e, t) {
        var n = t || this,
          i = n.xPercent,
          r = n.yPercent,
          s = n.x,
          o = n.y,
          a = n.z,
          l = n.rotation,
          u = n.rotationY,
          c = n.rotationX,
          d = n.skewX,
          f = n.skewY,
          h = n.scaleX,
          p = n.scaleY,
          m = n.transformPerspective,
          g = n.force3D,
          v = n.target,
          y = n.zOrigin,
          _ = "",
          b = ("auto" === g && e && 1 !== e) || !0 === g;
        if (y && ("0deg" !== c || "0deg" !== u)) {
          var w,
            x = parseFloat(u) * bi,
            T = Math.sin(x),
            S = Math.cos(x);
          (x = parseFloat(c) * bi),
            (w = Math.cos(x)),
            (s = vr(v, s, T * w * -y)),
            (o = vr(v, o, -Math.sin(x) * -y)),
            (a = vr(v, a, S * w * -y + y));
        }
        "0px" !== m && (_ += "perspective(" + m + ") "),
          (i || r) && (_ += "translate(" + i + "%, " + r + "%) "),
          (b || "0px" !== s || "0px" !== o || "0px" !== a) &&
            (_ +=
              "0px" !== a || b
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + ") "),
          "0deg" !== l && (_ += "rotate(" + l + ") "),
          "0deg" !== u && (_ += "rotateY(" + u + ") "),
          "0deg" !== c && (_ += "rotateX(" + c + ") "),
          ("0deg" === d && "0deg" === f) ||
            (_ += "skew(" + d + ", " + f + ") "),
          (1 === h && 1 === p) || (_ += "scale(" + h + ", " + p + ") "),
          (v.style[Fi] = _ || "translate(0, 0)");
      },
      br = function (e, t) {
        var n,
          i,
          r,
          s,
          o,
          a = t || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          d = a.y,
          f = a.rotation,
          h = a.skewX,
          p = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          _ = a.yOrigin,
          b = a.xOffset,
          w = a.yOffset,
          x = a.forceCSS,
          T = parseFloat(c),
          S = parseFloat(d);
        (f = parseFloat(f)),
          (h = parseFloat(h)),
          (p = parseFloat(p)) && ((h += p = parseFloat(p)), (f += p)),
          f || h
            ? ((f *= bi),
              (h *= bi),
              (n = Math.cos(f) * m),
              (i = Math.sin(f) * m),
              (r = Math.sin(f - h) * -g),
              (s = Math.cos(f - h) * g),
              h &&
                ((p *= bi),
                (o = Math.tan(h - p)),
                (r *= o = Math.sqrt(1 + o * o)),
                (s *= o),
                p &&
                  ((o = Math.tan(p)),
                  (n *= o = Math.sqrt(1 + o * o)),
                  (i *= o))),
              (n = nt(n)),
              (i = nt(i)),
              (r = nt(r)),
              (s = nt(s)))
            : ((n = m), (s = g), (i = r = 0)),
          ((T && !~(c + "").indexOf("px")) ||
            (S && !~(d + "").indexOf("px"))) &&
            ((T = ir(v, "x", c, "px")), (S = ir(v, "y", d, "px"))),
          (y || _ || b || w) &&
            ((T = nt(T + y - (y * n + _ * r) + b)),
            (S = nt(S + _ - (y * i + _ * s) + w))),
          (l || u) &&
            ((o = v.getBBox()),
            (T = nt(T + (l / 100) * o.width)),
            (S = nt(S + (u / 100) * o.height))),
          (o =
            "matrix(" +
            n +
            "," +
            i +
            "," +
            r +
            "," +
            s +
            "," +
            T +
            "," +
            S +
            ")"),
          v.setAttribute("transform", o),
          x && (v.style[Fi] = o);
      },
      wr = function (e, t, n, i, r) {
        var s,
          o,
          a = ve(r),
          l = parseFloat(r) * (a && ~r.indexOf("rad") ? _i : 1) - i,
          u = i + l + "deg";
        return (
          a &&
            ("short" === (s = r.split("_")[1]) &&
              (l %= 360) != l % 180 &&
              (l += l < 0 ? 360 : -360),
            "cw" === s && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : "ccw" === s &&
                l > 0 &&
                (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (e._pt = o = new Kn(e._pt, t, n, i, l, Mi)),
          (o.e = u),
          (o.u = "deg"),
          e._props.push(n),
          o
        );
      },
      xr = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      Tr = function (e, t, n) {
        var i,
          r,
          s,
          o,
          a,
          l,
          u,
          c = xr({}, n._gsap),
          d = n.style;
        for (r in (c.svg
          ? ((s = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (d[Fi] = t),
            (i = mr(n, 1)),
            Ji(n, Fi),
            n.setAttribute("transform", s))
          : ((s = getComputedStyle(n)[Fi]),
            (d[Fi] = t),
            (i = mr(n, 1)),
            (d[Fi] = s)),
        yi))
          (s = c[r]) !== (o = i[r]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
            ((a = Ft(s) !== (u = Ft(o)) ? ir(n, r, s, u) : parseFloat(s)),
            (l = parseFloat(o)),
            (e._pt = new Kn(e._pt, i, r, a, l - a, Ei)),
            (e._pt.u = u || 0),
            e._props.push(r));
        xr(i, c);
      };
    tt("padding,margin,Width,Radius", function (e, t) {
      var n = "Top",
        i = "Right",
        r = "Bottom",
        s = "Left",
        o = (t < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(function (
          n
        ) {
          return t < 2 ? e + n : "border" + n + e;
        });
      lr[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
        var s, a;
        if (arguments.length < 4)
          return (
            (s = o.map(function (t) {
              return rr(e, t, n);
            })),
            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
          );
        (s = (i + "").split(" ")),
          (a = {}),
          o.forEach(function (e, t) {
            return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
          }),
          e.init(t, a, r);
      };
    });
    var Sr,
      Cr,
      Er = {
        name: "css",
        register: Xi,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, i, r) {
          var s,
            o,
            a,
            l,
            u,
            c,
            d,
            f,
            h,
            p,
            m,
            g,
            v,
            y,
            _,
            b,
            w,
            x,
            T,
            S,
            C = this._props,
            E = e.style,
            M = n.vars.startAt;
          for (d in (hi || Xi(),
          (this.styles = this.styles || qi(e)),
          (b = this.styles.props),
          (this.tween = n),
          t))
            if (
              "autoRound" !== d &&
              ((o = t[d]), !Ye[d] || !Pn(d, t, n, i, e, r))
            )
              if (
                ((u = typeof o),
                (c = lr[d]),
                "function" === u && (u = typeof (o = o.call(n, i, e, r))),
                "string" === u && ~o.indexOf("random(") && (o = Ut(o)),
                c)
              )
                c(this, e, d, o, n) && (_ = 1);
              else if ("--" === d.substr(0, 2))
                (s = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (o += ""),
                  (ln.lastIndex = 0),
                  ln.test(s) || ((f = Ft(s)), (h = Ft(o))),
                  h ? f !== h && (s = ir(e, d, s, h) + h) : f && (o += f),
                  this.add(E, "setProperty", s, o, i, r, 0, 0, d),
                  C.push(d),
                  b.push(d, 0, E[d]);
              else if ("undefined" !== u) {
                if (
                  (M && d in M
                    ? ((s =
                        "function" == typeof M[d]
                          ? M[d].call(n, i, e, r)
                          : M[d]),
                      ve(s) && ~s.indexOf("random(") && (s = Ut(s)),
                      Ft(s + "") ||
                        "auto" === s ||
                        (s += le.units[d] || Ft(rr(e, d)) || ""),
                      "=" === (s + "").charAt(1) && (s = rr(e, d)))
                    : (s = rr(e, d)),
                  (l = parseFloat(s)),
                  (p =
                    "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (a = parseFloat(o)),
                  d in Ci &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === rr(e, "visibility") &&
                        a &&
                        (l = 0),
                      b.push("visibility", 0, E.visibility),
                      er(
                        this,
                        E,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = Ci[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (m = d in yi))
                )
                  if (
                    (this.styles.save(d),
                    "string" === u &&
                      "var(--" === o.substring(0, 6) &&
                      ((o = Gi(e, o.substring(4, o.indexOf(")")))),
                      (a = parseFloat(o))),
                    g ||
                      (((v = e._gsap).renderTransform && !t.parseTransform) ||
                        mr(e, t.parseTransform),
                      (y = !1 !== t.smoothOrigin && v.smooth),
                      ((g = this._pt =
                        new Kn(
                          this._pt,
                          E,
                          Fi,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new Kn(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      (p ? rt(v.scaleY, p + a) : a) - v.scaleY || 0,
                      Ei
                    )),
                      (this._pt.u = 0),
                      C.push("scaleY", d),
                      (d += "X");
                  else {
                    if ("transformOrigin" === d) {
                      b.push(Bi, 0, E[Bi]),
                        (x = void 0),
                        (T = void 0),
                        (S = void 0),
                        (T = (x = (w = o).split(" "))[0]),
                        (S = x[1] || "50%"),
                        ("top" !== T &&
                          "bottom" !== T &&
                          "left" !== S &&
                          "right" !== S) ||
                          ((w = T), (T = S), (S = w)),
                        (x[0] = or[T] || T),
                        (x[1] = or[S] || S),
                        (o = x.join(" ")),
                        v.svg
                          ? pr(e, o, 0, y, 0, this)
                          : ((h = parseFloat(o.split(" ")[2]) || 0) !==
                              v.zOrigin && er(this, v, "zOrigin", v.zOrigin, h),
                            er(this, E, d, gr(s), gr(o)));
                      continue;
                    }
                    if ("svgOrigin" === d) {
                      pr(e, o, 1, y, 0, this);
                      continue;
                    }
                    if (d in cr) {
                      wr(this, v, d, l, p ? rt(l, p + o) : o);
                      continue;
                    }
                    if ("smoothOrigin" === d) {
                      er(this, v, "smooth", v.smooth, o);
                      continue;
                    }
                    if ("force3D" === d) {
                      v[d] = o;
                      continue;
                    }
                    if ("transform" === d) {
                      Tr(this, o, e);
                      continue;
                    }
                  }
                else d in E || (d = Yi(d) || d);
                if (
                  m ||
                  ((a || 0 === a) && (l || 0 === l) && !Si.test(o) && d in E)
                )
                  a || (a = 0),
                    (f = (s + "").substr((l + "").length)) !==
                      (h = Ft(o) || (d in le.units ? le.units[d] : f)) &&
                      (l = ir(e, d, s, h)),
                    (this._pt = new Kn(
                      this._pt,
                      m ? v : E,
                      d,
                      l,
                      (p ? rt(l, p + a) : a) - l,
                      m || ("px" !== h && "zIndex" !== d) || !1 === t.autoRound
                        ? Ei
                        : Oi
                    )),
                    (this._pt.u = h || 0),
                    f !== h &&
                      "%" !== h &&
                      ((this._pt.b = s), (this._pt.r = ki));
                else if (d in E) sr.call(this, e, d, s, p ? p + o : o);
                else if (d in e) this.add(e, d, s || e[d], p ? p + o : o, i, r);
                else if ("parseTransform" !== d) {
                  De(d, o);
                  continue;
                }
                m ||
                  (d in E
                    ? b.push(d, 0, E[d])
                    : "function" == typeof e[d]
                    ? b.push(d, 2, e[d]())
                    : b.push(d, 1, s || e[d])),
                  C.push(d);
              }
          _ && Un(this);
        },
        render: function (e, t) {
          if (t.tween._time || !gi())
            for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
          else t.styles.revert();
        },
        get: rr,
        aliases: Ci,
        getSetter: function (e, t, n) {
          var i = Ci[t];
          return (
            i && i.indexOf(",") < 0 && (t = i),
            t in yi && t !== Bi && (e._gsap.x || rr(e, "x"))
              ? n && mi === n
                ? "scale" === t
                  ? Ii
                  : zi
                : (mi = n || {}) && ("scale" === t ? Ni : Di)
              : e.style && !be(e.style[t])
              ? Li
              : ~t.indexOf("-")
              ? Ri
              : $n(e, t)
          );
        },
        core: { _removeProperty: Ji, _getMatrix: hr },
      };
    (ui.utils.checkPrefix = Yi),
      (ui.core.getStyleSaver = qi),
      (Cr = tt(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (Sr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          yi[e] = 1;
        }
      )),
      tt(Sr, function (e) {
        (le.units[e] = "deg"), (cr[e] = 1);
      }),
      (Ci[Cr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Sr),
      tt(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          Ci[t[1]] = Cr[t[0]];
        }
      ),
      tt(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          le.units[e] = "px";
        }
      ),
      ui.registerPlugin(Er);
    var Mr = ui.registerPlugin(Er) || ui,
      kr = Mr.core.Tween;
    function Or(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var Pr,
      Ar,
      Lr,
      Rr,
      zr,
      Ir,
      Nr,
      Dr,
      Fr,
      Br,
      jr,
      $r,
      Wr,
      qr = function () {
        return (
          Pr ||
          ("undefined" != typeof window &&
            (Pr = window.gsap) &&
            Pr.registerPlugin &&
            Pr)
        );
      },
      Hr = 1,
      Gr = [],
      Vr = [],
      Yr = [],
      Xr = Date.now,
      Ur = function (e, t) {
        return t;
      },
      Kr = function (e, t) {
        return ~Yr.indexOf(e) && Yr[Yr.indexOf(e) + 1][t];
      },
      Qr = function (e) {
        return !!~Br.indexOf(e);
      },
      Zr = function (e, t, n, i, r) {
        return e.addEventListener(t, n, { passive: !1 !== i, capture: !!r });
      },
      Jr = function (e, t, n, i) {
        return e.removeEventListener(t, n, !!i);
      },
      es = function () {
        return (jr && jr.isPressed) || Vr.cache++;
      },
      ts = function (e, t) {
        var n = function n(i) {
          if (i || 0 === i) {
            Hr && (Lr.history.scrollRestoration = "manual");
            var r = jr && jr.isPressed;
            (i = n.v = Math.round(i) || (jr && jr.iOS ? 1 : 0)),
              e(i),
              (n.cacheID = Vr.cache),
              r && Ur("ss", i);
          } else
            (t || Vr.cache !== n.cacheID || Ur("ref")) &&
              ((n.cacheID = Vr.cache), (n.v = e()));
          return n.v + n.offset;
        };
        return (n.offset = 0), e && n;
      },
      ns = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ts(function (e) {
          return arguments.length
            ? Lr.scrollTo(e, is.sc())
            : Lr.pageXOffset ||
                Rr.scrollLeft ||
                zr.scrollLeft ||
                Ir.scrollLeft ||
                0;
        }),
      },
      is = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ns,
        sc: ts(function (e) {
          return arguments.length
            ? Lr.scrollTo(ns.sc(), e)
            : Lr.pageYOffset ||
                Rr.scrollTop ||
                zr.scrollTop ||
                Ir.scrollTop ||
                0;
        }),
      },
      rs = function (e, t) {
        return (
          ((t && t._ctx && t._ctx.selector) || Pr.utils.toArray)(e)[0] ||
          ("string" == typeof e && !1 !== Pr.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      ss = function (e, t) {
        var n = t.s,
          i = t.sc;
        Qr(e) && (e = Rr.scrollingElement || zr);
        var r = Vr.indexOf(e),
          s = i === is.sc ? 1 : 2;
        !~r && (r = Vr.push(e) - 1), Vr[r + s] || Zr(e, "scroll", es);
        var o = Vr[r + s],
          a =
            o ||
            (Vr[r + s] =
              ts(Kr(e, n), !0) ||
              (Qr(e)
                ? i
                : ts(function (t) {
                    return arguments.length ? (e[n] = t) : e[n];
                  })));
        return (
          (a.target = e),
          o || (a.smooth = "smooth" === Pr.getProperty(e, "scrollBehavior")),
          a
        );
      },
      os = function (e, t, n) {
        var i = e,
          r = e,
          s = Xr(),
          o = s,
          a = t || 50,
          l = Math.max(500, 3 * a),
          u = function (e, t) {
            var l = Xr();
            t || l - s > a
              ? ((r = i), (i = e), (o = s), (s = l))
              : n
              ? (i += e)
              : (i = r + ((e - r) / (l - o)) * (s - o));
          };
        return {
          update: u,
          reset: function () {
            (r = i = n ? 0 : i), (o = s = 0);
          },
          getVelocity: function (e) {
            var t = o,
              a = r,
              c = Xr();
            return (
              (e || 0 === e) && e !== i && u(e),
              s === o || c - o > l
                ? 0
                : ((i + (n ? a : -a)) / ((n ? c : s) - t)) * 1e3
            );
          },
        };
      },
      as = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      ls = function (e) {
        var t = Math.max.apply(Math, e),
          n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n;
      },
      us = function () {
        var e, t, n, i;
        (Fr = Pr.core.globals().ScrollTrigger) &&
          Fr.core &&
          ((e = Fr.core),
          (t = e.bridge || {}),
          (n = e._scrollers),
          (i = e._proxies),
          n.push.apply(n, Vr),
          i.push.apply(i, Yr),
          (Vr = n),
          (Yr = i),
          (Ur = function (e, n) {
            return t[e](n);
          }));
      },
      cs = function (e) {
        return (
          (Pr = e || qr()),
          !Ar &&
            Pr &&
            "undefined" != typeof document &&
            document.body &&
            ((Lr = window),
            (Rr = document),
            (zr = Rr.documentElement),
            (Ir = Rr.body),
            (Br = [Lr, Rr, zr, Ir]),
            Pr.utils.clamp,
            (Wr = Pr.core.context || function () {}),
            (Dr = "onpointerenter" in Ir ? "pointer" : "mouse"),
            (Nr = ds.isTouch =
              Lr.matchMedia &&
              Lr.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in Lr ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            ($r = ds.eventTypes =
              (
                "ontouchstart" in zr
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in zr
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (Hr = 0);
            }, 500),
            us(),
            (Ar = 1)),
          Ar
        );
      };
    (ns.op = is), (Vr.cache = 0);
    var ds = (function () {
      function e(e) {
        this.init(e);
      }
      var t, n;
      return (
        (e.prototype.init = function (e) {
          Ar || cs(Pr) || console.warn("Please gsap.registerPlugin(Observer)"),
            Fr || us();
          var t = e.tolerance,
            n = e.dragMinimum,
            i = e.type,
            r = e.target,
            s = e.lineHeight,
            o = e.debounce,
            a = e.preventDefault,
            l = e.onStop,
            u = e.onStopDelay,
            c = e.ignore,
            d = e.wheelSpeed,
            f = e.event,
            h = e.onDragStart,
            p = e.onDragEnd,
            m = e.onDrag,
            g = e.onPress,
            v = e.onRelease,
            y = e.onRight,
            _ = e.onLeft,
            b = e.onUp,
            w = e.onDown,
            x = e.onChangeX,
            T = e.onChangeY,
            S = e.onChange,
            C = e.onToggleX,
            E = e.onToggleY,
            M = e.onHover,
            k = e.onHoverEnd,
            O = e.onMove,
            P = e.ignoreCheck,
            A = e.isNormalizer,
            L = e.onGestureStart,
            R = e.onGestureEnd,
            z = e.onWheel,
            I = e.onEnable,
            N = e.onDisable,
            D = e.onClick,
            F = e.scrollSpeed,
            B = e.capture,
            j = e.allowClicks,
            $ = e.lockAxis,
            W = e.onLockAxis;
          (this.target = r = rs(r) || zr),
            (this.vars = e),
            c && (c = Pr.utils.toArray(c)),
            (t = t || 1e-9),
            (n = n || 0),
            (d = d || 1),
            (F = F || 1),
            (i = i || "wheel,touch,pointer"),
            (o = !1 !== o),
            s || (s = parseFloat(Lr.getComputedStyle(Ir).lineHeight) || 22);
          var q,
            H,
            G,
            V,
            Y,
            X,
            U,
            K = this,
            Q = 0,
            Z = 0,
            J = e.passive || (!a && !1 !== e.passive),
            ee = ss(r, ns),
            te = ss(r, is),
            ne = ee(),
            ie = te(),
            re =
              ~i.indexOf("touch") &&
              !~i.indexOf("pointer") &&
              "pointerdown" === $r[0],
            se = Qr(r),
            oe = r.ownerDocument || Rr,
            ae = [0, 0, 0],
            le = [0, 0, 0],
            ue = 0,
            ce = function () {
              return (ue = Xr());
            },
            de = function (e, t) {
              return (
                ((K.event = e) &&
                  c &&
                  (function (e, t) {
                    for (var n = t.length; n--; )
                      if (t[n] === e || t[n].contains(e)) return !0;
                    return !1;
                  })(e.target, c)) ||
                (t && re && "touch" !== e.pointerType) ||
                (P && P(e, t))
              );
            },
            fe = function () {
              var e = (K.deltaX = ls(ae)),
                n = (K.deltaY = ls(le)),
                i = Math.abs(e) >= t,
                r = Math.abs(n) >= t;
              S && (i || r) && S(K, e, n, ae, le),
                i &&
                  (y && K.deltaX > 0 && y(K),
                  _ && K.deltaX < 0 && _(K),
                  x && x(K),
                  C && K.deltaX < 0 != Q < 0 && C(K),
                  (Q = K.deltaX),
                  (ae[0] = ae[1] = ae[2] = 0)),
                r &&
                  (w && K.deltaY > 0 && w(K),
                  b && K.deltaY < 0 && b(K),
                  T && T(K),
                  E && K.deltaY < 0 != Z < 0 && E(K),
                  (Z = K.deltaY),
                  (le[0] = le[1] = le[2] = 0)),
                (V || G) &&
                  (O && O(K),
                  G && (h && 1 === G && h(K), m && m(K), (G = 0)),
                  (V = !1)),
                X && !(X = !1) && W && W(K),
                Y && (z(K), (Y = !1)),
                (q = 0);
            },
            he = function (e, t, n) {
              (ae[n] += e),
                (le[n] += t),
                K._vx.update(e),
                K._vy.update(t),
                o ? q || (q = requestAnimationFrame(fe)) : fe();
            },
            pe = function (e, t) {
              $ &&
                !U &&
                ((K.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                (X = !0)),
                "y" !== U && ((ae[2] += e), K._vx.update(e, !0)),
                "x" !== U && ((le[2] += t), K._vy.update(t, !0)),
                o ? q || (q = requestAnimationFrame(fe)) : fe();
            },
            me = function (e) {
              if (!de(e, 1)) {
                var t = (e = as(e, a)).clientX,
                  i = e.clientY,
                  r = t - K.x,
                  s = i - K.y,
                  o = K.isDragging;
                (K.x = t),
                  (K.y = i),
                  (o ||
                    ((r || s) &&
                      (Math.abs(K.startX - t) >= n ||
                        Math.abs(K.startY - i) >= n))) &&
                    ((G = o ? 2 : 1), o || (K.isDragging = !0), pe(r, s));
              }
            },
            ge = (K.onPress = function (e) {
              de(e, 1) ||
                (e && e.button) ||
                ((K.axis = U = null),
                H.pause(),
                (K.isPressed = !0),
                (e = as(e)),
                (Q = Z = 0),
                (K.startX = K.x = e.clientX),
                (K.startY = K.y = e.clientY),
                K._vx.reset(),
                K._vy.reset(),
                Zr(A ? r : oe, $r[1], me, J, !0),
                (K.deltaX = K.deltaY = 0),
                g && g(K));
            }),
            ve = (K.onRelease = function (e) {
              if (!de(e, 1)) {
                Jr(A ? r : oe, $r[1], me, !0);
                var t = !isNaN(K.y - K.startY),
                  n = K.isDragging,
                  i =
                    n &&
                    (Math.abs(K.x - K.startX) > 3 ||
                      Math.abs(K.y - K.startY) > 3),
                  s = as(e);
                !i &&
                  t &&
                  (K._vx.reset(),
                  K._vy.reset(),
                  a &&
                    j &&
                    Pr.delayedCall(0.08, function () {
                      if (Xr() - ue > 300 && !e.defaultPrevented)
                        if (e.target.click) e.target.click();
                        else if (oe.createEvent) {
                          var t = oe.createEvent("MouseEvents");
                          t.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            Lr,
                            1,
                            s.screenX,
                            s.screenY,
                            s.clientX,
                            s.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            e.target.dispatchEvent(t);
                        }
                    })),
                  (K.isDragging = K.isGesturing = K.isPressed = !1),
                  l && n && !A && H.restart(!0),
                  G && fe(),
                  p && n && p(K),
                  v && v(K, i);
              }
            }),
            ye = function (e) {
              return (
                e.touches &&
                e.touches.length > 1 &&
                (K.isGesturing = !0) &&
                L(e, K.isDragging)
              );
            },
            _e = function () {
              return (K.isGesturing = !1) || R(K);
            },
            be = function (e) {
              if (!de(e)) {
                var t = ee(),
                  n = te();
                he((t - ne) * F, (n - ie) * F, 1),
                  (ne = t),
                  (ie = n),
                  l && H.restart(!0);
              }
            },
            we = function (e) {
              if (!de(e)) {
                (e = as(e, a)), z && (Y = !0);
                var t =
                  (1 === e.deltaMode
                    ? s
                    : 2 === e.deltaMode
                    ? Lr.innerHeight
                    : 1) * d;
                he(e.deltaX * t, e.deltaY * t, 0), l && !A && H.restart(!0);
              }
            },
            xe = function (e) {
              if (!de(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  i = t - K.x,
                  r = n - K.y;
                (K.x = t),
                  (K.y = n),
                  (V = !0),
                  l && H.restart(!0),
                  (i || r) && pe(i, r);
              }
            },
            Te = function (e) {
              (K.event = e), M(K);
            },
            Se = function (e) {
              (K.event = e), k(K);
            },
            Ce = function (e) {
              return de(e) || (as(e, a) && D(K));
            };
          (H = K._dc =
            Pr.delayedCall(u || 0.25, function () {
              K._vx.reset(), K._vy.reset(), H.pause(), l && l(K);
            }).pause()),
            (K.deltaX = K.deltaY = 0),
            (K._vx = os(0, 50, !0)),
            (K._vy = os(0, 50, !0)),
            (K.scrollX = ee),
            (K.scrollY = te),
            (K.isDragging = K.isGesturing = K.isPressed = !1),
            Wr(this),
            (K.enable = function (e) {
              return (
                K.isEnabled ||
                  (Zr(se ? oe : r, "scroll", es),
                  i.indexOf("scroll") >= 0 &&
                    Zr(se ? oe : r, "scroll", be, J, B),
                  i.indexOf("wheel") >= 0 && Zr(r, "wheel", we, J, B),
                  ((i.indexOf("touch") >= 0 && Nr) ||
                    i.indexOf("pointer") >= 0) &&
                    (Zr(r, $r[0], ge, J, B),
                    Zr(oe, $r[2], ve),
                    Zr(oe, $r[3], ve),
                    j && Zr(r, "click", ce, !0, !0),
                    D && Zr(r, "click", Ce),
                    L && Zr(oe, "gesturestart", ye),
                    R && Zr(oe, "gestureend", _e),
                    M && Zr(r, Dr + "enter", Te),
                    k && Zr(r, Dr + "leave", Se),
                    O && Zr(r, Dr + "move", xe)),
                  (K.isEnabled = !0),
                  (K.isDragging = K.isGesturing = K.isPressed = V = G = !1),
                  K._vx.reset(),
                  K._vy.reset(),
                  (ne = ee()),
                  (ie = te()),
                  e && e.type && ge(e),
                  I && I(K)),
                K
              );
            }),
            (K.disable = function () {
              K.isEnabled &&
                (Gr.filter(function (e) {
                  return e !== K && Qr(e.target);
                }).length || Jr(se ? oe : r, "scroll", es),
                K.isPressed &&
                  (K._vx.reset(), K._vy.reset(), Jr(A ? r : oe, $r[1], me, !0)),
                Jr(se ? oe : r, "scroll", be, B),
                Jr(r, "wheel", we, B),
                Jr(r, $r[0], ge, B),
                Jr(oe, $r[2], ve),
                Jr(oe, $r[3], ve),
                Jr(r, "click", ce, !0),
                Jr(r, "click", Ce),
                Jr(oe, "gesturestart", ye),
                Jr(oe, "gestureend", _e),
                Jr(r, Dr + "enter", Te),
                Jr(r, Dr + "leave", Se),
                Jr(r, Dr + "move", xe),
                (K.isEnabled = K.isPressed = K.isDragging = !1),
                N && N(K));
            }),
            (K.kill = K.revert =
              function () {
                K.disable();
                var e = Gr.indexOf(K);
                e >= 0 && Gr.splice(e, 1), jr === K && (jr = 0);
              }),
            Gr.push(K),
            A && Qr(r) && (jr = K),
            K.enable(f);
        }),
        (t = e),
        (n = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && Or(t.prototype, n),
        e
      );
    })();
    (ds.version = "3.13.0"),
      (ds.create = function (e) {
        return new ds(e);
      }),
      (ds.register = cs),
      (ds.getAll = function () {
        return Gr.slice();
      }),
      (ds.getById = function (e) {
        return Gr.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      qr() && Pr.registerPlugin(ds);
    var fs,
      hs,
      ps,
      ms,
      gs,
      vs,
      ys,
      _s,
      bs,
      ws,
      xs,
      Ts,
      Ss,
      Cs,
      Es,
      Ms,
      ks,
      Os,
      Ps,
      As,
      Ls,
      Rs,
      zs,
      Is,
      Ns,
      Ds,
      Fs,
      Bs,
      js,
      $s,
      Ws,
      qs,
      Hs,
      Gs,
      Vs,
      Ys,
      Xs,
      Us,
      Ks = 1,
      Qs = Date.now,
      Zs = Qs(),
      Js = 0,
      eo = 0,
      to = function (e, t, n) {
        var i = mo(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return (n["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
      },
      no = function (e, t) {
        return !t || (mo(e) && "clamp(" === e.substr(0, 6))
          ? e
          : "clamp(" + e + ")";
      },
      io = function () {
        return (Cs = 1);
      },
      ro = function () {
        return (Cs = 0);
      },
      so = function (e) {
        return e;
      },
      oo = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      ao = function () {
        return "undefined" != typeof window;
      },
      lo = function () {
        return fs || (ao() && (fs = window.gsap) && fs.registerPlugin && fs);
      },
      uo = function (e) {
        return !!~ys.indexOf(e);
      },
      co = function (e) {
        return (
          ("Height" === e ? Ws : ps["inner" + e]) ||
          gs["client" + e] ||
          vs["client" + e]
        );
      },
      fo = function (e) {
        return (
          Kr(e, "getBoundingClientRect") ||
          (uo(e)
            ? function () {
                return (ha.width = ps.innerWidth), (ha.height = Ws), ha;
              }
            : function () {
                return Eo(e);
              })
        );
      },
      ho = function (e, t) {
        var n = t.s,
          i = t.d2,
          r = t.d,
          s = t.a;
        return Math.max(
          0,
          (n = "scroll" + i) && (s = Kr(e, n))
            ? s() - fo(e)()[r]
            : uo(e)
            ? (gs[n] || vs[n]) - co(i)
            : e[n] - e["offset" + i]
        );
      },
      po = function (e, t) {
        for (var n = 0; n < Ps.length; n += 3)
          (!t || ~t.indexOf(Ps[n + 1])) && e(Ps[n], Ps[n + 1], Ps[n + 2]);
      },
      mo = function (e) {
        return "string" == typeof e;
      },
      go = function (e) {
        return "function" == typeof e;
      },
      vo = function (e) {
        return "number" == typeof e;
      },
      yo = function (e) {
        return "object" == typeof e;
      },
      _o = function (e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause();
      },
      bo = function (e, t) {
        if (e.enabled) {
          var n = e._ctx
            ? e._ctx.add(function () {
                return t(e);
              })
            : t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        }
      },
      wo = Math.abs,
      xo = "padding",
      To = "px",
      So = function (e) {
        return ps.getComputedStyle(e);
      },
      Co = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      Eo = function (e, t) {
        var n =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== So(e)[Es] &&
            fs
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          i = e.getBoundingClientRect();
        return n && n.progress(0).kill(), i;
      },
      Mo = function (e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0;
      },
      ko = function (e) {
        var t,
          n = [],
          i = e.labels,
          r = e.duration();
        for (t in i) n.push(i[t] / r);
        return n;
      },
      Oo = function (e) {
        var t = fs.utils.snap(e),
          n =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return n
          ? function (e, i, r) {
              var s;
              if ((void 0 === r && (r = 0.001), !i)) return t(e);
              if (i > 0) {
                for (e -= r, s = 0; s < n.length; s++)
                  if (n[s] >= e) return n[s];
                return n[s - 1];
              }
              for (s = n.length, e += r; s--; ) if (n[s] <= e) return n[s];
              return n[0];
            }
          : function (n, i, r) {
              void 0 === r && (r = 0.001);
              var s = t(n);
              return !i || Math.abs(s - n) < r || s - n < 0 == i < 0
                ? s
                : t(i < 0 ? n - e : n + e);
            };
      },
      Po = function (e, t, n, i) {
        return n.split(",").forEach(function (n) {
          return e(t, n, i);
        });
      },
      Ao = function (e, t, n, i, r) {
        return e.addEventListener(t, n, { passive: !i, capture: !!r });
      },
      Lo = function (e, t, n, i) {
        return e.removeEventListener(t, n, !!i);
      },
      Ro = function (e, t, n) {
        (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n));
      },
      zo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      Io = { toggleActions: "play", anticipatePin: 0 },
      No = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      Do = function (e, t) {
        if (mo(e)) {
          var n = e.indexOf("="),
            i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n &&
            (e.indexOf("%") > n && (i *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              i +
              (e in No
                ? No[e] * t
                : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      Fo = function (e, t, n, i, r, s, o, a) {
        var l = r.startColor,
          u = r.endColor,
          c = r.fontSize,
          d = r.indent,
          f = r.fontWeight,
          h = ms.createElement("div"),
          p = uo(n) || "fixed" === Kr(n, "pinType"),
          m = -1 !== e.indexOf("scroller"),
          g = p ? vs : n,
          v = -1 !== e.indexOf("start"),
          y = v ? l : u,
          _ =
            "border-color:" +
            y +
            ";font-size:" +
            c +
            ";color:" +
            y +
            ";font-weight:" +
            f +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (_ += "position:" + ((m || a) && p ? "fixed;" : "absolute;")),
          (m || a || !p) &&
            (_ +=
              (i === is ? "right" : "bottom") +
              ":" +
              (s + parseFloat(d)) +
              "px;"),
          o &&
            (_ +=
              "box-sizing:border-box;text-align:left;width:" +
              o.offsetWidth +
              "px;"),
          (h._isStart = v),
          h.setAttribute(
            "class",
            "gsap-marker-" + e + (t ? " marker-" + t : "")
          ),
          (h.style.cssText = _),
          (h.innerText = t || 0 === t ? e + "-" + t : e),
          g.children[0] ? g.insertBefore(h, g.children[0]) : g.appendChild(h),
          (h._offset = h["offset" + i.op.d2]),
          Bo(h, 0, i, v),
          h
        );
      },
      Bo = function (e, t, n, i) {
        var r = { display: "block" },
          s = n[i ? "os2" : "p2"],
          o = n[i ? "p2" : "os2"];
        (e._isFlipped = i),
          (r[n.a + "Percent"] = i ? -100 : 0),
          (r[n.a] = i ? "1px" : 0),
          (r["border" + s + "Width"] = 1),
          (r["border" + o + "Width"] = 0),
          (r[n.p] = t + "px"),
          fs.set(e, r);
      },
      jo = [],
      $o = {},
      Wo = function () {
        return Qs() - Js > 34 && (Vs || (Vs = requestAnimationFrame(oa)));
      },
      qo = function () {
        (!zs || !zs.isPressed || zs.startX > vs.clientWidth) &&
          (Vr.cache++,
          zs ? Vs || (Vs = requestAnimationFrame(oa)) : oa(),
          Js || Uo("scrollStart"),
          (Js = Qs()));
      },
      Ho = function () {
        (Ds = ps.innerWidth), (Ns = ps.innerHeight);
      },
      Go = function (e) {
        Vr.cache++,
          (!0 === e ||
            (!Ss &&
              !Rs &&
              !ms.fullscreenElement &&
              !ms.webkitFullscreenElement &&
              (!Is ||
                Ds !== ps.innerWidth ||
                Math.abs(ps.innerHeight - Ns) > 0.25 * ps.innerHeight))) &&
            _s.restart(!0);
      },
      Vo = {},
      Yo = [],
      Xo = function e() {
        return Lo(ba, "scrollEnd", e) || ia(!0);
      },
      Uo = function (e) {
        return (
          (Vo[e] &&
            Vo[e].map(function (e) {
              return e();
            })) ||
          Yo
        );
      },
      Ko = [],
      Qo = function (e) {
        for (var t = 0; t < Ko.length; t += 5)
          (!e || (Ko[t + 4] && Ko[t + 4].query === e)) &&
            ((Ko[t].style.cssText = Ko[t + 1]),
            Ko[t].getBBox && Ko[t].setAttribute("transform", Ko[t + 2] || ""),
            (Ko[t + 3].uncache = 1));
      },
      Zo = function (e, t) {
        var n;
        for (Ms = 0; Ms < jo.length; Ms++)
          !(n = jo[Ms]) ||
            (t && n._ctx !== t) ||
            (e ? n.kill(1) : n.revert(!0, !0));
        (qs = !0), t && Qo(t), t || Uo("revert");
      },
      Jo = function (e, t) {
        Vr.cache++,
          (t || !Ys) &&
            Vr.forEach(function (e) {
              return go(e) && e.cacheID++ && (e.rec = 0);
            }),
          mo(e) && (ps.history.scrollRestoration = js = e);
      },
      ea = 0,
      ta = function () {
        vs.appendChild($s),
          (Ws = (!zs && $s.offsetHeight) || ps.innerHeight),
          vs.removeChild($s);
      },
      na = function (e) {
        return bs(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (t) {
          return (t.style.display = e ? "none" : "block");
        });
      },
      ia = function (e, t) {
        if (
          ((gs = ms.documentElement),
          (vs = ms.body),
          (ys = [ps, ms, gs, vs]),
          !Js || e || qs)
        ) {
          ta(),
            (Ys = ba.isRefreshing = !0),
            Vr.forEach(function (e) {
              return go(e) && ++e.cacheID && (e.rec = e());
            });
          var n = Uo("refreshInit");
          As && ba.sort(),
            t || Zo(),
            Vr.forEach(function (e) {
              go(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            jo.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (qs = !1),
            jo.forEach(function (e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
              }
            }),
            (Hs = 1),
            na(!0),
            jo.forEach(function (e) {
              var t = ho(e.scroller, e._dir),
                n = "max" === e.vars.end || (e._endClamp && e.end > t),
                i = e._startClamp && e.start >= t;
              (n || i) &&
                e.setPositions(
                  i ? t - 1 : e.start,
                  n ? Math.max(i ? t : e.start + 1, t) : e.end,
                  !0
                );
            }),
            na(!1),
            (Hs = 0),
            n.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            Vr.forEach(function (e) {
              go(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            Jo(js, 1),
            _s.pause(),
            ea++,
            (Ys = 2),
            oa(2),
            jo.forEach(function (e) {
              return go(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (Ys = ba.isRefreshing = !1),
            Uo("refresh");
        } else Ao(ba, "scrollEnd", Xo);
      },
      ra = 0,
      sa = 1,
      oa = function (e) {
        if (2 === e || (!Ys && !qs)) {
          (ba.isUpdating = !0), Us && Us.update(0);
          var t = jo.length,
            n = Qs(),
            i = n - Zs >= 50,
            r = t && jo[0].scroll();
          if (
            ((sa = ra > r ? -1 : 1),
            Ys || (ra = r),
            i &&
              (Js && !Cs && n - Js > 200 && ((Js = 0), Uo("scrollEnd")),
              (xs = Zs),
              (Zs = n)),
            sa < 0)
          ) {
            for (Ms = t; Ms-- > 0; ) jo[Ms] && jo[Ms].update(0, i);
            sa = 1;
          } else for (Ms = 0; Ms < t; Ms++) jo[Ms] && jo[Ms].update(0, i);
          ba.isUpdating = !1;
        }
        Vs = 0;
      },
      aa = [
        "left",
        "top",
        "bottom",
        "right",
        "marginBottom",
        "marginRight",
        "marginTop",
        "marginLeft",
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      la = aa.concat([
        "width",
        "height",
        "boxSizing",
        "maxWidth",
        "maxHeight",
        "position",
        "margin",
        xo,
        xo + "Top",
        xo + "Right",
        xo + "Bottom",
        xo + "Left",
      ]),
      ua = function (e, t, n, i) {
        if (!e._gsap.swappedIn) {
          for (var r, s = aa.length, o = t.style, a = e.style; s--; )
            o[(r = aa[s])] = n[r];
          (o.position = "absolute" === n.position ? "absolute" : "relative"),
            "inline" === n.display && (o.display = "inline-block"),
            (a.bottom = a.right = "auto"),
            (o.flexBasis = n.flexBasis || "auto"),
            (o.overflow = "visible"),
            (o.boxSizing = "border-box"),
            (o.width = Mo(e, ns) + To),
            (o.height = Mo(e, is) + To),
            (o[xo] = a.margin = a.top = a.left = "0"),
            da(i),
            (a.width = a.maxWidth = n.width),
            (a.height = a.maxHeight = n.height),
            (a[xo] = n[xo]),
            e.parentNode !== t &&
              (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      ca = /([A-Z])/g,
      da = function (e) {
        if (e) {
          var t,
            n,
            i = e.t.style,
            r = e.length,
            s = 0;
          for ((e.t._gsap || fs.core.getCache(e.t)).uncache = 1; s < r; s += 2)
            (n = e[s + 1]),
              (t = e[s]),
              n
                ? (i[t] = n)
                : i[t] && i.removeProperty(t.replace(ca, "-$1").toLowerCase());
        }
      },
      fa = function (e) {
        for (var t = la.length, n = e.style, i = [], r = 0; r < t; r++)
          i.push(la[r], n[la[r]]);
        return (i.t = e), i;
      },
      ha = { left: 0, top: 0 },
      pa = function (e, t, n, i, r, s, o, a, l, u, c, d, f, h) {
        go(e) && (e = e(a)),
          mo(e) &&
            "max" === e.substr(0, 3) &&
            (e = d + ("=" === e.charAt(4) ? Do("0" + e.substr(3), n) : 0));
        var p,
          m,
          g,
          v = f ? f.time() : 0;
        if ((f && f.seek(0), isNaN(e) || (e = +e), vo(e)))
          f &&
            (e = fs.utils.mapRange(
              f.scrollTrigger.start,
              f.scrollTrigger.end,
              0,
              d,
              e
            )),
            o && Bo(o, n, i, !0);
        else {
          go(t) && (t = t(a));
          var y,
            _,
            b,
            w,
            x = (e || "0").split(" ");
          (g = rs(t, a) || vs),
            ((y = Eo(g) || {}) && (y.left || y.top)) ||
              "none" !== So(g).display ||
              ((w = g.style.display),
              (g.style.display = "block"),
              (y = Eo(g)),
              w ? (g.style.display = w) : g.style.removeProperty("display")),
            (_ = Do(x[0], y[i.d])),
            (b = Do(x[1] || "0", n)),
            (e = y[i.p] - l[i.p] - u + _ + r - b),
            o && Bo(o, b, i, n - b < 20 || (o._isStart && b > 20)),
            (n -= n - b);
        }
        if ((h && ((a[h] = e || -0.001), e < 0 && (e = 0)), s)) {
          var T = e + n,
            S = s._isStart;
          (p = "scroll" + i.d2),
            Bo(
              s,
              T,
              i,
              (S && T > 20) ||
                (!S && (c ? Math.max(vs[p], gs[p]) : s.parentNode[p]) <= T + 1)
            ),
            c &&
              ((l = Eo(o)),
              c && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + To));
        }
        return (
          f &&
            g &&
            ((p = Eo(g)),
            f.seek(d),
            (m = Eo(g)),
            (f._caScrollDist = p[i.p] - m[i.p]),
            (e = (e / f._caScrollDist) * d)),
          f && f.seek(v),
          f ? e : Math.round(e)
        );
      },
      ma = /(webkit|moz|length|cssText|inset)/i,
      ga = function (e, t, n, i) {
        if (e.parentNode !== t) {
          var r,
            s,
            o = e.style;
          if (t === vs) {
            for (r in ((e._stOrig = o.cssText), (s = So(e))))
              +r ||
                ma.test(r) ||
                !s[r] ||
                "string" != typeof o[r] ||
                "0" === r ||
                (o[r] = s[r]);
            (o.top = n), (o.left = i);
          } else o.cssText = e._stOrig;
          (fs.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      },
      va = function (e, t, n) {
        var i = t,
          r = i;
        return function (t) {
          var s = Math.round(e());
          return (
            s !== i &&
              s !== r &&
              Math.abs(s - i) > 3 &&
              Math.abs(s - r) > 3 &&
              ((t = s), n && n()),
            (r = i),
            (i = Math.round(t))
          );
        };
      },
      ya = function (e, t, n) {
        var i = {};
        (i[t.p] = "+=" + n), fs.set(e, i);
      },
      _a = function (e, t) {
        var n = ss(e, t),
          i = "_scroll" + t.p2,
          r = function t(r, s, o, a, l) {
            var u = t.tween,
              c = s.onComplete,
              d = {};
            o = o || n();
            var f = va(n, o, function () {
              u.kill(), (t.tween = 0);
            });
            return (
              (l = (a && l) || 0),
              (a = a || r - o),
              u && u.kill(),
              (s[i] = r),
              (s.inherit = !1),
              (s.modifiers = d),
              (d[i] = function () {
                return f(o + a * u.ratio + l * u.ratio * u.ratio);
              }),
              (s.onUpdate = function () {
                Vr.cache++, t.tween && oa();
              }),
              (s.onComplete = function () {
                (t.tween = 0), c && c.call(u);
              }),
              (u = t.tween = fs.to(e, s))
            );
          };
        return (
          (e[i] = n),
          (n.wheelHandler = function () {
            return r.tween && r.tween.kill() && (r.tween = 0);
          }),
          Ao(e, "wheel", n.wheelHandler),
          ba.isTouch && Ao(e, "touchmove", n.wheelHandler),
          r
        );
      },
      ba = (function () {
        function e(t, n) {
          hs ||
            e.register(fs) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            Bs(this),
            this.init(t, n);
        }
        return (
          (e.prototype.init = function (t, n) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              eo)
            ) {
              var i,
                r,
                s,
                o,
                a,
                l,
                u,
                c,
                d,
                f,
                h,
                p,
                m,
                g,
                v,
                y,
                _,
                b,
                w,
                x,
                T,
                S,
                C,
                E,
                M,
                k,
                O,
                P,
                A,
                L,
                R,
                z,
                I,
                N,
                D,
                F,
                B,
                j,
                $,
                W,
                q,
                H,
                G = (t = Co(
                  mo(t) || vo(t) || t.nodeType ? { trigger: t } : t,
                  Io
                )),
                V = G.onUpdate,
                Y = G.toggleClass,
                X = G.id,
                U = G.onToggle,
                K = G.onRefresh,
                Q = G.scrub,
                Z = G.trigger,
                J = G.pin,
                ee = G.pinSpacing,
                te = G.invalidateOnRefresh,
                ne = G.anticipatePin,
                ie = G.onScrubComplete,
                re = G.onSnapComplete,
                se = G.once,
                oe = G.snap,
                ae = G.pinReparent,
                le = G.pinSpacer,
                ue = G.containerAnimation,
                ce = G.fastScrollEnd,
                de = G.preventOverlaps,
                fe =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? ns
                    : is,
                he = !Q && 0 !== Q,
                pe = rs(t.scroller || ps),
                me = fs.core.getCache(pe),
                ge = uo(pe),
                ve =
                  "fixed" ===
                  ("pinType" in t
                    ? t.pinType
                    : Kr(pe, "pinType") || (ge && "fixed")),
                ye = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                _e = he && t.toggleActions.split(" "),
                be = "markers" in t ? t.markers : Io.markers,
                we = ge
                  ? 0
                  : parseFloat(So(pe)["border" + fe.p2 + "Width"]) || 0,
                xe = this,
                Te =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(xe);
                  },
                Se = (function (e, t, n) {
                  var i = n.d,
                    r = n.d2,
                    s = n.a;
                  return (s = Kr(e, "getBoundingClientRect"))
                    ? function () {
                        return s()[i];
                      }
                    : function () {
                        return (t ? co(r) : e["client" + r]) || 0;
                      };
                })(pe, ge, fe),
                Ce = (function (e, t) {
                  return !ge || ~Yr.indexOf(e)
                    ? fo(e)
                    : function () {
                        return ha;
                      };
                })(pe),
                Ee = 0,
                Me = 0,
                ke = 0,
                Oe = ss(pe, fe);
              if (
                ((xe._startClamp = xe._endClamp = !1),
                (xe._dir = fe),
                (ne *= 45),
                (xe.scroller = pe),
                (xe.scroll = ue ? ue.time.bind(ue) : Oe),
                (o = Oe()),
                (xe.vars = t),
                (n = n || t.animation),
                "refreshPriority" in t &&
                  ((As = 1), -9999 === t.refreshPriority && (Us = xe)),
                (me.tweenScroll = me.tweenScroll || {
                  top: _a(pe, is),
                  left: _a(pe, ns),
                }),
                (xe.tweenTo = i = me.tweenScroll[fe.p]),
                (xe.scrubDuration = function (e) {
                  (I = vo(e) && e)
                    ? z
                      ? z.duration(e)
                      : (z = fs.to(n, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: I,
                          paused: !0,
                          onComplete: function () {
                            return ie && ie(xe);
                          },
                        }))
                    : (z && z.progress(1).kill(), (z = 0));
                }),
                n &&
                  ((n.vars.lazy = !1),
                  (n._initted && !xe.isReverted) ||
                    (!1 !== n.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      n.duration() &&
                      n.render(0, !0, !0)),
                  (xe.animation = n.pause()),
                  (n.scrollTrigger = xe),
                  xe.scrubDuration(Q),
                  (L = 0),
                  X || (X = n.vars.id)),
                oe &&
                  ((yo(oe) && !oe.push) || (oe = { snapTo: oe }),
                  "scrollBehavior" in vs.style &&
                    fs.set(ge ? [vs, gs] : pe, { scrollBehavior: "auto" }),
                  Vr.forEach(function (e) {
                    return (
                      go(e) &&
                      e.target === (ge ? ms.scrollingElement || gs : pe) &&
                      (e.smooth = !1)
                    );
                  }),
                  (s = go(oe.snapTo)
                    ? oe.snapTo
                    : "labels" === oe.snapTo
                    ? (function (e) {
                        return function (t) {
                          return fs.utils.snap(ko(e), t);
                        };
                      })(n)
                    : "labelsDirectional" === oe.snapTo
                    ? ((W = n),
                      function (e, t) {
                        return Oo(ko(W))(e, t.direction);
                      })
                    : !1 !== oe.directional
                    ? function (e, t) {
                        return Oo(oe.snapTo)(
                          e,
                          Qs() - Me < 500 ? 0 : t.direction
                        );
                      }
                    : fs.utils.snap(oe.snapTo)),
                  (N = oe.duration || { min: 0.1, max: 2 }),
                  (N = yo(N) ? ws(N.min, N.max) : ws(N, N)),
                  (D = fs
                    .delayedCall(oe.delay || I / 2 || 0.1, function () {
                      var e = Oe(),
                        t = Qs() - Me < 500,
                        r = i.tween;
                      if (
                        !(t || Math.abs(xe.getVelocity()) < 10) ||
                        r ||
                        Cs ||
                        Ee === e
                      )
                        xe.isActive && Ee !== e && D.restart(!0);
                      else {
                        var o,
                          a,
                          c = (e - l) / g,
                          d = n && !he ? n.totalProgress() : c,
                          f = t ? 0 : ((d - R) / (Qs() - xs)) * 1e3 || 0,
                          h = fs.utils.clamp(
                            -c,
                            1 - c,
                            (wo(f / 2) * f) / 0.185
                          ),
                          p = c + (!1 === oe.inertia ? 0 : h),
                          m = oe,
                          v = m.onStart,
                          y = m.onInterrupt,
                          _ = m.onComplete;
                        if (
                          ((o = s(p, xe)),
                          vo(o) || (o = p),
                          (a = Math.max(0, Math.round(l + o * g))),
                          e <= u && e >= l && a !== e)
                        ) {
                          if (r && !r._initted && r.data <= wo(a - e)) return;
                          !1 === oe.inertia && (h = o - c),
                            i(
                              a,
                              {
                                duration: N(
                                  wo(
                                    (0.185 * Math.max(wo(p - d), wo(o - d))) /
                                      f /
                                      0.05 || 0
                                  )
                                ),
                                ease: oe.ease || "power3",
                                data: wo(a - e),
                                onInterrupt: function () {
                                  return D.restart(!0) && y && y(xe);
                                },
                                onComplete: function () {
                                  xe.update(),
                                    (Ee = Oe()),
                                    n &&
                                      !he &&
                                      (z
                                        ? z.resetTo(
                                            "totalProgress",
                                            o,
                                            n._tTime / n._tDur
                                          )
                                        : n.progress(o)),
                                    (L = R =
                                      n && !he
                                        ? n.totalProgress()
                                        : xe.progress),
                                    re && re(xe),
                                    _ && _(xe);
                                },
                              },
                              e,
                              h * g,
                              a - e - h * g
                            ),
                            v && v(xe, i.tween);
                        }
                      }
                    })
                    .pause())),
                X && ($o[X] = xe),
                ($ =
                  (Z = xe.trigger = rs(Z || (!0 !== J && J))) &&
                  Z._gsap &&
                  Z._gsap.stRevert) && ($ = $(xe)),
                (J = !0 === J ? Z : rs(J)),
                mo(Y) && (Y = { targets: Z, className: Y }),
                J &&
                  (!1 === ee ||
                    "margin" === ee ||
                    (ee =
                      !(
                        !ee &&
                        J.parentNode &&
                        J.parentNode.style &&
                        "flex" === So(J.parentNode).display
                      ) && xo),
                  (xe.pin = J),
                  (r = fs.core.getCache(J)).spacer
                    ? (v = r.pinState)
                    : (le &&
                        ((le = rs(le)) &&
                          !le.nodeType &&
                          (le = le.current || le.nativeElement),
                        (r.spacerIsNative = !!le),
                        le && (r.spacerState = fa(le))),
                      (r.spacer = b = le || ms.createElement("div")),
                      b.classList.add("pin-spacer"),
                      X && b.classList.add("pin-spacer-" + X),
                      (r.pinState = v = fa(J))),
                  !1 !== t.force3D && fs.set(J, { force3D: !0 }),
                  (xe.spacer = b = r.spacer),
                  (A = So(J)),
                  (E = A[ee + fe.os2]),
                  (x = fs.getProperty(J)),
                  (T = fs.quickSetter(J, fe.a, To)),
                  ua(J, b, A),
                  (_ = fa(J))),
                be)
              ) {
                (p = yo(be) ? Co(be, zo) : zo),
                  (f = Fo("scroller-start", X, pe, fe, p, 0)),
                  (h = Fo("scroller-end", X, pe, fe, p, 0, f)),
                  (w = f["offset" + fe.op.d2]);
                var Pe = rs(Kr(pe, "content") || pe);
                (c = this.markerStart = Fo("start", X, Pe, fe, p, w, 0, ue)),
                  (d = this.markerEnd = Fo("end", X, Pe, fe, p, w, 0, ue)),
                  ue && (j = fs.quickSetter([c, d], fe.a, To)),
                  ve ||
                    (Yr.length && !0 === Kr(pe, "fixedMarkers")) ||
                    ((H = So((q = ge ? vs : pe)).position),
                    (q.style.position =
                      "absolute" === H || "fixed" === H ? H : "relative"),
                    fs.set([f, h], { force3D: !0 }),
                    (k = fs.quickSetter(f, fe.a, To)),
                    (P = fs.quickSetter(h, fe.a, To)));
              }
              if (ue) {
                var Ae = ue.vars.onUpdate,
                  Le = ue.vars.onUpdateParams;
                ue.eventCallback("onUpdate", function () {
                  xe.update(0, 0, 1), Ae && Ae.apply(ue, Le || []);
                });
              }
              if (
                ((xe.previous = function () {
                  return jo[jo.indexOf(xe) - 1];
                }),
                (xe.next = function () {
                  return jo[jo.indexOf(xe) + 1];
                }),
                (xe.revert = function (e, t) {
                  if (!t) return xe.kill(!0);
                  var i = !1 !== e || !xe.enabled,
                    r = Ss;
                  i !== xe.isReverted &&
                    (i &&
                      ((F = Math.max(Oe(), xe.scroll.rec || 0)),
                      (ke = xe.progress),
                      (B = n && n.progress())),
                    c &&
                      [c, d, f, h].forEach(function (e) {
                        return (e.style.display = i ? "none" : "block");
                      }),
                    i && ((Ss = xe), xe.update(i)),
                    !J ||
                      (ae && xe.isActive) ||
                      (i
                        ? (function (e, t, n) {
                            da(v);
                            var i = e._gsap;
                            if (i.spacerIsNative) da(i.spacerState);
                            else if (e._gsap.swappedIn) {
                              var r = t.parentNode;
                              r && (r.insertBefore(e, t), r.removeChild(t));
                            }
                            e._gsap.swappedIn = !1;
                          })(J, b)
                        : ua(J, b, So(J), M)),
                    i || xe.update(i),
                    (Ss = r),
                    (xe.isReverted = i));
                }),
                (xe.refresh = function (r, s, p, w) {
                  if ((!Ss && xe.enabled) || s)
                    if (J && r && Js) Ao(e, "scrollEnd", Xo);
                    else {
                      !Ys && Te && Te(xe),
                        (Ss = xe),
                        i.tween && !p && (i.tween.kill(), (i.tween = 0)),
                        z && z.pause(),
                        te &&
                          n &&
                          (n.revert({ kill: !1 }).invalidate(),
                          n.getChildren &&
                            n.getChildren(!0, !0, !1).forEach(function (e) {
                              return (
                                e.vars.immediateRender && e.render(0, !0, !0)
                              );
                            })),
                        xe.isReverted || xe.revert(!0, !0),
                        (xe._subPinOffset = !1);
                      var T,
                        E,
                        k,
                        P,
                        A,
                        L,
                        R,
                        I,
                        N,
                        j,
                        $,
                        W,
                        q,
                        H = Se(),
                        G = Ce(),
                        V = ue ? ue.duration() : ho(pe, fe),
                        Y = g <= 0.01 || !g,
                        X = 0,
                        U = w || 0,
                        Q = yo(p) ? p.end : t.end,
                        ne = t.endTrigger || Z,
                        ie = yo(p)
                          ? p.start
                          : t.start ||
                            (0 !== t.start && Z ? (J ? "0 0" : "0 100%") : 0),
                        re = (xe.pinnedContainer =
                          t.pinnedContainer && rs(t.pinnedContainer, xe)),
                        se = (Z && Math.max(0, jo.indexOf(xe))) || 0,
                        oe = se;
                      for (
                        be &&
                        yo(p) &&
                        ((W = fs.getProperty(f, fe.p)),
                        (q = fs.getProperty(h, fe.p)));
                        oe-- > 0;

                      )
                        (L = jo[oe]).end || L.refresh(0, 1) || (Ss = xe),
                          !(R = L.pin) ||
                            (R !== Z && R !== J && R !== re) ||
                            L.isReverted ||
                            (j || (j = []), j.unshift(L), L.revert(!0, !0)),
                          L !== jo[oe] && (se--, oe--);
                      for (
                        go(ie) && (ie = ie(xe)),
                          ie = to(ie, "start", xe),
                          l =
                            pa(
                              ie,
                              Z,
                              H,
                              fe,
                              Oe(),
                              c,
                              f,
                              xe,
                              G,
                              we,
                              ve,
                              V,
                              ue,
                              xe._startClamp && "_startClamp"
                            ) || (J ? -0.001 : 0),
                          go(Q) && (Q = Q(xe)),
                          mo(Q) &&
                            !Q.indexOf("+=") &&
                            (~Q.indexOf(" ")
                              ? (Q = (mo(ie) ? ie.split(" ")[0] : "") + Q)
                              : ((X = Do(Q.substr(2), H)),
                                (Q = mo(ie)
                                  ? ie
                                  : (ue
                                      ? fs.utils.mapRange(
                                          0,
                                          ue.duration(),
                                          ue.scrollTrigger.start,
                                          ue.scrollTrigger.end,
                                          l
                                        )
                                      : l) + X),
                                (ne = Z))),
                          Q = to(Q, "end", xe),
                          u =
                            Math.max(
                              l,
                              pa(
                                Q || (ne ? "100% 0" : V),
                                ne,
                                H,
                                fe,
                                Oe() + X,
                                d,
                                h,
                                xe,
                                G,
                                we,
                                ve,
                                V,
                                ue,
                                xe._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          X = 0,
                          oe = se;
                        oe--;

                      )
                        (R = (L = jo[oe]).pin) &&
                          L.start - L._pinPush <= l &&
                          !ue &&
                          L.end > 0 &&
                          ((T =
                            L.end -
                            (xe._startClamp ? Math.max(0, L.start) : L.start)),
                          ((R === Z && L.start - L._pinPush < l) || R === re) &&
                            isNaN(ie) &&
                            (X += T * (1 - L.progress)),
                          R === J && (U += T));
                      if (
                        ((l += X),
                        (u += X),
                        xe._startClamp && (xe._startClamp += X),
                        xe._endClamp &&
                          !Ys &&
                          ((xe._endClamp = u || -0.001),
                          (u = Math.min(u, ho(pe, fe)))),
                        (g = u - l || ((l -= 0.01) && 0.001)),
                        Y &&
                          (ke = fs.utils.clamp(
                            0,
                            1,
                            fs.utils.normalize(l, u, F)
                          )),
                        (xe._pinPush = U),
                        c &&
                          X &&
                          (((T = {})[fe.a] = "+=" + X),
                          re && (T[fe.p] = "-=" + Oe()),
                          fs.set([c, d], T)),
                        !J || (Hs && xe.end >= ho(pe, fe)))
                      ) {
                        if (Z && Oe() && !ue)
                          for (E = Z.parentNode; E && E !== vs; )
                            E._pinOffset &&
                              ((l -= E._pinOffset), (u -= E._pinOffset)),
                              (E = E.parentNode);
                      } else
                        (T = So(J)),
                          (P = fe === is),
                          (k = Oe()),
                          (S = parseFloat(x(fe.a)) + U),
                          !V &&
                            u > 1 &&
                            (($ = {
                              style: ($ = (ge ? ms.scrollingElement || gs : pe)
                                .style),
                              value: $["overflow" + fe.a.toUpperCase()],
                            }),
                            ge &&
                              "scroll" !==
                                So(vs)["overflow" + fe.a.toUpperCase()] &&
                              ($.style["overflow" + fe.a.toUpperCase()] =
                                "scroll")),
                          ua(J, b, T),
                          (_ = fa(J)),
                          (E = Eo(J, !0)),
                          (I = ve && ss(pe, P ? ns : is)()),
                          ee
                            ? (((M = [ee + fe.os2, g + U + To]).t = b),
                              (oe = ee === xo ? Mo(J, fe) + g + U : 0) &&
                                (M.push(fe.d, oe + To),
                                "auto" !== b.style.flexBasis &&
                                  (b.style.flexBasis = oe + To)),
                              da(M),
                              re &&
                                jo.forEach(function (e) {
                                  e.pin === re &&
                                    !1 !== e.vars.pinSpacing &&
                                    (e._subPinOffset = !0);
                                }),
                              ve && Oe(F))
                            : (oe = Mo(J, fe)) &&
                              "auto" !== b.style.flexBasis &&
                              (b.style.flexBasis = oe + To),
                          ve &&
                            (((A = {
                              top: E.top + (P ? k - l : I) + To,
                              left: E.left + (P ? I : k - l) + To,
                              boxSizing: "border-box",
                              position: "fixed",
                            }).width = A.maxWidth =
                              Math.ceil(E.width) + To),
                            (A.height = A.maxHeight = Math.ceil(E.height) + To),
                            (A.margin =
                              A.marginTop =
                              A.marginRight =
                              A.marginBottom =
                              A.marginLeft =
                                "0"),
                            (A[xo] = T[xo]),
                            (A[xo + "Top"] = T[xo + "Top"]),
                            (A[xo + "Right"] = T[xo + "Right"]),
                            (A[xo + "Bottom"] = T[xo + "Bottom"]),
                            (A[xo + "Left"] = T[xo + "Left"]),
                            (y = (function (e, t, n) {
                              for (
                                var i, r = [], s = e.length, o = n ? 8 : 0;
                                o < s;
                                o += 2
                              )
                                (i = e[o]), r.push(i, i in t ? t[i] : e[o + 1]);
                              return (r.t = e.t), r;
                            })(v, A, ae)),
                            Ys && Oe(0)),
                          n
                            ? ((N = n._initted),
                              Ls(1),
                              n.render(n.duration(), !0, !0),
                              (C = x(fe.a) - S + g + U),
                              (O = Math.abs(g - C) > 1),
                              ve && O && y.splice(y.length - 2, 2),
                              n.render(0, !0, !0),
                              N || n.invalidate(!0),
                              n.parent || n.totalTime(n.totalTime()),
                              Ls(0))
                            : (C = g),
                          $ &&
                            ($.value
                              ? ($.style["overflow" + fe.a.toUpperCase()] =
                                  $.value)
                              : $.style.removeProperty("overflow-" + fe.a));
                      j &&
                        j.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (xe.start = l),
                        (xe.end = u),
                        (o = a = Ys ? F : Oe()),
                        ue || Ys || (o < F && Oe(F), (xe.scroll.rec = 0)),
                        xe.revert(!1, !0),
                        (Me = Qs()),
                        D && ((Ee = -1), D.restart(!0)),
                        (Ss = 0),
                        n &&
                          he &&
                          (n._initted || B) &&
                          n.progress() !== B &&
                          n.progress(B || 0, !0).render(n.time(), !0, !0),
                        (Y ||
                          ke !== xe.progress ||
                          ue ||
                          te ||
                          (n && !n._initted)) &&
                          (n &&
                            !he &&
                            (n._initted ||
                              ke ||
                              !1 !== n.vars.immediateRender) &&
                            n.totalProgress(
                              ue && l < -0.001 && !ke
                                ? fs.utils.normalize(l, u, 0)
                                : ke,
                              !0
                            ),
                          (xe.progress = Y || (o - l) / g === ke ? 0 : ke)),
                        J && ee && (b._pinOffset = Math.round(xe.progress * C)),
                        z && z.invalidate(),
                        isNaN(W) ||
                          ((W -= fs.getProperty(f, fe.p)),
                          (q -= fs.getProperty(h, fe.p)),
                          ya(f, fe, W),
                          ya(c, fe, W - (w || 0)),
                          ya(h, fe, q),
                          ya(d, fe, q - (w || 0))),
                        Y && !Ys && xe.update(),
                        !K || Ys || m || ((m = !0), K(xe), (m = !1));
                    }
                }),
                (xe.getVelocity = function () {
                  return ((Oe() - a) / (Qs() - xs)) * 1e3 || 0;
                }),
                (xe.endAnimation = function () {
                  _o(xe.callbackAnimation),
                    n &&
                      (z
                        ? z.progress(1)
                        : n.paused()
                        ? he || _o(n, xe.direction < 0, 1)
                        : _o(n, n.reversed()));
                }),
                (xe.labelToScroll = function (e) {
                  return (
                    (n &&
                      n.labels &&
                      (l || xe.refresh() || l) +
                        (n.labels[e] / n.duration()) * g) ||
                    0
                  );
                }),
                (xe.getTrailing = function (e) {
                  var t = jo.indexOf(xe),
                    n =
                      xe.direction > 0
                        ? jo.slice(0, t).reverse()
                        : jo.slice(t + 1);
                  return (
                    mo(e)
                      ? n.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : n
                  ).filter(function (e) {
                    return xe.direction > 0 ? e.end <= l : e.start >= u;
                  });
                }),
                (xe.update = function (e, t, r) {
                  if (!ue || r || e) {
                    var s,
                      c,
                      d,
                      h,
                      p,
                      m,
                      v,
                      w = !0 === Ys ? F : xe.scroll(),
                      x = e ? 0 : (w - l) / g,
                      M = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      A = xe.progress;
                    if (
                      (t &&
                        ((a = o),
                        (o = ue ? Oe() : w),
                        oe &&
                          ((R = L), (L = n && !he ? n.totalProgress() : M))),
                      ne &&
                        J &&
                        !Ss &&
                        !Ks &&
                        Js &&
                        (!M && l < w + ((w - a) / (Qs() - xs)) * ne
                          ? (M = 1e-4)
                          : 1 === M &&
                            u > w + ((w - a) / (Qs() - xs)) * ne &&
                            (M = 0.9999)),
                      M !== A && xe.enabled)
                    ) {
                      if (
                        ((h =
                          (p =
                            (s = xe.isActive = !!M && M < 1) !=
                            (!!A && A < 1)) || !!M != !!A),
                        (xe.direction = M > A ? 1 : -1),
                        (xe.progress = M),
                        h &&
                          !Ss &&
                          ((c = M && !A ? 0 : 1 === M ? 1 : 1 === A ? 2 : 3),
                          he &&
                            ((d =
                              (!p && "none" !== _e[c + 1] && _e[c + 1]) ||
                              _e[c]),
                            (v =
                              n &&
                              ("complete" === d || "reset" === d || d in n)))),
                        de &&
                          (p || v) &&
                          (v || Q || !n) &&
                          (go(de)
                            ? de(xe)
                            : xe.getTrailing(de).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        he ||
                          (!z || Ss || Ks
                            ? n && n.totalProgress(M, !(!Ss || (!Me && !e)))
                            : (z._dp._time - z._start !== z._time &&
                                z.render(z._dp._time - z._start),
                              z.resetTo
                                ? z.resetTo(
                                    "totalProgress",
                                    M,
                                    n._tTime / n._tDur
                                  )
                                : ((z.vars.totalProgress = M),
                                  z.invalidate().restart()))),
                        J)
                      )
                        if ((e && ee && (b.style[ee + fe.os2] = E), ve)) {
                          if (h) {
                            if (
                              ((m =
                                !e &&
                                M > A &&
                                u + 1 > w &&
                                w + 1 >= ho(pe, fe)),
                              ae)
                            )
                              if (e || (!s && !m)) ga(J, b);
                              else {
                                var I = Eo(J, !0),
                                  N = w - l;
                                ga(
                                  J,
                                  vs,
                                  I.top + (fe === is ? N : 0) + To,
                                  I.left + (fe === is ? 0 : N) + To
                                );
                              }
                            da(s || m ? y : _),
                              (O && M < 1 && s) ||
                                T(S + (1 !== M || m ? 0 : C));
                          }
                        } else T(oo(S + C * M));
                      oe && !i.tween && !Ss && !Ks && D.restart(!0),
                        Y &&
                          (p || (se && M && (M < 1 || !Gs))) &&
                          bs(Y.targets).forEach(function (e) {
                            return e.classList[s || se ? "add" : "remove"](
                              Y.className
                            );
                          }),
                        V && !he && !e && V(xe),
                        h && !Ss
                          ? (he &&
                              (v &&
                                ("complete" === d
                                  ? n.pause().totalProgress(1)
                                  : "reset" === d
                                  ? n.restart(!0).pause()
                                  : "restart" === d
                                  ? n.restart(!0)
                                  : n[d]()),
                              V && V(xe)),
                            (!p && Gs) ||
                              (U && p && bo(xe, U),
                              ye[c] && bo(xe, ye[c]),
                              se && (1 === M ? xe.kill(!1, 1) : (ye[c] = 0)),
                              p ||
                                (ye[(c = 1 === M ? 1 : 3)] && bo(xe, ye[c]))),
                            ce &&
                              !s &&
                              Math.abs(xe.getVelocity()) >
                                (vo(ce) ? ce : 2500) &&
                              (_o(xe.callbackAnimation),
                              z
                                ? z.progress(1)
                                : _o(n, "reverse" === d ? 1 : !M, 1)))
                          : he && V && !Ss && V(xe);
                    }
                    if (P) {
                      var B = ue
                        ? (w / ue.duration()) * (ue._caScrollDist || 0)
                        : w;
                      k(B + (f._isFlipped ? 1 : 0)), P(B);
                    }
                    j && j((-w / ue.duration()) * (ue._caScrollDist || 0));
                  }
                }),
                (xe.enable = function (t, n) {
                  xe.enabled ||
                    ((xe.enabled = !0),
                    Ao(pe, "resize", Go),
                    ge || Ao(pe, "scroll", qo),
                    Te && Ao(e, "refreshInit", Te),
                    !1 !== t && ((xe.progress = ke = 0), (o = a = Ee = Oe())),
                    !1 !== n && xe.refresh());
                }),
                (xe.getTween = function (e) {
                  return e && i ? i.tween : z;
                }),
                (xe.setPositions = function (e, t, n, i) {
                  if (ue) {
                    var r = ue.scrollTrigger,
                      s = ue.duration(),
                      o = r.end - r.start;
                    (e = r.start + (o * e) / s), (t = r.start + (o * t) / s);
                  }
                  xe.refresh(
                    !1,
                    !1,
                    {
                      start: no(e, n && !!xe._startClamp),
                      end: no(t, n && !!xe._endClamp),
                    },
                    i
                  ),
                    xe.update();
                }),
                (xe.adjustPinSpacing = function (e) {
                  if (M && e) {
                    var t = M.indexOf(fe.d) + 1;
                    (M[t] = parseFloat(M[t]) + e + To),
                      (M[1] = parseFloat(M[1]) + e + To),
                      da(M);
                  }
                }),
                (xe.disable = function (t, n) {
                  if (
                    xe.enabled &&
                    (!1 !== t && xe.revert(!0, !0),
                    (xe.enabled = xe.isActive = !1),
                    n || (z && z.pause()),
                    (F = 0),
                    r && (r.uncache = 1),
                    Te && Lo(e, "refreshInit", Te),
                    D &&
                      (D.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                    !ge)
                  ) {
                    for (var s = jo.length; s--; )
                      if (jo[s].scroller === pe && jo[s] !== xe) return;
                    Lo(pe, "resize", Go), ge || Lo(pe, "scroll", qo);
                  }
                }),
                (xe.kill = function (e, i) {
                  xe.disable(e, i), z && !i && z.kill(), X && delete $o[X];
                  var s = jo.indexOf(xe);
                  s >= 0 && jo.splice(s, 1),
                    s === Ms && sa > 0 && Ms--,
                    (s = 0),
                    jo.forEach(function (e) {
                      return e.scroller === xe.scroller && (s = 1);
                    }),
                    s || Ys || (xe.scroll.rec = 0),
                    n &&
                      ((n.scrollTrigger = null),
                      e && n.revert({ kill: !1 }),
                      i || n.kill()),
                    c &&
                      [c, d, f, h].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    Us === xe && (Us = 0),
                    J &&
                      (r && (r.uncache = 1),
                      (s = 0),
                      jo.forEach(function (e) {
                        return e.pin === J && s++;
                      }),
                      s || (r.spacer = 0)),
                    t.onKill && t.onKill(xe);
                }),
                jo.push(xe),
                xe.enable(!1, !1),
                $ && $(xe),
                n && n.add && !g)
              ) {
                var Re = xe.update;
                (xe.update = function () {
                  (xe.update = Re), Vr.cache++, l || u || xe.refresh();
                }),
                  fs.delayedCall(0.01, xe.update),
                  (g = 0.01),
                  (l = u = 0);
              } else xe.refresh();
              J &&
                (function () {
                  if (Xs !== ea) {
                    var e = (Xs = ea);
                    requestAnimationFrame(function () {
                      return e === ea && ia(!0);
                    });
                  }
                })();
            } else this.update = this.refresh = this.kill = so;
          }),
          (e.register = function (t) {
            return (
              hs ||
                ((fs = t || lo()),
                ao() && window.document && e.enable(),
                (hs = eo)),
              hs
            );
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) Io[t] = e[t];
            return Io;
          }),
          (e.disable = function (e, t) {
            (eo = 0),
              jo.forEach(function (n) {
                return n[t ? "kill" : "disable"](e);
              }),
              Lo(ps, "wheel", qo),
              Lo(ms, "scroll", qo),
              clearInterval(Ts),
              Lo(ms, "touchcancel", so),
              Lo(vs, "touchstart", so),
              Po(Lo, ms, "pointerdown,touchstart,mousedown", io),
              Po(Lo, ms, "pointerup,touchend,mouseup", ro),
              _s.kill(),
              po(Lo);
            for (var n = 0; n < Vr.length; n += 3)
              Ro(Lo, Vr[n], Vr[n + 1]), Ro(Lo, Vr[n], Vr[n + 2]);
          }),
          (e.enable = function () {
            if (
              ((ps = window),
              (ms = document),
              (gs = ms.documentElement),
              (vs = ms.body),
              fs &&
                ((bs = fs.utils.toArray),
                (ws = fs.utils.clamp),
                (Bs = fs.core.context || so),
                (Ls = fs.core.suppressOverwrites || so),
                (js = ps.history.scrollRestoration || "auto"),
                (ra = ps.pageYOffset || 0),
                fs.core.globals("ScrollTrigger", e),
                vs))
            ) {
              (eo = 1),
                (($s = document.createElement("div")).style.height = "100vh"),
                ($s.style.position = "absolute"),
                ta(),
                (function e() {
                  return eo && requestAnimationFrame(e);
                })(),
                ds.register(fs),
                (e.isTouch = ds.isTouch),
                (Fs =
                  ds.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (Is = 1 === ds.isTouch),
                Ao(ps, "wheel", qo),
                (ys = [ps, ms, gs, vs]),
                fs.matchMedia
                  ? ((e.matchMedia = function (e) {
                      var t,
                        n = fs.matchMedia();
                      for (t in e) n.add(t, e[t]);
                      return n;
                    }),
                    fs.addEventListener("matchMediaInit", function () {
                      return Zo();
                    }),
                    fs.addEventListener("matchMediaRevert", function () {
                      return Qo();
                    }),
                    fs.addEventListener("matchMedia", function () {
                      ia(0, 1), Uo("matchMedia");
                    }),
                    fs.matchMedia().add("(orientation: portrait)", function () {
                      return Ho(), Ho;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                Ho(),
                Ao(ms, "scroll", qo);
              var t,
                n,
                i = vs.hasAttribute("style"),
                r = vs.style,
                s = r.borderTopStyle,
                o = fs.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  r.borderTopStyle = "solid",
                  t = Eo(vs),
                  is.m = Math.round(t.top + is.sc()) || 0,
                  ns.m = Math.round(t.left + ns.sc()) || 0,
                  s
                    ? (r.borderTopStyle = s)
                    : r.removeProperty("border-top-style"),
                  i ||
                    (vs.setAttribute("style", ""), vs.removeAttribute("style")),
                  Ts = setInterval(Wo, 250),
                  fs.delayedCall(0.5, function () {
                    return (Ks = 0);
                  }),
                  Ao(ms, "touchcancel", so),
                  Ao(vs, "touchstart", so),
                  Po(Ao, ms, "pointerdown,touchstart,mousedown", io),
                  Po(Ao, ms, "pointerup,touchend,mouseup", ro),
                  Es = fs.utils.checkPrefix("transform"),
                  la.push(Es),
                  hs = Qs(),
                  _s = fs.delayedCall(0.2, ia).pause(),
                  Ps = [
                    ms,
                    "visibilitychange",
                    function () {
                      var e = ps.innerWidth,
                        t = ps.innerHeight;
                      ms.hidden
                        ? ((ks = e), (Os = t))
                        : (ks === e && Os === t) || Go();
                    },
                    ms,
                    "DOMContentLoaded",
                    ia,
                    ps,
                    "load",
                    ia,
                    ps,
                    "resize",
                    Go,
                  ],
                  po(Ao),
                  jo.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  n = 0;
                n < Vr.length;
                n += 3
              )
                Ro(Lo, Vr[n], Vr[n + 1]), Ro(Lo, Vr[n], Vr[n + 2]);
            }
          }),
          (e.config = function (t) {
            "limitCallbacks" in t && (Gs = !!t.limitCallbacks);
            var n = t.syncInterval;
            (n && clearInterval(Ts)) || ((Ts = n) && setInterval(Wo, n)),
              "ignoreMobileResize" in t &&
                (Is = 1 === e.isTouch && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (po(Lo) || po(Ao, t.autoRefreshEvents || "none"),
                (Rs = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
          }),
          (e.scrollerProxy = function (e, t) {
            var n = rs(e),
              i = Vr.indexOf(n),
              r = uo(n);
            ~i && Vr.splice(i, r ? 6 : 2),
              t && (r ? Yr.unshift(ps, t, vs, t, gs, t) : Yr.unshift(n, t));
          }),
          (e.clearMatchMedia = function (e) {
            jo.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, n) {
            var i = (mo(e) ? rs(e) : e).getBoundingClientRect(),
              r = i[n ? "width" : "height"] * t || 0;
            return n
              ? i.right - r > 0 && i.left + r < ps.innerWidth
              : i.bottom - r > 0 && i.top + r < ps.innerHeight;
          }),
          (e.positionInViewport = function (e, t, n) {
            mo(e) && (e = rs(e));
            var i = e.getBoundingClientRect(),
              r = i[n ? "width" : "height"],
              s =
                null == t
                  ? r / 2
                  : t in No
                  ? No[t] * r
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * r) / 100
                  : parseFloat(t) || 0;
            return n
              ? (i.left + s) / ps.innerWidth
              : (i.top + s) / ps.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (jo.slice(0).forEach(function (e) {
                return "ScrollSmoother" !== e.vars.id && e.kill();
              }),
              !0 !== e)
            ) {
              var t = Vo.killAll || [];
              (Vo = {}),
                t.forEach(function (e) {
                  return e();
                });
            }
          }),
          e
        );
      })();
    (ba.version = "3.13.0"),
      (ba.saveStyles = function (e) {
        return e
          ? bs(e).forEach(function (e) {
              if (e && e.style) {
                var t = Ko.indexOf(e);
                t >= 0 && Ko.splice(t, 5),
                  Ko.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    fs.core.getCache(e),
                    Bs()
                  );
              }
            })
          : Ko;
      }),
      (ba.revert = function (e, t) {
        return Zo(!e, t);
      }),
      (ba.create = function (e, t) {
        return new ba(e, t);
      }),
      (ba.refresh = function (e) {
        return e ? Go(!0) : (hs || ba.register()) && ia(!0);
      }),
      (ba.update = function (e) {
        return ++Vr.cache && oa(!0 === e ? 2 : 0);
      }),
      (ba.clearScrollMemory = Jo),
      (ba.maxScroll = function (e, t) {
        return ho(e, t ? ns : is);
      }),
      (ba.getScrollFunc = function (e, t) {
        return ss(rs(e), t ? ns : is);
      }),
      (ba.getById = function (e) {
        return $o[e];
      }),
      (ba.getAll = function () {
        return jo.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (ba.isScrolling = function () {
        return !!Js;
      }),
      (ba.snapDirectional = Oo),
      (ba.addEventListener = function (e, t) {
        var n = Vo[e] || (Vo[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      (ba.removeEventListener = function (e, t) {
        var n = Vo[e],
          i = n && n.indexOf(t);
        i >= 0 && n.splice(i, 1);
      }),
      (ba.batch = function (e, t) {
        var n,
          i = [],
          r = {},
          s = t.interval || 0.016,
          o = t.batchMax || 1e9,
          a = function (e, t) {
            var n = [],
              i = [],
              r = fs
                .delayedCall(s, function () {
                  t(n, i), (n = []), (i = []);
                })
                .pause();
            return function (e) {
              n.length || r.restart(!0),
                n.push(e.trigger),
                i.push(e),
                o <= n.length && r.progress(1);
            };
          };
        for (n in t)
          r[n] =
            "on" === n.substr(0, 2) && go(t[n]) && "onRefreshInit" !== n
              ? a(0, t[n])
              : t[n];
        return (
          go(o) &&
            ((o = o()),
            Ao(ba, "refresh", function () {
              return (o = t.batchMax());
            })),
          bs(e).forEach(function (e) {
            var t = {};
            for (n in r) t[n] = r[n];
            (t.trigger = e), i.push(ba.create(t));
          }),
          i
        );
      });
    var wa,
      xa = function (e, t, n, i) {
        return (
          t > i ? e(i) : t < 0 && e(0),
          n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
        );
      },
      Ta = function e(t, n) {
        !0 === n
          ? t.style.removeProperty("touch-action")
          : (t.style.touchAction =
              !0 === n
                ? "auto"
                : n
                ? "pan-" + n + (ds.isTouch ? " pinch-zoom" : "")
                : "none"),
          t === gs && e(vs, n);
      },
      Sa = { auto: 1, scroll: 1 },
      Ca = function (e) {
        var t,
          n = e.event,
          i = e.target,
          r = e.axis,
          s = (n.changedTouches ? n.changedTouches[0] : n).target,
          o = s._gsap || fs.core.getCache(s),
          a = Qs();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
          for (
            ;
            s &&
            s !== vs &&
            ((s.scrollHeight <= s.clientHeight &&
              s.scrollWidth <= s.clientWidth) ||
              (!Sa[(t = So(s)).overflowY] && !Sa[t.overflowX]));

          )
            s = s.parentNode;
          (o._isScroll =
            s &&
            s !== i &&
            !uo(s) &&
            (Sa[(t = So(s)).overflowY] || Sa[t.overflowX])),
            (o._isScrollT = a);
        }
        (o._isScroll || "x" === r) &&
          (n.stopPropagation(), (n._gsapAllow = !0));
      },
      Ea = function (e, t, n, i) {
        return ds.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (i = i && Ca),
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function () {
            return n && Ao(ms, ds.eventTypes[0], ka, !1, !0);
          },
          onDisable: function () {
            return Lo(ms, ds.eventTypes[0], ka, !0);
          },
        });
      },
      Ma = /(input|label|select|textarea)/i,
      ka = function (e) {
        var t = Ma.test(e.target.tagName);
        (t || wa) && ((e._gsapAllow = !0), (wa = t));
      };
    (ba.sort = function (e) {
      if (go(e)) return jo.sort(e);
      var t = ps.pageYOffset || 0;
      return (
        ba.getAll().forEach(function (e) {
          return (e._sortY = e.trigger
            ? t + e.trigger.getBoundingClientRect().top
            : e.start + ps.innerHeight);
        }),
        jo.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                (e.vars.containerAnimation ? 1e6 : e._sortY) -
                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                  -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        )
      );
    }),
      (ba.observe = function (e) {
        return new ds(e);
      }),
      (ba.normalizeScroll = function (e) {
        if (void 0 === e) return zs;
        if (!0 === e && zs) return zs.enable();
        if (!1 === e) return zs && zs.kill(), void (zs = e);
        var t =
          e instanceof ds
            ? e
            : (function (e) {
                yo(e) || (e = {}),
                  (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
                  e.type || (e.type = "wheel,touch"),
                  (e.debounce = !!e.debounce),
                  (e.id = e.id || "normalizer");
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u = e,
                  c = u.normalizeScrollX,
                  d = u.momentum,
                  f = u.allowNestedScroll,
                  h = u.onRelease,
                  p = rs(e.target) || gs,
                  m = fs.core.globals().ScrollSmoother,
                  g = m && m.get(),
                  v =
                    Fs &&
                    ((e.content && rs(e.content)) ||
                      (g && !1 !== e.content && !g.smooth() && g.content())),
                  y = ss(p, is),
                  _ = ss(p, ns),
                  b = 1,
                  w =
                    (ds.isTouch && ps.visualViewport
                      ? ps.visualViewport.scale * ps.visualViewport.width
                      : ps.outerWidth) / ps.innerWidth,
                  x = 0,
                  T = go(d)
                    ? function () {
                        return d(t);
                      }
                    : function () {
                        return d || 2.8;
                      },
                  S = Ea(p, e.type, !0, f),
                  C = function () {
                    return (r = !1);
                  },
                  E = so,
                  M = so,
                  k = function () {
                    (n = ho(p, is)),
                      (M = ws(Fs ? 1 : 0, n)),
                      c && (E = ws(0, ho(p, ns))),
                      (i = ea);
                  },
                  O = function () {
                    (v._gsap.y = oo(parseFloat(v._gsap.y) + y.offset) + "px"),
                      (v.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        parseFloat(v._gsap.y) +
                        ", 0, 1)"),
                      (y.offset = y.cacheID = 0);
                  },
                  P = function () {
                    k(),
                      s.isActive() &&
                        s.vars.scrollY > n &&
                        (y() > n
                          ? s.progress(1) && y(n)
                          : s.resetTo("scrollY", n));
                  };
                return (
                  v && fs.set(v, { y: "+=0" }),
                  (e.ignoreCheck = function (e) {
                    return (
                      (Fs &&
                        "touchmove" === e.type &&
                        (function () {
                          if (r) {
                            requestAnimationFrame(C);
                            var e = oo(t.deltaY / 2),
                              n = M(y.v - e);
                            if (v && n !== y.v + y.offset) {
                              y.offset = n - y.v;
                              var i = oo(
                                (parseFloat(v && v._gsap.y) || 0) - y.offset
                              );
                              (v.style.transform =
                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                i +
                                ", 0, 1)"),
                                (v._gsap.y = i + "px"),
                                (y.cacheID = Vr.cache),
                                oa();
                            }
                            return !0;
                          }
                          y.offset && O(), (r = !0);
                        })()) ||
                      (b > 1.05 && "touchstart" !== e.type) ||
                      t.isGesturing ||
                      (e.touches && e.touches.length > 1)
                    );
                  }),
                  (e.onPress = function () {
                    r = !1;
                    var e = b;
                    (b = oo(
                      ((ps.visualViewport && ps.visualViewport.scale) || 1) / w
                    )),
                      s.pause(),
                      e !== b && Ta(p, b > 1.01 || (!c && "x")),
                      (o = _()),
                      (a = y()),
                      k(),
                      (i = ea);
                  }),
                  (e.onRelease = e.onGestureStart =
                    function (e, t) {
                      if ((y.offset && O(), t)) {
                        Vr.cache++;
                        var i,
                          r,
                          o = T();
                        c &&
                          ((r = (i = _()) + (0.05 * o * -e.velocityX) / 0.227),
                          (o *= xa(_, i, r, ho(p, ns))),
                          (s.vars.scrollX = E(r))),
                          (r = (i = y()) + (0.05 * o * -e.velocityY) / 0.227),
                          (o *= xa(y, i, r, ho(p, is))),
                          (s.vars.scrollY = M(r)),
                          s.invalidate().duration(o).play(0.01),
                          ((Fs && s.vars.scrollY >= n) || i >= n - 1) &&
                            fs.to({}, { onUpdate: P, duration: o });
                      } else l.restart(!0);
                      h && h(e);
                    }),
                  (e.onWheel = function () {
                    s._ts && s.pause(), Qs() - x > 1e3 && ((i = 0), (x = Qs()));
                  }),
                  (e.onChange = function (e, t, n, r, s) {
                    if (
                      (ea !== i && k(),
                      t &&
                        c &&
                        _(
                          E(r[2] === t ? o + (e.startX - e.x) : _() + t - r[1])
                        ),
                      n)
                    ) {
                      y.offset && O();
                      var l = s[2] === n,
                        u = l ? a + e.startY - e.y : y() + n - s[1],
                        d = M(u);
                      l && u !== d && (a += d - u), y(d);
                    }
                    (n || t) && oa();
                  }),
                  (e.onEnable = function () {
                    Ta(p, !c && "x"),
                      ba.addEventListener("refresh", P),
                      Ao(ps, "resize", P),
                      y.smooth &&
                        ((y.target.style.scrollBehavior = "auto"),
                        (y.smooth = _.smooth = !1)),
                      S.enable();
                  }),
                  (e.onDisable = function () {
                    Ta(p, !0),
                      Lo(ps, "resize", P),
                      ba.removeEventListener("refresh", P),
                      S.kill();
                  }),
                  (e.lockAxis = !1 !== e.lockAxis),
                  ((t = new ds(e)).iOS = Fs),
                  Fs && !y() && y(1),
                  Fs && fs.ticker.add(so),
                  (l = t._dc),
                  (s = fs.to(t, {
                    ease: "power4",
                    paused: !0,
                    inherit: !1,
                    scrollX: c ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                      scrollY: va(y, y(), function () {
                        return s.pause();
                      }),
                    },
                    onUpdate: oa,
                    onComplete: l.vars.onComplete,
                  })),
                  t
                );
              })(e);
        return (
          zs && zs.target === t.target && zs.kill(), uo(t.target) && (zs = t), t
        );
      }),
      (ba.core = {
        _getVelocityProp: os,
        _inputObserver: Ea,
        _scrollers: Vr,
        _proxies: Yr,
        bridge: {
          ss: function () {
            Js || Uo("scrollStart"), (Js = Qs());
          },
          ref: function () {
            return Ss;
          },
        },
      }),
      lo() && fs.registerPlugin(ba);
    var Oa,
      Pa,
      Aa,
      La,
      Ra,
      za,
      Ia,
      Na,
      Da = function () {
        return "undefined" != typeof window;
      },
      Fa = function () {
        return Oa || (Da() && (Oa = window.gsap) && Oa.registerPlugin && Oa);
      },
      Ba = function (e) {
        return "string" == typeof e;
      },
      ja = function (e) {
        return "function" == typeof e;
      },
      $a = function (e, t) {
        var n = "x" === t ? "Width" : "Height",
          i = "scroll" + n,
          r = "client" + n;
        return e === Aa || e === La || e === Ra
          ? Math.max(La[i], Ra[i]) - (Aa["inner" + n] || La[r] || Ra[r])
          : e[i] - e["offset" + n];
      },
      Wa = function (e, t) {
        var n = "scroll" + ("x" === t ? "Left" : "Top");
        return (
          e === Aa &&
            (null != e.pageXOffset
              ? (n = "page" + t.toUpperCase() + "Offset")
              : (e = null != La[n] ? La : Ra)),
          function () {
            return e[n];
          }
        );
      },
      qa = function (e, t) {
        if (!(e = za(e)[0]) || !e.getBoundingClientRect)
          return (
            console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0,
            }
          );
        var n = e.getBoundingClientRect(),
          i = !t || t === Aa || t === Ra,
          r = i
            ? {
                top:
                  La.clientTop -
                  (Aa.pageYOffset || La.scrollTop || Ra.scrollTop || 0),
                left:
                  La.clientLeft -
                  (Aa.pageXOffset || La.scrollLeft || Ra.scrollLeft || 0),
              }
            : t.getBoundingClientRect(),
          s = { x: n.left - r.left, y: n.top - r.top };
        return !i && t && ((s.x += Wa(t, "x")()), (s.y += Wa(t, "y")())), s;
      },
      Ha = function (e, t, n, i, r) {
        return isNaN(e) || "object" == typeof e
          ? Ba(e) && "=" === e.charAt(1)
            ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - r
            : "max" === e
            ? $a(t, n) - r
            : Math.min($a(t, n), qa(e, t)[n] - r)
          : parseFloat(e) - r;
      },
      Ga = function () {
        (Oa = Fa()),
          Da() &&
            Oa &&
            "undefined" != typeof document &&
            document.body &&
            ((Aa = window),
            (Ra = document.body),
            (La = document.documentElement),
            (za = Oa.utils.toArray),
            Oa.config({ autoKillThreshold: 7 }),
            (Ia = Oa.config()),
            (Pa = 1));
      },
      Va = {
        version: "3.13.0",
        name: "scrollTo",
        rawVars: 1,
        register: function (e) {
          (Oa = e), Ga();
        },
        init: function (e, t, n, i, r) {
          Pa || Ga();
          var s = Oa.getProperty(e, "scrollSnapType");
          (this.isWin = e === Aa),
            (this.target = e),
            (this.tween = n),
            (t = (function (e, t, n, i) {
              if ((ja(e) && (e = e(t, n, i)), "object" != typeof e))
                return Ba(e) && "max" !== e && "=" !== e.charAt(1)
                  ? { x: e, y: e }
                  : { y: e };
              if (e.nodeType) return { y: e, x: e };
              var r,
                s = {};
              for (r in e)
                s[r] = "onAutoKill" !== r && ja(e[r]) ? e[r](t, n, i) : e[r];
              return s;
            })(t, i, e, r)),
            (this.vars = t),
            (this.autoKill = !!("autoKill" in t ? t : Ia).autoKill),
            (this.getX = Wa(e, "x")),
            (this.getY = Wa(e, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            Na || (Na = Oa.core.globals().ScrollTrigger),
            "smooth" === Oa.getProperty(e, "scrollBehavior") &&
              Oa.set(e, { scrollBehavior: "auto" }),
            s &&
              "none" !== s &&
              ((this.snap = 1),
              (this.snapInline = e.style.scrollSnapType),
              (e.style.scrollSnapType = "none")),
            null != t.x
              ? (this.add(
                  this,
                  "x",
                  this.x,
                  Ha(t.x, e, "x", this.x, t.offsetX || 0),
                  i,
                  r
                ),
                this._props.push("scrollTo_x"))
              : (this.skipX = 1),
            null != t.y
              ? (this.add(
                  this,
                  "y",
                  this.y,
                  Ha(t.y, e, "y", this.y, t.offsetY || 0),
                  i,
                  r
                ),
                this._props.push("scrollTo_y"))
              : (this.skipY = 1);
        },
        render: function (e, t) {
          for (
            var n,
              i,
              r,
              s,
              o,
              a = t._pt,
              l = t.target,
              u = t.tween,
              c = t.autoKill,
              d = t.xPrev,
              f = t.yPrev,
              h = t.isWin,
              p = t.snap,
              m = t.snapInline;
            a;

          )
            a.r(e, a.d), (a = a._next);
          (n = h || !t.skipX ? t.getX() : d),
            (r = (i = h || !t.skipY ? t.getY() : f) - f),
            (s = n - d),
            (o = Ia.autoKillThreshold),
            t.x < 0 && (t.x = 0),
            t.y < 0 && (t.y = 0),
            c &&
              (!t.skipX && (s > o || s < -o) && n < $a(l, "x") && (t.skipX = 1),
              !t.skipY && (r > o || r < -o) && i < $a(l, "y") && (t.skipY = 1),
              t.skipX &&
                t.skipY &&
                (u.kill(),
                t.vars.onAutoKill &&
                  t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))),
            h
              ? Aa.scrollTo(t.skipX ? n : t.x, t.skipY ? i : t.y)
              : (t.skipY || (l.scrollTop = t.y),
                t.skipX || (l.scrollLeft = t.x)),
            !p ||
              (1 !== e && 0 !== e) ||
              ((i = l.scrollTop),
              (n = l.scrollLeft),
              m
                ? (l.style.scrollSnapType = m)
                : l.style.removeProperty("scroll-snap-type"),
              (l.scrollTop = i + 1),
              (l.scrollLeft = n + 1),
              (l.scrollTop = i),
              (l.scrollLeft = n)),
            (t.xPrev = t.x),
            (t.yPrev = t.y),
            Na && Na.update();
        },
        kill: function (e) {
          var t = "scrollTo" === e,
            n = this._props.indexOf(e);
          return (
            (t || "scrollTo_x" === e) && (this.skipX = 1),
            (t || "scrollTo_y" === e) && (this.skipY = 1),
            n > -1 && this._props.splice(n, 1),
            !this._props.length
          );
        },
      };
    (Va.max = $a),
      (Va.getOffset = qa),
      (Va.buildGetter = Wa),
      (Va.config = function (e) {
        for (var t in (Ia || Ga() || (Ia = Oa.config()), e)) Ia[t] = e[t];
      }),
      Fa() && Oa.registerPlugin(Va);
    let Ya,
      Xa,
      Ua,
      Ka = "undefined" != typeof Intl ? new Intl.Segmenter() : 0,
      Qa = (e) =>
        "string" == typeof e
          ? Qa(document.querySelectorAll(e))
          : "length" in e
          ? Array.from(e)
          : [e],
      Za = (e) => Qa(e).filter((e) => e instanceof HTMLElement),
      Ja = [],
      el = function () {},
      tl = /\s+/g,
      nl = new RegExp(
        "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
        "gu"
      ),
      il = { left: 0, top: 0, width: 0, height: 0 },
      rl = (e, t) => {
        if (t) {
          let n,
            i,
            r,
            s,
            o = new Set(e.join("").match(t) || Ja),
            a = e.length;
          if (o.size)
            for (; --a > -1; )
              for (r of ((i = e[a]), o))
                if (r.startsWith(i) && r.length > i.length) {
                  for (
                    n = 0, s = i;
                    r.startsWith((s += e[a + ++n])) && s.length < r.length;

                  );
                  if (n && s.length === r.length) {
                    (e[a] = r), e.splice(a + 1, n);
                    break;
                  }
                }
        }
        return e;
      },
      sl = (e) =>
        "inline" === window.getComputedStyle(e).display &&
        (e.style.display = "inline-block"),
      ol = (e, t, n) =>
        t.insertBefore(
          "string" == typeof e ? document.createTextNode(e) : e,
          n
        ),
      al = (e, t, n) => {
        let i = t[e + "sClass"] || "",
          { tag: r = "div", aria: s = "auto", propIndex: o = !1 } = t,
          a = "line" === e ? "block" : "inline-block",
          l = i.indexOf("++") > -1,
          u = (t) => {
            let u = document.createElement(r),
              c = n.length + 1;
            return (
              i && (u.className = i + (l ? " " + i + c : "")),
              o && u.style.setProperty("--" + e, c + ""),
              "none" !== s && u.setAttribute("aria-hidden", "true"),
              "span" !== r &&
                ((u.style.position = "relative"), (u.style.display = a)),
              (u.textContent = t),
              n.push(u),
              u
            );
          };
        return l && (i = i.replace("++", "")), (u.collection = n), u;
      },
      ll = (e, t, n, i, r, s, o, a, l, u) => {
        var c;
        let d,
          f,
          h,
          p,
          m,
          g,
          v,
          y,
          _,
          b,
          w,
          x,
          T,
          S,
          C,
          E,
          M,
          k,
          O = Array.from(e.childNodes),
          P = 0,
          { wordDelimiter: A, reduceWhiteSpace: L = !0, prepareText: R } = t,
          z = e.getBoundingClientRect(),
          I = z,
          N =
            !L &&
            "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
          D = 0,
          F = n.collection;
        for (
          "object" == typeof A
            ? ((h = A.delimiter || A), (f = A.replaceWith || ""))
            : (f = "" === A ? "" : A || " "),
            d = " " !== f;
          P < O.length;
          P++
        )
          if (3 === (p = O[P]).nodeType) {
            for (
              C = p.textContent || "",
                L
                  ? (C = C.replace(tl, " "))
                  : N && (C = C.replace(/\n/g, f + "\n")),
                R && (C = R(C, e)),
                p.textContent = C,
                M = (m = f || h ? C.split(h || f) : C.match(a) || Ja)[
                  m.length - 1
                ],
                y = d ? " " === M.slice(-1) : !M,
                M || m.pop(),
                I = z,
                (v = d ? " " === m[0].charAt(0) : !m[0]) && ol(" ", e, p),
                m[0] || m.shift(),
                rl(m, l),
                (s && u) || (p.textContent = ""),
                _ = 1;
              _ <= m.length;
              _++
            )
              if (
                ((E = m[_ - 1]),
                !L &&
                  N &&
                  "\n" === E.charAt(0) &&
                  (null == (c = p.previousSibling) || c.remove(),
                  ol(document.createElement("br"), e, p),
                  (E = E.slice(1))),
                L || "" !== E)
              )
                if (" " === E) e.insertBefore(document.createTextNode(" "), p);
                else {
                  if (
                    (d && " " === E.charAt(0) && ol(" ", e, p),
                    D && 1 === _ && !v && F.indexOf(D.parentNode) > -1
                      ? (g = F[F.length - 1]).appendChild(
                          document.createTextNode(i ? "" : E)
                        )
                      : ((g = n(i ? "" : E)),
                        ol(g, e, p),
                        D && 1 === _ && !v && g.insertBefore(D, g.firstChild)),
                    i)
                  )
                    for (
                      w = Ka
                        ? rl(
                            [...Ka.segment(E)].map((e) => e.segment),
                            l
                          )
                        : E.match(a) || Ja,
                        k = 0;
                      k < w.length;
                      k++
                    )
                      g.appendChild(
                        " " === w[k] ? document.createTextNode(" ") : i(w[k])
                      );
                  if (s && u) {
                    if (
                      ((C = p.textContent =
                        C.substring(E.length + 1, C.length)),
                      (b = g.getBoundingClientRect()).top > I.top &&
                        b.left <= I.left)
                    ) {
                      for (
                        x = e.cloneNode(), T = e.childNodes[0];
                        T && T !== g;

                      )
                        (S = T), (T = T.nextSibling), x.appendChild(S);
                      e.parentNode.insertBefore(x, e), r && sl(x);
                    }
                    I = b;
                  }
                  (_ < m.length || y) &&
                    ol(
                      _ >= m.length
                        ? " "
                        : d && " " === E.slice(-1)
                        ? " " + f
                        : f,
                      e,
                      p
                    );
                }
              else ol(f, e, p);
            e.removeChild(p), (D = 0);
          } else
            1 === p.nodeType &&
              (o && o.indexOf(p) > -1
                ? (F.indexOf(p.previousSibling) > -1 &&
                    F[F.length - 1].appendChild(p),
                  (D = p))
                : (ll(p, t, n, i, r, s, o, a, l, !0), (D = 0)),
              r && sl(p));
      };
    const ul = class e {
      constructor(e, t) {
        (this.isSplit = !1),
          Ua || cl.register(window.gsap),
          (this.elements = Za(e)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.masks = []),
          (this.vars = t),
          (this._split = () => this.isSplit && this.split(this.vars));
        let n,
          i = [],
          r = () => {
            let e,
              t = i.length;
            for (; t--; ) {
              let n = (e = i[t]).element.offsetWidth;
              if (n !== e.width) return (e.width = n), void this._split();
            }
          };
        (this._data = {
          orig: i,
          obs:
            "undefined" != typeof ResizeObserver &&
            new ResizeObserver(() => {
              clearTimeout(n), (n = setTimeout(r, 200));
            }),
        }),
          el(this),
          this.split(t);
      }
      split(e) {
        this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
        let t,
          {
            type: n = "chars,words,lines",
            aria: i = "auto",
            deepSlice: r = !0,
            smartWrap: s,
            onSplit: o,
            autoSplit: a = !1,
            specialChars: l,
            mask: u,
          } = this.vars,
          c = n.indexOf("lines") > -1,
          d = n.indexOf("chars") > -1,
          f = n.indexOf("words") > -1,
          h = d && !f && !c,
          p =
            l &&
            ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
          m = p ? new RegExp(p.source + "|" + nl.source, "gu") : nl,
          g = !!e.ignore && Za(e.ignore),
          { orig: v, animTime: y, obs: _ } = this._data;
        return (
          (d || f || c) &&
            (this.elements.forEach((t, n) => {
              (v[n] = {
                element: t,
                html: t.innerHTML,
                ariaL: t.getAttribute("aria-label"),
                ariaH: t.getAttribute("aria-hidden"),
              }),
                "auto" === i
                  ? t.setAttribute("aria-label", (t.textContent || "").trim())
                  : "hidden" === i && t.setAttribute("aria-hidden", "true");
              let o,
                a,
                l,
                u,
                y = [],
                _ = [],
                b = [],
                w = d ? al("char", e, y) : null,
                x = al("word", e, _);
              if ((ll(t, e, x, w, h, r && (c || h), g, m, p, !1), c)) {
                let n,
                  i = Qa(t.childNodes),
                  r = ((e, t, n, i) => {
                    let r = al("line", n, b),
                      s = window.getComputedStyle(e).textAlign || "left";
                    return (n, i) => {
                      let o = r("");
                      for (
                        o.style.textAlign = s, e.insertBefore(o, t[n]);
                        n < i;
                        n++
                      )
                        o.appendChild(t[n]);
                      o.normalize();
                    };
                  })(t, i, e),
                  s = [],
                  a = 0,
                  l = i.map((e) =>
                    1 === e.nodeType ? e.getBoundingClientRect() : il
                  ),
                  u = il;
                for (o = 0; o < i.length; o++)
                  1 === (n = i[o]).nodeType &&
                    ("BR" === n.nodeName
                      ? (s.push(n), r(a, o + 1), (u = l[(a = o + 1)]))
                      : (o &&
                          l[o].top > u.top &&
                          l[o].left <= u.left &&
                          (r(a, o), (a = o)),
                        (u = l[o])));
                a < o && r(a, o),
                  s.forEach((e) => {
                    var t;
                    return null == (t = e.parentNode)
                      ? void 0
                      : t.removeChild(e);
                  });
              }
              if (!f) {
                for (o = 0; o < _.length; o++)
                  if (
                    ((a = _[o]),
                    d || !a.nextSibling || 3 !== a.nextSibling.nodeType)
                  )
                    if (s && !c) {
                      for (
                        (l = document.createElement("span")).style.whiteSpace =
                          "nowrap";
                        a.firstChild;

                      )
                        l.appendChild(a.firstChild);
                      a.replaceWith(l);
                    } else a.replaceWith(...a.childNodes);
                  else
                    (u = a.nextSibling) &&
                      3 === u.nodeType &&
                      ((u.textContent =
                        (a.textContent || "") + (u.textContent || "")),
                      a.remove());
                (_.length = 0), t.normalize();
              }
              this.lines.push(...b),
                this.words.push(..._),
                this.chars.push(...y);
            }),
            u &&
              this[u] &&
              this.masks.push(
                ...this[u].map((e) => {
                  let t = e.cloneNode();
                  return (
                    e.replaceWith(t),
                    t.appendChild(e),
                    e.className &&
                      (t.className = e.className.replace(
                        /(\b\w+\b)/g,
                        "$1-mask"
                      )),
                    (t.style.overflow = "clip"),
                    t
                  );
                })
              )),
          (this.isSplit = !0),
          Xa &&
            (a
              ? Xa.addEventListener("loadingdone", this._split)
              : "loading" === Xa.status &&
                console.warn("SplitText called before fonts loaded")),
          (t = o && o(this)) &&
            t.totalTime &&
            (this._data.anim = y ? t.totalTime(y) : t),
          c &&
            a &&
            this.elements.forEach((e, t) => {
              (v[t].width = e.offsetWidth), _ && _.observe(e);
            }),
          this
        );
      }
      revert() {
        var e, t;
        let { orig: n, anim: i, obs: r } = this._data;
        return (
          r && r.disconnect(),
          n.forEach(({ element: e, html: t, ariaL: n, ariaH: i }) => {
            (e.innerHTML = t),
              n
                ? e.setAttribute("aria-label", n)
                : e.removeAttribute("aria-label"),
              i
                ? e.setAttribute("aria-hidden", i)
                : e.removeAttribute("aria-hidden");
          }),
          (this.chars.length =
            this.words.length =
            this.lines.length =
            n.length =
            this.masks.length =
              0),
          (this.isSplit = !1),
          null == Xa || Xa.removeEventListener("loadingdone", this._split),
          i && ((this._data.animTime = i.totalTime()), i.revert()),
          null == (t = (e = this.vars).onRevert) || t.call(e, this),
          this
        );
      }
      static create(t, n) {
        return new e(t, n);
      }
      static register(e) {
        (Ya = Ya || e || window.gsap) &&
          ((Qa = Ya.utils.toArray), (el = Ya.core.context || el)),
          !Ua && window.innerWidth > 0 && ((Xa = document.fonts), (Ua = !0));
      }
    };
    ul.version = "3.13.0";
    let cl = ul;
    var dl,
      fl,
      hl,
      pl,
      ml,
      gl,
      vl,
      yl,
      _l = function () {
        return "undefined" != typeof window;
      },
      bl = function () {
        return dl || (_l() && (dl = window.gsap) && dl.registerPlugin && dl);
      },
      wl = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      xl = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Tl = function (e) {
        return Math.round(1e4 * e) / 1e4;
      },
      Sl = function (e) {
        return parseFloat(e) || 0;
      },
      Cl = function (e, t) {
        var n = Sl(e);
        return ~e.indexOf("%") ? (n / 100) * t : n;
      },
      El = function (e, t) {
        return Sl(e.getAttribute(t));
      },
      Ml = Math.sqrt,
      kl = function (e, t, n, i, r, s) {
        return Ml(
          Math.pow((Sl(n) - Sl(e)) * r, 2) + Math.pow((Sl(i) - Sl(t)) * s, 2)
        );
      },
      Ol = function (e) {
        return console.warn(e);
      },
      Pl = function (e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect");
      },
      Al = function (e) {
        if (!(e = fl(e)[0])) return 0;
        var t,
          n,
          i,
          r,
          s,
          o,
          a,
          l = e.tagName.toLowerCase(),
          u = e.style,
          c = 1,
          d = 1;
        Pl(e) &&
          ((d = e.getScreenCTM()),
          (c = Ml(d.a * d.a + d.b * d.b)),
          (d = Ml(d.d * d.d + d.c * d.c)));
        try {
          n = e.getBBox();
        } catch (e) {
          Ol(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var f = n || { x: 0, y: 0, width: 0, height: 0 },
          h = f.x,
          p = f.y,
          m = f.width,
          g = f.height;
        if (
          ((n && (m || g)) ||
            !xl[l] ||
            ((m = El(e, xl[l][0])),
            (g = El(e, xl[l][1])),
            "rect" !== l && "line" !== l && ((m *= 2), (g *= 2)),
            "line" === l &&
              ((h = El(e, "x1")),
              (p = El(e, "y1")),
              (m = Math.abs(m - h)),
              (g = Math.abs(g - p)))),
          "path" === l)
        )
          (r = u.strokeDasharray),
            (u.strokeDasharray = "none"),
            (t = e.getTotalLength() || 0),
            Tl(c) !== Tl(d) &&
              !gl &&
              (gl = 1) &&
              Ol(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
              ),
            (t *= (c + d) / 2),
            (u.strokeDasharray = r);
        else if ("rect" === l) t = 2 * m * c + 2 * g * d;
        else if ("line" === l) t = kl(h, p, h + m, p + g, c, d);
        else if ("polyline" === l || "polygon" === l)
          for (
            i = e.getAttribute("points").match(wl) || [],
              "polygon" === l && i.push(i[0], i[1]),
              t = 0,
              s = 2;
            s < i.length;
            s += 2
          )
            t += kl(i[s - 2], i[s - 1], i[s], i[s + 1], c, d) || 0;
        else
          ("circle" !== l && "ellipse" !== l) ||
            ((o = (m / 2) * c),
            (a = (g / 2) * d),
            (t = Math.PI * (3 * (o + a) - Ml((3 * o + a) * (o + 3 * a)))));
        return t || 0;
      },
      Ll = function (e, t) {
        if (!(e = fl(e)[0])) return [0, 0];
        t || (t = Al(e) + 1);
        var n = hl.getComputedStyle(e),
          i = n.strokeDasharray || "",
          r = Sl(n.strokeDashoffset),
          s = i.indexOf(",");
        return (
          s < 0 && (s = i.indexOf(" ")),
          (i = s < 0 ? t : Sl(i.substr(0, s))) > t && (i = t),
          [-r || 0, i - r || 0]
        );
      },
      Rl = function () {
        _l() &&
          (document,
          (hl = window),
          (ml = dl = bl()),
          (fl = dl.utils.toArray),
          (vl = dl.core.getStyleSaver),
          (yl = dl.core.reverting || function () {}),
          (pl = -1 !== ((hl.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      zl = {
        version: "3.13.0",
        name: "drawSVG",
        register: function (e) {
          (dl = e), Rl();
        },
        init: function (e, t, n, i, r) {
          if (!e.getBBox) return !1;
          ml || Rl();
          var s,
            o,
            a,
            l = Al(e);
          return (
            (this.styles =
              vl && vl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
            (this.tween = n),
            (this._style = e.style),
            (this._target = e),
            t + "" == "true"
              ? (t = "0 100%")
              : t
              ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
              : (t = "0 0"),
            (o = (function (e, t, n) {
              var i,
                r,
                s = e.indexOf(" ");
              return (
                s < 0
                  ? ((i = void 0 !== n ? n + "" : e), (r = e))
                  : ((i = e.substr(0, s)), (r = e.substr(s + 1))),
                (i = Cl(i, t)) > (r = Cl(r, t)) ? [r, i] : [i, r]
              );
            })(t, l, (s = Ll(e, l))[0])),
            (this._length = Tl(l)),
            (this._dash = Tl(s[1] - s[0])),
            (this._offset = Tl(-s[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              Tl(o[1] - o[0]),
              0,
              0,
              0,
              0,
              0,
              1
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              Tl(-o[0]),
              0,
              0,
              0,
              0,
              0,
              1
            )),
            pl &&
              (a = hl.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
              ((o = Sl(a.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", o, o + 0.01)),
            (this._live = Pl(e) || ~(t + "").indexOf("live")),
            (this._nowrap = ~(t + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (e, t) {
          if (t.tween._time || !yl()) {
            var n,
              i,
              r,
              s,
              o = t._pt,
              a = t._style;
            if (o) {
              for (
                t._live &&
                (n = Al(t._target)) !== t._length &&
                ((i = n / t._length),
                (t._length = n),
                t._offsetPT && ((t._offsetPT.s *= i), (t._offsetPT.c *= i)),
                t._dashPT
                  ? ((t._dashPT.s *= i), (t._dashPT.c *= i))
                  : (t._dash *= i));
                o;

              )
                o.r(e, o.d), (o = o._next);
              (r = t._dash || (e && 1 !== e && 1e-4) || 0),
                (n = t._length - r + 0.1),
                (s = t._offset),
                r &&
                  s &&
                  r + Math.abs(s % t._length) > t._length - 0.05 &&
                  (s += s < 0 ? 0.005 : -0.005) &&
                  (n += 0.005),
                (a.strokeDashoffset = r ? s : s + 0.001),
                (a.strokeDasharray =
                  n < 0.1
                    ? "none"
                    : r
                    ? r + "px," + (t._nowrap ? 999999 : n) + "px"
                    : "0px, 999999px");
            }
          } else t.styles.revert();
        },
        getLength: Al,
        getPosition: Ll,
      };
    bl() && dl.registerPlugin(zl);
    var Il,
      Nl,
      Dl,
      Fl,
      Bl,
      jl,
      $l = n(12),
      Wl = n(13),
      ql = n.n(Wl),
      Hl = n(0),
      Gl = n(14),
      Vl = n.n(Gl),
      Yl = n(1),
      Xl = n.n(Yl);
    function Ul(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Kl(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return Kl(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Kl(e, t)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Kl(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    Mr.registerPlugin(ba, Va, cl, zl),
      document.documentElement.classList.remove("no-js"),
      (Il = document.querySelectorAll(".js-button-icon")),
      (Nl = document.querySelectorAll(".js-button-arrow")),
      (Dl = document.querySelectorAll(".js-button-arrow-icon-primary")),
      (Fl = document.querySelectorAll(".js-button-arrow-icon-secondary")),
      (Bl = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
      (jl = navigator.userAgent.toLowerCase().indexOf("firefox") > -1),
      (Bl || jl) &&
        (Il.forEach(function (e) {
          e.classList.remove(
            "xl:group-hover:translate-x-3",
            "xl:group-hover:rotate-45"
          );
        }),
        Nl.forEach(function (e) {
          e.classList.remove("xl:group-hover:translate-x-3");
        }),
        Dl.forEach(function (e) {
          e.classList.add(
            "xl:group-hover:translate-x-full",
            "xl:group-hover:-translate-y-full"
          );
        }),
        Fl.forEach(function (e) {
          e.classList.add(
            "xl:group-hover:translate-x-0",
            "xl:group-hover:translate-y-0"
          );
        })),
      document.querySelectorAll(".js-emoji-explosion").forEach(function (e) {
        e.addEventListener("mouseenter", function (e) {
          Object(Hl.emojisplosion)({
            emojis: ["🍆", "💯", "✨", "👀", "🔥", "💅"],
            emojiCount: 20,
            physics: {
              fontSize: 30,
              rotationDeceleration: 1,
              initialVelocities: {
                y: { max: -30, min: -12 },
                x: { max: 10, min: -10 },
              },
            },
            position: function () {
              return { x: e.clientX, y: e.clientY };
            },
            process: function (e) {
              e.style.zIndex = 10;
            },
          });
        });
      }),
      (function (e) {
        var t = Xl.a.getParser(window.navigator.userAgent),
          n = t.satisfies({ firefox: ">=1", safari: "<=14" }),
          i = t.satisfies({ safari: "<=14" });
        document.querySelectorAll(".js-cross-browser").forEach(function (e) {
          if (n) {
            if (e.getAttribute("data-firefox-safari-remove")) {
              var r,
                s = e.getAttribute("data-firefox-safari-remove").split("|");
              s && s.length > 0 && (r = e.classList).remove.apply(r, Ul(s));
            }
            if (e.getAttribute("data-firefox-safari-add")) {
              var o,
                a = e.getAttribute("data-firefox-safari-add").split("|");
              a && a.length > 0 && (o = e.classList).add.apply(o, Ul(a));
            }
            document.querySelectorAll(".js-facts").forEach(function (e) {
              (e.style.filter = "none"), e.classList.add("space-x-2");
            });
          }
          if (
            (i &&
              document.querySelectorAll(".gooey-content").forEach(function (e) {
                e.classList.remove("gooey-content");
              }),
            "Windows" === t.getOSName())
          ) {
            if (
              null === e.getAttribute("data-windows-remove") ||
              null === e.getAttribute("data-windows-add")
            )
              return;
            var l,
              u,
              c = e.getAttribute("data-windows-remove").split("|"),
              d = e.getAttribute("data-windows-add").split("|");
            c &&
              d &&
              ((l = e.classList).remove.apply(l, Ul(c)),
              (u = e.classList).add.apply(u, Ul(d)));
          }
          if ("Android" === t.getOSName()) {
            if (
              null === e.getAttribute("data-android-remove") ||
              null === e.getAttribute("data-android-add")
            )
              return;
            var f,
              h,
              p = e.getAttribute("data-android-remove").split("|"),
              m = e.getAttribute("data-android-add").split("|");
            p &&
              m &&
              ((f = e.classList).remove.apply(f, Ul(p)),
              (h = e.classList).add.apply(h, Ul(m)));
          }
        });
      })(),
      (window.Cookies = o.a),
      (window.Alpine = i.a),
      W.use([
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          function r(t) {
            let n;
            return (
              t &&
                ((n = b(t)),
                e.params.uniqueNavElements &&
                  "string" == typeof t &&
                  n.length > 1 &&
                  1 === e.$el.find(t).length &&
                  (n = e.$el.find(t))),
              n
            );
          }
          function s(t, n) {
            const i = e.params.navigation;
            t &&
              t.length > 0 &&
              (t[n ? "addClass" : "removeClass"](i.disabledClass),
              t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
              e.params.watchOverflow &&
                e.enabled &&
                t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
          }
          function o() {
            if (e.params.loop) return;
            const { $nextEl: t, $prevEl: n } = e.navigation;
            s(n, e.isBeginning && !e.params.rewind),
              s(t, e.isEnd && !e.params.rewind);
          }
          function a(t) {
            t.preventDefault(),
              (!e.isBeginning || e.params.loop || e.params.rewind) &&
                (e.slidePrev(), i("navigationPrev"));
          }
          function l(t) {
            t.preventDefault(),
              (!e.isEnd || e.params.loop || e.params.rewind) &&
                (e.slideNext(), i("navigationNext"));
          }
          function u() {
            const t = e.params.navigation;
            if (
              ((e.params.navigation = q(
                e,
                e.originalParams.navigation,
                e.params.navigation,
                { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
              )),
              !t.nextEl && !t.prevEl)
            )
              return;
            const n = r(t.nextEl),
              i = r(t.prevEl);
            n && n.length > 0 && n.on("click", l),
              i && i.length > 0 && i.on("click", a),
              Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: i,
                prevEl: i && i[0],
              }),
              e.enabled ||
                (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass));
          }
          function c() {
            const { $nextEl: t, $prevEl: n } = e.navigation;
            t &&
              t.length &&
              (t.off("click", l),
              t.removeClass(e.params.navigation.disabledClass)),
              n &&
                n.length &&
                (n.off("click", a),
                n.removeClass(e.params.navigation.disabledClass));
          }
          t({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled",
            },
          }),
            (e.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null,
            }),
            n("init", () => {
              !1 === e.params.navigation.enabled ? d() : (u(), o());
            }),
            n("toEdge fromEdge lock unlock", () => {
              o();
            }),
            n("destroy", () => {
              c();
            }),
            n("enable disable", () => {
              const { $nextEl: t, $prevEl: n } = e.navigation;
              t &&
                t[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                ),
                n &&
                  n[e.enabled ? "removeClass" : "addClass"](
                    e.params.navigation.lockClass
                  );
            }),
            n("click", (t, n) => {
              const { $nextEl: r, $prevEl: s } = e.navigation,
                o = n.target;
              if (
                e.params.navigation.hideOnClick &&
                !b(o).is(s) &&
                !b(o).is(r)
              ) {
                if (
                  e.pagination &&
                  e.params.pagination &&
                  e.params.pagination.clickable &&
                  (e.pagination.el === o || e.pagination.el.contains(o))
                )
                  return;
                let t;
                r
                  ? (t = r.hasClass(e.params.navigation.hiddenClass))
                  : s && (t = s.hasClass(e.params.navigation.hiddenClass)),
                  i(!0 === t ? "navigationShow" : "navigationHide"),
                  r && r.toggleClass(e.params.navigation.hiddenClass),
                  s && s.toggleClass(e.params.navigation.hiddenClass);
              }
            });
          const d = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
          };
          Object.assign(e.navigation, {
            enable: () => {
              e.$el.removeClass(e.params.navigation.navigationDisabledClass),
                u(),
                o();
            },
            disable: d,
            update: o,
            init: u,
            destroy: c,
          });
        },
      ]),
      W.use([
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          const r = "swiper-pagination";
          let s;
          t({
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: r + "-bullet",
              bulletActiveClass: r + "-bullet-active",
              modifierClass: r + "-",
              currentClass: r + "-current",
              totalClass: r + "-total",
              hiddenClass: r + "-hidden",
              progressbarFillClass: r + "-progressbar-fill",
              progressbarOppositeClass: r + "-progressbar-opposite",
              clickableClass: r + "-clickable",
              lockClass: r + "-lock",
              horizontalClass: r + "-horizontal",
              verticalClass: r + "-vertical",
              paginationDisabledClass: r + "-disabled",
            },
          }),
            (e.pagination = { el: null, $el: null, bullets: [] });
          let o = 0;
          function a() {
            return (
              !e.params.pagination.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            );
          }
          function l(t, n) {
            const { bulletActiveClass: i } = e.params.pagination;
            t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
          }
          function u() {
            const t = e.rtl,
              n = e.params.pagination;
            if (a()) return;
            const r =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              u = e.pagination.$el;
            let c;
            const d = e.params.loop
              ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((c = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )) >
                    r - 1 - 2 * e.loopedSlides && (c -= r - 2 * e.loopedSlides),
                  c > d - 1 && (c -= d),
                  c < 0 && "bullets" !== e.params.paginationType && (c = d + c))
                : (c =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === n.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              const i = e.pagination.bullets;
              let r, a, d;
              if (
                (n.dynamicBullets &&
                  ((s = i
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  u.css(
                    e.isHorizontal() ? "width" : "height",
                    s * (n.dynamicMainBullets + 4) + "px"
                  ),
                  n.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((o += c - (e.previousIndex - e.loopedSlides || 0)) >
                    n.dynamicMainBullets - 1
                      ? (o = n.dynamicMainBullets - 1)
                      : o < 0 && (o = 0)),
                  (r = Math.max(c - o, 0)),
                  (d =
                    ((a = r + (Math.min(i.length, n.dynamicMainBullets) - 1)) +
                      r) /
                    2)),
                i.removeClass(
                  ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                    .map((e) => `${n.bulletActiveClass}${e}`)
                    .join(" ")
                ),
                u.length > 1)
              )
                i.each((e) => {
                  const t = b(e),
                    i = t.index();
                  i === c && t.addClass(n.bulletActiveClass),
                    n.dynamicBullets &&
                      (i >= r &&
                        i <= a &&
                        t.addClass(n.bulletActiveClass + "-main"),
                      i === r && l(t, "prev"),
                      i === a && l(t, "next"));
                });
              else {
                const t = i.eq(c),
                  s = t.index();
                if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                  const t = i.eq(r),
                    o = i.eq(a);
                  for (let e = r; e <= a; e += 1)
                    i.eq(e).addClass(n.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (s >= i.length) {
                      for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                        i.eq(i.length - e).addClass(
                          n.bulletActiveClass + "-main"
                        );
                      i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                        n.bulletActiveClass + "-prev"
                      );
                    } else l(t, "prev"), l(o, "next");
                  else l(t, "prev"), l(o, "next");
                }
              }
              if (n.dynamicBullets) {
                const r = Math.min(i.length, n.dynamicMainBullets + 4),
                  o = (s * r - s) / 2 - d * s,
                  a = t ? "right" : "left";
                i.css(e.isHorizontal() ? a : "top", o + "px");
              }
            }
            if (
              ("fraction" === n.type &&
                (u.find(H(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
                u.find(H(n.totalClass)).text(n.formatFractionTotal(d))),
              "progressbar" === n.type)
            ) {
              let t;
              t = n.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              const i = (c + 1) / d;
              let r = 1,
                s = 1;
              "horizontal" === t ? (r = i) : (s = i),
                u
                  .find(H(n.progressbarFillClass))
                  .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`)
                  .transition(e.params.speed);
            }
            "custom" === n.type && n.renderCustom
              ? (u.html(n.renderCustom(e, c + 1, d)),
                i("paginationRender", u[0]))
              : i("paginationUpdate", u[0]),
              e.params.watchOverflow &&
                e.enabled &&
                u[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
          }
          function c() {
            const t = e.params.pagination;
            if (a()) return;
            const n =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              r = e.pagination.$el;
            let s = "";
            if ("bullets" === t.type) {
              let i = e.params.loop
                ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              e.params.freeMode &&
                e.params.freeMode.enabled &&
                !e.params.loop &&
                i > n &&
                (i = n);
              for (let n = 0; n < i; n += 1)
                t.renderBullet
                  ? (s += t.renderBullet.call(e, n, t.bulletClass))
                  : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
              r.html(s), (e.pagination.bullets = r.find(H(t.bulletClass)));
            }
            "fraction" === t.type &&
              ((s = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
              r.html(s)),
              "progressbar" === t.type &&
                ((s = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : `<span class="${t.progressbarFillClass}"></span>`),
                r.html(s)),
              "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
          }
          function d() {
            e.params.pagination = q(
              e,
              e.originalParams.pagination,
              e.params.pagination,
              { el: "swiper-pagination" }
            );
            const t = e.params.pagination;
            if (!t.el) return;
            let n = b(t.el);
            0 !== n.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                n.length > 1 &&
                (n = e.$el.find(t.el)).length > 1 &&
                (n = n.filter((t) => b(t).parents(".swiper")[0] === e.el)),
              "bullets" === t.type &&
                t.clickable &&
                n.addClass(t.clickableClass),
              n.addClass(t.modifierClass + t.type),
              n.addClass(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (o = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                n.addClass(t.progressbarOppositeClass),
              t.clickable &&
                n.on("click", H(t.bulletClass), function (t) {
                  t.preventDefault();
                  let n = b(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (n += e.loopedSlides), e.slideTo(n);
                }),
              Object.assign(e.pagination, { $el: n, el: n[0] }),
              e.enabled || n.addClass(t.lockClass));
          }
          function f() {
            const t = e.params.pagination;
            if (a()) return;
            const n = e.pagination.$el;
            n.removeClass(t.hiddenClass),
              n.removeClass(t.modifierClass + t.type),
              n.removeClass(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              e.pagination.bullets &&
                e.pagination.bullets.removeClass &&
                e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && n.off("click", H(t.bulletClass));
          }
          n("init", () => {
            !1 === e.params.pagination.enabled ? h() : (d(), c(), u());
          }),
            n("activeIndexChange", () => {
              (e.params.loop || void 0 === e.snapIndex) && u();
            }),
            n("snapIndexChange", () => {
              e.params.loop || u();
            }),
            n("slidesLengthChange", () => {
              e.params.loop && (c(), u());
            }),
            n("snapGridLengthChange", () => {
              e.params.loop || (c(), u());
            }),
            n("destroy", () => {
              f();
            }),
            n("enable disable", () => {
              const { $el: t } = e.pagination;
              t &&
                t[e.enabled ? "removeClass" : "addClass"](
                  e.params.pagination.lockClass
                );
            }),
            n("lock unlock", () => {
              u();
            }),
            n("click", (t, n) => {
              const r = n.target,
                { $el: s } = e.pagination;
              if (
                e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                s &&
                s.length > 0 &&
                !b(r).hasClass(e.params.pagination.bulletClass)
              ) {
                if (
                  e.navigation &&
                  ((e.navigation.nextEl && r === e.navigation.nextEl) ||
                    (e.navigation.prevEl && r === e.navigation.prevEl))
                )
                  return;
                const t = s.hasClass(e.params.pagination.hiddenClass);
                i(!0 === t ? "paginationShow" : "paginationHide"),
                  s.toggleClass(e.params.pagination.hiddenClass);
              }
            });
          const h = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.addClass(
                  e.params.pagination.paginationDisabledClass
                ),
              f();
          };
          Object.assign(e.pagination, {
            enable: () => {
              e.$el.removeClass(e.params.pagination.paginationDisabledClass),
                e.pagination.$el &&
                  e.pagination.$el.removeClass(
                    e.params.pagination.paginationDisabledClass
                  ),
                d(),
                c(),
                u();
            },
            disable: h,
            render: c,
            update: u,
            init: d,
            destroy: f,
          });
        },
      ]),
      W.use([
        function ({ swiper: e, extendParams: t, on: n }) {
          t({ fadeEffect: { crossFade: !1, transformEl: null } }),
            (function (e) {
              const {
                effect: t,
                swiper: n,
                on: i,
                setTranslate: r,
                setTransition: s,
                overwriteParams: o,
                perspective: a,
                recreateShadows: l,
                getEffectParams: u,
              } = e;
              let c;
              i("beforeInit", () => {
                if (n.params.effect !== t) return;
                n.classNames.push(`${n.params.containerModifierClass}${t}`),
                  a &&
                    a() &&
                    n.classNames.push(n.params.containerModifierClass + "3d");
                const e = o ? o() : {};
                Object.assign(n.params, e), Object.assign(n.originalParams, e);
              }),
                i("setTranslate", () => {
                  n.params.effect === t && r();
                }),
                i("setTransition", (e, i) => {
                  n.params.effect === t && s(i);
                }),
                i("transitionEnd", () => {
                  if (n.params.effect === t && l) {
                    if (!u || !u().slideShadows) return;
                    n.slides.each((e) => {
                      n.$(e)
                        .find(
                          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .remove();
                    }),
                      l();
                  }
                }),
                i("virtualUpdate", () => {
                  n.params.effect === t &&
                    (n.slides.length || (c = !0),
                    requestAnimationFrame(() => {
                      c && n.slides && n.slides.length && (r(), (c = !1));
                    }));
                });
            })({
              effect: "fade",
              swiper: e,
              on: n,
              setTranslate: () => {
                const { slides: t } = e,
                  n = e.params.fadeEffect;
                for (let i = 0; i < t.length; i += 1) {
                  const t = e.slides.eq(i);
                  let r = -t[0].swiperSlideOffset;
                  e.params.virtualTranslate || (r -= e.translate);
                  let s = 0;
                  e.isHorizontal() || ((s = r), (r = 0));
                  const o = e.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(t[0].progress), 0)
                    : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                  G(n, t)
                    .css({ opacity: o })
                    .transform(`translate3d(${r}px, ${s}px, 0px)`);
                }
              },
              setTransition: (t) => {
                const { transformEl: n } = e.params.fadeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t),
                  (function ({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: i,
                  }) {
                    const { slides: r, activeIndex: s, $wrapperEl: o } = e;
                    if (e.params.virtualTranslate && 0 !== t) {
                      let t,
                        a = !1;
                      (t = i
                        ? n
                          ? r.find(n)
                          : r
                        : n
                        ? r.eq(s).find(n)
                        : r.eq(s)).transitionEnd(() => {
                        if (a) return;
                        if (!e || e.destroyed) return;
                        (a = !0), (e.animating = !1);
                        const t = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
                      });
                    }
                  })({ swiper: e, duration: t, transformEl: n, allSlides: !0 });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode,
              }),
            });
        },
      ]),
      W.use([
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          let r;
          function s() {
            if (!e.size)
              return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
            const t = e.slides.eq(e.activeIndex);
            let n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(r),
              (r = w(() => {
                let t;
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      (t = e.slidePrev(e.params.speed, !0, !0)),
                      i("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? a()
                      : ((t = e.slideTo(
                          e.slides.length - 1,
                          e.params.speed,
                          !0,
                          !0
                        )),
                        i("autoplay"))
                    : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    (t = e.slideNext(e.params.speed, !0, !0)),
                    i("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? a()
                    : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                      i("autoplay"))
                  : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
                  ((e.params.cssMode && e.autoplay.running) || !1 === t) && s();
              }, n));
          }
          function o() {
            return (
              void 0 === r &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0), i("autoplayStart"), s(), !0)
            );
          }
          function a() {
            return (
              !!e.autoplay.running &&
              void 0 !== r &&
              (r && (clearTimeout(r), (r = void 0)),
              (e.autoplay.running = !1),
              i("autoplayStop"),
              !0)
            );
          }
          function l(t) {
            e.autoplay.running &&
              (e.autoplay.paused ||
                (r && clearTimeout(r),
                (e.autoplay.paused = !0),
                0 !== t && e.params.autoplay.waitForTransition
                  ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                      e.$wrapperEl[0].addEventListener(t, d);
                    })
                  : ((e.autoplay.paused = !1), s())));
          }
          function u() {
            const t = c();
            "hidden" === t.visibilityState && e.autoplay.running && l(),
              "visible" === t.visibilityState &&
                e.autoplay.paused &&
                (s(), (e.autoplay.paused = !1));
          }
          function d(t) {
            e &&
              !e.destroyed &&
              e.$wrapperEl &&
              t.target === e.$wrapperEl[0] &&
              (["transitionend", "webkitTransitionEnd"].forEach((t) => {
                e.$wrapperEl[0].removeEventListener(t, d);
              }),
              (e.autoplay.paused = !1),
              e.autoplay.running ? s() : a());
          }
          function f() {
            e.params.autoplay.disableOnInteraction
              ? a()
              : (i("autoplayPause"), l()),
              ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                e.$wrapperEl[0].removeEventListener(t, d);
              });
          }
          function h() {
            e.params.autoplay.disableOnInteraction ||
              ((e.autoplay.paused = !1), i("autoplayResume"), s());
          }
          (e.autoplay = { running: !1, paused: !1 }),
            t({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }),
            n("init", () => {
              e.params.autoplay.enabled &&
                (o(),
                c().addEventListener("visibilitychange", u),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", f), e.$el.on("mouseleave", h)));
            }),
            n("beforeTransitionStart", (t, n, i) => {
              e.autoplay.running &&
                (i || !e.params.autoplay.disableOnInteraction
                  ? e.autoplay.pause(n)
                  : a());
            }),
            n("sliderFirstMove", () => {
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction ? a() : l());
            }),
            n("touchEnd", () => {
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                s();
            }),
            n("destroy", () => {
              e.$el.off("mouseenter", f),
                e.$el.off("mouseleave", h),
                e.autoplay.running && a(),
                c().removeEventListener("visibilitychange", u);
            }),
            Object.assign(e.autoplay, { pause: l, run: s, start: o, stop: a });
        },
      ]),
      (window.Swiper = W),
      (window.gsap = Mr),
      (window.ScrollTrigger = ba),
      (window.ScrollToPlugin = Va),
      (window.DrawSVGPlugin = zl),
      (window.SplitText = cl),
      (window.Splitting = ql.a),
      (window.Packery = Vl.a),
      (window.Bowser = Xl.a),
      (window.TweenMax = kr),
      (window.TimelineMax = En),
      (window.tocbot = $l),
      (window.emojisplosion = Hl.emojisplosion),
      (window.defaultPhysics = Hl.defaultPhysics),
      i.a.plugin(function (e) {
        function t(t, { modifiers: n }) {
          let i = r(n, "duration", 250) / 1e3,
            s = r(n, "min", 0),
            o = !n.includes("min");
          t._x_isShown || (t.style.height = s + "px"),
            !t._x_isShown && o && (t.hidden = !0),
            t._x_isShown || (t.style.overflow = "hidden");
          let a = (t, n) => {
              let i = e.setStyles(t, n);
              return n.height ? () => {} : i;
            },
            l = {
              transitionProperty: "height",
              transitionDuration: i + "s",
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            };
          t._x_transition = {
            in(n = () => {}, i = () => {}) {
              o && (t.hidden = !1), o && (t.style.display = null);
              let r = t.getBoundingClientRect().height;
              t.style.height = "auto";
              let a = t.getBoundingClientRect().height;
              r === a && (r = s),
                e.transition(
                  t,
                  e.setStyles,
                  {
                    during: l,
                    start: { height: r + "px" },
                    end: { height: a + "px" },
                  },
                  () => (t._x_isShown = !0),
                  () => {
                    t.getBoundingClientRect().height == a &&
                      (t.style.overflow = null);
                  }
                );
            },
            out(n = () => {}, i = () => {}) {
              let r = t.getBoundingClientRect().height;
              e.transition(
                t,
                a,
                {
                  during: l,
                  start: { height: r + "px" },
                  end: { height: s + "px" },
                },
                () => (t.style.overflow = "hidden"),
                () => {
                  (t._x_isShown = !1),
                    t.style.height == s + "px" &&
                      o &&
                      ((t.style.display = "none"), (t.hidden = !0));
                }
              );
            },
          };
        }
        e.directive("collapse", t),
          (t.inline = (e, { modifiers: t }) => {
            t.includes("min") &&
              ((e._x_doShow = () => {}), (e._x_doHide = () => {}));
          });
      }),
      i.a.start();
  },
]);
