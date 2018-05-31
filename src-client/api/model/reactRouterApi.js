import {
  matchPattern,
  formatPattern,
  getParams
} from "react-router/lib/PatternUtils.js";
// getAvailableRoute(paths, pathname)
/**
 * 
 * @param {*} existingRoutes 已经存在的应用路由
 * @param {*} checkPathname 检查的路由
 */
export function getAvailableRoute(existingRoutes, checkPathname) {
  let candidateRootKey = undefined;
  if (existingRoutes && existingRoutes.length > 0) {
    if (
      checkPathname === "/" ||
      checkPathname === "/structor-deskpage" ||
      checkPathname === "/structor-deskpage/"
    ) {
      candidateRootKey = existingRoutes[0];
      //如果要检查的路径在白名单里面['/','/structor-deskpage','/structor-deskpage/']
      //   那么直接获取已经存在的第一个路由即可
    } else {
      try {
        let root;
        for (let i = 0; i < existingRoutes.length; i++) {
          root = existingRoutes[i];
          //   当前的root
          let paramsObj = getParams(root, checkPathname);
          let formattedPath = root;
          //   有参数,root
          if (paramsObj) {
            formattedPath = decodeURIComponent(formatPattern(root, paramsObj));
          }
          //对root处理后的值为formattedPath，如果和checkPathname一致，那么root就是我们需要的值
          if (checkPathname === formattedPath) {
            candidateRootKey = root;
            break;
          }
        }
      } catch (e) {
        console.error(
          "Path name " +
            checkPathname +
            " was not found in project model. Error: " +
            (e.message ? e.message : e)
        );
      }
    }
  }
  if (!candidateRootKey) {
    console.error(
      "Path name " + checkPathname + " was not found in project model."
    );
  }
  return candidateRootKey;
}
