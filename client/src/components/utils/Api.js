import axios from 'axios';

// function uses axios to call to the google places api
const getPlaceInfo = async (place_id) =>
    axios.get(`https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyCYa_WT4TQV0BTcRdm6pVYh_SbiBzn6u2E&fields=address_component,adr_address,business_status,formatted_address,geometry,icon,name,permanently_closed,photo,place_id,plus_code,type,url,utc_offset,vicinity,wheelchair_accessible_entrance`);

export default { getPlaceInfo };