import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

export const GoogleMapsWrapper = ({
  children
}) => {
  // Ideally we want the apiKey to be fetched from an environment variable
  const apiKey = `AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E`; // Replace with your actual API key variable

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};