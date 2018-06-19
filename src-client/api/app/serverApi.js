import { forOwn, isObject } from "lodash";
import { invokeStructor } from "./restApi.js";

export function getProjectStatus() {
  return invokeStructor("getProjectStatus", {});
}

export function getProjectInfo() {
  return invokeStructor("getConfig");
}

/**
 * 得到项目的model数据
 */
export function getProjectModel() {
  return invokeStructor("getModel");
}

/**
 * 将数据保存到服务端
 */
export function saveProjectModel(model) {
  console.log("fuckedddddddd9999999999ddddddd");
  return invokeStructor("saveProjectModel", { model: model });
}

export function exportProjectModel(model) {
  console.log("fuckeddddddddddddddd");
  return invokeStructor("saveProjectModel", { model: model }).then(() => {
    return invokeStructor("exportPages", { model: model });
  });
}

export function setProxyURL(proxyURL) {
  return invokeStructor("setProxyURL", { proxyURL });
}
/**
 * 组件树
 */
export function loadComponentTree() {
  return invokeStructor("getComponentTree", {});
}

/**
 * 
 * 获取组件配置信息
 */
export function loadComponentOptions(
  componentName,
  namespace,
  sourceCodeFilePath
) {
  let result = {};
  return invokeStructor("getComponentNotes", {
    componentName,
    namespace
  }).then(response => {
    result.readmeText = response;
    if (sourceCodeFilePath) {
      return invokeStructor("getComponentSourceCode", {
        filePath: sourceCodeFilePath
      }).then(response => {
        result.sourceCode = response;
        return result;
      });
    } else {
      return result;
    }
  });
}

/**
 * 将方法名称传递到后端进行数据保存，有文件地址+文件内容
 */
export function writeComponentSource(sourceCodeFilePath, sourceCode) {
  return invokeStructor("writeComponentSourceCode", {
    filePath: sourceCodeFilePath,
    sourceCode
  });
}

export function writeComponentDefaults(componentName, namespace, defaults) {
  return invokeStructor("writeComponentDefaults", {
    componentName,
    namespace,
    defaults
  });
}

export function getAvailableGeneratorsList() {
  return invokeStructor("getScaffoldGenerators");
}

export function pregenerate(
  generatorName,
  generatorDirPath,
  namespace,
  componentName,
  model
) {
  return invokeStructor("pregenerate", {
    generatorName,
    generatorDirPath,
    namespace,
    componentName,
    model
  });
}
export function generate(
  generatorName,
  generatorDirPath,
  namespace,
  componentName,
  model,
  metadata
) {
  return invokeStructor("generate", {
    generatorName,
    generatorDirPath,
    namespace,
    componentName,
    model,
    metadata
  });
}

/**
 * 保存已经产生的redux文件
 * @param {*} files 
 * @param {*} dependencies 
 */
export function saveGenerated(files, dependencies) {
  return invokeStructor("saveGenerated", { files, dependencies });
}

export function generateApplication(pagesModel, hasApplicationFiles) {
  return invokeStructor("generateApplication", {
    pagesModel,
    hasApplicationFiles
  });
}

export function preExtractNamespaces(namespaces) {
  return invokeStructor("preExtractNamespaces", { namespaces });
}

export function extractNamespaces(namespaces, dependencies, dirPath) {
  return invokeStructor("extractNamespaces", {
    namespaces,
    dependencies,
    dirPath
  });
}

export function getMarketList() {
  return invokeStructor("getMarketList", {});
}

export function getGHRepoInfo(gitHubRepo, gitHubOwner) {
  return invokeStructor("getGHRepoInfo", { gitHubRepo, gitHubOwner });
}

export function preInstallFromLocalDir(dirPath) {
  return invokeStructor("preInstall", { dirPath });
}

export function preInstallFromUrl(url) {
  return invokeStructor("preInstall", { url });
}

export function cancelInstall() {
  return invokeStructor("cancelInstall", {});
}

export function installFromLocalDir(dirPath) {
  return invokeStructor("installFromLocalDir", { dirPath });
}
