/**

 File:           main.js
 Description:    Entry point for ye olde website.

 */

import { isMobile, isTablet, isTouch } from './common/featureDetection.js';
import * as Component from './components/';

document.body.classList.add('js');

if (isMobile) { document.body.classList.add('is-mobile'); }
if (isTablet) { document.body.classList.add('is-tablet'); }
if (isTouch) { document.body.classList.add('is-touch'); }

document.addEventListener('DOMContentLoaded', function() {
  const components = document.querySelectorAll('[data-component]');

  Array.prototype.forEach.call(components, function(element) {
    const type = element.getAttribute('data-component');

    try {
      new Component[type](element);
    } catch (e) {
      console.log('Could not load component: %s (%s)', type, e);
    }

  });
}, false);
