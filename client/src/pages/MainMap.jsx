import React from "react";

// import necessary
import {
  DataMap,
  GoogleMapsWrapper,
  LOCATIONS,
  Layout,
} from "../components/maps";

const MainMap = () => (
  <GoogleMapsWrapper>
    <Layout>
      <DataMap mapId="map_id" locations={LOCATIONS} />
    </Layout>
  </GoogleMapsWrapper>
);

export default MainMap;