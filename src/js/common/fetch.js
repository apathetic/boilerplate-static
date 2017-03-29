/**

 Description:  Fetch (XHR) wrapper.

  NOTE: this is not really an implmentation of fetch, just a
        small-enough piece of it that suits our purposes.

*/

function fetch(url, method = 'GET') {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

export default fetch;
