import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import CardCharacter from "../components/CardCharacter";
import { Box } from "@mui/material";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
    };
    fetchCharacterDetail();
    console.log(character);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        component={"h1"}
        variant="h2"
        color="white"
        fontWeight={"bold"}
      >
        {character?.name}
      </Typography>
      {character && <CardCharacter character={character} />}
    </Box>
  );
};

export default CharacterDetails;
