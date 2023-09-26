import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_LOCATION, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/mutations";
import * as React from 'react';
import { useState, useMemo, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import MainMap from '../components/maps/GoogleMaps/MainMap';
import { GoogleMapsWrapper } from '../components/maps';

import Auth from '../utils/auth';

// import autocomplete search bar
import { PlacesAutocomplete } from "../components/maps/GoogleMaps/PlacesAutocomplete";
import {backgroundImage} from '../utils/constants';


const Profile = () => {
  const { profileId } = useParams();

  // search bar and search results
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState('');

  // for location details
  const [details, setDetails] = useState(null);

  // for form
  const [form, setForm] = useState(null);

  // for favorite checkbox
  const [checked, setChecked] = useState(false);

  const [addLocation, { error }] = useMutation(ADD_LOCATION);
  const [addFavorite, _] = useMutation(ADD_FAVORITE);
  const [removeFavorite, x ] = useMutation(REMOVE_FAVORITE);

  // update checkbox when favorited
  useEffect(() => {
    if (user) {
      const fav = document.getElementById('favorite');
      if (fav) {
        fav.checked = false;
        setChecked(false);
        user.favorites.map((favorite) => {
          if (favorite._id === details._id) {
            fav.checked = true;
            setChecked(true);
          }
        });
      }
    }
  }, [details]);

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
    return <div className={`bg-cover bg-[url("./assets/${backgroundImage}")] relative h-screen w-full m-0 p-0`}>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div className={`bg-cover bg-[url("./assets/${backgroundImage}")] flex justify-center items-center  relative h-screen w-full m-0 p-0`}>
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
        variables: { name: form.name, lat: selected.lat, lng: selected.long, photo_ref: form.photos[0].photo_reference, description: description, username: user?.username }
      });
      setForm(null);
      setDescription('');
      window.location.reload();
      setDetails(data.data.addLocation);
    }
    catch (err) {
      console.log(err);
    }
  };

  // save changes in description
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'description' && value.length <= 280) {
      setDescription(value);
    }
  };

  const addFav = async (event) => {
    event.preventDefault();

    if (details && user) {
      try {
        const data = await addFavorite({
          variables: { userId: user._id, locationId: details._id }
        });
      }
      catch (err) {
        console.log(err);
      }
    }
    setDetails(null);
    window.location.reload();
    return;
  }

  const removeFav = async (event) => {
    event.preventDefault();

    if (details && user) {
      try {
        const data = await removeFavorite({
          variables: { userId: user._id, locationId: details._id }
        });
      }
      catch (err) {
        console.log(err);
      }
      setDetails(null);
      window.location.reload();
      return;
    }
  }

  return (
    <GoogleMapsWrapper>
      <div className={`bg-cover bg-[url("./assets/${backgroundImage}")] relative h-screen w-full m-0 p-0`}>
        <div className="m-0 p-0 flex justify-center items-center min-h-screen">

          {/* <div class="row content-none"> */}
          {/* first col */}
          <div className="column backdrop-blur m-5 p-10 float-left w-2/5 border-2 border-white">
            <h3 className="font-sans text-2xl text-white">Find a bar:</h3>

            <div>
              <div className="w-3/4 backdrop-blur flex justify-center justify-center items-center">
              <PlacesAutocomplete
                id="search-bar"
                className="text bg-white"
                label="Enter a city name"
                variant="outlined"
                setSelected={setSelected} setResult={setResult}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "green" }} />
              </IconButton>
              </div>
              {details ?
                (<div className="text-white">
                  <form onSubmit={checked ? removeFav : addFav}>
                    <input type='checkbox' id='favorite' name='favorite' style={{opacity:0}} value={details._id}></input>
                    {checked ? (<button className="m-4 text-white bg-green-700 text-2xl p-2 rounded" type="submit">Remove Favorite</button>) : (<button className="m-4 text-white bg-green-700 text-2xl p-2 rounded" type="submit">Add Favorite</button>)}
                  </form>
                  <h3>{details.name}</h3>
                  <h2>Added by: {details.username} on {details.createdAt}</h2>
                  <img src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=130&photo_reference=' + details.photo_ref + '&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E'}></img>
                  <p>{details.description}</p>
                </div>) : (<div></div>)
              }
              {form ?
                (<form onSubmit={handleFormSubmit} className="text-white">
                  <p className='border-2'>This location is currently not in the system. Fill out the form below to add it!</p>
                  <h3>{form.name}</h3>
                  <p>{form.formatted_address}</p>
                  <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=130&photo_reference=${form.photos[0].photo_reference}&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E`}></img>
                  <textarea
                    name="description"
                    placeholder="Write a description..."
                    value={description}
                    className="form-input w-100"
                    style={{ lineHeight: '1.5', resize: 'vertical' }}
                    onChange={handleChange}
                  ></textarea>
                  <button className="m-4 text-white bg-green-700 text-2xl p-2 rounded" type="submit">
                    Add Location
                  </button>
                </form>) : (<div></div>)
              }
            </div>

          </div>

          {/* second col */}
          <div className="column m-5 p-10 backdrop-blur float-left w-3/5 text-white border-2 border-white">
            <MainMap selected={selected} setForm={setForm} setDetails={setDetails} latlng={selected ? { lat, lng } : null} result={result} />
          </div>
        </div>
      </div>
    </GoogleMapsWrapper>


  );
};

export default Profile;
