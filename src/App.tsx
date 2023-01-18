import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Layout } from "features/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
