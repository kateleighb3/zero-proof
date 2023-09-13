// create markers from given location info
export const addMarkers = ({
    locations,
    map,
  }) =>
    locations.map(({ lat, lng, name, user, img }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
      });

      const infowindow = new google.maps.InfoWindow({
        // add link that changes url to selected description/review page (by using its _id)
        // this info will actually be saved in the database instead being manually added
        // along with its lat and long
        maxWidth: 300,
        content: `<p><strong>${name}</strong></p><p>Added by: ${user}</p><img src='${img}'></img><button>click here for the full description</button>`,
      });
    
      // marker shows info when clicked
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });

      return marker;
    });