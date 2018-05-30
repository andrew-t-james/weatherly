import React from 'react';
import Search from '../Search/Search.js';
import storm from '../../video/storm.mp4';
import stormPoster from '../../image/storm-poster.png';
import './Welcome.css';

const Modal = (props) => {
  const { updateLocation, hasError, hasLocation } = props;

  return (
    <div className="container">
      <Search
        updateLocation={updateLocation} />
      {
        !hasLocation && !hasError &&
          <div className="welcome">
            <h2 className="welcome__title">Welcome To Weathrly</h2>
            <video loop muted autoPlay poster={stormPoster} className="welcome__video">
              <source src={storm} type="video/mp4" />
            </video>
          </div>
      }
      {
        hasError &&
        <div className="error">
          <h2 className="error__title">Please Enter a valid City State or Zip</h2>
        </div>
      }
    </div>
  );
};

export default Modal;