import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import Welcome from '../Welcome.js';

describe('App unit tests', () => {
  test('it should render a welcome message if noLocation present', () => {
    const expected = 'Welcome To Weathrly';
    const welcome = shallow(<Welcome hasLocation={false} />);
    const actual = welcome.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should render an err message if hasError present', () => {
    const expected = 'Oops Something went wrong, Please enter valid City and State or Zip';
    const welcome = shallow(<Welcome hasError={true} />);
    const actual = welcome.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should match snapshot', () => {
    const welcome = TestRenderer
      .create(<Welcome />)
      .toJSON();

    expect(welcome).toMatchSnapshot();
  });
});