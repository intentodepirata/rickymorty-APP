import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterEpisode from "../components/FilterEpisode";
import EpisodeTitle from "../components/EpisodeTitle";
import { useLocation } from "react-router-dom";
import CardSmall from "../components/CardSmall";

const Episode = () => {
  const [episodeFilter, setEpisodeFilter] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState(null);
  const [allEpisode, setAllEpisode] = useState(null);
  const [idsCharacters, setIdsCharacters] = useState("1");
  console.log(episode);

  useEffect(() => {
    async function fetchEpisodeAndCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeFilter}`
      );
      const data = await response.json();
      setEpisode(data);
      const ids = await data.characters.map((url) => url.split("/").pop());
      const idsString = await ids.join(",");
      setIdsCharacters(idsString);

      const response3 = await fetch(
        `https://rickandmortyapi.com/api/character/${idsString}`
      );

      const data3 = await response3.json();
      const dataArray = Array.isArray(data3) ? data3 : [data3];
      setCharacters(dataArray);
    }

    async function fetchAllEpisode() {
      const response2 = await fetch("https://rickandmortyapi.com/api/episode/");
      const data2 = await response2.json();
      setAllEpisode(data2);
    }

    Promise.all([fetchAllEpisode(), fetchEpisodeAndCharacters()]).catch(
      (error) => {
        console.error(error);
      }
    );
  }, [episodeFilter]);

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Typography
        textAlign={"center"}
        component={"h1"}
        variant="h2"
        color="white"
      >
        Episodes
      </Typography>
      <Box sx={{ diplay: "flex", flexDirection: "column", mt: 1 }}>
        {episode && <EpisodeTitle episode={episode} />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ p: 1, marginRight: 4 }}>
            {allEpisode && (
              <FilterEpisode
                setEpisodeFilter={setEpisodeFilter}
                allEpisode={allEpisode}
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

export default Episode;
