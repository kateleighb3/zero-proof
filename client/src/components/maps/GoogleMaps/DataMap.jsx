import { useEffect, useRef } from "react";
import { addClusters, addMarkers } from "./markers";

// currently centered on orlando
const DEFAULT_CENTER = { lat: 28.53540855723579, lng: -81.38559605386592 };
const DEFAULT_ZOOM = 11;

export const DataMap = ({
    locations,
    useClusters = true,
    mapId,
    className,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        // Display the map
        if (ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
                mapId,
            });

            // Displays cluster markers or single markers on map when called
            useClusters
                ? addClusters({ locations, map })
                : addMarkers({ locations, map });
        }
    }, [ref, mapId, locations, useClusters]);

    return (
        <div
            className={className}
            ref={ref}
            style={{ width: "1000px", height: "700px" }}
        />
    );
};