// this will be moved so it is part of a page, rather than it's own page!!!
import { useQuery } from "@apollo/client";

import React from "react";

import { QUERY_LOCATIONS } from "../utils/queries";

// imports all parts that make up the map
import {
  DataMap,
  GoogleMapsWrapper,
  // LOCATIONS,
  Layout,
} from "../components/maps";



// the wrapper is for ease with api calls
const MainMap = () => {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];

  return (
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
}

export default MainMap;