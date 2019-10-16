export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function sendRequest(method, link, body="", updateMethod) {
  let promise =  new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open( method, `http://127.0.0.1:7777${link}`, true);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      if (xhr.status != 200) {
        reject(xhr.status + ': ' + xhr.statusText );
      } else {
        xhr.response.length && updateMethod(JSON.parse(xhr.response));
      }
    };

    xhr.send(body);
  })
}