// this will be moved so it is part of a page, rather than it's own page!!!

import React from "react";

// imports all parts of the map
import {
  SearchMap,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components/maps";

// the wrapper is for ease with api calls
const SearchMapHolder = () => (
  <GoogleMapsWrapper>
    <Layout>
      <SearchMap mapId="map_id" />
    </Layout>
  </GoogleMapsWrapper>
);

export default SearchMapHolder;