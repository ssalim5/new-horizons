import React from "react";
import { useSelector } from "react-redux";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import { defaultCenter } from "./Map";

// Search for and set a different location to center the activities results.
export default function Search({ panTo }) {
  const location = useSelector((state) => state.location )
  const {lat, lng} = Object.keys(location).length === 0 ? defaultCenter : location
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => lat, lng: () => lng},
      radius: 500,
    },
    // debounce: 300
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => async() => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    try {
      const res = await getGeocode({address: description})
      const { lat, lng } = await getLatLng(res[0])
      panTo({ lat, lng })
    } catch (error) {
      console.log(error)
    }
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter Location..."
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
}
