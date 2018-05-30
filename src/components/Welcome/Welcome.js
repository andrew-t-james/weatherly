import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search.js';
import storm from '../../video/storm.mp4';
import stormPoster from '../../image/storm-poster.png';
import './Welcome.css';

const Welcome = (props) => {
  const { updateLocation, hasError, hasLocation } = props;

  return (
    <div className="container">
      <Search
        hasError={hasError}
        updateLocation={updateLocation} />
      {
        !hasLocation && !hasError &&
          <div className="welcome">
            <h2 tabIndex="0" className="welcome__title" aria-label="Welcome to Weathrly a weather App">Welcome To <span className="header__title">Weathrly</span></h2>
            <video aria-label="Time lapse of clouds" loop muted autoPlay poster={stormPoster} className="welcome__video">
              <source src={storm} type="video/mp4" />
            </video>
          </div>
      }
      {
        hasError &&
        <section className="error-message">
          <h2 className="error-message__title">Oops Something went wrong, Please enter valid City and State or Zip</h2>
        </section>
      }
    </div>
  );
};

Welcome.propTypes = {
  updateLocation: PropTypes.func,
  hasError: PropTypes.bool,
  hasLocation: PropTypes.bool
};

export default Welcome;