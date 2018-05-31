import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trie from 'location-autocomplete-trie';
import { cities } from '../../data-helpers/cities.js';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      autoComplete: new Trie()
    };

    this.state.autoComplete.populate(cities);
    this.state.autoComplete.suggest(this.state.location);
    this.updateInput = this.updateInput.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  updateInput(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitLocation(event) {
    const { location } = this.state;
    const sanitizedUserInput = location.split(', ');
    const city = sanitizedUserInput[0];
    const state = sanitizedUserInput[1];

    event.preventDefault();
    this.props.updateLocation(city, state);

    this.setState({
      location: ''
    });

    event.target.reset();
  }

  render() {
    const  { location } = this.state;
    const { hasError } = this.props;

    return (
      <header className="header">
        <h1
          tabIndex="0"
          className="header__title"
          aria-label="Weathrly A weather App">
        Weathrly
        </h1>
        <form
          className="search-form"
          onSubmit={event => this.submitLocation(event)}>
          <input
            className={`search-form__input ${hasError ? 'error' : ''}`}
            placeholder="Search by City and State or Zip"
            onChange={event => this.updateInput(event)}
            name="location"
            type="text"
            list='cities'
            aria-label="Input a City and State, or Zip code to search for weather by location"
            value={location} />
          <datalist id="cities">
            {
              cities.map((city, index) =>
                <option
                  key={index}
                  value={city} />
              )
            }
          </datalist>
          <button
            tabIndex="0"
            aria-label="Search for weather"
            className="search-form__button"
            type="submit"
            disabled={!location.trim(' ')}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

Search.propTypes = {
  updateLocation: PropTypes.func,
  hasError: PropTypes.bool,
  autoComplete: PropTypes.func
};

export default Search;