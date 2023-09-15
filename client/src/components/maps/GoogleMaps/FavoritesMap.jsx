import React from "react";
import { useState, useEffect, useRef } from "react";
import { addClusters, addMarkers } from "./markers";
import { useMutation } from '@apollo/client';

import { REMOVE_FAVORITE } from "../../../utils/mutations";

// currently centered on orlando
const center = { lat: 28.53540855723579, lng: -81.38559605386592 };
const zoom = 11;

import {
    // PlainMap,
    Layout,
} from "../";

export const FavoritesMap = ({
    user
}) => {
    const ref = useRef(null);
    const useClusters = true;

    // for favorite checkbox
    const [checked, setChecked] = useState(false);

    // form is here just so we can reuse the clusters functions
    const [details, setDetails] = useState(null);
    const [form, setForm] = useState(null);

    const locations = user.favorites ? user.favorites : [];

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

    useEffect(() => {

        if (ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center: center,
                zoom: zoom,
                mapId: "map_id"
            });

            useClusters
                ? addClusters({ locations, map, setDetails, setForm })
                : addMarkers({ locations, map, setDetails, setForm });

        }
    }, [ref]);


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
        <div className="m-0 p-0 flex justify-center items-center min-h-screen">
            {details ?
                (<div className="column backdrop-blur m-5 p-10 float-left w-2/5 border-2 border-white text-white">
                    <form onSubmit={removeFav}>
                        <input type='checkbox' id='favorite' name='favorite' style={{opacity:0}} value={details._id}></input>
                        <button className="m-4 text-white bg-green-700 text-2xl p-2 rounded" type="submit">Remove Favorite</button>
                    </form>
                    <h3>{details.name}</h3>
                    <h2>Added by: {details.username} on {details.createdAt}</h2>
                    <img src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=130&photo_reference=' + details.photo_ref + '&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E'}></img>
                    <p>{details.description}</p>
                </div>) : (<div className="column backdrop-blur m-5 p-10 float-left w-2/5 border-2 border-white text-white">{ user.favorites || user.favorites !== [] ? "Click on your favorites to view their details here!" : "Click on Find A Bar above to start saving favorites!"}</div>)
            }
            <div className="column m-5 p-10 backdrop-blur float-left w-3/5 text-white border-2 border-white">
                <Layout>
                    <div
                        className="text-black"
                        ref={ref}
                        style={{ width: "500px", height: "400px" }}
                    />
                </Layout>
            </div>
        </div>
    )
}