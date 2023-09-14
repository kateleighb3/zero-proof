import { MarkerClusterer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer';
import { addMarkers } from './addMarkers';

// use the addMarker function to put them into clusters
export const addClusters = ({ locations, map }) => {
    // create markers
    const markers = addMarkers({ locations, map });

    // put markers in clusters
    new MarkerClusterer({
        markers,
        map,
        algorithm: new SuperClusterAlgorithm({
            // radius is the size of the cluster
            radius: 350,
        }),
    });
};