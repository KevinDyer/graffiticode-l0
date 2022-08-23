/* Copyright (c) 2021, ARTCOMPILER INC */
import * as React from 'react';
import './style.css';

function renderAttr(attr) {
  Object.keys(attr).forEach(key => {
    if (key.indexOf('on') === 0) {
      attr[key] = new Function('e', attr[key]);
    }
  });
  return attr;
}

function renderElts(data) {
  data = [].concat(data);
  const elts = [];
  let key = 1;
  data.forEach(d => {
    switch(d.type) {
    case 'b':
      elts.push(<b key={key++}>{renderElts(d.elts)}</b>);
      break;
    default:
      elts.push(d);
      break;
    }
  });
  return elts;
}

function Viewer(props) {
  const data = props.obj && [].concat(props.obj) || [];
  const elts = renderElts(data);
  return (
    <div>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      {elts}
    </div>
  );
}

window.gcexports.viewer = (function () {
  return {
    Viewer: Viewer,
  };
})();
