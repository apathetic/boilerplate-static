/**
 * Returns if device is a touch device.
 * @return {boolean}
 */
 /*eslint-env browser*/

export const isTouch = 'ontouchstart' in window;

/**
 * Returns if device is a mobile device.
 * @return {boolean}
 */
export const isMobile = /Android(.)+mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Returns if device is a tablet device.
 * @return {boolean}
 */
export const isTablet = /android|ipad|playbook|silk/i.test(navigator.userAgent);
