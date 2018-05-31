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
  if (options) {
    fetchOptions.body = JSON.stringify({
      methodName: method,
      data: options
    });
  }
  //   将数据保存到服务端
  return fetch(url, fetchOptions).then(response => {
    //console.log('Received response: ' + JSON.stringify(response, null, 4));
    //console.log('Received response: ' + response.status);
    //console.log('Received response: ' + response.statusText);
    //console.log(response.headers.get('Content-Type'));
    if (response.status >= 200 && response.status < 300) {
      return response.text().then(responseText => {
        console.log("Server response: " + responseText);
        let jsonData = undefined;
        try {
          jsonData = JSON.parse(responseText);
        } catch (e) {}
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
 * 负责调用服务端的某一个方法，比如saveProjectModel方法
 */
export function invokeStructor(method, options) {
  return makeRequest("/structor-invoke", method, options);
}
