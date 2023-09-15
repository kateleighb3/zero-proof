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
    selected,
    result,
    setDetails
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
                ? addClusters({ locations, map, setDetails })
                : addMarkers({ locations, map, setDetails });

            let addmarker = true;

            // check for if location is currenlty in db
            if (locations != []) {
                locations.map((location) => {
                    if (location && selected && location.lat === latlng.lat && location.lng === latlng.lng) {
                        addmarker = false;

                        // create new marker for current location to view window
                        const marker = new google.maps.Marker({
                            position: { lat: location.lat, lng: location.lng },
                            map: map
                        });

                        const infowindow = new google.maps.InfoWindow({
                            maxWidth: 300,
                            content: `<p><strong>${location.name}</strong></p>`
                        });

                        // info window automatically pops up
                        infowindow.open(map, marker);

                        // info automatically appears
                        setDetails(location);

                        // marker shows info when clicked
                        google.maps.event.addListener(marker, "click", () => {
                            infowindow.open(map, marker);
                            setDetails(location);
                        });



                        google.maps.event.addListener(infowindow, 'closeclick', function () {
                            setDetails(null);
                        });
                    }
                });
            }

            // if there is not already a location with this
            if (addmarker) {
                // if a location is selected, a marker will appear for it on the map
                const marker = new google.maps.Marker({
                    position: selected ? latlng : null,
                    map: map
                });

                // add info to infowindow
                const infowindow = new google.maps.InfoWindow({
                    maxWidth: 300,
                    content: `<div className="m-0 p-0 flex justify-center items-center"><p><strong>${result ? result.result.name : ''}</strong></p><p>${result ? result.result.formatted_address : ''}</p><img src=${result ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=130&photo_reference=${result.result.photos[0].photo_reference}&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E` : null}></img><p>Location has not been added yet</p><button className="button">Click Here to Add Location</button></div>`,
                });

                // info window automatically pops up
                infowindow.open(map, marker);

                setDetails(null);

                google.maps.event.addListener(infowindow, 'closeclick', function () {
                    setDetails(null);
                });

                // add infowindow to marker
                google.maps.event.addListener(marker, "click", () => {
                    infowindow.open(map, marker);
                });
            }
        }
    }, [ref, mapId, locations, useClusters, selected, result]);

    // return the map
    return (
        <div
            className={className}
            ref={ref}
            style={{ width: "500px", height: "400px" }}
        />
    );
};