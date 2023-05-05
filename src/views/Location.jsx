import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterLocations from "../components/filterLocations";
import LocationTitle from "../components/LocationTitle";
import { useLocation, useParams } from "react-router-dom";
import CardSmall from "../components/CardSmall";

const Location = () => {
  const [locationFilter, setLocationFilter] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [location, setLocation] = useState(null);
  const [allLocation, setAllLocation] = useState(null);
  const [idsCharacters, setIdsCharacters] = useState("1");
  const { id } = useParams();

  useEffect(() => {
    async function fetchLocationAndCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${id ? id : locationFilter}`
      );
      const data = await response.json();
      setLocation(data);
      const ids = await data.residents.map((url) => url.split("/").pop());
      const idsString = await ids.join(",");
      setIdsCharacters(idsString);

      const response3 = await fetch(
        `https://rickandmortyapi.com/api/character/${idsString}`
      );

      const data3 = await response3.json();
      const dataArray = Array.isArray(data3) ? data3 : [data3];
      setCharacters(dataArray);
    }

    async function fetchAllLocation() {
      const response2 = await fetch(
        "https://rickandmortyapi.com/api/location/"
      );
      const data2 = await response2.json();
      setAllLocation(data2);
    }

    Promise.all([fetchAllLocation(), fetchLocationAndCharacters()]).catch(
      (error) => {
        console.error(error);
      }
    );
  }, [locationFilter]);

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Typography
        textAlign={"center"}
        component={"h1"}
        variant="h2"
        color="white"
      >
        Location
      </Typography>
      <Box sx={{ diplay: "flex", flexDirection: "column", mt: 1 }}>
        {location && <LocationTitle location={location} />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ p: 1, marginRight: 4 }}>
            {allLocation && (
              <FilterLocations
                setLocationFilter={setLocationFilter}
                allLocation={allLocation}
              />
            )}
          </Paper>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ],
            mt: 2,
            maxWidth: 1920,
          }}
        >
          {characters?.map((character) => (
            <CardSmall key={character.id} character={character} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
