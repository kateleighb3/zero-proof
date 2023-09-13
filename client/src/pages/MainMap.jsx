// this will be moved so it is part of a page, rather than it's own page!!!

import React from "react";

// imports all parts that make up the map
import {
  DataMap,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components/maps";

// the wrapper is for ease with api calls
const MainMap = () => (
  <GoogleMapsWrapper>
    <Layout>
      <DataMap mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsWrapper>
);

export default MainMap;