import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Layout } from "features/Layout/Layout";
import { NotFound } from "pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
