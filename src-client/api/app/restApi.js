import _ from "lodash";
import "isomorphic-fetch";
/**
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} options :发送的数据，比如model数据
 */
export function makeRequest(url, method, options = {}) {
  let fetchOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  // 发送的时候添加的数据
  if (options) {
    fetchOptions.body = JSON.stringify({
      methodName: method,
      data: options
    });
  }
  //   将数据保存到服务端
  return fetch(url, fetchOptions).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.text().then(responseText => {
        console.log("Server response: " + responseText);
        let jsonData = undefined;
        try {
          jsonData = JSON.parse(responseText);
        } catch (e) {}
        // 服务端返回值error为true表示出错
        if (jsonData.error === true) {
          let errorText = "";
          if (_.isArray(jsonData.errors)) {
            jsonData.errors.forEach(errText => {
              errorText += "\n" + errText;
            });
          } else {
            errorText = JSON.stringify(jsonData.errors);
          }
          throw Error(errorText);
          // 获取data值为服务端的返回值
        } else if (jsonData.data !== undefined) {
          jsonData = jsonData.data;
        }
        return jsonData;
      });
    } else {
      throw Error(response.statusText);
    }
  });
}

/**
 * 
 * @param {*} method 
 * @param {*} options 
 * 负责调用服务端的某一个方法，比如saveProjectModel,saveGenerated方法等
 */
export function invokeStructor(method, options) {
  return makeRequest("/structor-invoke", method, options);
}
