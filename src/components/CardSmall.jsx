import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardSmall = ({ character, episodeName }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = character;
  console.log(location);
  return (
    <Box
      component="article"
      sx={{
        width: "600px",
        height: "220px",
        display: "flex",
        overflow: "hidden",
        background: "rgb(60, 62, 68)",
        borderRadius: "0.5rem",
        margin: "0.75rem",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <Box sx={{ flex: " 2 1 0%", width: " 100%", overflow: "hidden" }}>
        <Box component={Link} to={`/character/${id}`}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              margin: 0,
              objectPosition: "center",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              "&:hover ": {
                transform: "scale(1.2)",
              },
            }}
            component="img"
            src={image}
            alt={name}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: "3 1 0%",
          position: "relative",
          padding: "0.75rem",
          color: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            WebkitBoxPack: "start",
            justifyContent: "flex-start",
          }}
        >
          <Link to={`/character/${id}`} rel="noopener noreferrer">
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "800" }}
              variant="h2"
              color="white"
            >
              {name}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              WebkitBoxAlign: "center",
              alignItems: "center",
              textTransform: "capitalize",
            }}
          >
            <Box
              sx={{
                height: "0.5rem",
                width: "0.5rem",
                marginRight: "0.375rem",
                background:
                  status === "Alive" ? "rgb(85, 204, 68)" : "rgb(214, 61, 46)",
                borderRadius: "50%",
              }}
            ></Box>{" "}
            {status} - {species}
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1 1 0%",
            display: "flex",
            flexDirection: "column",
            WebkitBoxPack: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ color: "rgb(158, 158, 158)" }}>Last known location:</Box>
          <Box
            component={Link}
            to={`/location/${id}`}
            rel="noopener noreferrer"
            sx={{ color: "rgb(245, 245, 245)" }}
          >
            {location.name}
          </Box>
        </Box>
        <Box sx={{ flex: "1 1 0%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "rgb(158, 158, 158)" }}>First seen in:</Box>
          <Box
            sx={{ color: "rgb(245, 245, 245)" }}
            component={Link}
            to={episode[0]}
            rel="noopener noreferrer"
          >
            {origin.name}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSmall;
