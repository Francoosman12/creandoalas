import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMaps
      defaultZoom={10}
      defaultCenter={{ lat: -26.829172134846647, lng: -65.20496440713558 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
