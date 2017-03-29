/**
 * Standardize Events in IE10 and IE11.
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 * @return {void}
 */
!function(){function t(t,e){var n=document.createEvent("CustomEvent");return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}return"function"==typeof window.CustomEvent?!1:(t.prototype=window.Event.prototype,void(window.CustomEvent=t))}();
