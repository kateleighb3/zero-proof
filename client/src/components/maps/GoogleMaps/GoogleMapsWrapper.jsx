import React from 'react';

// wrapper is for making the api calls easier
import { Wrapper } from '@googlemaps/react-wrapper';

// function for google maps api call
export const GoogleMapsWrapper = ({
  children
}) => {
  // change to be .env
  const apiKey = `AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E`;

  // checks if there is an api key present
  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  // the places library must be added for search function
  return <Wrapper apiKey={apiKey} libraries={["places"]}>{children}</Wrapper>;
};