import React, { Component } from 'react';

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
      <div>
        <h1>Weathrly App</h1>
        <form onSubmit={event => this.submitLocation(event)}>
          <input
            onChange={event => this.updateInput(event)}
            name="location" type="text"
            value={this.state.location}/>
          <button type="submit" disabled={!location}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;