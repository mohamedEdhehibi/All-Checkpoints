// src/Map.js
import React from "react"
import GoogleMapReact from "google-map-react"

const Map = () => {
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  }

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
        defaultCenter={defaultCenter}
        defaultZoom={10}>
        {/* You can add markers, info windows, etc. here */}
      </GoogleMapReact>
    </div>
  )
}

export default Map
