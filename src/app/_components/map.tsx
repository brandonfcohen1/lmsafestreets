"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const StreetsMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -75.2807197,
    latitude: 40.0316588,
    zoom: 12,
  });

  return (
    <Map
      initialViewState={viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://api.maptiler.com/maps/019747be-3bb2-72e2-b5e3-41015f50ff12/style.json?key=oSbbxwhsf5m0bazUn4BB"
    />
  );
};

export default dynamic(() => Promise.resolve(StreetsMap), { ssr: false });
