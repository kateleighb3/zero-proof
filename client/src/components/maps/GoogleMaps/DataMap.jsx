import { useEffect, useRef } from "react";
import { addClusters, addMarkers } from "./markers";

// currently centered on orlando
const center = { lat: 28.53540855723579, lng: -81.38559605386592 };
const zoom = 11;

// create map using given locations
export const DataMap = ({
    locations,
    useClusters = true,
    mapId,
    className,
    latlng,
    content,
    selected
}) => {
    const ref = useRef(null);

    // map adjusts as changes are made to it
    useEffect(() => {
        // Display the map
        if (ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: center,
                zoom: zoom,
                mapId,
            });

            // Displays cluster markers or single markers on map when called
            useClusters
                ? addClusters({ locations, map })
                : addMarkers({ locations, map });

            // if a location is selected, a marker will appear for it on the map
            const marker = new google.maps.Marker({
                position: selected ? latlng : null,
                map: map
            });

            // add info to infowindow
            const infowindow = new google.maps.InfoWindow({
                maxWidth: 300,
                content: content,
            });

            // add infowindow to marker
            google.maps.event.addListener(marker, "click", () => {
                infowindow.open(map, marker);
            });
        }
    }, [ref, mapId, locations, useClusters, selected]);

    // return the map
    return (
        <div
            className={className}
            ref={ref}
            style={{ width: "500px", height: "400px" }}
        />
    );
};