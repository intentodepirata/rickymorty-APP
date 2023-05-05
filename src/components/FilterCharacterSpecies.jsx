import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterCharacterSpecies({ setSpeciesFilter }) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setSpeciesFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small">Species</InputLabel>
        <Select
          size="small"
          value={filter}
          label="Species"
          onChange={handleChange}
        >
          <MenuItem value={"human"}>Human</MenuItem>
          <MenuItem value={"alien"}>Alien</MenuItem>
          <MenuItem value={"humanoid"}>Humanoid</MenuItem>
          <MenuItem value={"poopybutthole"}>Poopybutthole</MenuItem>
          <MenuItem value={"mythological"}>Mythological</MenuItem>
          <MenuItem value={"animal"}>Animal</MenuItem>
          <MenuItem value={"disease"}>Disease</MenuItem>
          <MenuItem value={"robot"}>Robot</MenuItem>
          <MenuItem value={"cronenberg"}>Cronenberg</MenuItem>
          <MenuItem value={"planet"}>Planet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
