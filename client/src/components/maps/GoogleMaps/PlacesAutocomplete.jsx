// necessary google places and map imports
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

export const PlacesAutocomplete = ({ setSelected }) => {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

    const handleSelect = async (location) => {
        setValue(location, false);
        clearSuggestions();

        console.log(location);

        const results = await getGeocode({ address: location });
        const { lat, lng } = await getLatLng(results[0]);

        console.log(results[0]);

        setSelected({ lat:lat, long:lng, place_id: results[0].place_id });
    };

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