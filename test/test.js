import React from 'react';
import { assert } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/App.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
   it('Renders a div with Id #app', () => {
       const wrapper = shallow(<App />);
       assert.equal(wrapper.find('#app').type(), 'div');
   });
});