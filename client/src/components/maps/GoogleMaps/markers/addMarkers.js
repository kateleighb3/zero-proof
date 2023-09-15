// create markers from given location info
export const addMarkers = ({
    locations,
    map,
    setDetails,
    setForm
  }) =>
    locations.map((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
      });

      const infowindow = new google.maps.InfoWindow({
        // add link that changes url to selected description/review page (by using its _id)
        // this info will actually be saved in the database instead being manually added
        // along with its lat and long
        maxWidth: 300,
        content: `<p><strong>${location.name}</strong></p>`,
      });
    
      // marker shows info when clicked
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
        setDetails(location);
        setForm(null);
      });

      google.maps.event.addListener(infowindow,'closeclick',function(){
        setDetails(null);
        setForm(null);
      });

      return marker;
    });