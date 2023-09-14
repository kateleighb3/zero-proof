// necessary google places and map imports
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import Api from "../../utils/Api"

// search bar has an autocomplete function to recommend locations
export const PlacesAutocomplete = ({ setSelected, setResult }) => {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

    // api function to get info on place
    const searchPlace = (query) =>
    Api.getPlaceInfo(query)
        .then((res) => {
            setResult(res.data);
        })
        .catch((err) => console.log(err));

    // function for when a location is selected
    const handleSelect = async (location) => {
        setValue(location, false);

        // remove suggestions, so they are not in the way
        clearSuggestions();

        // get the latitude and longitude for the location
        const results = await getGeocode({ address: location });
        const { lat, lng } = await getLatLng(results[0]);

        // set the lat and long for the marker to use
        setSelected({ lat:lat, long:lng, place_id: results[0].place_id });

        // call to api for place info
        searchPlace(results[0].place_id);

        // empty the search bar
        setValue('');
    };
    
    // returns the search bar with ability to show suggestions by auto complete
    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Search location"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};