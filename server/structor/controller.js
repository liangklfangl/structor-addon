"use strict";
function _interopRequireWildcard(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (null != e)
    for (var t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  return (r.default = e), r;
}
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function loopback(e) {
  return Promise.resolve("Response: " + e.message);
}
function error(e) {
  return Promise.reject("Response: " + e.message);
}
function setServer(e) {
  (serverRef = e),
    _structorCommons.config.status() === _structorCommons.config.READY &&
      (initServer(), initProxyServer());
}
function initServer() {
  serverRef &&
    (serverRef.app.use(middlewareCompilerManager.getDevMiddleware()),
    serverRef.app.use(middlewareCompilerManager.getHotMiddleware()),
    serverRef.app.use(
      middlewareCompilerManager.getBuilderMiddleware({
        callback: function(e) {
          serverRef.ioSocketClient &&
            serverRef.ioSocketClient.emit("compiler.message", e);
        }
      })
    ),
    serverRef.app.use(
      (0, _expressUrlrewrite2.default)(
        "/structor-deskpage/*",
        "/structor-desk/index.html"
      )
    ),
    serverRef.app.use(
      "/structor-desk",
      _express2.default.static(_structorCommons.config.deskDirPath())
    ),
    serverRef.app.use(
      "/structor-gengine-scaffolds",
      _express2.default.static(_structorCommons.config.scaffoldsDirPath())
    ));
}
function initProxyServer() {
  serverRef &&
    !proxy &&
    _structorCommons.config.projectProxyURL() &&
    ((proxy = _httpProxy2.default.createProxyServer({})),
    proxy.on("error", function(e, r, t) {
      var o =
        "Proxy server error connecting to " +
        _structorCommons.config.projectProxyURL() +
        r.url +
        " " +
        (e.message ? e.message : e);
      t.writeHead(500, o), t.end(o), console.error(o);
    }),
    proxy.on("proxyReq", function() {
      var e = _structorCommons.config.projectProxyURL();
      if (e) {
        var r = e.replace("http://", "");
        return function(e, t, o, n) {
          e.setHeader("X-Forwarded-Host", r);
        };
      }
    }),
    serverRef.app.all("/*", function(e, r, t) {
      var o = e.url;
      if (checkDeniedProxyURL(o)) t("route");
      else {
        var n = _structorCommons.config.projectProxyURL();
        n && n.length > 0 ? proxy.web(e, r, { target: n }) : t("route");
      }
    }));
}
function checkDeniedProxyURL(e) {
  var r = !1;
  if (e)
    for (var t = 0; t < STRUCTOR_URLS.length; t++)
      if (0 === e.indexOf(STRUCTOR_URLS[t])) {
        r = !0;
        break;
      }
  return r;
}
function getModel() {
  return _structorCommons.storage.readProjectJsonModel();
}
function getConfig() {
  return Promise.resolve(_structorCommons.config.asObject());
}
function getProjectStatus() {
  return Promise.resolve(_structorCommons.config.status());
}
function setProxyURL(e) {
  return _structorCommons.config.projectProxyURL(e.proxyURL).then(function() {
    initProxyServer();
  });
}
function getComponentTree() {
  return _structorCommons.storage.getComponentTree();
}
function writeComponentDefaults(e) {
  var r = e.componentName,
    t = e.namespace,
    o = e.defaults;
  return _structorCommons.storage.writeComponentDefaults(r, t, o);
}
function getComponentNotes(e) {
  return _structorCommons.storage.readComponentDocument(
    e.componentName,
    e.namespace
  );
}
function getComponentSourceCode(e) {
  return _structorCommons.storage.readComponentSourceCode(e.filePath);
}
function writeComponentSourceCode(e) {
    console.log('服务端接受到写入的数据为===',e);
  return _structorCommons.storage.writeComponentSourceCode(
    e.filePath,
    e.sourceCode
  );
}
function saveProjectModel(e) {
  return _structorCommons.storage.writeProjectJsonModel(e.model);
}
function pregenerate(e) {
  var r = (e.generatorName, e.generatorDirPath),
    t = e.namespace,
    o = e.componentName,
    n = e.model,
    s = {
      namespace: t,
      componentName: o,
      model: n,
      project: _structorCommons.config.getProjectConfig()
    };
  return _structorCommons.storage.getComponentTree().then(function(e) {
    return (s.index = e), gengineManager.preProcess(r, s);
  });
}
function generate(e) {
  var r = (e.generatorName, e.generatorDirPath),
    t = e.namespace,
    o = e.componentName,
    n = e.model,
    s = e.metadata,
    a = {
      namespace: t,
      componentName: o,
      model: n,
      metadata: s,
      project: _structorCommons.config.getProjectConfig()
    };
  return _structorCommons.storage.getComponentTree().then(function(e) {
    return (a.index = e), gengineManager.process(r, a);
  });
}
function generateApplication(e) {
  var r = _structorCommons.config.applicationGeneratorDirPath(),
    t = e.pagesModel,
    o = e.hasApplicationFiles,
    n = {
      pagesModel: t,
      hasApplicationFiles: o,
      project: _structorCommons.config.getProjectConfig()
    };
  return _structorCommons.storage
    .getComponentTree()
    .then(function(e) {
      return (n.index = e), gengineManager.process(r, n);
    })
    .then(function(e) {
      var r = e.files,
        t = e.dependencies;
      return _structorCommons.storage.saveGenerated(t, r);
    });
}
function saveGenerated(e) {
  var r = e.files,
    t = e.dependencies;
  return _structorCommons.storage.saveGenerated(t, r);
}
function preExtractNamespaces(e) {
  var r = e.namespaces;
  return extractManager.getAllDependencies(r);
}
function extractNamespaces(e) {
  var r = e.namespaces,
    t = e.dependencies,
    o = e.dirPath;
  return extractManager.extractNamespaces(r, t, o);
}
function getMarketList(e) {
  return installManager.getMarketList();
}
function getGHRepoInfo(e) {
  var r = e.gitHubRepo,
    t = e.gitHubOwner;
  return installManager.getGHRepoInfo(r, t);
}
function preInstall(e) {
  var r = e.dirPath,
    t = e.url;
  return installManager.preInstall(r, t);
}
function cancelInstall(e) {
  return installManager.cleanDistr();
}
function installFromLocalDir(e) {
  var r = e.dirPath;
  return installManager.installFromDir(r);
}
function getScaffoldGenerators(e) {
  var r = "/structor-gengine-scaffolds",
    t = _structorCommons.config.scaffoldsDirPath();
  return _structorCommons.storage.getScaffoldGenerators().then(function(e) {
    return (
      e &&
        e.length > 0 &&
        (e.forEach(function(e) {
          e.screenshotFilePath = e.screenshotFilePath.replace(t, r);
        }),
        (e = (0, _lodash.sortBy)(e, ["name"]))),
      e
    );
  });
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.STRUCTOR_URLS = void 0),
  (exports.loopback = loopback),
  (exports.error = error),
  (exports.setServer = setServer),
  (exports.getModel = getModel),
  (exports.getConfig = getConfig),
  (exports.getProjectStatus = getProjectStatus),
  (exports.setProxyURL = setProxyURL),
  (exports.getComponentTree = getComponentTree),
  (exports.writeComponentDefaults = writeComponentDefaults),
  (exports.getComponentNotes = getComponentNotes),
  (exports.getComponentSourceCode = getComponentSourceCode),
  (exports.writeComponentSourceCode = writeComponentSourceCode),
  (exports.saveProjectModel = saveProjectModel),
  (exports.pregenerate = pregenerate),
  (exports.generate = generate),
  (exports.generateApplication = generateApplication),
  (exports.saveGenerated = saveGenerated),
  (exports.preExtractNamespaces = preExtractNamespaces),
  (exports.extractNamespaces = extractNamespaces),
  (exports.getMarketList = getMarketList),
  (exports.getGHRepoInfo = getGHRepoInfo),
  (exports.preInstall = preInstall),
  (exports.cancelInstall = cancelInstall),
  (exports.installFromLocalDir = installFromLocalDir),
  (exports.getScaffoldGenerators = getScaffoldGenerators);
var _express = require("express"),
  _express2 = _interopRequireDefault(_express),
  _expressUrlrewrite = require("express-urlrewrite"),
  _expressUrlrewrite2 = _interopRequireDefault(_expressUrlrewrite),
  _httpProxy = require("http-proxy"),
  _httpProxy2 = _interopRequireDefault(_httpProxy),
  _lodash = require("lodash"),
  _structorCommons = require("structor-commons"),
  _gengine = require("../commons/gengine"),
  gengineManager = _interopRequireWildcard(_gengine),
  _middlewareCompilerManager = require("./middlewareCompilerManager.js"),
  middlewareCompilerManager = _interopRequireWildcard(
    _middlewareCompilerManager
  ),
  _extractManager = require("./extractManager.js"),
  extractManager = _interopRequireWildcard(_extractManager),
  _installManager = require("./installManager.js"),
  installManager = _interopRequireWildcard(_installManager),
  STRUCTOR_URLS = (exports.STRUCTOR_URLS = [
    "/structor",
    "/structor-invoke",
    "/structor-sandbox",
    "/structor-deskpage",
    "/structor-dev",
    "/structor-desk",
    "/structor-sandbox-preview",
    "/structor-sandbox-screenshot",
    "/structor-gengine-scaffolds"
  ]),
  serverRef = void 0,
  proxy = void 0;
