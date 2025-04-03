import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento #root não encontrado");
}

const root = createRoot(container); // TypeScript agora sabe que container não é null

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);