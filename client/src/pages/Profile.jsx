import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import * as React from 'react';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";



import Auth from '../utils/auth';



const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
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

  return (
    <div>
      <div className='bg-cover bg-[url("./assets/pexels-rachel-claire-5863518.jpg")] relative h-screen w-full m-0 p-0'>
        <div className="m-0 p-0 flex justify-center items-center min-h-screen"> 
          
        {/* <div class="row content-none"> */}
        {/* first col */}
          <div class="column backdrop-blur m-5 p-10 float-left w-2/5 border-2 border-white">
          <h3 className="font-sans text-2xl text-white">Find a bar:</h3>

          <form>
    <TextField
      id="search-bar"
      className="text bg-white"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "green"}} />
    </IconButton>
  </form>

          </div>

          {/* second col */}
          <div class="column m-5 p-10 backdrop-blur float-left w-3/5 text-white border-2 border-white">
            Place map here
            </div>
          
          {/* </div> */}

      
    


          </div>
      </div>
      </div>

  
  );
};

export default Profile;
