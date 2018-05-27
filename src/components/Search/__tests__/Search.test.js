import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search.js';

describe('Search Unit Test', () => {
  let search;

  beforeEach(() => search =  shallow(<Search />));

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

  // test('it should have an input type of text', () => {

  // });
});