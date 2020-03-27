import React from "react";

const Geolocation = props => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = props;
  return (
    <>
      {!isGeolocationAvailable && (
        <div>Your browser does not support Geolocation</div>
      )}
      {!isGeolocationEnabled && <div>Geolocation is not enabled</div>}
      {!coords && <div>Getting the location data & hellip</div>}
    </>
  );
};
export default Geolocation;
