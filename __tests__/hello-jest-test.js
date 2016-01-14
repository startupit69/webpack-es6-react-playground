//jest.dontMock('../src/components/MessageBox');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';

// const MessageBox = require('../src/components/MessageBox');

// describe('MessageBox', () => {
//
//   it("renders correct message", () => {

    // Render
    // var messageBox = TestUtils.renderIntoDocument(
    //   <MessageBox />
    // );
    //
    // var messageBoxNode = ReactDOM.findDOMNode(messageBox);

    // Verify message is as expected
    //expect(messageBoxNode.textContent).toEqual('This is a test');

//   });
//
// });



// __tests__/CheckboxWithLabel-test.js
jest.dontMock('../src/components/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../src/components/CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's Off by default
    expect(checkboxNode.textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );
    expect(checkboxNode.textContent).toEqual('On');
  });

});
