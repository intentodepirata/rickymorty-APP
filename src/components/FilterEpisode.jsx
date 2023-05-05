import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterEpisode({ setEpisodeFilter, allEpisode }) {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    setEpisodeFilter(event.target.value);
  };
  const total = parseInt(allEpisode.info.count);
  const array = [];

  for (let i = 1; i <= total; i++) {
    array.push(i);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small">Episode</InputLabel>
        <Select
          size="small"
          value={filter}
          label="Episode"
          onChange={handleChange}
        >
          {array.map((EpisodeID) => (
            <MenuItem key={EpisodeID} value={EpisodeID}>
              {`Episode -  ${EpisodeID}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
