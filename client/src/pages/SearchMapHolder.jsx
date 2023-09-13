import React from "react";

// import necessary
import {
  SearchMap,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components/maps";

const SearchMapHolder = () => (
  <GoogleMapsWrapper>
    <Layout>
      <SearchMap mapId="map_id" />
    </Layout>
  </GoogleMapsWrapper>
);

export default SearchMapHolder;