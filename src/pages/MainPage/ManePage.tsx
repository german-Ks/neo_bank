import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import "./style.css";

export const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
