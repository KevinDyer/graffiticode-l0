// JSDOM setup
import {JSDOM} from 'jsdom';
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'} );
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);

// this is needed for viewer and can't be done in the test file since it needs to be there before Viewer is required
window.gcexports = {};
