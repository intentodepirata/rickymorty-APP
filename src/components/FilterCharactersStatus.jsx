import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterCharactersStatus({ setStatusFilter }) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setStatusFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small">Status</InputLabel>
        <Select
          size="small"
          value={filter}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={"alive"}>Alive</MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
