import React from "react";
import GoogleMaps from "simple-react-google-maps";
import "../js/MapKey";
import MapKey from "../js/MapKey";

const Map = () => {
  return (
    <div className="container">
      <GoogleMaps
        apiKey={`${MapKey.apiKey}`}
        style={{ height: "600px", width: "100%" }}
        zoom={16}
        center={{ lat: -26.831712915403326, lng: -65.20454648224023 }}
        markers={{ lat: -26.831712915403326, lng: -65.20454648224023 }} //optional
      />
    </div>
  );
};

export default Map;
