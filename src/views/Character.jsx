import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterCharactersStatus from "../components/FilterCharactersStatus";
import CardSmall from "../components/CardSmall";
import FilterCharacterSpecies from "../components/FilterCharacterSpecies";
import FilterCharacterGender from "../components/FilterCharacterGender";
import SearchIcon from "@mui/icons-material/Search";

const Character = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function statusFetch() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}&status=${statusFilter}&species=${speciesFilter}&gender=${genderFilter}`
      );

      const data = await response.json();
      setCharacters(data.results);
    }
    statusFetch();
  }, [statusFilter, speciesFilter, genderFilter, search]);

  function handleReset() {
    setStatusFilter("");
    setSpeciesFilter("");
    setGenderFilter("");
    window.location.reload();
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <Box sx={{ margin: "0 auto" }}>
      <Typography
        textAlign={"center"}
        component={"h1"}
        variant="h2"
        color="white"
      >
        Character
      </Typography>
      <Box sx={{ diplay: "flex", flexDirection: "column", mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ p: 1, marginRight: 4 }}>
            <TextField
              sx={{ backgroundColor: "#F3F4F6", width: "auto" }}
              size="small"
              label="Buscar personajes"
              value={search}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
          <Paper sx={{ p: 1, marginRight: 4 }}>
            <FilterCharactersStatus setStatusFilter={setStatusFilter} />
          </Paper>
          <Paper sx={{ p: 1, marginRight: 4 }}>
            <FilterCharacterSpecies setSpeciesFilter={setSpeciesFilter} />
          </Paper>
          <Paper sx={{ p: 1, marginRight: 4 }}>
            <FilterCharacterGender setGenderFilter={setGenderFilter} />
          </Paper>
          <Paper sx={{ p: 1, marginRight: 4 }}>
            <Button
              sx={{
                color: "rgb(60, 62, 68)",
                fontWeight: "800",
              }}
              onClick={handleReset}
            >
              {" "}
              Clear Filter
            </Button>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            mt: 2,
            maxWidth: 1920,
          }}
        >
          {characters &&
            characters.map((character) => (
              <CardSmall key={character.id} character={character} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Character;
