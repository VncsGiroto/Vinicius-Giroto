import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio"; // Removida a extensão .jsx

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
