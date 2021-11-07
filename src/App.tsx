import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ItemList, ItemPage } from "./components";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/items" />} />
      <Route path="items" element={<ItemList />} />
      <Route path="items/:id" element={<ItemPage />} />
    </Routes>
  );
};
