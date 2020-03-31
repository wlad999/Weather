import React from "react";

const Geolocation = props => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = props;
  return (
    <div className="row align-items-center">
      <div className="col-10 offset-1 text-center pt-4">
        {!isGeolocationAvailable && (
          <div>Your browser does not support Geolocation</div>
        )}
        {!isGeolocationEnabled && <div>Geolocation is not enabled</div>}
        {!coords && <div>Getting the location data & hellip</div>}
      </div>
    </div>
  );
};
export default Geolocation;
