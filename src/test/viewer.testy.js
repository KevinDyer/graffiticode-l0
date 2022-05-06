import './viewer-setup';
import * as React from 'react';
import sinon from 'sinon';
import Viewer from '../viewer.jsx';
//let Viewer = window.gcexports.viewer.Viewer;
let data = 123;

let dispatcher;
beforeEach(() => {
  window.gcexports.dispatcher = {register: sinon.spy(), dispatch: sinon.spy()};
});

describe('Viewer', () => {
  it('renders the data', () => {
  });
});

