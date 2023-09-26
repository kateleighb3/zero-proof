import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import * as React from 'react';

import { GoogleMapsWrapper } from '../components/maps';
import { FavoritesMap } from '../components/maps/GoogleMaps/FavoritesMap'

import Auth from '../utils/auth';

import {backgroundImage} from '../utils/constants';


const Favorites = () => {

    const { loading, data } = useQuery(
        QUERY_ME,
    );

    const user = data?.me || data?.user || {};

    if (loading) {
        return <div className='bg-cover bg-[url("./assets/compress_img_1.8mb.jpg")] relative h-screen w-full m-0 p-0'>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <div className= 'flex justify-center items-center bg-cover bg-[url("./assets/compress_img_1.8mb.jpg")] relative h-screen w-full m-0 p-0'>
                <h4 className='text-white text-2xl'>
                    You need to be logged in to see this. Use the navigation links above to
                    sign up or log in!
                </h4>
            </div>
        );
    }

    return (
        <GoogleMapsWrapper>
        <div className='bg-cover bg-[url("./assets/compress_img_1.8mb.jpg")] relative h-screen w-full m-0 p-0'>
            <FavoritesMap user={user}/>
        </div>
        </GoogleMapsWrapper>
    );
};

export default Favorites;