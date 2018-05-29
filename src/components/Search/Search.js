import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };

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

    event.preventDefault();
    this.props.updateLocation(location);

    this.setState({
      location: ''
    });

    event.target.reset();
  }

  render() {
    const  { location } = this.state;

    return (
      <header className="header">
        <h1>Weathrly</h1>
        <form
          className="search-form"
          onSubmit={event => this.submitLocation(event)}>
          <input
            className="search-form__input"
            onChange={event => this.updateInput(event)}
            name="location"
            type="text"
            value={location}/>
          <button
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

export default Search;