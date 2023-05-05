import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterLocations({
  setLocationFilter,
  allLocation,
  setCharacters,
}) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setLocationFilter(event.target.value);
  };
  const total = parseInt(allLocation.info.count);
  const array = [];

  for (let i = 1; i <= total; i++) {
    array.push(i);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small">Location</InputLabel>
        <Select
          size="small"
          value={filter}
          label="Location"
          onChange={handleChange}
        >
          {array.map((locationID) => (
            <MenuItem key={locationID} value={locationID}>
              {`Location -  ${locationID}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
