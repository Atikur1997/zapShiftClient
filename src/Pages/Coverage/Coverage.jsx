import React, { use, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  console.log(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coOrdinates = [district.latitude, district.longitude];
      console.log(coOrdinates);
      mapRef.current.flyTo(coOrdinates, 12);
    }
  };
  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-3xl text-secondary font-bold p-10">
        We are Available in 64 Districts
      </h2>
      {/* for serching your district please click on the map marker to see the service area of that district */}
      <div>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="location"
              type="search"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      {/* for map */}

      <div className="h-[500px] w-full border">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center) => (
            <Marker
              position={[center.latitude, center.longitude]}
              key={center.id}
            >
              <Popup>
                <strong>{center.district}</strong> <br />
                service area :{center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
