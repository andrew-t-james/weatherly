import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Welcome from '../Welcome.js';

describe('App unit tests', () => {
  test('it should render a welcome message if noLocation present', () => {
    const expected = 'Welcome To Weathrly';
    const modal = shallow(<Welcome hasLocation={false} />);
    const actual = modal.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should render an err message if hasError present', () => {
    const expected = 'Please Enter a valid City State or Zip';
    const modal = shallow(<Welcome hasError={true} />);
    const actual = modal.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should match snapshot', () => {
    const modal = renderer
      .create(<Welcome />)
      .toJSON();

    expect(modal).toMatchSnapshot();
  });
});