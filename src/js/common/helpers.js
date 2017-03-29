/**

 Description:  Helpers

 */

/*eslint no-undef: "error"*/
/*eslint-env browser*/
/*eslint-disable no-invalid-this*/

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {function} func Callback function
 * @param {number} wait Milliseconds to wait
 * @param {boolean} immediate If the trigger should be immediatly called
 * @return {function} Function to delay the execution of the execution
 */
export function debounce(func, wait, immediate) {
  let timeout;

  /**
   * @this context
   * @return {function} Function used to delay the execution.
   */
  return function() {
    const context = this;
    const args = arguments;
    let callNow = immediate && !timeout;

    function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

/**
 * Get query parameters encoded in the URL.
 * @param {String} query The query string to search for.
 * @return {Object} A javascript object of name: value pairs.
 */
export function parseQueryArgs(query) {
  return !query ? {} :
    (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        let [key, value] = param.split('=');

        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, {});
}

/**
 * Simple function to set "target: _blank" attribute on external links.
 * @return {void}
 */
export function externalize() {
  const hostname = window.location.host;
  const links = document.querySelectorAll('a');
  const linksLength = links.length;
  const regex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?' + hostname + ')|(\\/.*))(\\/.*)?$', '');

  for (let i = 0; i < linksLength; i++) {
    const link = links[i];
    const url = link.getAttribute('href');

    if (!regex.test(url)) {
      link.setAttribute('target', '_blank');
    }
  }
}
