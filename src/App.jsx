import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Layout from "./layout/Layout";
import Character from "./views/Character";
import Location from "./views/Location";
import Episode from "./views/Episode";
import "./main.css";

import CharacterDetails from "./views/CharacterDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />

        <Route path="/character">
          <Route index element={<Character />} />
          <Route path=":id" element={<CharacterDetails />} />
        </Route>
        <Route path="/location">
          <Route index element={<Location />} />
          <Route path=":id" element={<Location />} />
        </Route>
        <Route path="episode" element={<Episode />} />
      </Route>
    </Routes>
  );
};

export default App;
