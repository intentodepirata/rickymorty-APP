import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardSmall from "../components/CardSmall";

const Main = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    async function fetchMain() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchMain();
  }, []);
  console.log(characters);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: 1920,
      }}
    >
      {characters &&
        characters.map((character) => (
          <CardSmall key={character.id} character={character} />
        ))}
    </Box>
  );
};

export default Main;
