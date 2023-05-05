import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";

const EpisodeTitle = ({ episode }) => {
  const { name, air_date } = episode;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Paper
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          mr: 2,
          px: 1,
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", color: "rgb(60, 62, 68)" }}
          variant="h5"
        >
          Name:
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "rgb(158, 158, 158)" }}
        >
          {name}
        </Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          gap: "8px",
          p: 1,
          alignItems: "center",
          mr: 2,
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", color: "rgb(60, 62, 68)" }}
          variant="h5"
        >
          Air date:
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", color: "rgb(158, 158, 158)" }}
          variant="h5"
        >
          {air_date}
        </Typography>
      </Paper>
    </Box>
  );
};

export default EpisodeTitle;
