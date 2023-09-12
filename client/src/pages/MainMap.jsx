import React from "react";
import {
  DataMap,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components/maps";

const SearchMap = () => (
  <GoogleMapsWrapper>
    <Layout>
      <DataMap mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsWrapper>
);

export default SearchMap;