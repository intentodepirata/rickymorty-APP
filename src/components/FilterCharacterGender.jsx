import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterCharacterGender({ setGenderFilter }) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setGenderFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small">Gender</InputLabel>
        <Select
          size="small"
          value={filter}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={"female"}>female</MenuItem>
          <MenuItem value={"male"}>male</MenuItem>
          <MenuItem value={"genderless"}>genderless</MenuItem>
          <MenuItem value={"unknown"}>unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
