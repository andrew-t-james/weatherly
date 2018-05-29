import React from 'react';
import Search from '../Search/Search.js';

const Modal = (props) => {
  const { updateLocation, hasError, hasLocation } = props;

  return (
    <div>
      <Search
        updateLocation={updateLocation} />
      {!hasLocation && !hasError && <h2>Welcome To Weatherly</h2>}
      {hasError && <h2>Please Enter a valid City State or Zip</h2> }
    </div>
  );
};

export default Modal;