import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
//import MM from "./images/MM.svg"
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
//import hello from "./data";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,

} from "react-map-gl";
import { useState } from "react";
function Mapp({ data }) {
  const [lng] = useState(78.4867);
  const [lat] = useState(17.3850);
  const [showPopup, setShowPopup] = React.useState(true);
  const [popup, setPopup] = useState(null);
  return (
    <div className="App">
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2VlcnRoYW5hMTQiLCJhIjoiY2w5enNmdnp2MDFvYjNucDIxOGFycHV6cSJ9.iHCOeRSUPyvKWRIditZzQA"
        style={{
          width: 1150,
          height: 500,
          borderRadius: "0",
          border: "2px solid black",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 12        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {
          data.map(item => { return (<Marker longitude={item.longitude} latitude={item.latitude} ></Marker>) })


        }
        {
          data.map((item) => {
            return (

              <Popup longitude={item.longitude} latitude={item.latitude}
                anchor="left"
                onClose={() => setShowPopup(false)}>
                <p>{item.HospitalName}</p>
              </Popup>)


          }
          )
        }


        {/* <Marker longitude={78.3026} latitude={17.5545} ></Marker> */}
        
        {/* <GeolocateControl /> */}
        
        
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default Mapp;