import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search.js';

describe('Search Unit Test', () => {
  const mockFn = jest.fn();
  let search;

  beforeEach(() => search =  shallow(<Search updateLocation={mockFn}/>));

  test('it should have a form, input, and button', () => {
    const expectedForm = 1;
    const actualForm = search.find('form').length;

    const expectedButton = 'Submit';
    const actualButton = search.find('button').text();

    const expectedInput = 1;
    const actualInput = search.find('input').length;

    expect(actualForm).toBe(expectedForm);
    expect(actualButton).toBe(expectedButton);
    expect(actualInput).toBe(expectedInput);
  });

  test('Form should have have default state value title is an empty string', () => {
    const expected = '';
    const actual = search.state('location');

    expect(actual).toBe(expected);
  });

  test('it should update state onChange', () => {
    const mockEvent = {
      target: {
        value: 'Louisville',
        name: 'location'
      }
    };

    const expected = 'Louisville';

    search.instance().updateInput(mockEvent);

    const actual = search.state('location');

    expect(actual).toEqual(expected);
  });

  test('it should clear state on submit', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };

    const expected = '';

    search.instance().submitLocation(mockEvent);

    const actual = search.state('location');

    expect(actual).toEqual(expected);
  });

  test('When form submitLocation method is invoked with the correct arguments', () => {
    const expected = 'Louisville';

    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };

    search.setState({
      location: 'Louisville'
    });

    search.instance().submitLocation(mockEvent);

    expect(mockFn).toHaveBeenCalledWith(expected);
  });
});