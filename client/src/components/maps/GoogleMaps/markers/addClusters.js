import { MarkerClusterer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer';
import { addMarkers } from './addMarkers';

export const addClusters = ({ locations, map }) => {
    const markers = addMarkers({ locations, map });

    // Merge markers into clusters
    new MarkerClusterer({
        markers,
        map,
        algorithm: new SuperClusterAlgorithm({
            radius: 350, // cluster size
        }),
    });
};