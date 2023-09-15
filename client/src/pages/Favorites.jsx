import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import * as React from 'react';

import Auth from '../utils/auth';



const Favorites = () => {

    const { loading, data } = useQuery(
        QUERY_ME,
        {
            variables: { profileId: profileId },
        }
    );

    const user = data?.me || data?.user || {};

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
        <div className='bg-cover bg-[url("./assets/gabe.jpg")] relative h-screen w-full m-0 p-0'>
            <div> Hey </div>
        </div>
    );
};

export default Favorites;