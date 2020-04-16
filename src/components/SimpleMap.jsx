import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props) {
  const handleClick = () => {
    console.log("test");
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NODE_GOOGLE_API_KEY }}
        defaultCenter={{
          lat: 1.3629390529476706,
          lng: 103.83246115475606,
        }}
        defaultZoom={12}
      >
        <AnyReactComponent lat={1.2792312} lng={103.8466193} text="My Marker" onClick={handleClick} />
      </GoogleMapReact>
    </div>
  );
}
