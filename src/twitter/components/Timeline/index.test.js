import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Index from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const wrapper = shallow(<Index />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
