import md5 from "md5";

export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function sendRequest(method, link, body="", updateMethod) {
  let xhr = new XMLHttpRequest();

  xhr.open( 'POST', `http://127.0.0.1:7777${link}`, true);

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    let res = xhr.response;
    if (!res.length) {
      alert(new Error("No data returned from database!"));
    } else {
      if(updateMethod) {
        updateMethod(res)
      } else {
        return res;
      }
    }
  };

  xhr.send(body);
}