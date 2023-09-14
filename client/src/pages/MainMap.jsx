// this will be moved so it is part of a page, rather than it's own page!!!

import React from "react";

// imports all parts that make up the map
import {
  DataMap,
  GoogleMapsWrapper,
  // LOCATIONS,
  Layout,
} from "../components/maps";

const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];

// the wrapper is for ease with api calls
const MainMap = () => (
  <>
  {loading ? (
    <div>Loading...</div>
  ) : (
  <GoogleMapsWrapper>
    <Layout>
      <DataMap mapId="map_id" locations={locations} />
    </Layout>
  </GoogleMapsWrapper>
  )}
  </>
);

export default MainMap;