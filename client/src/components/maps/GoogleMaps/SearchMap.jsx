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
    const [result, setResult] = useState({});

    const ref = useRef(null);

    useEffect(() => {
        if(ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: center,
                zoom: 11,
                mapId,
            });

            console.log(selected);

            let lat;
            let lng;
            let place_id;

            // sets variables if a place is selected
            if(selected){
                console.log(selected.lat);
                lat = selected.lat;
                lng = selected.long;
                place_id = selected.place_id;
            }

            // if a location is selected, a marker will appear for it
            const marker = new google.maps.Marker({ 
                position: selected ? { lat, lng } : null,
                map: map
            });
            
        }
    }, [ref, mapId, selected]);

    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} setResult={setResult} />
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