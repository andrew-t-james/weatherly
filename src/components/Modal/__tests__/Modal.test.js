import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Modal from '../Modal.js';

describe('App unit tests', () => {
  test('it should render a welcome message if noLocation present', () => {
    const expected = 'Welcome To Weatherly';
    const modal = shallow(<Modal hasLocation={false} />);
    const actual = modal.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should render an err message if hasError present', () => {
    const expected = 'Please Enter a valid City State or Zip';
    const modal = shallow(<Modal hasError={true} />);
    const actual = modal.find('h2').text();

    expect(actual).toBe(expected);
  });

  test('it should match snapshot', () => {
    const modal = renderer
      .create(<Modal />)
      .toJSON();

    expect(modal).toMatchSnapshot();
  });
});