import { useState, useMemo, useEffect, useRef } from "react";

// import autocomplete search bar
import{ PlacesAutocomplete }from "./PlacesAutocomplete";
import "@reach/combobox/styles.css";

// export map with search bar
export const SearchMap = ({
    mapId,
    className
}) => {
    // center map on orlando
    const center = useMemo(() => ({ lat: 28.53540855723579, lng: -81.38559605386592 }), []);
    const zoom = 11;

    // search bar and search results
    const [selected, setSelected] = useState(null);
    const [result, setResult] = useState(null);

    // for creating map
    const ref = useRef(null);

    // map adjusts as changes are made to it
    useEffect(() => {
        // create map
        if(ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: center,
                zoom: zoom,
                mapId,
            });

            // for marker
            let lat;
            let lng;

            // sets variables if a place is selected
            if(selected){
                lat = selected.lat;
                lng = selected.long;
            }

            // if a location is selected, a marker will appear for it on the map
            const marker = new google.maps.Marker({ 
                position: selected ? { lat, lng } : null,
                map: map
            });
            
            // add info to infowindow
            const infowindow = new google.maps.InfoWindow({
                maxWidth: 300,
                content: `<p><strong>${result ? result.result.name : ''}</strong></p><p>${result ? result.result.formatted_address : ''}</p><img src=${result ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${result.result.photos[0].photo_reference}&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E` : null}></img><button>click here to add location</button>`,
            });

            // add infowindow to marker
            google.maps.event.addListener(marker, "click", () => {
                infowindow.open(map, marker);
            });
        }
    }, [ref, mapId, selected, result]);

    // returns map and search bar
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
        </>
    );
};