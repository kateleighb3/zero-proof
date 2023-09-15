// this will be moved so it is part of a page, rather than it's own page!!!
import { useQuery } from "@apollo/client";

import React from "react";

import { QUERY_LOCATIONS } from "../../../utils/queries";

// imports all parts that make up the map
import {
  DataMap,
  Layout,
} from "../";



// the wrapper is for ease with api calls
const MainMap = ({
  latlng,
  content,
  selected,
  result,
  setDetails,
  setForm
}) => {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];

  return (
  <>
  {loading ? (
    <div>Loading...</div>
  ) : (
  
    <Layout>
      <DataMap className={"text-black"} result={result} selected={selected} setForm={setForm} setDetails={setDetails} mapId="map_id" locations={locations} latlng={latlng} content={content}/>
    </Layout>
  )}
  </>
);
}

export default MainMap;