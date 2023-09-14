import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_LOCATION } from "../utils/mutations";
import * as React from 'react';
import { useState, useMemo, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import MainMap from '../components/maps/GoogleMaps/MainMap';
import { GoogleMapsWrapper } from '../components/maps';

import Auth from '../utils/auth';

// import autocomplete search bar
import { PlacesAutocomplete } from "../components/maps/GoogleMaps/PlacesAutocomplete";


const Profile = () => {
  const { profileId } = useParams();

    // search bar and search results
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState('');

  const [addLocation, { error }] = useMutation(ADD_LOCATION);

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() &&
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson._id === profileId
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div className='bg-cover bg-[url("./assets/su-san-lee-g3PyXO4A0yc-unsplash.jpg")] relative h-screen w-full m-0 p-0'>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div className='flex justify-center items-center bg-cover bg-[url("./assets/su-san-lee-g3PyXO4A0yc-unsplash.jpg")] relative h-screen w-full m-0 p-0'>
        <h4 className='text-white text-2xl'>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>

      </div>
    );
  }

  // for search marker
  let lat;
  let lng;

  // sets variables if a place is selected (sent to map)
  if (selected) {
      lat = selected.lat;
      lng = selected.long;
  }

  // create new location from input
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const data = await addLocation({
            variables: { name: result.result.name, lat: selected.lat, lng: selected.long, photo_reference: result.result.photos[0].photo_reference, description: description, username: user?.username }
        });

        setDescription('');
    }
    catch (err) {
        console.log(err);
    }
};

  return (
    <GoogleMapsWrapper>
      <div className='bg-cover bg-[url("./assets/palm-2.jpg")] relative h-screen w-full m-0 p-0'>
        <div className="m-0 p-0 flex justify-center items-center min-h-screen">

          {/* <div class="row content-none"> */}
          {/* first col */}
          <div className="column backdrop-blur m-5 p-10 float-left w-2/5 border-2 border-white">
            <h3 className="font-sans text-2xl text-white">Find a bar:</h3>

            <form>
              <PlacesAutocomplete 
                id="search-bar"
                className="text bg-white"
                label="Enter a city name"
                variant="outlined"
                setSelected={setSelected} setResult={setResult} 
              />
              {/* <TextField
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                label="Enter a city name"
                variant="outlined"
                placeholder="Search..."
                size="small"
              /> */}
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "green" }} />
              </IconButton>
            </form>

          </div>

          {/* second col */}
          <div className="column m-5 p-10 backdrop-blur float-left w-3/5 text-white border-2 border-white">
            <MainMap latlng ={selected ? {lat, lng} : null} content={`<p><strong>${result ? result.result.name : ''}</strong></p><p>${result ? result.result.formatted_address : ''}</p><img src=${result ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${result.result.photos[0].photo_reference}&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E` : null}></img>`}/>
          </div>
        </div>
      </div>
    </GoogleMapsWrapper>


  );
};

export default Profile;
