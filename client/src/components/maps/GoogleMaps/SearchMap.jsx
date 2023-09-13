import { useState, useMemo, useEffect, useRef } from "react";

import{ PlacesAutocomplete }from "./PlacesAutocomplete";

// necessary google places and map imports
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";

export const SearchMap = ({
    mapId,
    className
}) => {
    const center = useMemo(() => ({ lat: 28.53540855723579, lng: -81.38559605386592 }), []);
    const [selected, setSelected] = useState(null);

    const ref = useRef(null);

    useEffect(() => {
        if(ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: center,
                zoom: 11,
                mapId,
            });

            const marker = new google.maps.Marker({ 
                position: selected,
                map: map
            });
            
        }
    }, [ref, mapId, selected]);

    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
            <div 
                className={className}
                ref={ref}
                style={{ width: "1000px", height: "700px" }}
            />

            {/* <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container"
            >
                {selected && <Marker position={selected} />}
            </GoogleMap> */}
        </>
    );
};