import React from "react";
import GoogleMaps from "simple-react-google-maps";

const Map = () => {
  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyDUzYklxBrA5JHYlcsX0KACSnlqzS34d2s"}
        style={{ height: "600px", width: "100%" }}
        zoom={15}
        center={{ lat: -26.831712915403326, lng: -65.20454648224023 }}
        markers={{ lat: -26.831712915403326, lng: -65.20454648224023 }} //optional
      />
    </div>
  );
};

export default Map;
