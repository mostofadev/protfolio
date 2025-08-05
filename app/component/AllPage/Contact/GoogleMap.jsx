
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MyGoogleMap() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 23.8103, // Latitude for Dhaka, Bangladesh
    lng: 90.4125, // Longitude for Dhaka, Bangladesh
  };

  return (
    <div className="mx-6 sm:mx-20 md:mx-20">
        <LoadScript googleMapsApiKey="AIzaSyAdBimZ2r1iCPImV0Ppdqgg2sHiWsDh-rs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default MyGoogleMap;
