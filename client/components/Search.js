import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

export default function Search({ moveMap }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -3.745, lng: () => -38.523},
      radius: 1*1000,
    }
    // debounce: 300
  });

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => async() => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    try {
      const res = await getGeocode({address: description})
      const { lat, lng } = await getLatLng(res[0])
      moveMap({ lat, lng })
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
